// Dữ liệu Hành Tinh & Thuộc Tính NRO
export const PLANETS = [
  {
    id: 0,
    name: 'Trái Đất',
    symbol: '🌏',
    desc: 'Cân bằng, tinh thông võ thuật. Kỹ năng biểu tượng: Kamehameha & Quả Cầu Kênh Khi.',
    primaryColor: '#3b82f6',
    auraColor: 'rgba(59, 130, 246, 0.6)',
    signatureSkill: 'Kamehameha',
    baseStats: {
      hp: 1200,
      ki: 1000,
      attack: 55,
      defense: 12,
      crit: 5,
      power: 2000,
      potential: 2000
    }
  },
  {
    id: 1,
    name: 'Namếc',
    symbol: '🪐',
    desc: 'Lượng máu dồi dào, khả năng tái sinh và hồi máu cực nhanh. Kỹ năng: Masenko & Trị Thương.',
    primaryColor: '#10b981',
    auraColor: 'rgba(16, 185, 129, 0.6)',
    signatureSkill: 'Masenko',
    baseStats: {
      hp: 1600,
      ki: 800,
      attack: 45,
      defense: 20,
      crit: 3,
      power: 2000,
      potential: 2000
    }
  },
  {
    id: 2,
    name: 'Xayda',
    symbol: '🔥',
    desc: 'Tộc chiến binh hiếu chiến, sức tấn công và chí mạng cực cao. Kỹ năng: Galick Gun & Biến hình.',
    primaryColor: '#ef4444',
    auraColor: 'rgba(239, 68, 68, 0.6)',
    signatureSkill: 'Galick Gun',
    baseStats: {
      hp: 900,
      ki: 1300,
      attack: 70,
      defense: 8,
      crit: 12,
      power: 2000,
      potential: 2000
    }
  }
];

