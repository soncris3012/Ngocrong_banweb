// Dữ liệu gốc chuẩn 100% từ repo LibGDX DANG-PH/ngoc-rong-online
// Tọa độ Virtual Viewport: 1020 x 610 (Gốc (0,0) ở góc dưới-trái chuẩn LibGDX)

export const VIRTUAL_W = 1020;
export const VIRTUAL_H = 610;

// 3 Hành tinh chuẩn Dragon Boy
export const PLANET_DEFS = [
  {
    id: 0,
    key: 'traidat',
    name: 'Trái Đất',
    avatars: ['Goku_base', 'Krillin_base', 'Yamcha_base'],
    charNames: ['Goku', 'Krillin', 'Yamcha'],
    baseStats: { maxHp: 1500, hp: 1500, maxKi: 1400, ki: 1400, attack: 75, defense: 15, crit: 8 }
  },
  {
    id: 1,
    key: 'xayda',
    name: 'Xayda',
    avatars: ['Cađíc_base', 'Rađíc_base', 'Kakalot_base'],
    charNames: ['Cađíc', 'Rađíc', 'Kakalot'],
    baseStats: { maxHp: 1650, hp: 1650, maxKi: 1100, ki: 1100, attack: 95, defense: 18, crit: 12 }
  },
  {
    id: 2,
    key: 'namek',
    name: 'Namếc',
    avatars: ['namek_base', 'namek_base', 'namek_base'],
    charNames: ['Ốc tiêu', 'Piccolo', 'Kami'],
    baseStats: { maxHp: 1800, hp: 1800, maxKi: 1600, ki: 1600, attack: 70, defense: 22, crit: 6 }
  }
];

// Offset Modular Nhân vật chuẩn AvatarDoOffset.java & CaiTrangOffset.java
export const MODULAR_STATE_OFFSETS = {
  DUNG_YEN: { dauX: -0.3, dauY: -15.5, thanX: 0, thanY: 0, chanX: 0, chanY: 0 },
  DI_CHUYEN: [
    { dauX: 3.3, dauY: -9.0, thanX: 1.5, thanY: 5.2, chanX: 0, chanY: 0 },
    { dauX: 3.3, dauY: -9.5, thanX: 1.5, thanY: 4.8, chanX: 0, chanY: 0 },
    { dauX: 3.3, dauY: -8.5, thanX: 1.5, thanY: 5.5, chanX: 0, chanY: 0 },
    { dauX: 3.3, dauY: -9.2, thanX: 1.5, thanY: 5.0, chanX: 0, chanY: 0 },
    { dauX: 3.3, dauY: -8.8, thanX: 1.5, thanY: 5.3, chanX: 0, chanY: 0 }
  ],
  NHAY: { dauX: 3.0, dauY: -23.5, thanX: -4.0, thanY: 6.0, chanX: 0, chanY: 0 },
  ROI: { dauX: 0.2, dauY: -31.0, thanX: -5.5, thanY: 6.5, chanX: 0, chanY: 0 },
  BAY: { dauX: 12.0, dauY: -22.0, thanX: 5.0, thanY: 8.0, chanX: -4.0, chanY: 2.0 },
  GONG: { dauX: -0.5, dauY: -16.5, thanX: 0, thanY: -1.0, chanX: 0, chanY: 0 }
};

// Offset NPC chuẩn DuLieuOffsetNpc.java (lechChanX, lechChanY, lechThanX, lechThanY, lechDauX, lechDauY)
export const NPC_OFFSETS = {
  ong_gohan: { chanX: 0, chanY: 0, thanX: 0, thanY: 0, dauX: 0, dauY: -20.0, extraThanY: 8.5 },
  admin_haidang: { chanX: 0, chanY: 0, thanX: 0, thanY: -1.5, dauX: -0.3, dauY: -16.0, extraThanY: 0 },
  admin_thanhle: { chanX: 0, chanY: 0, thanX: 0, thanY: -1.0, dauX: -1.2, dauY: -16.0, extraThanY: 0 },
  admin_dungle: { chanX: 0, chanY: 0, thanX: 0, thanY: -0.5, dauX: 1.0, dauY: -19.0, extraThanY: 0 },
  thay_hieu: { chanX: 0, chanY: 0, thanX: 0, thanY: -11.0, dauX: 1.0, dauY: -24.2, extraThanY: 0 },
  admin_huykhoi: { chanX: 0, chanY: 0, thanX: 0, thanY: -3.0, dauX: -1.2, dauY: -18.0, extraThanY: 0 }
};

