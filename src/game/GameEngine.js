// Engine Trò Chơi Ngọc Rồng Online Web Edition — Port 1:1 chuẩn LibGDX DANG-PH/ngoc-rong-online
// Tọa độ Virtual Viewport: 1020 x 610 (Gốc (0,0) ở góc dưới-trái chuẩn LibGDX)
// 100% Texture thật từ /assets/ — KHÔNG vẽ hình học MS-Paint giả!

import { assets } from './assetLoader';
import { sound } from './audio';
import {
  VIRTUAL_W,
  VIRTUAL_H,
  PLANET_DEFS,
  MODULAR_STATE_OFFSETS,
  NPC_OFFSETS,
  PLANET_SKILLS,
  ITEM_CATALOG,
  STORY_QUESTS,
  MONSTER_TEMPLATES,
  MAPS_CONFIG,
  formatNroNum
} from './nroData';
import { NroHudRenderer } from './NroHudRenderer';

// Offset chính xác từ CaiTrangOffset.java cho các bộ Cải Trang & BOSS
const CAITRANG_EXACT_OFFSETS = {
  goku_black_rose: {
    DUNG_YEN: { thanX: 0, thanY: -1, dauX: -0.3, dauY: -15.5, chanX: 0, chanY: 0 },
    DI_CHUYEN: { thanX: 2.2, thanY: 5.2, dauX: 3.3, dauY: -10, chanX: 0, chanY: 0 },
    NHAY: { thanX: -4, thanY: 6, dauX: 0.5, dauY: -21.5, chanX: 0, chanY: 0 },
    ROI: { thanX: -5.5, thanY: 6.5, dauX: -1.2, dauY: -28, chanX: 0, chanY: 0 },
    BAY: { thanX: 5, thanY: 8, dauX: 10, dauY: -19, chanX: 0, chanY: 0 }
  },
  gohan_beast: {
    DUNG_YEN: { thanX: 0, thanY: -4, dauX: 2.2, dauY: -20, chanX: 0, chanY: 0 },
    DI_CHUYEN: { thanX: 4, thanY: 4, dauX: 4.5, dauY: -13.8, chanX: 0, chanY: 0 },
    NHAY: { thanX: 6.5, thanY: 7, dauX: 9, dauY: -25, chanX: 0, chanY: 0 },
    ROI: { thanX: -7, thanY: 7.5, dauX: 1, dauY: -34.5, chanX: 0, chanY: 0 },
    BAY: { thanX: 0, thanY: -1, dauX: -0.3, dauY: -15.5, chanX: 0, chanY: 0 }
  },
  broly_lssj: {
    DUNG_YEN: { thanX: 0, thanY: -5, dauX: 1, dauY: -21.8, chanX: 0, chanY: 0 },
    DI_CHUYEN: { thanX: 3, thanY: 5, dauX: 4.5, dauY: -18, chanX: 0, chanY: 0 },
    NHAY: { thanX: -1, thanY: 7, dauX: 1, dauY: -29.5, chanX: 0, chanY: 0 },
    ROI: { thanX: -7, thanY: 7.5, dauX: 1, dauY: -32, chanX: 0, chanY: 0 },
    BAY: { thanX: -23, thanY: 20, dauX: -20, dauY: -19, chanX: 0, chanY: 0 }
  },
  xiao: {
    DUNG_YEN: { thanX: 0, thanY: -24, dauX: -1.5, dauY: -55, chanX: 0, chanY: 0 },
    DI_CHUYEN: { thanX: 2.2, thanY: -23, dauX: 2.8, dauY: -54, chanX: 0, chanY: 0 },
    NHAY: { thanX: -4, thanY: -12, dauX: 0.5, dauY: -49, chanX: 0, chanY: 0 },
    ROI: { thanX: -5.5, thanY: -12, dauX: -1.2, dauY: -54, chanX: 0, chanY: 0 },
    BAY: { thanX: -17, thanY: -1, dauX: -13, dauY: -35, chanX: 0, chanY: 0 }
  },
  khi_7: {
    DUNG_YEN: { thanX: 1, thanY: -5, dauX: -6, dauY: -54, chanX: 0, chanY: 0 },
    DI_CHUYEN: { thanX: 3, thanY: -2, dauX: 10, dauY: -49.5, chanX: 0, chanY: 0 },
    NHAY: { thanX: 3, thanY: 1, dauX: 1, dauY: -48.5, chanX: 0, chanY: 0 },
    ROI: { thanX: -3, thanY: 2, dauX: -12, dauY: -67, chanX: 0, chanY: 0 },
    BAY: { thanX: -26, thanY: 20, dauX: -28, dauY: -29.5, chanX: 0, chanY: 0 }
  }
};

export class GameEngine {
  constructor(canvas, initialPlayer = {}, callbacks = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.onStateSync = callbacks.onStateSync || null;
    this.onReturnToMenu = callbacks.onReturnToMenu || null;
    this.onTextInputToggle = callbacks.onTextInputToggle || null;

    this.running = false;
    this.rafId = null;
    this.lastTime = 0;
    this.animClock = 0;
    this.zoneId = 1;

    // Khởi tạo dữ liệu người chơi chuẩn cốt truyện (mặc định xuất phát tại Nhà Gôhan: mapId = 0)
    const planetIdx = [0, 1, 2].includes(Number(initialPlayer.planet)) ? Number(initialPlayer.planet) : 0;
    const planetDef = PLANET_DEFS[planetIdx];
    const startMapId = typeof initialPlayer.mapId === 'number' && MAPS_CONFIG[initialPlayer.mapId]
      ? initialPlayer.mapId
      : 0;
    const mapDef = MAPS_CONFIG[startMapId];

    // Chuẩn hóa toạ độ y theo gốc dưới-trái LibGDX (tránh y=420 cũ của bản lỗi trước)
    let startX = Number(initialPlayer.x) || mapDef.defaultSpawn.x;
    let startY = Number(initialPlayer.y);
    if (!startY || startY > 380 || startY < 80) {
      startX = mapDef.defaultSpawn.x;
      startY = mapDef.defaultSpawn.y;
    }

    this.player = {
      name: initialPlayer.name || 'SonGoku',
      planet: planetIdx,
      characterIndex: Number(initialPlayer.characterIndex) || 0,
      x: startX,
      y: startY,
      vx: 0,
      vy: 0,
      dir: 1, // 1: nhìn sang phải, -1: nhìn sang trái
      onGround: true,
      isFlying: false,
      isCharging: false,
      attackAnimTimer: 0,
      attackFrame: 0,

      baseMaxHp: Number(initialPlayer.baseMaxHp || initialPlayer.maxHp) || planetDef.baseStats.maxHp,
      baseMaxKi: Number(initialPlayer.baseMaxKi || initialPlayer.maxKi) || planetDef.baseStats.maxKi,
      baseAttack: Number(initialPlayer.baseAttack || initialPlayer.attack) || planetDef.baseStats.attack,
      baseDefense: Number(initialPlayer.baseDefense || initialPlayer.defense) || planetDef.baseStats.defense,
      baseCrit: Number(initialPlayer.baseCrit || initialPlayer.crit) || planetDef.baseStats.crit,

      maxHp: Number(initialPlayer.maxHp) || planetDef.baseStats.maxHp,
      hp: Number(initialPlayer.hp) || planetDef.baseStats.hp,
      maxKi: Number(initialPlayer.maxKi) || planetDef.baseStats.maxKi,
      ki: Number(initialPlayer.ki) || planetDef.baseStats.ki,
      attack: Number(initialPlayer.attack) || planetDef.baseStats.attack,
      defense: Number(initialPlayer.defense) || planetDef.baseStats.defense,
      crit: Number(initialPlayer.crit) || planetDef.baseStats.crit,

      power: Number(initialPlayer.power) || 2000,
      potential: Number(initialPlayer.potential) || 2500,
      gold: Number(initialPlayer.gold) ?? 15000,
      gem: Number(initialPlayer.gem) ?? 50,
      senzuCount: Number(initialPlayer.senzuCount) ?? 10,
      senzuLevel: Number(initialPlayer.senzuLevel) || 1,

      questId: Number(initialPlayer.questId) || 1,
      questProgress: Number(initialPlayer.questProgress) || 0,
      mapId: startMapId,

      equipped: initialPlayer.equipped || {
        ao: { id: 'ao_cam', stars: 0, sockets: 1 },
        quan: { id: 'quan_cam', stars: 0, sockets: 1 },
        gang: null,
        giay: null,
        rada: null,
        caitrang: null,
        vanbay: null,
        deolung: null,
        pet: null,
        aura: null
      },
      bag: Array.isArray(initialPlayer.bag) ? initialPlayer.bag : [
        { id: 've_quay', stars: 0, sockets: 0 },
        { id: 'nr_4s', stars: 0, sockets: 0 }
      ],
      chest: Array.isArray(initialPlayer.chest) ? initialPlayer.chest : [],
      redeemedCodes: Array.isArray(initialPlayer.redeemedCodes) ? initialPlayer.redeemedCodes : [],
      claimedStarterGift: Boolean(initialPlayer.claimedStarterGift),

      skillLoadout: Array.isArray(initialPlayer.skillLoadout) ? initialPlayer.skillLoadout : [0, 1, 2, 3, 4],
      skillLevels: initialPlayer.skillLevels || {},
      activeSkillSlot: 0,
      cooldowns: {},

      tempTransformKey: null,
      tempTransformTimer: 0,
      shieldTimer: 0,
      isFused: false,
      fusionTier: 1,
      buffs: { atk: 0, hp: 0, ki: 0 },
      detu: initialPlayer.detu || null,
      chatBubble: null,
      moveTargetX: null,
      moveTargetY: null
    };

    // Pet đi theo sau
    this.petFollower = { x: this.player.x - 42, y: this.player.y, dir: 1 };

    // Camera chuẩn QuanLyCamera.java
    this.camX = 510;
    this.camY = 305;

    // Thực thể bản đồ hiện tại
    this.currentMapId = startMapId;
    this.npcs = [];
    this.monsters = [];
    this.groundDrops = [];
    this.projectiles = [];
    this.skillEffects = [];
    this.floatingTexts = [];
    this.clickMarker = null;
    this.selectedTarget = null;

    // Màn hình chuyển cảnh Ngọc Rồng xoay (ManHinhSplash / MapToi)
    this.mapTransitionTimer = 0;
    this.mapTransitionLabel = '';

    // Bàn phím
    this.keys = {};

    // HUD chuẩn LibGDX
    this.hud = new NroHudRenderer(this);

    this.recalcStats();
    this.loadMapEntities(this.currentMapId, false);
    this.updateCamera(1);

    this._bindEvents();
  }

  // ==================== TÍNH TOÁN CHỈ SỐ TỔNG HỢP ====================
  recalcStats() {
    const p = this.player;
    let bonusHp = 0;
    let bonusKi = 0;
    let bonusAtk = 0;
    let bonusDef = 0;
    let bonusCrit = 0;

    Object.values(p.equipped || {}).forEach((eq) => {
      if (!eq || !ITEM_CATALOG[eq.id]) return;
      const def = ITEM_CATALOG[eq.id];
      const starMult = 1 + (eq.stars || 0) * 0.08;
      if (def.stats) {
        bonusHp += Math.round((def.stats.maxHp || 0) * starMult);
        bonusKi += Math.round((def.stats.maxKi || 0) * starMult);
        bonusAtk += Math.round((def.stats.attack || 0) * starMult);
        bonusDef += Math.round((def.stats.defense || 0) * starMult);
        bonusCrit += def.stats.crit || 0;
      }
    });

    let totalHp = p.baseMaxHp + bonusHp;
    let totalKi = p.baseMaxKi + bonusKi;
    let totalAtk = p.baseAttack + bonusAtk;
    let totalDef = p.baseDefense + bonusDef;
    let totalCrit = Math.min(85, p.baseCrit + bonusCrit);

    if (p.buffs.hp > 0) totalHp = Math.round(totalHp * 1.5);
    if (p.buffs.ki > 0) totalKi = Math.round(totalKi * 1.5);
    if (p.buffs.atk > 0) totalAtk = Math.round(totalAtk * 1.5);

    if (p.tempTransformKey) {
      totalAtk = Math.round(totalAtk * 1.9);
      totalHp = Math.round(totalHp * 1.35);
    }

    if (p.isFused && p.detu) {
      const fMult = p.fusionTier === 2 ? 2.1 : 1.6;
      totalHp = Math.round((totalHp + p.detu.maxHp * 0.5) * fMult);
      totalKi = Math.round(totalKi * fMult);
      totalAtk = Math.round((totalAtk + p.detu.attack * 0.5) * fMult);
    }

    p.maxHp = totalHp;
    p.maxKi = totalKi;
    p.attack = totalAtk;
    p.defense = totalDef;
    p.crit = totalCrit;
    p.hp = Math.min(p.hp, p.maxHp);
    p.ki = Math.min(p.ki, p.maxKi);
  }

  upgradeBaseStat(statKey, cost) {
    const p = this.player;
    if (p.potential < cost) {
      this.hud.pushBanner(`Cần ${formatNroNum(cost)} Tiềm năng để nâng chỉ số!`, '#fca5a5');
      return;
    }
    p.potential -= cost;
    if (statKey === 'hp') p.baseMaxHp += 120;
    else if (statKey === 'ki') p.baseMaxKi += 120;
    else if (statKey === 'atk') p.baseAttack += 12;
    else if (statKey === 'def') {
      p.baseDefense += 4;
      p.baseCrit = Math.min(50, p.baseCrit + 1);
    }
    this.recalcStats();
    p.hp = p.maxHp;
    p.ki = p.maxKi;
    sound.playHeal();
  }

