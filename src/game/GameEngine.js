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
      x: 320,
      y: 460,
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
    }

    // Quái vật & Vật phẩm rơi
    this.currentMap = MAPS[0];
    this.monsters = [];
    this.floatingTexts = [];
    this.droppedItems = [];
    this.particles = [];

    // Cây Đậu Thần Karin (1 -> 10 hạt)
    this.senzuTree = {
      x: 1620,
      y: 520,
      beansReady: 6,
      maxBeans: 10,
      growTimer: 0
    };

    // Rương Đồ Làng Aru
    this.storageChest = {
      x: 580,
      y: 520
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

    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  destroy() {
    this.isRunning = false;
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
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
    const targetCamX = p.x - this.width / 2;
    this.cameraX += (targetCamX - this.cameraX) * 0.1;
    this.cameraX = Math.max(0, Math.min(this.currentMap.width - this.width, this.cameraX));

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

    setTimeout(() => { p.isAttacking = false; }, 140);

    const hitBox = {
      x: p.facing === 1 ? p.x + p.width : p.x - 55,
      y: p.y + 10,
      width: 55,
      height: 48
    };

    const multiplier = p.isSuperSaiyan ? 2.2 : 1.0;

    this.monsters.forEach(m => {
      if (m.isDead) return;
      if (
        hitBox.x < m.x + 55 &&
        hitBox.x + hitBox.width > m.x &&
        hitBox.y < m.y + 65 &&
        hitBox.y + hitBox.height > m.y
      ) {
        this.damageMonster(m, p.attack * multiplier, false);
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
    const beamY = p.y + 15;
    const beamHeight = 50;

    const beamBox = {
      x: p.facing === 1 ? p.x + p.width : p.x - beamLength,
      y: beamY,
      width: beamLength,
      height: beamHeight
    };

    const multiplier = p.isSuperSaiyan ? 5.0 : 3.5;

    this.monsters.forEach(m => {
      if (m.isDead) return;
      if (
        beamBox.x < m.x + 55 &&
        beamBox.x + beamBox.width > m.x &&
        beamBox.y < m.y + 65 &&
        beamBox.y + beamBox.height > m.y
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
    const ctx = this.ctx;
    const camX = this.cameraX;

    // Rung màn hình nếu có chấn động
    const shakeOffsetX = this.shakeTimer > 0 ? (Math.random() - 0.5) * 8 : 0;
    const shakeOffsetY = this.shakeTimer > 0 ? (Math.random() - 0.5) * 8 : 0;

    // Bầu trời nền cơ bản (màu xanh thiên thanh Trái Đất NRO)
    const skyGrad = ctx.createLinearGradient(0, 0, 0, this.height);
    skyGrad.addColorStop(0, '#19b0f8');
    skyGrad.addColorStop(0.5, '#38bdf8');
    skyGrad.addColorStop(1, '#bae6fd');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.save();
    ctx.translate(-camX + shakeOffsetX, shakeOffsetY);

    // ============================================
    // 1. PARALLAX NỀN CHUẨN NGỌC RỒNG ONLINE GỐC
    // ============================================
    if (this.currentMap.id === 0) {
      // Layer 1: Sky + Nuixa (Parallax factor 0.15)
      const skyImg = assets.get('bg_sky');
      const nuixaImg = assets.get('bg_nuixa');
      if (skyImg && skyImg.complete && skyImg.naturalWidth > 0) {
        const tw = 258;
        const th = 120;
        const startX = Math.floor((camX * 0.15) / tw) * tw;
        for (let x = startX - tw; x < startX + this.width + tw * 2; x += tw) {
          ctx.drawImage(skyImg, x - camX * 0.15, 60, tw, th);
          if (nuixaImg && nuixaImg.complete) {
            ctx.drawImage(nuixaImg, x - camX * 0.15, 60, tw, th);
          }
        }
      }

      // Layer 2: Núi trung cảnh (Parallax factor 0.3)
      const nuiImg = assets.get('bg_nui');
      if (nuiImg && nuiImg.complete && nuiImg.naturalWidth > 0) {
        const nw = 510;
        const nh = 154;
        const startX = Math.floor((camX * 0.3) / nw) * nw;
        for (let x = startX - nw; x < startX + this.width + nw * 2; x += nw) {
          ctx.drawImage(nuiImg, x - camX * 0.3, 140, nw, nh);
        }
      }

      // Layer 3: Đồi cây & Núi tháp (Parallax factor 0.5)
      const nuicayImg = assets.get('bg_nuicay');
      const nuithapImg = assets.get('bg_nuithap');
      if (nuicayImg && nuicayImg.complete && nuicayImg.naturalWidth > 0) {
        const cw = 336;
        const ch = 146;
        const startX = Math.floor((camX * 0.5) / cw) * cw;
        for (let x = startX - cw; x < startX + this.width + cw * 2; x += cw) {
          ctx.drawImage(nuicayImg, x - camX * 0.5, 230, cw, ch);
          if (nuithapImg && nuithapImg.complete) {
            ctx.drawImage(nuithapImg, x - camX * 0.5 + 160, 240, cw, ch);
          }
        }
      }

      // Layer 4: BẢN ĐỒ CHÍNH LÀNG ARU (maparu.png)
      const mapImg = assets.get('map_aru');
      if (mapImg && mapImg.complete && mapImg.naturalWidth > 0) {
        // Tỷ lệ chuẩn 0.5: 2544 x 1008 px
        const mw = 2544;
        const mh = 1008;
        // Điểm đặt chân (ground) trong maparu là ở y=795px tính từ đỉnh ảnh
        const mapY = this.currentMap.groundY - 795;
        ctx.drawImage(mapImg, 0, mapY, mw, mh);

        // Lấp khoảng dưới đáy ảnh nếu màn hình quá cao
        const bottomY = mapY + mh;
        if (this.height > bottomY) {
          ctx.fillStyle = '#ddaa6b';
          ctx.fillRect(0, bottomY, this.currentMap.width, this.height - bottomY + 200);
        }

        // Tia sáng thiên thần rọi xuống làng
        const lightImg = assets.get('eff_light');
        if (lightImg && lightImg.complete) {
          ctx.save();
          ctx.globalAlpha = 0.28;
          ctx.drawImage(lightImg, 150, mapY + 280, 500, 420);
          ctx.drawImage(lightImg, 950, mapY + 280, 500, 420);
          ctx.drawImage(lightImg, 1750, mapY + 280, 500, 420);
          ctx.restore();
        }

        // Lửa trại nướng đùi gà ở làng
        const cuiImg = assets.get('deco_cui');
        if (cuiImg && cuiImg.complete) {
          ctx.drawImage(cuiImg, 260, this.currentMap.groundY - 24, 48, 34);
          const luaIdx = (Math.floor(Date.now() / 120) % 4) + 1;
          const luaImg = assets.get(`eff_lua_${luaIdx}`);
          if (luaImg && luaImg.complete) {
            ctx.drawImage(luaImg, 280, this.currentMap.groundY - 38, 24, 28);
          }
        }
      } else {
        this.renderMountains();
      }
    } else {
      this.renderMountains();
      this.renderEnvironment();
    }

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

    // 12. FOREGROUND TỰ NHIÊN: Cành cây, tán lá trước mặt (maparusau.png)
    if (this.currentMap.id === 0) {
      const mapSau = assets.get('map_aru_sau');
      if (mapSau && mapSau.complete && mapSau.naturalWidth > 0) {
        const mw = 2544;
        const mh = 1008;
        const mapY = this.currentMap.groundY - 795;
        ctx.drawImage(mapSau, 0, mapY, mw, mh);
      }
    }

    // 13. Particles & Text nổi
    this.renderParticles();
    this.renderFloatingTexts();

    // 14. Hiệu ứng lóa sáng Thái Dương Hạ San
    if (this.player.solarFlareTimer > 0) {
      ctx.fillStyle = `rgba(255, 255, 255, ${this.player.solarFlareTimer / 20})`;
      ctx.fillRect(camX, 0, this.width, this.height);
    }

    ctx.restore();
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
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.fillRect(plat.x + 3, plat.y + 3, plat.width, plat.height);

      const grad = ctx.createLinearGradient(plat.x, plat.y, plat.x, plat.y + plat.height);
      grad.addColorStop(0, '#854d0e');
      grad.addColorStop(1, '#502a06');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(plat.x, plat.y, plat.width, plat.height, 4);
      ctx.fill();

      ctx.fillStyle = '#4d7c0f';
      ctx.beginPath();
      ctx.roundRect(plat.x, plat.y, plat.width, 3, [3, 3, 0, 0]);
      ctx.fill();
      ctx.restore();
    });
  }

  renderEnvironment() {
    const ctx = this.ctx;
    const gY = this.currentMap.groundY;

    ctx.fillStyle = '#16a34a';
    ctx.fillRect(0, gY, this.currentMap.width, 10);

    ctx.fillStyle = '#78350f';
    ctx.fillRect(0, gY + 10, this.currentMap.width, this.height - gY);
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

    if (treeImg && treeImg.complete && treeImg.naturalWidth > 0) {
      const w = 120;
      const h = (treeImg.height / treeImg.width) * w;
      ctx.drawImage(treeImg, tree.x - w / 2, tree.y - h, w, h);
    }

    ctx.fillStyle = '#bbf7d0';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`Cây Đậu Thần Karin (${tree.beansReady}/${tree.maxBeans})`, tree.x, tree.y - 142);
    ctx.font = 'bold 10px monospace';
    ctx.fillStyle = '#facc15';
    ctx.fillText('🌱 [E: Hái Đậu]', tree.x, tree.y - 124);
  }

  // RƯƠNG ĐỒ LÀNG ARU
  renderStorageChest() {
    const ctx = this.ctx;
    const chest = this.storageChest;
    const chestImg = assets.get('ruong_do');

    if (chestImg && chestImg.complete && chestImg.naturalWidth > 0) {
      ctx.drawImage(chestImg, chest.x - 28, chest.y - 48, 56, 48);
    } else {
      ctx.fillStyle = '#854d0e';
      ctx.fillRect(chest.x - 22, chest.y - 36, 44, 36);
    }

    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('Rương Đồ [E]', chest.x, chest.y - 54);
  }

  renderNPCs() {
    const ctx = this.ctx;

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
          const bodyY = legY + 8 * s - bh;
          const headY = bodyY + 12 * s - hh;

          ctx.drawImage(ghChan, -cw / 2, legY, cw, ch);
          ctx.drawImage(ghDau, -hw / 2, headY, hw, hh);
          ctx.drawImage(ghThan, -bw / 2, bodyY, bw, bh);
        }
      } else if (npc.type === 'kame') {
        this.drawMasterRoshi(ctx);
      } else if (npc.type === 'karin') {
        this.drawMasterKarin(ctx);
      } else if (npc.type === 'hatmit') {
        this.drawBaba(ctx);
      } else {
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(-12, -45, 24, 45);
      }

      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(npc.name, 0, -68);

      ctx.fillStyle = '#38bdf8';
      ctx.font = '10px monospace';
      ctx.fillText('💬 [E]', 0, -82);

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
    const shake = m.hitFlash > 0 ? (Math.random() - 0.5) * 6 : 0;
    ctx.translate(shake, 0);

    // Trụ gỗ chính cắm xuống đất
    const woodGrad = ctx.createLinearGradient(-11, 0, 11, 0);
    woodGrad.addColorStop(0, '#92400e');
    woodGrad.addColorStop(0.5, '#b45309');
    woodGrad.addColorStop(1, '#78350f');
    ctx.fillStyle = woodGrad;
    ctx.fillRect(-11, -52, 22, 52);

    // Cánh tay gỗ chìa sang 2 bên
    ctx.fillStyle = '#d97706';
    ctx.fillRect(-26, -36, 52, 8);
    ctx.fillStyle = '#78350f';
    ctx.strokeRect(-26, -36, 52, 8);

    // Đầu gỗ tròn trên đỉnh
    ctx.fillStyle = '#b45309';
    ctx.beginPath();
    ctx.arc(0, -56, 12, 0, Math.PI * 2);
    ctx.fill();

    // Dải băng vải quấn quanh thân
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(-11, -26, 22, 5);
    ctx.fillRect(-11, -16, 22, 5);

    // Băng đô trắng buộc đầu
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(-12, -60, 24, 4);
    // Dải ruy băng bay
    ctx.beginPath();
    ctx.moveTo(10, -58);
    ctx.lineTo(20, -54);
    ctx.lineTo(18, -62);
    ctx.closePath();
    ctx.fill();
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
    } else if (p.planet === 1) {
      // Namếc (Piccolo)
      headImg = isMoving ? assets.get('namek_head_run') : assets.get('namek_head_idle');
    } else {
      // Trái Đất (Goku)
      headImg = isMoving ? assets.get('goku_head_run') : assets.get('goku_head_idle');
    }

    // Thân (Body)
    if (p.isBeaming) {
      bodyImg = assets.get('body_beam');
    } else if (p.isChargingKi) {
      bodyImg = assets.get('body_charge');
    } else if (p.isAttacking) {
      bodyImg = assets.get('body_guard');
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

    // 3. Tỷ lệ ghép Sprite chính xác NRO
    const scale = 0.58;

    const cw = legImg && legImg.naturalWidth ? legImg.naturalWidth * scale : 40;
    const ch = legImg && legImg.naturalHeight ? legImg.naturalHeight * scale : 28;

    const bw = bodyImg && bodyImg.naturalWidth ? bodyImg.naturalWidth * scale : 42;
    const bh = bodyImg && bodyImg.naturalHeight ? bodyImg.naturalHeight * scale : 28;

    const hw = headImg && headImg.naturalWidth ? headImg.naturalWidth * scale : 54;
    const hh = headImg && headImg.naturalHeight ? headImg.naturalHeight * scale : 46;

    // Tọa độ tương đối từ gót chân (y = 0)
    const legX = -cw / 2;
    const legY = -ch;

    const bodyX = -bw / 2;
    const bodyY = legY + 12 - bh;

    const headX = -hw / 2;
    const headY = bodyY + 18 - hh;

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
