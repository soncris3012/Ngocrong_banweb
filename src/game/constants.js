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

// Danh sách Bản đồ trong Game
export const MAPS = [
  {
    id: 0,
    name: 'Làng Aru',
    planetId: 0,
    width: 2700,
    height: 650,
    groundY: 480,
    bgGradient: ['#19b0f8', '#38bdf8', '#bae6fd'],
    platforms: [],
    portals: [
      { x: 2580, y: 420, targetMap: 1, targetX: 120, label: 'Sang Đảo Kame ➜' }
    ],
    npcs: [
      { id: 1, name: 'Ông Gôhan', x: 480, y: 480, type: 'gohan' },
      { id: 2, name: 'Thầy Hiếu', x: 1320, y: 480, type: 'thay_hieu' },
      { id: 3, name: 'Thần Mèo Karin', x: 1800, y: 480, type: 'karin' },
      { id: 4, name: 'Admin Huy Khôi', x: 2280, y: 480, type: 'huykhoi' }
    ],
    monsters: [
      { id: 101, name: 'Mộc Nhân', type: 'dummy', maxHp: 300, hp: 300, x: 940, y: 480, atk: 0, exp: 80, gold: 20 },
      { id: 102, name: 'Mộc Nhân', type: 'dummy', maxHp: 300, hp: 300, x: 2100, y: 480, atk: 0, exp: 80, gold: 20 },
      { id: 103, name: 'Mộc Nhân Khổng Lồ', type: 'dummy', maxHp: 800, hp: 800, x: 2440, y: 480, atk: 0, exp: 250, gold: 60 }
    ]
  },
  {
    id: 1,
    name: 'Đảo Kame',
    planetId: 0,
    width: 2200,
    height: 600,
    groundY: 480,
    bgGradient: ['#0f172a', '#0284c7', '#38bdf8'],
    platforms: [
      { x: 400, y: 360, width: 150, height: 16 },
      { x: 800, y: 300, width: 180, height: 16 },
      { x: 1300, y: 350, width: 160, height: 16 }
    ],
    portals: [
      { x: 80, y: 410, targetMap: 0, targetX: 1800, label: '⬅ Về Làng Aru' },
      { x: 2100, y: 410, targetMap: 2, targetX: 100, label: 'Sang Rừng Nấm ➜' }
    ],
    npcs: [
      { id: 4, name: 'Santa Giáng Sinh', x: 300, y: 480, type: 'santa' },
      { id: 5, name: 'Rùa Ba Ba', x: 1100, y: 480, type: 'turtle' }
    ],
    monsters: [
      { id: 201, name: 'Khủng Long Con', type: 'dino', maxHp: 1200, hp: 1200, x: 600, y: 480, atk: 35, exp: 350, gold: 90 },
      { id: 202, name: 'Khủng Long Con', type: 'dino', maxHp: 1200, hp: 1200, x: 950, y: 480, atk: 35, exp: 350, gold: 90 },
      { id: 203, name: 'Cua Bọc Thép', type: 'crab', maxHp: 1500, hp: 1500, x: 1550, y: 480, atk: 45, exp: 450, gold: 120 },
      { id: 204, name: 'Khủng Long Con', type: 'dino', maxHp: 1200, hp: 1200, x: 1850, y: 480, atk: 35, exp: 350, gold: 90 }
    ]
  },
  {
    id: 2,
    name: 'Rừng Nấm Huyền Bí',
    planetId: 1,
    width: 2500,
    height: 600,
    groundY: 480,
    bgGradient: ['#064e3b', '#047857', '#34d399'],
    platforms: [
      { x: 350, y: 370, width: 140, height: 16 },
      { x: 700, y: 310, width: 160, height: 16 },
      { x: 1200, y: 260, width: 200, height: 16 },
      { x: 1750, y: 340, width: 150, height: 16 }
    ],
    portals: [
      { x: 80, y: 410, targetMap: 1, targetX: 2000, label: '⬅ Về Đảo Kame' }
    ],
    npcs: [
      { id: 6, name: 'Trưởng Lão Guru', x: 250, y: 480, type: 'guru' }
    ],
    monsters: [
      { id: 301, name: 'Khủng Long Mẹ Bạo Chúa', type: 'boss_dino', maxHp: 5000, hp: 5000, x: 800, y: 480, atk: 90, exp: 1500, gold: 500 },
      { id: 302, name: 'Thằn Lằn Bay', type: 'flying_lizard', maxHp: 2500, hp: 2500, x: 1350, y: 350, atk: 65, exp: 800, gold: 250 },
      { id: 303, name: 'Quái Đá Hắc Ám', type: 'rock_golem', maxHp: 4000, hp: 4000, x: 2100, y: 480, atk: 80, exp: 1200, gold: 400 }
    ]
  }
];

// Danh sách Nhiệm Vụ (Quests)
export const QUESTS = [
  {
    id: 1,
    title: 'Bài học vỡ lòng',
    desc: 'Hãy đấm hạ 3 Mộc Nhân ở Làng Aru để rèn luyện nắm đấm.',
    targetType: 'dummy',
    targetCount: 3,
    rewardPower: 3000,
    rewardPotential: 3000,
    rewardGold: 1000,
    rewardGem: 5
  },
  {
    id: 2,
    title: 'Đậu Thần Tiếp Sức',
    desc: 'Thu hoạch Đậu Thần Karin tại cây đậu Làng Aru để phục hồi thể lực.',
    targetType: 'harvest_senzu',
    targetCount: 1,
    rewardPower: 5000,
    rewardPotential: 5000,
    rewardGold: 2000,
    rewardGem: 10
  },
  {
    id: 3,
    title: 'Thám hiểm Đảo Kame',
    desc: 'Bước qua Cổng Không Gian sang Đảo Kame và tiêu diệt 3 Khủng Long Con.',
    targetType: 'dino',
    targetCount: 3,
    rewardPower: 12000,
    rewardPotential: 12000,
    rewardGold: 5000,
    rewardGem: 15
  },
  {
    id: 4,
    title: 'Tiêu diệt Khủng Long Mẹ',
    desc: 'Sang Rừng Nấm và đánh bại Khủng Long Mẹ Bạo Chúa để bảo vệ dân làng.',
    targetType: 'boss_dino',
    targetCount: 1,
    rewardPower: 30000,
    rewardPotential: 30000,
    rewardGold: 20000,
    rewardGem: 50
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