  // ==================== QUẢN LÝ TÚI ĐỒ, TRANG BỊ, ĐỆ TỬ, HỢP THỂ ====================
  addItemToBag(itemId) {
    const def = ITEM_CATALOG[itemId];
    if (!def) return false;
    if (this.player.bag.length >= 20) return false;
    this.player.bag.push({ id: itemId, stars: 0, sockets: 0 });
    return true;
  }

  useOrEquipBagItem(bagIdx) {
    const p = this.player;
    const item = p.bag[bagIdx];
    if (!item) return;
    const def = ITEM_CATALOG[item.id];
    if (!def) return;

    const equippableSlots = ['ao', 'quan', 'gang', 'giay', 'rada', 'caitrang', 'vanbay', 'deolung', 'pet', 'aura'];
    if (equippableSlots.includes(def.slot)) {
      const prev = p.equipped[def.slot];
      p.equipped[def.slot] = item;
      p.bag.splice(bagIdx, 1);
      if (prev) p.bag.push(prev);
      this.recalcStats();
      sound.playHeal();
      this.hud.pushBanner(`Đã trang bị [${def.name}]!`, '#86efac');
      return;
    }

    if (def.slot === 'consumable') {
      if (def.action === 'hatch_detu') {
        p.bag.splice(bagIdx, 1);
        this.unlockDetu(false);
        return;
      }
      if (def.action === 'fusion' || def.action === 'fusion2') {
        this.toggleFusion(def.action === 'fusion2' ? 2 : 1);
        return;
      }
      if (def.action === 'buff_atk') {
        p.bag.splice(bagIdx, 1);
        p.buffs.atk = 300;
        this.recalcStats();
        sound.playSuperSaiyan();
        this.hud.pushBanner('Kích hoạt Cuồng Nộ: +50% Sức đánh trong 5 phút!', '#fde047');
        return;
      }
      if (def.action === 'buff_hp') {
        p.bag.splice(bagIdx, 1);
        p.buffs.hp = 300;
        this.recalcStats();
        p.hp = p.maxHp;
        sound.playHeal();
        this.hud.pushBanner('Kích hoạt Bổ Huyết: +50% HP tối đa!', '#86efac');
        return;
      }
      if (def.action === 'buff_ki') {
        p.bag.splice(bagIdx, 1);
        p.buffs.ki = 300;
        this.recalcStats();
        p.ki = p.maxKi;
        sound.playHeal();
        this.hud.pushBanner('Kích hoạt Bổ Khí: +50% KI tối đa!', '#67e8f9');
        return;
      }
    }

    if (def.slot === 'crystal') {
      this.hud.pushBanner('Hãy đem Đá Pha Lê tới gặp Thầy Hiếu tại Đồi Hoa Cúc để Ép Sao!', '#fde047');
      return;
    }

    if (def.slot === 'material') {
      this.hud.pushBanner('Hãy gặp NPC Hải Đăng tại Làng Aru để dùng Vé Quay Thượng Đế!', '#fde047');
    }
  }

  unequipSlot(slotKey) {
    const p = this.player;
    const eq = p.equipped[slotKey];
    if (!eq) return;
    if (p.bag.length >= 20) {
      this.hud.pushBanner('Hành trang đã đầy, không thể tháo trang bị!', '#fca5a5');
      return;
    }
    p.bag.push(eq);
    p.equipped[slotKey] = null;
    this.recalcStats();
  }

  unlockDetu(godTier = false) {
    const p = this.player;
    const randPlanet = Math.floor(Math.random() * 3);
    p.detu = {
      name: godTier ? 'Đệ Tử Thần' : 'Đệ Tử Mabư',
      planet: randPlanet,
      power: godTier ? 250000 : 8000,
      maxHp: godTier ? 18000 : 2800,
      hp: godTier ? 18000 : 2800,
      attack: godTier ? 650 : 95,
      mode: 'attack',
      modeLabel: 'Tấn Công',
      x: p.x - 45,
      y: p.y,
      dir: 1,
      atkTimer: 0
    };
    sound.playSuperSaiyan();
    this.hud.pushBanner(`Chúc mừng! Bạn đã thu nhận [${p.detu.name}] sát cánh chiến đấu!`, '#fde047');
  }

  toggleFusion(tier = 1) {
    const p = this.player;
    if (!p.detu) {
      this.hud.pushBanner('Bạn cần có Đệ Tử trước khi Hợp Thể Porata!', '#fca5a5');
      return;
    }
    p.isFused = !p.isFused;
    p.fusionTier = tier;
    this.recalcStats();
    p.hp = p.maxHp;
    p.ki = p.maxKi;
    sound.playSuperSaiyan();
    this.skillEffects.push({
      type: 'SolarFlash',
      x: p.x,
      y: p.y + 32,
      timer: 0,
      duration: 0.55
    });
    this.hud.pushBanner(
      p.isFused ? 'HỢP THỂ PORATA THÀNH CÔNG! Sức mạnh tăng bùng nổ!' : 'Đã tách Hợp Thể trở lại bình thường!',
      '#fde047'
    );
  }

  eatSenzu() {
    const p = this.player;
    if (p.senzuCount <= 0) {
      this.hud.pushBanner('Đã hết Đậu Thần! Hãy về Nhà Gôhan thu hoạch trên Cây Đậu Thần!', '#fca5a5');
      return;
    }
    p.senzuCount--;
    const healHp = Math.round(p.maxHp * 0.65);
    const healKi = Math.round(p.maxKi * 0.65);
    p.hp = Math.min(p.maxHp, p.hp + healHp);
    p.ki = Math.min(p.maxKi, p.ki + healKi);
    sound.playHeal();
    this.spawnFloatingText(p.x, p.y + 72, `+${formatNroNum(healHp)} HP  +${formatNroNum(healKi)} KI`, '#4ade80');
  }

  // ==================== CỐT TRUYỆN & CHUYỂN BẢN ĐỒ ====================
  completeCurrentQuest() {
    const p = this.player;
    const quest = STORY_QUESTS.find((q) => q.id === p.questId);
    if (!quest) return;

    p.gold += quest.reward.gold || 0;
    p.gem += quest.reward.gem || 0;
    p.power += quest.reward.power || 0;
    p.potential += quest.reward.power || 0;
    if (quest.reward.item) {
      this.addItemToBag(quest.reward.item);
    }

    sound.playCoin();
    this.hud.pushBanner(`Hoàn thành [${quest.title}]! Nhận thưởng lớn!`, '#fde047');

    p.questId = quest.id + 1;
    p.questProgress = 0;
    this.recalcStats();
  }

  onMonsterKilled(m) {
    const p = this.player;
    const quest = STORY_QUESTS.find((q) => q.id === p.questId);
    if (quest && quest.type === 'kill' && quest.targetId === m.templateId) {
      p.questProgress = Math.min(quest.count, p.questProgress + 1);
      if (p.questProgress === quest.count) {
        this.hud.pushBanner(`Đã hoàn thành mục tiêu [${quest.title}]! Mở Nhiệm Vụ hoặc gặp NPC nhận thưởng!`, '#4ade80');
      }
    }

    // Rơi Vàng / Đá Pha Lê / Ngọc Rồng trên mặt đất
    const groundY = this.getGroundTopAt(m.x);
    this.groundDrops.push({
      kind: 'gold',
      amount: m.gold + Math.floor(Math.random() * 120),
      icon: 'hud/giaodientrong/vang.png',
      x: m.x - 12,
      y: groundY,
      ttl: 25
    });

    const roll = Math.random();
    if (m.isBoss || roll < 0.16) {
      const dbStars = m.isBoss ? [1, 2, 3, 4, 5] : [4, 5, 6, 7];
      const star = dbStars[Math.floor(Math.random() * dbStars.length)];
      this.groundDrops.push({
        kind: 'item',
        itemId: `nr_${star}s`,
        icon: `vatpham/vatphamgame/ngocrong/nr${star}s.png`,
        label: `Ngọc Rồng ${star} Sao`,
        x: m.x + 16,
        y: groundY,
        ttl: 35
      });
    } else if (roll < 0.34) {
      const crystals = ['da_pha_le_dame', 'da_pha_le_hp', 'da_pha_le_ki'];
      const cid = crystals[Math.floor(Math.random() * crystals.length)];
      this.groundDrops.push({
        kind: 'item',
        itemId: cid,
        icon: ITEM_CATALOG[cid].icon,
        label: ITEM_CATALOG[cid].name,
        x: m.x + 14,
        y: groundY,
        ttl: 28
      });
    }
  }

  changeMap(targetMapId, spawnX, spawnY) {
    const mapCfg = MAPS_CONFIG[targetMapId];
    if (!mapCfg) return;

    this.currentMapId = targetMapId;
    this.player.mapId = targetMapId;
    this.player.x = spawnX ?? mapCfg.defaultSpawn.x;
    this.player.y = spawnY ?? mapCfg.defaultSpawn.y;
    this.player.vx = 0;
    this.player.vy = 0;
    this.player.isFlying = false;
    this.player.onGround = true;
    this.player.moveTargetX = null;
    this.player.moveTargetY = null;

    if (this.player.detu) {
      this.player.detu.x = this.player.x - 45;
      this.player.detu.y = this.player.y;
    }
    this.petFollower.x = this.player.x - 36;
    this.petFollower.y = this.player.y;

    this.mapTransitionTimer = 0.55;
    this.mapTransitionLabel = mapCfg.name;

    this.loadMapEntities(targetMapId, true);
    this.updateCamera(1);
    sound.playJump();
  }

  loadMapEntities(mapId, preloadExtra = true) {
    const mapCfg = MAPS_CONFIG[mapId] || MAPS_CONFIG[0];
    this.selectedTarget = null;
    this.groundDrops = [];
    this.projectiles = [];
    this.skillEffects = [];

    // Preload riêng cho Map Xayda & Namek nếu chuyển sang
    if (preloadExtra) {
      if (mapCfg.planetTheme === 'xayda') {
        assets.preloadBatch([
          'hud/giaodienngoai/xayda/bautroixayda.jpg',
          'hud/giaodienngoai/xayda/matrang.png',
          'hud/giaodienngoai/xayda/nuixa_xayda.png',
          'hud/giaodienngoai/xayda/nui_xayda.png',
          'hud/giaodienngoai/xayda/nuicay_xayda.png',
          'hud/giaodienngoai/xayda/nuithap_xayda.png',
          'map/xayda/chung/nhacua/nhacua1_xayda.png',
          'map/xayda/chung/nhacua/55.png',
          'map/xayda/chung/caycoi/caycoi1_xayda.png',
          'map/xayda/chung/caycoi/caycoi2_xayda.png',
          'map/xayda/chung/cayco/cayco1_xayda.png',
          'map/xayda/chung/dat/matdat_xayda1.png',
          'map/xayda/chung/dat/dat_xayda1.png',
          'map/xayda/chung/dat/longdat_xayda1.png',
          'vatpham/taubay/myTexture2dmaybay3.png'
        ]);
      } else if (mapCfg.planetTheme === 'namek') {
        assets.preloadBatch([
          'hud/giaodienngoai/namek/sky_namek.png',
          'hud/giaodienngoai/namek/nuixa_namek.png',
          'hud/giaodienngoai/namek/nui_namek.png',
          'hud/giaodienngoai/namek/nuicay_namek.png',
          'hud/giaodienngoai/namek/nuithap_namek.png',
          'hud/giaodienngoai/namek/matdat_namek1.png',
          'hud/giaodienngoai/namek/dat_namek1.png',
          'hud/giaodienngoai/namek/longdat_namek1.png',
          'hud/giaodienngoai/namek/cayco1_namek.png',
          'map/namek/371.png',
          'map/namek/372.png',
          'map/namek/373.png',
          'map/namek/375.png',
          'vatpham/taubay/myTexture2dmaybay2.png'
        ]);
      }
    }

    this.npcs = (mapCfg.npcs || []).map((n) => ({
      ...n,
      targetKind: 'npc'
    }));

    this.monsters = (mapCfg.monsters || []).map((m, idx) => {
      const tpl = MONSTER_TEMPLATES[m.template];
      const groundY = this.getGroundTopAt(m.x, mapCfg);
      return {
        uid: `mob_${mapId}_${idx}`,
        targetKind: 'monster',
        templateId: m.template,
        name: tpl.name,
        renderType: tpl.renderType,
        frames: tpl.frames || null,
        sheet: tpl.sheet || null,
        frameCount: tpl.frameCount || 1,
        drawW: tpl.drawW || 64,
        drawH: tpl.drawH || 64,
        flyOffset: tpl.flyOffset || 0,
        caitrangKey: tpl.caitrangKey || null,
        auraColor: tpl.auraColor || null,
        scale: tpl.scale || 0.7,
        isBoss: Boolean(tpl.isBoss),
        x: m.x,
        y: groundY + (tpl.flyOffset || 0),
        spawnX: m.x,
        minX: m.minX,
        maxX: m.maxX,
        dir: idx % 2 === 0 ? -1 : 1,
        speed: tpl.speed || 48,
        maxHp: tpl.hp,
        hp: tpl.hp,
        attack: tpl.attack,
        exp: tpl.exp,
        gold: tpl.gold,
        dead: false,
        respawnTimer: 0,
        respawnSec: tpl.respawnSec || 7,
        stunTimer: 0,
        hurtTimer: 0,
        atkCooldown: 1.5
      };
    });
  }

