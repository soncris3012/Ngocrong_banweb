// Trình nạp và quản lý Texture chuẩn LibGDX cho Ngọc Rồng Online Web Edition
// Hỗ trợ cả Preload danh sách cốt lõi lẫn Lazy-load + Cache mọi file trong /assets/

const CORE_PRELOAD_PATHS = [
  // HUD Trong Game (VeHUD & HUDPopupRenderer)
  'hud/giaodientrong/thanhhp1.png',
  'hud/giaodientrong/thanhhp2.png',
  'hud/giaodientrong/thanhhp.png',
  'hud/giaodientrong/thanhki.png',
  'hud/giaodientrong/nutpopup.png',
  'hud/giaodientrong/popupnhanvat.jpg',
  'hud/giaodientrong/nutX.png',
  'hud/giaodientrong/nutchucnang.png',
  'hud/giaodientrong/nutchucnangclick.png',
  'hud/giaodientrong/nutvuong.png',
  'hud/giaodientrong/nutvuongclick.png',
  'hud/giaodientrong/oskill.png',
  'hud/giaodientrong/oskillclick.png',
  'hud/giaodientrong/odauthan.png',
  'hud/giaodientrong/odauthanclick.png',
  'hud/giaodientrong/ochat.png',
  'hud/giaodientrong/ochatclick.png',
  'hud/giaodientrong/bg_attack.png',
  'hud/giaodientrong/bg_attack_click.png',
  'hud/giaodientrong/change.png',
  'hud/giaodientrong/change_click.png',
  'hud/giaodientrong/myTexture2dnut.png',
  'hud/giaodientrong/myTexture2dnutF.png',
  'hud/giaodientrong/clicknpc.png',
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
  'hud/giaodientrong/ochisoclick.png',
  'hud/giaodienngoai/chung/khungchat.png',
  'hud/giaodienngoai/chung/nutdangnhap2.png',
  'hud/giaodienngoai/chung/nutclick.png',
  'hud/giaodienngoai/chung/muitenvang.png',
  'hud/giaodienngoai/chung/chuberong.png',
  'vatpham/taubay/myTexture2dmaybay2.png',
  'vatpham/taubay/myTexture2dmaybay3.png',
  'vatpham/taubay/myTexture2dmaybay4a.png',
  'vatpham/taubay/myTexture2dmaybay4b.png',
  'nhanvat/quai/moc_nhan_1.png',
  'nhanvat/quai/moc_nhan_2.png',
  'nhanvat/quai/khung_long_1.png',
  'nhanvat/quai/khung_long_2.png',
  'nhanvat/quai/lon_loi_1.png',
  'nhanvat/quai/lon_loi_2.png',
  'hieuung/hieuungkynang/e_0.png',
  'hieuung/hieuungkynang/e_1.png',
  'hieuung/hieuungkynang/e_2.png',
  'hieuung/hieuunggame/bien_khi/bom1.png',
  'hieuung/hieuunggame/bien_khi/bom2.png',

  // Parallax & Tiles Trái Đất (Nhà Gôhan, Làng Aru, Đồi Hoa Cúc)
  'hud/giaodienngoai/traidat/sky_traidat.png',
  'hud/giaodienngoai/traidat/nuixa_traidat.png',
  'hud/giaodienngoai/traidat/nui_traidat.png',
  'hud/giaodienngoai/traidat/nuicay_traidat.png',
  'hud/giaodienngoai/traidat/nuithap_traidat.png',
  'map/traidat/chung/nhacua/nhacua2_earth.png',
  'map/traidat/chung/nhacua/nhacua1_earth.png',
  'map/traidat/chung/caycoi/caycoi1_traidat.png',
  'map/traidat/chung/caycoi/caycoi2_traidat.png',
  'map/traidat/chung/cayco/cayco1_traidat.png',
  'map/traidat/chung/cayco/cayco3_traidat.png',
  'map/traidat/chung/cayco/cayco4_traidat.png',
  'map/traidat/chung/cayco/cayco5_traidat.png',
  'map/traidat/chung/dat/matdat_traidat1.png',
  'map/traidat/chung/dat/matdat_traidat2.png',
  'map/traidat/chung/dat/matdat_traidat3.png',
  'map/traidat/chung/dat/matdat_traidat4.png',
  'map/traidat/chung/dat/matdat_traidat5.png',
  'map/traidat/chung/dat/dat_traidat1.png',
  'map/traidat/chung/dat/dat_traidat2.png',
  'map/traidat/chung/dat/dat_traidat3.png',
  'map/traidat/chung/dat/longdat_traidat1.png',
  'map/traidat/chung/dat/longdat_traidat2.png',
  'map/traidat/chung/dat/longdat_traidat3.png',
  'map/traidat/chung/dat/doc_traidat.png',
  'map/traidat/chung/trangtri/cuinuongduiga.png',
  'map/traidat/chung/trangtri/hatdau2.png',
  'map/traidat/lang_aru/maparu.png',
  'map/traidat/lang_aru/maparusau.png',
  'map/traidat/doi_hoa_cuc/doihoacuc.png',
  'map/traidat/doi_hoa_cuc/doihoacucsau.png',
  'map/traidat/doi_hoa_cuc/doihoacuctruoc.png',
  'map/traidat/doi_hoa_cuc/thapkirin.png',
  'hieuung/hieuungmap/light.png',
  'hieuung/hieuungmap/khoimay.png',
  'hieuung/hieuungmap/lua1.png',
  'hieuung/hieuungmap/lua2.png',
  'hieuung/hieuungmap/lua3.png',
  'hieuung/hieuungmap/lua4.png',

  // NPCs chuẩn bản gốc
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
  'nhanvat/npc/admin_haidang/avt.png',
  'nhanvat/npc/admin_haidang/dau.png',
  'nhanvat/npc/admin_haidang/than.png',
  'nhanvat/npc/admin_haidang/chan.png',
  'nhanvat/npc/admin_huykhoi/avt.png',
  'nhanvat/npc/admin_huykhoi/dau.png',
  'nhanvat/npc/admin_huykhoi/than.png',
  'nhanvat/npc/admin_huykhoi/chan.png',
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

  // Nhân vật cơ bản 3 hành tinh
  'nhanvat/traidat/avatar/Goku_base/avt.png',
  'nhanvat/traidat/avatar/Goku_base/daudung.png',
  'nhanvat/traidat/avatar/Goku_base/dauchay.png',
  'nhanvat/traidat/do/set_base/thandung.png',
  'nhanvat/traidat/do/set_base/thannhay.png',
  'nhanvat/traidat/do/set_base/thanroi.png',
  'nhanvat/traidat/do/set_base/thanthu.png',
  'nhanvat/traidat/do/set_base/thanchay (1).png',
  'nhanvat/traidat/do/set_base/thanchay (2).png',
  'nhanvat/traidat/do/set_base/thanchay (3).png',
  'nhanvat/traidat/do/set_base/thanchay (4).png',
  'nhanvat/traidat/do/set_base/thanchay (5).png',
  'nhanvat/traidat/do/set_base/chandung.png',
  'nhanvat/traidat/do/set_base/channhay.png',
  'nhanvat/traidat/do/set_base/chanroi.png',
  'nhanvat/traidat/do/set_base/chanbay.png',
  'nhanvat/traidat/do/set_base/changong.png',
  'nhanvat/traidat/do/set_base/chanchay (1).png',
  'nhanvat/traidat/do/set_base/chanchay (2).png',
  'nhanvat/traidat/do/set_base/chanchay (3).png',
  'nhanvat/traidat/do/set_base/chanchay (4).png',
  'nhanvat/traidat/do/set_base/chanchay (5).png',
  'nhanvat/traidat/do/set_base/588.png',
  'nhanvat/traidat/do/set_base/589.png',
  'nhanvat/traidat/do/set_base/590.png',
  'nhanvat/traidat/do/set_base/591.png',
  'nhanvat/traidat/do/set_base/592.png',

  // Hiệu ứng bay, gồng KI, đòn đánh, ngọc rồng
  'hieuung/hieuunggame/aura_bay/1.png',
  'hieuung/hieuunggame/aura_bay/2.png',
  'hieuung/hieuunggame/aura_bay/3.png',
  'hieuung/hieuunggame/aura_bay/4.png',
  'hieuung/hieuunggame/bien_khi/ttnl1.png',
  'hieuung/hieuunggame/bien_khi/ttnl2.png',
  'hieuung/hieuunggame/bien_khi/ttnl3.png',
  'hieuung/hieuunggame/bien_khi/ttnl4.png',
  'hieuung/hieuunggame/click_di_chuyen/1.png',
  'hieuung/hieuunggame/click_di_chuyen/2.png',
  'hieuung/hieuunggame/click_di_chuyen/3.png',
  'hieuung/hieuunggame/click_di_chuyen/4.png',
  'vatpham/vatphamgame/ngocrong/nr1s.png',
  'vatpham/vatphamgame/ngocrong/nr2s.png',
  'vatpham/vatphamgame/ngocrong/nr3s.png',
  'vatpham/vatphamgame/ngocrong/nr4s.png',
  'vatpham/vatphamgame/ngocrong/nr5s.png',
  'vatpham/vatphamgame/ngocrong/nr6s.png',
  'vatpham/vatphamgame/ngocrong/nr7s.png',
  'hieuung/hieuunggame/rong_than/r1.png',
  'hieuung/hieuunggame/rong_than/r2.png',
  'hieuung/hieuunggame/rong_than/r3.png',
  'hieuung/hieuunggame/rong_than/r4.png',
  'hieuung/hieuunggame/rong_than/r5.png',
  'hieuung/hieuunggame/rong_than/r6.png',
  'hieuung/hieuunggame/rong_than/r7.png',
  'hieuung/hieuunggame/rong_than/r8.png',
  'hieuung/hieuunggame/rong_than/r9.png',
  'hieuung/hieuunggame/rong_than/lua_1.png',
  'hieuung/hieuunggame/rong_than/lua_2.png',
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

  // Quái vật thật (Pet / Mount / Cải trang sprites)
  'vatpham/vatphamgame/pet/cho_vang/6156.png',
  'vatpham/vatphamgame/pet/cho_vang/6157.png',
  'vatpham/vatphamgame/pet/cho_vang/6158.png',
  'vatpham/vatphamgame/pet/cho_vang/6159.png',
  'vatpham/vatphamgame/pet/meo_den/10877.png',
  'vatpham/vatphamgame/pet/meo_den/10878.png',
  'vatpham/vatphamgame/pet/meo_den/10879.png',
  'vatpham/vanbay/khunglong/myTexture2drong.png',
  'vatpham/vanbay/xenxanh/mount_16_0.png',
  'vatpham/vanbay/rua/mount_9_0.png',
  'vatpham/vanbay/xenvang/mount_17_0.png',

  // Kỹ năng Trái Đất, Xayda, Namek
  'kynang/iconkynang/traidat/skill1_traidat.png',
  'kynang/iconkynang/traidat/skill2_traidat.png',
  'kynang/iconkynang/traidat/skill3_traidat.png',
  'kynang/iconkynang/traidat/skill4_traidat.png',
  'kynang/iconkynang/traidat/skill5_traidat.png',
  'kynang/iconkynang/xayda/skill1_xayda.png',
  'kynang/iconkynang/xayda/skill2_xayda.png',
  'kynang/iconkynang/xayda/skill3_xayda.png',
  'kynang/iconkynang/xayda/skill4_xayda.png',
  'kynang/iconkynang/xayda/skill5_xayda.png',
  'kynang/iconkynang/namek/skill1_namek.png',
  'kynang/iconkynang/namek/skill2_namek.png',
  'kynang/iconkynang/namek/skill3_namek.png',
  'kynang/iconkynang/namek/skill4_namek.png',
  'kynang/iconkynang/namek/skill5_namek.png'
];