// Danh sách Bản đồ trong Game chuẩn Ngọc Rồng Online
export const MAPS = [
  {
    id: 0,
    name: 'Làng Aru',
    planetId: 0,
    width: 2600,
    height: 650,
    groundY: 480,
    bgGradient: ['#19b0f8', '#38bdf8', '#bae6fd'],
    platforms: [],
    portals: [
      { x: 2520, y: 440, targetMap: 1, targetX: 140, label: '➜ Sang Đồi Hoa Cúc' }
    ],
    npcs: [
      { id: 1, name: 'Ông Gôhan', x: 480, y: 480, type: 'gohan' },
      { id: 2, name: 'Thầy Hiếu', x: 1320, y: 480, type: 'thay_hieu' },
      { id: 3, name: 'Thần Mèo Karin', x: 1800, y: 480, type: 'karin' },
      { id: 4, name: 'Admin Huy Khôi', x: 2280, y: 480, type: 'huykhoi' }
    ],
    monsters: [
      { id: 101, name: 'Mộc Nhân Tân Thủ', type: 'dummy', maxHp: 500, hp: 500, x: 940, y: 480, atk: 0, exp: 100, gold: 30 },
      { id: 102, name: 'Mộc Nhân Tân Thủ', type: 'dummy', maxHp: 500, hp: 500, x: 1680, y: 480, atk: 0, exp: 100, gold: 30 },
      { id: 103, name: 'Mộc Nhân Cổ Thụ', type: 'dummy', maxHp: 1200, hp: 1200, x: 2100, y: 480, atk: 0, exp: 250, gold: 80 }
    ]
  },
  {
    id: 1,
    name: 'Đồi Hoa Cúc',
    planetId: 0,
    width: 2800,
    height: 650,
    groundY: 480,
    bgGradient: ['#0284c7', '#38bdf8', '#bae6fd'],
    platforms: [
      { x: 600, y: 360, width: 160, height: 16 },
      { x: 1300, y: 310, width: 180, height: 16 },
      { x: 2000, y: 350, width: 170, height: 16 }
    ],
    portals: [
      { x: 80, y: 440, targetMap: 0, targetX: 2420, label: '⬅ Về Làng Aru' },
      { x: 2720, y: 440, targetMap: 2, targetX: 140, label: '➜ Sang Rừng Karin' }
    ],
    npcs: [
      { id: 10, name: 'Santa Giáng Sinh', x: 400, y: 480, type: 'santa' },
      { id: 11, name: 'Quy Lão Kame', x: 2350, y: 480, type: 'gohan' }
    ],
    monsters: [
      { id: 104, name: 'Mộc Nhân Trung Cấp', type: 'dummy', maxHp: 1500, hp: 1500, x: 700, y: 480, atk: 0, exp: 300, gold: 100 },
      { id: 201, name: 'Khủng Long Con', type: 'dino', maxHp: 1200, hp: 1200, x: 1100, y: 480, atk: 35, exp: 350, gold: 90 },
      { id: 202, name: 'Khủng Long Con', type: 'dino', maxHp: 1200, hp: 1200, x: 1550, y: 480, atk: 35, exp: 350, gold: 90 },
      { id: 203, name: 'Thằn Lằn Bay', type: 'flying_lizard', maxHp: 1000, hp: 1000, x: 1850, y: 320, atk: 30, exp: 400, gold: 110 },
      { id: 204, name: 'Khủng Long Con', type: 'dino', maxHp: 1200, hp: 1200, x: 2150, y: 480, atk: 35, exp: 350, gold: 90 }
    ]
  },
  {
    id: 2,
    name: 'Rừng Karin',
    planetId: 0,
    width: 3000,
    height: 650,
    groundY: 480,
    bgGradient: ['#0f766e', '#14b8a6', '#99f6e4'],
    platforms: [
      { x: 500, y: 350, width: 150, height: 16 },
      { x: 1100, y: 290, width: 200, height: 16 },
      { x: 1800, y: 330, width: 170, height: 16 },
      { x: 2400, y: 280, width: 160, height: 16 }
    ],
    portals: [
      { x: 80, y: 440, targetMap: 1, targetX: 2620, label: '⬅ Về Đồi Hoa Cúc' },
      { x: 2920, y: 440, targetMap: 3, targetX: 140, label: '➜ Sang Đảo Kame' }
    ],
    npcs: [
      { id: 12, name: 'Thần Mèo Karin', x: 600, y: 480, type: 'karin' },
      { id: 13, name: 'Rùa Ba Ba', x: 2500, y: 480, type: 'turtle' }
    ],
    monsters: [
      { id: 205, name: 'Khủng Long Bạo Chúa', type: 'dino', maxHp: 3000, hp: 3000, x: 900, y: 480, atk: 60, exp: 800, gold: 250 },
      { id: 206, name: 'Thằn Lằn Bay', type: 'flying_lizard', maxHp: 1800, hp: 1800, x: 1400, y: 320, atk: 45, exp: 600, gold: 180 },
      { id: 207, name: 'Khủng Long Bạo Chúa', type: 'dino', maxHp: 3000, hp: 3000, x: 2000, y: 480, atk: 60, exp: 800, gold: 250 }
    ]
  },
  {
    id: 3,
    name: 'Đảo Kame',
    planetId: 0,
    width: 2600,
    height: 650,
    groundY: 480,
    bgGradient: ['#0369a1', '#0ea5e9', '#7dd3fc'],
    platforms: [
      { x: 450, y: 360, width: 150, height: 16 },
      { x: 1200, y: 320, width: 180, height: 16 },
      { x: 1900, y: 340, width: 160, height: 16 }
    ],
    portals: [
      { x: 80, y: 440, targetMap: 2, targetX: 2820, label: '⬅ Về Rừng Karin' },
      { x: 2520, y: 440, targetMap: 4, targetX: 140, label: '➜ Sang Rừng Nấm' }
    ],
    npcs: [
      { id: 14, name: 'Sư Phụ Quy Lão', x: 800, y: 480, type: 'gohan' },
      { id: 15, name: 'Rùa Ba Ba', x: 1100, y: 480, type: 'turtle' },
      { id: 16, name: 'Tàu Bay Fide', x: 2300, y: 480, type: 'huykhoi' }
    ],
    monsters: [
      { id: 301, name: 'Cua Bọc Thép', type: 'crab', maxHp: 2500, hp: 2500, x: 1350, y: 480, atk: 55, exp: 700, gold: 220 },
      { id: 302, name: 'Cua Bọc Thép', type: 'crab', maxHp: 2500, hp: 2500, x: 1750, y: 480, atk: 55, exp: 700, gold: 220 },
      { id: 401, name: 'Boss Tàu Pảy Pảy', type: 'boss_dino', maxHp: 15000, hp: 15000, x: 2100, y: 480, atk: 95, exp: 5000, gold: 2500 }
    ]
  },
  {
    id: 4,
    name: 'Rừng Nấm Huyền Bí',
    planetId: 1,
    width: 2800,
    height: 650,
    groundY: 480,
    bgGradient: ['#064e3b', '#047857', '#34d399'],
    platforms: [
      { x: 350, y: 370, width: 140, height: 16 },
      { x: 700, y: 310, width: 160, height: 16 },
      { x: 1200, y: 260, width: 200, height: 16 },
      { x: 1750, y: 340, width: 150, height: 16 }
    ],
    portals: [
      { x: 80, y: 440, targetMap: 3, targetX: 2420, label: '⬅ Về Đảo Kame' }
    ],
    npcs: [
      { id: 17, name: 'Trưởng Lão Guru', x: 500, y: 480, type: 'guru' },
      { id: 18, name: 'Quốc Vương Namek', x: 2200, y: 480, type: 'huykhoi' }
    ],
    monsters: [
      { id: 303, name: 'Quái Đá Hắc Ám', type: 'rock_golem', maxHp: 6000, hp: 6000, x: 1000, y: 480, atk: 85, exp: 1800, gold: 600 },
      { id: 304, name: 'Khủng Long Mẹ Bạo Chúa', type: 'boss_dino', maxHp: 20000, hp: 20000, x: 1800, y: 480, atk: 120, exp: 8000, gold: 5000 }
    ]
  }
];

