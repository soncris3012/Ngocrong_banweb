// Dữ liệu gốc chuẩn 100% Ngọc Rồng Online (Teamobi) & LibGDX DANG-PH/ngoc-rong-online
// Tọa độ Virtual Viewport: 1020 x 610 (Gốc (0,0) ở góc dưới-trái chuẩn LibGDX)

export const VIRTUAL_W = 1020;
export const VIRTUAL_H = 610;

export const PLANET_DEFS = [
  {
    id: 0,
    key: 'traidat',
    name: 'Trái Đất',
    avatars: ['Goku_base', 'Krillin_base', 'Yamcha_base'],
    charNames: ['Goku', 'Krillin', 'Yamcha'],
    baseStats: { maxHp: 360, hp: 360, maxKi: 360, ki: 360, attack: 26, defense: 4, crit: 3 }
  },
  {
    id: 1,
    key: 'xayda',
    name: 'Xayda',
    avatars: ['Cađíc_base', 'Rađíc_base', 'Kakalot_base'],
    charNames: ['Cađíc', 'Rađíc', 'Kakalot'],
    baseStats: { maxHp: 420, hp: 420, maxKi: 300, ki: 300, attack: 32, defense: 5, crit: 6 }
  },
  {
    id: 2,
    key: 'namek',
    keyName: 'Namếc',
    name: 'Namếc',
    avatars: ['namek_base', 'namek_base', 'namek_base'],
    charNames: ['Ốc tiêu', 'Piccolo', 'Kami'],
    baseStats: { maxHp: 440, hp: 440, maxKi: 450, ki: 450, attack: 25, defense: 6, crit: 3 }
  }
];

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

export const NPC_OFFSETS = {
  ong_gohan: { chanX: 0, chanY: 0, thanX: 0, thanY: 0, dauX: 0, dauY: -20.0, extraThanY: 8.5 },
  admin_haidang: { chanX: 0, chanY: 0, thanX: 0, thanY: -1.5, dauX: -0.3, dauY: -16.0, extraThanY: 0 },
  admin_thanhle: { chanX: 0, chanY: 0, thanX: 0, thanY: -1.0, dauX: -1.2, dauY: -16.0, extraThanY: 0 },
  admin_dungle: { chanX: 0, chanY: 0, thanX: 0, thanY: -0.5, dauX: 1.0, dauY: -19.0, extraThanY: 0 },
  thay_hieu: { chanX: 0, chanY: 0, thanX: 0, thanY: -11.0, dauX: 1.0, dauY: -24.2, extraThanY: 0 },
  admin_huykhoi: { chanX: 0, chanY: 0, thanX: 0, thanY: -3.0, dauX: -1.2, dauY: -18.0, extraThanY: 0 }
};

