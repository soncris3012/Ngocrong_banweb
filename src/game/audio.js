// Trình quản lý âm thanh chuẩn 100% file WAV gốc Ngọc Rồng Online (Teamobi DragonBoy SoundMn)
// Đã xoá hoàn toàn nhạc remix ngoài luồng — chỉ phát hiệu ứng âm thanh & âm nền tự nhiên chuẩn game gốc!

const SOUND_PATHS = {
  getItem: '/assets/amthanh/sound/0.wav',
  move: '/assets/amthanh/sound/1.wav',
  lowPunch: '/assets/amthanh/sound/2.wav',
  lowKick: '/assets/amthanh/sound/3.wav',
  fly: '/assets/amthanh/sound/4.wav',
  panelOpen: '/assets/amthanh/sound/6.wav',
  buttonClose: '/assets/amthanh/sound/7.wav',
  buttonClick: '/assets/amthanh/sound/8.wav',
  medPunch: '/assets/amthanh/sound/9.wav',
  medKick: '/assets/amthanh/sound/10.wav',
  eatPean: '/assets/amthanh/sound/12.wav',
  openDialog: '/assets/amthanh/sound/13.wav',
  normalKame: '/assets/amthanh/sound/14.wav',
  namekKame: '/assets/amthanh/sound/15.wav',
  xaydaKame: '/assets/amthanh/sound/16.wav',
  explode1: '/assets/amthanh/sound/17.wav',
  explode2: '/assets/amthanh/sound/18.wav',
  traidatKame: '/assets/amthanh/sound/19.wav',
  hpUp: '/assets/amthanh/sound/20.wav',
  solarFlare: '/assets/amthanh/sound/21.wav',
  revive: '/assets/amthanh/sound/22.wav',
  gong: '/assets/amthanh/sound/23.wav',
  khiChay: '/assets/amthanh/sound/24.wav',
  bigExplode: '/assets/amthanh/sound/25.wav',
  airship: '/assets/amthanh/music/0.wav',
  ambientNature: '/assets/amthanh/music/1.wav',
  chargeLoop: '/assets/amthanh/music/2.wav'
};

class SoundManager {
  constructor() {
    this.isMuted = localStorage.getItem('nro_sound_muted') === 'true';
    this.bgmAudio = null;
    this.pool = new Map();
    this.punchCycle = 0;
    this.lastStepAt = 0;
    this.lastFlyAt = 0;
    this.lastJumpAt = 0;
  }

  init() {
    // Giữ tương thích API cũ
  }

  _playWav(key, volume = 0.45, playbackRate = 1.0) {
    if (this.isMuted) return;
    const src = SOUND_PATHS[key];
    if (!src) return;
    try {
      let list = this.pool.get(key);
      if (!list) {
        list = [];
        this.pool.set(key, list);
      }
      let audio = list.find((a) => a.paused || a.ended);
      if (!audio) {
        if (list.length < 4) {
          audio = new Audio(src);
          list.push(audio);
        } else {
          audio = list[0];
          audio.currentTime = 0;
        }
      }
      audio.volume = Math.max(0, Math.min(1, volume));
      audio.playbackRate = playbackRate;
      audio.play().catch(() => {});
    } catch {
      // Bỏ qua nếu trình duyệt chặn trước khi chạm màn hình
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem('nro_sound_muted', String(this.isMuted));
    if (this.bgmAudio) {
      this.bgmAudio.muted = this.isMuted;
      if (this.isMuted) {
        this.bgmAudio.pause();
      } else {
        this.bgmAudio.play().catch(() => {});
      }
    }
    return this.isMuted;
  }

  startBGM() {
    // Chỉ phát tiếng gió / thiên nhiên rất nhẹ gốc của DragonBoy (music/1.wav), TUYỆT ĐỐI không phát nhạc remix!
    if (this.bgmAudio) {
      this.bgmAudio.muted = this.isMuted;
      if (!this.isMuted && this.bgmAudio.paused) {
        this.bgmAudio.play().catch(() => {});
      }
      return;
    }
    try {
      this.bgmAudio = new Audio(SOUND_PATHS.ambientNature);
      this.bgmAudio.loop = true;
      this.bgmAudio.volume = 0.14;
      this.bgmAudio.muted = this.isMuted;

      if (!this.isMuted) {
        const p = this.bgmAudio.play();
        if (p !== undefined) {
          p.catch(() => {
            const unlock = () => {
              if (this.bgmAudio && !this.isMuted) {
                this.bgmAudio.play().catch(() => {});
              }
              window.removeEventListener('pointerdown', unlock);
              window.removeEventListener('keydown', unlock);
            };
            window.addEventListener('pointerdown', unlock, { once: true });
            window.addEventListener('keydown', unlock, { once: true });
          });
        }
      }
    } catch {
      // Ignore
    }
  }

  stopBGM() {
    if (this.bgmAudio) {
      this.bgmAudio.pause();
    }
  }

  playStep() {
    const now = performance.now();
    if (now - this.lastStepAt < 270) return;
    this.lastStepAt = now;
    this._playWav('move', 0.24);
  }

  playClick() {
    this._playWav('buttonClick', 0.36);
  }

  playPanelOpen() {
    this._playWav('panelOpen', 0.36);
  }

  playClose() {
    this._playWav('buttonClose', 0.35);
  }

  playDialog() {
    this._playWav('openDialog', 0.38);
  }

  playAirship() {
    this._playWav('airship', 0.42);
  }

  playPunch() {
    const seq = ['lowPunch', 'lowKick', 'medPunch', 'medKick'];
    const key = seq[this.punchCycle % seq.length];
    this.punchCycle += 1;
    this._playWav(key, 0.48);
  }

  playBeam(planet = 0) {
    if (planet === 1) this._playWav('xaydaKame', 0.5);
    else if (planet === 2) this._playWav('namekKame', 0.5);
    else this._playWav('traidatKame', 0.5);
  }

  playSolarFlare() {
    this._playWav('solarFlare', 0.5);
  }

  playExplosion(big = false) {
    this._playWav(big ? 'bigExplode' : 'explode1', big ? 0.55 : 0.45);
  }

  playJump() {
    const now = performance.now();
    if (now - this.lastJumpAt < 250) return;
    this.lastJumpAt = now;
    this._playWav('fly', 0.34, 1.22);
  }

  playFly() {
    const now = performance.now();
    if (now - this.lastFlyAt < 450) return;
    this.lastFlyAt = now;
    this._playWav('fly', 0.34, 1.0);
  }

  playHeal() {
    this._playWav('eatPean', 0.46);
    setTimeout(() => this._playWav('hpUp', 0.38), 140);
  }

  playCoin() {
    this._playWav('getItem', 0.45);
  }

  playSuperSaiyan() {
    this._playWav('gong', 0.5);
    setTimeout(() => this._playWav('khiChay', 0.44), 220);
  }

  playAuraCharge() {
    this._playWav('gong', 0.42);
  }
}

export const sound = new SoundManager();
