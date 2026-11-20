// Trình kết xuất HUD & Toàn bộ Cửa sổ Giao Diện Trong Game chuẩn LibGDX (VeHUD + HUDPopupRenderer + HUDRongThan)
// KHÔNG sử dụng thẻ HTML/Tailwind giả — 100% vẽ bằng Texture thật từ /assets/hud/giaodientrong/ & /assets/

import { assets } from './assetLoader';
import {
  VIRTUAL_W,
  VIRTUAL_H,
  PLANET_DEFS,
  PLANET_SKILLS,
  ITEM_CATALOG,
  SHOP_TABS,
  STORY_QUESTS,
  MAPS_CONFIG,
  WORLD_TOPOLOGY_LINES,
  GIFTCODES,
  formatNroNum
} from './nroData';
import {
  DATANRO_MAPS_CATALOG,
  DATANRO_MOBS_CATALOG,
  DATANRO_SERVERS
} from './dataNroArchive';
import { sound } from './audio';
import { fetchLeaderboard, saveCharacterData, sendChatMessage } from '../services/supabase';

export const JOYSTICK_CX = 100;
export const JOYSTICK_CY = 100;
export const JOYSTICK_R_NGOAI = 65;
export const JOYSTICK_R_TRONG = 30;
export const JOYSTICK_NGUONG = 16;

// Cụm nút góc phải dưới xếp hình tam giác chuẩn VeHUD.java dòng 115-125
export const NUT_ATTACK_W = 90;
export const NUT_ATTACK_H = 90;
export const NUT_ATTACK_X = VIRTUAL_W - NUT_ATTACK_W - 15; // 915
export const NUT_ATTACK_Y = 25;

export const NUT_CHANGE_W = 55;
export const NUT_CHANGE_H = 55;
export const NUT_CHANGE_X = NUT_ATTACK_X + 32; // 947
export const NUT_CHANGE_Y = NUT_ATTACK_Y + NUT_ATTACK_H + 12; // 127

export const NUT_DAUTHAN_W = 55;
export const NUT_DAUTHAN_H = 55;
export const NUT_DAUTHAN_X = NUT_ATTACK_X - NUT_DAUTHAN_W - 12; // 848
export const NUT_DAUTHAN_Y = NUT_ATTACK_Y - 10; // 15

export class NroHudRenderer {
  constructor(engine) {
    this.engine = engine;
    // Object Pool cho Hit Regions (không cấp phát mảng mới 60 lần/giây tránh GC lag!)
    this._hitPool = [];
    this.hitCount = 0;

    // Bộ nhớ đệm LRU Offscreen Bitmap cho chữ viền (giảm 95% chi phí CPU strokeText/fillText mỗi frame!)
    this._textCache = new Map();
    this._textCacheMax = 320;
    this._measureCanvas = typeof document !== 'undefined' ? document.createElement('canvas') : null;
    this._measureCtx = this._measureCanvas ? this._measureCanvas.getContext('2d') : null;

    // Nút điều hướng ảo kéo thả (Joystick + Cụm tam giác Tấn công/Đổi mục tiêu/Đậu thần)
    const savedCtrl = localStorage.getItem('nro_virtual_controls');
    this.showVirtualControls = savedCtrl === null ? true : savedCtrl === 'true';
    this.joystickActive = false;
    this.joystickDx = 0;
    this.joystickDy = 0;
    this.attackClickTimer = 0;
    this.changeClickTimer = 0;
    this.senzuClickTimer = 0;
    // Chiều cao nền trắng hồi chiêu Đậu Thần bên dưới lòng trái tim odauthan.png chuẩn VeHUD.java (0 -> 53 trong 5s)
    this.senzuFillH = 53;

    // Trạng thái cửa sổ Popup Nhân Vật (popupnhanvat.jpg)
    this.popupOpen = false;
    this.popupTab = 1; // 0: Nhiệm vụ, 1: Hành trang, 2: Kỹ năng, 3: Đệ tử, 4: Chức năng
    this.selectedBagIdx = -1;
    this.selectedEquipSlot = null;
    this.selectedSkillIdx = 0;

    // Trạng thái Cửa Hàng / Rương Đồ / Pha Lê / Gacha / Bảng Xếp Hạng / Sơ Đồ Thế Giới / Từ Điển DataNRO
    this.activePanel = null; // null | 'SHOP' | 'CHEST' | 'CRYSTAL' | 'GACHA' | 'LEADERBOARD' | 'WORLD_MAP' | 'DATANRO_WIKI'
    this.capsuleRegionIdx = 0;
    this.wikiTab = 0; // 0: 187 Map, 1: 97 Quái, 2: 25 Server
    this.wikiPage = 0;
    this.shopTabIdx = 0;
    this.selectedShopItemId = null;
    this.crystalEquipSlot = null;
    this.crystalItemIdx = -1;

    // Vòng quay Hải Đăng
    this.gachaSpinning = false;
    this.gachaTimer = 0;
    this.gachaFrame = 1;
    this.gachaResult = null;

    // Trạng thái Hộp thoại NPC chuẩn NPC_KHUNG_CHUNG
    this.npcDialog = null; // { npc, text, buttons: [{ label, action }] }

    // Trạng thái Khung Chat / Nhập Giftcode (khungchat.png)
    this.chatOpen = false;
    this.chatMode = 'CHAT'; // 'CHAT' | 'GIFTCODE'
    this.chatInputText = '';

    // Trạng thái Rồng Thần 9 khúc (HUDRongThan)
    this.shenronActive = false;
    this.shenronTimer = 0;

    // Bảng xếp hạng từ Supabase
    this.leaderboardRows = [];
    this.leaderboardLoading = false;

    // Thông báo nổi kiểu NRO (giữa trên màn hình)
    this.banners = [];
  }

  pushBanner(text, color = '#fef08a') {
    this.banners.push({ text, color, ttl: 3.2 });
    if (this.banners.length > 4) this.banners.shift();
  }

  closeAllModals() {
    this.popupOpen = false;
    this.activePanel = null;
    this.npcDialog = null;
    this.chatOpen = false;
    this.shenronActive = false;
    this.selectedBagIdx = -1;
    this.selectedEquipSlot = null;
    if (this.engine.onTextInputToggle) {
      this.engine.onTextInputToggle(false, '');
    }
  }

  isBlockingWorldClick() {
    return Boolean(
      this.npcDialog ||
      this.shenronActive ||
      this.chatOpen ||
      this.activePanel === 'GACHA' ||
      this.activePanel === 'LEADERBOARD' ||
      this.activePanel === 'WORLD_MAP' ||
      this.activePanel === 'DATANRO_WIKI'
    );
  }

  // ==================== TIỆN ÍCH VẼ TOẠ ĐỘ LIBGDX (GỐC DƯỚI-TRÁI) ====================
  gyToCy(gy, gh = 0) {
    return VIRTUAL_H - gy - gh;
  }

  drawTex(ctx, relPath, gx, gy, gw, gh) {
    const img = assets.tex(relPath);
    if (!img) return false;
    ctx.drawImage(img, gx, VIRTUAL_H - gy - gh, gw, gh);
    return true;
  }

  drawTexCropX(ctx, relPath, gx, gy, fullW, gh, ratio) {
    const r = Math.max(0, Math.min(1, ratio));
    if (r <= 0.002) return;
    const img = assets.tex(relPath);
    if (!img) return;
    const sw = Math.max(1, Math.floor(img.naturalWidth * r));
    const dw = Math.max(1, fullW * r);
    ctx.drawImage(img, 0, 0, sw, img.naturalHeight, gx, VIRTUAL_H - gy - gh, dw, gh);
  }

  fillRectGdx(ctx, gx, gy, gw, gh, fillStyle, strokeStyle = null, lineWidth = 2) {
    const cy = VIRTUAL_H - gy - gh;
    if (fillStyle) {
      ctx.fillStyle = fillStyle;
      ctx.fillRect(gx, cy, gw, gh);
    }
    if (strokeStyle) {
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidth;
      ctx.strokeRect(gx, cy, gw, gh);
    }
  }