// =========================================================================
// HỆ THỐNG BÍ KÍP VÕ CÔNG CHUẨN CỐT TRUYỆN NGỌC RỒNG ONLINE
// Mới vào game CHỈ CÓ DUY NHẤT CHIÊU 1 (Đấm cơ bản Cấp 1) ở Ô số 1!
// Các chiêu 2..9 bắt đầu ở Cấp 0 (Chưa học) — mở khóa khi bái sư Quy Lão Kame / đủ Sức Mạnh & Tiềm Năng!
// =========================================================================
export const PLANET_SKILLS = {
  traidat: [
    { id: 'td_1', slotIdx: 0, starter: true, reqPower: 0, learnCost: 0, name: 'Đấm Dragon', type: 'melee', mult: 1.25, kiCost: 0, cd: 0.32, range: 78, icon: 'kynang/iconkynang/traidat/skill1_traidat.png', desc: 'Đòn cận chiến cơ bản của võ sinh Trái Đất.' },
    { id: 'td_2', slotIdx: 1, reqPower: 10000, learnCost: 2500, name: 'Kamejoko', type: 'beam', mult: 2.8, kiCost: 30, cd: 1.6, range: 520, color: '#38bdf8', core: '#e0f2fe', icon: 'kynang/iconkynang/traidat/skill2_traidat.png', desc: 'Chưởng khí Kamejoko do Quy Lão Tiên Sinh truyền dạy.' },
    { id: 'td_3', slotIdx: 2, reqPower: 18000, learnCost: 6000, name: 'Thái Dương Hạ San', type: 'solar', mult: 1.8, kiCost: 55, cd: 7.5, range: 280, icon: 'kynang/iconkynang/traidat/skill3_traidat.png', desc: 'Làm chói mắt và choáng toàn bộ quái xung quanh 4 giây.' },
    { id: 'td_4', slotIdx: 3, reqPower: 80000, learnCost: 25000, name: 'Quả Cầu Kênh Khi', type: 'spirit', mult: 5.5, kiCost: 120, cd: 10.0, range: 460, color: '#60a5fa', icon: 'kynang/iconkynang/traidat/skill4_traidat.png', desc: 'Tụ nguyên khí vạn vật hủy diệt vùng rộng.' },
    { id: 'td_5', slotIdx: 4, reqPower: 40000, learnCost: 14000, name: 'Kaioken / Beast', type: 'transform', caitrang: 'gohan_beast', mult: 2.0, kiCost: 70, cd: 14.0, range: 0, icon: 'kynang/iconkynang/traidat/skill5_traidat.png', desc: 'Bộc phát giới hạn chiến binh (+85% Sức đánh).' },
    { id: 'td_6', slotIdx: 5, reqPower: 6000, learnCost: 1800, name: 'Tái Tạo Năng Lượng', type: 'charge', mult: 0, kiCost: 0, cd: 8.0, range: 0, icon: 'kynang/iconkynang/traidat/skill6_traidat.png', desc: 'Gồng khí phục hồi nhanh 55% HP và KI.' },
    { id: 'td_7', slotIdx: 6, reqPower: 150000, learnCost: 45000, name: 'Khiên Năng Lượng', type: 'shield', mult: 0, kiCost: 45, cd: 12.0, range: 0, icon: 'kynang/iconkynang/traidat/skill7_traidat.png', desc: 'Tạo lá chắn giảm 75% sát thương nhận vào trong 8 giây.' },
    { id: 'td_8', slotIdx: 7, reqPower: 250000, learnCost: 80000, name: 'Dịch Chuyển Tức Thời', type: 'tele', mult: 2.4, kiCost: 35, cd: 4.5, range: 420, icon: 'kynang/iconkynang/traidat/skill8_traidat.png', desc: 'Dịch chuyển áp sát mục tiêu và tung đòn chí mạng.' },
    { id: 'td_9', slotIdx: 8, reqPower: 500000, learnCost: 160000, name: 'Super Kamejoko', type: 'beam', mult: 4.8, kiCost: 95, cd: 6.0, range: 600, color: '#2563eb', core: '#ffffff', icon: 'kynang/iconkynang/traidat/skill9_traidat.png', desc: 'Siêu chưởng Kamejoko cực đại.' }
  ],
  xayda: [
    { id: 'xd_1', slotIdx: 0, starter: true, reqPower: 0, learnCost: 0, name: 'Đấm Galick', type: 'melee', mult: 1.35, kiCost: 0, cd: 0.32, range: 78, icon: 'kynang/iconkynang/xayda/skill1_xayda.png', desc: 'Cú đấm cơ bản của chiến binh Xayda.' },
    { id: 'xd_2', slotIdx: 1, reqPower: 10000, learnCost: 2500, name: 'Antomic', type: 'beam', mult: 3.1, kiCost: 32, cd: 1.6, range: 520, color: '#c084fc', core: '#faf5ff', icon: 'kynang/iconkynang/xayda/skill2_xayda.png', desc: 'Tia chưởng tím Antomic sát thương cao.' },
    { id: 'xd_3', slotIdx: 2, reqPower: 6000, learnCost: 1800, name: 'Tái Tạo Năng Lượng', type: 'charge', mult: 0, kiCost: 0, cd: 7.5, range: 0, icon: 'kynang/iconkynang/xayda/skill3_xayda.png', desc: 'Gồng nguyên khí Xayda hồi mạnh HP & KI.' },
    { id: 'xd_4', slotIdx: 3, reqPower: 40000, learnCost: 15000, name: 'Biến Khỉ Khổng Lồ', type: 'transform', caitrang: 'khi_7', mult: 2.2, kiCost: 75, cd: 14.0, range: 0, icon: 'kynang/iconkynang/xayda/skill4_xayda.png', desc: 'Hóa Khỉ Đột Khổng Lồ (+100% Sức đánh & HP).' },
    { id: 'xd_5', slotIdx: 4, reqPower: 90000, learnCost: 30000, name: 'Tự Phát Nổ', type: 'spirit', mult: 6.2, kiCost: 135, cd: 11.0, range: 360, color: '#facc15', icon: 'kynang/iconkynang/xayda/skill5_xayda.png', desc: 'Giải phóng toàn bộ KI gây nổ diện rộng cực mạnh.' },
    { id: 'xd_6', slotIdx: 5, reqPower: 20000, learnCost: 7000, name: 'Huýt Sáo', type: 'whistle', mult: 0, kiCost: 40, cd: 15.0, range: 0, icon: 'kynang/iconkynang/xayda/skill6_xayda.png', desc: 'Tăng +50% HP tối đa cho bản thân & Đệ tử.' },
    { id: 'xd_7', slotIdx: 6, reqPower: 150000, learnCost: 45000, name: 'Khiên Năng Lượng', type: 'shield', mult: 0, kiCost: 45, cd: 12.0, range: 0, icon: 'kynang/iconkynang/xayda/skill7_xayda.png', desc: 'Tạo khiên chắn sát thương 8 giây.' },
    { id: 'xd_8', slotIdx: 7, reqPower: 250000, learnCost: 85000, name: 'Siêu Xayda Huyền Thoại', type: 'transform', caitrang: 'broly_lssj', mult: 2.5, kiCost: 95, cd: 15.0, range: 0, icon: 'kynang/iconkynang/xayda/skill8_xayda.png', desc: 'Hóa Siêu Xayda Broly (+120% Sức đánh).' },
    { id: 'xd_9', slotIdx: 8, reqPower: 500000, learnCost: 160000, name: 'Final Flash', type: 'beam', mult: 5.0, kiCost: 105, cd: 6.0, range: 600, color: '#eab308', core: '#fef9c3', icon: 'kynang/iconkynang/xayda/skill9_xayda.png', desc: 'Tuyệt kỹ Final Flash hoàng tử Xayda.' }
  ],
  namek: [
    { id: 'nm_1', slotIdx: 0, starter: true, reqPower: 0, learnCost: 0, name: 'Đấm Demon', type: 'melee', mult: 1.25, kiCost: 0, cd: 0.32, range: 82, icon: 'kynang/iconkynang/namek/skill1_namek.png', desc: 'Đòn cận chiến cơ bản của tộc Namếc.' },
    { id: 'nm_2', slotIdx: 1, reqPower: 10000, learnCost: 2500, name: 'Masenko', type: 'beam', mult: 2.9, kiCost: 30, cd: 1.5, range: 520, color: '#4ade80', core: '#dcfce7', icon: 'kynang/iconkynang/namek/skill2_namek.png', desc: 'Chưởng khí Masenko tốc độ cao.' },
    { id: 'nm_3', slotIdx: 2, reqPower: 6000, learnCost: 1800, name: 'Trị Thương Namếc', type: 'charge', mult: 0, kiCost: 25, cd: 6.5, range: 0, icon: 'kynang/iconkynang/namek/skill3_namek.png', desc: 'Năng lực hồi phục thần tốc 65% HP & KI.' },
    { id: 'nm_4', slotIdx: 3, reqPower: 80000, learnCost: 25000, name: 'Makankosappo', type: 'spirit', mult: 5.6, kiCost: 115, cd: 9.0, range: 500, color: '#22c55e', icon: 'kynang/iconkynang/namek/skill4_namek.png', desc: 'Tia sáng xoắn ốc xuyên thủng mọi lớp giáp.' },
    { id: 'nm_5', slotIdx: 4, reqPower: 45000, learnCost: 16000, name: 'Đẻ Trứng Đệ Tử', type: 'egg', mult: 0, kiCost: 100, cd: 20.0, range: 0, icon: 'kynang/iconkynang/namek/skill5_namek.png', desc: 'Triệu hồi ngay Đệ Tử Namếc sát cánh chiến đấu.' },
    { id: 'nm_6', slotIdx: 5, reqPower: 20000, learnCost: 7000, name: 'Liên Hoàn Chưởng', type: 'tele', mult: 3.4, kiCost: 55, cd: 4.5, range: 380, icon: 'kynang/iconkynang/namek/skill6_namek.png', desc: 'Áp sát tung liên hoàn chưởng lực.' },
    { id: 'nm_7', slotIdx: 6, reqPower: 150000, learnCost: 45000, name: 'Khiên Năng Lượng', type: 'shield', mult: 0, kiCost: 45, cd: 12.0, range: 0, icon: 'kynang/iconkynang/namek/skill7_namek.png', desc: 'Tạo khiên bảo hộ giảm 75% sát thương.' },
    { id: 'nm_8', slotIdx: 7, reqPower: 250000, learnCost: 85000, name: 'Hợp Thể Thần Namếc', type: 'transform', caitrang: 'goku_black_rose', mult: 2.3, kiCost: 85, cd: 14.0, range: 0, icon: 'kynang/iconkynang/namek/skill8_namek.png', desc: 'Thức tỉnh sức mạnh Thần Hủy Diệt.' },
    { id: 'nm_9', slotIdx: 8, reqPower: 500000, learnCost: 160000, name: 'Hellzone Grenade', type: 'beam', mult: 4.8, kiCost: 95, cd: 6.0, range: 580, color: '#10b981', core: '#ecfdf5', icon: 'kynang/iconkynang/namek/skill9_namek.png', desc: 'Mưa đạn khí bao vây mục tiêu.' }
  ]
};

