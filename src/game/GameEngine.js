import { MAPS, PLANETS, QUESTS } from './constants';
import { sound } from './audio';
import confetti from 'canvas-confetti';

export class GameEngine {
  constructor(canvas, onStateUpdate, onOpenDialog) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.onStateUpdate = onStateUpdate;
    this.onOpenDialog = onOpenDialog;

    // Kích thước canvas
    this.width = canvas.width;
    this.height = canvas.height;

    // Trạng thái Camera
    this.cameraX = 0;
    this.cameraY = 0;

    // Phím bấm
    this.keys = {};
    this.mobileControls = { left: false, right: false, up: false, down: false };

    // Dữ liệu người chơi
    this.player = {
      name: 'SonGoku',
      planet: 0,
      x: 320,
      y: 420,
      vx: 0,
      vy: 0,
      width: 44,
      height: 58,
      facing: 1, // 1: phải, -1: trái
      onGround: false,
      isFlying: false,
      isChargingKi: false,
      isAttacking: false,
      attackCooldown: 0,
      attackCombo: 1,
      isBeaming: false,
      beamTimer: 0,
      beamDuration: 25,
      auraTimer: 0,
      
      // Chỉ số
      hp: 1200,
      maxHp: 1200,
      ki: 1000,
      maxKi: 1000,
      attack: 55,
      defense: 12,
      crit: 5,
      power: 2000,
      potential: 2000,
      gold: 1500,
      gem: 20,
      senzuCount: 10,
      senzuLevel: 1,
      
      // Bản đồ & Nhiệm vụ
      mapId: 0,
      questId: 1,
      questProgress: 0,
      inventory: []
    };

    // Quái vật & Vật phẩm rơi
    this.currentMap = MAPS[0];
    this.monsters = [];
    this.floatingTexts = [];
    this.droppedItems = [];
    this.particles = [];

    // Cây Đậu Thần Karin
    this.senzuTree = {
      x: 1300,
      y: 480,
      beansReady: 5,
      maxBeans: 10,
      growTimer: 0
    };

    // Đám mây trôi
    this.clouds = [
      { x: 100, y: 80, speed: 0.3, scale: 1.2 },
      { x: 600, y: 120, speed: 0.2, scale: 0.9 },
      { x: 1200, y: 60, speed: 0.4, scale: 1.5 },
      { x: 1800, y: 100, speed: 0.25, scale: 1.1 }
    ];

