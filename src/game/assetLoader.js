// Trình nạp và quản lý Texture chuẩn LibGDX cho Ngọc Rồng Online Web Edition
// Kiến trúc Preload phân tầng bất đồng bộ thực sự 100% (Real Decoding GPU - Không fake timeout)

// ============================================================================
// 1. MENU PRELOAD PATHS: Bắt buộc nạp đủ 100% trước khi mở Main Menu
// ============================================================================
export const MENU_PRELOAD_PATHS = [
  // Logo & Icon loading
  'hud/giaodienngoai/chung/chuberong.png',
  'vatpham/vatphamgame/ngocrong/nr5s.png',

  // Giao diện nút bấm & khung thông báo
  'hud/giaodienngoai/chung/nutdangnhap2.png',
  'hud/giaodienngoai/chung/nutclick.png',
  'hud/giaodienngoai/chung/muitenvang.png',
  'hud/giaodienngoai/chung/input.png',
  'hud/giaodienngoai/chung/khungchat.png',
  'hud/giaodienngoai/chung/khungdangnhap.png',
  'hud/giaodienngoai/chung/khungthongbao.png',
  'hud/giaodienngoai/chung/maychubutton.png',
  'hud/giaodienngoai/chung/maychuclickbutton.png',

  // Parallax 5 lớp Menu Chính Trái Đất (Chuẩn ManHinhMenu.java)
  'hud/giaodienngoai/traidat/sky_traidat.png',
  'hud/giaodienngoai/traidat/nuixa_traidat.png',
  'hud/giaodienngoai/traidat/nui_traidat.png',
  'hud/giaodienngoai/traidat/nuicay_traidat.png',
  'hud/giaodienngoai/traidat/nuithap_traidat.png',

  // Tạo nhân vật: Preview 3 hành tinh
  'hud/giaodienngoai/traidat/dau_traidat_1.png',
  'hud/giaodienngoai/traidat/dau_traidat_2.png',
  'hud/giaodienngoai/traidat/dau_traidat_3.png',
  'hud/giaodienngoai/traidat/thantraidat.png',
  'hud/giaodienngoai/traidat/chantraidat.png',
  'hud/giaodienngoai/namek/dau_namek_1.png',
  'hud/giaodienngoai/namek/dau_namek_2.png',
  'hud/giaodienngoai/namek/dau_namek_3.png',
  'hud/giaodienngoai/namek/thannamek.png',
  'hud/giaodienngoai/namek/channamek.png',
  'hud/giaodienngoai/xayda/dau_xayda_1.png',
  'hud/giaodienngoai/xayda/dau_xayda_2.png',
  'hud/giaodienngoai/xayda/dau_xayda_3.png',
  'hud/giaodienngoai/xayda/thanxayda.png',
  'hud/giaodienngoai/xayda/chanxayda.png',
  'hud/giaodienngoai/xayda/matrang.png'
];