// Danh sách Nhiệm Vụ Cốt Truyện chuẩn Ngọc Rồng Online (Quest Chain)
export const QUESTS = [
  {
    id: 1,
    title: 'Bài học vỡ lòng',
    desc: 'Hãy đấm rèn luyện tại Mộc Nhân ở Làng Aru (Đấm 5 lần) để tích lũy sức mạnh đầu đời.',
    targetType: 'dummy',
    targetCount: 5,
    rewardPower: 5000,
    rewardPotential: 5000,
    rewardGold: 1000,
    rewardGem: 5
  },
  {
    id: 2,
    title: 'Đậu Thần tiếp sức',
    desc: 'Thu hoạch Đậu Thần Karin tại cây đậu Làng Aru (Hái 3 hạt) để tích trữ linh đan.',
    targetType: 'harvest_senzu',
    targetCount: 3,
    rewardPower: 8000,
    rewardPotential: 8000,
    rewardGold: 2000,
    rewardGem: 10
  },
  {
    id: 3,
    title: 'Học võ cùng Thầy Hiếu',
    desc: 'Gặp Đại võ sư Thầy Hiếu tại Làng Aru để thỉnh giáo bí quyết vận khí công.',
    targetType: 'talk_thay_hieu',
    targetCount: 1,
    rewardPower: 12000,
    rewardPotential: 12000,
    rewardGold: 3000,
    rewardGem: 15
  },
  {
    id: 4,
    title: 'Khám phá Đồi Hoa Cúc',
    desc: 'Bước qua Cổng Không Gian phía đông Làng Aru để tiến sang Đồi Hoa Cúc rực rỡ.',
    targetType: 'reach_doihoacuc',
    targetCount: 1,
    rewardPower: 15000,
    rewardPotential: 15000,
    rewardGold: 5000,
    rewardGem: 20
  },
  {
    id: 5,
    title: 'Tiêu diệt Khủng Long Con',
    desc: 'Đánh bại 3 Khủng Long Con tại Đồi Hoa Cúc để bảo vệ khách bộ hành.',
    targetType: 'dino',
    targetCount: 3,
    rewardPower: 25000,
    rewardPotential: 25000,
    rewardGold: 8000,
    rewardGem: 25
  },
  {
    id: 6,
    title: 'Hành trình Rừng Karin',
    desc: 'Vượt qua Đồi Hoa Cúc tiến vào Rừng Karin gặp Thần Mèo Karin để nhận Nước Thần.',
    targetType: 'reach_rungkarin',
    targetCount: 1,
    rewardPower: 40000,
    rewardPotential: 40000,
    rewardGold: 12000,
    rewardGem: 30
  },
  {
    id: 7,
    title: 'Bái sư Quy Lão Kame',
    desc: 'Vượt biển sang Đảo Kame bái Quy Lão làm sư phụ và hạ gục 3 Cua Bọc Thép.',
    targetType: 'crab',
    targetCount: 3,
    rewardPower: 60000,
    rewardPotential: 60000,
    rewardGold: 20000,
    rewardGem: 40
  },
  {
    id: 8,
    title: 'Khiêu chiến Boss Tàu Pảy Pảy',
    desc: 'Đánh bại Boss Tàu Pảy Pảy tại Đảo Kame để đoạt lấy Viên Ngọc Rồng 1 Sao tối thượng!',
    targetType: 'boss_dino',
    targetCount: 1,
    rewardPower: 120000,
    rewardPotential: 120000,
    rewardGold: 50000,
    rewardGem: 100
  }
];