    this.isRunning = false;
    this.lastTime = performance.now();
    this.initMap(0);
    this.bindEvents();
  }

  // Khởi tạo bản đồ
  initMap(mapId) {
    const map = MAPS.find(m => m.id === mapId) || MAPS[0];
    this.currentMap = map;
    this.player.mapId = mapId;

    // Reset quái vật của bản đồ
    this.monsters = map.monsters.map(m => ({
      ...m,
      maxHp: m.maxHp,
      hp: m.maxHp,
      vx: (Math.random() - 0.5) * 1.5,
      direction: 1,
      isDead: false,
      respawnTimer: 0,
      hitFlash: 0
    }));

    this.droppedItems = [];
    this.particles = [];
  }

  // Lắng nghe sự kiện bàn phím
  bindEvents() {
    this.handleKeyDown = (e) => {
      this.keys[e.code] = true;
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }

      // Phím tắt hành động
      if (e.code === 'KeyJ') this.triggerAttack();
      if (e.code === 'KeyK') this.triggerBeam();
      if (e.code === 'KeyL') this.toggleChargeKi(true);
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

  // Vòng lặp trò chơi 60 FPS
  loop = () => {
    if (!this.isRunning) return;

    this.update();
    this.render();

    requestAnimationFrame(this.loop);
  };

  // Cập nhật logic game
  update() {
    const p = this.player;

    // 1. Điều khiển di chuyển
    const moveLeft = this.keys['KeyA'] || this.keys['ArrowLeft'] || this.mobileControls.left;
    const moveRight = this.keys['KeyD'] || this.keys['ArrowRight'] || this.mobileControls.right;
    const moveUp = this.keys['KeyW'] || this.keys['ArrowUp'] || this.keys['Space'] || this.mobileControls.up;
    const moveDown = this.keys['KeyS'] || this.keys['ArrowDown'] || this.mobileControls.down;

    const speed = 4.2;

    if (!p.isBeaming && !p.isChargingKi) {
      if (moveLeft) {
        p.vx = -speed;
        p.facing = -1;
      } else if (moveRight) {
        p.vx = speed;
        p.facing = 1;
      } else {
        p.vx *= 0.75;
      }

      // Nhảy hoặc bay
      if (moveUp) {
        if (p.onGround) {
          p.vy = -10.5;
          p.onGround = false;
          sound.playJump();
        } else if (p.ki > 2) {
          // Bay lượn tốn một chút KI
          p.isFlying = true;
          p.vy = Math.max(p.vy - 0.7, -4.5);
          p.ki = Math.max(0, p.ki - 0.25);
        }
      } else {
        p.isFlying = false;
      }

      if (moveDown && !p.onGround) {
        p.vy += 0.8;
      }
    } else {
      p.vx = 0;
    }

    // Trọng lực
    if (!p.isFlying) {
      p.vy += 0.5;
    } else {
      p.vy += 0.1;
    }

    // Cập nhật vị trí
    p.x += p.vx;
    p.y += p.vy;

    // Giới hạn biên bản đồ
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

    // Va chạm với các platform lơ lửng
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

    // 2. Tụ Ki / Gồng năng lượng (Phím L)
    if (p.isChargingKi) {
      p.auraTimer++;
      if (p.ki < p.maxKi) {
        p.ki = Math.min(p.maxKi, p.ki + 4.5);
      }
      // Tạo particle hào quang
      if (Math.random() < 0.6) {
        this.createAuraParticle(p.x + p.width / 2, p.y + p.height);
      }
    }

    // Hồi phục KI tự nhiên
    if (!p.isFlying && !p.isChargingKi && p.ki < p.maxKi) {
      p.ki = Math.min(p.maxKi, p.ki + 0.15);
    }

    // 3. Logic Chưởng Kamehameha / Beams
    if (p.isBeaming) {
      p.beamTimer++;
      if (p.beamTimer >= p.beamDuration) {
        p.isBeaming = false;
        p.beamTimer = 0;
      } else if (p.beamTimer === 4) {
        this.checkBeamHits();
      }
    }

    if (p.attackCooldown > 0) p.attackCooldown--;

    // 4. Cập nhật Quái vật (Mobs)
    this.updateMonsters();

    // 5. Cập nhật Vật phẩm rơi & Nhặt tiền
    this.updateDroppedItems();

    // 6. Cập nhật Text bay & Particles
    this.updateEffects();

    // 7. Cây Đậu Thần Karin sinh trưởng
    this.senzuTree.growTimer++;
    if (this.senzuTree.growTimer >= 600) { // Mỗi ~10s ra 1 hạt
      this.senzuTree.growTimer = 0;
      if (this.senzuTree.beansReady < this.senzuTree.maxBeans) {
        this.senzuTree.beansReady++;
      }
    }

    // 8. Đám mây trôi
    this.clouds.forEach(c => {
      c.x += c.speed;
      if (c.x > this.currentMap.width + 100) c.x = -150;
    });

    // 9. Camera mượt theo người chơi
    const targetCamX = p.x - this.width / 2;
    this.cameraX += (targetCamX - this.cameraX) * 0.1;
    this.cameraX = Math.max(0, Math.min(this.currentMap.width - this.width, this.cameraX));

    // Báo cáo state ra React HUD
    if (this.onStateUpdate) {
      this.onStateUpdate({ ...this.player, currentMapName: this.currentMap.name });
    }
  }

  // Tấn công cơ bản (Đấm combo)
  triggerAttack() {
    const p = this.player;
    if (p.attackCooldown > 0 || p.isBeaming || p.isChargingKi) return;

    p.isAttacking = true;
    p.attackCooldown = 14;
    sound.playPunch();

    setTimeout(() => { p.isAttacking = false; }, 150);

    // Hitbox đấm
    const hitBox = {
      x: p.facing === 1 ? p.x + p.width : p.x - 45,
      y: p.y + 10,
      width: 45,
      height: 40
    };

    // Kiểm tra trúng quái
    this.monsters.forEach(m => {
      if (m.isDead) return;
      if (
        hitBox.x < m.x + 50 &&
        hitBox.x + hitBox.width > m.x &&
        hitBox.y < m.y + 60 &&
        hitBox.y + hitBox.height > m.y
      ) {
        this.damageMonster(m, p.attack, false);
      }
    });
  }

  // Bắn chưởng (Kamehameha / Masenko / Galick Gun)
  triggerBeam() {
    const p = this.player;
    if (p.ki < 100 || p.isBeaming || p.attackCooldown > 0) return;

    p.ki -= 100;
    p.isBeaming = true;
    p.beamTimer = 0;
    sound.playBeam();

    // Tạo particle rung chấn
    for (let i = 0; i < 15; i++) {
      this.createAuraParticle(p.x + (p.facing === 1 ? p.width : 0), p.y + 25);
    }
  }

  // Kiểm tra va chạm luồng chưởng
  checkBeamHits() {
    const p = this.player;
    const beamLength = 800;
    const beamY = p.y + 15;
    const beamHeight = 45;

    const beamBox = {
      x: p.facing === 1 ? p.x + p.width : p.x - beamLength,
      y: beamY,
      width: beamLength,
      height: beamHeight
    };

    this.monsters.forEach(m => {
      if (m.isDead) return;
      if (
        beamBox.x < m.x + 50 &&
        beamBox.x + beamBox.width > m.x &&
        beamBox.y < m.y + 60 &&
        beamBox.y + beamBox.height > m.y
      ) {
        // Sát thương chưởng x3.5 sát thương cơ bản
        this.damageMonster(m, p.attack * 3.5, true);
      }
    });
  }

  // Gây sát thương lên quái
  damageMonster(m, baseAtk, isBeam) {
    const p = this.player;
    const isCrit = Math.random() * 100 < p.crit;
    let finalDmg = Math.round(baseAtk * (isCrit ? 1.8 : 1) * (0.9 + Math.random() * 0.2));

    m.hp -= finalDmg;
    m.hitFlash = 6;

    // Hiển thị số sát thương nhảy lên
    this.floatingTexts.push({
      text: `${isCrit ? 'CRIT! ' : ''}-${finalDmg}`,
      x: m.x + 20,
      y: m.y - 10,
      color: isCrit ? '#f59e0b' : '#ef4444',
      size: isCrit ? 18 : 14,
      life: 40
    });

    if (m.hp <= 0) {
      m.isDead = true;
      m.respawnTimer = 220; // Hồi sinh sau ~3.5 giây
      sound.playExplosion();

      // Thưởng tiềm năng và sức mạnh
      const expGain = m.exp || 100;
      p.power += expGain;
      p.potential += expGain;

      this.floatingTexts.push({
        text: `+${expGain} Sức Mạnh`,
        x: m.x + 10,
        y: m.y - 30,
        color: '#10b981',
        size: 15,
        life: 50
      });

      // Rơi vàng
      const dropCount = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < dropCount; i++) {
        this.droppedItems.push({
          type: 'gold',
          amount: Math.round((m.gold || 30) / dropCount),
          x: m.x + 20 + (Math.random() - 0.5) * 30,
          y: m.y + 20,
          vy: -3 - Math.random() * 3,
          vx: (Math.random() - 0.5) * 3,
          life: 400
        });
      }

      // Cơ hội rơi đậu thần
      if (Math.random() < 0.25) {
        this.droppedItems.push({
          type: 'senzu',
          amount: 1,
          x: m.x + 10,
          y: m.y + 10,
          vy: -4,
          vx: (Math.random() - 0.5) * 2,
          life: 400
        });
      }

      // Kiểm tra tiến trình nhiệm vụ
      this.checkQuestProgress(m.type);
    }
  }

  // Cập nhật quái vật
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

      // AI Quái di chuyển tuần tra
      if (m.type !== 'dummy') {
        m.x += m.vx;
        if (m.x < 100 || m.x > this.currentMap.width - 150) {
          m.vx *= -1;
        }
        if (Math.random() < 0.01) {
          m.vx *= -1;
        }
        m.direction = m.vx >= 0 ? 1 : -1;

        // Quái tấn công người chơi nếu đứng quá gần
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

          // Hồi sinh nếu chết
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

  // Kiểm tra tiến trình nhiệm vụ
  checkQuestProgress(targetType) {
    const curQuest = QUESTS.find(q => q.id === this.player.questId);
    if (!curQuest) return;

    if (curQuest.targetType === targetType) {
      this.player.questProgress++;
      if (this.player.questProgress >= curQuest.targetCount) {
        // Hoàn thành nhiệm vụ!
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
        sound.playHeal();

        this.player.power += curQuest.rewardPower;
        this.player.potential += curQuest.rewardPotential;
        this.player.gold += curQuest.rewardGold;
        this.player.gem += curQuest.rewardGem;

        this.floatingTexts.push({
          text: `HOÀN THÀNH NHIỆM VỤ: ${curQuest.title}!`,
          x: this.player.x - 50,
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

  // Cập nhật nhặt vật phẩm rơi
  updateDroppedItems() {
    const p = this.player;
    this.droppedItems = this.droppedItems.filter(item => {
      item.life--;
      item.vy += 0.3;
      item.y += item.vy;
      item.x += item.vx;

      if (item.y >= this.currentMap.groundY - 15) {
        item.y = this.currentMap.groundY - 15;
        item.vy = 0;
        item.vx *= 0.8;
      }

      // Người chơi nhặt vật phẩm khi đi qua
      const dist = Math.hypot(item.x - (p.x + p.width / 2), item.y - (p.y + p.height / 2));
      if (dist < 40) {
        if (item.type === 'gold') {
          p.gold += item.amount;
          sound.playCoin();
          this.floatingTexts.push({
            text: `+${item.amount} Vàng`,
            x: item.x,
            y: item.y - 15,
            color: '#facc15',
            size: 13,
            life: 30
          });
        } else if (item.type === 'senzu') {
          p.senzuCount = Math.min(20, p.senzuCount + item.amount);
          sound.playHeal();
          this.floatingTexts.push({
            text: `+${item.amount} Đậu Thần`,
            x: item.x,
            y: item.y - 15,
            color: '#22c55e',
            size: 13,
            life: 30
          });
        }
        return false;
      }

      return item.life > 0;
    });
  }

  // Ăn Đậu thần Karin phục hồi sinh lực
  eatSenzu() {
    const p = this.player;
    if (p.senzuCount <= 0) {
      this.floatingTexts.push({
        text: 'Hết đậu thần! Hãy thu hoạch tại Làng Aru.',
        x: p.x - 40,
        y: p.y - 20,
        color: '#f87171',
        size: 14,
        life: 40
      });
      return;
    }

    p.senzuCount--;
    p.hp = p.maxHp;
    p.ki = p.maxKi;
    sound.playHeal();

    this.floatingTexts.push({
      text: 'HỒI PHỤC 100% HP & KI!',
      x: p.x - 20,
      y: p.y - 30,
      color: '#4ade80',
      size: 16,
      life: 50
    });
  }

  // Tụ Ki
  toggleChargeKi(active) {
    this.player.isChargingKi = active;
    if (active) sound.playAuraCharge();
  }

  // Kiểm tra tương tác với NPC hoặc Cổng dịch chuyển
  checkInteractions() {
    const p = this.player;

    // 1. Kiểm tra Cổng dịch chuyển
    for (const portal of this.currentMap.portals) {
      if (Math.abs(p.x - portal.x) < 55) {
        this.initMap(portal.targetMap);
        p.x = portal.targetX;
        sound.playJump();
        return;
      }
    }

    // 2. Kiểm tra Cây Đậu Thần Karin
    if (this.currentMap.id === 0 && Math.abs(p.x - this.senzuTree.x) < 90) {
      if (this.senzuTree.beansReady > 0) {
        const harvested = this.senzuTree.beansReady;
        p.senzuCount = Math.min(20, p.senzuCount + harvested);
        this.senzuTree.beansReady = 0;
        sound.playHeal();
        this.floatingTexts.push({
          text: `ĐÃ THU HOẠCH ${harvested} ĐẬU THẦN KARIN!`,
          x: this.senzuTree.x - 60,
          y: this.senzuTree.y - 120,
          color: '#34d399',
          size: 16,
          life: 60
        });
        this.checkQuestProgress('harvest_senzu');
        return;
      }
    }

    // 3. Kiểm tra NPC
    for (const npc of this.currentMap.npcs) {
      if (Math.abs(p.x - npc.x) < 70) {
        if (this.onOpenDialog) {
          this.onOpenDialog(npc);
        }
        return;
      }
    }
  }

  // Cập nhật hiệu ứng chữ nổi & particles
  updateEffects() {
    this.floatingTexts = this.floatingTexts.filter(ft => {
      ft.y -= 0.8;
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
      x: x + (Math.random() - 0.5) * 30,
      y: y + (Math.random() - 0.5) * 20,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -2 - Math.random() * 2,
      radius: Math.random() * 4 + 2,
      color: planet ? planet.primaryColor : '#3b82f6',
      life: 25
    });
  }

  // ==========================================
  // RENDER GRAPHICS & CANVAS
  // ==========================================
  render() {
    const ctx = this.ctx;
    const camX = this.cameraX;

    // 1. Vẽ bầu trời nền
    const grad = ctx.createLinearGradient(0, 0, 0, this.height);
    grad.addColorStop(0, this.currentMap.bgGradient[0]);
    grad.addColorStop(0.5, this.currentMap.bgGradient[1]);
    grad.addColorStop(1, this.currentMap.bgGradient[2]);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.save();
    ctx.translate(-camX, 0);

    // 2. Vẽ dãy núi Parallax đằng xa
    this.renderMountains();

    // 3. Đám mây
    this.clouds.forEach(c => {
      this.drawCloud(c.x, c.y, c.scale);
    });

    // 4. Vẽ nền đất & Platform
    this.renderEnvironment();

    // 5. Cổng dịch chuyển (Portal)
    this.renderPortals();

    // 6. Cây Đậu Thần Karin
    if (this.currentMap.id === 0) {
      this.renderSenzuTree();
    }

    // 7. Vẽ NPC
    this.renderNPCs();

    // 8. Vẽ Quái vật
    this.renderMonsters();

    // 9. Vật phẩm rơi
    this.renderDroppedItems();

    // 10. Luồng chưởng Kamehameha / Beams
    if (this.player.isBeaming) {
      this.renderBeam();
    }

    // 11. Vẽ Nhân vật chính
    this.renderPlayer();

    // 12. Particles & Floating Texts
    this.renderParticles();
    this.renderFloatingTexts();

    ctx.restore();
  }

  // Dãy núi phong cách Dragon Ball
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

  // Mặt đất & Các bậc nhảy
  renderEnvironment() {
    const ctx = this.ctx;
    const gY = this.currentMap.groundY;

    // Mặt đất cỏ xanh
    ctx.fillStyle = '#16a34a';
    ctx.fillRect(0, gY, this.currentMap.width, 14);

    // Lớp đất nâu bên dưới
    ctx.fillStyle = '#78350f';
    ctx.fillRect(0, gY + 14, this.currentMap.width, this.height - gY);

    // Các bậc đá lơ lửng
    this.currentMap.platforms.forEach(plat => {
      ctx.fillStyle = '#22c55e';
      ctx.fillRect(plat.x, plat.y, plat.width, 5);
      ctx.fillStyle = '#854d0e';
      ctx.fillRect(plat.x, plat.y + 5, plat.width, plat.height - 5);
    });
  }

  // Cổng không gian dịch chuyển
  renderPortals() {
    const ctx = this.ctx;
    const time = performance.now() * 0.004;

    this.currentMap.portals.forEach(p => {
      // Vòng tròn hào quang xoay
      ctx.save();
      ctx.translate(p.x, p.y + 20);
      ctx.rotate(time);
      const portalGrad = ctx.createRadialGradient(0, 0, 5, 0, 0, 45);
      portalGrad.addColorStop(0, '#ffffff');
      portalGrad.addColorStop(0.5, '#3b82f6');
      portalGrad.addColorStop(1, 'rgba(147, 51, 234, 0)');
      ctx.fillStyle = portalGrad;
      ctx.beginPath();
      ctx.arc(0, 0, 45, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Nhãn cổng
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(p.label, p.x, p.y - 35);
    });
  }

  // Cây Đậu Thần Karin
  renderSenzuTree() {
    const ctx = this.ctx;
    const tree = this.senzuTree;

    // Thân cây cổ thụ
    ctx.fillStyle = '#713f12';
    ctx.fillRect(tree.x - 16, tree.y - 100, 32, 100);

    // Tán lá xanh um tùm
    ctx.fillStyle = '#15803d';
    ctx.beginPath();
    ctx.arc(tree.x, tree.y - 120, 55, 0, Math.PI * 2);
    ctx.arc(tree.x - 35, tree.y - 100, 40, 0, Math.PI * 2);
    ctx.arc(tree.x + 35, tree.y - 100, 40, 0, Math.PI * 2);
    ctx.fill();

    // Hạt đậu thần phát sáng trên cây
    for (let i = 0; i < tree.beansReady; i++) {
      const angle = (i / Math.max(1, tree.maxBeans)) * Math.PI * 1.5 - Math.PI * 0.75;
      const bx = tree.x + Math.cos(angle) * 35;
      const by = tree.y - 110 + Math.sin(angle) * 25;

      ctx.fillStyle = '#4ade80';
      ctx.beginPath();
      ctx.arc(bx, by, 7, 0, Math.PI * 2);
      ctx.fill();
    }

    // Nhãn cây
    ctx.fillStyle = '#bbf7d0';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`Cây Đậu Karin (${tree.beansReady}/${tree.maxBeans})`, tree.x, tree.y - 180);
    ctx.font = '10px monospace';
    ctx.fillStyle = '#facc15';
    ctx.fillText('[Nhấn E để hái]', tree.x, tree.y - 165);
  }

  // Vẽ các NPC
  renderNPCs() {
    const ctx = this.ctx;

    this.currentMap.npcs.forEach(npc => {
      ctx.save();
      ctx.translate(npc.x, npc.y - 50);

      // Thân NPC
      if (npc.type === 'kame') {
        // Quy Lão Kame: Mai rùa đỏ, kính đen, râu trắng
        ctx.fillStyle = '#dc2626'; // Mai rùa
        ctx.beginPath();
        ctx.arc(-10, 20, 16, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#fde047'; // Áo vàng
        ctx.fillRect(-12, 10, 24, 28);

        ctx.fillStyle = '#fbcfe8'; // Đầu trọc
        ctx.beginPath();
        ctx.arc(0, 0, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#1e293b'; // Kính râm
        ctx.fillRect(-8, -4, 16, 6);

        ctx.fillStyle = '#ffffff'; // Chòm râu trắng
        ctx.beginPath();
        ctx.arc(0, 8, 8, 0, Math.PI);
        ctx.fill();
      } else {
        // NPC thông thường
        ctx.fillStyle = '#a855f7';
        ctx.fillRect(-12, 10, 24, 28);
        ctx.fillStyle = '#fed7aa';
        ctx.beginPath();
        ctx.arc(0, 0, 12, 0, Math.PI * 2);
        ctx.fill();
      }

      // Tên NPC
      ctx.fillStyle = '#fef08a';
      ctx.font = 'bold 12px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(npc.name, 0, -22);

      // Icon chat trên đầu
      ctx.fillStyle = '#38bdf8';
      ctx.font = '10px monospace';
      ctx.fillText('💬 [E]', 0, -36);

      ctx.restore();
    });
  }

  // Vẽ Quái vật
  renderMonsters() {
    const ctx = this.ctx;

    this.monsters.forEach(m => {
      if (m.isDead) return;

      ctx.save();
      ctx.translate(m.x, m.y - 45);

      if (m.hitFlash > 0) {
        ctx.filter = 'brightness(2.5)';
      }

      if (m.type === 'dummy') {
        // Mộc nhân gỗ
        ctx.fillStyle = '#a16207';
        ctx.fillRect(8, 5, 20, 40); // Thân cọc
        ctx.fillRect(-4, 15, 44, 8); // Tay ngang
        ctx.fillStyle = '#ca8a04';
        ctx.beginPath();
        ctx.arc(18, -2, 12, 0, Math.PI * 2);
        ctx.fill();
      } else if (m.type === 'boss_dino') {
        // Khủng Long Mẹ to lớn bạo chúa
        ctx.fillStyle = '#991b1b';
        ctx.fillRect(0, -20, 70, 65);
        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.arc(m.direction === 1 ? 65 : 5, -25, 22, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Quái Khủng long thường
        ctx.fillStyle = '#047857';
        ctx.fillRect(0, 0, 40, 45);
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(m.direction === 1 ? 38 : 2, 0, 14, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.filter = 'none';

      // Thanh máu quái vật
      const barWidth = 45;
      const hpPercent = Math.max(0, m.hp / m.maxHp);
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, -18, barWidth, 6);
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(1, -17, (barWidth - 2) * hpPercent, 4);

      // Tên quái vật
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(m.name, barWidth / 2, -22);

      ctx.restore();
    });
  }

  // Vẽ Nhân vật chính (Player Sprite)
  renderPlayer() {
    const ctx = this.ctx;
    const p = this.player;
    const planet = PLANETS[p.planet] || PLANETS[0];

    ctx.save();
    ctx.translate(p.x + p.width / 2, p.y + p.height / 2);
    ctx.scale(p.facing, 1);

    // Hào quang Super Saiyan / Ki Aura khi gồng
    if (p.isChargingKi) {
      const auraPulse = Math.sin(p.auraTimer * 0.3) * 8 + 35;
      const auraGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, auraPulse);
      auraGrad.addColorStop(0, 'rgba(254, 240, 138, 0.8)');
      auraGrad.addColorStop(0.5, planet.auraColor);
      auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = auraGrad;
      ctx.beginPath();
      ctx.arc(0, 0, auraPulse, 0, Math.PI * 2);
      ctx.fill();
    }

    // 1. Quần & Chân
    ctx.fillStyle = p.planet === 0 ? '#ea580c' : p.planet === 1 ? '#4b5563' : '#1e3a8a';
    ctx.fillRect(-12, 10, 10, 18);
    ctx.fillRect(2, 10, 10, 18);

    // 2. Giày
    ctx.fillStyle = '#18181b';
    ctx.fillRect(-14, 24, 12, 6);
    ctx.fillRect(2, 24, 12, 6);

    // 3. Áo & Thân
    ctx.fillStyle = p.planet === 0 ? '#ea580c' : p.planet === 1 ? '#ffffff' : '#1e3a8a'; // Trái đất áo cam, Namec áo trắng, Saiyan giáp lam
    ctx.fillRect(-14, -8, 28, 20);

    // Dây đai / Đai lưng
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(-14, 8, 28, 4);

    // 4. Cánh tay & Đấm
    ctx.fillStyle = p.planet === 1 ? '#22c55e' : '#fcd34d'; // Namec da xanh lá
    if (p.isAttacking) {
      ctx.fillRect(8, -6, 22, 10); // Tay đấm duỗi thẳng
    } else {
      ctx.fillRect(-18, -6, 8, 16);
      ctx.fillRect(10, -6, 8, 16);
    }

    // 5. Khuôn mặt & Đầu
    ctx.fillStyle = p.planet === 1 ? '#22c55e' : '#fed7aa';
    ctx.beginPath();
    ctx.arc(0, -18, 13, 0, Math.PI * 2);
    ctx.fill();

    // Mắt
    ctx.fillStyle = '#000000';
    ctx.fillRect(3, -20, 3, 4);

    // 6. Kiểu tóc đặc trưng theo hành tinh
    if (p.planet === 0) {
      // Goku tóc nhọn đen
      ctx.fillStyle = p.isChargingKi ? '#eab308' : '#18181b';
      ctx.beginPath();
      ctx.moveTo(-14, -22);
      ctx.lineTo(-24, -34);
      ctx.lineTo(-8, -30);
      ctx.lineTo(0, -42);
      ctx.lineTo(8, -30);
      ctx.lineTo(24, -34);
      ctx.lineTo(14, -22);
      ctx.closePath();
      ctx.fill();
    } else if (p.planet === 1) {
      // Namec râu ăng-ten
      ctx.fillStyle = '#16a34a';
      ctx.beginPath();
      ctx.moveTo(2, -28);
      ctx.lineTo(12, -38);
      ctx.lineTo(14, -36);
      ctx.lineTo(4, -26);
      ctx.fill();
    } else {
      // Xayda tóc vểnh ngược Vegeta
      ctx.fillStyle = p.isChargingKi ? '#eab308' : '#18181b';
      ctx.beginPath();
      ctx.moveTo(-14, -22);
      ctx.lineTo(-12, -45);
      ctx.lineTo(0, -48);
      ctx.lineTo(12, -45);
      ctx.lineTo(14, -22);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();

    // Tên người chơi & Cấp hành tinh trên đầu
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${p.name} [${planet.symbol}]`, p.x + p.width / 2, p.y - 20);

    // Thanh HP nhỏ trên đầu
    const hpPct = Math.max(0, p.hp / p.maxHp);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(p.x - 2, p.y - 12, p.width + 4, 5);
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(p.x - 1, p.y - 11, (p.width + 2) * hpPct, 3);
  }

  // Luồng chưởng Kamehameha / Beam
  renderBeam() {
    const ctx = this.ctx;
    const p = this.player;
    const planet = PLANETS[p.planet] || PLANETS[0];
    const beamLength = 800;
    const beamStartX = p.facing === 1 ? p.x + p.width : p.x;
    const beamY = p.y + 24;

    ctx.save();
    const beamGrad = ctx.createLinearGradient(0, beamY - 20, 0, beamY + 20);
    beamGrad.addColorStop(0, planet.primaryColor);
    beamGrad.addColorStop(0.5, '#ffffff');
    beamGrad.addColorStop(1, planet.primaryColor);

    ctx.fillStyle = beamGrad;
    ctx.shadowColor = planet.primaryColor;
    ctx.shadowBlur = 25;

    if (p.facing === 1) {
      ctx.fillRect(beamStartX, beamY - 18, beamLength, 36);
    } else {
      ctx.fillRect(beamStartX - beamLength, beamY - 18, beamLength, 36);
    }

    ctx.restore();
  }

  // Vẽ vật phẩm rơi
  renderDroppedItems() {
    const ctx = this.ctx;
    this.droppedItems.forEach(item => {
      ctx.save();
      ctx.translate(item.x, item.y);

      if (item.type === 'gold') {
        ctx.fillStyle = '#eab308';
        ctx.beginPath();
        ctx.arc(0, 0, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(-2, -2, 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (item.type === 'senzu') {
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.ellipse(0, 0, 8, 5, 0.4, 0, Math.PI * 2);
        ctx.fill();
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