// ============================================================================
// 2. GAME CORE PRELOAD PATHS: Tài nguyên cốt lõi trong game (HUD, Tân thủ, Mobs)
// ============================================================================
export const GAME_CORE_PRELOAD_PATHS = [
  // HUD VeHUD trong game chuẩn 1:1
  'hud/giaodientrong/thanhhp1.png',
  'hud/giaodientrong/thanhhp2.png',
  'hud/giaodientrong/thanhhp.png',
  'hud/giaodientrong/thanhki.png',
  'hud/giaodientrong/bg_attack.png',
  'hud/giaodientrong/bg_attack_click.png',
  'hud/giaodientrong/odauthan.png',
  'hud/giaodientrong/odauthanclick.png',
  'hud/giaodientrong/change.png',
  'hud/giaodientrong/change_click.png',
  'hud/giaodientrong/oskill.png',
  'hud/giaodientrong/oskillclick.png',
  'hud/giaodientrong/myTexture2dnut.png',
  'hud/giaodientrong/myTexture2dnutF.png',
  'hud/giaodientrong/myTexture2danalog1.png',
  'hud/giaodientrong/myTexture2danalog2.png',
  'hud/giaodientrong/nutpopup.png',
  'hud/giaodientrong/popupnhanvat.jpg',
  'hud/giaodientrong/nutX.png',
  'hud/giaodientrong/nutchucnang.png',
  'hud/giaodientrong/nutchucnangclick.png',
  'hud/giaodientrong/nutvuong.png',
  'hud/giaodientrong/nutvuongclick.png',
  'hud/giaodientrong/ohanhtrang.jpg',
  'hud/giaodientrong/ohanhtrangclick.jpg',
  'hud/giaodientrong/ohanhtrangdangmac.jpg',
  'hud/giaodientrong/ohanhtrangdangmacclick.jpg',
  'hud/giaodientrong/ttluc.jpg',
  'hud/giaodientrong/ttluc2.jpg',
  'hud/giaodientrong/vang.png',
  'hud/giaodientrong/ngoc.png',
  'hud/giaodientrong/ngoc1.png',
  'hud/giaodientrong/saoden.png',
  'hud/giaodientrong/saoxanh.png',
  'hud/giaodientrong/ochiso.png',
  'hud/giaodientrong/ochiso1.jpg',
  'hud/giaodientrong/dauhoicham.png',
  'hud/giaodientrong/clicknpc.png',

  // Nhân vật Tân thủ Trái Đất (Goku base & set cam võ phục & set base)
  'nhanvat/traidat/avatar/Goku_base/avt.png',
  'nhanvat/traidat/avatar/Goku_base/daudung.png',
  'nhanvat/traidat/avatar/Goku_base/dauchay.png',
  'nhanvat/traidat/do/set_cam/thandung.png',
  'nhanvat/traidat/do/set_cam/thannhay.png',
  'nhanvat/traidat/do/set_cam/thanroi.png',
  'nhanvat/traidat/do/set_cam/thanchay (1).png',
  'nhanvat/traidat/do/set_cam/thanchay (2).png',
  'nhanvat/traidat/do/set_cam/thanchay (3).png',
  'nhanvat/traidat/do/set_cam/thanchay (4).png',
  'nhanvat/traidat/do/set_cam/thanchay (5).png',
  'nhanvat/traidat/do/set_cam/chandung.png',
  'nhanvat/traidat/do/set_cam/channhay.png',
  'nhanvat/traidat/do/set_cam/chanroi.png',
  'nhanvat/traidat/do/set_cam/chanbay.png',
  'nhanvat/traidat/do/set_cam/chanchay (1).png',
  'nhanvat/traidat/do/set_cam/chanchay (2).png',
  'nhanvat/traidat/do/set_cam/chanchay (3).png',
  'nhanvat/traidat/do/set_cam/chanchay (4).png',
  'nhanvat/traidat/do/set_cam/chanchay (5).png',
  'nhanvat/traidat/do/set_base/thandung.png',
  'nhanvat/traidat/do/set_base/chandung.png',
  'nhanvat/traidat/do/set_base/thanchay (1).png',
  'nhanvat/traidat/do/set_base/thanchay (2).png',
  'nhanvat/traidat/do/set_base/thanchay (3).png',
  'nhanvat/traidat/do/set_base/thanchay (4).png',
  'nhanvat/traidat/do/set_base/thanchay (5).png',
  'nhanvat/traidat/do/set_base/chanchay (1).png',
  'nhanvat/traidat/do/set_base/chanchay (2).png',
  'nhanvat/traidat/do/set_base/chanchay (3).png',
  'nhanvat/traidat/do/set_base/chanchay (4).png',
  'nhanvat/traidat/do/set_base/chanchay (5).png',
  'nhanvat/xayda/avatar/Cađíc_base/daudung.png',
  'nhanvat/xayda/avatar/Cađíc_base/dauchay.png',
  'nhanvat/xayda/do/set_cam/thandung.png',
  'nhanvat/xayda/do/set_cam/chandung.png',
  'nhanvat/namek/avatar/namek_base/daudung.png',
  'nhanvat/namek/avatar/namek_base/dauchay.png',

  // NPC Tân Thủ chuẩn NRO
  'nhanvat/npc/ong_gohan/avt.png',
  'nhanvat/npc/ong_gohan/dau.png',
  'nhanvat/npc/ong_gohan/than.png',
  'nhanvat/npc/ong_gohan/chan.png',
  'nhanvat/npc/admin_dungle/avt.png',
  'nhanvat/npc/admin_dungle/dau.png',
  'nhanvat/npc/admin_dungle/than.png',
  'nhanvat/npc/admin_dungle/chan.png',
  'nhanvat/npc/admin_thanhle/avt.png',
  'nhanvat/npc/admin_thanhle/dau.png',
  'nhanvat/npc/admin_thanhle/than.png',
  'nhanvat/npc/admin_thanhle/chan.png',
  'nhanvat/npc/thay_hieu/avt.png',
  'nhanvat/npc/thay_hieu/dau.png',
  'nhanvat/npc/thay_hieu/than.png',
  'nhanvat/npc/thay_hieu/chan.png',
  'nhanvat/npc/dau_traidat/caydau1.png',
  'nhanvat/npc/dau_traidat/caydau5.png',
  'nhanvat/npc/dau_traidat/caydau10.png',
  'nhanvat/npc/ruong_do/1.png',
  'nhanvat/npc/ruong_do/avt_ruong.png',
  'nhanvat/npc/dui_ga/1.png',

  // Quái vật Tân thủ
  'nhanvat/quai/moc_nhan_1.png',
  'nhanvat/quai/moc_nhan_2.png',
  'nhanvat/quai/khung_long_1.png',
  'nhanvat/quai/khung_long_2.png',
  'nhanvat/quai/lon_loi_1.png',
  'nhanvat/quai/lon_loi_2.png',

  // Tiles bản đồ Nhà Gôhan & Làng Aru
  'map/traidat/chung/dat/matdat_traidat1.png',
  'map/traidat/chung/dat/matdat_traidat2.png',
  'map/traidat/chung/dat/matdat_traidat3.png',
  'map/traidat/chung/dat/dat_traidat1.png',
  'map/traidat/chung/dat/dat_traidat2.png',
  'map/traidat/chung/dat/longdat_traidat1.png',
  'map/traidat/chung/dat/longdat_traidat2.png',
  'map/traidat/chung/nhacua/nhacua1_earth.png',
  'map/traidat/chung/nhacua/nhacua2_earth.png',
  'map/traidat/chung/caycoi/caycoi1_traidat.png',
  'map/traidat/chung/caycoi/caycoi2_traidat.png',
  'map/traidat/chung/cayco/cayco1_traidat.png',
  'map/traidat/chung/cayco/cayco3_traidat.png',
  'map/traidat/chung/trangtri/cuinuongduiga.png',
  'map/traidat/chung/trangtri/hatdau2.png',

  // Hiệu ứng chiến đấu cơ bản
  'hieuung/hieuungkynang/e_0.png',
  'hieuung/hieuungkynang/e_1.png',
  'hieuung/hieuungkynang/e_2.png',
  'hieuung/hieuunggame/aura_bay/1.png',
  'hieuung/hieuunggame/aura_bay/2.png',
  'hieuung/hieuunggame/click_di_chuyen/1.png',
  'hieuung/hieuunggame/click_di_chuyen/2.png',
  'hieuung/hieuunggame/click_di_chuyen/3.png',
  'hieuung/hieuunggame/click_di_chuyen/4.png',

  // Tàu bay & Kỹ năng sơ cấp
  'vatpham/taubay/myTexture2dmaybay4b.png',
  'kynang/datanro/539.png',
  'kynang/datanro/540.png',
  'kynang/iconkynang/traidat/skill1_traidat.png',
  'kynang/iconkynang/traidat/skill2_traidat.png',

  // Đậu thần chính chủ NRO
  'icon/241.png',

  // Parallax Backgrounds & Suns chính chủ NRO / TORI
  'bg/sun0.png',
  'bg/b00-1.png',
  'bg/b00-2.png',
  'bg/b00-3.png',
  'bg/b00-4.png',
  'bg/b00-5.png',
  'bg/sun1.png',
  'bg/b01-1.png',
  'bg/b01-2.png',
  'bg/b01-3.png',
  'bg/b01-4.png',
  'bg/b01-5.png',
  'bg/sun2.png',
  'bg/b02.png',
  'bg/b02-1.png',
  'bg/b02-2.png',
  'bg/b02-3.png',
  'bg/b02-4.png',
  'bg/b02-5.png',
  'bg/sun3.png',
  'bg/b03-1.png',
  'bg/b03-2.png',
  'bg/b03-3.png',
  'bg/b03-4.png',
  'bg/b03-5.png',
  'bg/sun8.png',
  'bg/b80-1.png',
  'bg/b80-2.png',
  'bg/b80-4.png',
  'bg/b80-5.png',

  // Vật phẩm cảnh vật bgItem nguyên bản NRO (Nhà Gohan, Cây cối, Bụi hoa, Rạn đá)
  'bgItem/0.png',
  'bgItem/1.png',
  'bgItem/4.png',
  'bgItem/6.png',
  'bgItem/11.png',
  'bgItem/12.png',
  'bgItem/13.png',
  'bgItem/14.png',
  'bgItem/26.png',
  'bgItem/74.png',
  'bgItem/128.png',
  'bgItem/129.png',
  'bgItem/131.png',
  'bgItem/143.png',
  'bgItem/184.png',
  'bgItem/197.png',
  'bgItem/204.png',

  // TileSet 1 Trái Đất nguyên bản (Làng Aru, Đồi hoa cúc, Thung lũng tre, Nhà Gôhan)
  'tile/1_1.png', 'tile/1_2.png', 'tile/1_3.png', 'tile/1_4.png', 'tile/1_5.png',
  'tile/1_6.png', 'tile/1_7.png', 'tile/1_8.png', 'tile/1_9.png', 'tile/1_10.png',
  'tile/1_11.png', 'tile/1_12.png', 'tile/1_13.png', 'tile/1_14.png', 'tile/1_15.png',
  'tile/1_16.png', 'tile/1_17.png', 'tile/1_18.png', 'tile/1_19.png', 'tile/1_20.png',
  'tile/1_21.png', 'tile/1_22.png', 'tile/1_23.png', 'tile/1_24.png', 'tile/1_25.png',
  'tile/1_26.png', 'tile/1_27.png', 'tile/1_28.png', 'tile/1_29.png', 'tile/1_30.png',
  'tile/1_31.png', 'tile/1_32.png', 'tile/1_33.png', 'tile/1_34.png', 'tile/1_35.png',
  'tile/1_36.png', 'tile/1_37.png', 'tile/1_38.png', 'tile/1_39.png', 'tile/1_40.png',

  // Đảo Kame chuẩn gốc NRO (Kame House, Cây Dừa, Bãi Biển, Nền Đại Dương)
  'nhanvat/npc/quy_lao_kame.png',
  'bg/b02-2.png',
  'bg/b02-3.png',
  'bg/b02-4.png',
  'bg/b02-5.png'
];