// Hệ thống 9 Kỹ Năng mỗi Hành Tinh dùng đúng icon trong /assets/kynang/iconkynang/<planet>/
export const PLANET_SKILLS = {
  traidat: [
    { id: 'td_1', slotIdx: 0, name: 'Đấm Dragon', type: 'melee', mult: 1.25, kiCost: 0, cd: 0.32, range: 78, icon: 'kynang/iconkynang/traidat/skill1_traidat.png', desc: 'Đòn cận chiến liên hoàn tốc độ cao.' },
    { id: 'td_2', slotIdx: 1, name: 'Kamejoko', type: 'beam', mult: 2.8, kiCost: 35, cd: 1.6, range: 520, color: '#38bdf8', core: '#e0f2fe', icon: 'kynang/iconkynang/traidat/skill2_traidat.png', desc: 'Chưởng khí Kamejoko xuyên mục tiêu.' },
    { id: 'td_3', slotIdx: 2, name: 'Thái Dương Hạ San', type: 'solar', mult: 1.8, kiCost: 65, cd: 7.5, range: 280, icon: 'kynang/iconkynang/traidat/skill3_traidat.png', desc: 'Làm chói mắt và choáng toàn bộ quái xung quanh 4 giây.' },
    { id: 'td_4', slotIdx: 3, name: 'Quả Cầu Kênh Khi', type: 'spirit', mult: 5.5, kiCost: 140, cd: 10.0, range: 460, color: '#60a5fa', icon: 'kynang/iconkynang/traidat/skill4_traidat.png', desc: 'Tụ nguyên khí khổng lồ hủy diệt vùng rộng.' },
    { id: 'td_5', slotIdx: 4, name: 'Kaioken / Beast', type: 'transform', caitrang: 'gohan_beast', mult: 2.0, kiCost: 80, cd: 14.0, range: 0, icon: 'kynang/iconkynang/traidat/skill5_traidat.png', desc: 'Bộc phát trạng thái Gohan Beast (+85% Sức đánh & Tốc độ).' },
    { id: 'td_6', slotIdx: 5, name: 'Tái Tạo Năng Lượng', type: 'charge', mult: 0, kiCost: 0, cd: 8.0, range: 0, icon: 'kynang/iconkynang/traidat/skill6_traidat.png', desc: 'Gồng khí phục hồi nhanh 55% HP và KI.' },
    { id: 'td_7', slotIdx: 6, name: 'Khiên Năng Lượng', type: 'shield', mult: 0, kiCost: 50, cd: 12.0, range: 0, icon: 'kynang/iconkynang/traidat/skill7_traidat.png', desc: 'Tạo lá chắn giảm 75% sát thương nhận vào trong 8 giây.' },
    { id: 'td_8', slotIdx: 7, name: 'Dịch Chuyển Tức Thời', type: 'tele', mult: 2.2, kiCost: 40, cd: 4.5, range: 420, icon: 'kynang/iconkynang/traidat/skill8_traidat.png', desc: 'Dịch chuyển áp sát mục tiêu và tung đòn chí mạng.' },
    { id: 'td_9', slotIdx: 8, name: 'Super Kamejoko', type: 'beam', mult: 4.6, kiCost: 110, cd: 6.0, range: 600, color: '#2563eb', core: '#ffffff', icon: 'kynang/iconkynang/traidat/skill9_traidat.png', desc: 'Siêu chưởng Kamejoko cực đại.' }
  ],
  xayda: [
    { id: 'xd_1', slotIdx: 0, name: 'Đấm Galick', type: 'melee', mult: 1.35, kiCost: 0, cd: 0.32, range: 78, icon: 'kynang/iconkynang/xayda/skill1_xayda.png', desc: 'Cú đấm chiến binh Xayda uy lực.' },
    { id: 'xd_2', slotIdx: 1, name: 'Antomic', type: 'beam', mult: 3.1, kiCost: 40, cd: 1.6, range: 520, color: '#c084fc', core: '#faf5ff', icon: 'kynang/iconkynang/xayda/skill2_xayda.png', desc: 'Tia chưởng tím Antomic sát thương cực cao.' },
    { id: 'xd_3', slotIdx: 2, name: 'Tái Tạo Năng Lượng', type: 'charge', mult: 0, kiCost: 0, cd: 7.5, range: 0, icon: 'kynang/iconkynang/xayda/skill3_xayda.png', desc: 'Gồng nguyên khí Xayda hồi mạnh HP & KI.' },
    { id: 'xd_4', slotIdx: 3, name: 'Biến Khỉ Khổng Lồ', type: 'transform', caitrang: 'khi_7', mult: 2.2, kiCost: 90, cd: 14.0, range: 0, icon: 'kynang/iconkynang/xayda/skill4_xayda.png', desc: 'Hóa Khỉ Đột Hoàng Kim (+100% Sức đánh & HP).' },
    { id: 'xd_5', slotIdx: 4, name: 'Nổ Tung (Tự Phát Nổ)', type: 'spirit', mult: 6.2, kiCost: 160, cd: 11.0, range: 360, color: '#facc15', icon: 'kynang/iconkynang/xayda/skill5_xayda.png', desc: 'Giải phóng toàn bộ KI gây nổ diện rộng cực mạnh.' },
    { id: 'xd_6', slotIdx: 5, name: 'Huýt Sáo', type: 'whistle', mult: 0, kiCost: 45, cd: 15.0, range: 0, icon: 'kynang/iconkynang/xayda/skill6_xayda.png', desc: 'Tăng +35% HP tối đa cho bản thân & Đệ tử.' },
    { id: 'xd_7', slotIdx: 6, name: 'Khiên Năng Lượng', type: 'shield', mult: 0, kiCost: 50, cd: 12.0, range: 0, icon: 'kynang/iconkynang/xayda/skill7_xayda.png', desc: 'Tạo khiên chắn sát thương 8 giây.' },
    { id: 'xd_8', slotIdx: 7, name: 'Siêu Xayda Huyền Thoại', type: 'transform', caitrang: 'broly_lssj', mult: 2.5, kiCost: 110, cd: 15.0, range: 0, icon: 'kynang/iconkynang/xayda/skill8_xayda.png', desc: 'Hóa Siêu Xayda Broly (+120% Sức đánh).' },
    { id: 'xd_9', slotIdx: 8, name: 'Final Flash', type: 'beam', mult: 5.0, kiCost: 120, cd: 6.0, range: 600, color: '#eab308', core: '#fef9c3', icon: 'kynang/iconkynang/xayda/skill9_xayda.png', desc: 'Tuyệt kỹ Final Flash hoàng tử Xayda.' }
  ],
  namek: [
    { id: 'nm_1', slotIdx: 0, name: 'Đấm Demon', type: 'melee', mult: 1.25, kiCost: 0, cd: 0.32, range: 82, icon: 'kynang/iconkynang/namek/skill1_namek.png', desc: 'Đòn đánh sải tay dài của tộc Namếc.' },
    { id: 'nm_2', slotIdx: 1, name: 'Masenko', type: 'beam', mult: 2.9, kiCost: 35, cd: 1.5, range: 520, color: '#4ade80', core: '#dcfce7', icon: 'kynang/iconkynang/namek/skill2_namek.png', desc: 'Chưởng khí Masenko tốc độ cao.' },
    { id: 'nm_3', slotIdx: 2, name: 'Trị Thương Namếc', type: 'charge', mult: 0, kiCost: 30, cd: 6.5, range: 0, icon: 'kynang/iconkynang/namek/skill3_namek.png', desc: 'Năng lực hồi phục thần tốc 65% HP & KI.' },
    { id: 'nm_4', slotIdx: 3, name: 'Makankosappo', type: 'spirit', mult: 5.6, kiCost: 130, cd: 9.0, range: 500, color: '#22c55e', icon: 'kynang/iconkynang/namek/skill4_namek.png', desc: 'Tia sáng xoắn ốc xuyên thủng mọi lớp giáp.' },
    { id: 'nm_5', slotIdx: 4, name: 'Đẻ Trứng Đệ Tử', type: 'egg', mult: 0, kiCost: 120, cd: 20.0, range: 0, icon: 'kynang/iconkynang/namek/skill5_namek.png', desc: 'Triệu hồi ngay Đệ Tử Namếc sát cánh chiến đấu.' },
    { id: 'nm_6', slotIdx: 5, name: 'Liên Hoàn Chưởng', type: 'tele', mult: 3.4, kiCost: 65, cd: 4.5, range: 380, icon: 'kynang/iconkynang/namek/skill6_namek.png', desc: 'Áp sát tung liên hoàn chưởng lực.' },
    { id: 'nm_7', slotIdx: 6, name: 'Khiên Năng Lượng', type: 'shield', mult: 0, kiCost: 50, cd: 12.0, range: 0, icon: 'kynang/iconkynang/namek/skill7_namek.png', desc: 'Tạo khiên bảo hộ giảm 75% sát thương.' },
    { id: 'nm_8', slotIdx: 7, name: 'Hợp Thể Thần Namếc', type: 'transform', caitrang: 'goku_black_rose', mult: 2.3, kiCost: 95, cd: 14.0, range: 0, icon: 'kynang/iconkynang/namek/skill8_namek.png', desc: 'Thức tỉnh sức mạnh Thần Hủy Diệt.' },
    { id: 'nm_9', slotIdx: 8, name: 'Hellzone Grenade', type: 'beam', mult: 4.8, kiCost: 110, cd: 6.0, range: 580, color: '#10b981', core: '#ecfdf5', icon: 'kynang/iconkynang/namek/skill9_namek.png', desc: 'Mưa đạn khí bao vây mục tiêu.' }
  ]
};