  getGroundTopAt(wx, mapCfgOverride = null) {
    const mapCfg = mapCfgOverride || MAPS_CONFIG[this.currentMapId] || MAPS_CONFIG[0];
    let bestTop = 175;
    for (let i = 0; i < mapCfg.hitboxes.length; i++) {
      const hb = mapCfg.hitboxes[i];
      if (wx >= hb.x && wx <= hb.x + hb.w) {
        bestTop = hb.y + hb.h;
      }
    }
    return bestTop;
  }

  // ==================== CHIẾN ĐẤU & KỸ NĂNG ====================
  cycleTarget() {
    const candidates = [
      ...this.monsters.filter((m) => !m.dead && Math.abs(m.x - this.player.x) < 620),
      ...this.npcs.filter((n) => Math.abs(n.x - this.player.x) < 420)
    ];
    if (candidates.length === 0) {
      this.selectedTarget = null;
      return;
    }
    const curIdx = candidates.indexOf(this.selectedTarget);
    this.selectedTarget = candidates[(curIdx + 1) % candidates.length];
  }

  findNearestTarget() {
    let best = null;
    let bestDist = 480;
    for (let i = 0; i < this.monsters.length; i++) {
      const m = this.monsters[i];
      if (m.dead) continue;
      const d = Math.hypot(m.x - this.player.x, m.y - this.player.y);
      if (d < bestDist) {
        bestDist = d;
        best = m;
      }
    }
    if (best) return best;

    for (let i = 0; i < this.npcs.length; i++) {
      const n = this.npcs[i];
      const d = Math.hypot(n.x - this.player.x, n.y - this.player.y);
      if (d < 160) return n;
    }
    return null;
  }

  handlePrimaryAction() {
    if (this.hud.npcDialog || this.hud.shenronActive) return;

    if (!this.selectedTarget || (this.selectedTarget.targetKind === 'monster' && this.selectedTarget.dead)) {
      this.selectedTarget = this.findNearestTarget();
    }

    if (this.selectedTarget && this.selectedTarget.targetKind === 'npc') {
      const dist = Math.abs(this.selectedTarget.x - this.player.x);
      if (dist <= 115) {
        this.hud.openNpcDialog(this.selectedTarget);
      } else {
        this.player.moveTargetX = this.selectedTarget.x + (this.player.x < this.selectedTarget.x ? -55 : 55);
        this.pendingInteractNpc = this.selectedTarget;
      }
      return;
    }

    this.castSkillBySlot(this.player.activeSkillSlot || 0);
  }

  castSkillBySlot(slotIdx) {
    const p = this.player;
    const planetKey = PLANET_DEFS[p.planet]?.key || 'traidat';
    const skills = PLANET_SKILLS[planetKey] || PLANET_SKILLS.traidat;
    const skIdx = p.skillLoadout[slotIdx] ?? slotIdx;
    const skill = skills[skIdx] || skills[0];
    if (!skill) return;

    if ((p.cooldowns[skill.id] || 0) > 0.02) return;

    if (p.ki < skill.kiCost) {
      this.hud.pushBanner('Không đủ KI! Hãy ăn Đậu Thần [phím 6] hoặc dùng Tái Tạo Năng Lượng!', '#fca5a5');
      return;
    }

    // Tự khoá quái gần nhất nếu chưa chọn quái
    if (!this.selectedTarget || this.selectedTarget.targetKind !== 'monster' || this.selectedTarget.dead) {
      const nearMob = this.monsters
        .filter((m) => !m.dead)
        .sort((a, b) => Math.abs(a.x - p.x) - Math.abs(b.x - p.x))[0];
      if (nearMob && Math.abs(nearMob.x - p.x) < 620) {
        this.selectedTarget = nearMob;
      }
    }

    const targetMob = this.selectedTarget?.targetKind === 'monster' && !this.selectedTarget.dead
      ? this.selectedTarget
      : null;

    // Nếu đòn cận chiến mà đứng xa mục tiêu -> lao nhanh vào tầm đánh
    if (skill.type === 'melee' && targetMob) {
      const dist = Math.hypot(targetMob.x - p.x, targetMob.y - p.y);
      if (dist > skill.range + 22) {
        p.moveTargetX = targetMob.x + (p.x < targetMob.x ? -52 : 52);
        p.dir = targetMob.x >= p.x ? 1 : -1;
        return;
      }
    }

    p.ki -= skill.kiCost;
    p.cooldowns[skill.id] = skill.cd;
    const skillLv = p.skillLevels?.[skill.id] || 1;
    const lvMult = 1 + (skillLv - 1) * 0.15;

    if (targetMob) {
      p.dir = targetMob.x >= p.x ? 1 : -1;
    }

    // Xử lý từng loại chiêu thức chuẩn Dragon Boy
    if (skill.type === 'melee') {
      p.attackAnimTimer = 0.28;
      p.attackFrame = (p.attackFrame + 1) % 5;
      sound.playPunch();

      const hitTargets = this.monsters.filter(
        (m) => !m.dead && Math.abs(m.x - (p.x + p.dir * 38)) <= 76 && Math.abs(m.y - p.y) <= 85
      );
      hitTargets.forEach((m) => {
        this.applyDamageToMonster(m, p.attack * skill.mult * lvMult);
        this.skillEffects.push({ type: 'HitSpark', x: m.x, y: m.y + 28, timer: 0, duration: 0.25 });
      });
    } else if (skill.type === 'beam') {
      p.attackAnimTimer = 0.42;
      sound.playBeam();
      const tx = targetMob ? targetMob.x : p.x + p.dir * 420;
      const ty = targetMob ? targetMob.y + 28 : p.y + 30;
      const angle = Math.atan2(ty - (p.y + 30), tx - (p.x + p.dir * 24));
      this.projectiles.push({
        kind: 'beam',
        startX: p.x + p.dir * 24,
        startY: p.y + 32,
        x: p.x + p.dir * 24,
        y: p.y + 32,
        vx: Math.cos(angle) * 860,
        vy: Math.sin(angle) * 860,
        color: skill.color || '#38bdf8',
        core: skill.core || '#ffffff',
        dmg: p.attack * skill.mult * lvMult,
        ttl: 0.65,
        hitSet: new Set()
      });
    } else if (skill.type === 'solar') {
      sound.playSuperSaiyan();
      this.skillEffects.push({ type: 'SolarFlash', x: p.x, y: p.y + 42, timer: 0, duration: 0.6 });
      this.monsters.forEach((m) => {
        if (!m.dead && Math.hypot(m.x - p.x, m.y - p.y) <= skill.range) {
          m.stunTimer = 4.0;
          this.applyDamageToMonster(m, p.attack * skill.mult * lvMult);
          this.spawnFloatingText(m.x, m.y + 68, 'CHOÁNG!', '#fde047');
        }
      });
    } else if (skill.type === 'spirit') {
      sound.playBeam();
      const tx = targetMob ? targetMob.x : p.x + p.dir * 260;
      const ty = targetMob ? targetMob.y + 24 : p.y + 24;
      this.projectiles.push({
        kind: 'orb',
        x: p.x,
        y: p.y + 115,
        vx: (tx - p.x) * 1.9,
        vy: (ty - (p.y + 115)) * 1.9,
        color: skill.color || '#60a5fa',
        dmg: p.attack * skill.mult * lvMult,
        aoe: 150,
        ttl: 0.58
      });
    } else if (skill.type === 'transform') {
      p.tempTransformKey = p.tempTransformKey === skill.caitrang ? null : skill.caitrang;
      p.tempTransformTimer = p.tempTransformKey ? 45 : 0;
      this.recalcStats();
      p.hp = p.maxHp;
      sound.playSuperSaiyan();
      this.skillEffects.push({ type: 'SolarFlash', x: p.x, y: p.y + 35, timer: 0, duration: 0.5 });
      this.hud.pushBanner(
        p.tempTransformKey ? `Biến hình [${skill.name}]! Sức chiến đấu tăng vọt!` : 'Đã thu hồi trạng thái Biến Hình.',
        '#fde047'
      );
    } else if (skill.type === 'charge') {
      p.isCharging = true;
      setTimeout(() => { p.isCharging = false; }, 900);
      const addHp = Math.round(p.maxHp * 0.58);
      const addKi = Math.round(p.maxKi * 0.65);
      p.hp = Math.min(p.maxHp, p.hp + addHp);
      p.ki = Math.min(p.maxKi, p.ki + addKi);
      sound.playAuraCharge();
      this.spawnFloatingText(p.x, p.y + 76, `+${formatNroNum(addHp)} HP / +${formatNroNum(addKi)} KI`, '#67e8f9');
    } else if (skill.type === 'shield') {
      p.shieldTimer = 8.5;
      sound.playHeal();
      this.hud.pushBanner('Khiên Năng Lượng kích hoạt (Giảm 75% sát thương trong 8.5s)!', '#67e8f9');
    } else if (skill.type === 'tele') {
      if (targetMob) {
        this.skillEffects.push({ type: 'Tele', x: p.x, y: p.y, timer: 0, duration: 0.25 });
        p.x = targetMob.x - p.dir * 38;
        p.y = targetMob.y;
        sound.playJump();
        this.applyDamageToMonster(targetMob, p.attack * skill.mult * lvMult, true);
        this.skillEffects.push({ type: 'HitSpark', x: targetMob.x, y: targetMob.y + 30, timer: 0, duration: 0.3 });
      }
    } else if (skill.type === 'whistle') {
      p.buffs.hp = 180;
      this.recalcStats();
      p.hp = p.maxHp;
      sound.playHeal();
      this.hud.pushBanner('Huýt Sáo! Tăng mạnh sinh lực tối đa!', '#86efac');
    } else if (skill.type === 'egg') {
      this.unlockDetu(false);
    }
  }

  applyDamageToMonster(m, rawDmg, forceCrit = false) {
    if (!m || m.dead) return;
    const p = this.player;
    const isCrit = forceCrit || Math.random() * 100 < p.crit;
    const finalDmg = Math.max(1, Math.round(rawDmg * (isCrit ? 1.85 : 1) * (0.94 + Math.random() * 0.12)));

    m.hp = Math.max(0, m.hp - finalDmg);
    m.hurtTimer = 0.18;

    // Cộng Sức mạnh & Tiềm năng theo sát thương gây ra chuẩn NRO!
    const gainSm = Math.max(8, Math.round(finalDmg * 0.45));
    p.power += gainSm;
    p.potential += gainSm;

    this.spawnFloatingText(
      m.x + (Math.random() * 20 - 10),
      m.y + 56,
      isCrit ? `CHÍ MẠNG -${formatNroNum(finalDmg)}` : `-${formatNroNum(finalDmg)}`,
      isCrit ? '#facc15' : '#ffffff'
    );
    this.spawnFloatingText(p.x, p.y + 78, `+${formatNroNum(gainSm)} TNSM`, '#86efac');

    if (m.hp <= 0) {
      m.dead = true;
      m.respawnTimer = m.respawnSec;
      sound.playExplosion();
      this.skillEffects.push({ type: 'Explosion', x: m.x, y: m.y + 24, timer: 0, duration: 0.4 });
      this.onMonsterKilled(m);
    }
  }

  spawnFloatingText(wx, wy, text, color = '#ffffff') {
    this.floatingTexts.push({ x: wx, y: wy, text, color, ttl: 1.05 });
    if (this.floatingTexts.length > 28) this.floatingTexts.shift();
  }