export function createStarterSkillLevels(planetId = 0) {
  const pKey = PLANET_DEFS[planetId]?.key || 'traidat';
  const list = PLANET_SKILLS[pKey] || PLANET_SKILLS.traidat;
  return { [list[0].id]: 1 };
}

export const ITEM_CATALOG = {
  ao_cam: {
    id: 'ao_cam', name: 'Áo Võ Phục Quy Lão', slot: 'ao', setVisual: 'set_cam',
    icon: 'vatpham/do/traidat/set_cam/ao.png',
    stats: { defense: 18, maxHp: 350 }, gold: 3500, gem: 0, maxSocket: 7,
    desc: 'Võ phục truyền thống Quy Tiên Sinh truyền dạy.'
  },
  quan_cam: {
    id: 'quan_cam', name: 'Quần Võ Phục Quy Lão', slot: 'quan', setVisual: 'set_cam',
    icon: 'vatpham/do/traidat/set_cam/quan.png',
    stats: { maxHp: 450, maxKi: 250 }, gold: 3200, gem: 0, maxSocket: 7,
    desc: 'Quần võ phục bền bỉ tăng sinh lực.'
  },
  gang_cam: {
    id: 'gang_cam', name: 'Găng Võ Thuật Cam', slot: 'gang',
    icon: 'vatpham/do/traidat/set_cam/gang.png',
    stats: { attack: 42, crit: 3 }, gold: 5000, gem: 0, maxSocket: 7,
    desc: 'Găng tay võ đạo gia tăng sức đấm.'
  },
  giay_cam: {
    id: 'giay_cam', name: 'Giày Tinh Anh', slot: 'giay',
    icon: 'vatpham/do/traidat/set_cam/giay.png',
    stats: { maxKi: 550, defense: 14 }, gold: 4200, gem: 0, maxSocket: 7,
    desc: 'Giày nhẹ giúp di chuyển & bay lượn linh hoạt.'
  },
  rada_cap1: {
    id: 'rada_cap1', name: 'Rađa Dò Ngọc Cấp 1', slot: 'rada',
    icon: 'vatpham/do/rada/rada1.png',
    stats: { crit: 8, attack: 35 }, gold: 7000, gem: 0, maxSocket: 7,
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
    desc: 'Cưỡi Cân Đẩu Vân bay lượn trên không trung không tốn KI!'
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
    desc: 'Đem tới Thầy Hiếu (Đảo Kamê) để ép vào Sao Pha Lê (+45 SĐ).'
  },
  da_pha_le_hp: {
    id: 'da_pha_le_hp', name: 'Đá Pha Lê Hồng (+HP)', slot: 'crystal', crystalStat: 'maxHp', crystalVal: 550,
    icon: 'vatpham/vatphamgame/phu_tro/hp.png',
    gold: 10000, gem: 4,
    desc: 'Đem tới Thầy Hiếu (Đảo Kamê) để ép vào Sao Pha Lê (+550 HP).'
  },
  da_pha_le_ki: {
    id: 'da_pha_le_ki', name: 'Đá Pha Lê Xanh (+KI)', slot: 'crystal', crystalStat: 'maxKi', crystalVal: 500,
    icon: 'vatpham/vatphamgame/phu_tro/ki.png',
    gold: 10000, gem: 4,
    desc: 'Đem tới Thầy Hiếu (Đảo Kamê) để ép vào Sao Pha Lê (+500 KI).'
  },
  nr_1s: { id: 'nr_1s', name: 'Ngọc Rồng 1 Sao', slot: 'dragonball', star: 1, icon: 'vatpham/vatphamgame/ngocrong/nr1s.png', gold: 0, gem: 50, desc: 'Tụ họp đủ 1-7 Sao bấm Sử Dụng để triệu hồi Rồng Thần!' },
  nr_2s: { id: 'nr_2s', name: 'Ngọc Rồng 2 Sao', slot: 'dragonball', star: 2, icon: 'vatpham/vatphamgame/ngocrong/nr2s.png', gold: 0, gem: 40, desc: 'Viên Ngọc Rồng 2 Sao lấp lánh.' },
  nr_3s: { id: 'nr_3s', name: 'Ngọc Rồng 3 Sao', slot: 'dragonball', star: 3, icon: 'vatpham/vatphamgame/ngocrong/nr3s.png', gold: 0, gem: 35, desc: 'Viên Ngọc Rồng 3 Sao.' },
  nr_4s: { id: 'nr_4s', name: 'Ngọc Rồng 4 Sao', slot: 'dragonball', star: 4, icon: 'vatpham/vatphamgame/ngocrong/nr4s.png', gold: 25000, gem: 0, desc: 'Viên Ngọc Rồng 4 Sao kỷ vật của Ông Nội Gôhan.' },
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

// =========================================================================
// HỆ THỐNG 8 NHIỆM VỤ CHÍNH TUYẾN CHUẨN 100% NGỌC RỒNG ONLINE (TEAMOBI)
// =========================================================================
export const STORY_QUESTS = [
  {
    id: 1,
    title: 'Nhiệm vụ tập luyện',
    steps: [
      { type: 'kill', targetId: 'moc_nhan', count: 5, text: 'Đánh ngã 5 mộc nhân' },
      { type: 'talk', targetId: 'ong_gohan', count: 1, text: 'Về nhà báo cáo với Ông Gôhan', dialogReply: 'Khá lắm cháu yêu! Đòn đấm của cháu đã cứng cáp rồi. Bây giờ cháu hãy ra Làng Aru và Đồi Hoa Cúc săn Khủng Long mang 10 chiếc Đùi Gà về đây nhé!' }
    ],
    desc: 'Mộc nhân được đặt tại Làng Aru, ngay trước sân nhà ông Gohan. Hãy đi qua dốc cửa bên phải ra Làng Aru dùng chiêu Đấm cơ bản đánh ngã 5 mộc nhân, sau đó quay về nhà báo cáo ông Gohan.\nThưởng: 2.500 SM & TN.',
    reward: { power: 2500, gold: 3000, gem: 10 }
  },
  {
    id: 2,
    title: 'Thu thập 10 Đùi Gà',
    steps: [
      { type: 'pickup_meat', targetId: 'duiga_drop', count: 10, text: 'Đánh Khủng Long nhặt 10 Đùi Gà' },
      { type: 'talk', targetId: 'ong_gohan', count: 1, text: 'Mang Đùi Gà về cho Ông Gôhan', dialogReply: 'Đùi gà tươi ngon lắm! Cháu nhớ thu hoạch thêm Đậu Thần trước sân nhà để hồi sức khi đi xa nhé. Hãy nhận chiếc Quần Võ Phục này!' }
    ],
    desc: 'Ra phía Đông Làng Aru hoặc sang Đồi Hoa Cúc đánh bại Khủng Long, nhặt đủ 10 chiếc Đùi Gà rơi trên mặt đất rồi mang về Nhà Gôhan báo cáo Ông Gôhan.\nThưởng: 5.000 SM & TN, Quần Võ Phục.',
    reward: { power: 5000, gold: 8000, gem: 15, item: 'quan_cam' }
  },
  {
    id: 3,
    title: 'Thử thách Thung Lũng Tre',
    steps: [
      { type: 'kill', targetId: 'lon_loi', count: 8, text: 'Đánh bại 8 Lợn Lòi ở Đồi Hoa Cúc' },
      { type: 'kill', targetId: 'khung_long_me', count: 5, text: 'Hạ 5 Khủng Long Mẹ ở Thung Lũng Tre' },
      { type: 'talk', targetId: 'ong_gohan', count: 1, text: 'Về Nhà Gôhan báo cáo Ông Gôhan', dialogReply: 'Cháu đã đủ bản lĩnh rời làng rồi! Hãy băng qua Rừng Karin (chân Tháp Karin) để tới Đảo Kamê bái sư Quy Lão Tiên Sinh học chưởng pháp nhé!' }
    ],
    desc: 'Tiến sang Đồi Hoa Cúc đánh bại 8 Lợn Lòi, tiếp tục đi sang phía Đông vào Thung Lũng Tre hạ 5 Khủng Long Mẹ rồi về báo cáo Ông Gôhan.\nThưởng: 10.000 SM & TN, Ngọc Rồng 7 Sao.',
    reward: { power: 10000, gold: 15000, gem: 20, item: 'nr_7s' }
  },
  {
    id: 4,
    title: 'Bái sư Quy Lão Kame',
    steps: [
      { type: 'talk', targetId: 'quy_lao_kame', count: 1, unlockSkill2: true, text: 'Tới Đảo Kamê bái sư Quy Lão Kame', dialogReply: 'Hahaha! Cháu nội của Gôhan đó ư? Ta nhận con làm đệ tử và truyền cho con tuyệt kỹ chưởng khí trấn phái ngay vào Ô Chiêu Số 2! Hãy ra Rừng Karin thử chưởng hạ 6 Lợn Lòi Rừng xem!' },
      { type: 'kill', targetId: 'lon_loi_rung', count: 6, text: 'Dùng chưởng mới hạ 6 Lợn Lòi Rừng (Rừng Karin)' },
      { type: 'talk', targetId: 'quy_lao_kame', count: 1, text: 'Quay lại Đảo Kamê báo cáo Quy Lão', dialogReply: 'Tuyệt lắm! Giờ con đã có thể mở Tab Kỹ Năng để dùng Tiềm Năng học thêm Tái Tạo Năng Lượng, Thái Dương Hạ San và nhiều bí kíp khác!' }
    ],
    desc: 'Từ Thung Lũng Tre đi sang Đông qua Rừng Karin (nơi có Tháp Karin sừng sững ở giữa) để tới Đảo Kamê gặp Quy Lão Kame nhận Áo Võ Phục & học tuyệt kỹ Chưởng Khí (Ô số 2)!\nThưởng: Mở khóa Chưởng Khí + 25.000 SM & TN.',
    reward: { power: 25000, gold: 25000, gem: 25, item: 'gang_cam' }
  },
  {
    id: 5,
    title: 'Tháp Karin & Tàu Pảy Pảy',
    steps: [
      { type: 'talk', targetId: 'bo_mong', count: 1, text: 'Gặp Bò Mộng dưới chân Tháp Karin (Rừng Karin)', dialogReply: 'Sát thủ Tàu Pảy Pảy cực kỳ nguy hiểm đang lảng vảng quanh Rừng Karin! Cậu hãy leo lên Đỉnh Tháp Karin ngay giữa khu rừng này để cầu kiến Thần Mèo Karin trước đã!' },
      { type: 'kill', targetId: 'boss_than_meo', count: 1, text: 'Lên Đỉnh Tháp Karin thách đấu thắng Thần Mèo' },
      { type: 'kill', targetId: 'tau_pay_pay', count: 1, text: 'Xuống Rừng Karin đánh bại Sát Thủ Tàu Pảy Pảy' },
      { type: 'talk', targetId: 'quy_lao_kame', count: 1, text: 'Báo tin chiến thắng cho Quy Lão Kame', dialogReply: 'Đánh thắng cả Thần Mèo Karin lẫn Tàu Pảy Pảy ư?! Ta tặng con Cân Đẩu Vân Hoàng Kim để tự do bay lượn khắp bầu trời!' }
    ],
    desc: 'Tới giữa Rừng Karin gặp Bò Mộng, sau đó leo thẳng lên Đỉnh Tháp Karin bấm "Thách Đấu" đánh thắng Thần Mèo Karin, rồi quay xuống chân tháp hạ gục Sát Thủ Tàu Pảy Pảy!\nThưởng: 65.000 SM & TN, Cân Đẩu Vân Hoàng Kim.',
    reward: { power: 65000, gold: 60000, gem: 40, item: 'vb_candauvan' }
  },
  {
    id: 6,
    title: 'Tiêu diệt Xên Con',
    steps: [
      { type: 'kill', targetId: 'xen_con', count: 8, text: 'Tiêu diệt 8 Xên Con tại bờ biển Đảo Kamê' },
      { type: 'talk', targetId: 'quy_lao_kame', count: 1, text: 'Báo cáo Quy Lão Kame tại Đảo Kamê', dialogReply: 'Lũ Xên Con đã bị quét sạch! Hãy nhận Quả Trứng Đệ Tử này và tới Trạm Tàu Vũ Trụ ở Làng Aru / Vách Núi Aru để tiến ra ngoài vũ trụ!' }
    ],
    desc: 'Lũ Xên Con hung hãn vừa đổ bộ lên bờ biển phía Đông Đảo Kamê! Hãy tiêu diệt 8 Xên Con rồi quay lại báo cáo Quy Lão Kame.\nThưởng: 140.000 SM & TN, Quả Trứng Đệ Tử.',
    reward: { power: 140000, gold: 95000, gem: 60, item: 'trung_de_tu' }
  },
  {
    id: 7,
    title: 'Du hành Hành Tinh Xayda',
    steps: [
      { type: 'kill', targetId: 'boss_broly', count: 1, text: 'Đáp Tàu Vũ Trụ sang Xayda hạ BOSS Broly' },
      { type: 'talk', targetId: 'quy_lao_kame', count: 1, text: 'Bay về Đảo Kamê báo cáo Quy Lão Kame', dialogReply: 'Sức mạnh Siêu Xayda Huyền Thoại cũng khuất phục trước con! Hãy giữ lấy Bông Tai Porata tối mật của Thần Giới!' }
    ],
    desc: 'Tới Trạm Tàu Vũ Trụ (phía Tây Làng Aru hoặc Vách Núi Aru), đáp Tàu Vũ Trụ bay sang Vách Núi Kakarot (Xayda) và đánh bại BOSS Siêu Xayda Huyền Thoại Broly!\nThưởng: 350.000 SM & TN, Bông Tai Porata.',
    reward: { power: 350000, gold: 180000, gem: 120, item: 'bong_tai_c1' }
  },
  {
    id: 8,
    title: 'Huyền thoại Rồng Thần',
    steps: [
      { type: 'kill', targetId: 'boss_black_rose', count: 1, text: 'Bay tới Hành Tinh Namếc hạ Black Goku Rosé' },
      { type: 'shenron', targetId: 'shenron', count: 1, text: 'Thu thập 7 Viên Ngọc Rồng & Gọi Rồng Thần' }
    ],
    desc: 'Đáp Tàu Vũ Trụ bay tới Thung Lũng Namếc tiêu diệt BOSS Black Goku Rosé, sau đó tập hợp đủ 7 Viên Ngọc Rồng (1-7 Sao) mở Hành Trang bấm Sử Dụng để triệu hồi Rồng Thần!\nThưởng: 1.000.000 SM & TN, Cải Trang Gohan Beast.',
    reward: { power: 1000000, gold: 500000, gem: 300, item: 'ct_gohan_beast' }
  }
];

// =========================================================================
// MẪU QUÁI VẬT & BOSS CHUẨN CỐT TRUYỆN NGỌC RỒNG ONLINE
// =========================================================================
export const MONSTER_TEMPLATES = {
  moc_nhan: {
    id: 'moc_nhan',
    name: 'Mộc Nhân',
    renderType: 'dummy',
    idleTex: 'nhanvat/quai/moc_nhan_1.png',
    hitTex: 'nhanvat/quai/moc_nhan_2.png',
    scale: 0.56,
    hp: 120,
    attack: 0,
    exp: 65,
    gold: 80,
    speed: 0,
    respawnSec: 3.0
  },
  khung_long: {
    id: 'khung_long',
    name: 'Khủng Long',
    renderType: 'frames',
    frames: ['nhanvat/quai/khung_long_1.png', 'nhanvat/quai/khung_long_2.png'],
    nativeLeft: false,
    scale: 0.54,
    hp: 240,
    attack: 10,
    exp: 140,
    gold: 160,
    dropsMeat: true,
    speed: 42
  },
  lon_loi: {
    id: 'lon_loi',
    name: 'Lợn Lòi',
    renderType: 'frames',
    frames: ['nhanvat/quai/lon_loi_1.png', 'nhanvat/quai/lon_loi_2.png'],
    nativeLeft: false,
    scale: 0.56,
    hp: 560,
    attack: 22,
    exp: 320,
    gold: 350,
    speed: 48
  },
  khung_long_me: {
    id: 'khung_long_me',
    name: 'Khủng Long Mẹ',
    renderType: 'frames',
    frames: ['nhanvat/quai/khung_long_1.png', 'nhanvat/quai/khung_long_2.png'],
    nativeLeft: false,
    scale: 0.74,
    hp: 1100,
    attack: 38,
    exp: 620,
    gold: 640,
    dropsMeat: true,
    speed: 46
  },
  lon_loi_rung: {
    id: 'lon_loi_rung',
    name: 'Lợn Lòi Rừng',
    renderType: 'frames',
    frames: ['nhanvat/quai/lon_loi_1.png', 'nhanvat/quai/lon_loi_2.png'],
    nativeLeft: false,
    scale: 0.7,
    hp: 1900,
    attack: 58,
    exp: 980,
    gold: 880,
    speed: 54
  },
  khung_long_bay: {
    id: 'khung_long_bay',
    name: 'Thằn Lằn Bay',
    renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/khunglong/myTexture2drong.png',
    nativeLeft: true,
    frameCount: 3,
    drawW: 58,
    drawH: 58,
    flyOffset: 26,
    hp: 1500,
    attack: 48,
    exp: 720,
    gold: 680,
    speed: 58
  },
  boss_than_meo: {
    id: 'boss_than_meo',
    name: 'Thần Mèo Karin (Thách Đấu)',
    renderType: 'frames',
    frames: ['nhanvat/npc/than_meo_karin.png'],
    nativeLeft: true,
    isBoss: true,
    scale: 0.54,
    hp: 5200,
    attack: 95,
    exp: 3800,
    gold: 6000,
    speed: 78,
    noAutoRespawn: true,
    respawnSec: 9999
  },
  tau_pay_pay: {
    id: 'tau_pay_pay',
    name: 'Sát Thủ Tàu Pảy Pảy',
    renderType: 'frames',
    frames: ['nhanvat/quai/tau_pay_pay.png'],
    nativeLeft: true,
    isBoss: true,
    scale: 0.56,
    hp: 7800,
    attack: 135,
    exp: 5200,
    gold: 9500,
    speed: 72,
    respawnSec: 12
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
    nativeLeft: false,
    scale: 0.72,
    hp: 3200,
    attack: 78,
    exp: 1100,
    gold: 980,
    speed: 50
  },
  xen_con: {
    id: 'xen_con',
    name: 'Xên Con',
    renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/xenxanh/mount_16_0.png',
    nativeLeft: true,
    frameCount: 4,
    drawW: 84,
    drawH: 80,
    flyOffset: 10,
    hp: 5800,
    attack: 125,
    exp: 2200,
    gold: 1850,
    speed: 56
  },
  zinba: {
    id: 'zinba',
    name: 'Sói Lửa Héc Quyn',
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
    nativeLeft: false,
    scale: 0.72,
    hp: 12000,
    attack: 220,
    exp: 4200,
    gold: 3800,
    speed: 62
  },
  khi_dot: {
    id: 'khi_dot',
    name: 'Khỉ Đột Vách Núi',
    renderType: 'caitrang',
    caitrangKey: 'khi_7',
    scale: 0.62,
    hp: 19000,
    attack: 295,
    exp: 6400,
    gold: 5400,
    speed: 52
  },
  boss_broly: {
    id: 'boss_broly',
    name: 'BOSS Siêu Xayda Broly',
    renderType: 'caitrang',
    caitrangKey: 'broly_lssj',
    isBoss: true,
    auraColor: 'xanh',
    scale: 0.68,
    hp: 52000,
    attack: 480,
    exp: 32000,
    gold: 42000,
    speed: 75,
    respawnSec: 16
  },
  rua_co_dai: {
    id: 'rua_co_dai',
    name: 'Rùa Cổ Đại Namếc',
    renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/rua/mount_9_0.png',
    nativeLeft: true,
    frameCount: 4,
    drawW: 84,
    drawH: 84,
    flyOffset: 0,
    hp: 17500,
    attack: 265,
    exp: 5800,
    gold: 4800,
    speed: 42
  },
  xen_hoang_kim: {
    id: 'xen_hoang_kim',
    name: 'Xên Hoàng Kim',
    renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/xenvang/mount_17_0.png',
    nativeLeft: true,
    frameCount: 4,
    drawW: 92,
    drawH: 92,
    flyOffset: 14,
    hp: 28000,
    attack: 390,
    exp: 9200,
    gold: 7800,
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
    attack: 760,
    exp: 60000,
    gold: 75000,
    speed: 82,
    respawnSec: 18
  }
};

// =========================================================================
// HỆ THỐNG 10 BẢN ĐỒ LIÊN THÔNG ĐÚNG ĐỊA LÝ NGỌC RỒNG ONLINE GỐC
// Vách Núi Aru <-> Làng Aru (cửa Nhà Gôhan) <-> Đồi Hoa Cúc <-> Thung Lũng Tre
//              <-> Rừng Karin (leo Cột Tháp chính giữa <-> Đỉnh Tháp Karin) <-> Đảo Kamê
// Tàu Vũ Trụ   <-> Vách Núi Kakarot (Xayda) & Thung Lũng Namếc
// =========================================================================
export const MAPS_CONFIG = [
  // ================= MAP 0: NHÀ GÔHAN =================
  {
    id: 0,
    key: 'nha_gohan',
    name: 'Nhà Gôhan',
    planetTheme: 'traidat',
    width: 1420,
    height: 760,
    defaultSpawn: { x: 325, y: 175 },
    hitboxes: [{ x: -100, y: 0, w: 1620, h: 175 }],
    waypoints: [
      {
        id: 'wp_nhagohan_to_aru',
        label: 'Làng Aru',
        kind: 'door',
        signRect: { x: 760, y: 300, w: 230, h: 60 },
        showRangeX: [610, 1060],
        doorRangeX: [740, 1010],
        edgeTriggerX: [1395, 1500],
        groundGlowX: 875,
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

  // ================= MAP 1: LÀNG ARU =================
  {
    id: 1,
    key: 'lang_aru',
    name: 'Làng Aru',
    planetTheme: 'traidat',
    width: 2400,
    height: 1000,
    defaultSpawn: { x: 675, y: 175 },
    hitboxes: [{ x: -220, y: -38, w: 2840, h: 213 }],
    waypoints: [
      {
        id: 'wp_aru_to_vachnui',
        label: 'Vách núi Aru',
        kind: 'left_edge',
        signRect: { x: 10, y: 300, w: 230, h: 60 },
        showRangeX: [-120, 310],
        edgeTriggerX: [-200, 12],
        groundGlowX: 16,
        targetMapId: 3,
        targetX: 1815,
        targetY: 175
      },
      {
        id: 'wp_aru_to_nhagohan',
        label: 'Nhà Gôhan',
        kind: 'door',
        signRect: { x: 560, y: 300, w: 230, h: 60 },
        showRangeX: [410, 860],
        doorRangeX: [560, 790],
        targetMapId: 0,
        targetX: 875,
        targetY: 175
      },
      {
        id: 'wp_aru_to_doihoacuc',
        label: 'Đồi hoa cúc',
        kind: 'right_edge',
        signRect: { x: 2160, y: 300, w: 230, h: 60 },
        showRangeX: [2010, 2550],
        edgeTriggerX: [2388, 2600],
        groundGlowX: 2384,
        targetMapId: 2,
        targetX: 65,
        targetY: 175
      }
    ],
    npcs: [
      { id: 'admin_thanhle', name: 'Chủ Tiệm Thành Lê', kind: 'modular', folder: 'admin_thanhle', x: 365, y: 175 },
      { id: 'admin_haidang', name: 'Thượng Đế Hải Đăng', kind: 'modular', folder: 'admin_haidang', x: 1380, y: 175 }
    ],
    monsters: [
      { template: 'moc_nhan', x: 850, minX: 850, maxX: 850 },
      { template: 'moc_nhan', x: 960, minX: 960, maxX: 960 },
      { template: 'moc_nhan', x: 1070, minX: 1070, maxX: 1070 },
      { template: 'moc_nhan', x: 1190, minX: 1190, maxX: 1190 },
      { template: 'khung_long', x: 1560, minX: 1460, maxX: 1690 },
      { template: 'khung_long', x: 1780, minX: 1660, maxX: 1900 },
      { template: 'khung_long', x: 1990, minX: 1860, maxX: 2120 },
      { template: 'khung_long', x: 2180, minX: 2050, maxX: 2290 }
    ]
  },

  // ================= MAP 2: ĐỒI HOA CÚC =================
  {
    id: 2,
    key: 'doi_hoa_cuc',
    name: 'Đồi Hoa Cúc',
    planetTheme: 'traidat',
    width: 2976,
    height: 1000,
    defaultSpawn: { x: 65, y: 175 },
    hitboxes: [
      { x: -200, y: -134, w: 1064, h: 309 },  // [0 .. 864] -> top = 175
      { x: 864, y: -134, w: 864, h: 261 },    // [864 .. 1728] -> top = 127
      { x: 1728, y: -134, w: 1450, h: 357 }   // [1728 .. 2976] -> top = 223
    ],
    waypoints: [
      {
        id: 'wp_dhc_to_aru',
        label: 'Làng Aru',
        kind: 'left_edge',
        signRect: { x: 10, y: 300, w: 230, h: 60 },
        showRangeX: [-120, 310],
        edgeTriggerX: [-200, 12],
        groundGlowX: 16,
        targetMapId: 1,
        targetX: 2335,
        targetY: 175
      },
      {
        id: 'wp_dhc_to_thunglungtre',
        label: 'Thung lũng tre',
        kind: 'right_edge',
        signRect: { x: 2736, y: 340, w: 230, h: 60 },
        showRangeX: [2600, 3100],
        edgeTriggerX: [2962, 3150],
        groundGlowX: 2960,
        targetMapId: 4,
        targetX: 65,
        targetY: 175
      }
    ],
    npcs: [],
    monsters: [
      { template: 'khung_long', x: 340, minX: 220, maxX: 480 },
      { template: 'khung_long', x: 650, minX: 520, maxX: 800 },
      { template: 'lon_loi', x: 1060, minX: 910, maxX: 1220 },
      { template: 'lon_loi', x: 1420, minX: 1250, maxX: 1620 },
      { template: 'lon_loi', x: 2040, minX: 1860, maxX: 2220 },
      { template: 'lon_loi', x: 2480, minX: 2300, maxX: 2680 }
    ]
  },

  // ================= MAP 3: VÁCH NÚI ARU (TRẠM TÀU VŨ TRỤ) =================
  {
    id: 3,
    key: 'vach_nui_aru',
    name: 'Vách Núi Aru',
    planetTheme: 'traidat',
    width: 1900,
    height: 820,
    defaultSpawn: { x: 1810, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 2120, h: 175 }],
    waypoints: [
      {
        id: 'wp_vachnui_to_aru',
        label: 'Làng Aru',
        kind: 'right_edge',
        signRect: { x: 1660, y: 300, w: 230, h: 60 },
        showRangeX: [1520, 2020],
        edgeTriggerX: [1888, 2050],
        groundGlowX: 1884,
        targetMapId: 1,
        targetX: 65,
        targetY: 175
      }
    ],
    npcs: [
      { id: 'tau_vu_tru', name: 'Trạm Tàu Vũ Trụ', kind: 'spaceship', x: 280, y: 175, tex: 'vatpham/taubay/myTexture2dmaybay4b.png' }
    ],
    monsters: [
      { template: 'khung_long_bay', x: 1460, minX: 1320, maxX: 1620 },
      { template: 'khung_long_bay', x: 1160, minX: 1000, maxX: 1300 },
      { template: 'khung_long_bay', x: 840, minX: 680, maxX: 980 }
    ]
  },

  // ================= MAP 4: THUNG LŨNG TRE =================
  {
    id: 4,
    key: 'thung_lung_tre',
    name: 'Thung Lũng Tre',
    planetTheme: 'traidat',
    width: 2100,
    height: 840,
    defaultSpawn: { x: 65, y: 175 },
    hitboxes: [{ x: -160, y: 0, w: 2420, h: 175 }],
    waypoints: [
      {
        id: 'wp_tlt_to_dhc',
        label: 'Đồi hoa cúc',
        kind: 'left_edge',
        signRect: { x: 10, y: 300, w: 230, h: 60 },
        showRangeX: [-120, 310],
        edgeTriggerX: [-160, 12],
        groundGlowX: 16,
        targetMapId: 2,
        targetX: 2900,
        targetY: 223
      },
      {
        id: 'wp_tlt_to_rungkarin',
        label: 'Rừng Karin',
        kind: 'right_edge',
        signRect: { x: 1860, y: 300, w: 230, h: 60 },
        showRangeX: [1720, 2240],
        edgeTriggerX: [2088, 2260],
        groundGlowX: 2084,
        targetMapId: 5,
        targetX: 65,
        targetY: 175
      }
    ],
    npcs: [],
    monsters: [
      { template: 'lon_loi', x: 460, minX: 320, maxX: 620 },
      { template: 'khung_long_me', x: 860, minX: 700, maxX: 1020 },
      { template: 'khung_long_me', x: 1280, minX: 1120, maxX: 1440 },
      { template: 'khung_long_me', x: 1680, minX: 1520, maxX: 1860 }
    ]
  },

  // ================= MAP 5: RỪNG KARIN (CHÂN THÁP KARIN Ở CHÍNH GIỮA!) =================
  {
    id: 5,
    key: 'rung_karin',
    name: 'Rừng Karin',
    planetTheme: 'traidat',
    width: 2100,
    height: 960,
    defaultSpawn: { x: 65, y: 175 },
    hitboxes: [{ x: -160, y: 0, w: 2420, h: 175 }],
    waypoints: [
      {
        id: 'wp_rk_to_tlt',
        label: 'Thung lũng tre',
        kind: 'left_edge',
        signRect: { x: 10, y: 300, w: 230, h: 60 },
        showRangeX: [-120, 310],
        edgeTriggerX: [-160, 12],
        groundGlowX: 16,
        targetMapId: 4,
        targetX: 2030,
        targetY: 175
      },
      {
        id: 'wp_rk_to_thapkarin',
        label: 'Lên Tháp Karin',
        kind: 'door', // Đứng ngay chân Cột Tháp Karin ở giữa map (x=910..1090) hoặc bay dọc thân tháp lên cao!
        signRect: { x: 885, y: 325, w: 230, h: 60 },
        showRangeX: [820, 1180],
        doorRangeX: [890, 1110],
        towerClimbX: [920, 1080],
        towerClimbY: 460,
        groundGlowX: 1000,
        targetMapId: 6,
        targetX: 700,
        targetY: 220
      },
      {
        id: 'wp_rk_to_daokame',
        label: 'Đảo Kamê',
        kind: 'right_edge',
        signRect: { x: 1860, y: 300, w: 230, h: 60 },
        showRangeX: [1720, 2240],
        edgeTriggerX: [2088, 2260],
        groundGlowX: 2084,
        targetMapId: 7,
        targetX: 65,
        targetY: 175
      }
    ],
    npcs: [
      { id: 'bo_mong', name: 'Bò Mộng', kind: 'modular', folder: 'admin_huykhoi', x: 780, y: 175 }
    ],
    monsters: [
      { template: 'lon_loi_rung', x: 360, minX: 220, maxX: 520 },
      { template: 'lon_loi_rung', x: 610, minX: 490, maxX: 720 },
      { template: 'tau_pay_pay', x: 1320, minX: 1180, maxX: 1480 },
      { template: 'lon_loi_rung', x: 1680, minX: 1540, maxX: 1860 }
    ]
  },

  // ================= MAP 6: ĐỈNH THÁP KARIN (THÁNH ĐỊA TRÊN MÂY) =================
  {
    id: 6,
    key: 'thap_karin',
    name: 'Tháp Karin',
    planetTheme: 'traidat',
    width: 1400,
    height: 860,
    defaultSpawn: { x: 700, y: 220 },
    // Sàn tròn Đài Tháp Karin lơ lửng trên tầng mây tại x=[410..990], top=220; bước ra rìa rơi tự do xuống Rừng Karin!
    hitboxes: [{ x: 410, y: 170, w: 580, h: 50 }],
    waypoints: [
      {
        id: 'wp_thapkarin_down',
        label: 'Xuống Rừng Karin',
        kind: 'door',
        signRect: { x: 585, y: 345, w: 230, h: 60 },
        showRangeX: [610, 790],
        doorRangeX: [630, 770],
        groundGlowX: 700,
        targetMapId: 5,
        targetX: 1000,
        targetY: 220
      }
    ],
    npcs: [
      { id: 'than_meo_karin', name: 'Thần Mèo Karin', kind: 'sprite', x: 555, y: 220, tex: 'nhanvat/npc/than_meo_karin.png', scale: 0.54 },
      { id: 'dau_traidat', name: 'Đậu Thần Tiên', kind: 'senzu_tree', x: 845, y: 220 }
    ],
    monsters: []
  },

  // ================= MAP 7: ĐẢO KAMÊ (QUY LÃO TIÊN SINH & BÀ HẠT MÍT / PHA LÊ) =================
  {
    id: 7,
    key: 'dao_kame',
    name: 'Đảo Kamê',
    planetTheme: 'traidat',
    width: 2100,
    height: 840,
    defaultSpawn: { x: 65, y: 175 },
    hitboxes: [{ x: -160, y: 0, w: 2340, h: 175 }],
    waypoints: [
      {
        id: 'wp_daokame_to_rk',
        label: 'Rừng Karin',
        kind: 'left_edge',
        signRect: { x: 10, y: 300, w: 230, h: 60 },
        showRangeX: [-120, 310],
        edgeTriggerX: [-160, 12],
        groundGlowX: 16,
        targetMapId: 5,
        targetX: 2030,
        targetY: 175
      }
    ],
    npcs: [
      { id: 'quy_lao_kame', name: 'Quy Lão Kame', kind: 'sprite', x: 430, y: 175, tex: 'nhanvat/npc/quy_lao_kame.png', scale: 0.54 },
      { id: 'thay_hieu', name: 'Thầy Hiếu Pha Lê', kind: 'modular', folder: 'thay_hieu', x: 690, y: 175 }
    ],
    monsters: [
      { template: 'tuan_loc', x: 980, minX: 860, maxX: 1120 },
      { template: 'xen_con', x: 1300, minX: 1160, maxX: 1450 },
      { template: 'xen_con', x: 1580, minX: 1440, maxX: 1730 },
      { template: 'xen_con', x: 1860, minX: 1720, maxX: 2000 }
    ]
  },

  // ================= MAP 8: VÁCH NÚI KAKAROT (HÀNH TINH XAYDA) =================
  {
    id: 8,
    key: 'vach_nui_kakarot',
    name: 'Vách Núi Kakarot (Xayda)',
    planetTheme: 'xayda',
    width: 1900,
    height: 820,
    defaultSpawn: { x: 1680, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 2060, h: 175 }],
    waypoints: [],
    npcs: [
      { id: 'tau_vu_tru', name: 'Tàu Vũ Trụ Xayda', kind: 'spaceship', x: 1740, y: 175, tex: 'vatpham/taubay/myTexture2dmaybay3.png' }
    ],
    monsters: [
      { template: 'zinba', x: 1420, minX: 1280, maxX: 1560 },
      { template: 'zinba', x: 1180, minX: 1040, maxX: 1320 },
      { template: 'khi_dot', x: 920, minX: 780, maxX: 1060 },
      { template: 'khi_dot', x: 680, minX: 540, maxX: 820 },
      { template: 'boss_broly', x: 350, minX: 180, maxX: 520 }
    ]
  },

  // ================= MAP 9: THUNG LŨNG NAMẾC (HÀNH TINH NAMẾC) =================
  {
    id: 9,
    key: 'thung_lung_namek',
    name: 'Thung Lũng Namếc',
    planetTheme: 'namek',
    width: 2200,
    height: 850,
    defaultSpawn: { x: 240, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 2360, h: 175 }],
    waypoints: [],
    npcs: [
      { id: 'tau_vu_tru', name: 'Tàu Vũ Trụ Namếc', kind: 'spaceship', x: 170, y: 175, tex: 'vatpham/taubay/myTexture2dmaybay2.png' }
    ],
    monsters: [
      { template: 'rua_co_dai', x: 520, minX: 380, maxX: 680 },
      { template: 'rua_co_dai', x: 820, minX: 680, maxX: 980 },
      { template: 'xen_hoang_kim', x: 1140, minX: 980, maxX: 1300 },
      { template: 'xen_hoang_kim', x: 1440, minX: 1280, maxX: 1600 },
      { template: 'boss_black_rose', x: 1840, minX: 1640, maxX: 2040 }
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