// Danh mục Vật phẩm chuẩn ItemData.java & ItemThuongXuLi.java (100% ảnh thật trong /assets/vatpham/)
export const ITEM_CATALOG = {
  // === ÁO QUẦN & TRANG BỊ ===
  ao_cam: {
    id: 'ao_cam', name: 'Áo Võ Phục Quy Lão', slot: 'ao', setVisual: 'set_cam',
    icon: 'vatpham/do/traidat/set_cam/ao.png',
    stats: { defense: 35, maxHp: 650 }, gold: 4500, gem: 0, maxSocket: 7,
    desc: 'Võ phục truyền thống Quy Tiên Sinh truyền dạy.'
  },
  quan_cam: {
    id: 'quan_cam', name: 'Quần Võ Phục Quy Lão', slot: 'quan', setVisual: 'set_cam',
    icon: 'vatpham/do/traidat/set_cam/quan.png',
    stats: { maxHp: 900, maxKi: 400 }, gold: 4200, gem: 0, maxSocket: 7,
    desc: 'Quần võ phục bền bỉ tăng sinh lực.'
  },
  gang_cam: {
    id: 'gang_cam', name: 'Găng Võ Thuật Cam', slot: 'gang',
    icon: 'vatpham/do/traidat/set_cam/gang.png',
    stats: { attack: 85, crit: 3 }, gold: 6000, gem: 0, maxSocket: 7,
    desc: 'Găng tay võ đạo gia tăng sức đấm.'
  },
  giay_cam: {
    id: 'giay_cam', name: 'Giày Tinh Anh', slot: 'giay',
    icon: 'vatpham/do/traidat/set_cam/giay.png',
    stats: { maxKi: 850, defense: 20 }, gold: 4800, gem: 0, maxSocket: 7,
    desc: 'Giày nhẹ giúp di chuyển & bay lượn linh hoạt.'
  },
  rada_cap1: {
    id: 'rada_cap1', name: 'Rađa Dò Ngọc Cấp 1', slot: 'rada',
    icon: 'vatpham/do/rada/rada1.png',
    stats: { crit: 8, attack: 45 }, gold: 8000, gem: 0, maxSocket: 7,
    desc: 'Rađa Bulma chế tạo, tăng tỉ lệ chí mạng.'
  },
  ao_than_linh: {
    id: 'ao_than_linh', name: 'Áo Thần Linh Tối Thượng', slot: 'ao', setVisual: 'set_huy_diet',
    icon: 'vatpham/do/traidat/set_than_linh/ao.png',
    stats: { defense: 160, maxHp: 4200 }, gold: 45000, gem: 25, maxSocket: 7,
    desc: 'Chiến giáp Thần Linh phát hào quang uy nghiêm.'
  },
  quan_than_linh: {
    id: 'quan_than_linh', name: 'Quần Thần Linh Tối Thượng', slot: 'quan', setVisual: 'set_huy_diet',
    icon: 'vatpham/do/traidat/set_than_linh/quan.png',
    stats: { maxHp: 5500, maxKi: 2500 }, gold: 42000, gem: 25, maxSocket: 7,
    desc: 'Quần Thần Linh gia tăng sinh lực vượt trội.'
  },
  gang_than_linh: {
    id: 'gang_than_linh', name: 'Găng Thần Linh', slot: 'gang',
    icon: 'vatpham/do/traidat/set_than_linh/gang.png',
    stats: { attack: 420, crit: 8 }, gold: 55000, gem: 35, maxSocket: 7,
    desc: 'Găng tay Thần Linh công phá vạn cân.'
  },
  ao_huy_diet: {
    id: 'ao_huy_diet', name: 'Áo Hủy Diệt Beerus', slot: 'ao', setVisual: 'set_huy_diet',
    icon: 'vatpham/do/traidat/set_huy_diet/ao.png',
    stats: { defense: 380, maxHp: 12000, attack: 250 }, gold: 0, gem: 120, maxSocket: 7,
    desc: 'Thần y của Thần Hủy Diệt, uy lực tuyệt đối.'
  },
  quan_huy_diet: {
    id: 'quan_huy_diet', name: 'Quần Hủy Diệt Beerus', slot: 'quan', setVisual: 'set_huy_diet',
    icon: 'vatpham/do/traidat/set_huy_diet/quan.png',
    stats: { maxHp: 16000, maxKi: 8000 }, gold: 0, gem: 110, maxSocket: 7,
    desc: 'Quần Thần Hủy Diệt vạn kiếp bất hoại.'
  },
  gang_huy_diet: {
    id: 'gang_huy_diet', name: 'Găng Hủy Diệt Beerus', slot: 'gang',
    icon: 'vatpham/do/traidat/set_huy_diet/gang.png',
    stats: { attack: 1150, crit: 15 }, gold: 0, gem: 150, maxSocket: 7,
    desc: 'Một đấm mang năng lượng Hakai hủy diệt.'
  },

  // === CẢI TRANG & PHỤ KIỆN (VÁN BAY, ĐEO LƯNG, PET, AURA, BÔNG TAI) ===
  ct_gohan_beast: {
    id: 'ct_gohan_beast', name: 'Cải Trang Gohan Beast', slot: 'caitrang', caitrangKey: 'gohan_beast',
    icon: 'nhanvat/caitrang/gohan_beast/avt.png',
    stats: { attack: 550, maxHp: 5000, maxKi: 4000, crit: 12 }, gold: 0, gem: 80, maxSocket: 7,
    desc: 'Biến hình thành Gohan Beast tóc bạc cực ngầu.'
  },
  ct_broly_lssj: {
    id: 'ct_broly_lssj', name: 'Cải Trang Siêu Xayda Broly', slot: 'caitrang', caitrangKey: 'broly_lssj',
    icon: 'nhanvat/caitrang/broly_lssj/avt.png',
    stats: { attack: 720, maxHp: 8500, defense: 180 }, gold: 0, gem: 95, maxSocket: 7,
    desc: 'Hóa thân Chiến Binh Siêu Xayda Huyền Thoại Broly.'
  },
  ct_black_rose: {
    id: 'ct_black_rose', name: 'Cải Trang Black Goku Rose', slot: 'caitrang', caitrangKey: 'goku_black_rose',
    icon: 'nhanvat/caitrang/goku_black_rose/avt.png',
    stats: { attack: 880, maxKi: 7500, crit: 18 }, gold: 0, gem: 120, maxSocket: 7,
    desc: 'Cải trang Super Saiyan Rosé thần thái tối thượng.'
  },
  ct_xiao: {
    id: 'ct_xiao', name: 'Cải Trang Dạ Xoa Xiao', slot: 'caitrang', caitrangKey: 'xiao',
    icon: 'nhanvat/caitrang/xiao/avt.png',
    stats: { attack: 480, crit: 15, maxKi: 3500 }, gold: 0, gem: 65, maxSocket: 7,
    desc: 'Cải trang đặc biệt từ Vòng Quay Hải Đăng.'
  },
  vb_candauvan: {
    id: 'vb_candauvan', name: 'Cân Đẩu Vân Hoàng Kim', slot: 'vanbay', vanbayKey: 'candauvan',
    icon: 'vatpham/vanbay/candauvan/candauvan.png',
    stats: { maxKi: 1500, defense: 45 }, gold: 15000, gem: 15,
    desc: 'Cưỡi Cân Đẩu Vân khi bay lượn trên không trung.'
  },
  vb_phuonghoang: {
    id: 'vb_phuonghoang', name: 'Phượng Hoàng Lửa Bất Tử', slot: 'vanbay', vanbayKey: 'phuong_hoang_lua',
    icon: 'vatpham/vanbay/phuong_hoang_lua/phuonghoanglua.png',
    stats: { attack: 320, maxHp: 3500, maxKi: 3000 }, gold: 0, gem: 75,
    desc: 'Thần điểu Phượng Hoàng Lửa rực cháy khi bay.'
  },
  dl_kiem_vip: {
    id: 'dl_kiem_vip', name: 'Kiếm Ánh Sáng Trunks', slot: 'deolung', deolungKey: 'kiem_vip', frames: 1,
    icon: 'vatpham/vatphamgame/deo_lung/kiem_vip/1.png',
    stats: { attack: 260, crit: 8 }, gold: 25000, gem: 25,
    desc: 'Thanh thần kiếm đeo sau lưng tăng sức chém chí mạng.'
  },
  dl_canh_thien_than: {
    id: 'dl_canh_thien_than', name: 'Đôi Cánh Thiên Thần', slot: 'deolung', deolungKey: 'canh_thien_than', frames: 2,
    icon: 'vatpham/vatphamgame/deo_lung/canh_thien_than/1.png',
    stats: { maxHp: 4000, maxKi: 4000, defense: 90 }, gold: 0, gem: 60,
    desc: 'Đôi cánh trắng vỗ nhẹ sau lưng nhân vật.'
  },
  pet_cho_vang: {
    id: 'pet_cho_vang', name: 'Pet Cún Vàng Trung Thành', slot: 'pet', petKey: 'cho_vang',
    frames: ['6156', '6157', '6158', '6159', '6160', '6161', '6162'],
    icon: 'vatpham/vatphamgame/pet/cho_vang/6156.png',
    stats: { maxHp: 1200, attack: 90 }, gold: 18000, gem: 10,
    desc: 'Thú cưng chạy theo sau chủ nhân khắp bản đồ.'
  },
  pet_ky_lan: {
    id: 'pet_ky_lan', name: 'Pet Hỏa Kỳ Lân Thần Thú', slot: 'pet', petKey: 'ky_lan',
    frames: ['7072', '7073', '7074', '7075', '7076', '7077', '7078'],
    icon: 'vatpham/vatphamgame/pet/ky_lan/7072.png',
    stats: { attack: 380, maxHp: 4500, crit: 10 }, gold: 0, gem: 70,
    desc: 'Thần thú Hỏa Kỳ Lân uy dũng hộ tống chủ nhân.'
  },
  aura_rong: {
    id: 'aura_rong', name: 'Aura Long Hồn Thượng Giới', slot: 'aura', auraKey: 'rong',
    icon: 'gacha/aura.png',
    stats: { attack: 300, maxHp: 3000, maxKi: 3000 }, gold: 0, gem: 55,
    desc: 'Hào quang tím huyền ảo bao quanh cơ thể.'
  },

  // === VẬT PHẨM ĐẶC BIỆT / TIÊU HAO / PHA LÊ / NGỌC RỒNG ===
  bong_tai_c1: {
    id: 'bong_tai_c1', name: 'Bông Tai Porata Cấp 1', slot: 'consumable', action: 'fusion',
    icon: 'vatpham/vatphamgame/bongtai/bongtaic1.png',
    gold: 50000, gem: 30,
    desc: 'Sử dụng để Hợp Thể cùng Đệ Tử (+60% toàn bộ chỉ số)!'
  },
  bong_tai_c2: {
    id: 'bong_tai_c2', name: 'Bông Tai Porata Cấp 2', slot: 'consumable', action: 'fusion2',
    icon: 'vatpham/vatphamgame/bongtai/bongtaic2.png',
    gold: 0, gem: 85,
    desc: 'Hợp Thể Siêu Cấp cùng Đệ Tử (+110% toàn bộ chỉ số)!'
  },
  trung_de_tu: {
    id: 'trung_de_tu', name: 'Quả Trứng Đệ Tử Mabư', slot: 'consumable', action: 'hatch_detu',
    icon: 'vatpham/vatphamgame/phu_tro/trung_de_tu.png',
    gold: 35000, gem: 20,
    desc: 'Ấp nở ngay 1 Đệ Tử chiến đấu tự động sát cánh bên bạn!'
  },
  cuong_no: {
    id: 'cuong_no', name: 'Cuồng Nộ Siêu Cấp', slot: 'consumable', action: 'buff_atk',
    icon: 'vatpham/vatphamgame/phu_tro/cuong_no.png',
    gold: 5000, gem: 3,
    desc: 'Tăng +50% Sức đánh trong 5 phút.'
  },
  bo_huyet: {
    id: 'bo_huyet', name: 'Bổ Huyết Thần Dược', slot: 'consumable', action: 'buff_hp',
    icon: 'vatpham/vatphamgame/phu_tro/bo_huyet.png',
    gold: 5000, gem: 3,
    desc: 'Tăng +50% HP tối đa trong 5 phút.'
  },
  bo_khi: {
    id: 'bo_khi', name: 'Bổ Khí Tinh Hoa', slot: 'consumable', action: 'buff_ki',
    icon: 'vatpham/vatphamgame/phu_tro/bo_khi.png',
    gold: 5000, gem: 3,
    desc: 'Tăng +50% KI tối đa trong 5 phút.'
  },
  ve_quay: {
    id: 've_quay', name: 'Vé Quay Thượng Đế', slot: 'material',
    icon: 'vatpham/vatphamgame/ve_quay_npc_haidang/vequay.png',
    gold: 10000, gem: 5,
    desc: 'Dùng để quay Vòng Quay May Mắn tại NPC Hải Đăng (Làng Aru).'
  },
  da_pha_le_dame: {
    id: 'da_pha_le_dame', name: 'Đá Pha Lê Đỏ (+Sức Đánh)', slot: 'crystal', crystalStat: 'attack', crystalVal: 45,
    icon: 'vatpham/vatphamgame/phu_tro/dame.png',
    gold: 12000, gem: 5,
    desc: 'Đem tới Thầy Hiếu (Đồi Hoa Cúc) để ép vào Sao Pha Lê (+45 SĐ).'
  },
  da_pha_le_hp: {
    id: 'da_pha_le_hp', name: 'Đá Pha Lê Hồng (+HP)', slot: 'crystal', crystalStat: 'maxHp', crystalVal: 550,
    icon: 'vatpham/vatphamgame/phu_tro/hp.png',
    gold: 10000, gem: 4,
    desc: 'Đem tới Thầy Hiếu (Đồi Hoa Cúc) để ép vào Sao Pha Lê (+550 HP).'
  },
  da_pha_le_ki: {
    id: 'da_pha_le_ki', name: 'Đá Pha Lê Xanh (+KI)', slot: 'crystal', crystalStat: 'maxKi', crystalVal: 500,
    icon: 'vatpham/vatphamgame/phu_tro/ki.png',
    gold: 10000, gem: 4,
    desc: 'Đem tới Thầy Hiếu (Đồi Hoa Cúc) để ép vào Sao Pha Lê (+500 KI).'
  },

  // === 7 VIÊN NGỌC RỒNG ===
  nr_1s: { id: 'nr_1s', name: 'Ngọc Rồng 1 Sao', slot: 'dragonball', star: 1, icon: 'vatpham/vatphamgame/ngocrong/nr1s.png', gold: 0, gem: 50, desc: 'Tụ họp đủ 1-7 Sao bấm Sử Dụng để triệu hồi Rồng Thần!' },
  nr_2s: { id: 'nr_2s', name: 'Ngọc Rồng 2 Sao', slot: 'dragonball', star: 2, icon: 'vatpham/vatphamgame/ngocrong/nr2s.png', gold: 0, gem: 40, desc: 'Viên Ngọc Rồng 2 Sao lấp lánh.' },
  nr_3s: { id: 'nr_3s', name: 'Ngọc Rồng 3 Sao', slot: 'dragonball', star: 3, icon: 'vatpham/vatphamgame/ngocrong/nr3s.png', gold: 0, gem: 35, desc: 'Viên Ngọc Rồng 3 Sao kỷ vật của Ông Nội Gôhan.' },
  nr_4s: { id: 'nr_4s', name: 'Ngọc Rồng 4 Sao', slot: 'dragonball', star: 4, icon: 'vatpham/vatphamgame/ngocrong/nr4s.png', gold: 25000, gem: 0, desc: 'Viên Ngọc Rồng 4 Sao linh thiêng.' },
  nr_5s: { id: 'nr_5s', name: 'Ngọc Rồng 5 Sao', slot: 'dragonball', star: 5, icon: 'vatpham/vatphamgame/ngocrong/nr5s.png', gold: 25000, gem: 0, desc: 'Viên Ngọc Rồng 5 Sao.' },
  nr_6s: { id: 'nr_6s', name: 'Ngọc Rồng 6 Sao', slot: 'dragonball', star: 6, icon: 'vatpham/vatphamgame/ngocrong/nr6s.png', gold: 20000, gem: 0, desc: 'Viên Ngọc Rồng 6 Sao.' },
  nr_7s: { id: 'nr_7s', name: 'Ngọc Rồng 7 Sao', slot: 'dragonball', star: 7, icon: 'vatpham/vatphamgame/ngocrong/nr7s.png', gold: 20000, gem: 0, desc: 'Viên Ngọc Rồng 7 Sao.' }
};

