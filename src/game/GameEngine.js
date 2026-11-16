import { MAPS, PLANETS, QUESTS } from './constants';
import { sound } from './audio';
import { assets } from './assetLoader';
import confetti from 'canvas-confetti';

export class GameEngine {
  constructor(canvas, onStateUpdate, onOpenDialog, onSummonDragon, initialPlayer = null) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.onStateUpdate = onStateUpdate;
    this.onOpenDialog = onOpenDialog;
    this.onSummonDragon = onSummonDragon;

    this.width = canvas.width;
    this.height = canvas.height;
    this.updateViewport();

    // Khởi tạo AssetLoader
    assets.init();

    // Camera
    this.cameraX = 0;
    this.cameraY = 0;
    this.shakeTimer = 0;

    // Điều khiển
    this.keys = {};
    this.mobileControls = { left: false, right: false, up: false, down: false };

    // Dữ liệu người chơi
    this.player = {
      name: 'SonGoku',
      planet: 0,
      x: 620,
      y: 420,
      vx: 0,
      vy: 0,
      width: 40,
      height: 60,
      facing: 1, // 1: phải, -1: trái
      onGround: false,
      isFlying: false,
      isChargingKi: false,
      isAttacking: false,
      attackCooldown: 0,
      attackCombo: 1,
      isBeaming: false,
      beamTimer: 0,
      beamDuration: 28,
      
      // Biến hình Super Saiyan
      isSuperSaiyan: false,
      ssjTimer: 0,

      // Animation frame counters
      runAnimFrame: 1,
      animTick: 0,
      targetMoveX: null,
      clickMarker: null,

      // Kỹ năng đặc biệt
      isSpiritBomb: false,
      spiritBombY: -200,
      spiritBombX: 0,
      spiritBombRadius: 80,
      solarFlareTimer: 0,

      // Chỉ số
      hp: 1500,
      maxHp: 1500,
      ki: 1200,
      maxKi: 1200,
      attack: 65,
      defense: 15,
      crit: 8,
      power: 2000,
      potential: 2000,
      gold: 5000,
      gem: 50,
      senzuCount: 10,
      senzuLevel: 1,
      
      // 7 Viên ngọc rồng thu thập được [1..7]
      dragonBalls: [false, false, false, false, false, false, false],

      mapId: 0,
      questId: 1,
      questProgress: 0,
      inventory: []
    };

    if (initialPlayer) {
      Object.assign(this.player, initialPlayer);
      if (this.player.mapId === 0 && (!this.player.x || this.player.x < 560)) {
        this.player.x = 640;
        this.player.y = 420;
      }
    }

    // Quái vật & Vật phẩm rơi
    this.currentMap = MAPS[0];
    this.monsters = [];
    this.floatingTexts = [];
    this.droppedItems = [];
    this.particles = [];

    // Cây Đậu Thần Karin (1 -> 10 hạt) - Đặt tại vị trí thông thoáng
    this.senzuTree = {
      x: 1920,
      y: 480,
      beansReady: 6,
      maxBeans: 10,
      growTimer: 0
    };

    // Rương Đồ Làng Aru (đặt cạnh cửa nhà Gôhan)
    this.storageChest = {
      x: 260,
      y: 480
    };

    // Đám mây trôi
    this.clouds = [
      { x: 100, y: 70, speed: 0.35, scale: 1.2 },
      { x: 700, y: 110, speed: 0.25, scale: 0.9 },
      { x: 1300, y: 60, speed: 0.45, scale: 1.4 },
      { x: 1900, y: 95, speed: 0.28, scale: 1.1 }
    ];