class AssetLoader {
  constructor() {
    this.cache = new Map();
    this.status = new Map();
    this.initialized = false;
    this.preloadLoaded = 0;
    this.preloadTotal = CORE_PRELOAD_PATHS.length;
    this.progressListeners = [];
    this.readyCallbacks = [];
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

  init() {
    if (this.initialized) return;
    this.initialized = true;
    this.preloadLoaded = 0;
    this.preloadTotal = CORE_PRELOAD_PATHS.length;

    CORE_PRELOAD_PATHS.forEach((relPath) => {
      this._loadSingle(relPath, true);
    });
  }

  _loadSingle(relPath, countPreload = false) {
    const url = this.normalizeUrl(relPath);
    if (!url) return null;

    if (this.cache.has(url)) {
      return this.cache.get(url);
    }

    const img = new Image();
    img.decoding = 'async';
    this.cache.set(url, img);
    this.status.set(url, 'loading');

    const finish = (ok) => {
      this.status.set(url, ok ? 'ok' : 'err');
      if (countPreload) {
        this.preloadLoaded++;
        this.progressListeners.forEach((cb) => cb(this.preloadLoaded, this.preloadTotal));
        if (this.preloadLoaded >= this.preloadTotal) {
          this._flushReady();
        }
      }
    };

    img.onload = () => finish(true);
    img.onerror = () => finish(false);
    img.src = url;
    return img;
  }

  // Trả về HTMLImageElement đã load thành công (naturalWidth > 0), nếu đang tải hoặc lỗi trả về null
  tex(relPath) {
    if (!relPath) return null;
    const url = this.normalizeUrl(relPath);
    let img = this.cache.get(url);
    if (!img) {
      img = this._loadSingle(relPath, false);
    }
    if (img && img.complete && img.naturalWidth > 0) {
      return img;
    }
    return null;
  }

  // Tải trước một mảng các đường dẫn (ví dụ khi chuyển sang map mới)
  preloadBatch(paths) {
    if (!Array.isArray(paths)) return;
    for (let i = 0; i < paths.length; i++) {
      this._loadSingle(paths[i], false);
    }
  }

  onProgress(cb) {
    this.progressListeners.push(cb);
    cb(this.preloadLoaded, this.preloadTotal);
  }

  _flushReady() {
    while (this.readyCallbacks.length > 0) {
      const cb = this.readyCallbacks.shift();
      cb();
    }
  }

  waitForReady(timeoutMs = 4500) {
    this.init();
    if (this.preloadLoaded >= this.preloadTotal) {
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        resolve();
      };
      this.readyCallbacks.push(finish);
      setTimeout(finish, timeoutMs);
    });
  }
}

export const assets = new AssetLoader();
export default assets;
