// Dữ liệu Thế Giới & Cốt Truyện Chuẩn 100% Chú Bé Rồng Online (Ngọc Rồng Online - TeaMobi)
// Người chơi nhập vai Chiến Binh Hậu Bối của 3 chủng tộc (Trái Đất, Namếc, Xayda),
// hành trình qua 5 Giai Đoạn Cốt Truyện Chính Tuyến & Mạng Lưới 36 Bản Đồ Liên Thông!

import { TORI_ITEM_CATALOG, TORI_MAPS, TORI_MOBS } from './toriData.js';

export { TORI_MAPS, TORI_MOBS };

export const VIRTUAL_W = 1020;
export const VIRTUAL_H = 610;

export const PLANET_DEFS = [
  {
    id: 0,
    key: 'traidat',
    name: 'Trái Đất', toriMapId: 21, bgID: 0,
    avatars: ['Goku_base', 'Krillin_base', 'Yamcha_base'],
    charNames: ['Võ Sinh Aru', 'Thiếu Lâm TĐ', 'Kiếm Khách TĐ'],
    defaultPlayerName: 'HậuBốiTĐ',
    homeMapId: 0,
    villageMapId: 1,
    elderId: 'ong_gohan',
    elderName: 'Ông Gôhan',
    masterId: 'quy_lao_kame',
    masterName: 'Quy Lão Kame',
    masterMapId: 8,
    baseStats: { maxHp: 360, hp: 360, maxKi: 360, ki: 360, attack: 26, defense: 4, crit: 3 }
  },
  {
    id: 1,
    key: 'xayda',
    name: 'Xayda', toriMapId: 0, bgID: 0,
    avatars: ['Cađíc_base', 'Rađíc_base', 'Kakalot_base'],
    charNames: ['Tân Binh Xayda', 'Chiến Binh Lửa', 'Hậu Duệ Xayda'],
    defaultPlayerName: 'HậuBốiXD',
    homeMapId: 24,
    villageMapId: 25,
    elderId: 'ong_paragus',
    elderName: 'Ông Paragus',
    masterId: 'vua_vegeta',
    masterName: 'Vua Vegeta',
    masterMapId: 27,
    baseStats: { maxHp: 420, hp: 420, maxKi: 300, ki: 300, attack: 32, defense: 5, crit: 6 }
  },
  {
    id: 2,
    key: 'namek',
    name: 'Namếc', toriMapId: 42, bgID: 0,
    avatars: ['namek_base', 'namek_base', 'namek_base'],
    charNames: ['Hậu Duệ Mori', 'Chiến Binh Namếc', 'Tu Sĩ Long Tộc'],
    defaultPlayerName: 'HậuBốiNM',
    homeMapId: 19,
    villageMapId: 20,
    elderId: 'ong_moori',
    elderName: 'Ông Moori',
    masterId: 'truong_lao_guru',
    masterName: 'Trưởng Lão Guru',
    masterMapId: 22,
    baseStats: { maxHp: 440, hp: 440, maxKi: 450, ki: 450, attack: 25, defense: 6, crit: 3 }
  }
];