    this.isRunning = false;
    this.initMap(0);
    this.bindEvents();
  }

  updateViewport() {
    this.virtualHeight = 600;
    this.scale = Math.max(0.6, (this.height || 600) / this.virtualHeight);
    this.virtualWidth = (this.width || 1024) / this.scale;
  }

  initMap(mapId) {
    const map = MAPS.find(m => m.id === mapId) || MAPS[0];
    this.currentMap = map;
    this.player.mapId = mapId;
    this.senzuTree.y = map.groundY;
    this.storageChest.y = map.groundY;

    this.monsters = map.monsters.map(m => ({
      ...m,
      maxHp: m.maxHp,
      hp: m.maxHp,
      vx: (Math.random() - 0.5) * 1.6,
      direction: 1,
      isDead: false,
      respawnTimer: 0,
      hitFlash: 0,
      isStunned: false,
      stunTimer: 0
    }));

    this.droppedItems = [];
    this.particles = [];
  }

  bindEvents() {
    this.handleKeyDown = (e) => {
      this.keys[e.code] = true;
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }

      // Phím tắt
      if (e.code === 'KeyJ') this.triggerAttack();
      if (e.code === 'KeyK') this.triggerBeam();
      if (e.code === 'KeyL') this.toggleChargeKi(true);
      if (e.code === 'KeyU') this.triggerSolarFlare();
      if (e.code === 'KeyI') this.triggerSpiritBomb();
      if (e.code === 'KeyO') this.toggleSuperSaiyan();
      if (e.code === 'KeyH') this.eatSenzu();
      if (e.code === 'KeyE') this.checkInteractions();
    };

    this.handleKeyUp = (e) => {
      this.keys[e.code] = false;
      if (e.code === 'KeyL') this.toggleChargeKi(false);
    };

    // Điều khiển Click / Chạm màn hình di chuyển & tấn công chuẩn Dragon Boy
    this.handleCanvasClick = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickScreenX = (e.clientX - rect.left) / this.scale;
      const clickScreenY = (e.clientY - rect.top) / this.scale;
      const worldX = clickScreenX + this.cameraX;
      const worldY = clickScreenY;

      // 1. Click vào NPC
      for (const npc of this.currentMap.npcs) {
        if (Math.hypot(worldX - npc.x, worldY - (npc.y - 35)) < 45) {
          this.player.targetMoveX = npc.x + (this.player.x < npc.x ? -55 : 55);
          this.player.clickMarker = { x: npc.x, y: npc.y - 35, type: 'npc', frame: 0, tick: 0 };
          this.pendingInteraction = { type: 'npc', target: npc };
          return;
        }
      }

      // 2. Click vào Quái vật / Mộc Nhân để đánh
      for (const m of this.monsters) {
        if (!m.isDead && Math.hypot(worldX - m.x, worldY - (m.y - 35)) < 55) {
          this.player.targetMoveX = m.x + (this.player.x < m.x ? -50 : 50);
          this.player.clickMarker = { x: m.x, y: m.y - 35, type: 'npc', frame: 0, tick: 0 };
          this.pendingInteraction = { type: 'monster', target: m };
          return;
        }
      }

      // 3. Click vào Cây Đậu Thần Karin
      if (this.currentMap.id === 0 && Math.hypot(worldX - this.senzuTree.x, worldY - (this.senzuTree.y - 70)) < 65) {
        this.player.targetMoveX = this.senzuTree.x + (this.player.x < this.senzuTree.x ? -55 : 55);
        this.player.clickMarker = { x: this.senzuTree.x, y: this.senzuTree.y - 40, type: 'move', frame: 0, tick: 0 };
        this.pendingInteraction = { type: 'senzu' };
        return;
      }

      // 4. Click di chuyển bình thường tới tọa độ
      this.player.targetMoveX = Math.max(30, Math.min(this.currentMap.width - 60, worldX));
      this.player.clickMarker = { x: worldX, y: this.currentMap.groundY - 10, type: 'move', frame: 0, tick: 0 };
      this.pendingInteraction = null;
    };

    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    this.canvas.addEventListener('pointerdown', this.handleCanvasClick);
  }

  destroy() {
    this.isRunning = false;
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    this.canvas.removeEventListener('pointerdown', this.handleCanvasClick);
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      sound.startBGM();
      this.loop();
    }
  }

  loop = () => {
    if (!this.isRunning) return;

    this.update();
    this.render();

    requestAnimationFrame(this.loop);
  };

  update() {
    const p = this.player;

    if (this.shakeTimer > 0) this.shakeTimer--;
    if (p.solarFlareTimer > 0) p.solarFlareTimer--;

    // 1. Di chuyển nhân vật
    const moveLeft = this.keys['KeyA'] || this.keys['ArrowLeft'] || this.mobileControls.left;
    const moveRight = this.keys['KeyD'] || this.keys['ArrowRight'] || this.mobileControls.right;
    const moveUp = this.keys['KeyW'] || this.keys['ArrowUp'] || this.keys['Space'] || this.mobileControls.up;
    const moveDown = this.keys['KeyS'] || this.keys['ArrowDown'] || this.mobileControls.down;

    // Hủy di chuyển theo click nếu người chơi nhấn phím điều hướng
    if (moveLeft || moveRight || moveUp || moveDown) {
      p.targetMoveX = null;
      this.pendingInteraction = null;
    }

    const baseSpeed = p.isSuperSaiyan ? 6.0 : 4.5;

    if (!p.isBeaming && !p.isChargingKi && !p.isSpiritBomb) {
      if (moveLeft) {
        p.vx = -baseSpeed;
        p.facing = -1;
        p.animTick++;
        if (p.animTick % 5 === 0) {
          p.runAnimFrame = (p.runAnimFrame % 5) + 1;
        }
      } else if (moveRight) {
        p.vx = baseSpeed;
        p.facing = 1;
        p.animTick++;
        if (p.animTick % 5 === 0) {
          p.runAnimFrame = (p.runAnimFrame % 5) + 1;
        }
      } else if (p.targetMoveX !== null) {
        // Tự động chạy tới điểm click trên màn hình
        const distToTarget = p.targetMoveX - (p.x + p.width / 2);
        if (Math.abs(distToTarget) > 8) {
          p.vx = Math.sign(distToTarget) * baseSpeed;
          p.facing = p.vx > 0 ? 1 : -1;
          p.animTick++;
          if (p.animTick % 5 === 0) {
            p.runAnimFrame = (p.runAnimFrame % 5) + 1;
          }
        } else {
          p.vx = 0;
          p.targetMoveX = null;
          p.runAnimFrame = 1;

          // Thực hiện hành động đang chờ khi đã chạy tới nơi
          if (this.pendingInteraction) {
            if (this.pendingInteraction.type === 'npc') {
              if (this.onOpenDialog) this.onOpenDialog(this.pendingInteraction.target);
            } else if (this.pendingInteraction.type === 'monster') {
              this.triggerAttack();
            } else if (this.pendingInteraction.type === 'senzu') {
              this.checkInteractions();
            }
            this.pendingInteraction = null;
          }
        }
      } else {
        p.vx *= 0.75;
        p.runAnimFrame = 1;
      }

      // Nhảy và bay
      if (moveUp) {
        if (p.onGround) {
          p.vy = -11.5;
          p.onGround = false;
          sound.playJump();
        } else if (p.ki > 2) {
          p.isFlying = true;
          p.vy = Math.max(p.vy - 0.75, -5.0);
          p.ki = Math.max(0, p.ki - 0.2);
        }
      } else {
        p.isFlying = false;
      }

      if (moveDown && !p.onGround) {
        p.vy += 0.9;
      }
    } else {
      p.vx = 0;
    }

    // Trọng lực
    if (!p.isFlying) {
      p.vy += 0.52;
    } else {
      p.vy += 0.08;
    }

    p.x += p.vx;
    p.y += p.vy;

    p.x = Math.max(30, Math.min(this.currentMap.width - 60, p.x));

    // Va chạm mặt đất
    const groundY = this.currentMap.groundY - p.height;
    if (p.y >= groundY) {
      p.y = groundY;
      p.vy = 0;
      p.onGround = true;
      p.isFlying = false;
    } else {
      p.onGround = false;
    }

    // Va chạm platform
    this.currentMap.platforms.forEach(plat => {
      if (
        p.x + p.width > plat.x &&
        p.x < plat.x + plat.width &&
        p.y + p.height >= plat.y &&
        p.y + p.height <= plat.y + 16 &&
        p.vy >= 0
      ) {
        p.y = plat.y - p.height;
        p.vy = 0;
        p.onGround = true;
        p.isFlying = false;
      }
    });

    // 2. Tụ Ki
    if (p.isChargingKi) {
      p.ssjTimer++;
      if (p.ki < p.maxKi) {
        p.ki = Math.min(p.maxKi, p.ki + 5.5);
      }
      if (Math.random() < 0.7) {
        this.createAuraParticle(p.x + p.width / 2, p.y + p.height);
      }
    }

    // Hồi phục Ki tự nhiên
    if (!p.isFlying && !p.isChargingKi && p.ki < p.maxKi) {
      p.ki = Math.min(p.maxKi, p.ki + 0.2);
    }

    // 3. Logic Kamehameha / Beam
    if (p.isBeaming) {
      p.beamTimer++;
      if (p.beamTimer >= p.beamDuration) {
        p.isBeaming = false;
        p.beamTimer = 0;
      } else if (p.beamTimer === 4) {
        this.shakeTimer = 14;
        this.checkBeamHits();
      }
    }

    // 4. Logic Quả Cầu Kênh Khi (Spirit Bomb)
    if (p.isSpiritBomb) {
      p.spiritBombY += 8;
      if (p.spiritBombY >= this.currentMap.groundY - 50) {
        // Phát nổ chạm đất!
        p.isSpiritBomb = false;
        this.shakeTimer = 25;
        sound.playExplosion();
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });

        // Gây sát thương diện rộng toàn map
        this.monsters.forEach(m => {
          if (!m.isDead) {
            this.damageMonster(m, p.attack * 8, true);
          }
        });
      }
    }

    if (p.attackCooldown > 0) p.attackCooldown--;

    // 5. Cập nhật quái vật
    this.updateMonsters();

    // 6. Cập nhật vật phẩm rơi
    this.updateDroppedItems();

    // 7. Hiệu ứng hạt
    this.updateEffects();

    // 8. Cây đậu thần phát triển
    this.senzuTree.growTimer++;
    if (this.senzuTree.growTimer >= 400) {
      this.senzuTree.growTimer = 0;
      if (this.senzuTree.beansReady < this.senzuTree.maxBeans) {
        this.senzuTree.beansReady++;
      }
    }

    // 9. Camera theo nhân vật
    const vWidth = this.virtualWidth || this.width || 1024;
    const targetCamX = p.x - vWidth / 2;
    this.cameraX += (targetCamX - this.cameraX) * 0.1;
    this.cameraX = Math.max(0, Math.min(this.currentMap.width - vWidth, this.cameraX));

    // Báo cáo state ra HUD
    if (this.onStateUpdate) {
      this.onStateUpdate({ ...this.player, currentMapName: this.currentMap.name });
    }
  }

  // Tấn công cơ bản (Đấm liên hoàn)
  triggerAttack() {
    const p = this.player;
    if (p.attackCooldown > 0 || p.isBeaming || p.isChargingKi) return;

    p.isAttacking = true;
    p.attackCooldown = 12;
    sound.playPunch();

    setTimeout(() => { p.isAttacking = false; }, 160);

    const hitBox = {
      left: p.facing === 1 ? p.x + p.width - 15 : p.x - 75,
      right: p.facing === 1 ? p.x + p.width + 75 : p.x + 15,
      top: p.y - 15,
      bottom: p.y + p.height + 25
    };

    const multiplier = p.isSuperSaiyan ? 2.2 : 1.0;

    this.monsters.forEach(m => {
      if (m.isDead) return;
      const mLeft = m.x - 45;
      const mRight = m.x + 45;
      const mTop = m.y - 85;
      const mBottom = m.y + 15;

      if (
        hitBox.left < mRight &&
        hitBox.right > mLeft &&
        hitBox.top < mBottom &&
        hitBox.bottom > mTop
      ) {
        this.damageMonster(m, p.attack * multiplier, false);
        // Hiệu ứng tia lửa va chạm
        for (let i = 0; i < 4; i++) {
          this.particles.push({
            x: m.x + (Math.random() - 0.5) * 20,
            y: m.y - 35 + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            radius: Math.random() * 3 + 2,
            color: '#facc15',
            life: 14
          });
        }
      }
    });
  }

  // Bắn Kamehameha / Beam
  triggerBeam() {
    const p = this.player;
    if (p.ki < 100 || p.isBeaming || p.attackCooldown > 0) return;

    p.ki -= 100;
    p.isBeaming = true;
    p.beamTimer = 0;
    sound.playBeam();

    for (let i = 0; i < 20; i++) {
      this.createAuraParticle(p.x + (p.facing === 1 ? p.width : 0), p.y + 30);
    }
  }

  // Thái Dương Hạ San (Solar Flare - Stun)
  triggerSolarFlare() {
    const p = this.player;
    if (p.ki < 150) {
      this.floatingTexts.push({ text: 'Cần 150 KI!', x: p.x, y: p.y - 20, color: '#f87171', life: 30 });
      return;
    }
    p.ki -= 150;
    p.solarFlareTimer = 18;
    sound.playSuperSaiyan();

    this.monsters.forEach(m => {
      if (!m.isDead) {
        m.isStunned = true;
        m.stunTimer = 180; // Choáng 3 giây
      }
    });

    this.floatingTexts.push({
      text: 'THÁI DƯƠNG HẠ SAN! TOÀN BỘ QUÁI BỊ CHOÁNG!',
      x: p.x - 40,
      y: p.y - 45,
      color: '#facc15',
      size: 16,
      life: 60
    });
  }

  // Quả Cầu Kênh Khi (Spirit Bomb)
  triggerSpiritBomb() {
    const p = this.player;
    if (p.ki < 300) {
      this.floatingTexts.push({ text: 'Cần 300 KI để gom Kênh Khi!', x: p.x, y: p.y - 20, color: '#f87171', life: 30 });
      return;
    }
    if (p.isSpiritBomb) return;

    p.ki -= 300;
    p.isSpiritBomb = true;
    p.spiritBombX = p.x + (p.facing === 1 ? 150 : -150);
    p.spiritBombY = -150;
    sound.playBeam();

    this.floatingTexts.push({
      text: 'QUẢ CẦU KÊNH KHI RƠI XUỐNG!',
      x: p.x - 30,
      y: p.y - 50,
      color: '#38bdf8',
      size: 18,
      life: 70
    });
  }

  // Biến Hình Super Saiyan
  toggleSuperSaiyan() {
    const p = this.player;
    if (p.power < 5000) {
      this.floatingTexts.push({ text: 'Cần đạt 5,000 Sức Mạnh để mở khóa Super Saiyan!', x: p.x - 50, y: p.y - 20, color: '#f87171', life: 40 });
      return;
    }

    p.isSuperSaiyan = !p.isSuperSaiyan;
    sound.playSuperSaiyan();
    this.shakeTimer = 18;

    if (p.isSuperSaiyan) {
      confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
      this.floatingTexts.push({
        text: '⚡ SUPER SAIYAN BÙNG NỔ! CÔNG X2, CHÍ MẠNG +20% ⚡',
        x: p.x - 80,
        y: p.y - 60,
        color: '#facc15',
        size: 17,
        life: 80
      });
    } else {
      this.floatingTexts.push({
        text: 'Trở về trạng thái bình thường.',
        x: p.x - 20,
        y: p.y - 30,
        color: '#94a3b8',
        size: 14,
        life: 40
      });
    }
  }

  checkBeamHits() {
    const p = this.player;
    const beamLength = 950;
    const beamLeft = p.facing === 1 ? p.x + p.width - 20 : p.x - beamLength;
    const beamRight = p.facing === 1 ? p.x + p.width + beamLength : p.x + 20;
    const beamTop = p.y - 25;
    const beamBottom = p.y + p.height + 25;

    const multiplier = p.isSuperSaiyan ? 5.0 : 3.5;

    this.monsters.forEach(m => {
      if (m.isDead) return;
      const mLeft = m.x - 45;
      const mRight = m.x + 45;
      const mTop = m.y - 85;
      const mBottom = m.y + 15;

      if (
        beamLeft < mRight &&
        beamRight > mLeft &&
        beamTop < mBottom &&
        beamBottom > mTop
      ) {
        this.damageMonster(m, p.attack * multiplier, true);
      }
    });
  }

  damageMonster(m, baseAtk, isBeam) {
    const p = this.player;
    const critBonus = p.isSuperSaiyan ? 20 : 0;
    const isCrit = Math.random() * 100 < (p.crit + critBonus);
    let finalDmg = Math.round(baseAtk * (isCrit ? 1.85 : 1) * (0.9 + Math.random() * 0.25));

    m.hp -= finalDmg;
    m.hitFlash = 6;

    this.floatingTexts.push({
      text: `${isCrit ? 'CRIT! ' : ''}-${finalDmg}`,
      x: m.x + 20,
      y: m.y - 10,
      color: isCrit ? '#f59e0b' : '#ef4444',
      size: isCrit ? 19 : 14,
      life: 42
    });

    if (m.hp <= 0) {
      m.isDead = true;
      m.respawnTimer = 220;
      sound.playExplosion();

      const expGain = (m.exp || 100) * (p.isSuperSaiyan ? 1.5 : 1);
      p.power += Math.round(expGain);
      p.potential += Math.round(expGain);

      this.floatingTexts.push({
        text: `+${Math.round(expGain)} Sức Mạnh`,
        x: m.x + 10,
        y: m.y - 32,
        color: '#10b981',
        size: 15,
        life: 50
      });

      // Rơi vàng
      const dropCount = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < dropCount; i++) {
        this.droppedItems.push({
          type: 'gold',
          amount: Math.round((m.gold || 40) / dropCount),
          x: m.x + 20 + (Math.random() - 0.5) * 35,
          y: m.y + 20,
          vy: -3 - Math.random() * 3,
          vx: (Math.random() - 0.5) * 3,
          life: 450
        });
      }

      // Rơi ngọc xanh
      if (Math.random() < 0.3) {
        this.droppedItems.push({
          type: 'gem',
          amount: Math.floor(Math.random() * 3) + 1,
          x: m.x + 15,
          y: m.y + 15,
          vy: -4,
          vx: (Math.random() - 0.5) * 2,
          life: 450
        });
      }

      // Rơi ĐẬU THẦN
      if (Math.random() < 0.25) {
        this.droppedItems.push({
          type: 'senzu',
          amount: 1,
          x: m.x + 10,
          y: m.y + 10,
          vy: -4,
          vx: (Math.random() - 0.5) * 2,
          life: 450
        });
      }

      // CƠ HỘI RƠI NGỌC RỒNG (1 SAO ĐẾN 7 SAO)
      if (Math.random() < 0.35) {
        const star = Math.floor(Math.random() * 7) + 1;
        this.droppedItems.push({
          type: 'dragonball',
          star: star,
          x: m.x + 25,
          y: m.y + 10,
          vy: -5,
          vx: (Math.random() - 0.5) * 2.5,
          life: 600
        });
      }

      this.checkQuestProgress(m.type);
    }
  }

  updateMonsters() {
    this.monsters.forEach(m => {
      if (m.isDead) {
        m.respawnTimer--;
        if (m.respawnTimer <= 0) {
          m.isDead = false;
          m.hp = m.maxHp;
        }
        return;
      }

      if (m.hitFlash > 0) m.hitFlash--;

      if (m.isStunned) {
        m.stunTimer--;
        if (m.stunTimer <= 0) m.isStunned = false;
        return;
      }

      if (m.type !== 'dummy') {
        m.x += m.vx;
        if (m.x < 100 || m.x > this.currentMap.width - 150) m.vx *= -1;
        if (Math.random() < 0.01) m.vx *= -1;
        m.direction = m.vx >= 0 ? 1 : -1;

        const dist = Math.hypot(m.x - this.player.x, m.y - this.player.y);
        if (dist < 55 && Math.random() < 0.03) {
          const dmg = Math.max(5, m.atk - this.player.defense);
          this.player.hp = Math.max(0, this.player.hp - dmg);
          sound.playPunch();
          this.floatingTexts.push({
            text: `-${dmg}`,
            x: this.player.x + 10,
            y: this.player.y - 15,
            color: '#dc2626',
            size: 15,
            life: 35
          });

          if (this.player.hp <= 0) {
            this.player.hp = this.player.maxHp;
            this.player.ki = this.player.maxKi;
            this.player.x = 300;
            this.player.y = 420;
            this.initMap(0);
            this.floatingTexts.push({
              text: 'HỒI SINH TẠI LÀNG ARU!',
              x: 300,
              y: 350,
              color: '#3b82f6',
              size: 20,
              life: 80
            });
          }
        }
      }
    });
  }

  updateDroppedItems() {
    const p = this.player;
    this.droppedItems = this.droppedItems.filter(item => {
      item.life--;
      item.vy += 0.3;
      item.y += item.vy;
      item.x += item.vx;

      if (item.y >= this.currentMap.groundY - 18) {
        item.y = this.currentMap.groundY - 18;
        item.vy = 0;
        item.vx *= 0.8;
      }

      const dist = Math.hypot(item.x - (p.x + p.width / 2), item.y - (p.y + p.height / 2));
      if (dist < 45) {
        if (item.type === 'gold') {
          p.gold += item.amount;
          sound.playCoin();
          this.floatingTexts.push({ text: `+${item.amount} Vàng`, x: item.x, y: item.y - 15, color: '#facc15', size: 13, life: 30 });
        } else if (item.type === 'gem') {
          p.gem += item.amount;
          sound.playCoin();
          this.floatingTexts.push({ text: `+${item.amount} Ngọc Xanh`, x: item.x, y: item.y - 15, color: '#38bdf8', size: 14, life: 35 });
        } else if (item.type === 'senzu') {
          p.senzuCount = Math.min(20, p.senzuCount + item.amount);
          sound.playHeal();
          this.floatingTexts.push({ text: `+${item.amount} Đậu Thần`, x: item.x, y: item.y - 15, color: '#22c55e', size: 13, life: 30 });
        } else if (item.type === 'dragonball') {
          p.dragonBalls[item.star - 1] = true;
          sound.playHeal();
          confetti({ particleCount: 50, spread: 50 });
          this.floatingTexts.push({
            text: `⭐ NHẬT ĐƯỢC NGỌC RỒNG ${item.star} SAO! ⭐`,
            x: item.x - 30,
            y: item.y - 30,
            color: '#f59e0b',
            size: 16,
            life: 70
          });

          // Kiểm tra xem đã đủ 7 viên chưa
          const hasAll7 = p.dragonBalls.every(Boolean);
          if (hasAll7 && this.onSummonDragon) {
            this.onSummonDragon();
          }
        }
        return false;
      }

      return item.life > 0;
    });
  }

  checkQuestProgress(targetType) {
    const curQuest = QUESTS.find(q => q.id === this.player.questId);
    if (!curQuest) return;

    if (curQuest.targetType === targetType) {
      this.player.questProgress++;
      if (this.player.questProgress >= curQuest.targetCount) {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        sound.playHeal();

        this.player.power += curQuest.rewardPower;
        this.player.potential += curQuest.rewardPotential;
        this.player.gold += curQuest.rewardGold;
        this.player.gem += curQuest.rewardGem;

        this.floatingTexts.push({
          text: `HOÀN THÀNH: ${curQuest.title}!`,
          x: this.player.x - 40,
          y: this.player.y - 60,
          color: '#fbbf24',
          size: 18,
          life: 90
        });

        this.player.questId++;
        this.player.questProgress = 0;
      }
    }
  }

  eatSenzu() {
    const p = this.player;
    if (p.senzuCount <= 0) {
      this.floatingTexts.push({ text: 'Hết đậu thần Karin!', x: p.x - 20, y: p.y - 20, color: '#f87171', size: 14, life: 35 });
      return;
    }

    p.senzuCount--;
    p.hp = p.maxHp;
    p.ki = p.maxKi;
    sound.playHeal();

    this.floatingTexts.push({ text: 'HỒI PHỤC 100% HP & KI!', x: p.x - 20, y: p.y - 30, color: '#4ade80', size: 16, life: 50 });
  }

  toggleChargeKi(active) {
    this.player.isChargingKi = active;
    if (active) sound.playAuraCharge();
  }

  checkInteractions() {
    const p = this.player;

    // Cổng dịch chuyển
    for (const portal of this.currentMap.portals) {
      if (Math.abs(p.x - portal.x) < 60) {
        this.initMap(portal.targetMap);
        p.x = portal.targetX;
        sound.playJump();
        return;
      }
    }

    // Cây đậu thần
    if (this.currentMap.id === 0 && Math.abs(p.x - this.senzuTree.x) < 95) {
      if (this.senzuTree.beansReady > 0) {
        const harvested = this.senzuTree.beansReady;
        p.senzuCount = Math.min(20, p.senzuCount + harvested);
        this.senzuTree.beansReady = 0;
        sound.playHeal();
        this.floatingTexts.push({
          text: `ĐÃ THU HOẠCH ${harvested} ĐẬU THẦN!`,
          x: this.senzuTree.x - 50,
          y: this.senzuTree.y - 120,
          color: '#34d399',
          size: 16,
          life: 60
        });
        this.checkQuestProgress('harvest_senzu');
        return;
      }
    }

    // Rương Đồ
    if (this.currentMap.id === 0 && Math.abs(p.x - this.storageChest.x) < 70) {
      this.floatingTexts.push({
        text: 'RƯƠNG ĐỒ AN TOÀN LÀNG ARU',
        x: this.storageChest.x - 30,
        y: this.storageChest.y - 60,
        color: '#fbbf24',
        size: 15,
        life: 50
      });
      return;
    }

    // NPC
    for (const npc of this.currentMap.npcs) {
      if (Math.abs(p.x - npc.x) < 75) {
        if (this.onOpenDialog) this.onOpenDialog(npc);
        return;
      }
    }
  }

  updateEffects() {
    this.floatingTexts = this.floatingTexts.filter(ft => {
      ft.y -= 0.85;
      ft.life--;
      return ft.life > 0;
    });

    this.particles = this.particles.filter(pt => {
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.life--;
      return pt.life > 0;
    });
  }

  createAuraParticle(x, y) {
    const planet = PLANETS[this.player.planet];
    this.particles.push({
      x: x + (Math.random() - 0.5) * 35,
      y: y + (Math.random() - 0.5) * 20,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -2.5 - Math.random() * 2.5,
      radius: Math.random() * 5 + 2,
      color: this.player.isSuperSaiyan ? '#facc15' : (planet ? planet.primaryColor : '#3b82f6'),
      life: 25
    });
  }

  // ==========================================
  // RENDER WITH REAL SPRITES & AUTHENTIC ASSETS
  // ==========================================
  render() {
    this.updateViewport();
    const ctx = this.ctx;
    const camX = this.cameraX;

    // Tỷ lệ phân giải ảo đồng nhất chuẩn NRO (Virtual Height: 600px)
    ctx.save();
    ctx.scale(this.scale, this.scale);

    // Rung màn hình nếu có chấn động
    const shakeOffsetX = this.shakeTimer > 0 ? (Math.random() - 0.5) * 8 : 0;
    const shakeOffsetY = this.shakeTimer > 0 ? (Math.random() - 0.5) * 8 : 0;

    // ============================================
    // 1. NỀN BẦU TRỜI & THUNG LŨNG (SCREEN SPACE)
    // ============================================
    // Nửa trên: Bầu trời thiên thanh Trái Đất NRO
    const skyGrad = ctx.createLinearGradient(0, 0, 0, 260);
    skyGrad.addColorStop(0, '#19b0f8');
    skyGrad.addColorStop(0.6, '#38bdf8');
    skyGrad.addColorStop(1, '#a5f3fc');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, this.virtualWidth, 260);

    // Nửa dưới (y >= 360): Thung lũng xanh rừng già nguyên thủy
    // Khớp 100% màu đáy rgb(21, 94, 29) của núi tháp NRO
    ctx.fillStyle = '#155e1d';
    ctx.fillRect(0, 360, this.virtualWidth, 240);

    // ============================================
    // 2. PARALLAX NỀN CHUẨN NRO GỐC (SCREEN SPACE)
    // Lặp mượt vô tận không bao giờ bị cắt vuông
    // ============================================
    if (this.currentMap.id === 0) {
      // Layer 1: Sky + Nuixa (Parallax factor 0.1)
      const skyImg = assets.get('bg_sky');
      const nuixaImg = assets.get('bg_nuixa');
      if (skyImg && skyImg.complete && skyImg.naturalWidth > 0) {
        const tw = 258;
        const th = 140;
        const offset = -(camX * 0.1) % tw;
        for (let sx = offset - tw; sx < this.virtualWidth + tw * 2; sx += tw) {
          ctx.drawImage(skyImg, sx, 20, tw, th);
          if (nuixaImg && nuixaImg.complete) {
            ctx.drawImage(nuixaImg, sx, 20, tw, th);
          }
        }
      }

      // Layer 2: Núi trung cảnh (Parallax factor 0.22)
      const nuiImg = assets.get('bg_nui');
      if (nuiImg && nuiImg.complete && nuiImg.naturalWidth > 0) {
        const nw = 510;
        const nh = 160;
        const offset = -(camX * 0.22) % nw;
        for (let sx = offset - nw; sx < this.virtualWidth + nw * 2; sx += nw) {
          ctx.drawImage(nuiImg, sx, 80, nw, nh);
        }
      }

      // Layer 3: Đồi cây xanh tự nhiên (Parallax factor 0.36)
      const nuicayImg = assets.get('bg_nuicay');
      if (nuicayImg && nuicayImg.complete && nuicayImg.naturalWidth > 0) {
        const cw = 336;
        const ch = 146;
        const offset = -(camX * 0.36) % cw;
        for (let sx = offset - cw; sx < this.virtualWidth + cw * 2; sx += cw) {
          ctx.drawImage(nuicayImg, sx, 150, cw, ch);
        }
      }

      // Layer 4: Núi tháp gần chân đồi (Parallax factor 0.48)
      const nuithapImg = assets.get('bg_nuithap');
      if (nuithapImg && nuithapImg.complete && nuithapImg.naturalWidth > 0) {
        const tw = 336;
        const th = 160;
        const offset = -(camX * 0.48) % tw;
        for (let sx = offset - tw; sx < this.virtualWidth + tw * 2; sx += tw) {
          ctx.drawImage(nuithapImg, sx, 220, tw, th);
        }
      }
    }

    // ============================================
    // 3. THẾ GIỚI GAME (WORLD SPACE)
    // ============================================
    ctx.save();
    ctx.translate(-camX + shakeOffsetX, shakeOffsetY);

    const groundY = this.currentMap.groundY || 480;
    const mapW = this.currentMap.width || 2700;

    if (this.currentMap.id === 0) {
      // Sương mù & mây trắng bay lượn huyền ảo
      const khoiImg = assets.get('eff_khoimay');
      if (khoiImg && khoiImg.complete && khoiImg.naturalWidth > 0) {
        const kw = 287;
        const kh = 140;
        const timeOffset = ((Date.now() / 1000) * 25) % kw;
        ctx.save();
        ctx.globalAlpha = 0.45;
        for (let i = 0; i < 5; i++) {
          ctx.drawImage(khoiImg, i * kw - timeOffset, groundY - 140, kw, kh);
        }
        ctx.restore();
      }

      // Layer 5: CẢNH QUAN LÀNG ARU CHUẨN NRO GỐC (Nhà Cửa & Đại Thụ)
      // Nhà Ông Gôhan (x = 100)
      const gohanHouse = assets.get('nhacua_gohan');
      if (gohanHouse && gohanHouse.complete && gohanHouse.naturalWidth > 0) {
        const hw = 246;
        const hh = 224;
        ctx.drawImage(gohanHouse, 100, groundY - hh + 6, hw, hh);
      }

      // Lửa trại nướng đùi gà ở làng (x = 760)
      const cuiImg = assets.get('deco_cui');
      if (cuiImg && cuiImg.complete && cuiImg.naturalWidth > 0) {
        ctx.drawImage(cuiImg, 760, groundY - 48, 66, 48);
        const luaIdx = (Math.floor(Date.now() / 120) % 4) + 1;
        const luaImg = assets.get(`eff_lua_${luaIdx}`);
        if (luaImg && luaImg.complete && luaImg.naturalWidth > 0) {
          ctx.drawImage(luaImg, 781, groundY - 38, 24, 41);
        }
      }

      // Cây đại thụ 1 (x = 1120)
      const tree1 = assets.get('caycoi_1');
      if (tree1 && tree1.complete && tree1.naturalWidth > 0) {
        ctx.drawImage(tree1, 1120, groundY - 234 + 6, 230, 234);
      }

      // Nhà Làng Aru mái rơm (x = 1520)
      const villageHouse = assets.get('nhacua_lang');
      if (villageHouse && villageHouse.complete && villageHouse.naturalWidth > 0) {
        const hw = 246;
        const hh = 224;
        ctx.drawImage(villageHouse, 1520, groundY - hh + 6, hw, hh);
      }

      // Cây cổ thụ 2 (x = 2160)
      const tree2 = assets.get('caycoi_2');
      if (tree2 && tree2.complete && tree2.naturalWidth > 0) {
        ctx.drawImage(tree2, 2160, groundY - 192 + 10, 184, 192);
      }

      // Tia sáng thiên thần rọi xuống làng
      const lightImg = assets.get('eff_light');
      if (lightImg && lightImg.complete && lightImg.naturalWidth > 0) {
        ctx.save();
        ctx.globalAlpha = 0.22;
        ctx.drawImage(lightImg, 220, 180, 480, 360);
        ctx.drawImage(lightImg, 1120, 180, 480, 360);
        ctx.drawImage(lightImg, 1920, 180, 480, 360);
        ctx.restore();
      }
    } else {
      this.renderMountains();
    }

    // ĐỊA HÌNH MẶT ĐẤT TILES CHUẨN NRO GỐC
    this.renderTileGround(ctx, mapW, groundY);
    this.renderGrassTufts(ctx, mapW, groundY);

    // 2. Mây trôi
    this.clouds.forEach(c => {
      this.drawCloud(c.x, c.y, c.scale);
    });

    // 3. Platforms tự nhiên
    this.renderPlatforms();

    // 4. Cổng Dịch Chuyển
    this.renderPortals();

    // 5. Cây Đậu Thần Karin & Rương Đồ
    if (this.currentMap.id === 0) {
      this.renderRealSenzuTree();
      this.renderStorageChest();
    }

    // 6. NPC
    this.renderNPCs();

    // 7. Quái vật & Mộc Nhân
    this.renderMonsters();

    // 8. Vật phẩm rơi
    this.renderDroppedItems();

    // 9. Quả Cầu Kênh Khi (Spirit Bomb)
    if (this.player.isSpiritBomb) {
      this.renderSpiritBomb();
    }

    // 10. Chưởng Kamehameha
    if (this.player.isBeaming) {
      this.renderBeam();
    }

    // 11. NHÂN VẬT THẬT (GOKU / VEGETA / PICCOLO)
    this.renderRealPlayer();

    // 12. Hiệu ứng Click di chuyển / Click NPC (Chuẩn NRO)
    if (this.player.clickMarker) {
      const cm = this.player.clickMarker;
      cm.tick++;
      if (cm.tick % 3 === 0) {
        cm.frame++;
      }
      if (cm.frame < 4) {
        const prefix = cm.type === 'npc' ? 'click_npc' : 'click_move';
        const cImg = assets.get(`${prefix}_${cm.frame + 1}`);
        if (cImg && cImg.complete && cImg.naturalWidth > 0) {
          const cw = cImg.naturalWidth * 0.7;
          const ch = cImg.naturalHeight * 0.7;
          ctx.drawImage(cImg, cm.x - cw / 2, cm.y - ch / 2, cw, ch);
        }
      } else {
        this.player.clickMarker = null;
      }
    }

    // 13. Particles & Text nổi
    this.renderParticles();
    this.renderFloatingTexts();

    // 14. Hiệu ứng lóa sáng Thái Dương Hạ San
    if (this.player.solarFlareTimer > 0) {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.player.solarFlareTimer / 20})`;
      ctx.fillRect(camX, 0, this.virtualWidth, 600);
    }

    ctx.restore(); // Dịch chuyển camera thế giới
    ctx.restore(); // Tỷ lệ phân giải ảo
  }

  renderMountains() {
    const ctx = this.ctx;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.45)';
    ctx.beginPath();
    ctx.moveTo(0, this.height);
    for (let x = 0; x <= this.currentMap.width; x += 150) {
      const peakY = 220 + Math.sin(x * 0.008) * 80 + Math.cos(x * 0.015) * 40;
      ctx.lineTo(x, peakY);
    }
    ctx.lineTo(this.currentMap.width, this.height);
    ctx.fill();
  }

  drawCloud(x, y, scale) {
    const ctx = this.ctx;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.beginPath();
    ctx.arc(x, y, 22 * scale, 0, Math.PI * 2);
    ctx.arc(x + 25 * scale, y - 8 * scale, 28 * scale, 0, Math.PI * 2);
    ctx.arc(x + 55 * scale, y, 22 * scale, 0, Math.PI * 2);
    ctx.fill();
  }

  renderPlatforms() {
    const ctx = this.ctx;
    this.currentMap.platforms.forEach(plat => {
      ctx.save();
      // Bóng đổ mờ dưới platform
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(plat.x + 4, plat.y + plat.height, plat.width - 8, 4);

      const tile = assets.get('matdat_1');
      if (tile && tile.complete && tile.naturalWidth > 0) {
        // Vẽ platform bằng gạch đất tự nhiên từ NRO
        const stepW = 40;
        for (let x = plat.x; x < plat.x + plat.width; x += stepW) {
          const w = Math.min(stepW, plat.x + plat.width - x);
          ctx.drawImage(tile, 0, 0, w, 24, x, plat.y, w, plat.height);
        }
      } else {
        const grad = ctx.createLinearGradient(plat.x, plat.y, plat.x, plat.y + plat.height);
        grad.addColorStop(0, '#4d7c0f');
        grad.addColorStop(0.3, '#78350f');
        grad.addColorStop(1, '#451a03');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(plat.x, plat.y, plat.width, plat.height, 3);
        ctx.fill();
      }
      ctx.restore();
    });
  }

  renderEnvironment() {
    const ctx = this.ctx;
    const gY = this.currentMap.groundY;
    this.renderTileGround(ctx, this.currentMap.width, gY);
    this.renderGrassTufts(ctx, this.currentMap.width, gY);
  }

  // ĐỊA HÌNH MẶT ĐẤT TILES CHUẨN NRO GỐC
  renderTileGround(ctx, mapW, groundY) {
    const tileW = 50;
    const tileH = 50;
    const numCols = Math.ceil(mapW / tileW) + 1;

    // Row 0: Mặt đất có cỏ xanh (matdat_traidat1..5)
    for (let c = 0; c < numCols; c++) {
      const idx = (c % 5) + 1;
      const tile = assets.get(`matdat_${idx}`);
      if (tile && tile.complete && tile.naturalWidth > 0) {
        ctx.drawImage(tile, c * tileW, groundY, tileW, tileH);
      } else {
        ctx.fillStyle = '#16a34a';
        ctx.fillRect(c * tileW, groundY, tileW, 6);
        ctx.fillStyle = '#5c3a21';
        ctx.fillRect(c * tileW, groundY + 6, tileW, tileH - 6);
      }
    }

    // Row 1: Tầng đất thịt (dat_traidat1..3)
    for (let c = 0; c < numCols; c++) {
      const idx = (c % 3) + 1;
      const tile = assets.get(`dat_${idx}`);
      if (tile && tile.complete && tile.naturalWidth > 0) {
        ctx.drawImage(tile, c * tileW, groundY + tileH, tileW, tileH);
      } else {
        ctx.fillStyle = '#3d2514';
        ctx.fillRect(c * tileW, groundY + tileH, tileW, tileH);
      }
    }

    // Row 2+: Tầng lòng đất đá sâu (longdat_traidat1..3) phủ kín xuống đáy màn hình
    const maxBottom = Math.max(this.currentMap.height || 600, 800);
    for (let y = groundY + tileH * 2; y < maxBottom + 120; y += tileH) {
      for (let c = 0; c < numCols; c++) {
        const idx = ((c + Math.floor(y / tileH)) % 3) + 1;
        const tile = assets.get(`longdat_${idx}`);
        if (tile && tile.complete && tile.naturalWidth > 0) {
          ctx.drawImage(tile, c * tileW, y, tileW, tileH);
        } else {
          ctx.fillStyle = '#24140a';
          ctx.fillRect(c * tileW, y, tileW, tileH);
        }
      }
    }
  }

  // BỤI CỎ TỰ NHIÊN DỌC ĐƯỜNG ĐI
  renderGrassTufts(ctx, mapW, groundY) {
    const grasses = [1, 3, 4, 5];
    for (let x = 40; x < mapW; x += 160) {
      const gIdx = grasses[(Math.floor(x / 160)) % grasses.length];
      const gImg = assets.get(`cayco_${gIdx}`);
      if (gImg && gImg.complete && gImg.naturalWidth > 0) {
        const gw = gImg.naturalWidth * 0.75;
        const gh = gImg.naturalHeight * 0.75;
        ctx.drawImage(gImg, x, groundY - gh + 4, gw, gh);
      }
    }
  }

  renderPortals() {
    const ctx = this.ctx;
    const time = performance.now() * 0.004;

    this.currentMap.portals.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y + 20);
      ctx.rotate(time);
      const portalGrad = ctx.createRadialGradient(0, 0, 5, 0, 0, 48);
      portalGrad.addColorStop(0, '#ffffff');
      portalGrad.addColorStop(0.5, '#3b82f6');
      portalGrad.addColorStop(1, 'rgba(147, 51, 234, 0)');
      ctx.fillStyle = portalGrad;
      ctx.beginPath();
      ctx.arc(0, 0, 48, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(p.label, p.x, p.y - 35);
    });
  }

  // CÂY ĐẬU THẦN KARIN THẬT
  renderRealSenzuTree() {
    const ctx = this.ctx;
    const tree = this.senzuTree;
    const stage = Math.min(10, Math.max(1, tree.beansReady));
    const treeImg = assets.get(`caydau_${stage}`);

    let treeH = 140;
    if (treeImg && treeImg.complete && treeImg.naturalWidth > 0) {
      const s = 0.52;
      const w = treeImg.naturalWidth * s;
      const h = treeImg.naturalHeight * s;
      treeH = h;
      ctx.drawImage(treeImg, tree.x - w / 2, tree.y - h, w, h);
    }

    ctx.fillStyle = '#bbf7d0';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`Cây Đậu Thần Karin (${tree.beansReady}/${tree.maxBeans})`, tree.x, tree.y - treeH - 24);
    ctx.font = 'bold 10px monospace';
    ctx.fillStyle = '#facc15';
    ctx.fillText('🌱 [E: Hái Đậu]', tree.x, tree.y - treeH - 8);
  }

  // RƯƠNG ĐỒ LÀNG ARU
  renderStorageChest() {
    const ctx = this.ctx;
    const chest = this.storageChest;
    const chestImg = assets.get('ruong_do');

    if (chestImg && chestImg.complete && chestImg.naturalWidth > 0) {
      const s = 0.5;
      const cw = chestImg.naturalWidth * s;
      const ch = chestImg.naturalHeight * s;
      ctx.drawImage(chestImg, chest.x - cw / 2, chest.y - ch, cw, ch);
    } else {
      ctx.fillStyle = '#854d0e';
      ctx.fillRect(chest.x - 24, chest.y - 34, 48, 34);
    }

    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Rương Đồ [E]', chest.x, chest.y - 42);
  }

  renderNPCs() {
    const ctx = this.ctx;
    const time = Date.now() / 250;
    const breath = Math.sin(time) * 1.5;

    this.currentMap.npcs.forEach(npc => {
      ctx.save();
      ctx.translate(npc.x, npc.y);

      if (npc.type === 'gohan') {
        // Ông Gôhan với Sprite thật
        const ghDau = assets.get('gohan_head');
        const ghThan = assets.get('gohan_body');
        const ghChan = assets.get('gohan_leg');

        if (ghDau && ghThan && ghChan && ghDau.complete && ghThan.complete && ghChan.complete) {
          const s = 0.52;
          const cw = ghChan.naturalWidth * s;
          const ch = ghChan.naturalHeight * s;
          const bw = ghThan.naturalWidth * s;
          const bh = ghThan.naturalHeight * s;
          const hw = ghDau.naturalWidth * s;
          const hh = ghDau.naturalHeight * s;

          const legY = -ch;
          const bodyY = legY + 8 * s - bh + breath;
          const headY = bodyY + 12 * s - hh + breath;

          ctx.drawImage(ghChan, -cw / 2, legY, cw, ch);
          ctx.drawImage(ghDau, -hw / 2, headY, hw, hh);
          ctx.drawImage(ghThan, -bw / 2, bodyY, bw, bh);
        }
      } else if (npc.type === 'thay_hieu' || npc.type === 'kame') {
        // Thầy Hiếu / Võ sư Kame với Sprite thật
        const thDau = assets.get('thay_hieu_dau');
        const thThan = assets.get('thay_hieu_than');
        const thChan = assets.get('thay_hieu_chan');

        if (thDau && thThan && thChan && thDau.complete && thThan.complete && thChan.complete) {
          const s = 0.52;
          const cw = thChan.naturalWidth * s;
          const ch = thChan.naturalHeight * s;
          const bw = thThan.naturalWidth * s;
          const bh = thThan.naturalHeight * s;
          const hw = thDau.naturalWidth * s;
          const hh = thDau.naturalHeight * s;

          const legY = -ch;
          const bodyY = legY + 8 * s - bh + breath;
          const headY = bodyY + 10 * s - hh + breath;

          ctx.drawImage(thChan, -cw / 2, legY, cw, ch);
          ctx.drawImage(thDau, -hw / 2, headY, hw, hh);
          ctx.drawImage(thThan, -bw / 2, bodyY, bw, bh);
        } else {
          this.drawMasterRoshi(ctx);
        }
      } else if (npc.type === 'huykhoi') {
        // Admin Huy Khôi với Sprite thật
        const hkDau = assets.get('huykhoi_dau');
        const hkThan = assets.get('huykhoi_than');
        const hkChan = assets.get('huykhoi_chan');

        if (hkDau && hkThan && hkChan && hkDau.complete && hkThan.complete && hkChan.complete) {
          const s = 0.52;
          const cw = hkChan.naturalWidth * s;
          const ch = hkChan.naturalHeight * s;
          const bw = hkThan.naturalWidth * s;
          const bh = hkThan.naturalHeight * s;
          const hw = hkDau.naturalWidth * s;
          const hh = hkDau.naturalHeight * s;

          const legY = -ch;
          const bodyY = legY + 8 * s - bh + breath;
          const headY = bodyY + 10 * s - hh + breath;

          ctx.drawImage(hkChan, -cw / 2, legY, cw, ch);
          ctx.drawImage(hkDau, -hw / 2, headY, hw, hh);
          ctx.drawImage(hkThan, -bw / 2, bodyY, bw, bh);
        }
      } else if (npc.type === 'karin') {
        // Mèo Thần Karin với Sprite Pet thật từ NRO
        const petIdx = (Math.floor(Date.now() / 300) % 2) + 1;
        const petImg = assets.get(`karin_pet_${petIdx}`) || assets.get('karin_pet_1');

        if (petImg && petImg.complete && petImg.naturalWidth > 0) {
          const s = 0.55;
          const pw = petImg.naturalWidth * s;
          const ph = petImg.naturalHeight * s;
          ctx.drawImage(petImg, -pw / 2, -ph + breath * 0.8, pw, ph);
        } else {
          this.drawMasterKarin(ctx);
        }
      } else if (npc.type === 'hatmit') {
        this.drawBaba(ctx);
      } else {
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(-12, -45, 24, 45);
      }

      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(npc.name, 0, -74);

      ctx.fillStyle = '#38bdf8';
      ctx.font = '10px monospace';
      ctx.fillText('💬 [E]', 0, -88);

      ctx.restore();
    });
  }

  drawMasterRoshi(ctx) {
    // Mai rùa tím trên lưng
    ctx.fillStyle = '#7c3aed';
    ctx.beginPath();
    ctx.ellipse(-14, -30, 10, 18, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Thân áo cam Kame
    ctx.fillStyle = '#ea580c';
    ctx.fillRect(-12, -34, 24, 24);
    ctx.fillStyle = '#18181b';
    ctx.fillRect(-12, -22, 24, 4);

    // Quần trắng
    ctx.fillStyle = '#f4f4f5';
    ctx.fillRect(-10, -10, 20, 10);

    // Đầu hói da hồng
    ctx.fillStyle = '#fed7aa';
    ctx.beginPath();
    ctx.arc(0, -42, 12, 0, Math.PI * 2);
    ctx.fill();

    // Kính râm đen gọng đỏ
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(-9, -46, 18, 6);
    ctx.fillStyle = '#09090b';
    ctx.fillRect(-8, -45, 7, 4);
    ctx.fillRect(1, -45, 7, 4);

    // Râu ria mép trắng dài
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(-9, -38);
    ctx.lineTo(0, -26);
    ctx.lineTo(9, -38);
    ctx.closePath();
    ctx.fill();

    // Gậy gỗ cầm tay
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(14, -50);
    ctx.lineTo(14, 0);
    ctx.stroke();
  }

  drawMasterKarin(ctx) {
    // Thần Mèo Karin trắng
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    ctx.ellipse(0, -18, 12, 16, 0, 0, Math.PI * 2);
    ctx.fill();

    // Đầu mèo
    ctx.beginPath();
    ctx.arc(0, -38, 13, 0, Math.PI * 2);
    ctx.fill();

    // Tai mèo
    ctx.fillStyle = '#f472b6';
    ctx.beginPath();
    ctx.moveTo(-10, -48);
    ctx.lineTo(-4, -56);
    ctx.lineTo(0, -48);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(0, -48);
    ctx.lineTo(4, -56);
    ctx.lineTo(10, -48);
    ctx.fill();

    // Mắt híp cười ^ ^
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(-5, -39, 3, Math.PI, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(5, -39, 3, Math.PI, 0);
    ctx.stroke();

    // Mũi hồng và râu
    ctx.fillStyle = '#f43f5e';
    ctx.beginPath();
    ctx.arc(0, -35, 1.8, 0, Math.PI * 2);
    ctx.fill();

    // Gậy thần mèo
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(12, -45);
    ctx.lineTo(12, 0);
    ctx.stroke();
  }

  drawBaba(ctx) {
    // Quả cầu pha lê phát sáng
    const ballGrad = ctx.createRadialGradient(-3, -18, 2, 0, -16, 16);
    ballGrad.addColorStop(0, '#e0e7ff');
    ballGrad.addColorStop(0.5, '#818cf8');
    ballGrad.addColorStop(1, '#312e81');
    ctx.fillStyle = ballGrad;
    ctx.beginPath();
    ctx.arc(0, -16, 16, 0, Math.PI * 2);
    ctx.fill();

    // Bà Hạt Mít ngồi trên quả cầu
    ctx.fillStyle = '#581c87';
    ctx.fillRect(-10, -36, 20, 20);

    // Khuôn mặt
    ctx.fillStyle = '#fed7aa';
    ctx.beginPath();
    ctx.arc(0, -42, 8, 0, Math.PI * 2);
    ctx.fill();

    // Nón phù thủy
    ctx.fillStyle = '#1e1b4b';
    ctx.beginPath();
    ctx.moveTo(-16, -46);
    ctx.lineTo(0, -62);
    ctx.lineTo(16, -46);
    ctx.closePath();
    ctx.fill();
  }

  renderMonsters() {
    const ctx = this.ctx;

    this.monsters.forEach(m => {
      if (m.isDead) return;

      ctx.save();
      ctx.translate(m.x, m.y);

      if (m.hitFlash > 0) ctx.filter = 'brightness(2.2)';
      if (m.isStunned) ctx.filter = 'hue-rotate(90deg) brightness(1.2)';

      if (m.type === 'dummy') {
        // MỘC NHÂN TẬP VÕ CHUẨN NRO
        this.drawTrainingDummy(ctx, m);
      } else if (m.type === 'boss_dino') {
        // Khủng Long Mẹ to lớn
        ctx.fillStyle = '#991b1b';
        ctx.fillRect(-30, -55, 60, 55);
        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.arc(m.direction === 1 ? 25 : -25, -55, 20, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = '#047857';
        ctx.fillRect(-20, -45, 40, 45);
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(m.direction === 1 ? 16 : -16, -45, 14, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.filter = 'none';

      // Thanh máu
      const barWidth = 48;
      const hpPercent = Math.max(0, m.hp / m.maxHp);
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(-barWidth / 2, -72, barWidth, 6);
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(-barWidth / 2 + 1, -71, (barWidth - 2) * hpPercent, 4);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(m.name, 0, -78);

      if (m.isStunned) {
        ctx.fillStyle = '#facc15';
        ctx.fillText('💫 CHOÁNG', 0, -90);
      }

      ctx.restore();
    });
  }

  drawTrainingDummy(ctx, m) {
    const isHit = m.hitFlash > 0;
    const wobble = isHit ? Math.sin(Date.now() / 35) * 0.16 : 0;
    const isGiant = m.maxHp > 500;
    const s = isGiant ? 1.3 : 1.0;

    ctx.save();
    ctx.scale(s, s);
    ctx.rotate(wobble);

    // Trụ gỗ chính
    const woodGrad = ctx.createLinearGradient(-13, 0, 13, 0);
    woodGrad.addColorStop(0, '#78350f');
    woodGrad.addColorStop(0.35, '#b45309');
    woodGrad.addColorStop(0.7, '#d97706');
    woodGrad.addColorStop(1, '#78350f');
    ctx.fillStyle = woodGrad;
    ctx.beginPath();
    ctx.roundRect(-12, -62, 24, 62, [4, 4, 1, 1]);
    ctx.fill();
    ctx.strokeStyle = '#451a03';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Cánh tay gỗ ngang chìa sang 2 bên
    const armGrad = ctx.createLinearGradient(-30, 0, 30, 0);
    armGrad.addColorStop(0, '#92400e');
    armGrad.addColorStop(0.5, '#d97706');
    armGrad.addColorStop(1, '#92400e');
    ctx.fillStyle = armGrad;
    ctx.beginPath();
    ctx.roundRect(-28, -42, 56, 10, 3);
    ctx.fill();
    ctx.stroke();

    // Dải băng vải trắng quấn quanh thân
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(-12, -28, 24, 5);
    ctx.fillRect(-12, -16, 24, 5);
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(-12, -24, 24, 1);
    ctx.fillRect(-12, -12, 24, 1);

    // Đầu gỗ tròn trên đỉnh
    ctx.fillStyle = woodGrad;
    ctx.beginPath();
    ctx.arc(0, -66, 13, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Băng đô đỏ buộc đầu
    ctx.fillStyle = '#dc2626';
    ctx.fillRect(-13, -71, 26, 5);
    // Dải ruy băng bay
    ctx.beginPath();
    ctx.moveTo(13, -69);
    ctx.lineTo(24, -64);
    ctx.lineTo(22, -74);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  // VẼ NHÂN VẬT THẬT VỚI SPRITES GỐC NRO
  renderRealPlayer() {
    const ctx = this.ctx;
    const p = this.player;

    const baseCenterX = p.x + p.width / 2;
    const baseGroundY = p.y + p.height;

    ctx.save();
    ctx.translate(baseCenterX, baseGroundY);
    ctx.scale(p.facing, 1);

    // 1. Hào quang Super Saiyan / Tụ Ki vàng rực bao quanh
    if (p.isSuperSaiyan || p.isChargingKi) {
      const pulse = Math.sin(p.ssjTimer * 0.3) * 6 + 38;
      const auraGrad = ctx.createRadialGradient(0, -32, 6, 0, -32, pulse);
      if (p.isSuperSaiyan) {
        auraGrad.addColorStop(0, 'rgba(254, 240, 138, 0.85)');
        auraGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.7)');
        auraGrad.addColorStop(1, 'rgba(234, 179, 8, 0)');
      } else {
        const planet = PLANETS[p.planet] || PLANETS[0];
        auraGrad.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        auraGrad.addColorStop(0.5, (planet.primaryColor || '#3b82f6') + 'aa');
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }
      ctx.fillStyle = auraGrad;
      ctx.beginPath();
      ctx.arc(0, -32, pulse, 0, Math.PI * 2);
      ctx.fill();

      // Tia chớp điện giật Super Saiyan
      if (Math.random() < 0.5) {
        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        const startRad = Math.random() * Math.PI * 2;
        const r1 = 18;
        const r2 = 36;
        ctx.moveTo(Math.cos(startRad) * r1, -32 + Math.sin(startRad) * r1);
        ctx.lineTo(Math.cos(startRad + 0.3) * (r1 + r2) / 2, -32 + Math.sin(startRad + 0.3) * (r1 + r2) / 2);
        ctx.lineTo(Math.cos(startRad) * r2, -32 + Math.sin(startRad) * r2);
        ctx.stroke();
      }
    }

    // 2. Xác định Sprite Head / Body / Leg dựa theo hành động
    const isMoving = Math.abs(p.vx) > 0.5;
    let headImg = null;
    let bodyImg = null;
    let legImg = null;

    if (p.planet === 2) {
      // Xayda (Vegeta / Cađíc)
      headImg = isMoving ? assets.get('vegeta_head_run') : assets.get('vegeta_head_idle');
      bodyImg = assets.get('xayda_body_idle') || assets.get('body_idle');
      legImg = assets.get('xayda_leg_idle') || assets.get('leg_idle');
    } else if (p.planet === 1) {
      // Namếc (Piccolo)
      headImg = isMoving ? assets.get('namek_head_run') : assets.get('namek_head_idle');
      bodyImg = assets.get('namek_body_idle') || assets.get('body_idle');
      legImg = assets.get('namek_leg_idle') || assets.get('leg_idle');
    } else {
      // Trái Đất (Goku)
      headImg = isMoving ? assets.get('goku_head_run') : assets.get('goku_head_idle');

      // Thân (Body)
      if (p.isBeaming) {
        bodyImg = assets.get('body_beam');
      } else if (p.isChargingKi) {
        bodyImg = assets.get('body_charge');
      } else if (p.isAttacking) {
        bodyImg = assets.get('body_beam') || assets.get('body_guard');
      } else if (!p.onGround) {
        bodyImg = p.vy < 0 ? assets.get('body_jump') : assets.get('body_fall');
      } else if (isMoving) {
        bodyImg = assets.get(`body_run_${p.runAnimFrame}`);
      } else {
        bodyImg = assets.get('body_idle');
      }

      // Chân (Leg)
      if (p.isFlying) {
        legImg = assets.get('leg_fly');
      } else if (p.isChargingKi) {
        legImg = assets.get('leg_charge');
      } else if (!p.onGround) {
        legImg = p.vy < 0 ? assets.get('leg_jump') : assets.get('leg_fall');
      } else if (isMoving) {
        legImg = assets.get(`leg_run_${p.runAnimFrame}`);
      } else {
        legImg = assets.get('leg_idle');
      }
    }

    // Bảo hiểm an toàn 100% không bao giờ tàng hình thân hoặc chân
    if (!headImg) headImg = assets.get('goku_head_idle');
    if (!bodyImg) bodyImg = assets.get('body_idle');
    if (!legImg) legImg = assets.get('leg_idle');

    // 3. Tỷ lệ ghép Sprite chính xác NRO
    const scale = 0.55;

    const cw = legImg && legImg.naturalWidth ? legImg.naturalWidth * scale : 38;
    const ch = legImg && legImg.naturalHeight ? legImg.naturalHeight * scale : 26;

    const bw = bodyImg && bodyImg.naturalWidth ? bodyImg.naturalWidth * scale : 40;
    const bh = bodyImg && bodyImg.naturalHeight ? bodyImg.naturalHeight * scale : 26;

    const hw = headImg && headImg.naturalWidth ? headImg.naturalWidth * scale : 52;
    const hh = headImg && headImg.naturalHeight ? headImg.naturalHeight * scale : 44;

    // Tọa độ tương đối từ gót chân (y = 0)
    const legX = -cw / 2;
    const legY = -ch;

    const bodyX = -bw / 2;
    const bodyY = legY + 10 - bh;

    const headOverlap = p.planet === 2 ? 18 : 16;
    const headX = -hw / 2;
    const headY = bodyY + headOverlap - hh;

    // HIỆU ỨNG SUPER SAIYAN TÓC VÀNG CHO TRÁI ĐẤT
    if (p.isSuperSaiyan && p.planet === 0) {
      ctx.filter = 'sepia(0.85) hue-rotate(-12deg) saturate(3.5) brightness(1.15)';
    }

    // VẼ THEO THỨ TỰ: 1. Chân -> 2. Đầu -> 3. Thân (Thân vẽ đè cổ che khớp)
    if (legImg && legImg.complete && legImg.naturalWidth > 0) {
      ctx.drawImage(legImg, legX, legY, cw, ch);
    }
    if (headImg && headImg.complete && headImg.naturalWidth > 0) {
      ctx.drawImage(headImg, headX, headY, hw, hh);
    }
    if (bodyImg && bodyImg.complete && bodyImg.naturalWidth > 0) {
      ctx.drawImage(bodyImg, bodyX, bodyY, bw, bh);
    }

    ctx.filter = 'none';
    ctx.restore();

    // 4. Tên & Danh hiệu trên đầu
    ctx.fillStyle = p.isSuperSaiyan ? '#facc15' : '#ffffff';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${p.name} ${p.isSuperSaiyan ? '⚡ [SSJ]' : ''}`, p.x + p.width / 2, p.y - 18);

    // 5. Thanh máu nhỏ trên đầu
    const hpPct = Math.max(0, p.hp / p.maxHp);
    const barW = 44;
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(p.x + p.width / 2 - barW / 2 - 1, p.y - 12, barW + 2, 5);
    ctx.fillStyle = p.isSuperSaiyan ? '#f59e0b' : '#ef4444';
    ctx.fillRect(p.x + p.width / 2 - barW / 2, p.y - 11, barW * hpPct, 3);
  }

  // CHƯỞNG KAMEHAMEHA PHÁT SÁNG
  renderBeam() {
    const ctx = this.ctx;
    const p = this.player;
    const beamLength = 950;
    const beamStartX = p.facing === 1 ? p.x + p.width : p.x;
    const beamY = p.y + 28;

    ctx.save();
    const beamGrad = ctx.createLinearGradient(0, beamY - 25, 0, beamY + 25);
    beamGrad.addColorStop(0, p.isSuperSaiyan ? '#fef08a' : '#38bdf8');
    beamGrad.addColorStop(0.5, '#ffffff');
    beamGrad.addColorStop(1, p.isSuperSaiyan ? '#eab308' : '#0284c7');

    ctx.fillStyle = beamGrad;
    ctx.shadowColor = p.isSuperSaiyan ? '#facc15' : '#38bdf8';
    ctx.shadowBlur = 30;

    if (p.facing === 1) {
      ctx.fillRect(beamStartX, beamY - 22, beamLength, 44);
    } else {
      ctx.fillRect(beamStartX - beamLength, beamY - 22, beamLength, 44);
    }
    ctx.restore();
  }

  // QUẢ CẦU KÊNH KHI
  renderSpiritBomb() {
    const ctx = this.ctx;
    const p = this.player;

    ctx.save();
    const sbGrad = ctx.createRadialGradient(p.spiritBombX, p.spiritBombY, 5, p.spiritBombX, p.spiritBombY, p.spiritBombRadius);
    sbGrad.addColorStop(0, '#ffffff');
    sbGrad.addColorStop(0.4, '#38bdf8');
    sbGrad.addColorStop(0.8, '#0284c7');
    sbGrad.addColorStop(1, 'rgba(2, 132, 199, 0)');

    ctx.fillStyle = sbGrad;
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 40;
    ctx.beginPath();
    ctx.arc(p.spiritBombX, p.spiritBombY, p.spiritBombRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // VẼ VẬT PHẨM RƠI (VÀNG, NGỌC RỒNG, ĐẬU)
  renderDroppedItems() {
    const ctx = this.ctx;
    this.droppedItems.forEach(item => {
      ctx.save();
      ctx.translate(item.x, item.y);

      if (item.type === 'dragonball') {
        const nrImg = assets.get(`nr_${item.star}s`);
        if (nrImg && nrImg.complete && nrImg.naturalWidth > 0) {
          ctx.drawImage(nrImg, -14, -14, 28, 28);
        } else {
          ctx.fillStyle = '#f59e0b';
          ctx.beginPath();
          ctx.arc(0, 0, 12, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (item.type === 'gold') {
        const goldImg = assets.get('hud_gold');
        if (goldImg && goldImg.complete && goldImg.naturalWidth > 0) {
          ctx.drawImage(goldImg, -10, -10, 20, 20);
        } else {
          ctx.fillStyle = '#eab308';
          ctx.beginPath();
          ctx.arc(0, 0, 8, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if (item.type === 'gem') {
        const gemImg = assets.get('hud_gem');
        if (gemImg && gemImg.complete && gemImg.naturalWidth > 0) {
          ctx.drawImage(gemImg, -10, -10, 20, 20);
        }
      } else if (item.type === 'senzu') {
        const senzuImg = assets.get('hud_senzu');
        if (senzuImg && senzuImg.complete && senzuImg.naturalWidth > 0) {
          ctx.drawImage(senzuImg, -10, -10, 20, 20);
        }
      }

      ctx.restore();
    });
  }

  renderParticles() {
    const ctx = this.ctx;
    this.particles.forEach(pt => {
      ctx.fillStyle = pt.color;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  renderFloatingTexts() {
    const ctx = this.ctx;
    this.floatingTexts.forEach(ft => {
      ctx.fillStyle = ft.color;
      ctx.font = `bold ${ft.size || 14}px monospace`;
      ctx.textAlign = 'center';
      ctx.shadowColor = '#000000';
      ctx.shadowBlur = 4;
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.shadowBlur = 0;
    });
  }
}