// Danh sách Vật Phẩm Cửa Hàng
export const SHOP_ITEMS = [
  {
    id: 1,
    name: 'Áo Tập Kame',
    type: 'shirt',
    price: 1500,
    currency: 'gold',
    icon: '🥋',
    options: { hp: 500, defense: 10 },
    desc: 'Áo đồng phục truyền thống trường phái Kame, tăng 500 HP và 10 Giáp.'
  },
  {
    id: 2,
    name: 'Quần Võ Sĩ Đỏ',
    type: 'pants',
    price: 1500,
    currency: 'gold',
    icon: '👖',
    options: { ki: 400, defense: 8 },
    desc: 'Quần chiến binh bền bỉ, tăng 400 KI và 8 Giáp.'
  },
  {
    id: 3,
    name: 'Găng Tay Sắt Trọng Lực',
    type: 'glove',
    price: 3000,
    currency: 'gold',
    icon: '🥊',
    options: { attack: 40, crit: 3 },
    desc: 'Găng sắt giúp tăng 40 Sức đánh và 3% Chí mạng.'
  },
  {
    id: 4,
    name: 'Giày Thần Tốc',
    type: 'shoes',
    price: 2500,
    currency: 'gold',
    icon: '👟',
    options: { speed: 1.5, hp: 200 },
    desc: 'Tăng tốc độ di chuyển và thêm 200 HP.'
  },
  {
    id: 5,
    name: 'Rada Dò Ngọc Cấp 1',
    type: 'rada',
    price: 100,
    currency: 'gem',
    icon: '📡',
    options: { crit: 8, attack: 25 },
    desc: 'Rada công nghệ Capsule Corp, tăng 8% Chí mạng và 25 Sức đánh.'
  },
  {
    id: 6,
    name: 'Gói 10 Đậu Thần Karin',
    type: 'consumable',
    price: 500,
    currency: 'gold',
    icon: '🌱',
    quantity: 10,
    desc: 'Ăn 1 hạt phục hồi ngay lập tức 100% HP và KI.'
  },
  {
    id: 7,
    name: 'Thỏi Vàng Hoàng Gia',
    type: 'special',
    price: 50,
    currency: 'gem',
    icon: '🪙',
    desc: 'Quy đổi ra 100,000 Vàng tại Bà Hạt Mít.'
  }
];
