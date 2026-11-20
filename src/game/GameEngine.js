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
  createStarterSkillLevels,
  createStarterEquipment,
  formatNroNum
} from './nroData';
import { getServerConfig } from './dataNroArchive';
import {
  NroHudRenderer,
  JOYSTICK_CX,
  JOYSTICK_CY,
  JOYSTICK_R_NGOAI,
  JOYSTICK_NGUONG
} from './NroHudRenderer';

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
    // Bật Context 2D tăng tốc phần cứng (alpha: false bỏ pha trộn nền DOM, desynchronized: true giảm độ trễ khung hình!)
    this.ctx = canvas.getContext('2d', { alpha: false, desynchronized: true }) || canvas.getContext('2d');
    this.onStateSync = callbacks.onStateSync || null;
    this.onReturnToMenu = callbacks.onReturnToMenu || null;
    this.onTextInputToggle = callbacks.onTextInputToggle || null;

    this.virtualW = initialPlayer.virtualW || VIRTUAL_W;
    this.virtualH = initialPlayer.virtualH || VIRTUAL_H;

    // Cache kích thước Viewport & Gradient Bầu Trời để KHÔNG gọi layout read (innerWidth/createLinearGradient) 60 lần/giây!
    this._winW = this.virtualW;
    this._winH = this.virtualH;
    this._isPortrait = false;
    this._fitScale = 1;
    this._targetW = this.virtualW;
    this._targetH = this.virtualH;
    this._skyGradCache = new Map();
    this._syncCanvasResolution();

    this.running = false;
    this.rafId = null;
    this.lastTime = 0;
    this.animClock = 0;
    this.zoneId = 1;
    this.serverCfg = getServerConfig(initialPlayer.serverId || (typeof localStorage !== 'undefined' ? localStorage.getItem('nro_server') : 1) || 1);

    // Khởi tạo dữ liệu người chơi chuẩn cốt truyện Hậu Bối 3 Chủng Tộc (Nhà Gôhan: 0 | Nhà Paragus: 24 | Nhà Moori: 19)
    const planetIdx = [0, 1, 2].includes(Number(initialPlayer.planet)) ? Number(initialPlayer.planet) : 0;
    const planetDef = PLANET_DEFS[planetIdx];
    const isLegacySave = initialPlayer.saveVersion !== 4;
    const startMapId = !isLegacySave && typeof initialPlayer.mapId === 'number' && MAPS_CONFIG[initialPlayer.mapId]
      ? initialPlayer.mapId
      : (typeof initialPlayer.mapId === 'number' && MAPS_CONFIG[initialPlayer.mapId] && initialPlayer.saveVersion === 3
        ? (initialPlayer.mapId <= 4 ? initialPlayer.mapId : planetDef.homeMapId)
        : planetDef.homeMapId);
    const mapDef = MAPS_CONFIG[startMapId];

    let startX = Number(initialPlayer.x) || mapDef.defaultSpawn.x;
    let startY = Number(initialPlayer.y);
    if (!startY || startY > 380 || startY < 80) {
      startX = mapDef.defaultSpawn.x;
      startY = mapDef.defaultSpawn.y;
    }

    // Chuẩn hóa kỹ năng khởi đầu chuẩn 100% Ngọc Rồng Online:
    // Tân thủ mới vào game (chưa bái sư Minh Sư ở NV 3) CHỈ mở khóa duy nhất Chiêu 1 (Đấm cơ bản Cấp 1) ở Ô số 1, các ô 2..5 để trống (-1)!
    const questIdInit = Number(initialPlayer.questId) || 1;
    let initSkillLevels = initialPlayer.skillLevels && typeof initialPlayer.skillLevels === 'object'
      ? { ...initialPlayer.skillLevels }
      : createStarterSkillLevels(planetIdx);
    let initSkillLoadout = Array.isArray(initialPlayer.skillLoadout) && initialPlayer.skillLoadout.length === 5
      ? [...initialPlayer.skillLoadout]
      : [0, -1, -1, -1, -1];

    if (isLegacySave && questIdInit < 3) {
      initSkillLevels = createStarterSkillLevels(planetIdx);
      initSkillLoadout = [0, -1, -1, -1, -1];
    }

    this.player = {
      saveVersion: 4,
      name: initialPlayer.name || planetDef.defaultPlayerName,
      returnMapFromFuture: initialPlayer.returnMapFromFuture ?? null,
      planet: planetIdx,
      characterIndex: Number(initialPlayer.characterIndex) || 0,
      x: startX,
      y: startY,
      vx: 0,
      vy: 0,
      dir: 1,
      onGround: true,
      isFlying: false,
      isCharging: false,
      attackAnimTimer: 0,
      attackFrame: 0,

      baseMaxHp: isLegacySave && questIdInit < 2 ? planetDef.baseStats.maxHp : (Number(initialPlayer.baseMaxHp || initialPlayer.maxHp) || planetDef.baseStats.maxHp),
      baseMaxKi: isLegacySave && questIdInit < 2 ? planetDef.baseStats.maxKi : (Number(initialPlayer.baseMaxKi || initialPlayer.maxKi) || planetDef.baseStats.maxKi),
      baseAttack: isLegacySave && questIdInit < 2 ? planetDef.baseStats.attack : (Number(initialPlayer.baseAttack || initialPlayer.attack) || planetDef.baseStats.attack),
      baseDefense: isLegacySave && questIdInit < 2 ? planetDef.baseStats.defense : (Number(initialPlayer.baseDefense || initialPlayer.defense) || planetDef.baseStats.defense),
      baseCrit: isLegacySave && questIdInit < 2 ? planetDef.baseStats.crit : (Number(initialPlayer.baseCrit || initialPlayer.crit) || planetDef.baseStats.crit),

      maxHp: Number(initialPlayer.maxHp) || planetDef.baseStats.maxHp,
      hp: Number(initialPlayer.hp) || planetDef.baseStats.hp,
      maxKi: Number(initialPlayer.maxKi) || planetDef.baseStats.maxKi,
      ki: Number(initialPlayer.ki) || planetDef.baseStats.ki,
      attack: Number(initialPlayer.attack) || planetDef.baseStats.attack,
      defense: Number(initialPlayer.defense) || planetDef.baseStats.defense,
      crit: Number(initialPlayer.crit) || planetDef.baseStats.crit,

      power: Number(initialPlayer.power) || 1200,
      potential: Number(initialPlayer.potential) || 1200,
      gold: Number(initialPlayer.gold) ?? 2000,
      gem: Number(initialPlayer.gem) ?? 20,
      senzuCount: Number(initialPlayer.senzuCount) ?? 5,
      senzuLevel: Number(initialPlayer.senzuLevel) || 1,

      questId: questIdInit,
      questStep: Number(initialPlayer.questStep) || 0,
      questProgress: Number(initialPlayer.questProgress) || 0,
      mapId: startMapId,

      equipped: (initialPlayer.equipped && initialPlayer.equipped.ao) ? initialPlayer.equipped : createStarterEquipment(planetIdx),
      bag: Array.isArray(initialPlayer.bag) ? initialPlayer.bag : [],
      chest: Array.isArray(initialPlayer.chest) ? initialPlayer.chest : [],
      redeemedCodes: Array.isArray(initialPlayer.redeemedCodes) ? initialPlayer.redeemedCodes : [],
      claimedStarterGift: Boolean(initialPlayer.claimedStarterGift),

      skillLoadout: initSkillLoadout,
      skillLevels: initSkillLevels,
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

    // Camera chuẩn QuanLyCamera.java (hỗ trợ kéo camera quan sát bản đồ!)
    this.camX = 510;
    this.camY = 305;
    this.camDragPointerId = null;
    this.camDragging = false;
    this.camDragStartGx = 0;
    this.camDragStartGy = 0;
    this.camDragStartCamX = 510;
    this.camDragStartCamY = 305;

    // Theo dõi ngón tay / chuột đang giữ Joystick điều hướng ảo (chuẩn ThaoTac.java dòng 31)
    this.joystickPointerId = null;
    this.joystickUpHoldTime = 0;

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

    // Màn hình chuyển cảnh chuẩn ManHinhSplash.java & Tàu Vũ Trụ Capsule
    this.mapTransitionTimer = 0;
    this.mapTransitionLabel = '';
    this.spaceshipAnim = initialPlayer.isNewCharacter
      ? { phase: 'landing', x: startX, y: startY + 340, targetY: startY, timer: 0 }
      : null;

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
      if (def.action === 'open_capsule') {
        sound.playHeal();
        this.hud.popupOpen = true;
        this.hud.popupTab = 4;
        this.hud.pushBanner('Viên Capsule Đặc Biệt sẵn sàng! Chọn bản đồ bất kỳ để bay ngay!', '#67e8f9');
        return;
      }
      if (def.action === 'portal_prison') {
        sound.playSuperSaiyan();
        this.skillEffects.push({ type: 'SolarFlash', x: p.x, y: p.y + 34, timer: 0, duration: 0.45 });
        this.hud.popupOpen = false;
        this.hud.bagSelectedIndex = -1;
        this.hud.pushBanner('Nhẫn Thời Không xé toạc không gian dẫn tới Hành Tinh Ngục Tù!', '#c084fc');
        this.changeMap(32, 240, 175);
        return;
      }
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
      this.hud.pushBanner('Hãy đem Đá Pha Lê tới gặp Bà Hạt Mít tại Đảo Kame để Ép Sao!', '#fde047');
      return;
    }

    if (def.slot === 'material') {
      this.hud.pushBanner('Hãy gặp Thượng Đế (Thần Điện) hoặc Vòng Quay (Làng Aru) để dùng Vé Quay!', '#fde047');
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
    if (this.hud.senzuFillH < 52.5) {
      this.hud.pushBanner('Đậu Thần đang hồi chiêu, vui lòng chờ giây lát!', '#fde047');
      return;
    }
    p.senzuCount--;
    this.hud.senzuFillH = 0;
    const healHp = Math.round(p.maxHp * 0.65);
    const healKi = Math.round(p.maxKi * 0.65);
    p.hp = Math.min(p.maxHp, p.hp + healHp);
    p.ki = Math.min(p.maxKi, p.ki + healKi);
    sound.playHeal();
    this.spawnFloatingText(p.x, p.y + 72, `+${formatNroNum(healHp)} HP  +${formatNroNum(healKi)} KI`, '#4ade80');
  }

  // ==================== MỞ KHÓA BÍ KÍP VÕ CÔNG & CỐT TRUYỆN CHUẨN NRO ====================
  unlockSkill(skillIdx, preferredSlot = -1) {
    const p = this.player;
    const planetKey = PLANET_DEFS[p.planet]?.key || 'traidat';
    const skills = PLANET_SKILLS[planetKey] || PLANET_SKILLS.traidat;
    const sk = skills[skillIdx];
    if (!sk) return null;

    if (!p.skillLevels) p.skillLevels = {};
    if ((p.skillLevels[sk.id] || 0) < 1) {
      p.skillLevels[sk.id] = 1;
    }

    if (!Array.isArray(p.skillLoadout) || p.skillLoadout.length !== 5) {
      p.skillLoadout = [0, -1, -1, -1, -1];
    }
    if (!p.skillLoadout.includes(skillIdx)) {
      if (preferredSlot >= 0 && preferredSlot < 5 && p.skillLoadout[preferredSlot] < 0) {
        p.skillLoadout[preferredSlot] = skillIdx;
      } else {
        const emptyIdx = p.skillLoadout.findIndex((v) => v === null || v === undefined || v < 0);
        if (emptyIdx >= 0) p.skillLoadout[emptyIdx] = skillIdx;
      }
    }
    return sk;
  }

  spawnKorinChallengeBoss() {
    if (this.currentMapId !== 11) return;
    const existing = this.monsters.find((m) => m.templateId === 'boss_than_meo' && !m.dead);
    if (existing) {
      this.selectedTarget = existing;
      return;
    }
    const tpl = MONSTER_TEMPLATES.boss_than_meo;
    const boss = {
      uid: `mob_11_korin_${Date.now()}`,
      targetKind: 'monster',
      templateId: 'boss_than_meo',
      name: tpl.name,
      renderType: tpl.renderType,
      frames: tpl.frames,
      nativeLeft: Boolean(tpl.nativeLeft),
      frameCount: 1,
      drawW: 64,
      drawH: 64,
      flyOffset: 0,
      scale: tpl.scale || 0.54,
      isBoss: true,
      noAutoRespawn: true,
      x: 800,
      y: 220,
      spawnX: 800,
      minX: 460,
      maxX: 930,
      dir: -1,
      speed: tpl.speed,
      maxHp: tpl.hp,
      hp: tpl.hp,
      attack: tpl.attack,
      exp: tpl.exp,
      gold: tpl.gold,
      dead: false,
      respawnTimer: 9999,
      respawnSec: 9999,
      stunTimer: 0,
      hurtTimer: 0,
      atkCooldown: 1.2
    };
    this.monsters.push(boss);
    this.selectedTarget = boss;
    sound.playSuperSaiyan();
    this.hud.pushBanner('Thần Mèo Karin bước ra tỷ thí! Hãy đánh bại Thần Mèo!', '#fde047');
  }

  advanceQuestEvent(eventType, targetId, amount = 1) {
    const p = this.player;
    const quest = STORY_QUESTS.find((q) => q.id === p.questId);
    if (!quest) return false;
    const stepIdx = p.questStep || 0;
    const curStep = quest.steps[stepIdx];
    if (!curStep) return false;

    const isElderMatch = curStep.type === 'talk_elder' && eventType === 'talk' && ['ong_gohan', 'ong_paragus', 'ong_moori'].includes(targetId);
    const isMasterMatch = curStep.type === 'talk_master' && eventType === 'talk' && ['quy_lao_kame', 'vua_vegeta', 'truong_lao_guru'].includes(targetId);
    const isExactMatch = curStep.type === eventType && curStep.targetId === targetId;

    if (!isElderMatch && !isMasterMatch && !isExactMatch) return false;

    // Nếu bước nhiệm vụ này truyền thụ tuyệt kỹ Chưởng Khí số 2 (Quy Lão Kame / Vua Vegeta / Trưởng Lão Guru dạy Kamejoko / Antomic / Masenko!)
    if (curStep.unlockSkill2) {
      const learned = this.unlockSkill(1, 1);
      this.addItemToBag('ao_cam');
      const masterTitle = PLANET_DEFS[p.planet]?.masterName || 'Minh Sư';
      if (learned) {
        sound.playSuperSaiyan();
        this.hud.pushBanner(`${masterTitle} truyền thụ tuyệt kỹ [${learned.name} Cấp 1] vào Ô số 2 & tặng Áo Võ Phục!`, '#fde047');
      }
    }

    p.questProgress = Math.min(curStep.count, (p.questProgress || 0) + amount);
    if (p.questProgress >= curStep.count) {
      if (stepIdx < quest.steps.length - 1) {
        p.questStep = stepIdx + 1;
        p.questProgress = 0;
        const nextStep = quest.steps[p.questStep];
        sound.playCoin();
        this.hud.pushBanner(`Hoàn thành! Tiếp theo: ${nextStep.text}`, '#86efac');
      } else {
        this.completeCurrentQuest();
      }
    }
    return true;
  }

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
    this.hud.pushBanner(
      `Hoàn thành [${quest.title}]! +${formatNroNum(quest.reward.power)} SM & TN!`,
      '#fde047'
    );

    p.questId = quest.id + 1;
    p.questStep = 0;
    p.questProgress = 0;
    this.recalcStats();
  }

  onMonsterKilled(m) {
    this.advanceQuestEvent('kill', m.templateId, 1);

    const rawGround = this.getGroundTopAt(m.x);
    const groundY = rawGround > -100 ? rawGround : m.y;

    this.groundDrops.push({
      kind: 'gold',
      amount: m.gold + Math.floor(Math.random() * 50),
      icon: 'hud/giaodientrong/vang.png',
      x: m.x - 10,
      y: groundY,
      ttl: 25
    });

    if (m.templateId === 'moc_nhan') return;

    const tpl = MONSTER_TEMPLATES[m.templateId];
    if (tpl?.guaranteedDrop && ITEM_CATALOG[tpl.guaranteedDrop]) {
      const gd = ITEM_CATALOG[tpl.guaranteedDrop];
      this.groundDrops.push({
        kind: 'item',
        itemId: gd.id,
        icon: gd.icon,
        label: gd.name,
        x: m.x,
        y: groundY,
        ttl: 45
      });
    }

    // Khủng Long rơi Đùi Gà chuẩn nhiệm vụ "Thu thập 10 Đùi Gà" của Ngọc Rồng Online!
    if (MONSTER_TEMPLATES[m.templateId]?.dropsMeat) {
      const meatCount = pQuestNeedsMeat(this.player) ? 2 : 1;
      for (let k = 0; k < meatCount; k++) {
        this.groundDrops.push({
          kind: 'meat_drop',
          icon: 'map/traidat/chung/trangtri/duiga.png',
          label: 'Đùi Gà',
          x: m.x + 12 + k * 18,
          y: groundY,
          ttl: 35
        });
      }
    }

    const roll = Math.random();
    if (m.isBoss || roll < 0.12) {
      const dbStars = m.isBoss ? [1, 2, 3, 5] : [5, 6];
      const star = dbStars[Math.floor(Math.random() * dbStars.length)];
      this.groundDrops.push({
        kind: 'item',
        itemId: `nr_${star}s`,
        icon: `vatpham/vatphamgame/ngocrong/nr${star}s.png`,
        label: `Ngọc Rồng ${star} Sao`,
        x: m.x + 18,
        y: groundY,
        ttl: 35
      });
    } else if (roll < 0.26) {
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

  // Bay xuyên hành tinh bằng Tàu Vũ Trụ Capsule chuẩn Ngọc Rồng Online!
  flyBySpaceship(targetMapId, spawnX, spawnY) {
    const p = this.player;
    p.vx = 0;
    p.vy = 0;
    p.moveTargetX = null;
    p.moveTargetY = null;
    sound.playAirship();
    this.spaceshipAnim = {
      phase: 'takeoff',
      x: p.x,
      y: p.y,
      timer: 0,
      targetMapId,
      spawnX,
      spawnY
    };
  }

  changeMap(targetMapId, spawnX, spawnY, withPodLanding = false) {
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
    this.pendingInteractNpc = null;
    this.pendingWaypoint = null;

    if (this.player.detu) {
      this.player.detu.x = this.player.x - 45;
      this.player.detu.y = this.player.y;
    }
    this.petFollower.x = this.player.x - 36;
    this.petFollower.y = this.player.y;

    // Màn hình đen ManHinhSplash ("Xin chờ..." + Ngọc Rồng 5 Sao xoay) chuẩn 100% game gốc!
    this.mapTransitionTimer = 0.68;
    this.mapTransitionLabel = mapCfg.name;

    if (withPodLanding) {
      this.spaceshipAnim = {
        phase: 'landing',
        x: this.player.x,
        y: this.player.y + 340,
        targetY: this.player.y,
        timer: -0.62
      };
    } else {
      this.spaceshipAnim = null;
    }

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
        idleTex: tpl.idleTex || null,
        hitTex: tpl.hitTex || null,
        frames: tpl.frames || null,
        sheet: tpl.sheet || null,
        nativeLeft: Boolean(tpl.nativeLeft),
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
    let found = false;
    let bestTop = -500;
    for (let i = 0; i < mapCfg.hitboxes.length; i++) {
      const hb = mapCfg.hitboxes[i];
      if (wx >= hb.x && wx <= hb.x + hb.w) {
        bestTop = Math.max(bestTop, hb.y + hb.h);
        found = true;
      }
    }
    return found ? bestTop : -500;
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

    // Nếu đang đứng ngay trước cửa ra/vào nhà mà chưa khoá mục tiêu quái thì cho qua cửa luôn!
    const mapCfg = MAPS_CONFIG[this.currentMapId];
    const doorWp = mapCfg?.waypoints.find(
      (w) => w.kind === 'door' && w.doorRangeX && this.player.x >= w.doorRangeX[0] && this.player.x <= w.doorRangeX[1]
    );
    if (doorWp && (!this.selectedTarget || (this.selectedTarget.targetKind === 'monster' && this.selectedTarget.dead))) {
      this.changeMap(doorWp.targetMapId, doorWp.targetX, doorWp.targetY);
      return;
    }

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
    const skIdx = p.skillLoadout?.[slotIdx];
    if (skIdx === undefined || skIdx === null || skIdx < 0) {
      this.hud.pushBanner('Ô kỹ năng đang trống! Hãy bái sư Quy Lão Kame hoặc mở Tab Kỹ Năng để học chiêu!', '#fde047');
      return;
    }
    const skill = skills[skIdx];
    if (!skill) return;

    const skillLv = p.skillLevels?.[skill.id] || 0;
    if (skillLv < 1) {
      this.hud.pushBanner(`Bạn chưa mở khóa [${skill.name}]! Hãy học trong Tab Kỹ Năng!`, '#fca5a5');
      return;
    }

    if ((p.cooldowns[skill.id] || 0) > 0.02) return;

    if (p.ki < skill.kiCost) {
      this.hud.pushBanner('Không đủ KI! Hãy ăn Đậu Thần hoặc dùng Tái Tạo Năng Lượng!', '#fca5a5');
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
      sound.playBeam(p.planet);
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
      sound.playSolarFlare();
      this.skillEffects.push({ type: 'SolarFlash', x: p.x, y: p.y + 42, timer: 0, duration: 0.6 });
      this.monsters.forEach((m) => {
        if (!m.dead && Math.hypot(m.x - p.x, m.y - p.y) <= skill.range) {
          m.stunTimer = 4.0;
          this.applyDamageToMonster(m, p.attack * skill.mult * lvMult);
          this.spawnFloatingText(m.x, m.y + 68, 'CHOÁNG!', '#fde047');
        }
      });
    } else if (skill.type === 'spirit') {
      sound.playBeam(p.planet);
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
    } else if (skill.type === 'sleep') {
      // Thôi miên (DataNRO #22): Ru ngủ kẻ thù 5s..11s, đòn tiếp theo gây x2.2 sát thương!
      const m = targetMob || this.monsters.find((it) => !it.dead && Math.hypot(it.x - p.x, it.y - p.y) < 380);
      sound.playSolarFlare();
      if (m) {
        m.sleepTimer = 4.5 + skillLv;
        this.spawnFloatingText(m.x, m.y + 72, `💤 THÔI MIÊN (${Math.round(m.sleepTimer)}s)!`, '#c084fc');
        this.skillEffects.push({ type: 'SolarFlash', x: m.x, y: m.y + 30, timer: 0, duration: 0.45 });
      }
    } else if (skill.type === 'socola') {
      // Biến Sôcôla (DataNRO #18): Biến quái/BOSS thành viên Sôcôla bất lực & nhận +65% sát thương!
      const m = targetMob || this.monsters.find((it) => !it.dead && Math.hypot(it.x - p.x, it.y - p.y) < 420);
      sound.playBeam(p.planet);
      if (m) {
        m.socolaTimer = 5.5 + skillLv;
        this.applyDamageToMonster(m, p.attack * skill.mult * lvMult);
        this.spawnFloatingText(m.x, m.y + 74, '🍫 HÓA SÔCÔLA!', '#f59e0b');
        this.skillEffects.push({ type: 'SolarFlash', x: m.x, y: m.y + 30, timer: 0, duration: 0.45 });
      }
    } else if (skill.type === 'bind') {
      // Trói (DataNRO #23): Khóa chặt mục tiêu bằng vòng năng lượng!
      const m = targetMob || this.monsters.find((it) => !it.dead && Math.hypot(it.x - p.x, it.y - p.y) < 400);
      sound.playSolarFlare();
      if (m) {
        m.bindTimer = 4.5 + skillLv;
        this.applyDamageToMonster(m, p.attack * skill.mult * lvMult);
        this.spawnFloatingText(m.x, m.y + 72, `⛓️ TRÓI CHẶT (${Math.round(m.bindTimer)}s)!`, '#fde047');
      }
    } else if (skill.type === 'barrage') {
      // Liên hoàn / Cađíc liên hoàn chưởng (DataNRO #17 & #25): Bắn loạt cầu năng lượng dồn dập!
      p.attackAnimTimer = 0.55;
      sound.playBeam(p.planet);
      const tx = targetMob ? targetMob.x : p.x + p.dir * 380;
      const ty = targetMob ? targetMob.y + 26 : p.y + 28;
      for (let b = 0; b < 5; b++) {
        const spreadY = (b - 2) * 18;
        const ang = Math.atan2((ty + spreadY) - (p.y + 34), tx - (p.x + p.dir * 20));
        this.projectiles.push({
          kind: 'beam',
          startX: p.x + p.dir * 20,
          startY: p.y + 34 + spreadY * 0.4,
          x: p.x + p.dir * 20 - b * p.dir * 26,
          y: p.y + 34 + spreadY * 0.4,
          vx: Math.cos(ang) * 920,
          vy: Math.sin(ang) * 920,
          color: skill.color || '#facc15',
          core: skill.core || '#ffffff',
          dmg: (p.attack * skill.mult * lvMult) / 3.2,
          ttl: 0.72,
          hitSet: new Set()
        });
      }
    } else if (skill.type === 'super_beam') {
      // Super Kamejoko (DataNRO Skill 9 #24): Đại chưởng lực cực đại xuyên màn hình!
      p.attackAnimTimer = 0.62;
      sound.playSuperSaiyan();
      sound.playBeam(0);
      const tx = targetMob ? targetMob.x : p.x + p.dir * 560;
      const ty = targetMob ? targetMob.y + 28 : p.y + 32;
      const angle = Math.atan2(ty - (p.y + 32), tx - (p.x + p.dir * 24));
      this.skillEffects.push({ type: 'SolarFlash', x: p.x + p.dir * 28, y: p.y + 34, timer: 0, duration: 0.4 });
      for (const offY of [-12, 0, 12]) {
        this.projectiles.push({
          kind: 'beam',
          startX: p.x + p.dir * 24,
          startY: p.y + 32 + offY,
          x: p.x + p.dir * 24,
          y: p.y + 32 + offY,
          vx: Math.cos(angle) * 980,
          vy: Math.sin(angle) * 980,
          color: skill.color || '#2563eb',
          core: '#ffffff',
          dmg: (p.attack * skill.mult * lvMult) / 2.2,
          ttl: 0.78,
          hitSet: new Set()
        });
      }
    } else if (skill.type === 'mafuba') {
      // Ma phong ba (DataNRO Skill 9 #26): Lốc xoáy phong ấn rút máu chuẩn cực mạnh!
      sound.playSuperSaiyan();
      const m = targetMob || this.monsters.find((it) => !it.dead && Math.hypot(it.x - p.x, it.y - p.y) < 480);
      if (m) {
        m.bindTimer = 4.5;
        const trueBonus = Math.round(p.maxHp * (0.25 + skillLv * 0.08));
        this.applyDamageToMonster(m, p.attack * skill.mult * lvMult + trueBonus, true);
        this.skillEffects.push({ type: 'Explosion', x: m.x, y: m.y + 34, timer: 0, duration: 0.55, big: true });
        this.spawnFloatingText(m.x, m.y + 78, '🏺 MA PHONG BA!', '#34d399');
      }
    }
  }

  applyDamageToMonster(m, rawDmg, forceCrit = false) {
    if (!m || m.dead) return;
    const p = this.player;
    const wokeFromSleep = (m.sleepTimer || 0) > 0;
    if (wokeFromSleep) {
      m.sleepTimer = 0;
    }
    const debuffMult = (wokeFromSleep ? 2.2 : 1) * ((m.socolaTimer || 0) > 0 ? 1.65 : 1);
    const isCrit = forceCrit || wokeFromSleep || Math.random() * 100 < p.crit;
    const finalDmg = Math.max(1, Math.round(rawDmg * debuffMult * (isCrit ? 1.85 : 1) * (0.94 + Math.random() * 0.12)));

    m.hp = Math.max(0, m.hp - finalDmg);
    m.hurtTimer = 0.18;

    // Cộng Sức mạnh & Tiềm năng nhân với Hệ Số Máy Chủ DataNRO (expRate) & Bonus Bản Đồ (Phòng Tập Thời Gian x2)!
    const curMapCfg = MAPS_CONFIG[this.currentMapId];
    const expMult = (this.serverCfg?.expRate || 1) * (curMapCfg?.expBonus || 1);
    const gainSm = Math.max(8, Math.round(finalDmg * 0.45 * expMult));
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
      const curTpl = MONSTER_TEMPLATES[m.templateId];
      sound.playExplosion();
      this.skillEffects.push({ type: 'Explosion', x: m.x, y: m.y + 24, timer: 0, duration: 0.4 });
      this.onMonsterKilled(m);

      // CƠ CHẾ BIẾN HÌNH LIÊN TIẾP TRÊN CHIẾN TRƯỜNG (Fide Cấp 1 -> 2 -> 3, Xên Hoàn Thiện -> Siêu Bọ Hùng, Black -> Rosé!)
      if (curTpl?.nextForm && MONSTER_TEMPLATES[curTpl.nextForm]) {
        const nextTpl = MONSTER_TEMPLATES[curTpl.nextForm];
        m.templateId = nextTpl.id;
        m.name = nextTpl.name;
        m.renderType = nextTpl.renderType;
        m.frames = nextTpl.frames || null;
        m.sheet = nextTpl.sheet || null;
        m.caitrangKey = nextTpl.caitrangKey || null;
        m.auraColor = nextTpl.auraColor || null;
        m.nativeLeft = Boolean(nextTpl.nativeLeft);
        m.scale = nextTpl.scale || 0.62;
        m.maxHp = nextTpl.hp;
        m.hp = nextTpl.hp;
        m.attack = nextTpl.attack;
        m.exp = nextTpl.exp;
        m.gold = nextTpl.gold;
        m.speed = nextTpl.speed || 76;
        m.respawnSec = nextTpl.respawnSec || 18;
        m.resetForm = nextTpl.resetForm || null;
        m.dead = false;
        m.stunTimer = 0.65;
        sound.playSuperSaiyan();
        this.skillEffects.push({ type: 'SolarFlash', x: m.x, y: m.y + 38, timer: 0, duration: 0.55 });
        this.hud.pushBanner(`⚠️ BOSS BIẾN HÌNH: [${nextTpl.name}] trỗi dậy!`, '#fde047');
        return;
      }

      m.resetForm = curTpl?.resetForm || null;
      m.dead = true;
      m.respawnTimer = m.respawnSec;
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
      return; // Đang hiện màn hình đen "Xin chờ..." chuẩn ManHinhSplash thì tạm dừng vật lý!
    }

    // Hoạt cảnh Tàu Vũ Trụ Capsule cất cánh / hạ cánh chuẩn Ngọc Rồng Online!
    if (this.spaceshipAnim) {
      const sa = this.spaceshipAnim;
      sa.timer += dt;
      if (sa.phase === 'takeoff') {
        sa.y += 680 * dt;
        if (sa.timer >= 0.52) {
          const destMap = sa.targetMapId;
          const dx = sa.spawnX;
          const dy = sa.spawnY;
          this.spaceshipAnim = null;
          this.changeMap(destMap, dx, dy, true);
        }
        return;
      }
      if (sa.phase === 'landing') {
        if (sa.y > sa.targetY) {
          sa.y = Math.max(sa.targetY, sa.y - 620 * dt);
          if (sa.y === sa.targetY) sound.playExplosion();
          return;
        }
        if (sa.timer >= 0.48) {
          this.spaceshipAnim = null;
        }
        return;
      }
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

    // Điều khiển di chuyển: Bàn phím + Joystick kéo thả 360 độ + Click chuột xuống đất
    const moveSpeed = p.isFlying ? 295 : 245;
    let inputX = 0;
    let inputY = 0;

    if (!this.hud.chatOpen && !this.hud.shenronActive) {
      if (this.keys['ArrowLeft'] || this.keys['KeyA']) inputX -= 1;
      if (this.keys['ArrowRight'] || this.keys['KeyD']) inputX += 1;
      if (this.keys['ArrowUp'] || this.keys['KeyW']) inputY += 1;
      if (this.keys['ArrowDown'] || this.keys['KeyS']) inputY -= 1;

      // Đọc vị trí kéo nút điều hướng Joystick chuẩn ThaoTac.java dòng 511-543
      if (this.hud.joystickActive) {
        const jdx = this.hud.joystickDx;
        const jdy = this.hud.joystickDy;
        if (Math.abs(jdx) > JOYSTICK_NGUONG) {
          inputX = Math.max(-1, Math.min(1, jdx / (JOYSTICK_R_NGOAI * 0.78)));
        }
        if (Math.abs(jdy) > JOYSTICK_NGUONG) {
          inputY = Math.max(-1, Math.min(1, jdy / (JOYSTICK_R_NGOAI * 0.78)));
        }
      }
    }

    if (inputX !== 0 || inputY !== 0) {
      p.moveTargetX = null;
      p.moveTargetY = null;
      this.pendingInteractNpc = null;
      this.pendingWaypoint = null;
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
        if (this.pendingWaypoint) {
          const wp = this.pendingWaypoint;
          this.pendingWaypoint = null;
          this.changeMap(wp.targetMapId, wp.targetX, wp.targetY);
          return;
        }
      }
    } else {
      p.vx = 0;
    }

    // ==================== VẬT LÝ TRỌNG LỰC & VA CHẠM VÁCH ĐẤT CHUẨN 100% NhanVat.java + HitboxDat.java ====================
    const hasMount = Boolean(p.equipped?.vanbay);
    const hasFlyKi = hasMount || p.ki > 1.5;
    const holdingHoriz = Math.abs(inputX) > 0.18;
    const holdingUp = inputY > 0.24;

    if (typeof this.flyIdleTimer !== 'number') this.flyIdleTimer = 0;

    if (p.onGround) {
      this.flyIdleTimer = 0;
      if (holdingUp && holdingHoriz && hasFlyKi) {
        // Đứng đất giữ Trái/Phải + Lên -> cất cánh bay chéo chuẩn NhanVat.java dòng 737!
        p.vy = 260;
        p.onGround = false;
        p.isFlying = true;
        sound.playFly();
      } else if (holdingUp) {
        // Đứng đất chỉ bấm Lên -> Nhảy cao rồi rơi xuống có trọng lực chuẩn NhanVat.java dòng 746!
        p.vy = 540;
        p.onGround = false;
        p.isFlying = false;
        sound.playJump();
      }
    } else {
      // Đang ở trên không trung (!p.onGround)
      if (holdingUp && hasFlyKi && (p.vy < 180 || this.joystickUpHoldTime > 0.14 || p.isFlying)) {
        this.joystickUpHoldTime += dt;
        p.isFlying = true;
        p.vy = inputY * 270;
        this.flyIdleTimer = 0;
        sound.playFly();
      } else if (p.moveTargetY !== null && hasFlyKi) {
        // Đang tự bay tới điểm click trên cao
        p.isFlying = true;
        this.flyIdleTimer = 0;
        const dyTarget = p.moveTargetY - p.y;
        if (Math.abs(dyTarget) > 14) {
          p.vy = Math.sign(dyTarget) * 235;
        } else {
          p.vy = 0;
          if (p.moveTargetX === null) {
            p.moveTargetY = null;
          }
        }
      } else if (holdingHoriz && p.vy <= 0 && hasFlyKi) {
        // Đang rơi trên không mà giữ Trái/Phải -> lướt bay ngang chuẩn NhanVat.java dòng 752!
        p.isFlying = true;
        this.flyIdleTimer = 0;
        p.vy = inputY < -0.18 ? inputY * 270 : 0;
      } else if (p.isFlying) {
        if (inputY < -0.2) {
          // Kéo xuống -> hạ độ cao nhanh, buông bay để đáp đất
          p.vy = inputY * 320;
          this.flyIdleTimer += dt * 1.5;
          if (this.flyIdleTimer > 0.18) p.isFlying = false;
        } else {
          // KHÔNG giữ phím di chuyển/bay nữa -> đếm 0.2s (12 frame giống delayRoi=15 trong NhanVat.java dòng 774) rồi NGẮT BAY để TRỌNG LỰC kéo rơi xuống đất!
          p.vy = 0;
          if (!holdingHoriz && p.moveTargetX === null) {
            this.flyIdleTimer += dt;
            if (this.flyIdleTimer >= 0.2 || !hasFlyKi) {
              p.isFlying = false;
            }
          }
        }
      }

      if (!holdingUp) {
        this.joystickUpHoldTime = 0;
      }
    }

    // Tiêu hao KI khi bay (nếu không cưỡi Cân Đẩu Vân / Phượng Hoàng chuẩn NhanVat.java dòng 1060)
    if (p.isFlying && !hasMount) {
      p.ki = Math.max(0, p.ki - 11 * dt);
      if (p.ki <= 0) {
        p.isFlying = false;
      }
    }

    // TRỌNG LỰC LUÔN TÁC ĐỘNG KHI KHÔNG ĐỨNG ĐẤT VÀ KHÔNG BAY!
    if (!p.onGround && !p.isFlying) {
      p.vy = Math.max(-920, p.vy - 1380 * dt);
    }

    // Sub-step va chạm vách đá ngang & mặt đất bậc thang chuẩn HitboxDat.java!
    const nextX = p.x + p.vx * dt;
    const groundAtNextX = this.getGroundTopAt(nextX, mapCfg);
    if (groundAtNextX > p.y + 20) {
      // Đụng vách đá cao hơn chân (vd bậc vách đá x=1728 ở Đồi Hoa Cúc): chặn đi xuyên đá; nếu đang click-to-move thì tự nhảy vượt bậc!
      if (p.moveTargetX !== null && p.onGround) {
        p.vy = 560;
        p.onGround = false;
        sound.playJump();
      } else {
        p.vx = 0;
      }
    } else {
      p.x = nextX;
    }

    const prevY = p.y;
    p.y += p.vy * dt;

    const curGroundY = this.getGroundTopAt(p.x, mapCfg);
    if (curGroundY > -200 && p.vy <= 0 && prevY >= curGroundY - 32 && p.y <= curGroundY) {
      p.y = curGroundY;
      p.vy = 0;
      p.onGround = true;
      p.isFlying = false;
      p.moveTargetY = null;
      this.flyIdleTimer = 0;
    } else if (p.onGround && (curGroundY < p.y - 4 || curGroundY <= -200)) {
      // Bước hụt khỏi gờ vách đá / mép Đài Tháp Karin -> rơi tự do theo trọng lực!
      p.onGround = false;
    }

    // Tiếng bước chân chạy trên mặt đất chuẩn DragonBoy (sound/1.wav)
    if (p.onGround && Math.abs(p.vx) > 35) {
      sound.playStep();
    }

    // Rơi xuống vực sâu ở Phòng Tập Thời Gian (36) hoặc Thần Điện (12)
    if (mapCfg.key === 'phong_tap_thoi_gian' && p.y < 30 && this.mapTransitionTimer <= 0) {
      this.changeMap(12, 540, 200);
      return;
    }
    if (mapCfg.key === 'than_dien' && p.y < 30 && this.mapTransitionTimer <= 0) {
      this.changeMap(11, 700, 320);
      return;
    }
    // Rơi xuống vực sâu ở Đỉnh Tháp Karin (11) -> rơi thẳng về chân Tháp Karin ở giữa Rừng Karin (10)!
    if (mapCfg.key === 'thap_karin' && p.y < 30 && this.mapTransitionTimer <= 0) {
      this.changeMap(10, 1000, 340);
      return;
    }
    // Khỏi lọt đáy ở các bản đồ mặt đất thường
    if (mapCfg.key !== 'thap_karin' && mapCfg.key !== 'than_dien' && mapCfg.key !== 'phong_tap_thoi_gian' && p.y < 80) {
      const safeTop = Math.max(127, curGroundY);
      p.y = safeTop;
      p.vy = 0;
      p.onGround = true;
      p.isFlying = false;
    }

    // Giới hạn trần bản đồ & Leo cột Tháp Karin ở chính giữa Rừng Karin lên Đỉnh Tháp Karin!
    for (let i = 0; i < mapCfg.waypoints.length; i++) {
      const wp = mapCfg.waypoints[i];
      if (wp.towerClimbX && wp.towerClimbY && p.x >= wp.towerClimbX[0] && p.x <= wp.towerClimbX[1] && p.y >= wp.towerClimbY && this.mapTransitionTimer <= 0) {
        this.changeMap(wp.targetMapId, wp.targetX, wp.targetY);
        return;
      }
    }

    if (p.y > mapCfg.height - 95) {
      p.y = mapCfg.height - 95;
      p.vy = 0;
    }

    // Kiểm tra đi bộ chạm mép trái/phải chuyển Map tự động chuẩn checkQuaMap() trong ManHinhLangAru.java & ManHinhDoiHoaCuc.java!
    let hasLeftEdgeExit = false;
    let hasRightEdgeExit = false;
    for (let i = 0; i < mapCfg.waypoints.length; i++) {
      const wp = mapCfg.waypoints[i];
      if (wp.kind === 'left_edge') hasLeftEdgeExit = true;
      if (wp.kind === 'right_edge') hasRightEdgeExit = true;
      if (wp.edgeTriggerX && p.y < 320 && p.x >= wp.edgeTriggerX[0] && p.x <= wp.edgeTriggerX[1] && this.mapTransitionTimer <= 0) {
        this.changeMap(wp.targetMapId, wp.targetX, wp.targetY);
        return;
      }
    }

    // Mở biên khi có lối qua map ở rìa trái/phải (đúng hệt setLaiToaDoNhanVat() của ManHinhLangAru.java)
    const minBoundX = hasLeftEdgeExit && p.y < 320 ? -80 : 28;
    const maxBoundX = hasRightEdgeExit && p.y < 320 ? mapCfg.width + 80 : mapCfg.width - 28;
    p.x = Math.max(minBoundX, Math.min(maxBoundX, p.x));

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
        // Tìm mục tiêu gần nhất trong O(N) không tạo mảng trung gian filter/sort mỗi frame!
        let bestDist = Infinity;
        for (let mi = 0; mi < this.monsters.length; mi++) {
          const cand = this.monsters[mi];
          if (cand.dead || Math.abs(cand.x - p.x) >= 380) continue;
          const distD = Math.abs(cand.x - d.x);
          if (distD < bestDist) {
            bestDist = distD;
            targetMob = cand;
          }
        }
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
        if (m.noAutoRespawn) continue;
        m.respawnTimer -= dt;
        if (m.respawnTimer <= 0) {
          if (m.resetForm && MONSTER_TEMPLATES[m.resetForm]) {
            const rt = MONSTER_TEMPLATES[m.resetForm];
            m.templateId = rt.id;
            m.name = rt.name;
            m.renderType = rt.renderType;
            m.frames = rt.frames || null;
            m.sheet = rt.sheet || null;
            m.caitrangKey = rt.caitrangKey || null;
            m.auraColor = rt.auraColor || null;
            m.nativeLeft = Boolean(rt.nativeLeft);
            m.scale = rt.scale || 0.56;
            m.maxHp = rt.hp;
            m.attack = rt.attack;
            m.exp = rt.exp;
            m.gold = rt.gold;
            m.speed = rt.speed || 70;
            m.resetForm = null;
          }
          m.dead = false;
          m.hp = m.maxHp;
          m.x = m.spawnX;
          m.stunTimer = 0;
        }
        continue;
      }

      if (m.hurtTimer > 0) m.hurtTimer = Math.max(0, m.hurtTimer - dt);
      if (m.sleepTimer > 0) m.sleepTimer = Math.max(0, m.sleepTimer - dt);
      if (m.socolaTimer > 0) m.socolaTimer = Math.max(0, m.socolaTimer - dt);
      if (m.bindTimer > 0) m.bindTimer = Math.max(0, m.bindTimer - dt);
      if (m.stunTimer > 0 || m.sleepTimer > 0 || m.socolaTimer > 0 || m.bindTimer > 0) {
        m.stunTimer = Math.max(0, m.stunTimer - dt);
        continue;
      }

      const maxChaseR = m.isBoss ? 340 : 210;
      const dxP = p.x - m.x;
      const dyP = p.y - m.y;
      const inChaseBox = Math.abs(dxP) < maxChaseR && Math.abs(dyP) < maxChaseR;
      const distToPlayer = inChaseBox ? Math.hypot(dxP, dyP) : 9999;
      if (m.speed <= 0) {
        // Mộc nhân đứng yên chịu đòn chuẩn game gốc!
      } else if (distToPlayer < maxChaseR && m.hp < m.maxHp) {
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
              // Bị hạ -> Hồi sinh tại Quê Nhà của chủng tộc (Nhà Gôhan / Nhà Paragus / Nhà Moori)
              const pDef = PLANET_DEFS[p.planet] || PLANET_DEFS[0];
              p.hp = Math.round(p.maxHp * 0.5);
              this.hud.pushBanner(`Bạn đã kiệt sức và được ${pDef.elderName} cứu về quê nhà!`, '#fca5a5');
              this.changeMap(pDef.homeMapId, 325, 175);
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
        } else if (d.kind === 'meat_drop') {
          sound.playCoin();
          p.hp = Math.min(p.maxHp, p.hp + Math.round(p.maxHp * 0.15));
          p.ki = Math.min(p.maxKi, p.ki + Math.round(p.maxKi * 0.15));
          this.advanceQuestEvent('pickup_meat', 'duiga_drop', 1);
          this.spawnFloatingText(d.x, d.y + 32, '+1 Đùi Gà', '#86efac');
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
    const halfW = this.vw / 2;
    const halfH = this.vh / 2;
    if (this.camDragging) {
      this.camX = Math.max(halfW, Math.min(mapCfg.width - halfW, this.camX));
      this.camY = Math.max(halfH, Math.min(mapCfg.height - halfH, this.camY));
      return;
    }
    const targetCamX = Math.max(halfW, Math.min(mapCfg.width - halfW, this.player.x));
    const targetCamY = Math.max(halfH, Math.min(mapCfg.height - halfH, this.player.y + 95));
    const lerp = Math.min(1, dt * 8.5);
    this.camX += (targetCamX - this.camX) * lerp;
    this.camY += (targetCamY - this.camY) * lerp;
  }

  // ==================== KẾT XUẤT WORLD & BẢN ĐỒ CHUẨN LIBGDX ====================
  updateDimensions(virtualW, virtualH) {
    if (virtualW) this.virtualW = virtualW;
    if (virtualH) this.virtualH = virtualH;
    if (this.hud) {
      this.hud.virtualW = this.virtualW;
      this.hud.virtualH = this.virtualH;
    }
    this._syncCanvasResolution();
  }

  get vw() {
    return this.virtualW || VIRTUAL_W;
  }

  get vh() {
    return this.virtualH || VIRTUAL_H;
  }

  worldToView(wx, wy) {
    return {
      vx: wx - (this.camX - this.vw / 2),
      vy: wy - (this.camY - this.vh / 2)
    };
  }

  _syncCanvasResolution() {
    if (typeof window === 'undefined' || !this.canvas) return;
    const winW = window.innerWidth || this.vw;
    const winH = window.innerHeight || this.vh;
    const isPortrait = winH > winW;
    const landW = isPortrait ? winH : winW;
    const landH = isPortrait ? winW : winH;
    const fitScale = Math.max(0.1, Math.min(landW / this.vw, landH / this.vh));

    this._winW = winW;
    this._winH = winH;
    this._isPortrait = isPortrait;
    this._fitScale = fitScale;

    // Giới hạn độ phân giải nội bộ tối đa 1.35x chuẩn HD sắc nét, giảm tới ~3.8x gánh nặng tô pixel (fillrate) trên màn Retina/Mobile!
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const renderScale = Math.min(1.35, Math.max(1, fitScale * dpr));
    const targetW = Math.max(1, Math.round(this.vw * renderScale));
    const targetH = Math.max(1, Math.round(this.vh * renderScale));

    if (this.canvas.width !== targetW || this.canvas.height !== targetH) {
      this.canvas.width = targetW;
      this.canvas.height = targetH;
      this._skyGradCache.clear();
    }
    this._targetW = targetW;
    this._targetH = targetH;
  }

  _getSkyGradient(ctx, style) {
    let grad = this._skyGradCache.get(style);
    if (grad) return grad;
    grad = ctx.createLinearGradient(0, 0, 0, this.vh);
    if (style === 'than_dien') {
      grad.addColorStop(0, '#1e1b4b');
      grad.addColorStop(0.55, '#4338ca');
      grad.addColorStop(1, '#bae6fd');
    } else if (style === 'thap_karin') {
      grad.addColorStop(0, '#0284c7');
      grad.addColorStop(0.65, '#7dd3fc');
      grad.addColorStop(1, '#e0f2fe');
    } else if (style === 'bill_planet') {
      grad.addColorStop(0, '#1e1035');
      grad.addColorStop(0.5, '#4c1d95');
      grad.addColorStop(1, '#0f766e');
    }
    this._skyGradCache.set(style, grad);
    return grad;
  }

  drawWorldTex(ctx, relPath, wx, wy, ww, wh, flipX = false) {
    const img = assets.tex(relPath);
    if (!img) return;
    const vx = wx - (this.camX - this.vw / 2);
    const vy = wy - (this.camY - this.vh / 2);
    const absW = ww || img.naturalWidth * 0.5;
    const absH = wh || img.naturalHeight * 0.5;

    // 2D Frustum Culling cả trục X lẫn trục Y
    if (vx + absW < -80 || vx > this.vw + 80 || vy + absH < -80 || vy > this.vh + 80) return;

    const cy = this.vh - vy - absH;
    if (flipX) {
      ctx.save();
      ctx.translate(vx + absW, cy);
      ctx.scale(-1, 1);
      ctx.drawImage(img, 0, 0, absW, absH);
      ctx.restore();
      return;
    }

    // Thuật toán Viewport Sub-Rect Source Clipping: Cắt đúng lát cắt cho ảnh nền khổng lồ, giảm 75-80% băng thông GPU!
    if (absW > this.vw + 64 || absH > this.vh + 64) {
      const x0 = vx < 0 ? 0 : vx;
      const y0 = cy < 0 ? 0 : cy;
      const x1 = vx + absW > this.vw ? this.vw : vx + absW;
      const y1 = cy + absH > this.vh ? this.vh : cy + absH;
      const dw = x1 - x0;
      const dh = y1 - y0;
      if (dw <= 0.5 || dh <= 0.5) return;
      const invW = img.naturalWidth / absW;
      const invH = img.naturalHeight / absH;
      ctx.drawImage(
        img,
        (x0 - vx) * invW,
        (y0 - cy) * invH,
        dw * invW,
        dh * invH,
        x0,
        y0,
        dw,
        dh
      );
      return;
    }

    ctx.drawImage(img, vx, cy, absW, absH);
  }

  render() {
    const ctx = this.ctx;
    if (!ctx) return;

    ctx.setTransform(this._targetW / this.vw, 0, 0, this._targetH / this.vh, 0, 0);
    ctx.imageSmoothingEnabled = true;

    const mapCfg = MAPS_CONFIG[this.currentMapId] || MAPS_CONFIG[0];

    // NẾU ĐANG CHUYỂN MAP -> VẼ MÀN HÌNH ĐEN TUYỆT ĐỐI CHUẨN ManHinhSplash.java (chuberong.png + "Xin chờ..." + nr5s xoay)
    if (this.mapTransitionTimer > 0) {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, this.vw, this.vh);

      this.hud.drawTex(ctx, 'hud/giaodienngoai/chung/chuberong.png', this.vw / 2 - 156, this.vh / 2 + 8, 320, 195);
      this.hud.drawText(ctx, 'Xin chờ...', this.vw / 2, this.vh / 2 - 36, {
        size: 13.5, color: '#ffffff', stroke: null, strokeWidth: 0, align: 'center'
      });

      const dbImg = assets.tex('vatpham/vatphamgame/ngocrong/nr5s.png');
      if (dbImg) {
        ctx.save();
        ctx.translate(this.vw / 2, this.vh - this.vh / 2);
        ctx.rotate(performance.now() * 0.012);
        ctx.drawImage(dbImg, -13, -13, 26, 26);
        ctx.restore();
      }
      return;
    }

    // 1. NỀN TRỜI & PARALLAX NÚI XA CHUẨN HÀNH TINH
    this.renderParallaxBackground(ctx, mapCfg);

    // 2. LỚP BẢN ĐỒ CHÍNH (NỀN ĐẤT & CẢNH VẬT TRƯỚC NHÂN VẬT)
    this.renderMapMainLayer(ctx, mapCfg);

    // 3. VẬT PHẨM RƠI TRÊN ĐẤT & DẤU CLICK DI CHUYỂN
    this.renderGroundDropsAndMarkers(ctx);

    // 4. NPC CHUẨN MODULAR / CÂY ĐẬU THẦN / RƯƠNG ĐỒ / TÀU VŨ TRỤ
    this.renderNpcs(ctx);

    // 5. QUÁI VẬT & BOSS DÙNG 100% SPRITE THẬT
    this.renderMonsters(ctx);

    // 6. PET, ĐỆ TỬ, NHÂN VẬT HOẶC HOẠT CẢNH TÀU VŨ TRỤ HẠ CÁNH
    if (this.player.equipped.pet) {
      this.renderPetFollower(ctx);
    }
    if (this.player.detu && !this.player.isFused && this.player.detu.mode !== 'home') {
      this.renderDeTu(ctx);
    }
    if (this.spaceshipAnim) {
      this.renderSpaceshipCutscene(ctx);
    } else {
      this.renderPlayer(ctx);
    }

    // 7. CHƯỞNG KHÍ, HIỆU ỨNG KỸ NĂNG & CHỮ SÁT THƯƠNG
    this.renderProjectilesAndEffects(ctx);

    // 8. LỚP TIỀN CẢNH BẢN ĐỒ (maparusau.png, doihoacucsau.png, doihoacuctruoc.png, khoimay.png)
    this.renderMapForegroundLayer(ctx, mapCfg);

    // 9. BẢNG TÊN LỐI CHUYỂN MAP CHUẨN ManHinhNhaGohan / ManHinhLangAru (CHỈ HIỆN KHI ĐỨNG GẦN CỬA/MÉP MAP!)
    this.renderWaypointSigns(ctx, mapCfg);

    // 10. GIAO DIỆN HUD TRONG GAME CHUẨN VEHUD.JAVA
    this.hud.render(ctx);
  }

  // ==================== VẼ PARALLAX NỀN TRỜI 3 HÀNH TINH & ĐA VŨ TRỤ ====================
  renderParallaxBackground(ctx, mapCfg) {
    const theme = mapCfg.planetTheme || 'traidat';
    const style = mapCfg.renderStyle || '';
    const camOffX = this.camX - 510;
    const camOffY = this.camY - 305;

    // 1. Tháp Karin & Thần Điện & Hành Tinh Bill (Trục Thần Giới)
    if (style === 'thap_karin' || style === 'than_dien') {
      ctx.fillStyle = this._getSkyGradient(ctx, style);
      ctx.fillRect(0, 0, VIRTUAL_W, VIRTUAL_H);

      const cloudShift1 = (this.animClock * 16) % 287;
      const cloudShift2 = (this.animClock * 26) % 287;
      ctx.save();
      ctx.globalAlpha = 0.85;
      for (let i = -1; i < 6; i++) {
        this.hud.drawTex(ctx, 'hieuung/hieuungmap/khoimay.png', i * 287 - cloudShift1, 75 - camOffY * 0.25, 290, 145);
        this.hud.drawTex(ctx, 'hieuung/hieuungmap/khoimay.png', i * 287 - cloudShift2, -15 - camOffY * 0.35, 290, 165);
      }
      ctx.restore();
      return;
    }

    if (style === 'bill_planet') {
      ctx.fillStyle = this._getSkyGradient(ctx, style);
      ctx.fillRect(0, 0, VIRTUAL_W, VIRTUAL_H);
      this.hud.drawTex(ctx, 'hud/giaodienngoai/xayda/matrang.png', 780 - camOffX * 0.04, 450 - camOffY * 0.05, 76, 76);
      for (let i = -1; i < 5; i++) {
        this.hud.drawTex(ctx, 'hud/giaodienngoai/namek/nuicay_namek.png', i * 340 - (camOffX * 0.3) % 340, 160 - camOffY * 0.35, 342, 185);
      }
      return;
    }

    // Đảo Kame (bầu trời nhiệt đới, mây xa trôi chậm, chân trời biển và sóng vỗ gốc NRO TORI b02*.png)
    if (style === 'dao_kame' || mapCfg.key === 'dao_kame' || mapCfg.key === 'nam_kame' || mapCfg.key === 'ban_do_kho_bau') {
      const skyGrad = ctx.createLinearGradient(0, 0, 0, this.vh);
      skyGrad.addColorStop(0, '#0284c7');
      skyGrad.addColorStop(0.35, '#38bdf8');
      skyGrad.addColorStop(0.72, '#bae6fd');
      skyGrad.addColorStop(1, '#e0f2fe');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, this.vw, this.vh);

      // Mây tầng cao trôi chậm (b02-3.png: 336x146)
      const cloudW = 336;
      const cloudShift = (camOffX * 0.08 + this.animClock * 4) % cloudW;
      for (let i = -1; i < Math.ceil(this.vw / cloudW) + 2; i++) {
        this.hud.drawTex(ctx, 'bg/b02-3.png', i * cloudW - cloudShift, 360 - camOffY * 0.15, cloudW, 146);
      }

      // Đường chân trời biển xa & rạn đảo (b02-1.png & b02-2.png: 528x154)
      const horizW = 528;
      const horizShift = (camOffX * 0.16) % horizW;
      for (let i = -1; i < Math.ceil(this.vw / horizW) + 2; i++) {
        const tex = i % 2 === 0 ? 'bg/b02-1.png' : 'bg/b02-2.png';
        this.hud.drawTex(ctx, tex, i * horizW - horizShift, 205 - camOffY * 0.28, horizW, 154);
      }

      // Mặt nước biển & sóng vỗ lớp trung cảnh (b02.png / b02-4.png: 510x154)
      const waveW = 510;
      const waveShift = (camOffX * 0.32) % waveW;
      for (let i = -1; i < Math.ceil(this.vw / waveW) + 2; i++) {
        const tex = i % 2 === 0 ? 'bg/b02-4.png' : 'bg/b02.png';
        this.hud.drawTex(ctx, tex, i * waveW - waveShift, 145 - camOffY * 0.42, waveW, 154);
      }
      return;
    }

    // 2. Thế Giới Tương Lai (Đổ nát u ám) & Hành Tinh Ngục Tù / Khí Gas
    if (style === 'future_ruins' || style === 'prison_planet') {
      const skyGrad = ctx.createLinearGradient(0, 0, 0, this.vh);
      if (style === 'future_ruins') {
        skyGrad.addColorStop(0, '#1f2937');
        skyGrad.addColorStop(0.55, '#4c1d24');
        skyGrad.addColorStop(1, '#78350f');
      } else {
        skyGrad.addColorStop(0, '#090d16');
        skyGrad.addColorStop(0.6, '#3b0764');
        skyGrad.addColorStop(1, '#450a0a');
      }
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, this.vw, this.vh);
      for (let i = -1; i < 4; i++) {
        this.hud.drawTex(ctx, 'hud/giaodienngoai/xayda/nui_xayda.png', i * 510 - (camOffX * 0.2) % 510, 210 - camOffY * 0.25, 512, 175);
      }
      for (let i = -1; i < 5; i++) {
        this.hud.drawTex(ctx, 'hud/giaodienngoai/xayda/nuithap_xayda.png', i * 340 - (camOffX * 0.42) % 340, 125 - camOffY * 0.45, 342, 185);
      }
      return;
    }

    // 3. Hành Tinh Cold (Băng Tuyết)
    if (style === 'cold_planet') {
      const skyGrad = ctx.createLinearGradient(0, 0, 0, this.vh);
      skyGrad.addColorStop(0, '#0c4a6e');
      skyGrad.addColorStop(0.55, '#38bdf8');
      skyGrad.addColorStop(1, '#e0f2fe');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, this.vw, this.vh);
      for (let i = -1; i < 6; i++) {
        this.hud.drawTex(ctx, 'hud/giaodienngoai/traidat/nuixa_traidat.png', i * 255 - (camOffX * 0.12) % 255, 260 - camOffY * 0.18, 256, 170);
      }
      this.hud.fillRectGdx(ctx, 0, 0, this.vw, Math.max(0, 220 - camOffY * 0.4), '#bae6fd', null);
      return;
    }

    if (theme === 'xayda') {
      ctx.fillStyle = '#c26219';
      ctx.fillRect(0, 0, this.vw, this.vh);
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
      ctx.fillRect(0, 0, this.vw, this.vh);
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

    ctx.fillStyle = '#19b0f8';
    ctx.fillRect(0, 0, this.vw, this.vh);

    for (let i = -1; i < 6; i++) {
      this.hud.drawTex(ctx, 'hud/giaodienngoai/traidat/sky_traidat.png', i * 255 - (camOffX * 0.05) % 255, 325 - camOffY * 0.1, 256, 155);
      this.hud.drawTex(ctx, 'hud/giaodienngoai/traidat/nuixa_traidat.png', i * 255 - (camOffX * 0.1) % 255, 295 - camOffY * 0.15, 256, 150);
    }
    for (let i = -1; i < 4; i++) {
      this.hud.drawTex(ctx, 'hud/giaodienngoai/traidat/nui_traidat.png', i * 510 - (camOffX * 0.18) % 510, 250 - camOffY * 0.22, 512, 170);
    }

    // Đông Karin: Vẽ bóng Tháp Karin + Đài Tháp Karin ở lớp núi xa phía đông
    if (mapCfg.key === 'dong_karin') {
      const karinImg = assets.tex('map/traidat/doi_hoa_cuc/thapkirin.png');
      if (karinImg) {
        const kw = 18;
        const kh = 72;
        const baseScreenX = 340 - camOffX * 0.08;
        const baseY = 235 - camOffY * 0.22;
        for (let s = 0; s < 4; s++) {
          this.hud.drawTex(ctx, 'map/traidat/doi_hoa_cuc/thapkirin.png', baseScreenX - kw / 2, baseY + s * (kh - 3), kw, kh);
        }
        this.hud.drawTex(
          ctx,
          'map/traidat/doi_hoa_cuc/dai_thap_karin.png',
          baseScreenX - 38,
          baseY + 4 * (kh - 3) - 6,
          76,
          82
        );
      }
    }

    this.hud.fillRectGdx(ctx, 0, 0, this.vw, Math.max(0, 260 - camOffY * 0.35), '#167615', null);
    for (let i = -1; i < 5; i++) {
      this.hud.drawTex(ctx, 'hud/giaodienngoai/traidat/nuicay_traidat.png', i * 340 - (camOffX * 0.28) % 340, 195 - camOffY * 0.35, 342, 190);
    }

    this.hud.fillRectGdx(ctx, 0, 0, this.vw, Math.max(0, 200 - camOffY * 0.5), style === 'dao_kame' ? '#0284c7' : '#175e1c', null);
    for (let i = -1; i < 5; i++) {
      this.hud.drawTex(ctx, 'hud/giaodienngoai/traidat/nuithap_traidat.png', i * 340 - (camOffX * 0.42) % 340, 135 - camOffY * 0.5, 342, 190);
    }
  }

  // ==================== VẼ LỚP BẢN ĐỒ CHÍNH (36 BẢN ĐỒ ĐẦY ĐỦ) ====================
  renderMapMainLayer(ctx, mapCfg) {
    const fireFrame = (Math.floor(this.animClock * 10) % 4) + 1;
    const style = mapCfg.renderStyle || '';

    if (style === 'lang_aru') {
      const wv = this.worldToView(780, 120);
      this.hud.fillRectGdx(ctx, wv.vx, 0, 560, Math.max(0, wv.vy), '#0e7490', null);
      this.drawWorldTex(ctx, 'map/traidat/lang_aru/maparu.png', -96, -38, 2544, 1008);
      this.drawWorldTex(ctx, 'map/traidat/chung/trangtri/cuinuongduiga.png', 240, 170, 66, 48);
      this.drawWorldTex(ctx, `hieuung/hieuungmap/lua${fireFrame}.png`, 255, 186, 36, 42);
      return;
    }

    if (style === 'doi_hoa_cuc') {
      const rv = this.worldToView(180, 118);
      this.hud.fillRectGdx(ctx, rv.vx, 0, 1580, Math.max(0, rv.vy), '#0e7490', null);
      this.drawWorldTex(ctx, 'map/traidat/doi_hoa_cuc/doihoacuc.png', 0, -134, 2976, 960);
      return;
    }

    if (style === 'rung_karin') {
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi1_traidat.png', 180, 172, 220, 224);
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi1_traidat.png', 540, 172, 225, 228);
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi1_traidat.png', 1360, 172, 225, 228);
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi1_traidat.png', 1760, 172, 220, 224);

      const colW = 56;
      const colH = 204;
      for (let s = 0; s < 6; s++) {
        this.drawWorldTex(ctx, 'map/traidat/doi_hoa_cuc/thapkirin.png', 1000 - colW / 2, 168 + s * (colH - 6), colW, colH);
      }
      const ped = this.worldToView(936, 173);
      this.hud.fillRectGdx(ctx, ped.vx, ped.vy, 128, 16, '#d6b370', '#78350f', 2);
      this.hud.fillRectGdx(ctx, ped.vx + 14, ped.vy + 16, 100, 10, '#e7cba0', '#78350f', 1.5);

      this._drawEarthGroundTiles(ctx, mapCfg.width, true, 880, 1100);
      return;
    }

    if (style === 'thap_karin') {
      // Cột Tháp Karin bên dưới + Gậy Như Ý đỏ nối từ đỉnh vòm thẳng lên Thần Điện!
      const colW = 58;
      const colH = 204;
      for (let s = 0; s < 3; s++) {
        this.drawWorldTex(ctx, 'map/traidat/doi_hoa_cuc/thapkirin.png', 700 - colW / 2, -210 + s * (colH - 6), colW, colH);
      }
      const pole = this.worldToView(694, 550);
      this.hud.fillRectGdx(ctx, pole.vx, pole.vy, 12, 420, '#dc2626', '#7f1d1d', 2);
      this.drawWorldTex(ctx, 'map/traidat/doi_hoa_cuc/dai_thap_karin.png', 410, 148, 580, 445);
      return;
    }

    if (style === 'than_dien') {
      // THẦN ĐIỆN (Kami's Lookout): Gậy Như Ý đỏ nối từ Tháp Karin lên Đài Thần Điện vẽ tay!
      const pole = this.worldToView(744, -260);
      this.hud.fillRectGdx(ctx, pole.vx, pole.vy, 12, 430, '#dc2626', '#7f1d1d', 2);

      // Chân đài Thần Điện trên mây dùng sprite vòm đá vẽ tay
      this.drawWorldTex(ctx, 'map/traidat/doi_hoa_cuc/dai_thap_karin.png', 360, -110, 780, 320);

      // Mặt sàn lát gạch trắng-vàng Thần Điện (x = 220..1280, y = 150..200)
      const deck = this.worldToView(220, 150);
      this.hud.fillRectGdx(ctx, deck.vx, deck.vy, 1060, 50, '#f8fafc', '#b45309', 2.5);
      this.hud.fillRectGdx(ctx, deck.vx, deck.vy + 42, 1060, 8, '#fde68a', '#92400e', 1.5);

      // Điện thờ Thượng Đế & hàng cây thần giới dùng 100% texture vẽ tay
      this.drawWorldTex(ctx, 'map/traidat/chung/nhacua/nhacua2_earth.png', 625, 198, 250, 226);
      this.drawWorldTex(ctx, 'map/namek/371.png', 270, 198, 110, 175);
      this.drawWorldTex(ctx, 'map/namek/371.png', 1110, 198, 110, 175);
      return;
    }

    if (style === 'dao_kame') {
      // 1. Biển xanh bao quanh đảo Kame về 2 phía mép bản đồ
      const seaV = this.worldToView(-200, 0);
      this.hud.fillRectGdx(ctx, seaV.vx, 0, mapCfg.width + 400, Math.max(0, seaV.vy + 172), '#0284c7', null);

      // 2. Sóng biển vỗ rìa đảo 2 bên trái & phải
      const wavePhase = (this.animClock * 16) % 510;
      this.drawWorldTex(ctx, 'bg/b02-5.png', -160 + wavePhase * 0.1, 158, 480, 48);
      this.drawWorldTex(ctx, 'bg/b02-5.png', 1840 - wavePhase * 0.1, 158, 480, 48);

      // 3. Rạn đá bờ biển tự nhiên từ TORI (bgItem 11, 14, 204)
      this.drawWorldTex(ctx, 'bgItem/11.png', 170, 170, 98, 74);
      this.drawWorldTex(ctx, 'bgItem/204.png', 240, 170, 104, 86);
      this.drawWorldTex(ctx, 'bgItem/14.png', 1800, 172, 112, 28);
      this.drawWorldTex(ctx, 'bgItem/204.png', 1880, 170, 104, 86);
      this.drawWorldTex(ctx, 'bgItem/11.png', 1960, 170, 98, 74);

      // 4. Hàng dừa biển rợp bóng mát chuẩn Dragon Boy (bgItem 12, 13, 6)
      this.drawWorldTex(ctx, 'bgItem/13.png', 290, 172, 136, 172);
      this.drawWorldTex(ctx, 'bgItem/12.png', 380, 172, 198, 286);
      this.drawWorldTex(ctx, 'bgItem/6.png', 1190, 172, 204, 239);
      this.drawWorldTex(ctx, 'bgItem/13.png', 1620, 172, 136, 172);
      this.drawWorldTex(ctx, 'bgItem/12.png', 1700, 172, 198, 286);

      // 5. Ô dù bãi biển & Ghế nằm nghỉ mát chuẩn NRO (bgItem 184, 197)
      this.drawWorldTex(ctx, 'bgItem/197.png', 590, 172, 96, 50);
      this.drawWorldTex(ctx, 'bgItem/184.png', 640, 172, 70, 88);
      this.drawWorldTex(ctx, 'bgItem/184.png', 1280, 172, 70, 88);
      this.drawWorldTex(ctx, 'bgItem/197.png', 1340, 172, 96, 50);

      // 6. Tòa nhà KAME HOUSE huyền thoại tại trung tâm đảo (bgItem/143.png: 376x190)
      this.drawWorldTex(ctx, 'bgItem/143.png', 760, 172, 376, 190);

      // 7. Mặt cát vàng biển Đảo Kame mịn màng không cắt khuyết
      this._drawSandGroundTiles(ctx, mapCfg.width, 180, 1880);
      return;
    }

    if (style === 'home_earth') {
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi1_traidat.png', -30, 170, 210, 214);
      this.drawWorldTex(ctx, 'map/traidat/chung/nhacua/nhacua2_earth.png', 250, 172, 246, 224);
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi1_traidat.png', 960, 172, 230, 234);
      this._drawEarthGroundTiles(ctx, mapCfg.width, true);
      this.drawWorldTex(ctx, 'map/traidat/chung/dat/doc_traidat.png', 670, 0, 400, 165);
      this.drawWorldTex(ctx, 'map/traidat/chung/trangtri/cuinuongduiga.png', 1165, 172, 66, 48);
      this.drawWorldTex(ctx, `hieuung/hieuungmap/lua${fireFrame}.png`, 1180, 188, 36, 42);
      return;
    }

    if (style === 'home_namek' || style === 'namek_field' || style === 'bill_planet') {
      if (style === 'home_namek') {
        this.drawWorldTex(ctx, 'map/namek/375.png', 220, 172, 225, 235);
        this.drawWorldTex(ctx, 'map/namek/371.png', 880, 172, 145, 225);
      } else {
        this.drawWorldTex(ctx, 'map/namek/371.png', 360, 172, 145, 225);
        this.drawWorldTex(ctx, 'map/namek/372.png', 820, 172, 155, 235);
        this.drawWorldTex(ctx, 'map/namek/373.png', 1280, 172, 160, 230);
        this.drawWorldTex(ctx, 'map/namek/375.png', 1720, 172, 190, 210);
      }
      const camOffX = this.camX - 510;
      const maxTiles = Math.ceil(mapCfg.width / 50) + 3;
      const startI = Math.max(-2, Math.floor((camOffX - 60) / 50));
      const endI = Math.min(maxTiles, Math.ceil((camOffX + VIRTUAL_W + 60) / 50));
      for (let i = startI; i < endI; i++) {
        const tx = i * 50;
        const mIdx = ((i + 50) % 5) + 1;
        const dIdx = ((i + 30) % 3) + 1;
        if (i % 2 === 0) this.drawWorldTex(ctx, 'hud/giaodienngoai/namek/cayco1_namek.png', tx, 172, 50, 48);
        this.drawWorldTex(ctx, `hud/giaodienngoai/namek/matdat_namek${mIdx}.png`, tx, 125, 51, 51);
        this.drawWorldTex(ctx, `hud/giaodienngoai/namek/dat_namek${dIdx}.png`, tx, 75, 51, 51);
        this.drawWorldTex(ctx, `hud/giaodienngoai/namek/longdat_namek${dIdx}.png`, tx, 25, 51, 51);
        this.drawWorldTex(ctx, `hud/giaodienngoai/namek/longdat_namek${dIdx}.png`, tx, -25, 51, 51);
      }
      return;
    }

    if (style === 'home_xayda' || style === 'xayda_field' || style === 'kaio_road' || style === 'babidi_ship' || style === 'future_ruins' || style === 'prison_planet') {
      if (style === 'home_xayda') {
        this.drawWorldTex(ctx, 'map/xayda/chung/nhacua/nhacua1_xayda.png', 220, 170, 245, 224);
        this.drawWorldTex(ctx, 'map/xayda/chung/caycoi/caycoi1_xayda.png', 940, 172, 210, 210);
      } else if (style === 'future_ruins') {
        this.drawWorldTex(ctx, 'map/xayda/chung/nhacua/55.png', 420, 172, 165, 190);
        this.drawWorldTex(ctx, 'map/xayda/chung/nhacua/nhacua1_xayda.png', 1120, 170, 240, 220);
        this.drawWorldTex(ctx, `hieuung/hieuungmap/lua${fireFrame}.png`, 520, 174, 48, 56);
        this.drawWorldTex(ctx, `hieuung/hieuungmap/lua${fireFrame}.png`, 1280, 174, 48, 56);
      } else if (style === 'babidi_ship') {
        this.drawWorldTex(ctx, 'vatpham/taubay/myTexture2dmaybay4a.png', 620, 174, 130, 120);
        this.drawWorldTex(ctx, 'map/xayda/chung/nhacua/55.png', 1180, 172, 175, 200);
      } else {
        this.drawWorldTex(ctx, 'map/xayda/chung/nhacua/nhacua1_xayda.png', 180, 170, 240, 220);
        this.drawWorldTex(ctx, 'map/xayda/chung/caycoi/caycoi1_xayda.png', 680, 172, 210, 210);
        this.drawWorldTex(ctx, 'map/xayda/chung/nhacua/55.png', 1160, 172, 165, 190);
        this.drawWorldTex(ctx, 'map/xayda/chung/caycoi/caycoi2_xayda.png', 1640, 172, 195, 195);
      }

      const camOffX = this.camX - 510;
      const maxTiles = Math.ceil(mapCfg.width / 50) + 3;
      const startI = Math.max(-2, Math.floor((camOffX - 60) / 50));
      const endI = Math.min(maxTiles, Math.ceil((camOffX + VIRTUAL_W + 60) / 50));
      for (let i = startI; i < endI; i++) {
        const tx = i * 50;
        const mIdx = ((i + 50) % 5) + 1;
        const dIdx = ((i + 30) % 3) + 1;
        if (i % 2 === 0) this.drawWorldTex(ctx, 'map/xayda/chung/cayco/cayco1_xayda.png', tx, 172, 50, 46);
        this.drawWorldTex(ctx, `map/xayda/chung/dat/matdat_xayda${mIdx}.png`, tx, 125, 51, 51);
        this.drawWorldTex(ctx, `map/xayda/chung/dat/dat_xayda${dIdx}.png`, tx, 75, 51, 51);
        this.drawWorldTex(ctx, `map/xayda/chung/dat/longdat_xayda${dIdx}.png`, tx, 25, 51, 51);
        this.drawWorldTex(ctx, `map/xayda/chung/dat/longdat_xayda${dIdx}.png`, tx, -25, 51, 51);
      }
      this.drawWorldTex(ctx, 'map/xayda/chung/dat/doc_xayda.png', 650, 0, 390, 160);
      return;
    }

    if (style === 'cell_arena') {
      // VÕ ĐÀI XÊN BỌ HÙNG: Sàn đá trắng cẩm thạch kèm 4 trụ góc chuẩn nguyên tác Cell Games!
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi1_traidat.png', 220, 172, 210, 214);
      const ring = this.worldToView(1260, 175);
      this.hud.fillRectGdx(ctx, ring.vx, ring.vy, 560, 20, '#f8fafc', '#475569', 2.5);
      this.hud.fillRectGdx(ctx, ring.vx + 16, ring.vy + 20, 26, 135, '#e2e8f0', '#475569', 2);
      this.hud.fillRectGdx(ctx, ring.vx + 518, ring.vy + 20, 26, 135, '#e2e8f0', '#475569', 2);
      this.hud.fillRectGdx(ctx, ring.vx + 190, ring.vy + 20, 180, 38, '#1e293b', '#facc15', 2);
      this.hud.drawText(ctx, 'CELL GAMES', ring.vx + 280, ring.vy + 33, { size: 12, color: '#fde047', align: 'center' });
      this._drawEarthGroundTiles(ctx, mapCfg.width, false);
      return;
    }

    if (style === 'cold_planet') {
      // HÀNH TINH COLD: Mặt đất phủ băng tuyết trắng xanh lấp lánh
      this._drawEarthGroundTiles(ctx, mapCfg.width, false);
      const iceV = this.worldToView(-100, 165);
      this.hud.fillRectGdx(ctx, iceV.vx, iceV.vy, mapCfg.width + 200, 14, 'rgba(224, 242, 254, 0.88)', '#38bdf8', 1.5);
      return;
    }

    // Mặc định: Rừng Trái Đất / Trạm Vũ Trụ / Thành Phố / Siêu Thị (forest_earth, cliff_earth, spaceport_earth, city_earth)
    if (style === 'city_earth' || style === 'spaceport_earth') {
      this.drawWorldTex(ctx, 'map/traidat/chung/nhacua/nhacua1_earth.png', 360, 172, 235, 215);
      this.drawWorldTex(ctx, 'map/traidat/chung/nhacua/nhacua2_earth.png', 1060, 172, 235, 215);
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi1_traidat.png', 1560, 172, 215, 220);
    } else {
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi1_traidat.png', 280, 172, 225, 228);
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi1_traidat.png', 920, 172, 225, 228);
      this.drawWorldTex(ctx, 'map/traidat/chung/caycoi/caycoi1_traidat.png', 1520, 172, 225, 228);
    }
    this._drawEarthGroundTiles(ctx, mapCfg.width, true);
  }

  _drawEarthGroundTiles(ctx, mapWidth, withGrass = true, skipGrassMinX = -9999, skipGrassMaxX = -9999) {
    const camOffX = this.camX - this.vw / 2;
    const maxTiles = Math.ceil(mapWidth / 50) + 3;
    // O(1) Spatial Frustum Indexing: Chỉ duyệt đúng các cột tile nằm trong khung hình [camOffX .. camOffX + vw]!
    const startI = Math.max(-2, Math.floor((camOffX - 60) / 50));
    const endI = Math.min(maxTiles, Math.ceil((camOffX + this.vw + 60) / 50));

    // Lớp đất sâu che kín hoàn toàn lòng đất bên dưới wy <= 25 (không lộ nền hay cây xuyên lòng đất)
    const deepV = this.worldToView(startI * 50, 25);
    const totalW = (endI - startI) * 50 + 60;
    this.hud.fillRectGdx(ctx, deepV.vx, 0, totalW, Math.max(0, deepV.vy), '#451a03', null);

    for (let i = startI; i < endI; i++) {
      const tx = i * 50;
      const mIdx = ((i + 50) % 5) + 1;
      const dIdx = ((i + 30) % 3) + 1;
      if (withGrass && i % 2 === 0 && (tx < skipGrassMinX || tx > skipGrassMaxX)) {
        this.drawWorldTex(ctx, 'map/traidat/chung/cayco/cayco3_traidat.png', tx, 172, 50, 50);
      }
      this.drawWorldTex(ctx, `map/traidat/chung/dat/matdat_traidat${mIdx}.png`, tx, 125, 51, 51);
      this.drawWorldTex(ctx, `map/traidat/chung/dat/dat_traidat${dIdx}.png`, tx, 75, 51, 51);
      this.drawWorldTex(ctx, `map/traidat/chung/dat/longdat_traidat${dIdx}.png`, tx, 25, 51, 51);
      this.drawWorldTex(ctx, `map/traidat/chung/dat/longdat_traidat${dIdx}.png`, tx, -25, 51, 51);
      this.drawWorldTex(ctx, `map/traidat/chung/dat/longdat_traidat${dIdx}.png`, tx, -75, 51, 51);
      this.drawWorldTex(ctx, 'map/traidat/chung/cayco/cayco5_traidat.png', tx, 173, 51, 12);
    }
  }

  _drawSandGroundTiles(ctx, mapWidth, minX = 180, maxX = 1880) {
    const camOffX = this.camX - this.vw / 2;
    const maxTiles = Math.ceil(mapWidth / 48) + 3;
    const startI = Math.max(-2, Math.floor((camOffX - 60) / 48));
    const endI = Math.min(maxTiles, Math.ceil((camOffX + this.vw + 60) / 48));

    // Lớp cát sâu dưới nước
    const sandDeepV = this.worldToView(startI * 48, 125);
    const totalW = (endI - startI) * 48 + 60;
    this.hud.fillRectGdx(ctx, sandDeepV.vx, 0, totalW, Math.max(0, sandDeepV.vy), '#ca8a04', null);

    for (let i = startI; i < endI; i++) {
      const tx = i * 48;
      if (tx < minX || tx > maxX) continue;
      const gv = this.worldToView(tx, 172);

      // Mặt cát bờ biển vàng óng ánh
      this.hud.fillRectGdx(ctx, gv.vx, gv.vy - 16, 49, 16, '#fde047', '#eab308', 1);
      this.hud.fillRectGdx(ctx, gv.vx, gv.vy - 48, 49, 32, '#eab308', null);
      this.hud.fillRectGdx(ctx, gv.vx, gv.vy - 96, 49, 48, '#ca8a04', null);

      // Bọt sóng trắng ở 2 rìa bãi biển
      if (tx <= minX + 72 || tx >= maxX - 72) {
        const waveFoam = 0.65 + Math.sin(this.animClock * 6 + i) * 0.25;
        ctx.save();
        ctx.globalAlpha = waveFoam;
        this.hud.fillRectGdx(ctx, gv.vx, gv.vy - 6, 49, 7, '#ffffff', '#bae6fd', 1);
        ctx.restore();
      }
    }
  }

  // ==================== VẼ LỚP TIỀN CẢNH CHE PHỦ TRƯỚC NHÂN VẬT ====================
  renderMapForegroundLayer(ctx, mapCfg) {
    const camOffX = this.camX - this.vw / 2;

    if (mapCfg.key === 'lang_aru') {
      this.drawWorldTex(ctx, 'map/traidat/lang_aru/maparusau.png', -96, -38, 2544, 1008);
      ctx.save();
      ctx.globalAlpha = 0.2;
      for (let i = 0; i < 3; i++) {
        this.drawWorldTex(ctx, 'hieuung/hieuungmap/light.png', 150 + i * 840, 420, 560, 480);
      }
      ctx.restore();
    } else if (mapCfg.key === 'doi_hoa_cuc') {
      this.drawWorldTex(ctx, 'map/traidat/doi_hoa_cuc/doihoacucsau.png', 0, -134, 2976, 960);
      // Lớp cỏ hoa tiền cảnh parallax nhanh hơn camera chuẩn ManHinhDoiHoaCuc.java dòng 342
      this.drawWorldTex(ctx, 'map/traidat/doi_hoa_cuc/doihoacuctruoc.png', -camOffX * 0.5 - 100, -184, 3408, 960);
      // Làn sương dưới đáy vực Đồi Hoa Cúc trong toạ độ WORLD y=-134 chuẩn ManHinhDoiHoaCuc.java dòng 357 (chỉ vẽ khi camera hạ xuống thấy đáy vực!)
      if (this.camY - this.vh / 2 < 110) {
        const cloudShift = (this.animClock * 18) % 287;
        const startK = Math.max(-1, Math.floor((camOffX + cloudShift - 290) / 287));
        const endK = Math.min(12, Math.ceil((camOffX + cloudShift + this.vw + 290) / 287));
        for (let i = startK; i < endK; i++) {
          this.drawWorldTex(ctx, 'hieuung/hieuungmap/khoimay.png', i * 287 - cloudShift, -134, 288, 200);
        }
      }
    } else if (mapCfg.key === 'nha_gohan') {
      ctx.save();
      ctx.globalAlpha = 0.22;
      this.drawWorldTex(ctx, 'hieuung/hieuungmap/light.png', 140, 310, 560, 460);
      ctx.restore();
    }
  }

  // ==================== BẢNG TÊN QUA MAP CHUẨN 100% ManHinhNhaGohan & ManHinhLangAru ====================
  renderWaypointSigns(ctx, mapCfg) {
    const p = this.player;
    for (let i = 0; i < mapCfg.waypoints.length; i++) {
      const wp = mapCfg.waypoints[i];

      // Vệt sáng trắng xanh sát mặt đất ở rìa lối đi chuẩn Ngọc Rồng Online Teamobi
      if (typeof wp.groundGlowX === 'number') {
        const gTop = this.getGroundTopAt(wp.groundGlowX, mapCfg);
        const gv = this.worldToView(wp.groundGlowX, gTop);
        if (gv.vx > -60 && gv.vx < VIRTUAL_W + 60) {
          const pulse = 0.55 + Math.sin(this.animClock * 5) * 0.2;
          ctx.save();
          ctx.globalAlpha = pulse;
          this.hud.fillRectGdx(ctx, gv.vx - 26, gv.vy - 2, 52, 8, '#e0f2fe', '#38bdf8', 1.5);
          ctx.restore();
        }
      }

      // CHỈ hiện bảng tên khu vực khi nhân vật đứng trong vùng cửa / mép map (đúng hệt ManHinhNhaGohan dòng 469 & ManHinhLangAru dòng 414!)
      const inRange = p.x >= wp.showRangeX[0] && p.x <= wp.showRangeX[1];
      if (!inRange) continue;

      const sr = wp.signRect;
      const { vx, vy } = this.worldToView(sr.x, sr.y);
      if (vx + sr.w < -20 || vx > VIRTUAL_W + 20) continue;

      // Đúng chuẩn: nền đen bán trong suốt rgba(0,0,0,0.5) 230x60 + chữ trắng viền mảnh chính giữa!
      this.hud.fillRectGdx(ctx, vx, vy, sr.w, sr.h, 'rgba(0, 0, 0, 0.52)', null);
      this.hud.drawText(ctx, wp.label, vx + sr.w / 2, vy + 24, {
        size: 15,
        color: '#ffffff',
        stroke: '#3f3f46',
        strokeWidth: 2,
        align: 'center'
      });
    }
  }

  // ==================== VẼ NPC CHUẨN MODULAR ====================
  renderNpcs(ctx) {
    const camOffX = this.camX - 510;
    const bob = Math.floor(this.animClock * 3) % 2 === 0 ? 0 : -1.2;
    const quest = STORY_QUESTS.find((q) => q.id === this.player.questId);
    const curStep = quest ? quest.steps[this.player.questStep || 0] : null;

    for (let i = 0; i < this.npcs.length; i++) {
      const npc = this.npcs[i];
      if (npc.kind === 'meat' && npc.eaten) continue;
      // Frustum Culling cho NPC nằm ngoài tầm nhìn Camera
      if (npc.x < camOffX - 180 || npc.x > camOffX + VIRTUAL_W + 180) continue;

      let headTopY = npc.y + 72;

      if (npc.kind === 'senzu_tree') {
        const lv = Math.min(10, Math.max(1, this.player.senzuCount || 5));
        const treePath = `nhanvat/npc/dau_traidat/caydau${lv}.png`;
        const img = assets.tex(treePath);
        const tw = img ? img.naturalWidth * 0.55 : 78;
        const th = img ? img.naturalHeight * 0.55 : 108;
        this.drawWorldTex(ctx, treePath, npc.x - tw / 2, npc.y, tw, th);
        headTopY = npc.y + th + 6;
      } else if (npc.kind === 'spaceship') {
        const img = assets.tex(npc.tex);
        const iw = img ? img.naturalWidth * 1.45 : 96;
        const ih = img ? img.naturalHeight * 1.45 : 82;
        this.drawWorldTex(ctx, npc.tex, npc.x - iw / 2, npc.y, iw, ih);
        headTopY = npc.y + ih + 8;
      } else if (npc.kind === 'sprite') {
        const img = assets.tex(npc.tex);
        const sc = npc.scale || 0.55;
        const iw = img ? img.naturalWidth * sc : 64;
        const ih = img ? img.naturalHeight * sc : 82;
        const flipNpc = this.player.x > npc.x;
        this.drawWorldTex(ctx, npc.tex, npc.x - iw / 2, npc.y + bob * 0.5, iw, ih, flipNpc);
        headTopY = npc.y + ih + 6;
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

          this.drawWorldTex(ctx, `nhanvat/npc/${npc.folder}/chan.png`, npc.x - cw / 2 + off.chanX, chanY, cw, ch);
          this.drawWorldTex(ctx, `nhanvat/npc/${npc.folder}/dau.png`, npc.x - dw / 2 + off.dauX, dauY, dw, dh);
          this.drawWorldTex(ctx, `nhanvat/npc/${npc.folder}/than.png`, npc.x - tw / 2 + off.thanX, thanY, tw, th);
          headTopY = dauY + dh + 6;
        }
      }

      const { vx, vy } = this.worldToView(npc.x, headTopY);
      this.hud.drawText(ctx, npc.name, vx, vy, { size: 11.5, color: '#fde047', align: 'center' });

      // Hiển thị dấu chấm hỏi nhiệm vụ ngay trên NPC cần tương tác của bước hiện tại!
      const isNpcQuestTarget = curStep && (
        curStep.targetId === npc.id ||
        (curStep.type === 'talk_elder' && ['ong_gohan', 'ong_paragus', 'ong_moori'].includes(npc.id)) ||
        (curStep.type === 'talk_master' && ['quy_lao_kame', 'vua_vegeta', 'truong_lao_guru'].includes(npc.id))
      );
      if (isNpcQuestTarget) {
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
      // Kiểm tra hướng gốc của từng sprite (nativeLeft: true thì đi sang phải cần flip, ngược lại đi sang trái cần flip)
      const flipX = m.nativeLeft ? m.dir > 0 : m.dir < 0;

      // Loại bỏ hoàn toàn ctx.filter = 'brightness(1.6)' (vốn ép trình duyệt fallback về CPU/FBO gây khựng nặng khi đánh nhanh!)
      const isHurt = m.hurtTimer > 0;
      if (isHurt) {
        ctx.globalAlpha = 0.78;
      }

      if ((m.socolaTimer || 0) > 0) {
        // Đang bị Biến Sôcôla (DataNRO #18) -> Vẽ thanh Sôcôla 4133.png nảy nhẹ trên mặt đất!
        const bobChoc = Math.abs(Math.sin(this.animClock * 6)) * 6;
        this.drawWorldTex(ctx, 'vatpham/datanro/4133.png', m.x - 22, m.y + bobChoc, 44, 44);
        topOffset = 52;
      } else if (m.renderType === 'dummy') {
        const texPath = m.hurtTimer > 0 ? m.hitTex : m.idleTex;
        const img = assets.tex(texPath);
        if (img) {
          const w = img.naturalWidth * m.scale;
          const h = img.naturalHeight * m.scale;
          this.drawWorldTex(ctx, texPath, m.x - w / 2, m.y, w, h, false);
          topOffset = h + 6;
        }
      } else if (m.renderType === 'frames' && m.frames) {
        if (m.isBoss && m.auraColor) {
          const auraFrames = m.auraColor === 'tim'
            ? ['Small975.png', 'Small977.png', 'Small978.png', 'Small986.png']
            : ['Small982.png', 'Small983.png', 'Small984.png', 'Small985.png'];
          const auraFolder = m.auraColor === 'tim' ? 'tím' : 'xanh nhạt';
          const af = auraFrames[Math.floor(this.animClock * 10) % auraFrames.length];
          this.drawWorldTex(ctx, `hieuung/hieuunggame/aura/${auraFolder}/${af}`, m.x - 54, m.y - 6, 108, 120);
        }
        const fIdx = Math.floor(this.animClock * 7 + i) % m.frames.length;
        const fPath = m.frames[fIdx];
        const img = assets.tex(fPath);
        if (img) {
          const w = img.naturalWidth * m.scale;
          const h = img.naturalHeight * m.scale;
          this.drawWorldTex(ctx, fPath, m.x - w / 2, m.y, w, h, flipX);
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
          if (flipX) {
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

      if (isHurt) {
        ctx.globalAlpha = 1;
      }

      // Hiệu ứng vòng Trói (DataNRO #23) hoặc Ngủ Say Thôi Miên (DataNRO #22)
      if ((m.bindTimer || 0) > 0) {
        ctx.save();
        ctx.strokeStyle = '#facc15';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(vx, VIRTUAL_H - vy - 28, 32, 12, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      if ((m.sleepTimer || 0) > 0) {
        this.hud.drawText(ctx, '💤 Zzz', vx, vy + topOffset + 18, { size: 11, color: '#e879f9', align: 'center' });
      }

      const barW = m.isBoss ? 76 : 46;
      const barH = m.isBoss ? 7 : 5;
      const hpRatio = m.maxHp > 0 ? Math.max(0, m.hp / m.maxHp) : 0;
      const headY = vy + topOffset;

      this.hud.fillRectGdx(ctx, vx - barW / 2, headY, barW, barH, '#111827', '#000000', 1);
      this.hud.fillRectGdx(ctx, vx - barW / 2 + 1, headY + 1, (barW - 2) * hpRatio, barH - 2, m.isBoss ? '#f59e0b' : '#ef4444', null);

      if (m.isBoss || m.renderType === 'dummy' || this.selectedTarget === m) {
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

  // ==================== HOẠT CẢNH TÀU VŨ TRỤ CAPSULE CẤT / HẠ CÁNH ====================
  renderSpaceshipCutscene(ctx) {
    const sa = this.spaceshipAnim;
    if (!sa) return;
    const isOpen = sa.phase === 'landing' && sa.y <= sa.targetY + 2;
    const podTex = isOpen ? 'vatpham/taubay/myTexture2dmaybay4b.png' : 'vatpham/taubay/myTexture2dmaybay4a.png';
    const podW = isOpen ? 96 : 72;
    const podH = 72;

    if (!isOpen) {
      // Vệt lửa phản lực bên dưới tàu vũ trụ
      const fireF = (Math.floor(this.animClock * 16) % 4) + 1;
      this.drawWorldTex(ctx, `hieuung/hieuungmap/lua${fireF}.png`, sa.x - 18, sa.y - 26, 36, 40);
    }
    this.drawWorldTex(ctx, podTex, sa.x - podW / 2, sa.y, podW, podH);
    if (isOpen) {
      this.renderPlayer(ctx);
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

    // 5. Vẽ Nhân Vật Modular (Mặc định set_cam võ phục truyền thống, không bao giờ để nhân vật cởi trần)
    const aoSet = p.equipped?.ao ? (ITEM_CATALOG[p.equipped.ao.id]?.setVisual || 'set_cam') : 'set_cam';
    const quanSet = p.equipped?.quan ? (ITEM_CATALOG[p.equipped.quan.id]?.setVisual || 'set_cam') : 'set_cam';
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

        // Đầu chưởng & gốc chưởng cắt đúng frame từ spritesheet dọc e_0.png & e_2.png
        const headImg = assets.tex('hieuung/hieuungkynang/e_0.png');
        if (headImg) {
          const fh = headImg.naturalHeight / 4;
          const fIdx = Math.floor(this.animClock * 18) % 2;
          ctx.save();
          ctx.translate(vx, cy);
          if (pr.vx < 0) ctx.scale(-1, 1);
          ctx.drawImage(headImg, 0, fIdx * fh, headImg.naturalWidth, fh, -30, -28, 60, 56);
          ctx.restore();
        }
        const origImg = assets.tex('hieuung/hieuungkynang/e_2.png');
        if (origImg) {
          const fh = origImg.naturalHeight / 4;
          const fIdx = Math.floor(this.animClock * 18) % 2;
          ctx.save();
          ctx.translate(startV.vx, scy);
          if (pr.vx < 0) ctx.scale(-1, 1);
          ctx.drawImage(origImg, 0, fIdx * fh, origImg.naturalWidth, fh, -26, -26, 52, 52);
          ctx.restore();
        }
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

    // Hiệu ứng Nổ / Đánh trúng / Dịch chuyển / Thái Dương Hạ San (Dùng bom1/bom2 chuẩn, xoá nồi cơm điện Mafuba!)
    for (let i = 0; i < this.skillEffects.length; i++) {
      const ef = this.skillEffects[i];
      if (ef.type === 'HitSpark') {
        const sparkImg = assets.tex('hieuung/hieuungkynang/e_0.png');
        if (sparkImg) {
          const fh = sparkImg.naturalHeight / 4;
          const { vx, vy } = this.worldToView(ef.x, ef.y);
          ctx.drawImage(sparkImg, 0, 2 * fh, sparkImg.naturalWidth, fh, vx - 22, VIRTUAL_H - vy - 22, 44, 44);
        }
      } else if (ef.type === 'Explosion') {
        const ratio = ef.timer / ef.duration;
        const size = (ef.big ? 135 : 74) * (0.65 + ratio * 0.55);
        const bomTex = ratio < 0.5 ? 'hieuung/hieuunggame/bien_khi/bom1.png' : 'hieuung/hieuunggame/bien_khi/bom2.png';
        ctx.save();
        ctx.globalAlpha = Math.max(0, 1 - ratio * 0.85);
        this.drawWorldTex(ctx, bomTex, ef.x - size / 2, ef.y - size / 2, size, size);
        ctx.restore();
      } else if (ef.type === 'Tele') {
        const f = Math.min(3, Math.floor((ef.timer / ef.duration) * 3) + 1);
        this.drawWorldTex(ctx, `hieuung/hieuunggame/bien_mat/${f}.png`, ef.x - 24, ef.y, 48, 64);
      } else if (ef.type === 'SolarFlash') {
        const alpha = 1 - ef.timer / ef.duration;
        ctx.save();
        ctx.fillStyle = `rgba(254, 249, 195, ${alpha * 0.72})`;
        ctx.fillRect(0, 0, this.vw, this.vh);
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

  // ==================== BẮT SỰ KIỆN KÉO JOYSTICK, KÉO CAMERA, CHẠM ĐÔI & BÀN PHÍM CHUẨN ThaoTac.java ====================
  clientToVirtual(clientX, clientY) {
    // Đọc từ giá trị đã cache (_winW, _winH, _fitScale, _isPortrait) tránh layout thrashing khi kéo Joystick 120Hz!
    const winW = this._winW || this.vw;
    const winH = this._winH || this.vh;
    const fitScale = this._fitScale || 1;
    const dx = clientX - winW * 0.5;
    const dy = clientY - winH * 0.5;

    if (this._isPortrait) {
      return {
        gx: this.vw * 0.5 + dy / fitScale,
        gy: this.vh * 0.5 + dx / fitScale
      };
    }
    return {
      gx: this.vw * 0.5 + dx / fitScale,
      gy: this.vh * 0.5 - dy / fitScale
    };
  }

  _updateJoystickFromVirtual(gx, gy) {
    let dx = gx - JOYSTICK_CX;
    let dy = gy - JOYSTICK_CY;
    const dist = Math.hypot(dx, dy);
    if (dist > JOYSTICK_R_NGOAI) {
      dx = (dx / dist) * JOYSTICK_R_NGOAI;
      dy = (dy / dist) * JOYSTICK_R_NGOAI;
    }
    this.hud.joystickDx = dx;
    this.hud.joystickDy = dy;
  }

  _releaseJoystick() {
    this.joystickPointerId = null;
    this.hud.joystickActive = false;
    this.hud.joystickDx = 0;
    this.hud.joystickDy = 0;
    this.joystickUpHoldTime = 0;
  }

  _handleWorldTap(gx, gy) {
    const wx = gx + (this.camX - this.vw / 2);
    const wy = gy + (this.camY - this.vh / 2);
    const mapCfg = MAPS_CONFIG[this.currentMapId] || MAPS_CONFIG[0];

    // 1. Click vào bảng tên Waypoint khi đang đứng gần cửa / rìa map
    for (let wp of mapCfg.waypoints) {
      const inRange = this.player.x >= wp.showRangeX[0] && this.player.x <= wp.showRangeX[1];
      if (!inRange) continue;
      const sr = wp.signRect;
      if (wx >= sr.x && wx <= sr.x + sr.w && wy >= sr.y && wy <= sr.y + sr.h) {
        if (wp.kind === 'door') {
          if (wp.doorRangeX && (this.player.x < wp.doorRangeX[0] || this.player.x > wp.doorRangeX[1])) {
            this.player.moveTargetX = (wp.doorRangeX[0] + wp.doorRangeX[1]) / 2;
            this.pendingWaypoint = wp;
          } else {
            this.changeMap(wp.targetMapId, wp.targetX, wp.targetY);
          }
        } else if (wp.kind === 'left_edge') {
          this.player.moveTargetX = -35;
        } else if (wp.kind === 'right_edge') {
          this.player.moveTargetX = mapCfg.width + 35;
        }
        return;
      }
    }

    // 2. Click vào NPC / Tàu Vũ Trụ / Đùi Gà (Chạm 1 khoá mục tiêu, chạm đôi hoặc đứng gần mở thoại luôn)
    for (let npc of this.npcs) {
      if (npc.kind === 'meat' && npc.eaten) continue;
      const hitHalfW = npc.kind === 'spaceship' ? 58 : 44;
      if (Math.abs(wx - npc.x) <= hitHalfW && wy >= npc.y - 10 && wy <= npc.y + 98) {
        if (this.selectedTarget === npc || Math.abs(this.player.x - npc.x) <= 110) {
          this.selectedTarget = npc;
          if (Math.abs(this.player.x - npc.x) <= 115) {
            this.hud.openNpcDialog(npc);
          } else {
            this.player.moveTargetX = npc.x + (this.player.x < npc.x ? -55 : 55);
            this.pendingInteractNpc = npc;
          }
        } else {
          this.selectedTarget = npc;
          sound.playPunch();
        }
        return;
      }
    }

    // 3. Click vào Quái vật / Boss chuẩn Ngọc Rồng Online: Click 1 chọn mục tiêu, Click 2 (hoặc bấm nút Đánh) lao vào đánh!
    for (let m of this.monsters) {
      if (!m.dead && Math.abs(wx - m.x) <= 48 && wy >= m.y - 12 && wy <= m.y + 95) {
        if (this.selectedTarget === m) {
          this.castSkillBySlot(this.player.activeSkillSlot || 0);
        } else {
          this.selectedTarget = m;
          sound.playPunch();
        }
        return;
      }
    }

    // 4. Click xuống mặt đất / bầu trời để di chuyển tới điểm chỉ định (click_di_chuyen)
    let allowMinX = mapCfg.key === 'thap_karin' ? 380 : 28;
    let allowMaxX = mapCfg.key === 'thap_karin' ? 1020 : mapCfg.width - 28;
    if (mapCfg.waypoints.some((w) => w.kind === 'left_edge')) allowMinX = -45;
    if (mapCfg.waypoints.some((w) => w.kind === 'right_edge')) allowMaxX = mapCfg.width + 45;
    this.player.moveTargetX = Math.max(allowMinX, Math.min(allowMaxX, wx));
    const rawTop = this.getGroundTopAt(this.player.moveTargetX, mapCfg);
    const gTop = rawTop > -100 ? rawTop : 175;
    const hasFlyCap = Boolean(this.player.equipped?.vanbay) || this.player.ki > 10;
    if (wy > gTop + 145 && hasFlyCap) {
      // Chỉ bay lên khi người chơi chủ động chạm thật cao trên bầu trời (vd leo Tháp Karin!)
      this.player.isFlying = true;
      this.player.onGround = false;
      this.player.moveTargetY = Math.min(mapCfg.height - 95, wy);
    } else {
      this.player.moveTargetY = null;
      if (this.player.isFlying && wy <= gTop + 65) {
        this.player.isFlying = false;
      }
    }
    this.clickMarker = { x: wx, y: Math.max(gTop, wy), timer: 0 };
  }

  _bindEvents() {
    this._onPointerDown = (e) => {
      sound.startBGM();
      const { gx, gy } = this.clientToVirtual(e.clientX, e.clientY);
      if (gx < -10 || gx > VIRTUAL_W + 10 || gy < -10 || gy > VIRTUAL_H + 10) return;

      // 1. Kiểm tra chạm vào vòng Joystick điều hướng ảo trước tiên (chuẩn ThaoTac.java dòng 158-178)
      if (
        this.hud.showVirtualControls &&
        !this.hud.popupOpen &&
        !this.hud.isBlockingWorldClick() &&
        Math.hypot(gx - JOYSTICK_CX, gy - JOYSTICK_CY) <= JOYSTICK_R_NGOAI + 18
      ) {
        this.joystickPointerId = e.pointerId;
        this.hud.joystickActive = true;
        this.player.moveTargetX = null;
        this.player.moveTargetY = null;
        this._updateJoystickFromVirtual(gx, gy);
        return;
      }

      // 2. Kiểm tra click vào các nút HUD / Popup / Cửa hàng / Hộp thoại NPC / Rồng Thần
      if (this.hud.handlePointerDown(gx, gy)) {
        return;
      }

      // 3. Bắt đầu theo dõi Kéo Camera hoặc Chạm Di Chuyển trên bản đồ (chuẩn QuanLyCamera.java dòng 61-106)
      if (this.camDragPointerId === null) {
        this.camDragPointerId = e.pointerId;
        this.camDragging = false;
        this.camDragStartGx = gx;
        this.camDragStartGy = gy;
        this.camDragStartCamX = this.camX;
        this.camDragStartCamY = this.camY;
      }
    };

    this._onPointerMove = (e) => {
      if (e.pointerId === this.joystickPointerId) {
        const { gx, gy } = this.clientToVirtual(e.clientX, e.clientY);
        this._updateJoystickFromVirtual(gx, gy);
        return;
      }

      if (e.pointerId === this.camDragPointerId) {
        const { gx, gy } = this.clientToVirtual(e.clientX, e.clientY);
        const dx = gx - this.camDragStartGx;
        const dy = gy - this.camDragStartGy;
        if (!this.camDragging && Math.hypot(dx, dy) > 9) {
          this.camDragging = true;
        }
        if (this.camDragging) {
          const mapCfg = MAPS_CONFIG[this.currentMapId] || MAPS_CONFIG[0];
          this.camX = Math.max(510, Math.min(mapCfg.width - 510, this.camDragStartCamX - dx * 1.35));
          this.camY = Math.max(305, Math.min(mapCfg.height - 305, this.camDragStartCamY - dy * 1.35));
        }
      }
    };

    this._onPointerUp = (e) => {
      if (e.pointerId === this.joystickPointerId) {
        this._releaseJoystick();
        return;
      }

      if (e.pointerId === this.camDragPointerId) {
        const wasDragging = this.camDragging;
        this.camDragPointerId = null;
        this.camDragging = false;
        if (!wasDragging) {
          const { gx, gy } = this.clientToVirtual(e.clientX, e.clientY);
          this._handleWorldTap(gx, gy);
        }
      }
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
        // Chuẩn ManHinhNhaGohan dòng 487 & ManHinhLangAru dòng 461: đứng ngay cửa bấm Enter là vào/ra nhà!
        const mapCfg = MAPS_CONFIG[this.currentMapId];
        const doorWp = mapCfg?.waypoints.find(
          (w) => w.kind === 'door' && w.doorRangeX && this.player.x >= w.doorRangeX[0] && this.player.x <= w.doorRangeX[1]
        );
        if (doorWp) {
          this.changeMap(doorWp.targetMapId, doorWp.targetX, doorWp.targetY);
        } else {
          this.hud.openChatBox('CHAT');
        }
      } else if (e.code === 'Escape') {
        this.hud.closeAllModals();
      }
    };

    this._onKeyUp = (e) => {
      this.keys[e.code] = false;
    };

    this._onResize = () => {
      this._syncCanvasResolution();
    };

    this.canvas.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('pointermove', this._onPointerMove, { passive: true });
    window.addEventListener('pointerup', this._onPointerUp, { passive: true });
    window.addEventListener('pointercancel', this._onPointerUp, { passive: true });
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
    window.addEventListener('resize', this._onResize, { passive: true });
    window.addEventListener('orientationchange', this._onResize, { passive: true });
  }

  start() {
    if (this.running) return;
    this.running = true;
    this._syncCanvasResolution();
    this.lastTime = performance.now();
    sound.startBGM();

    const loop = (now) => {
      if (!this.running) return;
      const dt = Math.min(0.05, Math.max(0.001, (now - this.lastTime) / 1000));
      this.lastTime = now;

      this.update(dt);
      this.render();

      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  destroy() {
    this.running = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.canvas.removeEventListener('pointerdown', this._onPointerDown);
    window.removeEventListener('pointermove', this._onPointerMove);
    window.removeEventListener('pointerup', this._onPointerUp);
    window.removeEventListener('pointercancel', this._onPointerUp);
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    window.removeEventListener('resize', this._onResize);
    window.removeEventListener('orientationchange', this._onResize);
  }
}

function pInRange(x, range) {
  return Array.isArray(range) && x >= range[0] && x <= range[1];
}

function pQuestNeedsMeat(player) {
  if (!player) return false;
  const q = STORY_QUESTS.find((it) => it.id === player.questId);
  const st = q?.steps?.[player.questStep || 0];
  return Boolean(st && st.type === 'pickup_meat');
}