export const SHOP_TABS = [
  {
    key: 'AO_QUAN',
    label: 'Trang Bị',
    items: ['ao_cam', 'quan_cam', 'gang_cam', 'giay_cam', 'rada_cap1', 'ao_than_linh', 'quan_than_linh', 'gang_than_linh', 'ao_huy_diet', 'quan_huy_diet', 'gang_huy_diet']
  },
  {
    key: 'PHU_KIEN',
    label: 'Cải Trang',
    items: ['ct_gohan_beast', 'ct_broly_lssj', 'ct_black_rose', 'ct_xiao', 'vb_candauvan', 'vb_phuonghoang', 'dl_kiem_vip', 'dl_canh_thien_than', 'pet_cho_vang', 'pet_ky_lan', 'aura_rong']
  },
  {
    key: 'DAC_BIET',
    label: 'Đặc Biệt',
    items: ['bong_tai_c1', 'bong_tai_c2', 'trung_de_tu', 'cuong_no', 'bo_huyet', 'bo_khi', 've_quay', 'da_pha_le_dame', 'da_pha_le_hp', 'da_pha_le_ki', 'nr_4s', 'nr_5s', 'nr_6s', 'nr_7s']
  }
];

// Cốt truyện chính tuyến chuẩn Ngọc Rồng Online (8 Nhiệm vụ xuyên suốt 5 Map)
export const STORY_QUESTS = [
  {
    id: 1,
    title: 'Lời Dặn Của Ông Gôhan',
    npcId: 'ong_gohan',
    type: 'talk',
    targetId: 'ong_gohan',
    count: 1,
    desc: 'Hãy trò chuyện với Ông Gôhan ngay trước sân Nhà Gôhan để nhận hành trang võ đạo đầu tiên.',
    hint: 'Click trực tiếp vào Ông Gôhan (Nhà Gôhan) hoặc nhấn phím E khi đứng gần.',
    reward: { gold: 5000, gem: 15, power: 1500, item: 'ao_cam' }
  },
  {
    id: 2,
    title: 'Bảo Vệ Làng Aru',
    npcId: 'ong_gohan',
    type: 'kill',
    targetId: 'cho_vang',
    count: 5,
    desc: 'Bầy Khuyển Lang đang quấy nhiễu dân làng! Hãy đi qua lối sang phải tới Làng Aru và đánh bại 5 Khuyển Lang.',
    hint: 'Đi về phía bên phải Nhà Gôhan -> Sang Làng Aru -> Đánh 5 Khuyển Lang.',
    reward: { gold: 12000, gem: 20, power: 4500, item: 'gang_cam' }
  },
  {
    id: 3,
    title: 'Quét Sạch Thằn Lằn Bay',
    npcId: 'admin_thanhle',
    type: 'kill',
    targetId: 'khung_long_bay',
    count: 5,
    desc: 'Thằn Lằn Bay từ vách núi tràn xuống Làng Aru! Hãy tiêu diệt 5 Thằn Lằn Bay để giữ bình yên cho thôn làng.',
    hint: 'Ở giữa và cuối Làng Aru, tiêu diệt 5 Thằn Lằn Bay.',
    reward: { gold: 20000, gem: 25, power: 9000, item: 'vb_candauvan' }
  },
  {
    id: 4,
    title: 'Thử Thách Đồi Hoa Cúc',
    npcId: 'thay_hieu',
    type: 'kill',
    targetId: 'xen_con',
    count: 6,
    desc: 'Vượt qua lối phải Làng Aru để tiến vào Đồi Hoa Cúc dưới chân Tháp Karin. Hãy tiêu diệt 6 Xên Con Đột Biến!',
    hint: 'Từ Làng Aru đi hết sang phải -> Đồi Hoa Cúc -> Hạ 6 Xên Con Đột Biến.',
    reward: { gold: 35000, gem: 35, power: 22000, item: 'trung_de_tu' }
  },
  {
    id: 5,
    title: 'Khuất Phục Ngưu Ma Tinh',
    npcId: 'thay_hieu',
    type: 'kill',
    targetId: 'trau',
    count: 6,
    desc: 'Đàn Ngưu Ma Tinh hung hãn đang chắn giữ sườn đồi cao Đồi Hoa Cúc. Hãy đánh bại 6 Ngưu Ma Tinh!',
    hint: 'Tại bậc đồi bên phải Đồi Hoa Cúc (gần Thầy Hiếu), tiêu diệt 6 Ngưu Ma Tinh.',
    reward: { gold: 55000, gem: 45, power: 45000, item: 'nr_3s' }
  },
  {
    id: 6,
    title: 'Đại Chiến Siêu Xayda Broly',
    npcId: 'ong_gohan',
    type: 'kill',
    targetId: 'boss_broly',
    count: 1,
    desc: 'Luồng sát khí khủng khiếp phát ra từ Vách Núi Kakarot (phía Tây Làng Aru)! Hãy đánh bại BOSS Siêu Xayda Huyền Thoại Broly!',
    hint: 'Từ Làng Aru đi hết sang trái -> Vách Núi Kakarot -> Đánh bại BOSS Broly!',
    reward: { gold: 150000, gem: 100, power: 150000, item: 'nr_1s' }
  },
  {
    id: 7,
    title: 'Giải Cứu Thung Lũng Namếc',
    npcId: 'thay_hieu',
    type: 'kill',
    targetId: 'boss_black_rose',
    count: 1,
    desc: 'Black Goku Rosé đã xuất hiện tại Thung Lũng Namếc (phía Đông Đồi Hoa Cúc)! Hãy tiêu diệt hắn để đoạt lại Ngọc Rồng 2 Sao!',
    hint: 'Từ Đồi Hoa Cúc đi hết sang phải -> Thung Lũng Namếc -> Hạ BOSS Black Goku Rosé!',
    reward: { gold: 300000, gem: 180, power: 350000, item: 'nr_2s' }
  },
  {
    id: 8,
    title: 'Truyền Thuyết Rồng Thần',
    npcId: 'ong_gohan',
    type: 'shenron',
    targetId: 'shenron',
    count: 1,
    desc: 'Thu thập đủ bộ 7 Viên Ngọc Rồng (1 Sao đến 7 Sao), mở Hành Trang bấm vào Ngọc Rồng để Gọi Rồng Thần và ước nguyện!',
    hint: 'Săn quái/Mua tại Shop/Quay Gacha đủ 7 viên Ngọc Rồng -> Mở Hành Trang -> Gọi Rồng Thần!',
    reward: { gold: 999999, gem: 500, power: 1000000, item: 'ct_gohan_beast' }
  }
];