  drawText(ctx, text, gx, gy, opts = {}) {
    const str = String(text ?? '');
    if (!str) return;
    const {
      size = 13,
      color = '#ffffff',
      stroke = '#000000',
      strokeWidth = 2.5,
      align = 'left',
      bold = true,
      font = 'DragonBoy, sans-serif'
    } = opts;

    const cy = VIRTUAL_H - gy;

    // Tra cứu LRU Offscreen Text Sprite Cache (O(1) — biến tác vụ dựng font vector nặng thành 1 lệnh blit ảnh GPU siêu nhẹ!)
    if (this._measureCtx && str.length <= 72) {
      const sw = stroke && strokeWidth > 0 ? strokeWidth : 0;
      const key = `${str}|${size}|${color}|${sw > 0 ? stroke : ''}|${sw}|${bold ? 1 : 0}|${font}`;
      let entry = this._textCache.get(key);

      if (entry) {
        // Làm mới thứ tự LRU
        this._textCache.delete(key);
        this._textCache.set(key, entry);
      } else {
        const scale = 1.5;
        const fontSpec = `${bold ? 'bold ' : ''}${size}px ${font}`;
        const mctx = this._measureCtx;
        mctx.font = fontSpec;
        const metrics = mctx.measureText(str);
        const padX = Math.ceil(sw + 4);
        const ascent = Math.ceil((metrics.actualBoundingBoxAscent || size * 0.88) + sw + 2);
        const descent = Math.ceil((metrics.actualBoundingBoxDescent || size * 0.32) + sw + 2);
        const logicalW = Math.max(4, Math.ceil(metrics.width) + padX * 2);
        const logicalH = Math.max(4, ascent + descent);

        const off = document.createElement('canvas');
        off.width = Math.max(1, Math.ceil(logicalW * scale));
        off.height = Math.max(1, Math.ceil(logicalH * scale));
        const octx = off.getContext('2d');
        octx.scale(scale, scale);
        octx.font = fontSpec;
        octx.textAlign = 'left';
        octx.textBaseline = 'alphabetic';
        if (sw > 0) {
          octx.strokeStyle = stroke;
          octx.lineWidth = sw;
          octx.lineJoin = 'round';
          octx.strokeText(str, padX, ascent);
        }
        octx.fillStyle = color;
        octx.fillText(str, padX, ascent);

        entry = { canvas: off, logicalW, logicalH, textW: metrics.width, padX, ascent };
        if (this._textCache.size >= this._textCacheMax) {
          const oldestKey = this._textCache.keys().next().value;
          this._textCache.delete(oldestKey);
        }
        this._textCache.set(key, entry);
      }

      let drawX = gx - entry.padX;
      if (align === 'center') drawX = gx - entry.padX - entry.textW * 0.5;
      else if (align === 'right') drawX = gx - entry.padX - entry.textW;

      ctx.drawImage(entry.canvas, drawX, cy - entry.ascent, entry.logicalW, entry.logicalH);
      return;
    }

    ctx.save();
    ctx.font = `${bold ? 'bold ' : ''}${size}px ${font}`;
    ctx.textAlign = align;
    ctx.textBaseline = 'alphabetic';
    if (stroke && strokeWidth > 0) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = strokeWidth;
      ctx.lineJoin = 'round';
      ctx.strokeText(str, gx, cy);
    }
    ctx.fillStyle = color;
    ctx.fillText(str, gx, cy);
    ctx.restore();
  }

  drawWrappedText(ctx, text, gx, gyTop, maxWidth, lineHeight = 18, opts = {}) {
    const words = String(text || '').split(' ');
    let line = '';
    let curY = gyTop;
    const size = opts.size || 13;
    const font = opts.font || 'DragonBoy, sans-serif';
    const mctx = this._measureCtx || ctx;
    mctx.font = `${opts.bold !== false ? 'bold ' : ''}${size}px ${font}`;
    for (let i = 0; i < words.length; i++) {
      const testLine = line ? `${line} ${words[i]}` : words[i];
      if (mctx.measureText(testLine).width > maxWidth && line) {
        this.drawText(ctx, line, gx, curY, opts);
        line = words[i];
        curY -= lineHeight;
      } else {
        line = testLine;
      }
    }
    if (line) {
      this.drawText(ctx, line, gx, curY, opts);
      curY -= lineHeight;
    }
    return curY;
  }

  addHit(id, gx, gy, gw, gh, onClick) {
    let slot = this._hitPool[this.hitCount];
    if (!slot) {
      slot = { id: '', x: 0, y: 0, w: 0, h: 0, onClick: null };
      this._hitPool[this.hitCount] = slot;
    }
    slot.id = id;
    slot.x = gx;
    slot.y = gy;
    slot.w = gw;
    slot.h = gh;
    slot.onClick = onClick;
    this.hitCount++;
  }

  handlePointerDown(gx, gy) {
    // Duyệt từ trên xuống dưới trong Object Pool (phần tử vẽ sau ưu tiên nhận click trước)
    for (let i = this.hitCount - 1; i >= 0; i--) {
      const r = this._hitPool[i];
      if (gx >= r.x && gx <= r.x + r.w && gy >= r.y && gy <= r.y + r.h) {
        sound.playClick();
        r.onClick();
        return true;
      }
    }
    // Nếu đang mở popup bên trái và click vào vùng nền popup thì chặn click xuống đất
    if (this.popupOpen && gx <= (this.isDualPanel() ? 710 : 355)) {
      return true;
    }
    if (this.isBlockingWorldClick()) {
      return true;
    }
    return false;
  }

  isDualPanel() {
    return this.activePanel === 'SHOP' || this.activePanel === 'CHEST' || this.activePanel === 'CRYSTAL';
  }

  // ==================== CẬP NHẬT LOGIC HUD ====================
  update(dt) {
    for (let i = this.banners.length - 1; i >= 0; i--) {
      this.banners[i].ttl -= dt;
      if (this.banners[i].ttl <= 0) this.banners.splice(i, 1);
    }

    if (this.attackClickTimer > 0) this.attackClickTimer = Math.max(0, this.attackClickTimer - dt);
    if (this.changeClickTimer > 0) this.changeClickTimer = Math.max(0, this.changeClickTimer - dt);
    if (this.senzuClickTimer > 0) this.senzuClickTimer = Math.max(0, this.senzuClickTimer - dt);
    if (this.senzuFillH < 53) this.senzuFillH = Math.min(53, this.senzuFillH + 10.6 * dt);

    if (this.shenronActive) {
      this.shenronTimer += dt;
    }

    if (this.gachaSpinning) {
      this.gachaTimer += dt;
      this.gachaFrame = (Math.floor(this.gachaTimer * 24) % 17) + 1;
      if (this.gachaTimer >= 2.1) {
        this.gachaSpinning = false;
        this.finishGachaSpin();
      }
    }
  }

  // ==================== TƯƠNG TÁC NPC CHUẨN CỐT TRUYỆN ====================
  openNpcDialog(npc) {
    const p = this.engine.player;
    const quest = STORY_QUESTS.find((q) => q.id === p.questId);

    if (npc.id === 'ruong_do') {
      this.popupOpen = true;
      this.popupTab = 1;
      this.activePanel = 'CHEST';
      return;
    }

    if (npc.id === 'dui_ga') {
      p.hp = p.maxHp;
      p.ki = p.maxKi;
      npc.eaten = true;
      sound.playHeal();
      this.engine.advanceQuestEvent('eat_meat', 'dui_ga', 1);
      this.pushBanner('Bạn vừa ăn Đùi Gà Nướng thơm phức! Hồi 100% HP & KI!', '#86efac');
      return;
    }

    if (npc.id === 'tau_vu_tru') {
      sound.playDialog();
      const curMap = this.engine.currentMapId;
      const destinations = [
        { mapId: 3, x: 520, y: 175, label: 'Trạm Vũ Trụ\nTrái Đất' },
        { mapId: 21, x: 320, y: 175, label: 'Trạm Vũ Trụ\nNamếc' },
        { mapId: 26, x: 320, y: 175, label: 'Trạm Vũ Trụ\nXayda' },
        { mapId: 28, x: 320, y: 175, label: 'Siêu Thị\nKý Gửi Đạt' },
        { mapId: 31, x: 240, y: 175, label: 'Hành Tinh\nCold (Tuyết)' },
        { mapId: 44, x: 260, y: 175, label: 'Hành Tinh\nM-2 (Robot)' },
        { mapId: 45, x: 260, y: 175, label: 'Hành Tinh\nPotaufeu' }
      ];
      const btns = destinations
        .filter((d) => d.mapId !== curMap)
        .map((d) => ({
          label: d.label,
          action: () => {
            this.npcDialog = null;
            this.engine.flyBySpaceship(d.mapId, d.x, d.y);
          }
        }));
      btns.push({ label: 'Đóng', action: () => { this.npcDialog = null; } });

      this.npcDialog = {
        npc,
        avt: npc.tex || 'vatpham/taubay/myTexture2dmaybay4b.png',
        text: 'Trục Giao Thông Liên Hành Tinh đã sẵn sàng khởi hành!\nChiến binh muốn đáp phi thuyền tới hành tinh nào?',
        buttons: btns
      };
      return;
    }

    if (npc.id === 'dau_traidat') {
      this.npcDialog = {
        npc,
        avt: `nhanvat/npc/dau_traidat/caydau${Math.min(10, Math.max(1, p.senzuCount || 5))}.png`,
        text: `Cây Đậu Thần Cấp ${p.senzuLevel || 1}\nHiện có: ${p.senzuCount} hạt Đậu Thần trong túi.\nĐậu thần giúp hồi phục tức thì HP và KI khi chiến đấu!`,
        buttons: [
          {
            label: 'Thu Hoạch',
            action: () => {
              p.senzuCount = 10 + (p.senzuLevel - 1) * 2;
              sound.playHeal();
              this.engine.advanceQuestEvent('harvest_senzu', 'dau_traidat', 1);
              this.pushBanner(`Đã thu hoạch đầy ${p.senzuCount} Đậu Thần!`, '#86efac');
              this.npcDialog = null;
            }
          },
          {
            label: `Nâng Cấp\n(${(p.senzuLevel || 1) * 15}K Vàng)`,
            action: () => {
              const cost = (p.senzuLevel || 1) * 15000;
              if (p.gold < cost) {
                this.pushBanner('Không đủ Vàng để nâng cấp Cây Đậu Thần!', '#fca5a5');
                return;
              }
              p.gold -= cost;
              p.senzuLevel = (p.senzuLevel || 1) + 1;
              p.senzuCount = 10 + (p.senzuLevel - 1) * 2;
              sound.playHeal();
              this.pushBanner(`Cây Đậu Thần đã lên Cấp ${p.senzuLevel}!`, '#fde047');
              this.npcDialog = null;
            }
          },
          { label: 'Đóng', action: () => { this.npcDialog = null; } }
        ]
      };
      return;
    }

    if (npc.id === 'ong_gohan' || npc.id === 'ong_moori' || npc.id === 'ong_paragus') {
      sound.playDialog();
      const curStep = quest ? quest.steps[p.questStep || 0] : null;
      const elderTitle = npc.name;
      let msg = `Chào hậu bối ${p.name}! Hãy chăm chỉ rèn luyện từ những đòn căn bản nhất để bảo vệ quê hương nhé!`;
      const btns = [];

      const canReport = quest && curStep && (
        curStep.type === 'talk_elder' ||
        (curStep.type === 'talk' && curStep.targetId === npc.id)
      );

      if (canReport) {
        msg = curStep.dialogReply || `Khá lắm ${p.name}! Con đã hoàn thành nhiệm vụ "${quest.title}"!`;
        btns.push({
          label: 'Báo Cáo\nNhận Thưởng',
          action: () => {
            this.engine.advanceQuestEvent('talk', npc.id, 1);
            this.npcDialog = null;
          }
        });
      } else if (quest && curStep) {
        msg = `[${quest.era}]\nNhiệm vụ: ${quest.title}\n- ${curStep.text} (${Math.min(p.questProgress, curStep.count)}/${curStep.count})`;
      }

      btns.push({
        label: 'Hồi Phục\n100% HP/KI',
        action: () => {
          p.hp = p.maxHp;
          p.ki = p.maxKi;
          sound.playHeal();
          this.pushBanner(`${elderTitle} đã truyền khí hồi 100% HP & KI cho bạn!`, '#86efac');
          this.npcDialog = null;
        }
      });
      btns.push({ label: 'Đóng', action: () => { this.npcDialog = null; } });

      const avtPath = npc.id === 'ong_paragus'
        ? 'nhanvat/npc/admin_dungle/avt.png'
        : 'nhanvat/npc/ong_gohan/dau.png';
      this.npcDialog = { npc, avt: avtPath, text: msg, buttons: btns };
      return;
    }

    if (npc.id === 'admin_dungle') {
      this.npcDialog = {
        npc,
        avt: 'nhanvat/npc/admin_dungle/avt.png',
        text: `Xin chào anh em ${p.name}! Mình là Admin Sơn!\nNhập ngay Giftcode độc quyền của phòng anh em (Sơn•Quyết•Bảo•Hùng•Đạt•Khánh•Ba Chíp):\nANHEMPHONG | BACHIP | TANTHU | NROWEB | NGOCRONG`,
        buttons: [
          {
            label: 'Nhập Giftcode',
            action: () => {
              this.npcDialog = null;
              this.openChatBox('GIFTCODE');
            }
          },
          {
            label: 'Hỗ Trợ Tân Thủ',
            action: () => {
              if (p.claimedStarterGift) {
                this.pushBanner('Bạn đã nhận Quà Admin Sơn rồi! Nhập thêm code ANHEMPHONG nhé!', '#fde047');
              } else {
                p.claimedStarterGift = true;
                p.gold += 20000;
                p.gem += 50;
                p.senzuCount += 8;
                this.engine.addItemToBag('capsule_vip');
                sound.playCoin();
                this.pushBanner('Quà Admin Sơn: +20K Vàng, +50 Ngọc, +8 Đậu & Viên Capsule VIP!', '#86efac');
              }
              this.npcDialog = null;
            }
          },
          {
            label: 'BXH Cao Thủ',
            action: () => {
              this.npcDialog = null;
              this.openLeaderboard();
            }
          },
          { label: 'Đóng', action: () => { this.npcDialog = null; } }
        ]
      };
      return;
    }

    if (npc.id === 'ba_chip') {
      sound.playDialog();
      this.npcDialog = {
        npc,
        avt: 'nhanvat/npc/admin_huykhoi/avt.png',
        text: `Yo anh em ${p.name}! Đại Ca Ba Chíp đây!\nAnh em trong phòng (Sơn, Quyết, Bảo, Hùng, Đạt, Khánh, Ba Chíp) muốn nhận Buff +50% Toàn Bộ Sức Mạnh hay bay thẳng sang Ngũ Hành Sơn & Phòng Tập Thời Gian x2 TNSM?`,
        buttons: [
          {
            label: 'Buff Anh Em\n(+50% Tất Cả)',
            action: () => {
              p.buffs.atk = 300;
              p.buffs.hp = 300;
              p.buffs.ki = 300;
              this.engine.recalcStats();
              p.hp = p.maxHp;
              p.ki = p.maxKi;
              sound.playSuperSaiyan();
              this.pushBanner('Đại Ca Ba Chíp chúc phúc: +50% Công/HP/KI trong 5 phút!', '#fde047');
              this.npcDialog = null;
            }
          },
          {
            label: 'Tới Ngũ\nHành Sơn',
            action: () => {
              this.npcDialog = null;
              this.engine.changeMap(43, 140, 175);
            }
          },
          {
            label: 'Phòng Tập\n(x2 TNSM)',
            action: () => {
              this.npcDialog = null;
              this.engine.changeMap(36, 280, 200);
            }
          },
          { label: 'Đóng', action: () => { this.npcDialog = null; } }
        ]
      };
      return;
    }

    if (npc.id === 'quy_lao_kame' || npc.id === 'truong_lao_guru' || npc.id === 'vua_vegeta') {
      sound.playDialog();
      const curStep = quest ? quest.steps[p.questStep || 0] : null;
      const btns = [];
      let msg = `Chào hậu bối ${p.name}! Ta là ${npc.name}.\nHãy chăm chỉ tu luyện Sức Mạnh & Tiềm Năng để lĩnh hội thêm các bí kíp võ công trấn phái nhé!`;

      const canReport = quest && curStep && (
        curStep.type === 'talk_master' ||
        (curStep.type === 'talk' && curStep.targetId === npc.id)
      );

      if (canReport) {
        msg = curStep.dialogReply || `Khá lắm đệ tử ${p.name}! Hãy nhận phần thưởng nhiệm vụ của con!`;
        btns.push({
          label: curStep.unlockSkill2 ? 'Bái Sư &\nHọc Chưởng' : 'Báo Cáo\nNhận Thưởng',
          action: () => {
            this.engine.advanceQuestEvent('talk', npc.id, 1);
            this.npcDialog = null;
          }
        });
      } else if (quest && curStep) {
        msg = `[${quest.era}]\nNhiệm vụ: ${quest.title}\n- ${curStep.text}`;
      }

      btns.push({
        label: 'Học Bí Kíp\nVõ Công',
        action: () => {
          this.npcDialog = null;
          this.popupOpen = true;
          this.popupTab = 2;
        }
      });
      if (npc.id === 'quy_lao_kame') {
        btns.push({
          label: 'Phó Bản\nKho Báu',
          action: () => {
            this.npcDialog = null;
            this.engine.changeMap(33, 100, 175);
          }
        });
      }
      btns.push({
        label: 'Hồi Phục\n100% HP/KI',
        action: () => {
          p.hp = p.maxHp;
          p.ki = p.maxKi;
          sound.playHeal();
          this.pushBanner(`${npc.name} truyền khí hồi 100% HP & KI!`, '#86efac');
          this.npcDialog = null;
        }
      });
      btns.push({ label: 'Đóng', action: () => { this.npcDialog = null; } });

      const masterAvt = npc.id === 'quy_lao_kame'
        ? 'nhanvat/npc/quy_lao_kame.png'
        : (npc.id === 'vua_vegeta' ? 'nhanvat/npc/admin_huykhoi/avt.png' : 'nhanvat/npc/ong_gohan/dau.png');

      this.npcDialog = {
        npc,
        avt: masterAvt,
        text: msg,
        buttons: btns
      };
      return;
    }

    if (npc.id === 'bo_mong') {
      sound.playDialog();
      const curStep = quest ? quest.steps[p.questStep || 0] : null;
      const btns = [];
      let msg = `Chào chiến binh ${p.name}! Ngay chính giữa Rừng Karin (bên phải ta) là Cột Tháp Karin dẫn thẳng lên Tháp Karin và Thần Điện!`;

      if (quest && curStep && curStep.type === 'talk' && curStep.targetId === 'bo_mong') {
        msg = curStep.dialogReply;
        btns.push({
          label: 'Nhận Thử Thách',
          action: () => {
            this.engine.advanceQuestEvent('talk', 'bo_mong', 1);
            this.npcDialog = null;
          }
        });
      }

      btns.push({
        label: 'Lên Đỉnh\nTháp Karin',
        action: () => {
          this.npcDialog = null;
          this.engine.changeMap(11, 700, 220);
        }
      });
      btns.push({ label: 'Đóng', action: () => { this.npcDialog = null; } });

      this.npcDialog = {
        npc,
        avt: 'nhanvat/npc/admin_huykhoi/avt.png',
        text: msg,
        buttons: btns
      };
      return;
    }

    if (npc.id === 'than_meo_karin') {
      sound.playDialog();
      const curStep = quest ? quest.steps[p.questStep || 0] : null;
      const needFight = quest && curStep && curStep.targetId === 'boss_than_meo';
      const msg = needFight
        ? `Meow~ Con leo được tới tận Đỉnh Tháp Karin này thật đáng khen!\nHãy bấm "Thách Đấu" và đánh thắng ta trước khi xuống chân tháp hạ Sát Thủ Tàu Pảy Pảy!`
        : `Meow~ Đây là Tháp Karin! Phía trên đỉnh tháp có Gậy Như Ý nối thẳng lên Thần Điện của Thượng Đế và Thiên Sứ Whis!`;

      this.npcDialog = {
        npc,
        avt: 'nhanvat/npc/than_meo_karin.png',
        text: msg,
        buttons: [
          {
            label: 'Thách Đấu\nThần Mèo',
            action: () => {
              this.npcDialog = null;
              this.engine.spawnKorinChallengeBoss();
            }
          },
          {
            label: 'Lên\nThần Điện',
            action: () => {
              this.npcDialog = null;
              this.engine.changeMap(12, 750, 200);
            }
          },
          {
            label: 'Uống Siêu\nThần Thủy',
            action: () => {
              p.hp = p.maxHp;
              p.ki = p.maxKi;
              p.buffs.atk = 180;
              this.engine.recalcStats();
              sound.playHeal();
              this.pushBanner('Uống Siêu Thần Thủy! Hồi 100% HP/KI & +50% Sức đánh!', '#fde047');
              this.npcDialog = null;
            }
          },
          {
            label: 'Xuống Chân\nTháp Karin',
            action: () => {
              this.npcDialog = null;
              this.engine.changeMap(10, 1000, 220);
            }
          },
          { label: 'Đóng', action: () => { this.npcDialog = null; } }
        ]
      };
      return;
    }

    if (npc.id === 'calich' || npc.id === 'calich_back') {
      sound.playDialog();
      if (npc.id === 'calich_back') {
        this.npcDialog = {
          npc,
          avt: 'nhanvat/npc/npc_calich.png',
          text: `Cỗ Máy Thời Gian Capsule đã nạp đủ năng lượng!\nBạn muốn quay trở về dòng thời gian Hiện Tại chứ?`,
          buttons: [
            {
              label: 'Về Hiện Tại',
              action: () => {
                const retMap = p.returnMapFromFuture || 2;
                this.npcDialog = null;
                this.engine.flyBySpaceship(retMap, 420, 175);
              }
            },
            { label: 'Ở Lại', action: () => { this.npcDialog = null; } }
          ]
        };
        return;
      }

      const curStep = quest ? quest.steps[p.questStep || 0] : null;
      let msg = `Tôi là Calích (Future Trunks) đến từ 20 năm sau!\nThế giới Tương Lai đang bị Black Goku & Super Black Goku Rosé hủy diệt — hãy lên Cỗ Máy Thời Gian cùng tôi đoạt Nhẫn Thời Không!`;
      if (quest && curStep && curStep.type === 'talk' && curStep.targetId === 'calich') {
        msg = curStep.dialogReply;
      }
      this.npcDialog = {
        npc,
        avt: 'nhanvat/npc/npc_calich.png',
        text: msg,
        buttons: [
          {
            label: 'Đi Tương Lai\n(Cỗ Máy TG)',
            action: () => {
              p.returnMapFromFuture = this.engine.currentMapId;
              this.engine.advanceQuestEvent('talk', 'calich', 1);
              this.npcDialog = null;
              this.engine.flyBySpaceship(30, 220, 175);
            }
          },
          { label: 'Đóng', action: () => { this.npcDialog = null; } }
        ]
      };
      return;
    }

    if (npc.id === 'whis') {
      sound.playDialog();
      const inBill = this.engine.currentMapId === 14;
      const curStep = quest ? quest.steps[p.questStep || 0] : null;
      let msg = inBill
        ? `Hoan nghênh ${p.name} tới Hành Tinh Bill của Ngài Thần Hủy Diệt Beerus!\nTại đây ta có thể trao đổi Trang Bị Hủy Diệt & Thiên Sứ tối thượng cho con!`
        : `Ồ hố hố~ Ta là Thiên Sứ Whis!\nCon muốn theo ta bay lên Hành Tinh Bill để tu luyện thần lực và đổi Trang Bị Hủy Diệt, Thiên Sứ chứ?`;
      if (quest && curStep && curStep.type === 'talk' && curStep.targetId === 'whis') {
        msg = curStep.dialogReply;
      }

      const btns = [];
      if (!inBill) {
        btns.push({
          label: 'Bay Tới\nHành Tinh Bill',
          action: () => {
            this.engine.advanceQuestEvent('talk', 'whis', 1);
            this.npcDialog = null;
            this.engine.changeMap(14, 260, 175);
          }
        });
      } else {
        if (quest && curStep && curStep.type === 'talk' && curStep.targetId === 'whis') {
          btns.push({
            label: 'Thọ Giáo\nThiên Sứ Whis',
            action: () => {
              this.engine.advanceQuestEvent('talk', 'whis', 1);
              this.npcDialog = null;
            }
          });
        }
        btns.push({
          label: 'Về Lại\nThần Điện',
          action: () => {
            this.npcDialog = null;
            this.engine.changeMap(12, 930, 200);
          }
        });
      }
      btns.push({
        label: 'Đổi Trang Bị\nHủy Diệt',
        action: () => {
          this.npcDialog = null;
          this.popupOpen = true;
          this.popupTab = 1;
          this.activePanel = 'SHOP';
          this.shopTabIdx = 0;
        }
      });
      btns.push({ label: 'Đóng', action: () => { this.npcDialog = null; } });

      this.npcDialog = { npc, avt: 'nhanvat/npc/npc_whis.png', text: msg, buttons: btns };
      return;
    }

    if (npc.id === 'mr_popo' || npc.id === 'linh_doc_nhan' || npc.id === 'thuong_de' || npc.id === 'bac_kaio' || npc.id === 'osin') {
      sound.playDialog();
      if (npc.id === 'mr_popo') {
        this.npcDialog = {
          npc,
          avt: 'nhanvat/npc/admin_dungle/avt.png',
          text: `Chào ${p.name}! Ta là Hộ Vệ Hùng trên Thần Điện!\nNgươi muốn vào [Phó Bản: Khí Gas Hủy Diệt] săn Hatchiyack hay bước vào [Phòng Tập Thời Gian x2 TNSM] cùng Sư Huynh Quyết?`,
          buttons: [
            {
              label: 'Phó Bản\nKhí Gas',
              action: () => {
                this.npcDialog = null;
                this.engine.changeMap(35, 100, 175);
              }
            },
            {
              label: 'Phòng Tập\n(x2 TNSM)',
              action: () => {
                this.npcDialog = null;
                this.engine.changeMap(36, 280, 200);
              }
            },
            { label: 'Đóng', action: () => { this.npcDialog = null; } }
          ]
        };
        return;
      }
      if (npc.id === 'linh_doc_nhan') {
        this.npcDialog = {
          npc,
          avt: 'nhanvat/npc/admin_dungle/avt.png',
          text: `Ta là Tướng Quân Khánh trấn thủ cửa ải Đông Karin!\nPhía trước là [Phó Bản: Doanh Trại Độc Nhãn] — đánh bại Độc Nhãn Đại Tướng sẽ rơi rất nhiều Vàng, Tiềm Năng và Ngọc Rồng!`,
          buttons: [
            {
              label: 'Đột Kích\nĐộc Nhãn',
              action: () => {
                this.npcDialog = null;
                this.engine.changeMap(34, 100, 175);
              }
            },
            { label: 'Đóng', action: () => { this.npcDialog = null; } }
          ]
        };
        return;
      }
      if (npc.id === 'thuong_de') {
        this.npcDialog = {
          npc,
          avt: 'nhanvat/npc/admin_haidang/avt.png',
          text: `Chào anh em ${p.name}! Thần Tài Hùng trên Thần Điện đây!\nHãy quay Vòng Quay Thượng Đế săn Cải Trang VIP, hoặc rẽ phải qua Con Đường Rắn Độc & Địa Ngục!`,
          buttons: [
            {
              label: 'Vòng Quay\nThần Tài Hùng',
              action: () => {
                this.npcDialog = null;
                this.popupOpen = false;
                this.activePanel = 'GACHA';
                this.gachaResult = null;
              }
            },
            { label: 'Đóng', action: () => { this.npcDialog = null; } }
          ]
        };
        return;
      }
      if (npc.id === 'bac_kaio') {
        this.npcDialog = {
          npc,
          avt: 'nhanvat/npc/ong_gohan/dau.png',
          text: `Ồ, con đã chạy hết Con Đường Rắn Độc tới Hành Tinh Kaio của ta!\nHãy mở bảng Võ Công lĩnh hội tuyệt kỹ Kaioken và Quả Cầu Kênh Khi nhé!`,
          buttons: [
            {
              label: 'Lĩnh Hội\nTuyệt Kỹ',
              action: () => {
                this.npcDialog = null;
                this.popupOpen = true;
                this.popupTab = 2;
              }
            },
            { label: 'Đóng', action: () => { this.npcDialog = null; } }
          ]
        };
        return;
      }
      if (npc.id === 'osin') {
        this.npcDialog = {
          npc,
          avt: 'nhanvat/npc/admin_huykhoi/avt.png',
          text: `Tôi là Thần Tối Cao Kaioshin (Osin)!\nPhù thủy Babidi đã giải phong ấn Ma Nhân Mabư ngay phía sâu trong Phi Thuyền — hãy đánh bại Mabư để thu phục Quả Trứng Đệ Tử!`,
          buttons: [
            {
              label: 'Nhận Phù Hộ\n(+50% Công)',
              action: () => {
                p.buffs.atk = 300;
                p.hp = p.maxHp;
                p.ki = p.maxKi;
                this.engine.recalcStats();
                sound.playSuperSaiyan();
                this.pushBanner('Thần Osin chúc phúc: Hồi 100% HP/KI & +50% Sức đánh!', '#fde047');
                this.npcDialog = null;
              }
            },
            { label: 'Đóng', action: () => { this.npcDialog = null; } }
          ]
        };
        return;
      }
    }

    if (npc.id === 'admin_thanhle') {
      this.npcDialog = {
        npc,
        avt: 'nhanvat/npc/admin_thanhle/avt.png',
        text: `Chào mừng ${p.name} ghé thăm ${npc.name}!\nTại đây phân phối trọn bộ Trang bị Thần Linh, Hủy Diệt, Thiên Sứ (DataNRO), Cân Đẩu Vân, Bông tai Porata và Ngọc Rồng!`,
        buttons: [
          {
            label: 'Mở Cửa Hàng',
            action: () => {
              this.npcDialog = null;
              this.popupOpen = true;
              this.popupTab = 1;
              this.activePanel = 'SHOP';
              this.shopTabIdx = 0;
            }
          },
          { label: 'Đóng', action: () => { this.npcDialog = null; } }
        ]
      };
      return;
    }

    if (npc.id === 'admin_haidang') {
      this.npcDialog = {
        npc,
        avt: 'nhanvat/npc/admin_haidang/avt.png',
        text: `Chào anh em ${p.name}! Thần Tài Hùng phụ trách Vòng Quay May Mắn đây!\nQuay trúng ngay Cải Trang Broly, Super Black Rosé, Phượng Hoàng Lửa và Ngọc Rồng 1-3 Sao!`,
        buttons: [
          {
            label: 'Vòng Quay',
            action: () => {
              this.npcDialog = null;
              this.popupOpen = false;
              this.activePanel = 'GACHA';
              this.gachaResult = null;
            }
          },
          { label: 'Đóng', action: () => { this.npcDialog = null; } }
        ]
      };
      return;
    }

    if (npc.id === 'thay_hieu') {
      this.npcDialog = {
        npc,
        avt: 'nhanvat/npc/thay_hieu/avt.png',
        text: `Chào ${p.name}! Mình là ${npc.name}!\nĐưa Trang Bị đây Quyết giúp đục lỗ Pha Lê Hóa 7 Sao Đen và Ép Đá Pha Lê tăng vọt sức chiến đấu nhé!`,
        buttons: [
          {
            label: 'Ép Sao Pha Lê',
            action: () => {
              this.npcDialog = null;
              this.popupOpen = true;
              this.popupTab = 1;
              this.activePanel = 'CRYSTAL';
            }
          },
          { label: 'Đóng', action: () => { this.npcDialog = null; } }
        ]
      };
      return;
    }

    if (npc.id === 'admin_huykhoi') {
      const curStep = quest ? quest.steps[p.questStep || 0] : null;
      const btns = [];
      let msg = 'Ta là Sứ Giả Quy Lão tại Thung Lũng Tre!\nMuốn bay ra ngoài vũ trụ tới Hành tinh Xayda hoặc Namếc, con hãy tới Trạm Tàu Vũ Trụ ở Vách núi Aru (phía Tây Làng Aru) nhé!';

      if (quest && curStep && curStep.type === 'talk' && curStep.targetId === 'admin_huykhoi') {
        msg = curStep.dialogReply || 'Khá lắm thiếu hiệp! Hãy nhận lấy phần thưởng xứng đáng!';
        btns.push({
          label: 'Báo Cáo\nNhận Thưởng',
          action: () => {
            this.engine.advanceQuestEvent('talk', 'admin_huykhoi', 1);
            this.npcDialog = null;
          }
        });
      }
      btns.push({
        label: 'Về Trạm\nTàu Vũ Trụ',
        action: () => {
          this.npcDialog = null;
          this.engine.changeMap(3, 330, 175);
        }
      });
      btns.push({ label: 'Đóng', action: () => { this.npcDialog = null; } });

      this.npcDialog = {
        npc,
        avt: 'nhanvat/npc/admin_huykhoi/avt.png',
        text: msg,
        buttons: btns
      };
    }
  }

  openChatBox(mode = 'CHAT') {
    this.chatMode = mode;
    this.chatOpen = true;
    this.chatInputText = '';
    if (this.engine.onTextInputToggle) {
      this.engine.onTextInputToggle(true, '');
    }
  }

  submitChatOrGiftcode(rawText) {
    const text = String(rawText || this.chatInputText || '').trim();
    this.chatOpen = false;
    if (this.engine.onTextInputToggle) {
      this.engine.onTextInputToggle(false, '');
    }
    if (!text) return;

    const p = this.engine.player;
    const upper = text.toUpperCase();

    // Kiểm tra Giftcode (dù gõ trong khung Chat hay khung Giftcode đều nhận tiện lợi!)
    if (GIFTCODES[upper]) {
      if (!p.redeemedCodes) p.redeemedCodes = [];
      if (p.redeemedCodes.includes(upper)) {
        this.pushBanner(`Mã Giftcode ${upper} đã được sử dụng trước đó!`, '#fca5a5');
        return;
      }
      const reward = GIFTCODES[upper];
      p.redeemedCodes.push(upper);
      p.gold += reward.gold || 0;
      p.gem += reward.gem || 0;
      (reward.items || []).forEach((id) => this.engine.addItemToBag(id));
      sound.playCoin();
      this.pushBanner(reward.msg, '#86efac');
      this.engine.recalcStats();
      return;
    }

    if (this.chatMode === 'GIFTCODE') {
      this.pushBanner('Mã Giftcode không hợp lệ! Thử: TANTHU, NROWEB, DRAGONBOY, NGOCRONG', '#fca5a5');
      return;
    }

    // Chat nhân vật trên đầu + đồng bộ Supabase
    p.chatBubble = { text: text.slice(0, 48), ttl: 4.5 };
    sendChatMessage(p.name, p.planet, text.slice(0, 80));
  }

  openLeaderboard() {
    this.activePanel = 'LEADERBOARD';
    this.leaderboardLoading = true;
    fetchLeaderboard().then((rows) => {
      this.leaderboardRows = rows || [];
      this.leaderboardLoading = false;
    });
  }

  // ==================== VÒNG QUAY HẢI ĐĂNG ====================
  startGachaSpin() {
    if (this.gachaSpinning) return;
    const p = this.engine.player;
    const ticketIdx = p.bag.findIndex((it) => it && it.id === 've_quay');
    if (ticketIdx >= 0) {
      p.bag.splice(ticketIdx, 1);
    } else if (p.gem >= 10) {
      p.gem -= 10;
    } else {
      this.pushBanner('Cần 1 Vé Quay Thượng Đế hoặc 10 Ngọc Xanh để quay!', '#fca5a5');
      return;
    }
    sound.playAuraCharge();
    this.gachaSpinning = true;
    this.gachaTimer = 0;
    this.gachaResult = null;
  }

  finishGachaSpin() {
    const pool = [
      'ct_broly_lssj',
      'ct_black_rose',
      'ct_xiao',
      'vb_phuonghoang',
      'pet_ky_lan',
      'dl_canh_thien_than',
      'aura_rong',
      'nr_1s',
      'nr_2s',
      'nr_3s',
      'bong_tai_c2'
    ];
    const pickedId = pool[Math.floor(Math.random() * pool.length)];
    this.engine.addItemToBag(pickedId);
    const def = ITEM_CATALOG[pickedId];
    this.gachaResult = def;
    sound.playCoin();
    this.pushBanner(`Chúc mừng! Bạn quay trúng [${def.name}]!`, '#fde047');
  }

  // ==================== GỌI RỒNG THẦN 9 KHÚC (HUDRongThan.java) ====================
  trySummonShenron() {
    const p = this.engine.player;
    const missing = [];
    for (let s = 1; s <= 7; s++) {
      const has = p.bag.some((it) => it && it.id === `nr_${s}s`);
      if (!has) missing.push(`${s} Sao`);
    }
    if (missing.length > 0) {
      this.pushBanner(`Chưa đủ 7 Viên Ngọc Rồng! Còn thiếu: ${missing.join(', ')}`, '#fca5a5');
      return false;
    }
    // Trừ 7 viên Ngọc Rồng
    for (let s = 1; s <= 7; s++) {
      const idx = p.bag.findIndex((it) => it && it.id === `nr_${s}s`);
      if (idx >= 0) p.bag.splice(idx, 1);
    }
    this.popupOpen = false;
    this.activePanel = null;
    this.shenronActive = true;
    this.shenronTimer = 0;
    sound.playSuperSaiyan();
    return true;
  }

  grantShenronWish(wishIdx) {
    const p = this.engine.player;
    if (wishIdx === 0) {
      p.power += 500000;
      p.potential += 500000;
      p.baseAttack += 350;
      p.baseMaxHp += 5000;
      this.pushBanner('Rồng Thần ban ước: +500.000 Sức Mạnh & Tiềm Năng, +350 Sức Đánh, +5000 HP!', '#fde047');
    } else if (wishIdx === 1) {
      p.gold += 2000000;
      p.gem += 500;
      this.pushBanner('Rồng Thần ban ước: +2.000.000 Vàng & +500 Ngọc Xanh!', '#fde047');
    } else if (wishIdx === 2) {
      this.engine.addItemToBag('ao_huy_diet');
      this.engine.addItemToBag('quan_huy_diet');
      this.engine.addItemToBag('gang_huy_diet');
      this.pushBanner('Rồng Thần ban ước: Trọn bộ Trang Bị Thần Hủy Diệt Beerus!', '#fde047');
    } else if (wishIdx === 3) {
      this.engine.addItemToBag('ct_black_rose');
      this.engine.addItemToBag('vb_phuonghoang');
      this.pushBanner('Rồng Thần ban ước: Cải Trang Black Goku Rosé & Phượng Hoàng Lửa!', '#fde047');
    } else if (wishIdx === 4) {
      this.engine.unlockDetu(true);
      this.engine.addItemToBag('bong_tai_c2');
      this.pushBanner('Rồng Thần ban ước: Đệ Tử Thần Cấp & Bông Tai Porata Cấp 2!', '#fde047');
    }
    this.engine.recalcStats();
    p.hp = p.maxHp;
    p.ki = p.maxKi;
    this.engine.advanceQuestEvent('shenron', 'shenron', 1);
    sound.playHeal();
    this.shenronActive = false;
  }

  // ==================== VẼ TOÀN BỘ GIAO DIỆN HUD ====================
  render(ctx) {
    this.hitCount = 0;

    // Nếu đang gọi Rồng Thần thì ưu tiên vẽ màn hình Rồng Thần huyền thoại
    if (this.shenronActive) {
      this.renderShenron(ctx);
      this.renderBanners(ctx);
      return;
    }

    this.renderTopLeftScouter(ctx);
    this.renderTargetBar(ctx);
    this.renderTopRightZoneAndChat(ctx);
    this.renderBottomSkillAndActionBar(ctx);

    if (!this.popupOpen) {
      // Nền tam giác đen mờ + Nút mở Popup Nhân Vật (nutpopup.png ở mép trái chuẩn VeHUD.java dòng 987 & 1121)
      ctx.save();
      ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
      ctx.beginPath();
      ctx.moveTo(0, VIRTUAL_H - (VIRTUAL_H * 0.75 - 10));
      ctx.lineTo(0, VIRTUAL_H - (VIRTUAL_H * 0.75 + 48));
      ctx.lineTo(29, VIRTUAL_H - (VIRTUAL_H * 0.75 + 19));
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      this.drawTex(ctx, 'hud/giaodientrong/nutpopup.png', 0, VIRTUAL_H * 0.75, 22, 38);
      this.addHit('btn_open_popup', 0, VIRTUAL_H * 0.75 - 10, 34, 58, () => {
        this.popupOpen = true;
        this.activePanel = null;
      });
    } else {
      this.renderCharacterPopup(ctx);
      if (this.isDualPanel()) {
        this.renderRightDualPanel(ctx);
      }
    }

    if (this.activePanel === 'GACHA') {
      this.renderGachaModal(ctx);
    } else if (this.activePanel === 'LEADERBOARD') {
      this.renderLeaderboardModal(ctx);
    } else if (this.activePanel === 'WORLD_MAP') {
      this.renderWorldMapModal(ctx);
    } else if (this.activePanel === 'DATANRO_WIKI') {
      this.renderDataNroWikiModal(ctx);
    }

    if (this.npcDialog) {
      this.renderNpcDialog(ctx);
    }

    if (this.chatOpen) {
      this.renderChatBox(ctx);
    }

    this.renderBanners(ctx);
  }

  // 1. THANH MÁU / KI / SCOUTER GÓC TRÊN TRÁI (thanhhp1.png, thanhhp.png, thanhki.png chuẩn VeHUD.java dòng 993-1005 & 1189-1191)
  renderTopLeftScouter(ctx) {
    const p = this.engine.player;
    this.drawTex(ctx, 'hud/giaodientrong/thanhhp1.png', 0, 530, 308, 80);

    this.addHit('scouter_open_popup', 0, 530, 160, 80, () => {
      this.popupOpen = !this.popupOpen;
      if (!this.popupOpen) this.activePanel = null;
    });

    // Tên nhân vật & Sức mạnh hiển thị trên mặt kính xanh lá Scouter [2.5..157.5] bằng màu xanh đậm LCD #005325 chuẩn VeHUD.java dòng 1189!
    this.drawText(ctx, p.name, 80, 576, {
      size: 13, color: '#005325', stroke: null, strokeWidth: 0, align: 'center'
    });
    this.drawText(ctx, `SM: ${formatNroNum(p.power)}`, 80, 555, {
      size: 11, color: '#005325', stroke: null, strokeWidth: 0, align: 'center'
    });

    // Thanh HP (thanhhp.png: 132x20 tại 165, 580)
    const hpRatio = p.maxHp > 0 ? p.hp / p.maxHp : 0;
    this.drawTexCropX(ctx, 'hud/giaodientrong/thanhhp.png', 165, 580, 132, 20, hpRatio);
    this.drawText(ctx, `${formatNroNum(p.hp)}/${formatNroNum(p.maxHp)}`, 231, 586, {
      size: 10, color: '#ffffff', stroke: '#000000', strokeWidth: 2, align: 'center'
    });

    // Thanh KI (thanhki.png: 119x12 tại 165, 560)
    const kiRatio = p.maxKi > 0 ? p.ki / p.maxKi : 0;
    this.drawTexCropX(ctx, 'hud/giaodientrong/thanhki.png', 165, 560, 119, 12, kiRatio);
    this.drawText(ctx, `${formatNroNum(p.ki)}/${formatNroNum(p.maxKi)}`, 224.5, 562, {
      size: 9, color: '#e0f2fe', stroke: '#000000', strokeWidth: 1.8, align: 'center'
    });

    // Vàng & Ngọc hiển thị gọn ngay dưới thanh KI của Scouter
    this.drawTex(ctx, 'hud/giaodientrong/vang.png', 165, 538, 15, 15);
    this.drawText(ctx, formatNroNum(p.gold), 183, 541, { size: 10, color: '#fde047' });
    this.drawTex(ctx, 'hud/giaodientrong/ngoc.png', 240, 538, 14, 14);
    this.drawText(ctx, formatNroNum(p.gem), 257, 541, { size: 10, color: '#67e8f9' });

    // Hàng biểu tượng Buff đang kích hoạt
    let bx = 8;
    if (p.buffs.atk > 0) {
      this.drawTex(ctx, 'vatpham/vatphamgame/phu_tro/cuong_no.png', bx, 504, 22, 22);
      bx += 26;
    }
    if (p.buffs.hp > 0) {
      this.drawTex(ctx, 'vatpham/vatphamgame/phu_tro/bo_huyet.png', bx, 504, 22, 22);
      bx += 26;
    }
    if (p.buffs.ki > 0) {
      this.drawTex(ctx, 'vatpham/vatphamgame/phu_tro/bo_khi.png', bx, 504, 22, 22);
      bx += 26;
    }
    if (p.shieldTimer > 0) {
      this.drawTex(ctx, 'kynang/iconkynang/traidat/skill7_traidat.png', bx, 504, 22, 22);
      bx += 26;
    }
    if (p.isFused) {
      this.drawTex(ctx, 'vatpham/vatphamgame/bongtai/bongtaic1.png', bx, 504, 22, 22);
    }
  }

  // 2. KHUNG MỤC TIÊU ĐANG KHOÁ Ở GIỮA TRÊN MÀN HÌNH
  renderTargetBar(ctx) {
    const t = this.engine.selectedTarget;
    if (!t) return;
    if (t.targetKind === 'monster' && t.dead) return;

    const bw = 216;
    const bh = 38;
    const bx = (VIRTUAL_W - bw) / 2;
    const by = 564;

    this.fillRectGdx(ctx, bx, by, bw, bh, 'rgba(69, 26, 3, 0.85)', '#f59e0b', 2);
    this.drawText(ctx, t.name, bx + bw / 2, by + 23, {
      size: 11.5,
      color: t.isBoss ? '#fca5a5' : '#fde047',
      align: 'center'
    });

    if (t.targetKind === 'monster') {
      const ratio = t.maxHp > 0 ? Math.max(0, t.hp / t.maxHp) : 0;
      this.fillRectGdx(ctx, bx + 14, by + 6, bw - 28, 11, '#1f2937', '#000000', 1);
      this.fillRectGdx(ctx, bx + 15, by + 7, (bw - 30) * ratio, 9, '#dc2626', null);
      this.drawText(ctx, `${formatNroNum(t.hp)} / ${formatNroNum(t.maxHp)}`, bx + bw / 2, by + 8, {
        size: 9.5,
        color: '#ffffff',
        align: 'center'
      });
    } else {
      this.drawText(ctx, 'Nhấn [Space] hoặc Click để giao tiếp', bx + bw / 2, by + 8, {
        size: 9.5,
        color: '#bbf7d0',
        align: 'center'
      });
    }
  }

  // 3. TÊN BẢN ĐỒ, KHU VỰC, NHIỆM VỤ GỌN & NÚT CHAT GÓC TRÊN PHẢI (ochat.png)
  renderTopRightZoneAndChat(ctx) {
    const p = this.engine.player;
    const mapCfg = MAPS_CONFIG[this.engine.currentMapId] || MAPS_CONFIG[0];

    const svCfg = this.engine.serverCfg;
    const rateTag = svCfg && svCfg.expRate > 1 ? ` [${svCfg.name} x${svCfg.expRate}]` : '';
    this.drawText(ctx, `${mapCfg.name} - Khu ${this.engine.zoneId || 1}${rateTag}`, 938, 584, {
      size: 12.5,
      color: '#fef08a',
      align: 'right'
    });

    const quest = STORY_QUESTS.find((q) => q.id === p.questId);
    if (quest) {
      const curStep = quest.steps[p.questStep || 0];
      if (curStep) {
        const isTalkStep = curStep.type === 'talk' || curStep.type === 'talk_elder' || curStep.type === 'talk_master';
        const qStr = isTalkStep
          ? `NV: ${curStep.text}`
          : `NV: ${curStep.text} (${Math.min(p.questProgress, curStep.count)}/${curStep.count})`;
        this.drawText(ctx, qStr, 938, 565, {
          size: 10.5,
          color: isTalkStep ? '#4ade80' : '#ffffff',
          align: 'right'
        });
      }
    }

    // Nút Chat chuẩn ochat.png (948, 542, 56, 56)
    this.drawTex(ctx, 'hud/giaodientrong/ochat.png', 948, 542, 56, 56);
    this.addHit('btn_chat', 948, 542, 56, 56, () => {
      this.openChatBox('CHAT');
    });
  }

  // 4. JOYSTICK KÉO THẢ + THANH KỸ NĂNG 5 Ô + CỤM TAM GIÁC TẤN CÔNG / ĐỔI MỤC TIÊU / ĐẬU THẦN CHUẨN VeHUD.java!
  renderBottomSkillAndActionBar(ctx) {
    const p = this.engine.player;
    const planetKey = PLANET_DEFS[p.planet]?.key || 'traidat';
    const allSkills = PLANET_SKILLS[planetKey] || PLANET_SKILLS.traidat;
    const loadout = Array.isArray(p.skillLoadout) ? p.skillLoadout : [0, -1, -1, -1, -1];

    // Vị trí 5 ô kỹ năng chuẩn ThaoTac.java dòng 559: căn giữa khi bật Joystick, lệch trái x=30 khi tắt Joystick
    const oskillW = 50;
    const oskillH = 50;
    const skillBaseX = this.showVirtualControls ? (VIRTUAL_W - (4 * 65 + oskillW)) / 2 : 30;
    const skillY = 25;

    for (let i = 0; i < 5; i++) {
      const skIdx = typeof loadout[i] === 'number' ? loadout[i] : -1;
      const rawSk = skIdx >= 0 ? allSkills[skIdx] : null;
      const skill = rawSk && ((p.skillLevels?.[rawSk.id] || 0) >= 1) ? rawSk : null;
      const sx = skillBaseX + i * 65;
      const sy = skillY;
      const isSelected = p.activeSkillSlot === i;

      this.drawTex(
        ctx,
        isSelected ? 'hud/giaodientrong/oskillclick.png' : 'hud/giaodientrong/oskill.png',
        sx,
        sy,
        oskillW,
        oskillH
      );

      if (skill) {
        // Icon nằm lọt gọn bên trong khung bo góc oskill.png chuẩn VeHUD.java dòng 1058 (x + 6.9, y + 6.9, 36.2x36.2)
        this.drawTex(ctx, skill.icon, sx + 6.9, sy + 6.9, 36.2, 36.2);
        const cdRem = p.cooldowns[skill.id] || 0;
        if (cdRem > 0.05) {
          const ratio = Math.min(1, cdRem / Math.max(0.1, skill.cd));
          this.fillRectGdx(ctx, sx + 6.9, sy + 6.9, 36.2, 36.2 * ratio, 'rgba(0,0,0,0.62)', null);
          this.drawText(ctx, cdRem.toFixed(1), sx + 25, sy + 21, {
            size: 11, color: '#ffffff', align: 'center'
          });
        }
      }

      // Phím tắt 1..5 chỉ vẽ phía trên ô khi tắt điều khiển ảo (chế độ PC) chuẩn VeHUD.java dòng 1110-1115
      if (!this.showVirtualControls) {
        this.drawText(ctx, `${i + 1}`, sx + 25, sy + oskillH + 6, {
          size: 11, color: '#ffffff', align: 'center'
        });
      }

      this.addHit(`skill_slot_${i}`, sx, sy, oskillW, oskillH, () => {
        if (!skill) {
          this.pushBanner('Ô kỹ năng đang trống! Hãy bái sư Quy Lão Kame hoặc mở Tab Kỹ Năng học chiêu!', '#fde047');
          return;
        }
        p.activeSkillSlot = i;
        this.engine.castSkillBySlot(i);
      });
    }

    if (this.showVirtualControls) {
      // === A. JOYSTICK ẢO KÉO THẢ GÓC TRÁI DƯỚI VẼ VECTOR SẮC NÉT 1:1 CHUẨN VeHUD.java dòng 1146-1161 ===
      if (!this.popupOpen) {
        const jcx = JOYSTICK_CX;
        const jcy = VIRTUAL_H - JOYSTICK_CY;

        ctx.save();
        ctx.beginPath();
        ctx.arc(jcx, jcy, JOYSTICK_R_NGOAI, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.30)';
        ctx.fill();
        ctx.lineWidth = 1.6;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.62)';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(jcx + this.joystickDx, jcy - this.joystickDy, JOYSTICK_R_TRONG, 0, Math.PI * 2);
        ctx.fillStyle = this.joystickActive ? 'rgba(255, 82, 5, 1.0)' : 'rgba(255, 82, 5, 0.72)';
        ctx.fill();
        ctx.restore();
      }

      // === B. CỤM TAM GIÁC GÓC PHẢI DƯỚI CHUẨN 1:1 VeHUD.java dòng 974-982 & 1125-1186 ===
      // 1. Ô Đậu Thần thu nhỏ (848, 15, 55x55): Vẽ nền trắng lấp đầy khung trái tim TRƯỚC odauthan.png, sau đó chỉ vẽ chữ số màu nâu #532905!
      const szScale = this.senzuClickTimer > 0 ? 1 - 0.14 * (this.senzuClickTimer / 0.2) : 1;
      const szW = NUT_DAUTHAN_W * szScale;
      const szH = NUT_DAUTHAN_H * szScale;
      const szX = NUT_DAUTHAN_X + (NUT_DAUTHAN_W - szW) / 2;
      const szY = NUT_DAUTHAN_Y + (NUT_DAUTHAN_H - szH) / 2;
      const tiLeDau = szW / 75;
      this.fillRectGdx(ctx, szX + 10 * tiLeDau, szY + 10 * tiLeDau, 53 * tiLeDau, this.senzuFillH * tiLeDau, '#ffffff', null);
      this.drawTex(
        ctx,
        this.senzuClickTimer > 0 ? 'hud/giaodientrong/odauthanclick.png' : 'hud/giaodientrong/odauthan.png',
        szX,
        szY,
        szW,
        szH
      );
      this.drawText(ctx, `${p.senzuCount}`, szX + szW / 2, szY + szH * (32 / 75), {
        size: 12, color: '#532905', stroke: null, strokeWidth: 0, align: 'center'
      });
      this.addHit('btn_eat_senzu', NUT_DAUTHAN_X, NUT_DAUTHAN_Y, NUT_DAUTHAN_W, NUT_DAUTHAN_H, () => {
        this.senzuClickTimer = 0.2;
        this.engine.eatSenzu();
      });

      // 2. Nút Tấn Công / Giao Tiếp chính (915, 25, 90x90): CHỈ vẽ bg_attack.png (đã có nắm đấm tròn kem chính chủ ở tâm), KHÔNG đè icon vuông lên trên!
      const atkScale = this.attackClickTimer > 0 ? 1 - 0.15 * (this.attackClickTimer / 0.2) : 1;
      const atkW = NUT_ATTACK_W * atkScale;
      const atkH = NUT_ATTACK_H * atkScale;
      const atkX = NUT_ATTACK_X + (NUT_ATTACK_W - atkW) / 2;
      const atkY = NUT_ATTACK_Y + (NUT_ATTACK_H - atkH) / 2;
      this.drawTex(
        ctx,
        this.attackClickTimer > 0 ? 'hud/giaodientrong/bg_attack_click.png' : 'hud/giaodientrong/bg_attack.png',
        atkX,
        atkY,
        atkW,
        atkH
      );
      const curSlotSkIdx = loadout[p.activeSkillSlot || 0];
      const curSlotSk = typeof curSlotSkIdx === 'number' && curSlotSkIdx >= 0 ? allSkills[curSlotSkIdx] : null;
      this.addHit('btn_attack_main', NUT_ATTACK_X, NUT_ATTACK_Y, NUT_ATTACK_W, NUT_ATTACK_H, () => {
        this.attackClickTimer = 0.2;
        if (!curSlotSk || (p.skillLevels?.[curSlotSk.id] || 0) < 1) {
          p.activeSkillSlot = 0;
        }
        this.engine.handlePrimaryAction();
      });

      // 3. Nút Đổi Mục Tiêu phía trên nút Tấn Công (947, 127, 55x55)
      const chgScale = this.changeClickTimer > 0 ? 1 - 0.15 * (this.changeClickTimer / 0.2) : 1;
      const chgW = NUT_CHANGE_W * chgScale;
      const chgH = NUT_CHANGE_H * chgScale;
      const chgX = NUT_CHANGE_X + (NUT_CHANGE_W - chgW) / 2;
      const chgY = NUT_CHANGE_Y + (NUT_CHANGE_H - chgH) / 2;
      this.drawTex(
        ctx,
        this.changeClickTimer > 0 ? 'hud/giaodientrong/change_click.png' : 'hud/giaodientrong/change.png',
        chgX,
        chgY,
        chgW,
        chgH
      );
      this.addHit('btn_change_target', NUT_CHANGE_X, NUT_CHANGE_Y, NUT_CHANGE_W, NUT_CHANGE_H, () => {
        this.changeClickTimer = 0.2;
        this.engine.cycleTarget();
      });
    } else {
      // Chế độ PC truyền thống (tắt nút ảo): Ô Đậu Thần lớn 75x75 góc phải dưới chuẩn VeHUD.java dòng 981 & 1125-1135
      const odX = VIRTUAL_W - 85;
      const odY = 10;
      this.fillRectGdx(ctx, odX + 10, odY + 10, 53, this.senzuFillH, '#ffffff', null);
      this.drawTex(
        ctx,
        this.senzuClickTimer > 0 ? 'hud/giaodientrong/odauthanclick.png' : 'hud/giaodientrong/odauthan.png',
        odX,
        odY,
        75,
        75
      );
      this.drawText(ctx, `${p.senzuCount}`, odX + 37.5, odY + 32, {
        size: 14, color: '#532905', stroke: null, strokeWidth: 0, align: 'center'
      });
      this.addHit('btn_eat_senzu_pc', odX, odY, 75, 75, () => {
        this.senzuClickTimer = 0.2;
        this.engine.eatSenzu();
      });
    }
  }

  // 5. CỬA SỔ NHÂN VẬT 5 TAB BÊN TRÁI (popupnhanvat.jpg + nutchucnang.png + ttluc.jpg)
  renderCharacterPopup(ctx) {
    const p = this.engine.player;
    const planetDef = PLANET_DEFS[p.planet] || PLANET_DEFS[0];

    this.drawTex(ctx, 'hud/giaodientrong/popupnhanvat.jpg', 0, 0, 355, 610);

    // Nút Đóng nutX.png
    this.drawTex(ctx, 'hud/giaodientrong/nutX.png', 316, 572, 28, 28);
    this.addHit('btn_close_popup', 310, 566, 38, 38, () => {
      this.popupOpen = false;
      this.activePanel = null;
      this.selectedBagIdx = -1;
      this.selectedEquipSlot = null;
    });

    // Thông tin đầu trang trên nền gỗ popupnhanvat.jpg
    this.drawTex(ctx, this.engine.getPlayerAvatarPath(), 18, 516, 48, 52);
    this.drawText(ctx, `${p.name} (${planetDef.name})`, 74, 554, { size: 13, color: '#fde047' });
    this.drawText(ctx, `Sức mạnh: ${formatNroNum(p.power)}`, 74, 536, { size: 11, color: '#ffffff' });
    this.drawText(ctx, `Tiềm năng: ${formatNroNum(p.potential)}`, 74, 519, { size: 11, color: '#86efac' });

    this.drawTex(ctx, 'hud/giaodientrong/vang.png', 20, 494, 16, 16);
    this.drawText(ctx, formatNroNum(p.gold), 40, 497, { size: 11, color: '#fde047' });
    this.drawTex(ctx, 'hud/giaodientrong/ngoc.png', 180, 494, 16, 16);
    this.drawText(ctx, formatNroNum(p.gem), 200, 497, { size: 11, color: '#67e8f9' });

    // 5 Tab nutchucnang.png
    const tabs = ['Nhiệm Vụ', 'Hành Trang', 'Kỹ Năng', 'Đệ Tử', 'Chức Năng'];
    for (let i = 0; i < tabs.length; i++) {
      const tx = 10 + i * 67;
      const ty = 456;
      const active = this.popupTab === i;
      this.drawTex(
        ctx,
        active ? 'hud/giaodientrong/nutchucnangclick.png' : 'hud/giaodientrong/nutchucnang.png',
        tx,
        ty,
        65,
        30
      );
      this.drawText(ctx, tabs[i], tx + 32.5, ty + 11, {
        size: 9.5,
        color: active ? '#fef08a' : '#ffffff',
        align: 'center'
      });
      this.addHit(`popup_tab_${i}`, tx, ty, 65, 30, () => {
        this.popupTab = i;
        this.selectedBagIdx = -1;
        this.selectedEquipSlot = null;
      });
    }

    // Nền giấy da trong khung: ttluc.jpg (12, 12, 331, 438)
    this.drawTex(ctx, 'hud/giaodientrong/ttluc.jpg', 12, 12, 331, 438);

    if (this.popupTab === 0) this.renderTabQuest(ctx);
    else if (this.popupTab === 1) this.renderTabBagAndStats(ctx);
    else if (this.popupTab === 2) this.renderTabSkills(ctx);
    else if (this.popupTab === 3) this.renderTabDeTu(ctx);
    else if (this.popupTab === 4) this.renderTabFunctions(ctx);
  }

  // --- TAB 0: NHIỆM VỤ CHUẨN HUDPopupRenderer.java (dòng 114-136) ---
  renderTabQuest(ctx) {
    const p = this.engine.player;
    const quest = STORY_QUESTS.find((q) => q.id === p.questId);

    if (!quest) {
      this.drawText(ctx, 'Hoàn thành cốt truyện!', 177, 420, {
        size: 14, color: '#fef08a', align: 'center'
      });
      this.drawWrappedText(
        ctx,
        'Chúc mừng chiến binh! Bạn đã chinh phục toàn bộ nhiệm vụ cốt truyện. Hãy tiếp tục luyện cấp, săn BOSS Broly, Black Goku Rosé và thu thập Ngọc Rồng gọi Rồng Thần!',
        24,
        385,
        305,
        20,
        { size: 11.5, color: '#ffffff', stroke: '#000000', strokeWidth: 2, bold: false }
      );
      return;
    }

    if (quest.era) {
      this.drawText(ctx, quest.era, 177, 434, {
        size: 10, color: '#67e8f9', align: 'center'
      });
    }
    this.drawText(ctx, quest.title, 177, 415, {
      size: 13.5, color: '#fde047', align: 'center'
    });

    // Các phần nhiệm vụ: đã xong (xanh lá), đang làm (vàng sáng kèm tiến độ), chưa mở ("- ...")
    const curStepIdx = p.questStep || 0;
    let curY = 384;
    for (let i = 0; i < quest.steps.length; i++) {
      const st = quest.steps[i];
      const isTalkStep = st.type === 'talk' || st.type === 'talk_elder' || st.type === 'talk_master';
      if (i < curStepIdx) {
        const doneTxt = st.count > 1 ? `- ${st.text} (${st.count}/${st.count})` : `- ${st.text} (Xong)`;
        this.drawText(ctx, doneTxt, 20, curY, { size: 10.5, color: '#86efac' });
        curY -= 22;
      } else if (i === curStepIdx) {
        const activeTxt = isTalkStep
          ? `- ${st.text}`
          : `- ${st.text} (${Math.min(p.questProgress, st.count)}/${st.count})`;
        this.drawText(ctx, activeTxt, 20, curY, { size: 10.5, color: '#fef08a' });
        curY -= 22;
      } else {
        this.drawText(ctx, '- ...', 20, curY, { size: 10.5, color: '#cbd5e1' });
        curY -= 22;
        break;
      }
    }

    // Đoạn mô tả chi tiết & phần thưởng bên dưới đúng chuẩn HUDPopupRenderer.java dòng 124-136
    curY -= 10;
    const descParts = String(quest.desc || '').split('\n');
    for (let i = 0; i < descParts.length; i++) {
      curY = this.drawWrappedText(ctx, descParts[i], 22, curY, 308, 19, {
        size: 11.5, color: '#ffffff', stroke: '#000000', strokeWidth: 2, bold: false
      });
      curY -= 4;
    }

    // Tóm tắt thưởng rõ ràng ở cuối khung
    this.fillRectGdx(ctx, 20, 26, 315, 76, 'rgba(15, 23, 42, 0.78)', '#f59e0b', 1.5);
    this.drawText(ctx, 'Phần thưởng khi báo cáo hoàn thành:', 30, 82, { size: 11, color: '#fde047' });
    const itemReward = quest.reward.item ? ITEM_CATALOG[quest.reward.item]?.name : '';
    this.drawText(ctx, `+ ${formatNroNum(quest.reward.power)} Sức mạnh & Tiềm năng`, 30, 62, { size: 10.5, color: '#86efac' });
    this.drawText(
      ctx,
      `+ ${formatNroNum(quest.reward.gold)} Vàng${itemReward ? `  |  [${itemReward}]` : ''}`,
      30,
      42,
      { size: 10.5, color: '#67e8f9' }
    );
  }

  // --- TAB 1: HÀNH TRANG + TRANG BỊ ĐANG MẶC + CỘNG TIỀM NĂNG ---
  renderTabBagAndStats(ctx) {
    const p = this.engine.player;

    // 1. Nâng chỉ số nhanh bằng Tiềm Năng (ochiso.png)
    const statRows = [
      { key: 'hp', label: `HP Gốc: ${formatNroNum(p.maxHp)}`, cost: 200, gain: '+120 HP' },
      { key: 'ki', label: `KI Gốc: ${formatNroNum(p.maxKi)}`, cost: 200, gain: '+120 KI' },
      { key: 'atk', label: `Sức Đánh: ${formatNroNum(p.attack)}`, cost: 350, gain: '+12 SĐ' },
      { key: 'def', label: `Giáp: ${p.defense} | Chí mạng: ${p.crit}%`, cost: 400, gain: '+4 Giáp' }
    ];

    for (let i = 0; i < statRows.length; i++) {
      const row = statRows[i];
      const ry = 418 - i * 26;
      this.drawTex(ctx, 'hud/giaodientrong/ochiso.png', 20, ry, 232, 23);
      this.drawText(ctx, row.label, 28, ry + 7, { size: 10.5, color: '#fef08a' });

      this.drawTex(ctx, 'hud/giaodientrong/nutchucnang.png', 258, ry, 76, 23);
      this.drawText(ctx, row.gain, 296, ry + 7, { size: 9.5, color: '#86efac', align: 'center' });
      this.addHit(`upg_stat_${row.key}`, 258, ry, 76, 23, () => {
        this.engine.upgradeBaseStat(row.key, row.cost);
      });
    }

    // 2. Hàng Trang Bị Đang Mặc (10 ô dùng ohanhtrangdangmac.jpg)
    const equipSlots = [
      { key: 'ao', label: 'Áo' },
      { key: 'quan', label: 'Quần' },
      { key: 'gang', label: 'Găng' },
      { key: 'giay', label: 'Giày' },
      { key: 'rada', label: 'Rađa' },
      { key: 'caitrang', label: 'C.Trang' },
      { key: 'vanbay', label: 'V.Bay' },
      { key: 'deolung', label: 'Đ.Lưng' },
      { key: 'pet', label: 'Pet' },
      { key: 'aura', label: 'Aura' }
    ];

    this.drawText(ctx, 'Trang bị đang mặc:', 22, 326, { size: 10.5, color: '#7c2d12', stroke: null, strokeWidth: 0 });
    for (let i = 0; i < equipSlots.length; i++) {
      const col = i % 5;
      const row = Math.floor(i / 5);
      const ex = 22 + col * 62;
      const ey = 282 - row * 44;
      const slotInfo = equipSlots[i];
      const eqItem = p.equipped[slotInfo.key];
      const isSel = this.selectedEquipSlot === slotInfo.key;

      this.drawTex(
        ctx,
        isSel ? 'hud/giaodientrong/ohanhtrangdangmacclick.jpg' : 'hud/giaodientrong/ohanhtrangdangmac.jpg',
        ex,
        ey,
        54,
        40
      );

      if (eqItem) {
        const def = ITEM_CATALOG[eqItem.id];
        if (def) this.drawTex(ctx, def.icon, ex + 11, ey + 5, 32, 30);
        if (eqItem.stars > 0) {
          this.drawText(ctx, `${eqItem.stars}★`, ex + 4, ey + 5, { size: 8.5, color: '#67e8f9' });
        }
      } else {
        this.drawText(ctx, slotInfo.label, ex + 27, ey + 15, {
          size: 8.5, color: '#78350f', stroke: null, strokeWidth: 0, align: 'center'
        });
      }

      this.addHit(`equip_slot_${slotInfo.key}`, ex, ey, 54, 40, () => {
        this.selectedBagIdx = -1;
        this.selectedEquipSlot = slotInfo.key;
        if (this.activePanel === 'CRYSTAL' && eqItem) {
          this.crystalEquipSlot = slotInfo.key;
        }
      });
    }

    // 3. Lưới Hành Trang 20 ô (5 cột x 4 hàng dùng ohanhtrang.jpg)
    this.drawText(ctx, `Túi hành trang (${p.bag.length}/20):`, 22, 224, {
      size: 10.5, color: '#7c2d12', stroke: null, strokeWidth: 0
    });

    for (let idx = 0; idx < 20; idx++) {
      const col = idx % 5;
      const row = Math.floor(idx / 5);
      const bx = 22 + col * 62;
      const by = 180 - row * 42;
      const item = p.bag[idx];
      const isSel = this.selectedBagIdx === idx;

      this.drawTex(
        ctx,
        isSel ? 'hud/giaodientrong/ohanhtrangclick.jpg' : 'hud/giaodientrong/ohanhtrang.jpg',
        bx,
        by,
        54,
        38
      );

      if (item) {
        const def = ITEM_CATALOG[item.id];
        if (def) {
          this.drawTex(ctx, def.icon, bx + 11, by + 4, 32, 30);
          if (item.qty && item.qty > 1) {
            this.drawText(ctx, `x${item.qty}`, bx + 50, by + 5, { size: 8.5, color: '#fde047', align: 'right' });
          }
          if (item.stars > 0) {
            this.drawText(ctx, `${item.stars}★`, bx + 4, by + 5, { size: 8.5, color: '#67e8f9' });
          }
        }
      }

      this.addHit(`bag_slot_${idx}`, bx, by, 54, 38, () => {
        if (!item) {
          this.selectedBagIdx = -1;
          return;
        }
        this.selectedEquipSlot = null;
        this.selectedBagIdx = idx;
      });
    }

    // 4. Thanh thao tác vật phẩm đang chọn ở cuối bảng Hành trang
    if (this.selectedBagIdx >= 0 && p.bag[this.selectedBagIdx]) {
      const bagItem = p.bag[this.selectedBagIdx];
      const def = ITEM_CATALOG[bagItem.id];
      if (def) {
        this.fillRectGdx(ctx, 18, 16, 319, 36, 'rgba(30, 41, 59, 0.95)', '#f59e0b', 1.5);
        this.drawText(ctx, def.name, 26, 37, { size: 10, color: '#fde047' });
        this.drawText(ctx, def.desc.slice(0, 42), 26, 22, { size: 8.5, color: '#e2e8f0', bold: false });

        const actionLabel = def.slot === 'dragonball'
          ? 'Gọi Rồng'
          : (this.activePanel === 'CHEST' ? 'Cất Rương' : 'Sử Dụng');

        this.drawTex(ctx, 'hud/giaodientrong/nutchucnangclick.png', 252, 20, 80, 28);
        this.drawText(ctx, actionLabel, 292, 30, { size: 9.5, color: '#fef08a', align: 'center' });
        this.addHit('btn_use_bag_item', 252, 20, 80, 28, () => {
          if (this.activePanel === 'CHEST') {
            p.chest.push(bagItem);
            p.bag.splice(this.selectedBagIdx, 1);
            this.selectedBagIdx = -1;
            this.pushBanner(`Đã cất [${def.name}] vào Rương Đồ!`, '#86efac');
          } else if (def.slot === 'dragonball') {
            this.trySummonShenron();
          } else {
            this.engine.useOrEquipBagItem(this.selectedBagIdx);
            this.selectedBagIdx = -1;
          }
        });
      }
    } else if (this.selectedEquipSlot && p.equipped[this.selectedEquipSlot]) {
      const eqItem = p.equipped[this.selectedEquipSlot];
      const def = ITEM_CATALOG[eqItem.id];
      if (def) {
        this.fillRectGdx(ctx, 18, 16, 319, 36, 'rgba(30, 41, 59, 0.95)', '#38bdf8', 1.5);
        this.drawText(ctx, `${def.name} (+${eqItem.stars || 0} Sao)`, 26, 36, { size: 10, color: '#67e8f9' });
        this.drawTex(ctx, 'hud/giaodientrong/nutchucnang.png', 252, 20, 80, 28);
        this.drawText(ctx, 'Tháo Ra', 292, 30, { size: 9.5, color: '#ffffff', align: 'center' });
        this.addHit('btn_unequip_slot', 252, 20, 80, 28, () => {
          this.engine.unequipSlot(this.selectedEquipSlot);
          this.selectedEquipSlot = null;
        });
      }
    }
  }

  // --- TAB 2: KỸ NĂNG HÀNH TINH CHUẨN HUDPopupRenderer.java (MỞ KHÓA THEO SỨC MẠNH & TIỀM NĂNG!) ---
  renderTabSkills(ctx) {
    const p = this.engine.player;
    const planetKey = PLANET_DEFS[p.planet]?.key || 'traidat';
    const skills = PLANET_SKILLS[planetKey] || PLANET_SKILLS.traidat;

    this.drawText(ctx, 'BÍ KÍP VÕ CÔNG HÀNH TINH', 177, 426, {
      size: 12.5, color: '#fde047', align: 'center'
    });

    for (let i = 0; i < skills.length; i++) {
      const sk = skills[i];
      const col = i % 3;
      const row = Math.floor(i / 3);
      const sx = 24 + col * 104;
      const sy = 362 - row * 68;
      const isSel = this.selectedSkillIdx === i;
      const lvl = p.skillLevels?.[sk.id] || 0;
      const unlocked = lvl >= 1;

      this.fillRectGdx(
        ctx,
        sx,
        sy,
        96,
        58,
        unlocked
          ? (isSel ? 'rgba(254, 240, 138, 0.95)' : 'rgba(255, 251, 235, 0.88)')
          : (isSel ? 'rgba(51, 65, 85, 0.92)' : 'rgba(15, 23, 42, 0.78)'),
        isSel ? '#f59e0b' : (unlocked ? '#92400e' : '#475569'),
        1.5
      );

      ctx.save();
      if (!unlocked) ctx.globalAlpha = 0.36;
      this.drawTex(ctx, sk.icon, sx + 6, sy + 14, 34, 34);
      ctx.restore();

      if (unlocked) {
        this.drawText(ctx, `Cấp ${lvl}`, sx + 44, sy + 34, { size: 9.5, color: '#b45309', stroke: null, strokeWidth: 0 });
        this.drawText(ctx, sk.name.slice(0, 11), sx + 6, sy + 4, { size: 8.5, color: '#1e293b', stroke: null, strokeWidth: 0 });
      } else {
        this.drawText(ctx, 'Chưa học', sx + 43, sy + 33, { size: 8.5, color: '#cbd5e1', stroke: null, strokeWidth: 0 });
        this.drawText(ctx, sk.name.slice(0, 11), sx + 6, sy + 4, { size: 8.5, color: '#94a3b8', stroke: null, strokeWidth: 0 });
      }

      this.addHit(`sel_skill_${i}`, sx, sy, 96, 58, () => {
        this.selectedSkillIdx = i;
      });
    }

    const selSkill = skills[this.selectedSkillIdx] || skills[0];
    if (!selSkill) return;

    const lvl = p.skillLevels?.[selSkill.id] || 0;
    this.fillRectGdx(ctx, 22, 22, 311, 186, 'rgba(15, 23, 42, 0.94)', '#f59e0b', 1.5);

    if (lvl < 1) {
      // Kỹ năng chưa mở khóa chuẩn HUDPopupRenderer.java dòng 245-248!
      const reqSm = selSkill.reqPower || 0;
      const learnCost = selSkill.learnCost || 1500;
      const enoughSm = p.power >= reqSm;
      const enoughTn = p.potential >= learnCost;

      this.drawText(ctx, `${selSkill.name} (Chưa mở khóa)`, 34, 186, { size: 11.5, color: '#fca5a5' });
      this.drawWrappedText(ctx, selSkill.desc, 34, 166, 286, 15, { size: 9.8, color: '#e2e8f0', bold: false });
      this.drawText(
        ctx,
        `Yêu cầu Sức mạnh: ${formatNroNum(reqSm)}`,
        34,
        118,
        { size: 10, color: enoughSm ? '#86efac' : '#f87171' }
      );
      this.drawText(
        ctx,
        `Tiềm năng cần học: ${formatNroNum(learnCost)} TN`,
        34,
        98,
        { size: 10, color: enoughTn ? '#fde047' : '#fca5a5' }
      );

      this.drawTex(ctx, 'hud/giaodientrong/nutchucnangclick.png', 52, 40, 250, 40);
      this.drawText(ctx, `LĨNH HỘI BÍ KÍP (${formatNroNum(learnCost)} TN)`, 177, 56, {
        size: 10.5, color: '#fef08a', align: 'center'
      });
      this.addHit('btn_learn_skill', 52, 40, 250, 40, () => {
        if (p.power < reqSm) {
          this.pushBanner(`Cần đạt ${formatNroNum(reqSm)} Sức mạnh mới có thể học [${selSkill.name}]!`, '#fca5a5');
          return;
        }
        if (p.potential < learnCost) {
          this.pushBanner(`Cần ${formatNroNum(learnCost)} Tiềm năng để lĩnh hội [${selSkill.name}]!`, '#fca5a5');
          return;
        }
        p.potential -= learnCost;
        this.engine.unlockSkill(this.selectedSkillIdx);
        sound.playSuperSaiyan();
        this.pushBanner(`Đã lĩnh hội thành công [${selSkill.name} Cấp 1] & tự gán vào thanh kỹ năng!`, '#86efac');
      });
      return;
    }

    // Kỹ năng đã mở khóa -> Nâng cấp Cấp 1..maxPoint (Skill 9 tới Cấp 9!) & Gán vào ô phím 1..5
    const maxLv = selSkill.maxPoint || 7;
    const upgCost = lvl * 2000;
    this.drawText(ctx, `${selSkill.name} (Cấp ${lvl}/${maxLv})`, 34, 188, { size: 11.5, color: '#fde047' });
    if (selSkill.damInfo) {
      this.drawText(ctx, selSkill.damInfo.slice(0, 44), 34, 170, { size: 9.2, color: '#86efac' });
    }
    this.drawWrappedText(ctx, selSkill.desc, 34, 154, 286, 14, { size: 9.2, color: '#e2e8f0', bold: false });
    this.drawText(ctx, `Hồi chiêu: ${selSkill.cd}s   |   Tiêu hao: ${selSkill.kiCost} KI`, 34, 122, {
      size: 9.8, color: '#67e8f9'
    });

    this.drawTex(ctx, 'hud/giaodientrong/nutchucnangclick.png', 34, 82, 165, 32);
    this.drawText(ctx, lvl >= maxLv ? `Đã Tối Đa (Lv.${maxLv})` : `Nâng Cấp (${formatNroNum(upgCost)} TN)`, 116.5, 94, {
      size: 9.5, color: '#fef08a', align: 'center'
    });
    this.addHit('btn_upg_skill', 34, 82, 165, 32, () => {
      if (lvl >= maxLv) {
        this.pushBanner(`Kỹ năng đã đạt cấp tối đa (Lv.${maxLv})!`, '#fde047');
        return;
      }
      if (p.potential < upgCost) {
        this.pushBanner(`Cần ${formatNroNum(upgCost)} Tiềm năng để nâng cấp!`, '#fca5a5');
        return;
      }
      p.potential -= upgCost;
      p.skillLevels[selSkill.id] = lvl + 1;
      sound.playHeal();
      this.pushBanner(`Đã nâng [${selSkill.name}] lên Cấp ${lvl + 1}/${maxLv}! (+15% Uy lực)`, '#86efac');
    });

    this.drawText(ctx, 'Gán vào ô phím tắt:', 34, 62, { size: 10, color: '#cbd5e1' });
    for (let slot = 0; slot < 5; slot++) {
      const bx = 34 + slot * 56;
      const by = 28;
      this.drawTex(ctx, 'hud/giaodientrong/oskill.png', bx, by, 44, 28);
      this.drawText(ctx, `Ô ${slot + 1}`, bx + 22, by + 9, { size: 9.5, color: '#fde047', align: 'center' });
      this.addHit(`assign_skill_slot_${slot}`, bx, by, 44, 28, () => {
        p.skillLoadout[slot] = this.selectedSkillIdx;
        this.pushBanner(`Đã gán [${selSkill.name}] vào phím số [${slot + 1}]!`, '#86efac');
      });
    }
  }

  // --- TAB 3: ĐỆ TỬ (AI SÁT CÁNH & HỢP THỂ PORATA) ---
  renderTabDeTu(ctx) {
    const p = this.engine.player;
    const detu = p.detu;

    this.drawText(ctx, 'ĐỆ TỬ ĐỒNG HÀNH', 177, 424, {
      size: 13.5, color: '#7c2d12', stroke: null, strokeWidth: 0, align: 'center'
    });

    if (!detu) {
      this.drawTex(ctx, 'vatpham/vatphamgame/phu_tro/trung_de_tu.png', 145, 320, 64, 72);
      this.drawWrappedText(
        ctx,
        'Bạn chưa có Đệ Tử! Hãy nhận Quà Tân Thủ từ Admin Dũng Lê (Nhà Gôhan) hoặc mua Quả Trứng Đệ Tử tại Tiệm Thành Lê (Làng Aru) để ấp nở Đệ Tử chiến đấu tự động!',
        28,
        290,
        298,
        19,
        { size: 11.5, color: '#1e293b', stroke: null, strokeWidth: 0, bold: false }
      );
      return;
    }

    const detuPlanet = PLANET_DEFS[detu.planet || 0] || PLANET_DEFS[0];
    this.fillRectGdx(ctx, 22, 230, 311, 180, 'rgba(255,251,235,0.9)', '#92400e', 1.5);
    this.drawTex(ctx, `nhanvat/detu/${detuPlanet.key}/avtlon.png`, 34, 330, 56, 64);

    this.drawText(ctx, `${detu.name} (${detuPlanet.name})`, 104, 382, { size: 12.5, color: '#b45309', stroke: null, strokeWidth: 0 });
    this.drawText(ctx, `Sức mạnh: ${formatNroNum(detu.power)}`, 104, 360, { size: 11, color: '#1e293b', stroke: null, strokeWidth: 0 });
    this.drawText(ctx, `HP: ${formatNroNum(detu.hp)} / ${formatNroNum(detu.maxHp)}`, 104, 340, { size: 11, color: '#dc2626', stroke: null, strokeWidth: 0 });
    this.drawText(ctx, `Sức đánh: ${formatNroNum(detu.attack)}`, 104, 320, { size: 11, color: '#1d4ed8', stroke: null, strokeWidth: 0 });
    this.drawText(ctx, `Trạng thái: ${p.isFused ? 'ĐANG HỢP THỂ' : detu.modeLabel}`, 34, 250, {
      size: 11.5, color: '#15803d', stroke: null, strokeWidth: 0
    });

    const modes = [
      { key: 'attack', label: 'Tấn Công' },
      { key: 'protect', label: 'Bảo Vệ' },
      { key: 'follow', label: 'Đi Theo' },
      { key: 'home', label: 'Về Nhà' }
    ];
    for (let i = 0; i < modes.length; i++) {
      const m = modes[i];
      const mx = 22 + (i % 2) * 158;
      const my = 170 - Math.floor(i / 2) * 44;
      const active = detu.mode === m.key;
      this.drawTex(
        ctx,
        active ? 'hud/giaodientrong/nutchucnangclick.png' : 'hud/giaodientrong/nutchucnang.png',
        mx,
        my,
        150,
        36
      );
      this.drawText(ctx, m.label, mx + 75, my + 13, { size: 11, color: '#fef08a', align: 'center' });
      this.addHit(`detu_mode_${m.key}`, mx, my, 150, 36, () => {
        detu.mode = m.key;
        detu.modeLabel = m.label;
        this.pushBanner(`Đệ tử chuyển sang chế độ: ${m.label}!`, '#86efac');
      });
    }

    // Nút Hợp Thể nhanh
    this.drawTex(ctx, 'hud/giaodientrong/nutchucnangclick.png', 52, 52, 250, 44);
    this.drawText(ctx, p.isFused ? 'TÁCH HỢP THỂ' : 'HỢP THỂ PORATA', 177, 69, {
      size: 12.5, color: '#fef08a', align: 'center'
    });
    this.addHit('btn_toggle_fusion', 52, 52, 250, 44, () => {
      this.engine.toggleFusion(1);
    });
  }

  // --- TAB 4: CHỨC NĂNG (VIÊN CAPSULE 36 MAP THEO VÙNG, SƠ ĐỒ THẾ GIỚI, HỆ THỐNG) ---
  renderTabFunctions(ctx) {
    const p = this.engine.player;

    this.drawText(ctx, 'CAPSULE 48 MAP & TỪ ĐIỂN DATANRO', 177, 430, {
      size: 11.2, color: '#fde047', align: 'center'
    });

    const regionGroups = [
      { label: 'T.Đất', filter: (m) => m.region === 'Trái Đất' },
      { label: 'Karin/Thần', filter: (m) => m.region === 'Thần Giới & Karin' },
      { label: 'Mở Rộng', filter: (m) => m.region === 'Trái Đất Mở Rộng' },
      { label: 'NM / XD', filter: (m) => m.region === 'Hành Tinh Namếc' || m.region === 'Hành Tinh Xayda' },
      { label: 'VũTrụ/PB', filter: (m) => m.region === 'Vũ Trụ & Phó Bản' }
    ];

    for (let r = 0; r < regionGroups.length; r++) {
      const rx = 18 + r * 64;
      const ry = 398;
      const active = (this.capsuleRegionIdx || 0) === r;
      this.drawTex(
        ctx,
        active ? 'hud/giaodientrong/nutchucnangclick.png' : 'hud/giaodientrong/nutchucnang.png',
        rx,
        ry,
        61,
        24
      );
      this.drawText(ctx, regionGroups[r].label, rx + 30.5, ry + 8, {
        size: 8.5, color: active ? '#fef08a' : '#ffffff', align: 'center'
      });
      this.addHit(`cap_reg_${r}`, rx, ry, 61, 24, () => {
        this.capsuleRegionIdx = r;
      });
    }

    const curGroup = regionGroups[this.capsuleRegionIdx || 0] || regionGroups[0];
    const groupMaps = MAPS_CONFIG.filter(curGroup.filter).slice(0, 10);
    for (let i = 0; i < groupMaps.length; i++) {
      const m = groupMaps[i];
      const col = i % 2;
      const row = Math.floor(i / 2);
      const mx = 22 + col * 158;
      const my = 362 - row * 35;
      const isCur = this.engine.currentMapId === m.id;
      this.drawTex(
        ctx,
        isCur ? 'hud/giaodientrong/nutchucnangclick.png' : 'hud/giaodientrong/nutchucnang.png',
        mx,
        my,
        150,
        30
      );
      const shortName = m.name.length > 19 ? `${m.name.slice(0, 18)}…` : m.name;
      this.drawText(ctx, isCur ? `★ ${shortName}` : shortName, mx + 75, my + 10, {
        size: 9, color: isCur ? '#fde047' : '#ffffff', align: 'center'
      });
      this.addHit(`teleport_map_${m.id}`, mx, my, 150, 30, () => {
        if (!isCur) {
          this.popupOpen = false;
          this.engine.changeMap(m.id, m.defaultSpawn.x, m.defaultSpawn.y);
        }
      });
    }

    // Các nút hệ thống bên dưới (Sơ Đồ Thế Giới 2 Trục + Nút Ảo + Toàn Màn Hình + BXH + Âm Thanh + Đổi TK)
    const sysBtns = [
      {
        label: 'Sơ Đồ Thế Giới',
        onClick: () => {
          this.popupOpen = false;
          this.activePanel = 'WORLD_MAP';
        }
      },
      {
        label: 'Từ Điển DataNRO',
        onClick: () => {
          this.popupOpen = false;
          this.wikiPage = 0;
          this.activePanel = 'DATANRO_WIKI';
        }
      },
      {
        label: `Nút Ảo: ${this.showVirtualControls ? 'BẬT' : 'TẮT'}`,
        onClick: () => {
          this.showVirtualControls = !this.showVirtualControls;
          localStorage.setItem('nro_virtual_controls', String(this.showVirtualControls));
          this.pushBanner(
            `Nút điều hướng kéo thả: ${this.showVirtualControls ? 'BẬT' : 'TẮT'}!`,
            '#fde047'
          );
        }
      },
      {
        label: 'Bảng Xếp Hạng',
        onClick: () => {
          this.popupOpen = false;
          this.openLeaderboard();
        }
      },
      {
        label: `Âm Thanh: ${sound.isMuted ? 'TẮT' : 'BẬT'}`,
        onClick: () => {
          sound.toggleMute();
        }
      },
      {
        label: 'Đổi Tài Khoản',
        onClick: () => {
          saveCharacterData(p);
          if (this.engine.onReturnToMenu) this.engine.onReturnToMenu();
        }
      }
    ];

    for (let i = 0; i < sysBtns.length; i++) {
      const b = sysBtns[i];
      const bx = 22 + (i % 2) * 158;
      const by = 148 - Math.floor(i / 2) * 40;
      this.drawTex(ctx, 'hud/giaodientrong/nutchucnang.png', bx, by, 150, 33);
      this.drawText(ctx, b.label, bx + 75, by + 11, { size: 9.5, color: '#fef08a', align: 'center' });
      this.addHit(`sys_btn_${i}`, bx, by, 150, 33, b.onClick);
    }
  }

  // ==================== BẢNG ĐÔI BÊN PHẢI (SHOP THÀNH LÊ / RƯƠNG ĐỒ / PHA LÊ THẦY HIẾU) ====================
  renderRightDualPanel(ctx) {
    const p = this.engine.player;
    const ox = 355;

    this.drawTex(ctx, 'hud/giaodientrong/popupnhanvat.jpg', ox, 0, 355, 610);
    this.drawTex(ctx, 'hud/giaodientrong/ttluc.jpg', ox + 12, 12, 331, 480);

    // Nút đóng bảng phải
    this.drawTex(ctx, 'hud/giaodientrong/nutX.png', ox + 316, 572, 28, 28);
    this.addHit('btn_close_dual', ox + 310, 566, 38, 38, () => {
      this.activePanel = null;
    });

    if (this.activePanel === 'SHOP') {
      this.drawTex(ctx, 'nhanvat/npc/admin_thanhle/avt.png', ox + 20, 518, 46, 50);
      this.drawText(ctx, 'TIỆM BẢO • ĐẠT • KHÁNH', ox + 78, 550, { size: 13, color: '#fde047' });
      this.drawText(ctx, 'Trang bị Thần Linh, Hủy Diệt & Thiên Sứ DataNRO', ox + 78, 530, { size: 10, color: '#ffffff' });

      // 3 Tab cửa hàng
      for (let t = 0; t < SHOP_TABS.length; t++) {
        const tx = ox + 16 + t * 108;
        const active = this.shopTabIdx === t;
        this.drawTex(
          ctx,
          active ? 'hud/giaodientrong/nutchucnangclick.png' : 'hud/giaodientrong/nutchucnang.png',
          tx,
          496,
          102,
          28
        );
        this.drawText(ctx, SHOP_TABS[t].label, tx + 51, 506, { size: 10.5, color: '#fef08a', align: 'center' });
        this.addHit(`shop_tab_${t}`, tx, 496, 102, 28, () => {
          this.shopTabIdx = t;
          this.selectedShopItemId = null;
        });
      }

      const tabItems = SHOP_TABS[this.shopTabIdx]?.items || [];
      for (let i = 0; i < tabItems.length; i++) {
        const itemId = tabItems[i];
        const def = ITEM_CATALOG[itemId];
        if (!def) continue;
        const col = i % 2;
        const row = Math.floor(i / 2);
        const ix = ox + 20 + col * 160;
        const iy = 430 - row * 54;
        if (iy < 85) break;

        const isSel = this.selectedShopItemId === itemId;
        this.fillRectGdx(
          ctx,
          ix,
          iy,
          154,
          48,
          isSel ? 'rgba(254,240,138,0.95)' : 'rgba(255,251,235,0.86)',
          isSel ? '#d97706' : '#92400e',
          1.5
        );
        this.drawTex(ctx, def.icon, ix + 6, iy + 8, 32, 32);
        this.drawText(ctx, def.name.slice(0, 15), ix + 42, iy + 30, {
          size: 9.5, color: '#7c2d12', stroke: null, strokeWidth: 0
        });
        const priceStr = def.gem > 0 ? `${def.gem} Ngọc` : `${formatNroNum(def.gold)} Vàng`;
        this.drawText(ctx, priceStr, ix + 42, iy + 12, {
          size: 9.5, color: def.gem > 0 ? '#0284c7' : '#b45309', stroke: null, strokeWidth: 0
        });

        this.addHit(`shop_item_${itemId}`, ix, iy, 154, 48, () => {
          this.selectedShopItemId = itemId;
        });
      }

      if (this.selectedShopItemId && ITEM_CATALOG[this.selectedShopItemId]) {
        const def = ITEM_CATALOG[this.selectedShopItemId];
        this.fillRectGdx(ctx, ox + 18, 18, 319, 64, 'rgba(30,41,59,0.96)', '#f59e0b', 1.5);
        this.drawText(ctx, def.name, ox + 28, 63, { size: 11, color: '#fde047' });
        this.drawText(ctx, def.desc.slice(0, 44), ox + 28, 45, { size: 9, color: '#e2e8f0', bold: false });

        this.drawTex(ctx, 'hud/giaodientrong/nutchucnangclick.png', ox + 240, 26, 88, 36);
        this.drawText(ctx, 'MUA NGAY', ox + 284, 40, { size: 10.5, color: '#fef08a', align: 'center' });
        this.addHit('btn_buy_shop_item', ox + 240, 26, 88, 36, () => {
          this.buyItem(def);
        });
      }
    } else if (this.activePanel === 'CHEST') {
      this.drawTex(ctx, 'nhanvat/npc/ruong_do/avt_ruong.png', ox + 20, 520, 46, 46);
      this.drawText(ctx, 'RƯƠNG ĐỒ TẠI NHÀ', ox + 78, 548, { size: 13.5, color: '#fde047' });
      this.drawText(ctx, 'Click vật phẩm trong Rương để lấy ra túi', ox + 78, 528, { size: 10.5, color: '#ffffff' });

      for (let idx = 0; idx < 20; idx++) {
        const col = idx % 5;
        const row = Math.floor(idx / 5);
        const cx = ox + 24 + col * 62;
        const cy = 420 - row * 50;
        const item = p.chest[idx];
        this.drawTex(ctx, 'hud/giaodientrong/ohanhtrang.jpg', cx, cy, 54, 42);
        if (item && ITEM_CATALOG[item.id]) {
          this.drawTex(ctx, ITEM_CATALOG[item.id].icon, cx + 11, cy + 5, 32, 32);
          this.addHit(`chest_take_${idx}`, cx, cy, 54, 42, () => {
            if (p.bag.length >= 20) {
              this.pushBanner('Túi Hành Trang đã đầy!', '#fca5a5');
              return;
            }
            p.bag.push(item);
            p.chest.splice(idx, 1);
            this.pushBanner('Đã lấy vật phẩm từ Rương vào Hành Trang!', '#86efac');
          });
        }
      }
    } else if (this.activePanel === 'CRYSTAL') {
      this.drawTex(ctx, 'nhanvat/npc/thay_hieu/avt.png', ox + 20, 518, 46, 50);
      this.drawText(ctx, 'PHA LÊ HÓA THẦY QUYẾT', ox + 78, 548, { size: 13, color: '#fde047' });
      this.drawText(ctx, 'Chọn Trang Bị đang mặc bên trái để nâng Sao', ox + 78, 528, { size: 10, color: '#ffffff' });

      const slotKey = this.crystalEquipSlot || this.selectedEquipSlot || 'ao';
      const targetEq = p.equipped[slotKey];

      if (!targetEq || !ITEM_CATALOG[targetEq.id]) {
        this.drawWrappedText(
          ctx,
          'Hãy mặc một món Trang Bị (Áo, Quần, Găng, Giày, Rađa hoặc Cải Trang) và click vào ô Trang Bị Đang Mặc ở khung bên trái!',
          ox + 28,
          440,
          298,
          20,
          { size: 11.5, color: '#7c2d12', stroke: null, strokeWidth: 0 }
        );
      } else {
        const def = ITEM_CATALOG[targetEq.id];
        const sockets = targetEq.sockets || 0;
        const stars = targetEq.stars || 0;

        this.fillRectGdx(ctx, ox + 24, 290, 307, 175, 'rgba(30,41,59,0.92)', '#f59e0b', 2);
        this.drawTex(ctx, def.icon, ox + 154, 405, 48, 48);
        this.drawText(ctx, def.name, ox + 177, 386, { size: 12, color: '#fde047', align: 'center' });

        // Vẽ 7 ngôi sao (saoxanh.png đã ép, saoden.png lỗ trống)
        for (let s = 0; s < 7; s++) {
          const sx = ox + 64 + s * 34;
          if (s < stars) {
            this.drawTex(ctx, 'hud/giaodientrong/saoxanh.png', sx, 348, 24, 24);
          } else if (s < sockets) {
            this.drawTex(ctx, 'hud/giaodientrong/saoden.png', sx, 348, 24, 24);
          } else {
            this.fillRectGdx(ctx, sx + 5, 353, 14, 14, 'rgba(255,255,255,0.15)', '#64748b', 1);
          }
        }

        this.drawText(ctx, `Số lỗ Pha Lê: ${sockets}/7   |   Đã ép: ${stars} Sao (+${stars * 8}% Chỉ số)`, ox + 177, 315, {
          size: 10.5, color: '#67e8f9', align: 'center'
        });

        // Nút 1: Đục lỗ Pha Lê Hóa (tốn Vàng)
        const socketCost = (sockets + 1) * 15000;
        this.drawTex(ctx, 'hud/giaodientrong/nutchucnangclick.png', ox + 42, 210, 270, 44);
        this.drawText(ctx, `PHA LÊ HÓA ĐỤC LỖ (${formatNroNum(socketCost)} Vàng)`, ox + 177, 227, {
          size: 11, color: '#fef08a', align: 'center'
        });
        this.addHit('btn_drill_socket', ox + 42, 210, 270, 44, () => {
          if (sockets >= 7) {
            this.pushBanner('Trang bị đã đạt tối đa 7 lỗ Pha Lê!', '#fde047');
            return;
          }
          if (p.gold < socketCost) {
            this.pushBanner(`Cần ${formatNroNum(socketCost)} Vàng để Pha Lê Hóa!`, '#fca5a5');
            return;
          }
          p.gold -= socketCost;
          targetEq.sockets = sockets + 1;
          sound.playHeal();
          this.pushBanner(`Đục lỗ thành công! Trang bị hiện có ${targetEq.sockets} lỗ Sao Pha Lê!`, '#86efac');
        });

        // Nút 2: Ép Sao Pha Lê (dùng Đá Pha Lê hoặc 10 Ngọc Xanh)
        this.drawTex(ctx, 'hud/giaodientrong/nutchucnangclick.png', ox + 42, 145, 270, 44);
        this.drawText(ctx, 'ÉP SAO CƯỜNG HÓA (1 Đá Pha Lê / 10 Ngọc)', ox + 177, 162, {
          size: 10.5, color: '#86efac', align: 'center'
        });
        this.addHit('btn_inlay_star', ox + 42, 145, 270, 44, () => {
          if ((targetEq.stars || 0) >= (targetEq.sockets || 0)) {
            this.pushBanner('Hãy bấm [Pha Lê Hóa Đục Lỗ] trước khi ép thêm Sao!', '#fca5a5');
            return;
          }
          const crystalIdx = p.bag.findIndex((it) => it && ITEM_CATALOG[it.id]?.slot === 'crystal');
          if (crystalIdx >= 0) {
            p.bag.splice(crystalIdx, 1);
          } else if (p.gem >= 10) {
            p.gem -= 10;
          } else {
            this.pushBanner('Cần 1 Đá Pha Lê trong túi hoặc 10 Ngọc Xanh!', '#fca5a5');
            return;
          }
          targetEq.stars = (targetEq.stars || 0) + 1;
          this.engine.recalcStats();
          sound.playSuperSaiyan();
          this.pushBanner(`Ép Sao thành công! [${def.name}] đạt ${targetEq.stars} Sao Pha Lê!`, '#fde047');
        });
      }
    }
  }

  buyItem(def) {
    const p = this.engine.player;
    if (p.bag.length >= 20) {
      this.pushBanner('Hành trang đã đầy (20/20)! Hãy cất bớt vào Rương Đồ!', '#fca5a5');
      return;
    }
    if (def.gem > 0) {
      if (p.gem < def.gem) {
        this.pushBanner(`Không đủ Ngọc Xanh! Cần ${def.gem} Ngọc.`, '#fca5a5');
        return;
      }
      p.gem -= def.gem;
    } else {
      if (p.gold < def.gold) {
        this.pushBanner(`Không đủ Vàng! Cần ${formatNroNum(def.gold)} Vàng.`, '#fca5a5');
        return;
      }
      p.gold -= def.gold;
    }
    this.engine.addItemToBag(def.id);
    sound.playCoin();
    this.pushBanner(`Mua thành công [${def.name}]! Mở Hành Trang để sử dụng!`, '#86efac');
  }

  // ==================== VÒNG QUAY MAY MẮN HẢI ĐĂNG (/assets/gacha/) ====================
  renderGachaModal(ctx) {
    this.fillRectGdx(ctx, 0, 0, VIRTUAL_W, VIRTUAL_H, 'rgba(0,0,0,0.68)', null);

    const mw = 480;
    const mh = 430;
    const mx = (VIRTUAL_W - mw) / 2;
    const my = (VIRTUAL_H - mh) / 2;

    this.drawTex(ctx, 'hud/giaodientrong/popupnhanvat.jpg', mx, my, mw, mh);
    this.drawTex(ctx, 'hud/giaodientrong/ttluc.jpg', mx + 16, my + 16, mw - 32, mh - 76);
    this.drawTex(ctx, 'hud/giaodientrong/nutX.png', mx + mw - 38, my + mh - 38, 28, 28);
    this.addHit('close_gacha', mx + mw - 44, my + mh - 44, 38, 38, () => {
      if (!this.gachaSpinning) this.activePanel = null;
    });

    this.drawText(ctx, 'VÒNG QUAY THƯỢNG ĐẾ HẢI ĐĂNG', mx + mw / 2, my + mh - 34, {
      size: 14, color: '#fde047', align: 'center'
    });

    // Vẽ Vòng quay thật từ /assets/gacha/1/vongquay (1..17).png
    this.drawTex(ctx, `gacha/1/vongquay (${this.gachaFrame}).png`, mx + 125, my + 125, 230, 210);

    // Các icon giải thưởng nổi bật xung quanh
    this.drawTex(ctx, 'gacha/caitrang.png', mx + 42, my + 265, 52, 52);
    this.drawTex(ctx, 'gacha/ngocrong.png', mx + 42, my + 175, 52, 52);
    this.drawTex(ctx, 'gacha/deolung.png', mx + mw - 94, my + 265, 52, 52);
    this.drawTex(ctx, 'gacha/aura.png', mx + mw - 94, my + 175, 52, 52);

    if (this.gachaResult) {
      this.fillRectGdx(ctx, mx + 95, my + 82, mw - 190, 44, 'rgba(20,83,45,0.95)', '#facc15', 2);
      this.drawTex(ctx, this.gachaResult.icon, mx + 106, my + 88, 32, 32);
      this.drawText(ctx, `Trúng: ${this.gachaResult.name}`, mx + 148, my + 100, {
        size: 11.5, color: '#fde047'
      });
    }

    this.drawTex(ctx, 'hud/giaodientrong/nutchucnangclick.png', mx + 135, my + 26, 210, 44);
    this.drawText(
      ctx,
      this.gachaSpinning ? 'ĐANG QUAY...' : 'QUAY NGAY (1 Vé / 10 Ngọc)',
      mx + mw / 2,
      my + 43,
      { size: 11.5, color: '#fef08a', align: 'center' }
    );
    this.addHit('btn_spin_gacha', mx + 135, my + 26, 210, 44, () => {
      this.startGachaSpin();
    });
  }

  // ==================== BẢNG XẾP HẠNG SUPABASE CLOUD ====================
  renderLeaderboardModal(ctx) {
    this.fillRectGdx(ctx, 0, 0, VIRTUAL_W, VIRTUAL_H, 'rgba(0,0,0,0.68)', null);
    const mw = 520;
    const mh = 450;
    const mx = (VIRTUAL_W - mw) / 2;
    const my = (VIRTUAL_H - mh) / 2;

    this.drawTex(ctx, 'hud/giaodientrong/popupnhanvat.jpg', mx, my, mw, mh);
    this.drawTex(ctx, 'hud/giaodientrong/ttluc.jpg', mx + 16, my + 16, mw - 32, mh - 74);
    this.drawTex(ctx, 'hud/giaodientrong/nutX.png', mx + mw - 38, my + mh - 38, 28, 28);
    this.addHit('close_lb', mx + mw - 44, my + mh - 44, 38, 38, () => {
      this.activePanel = null;
    });

    this.drawText(ctx, 'BẢNG XẾP HẠNG CAO THỦ SERVER', mx + mw / 2, my + mh - 34, {
      size: 14, color: '#fde047', align: 'center'
    });

    if (this.leaderboardLoading) {
      this.drawText(ctx, 'Đang tải dữ liệu từ Supabase Cloud...', mx + mw / 2, my + 220, {
        size: 12.5, color: '#7c2d12', stroke: null, strokeWidth: 0, align: 'center'
      });
      return;
    }

    for (let i = 0; i < Math.min(8, this.leaderboardRows.length); i++) {
      const r = this.leaderboardRows[i];
      const ry = my + mh - 118 - i * 42;
      const pName = PLANET_DEFS[r.planet]?.name || 'Trái Đất';
      this.fillRectGdx(
        ctx,
        mx + 28,
        ry,
        mw - 56,
        36,
        i === 0 ? 'rgba(254,240,138,0.95)' : 'rgba(255,251,235,0.88)',
        i < 3 ? '#d97706' : '#92400e',
        1.5
      );
      this.drawText(ctx, `#${i + 1}  ${r.name} (${pName})`, mx + 40, ry + 13, {
        size: 11.5, color: i === 0 ? '#b45309' : '#1e293b', stroke: null, strokeWidth: 0
      });
      this.drawText(ctx, `SM: ${formatNroNum(r.power)}`, mx + mw - 42, ry + 13, {
        size: 11.5, color: '#15803d', stroke: null, strokeWidth: 0, align: 'right'
      });
    }
  }

  // ==================== HỘP THOẠI NPC CHUẨN NPC_KHUNG_CHUNG ====================
  renderNpcDialog(ctx) {
    const dlg = this.npcDialog;
    if (!dlg) return;

    this.fillRectGdx(ctx, 0, 0, VIRTUAL_W, VIRTUAL_H, 'rgba(0,0,0,0.42)', null);

    // Khung trắng viền đen 2px chuẩn Dragon Boy (rộng 640, cao 135, phía trên hàng nút nutvuong)
    const boxW = 660;
    const boxH = 132;
    const boxX = (VIRTUAL_W - boxW) / 2;
    const boxY = 128;

    this.fillRectGdx(ctx, boxX, boxY, boxW, boxH, '#ffffff', '#000000', 3);
    this.fillRectGdx(ctx, boxX + 4, boxY + 4, boxW - 8, boxH - 8, '#fffbeb', '#d97706', 1.5);

    // Avatar NPC nhấp nhô bên trái khung thoại
    const bob = Math.sin(performance.now() * 0.006) * 3;
    if (dlg.avt) {
      this.drawTex(ctx, dlg.avt, boxX + 20, boxY + boxH - 36 + bob, 64, 72);
    }

    // Tên NPC
    this.drawText(ctx, dlg.npc.name, boxX + 98, boxY + boxH - 22, {
      size: 13.5, color: '#b45309', stroke: null, strokeWidth: 0
    });

    // Nội dung lời thoại (hỗ trợ xuống dòng \n)
    const lines = String(dlg.text || '').split('\n');
    let curY = boxY + boxH - 46;
    for (let i = 0; i < lines.length; i++) {
      curY = this.drawWrappedText(ctx, lines[i], boxX + 98, curY, boxW - 118, 20, {
        size: 12, color: '#111827', stroke: null, strokeWidth: 0, bold: false
      });
    }

    // Hàng nút vuông chuẩn nutvuong.png ở đáy màn hình (tự động co giãn nếu có 6-7 điểm đến Tàu Vũ Trụ)
    const btns = dlg.buttons || [];
    const btnW = btns.length > 5 ? 114 : 124;
    const btnH = btns.length > 5 ? 90 : 96;
    const gap = btns.length > 5 ? 10 : 18;
    const totalW = btns.length * btnW + Math.max(0, btns.length - 1) * gap;
    const startX = (VIRTUAL_W - totalW) / 2;

    for (let i = 0; i < btns.length; i++) {
      const b = btns[i];
      const bx = startX + i * (btnW + gap);
      const by = 16;
      this.drawTex(ctx, 'hud/giaodientrong/nutvuong.png', bx, by, btnW, btnH);
      this.drawWrappedText(ctx, b.label, bx + btnW / 2, by + (btns.length > 5 ? 52 : 56), btnW - 18, 15, {
        size: btns.length > 5 ? 10.5 : 11.5, color: '#532905', stroke: '#fef3c7', strokeWidth: 2, align: 'center'
      });
      this.addHit(`npc_btn_${i}`, bx, by, btnW, btnH, b.action);
    }
  }

  // ==================== SƠ ĐỒ THẾ GIỚI 2 TRỤC LIÊN THÔNG CHUẨN NGỌC RỒNG ONLINE ====================
  renderWorldMapModal(ctx) {
    this.fillRectGdx(ctx, 0, 0, VIRTUAL_W, VIRTUAL_H, 'rgba(0,0,0,0.72)', null);
    const mw = 860;
    const mh = 510;
    const mx = (VIRTUAL_W - mw) / 2;
    const my = (VIRTUAL_H - mh) / 2;

    this.fillRectGdx(ctx, mx, my, mw, mh, '#0f172a', '#f59e0b', 3);
    this.fillRectGdx(ctx, mx + 6, my + 6, mw - 12, mh - 12, 'rgba(15, 23, 42, 0.96)', '#38bdf8', 1.5);

    this.drawTex(ctx, 'hud/giaodientrong/nutX.png', mx + mw - 42, my + mh - 42, 30, 30);
    this.addHit('close_world_map', mx + mw - 48, my + mh - 48, 42, 42, () => {
      this.activePanel = null;
    });

    const curMap = MAPS_CONFIG[this.engine.currentMapId] || MAPS_CONFIG[0];
    this.drawText(ctx, 'SƠ ĐỒ KẾT NỐI THẾ GIỚI NGỌC RỒNG ONLINE (48 MAP THỰC CHIẾN)', mx + mw / 2, my + mh - 32, {
      size: 13.5, color: '#fde047', align: 'center'
    });
    this.drawText(ctx, `Vị trí hiện tại: [${curMap.name}] (${curMap.region})`, mx + mw / 2, my + mh - 54, {
      size: 11.5, color: '#86efac', align: 'center'
    });

    for (let i = 0; i < WORLD_TOPOLOGY_LINES.length; i++) {
      const ly = my + mh - 86 - i * 24;
      this.drawText(ctx, WORLD_TOPOLOGY_LINES[i], mx + 24, ly, {
        size: 10.5,
        color: i % 3 === 0 ? '#e0f2fe' : '#f8fafc',
        font: 'monospace',
        bold: true
      });
    }
  }

  // ==================== TỪ ĐIỂN GỐC ElectroHeavenVN/DataNRO (187 MAP • 97 QUÁI • 25 SERVER) ====================
  renderDataNroWikiModal(ctx) {
    this.fillRectGdx(ctx, 0, 0, VIRTUAL_W, VIRTUAL_H, 'rgba(0,0,0,0.75)', null);
    const mw = 840;
    const mh = 510;
    const mx = (VIRTUAL_W - mw) / 2;
    const my = (VIRTUAL_H - mh) / 2;

    this.fillRectGdx(ctx, mx, my, mw, mh, '#0f172a', '#f59e0b', 3);
    this.fillRectGdx(ctx, mx + 6, my + 6, mw - 12, mh - 12, 'rgba(15, 23, 42, 0.96)', '#38bdf8', 1.5);

    this.drawTex(ctx, 'hud/giaodientrong/nutX.png', mx + mw - 42, my + mh - 42, 30, 30);
    this.addHit('close_datanro_wiki', mx + mw - 48, my + mh - 48, 42, 42, () => {
      this.activePanel = null;
    });

    this.drawText(ctx, 'TỪ ĐIỂN DỮ LIỆU GỐC ElectroHeavenVN/DataNRO', mx + mw / 2, my + mh - 30, {
      size: 14, color: '#fde047', align: 'center'
    });

    const wTabs = [
      `187 Map TeaMobi`,
      `97 Mẫu Quái Gốc`,
      `25 Máy Chủ DataNRO`
    ];
    for (let t = 0; t < wTabs.length; t++) {
      const tx = mx + 95 + t * 225;
      const ty = my + mh - 74;
      const act = (this.wikiTab || 0) === t;
      this.drawTex(
        ctx,
        act ? 'hud/giaodientrong/nutchucnangclick.png' : 'hud/giaodientrong/nutchucnang.png',
        tx,
        ty,
        205,
        30
      );
      this.drawText(ctx, wTabs[t], tx + 102.5, ty + 10, {
        size: 10.5, color: act ? '#fef08a' : '#ffffff', align: 'center'
      });
      this.addHit(`wiki_tab_${t}`, tx, ty, 205, 30, () => {
        this.wikiTab = t;
        this.wikiPage = 0;
      });
    }

    const list = this.wikiTab === 1
      ? DATANRO_MOBS_CATALOG
      : (this.wikiTab === 2 ? DATANRO_SERVERS : DATANRO_MAPS_CATALOG);
    const pageSize = 24;
    const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
    const curPage = Math.min(totalPages - 1, Math.max(0, this.wikiPage || 0));
    const slice = list.slice(curPage * pageSize, (curPage + 1) * pageSize);

    for (let i = 0; i < slice.length; i++) {
      const item = slice[i];
      const col = i % 3;
      const row = Math.floor(i / 3);
      const ix = mx + 24 + col * 268;
      const iy = my + mh - 126 - row * 42;
      this.fillRectGdx(ctx, ix, iy, 256, 36, 'rgba(30, 41, 59, 0.9)', '#334155', 1);

      if (this.wikiTab === 1) {
        this.drawText(ctx, `#${item.id} ${item.name}`, ix + 8, iy + 21, { size: 9.8, color: '#fde047' });
        this.drawText(ctx, `HP gốc: ${formatNroNum(item.hp)} | Tốc: ${item.speed}`, ix + 8, iy + 7, { size: 8.8, color: '#86efac' });
      } else if (this.wikiTab === 2) {
        this.drawText(ctx, `[${item.publisher}] ${item.name}`, ix + 8, iy + 21, { size: 9.8, color: '#fde047' });
        this.drawText(ctx, `Mã: ${item.code} • ${item.tag}`, ix + 8, iy + 7, { size: 8.8, color: '#67e8f9' });
      } else {
        this.drawText(ctx, `[Map #${item.id}] ${item.name}`, ix + 10, iy + 14, { size: 10, color: '#f8fafc' });
      }
    }

    // Phân trang
    this.drawTex(ctx, 'hud/giaodientrong/nutchucnang.png', mx + 220, my + 16, 120, 32);
    this.drawText(ctx, '◄ Trang Trước', mx + 280, my + 28, { size: 10, color: '#fef08a', align: 'center' });
    this.addHit('wiki_prev', mx + 220, my + 16, 120, 32, () => {
      this.wikiPage = (curPage - 1 + totalPages) % totalPages;
    });

    this.drawText(ctx, `Trang ${curPage + 1} / ${totalPages}`, mx + mw / 2, my + 28, {
      size: 11, color: '#ffffff', align: 'center'
    });

    this.drawTex(ctx, 'hud/giaodientrong/nutchucnang.png', mx + mw - 340, my + 16, 120, 32);
    this.drawText(ctx, 'Trang Sau ►', mx + mw - 280, my + 28, { size: 10, color: '#fef08a', align: 'center' });
    this.addHit('wiki_next', mx + mw - 340, my + 16, 120, 32, () => {
      this.wikiPage = (curPage + 1) % totalPages;
    });
  }

  // ==================== KHUNG CHAT & NHẬP GIFTCODE (khungchat.png) ====================
  renderChatBox(ctx) {
    this.fillRectGdx(ctx, 0, 0, VIRTUAL_W, VIRTUAL_H, 'rgba(0,0,0,0.45)', null);
    const cw = 528;
    const ch = 152;
    const cx = (VIRTUAL_W - cw) / 2;
    const cy = 220;

    this.drawTex(ctx, 'hud/giaodienngoai/chung/khungchat.png', cx, cy, cw, ch);
    this.drawText(
      ctx,
      this.chatMode === 'GIFTCODE'
        ? 'NHẬP MÃ GIFTCODE (VD: TANTHU, NROWEB, DRAGONBOY, NGOCRONG)'
        : 'TRÒ CHUYỆN KÊNH THẾ GIỚI (Cũng có thể gõ trực tiếp Giftcode)',
      cx + cw / 2,
      cy + ch - 32,
      { size: 11.5, color: '#532905', stroke: null, strokeWidth: 0, align: 'center' }
    );

    this.fillRectGdx(ctx, cx + 36, cy + 68, cw - 72, 36, '#ffffff', '#78350f', 2);
    const cursor = Math.floor(performance.now() / 450) % 2 === 0 ? '|' : '';
    this.drawText(ctx, `${this.chatInputText}${cursor}`, cx + 48, cy + 81, {
      size: 13, color: '#111827', stroke: null, strokeWidth: 0
    });

    // Nút Gửi & Đóng
    this.drawTex(ctx, 'hud/giaodienngoai/chung/nutdangnhap2.png', cx + 120, cy + 14, 128, 42);
    this.drawText(ctx, 'Xác Nhận', cx + 184, cy + 30, {
      size: 12, color: '#532905', stroke: null, strokeWidth: 0, align: 'center'
    });
    this.addHit('chat_submit', cx + 120, cy + 14, 128, 42, () => {
      this.submitChatOrGiftcode(this.chatInputText);
    });

    this.drawTex(ctx, 'hud/giaodienngoai/chung/nutdangnhap2.png', cx + 280, cy + 14, 128, 42);
    this.drawText(ctx, 'Đóng', cx + 344, cy + 30, {
      size: 12, color: '#532905', stroke: null, strokeWidth: 0, align: 'center'
    });
    this.addHit('chat_cancel', cx + 280, cy + 14, 128, 42, () => {
      this.chatOpen = false;
      if (this.engine.onTextInputToggle) this.engine.onTextInputToggle(false, '');
    });
  }

  // ==================== RỒNG THẦN 9 KHÚC HUYỀN THOẠI CHUẨN HUDRongThan.java ====================
  renderShenron(ctx) {
    // Bầu trời tối sầm sấm chớp
    this.fillRectGdx(ctx, 0, 0, VIRTUAL_W, VIRTUAL_H, 'rgba(5, 8, 20, 0.86)', null);

    const t = this.shenronTimer;
    const lightningIdx = (Math.floor(t * 10) % 5) + 1;
    this.drawTex(ctx, `hieuung/hieuunggame/rong_than/set_${lightningIdx}.png`, 130, 250, 210, 320);
    this.drawTex(ctx, `hieuung/hieuunggame/rong_than/set_${((lightningIdx + 2) % 5) + 1}.png`, 690, 240, 210, 330);

    // Ghép 9 khúc Rồng Thần theo ĐÚNG công thức toạ độ pixel của HUDRongThan.java (dòng 256-267)
    const rImgs = [];
    for (let i = 1; i <= 9; i++) {
      rImgs.push(assets.tex(`hieuung/hieuunggame/rong_than/r${i}.png`));
    }
    const luaIdx = (Math.floor(t * 8) % 2) + 1;
    const luaImg = assets.tex(`hieuung/hieuunggame/rong_than/lua_${luaIdx}.png`);

    if (rImgs.every(Boolean)) {
      const s = 1.45; // Tỉ lệ hiển thị vừa khít khung 1020x610 phía trên hộp thoại
      const k = s / 2; // Hệ số quy đổi từ 2.0f của bản gốc
      const daoDong = Math.sin(t * 3.2) * 2.5;
      const w = rImgs.map((im) => im.naturalWidth * s);
      const h = rImgs.map((im) => im.naturalHeight * s);

      const baseX = VIRTUAL_W / 2 + 18;
      const baseY = 198;

      // Thứ tự vẽ chuẩn HUDRongThan.java: r8 -> r7 -> r6 -> r9 -> r3 -> r4 -> r2 -> r1 -> r5 -> lua
      this.drawTex(ctx, 'hieuung/hieuunggame/rong_than/r8.png', baseX, baseY, w[7], h[7]);
      this.drawTex(ctx, 'hieuung/hieuunggame/rong_than/r7.png', baseX - 75 * k, baseY + h[7] - 10 * k + daoDong, w[6], h[6]);
      this.drawTex(ctx, 'hieuung/hieuunggame/rong_than/r6.png', baseX - 78 * k, baseY + h[7] + h[6] - 18 * k, w[5], h[5]);
      this.drawTex(ctx, 'hieuung/hieuunggame/rong_than/r9.png', baseX - 5 * k, baseY + h[7] + h[6] - 18 * k + daoDong * 1.1, w[8], h[8]);
      this.drawTex(ctx, 'hieuung/hieuunggame/rong_than/r3.png', baseX - 78 * k, baseY + h[7] + h[6] + h[5] - 26 * k, w[2], h[2]);
      this.drawTex(ctx, 'hieuung/hieuunggame/rong_than/r4.png', baseX + 25 * k, baseY + h[7] + h[6] + h[5] + h[2] - 26 * k, w[3], h[3]);
      this.drawTex(ctx, 'hieuung/hieuunggame/rong_than/r2.png', baseX - 147 * k, baseY + h[7] + h[6] + h[5] - 20 * k + daoDong * 0.8, w[1], h[1]);
      this.drawTex(ctx, 'hieuung/hieuunggame/rong_than/r1.png', baseX - 75 * k, baseY + h[7] + h[6] + h[5] + h[2] - 50 * k + daoDong * 1.2, w[0], h[0]);
      this.drawTex(ctx, 'hieuung/hieuunggame/rong_than/r5.png', baseX - 5 * k, baseY + h[7] + h[6] - 10 * k + daoDong * 0.7, w[4], h[4]);

      if (luaImg) {
        this.drawTex(ctx, `hieuung/hieuunggame/rong_than/lua_${luaIdx}.png`, baseX - 8 * k, baseY - 6, luaImg.naturalWidth * s, luaImg.naturalHeight * s);
      }
    }

    // Khung thoại trắng viền đen chuẩn HUDRongThan.java (594 x 76 tại y = 122)
    const boxW = 594;
    const boxH = 74;
    const boxX = (VIRTUAL_W - boxW) / 2;
    const boxY = 122;
    this.fillRectGdx(ctx, boxX, boxY, boxW, boxH, '#ffffff', '#000000', 2.5);
    this.drawWrappedText(
      ctx,
      'Ta sẽ ban cho ngươi một điều ước, hãy suy nghĩ thật kỹ trước khi quyết định chọn 1 trong 5 điều ước bên dưới!',
      VIRTUAL_W / 2,
      boxY + 50,
      boxW - 48,
      20,
      { size: 12, color: '#111827', stroke: null, strokeWidth: 0, align: 'center' }
    );

    const wishes = [
      '+500K Sức Mạnh & Tiềm Năng',
      'Giàu Có +2Tr Vàng & 500 Ngọc',
      'Trọn Bộ Hủy Diệt Beerus',
      'Cải Trang Black Rosé & Phượng Hoàng',
      'Sở Hữu Đệ Tử & Bông Tai C2'
    ];

    // 5 nút nutvuong.png chuẩn HUDRongThan.java: (210 + i * 120, 5, 114, 114)
    for (let i = 0; i < 5; i++) {
      const bx = 210 + i * 120;
      const by = 5;
      this.drawTex(ctx, 'hud/giaodientrong/nutvuong.png', bx, by, 114, 114);
      this.drawWrappedText(ctx, wishes[i], bx + 57, by + 68, 96, 15, {
        size: 10.5, color: '#532905', stroke: '#fef3c7', strokeWidth: 2, align: 'center'
      });
      this.addHit(`wish_btn_${i}`, bx, by, 114, 114, () => {
        this.grantShenronWish(i);
      });
    }
  }

  // ==================== THÔNG BÁO NỔI GIỮA TRÊN ====================
  renderBanners(ctx) {
    if (this.popupOpen || this.shenronActive) return;
    for (let i = 0; i < this.banners.length; i++) {
      const b = this.banners[i];
      const by = 515 - i * 28;
      this.fillRectGdx(ctx, 250, by, 520, 24, 'rgba(0,0,0,0.72)', '#f59e0b', 1);
      this.drawText(ctx, b.text, VIRTUAL_W / 2, by + 7, {
        size: 11, color: b.color, align: 'center'
      });
    }
  }
}