export const MODULAR_STATE_OFFSETS = {
  DUNG_YEN: { dauX: -0.3, dauY: -15.5, thanX: 0, thanY: 0, chanX: 0, chanY: 0 },
  DI_CHUYEN: [
    { dauX: 3.3, dauY: -9.0, thanX: 1.5, thanY: 5.2, chanX: 0, chanY: 0 },
    { dauX: 3.3, dauY: -7.0, thanX: 1.5, thanY: 5.0, chanX: 0, chanY: 0 },
    { dauX: 3.3, dauY: -8.5, thanX: 1.5, thanY: 5.2, chanX: 0, chanY: 0 },
    { dauX: 3.3, dauY: -8.5, thanX: 1.5, thanY: 5.2, chanX: 0, chanY: 0 },
    { dauX: 3.3, dauY: -11.0, thanX: 1.5, thanY: 5.2, chanX: 0, chanY: 0 }
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
  thay_hieu: { chanX: 0, chanY: 0, thanX: 0, thanY: -1.5, dauX: -0.3, dauY: -16.0, extraThanY: 0 },
  admin_huykhoi: { chanX: 0, chanY: 0, thanX: 0, thanY: -3.0, dauX: -1.2, dauY: -18.0, extraThanY: 0 }
};

// Hệ thống 27 Bí Kíp Chiêu Thức chuẩn 100% NClasses.json từ ElectroHeavenVN/DataNRO (TeaMobi)
export const PLANET_SKILLS = {
  traidat: [
    { id: 'td_1', dataNroId: 0, slotIdx: 0, maxPoint: 7, starter: true, reqPower: 0, learnCost: 0, name: 'Chiêu đấm Dragon', type: 'melee', mult: 1.25, kiCost: 1, cd: 0.5, range: 78, icon: 'kynang/datanro/539.png', damInfo: 'Tăng sức đánh: 100% → 160%', desc: 'Tấn công cận chiến chuẩn Trái Đất (Học tại Ông Gôhan ngay lúc đầu).' },
    { id: 'td_2', dataNroId: 1, slotIdx: 1, maxPoint: 7, reqPower: 10000, learnCost: 500, name: 'Chiêu Kamejoko', type: 'beam', mult: 2.8, kiCost: 30, cd: 1.8, range: 540, color: '#38bdf8', core: '#e0f2fe', icon: 'kynang/datanro/540.png', damInfo: 'Tăng sức đánh: 150% → 450%', desc: 'Đánh xa nhờ năng lượng (Học tại Quy Lão Kame).' },
    { id: 'td_3', dataNroId: 6, slotIdx: 2, maxPoint: 7, reqPower: 60000, learnCost: 3500, name: 'Thái Dương Hạ San', type: 'solar', mult: 1.8, kiCost: 45, cd: 8.5, range: 300, icon: 'kynang/datanro/717.png', damInfo: 'Chói mắt đối phương: 3s → 9s', desc: 'Làm chói mắt và choáng toàn bộ kẻ địch xung quanh.' },
    { id: 'td_4', dataNroId: 9, slotIdx: 3, maxPoint: 7, reqPower: 120000, learnCost: 12000, name: 'Kaioken', type: 'transform', caitrang: 'gohan_beast', mult: 2.2, kiCost: 65, cd: 12.0, range: 90, icon: 'kynang/datanro/716.png', damInfo: 'Bộc phát giới hạn Sức đánh: +90% → +160%', desc: 'Bộc phát giới hạn cơ thể cường hóa cực mạnh đòn cận chiến & tốc độ.' },
    { id: 'td_5', dataNroId: 10, slotIdx: 4, maxPoint: 7, reqPower: 250000, learnCost: 25000, name: 'Quả cầu kênh khi', type: 'spirit', mult: 5.8, kiCost: 110, cd: 11.0, range: 480, color: '#60a5fa', icon: 'kynang/datanro/711.png', damInfo: 'Sát thương diện rộng: 500% → 1100%', desc: 'Tụ nguyên khí vạn vật tạo Quả Cầu Năng Lượng hủy diệt diện rộng.' },
    { id: 'td_6', dataNroId: 20, slotIdx: 5, maxPoint: 7, reqPower: 80000, learnCost: 9000, name: 'Dịch chuyển tức thời', type: 'tele', mult: 2.6, kiCost: 40, cd: 5.0, range: 460, icon: 'kynang/datanro/3783.png', damInfo: 'Áp sát chí mạng & gây choáng 2.5s', desc: 'Bí thuật Hành tinh Yardrat dịch chuyển ngay tới mục tiêu & gây choáng.' },
    { id: 'td_7', dataNroId: 22, slotIdx: 6, maxPoint: 7, reqPower: 150000, learnCost: 18000, name: 'Thôi miên', type: 'sleep', mult: 1.5, kiCost: 50, cd: 9.5, range: 380, icon: 'kynang/datanro/3782.png', damInfo: 'Ru ngủ kẻ thù: 5s → 11s (x2 sát thương đòn kế)', desc: 'Bí kỹ Trái Đất ru ngủ mục tiêu đứng im, đòn đánh tiếp theo gây x2 sát thương!' },
    { id: 'td_8', dataNroId: 19, slotIdx: 7, maxPoint: 7, reqPower: 200000, learnCost: 30000, name: 'Khiên năng lượng', type: 'shield', mult: 0, kiCost: 55, cd: 13.0, range: 0, icon: 'kynang/datanro/3784.png', damInfo: 'Vô hiệu đòn tấn công: 8s → 16s', desc: 'Tạo lá chắn năng lượng giảm 80% sát thương nhận vào.' },
    { id: 'td_9', dataNroId: 24, slotIdx: 8, maxPoint: 9, reqPower: 600000, learnCost: 120000, name: 'Super Kamejoko', type: 'super_beam', mult: 6.8, kiCost: 140, cd: 8.0, range: 640, color: '#2563eb', core: '#ffffff', icon: 'kynang/datanro/11162.png', damInfo: 'Skill 9 Tối Thượng: 550% → 1000% (Max Cấp 9)', desc: 'Tuyệt kỹ Skill 9 tối thượng của Trái Đất xuyên phá toàn màn hình!' }
  ],
  xayda: [
    { id: 'xd_1', dataNroId: 4, slotIdx: 0, maxPoint: 7, starter: true, reqPower: 0, learnCost: 0, name: 'Chiêu đấm Galick', type: 'melee', mult: 1.35, kiCost: 1, cd: 0.5, range: 78, icon: 'kynang/datanro/539.png', damInfo: 'Tăng sức đánh: 110% → 170%', desc: 'Tấn công cận chiến dũng mãnh của chiến binh Xayda.' },
    { id: 'xd_2', dataNroId: 5, slotIdx: 1, maxPoint: 7, reqPower: 10000, learnCost: 500, name: 'Chiêu Antomic', type: 'beam', mult: 3.1, kiCost: 32, cd: 1.7, range: 540, color: '#c084fc', core: '#faf5ff', icon: 'kynang/datanro/540.png', damInfo: 'Tăng sức đánh: 110% → 290%', desc: 'Tia chưởng năng lượng tím Antomic do Vua Vegeta truyền dạy.' },
    { id: 'xd_3', dataNroId: 8, slotIdx: 2, maxPoint: 7, reqPower: 40000, learnCost: 2500, name: 'Tái tạo năng lượng', type: 'charge', mult: 0, kiCost: 0, cd: 7.5, range: 0, icon: 'kynang/datanro/720.png', damInfo: 'Tự tái tạo HP & KI: 55% → 85%', desc: 'Bộc phát nguyên khí tự tái tạo nhanh HP và KI.' },
    { id: 'xd_4', dataNroId: 13, slotIdx: 3, maxPoint: 7, reqPower: 150000, learnCost: 18000, name: 'Biến hình (Khỉ Đột)', type: 'transform', caitrang: 'khi_7', mult: 2.3, kiCost: 75, cd: 14.0, range: 0, icon: 'kynang/datanro/718.png', damInfo: 'Hóa Khỉ Khổng Lồ (+100% Sức đánh & HP)', desc: 'Biến hình Khỉ Đột Khổng Lồ tăng gấp đôi Sức đánh, HP và tốc độ!' },
    { id: 'xd_5', dataNroId: 14, slotIdx: 4, maxPoint: 7, reqPower: 250000, learnCost: 28000, name: 'Tự phát nổ', type: 'spirit', mult: 6.5, kiCost: 135, cd: 11.0, range: 380, color: '#facc15', icon: 'kynang/datanro/2248.png', damInfo: 'Phát nổ nguyên khí gây sát thương cực đại', desc: 'Giải phóng toàn bộ KI tạo vụ nổ hoàng kim hủy diệt mọi kẻ thù xung quanh!' },
    { id: 'xd_6', dataNroId: 21, slotIdx: 5, maxPoint: 7, reqPower: 80000, learnCost: 9000, name: 'Huýt sáo', type: 'whistle', mult: 0, kiCost: 45, cd: 14.0, range: 0, icon: 'kynang/datanro/3781.png', damInfo: 'Tăng tạm thời +40% → +100% HP tối đa', desc: 'Huýt sáo kích phát huyết thống Xayda tăng mạnh HP tối đa & Chí mạng.' },
    { id: 'xd_7', dataNroId: 23, slotIdx: 6, maxPoint: 7, reqPower: 130000, learnCost: 16000, name: 'Trói', type: 'bind', mult: 2.1, kiCost: 48, cd: 8.5, range: 400, icon: 'kynang/datanro/3779.png', damInfo: 'Trói chặt kẻ thù: 5s → 11s', desc: 'Phóng vòng năng lượng khóa chặt mục tiêu đứng im chịu đòn!' },
    { id: 'xd_8', dataNroId: 19, slotIdx: 7, maxPoint: 7, reqPower: 200000, learnCost: 30000, name: 'Khiên năng lượng', type: 'shield', mult: 0, kiCost: 55, cd: 13.0, range: 0, icon: 'kynang/datanro/3784.png', damInfo: 'Vô hiệu đòn tấn công: 8s → 16s', desc: 'Tạo lá chắn năng lượng giảm 80% sát thương nhận vào.' },
    { id: 'xd_9', dataNroId: 25, slotIdx: 8, maxPoint: 9, reqPower: 600000, learnCost: 120000, name: 'Cađíc liên hoàn chưởng', type: 'barrage', mult: 7.2, kiCost: 145, cd: 8.0, range: 580, color: '#facc15', core: '#fef9c3', icon: 'kynang/datanro/11193.png', damInfo: 'Skill 9 Tối Thượng: 550% → 1000% (Max Cấp 9)', desc: 'Tuyệt kỹ Skill 9 của Hoàng tử Xayda bắn mưa cầu năng lượng liên hoàn hủy diệt!' }
  ],
  namek: [
    { id: 'nm_1', dataNroId: 2, slotIdx: 0, maxPoint: 7, starter: true, reqPower: 0, learnCost: 0, name: 'Chiêu đấm Demon', type: 'melee', mult: 1.25, kiCost: 1, cd: 0.42, range: 84, icon: 'kynang/datanro/539.png', damInfo: 'Tăng sức đánh: 95% → 155%', desc: 'Đòn cận chiến tầm xa linh hoạt của tộc Namếc.' },
    { id: 'nm_2', dataNroId: 3, slotIdx: 1, maxPoint: 7, reqPower: 10000, learnCost: 500, name: 'Chiêu Masenko', type: 'beam', mult: 2.7, kiCost: 24, cd: 1.2, range: 530, color: '#4ade80', core: '#dcfce7', icon: 'kynang/datanro/540.png', damInfo: 'Tăng sức đánh: 100% → 160% (Hồi chiêu cực nhanh)', desc: 'Chưởng khí Masenko tốc độ cao do Trưởng Lão Guru truyền dạy.' },
    { id: 'nm_3', dataNroId: 7, slotIdx: 2, maxPoint: 7, reqPower: 40000, learnCost: 2500, name: 'Trị thương', type: 'charge', mult: 0, kiCost: 30, cd: 6.5, range: 0, icon: 'kynang/datanro/724.png', damInfo: 'Phục hồi: 50% → 80% HP và KI', desc: 'Thiên phú trị thương thần tốc của Long Tộc Namếc.' },
    { id: 'nm_4', dataNroId: 11, slotIdx: 3, maxPoint: 7, reqPower: 180000, learnCost: 22000, name: 'Makankosappo', type: 'spirit', mult: 5.9, kiCost: 115, cd: 9.5, range: 520, color: '#22c55e', icon: 'kynang/datanro/723.png', damInfo: 'Tia xoắn ốc xuyên thủng mọi lớp giáp', desc: 'Tụ lực đầu ngón tay bắn tia sáng xoắn ốc Makankosappo chí mạng!' },
    { id: 'nm_5', dataNroId: 12, slotIdx: 4, maxPoint: 7, reqPower: 120000, learnCost: 15000, name: 'Đẻ trứng', type: 'egg', mult: 0, kiCost: 90, cd: 18.0, range: 0, icon: 'kynang/datanro/722.png', damInfo: 'Tạo Đệ Tử đi theo hỗ trợ chiến đấu', desc: 'Sinh ra Quả Trứng triệu hồi Đệ Tử sát cánh tấn công mục tiêu.' },
    { id: 'nm_6', dataNroId: 17, slotIdx: 5, maxPoint: 7, reqPower: 90000, learnCost: 10000, name: 'Liên hoàn', type: 'barrage', mult: 3.6, kiCost: 48, cd: 3.2, range: 420, color: '#34d399', core: '#ecfdf5', icon: 'kynang/datanro/3778.png', damInfo: 'Liên hoàn chưởng tốc độ cao: 160% → 190%', desc: 'Tung loạt chưởng khí liên hoàn dồn dập vào kẻ thù.' },
    { id: 'nm_7', dataNroId: 18, slotIdx: 6, maxPoint: 7, reqPower: 150000, learnCost: 18000, name: 'Biến Sôcôla', type: 'socola', mult: 2.2, kiCost: 52, cd: 9.0, range: 420, icon: 'kynang/datanro/3780.png', damInfo: 'Biến quái & BOSS thành Sôcôla (+65% sát thương nhận vào)', desc: 'Phóng tia phép biến mục tiêu thành thanh Sôcôla bất lực trong 7 giây!' },
    { id: 'nm_8', dataNroId: 19, slotIdx: 7, maxPoint: 7, reqPower: 200000, learnCost: 30000, name: 'Khiên năng lượng', type: 'shield', mult: 0, kiCost: 55, cd: 13.0, range: 0, icon: 'kynang/datanro/3784.png', damInfo: 'Vô hiệu đòn tấn công: 8s → 16s', desc: 'Tạo lá chắn năng lượng giảm 80% sát thương nhận vào.' },
    { id: 'nm_9', dataNroId: 26, slotIdx: 8, maxPoint: 9, reqPower: 600000, learnCost: 120000, name: 'Ma phong ba', type: 'mafuba', mult: 7.0, kiCost: 140, cd: 8.5, range: 480, color: '#10b981', core: '#d1fae5', icon: 'kynang/datanro/11194.png', damInfo: 'Skill 9 Tối Thượng: Phong ấn Mafuba rút máu chuẩn (Max Cấp 9)', desc: 'Tuyệt kỹ Skill 9 Ma Phong Ba cuốn phăng kẻ địch vào bình phong ấn!' }
  ]
};

export function createStarterSkillLevels(planetId = 0) {
  const pKey = PLANET_DEFS[planetId]?.key || 'traidat';
  const list = PLANET_SKILLS[pKey] || PLANET_SKILLS.traidat;
  return { [list[0].id]: 1 };
}

// Bộ trang bị Tân thủ chuẩn 3 hành tinh từ TORI (không bị cởi trần/trần như nhộng)
export function createStarterEquipment(planetIdx = 0) {
  if (planetIdx === 1) { // Namếc
    return {
      ao: { id: '1', stars: 0, sockets: 1 },
      quan: { id: '7', stars: 0, sockets: 1 },
      gang: { id: '22', stars: 0, sockets: 1 },
      giay: { id: '13', stars: 0, sockets: 1 },
      rada: { id: '12', stars: 0, sockets: 1 },
      caitrang: null, vanbay: null, deolung: null, pet: null, aura: null
    };
  }
  if (planetIdx === 2) { // Xayda
    return {
      ao: { id: '2', stars: 0, sockets: 1 },
      quan: { id: '8', stars: 0, sockets: 1 },
      gang: { id: '23', stars: 0, sockets: 1 },
      giay: { id: '14', stars: 0, sockets: 1 },
      rada: { id: '12', stars: 0, sockets: 1 },
      caitrang: null, vanbay: null, deolung: null, pet: null, aura: null
    };
  }
  // Trái Đất (mặc định)
  return {
    ao: { id: '0', stars: 0, sockets: 1 },
    quan: { id: '6', stars: 0, sockets: 1 },
    gang: { id: '21', stars: 0, sockets: 1 },
    giay: { id: '12', stars: 0, sockets: 1 },
    rada: { id: '12', stars: 0, sockets: 1 },
    caitrang: null, vanbay: null, deolung: null, pet: null, aura: null
  };
}

export const ITEM_CATALOG = {
  ...TORI_ITEM_CATALOG,
  ao_cam: { ...TORI_ITEM_CATALOG['0'], id: 'ao_cam', setVisual: 'set_cam', name: 'Áo Võ Phục Môn Phái' },
  quan_cam: { ...TORI_ITEM_CATALOG['6'], id: 'quan_cam', setVisual: 'set_cam', name: 'Quần Võ Phục Môn Phái' },
  gang_cam: { ...TORI_ITEM_CATALOG['21'], id: 'gang_cam', name: 'Găng Võ Thuật Cam' },
  giay_cam: { ...TORI_ITEM_CATALOG['12'], id: 'giay_cam', name: 'Giày Chiến Binh' },
  rada_cap1: { ...TORI_ITEM_CATALOG['12'], id: 'rada_cap1', name: 'Rađa Dò Ngọc Cấp 1', slot: 'rada' },
  ao_than_linh: {
    id: 'ao_than_linh', name: 'Áo Thần Linh (Hành Tinh Cold)', slot: 'ao', setVisual: 'set_huy_diet',
    icon: 'vatpham/do/traidat/set_than_linh/ao.png',
    stats: { defense: 220, maxHp: 6500, attack: 140 }, gold: 85000, gem: 35, maxSocket: 7,
    desc: 'Thần giáp cổ đại rơi từ BOSS Cooler tại Hành tinh Cold.'
  },
  quan_than_linh: {
    id: 'quan_than_linh', name: 'Quần Thần Linh (Hành Tinh Cold)', slot: 'quan', setVisual: 'set_huy_diet',
    icon: 'vatpham/do/traidat/set_than_linh/quan.png',
    stats: { maxHp: 8500, maxKi: 4000 }, gold: 80000, gem: 35, maxSocket: 7,
    desc: 'Quần Thần Linh săn tại Hành tinh Cold.'
  },
  gang_than_linh: {
    id: 'gang_than_linh', name: 'Găng Thần Linh (Hành Tinh Cold)', slot: 'gang',
    icon: 'vatpham/do/traidat/set_than_linh/gang.png',
    stats: { attack: 580, crit: 10 }, gold: 95000, gem: 45, maxSocket: 7,
    desc: 'Găng Thần Linh công phá vạn cân.'
  },
  ao_huy_diet: {
    id: 'ao_huy_diet', name: 'Áo Hủy Diệt Beerus (Whis)', slot: 'ao', setVisual: 'set_huy_diet',
    icon: 'vatpham/do/traidat/set_huy_diet/ao.png',
    stats: { defense: 480, maxHp: 18000, attack: 420 }, gold: 0, gem: 140, maxSocket: 7,
    desc: 'Trang bị Hủy Diệt đổi từ Thiên Sứ Whis tại Hành tinh Bill.'
  },
  quan_huy_diet: {
    id: 'quan_huy_diet', name: 'Quần Hủy Diệt Beerus (Whis)', slot: 'quan', setVisual: 'set_huy_diet',
    icon: 'vatpham/do/traidat/set_huy_diet/quan.png',
    stats: { maxHp: 24000, maxKi: 12000 }, gold: 0, gem: 130, maxSocket: 7,
    desc: 'Quần Thần Hủy Diệt đổi tại Hành tinh Bill.'
  },
  gang_huy_diet: {
    id: 'gang_huy_diet', name: 'Găng Hủy Diệt Beerus (Whis)', slot: 'gang',
    icon: 'vatpham/do/traidat/set_huy_diet/gang.png',
    stats: { attack: 1450, crit: 18 }, gold: 0, gem: 180, maxSocket: 7,
    desc: 'Găng Hủy Diệt đổi từ Thiên Sứ Whis tại Hành tinh Bill.'
  },
  ao_thien_su: {
    id: 'ao_thien_su', name: 'Áo Thiên Sứ Tối Thượng (DataNRO)', slot: 'ao', setVisual: 'set_huy_diet',
    icon: 'vatpham/datanro/10165.png',
    stats: { defense: 850, maxHp: 36000, attack: 950 }, gold: 0, gem: 280, maxSocket: 7,
    desc: 'Thánh y Thiên Sứ cấp cao nhất đổi tại Hành tinh Bill.'
  },
  quan_thien_su: {
    id: 'quan_thien_su', name: 'Quần Thiên Sứ Tối Thượng (DataNRO)', slot: 'quan', setVisual: 'set_huy_diet',
    icon: 'vatpham/datanro/10166.png',
    stats: { maxHp: 48000, maxKi: 28000 }, gold: 0, gem: 260, maxSocket: 7,
    desc: 'Quần Thiên Sứ tối thượng gia tăng sinh lực khổng lồ.'
  },
  gang_thien_su: {
    id: 'gang_thien_su', name: 'Găng Thiên Sứ Tối Thượng (DataNRO)', slot: 'gang',
    icon: 'vatpham/datanro/10168.png',
    stats: { attack: 3200, crit: 28 }, gold: 0, gem: 350, maxSocket: 7,
    desc: 'Găng Thiên Sứ công phá cực hạn vũ trụ.'
  },
  nhan_than_linh: {
    id: 'nhan_than_linh', name: 'Nhẫn Thần Linh (Cold)', slot: 'rada',
    icon: 'vatpham/datanro/6314.png',
    stats: { crit: 18, attack: 480 }, gold: 120000, gem: 55, maxSocket: 7,
    desc: 'Nhẫn Thần Linh cổ đại tăng mạnh tỉ lệ Chí Mạng.'
  },
  capsule_vip: {
    id: 'capsule_vip', name: 'Viên Capsule Đặc Biệt', slot: 'consumable', action: 'open_capsule',
    icon: 'vatpham/datanro/1088.png',
    gold: 25000, gem: 10,
    desc: 'Tàu Vận Chuyển VIP dùng không giới hạn số lần mở bảng bay 48 Map!'
  },
  nhan_thoi_khong: {
    id: 'nhan_thoi_khong', name: 'Nhẫn Thời Không', slot: 'consumable', action: 'portal_prison',
    icon: 'vatpham/datanro/9067.png',
    gold: 0, gem: 90,
    desc: 'Bảo vật đoạt từ Super Black Goku! Bấm Sử Dụng để xé toạc không gian tới Hành tinh Ngục Tù đánh BOSS Cumber!'
  },
  ct_gohan_beast: {
    id: 'ct_gohan_beast', name: 'Cải Trang Gohan Beast', slot: 'caitrang', caitrangKey: 'gohan_beast',
    icon: 'nhanvat/caitrang/gohan_beast/avt.png',
    stats: { attack: 650, maxHp: 6000, maxKi: 4500, crit: 14 }, gold: 0, gem: 80, maxSocket: 7,
    desc: 'Biến hình trạng thái Beast cực ngầu.'
  },
  ct_broly_lssj: {
    id: 'ct_broly_lssj', name: 'Cải Trang Siêu Xayda Broly', slot: 'caitrang', caitrangKey: 'broly_lssj',
    icon: 'nhanvat/caitrang/broly_lssj/avt.png',
    stats: { attack: 780, maxHp: 9500, defense: 180 }, gold: 0, gem: 95, maxSocket: 7,
    desc: 'Hóa thân Chiến Binh Siêu Xayda Huyền Thoại Broly.'
  },
  ct_black_rose: {
    id: 'ct_black_rose', name: 'Cải Trang Super Black Goku Rosé', slot: 'caitrang', caitrangKey: 'goku_black_rose',
    icon: 'nhanvat/caitrang/goku_black_rose/avt.png',
    stats: { attack: 980, maxKi: 8500, crit: 18 }, gold: 0, gem: 120, maxSocket: 7,
    desc: 'Cải trang Super Black Goku Rosé đoạt tại Tương Lai.'
  },
  ct_xiao: {
    id: 'ct_xiao', name: 'Cải Trang Đặc Biệt Vòng Quay', slot: 'caitrang', caitrangKey: 'xiao',
    icon: 'nhanvat/caitrang/xiao/avt.png',
    stats: { attack: 480, crit: 15, maxKi: 3500 }, gold: 0, gem: 65, maxSocket: 7,
    desc: 'Cải trang hiếm từ Vòng Quay Thượng Đế.'
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
    id: 'dl_kiem_vip', name: 'Kiếm Ánh Sáng Calích (Future Trunks)', slot: 'deolung', deolungKey: 'kiem_vip', frames: 1,
    icon: 'vatpham/vatphamgame/deo_lung/kiem_vip/1.png',
    stats: { attack: 320, crit: 10 }, gold: 25000, gem: 25,
    desc: 'Thanh kiếm chém đứt Fide & Zamasu của Calích đến từ Tương Lai.'
  },
  dl_canh_thien_than: {
    id: 'dl_canh_thien_than', name: 'Đôi Cánh Thiên Sứ', slot: 'deolung', deolungKey: 'canh_thien_than', frames: 2,
    icon: 'vatpham/vatphamgame/deo_lung/canh_thien_than/1.png',
    stats: { maxHp: 4500, maxKi: 4500, defense: 95 }, gold: 0, gem: 60,
    desc: 'Đôi cánh trắng của Thần Giới.'
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
    desc: 'Thu phục từ Phi Thuyền Babidi — Ấp nở ngay Đệ Tử Mabư chiến đấu tự động!'
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
    desc: 'Dùng để quay Vòng Quay May Mắn tại Thượng Đế.'
  },
  da_pha_le_dame: {
    id: 'da_pha_le_dame', name: 'Đá Pha Lê Đỏ (+Sức Đánh)', slot: 'crystal', crystalStat: 'attack', crystalVal: 45,
    icon: 'vatpham/vatphamgame/phu_tro/dame.png',
    gold: 12000, gem: 5,
    desc: 'Đem tới Bà Hạt Mít / Thầy Quyết (Đảo Kame) ép vào Sao Pha Lê (+45 SĐ).'
  },
  da_pha_le_hp: {
    id: 'da_pha_le_hp', name: 'Đá Pha Lê Hồng (+HP)', slot: 'crystal', crystalStat: 'maxHp', crystalVal: 550,
    icon: 'vatpham/vatphamgame/phu_tro/hp.png',
    gold: 10000, gem: 4,
    desc: 'Ép vào Sao Pha Lê (+550 HP).'
  },
  da_pha_le_ki: {
    id: 'da_pha_le_ki', name: 'Đá Pha Lê Xanh (+KI)', slot: 'crystal', crystalStat: 'maxKi', crystalVal: 500,
    icon: 'vatpham/vatphamgame/phu_tro/ki.png',
    gold: 10000, gem: 4,
    desc: 'Ép vào Sao Pha Lê (+500 KI).'
  },
  nr_1s: { id: 'nr_1s', name: 'Ngọc Rồng 1 Sao', slot: 'dragonball', star: 1, icon: 'vatpham/vatphamgame/ngocrong/nr1s.png', gold: 0, gem: 50, desc: 'Tụ họp đủ 1-7 Sao bấm Sử Dụng để triệu hồi Rồng Thần!' },
  nr_2s: { id: 'nr_2s', name: 'Ngọc Rồng 2 Sao', slot: 'dragonball', star: 2, icon: 'vatpham/vatphamgame/ngocrong/nr2s.png', gold: 0, gem: 40, desc: 'Viên Ngọc Rồng 2 Sao lấp lánh.' },
  nr_3s: { id: 'nr_3s', name: 'Ngọc Rồng 3 Sao', slot: 'dragonball', star: 3, icon: 'vatpham/vatphamgame/ngocrong/nr3s.png', gold: 0, gem: 35, desc: 'Viên Ngọc Rồng 3 Sao.' },
  nr_4s: { id: 'nr_4s', name: 'Ngọc Rồng 4 Sao', slot: 'dragonball', star: 4, icon: 'vatpham/vatphamgame/ngocrong/nr4s.png', gold: 25000, gem: 0, desc: 'Viên Ngọc Rồng 4 Sao.' },
  nr_5s: { id: 'nr_5s', name: 'Ngọc Rồng 5 Sao', slot: 'dragonball', star: 5, icon: 'vatpham/vatphamgame/ngocrong/nr5s.png', gold: 25000, gem: 0, desc: 'Viên Ngọc Rồng 5 Sao.' },
  nr_6s: { id: 'nr_6s', name: 'Ngọc Rồng 6 Sao', slot: 'dragonball', star: 6, icon: 'vatpham/vatphamgame/ngocrong/nr6s.png', gold: 20000, gem: 0, desc: 'Viên Ngọc Rồng 6 Sao.' },
  nr_7s: { id: 'nr_7s', name: 'Ngọc Rồng 7 Sao', slot: 'dragonball', star: 7, icon: 'vatpham/vatphamgame/ngocrong/nr7s.png', gold: 20000, gem: 0, desc: 'Viên Ngọc Rồng 7 Sao.' }
};

export const SHOP_TABS = [
  {
    key: 'AO_QUAN',
    label: 'Trang Bị',
    items: ['0', '6', '21', '12', '1', '7', '22', '13', '2', '8', '23', '14', 'ao_cam', 'quan_cam', 'gang_cam', 'giay_cam', 'rada_cap1', 'ao_than_linh', 'quan_than_linh', 'gang_than_linh', 'nhan_than_linh', 'ao_huy_diet', 'quan_huy_diet', 'gang_huy_diet', 'ao_thien_su', 'quan_thien_su', 'gang_thien_su']
  },
  {
    key: 'PHU_KIEN',
    label: 'Cải Trang',
    items: ['2002', '2003', '2026', '2027', '2028', '2030', '1362', '1378', '1384', '282', '283', '284', '285', '290', '291', '292', 'ct_gohan_beast', 'ct_broly_lssj', 'ct_black_rose', 'ct_xiao', 'vb_candauvan', 'vb_phuonghoang', 'dl_kiem_vip', 'dl_canh_thien_than', 'pet_cho_vang', 'pet_ky_lan', 'aura_rong']
  },
  {
    key: 'DAC_BIET',
    label: 'Đặc Biệt',
    items: ['213', '214', '215', '298', 'capsule_vip', 'nhan_thoi_khong', 'bong_tai_c1', 'bong_tai_c2', 'trung_de_tu', 'cuong_no', 'bo_huyet', 'bo_khi', 've_quay', 'da_pha_le_dame', 'da_pha_le_hp', 'da_pha_le_ki', 'nr_4s', 'nr_5s', 'nr_6s', 'nr_7s']
  }
];

// =========================================================================
// CỐT TRUYỆN GỐC CHÍNH TUYẾN 5 GIAI ĐOẠN LỚN CHUẨN CHÚ BÉ RỒNG ONLINE (TEAMOBI)
// Tự động cá nhân hóa Giai đoạn 1 theo quê nhà 3 chủng tộc (Ông Gôhan / Ông Paragus / Ông Moori)!
// =========================================================================
export const STORY_QUESTS = [
  // -------------------- GIAI ĐOẠN 1: KHỞI ĐẦU TÂN THỦ --------------------
  {
    id: 1,
    era: 'Giai đoạn 1: Khởi đầu Tân Thủ',
    title: 'Bài học vỡ lòng nơi quê nhà',
    steps: [
      { type: 'kill', targetId: 'moc_nhan', count: 5, text: 'Đánh ngã 5 Mộc Nhân đầu làng' },
      { type: 'talk_elder', targetId: 'home_elder', count: 1, text: 'Về nhà báo cáo Trưởng Bối quê nhà', dialogReply: 'Khá lắm hậu bối! Đòn đấm căn bản của con đã vững. Giờ hãy ra ngoài làng săn Khủng Long nhặt 10 chiếc Đùi Gà mang về đây!' }
    ],
    desc: 'Thức tỉnh tại quê nhà với 1 chiêu Đấm căn bản duy nhất! Hãy ra ngoài làng (Làng Aru / Làng Kakarot / Làng Mori) đánh ngã 5 Mộc Nhân rồi quay vào nhà báo cáo Ông Gôhan / Ông Paragus / Ông Moori.',
    reward: { power: 2500, gold: 3000, gem: 10 }
  },
  {
    id: 2,
    era: 'Giai đoạn 1: Khởi đầu Tân Thủ',
    title: 'Thu thập 10 Đùi Gà',
    steps: [
      { type: 'pickup_meat', targetId: 'duiga_drop', count: 10, text: 'Đánh Khủng Long nhặt 10 Đùi Gà' },
      { type: 'talk_elder', targetId: 'home_elder', count: 1, text: 'Mang 10 Đùi Gà về báo cáo Trưởng Bối', dialogReply: 'Tốt lắm! Con đã biết tự sinh tồn. Hãy tiến sâu qua các cánh rừng để tìm gặp bậc Minh Sư của tộc ta học tuyệt kỹ chưởng khí!' }
    ],
    desc: 'Đánh bại bầy Khủng Long ngoài làng hoặc Đồi Hoa Cúc để nhặt đủ 10 chiếc Đùi Gà rơi trên đất, sau đó mang về nhà báo cáo Trưởng Bối.',
    reward: { power: 5500, gold: 8000, gem: 15, item: 'quan_cam' }
  },
  {
    id: 3,
    era: 'Giai đoạn 1: Khởi đầu Tân Thủ',
    title: 'Băng rừng bái kiến Minh Sư',
    steps: [
      { type: 'kill', targetId: 'lon_loi', count: 8, text: 'Hạ 8 Lợn Lòi trên đường băng rừng' },
      { type: 'kill', targetId: 'khung_long_me', count: 5, text: 'Hạ 5 Khủng Long Mẹ trong rừng sâu' },
      { type: 'talk_master', targetId: 'planet_master', count: 1, unlockSkill2: true, text: 'Bái sư Quy Lão Kame / Vua Vegeta / Trưởng Lão Guru', dialogReply: 'Khí chất phi phàm! Ta chính thức nhận con làm đệ tử và truyền thụ tuyệt kỹ Chưởng Khí trấn phái vào Ô Chiêu Số 2!' }
    ],
    desc: 'Vượt qua chuỗi bản đồ rừng (Đồi Hoa Cúc → Thung Lũng Tre → Rừng Nấm → Rừng Xương → Đảo Kame, hoặc TP. Vegeta / Đảo Guru) tiêu diệt Lợn Lòi & Khủng Long Mẹ để bái kiến Minh Sư học Chưởng Khí!',
    reward: { power: 14000, gold: 18000, gem: 20, item: 'gang_cam' }
  },
  {
    id: 4,
    era: 'Giai đoạn 1: Khởi đầu Tân Thủ',
    title: 'Hạ Tàu Pảy Pảy & Vượt Tháp Karin',
    steps: [
      { type: 'talk', targetId: 'bo_mong', count: 1, text: 'Từ Đảo Kame qua Đông Karin tới Rừng Karin gặp Bò Mộng', dialogReply: 'Sát thủ Tàu Pảy Pảy đang hoành hành dưới chân tháp! Hãy leo lên Tháp Karin ngay giữa khu rừng này tỷ thí với Thần Mèo Karin trước!' },
      { type: 'kill', targetId: 'boss_than_meo', count: 1, text: 'Leo lên Tháp Karin thách đấu thắng Thần Mèo Karin' },
      { type: 'kill', targetId: 'tau_pay_pay', count: 1, text: 'Xuống Rừng Karin đánh bại Sát Thủ Tàu Pảy Pảy' },
      { type: 'talk', targetId: 'quy_lao_kame', count: 1, text: 'Về Đảo Kame báo tin cho Quy Lão Kame', dialogReply: 'Hạ gục Tàu Pảy Pảy và vượt qua Tháp Karin rồi ư! Quân đoàn Fide đang xâm lược Namếc và Xayda — hãy ra Trạm Tàu Vũ Trụ hội quân ngay!' }
    ],
    desc: 'Từ Đảo Kame rẽ nhánh Bắc qua Đông Karin → Rừng Karin gặp Bò Mộng, leo Cột Tháp Karin lên đỉnh đánh thắng Thần Mèo Karin rồi xuống chân tháp hạ Sát Thủ Tàu Pảy Pảy!',
    reward: { power: 45000, gold: 45000, gem: 35, item: 'vb_candauvan' }
  },

  // -------------------- GIAI ĐOẠN 2: ĐẠI CHIẾN QUÂN ĐOÀN FIDE --------------------
  {
    id: 5,
    era: 'Giai đoạn 2: Đại chiến Quân đoàn Fide',
    title: 'Truy quét Kuku, Mập Đầu Đinh, Rambo',
    steps: [
      { type: 'kill', targetId: 'boss_kuku', count: 1, text: 'Bay sang Đảo Guru (Namếc) tiêu diệt Kuku' },
      { type: 'kill', targetId: 'boss_map_dau_dinh', count: 1, text: 'Bay sang TP. Vegeta (Xayda) hạ Mập Đầu Đinh' },
      { type: 'kill', targetId: 'boss_rambo', count: 1, text: 'Tiêu diệt Rambo tại TP. Vegeta (Xayda)' }
    ],
    desc: 'Liên minh 3 hành tinh! Hãy tới Trạm Tàu Vũ Trụ đáp phi thuyền qua lại giữa Hành tinh Namếc và Hành tinh Xayda để tiêu diệt bộ ba tay sai Kuku, Mập Đầu Đinh và Rambo!',
    reward: { power: 85000, gold: 75000, gem: 45, item: 'rada_cap1' }
  },
  {
    id: 6,
    era: 'Giai đoạn 2: Đại chiến Quân đoàn Fide',
    title: 'Đánh bại 5 Tiểu Đội Sát Thủ',
    steps: [
      { type: 'kill', targetId: 'tdst_so4', count: 1, text: 'Hạ Số 4 Guldo tại Vực Maima (Namếc)' },
      { type: 'kill', targetId: 'tdst_so3', count: 1, text: 'Hạ Số 3 Recoome tại Vực Maima' },
      { type: 'kill', targetId: 'tdst_so2_so1', count: 2, text: 'Hạ cặp đôi Burter & Jeice (Số 2 & Số 1)' },
      { type: 'kill', targetId: 'tdst_ginyu', count: 1, text: 'Đánh bại Đội Trưởng Ginyu' }
    ],
    desc: 'Tiểu Đội Sát Thủ Ginyu gồm 5 thành viên tinh nhuệ của Fide vừa đáp xuống Vực Maima (đi sang phải từ Đảo Guru - Namếc). Hãy đánh bại toàn bộ 5 thành viên của chúng!',
    reward: { power: 150000, gold: 110000, gem: 60 }
  },
  {
    id: 7,
    era: 'Giai đoạn 2: Đại chiến Quân đoàn Fide',
    title: 'Tiêu diệt Fide Đại Đế (3 Cấp)',
    steps: [
      { type: 'kill', targetId: 'fide_cap_1', count: 1, text: 'Đánh bại Fide Đại Đế Cấp 1 (Vực Maima)' },
      { type: 'kill', targetId: 'fide_cap_2', count: 1, text: 'Đánh bại Fide Đại Đế Cấp 2' },
      { type: 'kill', targetId: 'fide_cap_3', count: 1, text: 'Tiêu diệt Fide Đại Đế Hoàn Thiện (Cấp 3)' },
      { type: 'talk', targetId: 'truong_lao_guru', count: 1, text: 'Báo tin bình định Namếc cho Trưởng Lão Guru', dialogReply: 'Ác đế Fide đã bị tiêu diệt! Nhưng tại Trái Đất, hiểm họa Robot Sát Thủ của Tiến sĩ Kôrê đang trỗi dậy ở phía Nam Đảo Kame!' }
    ],
    desc: 'Quyết chiến sinh tử với Fide Đại Đế qua 3 cấp biến hình liên tiếp ngay tại Vực Maima (Hành tinh Namếc), sau đó báo tin chiến thắng cho Trưởng Lão Guru!',
    reward: { power: 260000, gold: 160000, gem: 80, item: 'nr_3s' }
  },

  // -------------------- GIAI ĐOẠN 3: HIỂM HỌA ROBOT VÀ XÊN BỌ HÙNG --------------------
  {
    id: 8,
    era: 'Giai đoạn 3: Hiểm họa Robot & Xên Bọ Hùng',
    title: 'Chặn đứng Android 19 & Dr. Kôrê',
    steps: [
      { type: 'kill', targetId: 'android_19', count: 1, text: 'Qua Nam Kame tới TP. Phía Đông hạ Android 19' },
      { type: 'kill', targetId: 'dr_kore', count: 1, text: 'Tiêu diệt Tiến sĩ Kôrê (Android 20)' }
    ],
    desc: 'Từ Đảo Kame đi sang nhánh phải qua Nam Kame → TP. Phía Đông & Thị Trấn Ginder để chặn đứng hai cỗ máy hút năng lượng Android 19 và Dr. Kôrê!',
    reward: { power: 360000, gold: 200000, gem: 90 }
  },
  {
    id: 9,
    era: 'Giai đoạn 3: Hiểm họa Robot & Xên Bọ Hùng',
    title: 'Bảo vệ Sân Sau Siêu Thị (Android 13-14-15)',
    steps: [
      { type: 'kill', targetId: 'android_15_14', count: 2, text: 'Bay tới Siêu Thị → Sân Sau hạ Android 15 & 14' },
      { type: 'kill', targetId: 'android_13', count: 1, text: 'Đánh bại Super Android 13' }
    ],
    desc: 'Từ Trạm Tàu Vũ Trụ bất kỳ, bay tới Siêu Thị Liên Hành Tinh rồi đi qua cổng phải sang Sân Sau Siêu Thị tiêu diệt bộ ba sát thủ Android 15, Android 14 và Super Android 13!',
    reward: { power: 480000, gold: 250000, gem: 100 }
  },
  {
    id: 10,
    era: 'Giai đoạn 3: Hiểm họa Robot & Xên Bọ Hùng',
    title: 'Quyết đấu Võ Đài Xên Bọ Hùng',
    steps: [
      { type: 'kill', targetId: 'pic_poc_kk', count: 3, text: 'Quét sạch nhóm Pic, Poc, King Kong (Thị Trấn Ginder)' },
      { type: 'kill', targetId: 'xen_con', count: 5, text: 'Tiêu diệt 5 Xên Con tại Võ Đài Xên' },
      { type: 'kill', targetId: 'xen_hoan_thien', count: 1, text: 'Đánh bại Xên Hoàn Thiện' },
      { type: 'kill', targetId: 'sieu_bo_hung', count: 1, text: 'Hủy diệt Siêu Bọ Hùng tại Võ Đài Xên!' }
    ],
    desc: 'Tiến qua Thị Trấn Ginder đánh bại nhóm Pic - Poc - King Kong, sau đó bước vào Võ Đài Xên Bọ Hùng quyết chiến với đàn Xên Con, Xên Hoàn Thiện và Siêu Bọ Hùng!',
    reward: { power: 750000, gold: 380000, gem: 140, item: 'bong_tai_c1' }
  },

  // -------------------- GIAI ĐOẠN 4: GIẢI CỨU TƯƠNG LAI --------------------
  {
    id: 11,
    era: 'Giai đoạn 4: Giải cứu Tương Lai',
    title: 'Cỗ Máy Thời Gian & Nhẫn Thời Không',
    steps: [
      { type: 'talk', targetId: 'calich', count: 1, text: 'Gặp Calích ở Vách Núi (Aru/Moori/Kakarot) sang Tương Lai', dialogReply: 'Thế giới Tương Lai của tôi đang bị Black Goku tàn phá! Hãy bước lên Cỗ Máy Thời Gian cùng tôi tiêu diệt hắn và đoạt lấy Nhẫn Thời Không!' },
      { type: 'kill', targetId: 'black_goku', count: 1, text: 'Đánh bại Black Goku tại Thế Giới Tương Lai' },
      { type: 'kill', targetId: 'super_black_goku', count: 1, text: 'Tiêu diệt Super Black Goku Rosé đoạt Nhẫn Thời Không!' }
    ],
    desc: 'Tìm gặp NPC Calích (Future Trunks) tại Vách Núi Aru / Vách Núi Moori / Vách Núi Kakarot để đi Cỗ Máy Thời Gian tới Tương Lai, hạ Black Goku & Super Black Goku đoạt Nhẫn Thời Không!',
    reward: { power: 1200000, gold: 550000, gem: 180, item: 'nhan_thoi_khong' }
  },

  // -------------------- GIAI ĐOẠN 5: KỶ NGUYÊN THẦN HỦY DIỆT & ĐA VŨ TRỤ --------------------
  {
    id: 12,
    era: 'Giai đoạn 5: Thần Hủy Diệt & Đa Vũ Trụ',
    title: 'Phi Thuyền Babidi & Hành Tinh Cold',
    steps: [
      { type: 'kill', targetId: 'boss_mabu', count: 1, text: 'Qua Nam Kame vào Đại Hội / Phi Thuyền Babidi thu phục Mabư' },
      { type: 'kill', targetId: 'boss_cooler', count: 1, text: 'Đáp Tàu Vũ Trụ tới Hành Tinh Cold chinh phạt BOSS Cooler' }
    ],
    desc: 'Từ Nam Kame vào Đại Hội Võ Thuật gặp Osin xuống Phi Thuyền Babidi thu phục Ma Nhân Mabư (nhận Trứng Đệ Tử!), sau đó đi Tàu Vũ Trụ tới Hành Tinh Cold hạ BOSS Cooler săn đồ Thần Linh!',
    reward: { power: 2000000, gold: 800000, gem: 250, item: 'trung_de_tu' }
  },
  {
    id: 13,
    era: 'Giai đoạn 5: Thần Hủy Diệt & Đa Vũ Trụ',
    title: 'Hành Tinh Bill & Ác Thần Cumber',
    steps: [
      { type: 'talk', targetId: 'whis', count: 1, text: 'Lên Tháp Karin → Thần Điện gặp Whis tới Hành Tinh Bill', dialogReply: 'Hoan nghênh chiến binh phàm trần đặt chân tới Hành tinh của Ngài Beerus! Hãy dùng Nhẫn Thời Không trong Hành Trang để trấn áp tên Xayda cổ đại Cumber ở Hành Tinh Ngục Tù!' },
      { type: 'kill', targetId: 'boss_cumber', count: 1, text: 'Dùng Nhẫn Thời Không tới Hành Tinh Ngục Tù hạ BOSS Cumber' },
      { type: 'shenron', targetId: 'shenron', count: 1, text: 'Tập hợp 7 Viên Ngọc Rồng & Triệu hồi Rồng Thần' }
    ],
    desc: 'Từ Tháp Karin bay lên Thần Điện gặp Thiên Sứ Whis tới Hành Tinh Bill tu luyện, mở Hành Trang bấm Sử Dụng [Nhẫn Thời Không] sang Hành Tinh Ngục Tù đánh bại Cumber và gọi Rồng Thần!',
    reward: { power: 5000000, gold: 2000000, gem: 500, item: 'ao_huy_diet' }
  }
];

// =========================================================================
// MẪU QUÁI VẬT & BOSS XUYÊN SUỐT 5 GIAI ĐOẠN (CÓ BIẾN HÌNH LIÊN TIẾP TRÊN CHIẾN TRƯỜNG!)
// =========================================================================
export const MONSTER_TEMPLATES = {
  // --- Quái Giai đoạn 1 ---
  moc_nhan: {
    id: 'moc_nhan', name: 'Mộc Nhân', renderType: 'dummy',
    idleTex: 'nhanvat/quai/moc_nhan_1.png', hitTex: 'nhanvat/quai/moc_nhan_2.png',
    scale: 0.58, hp: 120, attack: 0, exp: 65, gold: 80, speed: 0, respawnSec: 3.0
  },
  khung_long: {
    id: 'khung_long', name: 'Khủng Long', renderType: 'frames',
    frames: ['nhanvat/quai/khung_long_1.png', 'nhanvat/quai/khung_long_2.png'],
    nativeLeft: false, scale: 0.52, hp: 240, attack: 10, exp: 140, gold: 160, dropsMeat: true, speed: 42
  },
  lon_loi: {
    id: 'lon_loi', name: 'Lợn Lòi', renderType: 'frames',
    frames: ['nhanvat/quai/lon_loi_1.png', 'nhanvat/quai/lon_loi_2.png'],
    nativeLeft: false, scale: 0.56, hp: 560, attack: 22, exp: 320, gold: 350, speed: 48
  },
  khung_long_me: {
    id: 'khung_long_me', name: 'Khủng Long Mẹ', renderType: 'frames',
    frames: ['nhanvat/quai/khung_long_1.png', 'nhanvat/quai/khung_long_2.png'],
    nativeLeft: false, scale: 0.68, hp: 1100, attack: 38, exp: 620, gold: 640, dropsMeat: true, speed: 46
  },
  than_lan_xanh: {
    id: 'than_lan_xanh', name: 'Nấm Độc Rừng Sâu', renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/rua/mount_9_0.png', nativeLeft: true, frameCount: 4, drawW: 66, drawH: 66,
    hp: 1550, attack: 48, exp: 820, gold: 760, speed: 46
  },
  quy_xuong: {
    id: 'quy_xuong', name: 'Quỷ Đất Rừng Xương', renderType: 'frames',
    frames: ['nhanvat/quai/quy_dat_1.png', 'nhanvat/quai/quy_dat_2.png'],
    nativeLeft: false, scale: 0.60, hp: 1950, attack: 58, exp: 980, gold: 880, speed: 54
  },
  khung_long_bay: {
    id: 'khung_long_bay', name: 'Thằn Lằn Bay', renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/khunglong/myTexture2drong.png', nativeLeft: true, frameCount: 3, drawW: 58, drawH: 58, flyOffset: 26,
    hp: 1500, attack: 48, exp: 720, gold: 680, speed: 58
  },
  boss_than_meo: {
    id: 'boss_than_meo', name: 'Thần Mèo Karin (Thách Đấu)', renderType: 'frames',
    frames: ['nhanvat/npc/than_meo_karin.png'], nativeLeft: true, isBoss: true, scale: 0.54,
    hp: 5200, attack: 95, exp: 3800, gold: 6000, speed: 78, noAutoRespawn: true, respawnSec: 9999
  },
  tau_pay_pay: {
    id: 'tau_pay_pay', name: 'Sát Thủ Tàu Pảy Pảy', renderType: 'frames',
    frames: ['nhanvat/quai/tau_pay_pay.png'], nativeLeft: true, isBoss: true, scale: 0.56,
    hp: 7800, attack: 135, exp: 5200, gold: 9500, speed: 72, respawnSec: 12
  },

  // --- Giai đoạn 2: Quân Đoàn Fide ---
  boss_kuku: {
    id: 'boss_kuku', name: 'BOSS Kuku', renderType: 'caitrang', caitrangKey: 'xiao', isBoss: true, scale: 0.58,
    hp: 14000, attack: 195, exp: 8500, gold: 12000, speed: 66, respawnSec: 12
  },
  boss_map_dau_dinh: {
    id: 'boss_map_dau_dinh', name: 'BOSS Mập Đầu Đinh', renderType: 'caitrang', caitrangKey: 'khi_2', isBoss: true, scale: 0.56,
    hp: 16500, attack: 220, exp: 9500, gold: 13500, speed: 58, respawnSec: 12
  },
  boss_rambo: {
    id: 'boss_rambo', name: 'BOSS Rambo', renderType: 'caitrang', caitrangKey: 'hop_the_thuong_xayda', isBoss: true, scale: 0.58,
    hp: 19000, attack: 250, exp: 11000, gold: 15000, speed: 68, respawnSec: 12
  },
  tdst_so4: {
    id: 'tdst_so4', name: 'Số 4 Guldo (TDST)', renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/rua/mount_9_0.png', nativeLeft: true, frameCount: 4, drawW: 78, drawH: 78, isBoss: true,
    hp: 22000, attack: 270, exp: 12500, gold: 16000, speed: 60, respawnSec: 14
  },
  tdst_so3: {
    id: 'tdst_so3', name: 'Số 3 Recoome (TDST)', renderType: 'caitrang', caitrangKey: 'hop_the_thuong_traidat', isBoss: true, scale: 0.62,
    hp: 26000, attack: 310, exp: 14500, gold: 18000, speed: 62, respawnSec: 14
  },
  tdst_so2_so1: {
    id: 'tdst_so2_so1', name: 'Burter & Jeice (TDST)', renderType: 'caitrang', caitrangKey: 'bong_tai_1_namek', isBoss: true, scale: 0.6,
    hp: 30000, attack: 345, exp: 16500, gold: 20000, speed: 78, respawnSec: 14
  },
  tdst_ginyu: {
    id: 'tdst_ginyu', name: 'Đội Trưởng Ginyu (TDST)', renderType: 'caitrang', caitrangKey: 'bong_tai_2_xayda', isBoss: true, auraColor: 'tim', scale: 0.64,
    hp: 38000, attack: 390, exp: 22000, gold: 28000, speed: 72, respawnSec: 15
  },
  fide_cap_1: {
    id: 'fide_cap_1', name: 'Fide Đại Đế (Cấp 1)', renderType: 'frames',
    frames: ['nhanvat/quai/fide_dai_de.png'], nativeLeft: true, isBoss: true, scale: 0.50,
    hp: 45000, attack: 430, exp: 26000, gold: 32000, speed: 70,
    nextForm: 'fide_cap_2', respawnSec: 18
  },
  fide_cap_2: {
    id: 'fide_cap_2', name: 'Fide Đại Đế (Cấp 2)', renderType: 'frames',
    frames: ['nhanvat/quai/fide_dai_de.png'], nativeLeft: true, isBoss: true, scale: 0.58,
    hp: 62000, attack: 510, exp: 35000, gold: 42000, speed: 74,
    nextForm: 'fide_cap_3', respawnSec: 18
  },
  fide_cap_3: {
    id: 'fide_cap_3', name: 'Fide Đại Đế Hoàn Thiện (Cấp 3)', renderType: 'frames',
    frames: ['nhanvat/quai/fide_dai_de.png'], nativeLeft: true, isBoss: true, auraColor: 'tim', scale: 0.64,
    hp: 85000, attack: 620, exp: 52000, gold: 65000, speed: 80,
    resetForm: 'fide_cap_1', respawnSec: 18
  },

  // --- Giai đoạn 3: Robot Sát Thủ & Xên Bọ Hùng ---
  android_19: {
    id: 'android_19', name: 'BOSS Android 19', renderType: 'caitrang', caitrangKey: 'bong_tai_1_traidat', isBoss: true, scale: 0.58,
    hp: 68000, attack: 540, exp: 38000, gold: 45000, speed: 66, respawnSec: 14
  },
  dr_kore: {
    id: 'dr_kore', name: 'BOSS Tiến Sĩ Kôrê (Android 20)', renderType: 'caitrang', caitrangKey: 'bong_tai_2_traidat', isBoss: true, scale: 0.6,
    hp: 78000, attack: 590, exp: 44000, gold: 52000, speed: 68, respawnSec: 14
  },
  android_15_14: {
    id: 'android_15_14', name: 'Android 14 & 15', renderType: 'caitrang', caitrangKey: 'bong_tai_1_xayda', isBoss: true, scale: 0.6,
    hp: 88000, attack: 640, exp: 48000, gold: 55000, speed: 72, respawnSec: 14
  },
  android_13: {
    id: 'android_13', name: 'BOSS Super Android 13', renderType: 'caitrang', caitrangKey: 'broly_lssj', isBoss: true, auraColor: 'xanh', scale: 0.65,
    hp: 115000, attack: 740, exp: 65000, gold: 75000, speed: 76, respawnSec: 16
  },
  pic_poc_kk: {
    id: 'pic_poc_kk', name: 'Sát Thủ Pic - Poc - King Kong', renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/xenvang/mount_17_0.png', nativeLeft: true, frameCount: 4, drawW: 88, drawH: 88, flyOffset: 10, isBoss: true,
    hp: 95000, attack: 690, exp: 52000, gold: 58000, speed: 70, respawnSec: 13
  },
  xen_con: {
    id: 'xen_con', name: 'Xên Con', renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/xenxanh/mount_16_0.png', nativeLeft: true, frameCount: 4, drawW: 82, drawH: 78, flyOffset: 10,
    hp: 55000, attack: 480, exp: 28000, gold: 25000, speed: 62
  },
  xen_hoan_thien: {
    id: 'xen_hoan_thien', name: 'Xên Hoàn Thiện', renderType: 'frames',
    frames: ['nhanvat/quai/xen_hoan_thien.png'], nativeLeft: true, isBoss: true, scale: 0.58,
    hp: 135000, attack: 850, exp: 80000, gold: 95000, speed: 76,
    nextForm: 'sieu_bo_hung', respawnSec: 18
  },
  sieu_bo_hung: {
    id: 'sieu_bo_hung', name: 'BOSS Siêu Bọ Hùng', renderType: 'frames',
    frames: ['nhanvat/quai/xen_hoan_thien.png'], nativeLeft: true, isBoss: true, auraColor: 'xanh', scale: 0.66,
    hp: 185000, attack: 1050, exp: 125000, gold: 150000, speed: 82,
    resetForm: 'xen_hoan_thien', respawnSec: 18
  },

  // --- Giai đoạn 4: Giải cứu Tương Lai ---
  black_goku: {
    id: 'black_goku', name: 'BOSS Black Goku', renderType: 'caitrang', caitrangKey: 'goku_black', isBoss: true, scale: 0.62,
    hp: 220000, attack: 1250, exp: 160000, gold: 180000, speed: 80,
    nextForm: 'super_black_goku', respawnSec: 18
  },
  super_black_goku: {
    id: 'super_black_goku', name: 'BOSS Super Black Goku Rosé', renderType: 'caitrang', caitrangKey: 'goku_black_rose', isBoss: true, auraColor: 'tim', scale: 0.66,
    hp: 310000, attack: 1580, exp: 240000, gold: 280000, speed: 86,
    guaranteedDrop: 'nhan_thoi_khong', resetForm: 'black_goku', respawnSec: 18
  },

  // --- Giai đoạn 5 & Phó Bản Cày Cấp ---
  boss_mabu: {
    id: 'boss_mabu', name: 'BOSS Ma Nhân Mabư (Phi Thuyền Babidi)', renderType: 'caitrang', caitrangKey: 'bong_tai_3_namek', isBoss: true, auraColor: 'tim', scale: 0.66,
    hp: 360000, attack: 1750, exp: 290000, gold: 320000, speed: 78,
    guaranteedDrop: 'trung_de_tu', respawnSec: 18
  },
  boss_cooler: {
    id: 'boss_cooler', name: 'BOSS Cooler Hoàn Thiện (Cold)', renderType: 'frames',
    frames: ['nhanvat/quai/cooler_boss.png'], nativeLeft: true, isBoss: true, auraColor: 'tim', scale: 0.64,
    hp: 450000, attack: 2100, exp: 380000, gold: 450000, speed: 82,
    guaranteedDrop: 'ao_than_linh', respawnSec: 18
  },
  boss_cumber: {
    id: 'boss_cumber', name: 'ÁC THẦN XAYDA CUMBER', renderType: 'frames',
    frames: ['nhanvat/quai/cumber_boss.png'], nativeLeft: true, isBoss: true, auraColor: 'tim', scale: 0.70,
    hp: 680000, attack: 2850, exp: 650000, gold: 800000, speed: 88,
    guaranteedDrop: 'nr_1s', respawnSec: 20
  },
  khi_dot: {
    id: 'khi_dot', name: 'Khỉ Đột Núi Khỉ', renderType: 'caitrang', caitrangKey: 'khi_7', scale: 0.62,
    hp: 35000, attack: 360, exp: 18000, gold: 16000, speed: 54
  },
  boss_broly: {
    id: 'boss_broly', name: 'Siêu Xayda Huyền Thoại Broly', renderType: 'caitrang', caitrangKey: 'broly_lssj', isBoss: true, auraColor: 'xanh', scale: 0.68,
    hp: 250000, attack: 1380, exp: 190000, gold: 220000, speed: 80, respawnSec: 18
  },
  zinba: {
    id: 'zinba', name: 'Quái Thú Băng Tuyết Cold', renderType: 'frames',
    frames: ['vatpham/vatphamgame/pet/zinba/25200.png', 'vatpham/vatphamgame/pet/zinba/25201.png', 'vatpham/vatphamgame/pet/zinba/25202.png', 'vatpham/vatphamgame/pet/zinba/25203.png'],
    nativeLeft: false, scale: 0.76, hp: 140000, attack: 880, exp: 75000, gold: 65000, speed: 64
  },
  tuan_loc: {
    id: 'tuan_loc', name: 'Thần Thú Thực Vật', renderType: 'frames',
    frames: ['vatpham/vatphamgame/pet/tuan_loc/6680.png', 'vatpham/vatphamgame/pet/tuan_loc/6681.png', 'vatpham/vatphamgame/pet/tuan_loc/6682.png'],
    nativeLeft: false, scale: 0.78, hp: 180000, attack: 960, exp: 95000, gold: 82000, speed: 58
  },
  doc_nhan_tuong: {
    id: 'doc_nhan_tuong', name: 'Độc Nhãn Đại Tướng (Phó Bản)', renderType: 'caitrang', caitrangKey: 'bong_tai_3_traidat', isBoss: true, scale: 0.64,
    hp: 120000, attack: 720, exp: 110000, gold: 130000, speed: 70, respawnSec: 14
  },
  tuong_xanh_lo: {
    id: 'tuong_xanh_lo', name: 'Tướng Hải Tặc Xanh Lơ (Kho Báu)', renderType: 'caitrang', caitrangKey: 'bong_tai_3_xayda', isBoss: true, scale: 0.64,
    hp: 160000, attack: 890, exp: 155000, gold: 195000, speed: 72, respawnSec: 14
  },
  hatchiyack: {
    id: 'hatchiyack', name: 'Cỗ Máy Hủy Diệt Hatchiyack (Khí Gas)', renderType: 'caitrang', caitrangKey: 'broly_lssj', isBoss: true, auraColor: 'tim', scale: 0.7,
    hp: 420000, attack: 1950, exp: 390000, gold: 420000, speed: 80, respawnSec: 16
  },
  // --- Quái & BOSS Bổ Sung Từ MobTemplates.json (ElectroHeavenVN/DataNRO) ---
  may_do_suc_manh: {
    id: 'may_do_suc_manh', name: 'Máy Đo Sức Mạnh (Phòng Tập)', renderType: 'dummy',
    idleTex: 'nhanvat/quai/moc_nhan_1.png', hitTex: 'nhanvat/quai/moc_nhan_2.png',
    scale: 0.72, hp: 5000000, attack: 0, exp: 45000, gold: 15000, speed: 0, respawnSec: 2.0
  },
  oc_muon_hon: {
    id: 'oc_muon_hon', name: 'Ốc Mượn Hồn & Ốc Sên', renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/rua/mount_9_0.png', nativeLeft: true, frameCount: 4, drawW: 68, drawH: 68,
    hp: 3000, attack: 55, exp: 950, gold: 880, speed: 44
  },
  bulon_ukulele: {
    id: 'bulon_ukulele', name: 'Bulon & Ukulele (Namếc)', renderType: 'sheet_vertical',
    sheet: 'vatpham/vanbay/xenvang/mount_17_0.png', nativeLeft: true, frameCount: 4, drawW: 78, drawH: 78,
    hp: 18000, attack: 215, exp: 8800, gold: 9200, speed: 56
  },
  heo_xayda: {
    id: 'heo_xayda', name: 'Quỷ Đất Xayda', renderType: 'frames',
    frames: ['nhanvat/quai/quy_dat_1.png', 'nhanvat/quai/quy_dat_2.png'],
    nativeLeft: false, scale: 0.60, hp: 3200, attack: 62, exp: 1100, gold: 960, speed: 52
  },
  nappa_fide: {
    id: 'nappa_fide', name: 'Chiến Binh Nappa & Appule', renderType: 'caitrang', caitrangKey: 'hop_the_thuong_xayda', scale: 0.58,
    hp: 40000, attack: 380, exp: 21000, gold: 22000, speed: 66
  },
  khi_giap_sat: {
    id: 'khi_giap_sat', name: 'Khỉ Giáp Sắt & Khỉ Lông Đỏ', renderType: 'caitrang', caitrangKey: 'khi_2', scale: 0.64,
    hp: 350000, attack: 1420, exp: 165000, gold: 145000, speed: 68
  },
  voi_chin_nga: {
    id: 'voi_chin_nga', name: 'BOSS Voi Chín Ngà (Ngũ Hành Sơn)', renderType: 'frames',
    frames: ['vatpham/vatphamgame/pet/zinba/25200.png', 'vatpham/vatphamgame/pet/zinba/25201.png'],
    nativeLeft: false, isBoss: true, scale: 0.92, hp: 320000, attack: 1450, exp: 220000, gold: 260000, speed: 62, respawnSec: 16
  },
  ga_chin_cua: {
    id: 'ga_chin_cua', name: 'Gà Chín Cựa & Ngựa Hồng Mao', renderType: 'frames',
    frames: ['vatpham/vatphamgame/pet/tuan_loc/6680.png', 'vatpham/vatphamgame/pet/tuan_loc/6681.png'],
    nativeLeft: false, scale: 0.8, hp: 165000, attack: 940, exp: 92000, gold: 85000, speed: 68
  },
  robot_bao_ve: {
    id: 'robot_bao_ve', name: 'Rôbốt Bảo Vệ Hành Tinh M-2', renderType: 'caitrang', caitrangKey: 'bong_tai_2_traidat', scale: 0.62,
    hp: 260000, attack: 1280, exp: 145000, gold: 135000, speed: 66
  },
  copy_vegeta: {
    id: 'copy_vegeta', name: 'BOSS Nhân Bản Copy-Vegeta (Potaufeu)', renderType: 'caitrang', caitrangKey: 'bong_tai_3_xayda', isBoss: true, auraColor: 'tim', scale: 0.66,
    hp: 480000, attack: 2250, exp: 420000, gold: 480000, speed: 84, respawnSec: 18
  },
  hirudegarn: {
    id: 'hirudegarn', name: 'MA THẦN HIRUDEGARN (Địa Ngục)', renderType: 'frames',
    frames: ['nhanvat/quai/cooler_boss.png'], nativeLeft: true, isBoss: true, auraColor: 'tim', scale: 0.74,
    hp: 580000, attack: 2550, exp: 520000, gold: 620000, speed: 84, respawnSec: 18
  },
  abo_kado: {
    id: 'abo_kado', name: 'BOSS Hợp Thể Abo & Kado (Dr. Myuu)', renderType: 'caitrang', caitrangKey: 'bong_tai_2_namek', isBoss: true, auraColor: 'xanh', scale: 0.66,
    hp: 390000, attack: 1880, exp: 310000, gold: 340000, speed: 78, respawnSec: 16
  }
};

// Helper tạo nhanh Waypoint rìa trái / rìa phải / cửa giữa chuẩn NRO
function wpLeft(id, label, targetMapId, targetX = 1400, targetY = 144) {
  return {
    id, label, kind: 'left_edge',
    signRect: { x: 10, y: 220, w: 120, h: 36 },
    showRangeX: [-50, 100],
    edgeTriggerX: [-50, 24],
    groundGlowX: 16,
    targetMapId, targetX, targetY
  };
}

function wpRight(id, label, mapWidth, targetMapId, targetX = 60, targetY = 144) {
  return {
    id, label, kind: 'right_edge',
    signRect: { x: mapWidth - 130, y: 220, w: 120, h: 36 },
    showRangeX: [mapWidth - 100, mapWidth + 50],
    edgeTriggerX: [mapWidth - 24, mapWidth + 50],
    groundGlowX: mapWidth - 16,
    targetMapId, targetX, targetY
  };
}

function wpDoor(id, label, centerX, signY, targetMapId, targetX, targetY) {
  return {
    id, label, kind: 'door',
    signRect: { x: centerX - 60, y: signY, w: 120, h: 36 },
    showRangeX: [centerX - 60, centerX + 60],
    doorRangeX: [centerX - 45, centerX + 45],
    groundGlowX: centerX,
    targetMapId, targetX, targetY
  };
}

// =========================================================================
// MẠNG LƯỚI 36 BẢN ĐỒ CHUẨN SƠ ĐỒ NGỌC RỒNG ONLINE (ID 0 .. 35)
// =========================================================================
export const MAPS_CONFIG = [
  // [0] Nhà Gôhan (Map khởi đầu chuẩn 100% Dragon Boy — toriMapId: 21)
  {
    id: 0, key: 'nha_gohan', name: 'Nhà Gôhan', toriMapId: 21, bgID: 0, region: 'Trái Đất', planetTheme: 'traidat', renderStyle: 'home_earth',
    width: 768, height: 480, defaultSpawn: { x: 348, y: 144 },
    hitboxes: [{ x: -50, y: 0, w: 868, h: 144 }],
    waypoints: [
      { ...wpDoor('wp_0_1', 'Làng Aru', 492, 220, 1, 372, 144), edgeTriggerX: [720, 780] }
    ],
    npcs: [
      { id: 'ruong_do', name: 'Rương Đồ', kind: 'chest', x: 84, y: 144, tex: 'nhanvat/npc/ruong_do/1.png', avt: 'nhanvat/npc/ruong_do/avt_ruong.png' },
      { id: 'admin_dungle', name: 'Admin Sơn (Hỗ Trợ)', kind: 'modular', folder: 'admin_dungle', x: 180, y: 144 },
      { id: 'ong_gohan', name: 'Ông Gôhan', kind: 'modular', folder: 'ong_gohan', x: 228, y: 144 },
      { id: 'dau_traidat', name: 'Cây Đậu Thần', kind: 'senzu_tree', x: 144, y: 144 },
      { id: 'dui_ga', name: 'Đùi Gà Nướng', kind: 'meat', x: 290, y: 144, tex: 'nhanvat/npc/dui_ga/1.png' }
    ],
    monsters: []
  },

  // [1] Làng Aru (toriMapId: 0)
  {
    id: 1, key: 'lang_aru', name: 'Làng Aru', toriMapId: 0, bgID: 0, region: 'Trái Đất', planetTheme: 'traidat', renderStyle: 'lang_aru',
    width: 1248, height: 576, defaultSpawn: { x: 372, y: 144 },
    hitboxes: [{ x: -50, y: 0, w: 1348, h: 144 }],
    waypoints: [
      wpLeft('wp_1_2', 'Vách núi Aru', 2, 1380, 144),
      wpDoor('wp_1_3', 'Trạm Tàu Vũ Trụ', 180, 220, 3, 230, 144),
      wpDoor('wp_1_0', 'Nhà Gôhan', 324, 220, 0, 444, 144),
      wpRight('wp_1_4', 'Đồi hoa cúc', 1248, 4, 60, 144)
    ],
    npcs: [
      { id: 'admin_thanhle', name: 'Chủ Tiệm Bảo', kind: 'modular', folder: 'admin_thanhle', x: 228, y: 144 },
      { id: 'ba_chip', name: 'Đại Ca Ba Chíp', kind: 'modular', folder: 'admin_huykhoi', x: 492, y: 144 },
      { id: 'admin_haidang', name: 'Thần Tài Hùng', kind: 'modular', folder: 'admin_haidang', x: 500, y: 144 }
    ],
    monsters: [
      { template: 'moc_nhan', x: 750, minX: 750, maxX: 750 },
      { template: 'moc_nhan', x: 850, minX: 850, maxX: 850 },
      { template: 'moc_nhan', x: 950, minX: 950, maxX: 950 },
      { template: 'khung_long', x: 1050, minX: 1000, maxX: 1100 },
      { template: 'khung_long', x: 1150, minX: 1100, maxX: 1200 }
    ]
  },

  // [2] Vách Núi Aru (toriMapId: 42)
  {
    id: 2, key: 'vach_nui_aru', name: 'Vách Núi Aru', toriMapId: 42, bgID: 0, region: 'Trái Đất', planetTheme: 'traidat', renderStyle: 'cliff_earth',
    width: 1440, height: 576, defaultSpawn: { x: 1380, y: 144 },
    hitboxes: [{ x: -50, y: 0, w: 1540, h: 144 }],
    waypoints: [wpRight('wp_2_1', 'Làng Aru', 1440, 1, 60, 144)],
    npcs: [
      { id: 'calich', name: 'Calích (Tương Lai)', kind: 'sprite', x: 320, y: 144, tex: 'nhanvat/npc/npc_calich.png', scale: 0.56 }
    ],
    monsters: [
      { template: 'khung_long_bay', x: 1200, minX: 1060, maxX: 1380 },
      { template: 'khung_long_bay', x: 800, minX: 660, maxX: 980 }
    ]
  },

  // [3] Trạm Tàu Vũ Trụ Trái Đất (toriMapId: 24)
  {
    id: 3, key: 'tram_tau_traidat', name: 'Trạm Tàu Vũ Trụ Trái Đất', toriMapId: 24, bgID: 0, region: 'Trái Đất', planetTheme: 'traidat', renderStyle: 'spaceport_earth',
    width: 768, height: 480, defaultSpawn: { x: 230, y: 144 },
    hitboxes: [{ x: -50, y: 0, w: 868, h: 144 }],
    waypoints: [wpDoor('wp_3_1', 'Làng Aru', 228, 220, 1, 180, 144)],
    npcs: [
      { id: 'tau_vu_tru', name: 'Tàu Vũ Trụ Trái Đất', kind: 'spaceship', x: 420, y: 144, tex: 'vatpham/taubay/myTexture2dmaybay4b.png' },
      { id: 'ruong_do', name: 'Rương Đồ Trạm', kind: 'chest', x: 680, y: 144, tex: 'nhanvat/npc/ruong_do/1.png', avt: 'nhanvat/npc/ruong_do/avt_ruong.png' },
      { id: 'admin_thanhle', name: 'Kỹ Sư Đạt (Tiếp Tế)', kind: 'modular', folder: 'admin_thanhle', x: 560, y: 144 }
    ],
    monsters: []
  },

  // [4] Đồi Hoa Cúc (Map rừng 1/4 — toriMapId: 1)
  {
    id: 4, key: 'doi_hoa_cuc', name: 'Đồi Hoa Cúc', toriMapId: 1, bgID: 0, region: 'Trái Đất', planetTheme: 'traidat', renderStyle: 'doi_hoa_cuc',
    width: 1536, height: 576, defaultSpawn: { x: 60, y: 144 },
    hitboxes: [{ x: -50, y: 0, w: 1636, h: 144 }],
    waypoints: [
      wpLeft('wp_4_1', 'Làng Aru', 1, 1200, 144),
      wpRight('wp_4_5', 'Thung lũng tre', 1536, 5, 60, 144)
    ],
    npcs: [
      { id: 'thay_hieu', name: 'Thầy Quyết Pha Lê', kind: 'modular', folder: 'thay_hieu', x: 468, y: 144 }
    ],
    monsters: [
      { template: 'khung_long', x: 340, minX: 220, maxX: 480 },
      { template: 'khung_long', x: 650, minX: 520, maxX: 800 },
      { template: 'lon_loi', x: 1060, minX: 910, maxX: 1220 },
      { template: 'lon_loi', x: 1420, minX: 1250, maxX: 1500 }
    ]
  },

  // [5] Thung Lũng Tre (Map rừng 2/4 — toriMapId: 2)
  {
    id: 5, key: 'thung_lung_tre', name: 'Thung Lũng Tre', toriMapId: 2, bgID: 0, region: 'Trái Đất', planetTheme: 'traidat', renderStyle: 'forest_earth',
    width: 1248, height: 576, defaultSpawn: { x: 60, y: 144 },
    hitboxes: [{ x: -50, y: 0, w: 1348, h: 144 }],
    waypoints: [
      wpLeft('wp_5_4', 'Đồi hoa cúc', 4, 1476, 144),
      wpDoor('wp_5_3', 'Trạm tàu vũ trụ', 588, 220, 3, 230, 144),
      wpRight('wp_5_6', 'Rừng nấm', 1248, 6, 60, 144)
    ],
    npcs: [],
    monsters: [
      { template: 'lon_loi', x: 420, minX: 280, maxX: 580 },
      { template: 'khung_long_me', x: 840, minX: 680, maxX: 1000 },
      { template: 'khung_long_me', x: 1100, minX: 1000, maxX: 1200 }
    ]
  },

  // [6] Rừng Nấm (Map rừng 3/4 — toriMapId: 3)
  {
    id: 6, key: 'rung_nam', name: 'Rừng Nấm', toriMapId: 3, bgID: 1, region: 'Trái Đất', planetTheme: 'traidat', renderStyle: 'forest_earth',
    width: 1632, height: 552, defaultSpawn: { x: 60, y: 144 },
    hitboxes: [{ x: -50, y: 0, w: 1732, h: 144 }],
    waypoints: [
      wpLeft('wp_6_5', 'Thung lũng tre', 5, 1188, 144),
      wpRight('wp_6_7', 'Rừng xương', 1632, 7, 60, 144)
    ],
    npcs: [],
    monsters: [
      { template: 'than_lan_xanh', x: 460, minX: 300, maxX: 620 },
      { template: 'than_lan_xanh', x: 920, minX: 760, maxX: 1080 },
      { template: 'khung_long_me', x: 1380, minX: 1220, maxX: 1560 }
    ]
  },

  // [7] Rừng Xương (Map rừng 4/4 nối vào Đảo Kame! — toriMapId: 4)
  {
    id: 7, key: 'rung_xuong', name: 'Rừng Xương', toriMapId: 4, bgID: 1, region: 'Trái Đất', planetTheme: 'traidat', renderStyle: 'cliff_earth',
    width: 1632, height: 504, defaultSpawn: { x: 60, y: 144 },
    hitboxes: [{ x: -50, y: 0, w: 1732, h: 144 }],
    waypoints: [
      wpLeft('wp_7_6', 'Rừng nấm', 6, 1572, 144),
      wpRight('wp_7_8', 'Đảo Kame', 1632, 8, 60, 144)
    ],
    npcs: [],
    monsters: [
      { template: 'quy_xuong', x: 480, minX: 320, maxX: 640 },
      { template: 'quy_xuong', x: 960, minX: 800, maxX: 1120 },
      { template: 'quy_xuong', x: 1440, minX: 1280, maxX: 1560 }
    ]
  },

  // [8] Đảo Kame (toriMapId: 5)
  {
    id: 8, key: 'dao_kame', name: 'Đảo Kame', toriMapId: 5, bgID: 2, region: 'Trái Đất', planetTheme: 'traidat', renderStyle: 'dao_kame',
    width: 1728, height: 600, defaultSpawn: { x: 340, y: 144 },
    hitboxes: [{ x: -50, y: 0, w: 1828, h: 144 }],
    waypoints: [
      wpLeft('wp_8_7', 'Rừng xương', 7, 1572, 144),
      wpDoor('wp_8_9', 'Đông Karin', 1120, 220, 9, 60, 144),
      wpRight('wp_8_15', 'Nam Kame', 1728, 15, 60, 144)
    ],
    npcs: [
      { id: 'quy_lao_kame', name: 'Quy Lão Kame', kind: 'sprite', x: 430, y: 144, tex: 'nhanvat/npc/quy_lao_kame.png', scale: 0.54 },
      { id: 'thay_hieu', name: 'Thầy Quyết Pha Lê', kind: 'modular', folder: 'thay_hieu', x: 720, y: 144 },
      { id: 'admin_thanhle', name: 'Chủ Tiệm Bảo (Đảo)', kind: 'modular', folder: 'admin_thanhle', x: 1420, y: 144 }
    ],
    monsters: []
  },

  // [9] Đông Karin (toriMapId: 6)
  {
    id: 9, key: 'dong_karin', name: 'Đông Karin', toriMapId: 6, bgID: 3, region: 'Thần Giới & Karin', planetTheme: 'traidat', renderStyle: 'forest_earth',
    width: 1248, height: 480, defaultSpawn: { x: 60, y: 144 },
    hitboxes: [{ x: -50, y: 0, w: 1348, h: 144 }],
    waypoints: [
      wpLeft('wp_9_8', 'Đảo Kame', 8, 1120, 144)
    ],
    npcs: [
      { id: 'linh_doc_nhan', name: 'Tướng Quân Khánh', kind: 'modular', folder: 'admin_dungle', x: 820, y: 144 }
    ],
    monsters: []
  },

  // [10] Rừng Karin (Chân Tháp Karin ở chính giữa x=1000!)
  {
    id: 10, key: 'rung_karin', name: 'Rừng Karin', toriMapId: 47, bgID: 3, region: 'Thần Giới & Karin', planetTheme: 'traidat', renderStyle: 'rung_karin',
    width: 2100, height: 960, defaultSpawn: { x: 1000, y: 175 },
    hitboxes: [{ x: -160, y: 0, w: 2420, h: 175 }],
    waypoints: [
      {
        ...wpDoor('wp_10_11', 'Lên Tháp Karin', 1000, 325, 11, 700, 220),
        towerClimbX: [915, 1085],
        towerClimbY: 460
      },
      wpRight('wp_10_9', 'Đông Karin', 2100, 9, 80, 175)
    ],
    npcs: [
      { id: 'bo_mong', name: 'Bò Mộng', kind: 'modular', folder: 'admin_huykhoi', x: 760, y: 175 }
    ],
    monsters: [
      { template: 'quy_xuong', x: 360, minX: 200, maxX: 520 },
      { template: 'tau_pay_pay', x: 1340, minX: 1180, maxX: 1520 },
      { template: 'quy_xuong', x: 1720, minX: 1580, maxX: 1860 }
    ]
  },

  // [11] Tháp Karin (Nối Rừng Karin ↓ và Thần Điện ↑!)
  {
    id: 11, key: 'thap_karin', name: 'Tháp Karin', toriMapId: 46, bgID: 12, region: 'Thần Giới & Karin', planetTheme: 'traidat', renderStyle: 'thap_karin',
    width: 1400, height: 900, defaultSpawn: { x: 700, y: 220 },
    hitboxes: [{ x: 410, y: 170, w: 580, h: 50 }],
    waypoints: [
      wpDoor('wp_11_10', 'Xuống Rừng Karin', 700, 330, 10, 1000, 220),
      {
        id: 'wp_11_12', label: 'Lên Thần Điện', kind: 'door',
        signRect: { x: 585, y: 470, w: 230, h: 60 },
        showRangeX: [540, 860],
        doorRangeX: [580, 820],
        towerClimbX: [520, 880],
        towerClimbY: 560,
        targetMapId: 12, targetX: 700, targetY: 200
      }
    ],
    npcs: [
      { id: 'than_meo_karin', name: 'Thần Mèo Karin', kind: 'sprite', x: 545, y: 220, tex: 'nhanvat/npc/than_meo_karin.png', scale: 0.54 },
      { id: 'dau_traidat', name: 'Đậu Thần Tiên', kind: 'senzu_tree', x: 855, y: 220 }
    ],
    monsters: []
  },

  // [12] Thần Điện (Trục Thần Giới: ← Khí Gas Mr. Popo | Phòng Tập Thời Gian | ↓ Tháp Karin | → Con Đường Rắn Độc | ↑ NPC Whis!)
  {
    id: 12, toriMapId: 45, bgID: 12, teaMobiMapId: 45, key: 'than_dien', name: 'Thần Điện', region: 'Thần Giới & Karin', planetTheme: 'traidat', renderStyle: 'than_dien',
    width: 1500, height: 880, defaultSpawn: { x: 750, y: 200 },
    hitboxes: [{ x: 220, y: 150, w: 1060, h: 50 }],
    waypoints: [
      wpDoor('wp_12_35', 'Phó Bản Khí Gas', 310, 320, 35, 140, 175),
      wpDoor('wp_12_36', 'Phòng Tập Thời Gian', 540, 320, 36, 220, 175),
      wpDoor('wp_12_11', 'Xuống Tháp Karin', 750, 320, 11, 700, 220),
      wpDoor('wp_12_13', 'Con Đường Rắn Độc', 1160, 320, 13, 120, 175)
    ],
    npcs: [
      { id: 'mr_popo', name: 'Hộ Vệ Hùng (Khí Gas)', kind: 'modular', folder: 'admin_dungle', x: 430, y: 200 },
      { id: 'thuong_de', name: 'Thần Tài Hùng', kind: 'modular', folder: 'admin_haidang', x: 640, y: 200 },
      { id: 'whis', name: 'Thiên Sứ Whis', kind: 'sprite', x: 930, y: 200, tex: 'nhanvat/npc/npc_whis.png', scale: 0.58 }
    ],
    monsters: []
  },

  // [13] Con Đường Rắn Độc & Hành Tinh Kaio
  {
    id: 13, key: 'con_duong_ran_doc', name: 'Con Đường Rắn Độc & Kaio', toriMapId: 48, bgID: 12, region: 'Thần Giới & Karin', planetTheme: 'xayda', renderStyle: 'kaio_road',
    width: 1850, height: 840, defaultSpawn: { x: 120, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 2060, h: 175 }],
    waypoints: [
      wpLeft('wp_13_12', 'Thần Điện', 12, 1120, 200),
      wpRight('wp_13_46', 'Địa Ngục Tầng 1-4', 1850, 46, 80, 175)
    ],
    npcs: [
      { id: 'bac_kaio', name: 'Thần Vũ Trụ Bắc Kaio', kind: 'modular', folder: 'ong_gohan', x: 1520, y: 175 }
    ],
    monsters: [
      { template: 'khung_long_bay', x: 620, minX: 460, maxX: 780 },
      { template: 'khi_dot', x: 1080, minX: 920, maxX: 1240 }
    ]
  },

  // [14] Hành Tinh Bill & Hành Tinh Thực Vật (NPC Whis đổi đồ Hủy Diệt / Thiên Sứ)
  {
    id: 14, key: 'hanh_tinh_bill', name: 'Hành Tinh Bill & Thực Vật', toriMapId: 154, bgID: 16, region: 'Thần Giới & Karin', planetTheme: 'namek', renderStyle: 'bill_planet',
    width: 1950, height: 860, defaultSpawn: { x: 260, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 2150, h: 175 }],
    waypoints: [wpDoor('wp_14_12', 'Về Thần Điện', 180, 310, 12, 930, 200)],
    npcs: [
      { id: 'whis', name: 'Thiên Sứ Whis (Đổi Hủy Diệt)', kind: 'sprite', x: 380, y: 175, tex: 'nhanvat/npc/npc_whis.png', scale: 0.58 }
    ],
    monsters: [
      { template: 'tuan_loc', x: 860, minX: 700, maxX: 1040 },
      { template: 'tuan_loc', x: 1320, minX: 1160, maxX: 1500 },
      { template: 'tuan_loc', x: 1680, minX: 1520, maxX: 1840 }
    ]
  },

  // [15] Nam Kame (Nhánh mở rộng phía Nam từ Đảo Kame → Đại Hội Võ Thuật / Babidi & Thành Phố)
  {
    id: 15, key: 'nam_kame', name: 'Nam Kame & Đảo Bulông', toriMapId: 29, bgID: 2, region: 'Trái Đất Mở Rộng', planetTheme: 'traidat', renderStyle: 'dao_kame',
    width: 1950, height: 840, defaultSpawn: { x: 65, y: 175 },
    hitboxes: [{ x: -160, y: 0, w: 2280, h: 175 }],
    waypoints: [
      wpLeft('wp_15_8', 'Đảo Kame', 8, 2020, 175),
      wpDoor('wp_15_43', 'Ngũ Hành Sơn', 580, 315, 43, 120, 175),
      wpDoor('wp_15_16', 'Đại Hội / Babidi', 1120, 315, 16, 180, 175),
      wpRight('wp_15_17', 'TP. Phía Đông & Ginder', 1950, 17, 65, 175)
    ],
    npcs: [],
    monsters: [
      { template: 'than_lan_xanh', x: 520, minX: 380, maxX: 680 },
      { template: 'quy_xuong', x: 1440, minX: 1280, maxX: 1620 }
    ]
  },

  // [16] Đại Hội Võ Thuật & Phi Thuyền Babidi (NPC Osin & BOSS Mabư)
  {
    id: 16, key: 'phi_thuyen_babidi', name: 'Đại Hội Võ Thuật & Tàu Babidi', toriMapId: 52, bgID: 8, region: 'Trái Đất Mở Rộng', planetTheme: 'xayda', renderStyle: 'babidi_ship',
    width: 1900, height: 840, defaultSpawn: { x: 180, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 2100, h: 175 }],
    waypoints: [
      wpLeft('wp_16_15', 'Nam Kame', 15, 1120, 175),
      wpRight('wp_16_37', 'Thánh Địa Kaio', 1900, 37, 80, 175)
    ],
    npcs: [
      { id: 'osin', name: 'Thần Tối Cao Osin', kind: 'modular', folder: 'admin_huykhoi', x: 340, y: 175 }
    ],
    monsters: [
      { template: 'pic_poc_kk', x: 860, minX: 700, maxX: 1020 },
      { template: 'boss_mabu', x: 1460, minX: 1260, maxX: 1660 }
    ]
  },

  // [17] Cụm Thành Phố & Thị Trấn Ginder (Android 19, Dr. Kôrê, Pic-Poc-King Kong)
  {
    id: 17, key: 'thi_tran_ginder', name: 'TP. Phía Đông & Thị Trấn Ginder', toriMapId: 27, bgID: 1, region: 'Trái Đất Mở Rộng', planetTheme: 'traidat', renderStyle: 'city_earth',
    width: 2200, height: 840, defaultSpawn: { x: 65, y: 175 },
    hitboxes: [{ x: -160, y: 0, w: 2520, h: 175 }],
    waypoints: [
      wpLeft('wp_17_15', 'Nam Kame', 15, 1880, 175),
      wpDoor('wp_17_47', 'Phòng TN Dr. Myuu', 1100, 315, 47, 100, 175),
      wpRight('wp_17_18', 'Võ Đài Xên Bọ Hùng', 2200, 18, 80, 175)
    ],
    npcs: [],
    monsters: [
      { template: 'android_19', x: 520, minX: 380, maxX: 680 },
      { template: 'dr_kore', x: 960, minX: 820, maxX: 1120 },
      { template: 'pic_poc_kk', x: 1420, minX: 1280, maxX: 1580 },
      { template: 'pic_poc_kk', x: 1820, minX: 1680, maxX: 1960 }
    ]
  },

  // [18] Võ Đài Xên Bọ Hùng (Xên Con + Xên Hoàn Thiện → Siêu Bọ Hùng!)
  {
    id: 18, key: 'vo_dai_xen', name: 'Võ Đài Xên Bọ Hùng', toriMapId: 68, bgID: 8, region: 'Trái Đất Mở Rộng', planetTheme: 'traidat', renderStyle: 'cell_arena',
    width: 1950, height: 840, defaultSpawn: { x: 80, y: 175 },
    hitboxes: [{ x: -120, y: 0, w: 2240, h: 175 }],
    waypoints: [wpLeft('wp_18_17', 'Thị Trấn Ginder', 17, 2120, 175)],
    npcs: [],
    monsters: [
      { template: 'xen_con', x: 520, minX: 380, maxX: 660 },
      { template: 'xen_con', x: 840, minX: 700, maxX: 980 },
      { template: 'xen_con', x: 1140, minX: 1000, maxX: 1280 },
      { template: 'xen_hoan_thien', x: 1560, minX: 1380, maxX: 1760 }
    ]
  },

  // [19] Nhà Moori (Quê nhà Tân thủ Namếc!)
  {
    id: 19, key: 'nha_moori', name: 'Nhà Moori (Namếc)', toriMapId: 22, bgID: 0, region: 'Hành Tinh Namếc', planetTheme: 'namek', renderStyle: 'home_namek',
    width: 1420, height: 760, defaultSpawn: { x: 325, y: 175 },
    hitboxes: [{ x: -100, y: 0, w: 1620, h: 175 }],
    waypoints: [
      { ...wpDoor('wp_19_20', 'Làng Mori', 875, 300, 20, 675, 175), edgeTriggerX: [1395, 1500] }
    ],
    npcs: [
      { id: 'ruong_do', name: 'Rương Đồ', kind: 'chest', x: 105, y: 175, tex: 'nhanvat/npc/ruong_do/1.png', avt: 'nhanvat/npc/ruong_do/avt_ruong.png' },
      { id: 'admin_dungle', name: 'Admin Sơn (Hỗ Trợ)', kind: 'modular', folder: 'admin_dungle', x: 225, y: 175 },
      { id: 'ong_moori', name: 'Ông Moori', kind: 'modular', folder: 'ong_gohan', x: 445, y: 175 },
      { id: 'dau_traidat', name: 'Cây Đậu Namếc', kind: 'senzu_tree', x: 635, y: 175 }
    ],
    monsters: []
  },

  // [20] Làng Mori (Namếc)
  {
    id: 20, key: 'lang_mori', name: 'Làng Mori', toriMapId: 7, bgID: 0, region: 'Hành Tinh Namếc', planetTheme: 'namek', renderStyle: 'namek_field',
    width: 2100, height: 850, defaultSpawn: { x: 675, y: 175 },
    hitboxes: [{ x: -160, y: 0, w: 2420, h: 175 }],
    waypoints: [
      wpLeft('wp_20_21', 'Vách núi Moori & Trạm', 21, 1680, 175),
      wpDoor('wp_20_19', 'Nhà Moori', 675, 300, 19, 875, 175),
      wpRight('wp_20_38', 'Đồi Nấm Tím & TT. Moori', 2100, 38, 65, 175)
    ],
    npcs: [
      { id: 'admin_thanhle', name: 'Tổng Quản Đạt (Namếc)', kind: 'modular', folder: 'admin_thanhle', x: 380, y: 175 }
    ],
    monsters: [
      { template: 'moc_nhan', x: 920, minX: 920, maxX: 920 },
      { template: 'moc_nhan', x: 1060, minX: 1060, maxX: 1060 },
      { template: 'khung_long', x: 1420, minX: 1280, maxX: 1580 },
      { template: 'lon_loi', x: 1780, minX: 1640, maxX: 1920 }
    ]
  },

  // [21] Trạm Tàu Vũ Trụ Namếc & Vách Núi Moori (Có Tàu Vũ Trụ + NPC Calích)
  {
    id: 21, key: 'tram_tau_namek', name: 'Trạm Namếc & Vách Núi Moori', toriMapId: 25, bgID: 0, region: 'Hành Tinh Namếc', planetTheme: 'namek', renderStyle: 'namek_field',
    width: 1800, height: 850, defaultSpawn: { x: 320, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 2000, h: 175 }],
    waypoints: [wpRight('wp_21_20', 'Làng Mori', 1800, 20, 65, 175)],
    npcs: [
      { id: 'tau_vu_tru', name: 'Tàu Vũ Trụ Namếc', kind: 'spaceship', x: 280, y: 175, tex: 'vatpham/taubay/myTexture2dmaybay2.png' },
      { id: 'calich', name: 'Calích (Tương Lai)', kind: 'sprite', x: 560, y: 175, tex: 'nhanvat/npc/npc_calich.png', scale: 0.56 }
    ],
    monsters: [
      { template: 'khung_long_bay', x: 1180, minX: 1020, maxX: 1340 }
    ]
  },

  // [22] Thung Lũng Namếc & Đảo Guru (Trưởng Lão Guru + BOSS Kuku)
  {
    id: 22, key: 'dao_guru', name: 'Thung Lũng Namếc & Đảo Guru', toriMapId: 8, bgID: 5, region: 'Hành Tinh Namếc', planetTheme: 'namek', renderStyle: 'namek_field',
    width: 2100, height: 850, defaultSpawn: { x: 65, y: 175 },
    hitboxes: [{ x: -160, y: 0, w: 2420, h: 175 }],
    waypoints: [
      wpLeft('wp_22_38', 'Đồi Nấm Tím & TT. Moori', 38, 1880, 175),
      wpDoor('wp_22_39', 'Núi Hoa Vàng & Hoa Tím', 1050, 315, 39, 80, 175),
      wpRight('wp_22_23', 'Vực Maima (Fide)', 2100, 23, 80, 175)
    ],
    npcs: [
      { id: 'truong_lao_guru', name: 'Trưởng Lão Guru', kind: 'modular', folder: 'ong_gohan', x: 420, y: 175 }
    ],
    monsters: [
      { template: 'khung_long_me', x: 840, minX: 700, maxX: 980 },
      { template: 'than_lan_xanh', x: 1220, minX: 1080, maxX: 1360 },
      { template: 'boss_kuku', x: 1680, minX: 1520, maxX: 1840 }
    ]
  },

  // [23] Vực Maima & Vùng Sâu Namếc (5 Tiểu Đội Sát Thủ & Fide Đại Đế 3 Cấp!)
  {
    id: 23, key: 'vuc_maima', name: 'Vực Maima (Quyết Chiến Fide)', toriMapId: 10, bgID: 5, region: 'Hành Tinh Namếc', planetTheme: 'namek', renderStyle: 'namek_field',
    width: 2300, height: 850, defaultSpawn: { x: 80, y: 175 },
    hitboxes: [{ x: -120, y: 0, w: 2560, h: 175 }],
    waypoints: [wpLeft('wp_23_22', 'Đảo Guru', 22, 2020, 175)],
    npcs: [],
    monsters: [
      { template: 'tdst_so4', x: 420, minX: 300, maxX: 540 },
      { template: 'tdst_so3', x: 740, minX: 620, maxX: 860 },
      { template: 'tdst_so2_so1', x: 1060, minX: 940, maxX: 1180 },
      { template: 'tdst_so2_so1', x: 1280, minX: 1180, maxX: 1380 },
      { template: 'tdst_ginyu', x: 1580, minX: 1460, maxX: 1700 },
      { template: 'fide_cap_1', x: 1980, minX: 1820, maxX: 2140 }
    ]
  },

  // [24] Nhà Paragus (Quê nhà Tân thủ Xayda!)
  {
    id: 24, key: 'nha_paragus', name: 'Nhà Paragus (Xayda)', toriMapId: 23, bgID: 8, region: 'Hành Tinh Xayda', planetTheme: 'xayda', renderStyle: 'home_xayda',
    width: 1420, height: 760, defaultSpawn: { x: 325, y: 175 },
    hitboxes: [{ x: -100, y: 0, w: 1620, h: 175 }],
    waypoints: [
      { ...wpDoor('wp_24_25', 'Làng Kakarot', 875, 300, 25, 675, 175), edgeTriggerX: [1395, 1500] }
    ],
    npcs: [
      { id: 'ruong_do', name: 'Rương Đồ', kind: 'chest', x: 105, y: 175, tex: 'nhanvat/npc/ruong_do/1.png', avt: 'nhanvat/npc/ruong_do/avt_ruong.png' },
      { id: 'admin_dungle', name: 'Admin Sơn (Hỗ Trợ)', kind: 'modular', folder: 'admin_dungle', x: 225, y: 175 },
      { id: 'ong_paragus', name: 'Ông Paragus', kind: 'modular', folder: 'admin_dungle', x: 445, y: 175 },
      { id: 'dau_traidat', name: 'Cây Đậu Xayda', kind: 'senzu_tree', x: 635, y: 175 }
    ],
    monsters: []
  },

  // [25] Làng Kakarot (Xayda)
  {
    id: 25, key: 'lang_kakarot', name: 'Làng Kakarot', toriMapId: 14, bgID: 8, region: 'Hành Tinh Xayda', planetTheme: 'xayda', renderStyle: 'xayda_field',
    width: 2100, height: 850, defaultSpawn: { x: 675, y: 175 },
    hitboxes: [{ x: -160, y: 0, w: 2420, h: 175 }],
    waypoints: [
      wpLeft('wp_25_26', 'Vách núi Kakarot & Trạm', 26, 1680, 175),
      wpDoor('wp_25_24', 'Nhà Paragus', 675, 300, 24, 875, 175),
      wpRight('wp_25_40', 'Đồi Hoang & Làng Plant', 2100, 40, 65, 175)
    ],
    npcs: [
      { id: 'admin_thanhle', name: 'Thương Nhân Khánh', kind: 'modular', folder: 'admin_thanhle', x: 380, y: 175 }
    ],
    monsters: [
      { template: 'moc_nhan', x: 920, minX: 920, maxX: 920 },
      { template: 'moc_nhan', x: 1060, minX: 1060, maxX: 1060 },
      { template: 'khung_long', x: 1420, minX: 1280, maxX: 1580 },
      { template: 'lon_loi', x: 1780, minX: 1640, maxX: 1920 }
    ]
  },

  // [26] Trạm Tàu Vũ Trụ Xayda & Vách Núi Kakarot (Tàu Vũ Trụ + NPC Calích)
  {
    id: 26, key: 'tram_tau_xayda', name: 'Trạm Xayda & Vách Núi Kakarot', toriMapId: 26, bgID: 8, region: 'Hành Tinh Xayda', planetTheme: 'xayda', renderStyle: 'xayda_field',
    width: 1800, height: 850, defaultSpawn: { x: 320, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 2000, h: 175 }],
    waypoints: [wpRight('wp_26_25', 'Làng Kakarot', 1800, 25, 65, 175)],
    npcs: [
      { id: 'tau_vu_tru', name: 'Tàu Vũ Trụ Xayda', kind: 'spaceship', x: 280, y: 175, tex: 'vatpham/taubay/myTexture2dmaybay3.png' },
      { id: 'calich', name: 'Calích (Tương Lai)', kind: 'sprite', x: 560, y: 175, tex: 'nhanvat/npc/npc_calich.png', scale: 0.56 }
    ],
    monsters: [
      { template: 'khung_long_bay', x: 1180, minX: 1020, maxX: 1340 }
    ]
  },

  // [27] Thành Phố Vegeta & Cụm Núi Khỉ (Vua Vegeta, Mập Đầu Đinh, Rambo, Khỉ Đột & Broly)
  {
    id: 27, key: 'tp_vegeta', name: 'TP. Vegeta & Cụm Núi Khỉ', toriMapId: 15, bgID: 8, region: 'Hành Tinh Xayda', planetTheme: 'xayda', renderStyle: 'xayda_field',
    width: 2300, height: 850, defaultSpawn: { x: 80, y: 175 },
    hitboxes: [{ x: -120, y: 0, w: 2560, h: 175 }],
    waypoints: [
      wpLeft('wp_27_41', 'Rừng Nguyên Sinh & Thông XD', 41, 1880, 175),
      wpRight('wp_27_42', 'Vách Núi Đen & Hang Khỉ', 2300, 42, 80, 175)
    ],
    npcs: [
      { id: 'vua_vegeta', name: 'Vua Vegeta', kind: 'modular', folder: 'admin_huykhoi', x: 340, y: 175 }
    ],
    monsters: [
      { template: 'khung_long_me', x: 640, minX: 520, maxX: 760 },
      { template: 'boss_map_dau_dinh', x: 960, minX: 840, maxX: 1080 },
      { template: 'boss_rambo', x: 1280, minX: 1160, maxX: 1400 },
      { template: 'khi_dot', x: 1620, minX: 1480, maxX: 1760 },
      { template: 'boss_broly', x: 2020, minX: 1860, maxX: 2160 }
    ]
  },

  // [28] Siêu Thị Liên Hành Tinh (Nối Sân Sau Siêu Thị)
  {
    id: 28, key: 'sieu_thi', name: 'Siêu Thị Liên Hành Tinh', toriMapId: 19, bgID: 10, region: 'Vũ Trụ & Phó Bản', planetTheme: 'traidat', renderStyle: 'city_earth',
    width: 1700, height: 820, defaultSpawn: { x: 320, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 1920, h: 175 }],
    waypoints: [wpRight('wp_28_29', 'Sân Sau Siêu Thị', 1700, 29, 80, 175)],
    npcs: [
      { id: 'tau_vu_tru', name: 'Tàu Vũ Trụ Siêu Thị', kind: 'spaceship', x: 220, y: 175, tex: 'vatpham/taubay/myTexture2dmaybay4b.png' },
      { id: 'admin_thanhle', name: 'Tổng Quản Đạt (Ký Gửi)', kind: 'modular', folder: 'admin_thanhle', x: 560, y: 175 },
      { id: 'ruong_do', name: 'Rương Đồ Chung', kind: 'chest', x: 760, y: 175, tex: 'nhanvat/npc/ruong_do/1.png', avt: 'nhanvat/npc/ruong_do/avt_ruong.png' }
    ],
    monsters: []
  },

  // [29] Sân Sau Siêu Thị (Android 13, 14, 15)
  {
    id: 29, key: 'san_sau_sieu_thi', name: 'Sân Sau Siêu Thị', toriMapId: 17, bgID: 9, region: 'Vũ Trụ & Phó Bản', planetTheme: 'traidat', renderStyle: 'city_earth',
    width: 1900, height: 840, defaultSpawn: { x: 80, y: 175 },
    hitboxes: [{ x: -120, y: 0, w: 2180, h: 175 }],
    waypoints: [wpLeft('wp_29_28', 'Siêu Thị', 28, 1600, 175)],
    npcs: [],
    monsters: [
      { template: 'android_15_14', x: 580, minX: 440, maxX: 740 },
      { template: 'android_15_14', x: 980, minX: 840, maxX: 1120 },
      { template: 'android_13', x: 1480, minX: 1320, maxX: 1660 }
    ]
  },

  // [30] Thế Giới Tương Lai (Calích Cỗ Máy Thời Gian — Black Goku → Super Black Goku Rosé!)
  {
    id: 30, key: 'tuong_lai', name: 'Thế Giới Tương Lai', toriMapId: 20, bgID: 11, region: 'Vũ Trụ & Phó Bản', planetTheme: 'xayda', renderStyle: 'future_ruins',
    width: 2000, height: 850, defaultSpawn: { x: 220, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 2200, h: 175 }],
    waypoints: [],
    npcs: [
      { id: 'calich_back', name: 'Calích (Về Hiện Tại)', kind: 'sprite', x: 180, y: 175, tex: 'nhanvat/npc/npc_calich.png', scale: 0.56 }
    ],
    monsters: [
      { template: 'xen_con', x: 640, minX: 500, maxX: 780 },
      { template: 'xen_con', x: 1020, minX: 880, maxX: 1160 },
      { template: 'black_goku', x: 1560, minX: 1380, maxX: 1760 }
    ]
  },

  // [31] Hành Tinh Cold — Cánh Đồng & Rừng Tuyết (Săn đồ Thần Linh & BOSS Cooler)
  {
    id: 31, key: 'hanh_tinh_cold', name: 'Hành Tinh Cold (Rừng Tuyết)', toriMapId: 109, bgID: 11, region: 'Vũ Trụ & Phó Bản', planetTheme: 'traidat', renderStyle: 'cold_planet',
    width: 2050, height: 850, defaultSpawn: { x: 240, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 2260, h: 175 }],
    waypoints: [],
    npcs: [
      { id: 'tau_vu_tru', name: 'Tàu Vũ Trụ Cold', kind: 'spaceship', x: 180, y: 175, tex: 'vatpham/taubay/myTexture2dmaybay3.png' }
    ],
    monsters: [
      { template: 'zinba', x: 640, minX: 500, maxX: 780 },
      { template: 'zinba', x: 1080, minX: 940, maxX: 1220 },
      { template: 'boss_cooler', x: 1620, minX: 1440, maxX: 1820 }
    ]
  },

  // [32] Hành Tinh Ngục Tù & Yardrat (Mở cổng bằng Nhẫn Thời Không — BOSS Cumber!)
  {
    id: 32, key: 'hanh_tinh_nguc_tu', name: 'Hành Tinh Ngục Tù & Yardrat', toriMapId: 155, bgID: 17, region: 'Vũ Trụ & Phó Bản', planetTheme: 'xayda', renderStyle: 'prison_planet',
    width: 2050, height: 850, defaultSpawn: { x: 240, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 2260, h: 175 }],
    waypoints: [wpDoor('wp_32_3', 'Khe Nứt Về Trái Đất', 180, 310, 3, 520, 175)],
    npcs: [
      { id: 'tau_vu_tru', name: 'Phi Thuyền Yardrat', kind: 'spaceship', x: 340, y: 175, tex: 'vatpham/taubay/myTexture2dmaybay2.png' }
    ],
    monsters: [
      { template: 'khi_dot', x: 760, minX: 620, maxX: 900 },
      { template: 'khi_dot', x: 1140, minX: 1000, maxX: 1280 },
      { template: 'boss_cumber', x: 1640, minX: 1460, maxX: 1840 }
    ]
  },

  // [33] Phó Bản: Bản Đồ Kho Báu (Vào từ Quy Lão Kame tại Đảo Kame)
  {
    id: 33, key: 'ban_do_kho_bau', name: 'Phó Bản: Bản Đồ Kho Báu', toriMapId: 135, bgID: 2, region: 'Vũ Trụ & Phó Bản', planetTheme: 'traidat', renderStyle: 'dao_kame',
    width: 1900, height: 840, defaultSpawn: { x: 100, y: 175 },
    hitboxes: [{ x: -120, y: 0, w: 2180, h: 175 }],
    waypoints: [wpLeft('wp_33_8', 'Rời Kho Báu (Đảo Kame)', 8, 430, 175)],
    npcs: [],
    monsters: [
      { template: 'quy_xuong', x: 520, minX: 380, maxX: 660 },
      { template: 'quy_xuong', x: 960, minX: 820, maxX: 1100 },
      { template: 'tuong_xanh_lo', x: 1480, minX: 1320, maxX: 1660 }
    ]
  },

  // [34] Phó Bản: Doanh Trại Độc Nhãn (Vào từ Đông Karin)
  {
    id: 34, key: 'doanh_trai_doc_nhan', name: 'Phó Bản: Doanh Trại Độc Nhãn', toriMapId: 53, bgID: 8, region: 'Vũ Trụ & Phó Bản', planetTheme: 'xayda', renderStyle: 'city_earth',
    width: 1900, height: 840, defaultSpawn: { x: 100, y: 175 },
    hitboxes: [{ x: -120, y: 0, w: 2180, h: 175 }],
    waypoints: [wpLeft('wp_34_9', 'Rời Doanh Trại (Đông Karin)', 9, 950, 175)],
    npcs: [],
    monsters: [
      { template: 'android_19', x: 560, minX: 420, maxX: 700 },
      { template: 'doc_nhan_tuong', x: 1420, minX: 1260, maxX: 1600 }
    ]
  },

  // [35] Phó Bản: Khí Gas Hủy Diệt (Vào từ Hộ Vệ Hùng trên Thần Điện)
  {
    id: 35, teaMobiMapId: 148, key: 'khi_gas_huy_diet', name: 'Phó Bản: Khí Gas Hủy Diệt', region: 'Vũ Trụ & Phó Bản', planetTheme: 'namek', renderStyle: 'prison_planet',
    width: 1900, height: 840, defaultSpawn: { x: 100, y: 175 },
    hitboxes: [{ x: -120, y: 0, w: 2180, h: 175 }],
    waypoints: [wpLeft('wp_35_12', 'Về Thần Điện', 12, 430, 200)],
    npcs: [],
    monsters: [
      { template: 'zinba', x: 580, minX: 440, maxX: 720 },
      { template: 'hatchiyack', x: 1440, minX: 1280, maxX: 1620 }
    ]
  },

  // =========================================================================
  // 12 BẢN ĐỒ MỞ RỘNG TRÍCH XUẤT TỪ ElectroHeavenVN/DataNRO (ID 36 .. 47)
  // =========================================================================

  // [36] Phòng Tập Thời Gian (DataNRO #49 — x2 TNSM, có Sư Huynh Quyết & Máy Đo Sức Mạnh)
  {
    id: 36, teaMobiMapId: 49, key: 'phong_tap_thoi_gian', name: 'Phòng Tập Thời Gian (x2 TNSM)', region: 'Thần Giới & Karin', planetTheme: 'traidat', renderStyle: 'than_dien',
    expBonus: 2,
    width: 1500, height: 880, defaultSpawn: { x: 280, y: 200 },
    hitboxes: [{ x: 220, y: 150, w: 1060, h: 50 }],
    waypoints: [wpDoor('wp_36_12', 'Về Thần Điện', 280, 320, 12, 540, 200)],
    npcs: [
      { id: 'thay_hieu', name: 'Sư Huynh Quyết (Phòng Tập)', kind: 'modular', folder: 'thay_hieu', x: 450, y: 200 }
    ],
    monsters: [
      { template: 'may_do_suc_manh', x: 760, minX: 760, maxX: 760 },
      { template: 'may_do_suc_manh', x: 960, minX: 960, maxX: 960 },
      { template: 'may_do_suc_manh', x: 1140, minX: 1140, maxX: 1140 }
    ]
  },

  // [37] Thánh Địa Kaio (DataNRO #50 / #156 — Săn Thần Linh & Thần Tối Cao)
  {
    id: 37, teaMobiMapId: 50, key: 'thanh_dia_kaio', name: 'Thánh Địa Kaio (DataNRO)', region: 'Thần Giới & Karin', planetTheme: 'namek', renderStyle: 'bill_planet',
    width: 1950, height: 860, defaultSpawn: { x: 80, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 2150, h: 175 }],
    waypoints: [wpLeft('wp_37_16', 'Về Tàu Babidi', 16, 1820, 175)],
    npcs: [
      { id: 'osin', name: 'Tổ Sư Kaio', kind: 'modular', folder: 'ong_gohan', x: 320, y: 175 }
    ],
    monsters: [
      { template: 'tuan_loc', x: 760, minX: 620, maxX: 920 },
      { template: 'black_goku', x: 1460, minX: 1300, maxX: 1640 }
    ]
  },

  // [38] Đồi Nấm Tím & Thị Trấn Moori (DataNRO #8-9 — Tuyến Namếc chuẩn gốc)
  {
    id: 38, teaMobiMapId: 8, key: 'doi_nam_tim', name: 'Đồi Nấm Tím & TT. Moori', region: 'Hành Tinh Namếc', planetTheme: 'namek', renderStyle: 'namek_field',
    width: 1950, height: 850, defaultSpawn: { x: 65, y: 175 },
    hitboxes: [{ x: -160, y: 0, w: 2280, h: 175 }],
    waypoints: [
      wpLeft('wp_38_20', 'Làng Mori', 20, 2020, 175),
      wpRight('wp_38_22', 'Thung Lũng Namếc & Đảo Guru', 1950, 22, 65, 175)
    ],
    npcs: [],
    monsters: [
      { template: 'oc_muon_hon', x: 460, minX: 320, maxX: 620 },
      { template: 'oc_muon_hon', x: 940, minX: 780, maxX: 1100 },
      { template: 'khung_long_me', x: 1440, minX: 1280, maxX: 1620 }
    ]
  },

  // [39] Núi Hoa Vàng & Núi Hoa Tím (DataNRO #31-32 — Vùng Sâu Namếc)
  {
    id: 39, teaMobiMapId: 31, key: 'nui_hoa_vang_tim', name: 'Núi Hoa Vàng & Hoa Tím', region: 'Hành Tinh Namếc', planetTheme: 'namek', renderStyle: 'namek_field',
    width: 1950, height: 850, defaultSpawn: { x: 80, y: 175 },
    hitboxes: [{ x: -160, y: 0, w: 2280, h: 175 }],
    waypoints: [wpLeft('wp_39_22', 'Về Đảo Guru', 22, 1050, 175)],
    npcs: [],
    monsters: [
      { template: 'bulon_ukulele', x: 520, minX: 380, maxX: 680 },
      { template: 'bulon_ukulele', x: 1020, minX: 880, maxX: 1180 },
      { template: 'boss_kuku', x: 1540, minX: 1380, maxX: 1700 }
    ]
  },

  // [40] Đồi Hoang & Làng Plant (DataNRO #15-16 — Tuyến Xayda chuẩn gốc)
  {
    id: 40, teaMobiMapId: 15, key: 'doi_hoang_plant', name: 'Đồi Hoang & Làng Plant', region: 'Hành Tinh Xayda', planetTheme: 'xayda', renderStyle: 'xayda_field',
    width: 1950, height: 850, defaultSpawn: { x: 65, y: 175 },
    hitboxes: [{ x: -160, y: 0, w: 2280, h: 175 }],
    waypoints: [
      wpLeft('wp_40_25', 'Làng Kakarot', 25, 2020, 175),
      wpRight('wp_40_41', 'Rừng Nguyên Sinh & Thông XD', 1950, 41, 65, 175)
    ],
    npcs: [],
    monsters: [
      { template: 'heo_xayda', x: 460, minX: 320, maxX: 620 },
      { template: 'heo_xayda', x: 960, minX: 820, maxX: 1120 },
      { template: 'khung_long_bay', x: 1460, minX: 1300, maxX: 1620 }
    ]
  },

  // [41] Rừng Nguyên Sinh & Rừng Thông Xayda (DataNRO #17-18)
  {
    id: 41, teaMobiMapId: 17, key: 'rung_thong_xayda', name: 'Rừng Nguyên Sinh & Thông XD', region: 'Hành Tinh Xayda', planetTheme: 'xayda', renderStyle: 'xayda_field',
    width: 1950, height: 850, defaultSpawn: { x: 65, y: 175 },
    hitboxes: [{ x: -160, y: 0, w: 2280, h: 175 }],
    waypoints: [
      wpLeft('wp_41_40', 'Đồi Hoang & Làng Plant', 40, 1880, 175),
      wpRight('wp_41_27', 'TP. Vegeta & Núi Khỉ', 1950, 27, 80, 175)
    ],
    npcs: [],
    monsters: [
      { template: 'nappa_fide', x: 520, minX: 380, maxX: 680 },
      { template: 'nappa_fide', x: 1020, minX: 880, maxX: 1180 },
      { template: 'khi_dot', x: 1520, minX: 1380, maxX: 1680 }
    ]
  },

  // [42] Vách Núi Đen & Hang Khỉ Đen (DataNRO #20, #79-83 — Cụm Khỉ Đỏ / Vàng / Đen)
  {
    id: 42, teaMobiMapId: 83, key: 'hang_khi_den', name: 'Vách Núi Đen & Hang Khỉ Đen', region: 'Hành Tinh Xayda', planetTheme: 'xayda', renderStyle: 'prison_planet',
    width: 2050, height: 850, defaultSpawn: { x: 80, y: 175 },
    hitboxes: [{ x: -120, y: 0, w: 2300, h: 175 }],
    waypoints: [wpLeft('wp_42_27', 'Về TP. Vegeta', 27, 2200, 175)],
    npcs: [],
    monsters: [
      { template: 'khi_giap_sat', x: 540, minX: 400, maxX: 680 },
      { template: 'khi_giap_sat', x: 1040, minX: 900, maxX: 1180 },
      { template: 'boss_broly', x: 1620, minX: 1460, maxX: 1800 }
    ]
  },

  // [43] Ngũ Hành Sơn (DataNRO #122-124 — Đại Ca Ba Chíp & Voi Chín Ngà, Gà Chín Cựa)
  {
    id: 43, teaMobiMapId: 122, key: 'ngu_hanh_son', name: 'Ngũ Hành Sơn (DataNRO)', region: 'Trái Đất Mở Rộng', planetTheme: 'traidat', renderStyle: 'cliff_earth',
    expBonus: 2,
    width: 2050, height: 850, defaultSpawn: { x: 120, y: 175 },
    hitboxes: [{ x: -120, y: 0, w: 2300, h: 175 }],
    waypoints: [wpLeft('wp_43_15', 'Về Nam Kame', 15, 580, 175)],
    npcs: [
      { id: 'ba_chip', name: 'Đại Ca Ba Chíp (Ngũ Hành)', kind: 'modular', folder: 'admin_huykhoi', x: 280, y: 175 }
    ],
    monsters: [
      { template: 'ga_chin_cua', x: 680, minX: 540, maxX: 840 },
      { template: 'ga_chin_cua', x: 1120, minX: 980, maxX: 1280 },
      { template: 'voi_chin_nga', x: 1620, minX: 1460, maxX: 1800 }
    ]
  },

  // [44] Hành Tinh M-2 & Rudeeze (DataNRO #85-89 — Bay từ Tàu Vũ Trụ)
  {
    id: 44, teaMobiMapId: 85, key: 'hanh_tinh_m2', name: 'Hành Tinh M-2 & Rudeeze', region: 'Vũ Trụ & Phó Bản', planetTheme: 'xayda', renderStyle: 'babidi_ship',
    width: 1950, height: 850, defaultSpawn: { x: 260, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 2150, h: 175 }],
    waypoints: [],
    npcs: [
      { id: 'tau_vu_tru', name: 'Phi Thuyền M-2', kind: 'spaceship', x: 180, y: 175, tex: 'vatpham/taubay/myTexture2dmaybay4b.png' }
    ],
    monsters: [
      { template: 'robot_bao_ve', x: 640, minX: 500, maxX: 780 },
      { template: 'robot_bao_ve', x: 1080, minX: 940, maxX: 1220 },
      { template: 'hatchiyack', x: 1560, minX: 1400, maxX: 1740 }
    ]
  },

  // [45] Hành Tinh Potaufeu (DataNRO #139-140 — Săn BOSS Nhân Bản Copy-Vegeta)
  {
    id: 45, teaMobiMapId: 139, key: 'hanh_tinh_potaufeu', name: 'Hành Tinh Potaufeu', region: 'Vũ Trụ & Phó Bản', planetTheme: 'namek', renderStyle: 'bill_planet',
    width: 1950, height: 850, defaultSpawn: { x: 260, y: 175 },
    hitboxes: [{ x: -80, y: 0, w: 2150, h: 175 }],
    waypoints: [],
    npcs: [
      { id: 'tau_vu_tru', name: 'Phi Thuyền Jaco (Potaufeu)', kind: 'spaceship', x: 180, y: 175, tex: 'vatpham/taubay/myTexture2dmaybay2.png' }
    ],
    monsters: [
      { template: 'zinba', x: 680, minX: 540, maxX: 840 },
      { template: 'copy_vegeta', x: 1480, minX: 1320, maxX: 1660 }
    ]
  },

  // [46] Địa Ngục Tầng 1-4 (DataNRO #167-171 — Săn Ma Thần Hirudegarn)
  {
    id: 46, teaMobiMapId: 167, key: 'dia_nguc', name: 'Địa Ngục Tầng 1-4 (DataNRO)', region: 'Thần Giới & Karin', planetTheme: 'xayda', renderStyle: 'future_ruins',
    width: 2050, height: 850, defaultSpawn: { x: 80, y: 175 },
    hitboxes: [{ x: -120, y: 0, w: 2300, h: 175 }],
    waypoints: [wpLeft('wp_46_13', 'Về Con Đường Rắn Độc', 13, 1760, 175)],
    npcs: [],
    monsters: [
      { template: 'khi_giap_sat', x: 620, minX: 480, maxX: 780 },
      { template: 'hirudegarn', x: 1520, minX: 1340, maxX: 1720 }
    ]
  },

  // [47] Phòng Thí Nghiệm Dr. Myuu & Thành Cổ (DataNRO #179, #186)
  {
    id: 47, teaMobiMapId: 179, key: 'phong_tn_myuu', name: 'Phòng TN Dr. Myuu & Thành Cổ', region: 'Trái Đất Mở Rộng', planetTheme: 'xayda', renderStyle: 'city_earth',
    width: 1950, height: 840, defaultSpawn: { x: 100, y: 175 },
    hitboxes: [{ x: -120, y: 0, w: 2200, h: 175 }],
    waypoints: [wpLeft('wp_47_17', 'Về Thị Trấn Ginder', 17, 1100, 175)],
    npcs: [],
    monsters: [
      { template: 'robot_bao_ve', x: 580, minX: 440, maxX: 720 },
      { template: 'abo_kado', x: 1460, minX: 1300, maxX: 1640 }
    ]
  }
];