// Mẫu Quái Vật sử dụng 100% Sprite thật của repo DANG-PH/ngoc-rong-online (KHÔNG VẼ HÌNH HỌC GIẢ!)
export const MONSTER_TEMPLATES = {
  cho_vang: {
    id: 'cho_vang',
    name: 'Khuyển Lang',
    renderType: 'frames',
    frames: [
      'vatpham/vatphamgame/pet/cho_vang/6156.png',
      'vatpham/vatphamgame/pet/cho_vang/6157.png',
      'vatpham/vatphamgame/pet/cho_vang/6158.png',
      'vatpham/vatphamgame/pet/cho_vang/6159.png',
      'vatpham/vatphamgame/pet/cho_vang/6160.png',
      'vatpham/vatphamgame/pet/cho_vang/6161.png',
      'vatpham/vatphamgame/pet/cho_vang/6162.png'
    ],
    scale: 0.72,
    hp: 650,
    attack: 22,
    exp: 160,
    gold: 280,
    speed: 42
  },
  meo_den: {
    id: 'meo_den',
    name: 'Hắc Miêu Tinh',
    renderType: 'frames',
    frames: [
      'vatpham/vatphamgame/pet/meo_den/10877.png',
      'vatpham/vatphamgame/pet/meo_den/10878.png',
      'vatpham/vatphamgame/pet/meo_den/10879.png',
      'vatpham/vatphamgame/pet/meo_den/10880.png',
      'vatpham/vatphamgame/pet/meo_den/10881.png',
      'vatpham/vatphamgame/pet/meo_den/10882.png',
      'vatpham/vatphamgame/pet/meo_den/10883.png'
    ],
    scale: 0.78,
    hp: 950,
    attack: 30,
    exp: 240,
    gold: 380,
    speed: 50
  },
  khung_long_bay: {
    id: 'khung_long_bay',
    name: 'Thằn Lằn Bay',
    renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/khunglong/myTexture2drong.png',
    frameCount: 3,
    drawW: 58,
    drawH: 58,
    flyOffset: 24,
    hp: 1400,
    attack: 42,
    exp: 360,
    gold: 520,
    speed: 58
  },
  tuan_loc: {
    id: 'tuan_loc',
    name: 'Lộc Thần Rừng',
    renderType: 'frames',
    frames: [
      'vatpham/vatphamgame/pet/tuan_loc/6680.png',
      'vatpham/vatphamgame/pet/tuan_loc/6681.png',
      'vatpham/vatphamgame/pet/tuan_loc/6682.png',
      'vatpham/vatphamgame/pet/tuan_loc/6683.png',
      'vatpham/vatphamgame/pet/tuan_loc/6684.png',
      'vatpham/vatphamgame/pet/tuan_loc/6685.png',
      'vatpham/vatphamgame/pet/tuan_loc/6686.png'
    ],
    scale: 0.74,
    hp: 2600,
    attack: 68,
    exp: 680,
    gold: 850,
    speed: 52
  },
  xen_con: {
    id: 'xen_con',
    name: 'Xên Con Đột Biến',
    renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/xenxanh/mount_16_0.png',
    frameCount: 4,
    drawW: 86,
    drawH: 82,
    flyOffset: 10,
    hp: 4200,
    attack: 95,
    exp: 1150,
    gold: 1350,
    speed: 56
  },
  trau: {
    id: 'trau',
    name: 'Ngưu Ma Tinh',
    renderType: 'frames',
    frames: [
      'vatpham/vatphamgame/pet/trau/7482.png',
      'vatpham/vatphamgame/pet/trau/7483.png',
      'vatpham/vatphamgame/pet/trau/7484.png',
      'vatpham/vatphamgame/pet/trau/7485.png',
      'vatpham/vatphamgame/pet/trau/7486.png',
      'vatpham/vatphamgame/pet/trau/7487.png',
      'vatpham/vatphamgame/pet/trau/7488.png'
    ],
    scale: 0.82,
    hp: 6500,
    attack: 135,
    exp: 1850,
    gold: 2100,
    speed: 48
  },
  zinba: {
    id: 'zinba',
    name: 'Sư Tử Lửa Zinba',
    renderType: 'frames',
    frames: [
      'vatpham/vatphamgame/pet/zinba/25200.png',
      'vatpham/vatphamgame/pet/zinba/25201.png',
      'vatpham/vatphamgame/pet/zinba/25202.png',
      'vatpham/vatphamgame/pet/zinba/25203.png',
      'vatpham/vatphamgame/pet/zinba/25204.png',
      'vatpham/vatphamgame/pet/zinba/25205.png',
      'vatpham/vatphamgame/pet/zinba/25206.png',
      'vatpham/vatphamgame/pet/zinba/25207.png'
    ],
    scale: 0.72,
    hp: 11000,
    attack: 210,
    exp: 3400,
    gold: 3500,
    speed: 62
  },
  khi_dot: {
    id: 'khi_dot',
    name: 'Khỉ Đột Vách Núi',
    renderType: 'caitrang',
    caitrangKey: 'khi_7',
    scale: 0.62,
    hp: 18000,
    attack: 290,
    exp: 5600,
    gold: 5200,
    speed: 55
  },
  boss_broly: {
    id: 'boss_broly',
    name: 'BOSS Broly Huyền Thoại',
    renderType: 'caitrang',
    caitrangKey: 'broly_lssj',
    isBoss: true,
    auraColor: 'xanh',
    scale: 0.68,
    hp: 55000,
    attack: 520,
    exp: 25000,
    gold: 35000,
    speed: 75,
    respawnSec: 18
  },
  rua_co_dai: {
    id: 'rua_co_dai',
    name: 'Rùa Cổ Đại Namếc',
    renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/rua/mount_9_0.png',
    frameCount: 4,
    drawW: 84,
    drawH: 84,
    flyOffset: 0,
    hp: 16000,
    attack: 260,
    exp: 4800,
    gold: 4600,
    speed: 42
  },
  xen_hoang_kim: {
    id: 'xen_hoang_kim',
    name: 'Xên Hoàng Kim',
    renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/xenvang/mount_17_0.png',
    frameCount: 4,
    drawW: 92,
    drawH: 92,
    flyOffset: 14,
    hp: 26000,
    attack: 390,
    exp: 8200,
    gold: 7500,
    speed: 64
  },
  boss_black_rose: {
    id: 'boss_black_rose',
    name: 'BOSS Black Goku Rosé',
    renderType: 'caitrang',
    caitrangKey: 'goku_black_rose',
    isBoss: true,
    auraColor: 'tim',
    scale: 0.68,
    hp: 95000,
    attack: 780,
    exp: 52000,
    gold: 68000,
    speed: 82,
    respawnSec: 20
  }
};