  // ==================== VÒNG LẶP VẬT LÝ & AI (60 FPS) ====================
  update(dt) {
    this.animClock += dt;
    const p = this.player;
    const mapCfg = MAPS_CONFIG[this.currentMapId] || MAPS_CONFIG[0];

    if (this.mapTransitionTimer > 0) {
      this.mapTransitionTimer = Math.max(0, this.mapTransitionTimer - dt);
    }

    // Giảm hồi chiêu & hiệu lực buff
    Object.keys(p.cooldowns).forEach((k) => {
      if (p.cooldowns[k] > 0) p.cooldowns[k] = Math.max(0, p.cooldowns[k] - dt);
    });
    if (p.attackAnimTimer > 0) p.attackAnimTimer = Math.max(0, p.attackAnimTimer - dt);
    if (p.shieldTimer > 0) p.shieldTimer = Math.max(0, p.shieldTimer - dt);
    if (p.tempTransformTimer > 0) {
      p.tempTransformTimer -= dt;
      if (p.tempTransformTimer <= 0) {
        p.tempTransformKey = null;
        this.recalcStats();
      }
    }
    ['atk', 'hp', 'ki'].forEach((bk) => {
      if (p.buffs[bk] > 0) {
        p.buffs[bk] = Math.max(0, p.buffs[bk] - dt);
        if (p.buffs[bk] === 0) this.recalcStats();
      }
    });
    if (p.chatBubble) {
      p.chatBubble.ttl -= dt;
      if (p.chatBubble.ttl <= 0) p.chatBubble = null;
    }

    // Gồng KI bằng phím L / G
    p.isCharging = Boolean(this.keys['KeyL'] || this.keys['KeyG']);
    if (p.isCharging && !this.hud.chatOpen) {
      p.ki = Math.min(p.maxKi, p.ki + p.maxKi * 0.22 * dt);
      p.hp = Math.min(p.maxHp, p.hp + p.maxHp * 0.08 * dt);
    }

    // Điều khiển di chuyển bàn phím + Click chuột xuống đất
    const moveSpeed = p.isFlying ? 295 : 245;
    let inputX = 0;
    let inputY = 0;

    if (!this.hud.chatOpen && !this.hud.shenronActive) {
      if (this.keys['ArrowLeft'] || this.keys['KeyA']) inputX -= 1;
      if (this.keys['ArrowRight'] || this.keys['KeyD']) inputX += 1;
      if (this.keys['ArrowUp'] || this.keys['KeyW']) inputY += 1;
      if (this.keys['ArrowDown'] || this.keys['KeyS']) inputY -= 1;
    }

    if (inputX !== 0 || inputY !== 0) {
      p.moveTargetX = null;
      p.moveTargetY = null;
      this.pendingInteractNpc = null;
    }

    if (inputX !== 0) {
      p.vx = inputX * moveSpeed;
      p.dir = inputX > 0 ? 1 : -1;
    } else if (p.moveTargetX !== null) {
      const dx = p.moveTargetX - p.x;
      if (Math.abs(dx) > 10) {
        p.vx = Math.sign(dx) * moveSpeed;
        p.dir = dx > 0 ? 1 : -1;
      } else {
        p.vx = 0;
        p.moveTargetX = null;
        if (this.pendingInteractNpc) {
          const npc = this.pendingInteractNpc;
          this.pendingInteractNpc = null;
          this.hud.openNpcDialog(npc);
        }
      }
    } else {
      p.vx = 0;
    }

    // Nhảy & Bay lượn chuẩn NRO (Nhấn Lên trên mặt đất -> nhảy, giữ Lên khi đang trên không -> bật Bay!)
    const groundY = this.getGroundTopAt(p.x, mapCfg);
    if (inputY > 0) {
      if (p.onGround) {
        p.vy = 430;
        p.onGround = false;
        sound.playJump();
      } else if (p.vy < 140 && p.ki > 5) {
        p.isFlying = true;
        p.vy = 230;
        p.ki = Math.max(0, p.ki - 8 * dt);
      }
    } else if (p.isFlying) {
      if (inputY < 0) {
        p.vy = -240;
      } else if (p.moveTargetY !== null && Math.abs(p.moveTargetY - p.y) > 12) {
        p.vy = Math.sign(p.moveTargetY - p.y) * 210;
      } else {
        p.vy = 0;
      }
    }

    if (!p.onGround && !p.isFlying) {
      p.vy -= 980 * dt; // Trọng lực
    }

    p.x += p.vx * dt;
    p.y += p.vy * dt;

    // Chạm mặt đất bậc thang (như Đồi Hoa Cúc 3 tầng cao độ!)
    const newGroundY = this.getGroundTopAt(p.x, mapCfg);
    if (p.y <= newGroundY) {
      p.y = newGroundY;
      p.vy = 0;
      p.onGround = true;
      p.isFlying = false;
    } else if (p.onGround && p.y > newGroundY + 4) {
      p.onGround = false;
    }

    // Giới hạn trần bản đồ
    if (p.y > mapCfg.height - 95) {
      p.y = mapCfg.height - 95;
      p.vy = 0;
    }

    // Kiểm tra đi bộ chạm biên chuyển Map tự động (Waypoints)
    for (let i = 0; i < mapCfg.waypoints.length; i++) {
      const wp = mapCfg.waypoints[i];
      if (wp.triggerX && p.x >= wp.triggerX[0] && p.x <= wp.triggerX[1] && this.mapTransitionTimer <= 0) {
        this.changeMap(wp.targetMapId, wp.targetX, wp.targetY);
        return;
      }
    }

    // Kẹp biên ngang nếu map không có lối đi ở phía đó
    p.x = Math.max(24, Math.min(mapCfg.width - 24, p.x));

    // Cập nhật Pet chạy theo
    if (p.equipped.pet) {
      const targetPetX = p.x - p.dir * 42;
      this.petFollower.x += (targetPetX - this.petFollower.x) * Math.min(1, dt * 6);
      this.petFollower.y = this.getGroundTopAt(this.petFollower.x, mapCfg);
      this.petFollower.dir = p.dir;
    }

    // Cập nhật Đệ Tử AI chiến đấu tự động
    if (p.detu && !p.isFused && p.detu.mode !== 'home') {
      const d = p.detu;
      let targetMob = null;
      if (d.mode === 'attack' || d.mode === 'protect') {
        targetMob = this.monsters
          .filter((m) => !m.dead && Math.abs(m.x - p.x) < 380)
          .sort((a, b) => Math.abs(a.x - d.x) - Math.abs(b.x - d.x))[0];
      }

      if (targetMob) {
        const dx = targetMob.x - d.x;
        d.dir = dx >= 0 ? 1 : -1;
        if (Math.abs(dx) > 46) {
          d.x += Math.sign(dx) * 195 * dt;
        } else {
          d.atkTimer -= dt;
          if (d.atkTimer <= 0) {
            d.atkTimer = 0.85;
            this.applyDamageToMonster(targetMob, d.attack);
            this.skillEffects.push({ type: 'HitSpark', x: targetMob.x, y: targetMob.y + 24, timer: 0, duration: 0.22 });
          }
        }
      } else {
        const followX = p.x - p.dir * 56;
        if (Math.abs(followX - d.x) > 12) {
          d.dir = followX > d.x ? 1 : -1;
          d.x += Math.sign(followX - d.x) * 190 * dt;
        }
      }
      d.y = this.getGroundTopAt(d.x, mapCfg);
    }

    // Cập nhật Quái vật & Boss
    for (let i = 0; i < this.monsters.length; i++) {
      const m = this.monsters[i];
      if (m.dead) {
        m.respawnTimer -= dt;
        if (m.respawnTimer <= 0) {
          m.dead = false;
          m.hp = m.maxHp;
          m.x = m.spawnX;
          m.stunTimer = 0;
        }
        continue;
      }

      if (m.hurtTimer > 0) m.hurtTimer = Math.max(0, m.hurtTimer - dt);
      if (m.stunTimer > 0) {
        m.stunTimer = Math.max(0, m.stunTimer - dt);
        continue;
      }

      const distToPlayer = Math.hypot(p.x - m.x, p.y - m.y);
      if (distToPlayer < (m.isBoss ? 340 : 210) && m.hp < m.maxHp) {
        // Đuổi đánh người chơi khi bị khiêu khích
        m.dir = p.x >= m.x ? 1 : -1;
        if (Math.abs(p.x - m.x) > 48) {
          m.x += m.dir * m.speed * 1.25 * dt;
        } else {
          m.atkCooldown -= dt;
          if (m.atkCooldown <= 0) {
            m.atkCooldown = m.isBoss ? 1.15 : 1.55;
            const rawTaken = Math.max(1, m.attack - p.defense);
            const actualTaken = p.shieldTimer > 0 ? Math.max(1, Math.round(rawTaken * 0.25)) : rawTaken;
            p.hp = Math.max(0, p.hp - actualTaken);
            this.spawnFloatingText(p.x, p.y + 58, `-${formatNroNum(actualTaken)}`, '#f87171');
            if (p.hp <= 0) {
              // Bị hạ -> Hồi sinh tại Nhà Gôhan
              p.hp = Math.round(p.maxHp * 0.5);
              this.hud.pushBanner('Bạn đã kiệt sức và được Ông Gôhan cứu về nhà!', '#fca5a5');
              this.changeMap(0, 260, 175);
              return;
            }
          }
        }
      } else {
        // Tuần tra tự nhiên trong vùng minX..maxX
        m.x += m.dir * m.speed * 0.65 * dt;
        if (m.x <= m.minX) {
          m.x = m.minX;
          m.dir = 1;
        } else if (m.x >= m.maxX) {
          m.x = m.maxX;
          m.dir = -1;
        }
      }

      const mobGround = this.getGroundTopAt(m.x, mapCfg);
      m.y = mobGround + (m.flyOffset ? m.flyOffset + Math.sin(this.animClock * 4 + i) * 6 : 0);
    }

    // Nhặt vật phẩm rơi trên đất tự động khi lại gần
    for (let i = this.groundDrops.length - 1; i >= 0; i--) {
      const d = this.groundDrops[i];
      d.ttl -= dt;
      if (d.ttl <= 0) {
        this.groundDrops.splice(i, 1);
        continue;
      }
      if (Math.hypot(d.x - p.x, d.y - p.y) < 68) {
        if (d.kind === 'gold') {
          p.gold += d.amount;
          sound.playCoin();
          this.spawnFloatingText(d.x, d.y + 28, `+${formatNroNum(d.amount)} Vàng`, '#fde047');
          this.groundDrops.splice(i, 1);
        } else if (d.kind === 'item') {
          if (this.addItemToBag(d.itemId)) {
            sound.playCoin();
            this.hud.pushBanner(`Nhặt được [${d.label}]!`, '#fde047');
            this.groundDrops.splice(i, 1);
          }
        }
      }
    }

    // Cập nhật Đạn Chưởng / Quả Cầu Kênh Khi
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i];
      pr.x += pr.vx * dt;
      pr.y += pr.vy * dt;
      pr.ttl -= dt;

      if (pr.kind === 'beam') {
        for (let m of this.monsters) {
          if (!m.dead && !pr.hitSet.has(m.uid) && Math.hypot(m.x - pr.x, (m.y + 28) - pr.y) < 52) {
            pr.hitSet.add(m.uid);
            this.applyDamageToMonster(m, pr.dmg);
            this.skillEffects.push({ type: 'Explosion', x: m.x, y: m.y + 28, timer: 0, duration: 0.32 });
          }
        }
      } else if (pr.kind === 'orb') {
        let exploded = pr.ttl <= 0 || pr.y <= this.getGroundTopAt(pr.x, mapCfg) + 12;
        for (let m of this.monsters) {
          if (!m.dead && Math.hypot(m.x - pr.x, (m.y + 28) - pr.y) < 54) {
            exploded = true;
            break;
          }
        }
        if (exploded) {
          sound.playExplosion();
          this.skillEffects.push({ type: 'Explosion', x: pr.x, y: pr.y, timer: 0, duration: 0.45, big: true });
          this.monsters.forEach((m) => {
            if (!m.dead && Math.hypot(m.x - pr.x, m.y - pr.y) <= (pr.aoe || 140)) {
              this.applyDamageToMonster(m, pr.dmg, true);
            }
          });
          this.projectiles.splice(i, 1);
          continue;
        }
      }