// Văn bản Sơ Đồ Thế Giới chuẩn theo kiến trúc 2 trục của Ngọc Rồng Online + DataNRO (48 Map Thực Chiến / 187 Map Từ Điển)
export const WORLD_TOPOLOGY_LINES = [
  '[Hành Tinh Bill (14)] ↔ [Thánh Địa Kaio (37)]   [Phòng Tập Thời Gian (36, x2 TNSM)]',
  '        ↑ (NPC Whis)                                      ↑',
  '[Khí Gas (35)] ← [THẦN ĐIỆN (12)] → [Rắn Độc & Kaio (13)] → [Địa Ngục 1-4 (46)]',
  '        ↑',
  '  [Tháp Karin (11)] ↑ [Rừng Karin (10)] ↔ [Đông Karin (9: Tướng Quân Khánh)] → [Độc Nhãn (34)]',
  '                                              ↕',
  '[Vách Núi Aru (2)] ↔ [Làng Aru (1: Bảo•Hùng•Ba Chíp)] → [Đồi Hoa Cúc (4: Quyết)..Rừng (7)] → [ĐẢO KAME (8)]',
  '   ↓ (Calích)            ↕                                                                      ↓',
  '[TƯƠNG LAI (30)]    [Nhà Gôhan (0: Sơn) / Trạm TĐ (3: Đạt)]             [Nam Kame (15)] → [Ngũ Hành Sơn (43)]',
  '                         ↕                                                   ↓         → [Tàu Babidi (16)]',
  '    ┌────────────────────┼────────────────────┐                        [TP. Đông & Ginder (17)] → [Dr. Myuu (47)]',
  '    ↕                    ↕                    ↕                              ↓',
  '[TRẠM NAMẾC (21)]   [TRẠM XAYDA (26)]   [SIÊU THỊ (28: Đạt)]           [Võ Đài Xên (18)]',
  '↔ Làng Mori (20)    ↔ Làng Kakarot (25) → Sân Sau (29) • Cold (31)',
  '→ Đồi Nấm Tím (38)  → Làng Plant (40)   • Hành Tinh M-2 (44) & Potaufeu (45)',
  '→ Đảo Guru (22-23)  → Vegeta & Hang Khỉ (27,41,42) • Nhẫn Thời Không → Ngục Tù (32: Cumber)'
];