// Cấu hình 5 Bản Đồ chuẩn toạ độ LibGDX của DANG-PH/ngoc-rong-online
export const MAPS_CONFIG = [
  // ================= MAP 0: NHÀ GÔHAN (1420 x 760) =================
  {
    id: 0,
    key: 'nha_gohan',
    name: 'Nhà Gôhan',
    planetTheme: 'traidat',
    width: 1420,
    height: 760,
    defaultSpawn: { x: 325, y: 175 },
    hitboxes: [
      { x: -100, y: 0, w: 1620, h: 175 } // Mặt đất đứng ở y = 175
    ],
    waypoints: [
      {
        id: 'wp_to_aru',
        label: 'Làng Aru',
        signRect: { x: 760, y: 295, w: 210, h: 52 },
        showRangeX: [600, 1380],
        triggerX: [1310, 1430],
        clickPortal: true,
        targetMapId: 1,
        targetX: 675,
        targetY: 175
      }
    ],
    npcs: [
      { id: 'ruong_do', name: 'Rương Đồ', kind: 'chest', x: 105, y: 175, tex: 'nhanvat/npc/ruong_do/1.png', avt: 'nhanvat/npc/ruong_do/avt_ruong.png' },
      { id: 'admin_dungle', name: 'Admin Dũng Lê', kind: 'modular', folder: 'admin_dungle', x: 205, y: 175 },
      { id: 'ong_gohan', name: 'Ông Gôhan', kind: 'modular', folder: 'ong_gohan', x: 445, y: 175 },
      { id: 'dau_traidat', name: 'Cây Đậu Thần', kind: 'senzu_tree', x: 615, y: 175 },
      { id: 'dui_ga', name: 'Đùi Gà Nướng', kind: 'meat', x: 1178, y: 205, tex: 'nhanvat/npc/dui_ga/1.png' }
    ],
    monsters: []
  },

  // ================= MAP 1: LÀNG ARU (2400 x 1000) =================
  {
    id: 1,
    key: 'lang_aru',
    name: 'Làng Aru',
    planetTheme: 'traidat',
    width: 2400,
    height: 1000,
    defaultSpawn: { x: 675, y: 175 },
    hitboxes: [
      { x: -96, y: -38, w: 2592, h: 213 } // Top surface = -38 + 213 = 175
    ],
    waypoints: [
      {
        id: 'wp_aru_to_xayda',
        label: 'Vách Núi Kakarot',
        signRect: { x: 16, y: 295, w: 230, h: 52 },
        showRangeX: [0, 320],
        triggerX: [-90, 28],
        clickPortal: true,
        targetMapId: 3,
        targetX: 1760,
        targetY: 175
      },
      {
        id: 'wp_aru_to_nhagohan',
        label: 'Vào Nhà Gôhan',
        signRect: { x: 570, y: 295, w: 215, h: 52 },
        showRangeX: [520, 830],
        triggerX: null, // Click bảng hoặc bấm Enter trước cửa nhà Gôhan (x=675)
        clickPortal: true,
        targetMapId: 0,
        targetX: 875,
        targetY: 175
      },
      {
        id: 'wp_aru_to_doihoacuc',
        label: 'Đồi Hoa Cúc',
        signRect: { x: 2155, y: 295, w: 225, h: 52 },
        showRangeX: [1980, 2400],
        triggerX: [2368, 2500],
        clickPortal: true,
        targetMapId: 2,
        targetX: 90,
        targetY: 175
      }
    ],
    npcs: [
      { id: 'admin_thanhle', name: 'Chủ Tiệm Thành Lê', kind: 'modular', folder: 'admin_thanhle', x: 330, y: 175 },
      { id: 'admin_haidang', name: 'Vòng Quay Hải Đăng', kind: 'modular', folder: 'admin_haidang', x: 1410, y: 175 }
    ],
    monsters: [
      { template: 'cho_vang', x: 880, minX: 780, maxX: 1020 },
      { template: 'cho_vang', x: 1080, minX: 960, maxX: 1220 },
      { template: 'meo_den', x: 1260, minX: 1150, maxX: 1360 },
      { template: 'cho_vang', x: 1580, minX: 1480, maxX: 1720 },
      { template: 'khung_long_bay', x: 1760, minX: 1620, maxX: 1920 },
      { template: 'khung_long_bay', x: 1960, minX: 1840, maxX: 2120 },
      { template: 'khung_long_bay', x: 2150, minX: 2020, maxX: 2290 }
    ]
  },

  // ================= MAP 2: ĐỒI HOA CÚC (2976 x 1000) =================
  {
    id: 2,
    key: 'doi_hoa_cuc',
    name: 'Đồi Hoa Cúc',
    planetTheme: 'traidat',
    width: 2976,
    height: 1000,
    defaultSpawn: { x: 100, y: 175 },
    hitboxes: [
      { x: -80, y: -134, w: 944, h: 309 },  // [0 .. 864] -> top = 175
      { x: 864, y: -134, w: 864, h: 261 },  // [864 .. 1728] -> top = 127
      { x: 1728, y: -134, w: 1320, h: 357 } // [1728 .. 2976] -> top = 223
    ],
    waypoints: [
      {
        id: 'wp_dhc_to_aru',
        label: 'Làng Aru',
        signRect: { x: 16, y: 295, w: 200, h: 52 },
        showRangeX: [0, 300],
        triggerX: [-80, 25],
        clickPortal: true,
        targetMapId: 1,
        targetX: 2300,
        targetY: 175
      },
      {
        id: 'wp_dhc_to_namek',
        label: 'Thung Lũng Namếc',
        signRect: { x: 2710, y: 340, w: 245, h: 52 },
        showRangeX: [2550, 2976],
        triggerX: [2940, 3060],
        clickPortal: true,
        targetMapId: 4,
        targetX: 110,
        targetY: 175
      }
    ],
    npcs: [
      { id: 'admin_huykhoi', name: 'Sứ Giả Huy Khôi', kind: 'modular', folder: 'admin_huykhoi', x: 1578, y: 127 },
      { id: 'thay_hieu', name: 'Thầy Hiếu Pha Lê', kind: 'modular', folder: 'thay_hieu', x: 2028, y: 223 }
    ],
    monsters: [
      { template: 'tuan_loc', x: 380, minX: 250, maxX: 540 },
      { template: 'tuan_loc', x: 650, minX: 520, maxX: 820 },
      { template: 'xen_con', x: 1020, minX: 900, maxX: 1200 },
      { template: 'xen_con', x: 1260, minX: 1120, maxX: 1440 },
      { template: 'xen_con', x: 1450, minX: 1320, maxX: 1530 },
      { template: 'trau', x: 2240, minX: 2120, maxX: 2420 },
      { template: 'trau', x: 2480, minX: 2340, maxX: 2640 },
      { template: 'trau', x: 2680, minX: 2540, maxX: 2840 }
    ]
  },

  // ================= MAP 3: VÁCH NÚI KAKAROT (1900 x 820 - XAYDA) =================
  {
    id: 3,
    key: 'vach_nui_kakarot',
    name: 'Vách Núi Kakarot',
    planetTheme: 'xayda',
    width: 1900,
    height: 820,
    defaultSpawn: { x: 1740, y: 175 },
    hitboxes: [
      { x: -80, y: 0, w: 2060, h: 175 }
    ],
    waypoints: [
      {
        id: 'wp_xayda_to_aru',
        label: 'Làng Aru',
        signRect: { x: 1665, y: 295, w: 210, h: 52 },
        showRangeX: [1520, 1900],
        triggerX: [1870, 1980],
        clickPortal: true,
        targetMapId: 1,
        targetX: 95,
        targetY: 175
      }
    ],
    npcs: [],
    monsters: [
      { template: 'zinba', x: 1460, minX: 1320, maxX: 1600 },
      { template: 'zinba', x: 1220, minX: 1080, maxX: 1360 },
      { template: 'khi_dot', x: 950, minX: 800, maxX: 1100 },
      { template: 'khi_dot', x: 700, minX: 560, maxX: 840 },
      { template: 'boss_broly', x: 360, minX: 180, maxX: 540 }
    ]
  },

  // ================= MAP 4: THUNG LŨNG NAMẾC (2200 x 850 - NAMEK) =================
  {
    id: 4,
    key: 'thung_lung_namek',
    name: 'Thung Lũng Namếc',
    planetTheme: 'namek',
    width: 2200,
    height: 850,
    defaultSpawn: { x: 110, y: 175 },
    hitboxes: [
      { x: -80, y: 0, w: 2360, h: 175 }
    ],
    waypoints: [
      {
        id: 'wp_namek_to_dhc',
        label: 'Đồi Hoa Cúc',
        signRect: { x: 16, y: 295, w: 215, h: 52 },
        showRangeX: [0, 320],
        triggerX: [-80, 25],
        clickPortal: true,
        targetMapId: 2,
        targetX: 2880,
        targetY: 223
      }
    ],
    npcs: [],
    monsters: [
      { template: 'rua_co_dai', x: 450, minX: 320, maxX: 600 },
      { template: 'rua_co_dai', x: 740, minX: 600, maxX: 900 },
      { template: 'xen_hoang_kim', x: 1060, minX: 920, maxX: 1220 },
      { template: 'xen_hoang_kim', x: 1360, minX: 1200, maxX: 1520 },
      { template: 'boss_black_rose', x: 1820, minX: 1620, maxX: 2020 }
    ]
  }
];