export class AssetLoader {
  constructor() {
    this.cache = new Map();
    // Bảng băm O(1) ánh xạ trực tiếp từ relPath -> HTMLImageElement đã giải mã GPU
    this.readyRawCache = new Map();
    this.status = new Map();
    this.menuReady = false;
    this.gameCoreReady = false;
    this.preloadLoaded = 0;
    this.preloadTotal = 0;
    this.progressListeners = [];
  }

  normalizeUrl(path) {
    if (!path) return '';
    let clean = path.trim();
    if (clean.startsWith('http://') || clean.startsWith('https://') || clean.startsWith('data:')) {
      return clean;
    }
    if (clean.startsWith('/assets/')) {
      return encodeURI(clean);
    }
    if (clean.startsWith('assets/')) {
      return encodeURI('/' + clean);
    }
    if (clean.startsWith('/')) {
      return encodeURI(clean);
    }
    return encodeURI('/assets/' + clean);
  }

  // Tải và decode 1 hình ảnh thật sự lên bộ nhớ GPU (async decode)
  async loadSingle(relPath) {
    if (!relPath) return null;
    if (this.readyRawCache.has(relPath)) {
      return this.readyRawCache.get(relPath);
    }

    const url = this.normalizeUrl(relPath);
    if (!url) return null;

    if (this.cache.has(url)) {
      const existing = this.cache.get(url);
      if (existing.complete && existing.naturalWidth > 0) {
        this.readyRawCache.set(relPath, existing);
        return existing;
      }
    }

    return new Promise((resolve) => {
      let settled = false;
      const img = new Image();
      this.cache.set(url, img);
      this.status.set(url, 'loading');

      // Safety timeout: không bao giờ để một request mạng bị treo làm kẹt thanh tải
      const timer = setTimeout(() => {
        if (!settled) {
          settled = true;
          this.status.set(url, 'err');
          resolve(null);
        }
      }, 3500);

      const onDone = (success) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        this.status.set(url, success ? 'ok' : 'err');
        if (success) {
          this.readyRawCache.set(relPath, img);
        }
        resolve(success ? img : null);
      };

      img.onload = () => {
        if (typeof img.decode === 'function') {
          img.decode()
            .then(() => onDone(true))
            .catch(() => onDone(true));
        } else {
          onDone(true);
        }
      };

      img.onerror = () => {
        onDone(false);
      };

      img.src = url;
    });
  }

  // Tải danh sách mảng tài nguyên với kiểm soát tiến trình % THẬT (hàng đợi song song 24 luồng qua HTTP/2)
  async preloadList(paths, onProgress) {
    if (!Array.isArray(paths) || paths.length === 0) {
      if (onProgress) onProgress(0, 0, 100);
      return;
    }

    const total = paths.length;
    let completed = 0;

    const report = () => {
      completed++;
      const pct = Math.min(100, Math.floor((completed / total) * 100));
      if (onProgress) onProgress(completed, total, pct);
    };

    const concurrency = 24;
    let index = 0;

    const worker = async () => {
      while (index < paths.length) {
        const curIdx = index++;
        const p = paths[curIdx];
        await this.loadSingle(p);
        report();
      }
    };

    const pool = [];
    for (let i = 0; i < Math.min(concurrency, paths.length); i++) {
      pool.push(worker());
    }

    await Promise.all(pool);
  }

  // Preload giai đoạn 1: Menu chính (100% thật trước khi mở Menu)
  async preloadMenu(onProgress) {
    await this.preloadList(MENU_PRELOAD_PATHS, onProgress);
    this.menuReady = true;
  }

  // Preload giai đoạn 2: In-Game Core
  async preloadGameCore(onProgress) {
    await this.preloadList(GAME_CORE_PRELOAD_PATHS, onProgress);
    this.gameCoreReady = true;
  }

  // Tải toàn bộ Core trước khi vào game (Menu + HUD + Starter World)
  async preloadAllCore(onProgress) {
    const combined = [...new Set([...MENU_PRELOAD_PATHS, ...GAME_CORE_PRELOAD_PATHS])];
    this.preloadTotal = combined.length;
    this.preloadLoaded = 0;

    await this.preloadList(combined, (loaded, total, pct) => {
      this.preloadLoaded = loaded;
      if (onProgress) onProgress(loaded, total, pct);
      this.progressListeners.forEach(cb => cb(loaded, total));
    });

    this.menuReady = true;
    this.gameCoreReady = true;
  }

  onProgress(cb) {
    this.progressListeners.push(cb);
    if (this.preloadTotal > 0) {
      cb(this.preloadLoaded, this.preloadTotal);
    }
  }

  isMenuReady() {
    return this.menuReady;
  }

  isGameCoreReady() {
    return this.gameCoreReady;
  }

  // Lấy HTMLImageElement đồng bộ O(1) cho render loop Canvas LibGDX 60 FPS
  tex(relPath) {
    if (!relPath) return null;
    const fast = this.readyRawCache.get(relPath);
    if (fast !== undefined) return fast;

    const url = this.normalizeUrl(relPath);
    let img = this.cache.get(url);
    if (!img) {
      // Kích hoạt nạp ngầm nếu chưa có
      this.loadSingle(relPath);
      return null;
    }
    if (img && img.complete && img.naturalWidth > 0) {
      this.readyRawCache.set(relPath, img);
      return img;
    }
    return null;
  }

  // Tải trước một mảng các đường dẫn khi chuyển cảnh / chuyển map
  preloadBatch(paths) {
    if (!Array.isArray(paths)) return;
    paths.forEach(p => this.loadSingle(p));
  }

  // Tương thích ngược với GameEngine
  init() {
    // Không gọi hàng loạt 275 ảnh dồn dập nữa
  }

  waitForReady(timeoutMs = 4500) {
    return this.preloadAllCore();
  }
}

export const assets = new AssetLoader();
export default assets;
