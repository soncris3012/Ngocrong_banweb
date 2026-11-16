// Quản lý nạp trước (preload) và cache hình ảnh game Ngọc Rồng Online
class AssetLoader {
  constructor() {
    this.images = {};
    this.loadedCount = 0;
    this.totalCount = 0;
    this.isReady = false;
  }

  loadImage(key, src) {
    if (this.images[key]) return this.images[key];

    const img = new Image();
    img.src = src;
    this.images[key] = img;
    this.totalCount++;

    img.onload = () => {
      this.loadedCount++;
      if (this.loadedCount >= this.totalCount) {
        this.isReady = true;
      }
    };
    img.onerror = () => {
      console.warn(`Không thể tải ảnh: ${src}`);
      this.loadedCount++;
    };

    return img;
  }

  get(key) {
    return this.images[key] || null;
  }

  init() {
    // 1. Bản đồ & Nền
    this.loadImage('map_aru', '/assets/map/traidat/lang_aru/maparu.png');
    this.loadImage('map_aru_sau', '/assets/map/traidat/lang_aru/maparusau.png');
    this.loadImage('map_0', '/assets/map/ban_do/map0.png');
    this.loadImage('map_1', '/assets/map/ban_do/map1.png');
    this.loadImage('map_2', '/assets/map/ban_do/map2.png');

    // Nền Parallax Ngọc Rồng gốc
    this.loadImage('bg_sky', '/assets/hud/giaodienngoai/traidat/sky_traidat.png');
    this.loadImage('bg_nuixa', '/assets/hud/giaodienngoai/traidat/nuixa_traidat.png');
    this.loadImage('bg_nui', '/assets/hud/giaodienngoai/traidat/nui_traidat.png');
    this.loadImage('bg_nuicay', '/assets/hud/giaodienngoai/traidat/nuicay_traidat.png');
    this.loadImage('bg_nuithap', '/assets/hud/giaodienngoai/traidat/nuithap_traidat.png');
    this.loadImage('eff_khoimay', '/assets/hieuung/hieuungmap/khoimay.png');

    // Hiệu ứng ánh sáng & lửa trại Làng Aru
    this.loadImage('deco_cui', '/assets/map/traidat/chung/trangtri/cuinuongduiga.png');
    this.loadImage('eff_light', '/assets/hieuung/hieuungmap/light.png');
    this.loadImage('eff_lua_1', '/assets/hieuung/hieuungmap/lua1.png');
    this.loadImage('eff_lua_2', '/assets/hieuung/hieuungmap/lua2.png');
    this.loadImage('eff_lua_3', '/assets/hieuung/hieuungmap/lua3.png');
    this.loadImage('eff_lua_4', '/assets/hieuung/hieuungmap/lua4.png');

    // 2. Nhân vật Trái Đất (Goku base)
    this.loadImage('goku_avt', '/assets/nhanvat/traidat/avatar/Goku_base/avt.png');
    this.loadImage('goku_head_idle', '/assets/nhanvat/traidat/avatar/Goku_base/daudung.png');
    this.loadImage('goku_head_run', '/assets/nhanvat/traidat/avatar/Goku_base/dauchay.png');

    // Thân áo cam
    this.loadImage('body_idle', '/assets/nhanvat/traidat/do/set_cam/thandung.png');
    this.loadImage('body_jump', '/assets/nhanvat/traidat/do/set_cam/thannhay.png');
    this.loadImage('body_fall', '/assets/nhanvat/traidat/do/set_cam/thanroi.png');
    this.loadImage('body_charge', '/assets/nhanvat/traidat/do/set_cam/thangong.png');
    this.loadImage('body_beam', '/assets/nhanvat/traidat/do/set_cam/thanban.png');
    this.loadImage('body_guard', '/assets/nhanvat/traidat/do/set_cam/thanthu.png');
    for (let i = 1; i <= 5; i++) {
      this.loadImage(`body_run_${i}`, `/assets/nhanvat/traidat/do/set_cam/thanchay (${i}).png`);
    }

    // Quần cam
    this.loadImage('leg_idle', '/assets/nhanvat/traidat/do/set_cam/chandung.png');
    this.loadImage('leg_jump', '/assets/nhanvat/traidat/do/set_cam/channhay.png');
    this.loadImage('leg_fly', '/assets/nhanvat/traidat/do/set_cam/chanbay.png');
    this.loadImage('leg_fall', '/assets/nhanvat/traidat/do/set_cam/chanroi.png');
    this.loadImage('leg_charge', '/assets/nhanvat/traidat/do/set_cam/changong.png');
    for (let i = 1; i <= 5; i++) {
      this.loadImage(`leg_run_${i}`, `/assets/nhanvat/traidat/do/set_cam/chanchay (${i}).png`);
    }

    // 3. Nhân vật Xayda (Vegeta / Cađíc)
    this.loadImage('vegeta_avt', '/assets/nhanvat/xayda/avatar/Cađíc_base/avt.png');
    this.loadImage('vegeta_head_idle', '/assets/nhanvat/xayda/avatar/Cađíc_base/daudung.png');
    this.loadImage('vegeta_head_run', '/assets/nhanvat/xayda/avatar/Cađíc_base/dauchay.png');

    // 4. Nhân vật Namếc (Piccolo)
    this.loadImage('namek_head_idle', '/assets/nhanvat/namek/avatar/namek_base/daudung.png');
    this.loadImage('namek_head_run', '/assets/nhanvat/namek/avatar/namek_base/dauchay.png');

    // 5. Cây Đậu Thần Karin 10 Cấp
    for (let i = 1; i <= 10; i++) {
      this.loadImage(`caydau_${i}`, `/assets/nhanvat/npc/dau_traidat/caydau${i}.png`);
    }

    // 6. Rương Đồ & NPC Thật Chuẩn NRO
    this.loadImage('ruong_do', '/assets/nhanvat/npc/ruong_do/1.png');
    this.loadImage('gohan_head', '/assets/nhanvat/npc/ong_gohan/dau.png');
    this.loadImage('gohan_body', '/assets/nhanvat/npc/ong_gohan/than.png');
    this.loadImage('gohan_leg', '/assets/nhanvat/npc/ong_gohan/chan.png');

    // Thầy Hiếu (Võ sư Làng Aru / Quy Lão Kame)
    this.loadImage('thay_hieu_dau', '/assets/nhanvat/npc/thay_hieu/dau.png');
    this.loadImage('thay_hieu_than', '/assets/nhanvat/npc/thay_hieu/than.png');
    this.loadImage('thay_hieu_chan', '/assets/nhanvat/npc/thay_hieu/chan.png');

    // Admin Huy Khôi (Cao thủ võ lâm Làng Aru)
    this.loadImage('huykhoi_dau', '/assets/nhanvat/npc/admin_huykhoi/dau.png');
    this.loadImage('huykhoi_than', '/assets/nhanvat/npc/admin_huykhoi/than.png');
    this.loadImage('huykhoi_chan', '/assets/nhanvat/npc/admin_huykhoi/chan.png');

    // Mèo Thần Karin (Sprite Pet chuẩn)
    this.loadImage('karin_pet_1', '/assets/nhanvat/npc/npc_pet/traidat/1.png');
    this.loadImage('karin_pet_2', '/assets/nhanvat/npc/npc_pet/traidat/2.png');

    // 7. Ngọc Rồng 1 sao -> 7 sao
    for (let i = 1; i <= 7; i++) {
      this.loadImage(`nr_${i}s`, `/assets/vatpham/vatphamgame/ngocrong/nr${i}s.png`);
    }

    // 8. Kỹ năng Icons
    for (let i = 1; i <= 9; i++) {
      this.loadImage(`skill_${i}_traidat`, `/assets/kynang/iconkynang/traidat/skill${i}_traidat.png`);
    }

    // 9. HUD Icons & Nút bấm
    this.loadImage('hud_hp', '/assets/hud/giaodientrong/thanhhp1.png');
    this.loadImage('hud_ki', '/assets/hud/giaodientrong/thanhki.png');
    this.loadImage('hud_attack', '/assets/hud/giaodientrong/bg_attack.png');
    this.loadImage('hud_attack_click', '/assets/hud/giaodientrong/bg_attack_click.png');
    this.loadImage('hud_target', '/assets/hud/giaodientrong/change.png');
    this.loadImage('hud_senzu', '/assets/hud/giaodientrong/odauthan.png');
    this.loadImage('hud_gold', '/assets/hud/giaodientrong/vang.png');
    this.loadImage('hud_gem', '/assets/hud/giaodientrong/ngoc.png');
    this.loadImage('hud_slot', '/assets/hud/giaodientrong/oskill.png');
    this.loadImage('hud_chat', '/assets/hud/giaodientrong/ochat.png');

    // 10. Trang bị
    this.loadImage('item_ao', '/assets/vatpham/do/traidat/set_cam/ao.png');
    this.loadImage('item_quan', '/assets/vatpham/do/traidat/set_cam/quan.png');
    this.loadImage('item_gang', '/assets/vatpham/do/traidat/set_cam/gang.png');
    this.loadImage('item_giay', '/assets/vatpham/do/traidat/set_cam/giay.png');
    this.loadImage('item_rada', '/assets/vatpham/do/rada/rada1.png');

    // 11. Địa hình chuẩn NRO (Tiles)
    for (let i = 1; i <= 5; i++) {
      this.loadImage(`matdat_${i}`, `/assets/map/traidat/chung/dat/matdat_traidat${i}.png`);
    }
    for (let i = 1; i <= 3; i++) {
      this.loadImage(`dat_${i}`, `/assets/map/traidat/chung/dat/dat_traidat${i}.png`);
      this.loadImage(`longdat_${i}`, `/assets/map/traidat/chung/dat/longdat_traidat${i}.png`);
    }
    for (let i of [1, 3, 4, 5]) {
      this.loadImage(`cayco_${i}`, `/assets/map/traidat/chung/cayco/cayco${i}_traidat.png`);
    }
    this.loadImage('nhacua_gohan', '/assets/map/traidat/chung/nhacua/nhacua1_earth.png');
    this.loadImage('nhacua_lang', '/assets/map/traidat/chung/nhacua/nhacua2_earth.png');
    this.loadImage('caycoi_1', '/assets/map/traidat/chung/caycoi/caycoi1_traidat.png');
    this.loadImage('caycoi_2', '/assets/map/traidat/chung/caycoi/caycoi2_traidat.png');

    // 12. Hiệu ứng Click di chuyển & NPC
    for (let i = 1; i <= 4; i++) {
      this.loadImage(`click_move_${i}`, `/assets/hieuung/hieuunggame/click_di_chuyen/${i}.png`);
      this.loadImage(`click_npc_${i}`, `/assets/hieuung/hieuunggame/click_npc/${i}.png`);
    }
  }
}

export const assets = new AssetLoader();