export const GIFTCODES = {
  TANTHU: { gold: 50000, gem: 50, items: ['ve_quay', 'cuong_no', 'bo_huyet'], msg: 'Nhận Giftcode TANTHU: +50K Vàng, +50 Ngọc, Vé quay & Dược phẩm!' },
  NROWEB: { gold: 150000, gem: 120, items: ['vb_candauvan', 'trung_de_tu', 'bong_tai_c1'], msg: 'Nhận Giftcode NROWEB: +150K Vàng, +120 Ngọc, Cân Đẩu Vân, Trứng Đệ Tử & Bông Tai!' },
  DRAGONBOY: { gold: 200000, gem: 200, items: ['ct_gohan_beast', 'dl_kiem_vip'], msg: 'Nhận Giftcode DRAGONBOY: +200K Vàng, +200 Ngọc, Cải Trang Gohan Beast & Kiếm Trunks!' },
  NGOCRONG: { gold: 100000, gem: 100, items: ['nr_1s', 'nr_2s', 'nr_3s', 'nr_4s', 'nr_5s', 'nr_6s', 'nr_7s'], msg: 'Nhận trọn bộ 7 Viên Ngọc Rồng! Hãy mở Hành Trang gọi Rồng Thần ngay!' }
};

export function formatNroNum(n) {
  const num = Math.floor(Number(n) || 0);
  return num.toLocaleString('vi-VN');
}