export const GIFTCODES = {
  TANTHU: { gold: 50000, gem: 50, items: ['ve_quay', 'cuong_no', 'bo_huyet'], msg: 'Nhận Giftcode TANTHU: +50K Vàng, +50 Ngọc, Vé quay & Dược phẩm!' },
  NROWEB: { gold: 150000, gem: 120, items: ['vb_candauvan', 'trung_de_tu', 'bong_tai_c1'], msg: 'Nhận Giftcode NROWEB: +150K Vàng, +120 Ngọc, Cân Đẩu Vân, Trứng Đệ Tử & Bông Tai!' },
  TUONGLAI: { gold: 200000, gem: 150, items: ['nhan_thoi_khong', 'dl_kiem_vip'], msg: 'Nhận Giftcode TUONGLAI: Nhẫn Thời Không & Kiếm Ánh Sáng Calích!' },
  BACHIP: { gold: 300000, gem: 250, items: ['capsule_vip', 'ao_thien_su', 'bong_tai_c2'], msg: 'Quà Đại Ca Ba Chíp & Anh Em Phòng: +300K Vàng, +250 Ngọc, Capsule VIP & Áo Thiên Sứ!' },
  ANHEMPHONG: { gold: 500000, gem: 350, items: ['ao_thien_su', 'quan_thien_su', 'gang_thien_su'], msg: 'Giftcode Phòng Anh Em (Sơn•Quyết•Bảo•Hùng•Đạt•Khánh•Ba Chíp): Trọn bộ Thiên Sứ Tối Thượng!' },
  NGOCRONG: { gold: 100000, gem: 100, items: ['nr_1s', 'nr_2s', 'nr_3s', 'nr_4s', 'nr_5s', 'nr_6s', 'nr_7s'], msg: 'Nhận trọn bộ 7 Viên Ngọc Rồng! Hãy mở Hành Trang gọi Rồng Thần ngay!' }
};

export function formatNroNum(n) {
  const num = Math.floor(Number(n) || 0);
  return num.toLocaleString('vi-VN');
}