      if (pr.ttl <= 0) this.projectiles.splice(i, 1);
    }

    // Cập nhật hiệu ứng kỹ năng & chữ sát thương bay
    for (let i = this.skillEffects.length - 1; i >= 0; i--) {
      this.skillEffects[i].timer += dt;
      if (this.skillEffects[i].timer >= this.skillEffects[i].duration) {
        this.skillEffects.splice(i, 1);
      }
    }
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      this.floatingTexts[i].y += 38 * dt;
      this.floatingTexts[i].ttl -= dt;
      if (this.floatingTexts[i].ttl <= 0) this.floatingTexts.splice(i, 1);
    }
    if (this.clickMarker) {
      this.clickMarker.timer += dt;
      if (this.clickMarker.timer >= 0.4) this.clickMarker = null;
    }

    this.updateCamera(dt);
    this.hud.update(dt);
  }

  updateCamera(dt) {
    const mapCfg = MAPS_CONFIG[this.currentMapId] || MAPS_CONFIG[0];
    const targetCamX = Math.max(510, Math.min(mapCfg.width - 510, this.player.x));
    const targetCamY = Math.max(305, Math.min(mapCfg.height - 305, this.player.y + 95));
    const lerp = Math.min(1, dt * 8.5);
    this.camX += (targetCamX - this.camX) * lerp;
    this.camY += (targetCamY - this.camY) * lerp;
  }

  // ==================== KẾT XUẤT WORLD & BẢN ĐỒ CHUẨN LIBGDX ====================
  worldToView(wx, wy) {
    return {
      vx: wx - (this.camX - 510),
      vy: wy - (this.camY - 305)
    };
  }

  drawWorldTex(ctx, relPath, wx, wy, ww, wh, flipX = false) {
    const img = assets.tex(relPath);
    if (!img) return;
    const vx = wx - (this.camX - 510);
    const vy = wy - (this.camY - 305);
    const absW = ww || img.naturalWidth * 0.5;
    const absH = wh || img.naturalHeight * 0.5;
    if (vx + absW < -180 || vx > VIRTUAL_W + 180) return;

    const cy = VIRTUAL_H - vy - absH;
    if (flipX) {
      ctx.save();
      ctx.translate(vx + absW, cy);
      ctx.scale(-1, 1);
      ctx.drawImage(img, 0, 0, absW, absH);
      ctx.restore();
    } else {
      ctx.drawImage(img, vx, cy, absW, absH);
    }
  }

  render() {
    const ctx = this.ctx;
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const targetW = Math.max(1, Math.floor(window.innerWidth * dpr));
    const targetH = Math.max(1, Math.floor(window.innerHeight * dpr));
    if (this.canvas.width !== targetW || this.canvas.height !== targetH) {
      this.canvas.width = targetW;
      this.canvas.height = targetH;
    }

    ctx.save();
    ctx.setTransform(targetW / VIRTUAL_W, 0, 0, targetH / VIRTUAL_H, 0, 0);
    ctx.imageSmoothingEnabled = true;

    const mapCfg = MAPS_CONFIG[this.currentMapId] || MAPS_CONFIG[0];

    // 1. NỀN TRỜI & PARALLAX NÚI XA CHUẨN HÀNH TINH
    this.renderParallaxBackground(ctx, mapCfg);

    // 2. LỚP BẢN ĐỒ CHÍNH (NỀN ĐẤT & CẢNH VẬT TRƯỚC NHÂN VẬT)
    this.renderMapMainLayer(ctx, mapCfg);

    // 3. VẬT PHẨM RƠI TRÊN ĐẤT & DẤU CLICK DI CHUYỂN
    this.renderGroundDropsAndMarkers(ctx);

    // 4. NPC CHUẨN MODULAR / CÂY ĐẬU THẦN / RƯƠNG ĐỒ
    this.renderNpcs(ctx);

    // 5. QUÁI VẬT & BOSS DÙNG 100% SPRITE THẬT
    this.renderMonsters(ctx);

    // 6. PET, ĐỆ TỬ & NHÂN VẬT NGƯỜI CHƠI CHUẨN MODULAR LIBGDX
    if (this.player.equipped.pet) {
      this.renderPetFollower(ctx);
    }
    if (this.player.detu && !this.player.isFused && this.player.detu.mode !== 'home') {
      this.renderDeTu(ctx);
    }
    this.renderPlayer(ctx);

    // 7. CHƯỞNG KHÍ, HIỆU ỨNG KỸ NĂNG & CHỮ SÁT THƯƠNG
    this.renderProjectilesAndEffects(ctx);

    // 8. LỚP TIỀN CẢNH BẢN ĐỒ (maparusau.png, doihoacucsau.png, doihoacuctruoc.png, khoimay.png)
    this.renderMapForegroundLayer(ctx, mapCfg);

    // 9. BẢNG TÊN LỐI CHUYỂN MAP (WAYPOINT SIGNS CHUẨN MANHINHLANGARU)
    this.renderWaypointSigns(ctx, mapCfg);

    // 10. GIAO DIỆN HUD TRONG GAME CHUẨN VEHUD.JAVA
    this.hud.render(ctx);

    // 11. HIỆU ỨNG CHUYỂN BẢN ĐỒ NGỌC RỒNG XOAY (nr5s.png)
    if (this.mapTransitionTimer > 0) {
      ctx.fillStyle = `rgba(0, 0, 0, ${Math.min(0.92, this.mapTransitionTimer * 2.2)})`;
      ctx.fillRect(0, 0, VIRTUAL_W, VIRTUAL_H);
      const dbImg = assets.tex('vatpham/vatphamgame/ngocrong/nr5s.png');
      if (dbImg) {
        ctx.save();
        ctx.translate(VIRTUAL_W / 2, VIRTUAL_H / 2 - 14);
        ctx.rotate(this.animClock * 8);
        ctx.drawImage(dbImg, -22, -22, 44, 44);
        ctx.restore();
      }
      this.hud.drawText(ctx, `Đang tới ${this.mapTransitionLabel}...`, VIRTUAL_W / 2, VIRTUAL_H / 2 - 48, {
        size: 14, color: '#fde047', align: 'center'
      });
    }

    ctx.restore();
  }

  // ==================== VẼ PARALLAX NỀN TRỜI 3 HÀNH TINH ====================
  renderParallaxBackground(ctx, mapCfg) {
    const theme = mapCfg.planetTheme || 'traidat';
    const camOffX = this.camX - 510;
    const camOffY = this.camY - 305;

    if (theme === 'xayda') {
      ctx.fillStyle = '#c26219';
      ctx.fillRect(0, 0, VIRTUAL_W, VIRTUAL_H);
      for (let i = -1; i < 6; i++) {
        this.hud.drawTex(ctx, 'hud/giaodienngoai/xayda/bautroixayda.jpg', i * 255 - (camOffX * 0.05) % 255, 330 - camOffY * 0.08, 256, 280);
      }
      this.hud.drawTex(ctx, 'hud/giaodienngoai/xayda/matrang.png', 760 - camOffX * 0.04, 455 - camOffY * 0.05, 68, 68);
      for (let i = -1; i < 6; i++) {
        this.hud.drawTex(ctx, 'hud/giaodienngoai/xayda/nuixa_xayda.png', i * 255 - (camOffX * 0.12) % 255, 290 - camOffY * 0.15, 256, 150);
      }
      for (let i = -1; i < 4; i++) {
        this.hud.drawTex(ctx, 'hud/giaodienngoai/xayda/nui_xayda.png', i * 510 - (camOffX * 0.22) % 510, 235 - camOffY * 0.25, 512, 175);
      }
      for (let i = -1; i < 5; i++) {
        this.hud.drawTex(ctx, 'hud/giaodienngoai/xayda/nuicay_xayda.png', i * 340 - (camOffX * 0.35) % 340, 175 - camOffY * 0.35, 342, 185);
        this.hud.drawTex(ctx, 'hud/giaodienngoai/xayda/nuithap_xayda.png', i * 340 - (camOffX * 0.5) % 340, 130 - camOffY * 0.45, 342, 185);
      }
      return;
    }

    if (theme === 'namek') {
      ctx.fillStyle = '#05c2a8';
      ctx.fillRect(0, 0, VIRTUAL_W, VIRTUAL_H);
      for (let i = -1; i < 6; i++) {
        this.hud.drawTex(ctx, 'hud/giaodienngoai/namek/sky_namek.png', i * 255 - (camOffX * 0.05) % 255, 330 - camOffY * 0.08, 256, 170);
        this.hud.drawTex(ctx, 'hud/giaodienngoai/namek/nuixa_namek.png', i * 255 - (camOffX * 0.12) % 255, 290 - camOffY * 0.15, 256, 155);
      }
      for (let i = -1; i < 4; i++) {
        this.hud.drawTex(ctx, 'hud/giaodienngoai/namek/nui_namek.png', i * 510 - (camOffX * 0.22) % 510, 230 - camOffY * 0.25, 512, 175);
      }
      for (let i = -1; i < 5; i++) {
        this.hud.drawTex(ctx, 'hud/giaodienngoai/namek/nuicay_namek.png', i * 340 - (camOffX * 0.35) % 340, 175 - camOffY * 0.35, 342, 185);
        this.hud.drawTex(ctx, 'hud/giaodienngoai/namek/nuithap_namek.png', i * 340 - (camOffX * 0.5) % 340, 130 - camOffY * 0.45, 342, 185);
      }
      return;
    }

    // Trái Đất chuẩn ManHinhNhaGohan / ManHinhLangAru / ManHinhDoiHoaCuc
    ctx.fillStyle = '#19b0f8';
    ctx.fillRect(0, 0, VIRTUAL_W, VIRTUAL_H);

    for (let i = -1; i < 6; i++) {
      this.hud.drawTex(ctx, 'hud/giaodienngoai/traidat/sky_traidat.png', i * 255 - (camOffX * 0.05) % 255, 325 - camOffY * 0.1, 256, 155);
      this.hud.drawTex(ctx, 'hud/giaodienngoai/traidat/nuixa_traidat.png', i * 255 - (camOffX * 0.1) % 255, 295 - camOffY * 0.15, 256, 150);
    }
    for (let i = -1; i < 4; i++) {
      this.hud.drawTex(ctx, 'hud/giaodienngoai/traidat/nui_traidat.png', i * 510 - (camOffX * 0.18) % 510, 250 - camOffY * 0.22, 512, 170);
    }

    // Dải đồi xanh nối liền không hở khe
    this.hud.fillRectGdx(ctx, 0, 0, VIRTUAL_W, Math.max(0, 260 - camOffY * 0.35), '#167615', null);
    for (let i = -1; i < 5; i++) {
      this.hud.drawTex(ctx, 'hud/giaodienngoai/traidat/nuicay_traidat.png', i * 340 - (camOffX * 0.28) % 340, 195 - camOffY * 0.35, 342, 190);
    }

    this.hud.fillRectGdx(ctx, 0, 0, VIRTUAL_W, Math.max(0, 200 - camOffY * 0.5), '#175e1c', null);
    for (let i = -1; i < 5; i++) {
      this.hud.drawTex(ctx, 'hud/giaodienngoai/traidat/nuithap_traidat.png', i * 340 - (camOffX * 0.42) % 340, 135 - camOffY * 0.5, 342, 190);
    }

    // Riêng Đồi Hoa Cúc (Map 2): Vẽ Tháp Karin sừng sững xuyên tầng mây chuẩn ManHinhDoiHoaCuc.java!
    if (mapCfg.key === 'doi_hoa_cuc') {
      const karinImg = assets.tex('map/traidat/doi_hoa_cuc/thapkirin.png');
      if (karinImg) {
        const kw = karinImg.naturalWidth * 0.5;
        const kh = karinImg.naturalHeight * 0.5;
        const kx = 540 - camOffX * 0.12;
        for (let s = 0; s < 9; s++) {
          this.hud.drawTex(ctx, 'map/traidat/doi_hoa_cuc/thapkirin.png', kx, 165 - camOffY * 0.25 + s * (kh - 2), kw, kh);
        }
      }
    }
  }

  // ==================== VẼ LỚP BẢN ĐỒ CHÍNH ====================
  renderMapMainLayer(ctx, mapCfg) {
    const fireFrame = (Math.floor(this.animClock * 10) % 4) + 1;

    if (mapCfg.key === 'lang_aru') {
      // Làng Aru dùng bức tranh vẽ tay nguyên bản maparu.png (5088x2016 -> 2544x1008 tại -96, -38)
      this.drawWorldTex(ctx, 'map/traidat/lang_aru/maparu.png', -96, -38, 2544, 1008);
      this.drawWorldTex(ctx, 'map/traidat/chung/trangtri/cuinuongduiga.png', 240, 170, 66, 48);
      this.drawWorldTex(ctx, `hieuung/hieuungmap/lua${fireFrame}.png`, 255, 186, 36, 42);
      return;
    }

    if (mapCfg.key === 'doi_hoa_cuc') {
      // Đồi Hoa Cúc dùng bức tranh vẽ tay nguyên bản doihoacuc.png (5952x1920 -> 2976x960 tại 0, -134)
      this.drawWorldTex(ctx, 'map/traidat/doi_hoa_cuc/doihoacuc.png', 0, -134, 2976, 960);
      return;
    }

    if (mapCfg.key === 'nha_gohan') {
      // Nhà Gôhan chuẩn ManHinhNhaGohan.java
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi1_traidat.png', -30, 170, 210, 214);
      this.drawWorldTex(ctx, 'map/traidat/chung/nhacua/nhacua2_earth.png', 250, 172, 246, 224);
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi1_traidat.png', 960, 172, 230, 234);

      for (let i = 0; i < 20; i++) {
        this.drawWorldTex(ctx, 'map/traidat/chung/cayco/cayco3_traidat.png', i * 75, 172, 50, 50);
      }
      for (let i = 0; i < 29; i++) {
        const tx = i * 50;
        const mIdx = (i % 5) + 1;
        const dIdx = (i % 3) + 1;
        this.drawWorldTex(ctx, `map/traidat/chung/dat/matdat_traidat${mIdx}.png`, tx, 125, 51, 51);
        this.drawWorldTex(ctx, `map/traidat/chung/dat/dat_traidat${dIdx}.png`, tx, 75, 51, 51);
        this.drawWorldTex(ctx, `map/traidat/chung/dat/longdat_traidat${dIdx}.png`, tx, 25, 51, 51);
        this.drawWorldTex(ctx, `map/traidat/chung/dat/longdat_traidat${dIdx}.png`, tx, -25, 51, 51);
        this.drawWorldTex(ctx, 'map/traidat/chung/cayco/cayco5_traidat.png', tx, 173, 51, 12);
      }
      this.drawWorldTex(ctx, 'map/traidat/chung/dat/doc_traidat.png', 670, 0, 400, 165);
      this.drawWorldTex(ctx, 'map/traidat/chung/trangtri/cuinuongduiga.png', 1165, 172, 66, 48);
      this.drawWorldTex(ctx, `hieuung/hieuungmap/lua${fireFrame}.png`, 1180, 188, 36, 42);
      return;
    }

    if (mapCfg.key === 'vach_nui_kakarot') {
      // Vách Núi Kakarot dùng 100% Texture Xayda thật
      this.drawWorldTex(ctx, 'map/xayda/chung/nhacua/nhacua1_xayda.png', 150, 170, 240, 220);
      this.drawWorldTex(ctx, 'map/xayda/chung/nhacua/55.png', 820, 172, 165, 190);
      this.drawWorldTex(ctx, 'vatpham/taubay/myTexture2dmaybay3.png', 1540, 172, 118, 98);
      this.drawWorldTex(ctx, 'map/xayda/chung/caycoi/caycoi1_xayda.png', 520, 172, 210, 210);
      this.drawWorldTex(ctx, 'map/xayda/chung/caycoi/caycoi2_xayda.png', 1240, 172, 195, 195);

      for (let i = -1; i < 40; i++) {
        const tx = i * 50;
        const mIdx = ((i + 5) % 5) + 1;
        const dIdx = ((i + 3) % 3) + 1;
        if (i % 2 === 0) this.drawWorldTex(ctx, 'map/xayda/chung/cayco/cayco1_xayda.png', tx, 172, 50, 46);
        this.drawWorldTex(ctx, `map/xayda/chung/dat/matdat_xayda${mIdx}.png`, tx, 125, 51, 51);
        this.drawWorldTex(ctx, `map/xayda/chung/dat/dat_xayda${dIdx}.png`, tx, 75, 51, 51);
        this.drawWorldTex(ctx, `map/xayda/chung/dat/longdat_xayda${dIdx}.png`, tx, 25, 51, 51);
        this.drawWorldTex(ctx, `map/xayda/chung/dat/longdat_xayda${dIdx}.png`, tx, -25, 51, 51);
      }
      this.drawWorldTex(ctx, 'map/xayda/chung/dat/doc_xayda.png', 650, 0, 390, 160);
      return;
    }

    if (mapCfg.key === 'thung_lung_namek') {
      // Thung Lũng Namếc dùng 100% Texture Namek thật (/assets/map/namek/371..377.png + hud/giaodienngoai/namek)
      this.drawWorldTex(ctx, 'vatpham/taubay/myTexture2dmaybay2.png', 180, 172, 130, 108);
      this.drawWorldTex(ctx, 'map/namek/371.png', 420, 172, 145, 225);
      this.drawWorldTex(ctx, 'map/namek/372.png', 780, 172, 155, 235);
      this.drawWorldTex(ctx, 'map/namek/373.png', 1180, 172, 160, 230);
      this.drawWorldTex(ctx, 'map/namek/375.png', 1580, 172, 190, 210);
      this.drawWorldTex(ctx, 'map/namek/371.png', 1960, 172, 145, 225);

      for (let i = -1; i < 46; i++) {
        const tx = i * 50;
        const mIdx = ((i + 5) % 5) + 1;
        const dIdx = ((i + 3) % 3) + 1;
        if (i % 2 === 0) this.drawWorldTex(ctx, 'hud/giaodienngoai/namek/cayco1_namek.png', tx, 172, 50, 48);
        this.drawWorldTex(ctx, `hud/giaodienngoai/namek/matdat_namek${mIdx}.png`, tx, 125, 51, 51);
        this.drawWorldTex(ctx, `hud/giaodienngoai/namek/dat_namek${dIdx}.png`, tx, 75, 51, 51);
        this.drawWorldTex(ctx, `hud/giaodienngoai/namek/longdat_namek${dIdx}.png`, tx, 25, 51, 51);
        this.drawWorldTex(ctx, `hud/giaodienngoai/namek/longdat_namek${dIdx}.png`, tx, -25, 51, 51);
      }
    }
  }

  // ==================== VẼ LỚP TIỀN CẢNH CHE PHỦ TRƯỚC NHÂN VẬT ====================
  renderMapForegroundLayer(ctx, mapCfg) {
    const camOffX = this.camX - 510;

    if (mapCfg.key === 'lang_aru') {
      this.drawWorldTex(ctx, 'map/traidat/lang_aru/maparusau.png', -96, -38, 2544, 1008);
      ctx.save();
      ctx.globalAlpha = 0.28;
      for (let i = 0; i < 3; i++) {
        this.drawWorldTex(ctx, 'hieuung/hieuungmap/light.png', 150 + i * 840, 420, 560, 480);
      }
      ctx.restore();
    } else if (mapCfg.key === 'doi_hoa_cuc') {
      this.drawWorldTex(ctx, 'map/traidat/doi_hoa_cuc/doihoacucsau.png', 0, -134, 2976, 960);
      // Lớp cỏ hoa tiền cảnh parallax nhanh hơn camera chuẩn ManHinhDoiHoaCuc.java
      this.drawWorldTex(ctx, 'map/traidat/doi_hoa_cuc/doihoacuctruoc.png', -camOffX * 0.35 - 100, -184, 3408, 960);
    } else if (mapCfg.key === 'nha_gohan') {
      ctx.save();
      ctx.globalAlpha = 0.3;
      this.drawWorldTex(ctx, 'hieuung/hieuungmap/light.png', 140, 310, 560, 460);
      ctx.restore();
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi2_traidat.png', 510, -115, 190, 190);
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi2_traidat.png', 860, -120, 190, 190);
    }

    // Làn sương mây trôi nhẹ sát đáy màn hình (khoimay.png chuẩn LibGDX)
    ctx.save();
    ctx.globalAlpha = 0.35;
    const cloudShift = (this.animClock * 18) % 287;
    for (let i = -1; i < 5; i++) {
      this.hud.drawTex(ctx, 'hieuung/hieuungmap/khoimay.png', i * 287 - cloudShift, -32, 288, 128);
    }
    ctx.restore();
  }

  // ==================== BẢNG CHỈ ĐƯỜNG CHUYỂN MAP (WAYPOINT SIGNS) ====================
  renderWaypointSigns(ctx, mapCfg) {
    const p = this.player;
    for (let i = 0; i < mapCfg.waypoints.length; i++) {
      const wp = mapCfg.waypoints[i];
      const inRange = p.x >= wp.showRangeX[0] && p.x <= wp.showRangeX[1];
      const sr = wp.signRect;
      const { vx, vy } = this.worldToView(sr.x, sr.y);
      if (vx + sr.w < -20 || vx > VIRTUAL_W + 20) continue;

      ctx.save();
      ctx.globalAlpha = inRange ? 0.95 : 0.65;
      this.hud.fillRectGdx(ctx, vx, vy, sr.w, sr.h, 'rgba(15, 23, 42, 0.78)', '#f59e0b', 2);
      const bob = Math.sin(this.animClock * 5) * 3;
      this.hud.drawTex(ctx, 'hud/giaodienngoai/chung/muitenvang.png', vx + 12 + bob, vy + 14, 24, 24);
      this.hud.drawText(ctx, wp.label, vx + sr.w / 2 + 10, vy + 29, {
        size: 12.5, color: '#fde047', align: 'center'
      });
      this.hud.drawText(ctx, 'Click để qua map', vx + sr.w / 2 + 10, vy + 11, {
        size: 9.5, color: '#86efac', align: 'center'
      });
      ctx.restore();
    }
  }

  // ==================== VẼ NPC CHUẨN MODULAR ====================
  renderNpcs(ctx) {
    const bob = Math.floor(this.animClock * 3) % 2 === 0 ? 0 : -1.2;

    for (let i = 0; i < this.npcs.length; i++) {
      const npc = this.npcs[i];
      let headTopY = npc.y + 72;

      if (npc.kind === 'senzu_tree') {
        const lv = Math.min(10, Math.max(1, this.player.senzuCount || 5));
        const treePath = `nhanvat/npc/dau_traidat/caydau${lv}.png`;
        const img = assets.tex(treePath);
        const tw = img ? img.naturalWidth * 0.55 : 78;
        const th = img ? img.naturalHeight * 0.55 : 108;
        this.drawWorldTex(ctx, treePath, npc.x - tw / 2, npc.y, tw, th);
        headTopY = npc.y + th + 6;
      } else if (npc.kind === 'chest' || npc.kind === 'meat') {
        const img = assets.tex(npc.tex);
        const iw = img ? img.naturalWidth * 0.55 : 42;
        const ih = img ? img.naturalHeight * 0.55 : 38;
        this.drawWorldTex(ctx, npc.tex, npc.x - iw / 2, npc.y, iw, ih);
        headTopY = npc.y + ih + 8;
      } else if (npc.kind === 'modular') {
        const off = NPC_OFFSETS[npc.folder] || { chanX: 0, chanY: 0, thanX: 0, thanY: 0, dauX: 0, dauY: -18, extraThanY: 0 };
        const chanImg = assets.tex(`nhanvat/npc/${npc.folder}/chan.png`);
        const thanImg = assets.tex(`nhanvat/npc/${npc.folder}/than.png`);
        const dauImg = assets.tex(`nhanvat/npc/${npc.folder}/dau.png`);

        if (chanImg && thanImg && dauImg) {
          const s = 0.5;
          const cw = chanImg.naturalWidth * s;
          const ch = chanImg.naturalHeight * s;
          const tw = thanImg.naturalWidth * s;
          const th = thanImg.naturalHeight * s;
          const dw = dauImg.naturalWidth * s;
          const dh = dauImg.naturalHeight * s;

          const chanY = npc.y + off.chanY;
          const thanY = npc.y + ch + bob - 10.2 + off.thanY + (off.extraThanY || 0);
          const dauY = npc.y + ch + bob + th + off.dauY;

          // Thứ tự vẽ chuẩn Npc.java: Chân -> Đầu -> Thân
          this.drawWorldTex(ctx, `nhanvat/npc/${npc.folder}/chan.png`, npc.x - cw / 2 + off.chanX, chanY, cw, ch);
          this.drawWorldTex(ctx, `nhanvat/npc/${npc.folder}/dau.png`, npc.x - dw / 2 + off.dauX, dauY, dw, dh);
          this.drawWorldTex(ctx, `nhanvat/npc/${npc.folder}/than.png`, npc.x - tw / 2 + off.thanX, thanY, tw, th);
          headTopY = dauY + dh + 6;
        }
      }

      // Tên NPC màu vàng cam chuẩn NRO + mũi tên đỏ clicknpc.png nếu đang chọn
      const { vx, vy } = this.worldToView(npc.x, headTopY);
      this.hud.drawText(ctx, npc.name, vx, vy, { size: 11.5, color: '#fde047', align: 'center' });

      // Chấm than nhiệm vụ trên đầu NPC cốt truyện
      const quest = STORY_QUESTS.find((q) => q.id === this.player.questId);
      if (quest && quest.npcId === npc.id && (quest.id === 1 || this.player.questProgress >= quest.count)) {
        this.hud.drawTex(ctx, 'hud/giaodientrong/dauhoicham.png', vx - 9, vy + 14 + Math.sin(this.animClock * 6) * 3, 18, 24);
      }

      if (this.selectedTarget === npc) {
        this.hud.drawTex(ctx, 'hud/giaodientrong/clicknpc.png', vx - 10, vy + 14 + Math.sin(this.animClock * 8) * 3, 20, 20);
      }
    }
  }

  // ==================== VẼ QUÁI VẬT & BOSS (100% SPRITE THẬT!) ====================
  renderMonsters(ctx) {
    for (let i = 0; i < this.monsters.length; i++) {
      const m = this.monsters[i];
      if (m.dead) continue;

      const { vx, vy } = this.worldToView(m.x, m.y);
      if (vx < -160 || vx > VIRTUAL_W + 160) continue;

      let topOffset = 58;
      // Sprite gốc nhìn sang TRÁI -> khi m.dir === 1 (đi sang phải) thì lật ngang
      const flipRight = m.dir > 0;

      ctx.save();
      if (m.hurtTimer > 0) {
        ctx.filter = 'brightness(1.85)';
      }

      if (m.renderType === 'frames' && m.frames) {
        const fIdx = Math.floor(this.animClock * 9 + i) % m.frames.length;
        const fPath = m.frames[fIdx];
        const img = assets.tex(fPath);
        if (img) {
          const w = img.naturalWidth * m.scale;
          const h = img.naturalHeight * m.scale;
          this.drawWorldTex(ctx, fPath, m.x - w / 2, m.y, w, h, flipRight);
          topOffset = h + 6;
        }
      } else if (m.renderType === 'sheet_vertical' && m.sheet) {
        const img = assets.tex(m.sheet);
        if (img) {
          const fh = img.naturalHeight / m.frameCount;
          const fIdx = Math.floor(this.animClock * 8 + i) % m.frameCount;
          const dw = m.drawW;
          const dh = m.drawH;
          const cy = VIRTUAL_H - vy - dh;
          if (flipRight) {
            ctx.save();
            ctx.translate(vx + dw / 2, cy);
            ctx.scale(-1, 1);
            ctx.drawImage(img, 0, fIdx * fh, img.naturalWidth, fh, 0, 0, dw, dh);
            ctx.restore();
          } else {
            ctx.drawImage(img, 0, fIdx * fh, img.naturalWidth, fh, vx - dw / 2, cy, dw, dh);
          }
          topOffset = dh + 6;
        }
      } else if (m.renderType === 'caitrang' && m.caitrangKey) {
        // Quái Khỉ Đột & Boss Broly / Black Goku Rosé dùng đúng bộ sprite modular Cải trang thật!
        if (m.isBoss) {
          const auraFrames = m.auraColor === 'tim'
            ? ['Small975.png', 'Small977.png', 'Small978.png', 'Small986.png']
            : ['Small982.png', 'Small983.png', 'Small984.png', 'Small985.png'];
          const auraFolder = m.auraColor === 'tim' ? 'tím' : 'xanh nhạt';
          const af = auraFrames[Math.floor(this.animClock * 10) % auraFrames.length];
          this.drawWorldTex(ctx, `hieuung/hieuunggame/aura/${auraFolder}/${af}`, m.x - 48, m.y - 6, 96, 108);
        }
        topOffset = this.drawModularCharacter(ctx, {
          wx: m.x,
          wy: m.y,
          dir: m.dir,
          state: m.caitrangKey === 'khi_7' ? 'DUNG_YEN' : (m.stunTimer > 0 ? 'DUNG_YEN' : 'DI_CHUYEN'),
          runFrame: Math.floor(this.animClock * 9 + i) % 5,
          caitrangKey: m.caitrangKey,
          scale: m.scale || 0.6
        });
      }

      ctx.restore();

      // Thanh HP nhỏ & Tên quái phía trên đầu
      const barW = m.isBoss ? 76 : 48;
      const barH = m.isBoss ? 7 : 5;
      const hpRatio = m.maxHp > 0 ? Math.max(0, m.hp / m.maxHp) : 0;
      const headY = vy + topOffset;

      this.hud.fillRectGdx(ctx, vx - barW / 2, headY, barW, barH, '#111827', '#000000', 1);
      this.hud.fillRectGdx(ctx, vx - barW / 2 + 1, headY + 1, (barW - 2) * hpRatio, barH - 2, m.isBoss ? '#f59e0b' : '#ef4444', null);

      if (m.isBoss || this.selectedTarget === m) {
        this.hud.drawText(ctx, m.name, vx, headY + barH + 5, {
          size: m.isBoss ? 11.5 : 10,
          color: m.isBoss ? '#fca5a5' : '#ffffff',
          align: 'center'
        });
      }

      if (this.selectedTarget === m) {
        this.hud.drawTex(ctx, 'hud/giaodientrong/clicknpc.png', vx - 10, headY + barH + 18 + Math.sin(this.animClock * 8) * 3, 20, 20);
      }
    }
  }

  // ==================== VẼ NHÂN VẬT MODULAR CHUẨN NHANVAT.JAVA ====================
  getPlayerAvatarPath() {
    const p = this.player;
    const activeCt = p.tempTransformKey || (p.equipped.caitrang ? ITEM_CATALOG[p.equipped.caitrang.id]?.caitrangKey : null);
    if (activeCt) {
      return `nhanvat/caitrang/${activeCt}/avt.png`;
    }
    if (p.planet === 0) {
      const avts = ['Goku_base', 'Krillin_base', 'Yamcha_base'];
      return `nhanvat/traidat/avatar/${avts[p.characterIndex] || 'Goku_base'}/avt.png`;
    }
    if (p.planet === 1) {
      const avts = ['Cađíc_base', 'Rađíc_base', 'Kakalot_base'];
      return `nhanvat/xayda/avatar/${avts[p.characterIndex] || 'Cađíc_base'}/avt.png`;
    }
    return `hud/giaodienngoai/namek/dau_namek_${(p.characterIndex % 3) + 1}.png`;
  }

  drawModularCharacter(ctx, cfg) {
    const {
      wx,
      wy,
      dir,
      state, // 'DUNG_YEN' | 'DI_CHUYEN' | 'NHAY' | 'ROI' | 'BAY' | 'GONG'
      runFrame = 0,
      planetIdx = 0,
      charIdx = 0,
      aoSet = 'set_base',
      quanSet = 'set_base',
      caitrangKey = null,
      attackTimer = 0,
      attackFrame = 0,
      scale = 0.5
    } = cfg;

    // Sprite gốc trong repo DANG-PH/ngoc-rong-online quay mặt sang PHẢI hay TRÁI?
    // Kiểm tra thực tế: Goku_base/daudung.png và ong_gohan nhìn sang TRÁI hay PHẢI?
    // Trong NhanVat.java: sangPhai ? draw bình thường hoặc flip! Hãy kiểm tra: Goku trong goku_live_crop.png nhìn sang PHẢI khi không flip!
    const flipX = dir < 0;

    let dauPath = '';
    let thanPath = '';
    let chanPath = '';
    let off = MODULAR_STATE_OFFSETS.DUNG_YEN;

    if (caitrangKey) {
      const base = `nhanvat/caitrang/${caitrangKey}/`;
      dauPath = state === 'DI_CHUYEN' ? `${base}dauchay.png` : `${base}daudung.png`;
      if (state === 'DI_CHUYEN') {
        thanPath = `${base}thanchay (${(runFrame % 5) + 1}).png`;
        chanPath = `${base}chanchay (${(runFrame % 5) + 1}).png`;
      } else if (state === 'NHAY') {
        thanPath = `${base}thannhay.png`;
        chanPath = `${base}channhay.png`;
      } else if (state === 'ROI') {
        thanPath = `${base}thanroi.png`;
        chanPath = `${base}chanroi.png`;
      } else if (state === 'BAY') {
        thanPath = `${base}thannhay.png`;
        chanPath = `${base}chanbay.png`;
      } else {
        thanPath = `${base}thandung.png`;
        chanPath = `${base}chandung.png`;
      }
      const ctMap = CAITRANG_EXACT_OFFSETS[caitrangKey];
      if (ctMap && ctMap[state]) {
        off = ctMap[state];
      }
    } else {
      const pFolder = planetIdx === 1 ? 'xayda' : 'traidat'; // Namek dùng chung thân/chân võ phục động của traidat
      if (planetIdx === 0) {
        const avts = ['Goku_base', 'Krillin_base', 'Yamcha_base'];
        const av = avts[charIdx % 3] || 'Goku_base';
        dauPath = `nhanvat/traidat/avatar/${av}/${state === 'DI_CHUYEN' ? 'dauchay.png' : 'daudung.png'}`;
      } else if (planetIdx === 1) {
        const avts = ['Cađíc_base', 'Rađíc_base', 'Kakalot_base'];
        const av = avts[charIdx % 3] || 'Cađíc_base';
        dauPath = `nhanvat/xayda/avatar/${av}/${state === 'DI_CHUYEN' ? 'dauchay.png' : 'daudung.png'}`;
      } else {
        dauPath = `nhanvat/namek/avatar/namek_base/${state === 'DI_CHUYEN' ? 'dauchay.png' : 'daudung.png'}`;
      }

      const aoBase = `nhanvat/${pFolder}/do/${aoSet}/`;
      const quanBase = `nhanvat/${pFolder}/do/${quanSet}/`;

      if (attackTimer > 0) {
        const atkFrames = aoSet === 'set_huy_diet'
          ? ['6261.png', '6262.png', '6263.png', '6264.png', '6265.png']
          : ['588.png', '589.png', '590.png', '591.png', '592.png'];
        const cand = `${aoBase}${atkFrames[attackFrame % atkFrames.length]}`;
        thanPath = assets.tex(cand) ? cand : `${aoBase}thannhay.png`;
        chanPath = `${quanBase}channhay.png`;
      } else if (state === 'DI_CHUYEN') {
        thanPath = `${aoBase}thanchay (${(runFrame % 5) + 1}).png`;
        chanPath = `${quanBase}chanchay (${(runFrame % 5) + 1}).png`;
        off = MODULAR_STATE_OFFSETS.DI_CHUYEN[runFrame % 5];
      } else if (state === 'NHAY') {
        thanPath = `${aoBase}thannhay.png`;
        chanPath = `${quanBase}channhay.png`;
        off = MODULAR_STATE_OFFSETS.NHAY;
      } else if (state === 'ROI') {
        thanPath = `${aoBase}thanroi.png`;
        chanPath = `${quanBase}chanroi.png`;
        off = MODULAR_STATE_OFFSETS.ROI;
      } else if (state === 'BAY') {
        thanPath = `${aoBase}thannhay.png`;
        chanPath = `${quanBase}chanbay.png`;
        off = MODULAR_STATE_OFFSETS.BAY;
      } else if (state === 'GONG') {
        thanPath = `${aoBase}thandung.png`;
        chanPath = assets.tex(`${quanBase}changong.png`) ? `${quanBase}changong.png` : `${quanBase}chandung.png`;
        off = MODULAR_STATE_OFFSETS.GONG;
      } else {
        if (planetIdx === 2 && aoSet === 'set_base' && quanSet === 'set_base') {
          thanPath = 'hud/giaodienngoai/namek/thannamek.png';
          chanPath = 'hud/giaodienngoai/namek/channamek.png';
        } else {
          thanPath = `${aoBase}thandung.png`;
          chanPath = `${quanBase}chandung.png`;
        }
        off = MODULAR_STATE_OFFSETS.DUNG_YEN;
      }
    }

    const chanImg = assets.tex(chanPath);
    const thanImg = assets.tex(thanPath);
    const dauImg = assets.tex(dauPath);
    if (!chanImg || !thanImg || !dauImg) return 68;

    const cw = chanImg.naturalWidth * scale;
    const ch = chanImg.naturalHeight * scale;
    const tw = thanImg.naturalWidth * scale;
    const th = thanImg.naturalHeight * scale;
    const dw = dauImg.naturalWidth * scale;
    const dh = dauImg.naturalHeight * scale;

    const bob = state === 'DUNG_YEN' ? (Math.floor(this.animClock * 3.5) % 2 === 0 ? 0 : -1.0) : 0;
    const dirSign = dir >= 0 ? 1 : -1;
    const scaleRatio = scale / 0.5;

    const chanY = wy + off.chanY * scaleRatio;
    const thanY = wy + ch + bob - 10.2 * scaleRatio + off.thanY * scaleRatio;
    const dauY = wy + ch + bob + th + off.dauY * scaleRatio + 3.5 * scaleRatio;

    // Thứ tự vẽ chuẩn NhanVat.java: Chân -> Đầu -> Thân (Cổ áo thân che gọn cổ đầu, không bao giờ lún mặt!)
    this.drawWorldTex(ctx, chanPath, wx - cw / 2 + off.chanX * scaleRatio * dirSign, chanY, cw, ch, flipX);
    this.drawWorldTex(ctx, dauPath, wx - dw / 2 + off.dauX * scaleRatio * dirSign, dauY, dw, dh, flipX);
    this.drawWorldTex(ctx, thanPath, wx - tw / 2 + off.thanX * scaleRatio * dirSign, thanY, tw, th, flipX);

    return (dauY - wy) + dh + 6;
  }

  renderPlayer(ctx) {
    const p = this.player;
    let state = 'DUNG_YEN';
    if (p.isCharging) state = 'GONG';
    else if (p.isFlying) state = 'BAY';
    else if (!p.onGround) state = p.vy >= 0 ? 'NHAY' : 'ROI';
    else if (Math.abs(p.vx) > 5) state = 'DI_CHUYEN';

    // 1. Vẽ Aura trang bị hoặc Aura Biến Hình / Hợp Thể phía sau nhân vật
    if (p.equipped.aura || p.tempTransformKey || p.isFused) {
      const auraFrames = ['Small975.png', 'Small977.png', 'Small978.png', 'Small986.png'];
      const af = auraFrames[Math.floor(this.animClock * 12) % auraFrames.length];
      this.drawWorldTex(ctx, `hieuung/hieuunggame/aura/tím/${af}`, p.x - 42, p.y - 6, 84, 96);
    }

    // 2. Vẽ hiệu ứng Gồng KI Tái Tạo Năng Lượng (ttnl1..4.png)
    if (p.isCharging) {
      const tf = (Math.floor(this.animClock * 12) % 4) + 1;
      this.drawWorldTex(ctx, `hieuung/hieuunggame/bien_khi/ttnl${tf}.png`, p.x - 48, p.y - 8, 96, 104);
    }

    // 3. Vẽ Ván Bay (Cân Đẩu Vân / Phượng Hoàng Lửa) hoặc luồng khí bay aura_bay
    if (p.isFlying) {
      const vbItem = p.equipped.vanbay ? ITEM_CATALOG[p.equipped.vanbay.id] : null;
      const fIdx = (Math.floor(this.animClock * 10) % 4) + 1;
      if (vbItem && vbItem.vanbayKey === 'candauvan') {
        this.drawWorldTex(ctx, `vatpham/vanbay/candauvan/candauvan${fIdx}.png`, p.x - 38, p.y - 14, 76, 36, p.dir < 0);
      } else if (vbItem && vbItem.vanbayKey === 'phuong_hoang_lua') {
        this.drawWorldTex(ctx, `vatpham/vanbay/phuong_hoang_lua/phuong_hoang_lua${fIdx}.png`, p.x - 56, p.y - 26, 112, 68, p.dir < 0);
      } else {
        this.drawWorldTex(ctx, `hieuung/hieuunggame/aura_bay/${fIdx}.png`, p.x - 36, p.y - 8, 72, 48, p.dir < 0);
      }
    }

    // 4. Vẽ Phụ kiện Đeo Lưng (Kiếm Trunks / Cánh Thiên Thần) phía sau lưng
    if (p.equipped.deolung) {
      const dlDef = ITEM_CATALOG[p.equipped.deolung.id];
      if (dlDef && dlDef.deolungKey) {
        const fIdx = (Math.floor(this.animClock * 6) % (dlDef.frames || 1)) + 1;
        this.drawWorldTex(ctx, `vatpham/vatphamgame/deo_lung/${dlDef.deolungKey}/${fIdx}.png`, p.x - 28, p.y + 12, 56, 56, p.dir < 0);
      }
    }

    // 5. Vẽ Nhân Vật Modular
    const aoSet = p.equipped.ao ? (ITEM_CATALOG[p.equipped.ao.id]?.setVisual || 'set_base') : 'set_base';
    const quanSet = p.equipped.quan ? (ITEM_CATALOG[p.equipped.quan.id]?.setVisual || 'set_base') : 'set_base';
    const activeCt = p.tempTransformKey
      || (p.isFused ? (p.planet === 1 ? 'broly_lssj' : 'gohan_beast') : null)
      || (p.equipped.caitrang ? ITEM_CATALOG[p.equipped.caitrang.id]?.caitrangKey : null);

    const topH = this.drawModularCharacter(ctx, {
      wx: p.x,
      wy: p.y,
      dir: p.dir,
      state,
      runFrame: Math.floor(this.animClock * 13) % 5,
      planetIdx: p.planet,
      charIdx: p.characterIndex,
      aoSet,
      quanSet,
      caitrangKey: activeCt,
      attackTimer: p.attackAnimTimer,
      attackFrame: p.attackFrame,
      scale: 0.5
    });

    // 6. Khiên Năng Lượng nếu đang bật
    const { vx, vy } = this.worldToView(p.x, p.y);
    if (p.shieldTimer > 0) {
      ctx.save();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.85)';
      ctx.fillStyle = 'rgba(56, 189, 248, 0.22)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(vx, VIRTUAL_H - (vy + 34), 42, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    // 7. Tên nhân vật & Bong bóng Chat trên đầu
    this.hud.drawText(ctx, p.isFused ? `[Hợp Thể] ${p.name}` : p.name, vx, vy + topH, {
      size: 11.5, color: '#86efac', align: 'center'
    });

    if (p.chatBubble) {
      const bw = Math.max(90, p.chatBubble.text.length * 7.5 + 24);
      this.hud.fillRectGdx(ctx, vx - bw / 2, vy + topH + 16, bw, 28, '#ffffff', '#000000', 2);
      this.hud.drawText(ctx, p.chatBubble.text, vx, vy + topH + 25, {
        size: 11, color: '#111827', stroke: null, strokeWidth: 0, align: 'center'
      });
    }
  }

  renderPetFollower(ctx) {
    const petItem = this.player.equipped.pet;
    const def = petItem ? ITEM_CATALOG[petItem.id] : null;
    if (!def || !def.frames) return;
    const fName = def.frames[Math.floor(this.animClock * 9) % def.frames.length];
    const path = `vatpham/vatphamgame/pet/${def.petKey}/${fName}.png`;
    const img = assets.tex(path);
    if (!img) return;
    const w = img.naturalWidth * 0.55;
    const h = img.naturalHeight * 0.55;
    this.drawWorldTex(ctx, path, this.petFollower.x - w / 2, this.petFollower.y, w, h, this.petFollower.dir > 0);
  }

  renderDeTu(ctx) {
    const d = this.player.detu;
    if (!d) return;
    const topH = this.drawModularCharacter(ctx, {
      wx: d.x,
      wy: d.y,
      dir: d.dir,
      state: 'DI_CHUYEN',
      runFrame: Math.floor(this.animClock * 11) % 5,
      planetIdx: d.planet,
      charIdx: 1,
      aoSet: 'set_cam',
      quanSet: 'set_cam',
      scale: 0.42
    });
    const { vx, vy } = this.worldToView(d.x, d.y);
    this.hud.drawText(ctx, d.name, vx, vy + topH, { size: 10, color: '#67e8f9', align: 'center' });
  }

  // ==================== VẬT PHẨM RƠI, CHƯỞNG KHÍ & HIỆU ỨNG ====================
  renderGroundDropsAndMarkers(ctx) {
    if (this.clickMarker) {
      const f = (Math.floor(this.clickMarker.timer * 14) % 4) + 1;
      this.drawWorldTex(ctx, `hieuung/hieuunggame/click_di_chuyen/${f}.png`, this.clickMarker.x - 16, this.clickMarker.y - 8, 32, 24);
    }

    for (let i = 0; i < this.groundDrops.length; i++) {
      const d = this.groundDrops[i];
      const bob = Math.abs(Math.sin(this.animClock * 5 + i)) * 6;
      this.drawWorldTex(ctx, d.icon, d.x - 13, d.y + bob, 26, 26);
    }
  }

  renderProjectilesAndEffects(ctx) {
    // Tia Chưởng Kamejoko / Antomic / Masenko & Quả Cầu Kênh Khi
    for (let i = 0; i < this.projectiles.length; i++) {
      const pr = this.projectiles[i];
      const { vx, vy } = this.worldToView(pr.x, pr.y);
      const cy = VIRTUAL_H - vy;

      if (pr.kind === 'beam') {
        const startV = this.worldToView(pr.startX, pr.startY);
        const scy = VIRTUAL_H - startV.vy;
        ctx.save();
        ctx.strokeStyle = pr.color;
        ctx.lineWidth = 22;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(startV.vx, scy);
        ctx.lineTo(vx, cy);
        ctx.stroke();

        ctx.strokeStyle = pr.core;
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(startV.vx, scy);
        ctx.lineTo(vx, cy);
        ctx.stroke();
        ctx.restore();

        // Đầu chưởng dùng texture thật hieuungkynang/e_0..e_2.png
        const ef = Math.floor(this.animClock * 16) % 3;
        this.drawWorldTex(ctx, `hieuung/hieuungkynang/e_${ef}.png`, pr.x - 28, pr.y - 28, 56, 56);
      } else if (pr.kind === 'orb') {
        ctx.save();
        const grad = ctx.createRadialGradient(vx, cy, 8, vx, cy, 48);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.45, pr.color);
        grad.addColorStop(1, 'rgba(37, 99, 235, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(vx, cy, 48, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Hiệu ứng Nổ / Đánh trúng / Dịch chuyển / Thái Dương Hạ San
    for (let i = 0; i < this.skillEffects.length; i++) {
      const ef = this.skillEffects[i];
      if (ef.type === 'HitSpark') {
        const f = Math.min(2, Math.floor((ef.timer / ef.duration) * 3));
        this.drawWorldTex(ctx, `hieuung/hieuungkynang/e_${f}.png`, ef.x - 26, ef.y - 26, 52, 52);
      } else if (ef.type === 'Explosion') {
        const size = ef.big ? 130 : 76;
        const f = 21668 + Math.min(10, Math.floor((ef.timer / ef.duration) * 11));
        if (!assets.tex(`hieuung/hieuungkynang/${f}.png`)) {
          this.drawWorldTex(ctx, 'hieuung/hieuunggame/bien_khi/bom1.png', ef.x - size / 2, ef.y - size / 2, size, size);
        } else {
          this.drawWorldTex(ctx, `hieuung/hieuungkynang/${f}.png`, ef.x - size / 2, ef.y - size / 2, size, size);
        }
      } else if (ef.type === 'Tele') {
        const f = Math.min(3, Math.floor((ef.timer / ef.duration) * 3) + 1);
        this.drawWorldTex(ctx, `hieuung/hieuunggame/bien_mat/${f}.png`, ef.x - 24, ef.y, 48, 64);
      } else if (ef.type === 'SolarFlash') {
        const alpha = 1 - ef.timer / ef.duration;
        ctx.save();
        ctx.fillStyle = `rgba(254, 249, 195, ${alpha * 0.72})`;
        ctx.fillRect(0, 0, VIRTUAL_W, VIRTUAL_H);
        ctx.restore();
      }
    }

    // Chữ sát thương & TNSM bay lên
    for (let i = 0; i < this.floatingTexts.length; i++) {
      const ft = this.floatingTexts[i];
      const { vx, vy } = this.worldToView(ft.x, ft.y);
      this.hud.drawText(ctx, ft.text, vx, vy, { size: 12, color: ft.color, align: 'center' });
    }
  }

  // ==================== BẮT SỰ KIỆN CHUỘT / CẢM ỨNG / BÀN PHÍM ====================
  clientToVirtual(clientX, clientY) {
    const rect = this.canvas.getBoundingClientRect();
    const gx = ((clientX - rect.left) / Math.max(1, rect.width)) * VIRTUAL_W;
    const gy = (1 - (clientY - rect.top) / Math.max(1, rect.height)) * VIRTUAL_H;
    return { gx, gy };
  }

  _bindEvents() {
    this._onPointerDown = (e) => {
      sound.startBGM();
      const { gx, gy } = this.clientToVirtual(e.clientX, e.clientY);

      // 1. Ưu tiên kiểm tra click vào HUD / Cửa sổ Popup / NPC Dialog / Rồng Thần
      if (this.hud.handlePointerDown(gx, gy)) {
        return;
      }

      const wx = gx + (this.camX - 510);
      const wy = gy + (this.camY - 305);
      const mapCfg = MAPS_CONFIG[this.currentMapId] || MAPS_CONFIG[0];

      // 2. Kiểm tra click vào bảng Waypoint chuyển Map
      for (let wp of mapCfg.waypoints) {
        const sr = wp.signRect;
        if (wx >= sr.x && wx <= sr.x + sr.w && wy >= sr.y && wy <= sr.y + sr.h) {
          this.changeMap(wp.targetMapId, wp.targetX, wp.targetY);
          return;
        }
      }

      // 3. Kiểm tra click vào NPC
      for (let npc of this.npcs) {
        if (Math.abs(wx - npc.x) <= 44 && wy >= npc.y - 10 && wy <= npc.y + 92) {
          this.selectedTarget = npc;
          if (Math.abs(this.player.x - npc.x) <= 115) {
            this.hud.openNpcDialog(npc);
          } else {
            this.player.moveTargetX = npc.x + (this.player.x < npc.x ? -55 : 55);
            this.pendingInteractNpc = npc;
          }
          return;
        }
      }

      // 4. Kiểm tra click vào Quái vật / Boss (Click 1 lần chọn mục tiêu, click khi đã chọn -> Tấn công!)
      for (let m of this.monsters) {
        if (!m.dead && Math.abs(wx - m.x) <= 48 && wy >= m.y - 12 && wy <= m.y + 95) {
          if (this.selectedTarget === m) {
            this.castSkillBySlot(this.player.activeSkillSlot || 0);
          } else {
            this.selectedTarget = m;
            this.castSkillBySlot(this.player.activeSkillSlot || 0);
          }
          return;
        }
      }

      // 5. Click xuống mặt đất / bầu trời để di chuyển nhân vật chuẩn Dragon Boy!
      this.player.moveTargetX = Math.max(24, Math.min(mapCfg.width - 24, wx));
      const gTop = this.getGroundTopAt(this.player.moveTargetX, mapCfg);
      if (wy > gTop + 65 && this.player.ki > 10) {
        this.player.isFlying = true;
        this.player.onGround = false;
        this.player.moveTargetY = Math.min(mapCfg.height - 95, wy);
      } else {
        this.player.moveTargetY = null;
      }
      this.clickMarker = { x: wx, y: Math.max(gTop, wy), timer: 0 };
    };

    this._onKeyDown = (e) => {
      if (this.hud.chatOpen) {
        if (e.key === 'Escape') {
          this.hud.chatOpen = false;
          if (this.onTextInputToggle) this.onTextInputToggle(false, '');
        }
        return;
      }

      this.keys[e.code] = true;

      if (e.code === 'Digit1') { this.player.activeSkillSlot = 0; this.castSkillBySlot(0); }
      else if (e.code === 'Digit2') { this.player.activeSkillSlot = 1; this.castSkillBySlot(1); }
      else if (e.code === 'Digit3') { this.player.activeSkillSlot = 2; this.castSkillBySlot(2); }
      else if (e.code === 'Digit4') { this.player.activeSkillSlot = 3; this.castSkillBySlot(3); }
      else if (e.code === 'Digit5') { this.player.activeSkillSlot = 4; this.castSkillBySlot(4); }
      else if (e.code === 'Digit6' || e.code === 'KeyH') { this.eatSenzu(); }
      else if (e.code === 'Space' || e.code === 'KeyJ') {
        e.preventDefault();
        this.handlePrimaryAction();
      } else if (e.code === 'KeyE') {
        const nearNpc = this.npcs.find((n) => Math.abs(n.x - this.player.x) <= 130);
        if (nearNpc) {
          this.selectedTarget = nearNpc;
          this.hud.openNpcDialog(nearNpc);
        } else {
          // Kiểm tra đứng trước cửa Nhà Gôhan ở Làng Aru
          const mapCfg = MAPS_CONFIG[this.currentMapId];
          const portalWp = mapCfg?.waypoints.find((w) => pInRange(this.player.x, w.showRangeX));
          if (portalWp) this.changeMap(portalWp.targetMapId, portalWp.targetX, portalWp.targetY);
        }
      } else if (e.code === 'Tab') {
        e.preventDefault();
        this.cycleTarget();
      } else if (e.code === 'KeyM' || e.code === 'KeyB' || e.code === 'KeyC') {
        this.hud.popupOpen = !this.hud.popupOpen;
      } else if (e.code === 'Enter') {
        this.hud.openChatBox('CHAT');
      } else if (e.code === 'Escape') {
        this.hud.closeAllModals();
      }
    };

    this._onKeyUp = (e) => {
      this.keys[e.code] = false;
    };

    this.canvas.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    sound.startBGM();

    let syncTimer = 0;
    const loop = (now) => {
      if (!this.running) return;
      const dt = Math.min(0.05, Math.max(0.001, (now - this.lastTime) / 1000));
      this.lastTime = now;

      this.update(dt);
      this.render();

      syncTimer += dt;
      if (syncTimer >= 1.0 && this.onStateSync) {
        syncTimer = 0;
        this.onStateSync({ ...this.player });
      }

      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  destroy() {
    this.running = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.canvas.removeEventListener('pointerdown', this._onPointerDown);
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
  }
}

function pInRange(x, range) {
  return Array.isArray(range) && x >= range[0] && x <= range[1];
}
