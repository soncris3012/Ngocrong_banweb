// Hệ thống Dữ liệu Map, Vật phẩm, Skin/Cải trang & Quái vật chuẩn gốc từ TORI (NRO Server Private)
// Tự động phân tích và trích xuất từ TORI/SRC TORI/ae_data.sql & CaiTrang.java

export const TORI_ITEM_CATALOG = {
  "0": {
    "id": "0",
    "name": "Áo vải 3 lỗ",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/390.png",
    "level": 1,
    "strRequire": 1200,
    "gold": 500,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "defense": 2
    },
    "caiTrangParts": {
      "head": 64,
      "body": 14,
      "leg": 58,
      "bag": -1
    }
  },
  "1": {
    "id": "1",
    "name": "Áo sợi len",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/393.png",
    "level": 1,
    "strRequire": 1200,
    "gold": 500,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "defense": 2
    },
    "caiTrangParts": {
      "head": 29,
      "body": 10,
      "leg": 60,
      "bag": -1
    }
  },
  "2": {
    "id": "2",
    "name": "Áo vải thô",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/392.png",
    "level": 1,
    "strRequire": 1200,
    "gold": 500,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "defense": 3
    },
    "caiTrangParts": {
      "head": 28,
      "body": 16,
      "leg": 58,
      "bag": -1
    }
  },
  "3": {
    "id": "3",
    "name": "Áo vải dày",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/389.png",
    "level": 3,
    "strRequire": 26000,
    "gold": 10000,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "defense": 8
    },
    "caiTrangParts": {
      "head": 64,
      "body": 1,
      "leg": 58,
      "bag": -1
    }
  },
  "4": {
    "id": "4",
    "name": "Áo len Pico",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/394.png",
    "level": 3,
    "strRequire": 26000,
    "gold": 10000,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "defense": 8
    },
    "caiTrangParts": {
      "head": 29,
      "body": 12,
      "leg": 60,
      "bag": -1
    }
  },
  "5": {
    "id": "5",
    "name": "Áo giáp sắt",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/391.png",
    "level": 3,
    "strRequire": 26000,
    "gold": 10000,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "defense": 10
    },
    "caiTrangParts": {
      "head": 28,
      "body": 7,
      "leg": 58,
      "bag": -1
    }
  },
  "6": {
    "id": "6",
    "name": "Quần vải đen",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/396.png",
    "level": 1,
    "strRequire": 1000,
    "gold": 400,
    "gem": 0,
    "desc": "Giúp tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxHp": 30
    },
    "caiTrangParts": {
      "head": 64,
      "body": 57,
      "leg": 15,
      "bag": -1
    }
  },
  "7": {
    "id": "7",
    "name": "Quần sợi len",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/398.png",
    "level": 1,
    "strRequire": 1000,
    "gold": 400,
    "gem": 0,
    "desc": "Giúp tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxHp": 20
    },
    "caiTrangParts": {
      "head": 29,
      "body": 59,
      "leg": 11,
      "bag": -1
    }
  },
  "8": {
    "id": "8",
    "name": "Quần vải thô",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/400.png",
    "level": 1,
    "strRequire": 1000,
    "gold": 400,
    "gem": 0,
    "desc": "Giúp tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxHp": 20
    },
    "caiTrangParts": {
      "head": 28,
      "body": 57,
      "leg": 17,
      "bag": -1
    }
  },
  "9": {
    "id": "9",
    "name": "Quần vải dày",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/395.png",
    "level": 3,
    "strRequire": 22000,
    "gold": 8000,
    "gem": 0,
    "desc": "Giúp tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxHp": 300
    },
    "caiTrangParts": {
      "head": 64,
      "body": 57,
      "leg": 2,
      "bag": -1
    }
  },
  "10": {
    "id": "10",
    "name": "Quần vải thô Pico",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/397.png",
    "level": 3,
    "strRequire": 22000,
    "gold": 8000,
    "gem": 0,
    "desc": "Giúp tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxHp": 120
    },
    "caiTrangParts": {
      "head": 29,
      "body": 59,
      "leg": 13,
      "bag": -1
    }
  },
  "11": {
    "id": "11",
    "name": "Quần giáp sắt",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/399.png",
    "level": 3,
    "strRequire": 22000,
    "gold": 8000,
    "gem": 0,
    "desc": "Giúp tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxHp": 100
    },
    "caiTrangParts": {
      "head": 28,
      "body": 57,
      "leg": 8,
      "bag": -1
    }
  },
  "12": {
    "id": "12",
    "name": "Rada cấp 1",
    "slot": "rada",
    "type": 4,
    "gender": 3,
    "icon": "icon/1089.png",
    "level": 1,
    "strRequire": 1300,
    "gold": 600,
    "gem": 0,
    "desc": "Giúp tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 1
    }
  },
  "13": {
    "id": "13",
    "name": "Đậu thần cấp 1",
    "slot": "consumable",
    "type": 6,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 1,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Thức ăn phục hồi HP và KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "14": {
    "id": "14",
    "name": "Ngọc Rồng 1 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/419.png",
    "level": 0,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "15": {
    "id": "15",
    "name": "Ngọc Rồng 2 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/420.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "16": {
    "id": "16",
    "name": "Ngọc Rồng 3 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/421.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "17": {
    "id": "17",
    "name": "Ngọc Rồng 4 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/422.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "18": {
    "id": "18",
    "name": "Ngọc Rồng 5 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/423.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "19": {
    "id": "19",
    "name": "Ngọc Rồng 6 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/424.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "20": {
    "id": "20",
    "name": "Ngọc Rồng 7 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/425.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "21": {
    "id": "21",
    "name": "Găng vải đen",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/408.png",
    "level": 1,
    "strRequire": 1500,
    "gold": 700,
    "gem": 0,
    "desc": "Giúp tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attack": 4
    }
  },
  "22": {
    "id": "22",
    "name": "Găng sợi len",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/411.png",
    "level": 1,
    "strRequire": 1500,
    "gold": 700,
    "gem": 0,
    "desc": "Giúp tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attack": 3
    }
  },
  "23": {
    "id": "23",
    "name": "Găng vải thô",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/409.png",
    "level": 1,
    "strRequire": 1500,
    "gold": 700,
    "gem": 0,
    "desc": "Giúp tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attack": 5
    }
  },
  "24": {
    "id": "24",
    "name": "Găng thun đen",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/408.png",
    "level": 2,
    "strRequire": 15000,
    "gold": 7000,
    "gem": 0,
    "desc": "Giúp tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attack": 7
    }
  },
  "25": {
    "id": "25",
    "name": "Găng len Pico",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/412.png",
    "level": 3,
    "strRequire": 50000,
    "gold": 14000,
    "gem": 0,
    "desc": "Giúp tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attack": 12
    }
  },
  "26": {
    "id": "26",
    "name": "Găng sắt",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/410.png",
    "level": 3,
    "strRequire": 50000,
    "gold": 14000,
    "gem": 0,
    "desc": "Giúp tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attack": 16
    }
  },
  "27": {
    "id": "27",
    "name": "Giầy nhựa",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/401.png",
    "level": 1,
    "strRequire": 800,
    "gold": 300,
    "gem": 0,
    "desc": "Giúp tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxKi": 10
    }
  },
  "28": {
    "id": "28",
    "name": "Giầy sợi len",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/405.png",
    "level": 1,
    "strRequire": 800,
    "gold": 300,
    "gem": 0,
    "desc": "Giúp tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxKi": 15
    }
  },
  "29": {
    "id": "29",
    "name": "Giầy vải thô",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/403.png",
    "level": 1,
    "strRequire": 800,
    "gold": 300,
    "gem": 0,
    "desc": "Giúp tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxKi": 10
    }
  },
  "30": {
    "id": "30",
    "name": "Giầy cao su",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/401.png",
    "level": 2,
    "strRequire": 8000,
    "gold": 3000,
    "gem": 0,
    "desc": "Giúp tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxKi": 25
    }
  },
  "31": {
    "id": "31",
    "name": "Giầy nhựa Pico",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/406.png",
    "level": 3,
    "strRequire": 18000,
    "gold": 6000,
    "gem": 0,
    "desc": "Giúp tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxKi": 150
    }
  },
  "32": {
    "id": "32",
    "name": "Giầy sắt",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/404.png",
    "level": 3,
    "strRequire": 18000,
    "gold": 6000,
    "gem": 0,
    "desc": "Giúp tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxKi": 100
    }
  },
  "33": {
    "id": "33",
    "name": "Áo thun 3 lỗ",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/390.png",
    "level": 2,
    "strRequire": 12000,
    "gold": 5000,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "defense": 4
    },
    "caiTrangParts": {
      "head": 64,
      "body": 14,
      "leg": 58,
      "bag": -1
    }
  },
  "34": {
    "id": "34",
    "name": "Áo thun dày",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/389.png",
    "level": 4,
    "strRequire": 80000,
    "gold": 20000,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "defense": 16
    },
    "caiTrangParts": {
      "head": 64,
      "body": 1,
      "leg": 58,
      "bag": -1
    }
  },
  "35": {
    "id": "35",
    "name": "Quần thun đen",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/396.png",
    "level": 2,
    "strRequire": 10000,
    "gold": 4000,
    "gem": 0,
    "desc": "Giúp tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxHp": 150
    },
    "caiTrangParts": {
      "head": 64,
      "body": 57,
      "leg": 15,
      "bag": -1
    }
  },
  "36": {
    "id": "36",
    "name": "Quần thun dày",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/395.png",
    "level": 4,
    "strRequire": 66000,
    "gold": 18000,
    "gem": 0,
    "desc": "Giúp tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxHp": 600
    },
    "caiTrangParts": {
      "head": 64,
      "body": 57,
      "leg": 2,
      "bag": -1
    }
  },
  "37": {
    "id": "37",
    "name": "Găng vải dày",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/407.png",
    "level": 3,
    "strRequire": 50000,
    "gold": 14000,
    "gem": 0,
    "desc": "Giúp tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attack": 14
    }
  },
  "38": {
    "id": "38",
    "name": "Găng thun dày",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/407.png",
    "level": 4,
    "strRequire": 200000,
    "gold": 30000,
    "gem": 0,
    "desc": "Giúp tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attack": 28
    }
  },
  "39": {
    "id": "39",
    "name": "Giày nhựa đế dày",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/402.png",
    "level": 3,
    "strRequire": 18000,
    "gold": 6000,
    "gem": 0,
    "desc": "Giúp tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxKi": 120
    }
  },
  "40": {
    "id": "40",
    "name": "Giày cao su đế dày",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/402.png",
    "level": 4,
    "strRequire": 53000,
    "gold": 15000,
    "gem": 0,
    "desc": "Giúp tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxKi": 250
    }
  },
  "41": {
    "id": "41",
    "name": "Áo sợi gai",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/393.png",
    "level": 2,
    "strRequire": 12000,
    "gold": 5000,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "defense": 4
    },
    "caiTrangParts": {
      "head": 29,
      "body": 10,
      "leg": 60,
      "bag": -1
    }
  },
  "42": {
    "id": "42",
    "name": "Áo thun Pico",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/394.png",
    "level": 4,
    "strRequire": 80000,
    "gold": 20000,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "defense": 16
    },
    "caiTrangParts": {
      "head": 29,
      "body": 12,
      "leg": 60,
      "bag": -1
    }
  },
  "43": {
    "id": "43",
    "name": "Quần sợi gai",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/398.png",
    "level": 2,
    "strRequire": 10000,
    "gold": 4000,
    "gem": 0,
    "desc": "Giúp tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxHp": 25
    },
    "caiTrangParts": {
      "head": 29,
      "body": 59,
      "leg": 11,
      "bag": -1
    }
  },
  "44": {
    "id": "44",
    "name": "Quần thun Pico",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/397.png",
    "level": 4,
    "strRequire": 66000,
    "gold": 18000,
    "gem": 0,
    "desc": "Giúp tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxHp": 250
    },
    "caiTrangParts": {
      "head": 29,
      "body": 59,
      "leg": 13,
      "bag": -1
    }
  },
  "45": {
    "id": "45",
    "name": "Găng thun Pico",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/412.png",
    "level": 4,
    "strRequire": 200000,
    "gold": 30000,
    "gem": 0,
    "desc": "Giúp tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attack": 24
    }
  },
  "46": {
    "id": "46",
    "name": "Găng sợi gai",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/411.png",
    "level": 2,
    "strRequire": 15000,
    "gold": 7000,
    "gem": 0,
    "desc": "Giúp tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attack": 6
    }
  },
  "47": {
    "id": "47",
    "name": "Giầy sợi gai",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/405.png",
    "level": 2,
    "strRequire": 8000,
    "gold": 3000,
    "gem": 0,
    "desc": "Giúp tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxKi": 30
    }
  },
  "48": {
    "id": "48",
    "name": "Giầy cao su Pico",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/406.png",
    "level": 4,
    "strRequire": 53000,
    "gold": 15000,
    "gem": 0,
    "desc": "Giúp tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxKi": 300
    }
  },
  "49": {
    "id": "49",
    "name": "Áo thun thô",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/392.png",
    "level": 2,
    "strRequire": 12000,
    "gold": 5000,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "defense": 5
    },
    "caiTrangParts": {
      "head": 28,
      "body": 16,
      "leg": 58,
      "bag": -1
    }
  },
  "50": {
    "id": "50",
    "name": "Áo giáp đồng",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/391.png",
    "level": 4,
    "strRequire": 80000,
    "gold": 20000,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "defense": 20
    },
    "caiTrangParts": {
      "head": 28,
      "body": 7,
      "leg": 58,
      "bag": -1
    }
  },
  "51": {
    "id": "51",
    "name": "Quần thun thô",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/400.png",
    "level": 2,
    "strRequire": 10000,
    "gold": 4000,
    "gem": 0,
    "desc": "Giúp tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxHp": 20
    },
    "caiTrangParts": {
      "head": 28,
      "body": 57,
      "leg": 17,
      "bag": -1
    }
  },
  "52": {
    "id": "52",
    "name": "Quần giáp đồng",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/399.png",
    "level": 4,
    "strRequire": 66000,
    "gold": 18000,
    "gem": 0,
    "desc": "Giúp tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxHp": 200
    },
    "caiTrangParts": {
      "head": 28,
      "body": 57,
      "leg": 8,
      "bag": -1
    }
  },
  "53": {
    "id": "53",
    "name": "Găng thun thô",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/409.png",
    "level": 2,
    "strRequire": 15000,
    "gold": 7000,
    "gem": 0,
    "desc": "Giúp tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attack": 8
    }
  },
  "54": {
    "id": "54",
    "name": "Găng đồng",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/410.png",
    "level": 4,
    "strRequire": 200000,
    "gold": 30000,
    "gem": 0,
    "desc": "Giúp tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attack": 32
    }
  },
  "55": {
    "id": "55",
    "name": "Giầy cao su thô",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/403.png",
    "level": 2,
    "strRequire": 8000,
    "gold": 3000,
    "gem": 0,
    "desc": "Giúp tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxKi": 20
    }
  },
  "56": {
    "id": "56",
    "name": "Giầy đồng",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/404.png",
    "level": 4,
    "strRequire": 53000,
    "gold": 15000,
    "gem": 0,
    "desc": "Giúp tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxKi": 200
    }
  },
  "57": {
    "id": "57",
    "name": "Rada cấp 2",
    "slot": "rada",
    "type": 4,
    "gender": 3,
    "icon": "icon/433.png",
    "level": 2,
    "strRequire": 13000,
    "gold": 6000,
    "gem": 0,
    "desc": "Giúp tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 2
    }
  },
  "58": {
    "id": "58",
    "name": "Rada cấp 3",
    "slot": "rada",
    "type": 4,
    "gender": 3,
    "icon": "icon/1022.png",
    "level": 3,
    "strRequire": 28000,
    "gold": 12000,
    "gem": 0,
    "desc": "Giúp tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 3
    }
  },
  "59": {
    "id": "59",
    "name": "Rada cấp 4",
    "slot": "rada",
    "type": 4,
    "gender": 3,
    "icon": "icon/1023.png",
    "level": 4,
    "strRequire": 86000,
    "gold": 24000,
    "gem": 0,
    "desc": "Giúp tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 4
    }
  },
  "60": {
    "id": "60",
    "name": "Đậu thần cấp 2",
    "slot": "consumable",
    "type": 6,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 2,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Thức ăn phục hồi HP và KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "61": {
    "id": "61",
    "name": "Đậu thần cấp 3",
    "slot": "consumable",
    "type": 6,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 3,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Thức ăn phục hồi HP và KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "62": {
    "id": "62",
    "name": "Đậu thần cấp 4",
    "slot": "consumable",
    "type": 6,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 4,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Thức ăn phục hồi HP và KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "63": {
    "id": "63",
    "name": "Đậu thần cấp 5",
    "slot": "consumable",
    "type": 6,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 5,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Thức ăn phục hồi HP và KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "64": {
    "id": "64",
    "name": "Đậu thần cấp 6",
    "slot": "consumable",
    "type": 6,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 6,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Thức ăn phục hồi HP và KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "65": {
    "id": "65",
    "name": "Đậu thần cấp 7",
    "slot": "consumable",
    "type": 6,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 7,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Thức ăn phục hồi HP và KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "66": {
    "id": "66",
    "name": "Sách đấm Dragon lv1",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/644.png",
    "level": 1,
    "strRequire": 1,
    "gold": 0,
    "gem": 5,
    "desc": "học kĩ năng đấm Dragon",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 100
    }
  },
  "67": {
    "id": "67",
    "name": "Sách đấm Dragon lv2",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/645.png",
    "level": 2,
    "strRequire": 1,
    "gold": 0,
    "gem": 10,
    "desc": "nâng đấm Dragon lên cấp 2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 110
    }
  },
  "68": {
    "id": "68",
    "name": "Sách đấm Dragon lv3",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/646.png",
    "level": 3,
    "strRequire": 1,
    "gold": 0,
    "gem": 15,
    "desc": "nâng đấm Dragon lên cấp 3",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 120
    }
  },
  "69": {
    "id": "69",
    "name": "Sách đấm Dragon lv4",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/647.png",
    "level": 4,
    "strRequire": 1,
    "gold": 0,
    "gem": 20,
    "desc": "nâng đấm Dragon lên cấp 4",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 130
    }
  },
  "70": {
    "id": "70",
    "name": "Sách đấm Dragon lv5",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/648.png",
    "level": 5,
    "strRequire": 1,
    "gold": 0,
    "gem": 25,
    "desc": "nâng đấm Dragon lên cấp 5",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 140
    }
  },
  "71": {
    "id": "71",
    "name": "Sách đấm Dragon lv6",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/649.png",
    "level": 6,
    "strRequire": 1,
    "gold": 0,
    "gem": 30,
    "desc": "nâng đấm Dragon lên cấp 6",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 150
    }
  },
  "72": {
    "id": "72",
    "name": "Sách đấm Dragon lv7",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/650.png",
    "level": 7,
    "strRequire": 1,
    "gold": 0,
    "gem": 35,
    "desc": "nâng đấm Dragon lên cấp 7",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 160
    }
  },
  "73": {
    "id": "73",
    "name": "Đùi gà",
    "slot": "special",
    "type": 8,
    "gender": 3,
    "icon": "icon/643.png",
    "level": 1,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Cần tìm đủ 10 và mang về cho ông Gohan",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "74": {
    "id": "74",
    "name": "Đùi gà nướng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/643.png",
    "level": 1,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Ăn vào sẽ phục hồi toàn bộ HP MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "75": {
    "id": "75",
    "name": "Đùi heo Xayda",
    "slot": "special",
    "type": 8,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 1,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Cần tìm đủ 10 và mang về cho ông Paragus",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "76": {
    "id": "76",
    "name": "Vàng",
    "slot": "special",
    "type": 9,
    "gender": 3,
    "icon": "icon/927.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "77": {
    "id": "77",
    "name": "Ngọc",
    "slot": "special",
    "type": 10,
    "gender": 3,
    "icon": "icon/932.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "78": {
    "id": "78",
    "name": "Đứa bé",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/737.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Đứa bé trong phi thuyền tennis",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "79": {
    "id": "79",
    "name": "Sách đấm Demon lv1",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/665.png",
    "level": 1,
    "strRequire": 1,
    "gold": 0,
    "gem": 5,
    "desc": "học kĩ năng đấm Demon",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 95
    }
  },
  "80": {
    "id": "80",
    "name": "Sách đấm Demon lv2",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/666.png",
    "level": 2,
    "strRequire": 1,
    "gold": 0,
    "gem": 10,
    "desc": "nâng đòn đấm Demon lên cấp 2",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 105
    }
  },
  "81": {
    "id": "81",
    "name": "Sách đấm Demon lv3",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/667.png",
    "level": 3,
    "strRequire": 1,
    "gold": 0,
    "gem": 15,
    "desc": "nâng đòn đấm Demon lên cấp 3",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 115
    }
  },
  "82": {
    "id": "82",
    "name": "Sách đấm Demon lv4",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/668.png",
    "level": 4,
    "strRequire": 1,
    "gold": 0,
    "gem": 20,
    "desc": "nâng đòn đấm Demon lên cấp 4",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 125
    }
  },
  "83": {
    "id": "83",
    "name": "Sách đấm Demon lv5",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/669.png",
    "level": 5,
    "strRequire": 1,
    "gold": 0,
    "gem": 25,
    "desc": "nâng đòn đấm Demon lên cấp 5",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 135
    }
  },
  "84": {
    "id": "84",
    "name": "Sách đấm Demon lv6",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/670.png",
    "level": 6,
    "strRequire": 1,
    "gold": 0,
    "gem": 30,
    "desc": "nâng đòn đấm Demon lên cấp 6",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 145
    }
  },
  "85": {
    "id": "85",
    "name": "Truyện tranh",
    "slot": "special",
    "type": 8,
    "gender": 3,
    "icon": "icon/1041.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm nhiệm vụ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "86": {
    "id": "86",
    "name": "Sách đấm Demon lv7",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/671.png",
    "level": 7,
    "strRequire": 1,
    "gold": 0,
    "gem": 35,
    "desc": "nâng đòn đấm Demon lên cấp 7",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 155
    }
  },
  "87": {
    "id": "87",
    "name": "Sách đấm Galick lv1",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/679.png",
    "level": 1,
    "strRequire": 1,
    "gold": 0,
    "gem": 5,
    "desc": "học kĩ năng đấm Galick",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 100
    }
  },
  "88": {
    "id": "88",
    "name": "Sách đấm Galick lv2",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/680.png",
    "level": 2,
    "strRequire": 1,
    "gold": 0,
    "gem": 10,
    "desc": "nâng đòn đấm Galick lên cấp 2",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 110
    }
  },
  "89": {
    "id": "89",
    "name": "Sách đấm Galick lv3",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/681.png",
    "level": 3,
    "strRequire": 1,
    "gold": 0,
    "gem": 15,
    "desc": "nâng đòn đấm Galick lên cấp 3",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 120
    }
  },
  "90": {
    "id": "90",
    "name": "Sách đấm Galick lv4",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/682.png",
    "level": 4,
    "strRequire": 1,
    "gold": 0,
    "gem": 20,
    "desc": "nâng đòn đấm Galick lên cấp 4",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 130
    }
  },
  "91": {
    "id": "91",
    "name": "Sách đấm Galick lv5",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/683.png",
    "level": 5,
    "strRequire": 1,
    "gold": 0,
    "gem": 25,
    "desc": "nâng đòn đấm Galick lên cấp 5",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 140
    }
  },
  "92": {
    "id": "92",
    "name": "Sách đấm Galick lv6",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/684.png",
    "level": 6,
    "strRequire": 1,
    "gold": 0,
    "gem": 30,
    "desc": "nâng đòn đấm Galick lên cấp 6",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 150
    }
  },
  "93": {
    "id": "93",
    "name": "Sách đấm Galick lv7",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/685.png",
    "level": 7,
    "strRequire": 1,
    "gold": 0,
    "gem": 35,
    "desc": "nâng đòn đấm Galick lên cấp 7",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 160
    }
  },
  "94": {
    "id": "94",
    "name": "Sách Kamejoko lv1",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/651.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 10,
    "desc": "học kĩ năng Kamejoko",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 150
    }
  },
  "95": {
    "id": "95",
    "name": "Sách Kamejoko lv2",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/652.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 20,
    "desc": "nâng đòn Kamejoko lên cấp 2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 200
    }
  },
  "96": {
    "id": "96",
    "name": "Sách Kamejoko lv3",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/653.png",
    "level": 3,
    "strRequire": 0,
    "gold": 0,
    "gem": 30,
    "desc": "nâng đòn Kamejoko lên cấp 3",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 250
    }
  },
  "97": {
    "id": "97",
    "name": "Sách Kamejoko lv4",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/654.png",
    "level": 4,
    "strRequire": 0,
    "gold": 0,
    "gem": 40,
    "desc": "nâng đòn Kamejoko lên cấp 4",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 300
    }
  },
  "98": {
    "id": "98",
    "name": "Sách Kamejoko lv5",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/655.png",
    "level": 5,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "nâng đòn Kamejoko lên cấp 5",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 350
    }
  },
  "99": {
    "id": "99",
    "name": "Sách Kamejoko lv6",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/656.png",
    "level": 6,
    "strRequire": 0,
    "gold": 0,
    "gem": 60,
    "desc": "nâng đòn Kamejoko lên cấp 6",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 400
    }
  },
  "100": {
    "id": "100",
    "name": "Sách Kamejoko lv7",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/657.png",
    "level": 7,
    "strRequire": 0,
    "gold": 0,
    "gem": 70,
    "desc": "nâng đòn Kamejoko lên cấp 7",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 450
    }
  },
  "101": {
    "id": "101",
    "name": "Sách Masenko lv1",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/672.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 10,
    "desc": "học kĩ năng Masenko",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 100
    }
  },
  "102": {
    "id": "102",
    "name": "Sách Masenko lv2",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/673.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 20,
    "desc": "nâng đòn Masenko lên cấp 2",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 110
    }
  },
  "103": {
    "id": "103",
    "name": "Sách Masenko lv3",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/674.png",
    "level": 3,
    "strRequire": 0,
    "gold": 0,
    "gem": 30,
    "desc": "nâng đòn Masenko lên cấp 3",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 120
    }
  },
  "104": {
    "id": "104",
    "name": "Sách Masenko lv4",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/675.png",
    "level": 4,
    "strRequire": 0,
    "gold": 0,
    "gem": 40,
    "desc": "nâng đòn Masenko lên cấp 4",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 130
    }
  },
  "105": {
    "id": "105",
    "name": "Sách Masenko lv5",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/676.png",
    "level": 5,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "nâng đòn Masenko lên cấp 5",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 140
    }
  },
  "106": {
    "id": "106",
    "name": "Sách Masenko lv6",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/677.png",
    "level": 6,
    "strRequire": 0,
    "gold": 0,
    "gem": 60,
    "desc": "nâng đòn Masenko lên cấp 6",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 150
    }
  },
  "107": {
    "id": "107",
    "name": "Sách Masenko lv7",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/678.png",
    "level": 7,
    "strRequire": 0,
    "gold": 0,
    "gem": 70,
    "desc": "nâng đòn Masenko lên cấp 7",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 160
    }
  },
  "108": {
    "id": "108",
    "name": "Sách Antomic lv1",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/686.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 10,
    "desc": "học kĩ năng Antomic",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 100
    }
  },
  "109": {
    "id": "109",
    "name": "Sách Antomic lv2",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/687.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 20,
    "desc": "nâng đòn Antomic lên cấp 2",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 110
    }
  },
  "110": {
    "id": "110",
    "name": "Sách Antomic lv3",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/688.png",
    "level": 3,
    "strRequire": 0,
    "gold": 0,
    "gem": 30,
    "desc": "nâng Antomic lên cấp 3",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 120
    }
  },
  "111": {
    "id": "111",
    "name": "Sách Antomic lv4",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/689.png",
    "level": 4,
    "strRequire": 0,
    "gold": 0,
    "gem": 40,
    "desc": "nâng Antomic lên cấp 4",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 130
    }
  },
  "112": {
    "id": "112",
    "name": "Sách Antomic lv5",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/690.png",
    "level": 5,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "nâng Antomic lên cấp 5",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 140
    }
  },
  "113": {
    "id": "113",
    "name": "Sách Antomic lv6",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/691.png",
    "level": 6,
    "strRequire": 0,
    "gold": 0,
    "gem": 60,
    "desc": "nâng Antomic lên cấp 6",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 150
    }
  },
  "114": {
    "id": "114",
    "name": "Sách Antomic lv7",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/692.png",
    "level": 7,
    "strRequire": 0,
    "gold": 0,
    "gem": 70,
    "desc": "nâng Antomic lên cấp 7",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 160
    }
  },
  "115": {
    "id": "115",
    "name": "Thái Dương Hạ San lv1",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/658.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 30,
    "desc": "học Thái Dương Hạ San",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "116": {
    "id": "116",
    "name": "Thái Dương Hạ San lv2",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/659.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 40,
    "desc": "nâng TDHS lên cấp 2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "117": {
    "id": "117",
    "name": "Thái Dương Hạ San lv3",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/660.png",
    "level": 3,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "nâng TDHS lên cấp 3",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "118": {
    "id": "118",
    "name": "Thái Dương Hạ San lv4",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/661.png",
    "level": 4,
    "strRequire": 0,
    "gold": 0,
    "gem": 60,
    "desc": "nâng TDHS lên cấp 4",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "119": {
    "id": "119",
    "name": "Thái Dương Hạ San lv5",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/662.png",
    "level": 5,
    "strRequire": 0,
    "gold": 0,
    "gem": 70,
    "desc": "nâng TDHS lên cấp 5",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "120": {
    "id": "120",
    "name": "Thái Dương Hạ San lv6",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/663.png",
    "level": 6,
    "strRequire": 0,
    "gold": 0,
    "gem": 80,
    "desc": "nâng TDHS lên cấp 6",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "121": {
    "id": "121",
    "name": "Thái Dương Hạ San lv7",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/664.png",
    "level": 7,
    "strRequire": 0,
    "gold": 0,
    "gem": 90,
    "desc": "nâng TDHS lên cấp 7",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "122": {
    "id": "122",
    "name": "Sách học Trị thương lv1",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/1090.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 30,
    "desc": "học trị thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "123": {
    "id": "123",
    "name": "Sách học Trị thương lv2",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/1091.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 40,
    "desc": "nâng trị thương lên cấp 2",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "124": {
    "id": "124",
    "name": "Sách học Trị thương lv3",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/1092.png",
    "level": 3,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "nâng trị thương lên cấp 3",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "125": {
    "id": "125",
    "name": "Sách học Trị thương lv4",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/1093.png",
    "level": 4,
    "strRequire": 0,
    "gold": 0,
    "gem": 60,
    "desc": "nâng trị thương lên cấp 4",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "126": {
    "id": "126",
    "name": "Sách học Trị thương lv5",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/1094.png",
    "level": 5,
    "strRequire": 0,
    "gold": 0,
    "gem": 70,
    "desc": "nâng trị thương lên cấp 5",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "127": {
    "id": "127",
    "name": "Sách học Trị thương lv6",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/1095.png",
    "level": 6,
    "strRequire": 0,
    "gold": 0,
    "gem": 80,
    "desc": "nâng trị thương lên cấp 6",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "128": {
    "id": "128",
    "name": "Sách học Trị thương lv7",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/1096.png",
    "level": 7,
    "strRequire": 0,
    "gold": 0,
    "gem": 90,
    "desc": "nâng trị thương lên cấp 7",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "129": {
    "id": "129",
    "name": "Tái tạo năng lượng lv1",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/1097.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 30,
    "desc": "học Tái tạo năng lượng",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 100
    }
  },
  "130": {
    "id": "130",
    "name": "Tái tạo năng lượng lv2",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/1098.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 40,
    "desc": "nâng Tái tạo năng lượng lên cấp 2",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 110
    }
  },
  "131": {
    "id": "131",
    "name": "Tái tạo năng lượng lv3",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/1099.png",
    "level": 3,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "nâng Tái tạo năng lượng lên cấp 3",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 120
    }
  },
  "132": {
    "id": "132",
    "name": "Tái tạo năng lượng lv4",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/1100.png",
    "level": 4,
    "strRequire": 0,
    "gold": 0,
    "gem": 60,
    "desc": "nâng Tái tạo năng lượng lên cấp 4",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 130
    }
  },
  "133": {
    "id": "133",
    "name": "Tái tạo năng lượng lv5",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/1101.png",
    "level": 5,
    "strRequire": 0,
    "gold": 0,
    "gem": 70,
    "desc": "nâng Tái tạo năng lượng lên cấp 5",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 140
    }
  },
  "134": {
    "id": "134",
    "name": "Tái tạo năng lượng lv6",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/1102.png",
    "level": 6,
    "strRequire": 0,
    "gold": 0,
    "gem": 80,
    "desc": "nâng Tái tạo năng lượng lên cấp 6",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 150
    }
  },
  "135": {
    "id": "135",
    "name": "Tái tạo năng lượng lv7",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/1103.png",
    "level": 7,
    "strRequire": 0,
    "gold": 0,
    "gem": 90,
    "desc": "nâng Tái tạo năng lượng lên cấp 7",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 160
    }
  },
  "136": {
    "id": "136",
    "name": "Áo vải Kame",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/938.png",
    "level": 5,
    "strRequire": 240000,
    "gold": 50000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "defense": 24
    },
    "caiTrangParts": {
      "head": 64,
      "body": 65,
      "leg": 58,
      "bag": -1
    }
  },
  "137": {
    "id": "137",
    "name": "Áo thun Kame",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/938.png",
    "level": 6,
    "strRequire": 720000,
    "gold": 100000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "defense": 40
    },
    "caiTrangParts": {
      "head": 64,
      "body": 65,
      "leg": 58,
      "bag": -1
    }
  },
  "138": {
    "id": "138",
    "name": "Áo võ Kame",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/949.png",
    "level": 7,
    "strRequire": 2200000,
    "gold": 200000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "defense": 60
    },
    "caiTrangParts": {
      "head": 64,
      "body": 71,
      "leg": 58,
      "bag": -1
    }
  },
  "139": {
    "id": "139",
    "name": "Áo võ Goku",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/949.png",
    "level": 8,
    "strRequire": 6400000,
    "gold": 500000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "defense": 90
    },
    "caiTrangParts": {
      "head": 64,
      "body": 71,
      "leg": 58,
      "bag": -1
    }
  },
  "140": {
    "id": "140",
    "name": "Quần vải Kame",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/939.png",
    "level": 5,
    "strRequire": 200000,
    "gold": 45000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxHp": 1400
    },
    "caiTrangParts": {
      "head": 64,
      "body": 57,
      "leg": 66,
      "bag": -1
    }
  },
  "141": {
    "id": "141",
    "name": "Quần thun Kame",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/939.png",
    "level": 6,
    "strRequire": 600000,
    "gold": 90000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxHp": 3000
    },
    "caiTrangParts": {
      "head": 64,
      "body": 57,
      "leg": 66,
      "bag": -1
    }
  },
  "142": {
    "id": "142",
    "name": "Quần võ Kame",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/950.png",
    "level": 7,
    "strRequire": 1800000,
    "gold": 180000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxHp": 6000
    },
    "caiTrangParts": {
      "head": 64,
      "body": 57,
      "leg": 72,
      "bag": -1
    }
  },
  "143": {
    "id": "143",
    "name": "Quần võ goku",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/950.png",
    "level": 8,
    "strRequire": 5300000,
    "gold": 400000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxHp": 10000
    },
    "caiTrangParts": {
      "head": 64,
      "body": 57,
      "leg": 72,
      "bag": -1
    }
  },
  "144": {
    "id": "144",
    "name": "Găng vải Kame",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/947.png",
    "level": 5,
    "strRequire": 800000,
    "gold": 60000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attack": 55
    }
  },
  "145": {
    "id": "145",
    "name": "Găng thun Kame",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/947.png",
    "level": 6,
    "strRequire": 3200000,
    "gold": 120000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attack": 110
    }
  },
  "146": {
    "id": "146",
    "name": "Găng võ Kame",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/953.png",
    "level": 7,
    "strRequire": 10000000,
    "gold": 240000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attack": 220
    }
  },
  "147": {
    "id": "147",
    "name": "Găng võ goku",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/953.png",
    "level": 8,
    "strRequire": 20000000,
    "gold": 600000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attack": 530
    }
  },
  "148": {
    "id": "148",
    "name": "Giày nhựa Kame",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/940.png",
    "level": 5,
    "strRequire": 160000,
    "gold": 30000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxKi": 500
    }
  },
  "149": {
    "id": "149",
    "name": "Giày cao su Kame",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/940.png",
    "level": 6,
    "strRequire": 480000,
    "gold": 70000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxKi": 1200
    }
  },
  "150": {
    "id": "150",
    "name": "Giày võ kame",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/952.png",
    "level": 7,
    "strRequire": 1400000,
    "gold": 150000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxKi": 2400
    }
  },
  "151": {
    "id": "151",
    "name": "Giày võ goku",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/952.png",
    "level": 8,
    "strRequire": 4300000,
    "gold": 350000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxKi": 5000
    }
  },
  "152": {
    "id": "152",
    "name": "Áo choàng len",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/942.png",
    "level": 5,
    "strRequire": 240000,
    "gold": 50000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "defense": 24
    },
    "caiTrangParts": {
      "head": 29,
      "body": 67,
      "leg": 60,
      "bag": -1
    }
  },
  "153": {
    "id": "153",
    "name": "Áo choàng thun",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/942.png",
    "level": 6,
    "strRequire": 720000,
    "gold": 100000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "defense": 40
    },
    "caiTrangParts": {
      "head": 29,
      "body": 67,
      "leg": 60,
      "bag": -1
    }
  },
  "154": {
    "id": "154",
    "name": "Áo vải Pico",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/959.png",
    "level": 7,
    "strRequire": 2200000,
    "gold": 200000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "defense": 60
    },
    "caiTrangParts": {
      "head": 29,
      "body": 75,
      "leg": 60,
      "bag": -1
    }
  },
  "155": {
    "id": "155",
    "name": "Áo da Pico",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/959.png",
    "level": 8,
    "strRequire": 6400000,
    "gold": 500000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "defense": 90
    },
    "caiTrangParts": {
      "head": 29,
      "body": 75,
      "leg": 60,
      "bag": -1
    }
  },
  "156": {
    "id": "156",
    "name": "Quần len cứng",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/943.png",
    "level": 5,
    "strRequire": 200000,
    "gold": 45000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxHp": 600
    },
    "caiTrangParts": {
      "head": 29,
      "body": 59,
      "leg": 68,
      "bag": -1
    }
  },
  "157": {
    "id": "157",
    "name": "Quần thun cứng",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/943.png",
    "level": 6,
    "strRequire": 600000,
    "gold": 90000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxHp": 1200
    },
    "caiTrangParts": {
      "head": 29,
      "body": 59,
      "leg": 68,
      "bag": -1
    }
  },
  "158": {
    "id": "158",
    "name": "Quần vải cứng Pico",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/960.png",
    "level": 7,
    "strRequire": 1800000,
    "gold": 180000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxHp": 2400
    },
    "caiTrangParts": {
      "head": 29,
      "body": 59,
      "leg": 76,
      "bag": -1
    }
  },
  "159": {
    "id": "159",
    "name": "Quần vải mềm Pico",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/960.png",
    "level": 8,
    "strRequire": 5300000,
    "gold": 400000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxHp": 4800
    },
    "caiTrangParts": {
      "head": 29,
      "body": 59,
      "leg": 76,
      "bag": -1
    }
  },
  "160": {
    "id": "160",
    "name": "Găng len cứng",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/948.png",
    "level": 5,
    "strRequire": 800000,
    "gold": 60000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attack": 50
    }
  },
  "161": {
    "id": "161",
    "name": "Găng thun cứng",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/948.png",
    "level": 6,
    "strRequire": 3200000,
    "gold": 120000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attack": 100
    }
  },
  "162": {
    "id": "162",
    "name": "Găng vải Pico",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/961.png",
    "level": 7,
    "strRequire": 10000000,
    "gold": 240000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attack": 200
    }
  },
  "163": {
    "id": "163",
    "name": "Găng da Pico",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/961.png",
    "level": 8,
    "strRequire": 20000000,
    "gold": 600000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attack": 500
    }
  },
  "164": {
    "id": "164",
    "name": "Giày nhựa cứng",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/945.png",
    "level": 5,
    "strRequire": 160000,
    "gold": 30000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxKi": 600
    }
  },
  "165": {
    "id": "165",
    "name": "Giày cao su cứng",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/945.png",
    "level": 6,
    "strRequire": 480000,
    "gold": 70000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxKi": 1500
    }
  },
  "166": {
    "id": "166",
    "name": "Giày da Pico",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/963.png",
    "level": 7,
    "strRequire": 1400000,
    "gold": 150000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxKi": 3000
    }
  },
  "167": {
    "id": "167",
    "name": "Giày sắt Pico",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/963.png",
    "level": 8,
    "strRequire": 4300000,
    "gold": 350000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxKi": 6000
    }
  },
  "168": {
    "id": "168",
    "name": "Áo giáp bạc",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/934.png",
    "level": 5,
    "strRequire": 240000,
    "gold": 50000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "defense": 30
    },
    "caiTrangParts": {
      "head": 28,
      "body": 69,
      "leg": 58,
      "bag": -1
    }
  },
  "169": {
    "id": "169",
    "name": "Áo giáp vàng",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/934.png",
    "level": 6,
    "strRequire": 720000,
    "gold": 100000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "defense": 50
    },
    "caiTrangParts": {
      "head": 28,
      "body": 69,
      "leg": 58,
      "bag": -1
    }
  },
  "170": {
    "id": "170",
    "name": "Áo lông Xayda",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/954.png",
    "level": 7,
    "strRequire": 2200000,
    "gold": 200000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "defense": 70
    },
    "caiTrangParts": {
      "head": 28,
      "body": 73,
      "leg": 58,
      "bag": -1
    }
  },
  "171": {
    "id": "171",
    "name": "Áo khoác Xayda",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/954.png",
    "level": 8,
    "strRequire": 6400000,
    "gold": 500000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "defense": 100
    },
    "caiTrangParts": {
      "head": 28,
      "body": 73,
      "leg": 58,
      "bag": -1
    }
  },
  "172": {
    "id": "172",
    "name": "Quần giáp bạc",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/935.png",
    "level": 5,
    "strRequire": 200000,
    "gold": 45000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxHp": 500
    },
    "caiTrangParts": {
      "head": 28,
      "body": 57,
      "leg": 70,
      "bag": -1
    }
  },
  "173": {
    "id": "173",
    "name": "Quần giáp vàng",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/935.png",
    "level": 6,
    "strRequire": 600000,
    "gold": 90000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxHp": 1000
    },
    "caiTrangParts": {
      "head": 28,
      "body": 57,
      "leg": 70,
      "bag": -1
    }
  },
  "174": {
    "id": "174",
    "name": "Quần lông Xayda",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/955.png",
    "level": 7,
    "strRequire": 1800000,
    "gold": 180000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxHp": 2000
    },
    "caiTrangParts": {
      "head": 28,
      "body": 57,
      "leg": 74,
      "bag": -1
    }
  },
  "175": {
    "id": "175",
    "name": "Quần da Xayda",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/955.png",
    "level": 8,
    "strRequire": 5300000,
    "gold": 400000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxHp": 4000
    },
    "caiTrangParts": {
      "head": 28,
      "body": 57,
      "leg": 74,
      "bag": -1
    }
  },
  "176": {
    "id": "176",
    "name": "Găng bạc",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/946.png",
    "level": 5,
    "strRequire": 800000,
    "gold": 60000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attack": 60
    }
  },
  "177": {
    "id": "177",
    "name": "Găng vàng",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/946.png",
    "level": 6,
    "strRequire": 3200000,
    "gold": 120000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attack": 120
    }
  },
  "178": {
    "id": "178",
    "name": "Găng lông Xayda",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/956.png",
    "level": 7,
    "strRequire": 10000000,
    "gold": 240000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attack": 240
    }
  },
  "179": {
    "id": "179",
    "name": "Găng da Xayda",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/956.png",
    "level": 8,
    "strRequire": 20000000,
    "gold": 600000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attack": 560
    }
  },
  "180": {
    "id": "180",
    "name": "Giày bạc",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/936.png",
    "level": 5,
    "strRequire": 160000,
    "gold": 30000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxKi": 400
    }
  },
  "181": {
    "id": "181",
    "name": "Giày vàng",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/936.png",
    "level": 6,
    "strRequire": 480000,
    "gold": 70000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxKi": 1000
    }
  },
  "182": {
    "id": "182",
    "name": "Giày lông Xayda",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/957.png",
    "level": 7,
    "strRequire": 1400000,
    "gold": 150000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxKi": 2000
    }
  },
  "183": {
    "id": "183",
    "name": "Giày da Xayda",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/957.png",
    "level": 8,
    "strRequire": 4300000,
    "gold": 350000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxKi": 4000
    }
  },
  "184": {
    "id": "184",
    "name": "Rada cấp 5",
    "slot": "rada",
    "type": 4,
    "gender": 3,
    "icon": "icon/1019.png",
    "level": 5,
    "strRequire": 260000,
    "gold": 55000,
    "gem": 0,
    "desc": "Giúp bạn tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 5
    }
  },
  "185": {
    "id": "185",
    "name": "Rada cấp 6",
    "slot": "rada",
    "type": 4,
    "gender": 3,
    "icon": "icon/1020.png",
    "level": 6,
    "strRequire": 780000,
    "gold": 110000,
    "gem": 0,
    "desc": "Giúp bạn tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 6
    }
  },
  "186": {
    "id": "186",
    "name": "Rada cấp 7",
    "slot": "rada",
    "type": 4,
    "gender": 3,
    "icon": "icon/1021.png",
    "level": 7,
    "strRequire": 2300000,
    "gold": 220000,
    "gem": 0,
    "desc": "Giúp bạn tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 7
    }
  },
  "187": {
    "id": "187",
    "name": "Rada cấp 8",
    "slot": "rada",
    "type": 4,
    "gender": 3,
    "icon": "icon/434.png",
    "level": 8,
    "strRequire": 7000000,
    "gold": 550000,
    "gem": 0,
    "desc": "Giúp bạn tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 8
    }
  },
  "188": {
    "id": "188",
    "name": "Vàng",
    "slot": "special",
    "type": 9,
    "gender": 3,
    "icon": "icon/928.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "189": {
    "id": "189",
    "name": "Vàng",
    "slot": "special",
    "type": 9,
    "gender": 3,
    "icon": "icon/929.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "190": {
    "id": "190",
    "name": "Vàng",
    "slot": "special",
    "type": 9,
    "gender": 3,
    "icon": "icon/930.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "191": {
    "id": "191",
    "name": "Cà chua",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/931.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "192": {
    "id": "192",
    "name": "Cà rốt",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/933.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "193": {
    "id": "193",
    "name": "Gói 10 viên Capsule",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/1087.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 3,
    "desc": "Tàu Vận Chuyển",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "194": {
    "id": "194",
    "name": "Viên Capsule đặc biệt",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/1088.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 1000,
    "desc": "Tàu Vận Chuyển VIP dùng không giới hạn số lần",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "195": {
    "id": "195",
    "name": "Siêu thánh thủy",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/1088.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tẩy toàn bộ tiềm năng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "196": {
    "id": "196",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/1383.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 550,
      "body": 551,
      "leg": 552,
      "bag": -1
    }
  },
  "197": {
    "id": "197",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/1380.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 553,
      "body": 551,
      "leg": 552,
      "bag": -1
    }
  },
  "198": {
    "id": "198",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/1379.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 508,
      "body": 509,
      "leg": 510,
      "bag": -1
    }
  },
  "199": {
    "id": "199",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/1378.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "200": {
    "id": "200",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/1381.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "201": {
    "id": "201",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/1382.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "202": {
    "id": "202",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/1377.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "203": {
    "id": "203",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/1387.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "204": {
    "id": "204",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/1385.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "205": {
    "id": "205",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/1389.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "206": {
    "id": "206",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/1384.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "207": {
    "id": "207",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/1386.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "208": {
    "id": "208",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/1388.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "209": {
    "id": "209",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/17.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "210": {
    "id": "210",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/17.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 0,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "211": {
    "id": "211",
    "name": "Nho tím",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/1394.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 10,
    "desc": "Ăn vào hồi phục 100% thể lực",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "212": {
    "id": "212",
    "name": "Nho xanh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/1395.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Ăn vào hồi phục 20% thể lực",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "213": {
    "id": "213",
    "name": "Bùa Trí Tuệ",
    "slot": "special",
    "type": 13,
    "gender": 3,
    "icon": "icon/1403.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 500,
    "desc": "Tiềm năng và sức mạnh của bạn sẽ nhận được gấp đôi trong 1 khoảng thời gian, kể từ lúc mua",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "214": {
    "id": "214",
    "name": "Bùa Mạnh Mẽ",
    "slot": "special",
    "type": 13,
    "gender": 3,
    "icon": "icon/1404.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 500,
    "desc": "Cú đấm của bạn sẽ mạnh hơn. Tăng 150% sức đánh hiện có khi bạn đánh Quái trong 1 khoảng thời gian, kể từ lúc mua",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "215": {
    "id": "215",
    "name": "Bùa Da Trâu",
    "slot": "special",
    "type": 13,
    "gender": 3,
    "icon": "icon/1405.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 250,
    "desc": "Tăng sức chịu đòn cho bạn. Khi bị quái đánh, máu sẽ mất ít hơn, chỉ còn 50% bình thường. Có tác dụng trong 1 khoảng thời gian kể từ lúc mua",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "216": {
    "id": "216",
    "name": "Bùa Oai Hùng",
    "slot": "special",
    "type": 13,
    "gender": 3,
    "icon": "icon/1406.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 700,
    "desc": "Bạn sẽ oai vệ hơn. Quái Thủ Lĩnh sẽ sợ bạn và đánh bạn yếu đi, y như con quái thường. Có tác dụng trong 1 khoảng thời gian kể từ lúc mua",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "217": {
    "id": "217",
    "name": "Bùa Bất Tử",
    "slot": "special",
    "type": 13,
    "gender": 3,
    "icon": "icon/1407.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 700,
    "desc": "Bạn sẽ không bao giờ bị quái đánh chết. Thay vào đó chỉ còn 1 máu. Tuy nhiên bạn phải bơm máu mới có thể đánh lại. Có tác dụng trong 1 khoảng thời gian kể từ lúc mua.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "218": {
    "id": "218",
    "name": "Bùa Dẻo Dai",
    "slot": "special",
    "type": 13,
    "gender": 3,
    "icon": "icon/1408.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 100,
    "desc": "Thể lực của bạn sẽ không bao giờ giảm khi bùa này có tác dụng. Có tác dụng trong 1 khoảng thời gian, kể từ lúc mua",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "219": {
    "id": "219",
    "name": "Bùa Thu Hút",
    "slot": "special",
    "type": 13,
    "gender": 3,
    "icon": "icon/1409.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 250,
    "desc": "Vật phẩm bạn đánh văng ra nếu là của bạn, nó sẽ tự bay vào người. Bạn sẽ không phải nhặt bằng tay. Có tác dụng trong 1 khoảng thời gian, kể từ lúc mua",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "220": {
    "id": "220",
    "name": "Đá lục bảo",
    "slot": "special",
    "type": 14,
    "gender": 3,
    "icon": "icon/1420.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Gặp bà Hạt Mít để sử dụng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "221": {
    "id": "221",
    "name": "Đá Saphia",
    "slot": "special",
    "type": 14,
    "gender": 3,
    "icon": "icon/1419.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Gặp bà Hạt Mít để sử dụng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "222": {
    "id": "222",
    "name": "Đá Ruby",
    "slot": "special",
    "type": 14,
    "gender": 3,
    "icon": "icon/1416.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Gặp bà Hạt Mít để sử dụng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "223": {
    "id": "223",
    "name": "Đá Titan",
    "slot": "special",
    "type": 14,
    "gender": 3,
    "icon": "icon/1417.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Gặp bà Hạt Mít để sử dụng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "224": {
    "id": "224",
    "name": "Đá thạch anh tím",
    "slot": "special",
    "type": 14,
    "gender": 3,
    "icon": "icon/1418.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Gặp bà Hạt Mít để sử dụng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "225": {
    "id": "225",
    "name": "Mảnh đá vụn",
    "slot": "special",
    "type": 15,
    "gender": 3,
    "icon": "icon/1421.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Gặp bà Hạt Mít để sử dụng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "226": {
    "id": "226",
    "name": "Bình nước phép",
    "slot": "special",
    "type": 16,
    "gender": 3,
    "icon": "icon/1422.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 1,
    "desc": "Gặp bà Hạt Mít để sử dụng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "227": {
    "id": "227",
    "name": "Avatar VIP",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/1477.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 127,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "228": {
    "id": "228",
    "name": "Avatar VIP",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/1454.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 128,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "229": {
    "id": "229",
    "name": "Avatar VIP",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/1478.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 126,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "230": {
    "id": "230",
    "name": "Áo bạc Goku",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/1689.png",
    "level": 9,
    "strRequire": 20000000,
    "gold": 2000000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "defense": 200
    },
    "caiTrangParts": {
      "head": 64,
      "body": 155,
      "leg": 58,
      "bag": -1
    }
  },
  "231": {
    "id": "231",
    "name": "Áo vàng Goku",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/1689.png",
    "level": 10,
    "strRequire": 58000000,
    "gold": 5800000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "defense": 250
    },
    "caiTrangParts": {
      "head": 64,
      "body": 155,
      "leg": 58,
      "bag": -1
    }
  },
  "232": {
    "id": "232",
    "name": "Áo da Calic",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/1688.png",
    "level": 11,
    "strRequire": 170000000,
    "gold": 17000000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "defense": 300
    },
    "caiTrangParts": {
      "head": 64,
      "body": 157,
      "leg": 58,
      "bag": -1
    }
  },
  "233": {
    "id": "233",
    "name": "Áo jean Calic",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/1688.png",
    "level": 12,
    "strRequire": 520000000,
    "gold": 52000000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "defense": 400
    },
    "caiTrangParts": {
      "head": 64,
      "body": 157,
      "leg": 58,
      "bag": -1
    }
  },
  "234": {
    "id": "234",
    "name": "Áo sắt Tron",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/1692.png",
    "level": 9,
    "strRequire": 20000000,
    "gold": 2000000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "defense": 200
    },
    "caiTrangParts": {
      "head": 29,
      "body": 149,
      "leg": 60,
      "bag": -1
    }
  },
  "235": {
    "id": "235",
    "name": "Áo đồng Tron",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/1692.png",
    "level": 10,
    "strRequire": 58000000,
    "gold": 5800000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "defense": 250
    },
    "caiTrangParts": {
      "head": 29,
      "body": 149,
      "leg": 60,
      "bag": -1
    }
  },
  "236": {
    "id": "236",
    "name": "Áo bạc Zealot",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/1693.png",
    "level": 11,
    "strRequire": 170000000,
    "gold": 17000000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "defense": 300
    },
    "caiTrangParts": {
      "head": 29,
      "body": 153,
      "leg": 60,
      "bag": -1
    }
  },
  "237": {
    "id": "237",
    "name": "Áo vàng Zealot",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/1693.png",
    "level": 12,
    "strRequire": 520000000,
    "gold": 52000000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "defense": 400
    },
    "caiTrangParts": {
      "head": 29,
      "body": 153,
      "leg": 60,
      "bag": -1
    }
  },
  "238": {
    "id": "238",
    "name": "Áo lông đỏ",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/1690.png",
    "level": 9,
    "strRequire": 20000000,
    "gold": 2000000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "defense": 230
    },
    "caiTrangParts": {
      "head": 28,
      "body": 147,
      "leg": 58,
      "bag": -1
    }
  },
  "239": {
    "id": "239",
    "name": "Áo siêu xayda",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/1690.png",
    "level": 10,
    "strRequire": 58000000,
    "gold": 5800000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "defense": 280
    },
    "caiTrangParts": {
      "head": 28,
      "body": 147,
      "leg": 58,
      "bag": -1
    }
  },
  "240": {
    "id": "240",
    "name": "Áo Kaio",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/1691.png",
    "level": 11,
    "strRequire": 170000000,
    "gold": 17000000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "defense": 330
    },
    "caiTrangParts": {
      "head": 28,
      "body": 151,
      "leg": 58,
      "bag": -1
    }
  },
  "241": {
    "id": "241",
    "name": "Áo lưỡng long",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/1691.png",
    "level": 12,
    "strRequire": 520000000,
    "gold": 52000000,
    "gem": 0,
    "desc": "Giúp bạn giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "defense": 450
    },
    "caiTrangParts": {
      "head": 28,
      "body": 151,
      "leg": 58,
      "bag": -1
    }
  },
  "242": {
    "id": "242",
    "name": "Quần bạc Goku",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/1695.png",
    "level": 9,
    "strRequire": 20000000,
    "gold": 2000000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxHp": 14000
    },
    "caiTrangParts": {
      "head": 64,
      "body": 57,
      "leg": 156,
      "bag": -1
    }
  },
  "243": {
    "id": "243",
    "name": "Quần vàng Goku",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/1695.png",
    "level": 10,
    "strRequire": 58000000,
    "gold": 5800000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxHp": 18000
    },
    "caiTrangParts": {
      "head": 64,
      "body": 57,
      "leg": 156,
      "bag": -1
    }
  },
  "244": {
    "id": "244",
    "name": "Quần da Calic",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/1694.png",
    "level": 11,
    "strRequire": 170000000,
    "gold": 17000000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxHp": 22000
    },
    "caiTrangParts": {
      "head": 64,
      "body": 57,
      "leg": 158,
      "bag": -1
    }
  },
  "245": {
    "id": "245",
    "name": "Quần jean Calic",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/1694.png",
    "level": 12,
    "strRequire": 520000000,
    "gold": 52000000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxHp": 26000
    },
    "caiTrangParts": {
      "head": 64,
      "body": 57,
      "leg": 158,
      "bag": -1
    }
  },
  "246": {
    "id": "246",
    "name": "Quần sắt Tron",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/1698.png",
    "level": 9,
    "strRequire": 20000000,
    "gold": 2000000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxHp": 13000
    },
    "caiTrangParts": {
      "head": 29,
      "body": 59,
      "leg": 150,
      "bag": -1
    }
  },
  "247": {
    "id": "247",
    "name": "Quần đồng Tron",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/1698.png",
    "level": 10,
    "strRequire": 58000000,
    "gold": 5800000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxHp": 17000
    },
    "caiTrangParts": {
      "head": 29,
      "body": 59,
      "leg": 150,
      "bag": -1
    }
  },
  "248": {
    "id": "248",
    "name": "Quần bạc Zealot",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/1699.png",
    "level": 11,
    "strRequire": 170000000,
    "gold": 17000000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxHp": 21000
    },
    "caiTrangParts": {
      "head": 29,
      "body": 59,
      "leg": 154,
      "bag": -1
    }
  },
  "249": {
    "id": "249",
    "name": "Quần vàng Zealot",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/1699.png",
    "level": 12,
    "strRequire": 520000000,
    "gold": 52000000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxHp": 25000
    },
    "caiTrangParts": {
      "head": 29,
      "body": 59,
      "leg": 154,
      "bag": -1
    }
  },
  "250": {
    "id": "250",
    "name": "Quần lông đỏ",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/1696.png",
    "level": 9,
    "strRequire": 20000000,
    "gold": 2000000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxHp": 12000
    },
    "caiTrangParts": {
      "head": 28,
      "body": 57,
      "leg": 148,
      "bag": -1
    }
  },
  "251": {
    "id": "251",
    "name": "Quần siêu Xayda",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/1696.png",
    "level": 10,
    "strRequire": 58000000,
    "gold": 5800000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxHp": 16000
    },
    "caiTrangParts": {
      "head": 28,
      "body": 57,
      "leg": 148,
      "bag": -1
    }
  },
  "252": {
    "id": "252",
    "name": "Quần Kaio",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/1697.png",
    "level": 11,
    "strRequire": 170000000,
    "gold": 17000000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxHp": 20000
    },
    "caiTrangParts": {
      "head": 28,
      "body": 57,
      "leg": 152,
      "bag": -1
    }
  },
  "253": {
    "id": "253",
    "name": "Quần lưỡng long",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/1697.png",
    "level": 12,
    "strRequire": 520000000,
    "gold": 52000000,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxHp": 24000
    },
    "caiTrangParts": {
      "head": 28,
      "body": 57,
      "leg": 152,
      "bag": -1
    }
  },
  "254": {
    "id": "254",
    "name": "Găng bạc Goku",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/1707.png",
    "level": 9,
    "strRequire": 68000000,
    "gold": 6800000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attack": 680
    }
  },
  "255": {
    "id": "255",
    "name": "Găng vàng Goku",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/1707.png",
    "level": 10,
    "strRequire": 200000000,
    "gold": 20000000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attack": 1000
    }
  },
  "256": {
    "id": "256",
    "name": "Găng da Calic",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/1706.png",
    "level": 11,
    "strRequire": 600000000,
    "gold": 60000000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attack": 1500
    }
  },
  "257": {
    "id": "257",
    "name": "Găng jean Calic",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/1706.png",
    "level": 12,
    "strRequire": 1500000000,
    "gold": 150000000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attack": 2200
    }
  },
  "258": {
    "id": "258",
    "name": "Găng sắt Tron",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/1711.png",
    "level": 9,
    "strRequire": 68000000,
    "gold": 6800000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attack": 630
    }
  },
  "259": {
    "id": "259",
    "name": "Găng đồng Tron",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/1711.png",
    "level": 10,
    "strRequire": 200000000,
    "gold": 20000000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attack": 950
    }
  },
  "260": {
    "id": "260",
    "name": "Găng bạc Zealot",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/1710.png",
    "level": 11,
    "strRequire": 600000000,
    "gold": 60000000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attack": 1450
    }
  },
  "261": {
    "id": "261",
    "name": "Găng vàng Zealot",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/1710.png",
    "level": 12,
    "strRequire": 1500000000,
    "gold": 150000000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attack": 2150
    }
  },
  "262": {
    "id": "262",
    "name": "Găng lông đỏ",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/1708.png",
    "level": 9,
    "strRequire": 68000000,
    "gold": 6800000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attack": 700
    }
  },
  "263": {
    "id": "263",
    "name": "Găng siêu Xayda",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/1708.png",
    "level": 10,
    "strRequire": 200000000,
    "gold": 20000000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attack": 1050
    }
  },
  "264": {
    "id": "264",
    "name": "Găng Kaio",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/1709.png",
    "level": 11,
    "strRequire": 600000000,
    "gold": 60000000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attack": 1550
    }
  },
  "265": {
    "id": "265",
    "name": "Găng lưỡng long",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/1709.png",
    "level": 12,
    "strRequire": 1500000000,
    "gold": 150000000,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attack": 2250
    }
  },
  "266": {
    "id": "266",
    "name": "Giày bạc Goku",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/1701.png",
    "level": 9,
    "strRequire": 13000000,
    "gold": 1300000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxKi": 9000
    }
  },
  "267": {
    "id": "267",
    "name": "Giày vàng Goku",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/1701.png",
    "level": 10,
    "strRequire": 38000000,
    "gold": 3800000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxKi": 14000
    }
  },
  "268": {
    "id": "268",
    "name": "Giày da Calic",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/1700.png",
    "level": 11,
    "strRequire": 120000000,
    "gold": 12000000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxKi": 19000
    }
  },
  "269": {
    "id": "269",
    "name": "Giày jean Calic",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/1700.png",
    "level": 12,
    "strRequire": 340000000,
    "gold": 34000000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "maxKi": 24000
    }
  },
  "270": {
    "id": "270",
    "name": "Giày sắt Tron",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/1704.png",
    "level": 9,
    "strRequire": 13000000,
    "gold": 1300000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxKi": 10000
    }
  },
  "271": {
    "id": "271",
    "name": "Giày đồng Tron",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/1704.png",
    "level": 10,
    "strRequire": 38000000,
    "gold": 3800000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxKi": 15000
    }
  },
  "272": {
    "id": "272",
    "name": "Giày bạc Zealot",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/1705.png",
    "level": 11,
    "strRequire": 120000000,
    "gold": 12000000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxKi": 20000
    }
  },
  "273": {
    "id": "273",
    "name": "Giày vàng Zealot",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/1705.png",
    "level": 12,
    "strRequire": 340000000,
    "gold": 34000000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "maxKi": 25000
    }
  },
  "274": {
    "id": "274",
    "name": "Giày lông đỏ",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/1702.png",
    "level": 9,
    "strRequire": 13000000,
    "gold": 1300000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxKi": 8000
    }
  },
  "275": {
    "id": "275",
    "name": "Giày siêu Xayda",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/1702.png",
    "level": 10,
    "strRequire": 38000000,
    "gold": 3800000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxKi": 13000
    }
  },
  "276": {
    "id": "276",
    "name": "Giày Kaio",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/1703.png",
    "level": 11,
    "strRequire": 120000000,
    "gold": 12000000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxKi": 18000
    }
  },
  "277": {
    "id": "277",
    "name": "Giày lưỡng long",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/1703.png",
    "level": 12,
    "strRequire": 340000000,
    "gold": 34000000,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "maxKi": 23000
    }
  },
  "278": {
    "id": "278",
    "name": "Rada cấp 9",
    "slot": "rada",
    "type": 4,
    "gender": 3,
    "icon": "icon/1712.png",
    "level": 9,
    "strRequire": 42000000,
    "gold": 4200000,
    "gem": 0,
    "desc": "Giúp bạn tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 9
    }
  },
  "279": {
    "id": "279",
    "name": "Rada cấp 10",
    "slot": "rada",
    "type": 4,
    "gender": 3,
    "icon": "icon/1712.png",
    "level": 10,
    "strRequire": 200000000,
    "gold": 20000000,
    "gem": 0,
    "desc": "Giúp bạn tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 10
    }
  },
  "280": {
    "id": "280",
    "name": "Rada cấp 11",
    "slot": "rada",
    "type": 4,
    "gender": 3,
    "icon": "icon/1713.png",
    "level": 11,
    "strRequire": 1000000000,
    "gold": 100000000,
    "gem": 0,
    "desc": "Giúp bạn tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 11
    }
  },
  "281": {
    "id": "281",
    "name": "Rada cấp 12",
    "slot": "rada",
    "type": 4,
    "gender": 3,
    "icon": "icon/1713.png",
    "level": 12,
    "strRequire": 1500000000,
    "gold": 150000000,
    "gem": 0,
    "desc": "Giúp bạn tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 12
    }
  },
  "282": {
    "id": "282",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/2127.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 500,
    "desc": "Cải trang thành Thần Vũ Trụ",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 10
    },
    "caiTrangParts": {
      "head": 98,
      "body": 99,
      "leg": 100,
      "bag": -1
    }
  },
  "283": {
    "id": "283",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/2128.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 200,
    "desc": "Cải trang thành Yarirobe",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 10
    },
    "caiTrangParts": {
      "head": 77,
      "body": 78,
      "leg": 79,
      "bag": -1
    }
  },
  "284": {
    "id": "284",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/1210.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 500,
    "desc": "Cải trang thành Tàu Pảy Pảy",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 10
    },
    "caiTrangParts": {
      "head": 92,
      "body": 93,
      "leg": 94,
      "bag": -1
    }
  },
  "285": {
    "id": "285",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/2126.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 1000,
    "desc": "Cải trang thành Thần Mèo Karin",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 10
    },
    "caiTrangParts": {
      "head": 89,
      "body": 90,
      "leg": 91,
      "bag": -1
    }
  },
  "286": {
    "id": "286",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/2129.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 200,
    "desc": "Cải trang thành Thượng Đế",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 10
    },
    "caiTrangParts": {
      "head": 86,
      "body": 87,
      "leg": 88,
      "bag": -1
    }
  },
  "287": {
    "id": "287",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/2133.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 500,
    "desc": "Cải trang thành Pôpô",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 10
    },
    "caiTrangParts": {
      "head": 83,
      "body": 84,
      "leg": 85,
      "bag": -1
    }
  },
  "288": {
    "id": "288",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/2137.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 200,
    "desc": "Cải trang thành Kuku",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "crit": 2
    },
    "caiTrangParts": {
      "head": 159,
      "body": 160,
      "leg": 161,
      "bag": -1
    }
  },
  "289": {
    "id": "289",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/2125.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 300,
    "desc": "Cải trang thành Rambô",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "crit": 2
    },
    "caiTrangParts": {
      "head": 162,
      "body": 163,
      "leg": 164,
      "bag": -1
    }
  },
  "290": {
    "id": "290",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2124.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 300,
    "desc": "Cải trang thành Số 2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 2,
      "attackPercent": 12
    },
    "caiTrangParts": {
      "head": 171,
      "body": 172,
      "leg": 173,
      "bag": -1
    }
  },
  "291": {
    "id": "291",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/2131.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 500,
    "desc": "Cải trang thành Ninja Áo Tím",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 10
    },
    "caiTrangParts": {
      "head": 123,
      "body": 124,
      "leg": 125,
      "bag": -1
    }
  },
  "292": {
    "id": "292",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2123.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 300,
    "desc": "Cải trang thành Số 3",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 2,
      "attackPercent": 12
    },
    "caiTrangParts": {
      "head": 174,
      "body": 175,
      "leg": 176,
      "bag": -1
    }
  },
  "293": {
    "id": "293",
    "name": "Gói 30 đậu thần cấp 1",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 10,
    "desc": "Gói 30 đậu thần cấp 1",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "294": {
    "id": "294",
    "name": "Gói 30 đậu thần cấp 2",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Gói 30 đậu thần cấp 2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "295": {
    "id": "295",
    "name": "Gói 30 đậu thần cấp 3",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Gói 30 đậu thần cấp 3",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "296": {
    "id": "296",
    "name": "Gói 30 đậu thần cấp 4",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Gói 30 đậu thần cấp 4",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "297": {
    "id": "297",
    "name": "Gói 30 đậu thần cấp 5",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 10,
    "desc": "Gói 30 đậu thần cấp 5",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "298": {
    "id": "298",
    "name": "Gói 30 đậu thần cấp 6",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 10,
    "desc": "Gói 30 đậu thần cấp 6",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "299": {
    "id": "299",
    "name": "Gói 30 đậu thần cấp 7",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 10,
    "desc": "Gói 30 đậu thần cấp 7",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "300": {
    "id": "300",
    "name": "Kaioken lv1",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/716.png",
    "level": 1,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 40,
    "desc": "học kỹ năng Kaioken",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 160
    }
  },
  "301": {
    "id": "301",
    "name": "Kaioken lv2",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/716.png",
    "level": 2,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 50,
    "desc": "nâng Kaioken lên cấp 2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 170
    }
  },
  "302": {
    "id": "302",
    "name": "Kaioken lv3",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/716.png",
    "level": 3,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 60,
    "desc": "nâng Kaioken lên cấp 3",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 180
    }
  },
  "303": {
    "id": "303",
    "name": "Kaioken lv4",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/716.png",
    "level": 4,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 70,
    "desc": "nâng Kaioken lên cấp 4",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 190
    }
  },
  "304": {
    "id": "304",
    "name": "Kaioken lv5",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/716.png",
    "level": 5,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 80,
    "desc": "nâng Kaioken lên cấp 5",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 200
    }
  },
  "305": {
    "id": "305",
    "name": "Kaioken lv6",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/716.png",
    "level": 6,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 90,
    "desc": "nâng Kaioken lên cấp 6",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 210
    }
  },
  "306": {
    "id": "306",
    "name": "Kaioken lv7",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/716.png",
    "level": 7,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 100,
    "desc": "nâng Kaioken lên cấp 7",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 220
    }
  },
  "307": {
    "id": "307",
    "name": "Quả cầu Kênh Khi lv1",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/717.png",
    "level": 1,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 100,
    "desc": "học kỹ năng Quả Cầu Kênh Khi",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "308": {
    "id": "308",
    "name": "Quả cầu Kênh Khi lv2",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/717.png",
    "level": 2,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 120,
    "desc": "nâng Quả Cầu Kênh Khi lên cấp 2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "309": {
    "id": "309",
    "name": "Quả cầu Kênh Khi lv3",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/717.png",
    "level": 3,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 140,
    "desc": "nâng Quả Cầu Kênh Khi lên cấp 3",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "310": {
    "id": "310",
    "name": "Quả cầu Kênh Khi lv4",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/717.png",
    "level": 4,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 160,
    "desc": "nâng Quả Cầu Kênh Khi lên cấp 4",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "311": {
    "id": "311",
    "name": "Quả cầu Kênh Khi lv5",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/717.png",
    "level": 5,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 180,
    "desc": "nâng Quả Cầu Kênh Khi lên cấp 5",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "312": {
    "id": "312",
    "name": "Quả cầu Kênh Khi lv6",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/717.png",
    "level": 6,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 200,
    "desc": "nâng Quả Cầu Kênh Khi lên cấp 6",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "313": {
    "id": "313",
    "name": "Quả cầu Kênh Khi lv7",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/717.png",
    "level": 7,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 220,
    "desc": "nâng Quả Cầu Kênh Khi lên cấp 7",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "314": {
    "id": "314",
    "name": "Hóa khỉ khổng lồ lv1",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/718.png",
    "level": 1,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 100,
    "desc": "học kỹ năng hóa thành khỉ khổng lồ",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 40
    },
    "caitrangKey": "khi_7"
  },
  "315": {
    "id": "315",
    "name": "Hóa khỉ khổng lồ lv2",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/718.png",
    "level": 2,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 120,
    "desc": "nâng hóa khỉ khổng lồ lên cấp 2",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 50
    },
    "caitrangKey": "khi_7"
  },
  "316": {
    "id": "316",
    "name": "Hóa khỉ khổng lồ lv3",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/718.png",
    "level": 3,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 140,
    "desc": "nâng hóa khỉ khổng lồ lên cấp 3",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 60
    },
    "caitrangKey": "khi_7"
  },
  "317": {
    "id": "317",
    "name": "Hóa khỉ khổng lồ lv4",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/718.png",
    "level": 4,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 160,
    "desc": "nâng hóa khỉ khổng lồ lên cấp 4",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 70
    },
    "caitrangKey": "khi_7"
  },
  "318": {
    "id": "318",
    "name": "Hóa khỉ khổng lồ lv5",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/718.png",
    "level": 5,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 170,
    "desc": "nâng hóa khỉ khổng lồ lên cấp 5",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 80
    },
    "caitrangKey": "khi_7"
  },
  "319": {
    "id": "319",
    "name": "Hóa khỉ khổng lồ lv6",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/718.png",
    "level": 6,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 180,
    "desc": "nâng hóa khỉ khổng lồ lên cấp 6",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 90
    },
    "caitrangKey": "khi_7"
  },
  "320": {
    "id": "320",
    "name": "Hóa khỉ khổng lồ lv7",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/718.png",
    "level": 7,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 200,
    "desc": "nâng hóa khỉ khổng lồ lên cấp 7",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 100
    },
    "caitrangKey": "khi_7"
  },
  "321": {
    "id": "321",
    "name": "Bom hi sinh lv1",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/2248.png",
    "level": 1,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 40,
    "desc": "học kỹ năng bom hi sinh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "322": {
    "id": "322",
    "name": "Bom hi sinh lv2",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/2248.png",
    "level": 2,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 50,
    "desc": "nâng bom hi sinh lên cấp 2",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "323": {
    "id": "323",
    "name": "Bom hi sinh lv3",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/2248.png",
    "level": 3,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 60,
    "desc": "nâng bom hi sinh lên cấp 3",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "324": {
    "id": "324",
    "name": "Bom hi sinh lv4",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/2248.png",
    "level": 4,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 70,
    "desc": "nâng bom hi sinh lên cấp 4",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "325": {
    "id": "325",
    "name": "Bom hi sinh lv5",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/2248.png",
    "level": 5,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 80,
    "desc": "nâng bom hi sinh lên cấp 5",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "326": {
    "id": "326",
    "name": "Bom hi sinh lv6",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/2248.png",
    "level": 6,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 90,
    "desc": "nâng bom hi sinh lên cấp 6",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "327": {
    "id": "327",
    "name": "Bom hi sinh lv7",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/2248.png",
    "level": 7,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 100,
    "desc": "nâng bom hi sinh lên cấp 7",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "328": {
    "id": "328",
    "name": "Makankosappo lv1",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/723.png",
    "level": 1,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 100,
    "desc": "học kỹ năng Makankosappo",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "329": {
    "id": "329",
    "name": "Makankosappo lv2",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/723.png",
    "level": 2,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 120,
    "desc": "nâng Makankosappo lên cấp 2",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "330": {
    "id": "330",
    "name": "Makankosappo lv3",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/723.png",
    "level": 3,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 140,
    "desc": "nâng Makankosappo lên cấp 3",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "331": {
    "id": "331",
    "name": "Makankosappo lv4",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/723.png",
    "level": 4,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 160,
    "desc": "nâng Makankosappo lên cấp 4",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "332": {
    "id": "332",
    "name": "Makankosappo lv5",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/723.png",
    "level": 5,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 180,
    "desc": "nâng Makankosappo lên cấp 5",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "333": {
    "id": "333",
    "name": "Makankosappo lv6",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/723.png",
    "level": 6,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 200,
    "desc": "nâng Makankosappo lên cấp 6",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "334": {
    "id": "334",
    "name": "Makankosappo lv7",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/723.png",
    "level": 7,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 220,
    "desc": "nâng Makankosappo lên cấp 7",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "335": {
    "id": "335",
    "name": "Đẻ trứng lv1",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/722.png",
    "level": 1,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 60,
    "desc": "học kỹ năng đẻ trứng",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "336": {
    "id": "336",
    "name": "Đẻ trứng lv2",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/722.png",
    "level": 2,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 70,
    "desc": "nâng đẻ trứng lên cấp 2",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "337": {
    "id": "337",
    "name": "Đẻ trứng lv3",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/722.png",
    "level": 3,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 80,
    "desc": "nâng đẻ trứng lên cấp 3",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "338": {
    "id": "338",
    "name": "Đẻ trứng lv4",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/722.png",
    "level": 4,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 90,
    "desc": "nâng đẻ trứng lên cấp 4",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "339": {
    "id": "339",
    "name": "Đẻ trứng lv5",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/722.png",
    "level": 5,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 100,
    "desc": "nâng đẻ trứng lên cấp 5",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "340": {
    "id": "340",
    "name": "Đẻ trứng lv6",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/722.png",
    "level": 6,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 110,
    "desc": "nâng đẻ trứng lên cấp 6",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "341": {
    "id": "341",
    "name": "Đẻ trứng lv7",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/722.png",
    "level": 7,
    "strRequire": 10000000,
    "gold": 0,
    "gem": 120,
    "desc": "nâng đẻ trứng lên cấp 7",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "342": {
    "id": "342",
    "name": "Vệ tinh trí lực",
    "slot": "special",
    "type": 22,
    "gender": 3,
    "icon": "icon/2265.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Hỗ trợ chiến đấu cho cá nhân và bang hội trong 30 phút trong phạm vi quỹ đạo của Vệ Tinh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "343": {
    "id": "343",
    "name": "Vệ tinh trí tuệ",
    "slot": "special",
    "type": 22,
    "gender": 3,
    "icon": "icon/2266.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Hỗ trợ chiến đấu cho cá nhân và bang hội trong 30 phút trong phạm vi quỹ đạo của Vệ Tinh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "344": {
    "id": "344",
    "name": "Vệ tinh phòng thủ",
    "slot": "special",
    "type": 22,
    "gender": 3,
    "icon": "icon/2267.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Hỗ trợ chiến đấu cho cá nhân và bang hội trong 30 phút trong phạm vi quỹ đạo của Vệ Tinh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "345": {
    "id": "345",
    "name": "Vệ tinh sinh lực",
    "slot": "special",
    "type": 22,
    "gender": 3,
    "icon": "icon/2264.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Hỗ trợ chiến đấu cho cá nhân và bang hội trong 30 phút trong phạm vi quỹ đạo của Vệ Tinh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "346": {
    "id": "346",
    "name": "Cân đẩu vân",
    "slot": "special",
    "type": 23,
    "gender": 0,
    "icon": "icon/2273.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "Bay không tốn KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "347": {
    "id": "347",
    "name": "Phi Long",
    "slot": "special",
    "type": 23,
    "gender": 1,
    "icon": "icon/2277.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "Bay không tốn KI",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "348": {
    "id": "348",
    "name": "Ván bay",
    "slot": "special",
    "type": 23,
    "gender": 2,
    "icon": "icon/2275.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "Bay không tốn KI",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "349": {
    "id": "349",
    "name": "Cân đẩu vân VIP",
    "slot": "special",
    "type": 24,
    "gender": 0,
    "icon": "icon/2274.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 500,
    "desc": "Bay phục hồi KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "350": {
    "id": "350",
    "name": "Phi Long VIP",
    "slot": "special",
    "type": 24,
    "gender": 1,
    "icon": "icon/2278.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 500,
    "desc": "Bay phục hồi KI",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "351": {
    "id": "351",
    "name": "Ván bay VIP",
    "slot": "special",
    "type": 24,
    "gender": 2,
    "icon": "icon/2276.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 500,
    "desc": "Bay phục hồi KI",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "352": {
    "id": "352",
    "name": "Đậu thần cấp 8",
    "slot": "consumable",
    "type": 6,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 8,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Thức ăn phục hồi HP và KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "353": {
    "id": "353",
    "name": "Ngọc Rồng Namek 1 Sao",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2280.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tập họp đủ 7 viên để ước",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "354": {
    "id": "354",
    "name": "Ngọc Rồng Namek 2 Sao",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2281.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tập họp đủ 7 viên để ước",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "355": {
    "id": "355",
    "name": "Ngọc Rồng Namek 3 Sao",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2282.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tập họp đủ 7 viên để ước",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "356": {
    "id": "356",
    "name": "Ngọc Rồng Namek 4 Sao",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2283.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tập họp đủ 7 viên để ước",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "357": {
    "id": "357",
    "name": "Ngọc Rồng Namek 5 Sao",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2284.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tập họp đủ 7 viên để ước",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "358": {
    "id": "358",
    "name": "Ngọc Rồng Namek 6 Sao",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2285.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tập họp đủ 7 viên để ước",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "359": {
    "id": "359",
    "name": "Ngọc Rồng Namek 7 Sao",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2286.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tập họp đủ 7 viên để ước",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "360": {
    "id": "360",
    "name": "Ngọc Rồng Namek",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2287.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tập họp đủ 7 viên để ước",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "361": {
    "id": "361",
    "name": "Gói 10 Rađa dò ngọc",
    "slot": "special",
    "type": 25,
    "gender": 3,
    "icon": "icon/2295.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 5,
    "desc": "Máy dò ngọc rồng Namếc",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "362": {
    "id": "362",
    "name": "Hóa thạch Ngọc Rồng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2288.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Hóa thạch Ngọc Rồng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "363": {
    "id": "363",
    "name": "Tháo cờ",
    "slot": "bua",
    "type": 28,
    "gender": 3,
    "icon": "icon/2761.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tắt PK đồ sát",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "364": {
    "id": "364",
    "name": "Cờ xanh",
    "slot": "bua",
    "type": 28,
    "gender": 3,
    "icon": "icon/2330.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bật PK đồ sát các màu cờ khác",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "365": {
    "id": "365",
    "name": "Cờ đỏ",
    "slot": "bua",
    "type": 28,
    "gender": 3,
    "icon": "icon/2323.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bật để PK đồ sát các màu cờ khác",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "366": {
    "id": "366",
    "name": "Cờ tím",
    "slot": "bua",
    "type": 28,
    "gender": 3,
    "icon": "icon/2327.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bật để PK đồ sát các màu cờ khác",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "367": {
    "id": "367",
    "name": "Cờ vàng",
    "slot": "bua",
    "type": 28,
    "gender": 3,
    "icon": "icon/2326.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bật để PK đồ sát các màu cờ khác",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "368": {
    "id": "368",
    "name": "Cờ lục",
    "slot": "bua",
    "type": 28,
    "gender": 3,
    "icon": "icon/2324.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bật để PK đồ sát các màu cờ khác",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "369": {
    "id": "369",
    "name": "Cờ hồng",
    "slot": "bua",
    "type": 28,
    "gender": 3,
    "icon": "icon/2329.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bật để PK đồ sát các màu cờ khác",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "370": {
    "id": "370",
    "name": "Cờ cam",
    "slot": "bua",
    "type": 28,
    "gender": 3,
    "icon": "icon/2328.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bật để PK đồ sát các màu cờ khác",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "371": {
    "id": "371",
    "name": "Cờ xám",
    "slot": "bua",
    "type": 28,
    "gender": 3,
    "icon": "icon/2331.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bật để PK đồ sát tất cả",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "372": {
    "id": "372",
    "name": "Ngọc rồng 1 sao đen",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2315.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "+15% sức đánh cho toàn bang",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "373": {
    "id": "373",
    "name": "Ngọc rồng 2 sao đen",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2316.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "+20% HP và KI tối đa cho toàn bang",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "374": {
    "id": "374",
    "name": "Ngọc rồng 3 sao đen",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2317.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Mỗi giờ 10 hạt đậu thần cấp 8 cho toàn bang",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "375": {
    "id": "375",
    "name": "Ngọc rồng 4 sao đen",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2318.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Mỗi giờ 1 bùa 1h ngẫu nhiên cho toàn bang",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "376": {
    "id": "376",
    "name": "Ngọc rồng 5 sao đen",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2319.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Mỗi giờ 3 ngọc nâng cấp ngẫu nhiên cho toàn bang",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "377": {
    "id": "377",
    "name": "Ngọc rồng 6 sao đen",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2320.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Mỗi giờ 200.000 vàng cho toàn bang",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "378": {
    "id": "378",
    "name": "Ngọc rồng 7 sao đen",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/2321.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Mỗi giờ 2 ngọc cho toàn bang",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "379": {
    "id": "379",
    "name": "Máy dò Capsule kì bí",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/2758.png",
    "level": 1,
    "strRequire": 0,
    "gold": 50000000,
    "gem": 0,
    "desc": "Dùng để tìm kiếm Capsule kì bí ở tương lai",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "380": {
    "id": "380",
    "name": "Viên Capsule kì bí",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/2759.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bên trong ẩn chứa nhiều thứ bí ẩn",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "381": {
    "id": "381",
    "name": "Cuồng nộ",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/2754.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Trong vòng tối đa 10 phút +100% sức đánh gốc",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "382": {
    "id": "382",
    "name": "Bổ huyết",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/2755.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Trong vòng tối đa 10 phút +100% HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "383": {
    "id": "383",
    "name": "Bổ khí",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/2756.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Trong vòng tối đa 10 phút +100% KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "384": {
    "id": "384",
    "name": "Giáp Xên bọ hung",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/2757.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Trong vòng tối đa 10 phút giảm 50% sát thương ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "385": {
    "id": "385",
    "name": "Ẩn danh",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/2760.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Khi bạn cần sự riêng tư +10 phút (tối đa 30 phút) hạ địch không để lại tên trong danh sách kẻ thù và không cho phép người khác dịch chuyển tức thời đến",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 89,
      "body": 90,
      "leg": 91,
      "bag": -1
    }
  },
  "386": {
    "id": "386",
    "name": "Nón Noel Xám",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/2782.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất khi sự kiện kết thúc",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 277,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "387": {
    "id": "387",
    "name": "Nón Noel Đỏ",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/2783.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất khi sự kiện kết thúc",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "388": {
    "id": "388",
    "name": "Nón Noel Xanh",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/2781.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất khi sự kiện kết thúc",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 278,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "389": {
    "id": "389",
    "name": "Nón Noel Xám",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/2785.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất khi sự kiện kết thúc",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 274,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "390": {
    "id": "390",
    "name": "Nón Noel Đỏ",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/2786.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất khi sự kiện kết thúc",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 273,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "391": {
    "id": "391",
    "name": "Nón Noel Xanh",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/2766.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất khi sự kiện kết thúc",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 275,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "392": {
    "id": "392",
    "name": "Nón Noel Xám",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/2788.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất khi sự kiện kết thúc",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 280,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "393": {
    "id": "393",
    "name": "Nón Noel Đỏ",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/2780.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất khi sự kiện kết thúc",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 279,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "394": {
    "id": "394",
    "name": "Nón Noel Xanh",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/2787.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất khi sự kiện kết thúc",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 281,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "395": {
    "id": "395",
    "name": "Nhân vật bí ẩn",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/2760.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, hết hạn vào ngày 28/2 (tự động xóa)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "396": {
    "id": "396",
    "name": "Thú cưỡi cực VIP",
    "slot": "special",
    "type": 24,
    "gender": 3,
    "icon": "icon/10665.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để bay phục hồi HP, KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "397": {
    "id": "397",
    "name": "Hộp quà tết",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/2987.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, hết hạn vào ngày 28/2 (tự động xóa)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "398": {
    "id": "398",
    "name": "Hộp quà tết",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/2987.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, hết hạn vào ngày 28/2 (tự động xóa)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "399": {
    "id": "399",
    "name": "Thiệp chúc tết",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/2988.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "401": {
    "id": "401",
    "name": "Đổi đệ tử",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/737.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 100,
    "desc": "Đổi đệ tử khác hoàn toàn mới",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "402": {
    "id": "402",
    "name": "Nâng kỹ năng 1 đệ tử",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7098.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 100,
    "desc": "Nâng chiêu 1 của đệ tử lên 1 cấp",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "403": {
    "id": "403",
    "name": "Nâng kỹ năng 2 đệ tử",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7099.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 150,
    "desc": "Nâng chiêu 2 của đệ tử lên 1 cấp",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "404": {
    "id": "404",
    "name": "Nâng kỹ năng 3 đệ tử",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7100.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 200,
    "desc": "Nâng chiêu 3 của đệ tử lên 1 cấp",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "405": {
    "id": "405",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2026.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 1000,
    "desc": "Cải trang thành Fide cấp 1",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 10
    },
    "caiTrangParts": {
      "head": 183,
      "body": 184,
      "leg": 185,
      "bag": -1
    }
  },
  "406": {
    "id": "406",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2057.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 1100,
    "desc": "Cải trang thành Fide cấp 2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 11
    },
    "caiTrangParts": {
      "head": 186,
      "body": 187,
      "leg": 188,
      "bag": -1
    }
  },
  "407": {
    "id": "407",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2088.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 1200,
    "desc": "Cải trang thành Fide cấp 3",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 12
    },
    "caiTrangParts": {
      "head": 189,
      "body": 190,
      "leg": 191,
      "bag": -1
    }
  },
  "408": {
    "id": "408",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3047.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Chi Chi, hết hạn vào 1/5/2016 (tự xóa)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "409": {
    "id": "409",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3045.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Bum ma, hết hạn vào 1/7/2016 (tự xóa)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "410": {
    "id": "410",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3014.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Lý Tiểu Nương, hết hạn vào 1/9/2016 (tự xóa)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "411": {
    "id": "411",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2467.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Póc, hết hạn vào 1/12/2016 (tự xóa)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "412": {
    "id": "412",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/19.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 64,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "413": {
    "id": "413",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/266.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 30,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "414": {
    "id": "414",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/268.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 31,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "415": {
    "id": "415",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/121.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 9,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "416": {
    "id": "416",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/263.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 29,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "417": {
    "id": "417",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/271.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 32,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "418": {
    "id": "418",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/91.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 6,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "419": {
    "id": "419",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/259.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 27,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "420": {
    "id": "420",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/261.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 28,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "421": {
    "id": "421",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3099.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Sơn Tinh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 314,
      "body": 315,
      "leg": 316,
      "bag": -1
    }
  },
  "422": {
    "id": "422",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3069.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Thủy Tinh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 311,
      "body": 312,
      "leg": 313,
      "bag": -1
    }
  },
  "423": {
    "id": "423",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3390.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "Cải trang thành Bujin",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 13
    },
    "caiTrangParts": {
      "head": 341,
      "body": 342,
      "leg": 343,
      "bag": -1
    }
  },
  "424": {
    "id": "424",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3245.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "Cải trang thành Kogu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 13
    },
    "caiTrangParts": {
      "head": 329,
      "body": 330,
      "leg": 331,
      "bag": -1
    }
  },
  "425": {
    "id": "425",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9837.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "Cải trang thành Zangya",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 13
    },
    "caiTrangParts": {
      "head": 332,
      "body": 333,
      "leg": 334,
      "bag": -1
    }
  },
  "426": {
    "id": "426",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3310.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "Cải trang thành Bido",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 13
    },
    "caiTrangParts": {
      "head": 335,
      "body": 336,
      "leg": 337,
      "bag": -1
    }
  },
  "427": {
    "id": "427",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3183.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "Cải trang thành Bojack",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 14
    },
    "caiTrangParts": {
      "head": 323,
      "body": 324,
      "leg": 325,
      "bag": -1
    }
  },
  "428": {
    "id": "428",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3215.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "Cải trang thành Super Bojack",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 15
    },
    "caiTrangParts": {
      "head": 326,
      "body": 327,
      "leg": 328,
      "bag": -1
    }
  },
  "429": {
    "id": "429",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/1871.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 70,
    "desc": "Cải trang thành Số 4",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 12
    },
    "caiTrangParts": {
      "head": 168,
      "body": 169,
      "leg": 170,
      "bag": -1
    }
  },
  "430": {
    "id": "430",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2123.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 70,
    "desc": "Cải trang thành Số 3",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 12
    },
    "caiTrangParts": {
      "head": 174,
      "body": 175,
      "leg": 176,
      "bag": -1
    }
  },
  "431": {
    "id": "431",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2124.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 70,
    "desc": "Cải trang thành Số 2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 13
    },
    "caiTrangParts": {
      "head": 171,
      "body": 172,
      "leg": 173,
      "bag": -1
    }
  },
  "432": {
    "id": "432",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/1964.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 70,
    "desc": "Cải trang thành Số 1",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 14
    },
    "caiTrangParts": {
      "head": 177,
      "body": 178,
      "leg": 179,
      "bag": -1
    }
  },
  "433": {
    "id": "433",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/1995.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 70,
    "desc": "Cải trang thành Tiểu Đội Trưởng Ginyu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 15
    },
    "caiTrangParts": {
      "head": 180,
      "body": 181,
      "leg": 182,
      "bag": -1
    }
  },
  "434": {
    "id": "434",
    "name": "Khiên năng lượng lv1",
    "slot": "book",
    "type": 7,
    "gender": 3,
    "icon": "icon/3784.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 100,
    "desc": "học kĩ năng khiên năng lượng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "435": {
    "id": "435",
    "name": "Khiên năng lượng lv2",
    "slot": "book",
    "type": 7,
    "gender": 3,
    "icon": "icon/3784.png",
    "level": 2,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 200,
    "desc": "nâng khiên năng lượng lên cấp 2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "436": {
    "id": "436",
    "name": "Khiên năng lượng lv3",
    "slot": "book",
    "type": 7,
    "gender": 3,
    "icon": "icon/3784.png",
    "level": 3,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 300,
    "desc": "nâng khiên năng lượng lên cấp 3",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "437": {
    "id": "437",
    "name": "Khiên năng lượng lv4",
    "slot": "book",
    "type": 7,
    "gender": 3,
    "icon": "icon/3784.png",
    "level": 4,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 400,
    "desc": "nâng khiên năng lượng lên cấp 4",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "438": {
    "id": "438",
    "name": "Khiên năng lượng lv5",
    "slot": "book",
    "type": 7,
    "gender": 3,
    "icon": "icon/3784.png",
    "level": 5,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 500,
    "desc": "nâng khiên năng lượng lên cấp 5",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "439": {
    "id": "439",
    "name": "Khiên năng lượng lv6",
    "slot": "book",
    "type": 7,
    "gender": 3,
    "icon": "icon/3784.png",
    "level": 6,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 600,
    "desc": "nâng khiên năng lượng lên cấp 6",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "440": {
    "id": "440",
    "name": "Khiên năng lượng lv7",
    "slot": "book",
    "type": 7,
    "gender": 3,
    "icon": "icon/3784.png",
    "level": 7,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 700,
    "desc": "nâng khiên năng lượng lên cấp 7",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "441": {
    "id": "441",
    "name": "Sao pha lê",
    "slot": "special",
    "type": 30,
    "gender": 3,
    "icon": "icon/3887.png",
    "level": 1,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Ép vào đồ sao pha lê để tăng chỉ số",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "442": {
    "id": "442",
    "name": "Sao pha lê",
    "slot": "special",
    "type": 30,
    "gender": 3,
    "icon": "icon/3888.png",
    "level": 2,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Ép vào đồ sao pha lê để tăng chỉ số",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "443": {
    "id": "443",
    "name": "Sao pha lê",
    "slot": "special",
    "type": 30,
    "gender": 3,
    "icon": "icon/3889.png",
    "level": 3,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Ép vào đồ sao pha lê để tăng chỉ số",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "444": {
    "id": "444",
    "name": "Sao pha lê",
    "slot": "special",
    "type": 30,
    "gender": 3,
    "icon": "icon/3890.png",
    "level": 4,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Ép vào đồ sao pha lê để tăng chỉ số",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "445": {
    "id": "445",
    "name": "Sao pha lê",
    "slot": "special",
    "type": 30,
    "gender": 3,
    "icon": "icon/3891.png",
    "level": 5,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Ép vào đồ sao pha lê để tăng chỉ số",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "446": {
    "id": "446",
    "name": "Sao pha lê",
    "slot": "special",
    "type": 30,
    "gender": 3,
    "icon": "icon/3892.png",
    "level": 6,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Ép vào đồ sao pha lê để tăng chỉ số",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "447": {
    "id": "447",
    "name": "Sao pha lê",
    "slot": "special",
    "type": 30,
    "gender": 3,
    "icon": "icon/3893.png",
    "level": 7,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Ép vào đồ sao pha lê để tăng chỉ số",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "448": {
    "id": "448",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3496.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 2000,
    "desc": "Cải trang thành Đracula",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 353,
      "body": 354,
      "leg": 355,
      "bag": -1
    }
  },
  "449": {
    "id": "449",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3745.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 2000,
    "desc": "Cải trang thành Người Vô Hình",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 377,
      "body": 378,
      "leg": 379,
      "bag": -1
    }
  },
  "450": {
    "id": "450",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3469.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 2000,
    "desc": "Cải trang thành Bông Băng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 350,
      "body": 351,
      "leg": 352,
      "bag": -1
    }
  },
  "451": {
    "id": "451",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3407.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 2000,
    "desc": "Cải trang thành Vua Quỷ Satan",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 344,
      "body": 345,
      "leg": 346,
      "bag": -1
    }
  },
  "452": {
    "id": "452",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3438.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 2000,
    "desc": "Cải trang thành Thỏ Đầu Bạc",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 347,
      "body": 348,
      "leg": 349,
      "bag": -1
    }
  },
  "453": {
    "id": "453",
    "name": "Chiến thuyền Tennis",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/3894.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 50,
    "desc": "Chiến thuyền phục hồi HP, KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "454": {
    "id": "454",
    "name": "Bông tai Porata",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/3896.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 1000,
    "desc": "Sử dụng để hợp thể với đệ tử",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "455": {
    "id": "455",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3995.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 2000,
    "desc": "Cải trang thành Ở dơ, làm mất HP mọi người ở gần",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 400,
      "body": 401,
      "leg": 402,
      "bag": -1
    }
  },
  "456": {
    "id": "456",
    "name": "Bình nước",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4029.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "457": {
    "id": "457",
    "name": "Thỏi vàng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4028.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "458": {
    "id": "458",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3558.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 2000,
    "desc": "Cải trang thành Xinbatô, gây đánh hụt cho mọi người ở gần",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 359,
      "body": 360,
      "leg": 361,
      "bag": -1
    }
  },
  "459": {
    "id": "459",
    "name": "Phiếu giảm giá",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4030.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "460": {
    "id": "460",
    "name": "Cục xương",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4032.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 1,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "461": {
    "id": "461",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3933.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 2000,
    "desc": "Cải trang thành Sói hẹc quyn, tăng tốc độ chạy, thưởng sức mạnh và tiềm năng khi đánh quái",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 394,
      "body": 395,
      "leg": 396,
      "bag": -1
    }
  },
  "462": {
    "id": "462",
    "name": "Củ cà rốt",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4083.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Đổi 99 củ cà rốt lấy cải trang hot tại quầy bánh trung thu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "463": {
    "id": "463",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/4044.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Thỏ đại ca, biến cà rốt người chạm vào",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 403,
      "body": 404,
      "leg": 405,
      "bag": -1
    }
  },
  "464": {
    "id": "464",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/4116.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Thỏ Bunma, tăng sức đánh cho mình và mọi người ở gần",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 409,
      "body": 410,
      "leg": 411,
      "bag": -1
    }
  },
  "465": {
    "id": "465",
    "name": "Bánh Trung Thu 1 trứng",
    "slot": "special",
    "type": 31,
    "gender": 3,
    "icon": "icon/4042.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, tác dụng trong 60 phút",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "466": {
    "id": "466",
    "name": "Bánh Trung Thu 2 trứng",
    "slot": "special",
    "type": 31,
    "gender": 3,
    "icon": "icon/4043.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, tác dụng trong 90 phút",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "467": {
    "id": "467",
    "name": "Lồng đèn Ông Sao",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/4124.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "468": {
    "id": "468",
    "name": "Lồng đèn Cá chép",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/4122.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "469": {
    "id": "469",
    "name": "Lồng đèn Kéo Quân",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/4121.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "470": {
    "id": "470",
    "name": "Lồng đèn Ông trăng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/4123.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "471": {
    "id": "471",
    "name": "Lồng đèn Hội An",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/4120.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "472": {
    "id": "472",
    "name": "Bánh Trung Thu Đặc Biệt",
    "slot": "special",
    "type": 31,
    "gender": 3,
    "icon": "icon/4125.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, tác dụng trong 120 phút",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "473": {
    "id": "473",
    "name": "Hộp bánh Trung Thu",
    "slot": "special",
    "type": 31,
    "gender": 3,
    "icon": "icon/4126.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, tác dụng trong 150 phút",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "474": {
    "id": "474",
    "name": "Sách Biến Sôcôla lv1",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/3780.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 100,
    "desc": "học kĩ năng Biến Sôcôla",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "475": {
    "id": "475",
    "name": "Sách Biến Sôcôla lv2",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/3780.png",
    "level": 2,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 120,
    "desc": "nâng biến Sôcôla lên cấp 2",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "476": {
    "id": "476",
    "name": "Sách Biến Sôcôla lv3",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/3780.png",
    "level": 3,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 140,
    "desc": "nâng biến Sôcôla lên cấp 3",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "477": {
    "id": "477",
    "name": "Sách Biến Sôcôla lv4",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/3780.png",
    "level": 4,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 160,
    "desc": "nâng biến Sôcôla lên cấp 4",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "478": {
    "id": "478",
    "name": "Sách Biến Sôcôla lv5",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/3780.png",
    "level": 5,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 180,
    "desc": "nâng biến Sôcôla lên cấp 5",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "479": {
    "id": "479",
    "name": "Sách Biến Sôcôla lv6",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/3780.png",
    "level": 6,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 200,
    "desc": "nâng biến Sôcôla lên cấp 6",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "480": {
    "id": "480",
    "name": "Sách Biến Sôcôla lv7",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/3780.png",
    "level": 7,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 220,
    "desc": "nâng biến Sôcôla lên cấp 7",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "481": {
    "id": "481",
    "name": "Sách Liên hoàn lv1",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/3778.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 100,
    "desc": "học liên hoàn chiêu",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 160
    }
  },
  "482": {
    "id": "482",
    "name": "Sách Liên hoàn lv2",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/3778.png",
    "level": 2,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 120,
    "desc": "nâng liên hoàn chiêu lên cấp 2",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 165
    }
  },
  "483": {
    "id": "483",
    "name": "Sách Liên hoàn lv3",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/3778.png",
    "level": 3,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 140,
    "desc": "nâng liên hoàn chiêu lên cấp 3",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 170
    }
  },
  "484": {
    "id": "484",
    "name": "Sách Liên hoàn lv4",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/3778.png",
    "level": 4,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 160,
    "desc": "nâng liên hoàn chiêu lên cấp 4",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 175
    }
  },
  "485": {
    "id": "485",
    "name": "Sách Liên hoàn lv5",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/3778.png",
    "level": 5,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 180,
    "desc": "nâng liên hoàn chiêu lên cấp 5",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 180
    }
  },
  "486": {
    "id": "486",
    "name": "Sách Liên hoàn lv6",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/3778.png",
    "level": 6,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 200,
    "desc": "nâng liên hoàn chiêu lên cấp 6",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 185
    }
  },
  "487": {
    "id": "487",
    "name": "Sách Liên hoàn lv7",
    "slot": "book",
    "type": 7,
    "gender": 1,
    "icon": "icon/3778.png",
    "level": 7,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 220,
    "desc": "nâng liên hoàn chiêu lên cấp 7",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 190
    }
  },
  "488": {
    "id": "488",
    "name": "Sách Dịch Chuyển lv1",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/3783.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 100,
    "desc": "học phép Dịch Chuyển",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "489": {
    "id": "489",
    "name": "Sách Dịch Chuyển lv2",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/3783.png",
    "level": 2,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 120,
    "desc": "nâng phép Dịch Chuyển lên cấp 2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "490": {
    "id": "490",
    "name": "Sách Dịch Chuyển lv3",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/3783.png",
    "level": 3,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 140,
    "desc": "nâng phép Dịch Chuyển lên cấp 3",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "491": {
    "id": "491",
    "name": "Sách Dịch Chuyển lv4",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/3783.png",
    "level": 4,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 160,
    "desc": "nâng phép Dịch Chuyển lên cấp 4",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "492": {
    "id": "492",
    "name": "Sách Dịch Chuyển lv5",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/3783.png",
    "level": 5,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 180,
    "desc": "nâng phép Dịch Chuyển lên cấp 5",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "493": {
    "id": "493",
    "name": "Sách Dịch Chuyển lv6",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/3783.png",
    "level": 6,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 200,
    "desc": "nâng phép Dịch Chuyển lên cấp 6",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "494": {
    "id": "494",
    "name": "Sách Dịch Chuyển lv7",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/3783.png",
    "level": 7,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 220,
    "desc": "nâng phép Dịch Chuyển lên cấp 7",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "495": {
    "id": "495",
    "name": "Sách Thôi Miên lv1",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/3782.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 100,
    "desc": "học phép Thôi Miên",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "496": {
    "id": "496",
    "name": "Sách Thôi Miên lv2",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/3782.png",
    "level": 2,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 120,
    "desc": "nâng phép thôi miên lên cấp 2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "497": {
    "id": "497",
    "name": "Sách Thôi Miên lv3",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/3782.png",
    "level": 3,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 140,
    "desc": "nâng phép thôi miên lên cấp 3",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "498": {
    "id": "498",
    "name": "Sách Thôi Miên lv4",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/3782.png",
    "level": 4,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 160,
    "desc": "nâng phép thôi miên lên cấp 4",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "499": {
    "id": "499",
    "name": "Sách Thôi Miên lv5",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/3782.png",
    "level": 5,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 180,
    "desc": "nâng phép thôi miên lên cấp 5",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "500": {
    "id": "500",
    "name": "Sách Thôi Miên lv6",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/3782.png",
    "level": 6,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 200,
    "desc": "nâng phép thôi miên lên cấp 6",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "501": {
    "id": "501",
    "name": "Sách Thôi Miên lv7",
    "slot": "book",
    "type": 7,
    "gender": 0,
    "icon": "icon/3782.png",
    "level": 7,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 220,
    "desc": "nâng phép thôi miên lên cấp 7",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "502": {
    "id": "502",
    "name": "Sách Trói lv1",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/3779.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 100,
    "desc": "học phép trói",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "503": {
    "id": "503",
    "name": "Sách Trói lv2",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/3779.png",
    "level": 2,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 120,
    "desc": "nâng phép trói lên cấp 2",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "504": {
    "id": "504",
    "name": "Sách Trói lv3",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/3779.png",
    "level": 3,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 140,
    "desc": "nâng phép trói lên cấp 3",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "505": {
    "id": "505",
    "name": "Sách Trói lv4",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/3779.png",
    "level": 4,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 160,
    "desc": "nâng phép trói lên cấp 4",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "506": {
    "id": "506",
    "name": "Sách Trói lv5",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/3779.png",
    "level": 5,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 180,
    "desc": "nâng phép trói lên cấp 5",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "507": {
    "id": "507",
    "name": "Sách Trói lv6",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/3779.png",
    "level": 6,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 200,
    "desc": "nâng phép trói lên cấp 6",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "508": {
    "id": "508",
    "name": "Sách Trói lv7",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/3779.png",
    "level": 7,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 220,
    "desc": "nâng phép trói lên cấp 7",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "509": {
    "id": "509",
    "name": "Sách Huýt Sáo lv1",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/3781.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 100,
    "desc": "học phép Huýt Sáo",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "510": {
    "id": "510",
    "name": "Sách Huýt Sáo lv2",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/3781.png",
    "level": 2,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 120,
    "desc": "nâng phép Huýt Sáo lên cấp 2",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "511": {
    "id": "511",
    "name": "Sách Huýt Sáo lv3",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/3781.png",
    "level": 3,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 140,
    "desc": "nâng phép Huýt Sáo lên cấp 3",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "512": {
    "id": "512",
    "name": "Sách Huýt Sáo lv4",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/3781.png",
    "level": 4,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 160,
    "desc": "nâng phép Huýt Sáo lên cấp 4",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "513": {
    "id": "513",
    "name": "Sách Huýt Sáo lv5",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/3781.png",
    "level": 5,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 180,
    "desc": "nâng phép Huýt Sáo lên cấp 5",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "514": {
    "id": "514",
    "name": "Sách Huýt Sáo lv6",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/3781.png",
    "level": 6,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 200,
    "desc": "nâng phép Huýt Sáo lên cấp 6",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "515": {
    "id": "515",
    "name": "Sách Huýt Sáo lv7",
    "slot": "book",
    "type": 7,
    "gender": 2,
    "icon": "icon/3781.png",
    "level": 7,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 220,
    "desc": "nâng phép Huýt Sáo lên cấp 7",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "516": {
    "id": "516",
    "name": "Sôcôla",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4133.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "517": {
    "id": "517",
    "name": "Mở rộng hành trang",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4340.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 100,
    "desc": "Thêm 1 ô trong hành trang",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "518": {
    "id": "518",
    "name": "Mở rộng rương đồ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/265.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 50000000,
    "gem": 0,
    "desc": "Thêm 1 ô trong rương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "519": {
    "id": "519",
    "name": "Cờ Kaiô",
    "slot": "bua",
    "type": 28,
    "gender": 3,
    "icon": "icon/4386.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "520": {
    "id": "520",
    "name": "Cờ Mabư",
    "slot": "bua",
    "type": 28,
    "gender": 3,
    "icon": "icon/4385.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "521": {
    "id": "521",
    "name": "Tự động luyện tập",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4387.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 2,
    "desc": "Tự động luyện tập, ăn đậu, thu hoạch đậu, và sử dụng các kĩ năng hiển thị trên ô phím tắt theo thứ tự từ kĩ năng có cooldown cao nhất đến thấp nhất",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "522": {
    "id": "522",
    "name": "Bùa Đệ Tử",
    "slot": "special",
    "type": 13,
    "gender": 3,
    "icon": "icon/1403.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 1500,
    "desc": "Đệ tử bạn sẽ tự đánh quái không cần sư phụ, giảm 50% sát thương từ quái, tăng 100% sức mạnh khi đánh quái",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "523": {
    "id": "523",
    "name": "Đậu thần cấp 9",
    "slot": "consumable",
    "type": 6,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 9,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Thức ăn phục hồi HP và KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "524": {
    "id": "524",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2560.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 1200,
    "desc": "Cải trang thành Android 19",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 10
    },
    "caiTrangParts": {
      "head": 249,
      "body": 250,
      "leg": 251,
      "bag": -1
    }
  },
  "525": {
    "id": "525",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9836.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 1500,
    "desc": "Cải trang thành Android 20",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 15
    },
    "caiTrangParts": {
      "head": 255,
      "body": 256,
      "leg": 257,
      "bag": -1
    }
  },
  "526": {
    "id": "526",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2345.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 1700,
    "desc": "Cải trang thành Xên Bọ Hung 1",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 14
    },
    "caiTrangParts": {
      "head": 228,
      "body": 229,
      "leg": 230,
      "bag": -1
    }
  },
  "527": {
    "id": "527",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2376.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 1850,
    "desc": "Cải trang thành Xên Bọ Hung 2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 16,
      "kiPercent": 15
    },
    "caiTrangParts": {
      "head": 231,
      "body": 232,
      "leg": 233,
      "bag": -1
    }
  },
  "528": {
    "id": "528",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2407.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 2000,
    "desc": "Cải trang thành Xên Bọ Hung 3",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 18,
      "hpPercent": 15,
      "kiPercent": 15
    },
    "caiTrangParts": {
      "head": 234,
      "body": 235,
      "leg": 236,
      "bag": -1
    }
  },
  "529": {
    "id": "529",
    "name": "Giáp tập luyện cấp 1",
    "slot": "special",
    "type": 32,
    "gender": 3,
    "icon": "icon/4429.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 30,
    "desc": "Khi mặc vào sẽ đánh yếu hơn bình thường 10%, khi cởi ra sẽ tăng sức đánh 10%",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "530": {
    "id": "530",
    "name": "Giáp tập luyện cấp 2",
    "slot": "special",
    "type": 32,
    "gender": 3,
    "icon": "icon/4430.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 300,
    "desc": "Khi mặc vào sẽ đánh yếu hơn bình thường 20%, khi cởi ra sẽ tăng sức đánh 20%",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "531": {
    "id": "531",
    "name": "Giáp tập luyện cấp 3",
    "slot": "special",
    "type": 32,
    "gender": 3,
    "icon": "icon/4431.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 3000,
    "desc": "Khi mặc vào sẽ đánh yếu hơn bình thường 30%, khi cởi ra sẽ tăng sức đánh 30%",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "532": {
    "id": "532",
    "name": "Quỷ Chim",
    "slot": "special",
    "type": 24,
    "gender": 3,
    "icon": "icon/4433.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 1000,
    "desc": "Dùng để bay phục hồi HP, KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "533": {
    "id": "533",
    "name": "Kẹo giáng sinh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4432.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất khi sự kiện kết thúc",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "534": {
    "id": "534",
    "name": "Giáp tập luyện cấp 1",
    "slot": "special",
    "type": 32,
    "gender": 3,
    "icon": "icon/4429.png",
    "level": 1,
    "strRequire": 0,
    "gold": 10000000,
    "gem": 0,
    "desc": "Khi mặc vào sẽ đánh yếu hơn bình thường 10%, khi cởi ra sẽ tăng sức đánh 10%",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "535": {
    "id": "535",
    "name": "Giáp tập luyện cấp 2",
    "slot": "special",
    "type": 32,
    "gender": 3,
    "icon": "icon/4430.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 100000000,
    "gem": 0,
    "desc": "Khi mặc vào sẽ đánh yếu hơn bình thường 20%, khi cởi ra sẽ tăng sức đánh 20%",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "536": {
    "id": "536",
    "name": "Giáp tập luyện cấp 3",
    "slot": "special",
    "type": 32,
    "gender": 3,
    "icon": "icon/4431.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 1000000000,
    "gem": 0,
    "desc": "Khi mặc vào sẽ đánh yếu hơn bình thường 30%, khi cởi ra sẽ tăng sức đánh 30%",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "537": {
    "id": "537",
    "name": "Chữ giải",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/1403.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "538": {
    "id": "538",
    "name": "Chữ khai",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/1404.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "539": {
    "id": "539",
    "name": "Chữ phong",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/1407.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "540": {
    "id": "540",
    "name": "Chữ ấn",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/1406.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "541": {
    "id": "541",
    "name": "Quả Hồng Đào",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4547.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "542": {
    "id": "542",
    "name": "Quả Hồng Đào Chín",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4547.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "543": {
    "id": "543",
    "name": "Vòng Kim Cô",
    "slot": "special",
    "type": 32,
    "gender": 3,
    "icon": "icon/4546.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "544": {
    "id": "544",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/4543.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Tôn Ngộ Không",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 457,
      "body": 458,
      "leg": 459,
      "bag": -1
    }
  },
  "545": {
    "id": "545",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/4464.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Tôn Ngộ Không",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 460,
      "body": 458,
      "leg": 459,
      "bag": -1
    }
  },
  "546": {
    "id": "546",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/4466.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Tôn Ngộ Không",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 461,
      "body": 458,
      "leg": 459,
      "bag": -1
    }
  },
  "547": {
    "id": "547",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/4468.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Tôn Ngộ Không (chỉ dành cho đệ tử)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 462,
      "body": 463,
      "leg": 464,
      "bag": -1
    }
  },
  "548": {
    "id": "548",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/4498.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Bát Giới (chỉ dành cho đệ tử)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 465,
      "body": 466,
      "leg": 464,
      "bag": -1
    }
  },
  "549": {
    "id": "549",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2715.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 3000,
    "desc": "Cải trang thành Xên Bọ Hung con",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 20,
      "hpPercent": 17,
      "kiPercent": 17
    },
    "caiTrangParts": {
      "head": 264,
      "body": 265,
      "leg": 266,
      "bag": -1
    }
  },
  "550": {
    "id": "550",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2592.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 120,
    "desc": "Cải trang thành Android 13",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 252,
      "body": 253,
      "leg": 254,
      "bag": -1
    }
  },
  "551": {
    "id": "551",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2529.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 110,
    "desc": "Cải trang thành Android 14",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 246,
      "body": 247,
      "leg": 248,
      "bag": -1
    }
  },
  "552": {
    "id": "552",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2684.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 100,
    "desc": "Cải trang thành Android 15",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 261,
      "body": 262,
      "leg": 263,
      "bag": -1
    }
  },
  "553": {
    "id": "553",
    "name": "Pháo bông",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4548.png",
    "level": 1,
    "strRequire": 1000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện năm mới, biến mất vào ngày 18/2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "554": {
    "id": "554",
    "name": "Siêu Pháo bông x100",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4548.png",
    "level": 1,
    "strRequire": 1000000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện năm mới, biến mất vào ngày 18/2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "555": {
    "id": "555",
    "name": "Áo Thần Linh",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/4647.png",
    "level": 13,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "556": {
    "id": "556",
    "name": "Quần Thần Linh",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/4648.png",
    "level": 13,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "557": {
    "id": "557",
    "name": "Áo Thần Namếc",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/4657.png",
    "level": 13,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "558": {
    "id": "558",
    "name": "Quần Thần namếc",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/4658.png",
    "level": 13,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "559": {
    "id": "559",
    "name": "Áo Thần Xayda",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/4652.png",
    "level": 13,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "560": {
    "id": "560",
    "name": "Quần Thần Xayda",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/4654.png",
    "level": 13,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "561": {
    "id": "561",
    "name": "Nhẫn Thần Linh",
    "slot": "rada",
    "type": 4,
    "gender": 3,
    "icon": "icon/6314.png",
    "level": 13,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "562": {
    "id": "562",
    "name": "Găng Thần Linh",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/4650.png",
    "level": 13,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "563": {
    "id": "563",
    "name": "Giầy Thần Linh",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/4649.png",
    "level": 13,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "564": {
    "id": "564",
    "name": "Găng Thần Namếc",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/4659.png",
    "level": 13,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "565": {
    "id": "565",
    "name": "Giầy Thần Namếc",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/4660.png",
    "level": 13,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "566": {
    "id": "566",
    "name": "Găng Thần Xayda",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/4656.png",
    "level": 13,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "567": {
    "id": "567",
    "name": "Giầy Thần Xayda",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/4655.png",
    "level": 13,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "568": {
    "id": "568",
    "name": "Quả Trứng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/2164.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "569": {
    "id": "569",
    "name": "Dưa Hấu",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4671.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "570": {
    "id": "570",
    "name": "Rương Gỗ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/265.png",
    "level": 1,
    "strRequire": 1000,
    "gold": 0,
    "gem": 0,
    "desc": "Giấu bên trong nhiều vật phẩm quý giá",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "571": {
    "id": "571",
    "name": "Rương Bạc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5006.png",
    "level": 1,
    "strRequire": 15000,
    "gold": 0,
    "gem": 0,
    "desc": "Giấu bên trong nhiều vật phẩm quý giá",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "572": {
    "id": "572",
    "name": "Rương Vàng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5007.png",
    "level": 1,
    "strRequire": 15000,
    "gold": 0,
    "gem": 0,
    "desc": "Giấu bên trong nhiều vật phẩm quý giá",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "573": {
    "id": "573",
    "name": "Capsule Bạc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5005.png",
    "level": 1,
    "strRequire": 15000,
    "gold": 0,
    "gem": 0,
    "desc": "Giấu bên trong nhiều vật phẩm quý giá",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "574": {
    "id": "574",
    "name": "Capsule Vàng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5004.png",
    "level": 1,
    "strRequire": 15000,
    "gold": 0,
    "gem": 0,
    "desc": "Giấu bên trong nhiều vật phẩm quý giá",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "575": {
    "id": "575",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/4354.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 2000,
    "desc": "Cải trang thành Bui Bui",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 19,
      "hpPercent": 16,
      "kiPercent": 16
    },
    "caiTrangParts": {
      "head": 451,
      "body": 452,
      "leg": 453,
      "bag": -1
    }
  },
  "576": {
    "id": "576",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/4135.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 2000,
    "desc": "Cải trang thành Yacôn",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 20,
      "hpPercent": 17,
      "kiPercent": 17
    },
    "caiTrangParts": {
      "head": 415,
      "body": 416,
      "leg": 417,
      "bag": -1
    }
  },
  "577": {
    "id": "577",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/4165.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 2000,
    "desc": "Cải trang thành Drabura",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 21,
      "hpPercent": 18,
      "kiPercent": 18
    },
    "caiTrangParts": {
      "head": 418,
      "body": 419,
      "leg": 420,
      "bag": -1
    }
  },
  "578": {
    "id": "578",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2957.png",
    "level": 1,
    "strRequire": 15000000,
    "gold": 0,
    "gem": 2000,
    "desc": "Cải trang thành Mabư mập",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 22,
      "hpPercent": 19,
      "kiPercent": 19
    },
    "caiTrangParts": {
      "head": 297,
      "body": 298,
      "leg": 299,
      "bag": -1
    }
  },
  "579": {
    "id": "579",
    "name": "Đuôi khỉ",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/5072.png",
    "level": 1,
    "strRequire": 15000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất vào ngày 5/10",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "khi_7"
  },
  "580": {
    "id": "580",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3047.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Chi Chi",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 310,
      "body": 298,
      "leg": 299,
      "bag": -1
    }
  },
  "581": {
    "id": "581",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3045.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Bum ma",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 309,
      "body": 298,
      "leg": 299,
      "bag": -1
    }
  },
  "582": {
    "id": "582",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3014.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Lý Tiểu Nương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 306,
      "body": 307,
      "leg": 308,
      "bag": -1
    }
  },
  "583": {
    "id": "583",
    "name": "Cải trang Póc",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2467.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 1600,
    "desc": "Cải trang thành Android sát thủ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 8,
      "hpPercent": 8
    },
    "caiTrangParts": {
      "head": 240,
      "body": 241,
      "leg": 242,
      "bag": -1
    }
  },
  "584": {
    "id": "584",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/4116.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Thỏ Bunma, tăng sức đánh cho mình và mọi người ở gần",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 409,
      "body": 410,
      "leg": 411,
      "bag": -1
    }
  },
  "585": {
    "id": "585",
    "name": "Bí ngô",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5138.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất vào ngày 20/11",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "586": {
    "id": "586",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3469.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Bông Băng (Sự kiện Halloween)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 350,
      "body": 351,
      "leg": 352,
      "bag": -1
    }
  },
  "587": {
    "id": "587",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3407.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Vua Quỷ Satan (Sự kiện Halloween)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 344,
      "body": 345,
      "leg": 346,
      "bag": -1
    }
  },
  "588": {
    "id": "588",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3496.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Đracula (Sự kiện Halloween)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 353,
      "body": 354,
      "leg": 355,
      "bag": -1
    }
  },
  "589": {
    "id": "589",
    "name": "Bông hoa",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5206.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất vào ngày 22/11",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "590": {
    "id": "590",
    "name": "Bí kiếp",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5207.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để dịch chuyển tức thời",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "591": {
    "id": "591",
    "name": "Cải trang Siêu Thần",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5087.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Siêu Thần Xayda Tóc Xanh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 542,
      "body": 523,
      "leg": 524,
      "bag": -1
    }
  },
  "592": {
    "id": "592",
    "name": "Cải trang Yardrat",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/5211.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Võ phục của người Yardrat",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 0,
      "body": 523,
      "leg": 524,
      "bag": -1
    }
  },
  "593": {
    "id": "593",
    "name": "Cải trang Yardrat",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/5211.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Võ phục của người Yardrat",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 112,
      "body": 523,
      "leg": 524,
      "bag": -1
    }
  },
  "594": {
    "id": "594",
    "name": "Cải trang Yardrat",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/5211.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Võ phục của người Yardrat",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 103,
      "body": 523,
      "leg": 524,
      "bag": -1
    }
  },
  "595": {
    "id": "595",
    "name": "Đậu thần cấp 10",
    "slot": "consumable",
    "type": 6,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 10,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Thức ăn phục hồi HP và KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "596": {
    "id": "596",
    "name": "Gói 30 đậu thần cấp 8",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Gói 30 đậu thần cấp 8",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "597": {
    "id": "597",
    "name": "Gói 30 đậu thần cấp 9",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/241.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Gói 30 đậu thần cấp 9",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "598": {
    "id": "598",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/5235.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất vào ngày 11/2",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 561,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "599": {
    "id": "599",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/5233.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất vào ngày 11/2",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 560,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "600": {
    "id": "600",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/5237.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, biến mất vào ngày 11/2",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 562,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "601": {
    "id": "601",
    "name": "Cải trang Hợp Thể",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/5273.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 3000,
    "desc": "Cải trang khi hợp thể",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 21,
      "hpPercent": 18,
      "kiPercent": 18
    },
    "caiTrangParts": {
      "head": 566,
      "body": 567,
      "leg": 568,
      "bag": -1
    }
  },
  "602": {
    "id": "602",
    "name": "Cải trang Hợp Thể",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/5306.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 3000,
    "desc": "Cải trang khi hợp thể",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 21,
      "hpPercent": 18,
      "kiPercent": 18
    },
    "caiTrangParts": {
      "head": 570,
      "body": 571,
      "leg": 572,
      "bag": -1
    }
  },
  "603": {
    "id": "603",
    "name": "Cải trang Hợp Thể",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/5242.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 3000,
    "desc": "Cải trang khi hợp thể",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 21,
      "hpPercent": 18,
      "kiPercent": 18
    },
    "caiTrangParts": {
      "head": 563,
      "body": 564,
      "leg": 565,
      "bag": -1
    }
  },
  "604": {
    "id": "604",
    "name": "Cải trang VIP",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/5304.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 10000,
    "desc": "Cải trang VIP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 23,
      "hpPercent": 20,
      "kiPercent": 20
    },
    "caiTrangParts": {
      "head": 569,
      "body": 472,
      "leg": 473,
      "bag": -1
    }
  },
  "605": {
    "id": "605",
    "name": "Cải trang VIP",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/5075.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 10000,
    "desc": "Cải trang VIP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 23,
      "hpPercent": 20,
      "kiPercent": 20
    },
    "caiTrangParts": {
      "head": 536,
      "body": 476,
      "leg": 477,
      "bag": -1
    }
  },
  "606": {
    "id": "606",
    "name": "Cải trang VIP",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/5079.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 10000,
    "desc": "Cải trang VIP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 23,
      "hpPercent": 20,
      "kiPercent": 20
    },
    "caiTrangParts": {
      "head": 538,
      "body": 474,
      "leg": 475,
      "bag": -1
    }
  },
  "607": {
    "id": "607",
    "name": "Cải trang Chan Xư",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/3682.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 1000,
    "desc": "Cải trang thành Chan Xư",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 18,
      "kiPercent": 18
    },
    "caiTrangParts": {
      "head": 371,
      "body": 372,
      "leg": 373,
      "bag": -1
    }
  },
  "608": {
    "id": "608",
    "name": "Cải trang Lão Cận",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/3964.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 1000,
    "desc": "Cải trang thành Lão Cận",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 18,
      "kiPercent": 18
    },
    "caiTrangParts": {
      "head": 397,
      "body": 398,
      "leg": 399,
      "bag": -1
    }
  },
  "609": {
    "id": "609",
    "name": "Cải trang Xayda",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/4938.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 1000,
    "desc": "Cải trang thành Xayda",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 18,
      "kiPercent": 18
    },
    "caiTrangParts": {
      "head": 517,
      "body": 518,
      "leg": 519,
      "bag": -1
    }
  },
  "610": {
    "id": "610",
    "name": "Bông hoa",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5206.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "611": {
    "id": "611",
    "name": "Bản đồ kho báu",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5428.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Gặp Quy Lão tại đảo kamê để sử dụng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "612": {
    "id": "612",
    "name": "Cải trang Arale",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5344.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 2000000000,
    "gem": 0,
    "desc": "Cải trang Dr. Slum",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 10
    },
    "caiTrangParts": {
      "head": 573,
      "body": 574,
      "leg": 575,
      "bag": -1
    }
  },
  "613": {
    "id": "613",
    "name": "Cải trang Gatchan",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5403.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 2000000000,
    "gem": 0,
    "desc": "Cải trang Dr. Slum",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 10
    },
    "caiTrangParts": {
      "head": 579,
      "body": 580,
      "leg": 581,
      "bag": -1
    }
  },
  "614": {
    "id": "614",
    "name": "Cải trang Obotchaman",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5372.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 2000000000,
    "gem": 0,
    "desc": "Cải trang Dr. Slum",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 10
    },
    "caiTrangParts": {
      "head": 576,
      "body": 577,
      "leg": 578,
      "bag": -1
    }
  },
  "615": {
    "id": "615",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/1964.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 300,
    "desc": "Cải trang thành Số 1",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 2,
      "attackPercent": 10
    },
    "caiTrangParts": {
      "head": 177,
      "body": 178,
      "leg": 179,
      "bag": -1
    }
  },
  "616": {
    "id": "616",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/1871.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 300,
    "desc": "Cải trang thành Số 4",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 2,
      "attackPercent": 12
    },
    "caiTrangParts": {
      "head": 168,
      "body": 169,
      "leg": 170,
      "bag": -1
    }
  },
  "617": {
    "id": "617",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/1995.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 400,
    "desc": "Cải trang thành Tiểu Đội Trưởng Ginyu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "crit": 3,
      "attackPercent": 13
    },
    "caiTrangParts": {
      "head": 180,
      "body": 181,
      "leg": 182,
      "bag": -1
    }
  },
  "618": {
    "id": "618",
    "name": "Cải trang Luffy",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5432.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Hải Tặc Tí Hon",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 582,
      "body": 583,
      "leg": 584,
      "bag": -1
    }
  },
  "619": {
    "id": "619",
    "name": "Cải trang Zoro",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5465.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Hải Tặc Tí Hon",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 585,
      "body": 586,
      "leg": 587,
      "bag": -1
    }
  },
  "620": {
    "id": "620",
    "name": "Cải trang Sanji",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5495.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Hải Tặc Tí Hon",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 588,
      "body": 589,
      "leg": 590,
      "bag": -1
    }
  },
  "621": {
    "id": "621",
    "name": "Cải trang Brook",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5526.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Hải Tặc Tí Hon",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 591,
      "body": 592,
      "leg": 593,
      "bag": -1
    }
  },
  "622": {
    "id": "622",
    "name": "Cải trang Chopper",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5680.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Hải Tặc Tí Hon",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 606,
      "body": 607,
      "leg": 608,
      "bag": -1
    }
  },
  "623": {
    "id": "623",
    "name": "Cải trang Nami",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5617.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Hải Tặc Tí Hon",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 600,
      "body": 601,
      "leg": 602,
      "bag": -1
    }
  },
  "624": {
    "id": "624",
    "name": "Cải trang Franky",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5556.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Hải Tặc Tí Hon",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 594,
      "body": 595,
      "leg": 596,
      "bag": -1
    }
  },
  "625": {
    "id": "625",
    "name": "Cải trang Usopp",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5587.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Hải Tặc Tí Hon",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 597,
      "body": 598,
      "leg": 599,
      "bag": -1
    }
  },
  "626": {
    "id": "626",
    "name": "Cải trang Robin",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5649.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Hải Tặc Tí Hon",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 603,
      "body": 604,
      "leg": 605,
      "bag": -1
    }
  },
  "627": {
    "id": "627",
    "name": "Capsule quà tặng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/2759.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giấu bên trong nhiều vật phẩm quý giá",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "628": {
    "id": "628",
    "name": "Cải trang Hải Tặc",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5721.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Hải Tặc Tí Hon",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "629": {
    "id": "629",
    "name": "Cải trang Fide vàng",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/4812.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Fide Vàng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 502,
      "body": 503,
      "leg": 504,
      "bag": -1
    }
  },
  "630": {
    "id": "630",
    "name": "Cải trang Frost 1",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/4719.png",
    "level": 1,
    "strRequire": 1500000000,
    "gold": 0,
    "gem": 1100,
    "desc": "Cải trang Frost",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 10
    },
    "caiTrangParts": {
      "head": 493,
      "body": 494,
      "leg": 495,
      "bag": -1
    }
  },
  "631": {
    "id": "631",
    "name": "Cải trang Frost 2",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/4750.png",
    "level": 1,
    "strRequire": 1500000000,
    "gold": 0,
    "gem": 1200,
    "desc": "Cải trang Frost",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 11
    },
    "caiTrangParts": {
      "head": 496,
      "body": 497,
      "leg": 498,
      "bag": -1
    }
  },
  "632": {
    "id": "632",
    "name": "Cải trang Frost 3",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/4781.png",
    "level": 1,
    "strRequire": 1500000000,
    "gold": 0,
    "gem": 1300,
    "desc": "Cải trang Frost",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 12
    },
    "caiTrangParts": {
      "head": 499,
      "body": 500,
      "leg": 501,
      "bag": -1
    }
  },
  "633": {
    "id": "633",
    "name": "Cải trang Píc",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/1348.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 1700,
    "desc": "Cải trang thành Android sát thủ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 8,
      "hpPercent": 8
    },
    "caiTrangParts": {
      "head": 237,
      "body": 238,
      "leg": 239,
      "bag": -1
    }
  },
  "634": {
    "id": "634",
    "name": "Cải trang King kong",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/2498.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 1800,
    "desc": "Cải trang thành Android sát thủ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 8,
      "hpPercent": 8
    },
    "caiTrangParts": {
      "head": 243,
      "body": 244,
      "leg": 245,
      "bag": -1
    }
  },
  "635": {
    "id": "635",
    "name": "Cải trang Pi láp",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5827.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang nhóm Pi láp",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 612,
      "body": 613,
      "leg": 614,
      "bag": -1
    }
  },
  "636": {
    "id": "636",
    "name": "Cải trang Mai",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5758.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang nhóm Pi láp",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 615,
      "body": 616,
      "leg": 617,
      "bag": -1
    }
  },
  "637": {
    "id": "637",
    "name": "Cải trang Su",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5789.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang nhóm Pi láp",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 618,
      "body": 619,
      "leg": 620,
      "bag": -1
    }
  },
  "638": {
    "id": "638",
    "name": "Bình chứa Commeson",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5829.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vũ khí của người Potaufeu (Giảm 90% sát thương từ quái)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "639": {
    "id": "639",
    "name": "Cải trang Hợp Thể",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/5834.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 300,
    "desc": "Cải trang khi hợp thể",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 21,
      "hpPercent": 18,
      "kiPercent": 18
    },
    "caiTrangParts": {
      "head": 627,
      "body": 628,
      "leg": 629,
      "bag": -1
    }
  },
  "640": {
    "id": "640",
    "name": "Cải trang Hợp Thể",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/5865.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 300,
    "desc": "Cải trang khi hợp thể",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 21,
      "hpPercent": 18,
      "kiPercent": 18
    },
    "caiTrangParts": {
      "head": 630,
      "body": 631,
      "leg": 632,
      "bag": -1
    }
  },
  "641": {
    "id": "641",
    "name": "Cải trang Hợp Thể",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/5898.png",
    "level": 1,
    "strRequire": 150000000,
    "gold": 0,
    "gem": 300,
    "desc": "Cải trang khi hợp thể",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 21,
      "hpPercent": 18,
      "kiPercent": 18
    },
    "caiTrangParts": {
      "head": 633,
      "body": 634,
      "leg": 635,
      "bag": -1
    }
  },
  "642": {
    "id": "642",
    "name": "Cải trang ma trơi",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6091.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 651,
      "body": 652,
      "leg": 653,
      "bag": -1
    }
  },
  "643": {
    "id": "643",
    "name": "Cải trang dơi nhí",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6094.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 654,
      "body": 655,
      "leg": 656,
      "bag": -1
    }
  },
  "644": {
    "id": "644",
    "name": "Cải trang bộ xương",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/11750.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 545,
      "body": 548,
      "leg": 549,
      "bag": -1
    }
  },
  "645": {
    "id": "645",
    "name": "Cải trang bộ xương",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/11754.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 547,
      "body": 548,
      "leg": 549,
      "bag": -1
    }
  },
  "646": {
    "id": "646",
    "name": "Cải trang bộ xương",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/11752.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 546,
      "body": 548,
      "leg": 549,
      "bag": -1
    }
  },
  "647": {
    "id": "647",
    "name": "Cải trang Saibamen",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5995.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 3500,
    "desc": "Cải trang Saibamen",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 20,
      "hpPercent": 20,
      "kiPercent": 20
    },
    "caiTrangParts": {
      "head": 642,
      "body": 643,
      "leg": 644,
      "bag": -1
    }
  },
  "648": {
    "id": "648",
    "name": "Hộp quà giáng sinh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6123.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "649": {
    "id": "649",
    "name": "Tất,vớ giáng sinh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6122.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "650": {
    "id": "650",
    "name": "Áo Hủy Diệt",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/6315.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "651": {
    "id": "651",
    "name": "Quần Hủy Diệt",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/6316.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "652": {
    "id": "652",
    "name": "Áo Hủy Diệt",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/6320.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "653": {
    "id": "653",
    "name": "Quần Hủy Diệt",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/6321.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "654": {
    "id": "654",
    "name": "Áo Hủy Diệt",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/6310.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "655": {
    "id": "655",
    "name": "Quần Hủy Diệt",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/6311.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "656": {
    "id": "656",
    "name": "Nhẫn Hủy Diệt",
    "slot": "rada",
    "type": 4,
    "gender": 3,
    "icon": "icon/6323.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "657": {
    "id": "657",
    "name": "Găng Hủy Diệt",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/6318.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "658": {
    "id": "658",
    "name": "Giầy Hủy Diệt",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/6317.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "659": {
    "id": "659",
    "name": "Găng Hủy Diệt",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/6318.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "660": {
    "id": "660",
    "name": "Giầy Hủy Diệt",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/6322.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "661": {
    "id": "661",
    "name": "Găng Hủy Diệt",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/6318.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "662": {
    "id": "662",
    "name": "Giầy Hủy Diệt",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/6312.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "663": {
    "id": "663",
    "name": "Bánh Pudding",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/6324.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập đủ 99 đến gặp Bill tại hành tinh Kaio, hoặc ăn để tăng sức đánh cho sư phụ và đệ tử 10% trong vòng tối đa 10 phút.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "664": {
    "id": "664",
    "name": "Xúc xích",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/6325.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập đủ 99 đến gặp Bill tại hành tinh Kaio, hoặc ăn để tăng sức đánh cho sư phụ và đệ tử 10% trong vòng tối đa 10 phút.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "665": {
    "id": "665",
    "name": "Kem dâu",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/6326.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập đủ 99 đến gặp Bill tại hành tinh Kaio, hoặc ăn để tăng sức đánh cho sư phụ và đệ tử 10% trong vòng tối đa 10 phút.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "666": {
    "id": "666",
    "name": "Mì ly",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/6327.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập đủ 99 đến gặp Bill tại hành tinh Kaio, hoặc ăn để tăng sức đánh cho sư phụ và đệ tử 10% trong vòng tối đa 10 phút.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "667": {
    "id": "667",
    "name": "Sushi",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/6328.png",
    "level": 14,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập đủ 99 đến gặp Bill tại hành tinh Kaio, hoặc ăn để tăng sức đánh cho sư phụ và đệ tử 10% trong vòng tối đa 10 phút.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "668": {
    "id": "668",
    "name": "Hộp quà Tết 2019",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/2987.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "669": {
    "id": "669",
    "name": "Dưa Hấu",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/1040.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": " ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "670": {
    "id": "670",
    "name": "Cà rốt",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/4083.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "671": {
    "id": "671",
    "name": "Bùa Trí Tuệ x3",
    "slot": "special",
    "type": 13,
    "gender": 3,
    "icon": "icon/1406.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 1500,
    "desc": "Tiềm năng và sức mạnh của bạn sẽ nhận được gấp ba trong 1 khoảng thời gian, kể từ lúc mua",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "672": {
    "id": "672",
    "name": "Bùa Trí Tuệ x4",
    "slot": "special",
    "type": 13,
    "gender": 3,
    "icon": "icon/1407.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 4500,
    "desc": "Tiềm năng và sức mạnh của bạn sẽ nhận được gấp bốn trong 1 khoảng thời gian, kể từ lúc mua",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "673": {
    "id": "673",
    "name": "abcd",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5820.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "674": {
    "id": "674",
    "name": "Đá ngũ sắc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6467.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Loại đá quý hiếm nhất trong thế giới Ngọc Rồng. Dùng để đục lỗ để gắn Sao Pha Lê cho mọi loại trang bị kể cả cải trang. Dùng để mua những cải trang cực hiếm. Có thể nhặt được khi đánh quái, với tỉ lệ rất thấp. Hãy gặp Thần Hủy Diệt để sử dụng loại đá này.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "675": {
    "id": "675",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6473.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Sarahs Mother",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 696,
      "body": 697,
      "leg": 698,
      "bag": -1
    }
  },
  "676": {
    "id": "676",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6369.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Sarah",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 684,
      "body": 685,
      "leg": 686,
      "bag": -1
    }
  },
  "677": {
    "id": "677",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6470.png",
    "level": 3,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Pan",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 693,
      "body": 694,
      "leg": 695,
      "bag": -1
    }
  },
  "678": {
    "id": "678",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6400.png",
    "level": 4,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Android 21",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 687,
      "body": 688,
      "leg": 689,
      "bag": -1
    }
  },
  "679": {
    "id": "679",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6338.png",
    "level": 5,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Muscular Lady",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 681,
      "body": 682,
      "leg": 683,
      "bag": -1
    }
  },
  "680": {
    "id": "680",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6431.png",
    "level": 6,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Caulifla",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 690,
      "body": 691,
      "leg": 692,
      "bag": -1
    }
  },
  "681": {
    "id": "681",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6329.png",
    "level": 7,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Nàng Tiên Cá",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 678,
      "body": 679,
      "leg": 680,
      "bag": -1
    }
  },
  "682": {
    "id": "682",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/1350.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 112,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "683": {
    "id": "683",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/1352.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 111,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "684": {
    "id": "684",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/1354.png",
    "level": 3,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 113,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "685": {
    "id": "685",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/1330.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 101,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "686": {
    "id": "686",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/1334.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 103,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "687": {
    "id": "687",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/1344.png",
    "level": 3,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 107,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "688": {
    "id": "688",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/1342.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 106,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "689": {
    "id": "689",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/1346.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 108,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "690": {
    "id": "690",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/1348.png",
    "level": 3,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 110,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "691": {
    "id": "691",
    "name": "Quần đi biển",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/6569.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "692": {
    "id": "692",
    "name": "Quần đi biển",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/6569.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "693": {
    "id": "693",
    "name": "Quần đi biển",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/6569.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "694": {
    "id": "694",
    "name": "Trái dừa",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/6574.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "695": {
    "id": "695",
    "name": "Vỏ ốc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6570.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "696": {
    "id": "696",
    "name": "Vỏ sò",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6573.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "697": {
    "id": "697",
    "name": "Con cua",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6571.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "698": {
    "id": "698",
    "name": "Sao biển",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6572.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "699": {
    "id": "699",
    "name": "HP +400K",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/2755.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": " ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "700": {
    "id": "700",
    "name": "Sức đánh +20K",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/2754.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": " ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "701": {
    "id": "701",
    "name": "KI +400K",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/2756.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": " ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "702": {
    "id": "702",
    "name": "Bí ngô 1 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/6579.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Xương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "703": {
    "id": "703",
    "name": "Bí ngô 2 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/6580.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Xương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "704": {
    "id": "704",
    "name": "Bí ngô 3 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/6581.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Xương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "705": {
    "id": "705",
    "name": "Bí ngô 4 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/6582.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Xương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "706": {
    "id": "706",
    "name": "Bí ngô 5 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/6583.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Xương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "707": {
    "id": "707",
    "name": "Bí ngô 6 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/6584.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Xương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "708": {
    "id": "708",
    "name": "Bí ngô 7 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/6585.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Xương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "709": {
    "id": "709",
    "name": "Bông hoa",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5206.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "710": {
    "id": "710",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5175.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Quy lão Kamê",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 554,
      "body": 555,
      "leg": 556,
      "bag": -1
    }
  },
  "711": {
    "id": "711",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/3527.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Jacky Chun",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 356,
      "body": 357,
      "leg": 358,
      "bag": -1
    }
  },
  "712": {
    "id": "712",
    "name": "Truy",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/1409.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "713": {
    "id": "713",
    "name": "Bắt",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/1407.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "714": {
    "id": "714",
    "name": "Đại",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/1406.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "715": {
    "id": "715",
    "name": "Vương",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/1405.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "716": {
    "id": "716",
    "name": "Urôn",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/1404.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "717": {
    "id": "717",
    "name": "Bao Lì Xì",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6764.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "718": {
    "id": "718",
    "name": "Vé tặng ngọc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6765.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để tặng ngọc của mình cho người khác, 1 vé tương ứng số lượng là 10 ngọc",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "719": {
    "id": "719",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6734.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Urôn",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 724,
      "body": 725,
      "leg": 726,
      "bag": -1
    }
  },
  "720": {
    "id": "720",
    "name": "Mảnh cải trang",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6777.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để đổi cải trang thành Urôn",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "721": {
    "id": "721",
    "name": "Phiếu giảm giá VIP",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4030.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "722": {
    "id": "722",
    "name": "Capsule hồng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6782.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "723": {
    "id": "723",
    "name": "Bông hồng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5206.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "724": {
    "id": "724",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6783.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 5000,
    "desc": "Cải trang thành Chi Chi",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 20,
      "hpPercent": 17,
      "kiPercent": 17
    },
    "caiTrangParts": {
      "head": 736,
      "body": 737,
      "leg": 738,
      "bag": -1
    }
  },
  "725": {
    "id": "725",
    "name": "Siêu thần thủy",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6848.png",
    "level": 1,
    "strRequire": 1000000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm nhiệm vụ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "727": {
    "id": "727",
    "name": "Siêu thần thủy",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6849.png",
    "level": 1,
    "strRequire": 100000000,
    "gold": 0,
    "gem": 0,
    "desc": "Sử dụng sẽ có cơ hội tăng 1 triệu Sức Mạnh và Tiềm Năng vĩnh viễn.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "728": {
    "id": "728",
    "name": "Siêu thần thủy",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6850.png",
    "level": 1,
    "strRequire": 1000000000,
    "gold": 0,
    "gem": 0,
    "desc": "Sử dụng sẽ có cơ hội tăng 5 triệu Sức Mạnh và Tiềm Năng vĩnh viễn.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "729": {
    "id": "729",
    "name": "Cải trang Hatchiyack",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5963.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Hatchiyack",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 639,
      "body": 640,
      "leg": 641,
      "bag": -1
    }
  },
  "730": {
    "id": "730",
    "name": "Cải trang Sói Basil",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6914.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "3 Con sói đi chung +10% tấn công cho Đệ tử ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 745,
      "body": 746,
      "leg": 747,
      "bag": -1
    }
  },
  "731": {
    "id": "731",
    "name": "Cải trang Sói Lavender",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6917.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "3 Con sói đi chung +10% tấn công cho Đệ tử ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 748,
      "body": 749,
      "leg": 750,
      "bag": -1
    }
  },
  "732": {
    "id": "732",
    "name": "Cải trang Sói Bergamo",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6949.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "3 Con sói đi chung +10% tấn công cho Đệ tử ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 751,
      "body": 752,
      "leg": 753,
      "bag": -1
    }
  },
  "733": {
    "id": "733",
    "name": "Cân đẩu vân ngũ sắc",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/6980.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bay không tốn KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "734": {
    "id": "734",
    "name": "Ngọc Thố",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/6981.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bay không tốn KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "735": {
    "id": "735",
    "name": "Lồng đèn cá chép",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/6982.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bay không tốn KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "736": {
    "id": "736",
    "name": "Hộp quà 5 sao",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6983.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "737": {
    "id": "737",
    "name": "Capsule Trung Thu",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6984.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "738": {
    "id": "738",
    "name": "Cải trang Dr Lychee",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6852.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Dr Lychee",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 742,
      "body": 743,
      "leg": 744,
      "bag": -1
    }
  },
  "739": {
    "id": "739",
    "name": "Cải trang Bill Bí Ngô",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6985.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Bill Bí Ngô",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 754,
      "body": 755,
      "leg": 756,
      "bag": -1
    }
  },
  "740": {
    "id": "740",
    "name": "Lưỡi hái Thần Chết",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7019.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "741": {
    "id": "741",
    "name": "Cánh dơi Dracula",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7022.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "742": {
    "id": "742",
    "name": "Cải trang Caufila Dơi",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/7023.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Caufila Dơi",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 757,
      "body": 758,
      "leg": 759,
      "bag": -1
    }
  },
  "743": {
    "id": "743",
    "name": "Chổi bay Phù Thủy",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/7056.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bay không tốn KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "744": {
    "id": "744",
    "name": "Cột nhà",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/7063.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 1000,
    "desc": "Bay không tốn KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "speed": 25
    }
  },
  "745": {
    "id": "745",
    "name": "Bông tuyết",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7066.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tạo khí lạnh gây ảnh hưởng xung quanh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "746": {
    "id": "746",
    "name": "Xe tuần lộc",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/7067.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bay không tốn KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "747": {
    "id": "747",
    "name": "Cờ xanh dương",
    "slot": "bua",
    "type": 28,
    "gender": 3,
    "icon": "icon/2325.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bật để PK đồ sát các màu cờ khác",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "748": {
    "id": "748",
    "name": "Thịt heo",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7068.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "749": {
    "id": "749",
    "name": "Thúng nếp",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7069.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "750": {
    "id": "750",
    "name": "Thúng đậu xanh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7070.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "751": {
    "id": "751",
    "name": "Lá dong",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7071.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "752": {
    "id": "752",
    "name": "Bánh tét",
    "slot": "special",
    "type": 31,
    "gender": 3,
    "icon": "icon/7079.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, tác dụng trong 60 phút",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "753": {
    "id": "753",
    "name": "Bánh chưng",
    "slot": "special",
    "type": 31,
    "gender": 3,
    "icon": "icon/7080.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, tác dụng trong 60 phút",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "754": {
    "id": "754",
    "name": "Nón Chuột may mắn",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/7085.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 769,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "755": {
    "id": "755",
    "name": "Nón Chuột may mắn",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/7091.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 771,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "756": {
    "id": "756",
    "name": "Nón Chuột may mắn",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/7088.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 770,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "757": {
    "id": "757",
    "name": "Túi Canh Tý 2020",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7097.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Mở ra sẽ nhận 1 chuột phát tài",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "758": {
    "id": "758",
    "name": "Capsule Tết 2023",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5004.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giấu bên trong nhiều vật phẩm quý giá",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "759": {
    "id": "759",
    "name": "Nâng kỹ năng 4 đệ tử",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7101.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 500,
    "desc": "Nâng chiêu 4 của đệ tử lên 1 cấp",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "760": {
    "id": "760",
    "name": "Cải trang VIP",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/7102.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Thủy Thủ Mặt Trăng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 772,
      "body": 773,
      "leg": 774,
      "bag": -1
    }
  },
  "761": {
    "id": "761",
    "name": "Avatar đeo khẩu trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/7134.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 70,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 15,
      "attackPercent": 10
    },
    "caiTrangParts": {
      "head": 775,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "762": {
    "id": "762",
    "name": "Avatar đeo khẩu trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/7140.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 70,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 15,
      "attackPercent": 10
    },
    "caiTrangParts": {
      "head": 777,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "763": {
    "id": "763",
    "name": "Avatar đeo khẩu trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/7137.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 70,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 15,
      "attackPercent": 10
    },
    "caiTrangParts": {
      "head": 776,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "764": {
    "id": "764",
    "name": "Khẩu trang",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/7149.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 2,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "765": {
    "id": "765",
    "name": "Cải trang Gohan Bư",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/4261.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Gohan Bư",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 427,
      "body": 428,
      "leg": 429,
      "bag": -1
    },
    "caitrangKey": "gohan_beast"
  },
  "766": {
    "id": "766",
    "name": "Cờ xám",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1027.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "767": {
    "id": "767",
    "name": "Cờ đen",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1026.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "768": {
    "id": "768",
    "name": "Cờ xanh lá",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1033.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "769": {
    "id": "769",
    "name": "Cờ xanh biển",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1032.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "770": {
    "id": "770",
    "name": "Cờ hồng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1028.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "771": {
    "id": "771",
    "name": "Cờ cam",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1029.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "772": {
    "id": "772",
    "name": "Cờ vàng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1031.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "773": {
    "id": "773",
    "name": "Cờ tím",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1030.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "774": {
    "id": "774",
    "name": "Cờ xanh dạ",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1025.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "775": {
    "id": "775",
    "name": "Cờ đỏ",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1034.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "776": {
    "id": "776",
    "name": "Khăn xanh lá",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1063.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "777": {
    "id": "777",
    "name": "Khăn xanh dương",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1064.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "778": {
    "id": "778",
    "name": "Khăn vàng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1065.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "779": {
    "id": "779",
    "name": "Khăn tím",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1066.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "780": {
    "id": "780",
    "name": "Khăn nâu",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1067.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "781": {
    "id": "781",
    "name": "Khăn xám",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1070.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "782": {
    "id": "782",
    "name": "Khăn đỏ",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1072.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "783": {
    "id": "783",
    "name": "Khăn hồng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1068.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "784": {
    "id": "784",
    "name": "Khăn xanh dạ",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1069.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "785": {
    "id": "785",
    "name": "Ba lô",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1038.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "786": {
    "id": "786",
    "name": "Đao",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1044.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "787": {
    "id": "787",
    "name": "Gậy",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1039.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "788": {
    "id": "788",
    "name": "Mai rùa",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1035.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "789": {
    "id": "789",
    "name": "Giỏ bơ",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1043.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "790": {
    "id": "790",
    "name": "Giỏ dưa hấu",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1040.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "791": {
    "id": "791",
    "name": "Giỏ củ cải trắng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1036.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "792": {
    "id": "792",
    "name": "Giỏ cà rốt",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1037.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "793": {
    "id": "793",
    "name": "Giỏ chuối",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1042.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "794": {
    "id": "794",
    "name": "Gậy phép",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/1084.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "795": {
    "id": "795",
    "name": "Ghế bay",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/7221.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 1500,
    "desc": "Bay không tốn KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "speed": 25
    }
  },
  "796": {
    "id": "796",
    "name": "Hộp Capsule",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7222.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm nhiệm vụ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "797": {
    "id": "797",
    "name": "Bùa Trí Tuệ",
    "slot": "special",
    "type": 13,
    "gender": 3,
    "icon": "icon/1403.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "798": {
    "id": "798",
    "name": "Bùa Mạnh Mẽ",
    "slot": "special",
    "type": 13,
    "gender": 3,
    "icon": "icon/1404.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "799": {
    "id": "799",
    "name": "Bùa Da Trâu",
    "slot": "special",
    "type": 13,
    "gender": 3,
    "icon": "icon/1405.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm bang hội",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "800": {
    "id": "800",
    "name": "Lồng đèn Cô Vy",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7226.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "801": {
    "id": "801",
    "name": "Lồng đèn Con tàu",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7227.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "802": {
    "id": "802",
    "name": "Lồng đèn Con gà",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7230.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "803": {
    "id": "803",
    "name": "Lồng đèn Con bướm",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7233.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "804": {
    "id": "804",
    "name": "Lồng đèn Đôrêmon",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7236.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "805": {
    "id": "805",
    "name": "Vòng sáng thiên thần",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7334.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "806": {
    "id": "806",
    "name": "Cải trang Đôrêmon",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/7189.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Robot Mèo ú đến từ tương lai, có nhiều bảo bối hay bị nhầm với con chồn.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 790,
      "body": 791,
      "leg": 792,
      "bag": -1
    }
  },
  "807": {
    "id": "807",
    "name": "Ngọc đen 1 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/7337.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Xương (tự động xóa khi kết thúc sự kiện)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "808": {
    "id": "808",
    "name": "Ngọc đen 2 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/7338.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Xương (tự động xóa khi kết thúc sự kiện)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "809": {
    "id": "809",
    "name": "Ngọc đen 3 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/7339.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Xương (tự động xóa khi kết thúc sự kiện)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "810": {
    "id": "810",
    "name": "Ngọc đen 4 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/7340.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Xương (tự động xóa khi kết thúc sự kiện)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "811": {
    "id": "811",
    "name": "Ngọc đen 5 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/7341.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Xương (tự động xóa khi kết thúc sự kiện)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "812": {
    "id": "812",
    "name": "Ngọc đen 6 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/7342.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Xương (tự động xóa khi kết thúc sự kiện)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "813": {
    "id": "813",
    "name": "Ngọc đen 7 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/7343.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Xương (tự động xóa khi kết thúc sự kiện)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "814": {
    "id": "814",
    "name": "Ma trơi",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7352.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "815": {
    "id": "815",
    "name": "Hồn ma Goku",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7353.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "816": {
    "id": "816",
    "name": "Hồn ma Ca đíc",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7354.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "817": {
    "id": "817",
    "name": "Hồn ma Pôcôlô",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7355.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "818": {
    "id": "818",
    "name": "Capsule Halloween",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7356.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "819": {
    "id": "819",
    "name": "Cải trang Xuka",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/7357.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Xinh đẹp, hiền lành, học giỏi đúng chuẩn con nhà người ta.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 802,
      "body": 803,
      "leg": 804,
      "bag": -1
    }
  },
  "820": {
    "id": "820",
    "name": "Vé quay ngọc đen",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7389.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để đập ngọc may mắn miễn phí ở Thượng Đế",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "821": {
    "id": "821",
    "name": "Vé quay ngọc vàng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7390.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để đập ngọc may mắn miễn phí ở Thượng Đế",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "822": {
    "id": "822",
    "name": "Cây thông",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7395.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "823": {
    "id": "823",
    "name": "Túi quà",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7396.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "824": {
    "id": "824",
    "name": "Cải trang Noel",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/7426.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Noel",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 805,
      "body": 806,
      "leg": 807,
      "bag": -1
    }
  },
  "825": {
    "id": "825",
    "name": "Cải trang Noel",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/7430.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Noel",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 809,
      "body": 806,
      "leg": 807,
      "bag": -1
    }
  },
  "826": {
    "id": "826",
    "name": "Cải trang Noel",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/7428.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Noel",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 808,
      "body": 806,
      "leg": 807,
      "bag": -1
    }
  },
  "827": {
    "id": "827",
    "name": "Cải trang Noel",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/7435.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Noel",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 810,
      "body": 811,
      "leg": 812,
      "bag": -1
    }
  },
  "828": {
    "id": "828",
    "name": "Mảnh Khủng long",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7467.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Hai chi trước của Khủng long rất ngắn nên chúng không thể cầm thức ăn được",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "829": {
    "id": "829",
    "name": "Mảnh Lợn lòi",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7468.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Lợn lòi có sở thích mài răng nanh dưới đất, vô tình tạo ra những rãnh đất để người Namec trồng trọt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "830": {
    "id": "830",
    "name": "Mảnh Quỷ đất",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7469.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bản tính của Qủy đất khá nhút nhát, chúng thường núp vào cây khi gặp người lạ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "831": {
    "id": "831",
    "name": "Mảnh Khủng long mẹ",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7470.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Hai chi trước của Khủng long rất ngắn nên chúng không thể cầm thức ăn được",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "832": {
    "id": "832",
    "name": "Mảnh Lợn lòi mẹ",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7471.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Lợn lòi có sở thích mài răng nanh dưới đất, vô tình tạo ra những rãnh đất để người Namec trồng trọt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "833": {
    "id": "833",
    "name": "Mảnh Quỷ đất mẹ",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7472.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bản tính của Qủy đất khá nhút nhát, chúng thường núp vào cây khi gặp người lạ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "834": {
    "id": "834",
    "name": "Mảnh Thằn lằn bay",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7473.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thằn lằn bay dùng cái mỏ dài và cứng để tấn công kẻ thù, đôi khi chúng vẫn dùng để gõ hạt óc chó ăn",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "835": {
    "id": "835",
    "name": "Mảnh Phi long",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7474.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng tốc độ cực nhanh để tiếp cận và hạ gục mục tiêu, Phi long cũng có sở thích hơi lạ là khi bay luôn mở to miệng để đón gió",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "836": {
    "id": "836",
    "name": "Mảnh Quỷ bay",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7475.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Sở trường tấn công chớp choáng kẻ thù, nhưng đâu ai ngờ Quỷ bay lại có bệnh sợ độ cao",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "837": {
    "id": "837",
    "name": "Mảnh Lính độc nhãn",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7476.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Người ta nuôi quân lính dùng trong 1 giờ, Lính độc nhãn thì không dùng được 5 phút",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "838": {
    "id": "838",
    "name": "Mảnh Lính độc nhãn",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7477.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Người ta nuôi quân lính dùng trong 1 giờ, Lính độc nhãn thì không dùng được 5 phút",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "839": {
    "id": "839",
    "name": "Mảnh Sói xám",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7478.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Được lính độc nhãn thuần hóa và cho giữ nhà như cún con, sở thích của chúng là được chơi trò nhặt bóng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "840": {
    "id": "840",
    "name": "Mảnh Trung úy Trắng",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7480.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thân hình hơi béo so với tiêu chuẩn chung, luôn đeo chiếc khăn quàng đỏ, thường hay mơ mộng làm thơ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "841": {
    "id": "841",
    "name": "Mảnh Ninja Áo Tím",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7481.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Ninja với nhiều tài năng để trở thành sát thủ, nhưng kỹ thuật ẩn thân lại không có, nên không thể trở thành sát thủ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "842": {
    "id": "842",
    "name": "Mảnh Trung úy Xanh Lơ",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7479.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Có siêu năng lực thôi miên nhưng cực kỳ sợ chuột",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "843": {
    "id": "843",
    "name": "Cải trang Trâu vàng",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/7489.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 816,
      "body": 817,
      "leg": 818,
      "bag": -1
    }
  },
  "844": {
    "id": "844",
    "name": "Cải trang Trâu đen",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/7551.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 822,
      "body": 823,
      "leg": 824,
      "bag": -1
    }
  },
  "845": {
    "id": "845",
    "name": "Cải trang Trâu trắng",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/7520.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 819,
      "body": 820,
      "leg": 821,
      "bag": -1
    }
  },
  "846": {
    "id": "846",
    "name": "Nón Trâu may mắn",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/7585.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 825,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "847": {
    "id": "847",
    "name": "Nón Trâu may mắn",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/7589.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 827,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "848": {
    "id": "848",
    "name": "Nón Trâu may mắn",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/7587.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 826,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "849": {
    "id": "849",
    "name": "Pháo Thăng Thiên",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/4548.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 999,
    "desc": "Bay không tốn KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "speed": 25
    }
  },
  "850": {
    "id": "850",
    "name": "Cỏ tươi",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7594.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "851": {
    "id": "851",
    "name": "Cỏ tươi",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7594.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "852": {
    "id": "852",
    "name": "Cây trúc",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7597.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "853": {
    "id": "853",
    "name": "Cải trang Trâu Nâu",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/7641.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 833,
      "body": 834,
      "leg": 835,
      "bag": -1
    }
  },
  "854": {
    "id": "854",
    "name": "Cải trang Trâu Nâu",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/7645.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 837,
      "body": 834,
      "leg": 835,
      "bag": -1
    }
  },
  "855": {
    "id": "855",
    "name": "Cải trang Trâu Nâu",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/7643.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 836,
      "body": 834,
      "leg": 835,
      "bag": -1
    }
  },
  "856": {
    "id": "856",
    "name": "Cải trang Trâu Đốm",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/7600.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 828,
      "body": 829,
      "leg": 830,
      "bag": -1
    }
  },
  "857": {
    "id": "857",
    "name": "Cải trang Trâu Đốm",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/7604.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 832,
      "body": 829,
      "leg": 830,
      "bag": -1
    }
  },
  "858": {
    "id": "858",
    "name": "Cải trang Trâu Đốm",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/7602.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 831,
      "body": 829,
      "leg": 830,
      "bag": -1
    }
  },
  "860": {
    "id": "860",
    "name": "Cải trang Mị Nương",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9631.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 841,
      "body": 842,
      "leg": 843,
      "bag": -1
    }
  },
  "861": {
    "id": "861",
    "name": "Hồng ngọc",
    "slot": "special",
    "type": 34,
    "gender": 3,
    "icon": "icon/7743.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "862": {
    "id": "862",
    "name": "Cải trang Nobita",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/7744.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Nhát như thỏ đế, lười học, mê ngủ chỉ được mỗi tài thiện xạ.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 844,
      "body": 845,
      "leg": 846,
      "bag": -1
    }
  },
  "863": {
    "id": "863",
    "name": "Cải trang Xekô",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/7808.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Con nhà giàu, học giỏi, yêu khoa học chỉ tội mỏ nhọn, lẻo méo, lươn lẹo.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 850,
      "body": 851,
      "leg": 852,
      "bag": -1
    }
  },
  "864": {
    "id": "864",
    "name": "Cải trang Chaien",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/7776.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Hay bắt nạt bạn bè, hát như bò rống chỉ được cái can đảm.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 847,
      "body": 848,
      "leg": 849,
      "bag": -1
    }
  },
  "865": {
    "id": "865",
    "name": "Kiếm Z",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7842.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "866": {
    "id": "866",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/7847.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1033,
      "body": 1027,
      "leg": 1028,
      "bag": -1
    }
  },
  "867": {
    "id": "867",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/7846.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1032,
      "body": 1034,
      "leg": 1035,
      "bag": -1
    }
  },
  "868": {
    "id": "868",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/7843.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1042,
      "body": 1047,
      "leg": 1048,
      "bag": -1
    }
  },
  "869": {
    "id": "869",
    "name": "Capsule 1 sao",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7852.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giấu bên trong nhiều vật phẩm quý giá",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "870": {
    "id": "870",
    "name": "Capsule 2 sao",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7853.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giấu bên trong nhiều vật phẩm quý giá",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "871": {
    "id": "871",
    "name": "Capsule 3 sao",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7854.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giấu bên trong nhiều vật phẩm quý giá",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "872": {
    "id": "872",
    "name": "Avatar Gohan 1",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/7855.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 856,
      "body": -1,
      "leg": -1,
      "bag": -1
    },
    "caitrangKey": "gohan_beast"
  },
  "873": {
    "id": "873",
    "name": "Avatar Gohan 2",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/7858.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 857,
      "body": -1,
      "leg": -1,
      "bag": -1
    },
    "caitrangKey": "gohan_beast"
  },
  "874": {
    "id": "874",
    "name": "Rùa con",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7861.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Mang Rùa con bị lạc về cho Quy Lão để nhận thưởng.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "875": {
    "id": "875",
    "name": "Cải trang Cadic",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/7862.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 858,
      "body": 859,
      "leg": 860,
      "bag": -1
    }
  },
  "876": {
    "id": "876",
    "name": "Cải trang Gohan",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/7894.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 861,
      "body": 862,
      "leg": 863,
      "bag": -1
    },
    "caitrangKey": "gohan_beast"
  },
  "877": {
    "id": "877",
    "name": "Cải trang Pocolo",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/7926.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 864,
      "body": 865,
      "leg": 866,
      "bag": -1
    }
  },
  "878": {
    "id": "878",
    "name": "Cải trang Cooler vàng",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6587.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 709,
      "body": 710,
      "leg": 711,
      "bag": -1
    }
  },
  "879": {
    "id": "879",
    "name": "Cải trang Thống Chế Kilo",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/6618.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 712,
      "body": 713,
      "leg": 714,
      "bag": -1
    }
  },
  "880": {
    "id": "880",
    "name": "Cua rang me",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/8060.png",
    "level": 14,
    "strRequire": 0,
    "gold": 500000000,
    "gem": 0,
    "desc": "Tặng cho Whis hoặc ăn vào để tăng 5% sức đánh trong vòng 10 phút",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "881": {
    "id": "881",
    "name": "Bạch tuộc nướng",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/8061.png",
    "level": 14,
    "strRequire": 0,
    "gold": 500000000,
    "gem": 0,
    "desc": "Tặng cho Whis hoặc ăn vào để tăng 5% sát thương khi chí mạng trong vòng 10 phút",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "882": {
    "id": "882",
    "name": "Tôm tẩm bột chiên xù",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/8062.png",
    "level": 14,
    "strRequire": 0,
    "gold": 500000000,
    "gem": 0,
    "desc": "Tặng cho Whis hoặc ăn vào để tăng 5% HP trong vòng 10 phút",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "883": {
    "id": "883",
    "name": "Cải trang Black Gohan Rose",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8095.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 879,
      "body": 880,
      "leg": 881,
      "bag": -1
    },
    "caitrangKey": "goku_black_rose"
  },
  "884": {
    "id": "884",
    "name": "Cải trang Hit",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/4969.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 520,
      "body": 521,
      "leg": 522,
      "bag": -1
    }
  },
  "885": {
    "id": "885",
    "name": "Cải trang Lích Tên",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8147.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 888,
      "body": 889,
      "leg": 890,
      "bag": -1
    }
  },
  "886": {
    "id": "886",
    "name": "Trứng vịt muối",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8130.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "887": {
    "id": "887",
    "name": "Gà quay nguyên con",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8129.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "888": {
    "id": "888",
    "name": "Bột mì",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7069.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "889": {
    "id": "889",
    "name": "Đậu xanh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7070.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "890": {
    "id": "890",
    "name": "Bánh trung thu Gà quay",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8132.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "891": {
    "id": "891",
    "name": "Bánh trung thu thập cẩm",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8131.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "892": {
    "id": "892",
    "name": "Thỏ xám",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8139.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "893": {
    "id": "893",
    "name": "Thỏ trắng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8146.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "894": {
    "id": "894",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/8201.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 645,
      "body": 646,
      "leg": 647,
      "bag": -1
    }
  },
  "895": {
    "id": "895",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/8205.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 648,
      "body": 649,
      "leg": 650,
      "bag": -1
    }
  },
  "896": {
    "id": "896",
    "name": "Avatar",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/8203.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 901,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "897": {
    "id": "897",
    "name": "Rùa bay",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/8210.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện. Dùng để bay phục hồi HP, KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "898": {
    "id": "898",
    "name": "Cải trang Zamasu",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8211.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 903,
      "body": 904,
      "leg": 905,
      "bag": -1
    }
  },
  "899": {
    "id": "899",
    "name": "Kẹo một mắt",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/8243.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện. Ăn vào +5% chí mạng trong vòng 20 phút.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "900": {
    "id": "900",
    "name": "Súp bí hắc ám",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/8244.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện. Ăn vào +10% HP trong vòng 20 phút.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "901": {
    "id": "901",
    "name": "Kẹo bàn tay",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8245.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "902": {
    "id": "902",
    "name": "Bánh gato nhện",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/8246.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện. Ăn vào +10% giáp trong vòng 20 phút.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "903": {
    "id": "903",
    "name": "Hamburger sâu",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/8247.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện. Ăn vào +10% sức đánh trong vòng 20 phút.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "904": {
    "id": "904",
    "name": "Cải trang Black Goku SSJ White",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8248.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 906,
      "body": 880,
      "leg": 881,
      "bag": -1
    },
    "caitrangKey": "goku_black_rose"
  },
  "905": {
    "id": "905",
    "name": "Cải trang Siêu Thần Trái Đất",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/8283.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 910,
      "body": 911,
      "leg": 812,
      "bag": -1
    }
  },
  "906": {
    "id": "906",
    "name": "Cải trang Mighty Mask",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8251.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 907,
      "body": 908,
      "leg": 909,
      "bag": -1
    }
  },
  "907": {
    "id": "907",
    "name": "Cải trang Siêu thần Namếc",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/8315.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 913,
      "body": 914,
      "leg": 915,
      "bag": -1
    }
  },
  "908": {
    "id": "908",
    "name": "Ma phong ba",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8185.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "909": {
    "id": "909",
    "name": "Thần chết cute",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8200.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "910": {
    "id": "910",
    "name": "Bí ngô nhí nhảnh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8192.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "911": {
    "id": "911",
    "name": "Cải trang Siêu Thần Xayda",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/5087.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 542,
      "body": 523,
      "leg": 524,
      "bag": -1
    }
  },
  "912": {
    "id": "912",
    "name": "Cải trang Gohan áo xanh",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8347.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 916,
      "body": 917,
      "leg": 918,
      "bag": -1
    },
    "caitrangKey": "gohan_beast"
  },
  "913": {
    "id": "913",
    "name": "Cải trang Póc áo đỏ",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8379.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 919,
      "body": 920,
      "leg": 921,
      "bag": -1
    }
  },
  "914": {
    "id": "914",
    "name": "Cải trang Búp bê Arale",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8411.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 922,
      "body": 923,
      "leg": 924,
      "bag": -1
    }
  },
  "915": {
    "id": "915",
    "name": "Capsule Squid Game",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8443.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "916": {
    "id": "916",
    "name": "Lính bảo vệ tam giác",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8446.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "917": {
    "id": "917",
    "name": "Lính bảo vệ vuông",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8445.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "918": {
    "id": "918",
    "name": "Lính bảo vệ tròn",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8444.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "919": {
    "id": "919",
    "name": "Búp bê",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8472.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "920": {
    "id": "920",
    "name": "Gậy như ý",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/8482.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện. Dùng để bay phục hồi HP, KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "921": {
    "id": "921",
    "name": "Bông tai Porata",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7993.png",
    "level": 1,
    "strRequire": 1500000,
    "gold": 0,
    "gem": 0,
    "desc": "Sử dụng để hợp thể với đệ tử",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "922": {
    "id": "922",
    "name": "Cải trang Goku Noel",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/8483.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 937,
      "body": 938,
      "leg": 939,
      "bag": -1
    }
  },
  "923": {
    "id": "923",
    "name": "Cải trang Pico Noel",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/8545.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 943,
      "body": 944,
      "leg": 945,
      "bag": -1
    }
  },
  "924": {
    "id": "924",
    "name": "Cải trang Ca đíc Noel",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/8514.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 940,
      "body": 941,
      "leg": 942,
      "bag": -1
    }
  },
  "925": {
    "id": "925",
    "name": "Ngọc rồng băng 1 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/8579.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Băng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "926": {
    "id": "926",
    "name": "Ngọc rồng băng 2 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/8580.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Băng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "927": {
    "id": "927",
    "name": "Ngọc rồng băng 3 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/8581.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Băng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "928": {
    "id": "928",
    "name": "Ngọc rồng băng 4 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/8582.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Băng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "929": {
    "id": "929",
    "name": "Ngọc rồng băng 5 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/8583.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Băng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "930": {
    "id": "930",
    "name": "Ngọc rồng băng 6 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/8584.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Băng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "931": {
    "id": "931",
    "name": "Ngọc rồng băng 7 sao",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/8585.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước Rồng Băng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "932": {
    "id": "932",
    "name": "Cải trang Uub",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8586.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Uub (chỉ dành cho đệ tử)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 946,
      "body": 947,
      "leg": 948,
      "bag": -1
    }
  },
  "933": {
    "id": "933",
    "name": "Mảnh vỡ bông tai",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8618.png",
    "level": 1,
    "strRequire": 0,
    "gold": 50000000,
    "gem": 0,
    "desc": "Dùng để nâng cấp bông tai Porata",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "934": {
    "id": "934",
    "name": "Mảnh hồn bông tai",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8619.png",
    "level": 1,
    "strRequire": 0,
    "gold": 250000000,
    "gem": 0,
    "desc": "Dùng để nâng cấp bông tai Porata",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "935": {
    "id": "935",
    "name": "Đá xanh lam",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8620.png",
    "level": 1,
    "strRequire": 0,
    "gold": 500000000,
    "gem": 0,
    "desc": "Dùng để nâng cấp bông tai Porata",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "936": {
    "id": "936",
    "name": "Tuần lộc nhí",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8652.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "937": {
    "id": "937",
    "name": "Cải trang Mabư Noel",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8621.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 950,
      "body": 951,
      "leg": 952,
      "bag": -1
    }
  },
  "938": {
    "id": "938",
    "name": "Cải trang Goku thời trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/8662.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 956,
      "body": 957,
      "leg": 958,
      "bag": -1
    }
  },
  "939": {
    "id": "939",
    "name": "Cải trang Pôcôlô thời trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/8724.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 959,
      "body": 960,
      "leg": 961,
      "bag": -1
    }
  },
  "940": {
    "id": "940",
    "name": "Cải trang Ca Đíc thời trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/8693.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 962,
      "body": 963,
      "leg": 964,
      "bag": -1
    }
  },
  "941": {
    "id": "941",
    "name": "Nón Hổ vàng",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8758.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 965,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "942": {
    "id": "942",
    "name": "Hổ mặp vàng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8768.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "943": {
    "id": "943",
    "name": "Hổ mặp trắng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8776.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "944": {
    "id": "944",
    "name": "Hổ mặp xanh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/8784.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "945": {
    "id": "945",
    "name": "Cải trang Goku Tarzan",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8785.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 975,
      "body": 976,
      "leg": 977,
      "bag": -1
    }
  },
  "946": {
    "id": "946",
    "name": "Nón Hổ trắng",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8818.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 979,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "947": {
    "id": "947",
    "name": "Nón Hổ xanh",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8824.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 981,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "948": {
    "id": "948",
    "name": "Cải trang Hổ vàng",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8828.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 983,
      "body": 984,
      "leg": 985,
      "bag": -1
    }
  },
  "949": {
    "id": "949",
    "name": "Thịt tươi",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7068.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "950": {
    "id": "950",
    "name": "Thịt tươi",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7068.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "951": {
    "id": "951",
    "name": "Cải trang Siêu Goku Tarzan",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8924.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 992,
      "body": 976,
      "leg": 977,
      "bag": -1
    }
  },
  "952": {
    "id": "952",
    "name": "Cải trang Hổ trắng",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8860.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 986,
      "body": 987,
      "leg": 988,
      "bag": -1
    }
  },
  "953": {
    "id": "953",
    "name": "Cải trang Hổ xanh",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/8891.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 989,
      "body": 990,
      "leg": 991,
      "bag": -1
    }
  },
  "954": {
    "id": "954",
    "name": "Bó Hoa Hồng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/8933.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "955": {
    "id": "955",
    "name": "Bó Hoa Vàng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/8934.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "956": {
    "id": "956",
    "name": "Mảnh Đội trưởng Vàng",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/8935.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Đội trưởng Vàng là một con hổ hình người chắc nịch có cơ thể được bao phủ bởi bộ lông màu vàng, Goku đã đấm hắn ra khỏi máy bay của mình khi đang ở giữa không trung.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "957": {
    "id": "957",
    "name": "Cải trang Goku võ sĩ",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/8939.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Khi Hp dưới 15% và ở gần Cải Trang Võ Sĩ khác +20% né đòn +20% sức đánh trong 5 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 997,
      "body": 998,
      "leg": 999,
      "bag": -1
    }
  },
  "958": {
    "id": "958",
    "name": "Cải trang Pôcôlô võ sĩ",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/9001.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Khi Hp dưới 15% và ở gần Cải Trang Võ Sĩ khác +20% né đòn +20% sức đánh trong 5 giây",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1000,
      "body": 1001,
      "leg": 1002,
      "bag": -1
    }
  },
  "959": {
    "id": "959",
    "name": "Cải trang Cađíc võ sĩ",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/8970.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Khi Hp dưới 15% và ở gần Cải Trang Võ Sĩ khác +20% né đòn +20% sức đánh trong 5 giây",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1003,
      "body": 1004,
      "leg": 1005,
      "bag": -1
    }
  },
  "960": {
    "id": "960",
    "name": "Cờ trắng",
    "slot": "bua",
    "type": 28,
    "gender": 3,
    "icon": "icon/9066.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bật để PK đồ sát các màu cờ khác",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "961": {
    "id": "961",
    "name": "Cờ đen",
    "slot": "bua",
    "type": 28,
    "gender": 3,
    "icon": "icon/9065.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bật để PK đồ sát các màu cờ khác",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "962": {
    "id": "962",
    "name": "Capsule thời trang 5 ngày",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9109.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "963": {
    "id": "963",
    "name": "Capsule thời trang 7 ngày",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9109.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "964": {
    "id": "964",
    "name": "Sao pha lê",
    "slot": "special",
    "type": 30,
    "gender": 3,
    "icon": "icon/9176.png",
    "level": 8,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Ép vào đồ sao pha lê để tăng chỉ số",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "965": {
    "id": "965",
    "name": "Sao pha lê",
    "slot": "special",
    "type": 30,
    "gender": 3,
    "icon": "icon/9175.png",
    "level": 9,
    "strRequire": 1,
    "gold": 0,
    "gem": 0,
    "desc": "Ép vào đồ sao pha lê để tăng chỉ số",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "966": {
    "id": "966",
    "name": "Trái bóng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9396.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "967": {
    "id": "967",
    "name": "Sao la",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9372.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "968": {
    "id": "968",
    "name": "Số 7 Goku",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9383.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "969": {
    "id": "969",
    "name": "Số 11 Gohan",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9387.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "gohan_beast"
  },
  "970": {
    "id": "970",
    "name": "Số 6 Cađíc",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9385.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "971": {
    "id": "971",
    "name": "Số 2 Krilin",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9208.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "972": {
    "id": "972",
    "name": "Số 4 Thên Xin Hăng",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9326.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "973": {
    "id": "973",
    "name": "Số 10 Pôcôlô",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9207.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "974": {
    "id": "974",
    "name": "Số 1 Mabư",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9389.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "975": {
    "id": "975",
    "name": "Số 8 Biden",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9390.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "976": {
    "id": "976",
    "name": "Số 9 Quy lão Kamê",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9395.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "977": {
    "id": "977",
    "name": "Số 3 Poc",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9393.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "978": {
    "id": "978",
    "name": "Số 5 Pic",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9358.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "979": {
    "id": "979",
    "name": "Huy chương đồng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9397.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "980": {
    "id": "980",
    "name": "Huy chương bạc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9398.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "981": {
    "id": "981",
    "name": "Huy chương vàng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9399.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "982": {
    "id": "982",
    "name": "Cúp vàng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9402.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "983": {
    "id": "983",
    "name": "Cờ cổ động",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9403.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "984": {
    "id": "984",
    "name": "Capsule SEA games",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9109.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "985": {
    "id": "985",
    "name": "Cải trang Chill",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9405.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "986": {
    "id": "986",
    "name": "Cải trang Chill cấp 2",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9142.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "987": {
    "id": "987",
    "name": "Đá bảo vệ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9406.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bảo vệ trang bị không bị rớt cấp",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "988": {
    "id": "988",
    "name": "Mở rộng túi vàng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9432.png",
    "level": 1,
    "strRequire": 0,
    "gold": 1000000000,
    "gem": 0,
    "desc": "Thêm 100 triệu sức chứa vàng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "989": {
    "id": "989",
    "name": "Cải trang Gohan Siêu Nhân",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9407.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1053,
      "body": 1054,
      "leg": 1055,
      "bag": -1
    },
    "caitrangKey": "gohan_beast"
  },
  "990": {
    "id": "990",
    "name": "Cải trang Biđen Siêu Nhân",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9433.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1056,
      "body": 1057,
      "leg": 1058,
      "bag": -1
    }
  },
  "991": {
    "id": "991",
    "name": "Cải trang Bản Cô Nương Siêu Nhân",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9458.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1059,
      "body": 1060,
      "leg": 1061,
      "bag": -1
    }
  },
  "992": {
    "id": "992",
    "name": "Nhẫn thời không sai lệch",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9067.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm nhiệm vụ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "993": {
    "id": "993",
    "name": "Giỏ thức ăn",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9489.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm nhiệm vụ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "994": {
    "id": "994",
    "name": "Vỏ ốc",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9602.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "995": {
    "id": "995",
    "name": "Cây kem",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9605.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "996": {
    "id": "996",
    "name": "Cá heo",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9608.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "997": {
    "id": "997",
    "name": "Con diều",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9611.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "998": {
    "id": "998",
    "name": "Diều rồng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9614.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "999": {
    "id": "999",
    "name": "Mèo mun",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9624.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1000": {
    "id": "1000",
    "name": "Xiên cá",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9627.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1001": {
    "id": "1001",
    "name": "Phóng lợn",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9630.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1002": {
    "id": "1002",
    "name": "Cá nóc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9595.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1003": {
    "id": "1003",
    "name": "Cá bảy màu",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9596.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1004": {
    "id": "1004",
    "name": "Cá diêu hồng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9597.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1005": {
    "id": "1005",
    "name": "Xô cá xanh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9598.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1006": {
    "id": "1006",
    "name": "Xô cá vàng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9599.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1007": {
    "id": "1007",
    "name": "Ván lướt sóng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9594.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1008": {
    "id": "1008",
    "name": "Cua đỏ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9621.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1009": {
    "id": "1009",
    "name": "Rương Tranh ngọc Namếc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5007.png",
    "level": 1,
    "strRequire": 15000,
    "gold": 0,
    "gem": 0,
    "desc": "Giấu bên trong nhiều vật phẩm quý giá",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1010": {
    "id": "1010",
    "name": "Cải trang Áo vịt cam",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/9497.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1065,
      "body": 1066,
      "leg": 1067,
      "bag": -1
    }
  },
  "1011": {
    "id": "1011",
    "name": "Cải trang Áo trắng hoa",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/9528.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1068,
      "body": 1069,
      "leg": 1070,
      "bag": -1
    }
  },
  "1012": {
    "id": "1012",
    "name": "Cải trang Nón rơm mùa hè",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/9556.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1071,
      "body": 1072,
      "leg": 1073,
      "bag": -1
    }
  },
  "1013": {
    "id": "1013",
    "name": "Kiếm ánh sáng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9649.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1014": {
    "id": "1014",
    "name": "Rađa dò ngọc Namếc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9651.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm nhiệm vụ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1015": {
    "id": "1015",
    "name": "Ngọc rồng Siêu Cấp",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9650.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1016": {
    "id": "1016",
    "name": "Thuốc mỡ Ipana",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/9068.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Trong vòng tối đa 10 phút +10% sức đánh gốc và hồi phục HP,KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1017": {
    "id": "1017",
    "name": "Thuốc mỡ Ipana đặc biệt",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/9068.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Trong vòng tối đa 30 phút +10% sức đánh gốc và hồi phục HP,KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1018": {
    "id": "1018",
    "name": "Cải trang Broly",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/9718.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Broly",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1080,
      "body": 1081,
      "leg": 1082,
      "bag": -1
    },
    "caitrangKey": "broly_lssj"
  },
  "1019": {
    "id": "1019",
    "name": "Cải trang Broly",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/9780.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Broly",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1086,
      "body": 1087,
      "leg": 1088,
      "bag": -1
    },
    "caitrangKey": "broly_lssj"
  },
  "1020": {
    "id": "1020",
    "name": "Cải trang Broly",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/9749.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Broly",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1083,
      "body": 1084,
      "leg": 1085,
      "bag": -1
    },
    "caitrangKey": "broly_lssj"
  },
  "1021": {
    "id": "1021",
    "name": "Búa Mjolnir",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9815.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1022": {
    "id": "1022",
    "name": "Búa Stormbreaker",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9814.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1023": {
    "id": "1023",
    "name": "Quạt ba tiêu",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9816.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1024": {
    "id": "1024",
    "name": "Gậy như ý",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9704.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1025": {
    "id": "1025",
    "name": "Bồ cào",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9706.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1026": {
    "id": "1026",
    "name": "Nguyệt nha sản",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9707.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1027": {
    "id": "1027",
    "name": "Quyền trượng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9705.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1028": {
    "id": "1028",
    "name": "Dao răng cưa",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9708.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1029": {
    "id": "1029",
    "name": "Lọ nước phép",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9838.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để nâng cấp Ngọc Rồng Trái Đất Siêu Cấp",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1030": {
    "id": "1030",
    "name": "Cờ Hoa đăng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9843.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1031": {
    "id": "1031",
    "name": "Cờ Hoa sen",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9844.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1032": {
    "id": "1032",
    "name": "Giấy màu",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9846.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1033": {
    "id": "1033",
    "name": "Lời chúc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9847.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1034": {
    "id": "1034",
    "name": "Nến",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9848.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1035": {
    "id": "1035",
    "name": "Khung tre",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9845.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1036": {
    "id": "1036",
    "name": "Pháo hoa",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9849.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1037": {
    "id": "1037",
    "name": "Hoa đăng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9850.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1038": {
    "id": "1038",
    "name": "Hoa đăng có lời chúc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9851.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1039": {
    "id": "1039",
    "name": "Pet Thỏ ốm",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9973.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1040": {
    "id": "1040",
    "name": "Pet Thỏ mập",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9974.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1041": {
    "id": "1041",
    "name": "Thỏ hồng Bun ma",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9975.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1095,
      "body": 1096,
      "leg": 1097,
      "bag": -1
    }
  },
  "1042": {
    "id": "1042",
    "name": "Thỏ đỏ Chi Chi",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9976.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1098,
      "body": 1099,
      "leg": 1100,
      "bag": -1
    }
  },
  "1043": {
    "id": "1043",
    "name": "Thỏ đen Android 18",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9977.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1101,
      "body": 1102,
      "leg": 1103,
      "bag": -1
    }
  },
  "1044": {
    "id": "1044",
    "name": "Sách tuyệt kỹ 1",
    "slot": "special",
    "type": 35,
    "gender": 0,
    "icon": "icon/11563.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1045": {
    "id": "1045",
    "name": "Đuôi khỉ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5072.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "khi_7"
  },
  "1046": {
    "id": "1046",
    "name": "Pet Khỉ Bong Bóng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9978.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "khi_7"
  },
  "1047": {
    "id": "1047",
    "name": "Lồng đèn lon",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/9972.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": -1,
      "body": -1,
      "leg": -1,
      "bag": 80
    }
  },
  "1048": {
    "id": "1048",
    "name": "Áo Thiên Sứ",
    "slot": "ao",
    "type": 0,
    "gender": 0,
    "icon": "icon/10165.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1049": {
    "id": "1049",
    "name": "Áo Thiên Sứ",
    "slot": "ao",
    "type": 0,
    "gender": 1,
    "icon": "icon/10185.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1050": {
    "id": "1050",
    "name": "Áo Thiên Sứ",
    "slot": "ao",
    "type": 0,
    "gender": 2,
    "icon": "icon/10175.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1051": {
    "id": "1051",
    "name": "Quần Thiên Sứ",
    "slot": "quan",
    "type": 1,
    "gender": 0,
    "icon": "icon/10166.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1052": {
    "id": "1052",
    "name": "Quần Thiên Sứ",
    "slot": "quan",
    "type": 1,
    "gender": 1,
    "icon": "icon/10186.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1053": {
    "id": "1053",
    "name": "Quần Thiên Sứ",
    "slot": "quan",
    "type": 1,
    "gender": 2,
    "icon": "icon/10176.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng HP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1054": {
    "id": "1054",
    "name": "Găng Thiên Sứ",
    "slot": "gang",
    "type": 2,
    "gender": 0,
    "icon": "icon/10168.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1055": {
    "id": "1055",
    "name": "Găng Thiên Sứ",
    "slot": "gang",
    "type": 2,
    "gender": 1,
    "icon": "icon/10188.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1056": {
    "id": "1056",
    "name": "Găng Thiên Sứ",
    "slot": "gang",
    "type": 2,
    "gender": 2,
    "icon": "icon/10178.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng sức đánh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1057": {
    "id": "1057",
    "name": "Giầy Thiên Sứ",
    "slot": "giay",
    "type": 3,
    "gender": 0,
    "icon": "icon/10167.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1058": {
    "id": "1058",
    "name": "Giầy Thiên Sứ",
    "slot": "giay",
    "type": 3,
    "gender": 1,
    "icon": "icon/10187.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1059": {
    "id": "1059",
    "name": "Giầy Thiên Sứ",
    "slot": "giay",
    "type": 3,
    "gender": 2,
    "icon": "icon/10177.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp bạn tăng MP",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1060": {
    "id": "1060",
    "name": "Nhẫn Thiên Sứ",
    "slot": "rada",
    "type": 4,
    "gender": 0,
    "icon": "icon/10169.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp tăng Chí Mạng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1061": {
    "id": "1061",
    "name": "Nhẫn Thiên Sứ",
    "slot": "rada",
    "type": 4,
    "gender": 1,
    "icon": "icon/10189.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp tăng Chí Mạng",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1062": {
    "id": "1062",
    "name": "Nhẫn Thiên Sứ",
    "slot": "rada",
    "type": 4,
    "gender": 2,
    "icon": "icon/10179.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp tăng Chí Mạng",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1063": {
    "id": "1063",
    "name": "Avatar Thiên Sứ",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/9979.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1064": {
    "id": "1064",
    "name": "Avatar Thiên Sứ",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/10099.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1065": {
    "id": "1065",
    "name": "Avatar Thiên Sứ",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/10039.png",
    "level": 15,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp giảm sát thương",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1066": {
    "id": "1066",
    "name": "Mảnh áo",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10197.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập đủ 999 đến gặp Whis tại hành tinh Bill",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1067": {
    "id": "1067",
    "name": "Mảnh quần",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10198.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập đủ 999 đến gặp Whis tại hành tinh Bill",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1068": {
    "id": "1068",
    "name": "Mảnh giầy",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10199.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập đủ 999 đến gặp Whis tại hành tinh Bill",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1069": {
    "id": "1069",
    "name": "Mảnh nhẫn",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10201.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập đủ 999 đến gặp Whis tại hành tinh Bill",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1070": {
    "id": "1070",
    "name": "Mảnh găng tay",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10200.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập đủ 999 đến gặp Whis tại hành tinh Bill",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1071": {
    "id": "1071",
    "name": "Công thức",
    "slot": "pet",
    "type": 27,
    "gender": 0,
    "icon": "icon/10210.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Chế tạo trang bị thiên sứ Trái Đất",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1072": {
    "id": "1072",
    "name": "Công thức",
    "slot": "pet",
    "type": 27,
    "gender": 1,
    "icon": "icon/10212.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Chế tạo trang bị thiên sứ Namếc",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1073": {
    "id": "1073",
    "name": "Công thức",
    "slot": "pet",
    "type": 27,
    "gender": 2,
    "icon": "icon/10211.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Chế tạo trang bị thiên sứ Xayda",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1074": {
    "id": "1074",
    "name": "Đá nâng cấp cấp 1",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10202.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1075": {
    "id": "1075",
    "name": "Đá nâng cấp cấp 2",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10203.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1076": {
    "id": "1076",
    "name": "Đá nâng cấp cấp 3",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10204.png",
    "level": 3,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1077": {
    "id": "1077",
    "name": "Đá nâng cấp cấp 4",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10205.png",
    "level": 4,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1078": {
    "id": "1078",
    "name": "Đá nâng cấp cấp 5",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10195.png",
    "level": 5,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1079": {
    "id": "1079",
    "name": "Đá may mắn cấp 1",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10206.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1080": {
    "id": "1080",
    "name": "Đá may mắn cấp 2",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10207.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1081": {
    "id": "1081",
    "name": "Đá may mắn cấp 3",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10208.png",
    "level": 3,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1082": {
    "id": "1082",
    "name": "Đá may mắn cấp 4",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10209.png",
    "level": 4,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1083": {
    "id": "1083",
    "name": "Đá may mắn cấp 5",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10196.png",
    "level": 5,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1084": {
    "id": "1084",
    "name": "Công thức VIP",
    "slot": "pet",
    "type": 27,
    "gender": 0,
    "icon": "icon/10213.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Chế tạo trang bị thiên sứ Trái Đất",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1085": {
    "id": "1085",
    "name": "Công thức VIP",
    "slot": "pet",
    "type": 27,
    "gender": 1,
    "icon": "icon/10215.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Chế tạo trang bị thiên sứ Namếc",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1086": {
    "id": "1086",
    "name": "Công thức VIP",
    "slot": "pet",
    "type": 27,
    "gender": 2,
    "icon": "icon/10214.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Chế tạo trang bị thiên sứ Xayda",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1087": {
    "id": "1087",
    "name": "Tanjiro",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/10216.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Sức đánh chí mạng tăng 30% trong 15 giây, mỗi 120 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1119,
      "body": 1120,
      "leg": 1121,
      "bag": -1
    }
  },
  "1088": {
    "id": "1088",
    "name": "Inosuke Hashibira",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/10247.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tăng 60% giáp trong 20 giây, mỗi 120 giây, 30% khi ở các võ đài và Ngọc Rồng Sao Đen",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1122,
      "body": 1123,
      "leg": 1124,
      "bag": -1
    }
  },
  "1089": {
    "id": "1089",
    "name": "Inosuke",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/10342.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tăng 50% giáp trong 20 giây, mỗi 120 giây, 25% khi ở các võ đài và Ngọc Rồng Sao Đen",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1131,
      "body": 1132,
      "leg": 1133,
      "bag": -1
    }
  },
  "1090": {
    "id": "1090",
    "name": "Zenitsu",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/10278.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Làm mọi người lo lắng bị ảnh hưởng 30% tỉ lệ hụt khi đánh quái",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1125,
      "body": 1126,
      "leg": 1127,
      "bag": -1
    }
  },
  "1091": {
    "id": "1091",
    "name": "Nezuko",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/10311.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Trạng thái điên loạn: Sức đánh +15%, hồi 3% HP, KI cho bản thân và người ở gần trong 10 giây, mỗi 120 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1128,
      "body": 1129,
      "leg": 1130,
      "bag": -1
    }
  },
  "1092": {
    "id": "1092",
    "name": "Gậy Quy Lão",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/10485.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện. Dùng để bay phục hồi HP, KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1093": {
    "id": "1093",
    "name": "Đất trồng cây",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10478.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1094": {
    "id": "1094",
    "name": "Phân bón",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10479.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1095": {
    "id": "1095",
    "name": "Hạt mầm",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10480.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1096": {
    "id": "1096",
    "name": "Thuốc tăng trưởng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10481.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1097": {
    "id": "1097",
    "name": "Chậu sứ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10483.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1098": {
    "id": "1098",
    "name": "Hoa hồng xanh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10482.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1099": {
    "id": "1099",
    "name": "Chậu hoa hồng xanh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10484.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1100": {
    "id": "1100",
    "name": "Chậu hoa ăn thịt",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10486.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, cắn gây sát thương 5% Hp mọi người xung quanh mỗi 5 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1101": {
    "id": "1101",
    "name": "Lời chúc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10489.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1102": {
    "id": "1102",
    "name": "Lời chúc VIP",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10490.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1103": {
    "id": "1103",
    "name": "Marron",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/10440.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1140,
      "body": 1141,
      "leg": 1142,
      "bag": -1
    }
  },
  "1104": {
    "id": "1104",
    "name": "Poc satan",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/10491.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1146,
      "body": 1147,
      "leg": 1148,
      "bag": -1
    }
  },
  "1105": {
    "id": "1105",
    "name": "Bun ma phù thủy",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/10522.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "+10% né đòn cho mọi người trong 5 giây, hồi skill 20 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1149,
      "body": 1150,
      "leg": 1151,
      "bag": -1
    }
  },
  "1106": {
    "id": "1106",
    "name": "Biden dracula",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/10553.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Phản sát thương 3% trong 5 giây, hồi skill 20 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1152,
      "body": 1153,
      "leg": 1154,
      "bag": -1
    }
  },
  "1107": {
    "id": "1107",
    "name": "Pet Bí Ma Vương",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10589.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tăng 5% giáp cho chủ nhân trong 5 giây, hồi skill 20 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1108": {
    "id": "1108",
    "name": "Đinh ba Satan",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10600.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1109": {
    "id": "1109",
    "name": "Chổi phù thủy",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10601.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1110": {
    "id": "1110",
    "name": "Cánh thiên thần",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10602.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1111": {
    "id": "1111",
    "name": "Cánh thiên thần 2",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10603.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1112": {
    "id": "1112",
    "name": "Cây nắp ấm",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10614.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1113": {
    "id": "1113",
    "name": "Cá Chà Bá",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10617.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1114": {
    "id": "1114",
    "name": "Pet Ma vàng phù thủy",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10597.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tăng 5% chí mạng cho chủ nhân trong 5 giây, hồi skill 20 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1115": {
    "id": "1115",
    "name": "Máy dò Ngọc rồng sự kiện",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/434.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để tìm kiếm Ngọc rồng sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1116": {
    "id": "1116",
    "name": "Hòm Halloween",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10626.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1117": {
    "id": "1117",
    "name": "Thiệp Halloween",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10627.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1118": {
    "id": "1118",
    "name": "W",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10628.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập các mảnh WORLD CUP 2022 và đến gặp Quy Lão",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1119": {
    "id": "1119",
    "name": "O",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10629.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập các mảnh WORLD CUP 2022 và đến gặp Quy Lão",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1120": {
    "id": "1120",
    "name": "R",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10630.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập các mảnh WORLD CUP 2022 và đến gặp Quy Lão",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1121": {
    "id": "1121",
    "name": "L",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10631.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập các mảnh WORLD CUP 2022 và đến gặp Quy Lão",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1122": {
    "id": "1122",
    "name": "D",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10632.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập các mảnh WORLD CUP 2022 và đến gặp Quy Lão",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1123": {
    "id": "1123",
    "name": "C",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10633.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập các mảnh WORLD CUP 2022 và đến gặp Quy Lão",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1124": {
    "id": "1124",
    "name": "U",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10634.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập các mảnh WORLD CUP 2022 và đến gặp Quy Lão",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1125": {
    "id": "1125",
    "name": "P",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10635.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập các mảnh WORLD CUP 2022 và đến gặp Quy Lão",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1126": {
    "id": "1126",
    "name": "20",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10636.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập các mảnh WORLD CUP 2022 và đến gặp Quy Lão",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1127": {
    "id": "1127",
    "name": "22",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10637.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập các mảnh WORLD CUP 2022 và đến gặp Quy Lão",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1128": {
    "id": "1128",
    "name": "Cờ logo Quatar 1",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10638.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1129": {
    "id": "1129",
    "name": "Cờ logo Quatar 2",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10639.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1130": {
    "id": "1130",
    "name": "Cờ giày vàng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10640.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1131": {
    "id": "1131",
    "name": "Quả bóng siêu việt",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/10664.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1132": {
    "id": "1132",
    "name": "Fan cuồng bóng đá",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10667.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1133": {
    "id": "1133",
    "name": "Fan gà nửa mùa",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10666.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1134": {
    "id": "1134",
    "name": "Thiệp World Cup",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10668.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1135": {
    "id": "1135",
    "name": "Capsule World Cup",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10678.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1136": {
    "id": "1136",
    "name": "Capsule World Cup VIP",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10679.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1137": {
    "id": "1137",
    "name": "Cờ GOAL",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10641.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1138": {
    "id": "1138",
    "name": "Cờ FIFA",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10642.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1139": {
    "id": "1139",
    "name": "Quả Bóng Vàng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10643.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1140": {
    "id": "1140",
    "name": "Mèo mun đột biến",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10697.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1141": {
    "id": "1141",
    "name": "Phiếu giảm giá Black Friday",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/4030.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "goku_black_rose"
  },
  "1142": {
    "id": "1142",
    "name": "Bong bóng heo",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10706.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1143": {
    "id": "1143",
    "name": "Đá bảo vệ (Khóa)",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9406.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Bảo vệ trang bị không bị rớt cấp",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1144": {
    "id": "1144",
    "name": "Phượng hoàng lửa",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/10710.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1145": {
    "id": "1145",
    "name": "Cải trang Black goku ssj 3 White",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/10711.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1169,
      "body": 880,
      "leg": 881,
      "bag": -1
    },
    "caitrangKey": "goku_black_rose"
  },
  "1146": {
    "id": "1146",
    "name": "Avatar Gohan White",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/10686.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "gohan_beast"
  },
  "1147": {
    "id": "1147",
    "name": "Avatar Gohan White",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/10686.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "gohan_beast"
  },
  "1148": {
    "id": "1148",
    "name": "Avatar Gohan White",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/10707.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "gohan_beast"
  },
  "1149": {
    "id": "1149",
    "name": "Cánh thiên sứ hắc ám",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10694.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1150": {
    "id": "1150",
    "name": "Cuồng nộ 2",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/10716.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Trong vòng tối đa 10 phút +120% sức đánh gốc",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1151": {
    "id": "1151",
    "name": "Bổ khí 2",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/10715.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Trong vòng tối đa 10 phút +120% KI",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1152": {
    "id": "1152",
    "name": "Bổ huyết 2",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/10714.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Trong vòng tối đa 10 phút +120% HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1153": {
    "id": "1153",
    "name": "Giáp Xên bọ hung 2",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/10712.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Trong vòng tối đa 10 phút giảm 60% sát thương ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1154": {
    "id": "1154",
    "name": "Ẩn danh 2",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/10717.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Khi bạn cần sự riêng tư +10 phút (tối đa 40 phút) hạ địch không để lại tên trong danh sách kẻ thù và không cho phép người khác dịch chuyển tức thời đến",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1155": {
    "id": "1155",
    "name": "Noel 2022 Goku",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/10718.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1156": {
    "id": "1156",
    "name": "Noel 2022 Cađíc",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/10749.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1157": {
    "id": "1157",
    "name": "Noel 2022 Pôcôlô",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/10780.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1158": {
    "id": "1158",
    "name": "Chú lùn",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10840.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1159": {
    "id": "1159",
    "name": "Chú lùn",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10841.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1160": {
    "id": "1160",
    "name": "Chú lùn",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10842.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1161": {
    "id": "1161",
    "name": "Chú lùn",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10843.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1162": {
    "id": "1162",
    "name": "Chú lùn",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10844.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1163": {
    "id": "1163",
    "name": "Chú lùn",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10845.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1164": {
    "id": "1164",
    "name": "Chú lùn",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10846.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1165": {
    "id": "1165",
    "name": "Chuông đồng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10847.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1166": {
    "id": "1166",
    "name": "Cá tuyết",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10848.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1167": {
    "id": "1167",
    "name": "Bánh quy",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10849.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1168": {
    "id": "1168",
    "name": "Kẹo đường",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10850.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1169": {
    "id": "1169",
    "name": "Kẹo người tuyết",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10851.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1170": {
    "id": "1170",
    "name": "Gói quà",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10852.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1171": {
    "id": "1171",
    "name": "Túi 7 chú lùn",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10853.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1172": {
    "id": "1172",
    "name": "Xe heo tuần lộc",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/10855.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1173": {
    "id": "1173",
    "name": "Rương Mảnh Thiên Sứ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10854.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1174": {
    "id": "1174",
    "name": "Kimono",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/10915.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1189,
      "body": 1190,
      "leg": 1191,
      "bag": -1
    }
  },
  "1175": {
    "id": "1175",
    "name": "Kimono",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/10973.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1195,
      "body": 1196,
      "leg": 1197,
      "bag": -1
    }
  },
  "1176": {
    "id": "1176",
    "name": "Kimono",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/10944.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1192,
      "body": 1193,
      "leg": 1194,
      "bag": -1
    }
  },
  "1177": {
    "id": "1177",
    "name": "Mãng cầu",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10884.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1178": {
    "id": "1178",
    "name": "Quả dừa",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10885.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1179": {
    "id": "1179",
    "name": "Đu đủ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10886.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1180": {
    "id": "1180",
    "name": "Quả xoài",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10887.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1181": {
    "id": "1181",
    "name": "Trái sung",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10888.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1182": {
    "id": "1182",
    "name": "Mâm ngũ quả",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10889.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1183": {
    "id": "1183",
    "name": "Bao lì xì mèo",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11005.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1184": {
    "id": "1184",
    "name": "Gói quà đặc biệt",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10892.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1185": {
    "id": "1185",
    "name": "Cành mai",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10899.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1186": {
    "id": "1186",
    "name": "Cành đào",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10903.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1187": {
    "id": "1187",
    "name": "Hộp quà Tết 2023",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11006.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1188": {
    "id": "1188",
    "name": "Pet mèo đen đuôi vàng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10877.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tăng 5% chí mạng cho chủ nhân trong 5 giây, hồi skill 20 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1189": {
    "id": "1189",
    "name": "Xúc xích xông khói",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/10890.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1190": {
    "id": "1190",
    "name": "Dĩa thức ăn cho mèo",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/10891.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1191": {
    "id": "1191",
    "name": "Thiệp chúc tết",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10893.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1192": {
    "id": "1192",
    "name": "Thiệp chúc tết",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10894.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1193": {
    "id": "1193",
    "name": "Thiệp chúc tết",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/10895.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1194": {
    "id": "1194",
    "name": "Phiếu bé ngoan",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11007.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1195": {
    "id": "1195",
    "name": "Xí muội Hoa đào",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/10905.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Trong vòng tối đa 10 phút +20% sức đánh gốc",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1196": {
    "id": "1196",
    "name": "Xí muội Hoa mai",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/10904.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Trong vòng tối đa 10 phút +20% HP",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1197": {
    "id": "1197",
    "name": "Bóng Vịt Vàng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/10876.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1198": {
    "id": "1198",
    "name": "Nón mèo",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/10910.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1186,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "1199": {
    "id": "1199",
    "name": "Nón mèo",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/10914.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1188,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "1200": {
    "id": "1200",
    "name": "Nón mèo",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/10912.png",
    "level": 0,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để thay đổi khuôn mặt",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1187,
      "body": -1,
      "leg": -1,
      "bag": -1
    }
  },
  "1201": {
    "id": "1201",
    "name": "Karin Kid Lân",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11008.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1202": {
    "id": "1202",
    "name": "Pet mèo trắng đuôi vàng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11040.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tăng 3% chí mạng cho chủ nhân trong 5 giây, hồi skill 20 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1203": {
    "id": "1203",
    "name": "Pet mèo trắng đuôi vàng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11040.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tăng 3% chí mạng cho chủ nhân trong 5 giây, hồi skill 20 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1204": {
    "id": "1204",
    "name": "Mảnh Rồng thần Namếc",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/11048.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Rồng thần của Namếc do trưởng lão hành tinh này tạo ra. Khác với Rồng thiêng của Trái Đất, Rồng thần Namếc có thân hình màu xanh to lớn, đồ sộ và đáng sợ hơn. Có thể thực hiện 3 điều ước.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1205": {
    "id": "1205",
    "name": "Drabura Frost",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11053.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Đóng băng mọi người xung quanh mỗi 30 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1207,
      "body": 1208,
      "leg": 1209,
      "bag": -1
    }
  },
  "1206": {
    "id": "1206",
    "name": "Trái tim Valentine",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/11047.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, đẹp hơn khi dùng phiên bản 2.2.8 trở lên",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1207": {
    "id": "1207",
    "name": "Pet Minion",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9709.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tăng 3% chí mạng cho chủ nhân trong 5 giây, hồi skill 20 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1208": {
    "id": "1208",
    "name": "Bunma tóc xanh neon",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11153.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "+3% sức đánh, tối đa 10% khi ở gần Bunma tóc xanh, nâu, tím mới",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1213,
      "body": 1214,
      "leg": 1215,
      "bag": -1
    }
  },
  "1209": {
    "id": "1209",
    "name": "Bunma tóc nâu băng đô",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11157.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "+3% sức đánh, tối đa 10% khi ở gần Bunma tóc xanh, nâu, tím mới",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1216,
      "body": 1214,
      "leg": 1215,
      "bag": -1
    }
  },
  "1210": {
    "id": "1210",
    "name": "Bunma tóc tím thắt bím",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11161.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "+3% sức đánh, tối đa 10% khi ở gần Bunma tóc xanh, nâu, tím mới",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1217,
      "body": 1214,
      "leg": 1215,
      "bag": -1
    }
  },
  "1211": {
    "id": "1211",
    "name": "Sách tuyệt kỹ 1",
    "slot": "special",
    "type": 35,
    "gender": 1,
    "icon": "icon/11567.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1212": {
    "id": "1212",
    "name": "Sách tuyệt kỹ 1",
    "slot": "special",
    "type": 35,
    "gender": 2,
    "icon": "icon/11565.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1213": {
    "id": "1213",
    "name": "Pet mèo Hoàng Thượng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/11163.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, đẹp hơn khi dùng phiên bản 2.2.8 trở lên",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1214": {
    "id": "1214",
    "name": "Cơm nếp",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11195.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1215": {
    "id": "1215",
    "name": "Ván cơm nếp",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11196.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1216": {
    "id": "1216",
    "name": "Tệp cơm nếp",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11197.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1217": {
    "id": "1217",
    "name": "Lá dong",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11198.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1218": {
    "id": "1218",
    "name": "Sợi Cói",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11199.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1219": {
    "id": "1219",
    "name": "Tệp bánh chưng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11200.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1220": {
    "id": "1220",
    "name": "Ngà voi",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11203.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1221": {
    "id": "1221",
    "name": "Cựa gà",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11204.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1222": {
    "id": "1222",
    "name": "Hồng mao",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11205.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1223": {
    "id": "1223",
    "name": "Bóng khí Gas",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/11216.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Hôi, giảm 5% HP người xung quanh mỗi 20 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1224": {
    "id": "1224",
    "name": "Pet Voi Chín Ngà",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11232.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tăng 15% giáp cho chủ nhân trong 10 giây, hồi skill 20 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1225": {
    "id": "1225",
    "name": "Pet Gà Chín Cựa",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11233.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tăng 15% giáp cho chủ nhân trong 10 giây, hồi skill 20 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1226": {
    "id": "1226",
    "name": "Pet Ngựa Chín Hồng mao",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11234.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tăng 15% giáp cho chủ nhân trong 10 giây, hồi skill 20 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1227": {
    "id": "1227",
    "name": "Hộp quà thường",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11201.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1228": {
    "id": "1228",
    "name": "Hộp quà cao cấp",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11202.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1229": {
    "id": "1229",
    "name": "Bí kíp tuyệt kỹ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11238.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Gặp Whis tại hành tinh Bill",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1230": {
    "id": "1230",
    "name": "Hào Quang Rực Rỡ",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/11239.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện, đẹp hơn khi dùng phiên bản 2.2.8 trở lên",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1231": {
    "id": "1231",
    "name": "Gậy thượng đế",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/11245.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1232": {
    "id": "1232",
    "name": "Bình chứa nhỏ",
    "slot": "bua",
    "type": 29,
    "gender": 1,
    "icon": "icon/11192.png",
    "level": 1,
    "strRequire": 0,
    "gold": 500000000,
    "gem": 0,
    "desc": "Trong vòng tối đa 30 phút +1 nạn nhân bị Ma phong ba",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1233": {
    "id": "1233",
    "name": "Nồi cơm điện",
    "slot": "bua",
    "type": 29,
    "gender": 1,
    "icon": "icon/11173.png",
    "level": 1,
    "strRequire": 0,
    "gold": 1000000000,
    "gem": 0,
    "desc": "Trong vòng tối đa 30 phút +3 nạn nhân bị Ma phong ba",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1234": {
    "id": "1234",
    "name": "Cải trang Pic Thợ Lặn 2023",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11293.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giảm 5% sức đánh của người xung quanh, tối đa ảnh hưởng 10 người 1 lúc. Nếu đang mặc cải trang hè 2023 sẽ không bị ảnh hưởng lên người",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1239,
      "body": 1240,
      "leg": 1241,
      "bag": -1
    }
  },
  "1235": {
    "id": "1235",
    "name": "Cải trang Poc Bikini 2023",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11259.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giảm 5% sức đánh của người xung quanh, tối đa ảnh hưởng 10 người 1 lúc. Nếu đang mặc cải trang hè 2023 sẽ không bị ảnh hưởng lên người",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1236,
      "body": 1237,
      "leg": 1238,
      "bag": -1
    }
  },
  "1236": {
    "id": "1236",
    "name": "Cải trang King Kong Sành Điệu 2023",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11325.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giảm 5% sức đánh của người xung quanh, tối đa ảnh hưởng 10 người 1 lúc. Nếu đang mặc cải trang hè 2023 sẽ không bị ảnh hưởng lên người",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caiTrangParts": {
      "head": 1242,
      "body": 1243,
      "leg": 1244,
      "bag": -1
    }
  },
  "1237": {
    "id": "1237",
    "name": "Cành khô",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11246.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1238": {
    "id": "1238",
    "name": "Nước Suối Tinh Khiết",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11247.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1239": {
    "id": "1239",
    "name": "Gỗ Lớn",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11248.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1240": {
    "id": "1240",
    "name": "Que đốt",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11249.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1241": {
    "id": "1241",
    "name": "Bồn tắm gỗ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11250.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1242": {
    "id": "1242",
    "name": "Bồn tắm vàng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11251.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1243": {
    "id": "1243",
    "name": "Pet bọ cánh cứng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11371.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1244": {
    "id": "1244",
    "name": "Pet ngài đêm",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11372.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1245": {
    "id": "1245",
    "name": "Bọ Kiến Vương Hai Sừng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11252.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1246": {
    "id": "1246",
    "name": "Bọ Hung Tê Giác",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11253.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1247": {
    "id": "1247",
    "name": "Bọ Kẹp Kìm",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11254.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1248": {
    "id": "1248",
    "name": "Bọ Cánh Cứng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11255.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1249": {
    "id": "1249",
    "name": "Ngài Đêm",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11256.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1250": {
    "id": "1250",
    "name": "Hũ Mật Ong",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11257.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1251": {
    "id": "1251",
    "name": "Vợt Bắt Bọ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11258.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1252": {
    "id": "1252",
    "name": "Ve Sầu Xên",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/11373.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1253": {
    "id": "1253",
    "name": "Ve Sầu Xên Tiến Hóa",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/11374.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1254": {
    "id": "1254",
    "name": "Búa hắc hường",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/11422.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1255": {
    "id": "1255",
    "name": "Cải trang Mabư Còm",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11455.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1256": {
    "id": "1256",
    "name": "Pet heo bướm",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11462.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1257": {
    "id": "1257",
    "name": "Xe triều đình",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11463.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1258": {
    "id": "1258",
    "name": "Hồn ma",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11471.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1259": {
    "id": "1259",
    "name": "Bình phép",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11472.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1260": {
    "id": "1260",
    "name": "Lọ nước hồi sinh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11473.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1261": {
    "id": "1261",
    "name": "Bùa hồi sinh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11474.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1262": {
    "id": "1262",
    "name": "Lích Tên",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11475.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1263": {
    "id": "1263",
    "name": "Siêu Lích Tên",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11476.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1264": {
    "id": "1264",
    "name": "Máy dò linh hồn",
    "slot": "bua",
    "type": 29,
    "gender": 3,
    "icon": "icon/11493.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1265": {
    "id": "1265",
    "name": "Yajirobe Zoro",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11526.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1266": {
    "id": "1266",
    "name": "Avatar Gohan sẹo",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/10680.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "gohan_beast"
  },
  "1267": {
    "id": "1267",
    "name": "Avatar Gohan sẹo",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/11477.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "gohan_beast"
  },
  "1268": {
    "id": "1268",
    "name": "Avatar Gohan sẹo",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/10680.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "gohan_beast"
  },
  "1269": {
    "id": "1269",
    "name": "Avatar Gohan Blue sẹo",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/10682.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "gohan_beast"
  },
  "1270": {
    "id": "1270",
    "name": "Avatar Gohan Blue sẹo",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/11480.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "gohan_beast"
  },
  "1271": {
    "id": "1271",
    "name": "Avatar Gohan Blue sẹo",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/10682.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "gohan_beast"
  },
  "1272": {
    "id": "1272",
    "name": "Đài sen hồng",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/11527.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1273": {
    "id": "1273",
    "name": "Đài sen vàng",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/11528.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1274": {
    "id": "1274",
    "name": "Cải trang Cumber",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11529.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1275": {
    "id": "1275",
    "name": "Cải trang Cumber SSJ",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11530.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1276": {
    "id": "1276",
    "name": "Cải trang Nguyệt thần",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11531.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1277": {
    "id": "1277",
    "name": "Cải trang Nhật thần",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11641.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1278": {
    "id": "1278",
    "name": "Sách tuyệt kỹ 2",
    "slot": "special",
    "type": 35,
    "gender": 0,
    "icon": "icon/11564.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1279": {
    "id": "1279",
    "name": "Sách tuyệt kỹ 2",
    "slot": "special",
    "type": 35,
    "gender": 1,
    "icon": "icon/11568.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1280": {
    "id": "1280",
    "name": "Sách tuyệt kỹ 2",
    "slot": "special",
    "type": 35,
    "gender": 2,
    "icon": "icon/11566.png",
    "level": 2,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1281": {
    "id": "1281",
    "name": "Trang sách cũ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11570.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1282": {
    "id": "1282",
    "name": "Bìa sách",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11571.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1283": {
    "id": "1283",
    "name": "Cuốn sách cũ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11569.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1284": {
    "id": "1284",
    "name": "Bùa giám định",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11573.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1285": {
    "id": "1285",
    "name": "Kìm bấm giấy",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11572.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm hổ trợ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1286": {
    "id": "1286",
    "name": "Kẻ thao túng sói",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11611.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 2,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 5,
      "crit": 5
    }
  },
  "1287": {
    "id": "1287",
    "name": "Nước anh bao",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11609.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 2,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 5,
      "hpPercent": 5,
      "kiPercent": 5
    }
  },
  "1288": {
    "id": "1288",
    "name": "Chiến thần khóa nick",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11607.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1289": {
    "id": "1289",
    "name": "Đại gia mới nhú",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11608.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 2,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 10
    }
  },
  "1290": {
    "id": "1290",
    "name": "Trùm ước rồng",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11618.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 2,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 6
    }
  },
  "1291": {
    "id": "1291",
    "name": "Trùm săn Boss",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11617.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 2,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 5
    }
  },
  "1292": {
    "id": "1292",
    "name": "Thánh đập đồ +7",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11615.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 2,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 10,
      "kiPercent": 10
    }
  },
  "1293": {
    "id": "1293",
    "name": "Cao thủ siêu hạng",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11614.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 2,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 8
    }
  },
  "1294": {
    "id": "1294",
    "name": "Nông dân chăm chỉ",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11612.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 2,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 5,
      "kiPercent": 5
    }
  },
  "1295": {
    "id": "1295",
    "name": "Ông thần ve chai",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11613.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 2,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 3,
      "kiPercent": 3
    }
  },
  "1296": {
    "id": "1296",
    "name": "Bị móc sạch túi",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11606.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 2,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 5,
      "kiPercent": 5
    }
  },
  "1297": {
    "id": "1297",
    "name": "Ăn bám trà xanh",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11605.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1298": {
    "id": "1298",
    "name": "Chuyên gia lượm nhặt",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/9399.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1299": {
    "id": "1299",
    "name": "Fan cứng",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11610.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 2,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "attackPercent": 3,
      "hpPercent": 3,
      "kiPercent": 3
    }
  },
  "1300": {
    "id": "1300",
    "name": "Thánh ở dơ",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11616.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 2,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {
      "hpPercent": 5,
      "kiPercent": 5
    }
  },
  "1301": {
    "id": "1301",
    "name": "Cờ khỉ hoàng đế",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/11678.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "khi_7"
  },
  "1302": {
    "id": "1302",
    "name": "Cải trang",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11621.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Sa tăng (chỉ dành cho đệ tử)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1303": {
    "id": "1303",
    "name": "Lồng đèn thỏ trắng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/11679.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1304": {
    "id": "1304",
    "name": "Kiếm gỗ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11674.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1305": {
    "id": "1305",
    "name": "Ánh trăng tròn",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11673.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1306": {
    "id": "1306",
    "name": "Bánh dẻo thỏ cấp 1",
    "slot": "special",
    "type": 31,
    "gender": 3,
    "icon": "icon/11675.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1307": {
    "id": "1307",
    "name": "Bánh dẻo thỏ cấp 2",
    "slot": "special",
    "type": 31,
    "gender": 3,
    "icon": "icon/11676.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1308": {
    "id": "1308",
    "name": "Bánh dẻo thỏ cấp 3",
    "slot": "special",
    "type": 31,
    "gender": 3,
    "icon": "icon/11677.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1309": {
    "id": "1309",
    "name": "Bunma Ả rập Xê út",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11680.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1310": {
    "id": "1310",
    "name": "Thỏ ngọc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11712.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1311": {
    "id": "1311",
    "name": "Lồng đèn treo",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11713.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Dùng để treo lên dàn lồng đèn",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1312": {
    "id": "1312",
    "name": "Hạt sen",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11714.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1313": {
    "id": "1313",
    "name": "Bánh trung thu Hạt sen",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11715.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1314": {
    "id": "1314",
    "name": "Hộp giấy",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11717.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1315": {
    "id": "1315",
    "name": "Túi giấy",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11716.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1316": {
    "id": "1316",
    "name": "Giỏ bánh trung thu",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11718.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1317": {
    "id": "1317",
    "name": "Giỏ bánh trung thu độc đáo",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11719.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1318": {
    "id": "1318",
    "name": "Pet Mông Quỷ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11726.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1319": {
    "id": "1319",
    "name": "Sách đấm Dragon",
    "slot": "special",
    "type": 37,
    "gender": 0,
    "icon": "icon/644.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kĩ năng đấm Dragon",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1320": {
    "id": "1320",
    "name": "Sách Kamejoko",
    "slot": "special",
    "type": 37,
    "gender": 0,
    "icon": "icon/651.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kĩ năng Kamejoko",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1321": {
    "id": "1321",
    "name": "Thái Dương Hạ San",
    "slot": "special",
    "type": 37,
    "gender": 0,
    "icon": "icon/658.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học Thái Dương Hạ San",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1322": {
    "id": "1322",
    "name": "Kaioken",
    "slot": "special",
    "type": 37,
    "gender": 0,
    "icon": "icon/716.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kỹ năng Kaioken",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1323": {
    "id": "1323",
    "name": "Quả cầu Kênh Khi",
    "slot": "special",
    "type": 37,
    "gender": 0,
    "icon": "icon/717.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kỹ năng Quả Cầu Kênh Khi",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1324": {
    "id": "1324",
    "name": "Sách Dịch Chuyển",
    "slot": "special",
    "type": 37,
    "gender": 0,
    "icon": "icon/3783.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học phép Dịch Chuyển",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1325": {
    "id": "1325",
    "name": "Sách Thôi Miên",
    "slot": "special",
    "type": 37,
    "gender": 0,
    "icon": "icon/3782.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học phép Thôi Miên",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1326": {
    "id": "1326",
    "name": "Sách đấm Demon",
    "slot": "special",
    "type": 37,
    "gender": 1,
    "icon": "icon/665.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kĩ năng đấm Demon",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1327": {
    "id": "1327",
    "name": "Sách Masenko",
    "slot": "special",
    "type": 37,
    "gender": 1,
    "icon": "icon/672.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kĩ năng Masenko",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1328": {
    "id": "1328",
    "name": "Sách học Trị thương",
    "slot": "special",
    "type": 37,
    "gender": 1,
    "icon": "icon/1090.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học trị thương",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1329": {
    "id": "1329",
    "name": "Makankosappo",
    "slot": "special",
    "type": 37,
    "gender": 1,
    "icon": "icon/723.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kỹ năng Makankosappo",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1330": {
    "id": "1330",
    "name": "Đẻ trứng",
    "slot": "special",
    "type": 37,
    "gender": 1,
    "icon": "icon/722.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kỹ năng đẻ trứng",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1331": {
    "id": "1331",
    "name": "Sách Biến Sôcôla",
    "slot": "special",
    "type": 37,
    "gender": 1,
    "icon": "icon/3780.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kĩ năng Biến Sôcôla",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1332": {
    "id": "1332",
    "name": "Sách Liên hoàn",
    "slot": "special",
    "type": 37,
    "gender": 1,
    "icon": "icon/3778.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học liên hoàn chiêu",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1333": {
    "id": "1333",
    "name": "Sách đấm Galick",
    "slot": "special",
    "type": 37,
    "gender": 2,
    "icon": "icon/679.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kĩ năng đấm Galick",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1334": {
    "id": "1334",
    "name": "Sách Antomic",
    "slot": "special",
    "type": 37,
    "gender": 2,
    "icon": "icon/686.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kĩ năng Antomic",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1335": {
    "id": "1335",
    "name": "Tái tạo năng lượng",
    "slot": "special",
    "type": 37,
    "gender": 2,
    "icon": "icon/1097.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học Tái tạo năng lượng",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1336": {
    "id": "1336",
    "name": "Hóa khỉ khổng lồ",
    "slot": "special",
    "type": 37,
    "gender": 2,
    "icon": "icon/718.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kỹ năng hóa thành khỉ khổng lồ",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "khi_7"
  },
  "1337": {
    "id": "1337",
    "name": "Bom hi sinh",
    "slot": "special",
    "type": 37,
    "gender": 2,
    "icon": "icon/2248.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kỹ năng bom hi sinh",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1338": {
    "id": "1338",
    "name": "Sách Trói",
    "slot": "special",
    "type": 37,
    "gender": 2,
    "icon": "icon/3779.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học phép trói",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1339": {
    "id": "1339",
    "name": "Sách Huýt Sáo",
    "slot": "special",
    "type": 37,
    "gender": 2,
    "icon": "icon/3781.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học phép Huýt Sáo",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1340": {
    "id": "1340",
    "name": "Khiên năng lượng",
    "slot": "special",
    "type": 37,
    "gender": 3,
    "icon": "icon/3784.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kĩ năng khiên năng lượng",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1341": {
    "id": "1341",
    "name": "Sách Super Kamejoko",
    "slot": "special",
    "type": 37,
    "gender": 0,
    "icon": "icon/11162.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kỹ năng Super Kamejoko",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1342": {
    "id": "1342",
    "name": "Sách Ma phong ba",
    "slot": "special",
    "type": 37,
    "gender": 1,
    "icon": "icon/11194.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kỹ năng Ma phong ba",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1343": {
    "id": "1343",
    "name": "Sách Cađíc liên hoàn chưởng",
    "slot": "special",
    "type": 37,
    "gender": 2,
    "icon": "icon/11193.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "học kỹ năng Cađíc liên hoàn chưởng",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1344": {
    "id": "1344",
    "name": "Con Cat hường",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/11727.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1345": {
    "id": "1345",
    "name": "Thú cưỡi mèo kéo xương",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/11728.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1346": {
    "id": "1346",
    "name": "Thú cưỡi Xe bí ngô",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/11730.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1347": {
    "id": "1347",
    "name": "Pet Mèo Phù Thủy",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11729.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1348": {
    "id": "1348",
    "name": "Giỏ đựng ngọc bí",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11748.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1349": {
    "id": "1349",
    "name": "Giỏ đựng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11736.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1350": {
    "id": "1350",
    "name": "Kẹo não người",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11737.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1351": {
    "id": "1351",
    "name": "Dây buộc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11738.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1352": {
    "id": "1352",
    "name": "Bó kẹo kinh dị",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11739.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1353": {
    "id": "1353",
    "name": "Giỏ kẹo kinh dị",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11740.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1354": {
    "id": "1354",
    "name": "Giấy trang trí Halloween",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11742.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1355": {
    "id": "1355",
    "name": "Giỏ đựng kẹo trái bí",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11741.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1356": {
    "id": "1356",
    "name": "Hộp Kẹo Ma Quỷ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11743.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1357": {
    "id": "1357",
    "name": "Kẹo bí ngô",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11749.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1358": {
    "id": "1358",
    "name": "Cờ hồn Mabư",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/11747.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1359": {
    "id": "1359",
    "name": "Cờ hồn Xên Bọ Hung",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/11746.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1360": {
    "id": "1360",
    "name": "Cờ Ma đèn nhảy múa",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/11744.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1361": {
    "id": "1361",
    "name": "Cờ Ma đèn hút hồn",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/11745.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1362": {
    "id": "1362",
    "name": "Cải trang Thầy giáo Ca Lích",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/11760.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1363": {
    "id": "1363",
    "name": "Thú cưỡi con Cat hường",
    "slot": "special",
    "type": 23,
    "gender": 3,
    "icon": "icon/11792.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1364": {
    "id": "1364",
    "name": "Lá trà tươi",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11793.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1365": {
    "id": "1365",
    "name": "Nia tre",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11794.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1366": {
    "id": "1366",
    "name": "Que tre",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11795.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1367": {
    "id": "1367",
    "name": "Hoa cúc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11796.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1368": {
    "id": "1368",
    "name": "Túi trà khô",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11797.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1369": {
    "id": "1369",
    "name": "Hộp trà",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11798.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1370": {
    "id": "1370",
    "name": "Hộp trà hoa cúc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11799.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1371": {
    "id": "1371",
    "name": "Cải trang đệ tử Tí",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11878.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện (chỉ dành cho đệ tử)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1372": {
    "id": "1372",
    "name": "Bao bì thiệp",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11800.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1373": {
    "id": "1373",
    "name": "Mảnh giấy",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11801.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1374": {
    "id": "1374",
    "name": "Keo dán",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11802.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1375": {
    "id": "1375",
    "name": "Lời chúc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11803.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1376": {
    "id": "1376",
    "name": "Thiệp chúc thường",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11804.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1377": {
    "id": "1377",
    "name": "Thiệp chúc đặc biệt",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11805.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1378": {
    "id": "1378",
    "name": "Cải trang Thầy giáo Cađíc",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/11913.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1379": {
    "id": "1379",
    "name": "Cải trang Thầy giáo Pô cô lô",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/11946.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1380": {
    "id": "1380",
    "name": "Cải trang đệ tử Sửu",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11979.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện (chỉ dành cho đệ tử)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1381": {
    "id": "1381",
    "name": "Cải trang đệ tử Dần",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/12090.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện (chỉ dành cho đệ tử)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1382": {
    "id": "1382",
    "name": "Kéo tỉa hoa đặc biệt",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11807.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1383": {
    "id": "1383",
    "name": "Cải trang Thầy giáo Raddit",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/12024.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1384": {
    "id": "1384",
    "name": "Cải trang Thầy giáo Goku",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/12057.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1385": {
    "id": "1385",
    "name": "Cải trang Thầy giáo Quy Lão",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/11844.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1386": {
    "id": "1386",
    "name": "Bút chì hồng",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/11879.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1387": {
    "id": "1387",
    "name": "Kéo tỉa hoa",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11807.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1388": {
    "id": "1388",
    "name": "Bó hoa hồng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11808.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1389": {
    "id": "1389",
    "name": "Avatar Cử nhân",
    "slot": "caitrang",
    "type": 5,
    "gender": 0,
    "icon": "icon/11989.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1390": {
    "id": "1390",
    "name": "Avatar Cử nhân",
    "slot": "caitrang",
    "type": 5,
    "gender": 1,
    "icon": "icon/11991.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_base",
    "maxSocket": 7,
    "stats": {}
  },
  "1391": {
    "id": "1391",
    "name": "Avatar Cử nhân",
    "slot": "caitrang",
    "type": 5,
    "gender": 2,
    "icon": "icon/11990.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_huy_diet",
    "maxSocket": 7,
    "stats": {}
  },
  "1392": {
    "id": "1392",
    "name": "Gõ đầu trẻ",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11880.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1393": {
    "id": "1393",
    "name": "Gõ đầu trẻ",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11880.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1394": {
    "id": "1394",
    "name": "Gõ đầu trẻ",
    "slot": "special",
    "type": 36,
    "gender": 3,
    "icon": "icon/11880.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Danh hiệu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1395": {
    "id": "1395",
    "name": "Đóa hoa hồng",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/11806.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "1396": {
    "id": "1396",
    "name": "Cải trang Super Píc",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5932.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang thành Android sát thủ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2000": {
    "id": "2000",
    "name": "Capsule Hồng Ngọc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6782.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2001": {
    "id": "2001",
    "name": "Cải trang Hải Tặc",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/5721.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Hải Tặc Tí Hon",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2002": {
    "id": "2002",
    "name": "Cải trang Super Black Goku",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5173.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "goku_black_rose"
  },
  "2003": {
    "id": "2003",
    "name": "Cải trang Black Goku",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/5141.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "goku_black_rose"
  },
  "2004": {
    "id": "2004",
    "name": "Ngọc cường hóa",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6688.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Tăng 100% tỉ lệ nâng cấp thành công.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2005": {
    "id": "2005",
    "name": "Trứng linh thú",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6532.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Khi nở ra sẽ xuất hiện linh thú.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2006": {
    "id": "2006",
    "name": "Đá linh lực",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6529.png",
    "level": 1,
    "strRequire": 0,
    "gold": 149999999,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2007": {
    "id": "2007",
    "name": "Đá thăng cấp",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6530.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2008": {
    "id": "2008",
    "name": "Hồn linh thú",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6528.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2009": {
    "id": "2009",
    "name": "Bùa linh thú",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6531.png",
    "level": 1,
    "strRequire": 0,
    "gold": 249999999,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2010": {
    "id": "2010",
    "name": "Dreamlet",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6534.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Có 20% giúp chủ nhân kháng TDHS",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2011": {
    "id": "2011",
    "name": "Prodraxis",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6536.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp chủ nhân kháng hiệu ứng bất lợi",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2012": {
    "id": "2012",
    "name": "Hỏa điểu",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6538.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "giúp chủ nhân không ảnh hưởng bởi cái lạnh.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2013": {
    "id": "2013",
    "name": "Ác linh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6540.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Sức đánh chí mạng tăng theo cấp độ trong 30 giây, mỗi 120 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2014": {
    "id": "2014",
    "name": "Thiên sứ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6542.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Giúp chủ nhân miễn nhiễm thương trí mạng thời gian tăng theo cấp độ. mỗi 60 giây",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2015": {
    "id": "2015",
    "name": "Pegasus",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6544.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Không có nội tại ẩn",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2016": {
    "id": "2016",
    "name": "Capsule linh thú",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6984.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2017": {
    "id": "2017",
    "name": "Rương Cải Trang Hit",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6548.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2018": {
    "id": "2018",
    "name": "Capsule phụ kiện",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7223.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Capsule phụ kiện chứa rất nhiều phụ kiện VIP + Hiếm",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2019": {
    "id": "2019",
    "name": "Capsule Pet",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/7223.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Capsule phụ kiện chứa rất nhiều Pet VIP + Hiếm",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2020": {
    "id": "2020",
    "name": "Hộp quà cải trang",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6551.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Hộp quà cải trang phụ kiện chứa rất nhiều cải trang VIP + Hiếm",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2021": {
    "id": "2021",
    "name": "Mảnh áo thần linh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6523.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2022": {
    "id": "2022",
    "name": "Mảnh quần thần linh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6524.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2023": {
    "id": "2023",
    "name": "Mảnh găng thần linh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6525.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2024": {
    "id": "2024",
    "name": "Mảnh giày thần linh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6526.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2025": {
    "id": "2025",
    "name": "Mảnh nhẫn thần linh",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6527.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2026": {
    "id": "2026",
    "name": "Cải trang Vegeta SSJ 4",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9208.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Super Saiyan 4 Vegeta",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2027": {
    "id": "2027",
    "name": "Cải trang Goku SSJ 4",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9388.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Super Saiyan 4 Goku",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2028": {
    "id": "2028",
    "name": "Cải trang SSJ4 Vegito",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9177.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang SSJ4 Vegito",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2029": {
    "id": "2029",
    "name": "Đá kích hoạt",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6552.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Nguyên liệu chế tạo trang bị kích hoạt.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2030": {
    "id": "2030",
    "name": "Cải trang Fusion Zamasu",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9390.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Fusion Zamasu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2031": {
    "id": "2031",
    "name": "Cải trang Omega Shenron",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9326.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Omega Shenron",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2032": {
    "id": "2032",
    "name": "Cải trang Kameoren",
    "slot": "caitrang",
    "type": 5,
    "gender": 3,
    "icon": "icon/9392.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cải trang Kameoren",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2033": {
    "id": "2033",
    "name": "Ngọc Rồng 1 sao đen",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/6690.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2034": {
    "id": "2034",
    "name": "Ngọc Rồng 2 sao đen",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/6691.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2035": {
    "id": "2035",
    "name": "Ngọc Rồng 3 sao đen",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/6692.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2036": {
    "id": "2036",
    "name": "Ngọc Rồng 4 sao đen",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/6693.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2037": {
    "id": "2037",
    "name": "Ngọc Rồng 5 sao đen",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/6694.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2038": {
    "id": "2038",
    "name": "Ngọc Rồng 6 sao đen",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/6695.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2039": {
    "id": "2039",
    "name": "Ngọc Rồng 7 sao đen",
    "slot": "special",
    "type": 12,
    "gender": 3,
    "icon": "icon/6696.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Thu thập để ước rồng thần ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2040": {
    "id": "2040",
    "name": "Kiếm Z",
    "slot": "vanbay",
    "type": 11,
    "gender": 3,
    "icon": "icon/7842.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện (chỉ dành cho đệ tử)",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2041": {
    "id": "2041",
    "name": "Tinh thể",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6697.png",
    "level": 1,
    "strRequire": 0,
    "gold": 500000000,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2042": {
    "id": "2042",
    "name": "Đá ngục tù",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6698.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2043": {
    "id": "2043",
    "name": "Mảnh Beerus",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/4847.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Beerus là vị thần mạnh nhất trong vũ trụ 7, ngay cả các Kaio cũng phải khiếp sợ ông.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2044": {
    "id": "2044",
    "name": "Mảnh Champa",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/4879.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Champa là một vị Thần Hủy Diệt người cai quản cả vũ trụ thứ 6, luôn đi cùng với \\\"người giám hộ\\\" kiêm giáo viên của mình Vados.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2045": {
    "id": "2045",
    "name": "Mảnh Piccolo",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/6815.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Piccolo là 1 phản diện về sau là người bạn thân của Goku cũng là người thầy của Gohan",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2046": {
    "id": "2046",
    "name": "Mảnh Cumber",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/11529.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Cumber là một chiến minh mạnh mẽ tại hành tinh ngục tù ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2047": {
    "id": "2047",
    "name": "Mảnh Zamasu",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/8211.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Zamasu là 1 người điềm tĩnh, cẩn thận trong giao tiếp cũng như chiến đấu. Hắn khá quan tâm đến tương lai của vũ trụ, luôn đặt các câu hỏi về giá trị của con người trong vũ trụ và nghi ngờ về khả năng bản thân",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2048": {
    "id": "2048",
    "name": "Mảnh Whis",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/7679.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Whis là thiên sứ đi theo Beerus",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2049": {
    "id": "2049",
    "name": "Mảnh Xên Bọ Hung",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/2407.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Xên Bọ Hung là tác phẩm cuối cùng của nhà Bác học Gero",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2050": {
    "id": "2050",
    "name": "Mảnh Kid Buu",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/4300.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Kid Buu là trạng thái nguyên thủy của Mabu",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2051": {
    "id": "2051",
    "name": "Mảnh Android 17",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/1348.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": " Android 17 là một con người bình thường, em trai song sinh với Android 18. Sau này bị Dr. Gero cải tạo thành người máy nhằm mục đích trả thù Goku",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2052": {
    "id": "2052",
    "name": "Mảnh Warrior",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/3852.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Warrior là Siêu Chiến Binh của hành tinh Namek",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2053": {
    "id": "2053",
    "name": "Mảnh Black Goku",
    "slot": "pet",
    "type": 33,
    "gender": 3,
    "icon": "icon/5141.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Black Goku là nhân vật phản diện do Zamasu ăn trộm cơ thể của goku",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {},
    "caitrangKey": "goku_black_rose"
  },
  "2054": {
    "id": "2054",
    "name": "Rương mảnh thẻ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6699.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Vật phẩm sự kiện",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2055": {
    "id": "2055",
    "name": "Capsule hỗ trợ nhiệm vụ",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/9109.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Capsule này sẽ giúp bạn bỏ qua nhiệm vụ Tiểu Đội Sát Thủ",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  },
  "2056": {
    "id": "2056",
    "name": "Mèo đen",
    "slot": "pet",
    "type": 27,
    "gender": 3,
    "icon": "icon/6700.png",
    "level": 1,
    "strRequire": 0,
    "gold": 0,
    "gem": 0,
    "desc": "Mở ra sẽ nhận được 1 linh thú mèo giúp tăng 10% TNSM Sư phụ và đệ tử.",
    "setVisual": "set_cam",
    "maxSocket": 7,
    "stats": {}
  }
};

export const TORI_MAPS = [
  {
    "id": 0,
    "name": "Làng Aru",
    "planetId": 0,
    "tileId": 1,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Đồi hoa cúc",
        "minX": 1224,
        "minY": 408,
        "maxX": 1248,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 1,
        "goX": 60,
        "goY": 384
      },
      {
        "name": "Nhà Gôhan",
        "minX": 288,
        "minY": 408,
        "maxX": 360,
        "maxY": 432,
        "isEnter": true,
        "isOffline": true,
        "goMapId": 21,
        "goX": 444,
        "goY": 336
      },
      {
        "name": "Vách núi Aru",
        "minX": 0,
        "minY": 408,
        "maxX": 24,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 42,
        "goX": 1380,
        "goY": 432
      }
    ],
    "mobs": [
      {
        "templateId": 0,
        "level": 1,
        "x": 780,
        "y": 432
      },
      {
        "templateId": 0,
        "level": 1,
        "x": 900,
        "y": 432
      },
      {
        "templateId": 0,
        "level": 1,
        "x": 1020,
        "y": 432
      },
      {
        "templateId": 0,
        "level": 1,
        "x": 660,
        "y": 432
      }
    ],
    "npcs": [
      {
        "status": 0,
        "x": 500,
        "y": 432,
        "templateId": 67,
        "avatar": 2132
      },
      {
        "status": 1,
        "x": 228,
        "y": 432,
        "templateId": 7,
        "avatar": 562
      },
      {
        "status": 1,
        "x": 492,
        "y": 432,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 1,
    "name": "Đồi hoa cúc",
    "planetId": 0,
    "tileId": 1,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Làng Aru",
        "minX": 0,
        "minY": 360,
        "maxX": 24,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 0,
        "goX": 1188,
        "goY": 432
      },
      {
        "name": "Thung lũng tre",
        "minX": 1512,
        "minY": 336,
        "maxX": 1536,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 2,
        "goX": 60,
        "goY": 360
      },
      {
        "name": "Rừng Karin",
        "minX": 1200,
        "minY": 336,
        "maxX": 1272,
        "maxY": 360,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 47,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [
      {
        "templateId": 1,
        "level": 2,
        "x": 348,
        "y": 384
      },
      {
        "templateId": 1,
        "level": 2,
        "x": 804,
        "y": 408
      },
      {
        "templateId": 1,
        "level": 2,
        "x": 972,
        "y": 360
      },
      {
        "templateId": 1,
        "level": 2,
        "x": 540,
        "y": 408
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 468,
        "y": 312,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 2,
    "name": "Thung lũng tre",
    "planetId": 0,
    "tileId": 1,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Đồi hoa cúc",
        "minX": 0,
        "minY": 336,
        "maxX": 24,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 1,
        "goX": 1476,
        "goY": 360
      },
      {
        "name": "Rừng nấm",
        "minX": 1224,
        "minY": 264,
        "maxX": 1248,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 3,
        "goX": 60,
        "goY": 408
      },
      {
        "name": "Trạm tàu vũ trụ",
        "minX": 552,
        "minY": 360,
        "maxX": 624,
        "maxY": 384,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 24,
        "goX": 276,
        "goY": 336
      }
    ],
    "mobs": [
      {
        "templateId": 4,
        "level": 3,
        "x": 348,
        "y": 408
      },
      {
        "templateId": 1,
        "level": 2,
        "x": 996,
        "y": 288
      },
      {
        "templateId": 1,
        "level": 2,
        "x": 876,
        "y": 336
      },
      {
        "templateId": 4,
        "level": 3,
        "x": 756,
        "y": 336
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 180,
        "y": 360,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 3,
    "name": "Rừng nấm",
    "planetId": 0,
    "tileId": 2,
    "bgId": 1,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Thung lũng tre",
        "minX": 0,
        "minY": 384,
        "maxX": 24,
        "maxY": 408,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 2,
        "goX": 1188,
        "goY": 288
      },
      {
        "name": "Rừng xương",
        "minX": 1608,
        "minY": 312,
        "maxX": 1632,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 4,
        "goX": 60,
        "goY": 312
      },
      {
        "name": "Rừng Bamboo",
        "minX": 1344,
        "minY": 312,
        "maxX": 1416,
        "maxY": 336,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 27,
        "goX": 60,
        "goY": 192
      }
    ],
    "mobs": [
      {
        "templateId": 1,
        "level": 2,
        "x": 372,
        "y": 408
      },
      {
        "templateId": 1,
        "level": 2,
        "x": 540,
        "y": 408
      },
      {
        "templateId": 1,
        "level": 2,
        "x": 732,
        "y": 408
      },
      {
        "templateId": 4,
        "level": 3,
        "x": 1140,
        "y": 336
      },
      {
        "templateId": 7,
        "level": 4,
        "x": 444,
        "y": 288
      },
      {
        "templateId": 7,
        "level": 4,
        "x": 708,
        "y": 288
      },
      {
        "templateId": 7,
        "level": 4,
        "x": 924,
        "y": 240
      },
      {
        "templateId": 7,
        "level": 4,
        "x": 1188,
        "y": 240
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 204,
        "y": 408,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 4,
    "name": "Rừng xương",
    "planetId": 0,
    "tileId": 2,
    "bgId": 1,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Rừng nấm",
        "minX": 0,
        "minY": 288,
        "maxX": 24,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 3,
        "goX": 1572,
        "goY": 336
      },
      {
        "name": "Đảo Kamê",
        "minX": 1608,
        "minY": 312,
        "maxX": 1632,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 5,
        "goX": 60,
        "goY": 288
      }
    ],
    "mobs": [
      {
        "templateId": 4,
        "level": 3,
        "x": 1044,
        "y": 360
      },
      {
        "templateId": 4,
        "level": 3,
        "x": 684,
        "y": 360
      },
      {
        "templateId": 7,
        "level": 4,
        "x": 444,
        "y": 264
      },
      {
        "templateId": 7,
        "level": 4,
        "x": 852,
        "y": 240
      },
      {
        "templateId": 7,
        "level": 4,
        "x": 1260,
        "y": 288
      },
      {
        "templateId": 10,
        "level": 5,
        "x": 612,
        "y": 144
      },
      {
        "templateId": 10,
        "level": 5,
        "x": 1092,
        "y": 144
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 180,
        "y": 312,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 5,
    "name": "Đảo Kamê",
    "planetId": 0,
    "tileId": 3,
    "bgId": 2,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Rừng xương",
        "minX": 0,
        "minY": 264,
        "maxX": 24,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 4,
        "goX": 1572,
        "goY": 336
      },
      {
        "name": "Đông Karin",
        "minX": 1704,
        "minY": 264,
        "maxX": 1728,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 6,
        "goX": 55,
        "goY": 336
      },
      {
        "name": "Nam Kamê",
        "minX": 792,
        "minY": 384,
        "maxX": 864,
        "maxY": 408,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 29,
        "goX": 780,
        "goY": 360
      }
    ],
    "mobs": [
      {
        "templateId": 13,
        "level": 7,
        "x": 420,
        "y": 288
      },
      {
        "templateId": 13,
        "level": 7,
        "x": 540,
        "y": 384
      },
      {
        "templateId": 13,
        "level": 7,
        "x": 1548,
        "y": 408
      }
    ],
    "npcs": [
      {
        "status": 0,
        "x": 984,
        "y": 408,
        "templateId": 39,
        "avatar": 2993
      },
      {
        "status": 1,
        "x": 1068,
        "y": 408,
        "templateId": 13,
        "avatar": 564
      },
      {
        "status": 1,
        "x": 204,
        "y": 288,
        "templateId": 6,
        "avatar": 0
      },
      {
        "status": 0,
        "x": 1205,
        "y": 408,
        "templateId": 21,
        "avatar": 1410
      },
      {
        "status": 0,
        "x": 1318,
        "y": 408,
        "templateId": 54,
        "avatar": 1410
      }
    ]
  },
  {
    "id": 6,
    "name": "Đông Karin",
    "planetId": 0,
    "tileId": 4,
    "bgId": 3,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Đảo Kamê",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 5,
        "goX": 1668,
        "goY": 288
      }
    ],
    "mobs": [
      {
        "templateId": 19,
        "level": 8,
        "x": 228,
        "y": 336
      },
      {
        "templateId": 19,
        "level": 8,
        "x": 396,
        "y": 336
      },
      {
        "templateId": 19,
        "level": 8,
        "x": 564,
        "y": 336
      },
      {
        "templateId": 25,
        "level": 8,
        "x": 780,
        "y": 168
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 1092,
        "y": 336,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 7,
    "name": "Làng Mori",
    "planetId": 1,
    "tileId": 5,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 4,
    "waypoints": [
      {
        "name": "Đồi nấm tím",
        "minX": 1224,
        "minY": 408,
        "maxX": 1248,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 8,
        "goX": 60,
        "goY": 432
      },
      {
        "name": "Nhà Moori",
        "minX": 384,
        "minY": 408,
        "maxX": 456,
        "maxY": 432,
        "isEnter": true,
        "isOffline": true,
        "goMapId": 22,
        "goX": 252,
        "goY": 336
      },
      {
        "name": "Vách núi Moori",
        "minX": 0,
        "minY": 384,
        "maxX": 24,
        "maxY": 408,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 43,
        "goX": 1380,
        "goY": 432
      }
    ],
    "mobs": [
      {
        "templateId": 0,
        "level": 1,
        "x": 708,
        "y": 432
      },
      {
        "templateId": 0,
        "level": 1,
        "x": 804,
        "y": 432
      },
      {
        "templateId": 0,
        "level": 1,
        "x": 900,
        "y": 432
      },
      {
        "templateId": 0,
        "level": 1,
        "x": 996,
        "y": 432
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 564,
        "y": 432,
        "templateId": 6,
        "avatar": 0
      },
      {
        "status": 1,
        "x": 300,
        "y": 432,
        "templateId": 8,
        "avatar": 350
      }
    ]
  },
  {
    "id": 8,
    "name": "Đồi nấm tím",
    "planetId": 1,
    "tileId": 5,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 4,
    "waypoints": [
      {
        "name": "Làng Mori",
        "minX": 0,
        "minY": 408,
        "maxX": 24,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 7,
        "goX": 1188,
        "goY": 432
      },
      {
        "name": "Thị trấn Moori",
        "minX": 1224,
        "minY": 384,
        "maxX": 1248,
        "maxY": 408,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 9,
        "goX": 60,
        "goY": 216
      }
    ],
    "mobs": [
      {
        "templateId": 2,
        "level": 2,
        "x": 276,
        "y": 384
      },
      {
        "templateId": 2,
        "level": 2,
        "x": 444,
        "y": 336
      },
      {
        "templateId": 2,
        "level": 2,
        "x": 636,
        "y": 288
      },
      {
        "templateId": 2,
        "level": 2,
        "x": 852,
        "y": 360
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 1020,
        "y": 408,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 9,
    "name": "Thị trấn Moori",
    "planetId": 1,
    "tileId": 5,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 4,
    "waypoints": [
      {
        "name": "Đồi nấm tím",
        "minX": 0,
        "minY": 192,
        "maxX": 24,
        "maxY": 216,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 8,
        "goX": 1188,
        "goY": 408
      },
      {
        "name": "Thung lũng Maima",
        "minX": 1224,
        "minY": 240,
        "maxX": 1248,
        "maxY": 264,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 11,
        "goX": 60,
        "goY": 384
      },
      {
        "name": "Trạm tàu vũ trụ",
        "minX": 696,
        "minY": 432,
        "maxX": 768,
        "maxY": 456,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 25,
        "goX": 276,
        "goY": 336
      }
    ],
    "mobs": [
      {
        "templateId": 2,
        "level": 2,
        "x": 276,
        "y": 288
      },
      {
        "templateId": 2,
        "level": 2,
        "x": 396,
        "y": 336
      },
      {
        "templateId": 5,
        "level": 3,
        "x": 540,
        "y": 384
      },
      {
        "templateId": 5,
        "level": 3,
        "x": 924,
        "y": 336
      },
      {
        "templateId": 2,
        "level": 2,
        "x": 1044,
        "y": 312
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 156,
        "y": 216,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 10,
    "name": "Thung lũng Namếc",
    "planetId": 1,
    "tileId": 6,
    "bgId": 5,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Đảo Guru",
        "minX": 0,
        "minY": 264,
        "maxX": 24,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 13,
        "goX": 1668,
        "goY": 336
      }
    ],
    "mobs": [
      {
        "templateId": 20,
        "level": 8,
        "x": 228,
        "y": 288
      },
      {
        "templateId": 26,
        "level": 8,
        "x": 828,
        "y": 288
      },
      {
        "templateId": 20,
        "level": 8,
        "x": 420,
        "y": 288
      },
      {
        "templateId": 20,
        "level": 8,
        "x": 588,
        "y": 288
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 1044,
        "y": 288,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 11,
    "name": "Thung lũng Maima",
    "planetId": 1,
    "tileId": 7,
    "bgId": 6,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Thị trấn Moori",
        "minX": 0,
        "minY": 360,
        "maxX": 24,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 9,
        "goX": 1188,
        "goY": 264
      },
      {
        "name": "Vực maima",
        "minX": 1560,
        "minY": 288,
        "maxX": 1584,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 12,
        "goX": 60,
        "goY": 408
      },
      {
        "name": "Núi hoa vàng",
        "minX": 1248,
        "minY": 360,
        "maxX": 1320,
        "maxY": 384,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 31,
        "goX": 60,
        "goY": 240
      }
    ],
    "mobs": [
      {
        "templateId": 2,
        "level": 2,
        "x": 348,
        "y": 384
      },
      {
        "templateId": 5,
        "level": 3,
        "x": 636,
        "y": 336
      },
      {
        "templateId": 2,
        "level": 2,
        "x": 852,
        "y": 432
      },
      {
        "templateId": 2,
        "level": 2,
        "x": 1044,
        "y": 336
      },
      {
        "templateId": 8,
        "level": 4,
        "x": 636,
        "y": 216
      },
      {
        "templateId": 8,
        "level": 4,
        "x": 396,
        "y": 264
      },
      {
        "templateId": 8,
        "level": 4,
        "x": 876,
        "y": 240
      },
      {
        "templateId": 8,
        "level": 4,
        "x": 1092,
        "y": 216
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 180,
        "y": 384,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 12,
    "name": "Vực maima",
    "planetId": 1,
    "tileId": 7,
    "bgId": 6,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Thung lũng Maima",
        "minX": 0,
        "minY": 384,
        "maxX": 24,
        "maxY": 408,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 11,
        "goX": 1524,
        "goY": 312
      },
      {
        "name": "Đảo Guru",
        "minX": 1560,
        "minY": 360,
        "maxX": 1584,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 13,
        "goX": 60,
        "goY": 264
      }
    ],
    "mobs": [
      {
        "templateId": 5,
        "level": 3,
        "x": 660,
        "y": 288
      },
      {
        "templateId": 5,
        "level": 3,
        "x": 1068,
        "y": 288
      },
      {
        "templateId": 8,
        "level": 4,
        "x": 372,
        "y": 312
      },
      {
        "templateId": 8,
        "level": 4,
        "x": 852,
        "y": 336
      },
      {
        "templateId": 8,
        "level": 4,
        "x": 1212,
        "y": 216
      },
      {
        "templateId": 11,
        "level": 5,
        "x": 516,
        "y": 144
      },
      {
        "templateId": 11,
        "level": 5,
        "x": 1044,
        "y": 144
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 180,
        "y": 408,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 13,
    "name": "Đảo Guru",
    "planetId": 1,
    "tileId": 8,
    "bgId": 7,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Vực maima",
        "minX": 0,
        "minY": 240,
        "maxX": 24,
        "maxY": 264,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 12,
        "goX": 1524,
        "goY": 384
      },
      {
        "name": "Thung lũng Namếc",
        "minX": 1704,
        "minY": 312,
        "maxX": 1728,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 10,
        "goX": 60,
        "goY": 288
      },
      {
        "name": "Nam Guru",
        "minX": 456,
        "minY": 360,
        "maxX": 528,
        "maxY": 384,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 33,
        "goX": 708,
        "goY": 360
      }
    ],
    "mobs": [
      {
        "templateId": 14,
        "level": 7,
        "x": 1188,
        "y": 384
      },
      {
        "templateId": 14,
        "level": 7,
        "x": 1020,
        "y": 384
      },
      {
        "templateId": 14,
        "level": 7,
        "x": 1380,
        "y": 312
      }
    ],
    "npcs": [
      {
        "status": 0,
        "x": 640,
        "y": 380,
        "templateId": 22,
        "avatar": 1411
      },
      {
        "status": 0,
        "x": 846,
        "y": 384,
        "templateId": 39,
        "avatar": 2993
      },
      {
        "status": 1,
        "x": 732,
        "y": 384,
        "templateId": 14,
        "avatar": 566
      },
      {
        "status": 1,
        "x": 252,
        "y": 264,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 14,
    "name": "Làng Kakarot",
    "planetId": 2,
    "tileId": 9,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Đồi hoang",
        "minX": 1224,
        "minY": 384,
        "maxX": 1248,
        "maxY": 408,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 15,
        "goX": 60,
        "goY": 408
      },
      {
        "name": "Nhà Broly",
        "minX": 504,
        "minY": 384,
        "maxX": 576,
        "maxY": 408,
        "isEnter": true,
        "isOffline": true,
        "goMapId": 23,
        "goX": 420,
        "goY": 336
      },
      {
        "name": "Vách núi Kakarot",
        "minX": 0,
        "minY": 384,
        "maxX": 24,
        "maxY": 408,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 44,
        "goX": 1380,
        "goY": 432
      }
    ],
    "mobs": [
      {
        "templateId": 0,
        "level": 1,
        "x": 708,
        "y": 408
      },
      {
        "templateId": 0,
        "level": 1,
        "x": 804,
        "y": 408
      },
      {
        "templateId": 0,
        "level": 1,
        "x": 900,
        "y": 408
      },
      {
        "templateId": 0,
        "level": 1,
        "x": 996,
        "y": 408
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 396,
        "y": 408,
        "templateId": 9,
        "avatar": 565
      },
      {
        "status": 1,
        "x": 252,
        "y": 408,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 15,
    "name": "Đồi hoang",
    "planetId": 2,
    "tileId": 9,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Làng Kakarot",
        "minX": 0,
        "minY": 384,
        "maxX": 24,
        "maxY": 408,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 14,
        "goX": 1188,
        "goY": 408
      },
      {
        "name": "Làng Plant",
        "minX": 1224,
        "minY": 240,
        "maxX": 1248,
        "maxY": 264,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 16,
        "goX": 60,
        "goY": 288
      }
    ],
    "mobs": [
      {
        "templateId": 3,
        "level": 2,
        "x": 228,
        "y": 408
      },
      {
        "templateId": 3,
        "level": 2,
        "x": 444,
        "y": 360
      },
      {
        "templateId": 3,
        "level": 2,
        "x": 612,
        "y": 360
      },
      {
        "templateId": 3,
        "level": 2,
        "x": 900,
        "y": 312
      },
      {
        "templateId": 3,
        "level": 2,
        "x": 756,
        "y": 312
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 996,
        "y": 264,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 16,
    "name": "Làng Plant",
    "planetId": 2,
    "tileId": 9,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Đồi hoang",
        "minX": 0,
        "minY": 264,
        "maxX": 24,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 15,
        "goX": 1188,
        "goY": 264
      },
      {
        "name": "Rừng nguyên sinh",
        "minX": 1224,
        "minY": 216,
        "maxX": 1248,
        "maxY": 240,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 17,
        "goX": 60,
        "goY": 312
      },
      {
        "name": "Trạm tàu vũ trụ",
        "minX": 192,
        "minY": 264,
        "maxX": 264,
        "maxY": 288,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 26,
        "goX": 348,
        "goY": 336
      }
    ],
    "mobs": [
      {
        "templateId": 6,
        "level": 3,
        "x": 564,
        "y": 312
      },
      {
        "templateId": 6,
        "level": 3,
        "x": 804,
        "y": 336
      },
      {
        "templateId": 3,
        "level": 2,
        "x": 972,
        "y": 288
      },
      {
        "templateId": 3,
        "level": 2,
        "x": 684,
        "y": 384
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 396,
        "y": 288,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 17,
    "name": "Rừng nguyên sinh",
    "planetId": 2,
    "tileId": 10,
    "bgId": 9,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Làng Plant",
        "minX": 0,
        "minY": 288,
        "maxX": 24,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 16,
        "goX": 1188,
        "goY": 240
      },
      {
        "name": "Rừng thông Xayda",
        "minX": 1560,
        "minY": 288,
        "maxX": 1584,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 18,
        "goX": 60,
        "goY": 408
      },
      {
        "name": "Rừng cọ",
        "minX": 1320,
        "minY": 288,
        "maxX": 1392,
        "maxY": 312,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 35,
        "goX": 60,
        "goY": 216
      }
    ],
    "mobs": [
      {
        "templateId": 3,
        "level": 2,
        "x": 588,
        "y": 432
      },
      {
        "templateId": 3,
        "level": 2,
        "x": 1212,
        "y": 360
      },
      {
        "templateId": 6,
        "level": 3,
        "x": 828,
        "y": 432
      },
      {
        "templateId": 3,
        "level": 2,
        "x": 1020,
        "y": 408
      },
      {
        "templateId": 9,
        "level": 4,
        "x": 612,
        "y": 336
      },
      {
        "templateId": 9,
        "level": 4,
        "x": 396,
        "y": 288
      },
      {
        "templateId": 9,
        "level": 4,
        "x": 924,
        "y": 312
      },
      {
        "templateId": 9,
        "level": 4,
        "x": 1188,
        "y": 240
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 204,
        "y": 312,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 18,
    "name": "Rừng thông Xayda",
    "planetId": 2,
    "tileId": 10,
    "bgId": 9,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Rừng nguyên sinh",
        "minX": 0,
        "minY": 384,
        "maxX": 24,
        "maxY": 408,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 17,
        "goX": 1523,
        "goY": 311
      },
      {
        "name": "Vách núi đen",
        "minX": 1560,
        "minY": 408,
        "maxX": 1584,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 20,
        "goX": 60,
        "goY": 288
      }
    ],
    "mobs": [
      {
        "templateId": 6,
        "level": 3,
        "x": 1044,
        "y": 288
      },
      {
        "templateId": 6,
        "level": 3,
        "x": 468,
        "y": 288
      },
      {
        "templateId": 9,
        "level": 4,
        "x": 852,
        "y": 312
      },
      {
        "templateId": 9,
        "level": 4,
        "x": 1236,
        "y": 312
      },
      {
        "templateId": 9,
        "level": 4,
        "x": 660,
        "y": 312
      },
      {
        "templateId": 12,
        "level": 5,
        "x": 612,
        "y": 144
      },
      {
        "templateId": 12,
        "level": 5,
        "x": 1188,
        "y": 144
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 180,
        "y": 408,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 19,
    "name": "Thành phố Vegeta",
    "planetId": 2,
    "tileId": 11,
    "bgId": 10,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Vách núi đen",
        "minX": 0,
        "minY": 336,
        "maxX": 24,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 20,
        "goX": 1620,
        "goY": 288
      }
    ],
    "mobs": [
      {
        "templateId": 27,
        "level": 8,
        "x": 876,
        "y": 360
      },
      {
        "templateId": 21,
        "level": 8,
        "x": 276,
        "y": 288
      },
      {
        "templateId": 21,
        "level": 8,
        "x": 684,
        "y": 288
      },
      {
        "templateId": 21,
        "level": 8,
        "x": 468,
        "y": 288
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 1140,
        "y": 360,
        "templateId": 12,
        "avatar": 639
      },
      {
        "status": 0,
        "x": 1064,
        "y": 360,
        "templateId": 53,
        "avatar": 4668
      }
    ]
  },
  {
    "id": 20,
    "name": "Vách núi đen",
    "planetId": 2,
    "tileId": 12,
    "bgId": 11,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Rừng thông Xayda",
        "minX": 0,
        "minY": 264,
        "maxX": 24,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 18,
        "goX": 1524,
        "goY": 432
      },
      {
        "name": "Thành phố Vegeta",
        "minX": 1656,
        "minY": 264,
        "maxX": 1680,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 19,
        "goX": 60,
        "goY": 360
      },
      {
        "name": "Thung lũng đen",
        "minX": 1200,
        "minY": 336,
        "maxX": 1272,
        "maxY": 360,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 37,
        "goX": 780,
        "goY": 384
      }
    ],
    "mobs": [
      {
        "templateId": 15,
        "level": 7,
        "x": 300,
        "y": 360
      },
      {
        "templateId": 15,
        "level": 7,
        "x": 492,
        "y": 360
      },
      {
        "templateId": 15,
        "level": 7,
        "x": 684,
        "y": 360
      }
    ],
    "npcs": [
      {
        "status": 0,
        "x": 916,
        "y": 360,
        "templateId": 39,
        "avatar": 2993
      },
      {
        "status": 1,
        "x": 180,
        "y": 288,
        "templateId": 6,
        "avatar": 0
      },
      {
        "status": 1,
        "x": 996,
        "y": 360,
        "templateId": 15,
        "avatar": 563
      }
    ]
  },
  {
    "id": 21,
    "name": "Nhà Gôhan",
    "planetId": 0,
    "tileId": 1,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Làng Aru",
        "minX": 456,
        "minY": 312,
        "maxX": 528,
        "maxY": 336,
        "isEnter": true,
        "isOffline": true,
        "goMapId": 0,
        "goX": 372,
        "goY": 432
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 348,
        "y": 336,
        "templateId": 4,
        "avatar": 0
      },
      {
        "status": 1,
        "x": 84,
        "y": 336,
        "templateId": 3,
        "avatar": 0
      },
      {
        "status": 1,
        "x": 228,
        "y": 336,
        "templateId": 0,
        "avatar": 349
      }
    ]
  },
  {
    "id": 22,
    "name": "Nhà Moori",
    "planetId": 1,
    "tileId": 5,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 4,
    "waypoints": [
      {
        "name": "Làng Mori",
        "minX": 168,
        "minY": 312,
        "maxX": 240,
        "maxY": 336,
        "isEnter": true,
        "isOffline": true,
        "goMapId": 7,
        "goX": 468,
        "goY": 432
      },
      {
        "name": "Vách núi Moori",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": true,
        "goMapId": 0,
        "goX": 0,
        "goY": 0
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 372,
        "y": 336,
        "templateId": 4,
        "avatar": 0
      },
      {
        "status": 1,
        "x": 516,
        "y": 336,
        "templateId": 2,
        "avatar": 347
      },
      {
        "status": 1,
        "x": 636,
        "y": 336,
        "templateId": 3,
        "avatar": 0
      }
    ]
  },
  {
    "id": 23,
    "name": "Nhà Broly",
    "planetId": 2,
    "tileId": 9,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Làng Kakarot",
        "minX": 432,
        "minY": 312,
        "maxX": 504,
        "maxY": 336,
        "isEnter": true,
        "isOffline": true,
        "goMapId": 14,
        "goX": 588,
        "goY": 408
      },
      {
        "name": "Vực Plant",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": true,
        "goMapId": 0,
        "goX": 0,
        "goY": 0
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 84,
        "y": 336,
        "templateId": 3,
        "avatar": 0
      },
      {
        "status": 1,
        "x": 228,
        "y": 336,
        "templateId": 1,
        "avatar": 348
      },
      {
        "status": 1,
        "x": 348,
        "y": 336,
        "templateId": 4,
        "avatar": 0
      }
    ]
  },
  {
    "id": 24,
    "name": "Trạm tàu vũ trụ",
    "planetId": 0,
    "tileId": 1,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Thung lũng tre",
        "minX": 192,
        "minY": 312,
        "maxX": 264,
        "maxY": 336,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 2,
        "goX": 636,
        "goY": 384
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 60,
        "y": 336,
        "templateId": 6,
        "avatar": 0
      },
      {
        "status": 1,
        "x": 516,
        "y": 336,
        "templateId": 10,
        "avatar": 7184
      },
      {
        "status": 1,
        "x": 390,
        "y": 336,
        "templateId": 16,
        "avatar": 728
      },
      {
        "status": 1,
        "x": 651,
        "y": 264,
        "templateId": 29,
        "avatar": 2332
      },
      {
        "status": 0,
        "x": 99,
        "y": 336,
        "templateId": 63,
        "avatar": 5833
      }
    ]
  },
  {
    "id": 25,
    "name": "Trạm tàu vũ trụ",
    "planetId": 1,
    "tileId": 5,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 4,
    "waypoints": [
      {
        "name": "Thị trấn Moori",
        "minX": 192,
        "minY": 312,
        "maxX": 264,
        "maxY": 336,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 9,
        "goX": 684,
        "goY": 456
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 540,
        "y": 336,
        "templateId": 6,
        "avatar": 0
      },
      {
        "status": 1,
        "x": 510,
        "y": 336,
        "templateId": 16,
        "avatar": 728
      },
      {
        "status": 1,
        "x": 348,
        "y": 336,
        "templateId": 11,
        "avatar": 641
      },
      {
        "status": 1,
        "x": 84,
        "y": 336,
        "templateId": 29,
        "avatar": 2332
      }
    ]
  },
  {
    "id": 26,
    "name": "Trạm tàu vũ trụ",
    "planetId": 2,
    "tileId": 9,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Làng Plant",
        "minX": 360,
        "minY": 312,
        "maxX": 432,
        "maxY": 336,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 16,
        "goX": 276,
        "goY": 288
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 228,
        "y": 336,
        "templateId": 12,
        "avatar": 639
      },
      {
        "status": 1,
        "x": 516,
        "y": 336,
        "templateId": 6,
        "avatar": 0
      },
      {
        "status": 1,
        "x": 510,
        "y": 336,
        "templateId": 16,
        "avatar": 728
      },
      {
        "status": 1,
        "x": 84,
        "y": 336,
        "templateId": 29,
        "avatar": 2332
      }
    ]
  },
  {
    "id": 27,
    "name": "Rừng Bamboo",
    "planetId": 0,
    "tileId": 2,
    "bgId": 1,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Rừng nấm",
        "minX": 0,
        "minY": 168,
        "maxX": 24,
        "maxY": 192,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 3,
        "goX": 1332,
        "goY": 336
      },
      {
        "name": "Rừng dương xỉ",
        "minX": 1776,
        "minY": 312,
        "maxX": 1800,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 28,
        "goX": 60,
        "goY": 360
      },
      {
        "name": "Tường thành 1",
        "minX": 1416,
        "minY": 480,
        "maxX": 1584,
        "maxY": 504,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 0,
        "goX": 0,
        "goY": 0
      }
    ],
    "mobs": [
      {
        "templateId": 16,
        "level": 6,
        "x": 996,
        "y": 336
      },
      {
        "templateId": 16,
        "level": 6,
        "x": 468,
        "y": 336
      },
      {
        "templateId": 16,
        "level": 6,
        "x": 636,
        "y": 336
      },
      {
        "templateId": 16,
        "level": 6,
        "x": 804,
        "y": 336
      },
      {
        "templateId": 10,
        "level": 5,
        "x": 564,
        "y": 192
      },
      {
        "templateId": 10,
        "level": 5,
        "x": 900,
        "y": 192
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 1452,
        "y": 336,
        "templateId": 25,
        "avatar": 1468
      }
    ]
  },
  {
    "id": 28,
    "name": "Rừng dương xỉ",
    "planetId": 0,
    "tileId": 2,
    "bgId": 1,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Rừng Bamboo",
        "minX": 0,
        "minY": 336,
        "maxX": 24,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 27,
        "goX": 1740,
        "goY": 336
      },
      {
        "name": "Nam Kamê",
        "minX": 1416,
        "minY": 144,
        "maxX": 1440,
        "maxY": 168,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 29,
        "goX": 60,
        "goY": 168
      }
    ],
    "mobs": [
      {
        "templateId": 16,
        "level": 6,
        "x": 204,
        "y": 360
      },
      {
        "templateId": 16,
        "level": 6,
        "x": 372,
        "y": 360
      },
      {
        "templateId": 16,
        "level": 6,
        "x": 900,
        "y": 264
      },
      {
        "templateId": 16,
        "level": 6,
        "x": 1068,
        "y": 264
      },
      {
        "templateId": 16,
        "level": 6,
        "x": 540,
        "y": 312
      },
      {
        "templateId": 16,
        "level": 6,
        "x": 732,
        "y": 312
      },
      {
        "templateId": 10,
        "level": 5,
        "x": 204,
        "y": 168
      },
      {
        "templateId": 10,
        "level": 5,
        "x": 444,
        "y": 168
      },
      {
        "templateId": 10,
        "level": 5,
        "x": 684,
        "y": 144
      },
      {
        "templateId": 10,
        "level": 5,
        "x": 948,
        "y": 120
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 1236,
        "y": 168,
        "templateId": 6,
        "avatar": 0
      },
      {
        "status": 0,
        "x": 1295,
        "y": 168,
        "templateId": 38,
        "avatar": 1364
      }
    ]
  },
  {
    "id": 29,
    "name": "Nam Kamê",
    "planetId": 0,
    "tileId": 3,
    "bgId": 2,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Rừng dương xỉ",
        "minX": 0,
        "minY": 144,
        "maxX": 24,
        "maxY": 168,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 28,
        "goX": 1380,
        "goY": 168
      },
      {
        "name": "Đảo Bulông",
        "minX": 1536,
        "minY": 336,
        "maxX": 1560,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 30,
        "goX": 60,
        "goY": 312
      },
      {
        "name": "Đảo Kamê",
        "minX": 696,
        "minY": 336,
        "maxX": 768,
        "maxY": 360,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 5,
        "goX": 876,
        "goY": 408
      }
    ],
    "mobs": [
      {
        "templateId": 13,
        "level": 7,
        "x": 396,
        "y": 240
      },
      {
        "templateId": 13,
        "level": 7,
        "x": 540,
        "y": 312
      },
      {
        "templateId": 13,
        "level": 7,
        "x": 924,
        "y": 360
      },
      {
        "templateId": 13,
        "level": 7,
        "x": 1116,
        "y": 360
      },
      {
        "templateId": 13,
        "level": 7,
        "x": 1284,
        "y": 360
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 924,
        "y": 168
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 636,
        "y": 144
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 252,
        "y": 192,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 30,
    "name": "Đảo Bulông",
    "planetId": 0,
    "tileId": 3,
    "bgId": 2,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Nam Kamê",
        "minX": 0,
        "minY": 288,
        "maxX": 24,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 29,
        "goX": 1500,
        "goY": 360
      }
    ],
    "mobs": [
      {
        "templateId": 22,
        "level": 8,
        "x": 372,
        "y": 288
      },
      {
        "templateId": 22,
        "level": 8,
        "x": 564,
        "y": 288
      },
      {
        "templateId": 22,
        "level": 8,
        "x": 780,
        "y": 312
      },
      {
        "templateId": 22,
        "level": 8,
        "x": 972,
        "y": 312
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 444,
        "y": 120
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 756,
        "y": 144
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 180,
        "y": 312,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 31,
    "name": "Núi hoa vàng",
    "planetId": 1,
    "tileId": 7,
    "bgId": 6,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Thung lũng Maima",
        "minX": 0,
        "minY": 216,
        "maxX": 24,
        "maxY": 240,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 11,
        "goX": 1332,
        "goY": 384
      },
      {
        "name": "Núi hoa tím",
        "minX": 1296,
        "minY": 360,
        "maxX": 1320,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 32,
        "goX": 60,
        "goY": 432
      }
    ],
    "mobs": [
      {
        "templateId": 17,
        "level": 6,
        "x": 324,
        "y": 288
      },
      {
        "templateId": 17,
        "level": 6,
        "x": 780,
        "y": 336
      },
      {
        "templateId": 17,
        "level": 6,
        "x": 924,
        "y": 360
      },
      {
        "templateId": 17,
        "level": 6,
        "x": 564,
        "y": 312
      },
      {
        "templateId": 11,
        "level": 5,
        "x": 804,
        "y": 144
      },
      {
        "templateId": 11,
        "level": 5,
        "x": 492,
        "y": 144
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 1068,
        "y": 384,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 32,
    "name": "Núi hoa tím",
    "planetId": 1,
    "tileId": 7,
    "bgId": 6,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Núi hoa vàng",
        "minX": 0,
        "minY": 408,
        "maxX": 24,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 31,
        "goX": 1260,
        "goY": 384
      },
      {
        "name": "Nam Guru",
        "minX": 1296,
        "minY": 264,
        "maxX": 1320,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 33,
        "goX": 60,
        "goY": 216
      }
    ],
    "mobs": [
      {
        "templateId": 17,
        "level": 6,
        "x": 276,
        "y": 408
      },
      {
        "templateId": 17,
        "level": 6,
        "x": 492,
        "y": 384
      },
      {
        "templateId": 17,
        "level": 6,
        "x": 684,
        "y": 360
      },
      {
        "templateId": 17,
        "level": 6,
        "x": 876,
        "y": 336
      },
      {
        "templateId": 17,
        "level": 6,
        "x": 1020,
        "y": 312
      },
      {
        "templateId": 11,
        "level": 5,
        "x": 324,
        "y": 240
      },
      {
        "templateId": 11,
        "level": 5,
        "x": 516,
        "y": 168
      },
      {
        "templateId": 11,
        "level": 5,
        "x": 732,
        "y": 144
      },
      {
        "templateId": 11,
        "level": 5,
        "x": 948,
        "y": 144
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 1140,
        "y": 288,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 33,
    "name": "Nam Guru",
    "planetId": 1,
    "tileId": 8,
    "bgId": 7,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Núi hoa tím",
        "minX": 0,
        "minY": 192,
        "maxX": 24,
        "maxY": 216,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 32,
        "goX": 1260,
        "goY": 288
      },
      {
        "name": "Đảo Guru",
        "minX": 624,
        "minY": 336,
        "maxX": 696,
        "maxY": 360,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 13,
        "goX": 540,
        "goY": 384
      },
      {
        "name": "Đông Nam Guru",
        "minX": 1656,
        "minY": 336,
        "maxX": 1680,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 34,
        "goX": 60,
        "goY": 312
      }
    ],
    "mobs": [
      {
        "templateId": 14,
        "level": 7,
        "x": 852,
        "y": 288
      },
      {
        "templateId": 14,
        "level": 7,
        "x": 1020,
        "y": 288
      },
      {
        "templateId": 14,
        "level": 7,
        "x": 396,
        "y": 264
      },
      {
        "templateId": 14,
        "level": 7,
        "x": 1236,
        "y": 360
      },
      {
        "templateId": 14,
        "level": 7,
        "x": 1404,
        "y": 360
      },
      {
        "templateId": 32,
        "level": 7,
        "x": 924,
        "y": 144
      },
      {
        "templateId": 32,
        "level": 7,
        "x": 1212,
        "y": 168
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 228,
        "y": 240,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 34,
    "name": "Đông Nam Guru",
    "planetId": 1,
    "tileId": 8,
    "bgId": 7,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Nam Guru",
        "minX": 0,
        "minY": 288,
        "maxX": 24,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 33,
        "goX": 1620,
        "goY": 360
      }
    ],
    "mobs": [
      {
        "templateId": 23,
        "level": 8,
        "x": 348,
        "y": 312
      },
      {
        "templateId": 23,
        "level": 8,
        "x": 540,
        "y": 312
      },
      {
        "templateId": 23,
        "level": 8,
        "x": 756,
        "y": 312
      },
      {
        "templateId": 23,
        "level": 8,
        "x": 972,
        "y": 312
      },
      {
        "templateId": 32,
        "level": 7,
        "x": 804,
        "y": 144
      },
      {
        "templateId": 32,
        "level": 7,
        "x": 396,
        "y": 144
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 156,
        "y": 312,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 35,
    "name": "Rừng cọ",
    "planetId": 2,
    "tileId": 10,
    "bgId": 9,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Rừng nguyên sinh",
        "minX": 0,
        "minY": 192,
        "maxX": 24,
        "maxY": 216,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 17,
        "goX": 1405,
        "goY": 312
      },
      {
        "name": "Rừng đá",
        "minX": 1296,
        "minY": 312,
        "maxX": 1320,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 36,
        "goX": 60,
        "goY": 456
      }
    ],
    "mobs": [
      {
        "templateId": 18,
        "level": 6,
        "x": 444,
        "y": 336
      },
      {
        "templateId": 18,
        "level": 6,
        "x": 636,
        "y": 336
      },
      {
        "templateId": 18,
        "level": 6,
        "x": 828,
        "y": 336
      },
      {
        "templateId": 18,
        "level": 6,
        "x": 1020,
        "y": 336
      },
      {
        "templateId": 12,
        "level": 5,
        "x": 540,
        "y": 144
      },
      {
        "templateId": 12,
        "level": 5,
        "x": 924,
        "y": 144
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 228,
        "y": 264,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 36,
    "name": "Rừng đá",
    "planetId": 2,
    "tileId": 10,
    "bgId": 9,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Rừng cọ",
        "minX": 0,
        "minY": 432,
        "maxX": 24,
        "maxY": 456,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 35,
        "goX": 1260,
        "goY": 336
      },
      {
        "name": "Thung lũng đen",
        "minX": 1296,
        "minY": 144,
        "maxX": 1320,
        "maxY": 168,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 37,
        "goX": 60,
        "goY": 192
      }
    ],
    "mobs": [
      {
        "templateId": 18,
        "level": 6,
        "x": 300,
        "y": 456
      },
      {
        "templateId": 18,
        "level": 6,
        "x": 420,
        "y": 360
      },
      {
        "templateId": 18,
        "level": 6,
        "x": 660,
        "y": 288
      },
      {
        "templateId": 18,
        "level": 6,
        "x": 540,
        "y": 360
      },
      {
        "templateId": 18,
        "level": 6,
        "x": 900,
        "y": 288
      },
      {
        "templateId": 12,
        "level": 5,
        "x": 300,
        "y": 264
      },
      {
        "templateId": 12,
        "level": 5,
        "x": 636,
        "y": 120
      },
      {
        "templateId": 12,
        "level": 5,
        "x": 876,
        "y": 120
      },
      {
        "templateId": 12,
        "level": 5,
        "x": 468,
        "y": 168
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 1140,
        "y": 168,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 37,
    "name": "Thung lũng đen",
    "planetId": 2,
    "tileId": 12,
    "bgId": 11,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Vách núi đen",
        "minX": 696,
        "minY": 360,
        "maxX": 768,
        "maxY": 384,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 20,
        "goX": 1284,
        "goY": 360
      },
      {
        "name": "Bờ vực đen",
        "minX": 1512,
        "minY": 192,
        "maxX": 1536,
        "maxY": 216,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 38,
        "goX": 60,
        "goY": 456
      },
      {
        "name": "Rừng đá",
        "minX": 0,
        "minY": 168,
        "maxX": 24,
        "maxY": 192,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 36,
        "goX": 1260,
        "goY": 168
      }
    ],
    "mobs": [
      {
        "templateId": 15,
        "level": 7,
        "x": 876,
        "y": 360
      },
      {
        "templateId": 15,
        "level": 7,
        "x": 420,
        "y": 312
      },
      {
        "templateId": 15,
        "level": 7,
        "x": 540,
        "y": 360
      },
      {
        "templateId": 15,
        "level": 7,
        "x": 1020,
        "y": 312
      },
      {
        "templateId": 33,
        "level": 7,
        "x": 564,
        "y": 192
      },
      {
        "templateId": 15,
        "level": 7,
        "x": 1236,
        "y": 216
      },
      {
        "templateId": 33,
        "level": 7,
        "x": 900,
        "y": 168
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 228,
        "y": 216,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 38,
    "name": "Bờ vực đen",
    "planetId": 2,
    "tileId": 12,
    "bgId": 11,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Thung lũng đen",
        "minX": 0,
        "minY": 432,
        "maxX": 24,
        "maxY": 456,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 37,
        "goX": 1476,
        "goY": 216
      }
    ],
    "mobs": [
      {
        "templateId": 24,
        "level": 8,
        "x": 372,
        "y": 288
      },
      {
        "templateId": 24,
        "level": 8,
        "x": 1020,
        "y": 288
      },
      {
        "templateId": 24,
        "level": 8,
        "x": 612,
        "y": 456
      },
      {
        "templateId": 24,
        "level": 8,
        "x": 780,
        "y": 456
      },
      {
        "templateId": 33,
        "level": 7,
        "x": 564,
        "y": 144
      },
      {
        "templateId": 33,
        "level": 7,
        "x": 804,
        "y": 144
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 228,
        "y": 360,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 39,
    "name": "Vách núi Aru",
    "planetId": 0,
    "tileId": 1,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Nhà Gôhan",
        "minX": 744,
        "minY": 360,
        "maxX": 768,
        "maxY": 384,
        "isEnter": false,
        "isOffline": true,
        "goMapId": 21,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 40,
    "name": "Vách núi Moori",
    "planetId": 1,
    "tileId": 5,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 4,
    "waypoints": [
      {
        "name": "Nhà Moori",
        "minX": 744,
        "minY": 360,
        "maxX": 768,
        "maxY": 384,
        "isEnter": false,
        "isOffline": true,
        "goMapId": 22,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 41,
    "name": "Vực Plant",
    "planetId": 2,
    "tileId": 9,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Nhà Broly",
        "minX": 744,
        "minY": 360,
        "maxX": 768,
        "maxY": 384,
        "isEnter": false,
        "isOffline": true,
        "goMapId": 23,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 42,
    "name": "Vách núi Aru",
    "planetId": 0,
    "tileId": 1,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Làng Aru",
        "minX": 1416,
        "minY": 408,
        "maxX": 1440,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 0,
        "goX": 60,
        "goY": 432
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 588,
        "y": 408,
        "templateId": 21,
        "avatar": 1410
      }
    ]
  },
  {
    "id": 43,
    "name": "Vách núi Moori",
    "planetId": 1,
    "tileId": 5,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 4,
    "waypoints": [
      {
        "name": "Làng Mori",
        "minX": 1416,
        "minY": 408,
        "maxX": 1440,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 7,
        "goX": 60,
        "goY": 408
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 780,
        "y": 384,
        "templateId": 21,
        "avatar": 1410
      },
      {
        "status": 1,
        "x": 226,
        "y": 432,
        "templateId": 42,
        "avatar": 4335
      }
    ]
  },
  {
    "id": 44,
    "name": "Vách núi Kakarot",
    "planetId": 2,
    "tileId": 9,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Làng Kakarot",
        "minX": 1416,
        "minY": 408,
        "maxX": 1440,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 14,
        "goX": 60,
        "goY": 408
      },
      {
        "name": "Đại hội võ thuật",
        "minX": 936,
        "minY": 408,
        "maxX": 1008,
        "maxY": 432,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 52,
        "goX": 564,
        "goY": 336
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 732,
        "y": 288,
        "templateId": 21,
        "avatar": 1410
      }
    ]
  },
  {
    "id": 45,
    "name": "Thần điện",
    "planetId": 0,
    "tileId": 13,
    "bgId": 12,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Tháp Karin",
        "minX": 24,
        "minY": 552,
        "maxX": 696,
        "maxY": 576,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 46,
        "goX": 360,
        "goY": 130
      },
      {
        "name": "Phòng tập thời gian",
        "minX": 696,
        "minY": 264,
        "maxX": 720,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 46,
        "goX": 360,
        "goY": 130
      },
      {
        "name": "Phòng tập thời gian",
        "minX": 696,
        "minY": 216,
        "maxX": 720,
        "maxY": 240,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 46,
        "goX": 360,
        "goY": 130
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 396,
        "y": 408,
        "templateId": 19,
        "avatar": 1356
      }
    ]
  },
  {
    "id": 46,
    "name": "Tháp Karin",
    "planetId": 0,
    "tileId": 13,
    "bgId": 12,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Thần điện",
        "minX": 288,
        "minY": 0,
        "maxX": 432,
        "maxY": 120,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 45,
        "goX": 276,
        "goY": 528
      },
      {
        "name": "Rừng Karin",
        "minX": 24,
        "minY": 552,
        "maxX": 696,
        "maxY": 576,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 47,
        "goX": 610,
        "goY": 130
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 420,
        "y": 408,
        "templateId": 18,
        "avatar": 1209
      }
    ]
  },
  {
    "id": 47,
    "name": "Rừng Karin",
    "planetId": 0,
    "tileId": 4,
    "bgId": 3,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Tháp Karin",
        "minX": 552,
        "minY": 0,
        "maxX": 672,
        "maxY": 120,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 46,
        "goX": 276,
        "goY": 528
      },
      {
        "name": "Đồi hoa cúc",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 1,
        "goX": 1284,
        "goY": 360
      },
      {
        "name": "Đông Nam Karin",
        "minX": 936,
        "minY": 312,
        "maxX": 960,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 111,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 636,
        "y": 336,
        "templateId": 17,
        "avatar": 1142
      }
    ]
  },
  {
    "id": 48,
    "name": "Hành tinh Kaio",
    "planetId": 0,
    "tileId": 13,
    "bgId": 12,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": [
      {
        "status": 0,
        "x": 592,
        "y": 360,
        "templateId": 64,
        "avatar": 6578
      },
      {
        "status": 0,
        "x": 300,
        "y": 230,
        "templateId": 55,
        "avatar": 5067
      },
      {
        "status": 0,
        "x": 270,
        "y": 230,
        "templateId": 56,
        "avatar": 5073
      },
      {
        "status": 1,
        "x": 420,
        "y": 240,
        "templateId": 20,
        "avatar": 1357
      }
    ]
  },
  {
    "id": 49,
    "name": "Phòng tập thời gian",
    "planetId": 0,
    "tileId": 14,
    "bgId": 13,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Thần điện",
        "minX": 0,
        "minY": 432,
        "maxX": 24,
        "maxY": 456,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 45,
        "goX": 276,
        "goY": 408
      },
      {
        "name": "Thần điện",
        "minX": 1176,
        "minY": 432,
        "maxX": 1200,
        "maxY": 456,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 45,
        "goX": 300,
        "goY": 408
      }
    ],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 50,
    "name": "Thánh địa Kaio",
    "planetId": 0,
    "tileId": 10,
    "bgId": 11,
    "typeMap": 0,
    "bgType": 1,
    "waypoints": [],
    "mobs": [],
    "npcs": [
      {
        "status": 0,
        "x": 268,
        "y": 330,
        "templateId": 44,
        "avatar": 4390
      },
      {
        "status": 0,
        "x": 238,
        "y": 336,
        "templateId": 45,
        "avatar": 4391
      },
      {
        "status": 0,
        "x": 400,
        "y": 336,
        "templateId": 43,
        "avatar": 4389
      }
    ]
  },
  {
    "id": 51,
    "name": "Đấu trường",
    "planetId": 2,
    "tileId": 15,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 52,
    "name": "Đại hội võ thuật",
    "planetId": 2,
    "tileId": 9,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Vách núi Kakarot",
        "minX": 576,
        "minY": 312,
        "maxX": 648,
        "maxY": 336,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 44,
        "goX": 1020,
        "goY": 432
      }
    ],
    "mobs": [
      {
        "templateId": 0,
        "level": 1,
        "x": 156,
        "y": 336
      },
      {
        "templateId": 0,
        "level": 1,
        "x": 84,
        "y": 336
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 184,
        "y": 330,
        "templateId": 44,
        "avatar": 4390
      },
      {
        "status": 1,
        "x": 215,
        "y": 330,
        "templateId": 45,
        "avatar": 4391
      },
      {
        "status": 1,
        "x": 252,
        "y": 336,
        "templateId": 23,
        "avatar": 1415
      },
      {
        "status": 1,
        "x": 492,
        "y": 336,
        "templateId": 23,
        "avatar": 1415
      }
    ]
  },
  {
    "id": 53,
    "name": "Tường thành 1",
    "planetId": 2,
    "tileId": 16,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 1,
    "waypoints": [
      {
        "name": "Tường thành 2",
        "minX": 1656,
        "minY": 408,
        "maxX": 1680,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 58,
        "goX": 60,
        "goY": 432
      },
      {
        "name": "Rừng Bamboo",
        "minX": 0,
        "minY": 408,
        "maxX": 24,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 27,
        "goX": 1500,
        "goY": 335
      }
    ],
    "mobs": [
      {
        "templateId": 34,
        "level": 8,
        "x": 324,
        "y": 384
      },
      {
        "templateId": 34,
        "level": 8,
        "x": 492,
        "y": 432
      },
      {
        "templateId": 34,
        "level": 8,
        "x": 660,
        "y": 384
      },
      {
        "templateId": 34,
        "level": 8,
        "x": 828,
        "y": 432
      },
      {
        "templateId": 34,
        "level": 8,
        "x": 996,
        "y": 384
      },
      {
        "templateId": 34,
        "level": 8,
        "x": 1164,
        "y": 432
      },
      {
        "templateId": 34,
        "level": 8,
        "x": 1332,
        "y": 384
      }
    ],
    "npcs": []
  },
  {
    "id": 54,
    "name": "Tầng 3",
    "planetId": 0,
    "tileId": 17,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 1,
    "waypoints": [
      {
        "name": "Tầng 4",
        "minX": 1272,
        "minY": 288,
        "maxX": 1344,
        "maxY": 312,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 57,
        "goX": 1476,
        "goY": 312
      },
      {
        "name": "Tầng 2",
        "minX": 96,
        "minY": 288,
        "maxX": 168,
        "maxY": 312,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 56,
        "goX": 156,
        "goY": 312
      }
    ],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 58,
    "name": "Tường thành 2",
    "planetId": 0,
    "tileId": 16,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 1,
    "waypoints": [
      {
        "name": "Tường thành 1",
        "minX": 0,
        "minY": 408,
        "maxX": 24,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 53,
        "goX": 1620,
        "goY": 432
      },
      {
        "name": "Tường thành 3",
        "minX": 1656,
        "minY": 240,
        "maxX": 1680,
        "maxY": 264,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 59,
        "goX": 60,
        "goY": 240
      }
    ],
    "mobs": [
      {
        "templateId": 34,
        "level": 8,
        "x": 492,
        "y": 360
      },
      {
        "templateId": 34,
        "level": 8,
        "x": 828,
        "y": 360
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 660,
        "y": 336
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 996,
        "y": 384
      },
      {
        "templateId": 34,
        "level": 8,
        "x": 1164,
        "y": 408
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 1356,
        "y": 432
      },
      {
        "templateId": 34,
        "level": 8,
        "x": 348,
        "y": 384
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 396,
        "y": 192
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 588,
        "y": 168
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 780,
        "y": 168
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 972,
        "y": 216
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 1164,
        "y": 264
      }
    ],
    "npcs": []
  },
  {
    "id": 59,
    "name": "Tường thành 3",
    "planetId": 0,
    "tileId": 16,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 1,
    "waypoints": [
      {
        "name": "Tường thành 2",
        "minX": 0,
        "minY": 216,
        "maxX": 24,
        "maxY": 240,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 58,
        "goX": 1620,
        "goY": 264
      },
      {
        "name": "Trại độc nhãn 1",
        "minX": 1656,
        "minY": 288,
        "maxX": 1680,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 60,
        "goX": 60,
        "goY": 384
      }
    ],
    "mobs": [
      {
        "templateId": 35,
        "level": 8,
        "x": 660,
        "y": 240
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 1164,
        "y": 240
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 300,
        "y": 384
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 516,
        "y": 384
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 420,
        "y": 384
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 1356,
        "y": 408
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 492,
        "y": 240
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 636,
        "y": 120
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 804,
        "y": 144
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 972,
        "y": 168
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 1164,
        "y": 120
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 1356,
        "y": 264
      },
      {
        "templateId": 31,
        "level": 7,
        "x": 348,
        "y": 240
      },
      {
        "templateId": 22,
        "level": 8,
        "x": 804,
        "y": 384
      },
      {
        "templateId": 22,
        "level": 8,
        "x": 924,
        "y": 384
      }
    ],
    "npcs": []
  },
  {
    "id": 60,
    "name": "Trại độc nhãn 1",
    "planetId": 0,
    "tileId": 18,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [
      {
        "name": "Trại độc nhãn 2",
        "minX": 1656,
        "minY": 360,
        "maxX": 1680,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 61,
        "goX": 60,
        "goY": 384
      },
      {
        "name": "Tường thành 3",
        "minX": 0,
        "minY": 360,
        "maxX": 24,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 59,
        "goX": 1620,
        "goY": 312
      }
    ],
    "mobs": [
      {
        "templateId": 35,
        "level": 8,
        "x": 468,
        "y": 288
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 1308,
        "y": 384
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 876,
        "y": 384
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 1212,
        "y": 384
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 1116,
        "y": 384
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 996,
        "y": 384
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 756,
        "y": 384
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 636,
        "y": 384
      }
    ],
    "npcs": []
  },
  {
    "id": 61,
    "name": "Trại độc nhãn 2",
    "planetId": 0,
    "tileId": 18,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [
      {
        "name": "Trại độc nhãn 1",
        "minX": 0,
        "minY": 360,
        "maxX": 24,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 60,
        "goX": 1620,
        "goY": 384
      },
      {
        "name": "Trại độc nhãn 3",
        "minX": 1656,
        "minY": 360,
        "maxX": 1680,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 62,
        "goX": 60,
        "goY": 384
      }
    ],
    "mobs": [
      {
        "templateId": 36,
        "level": 8,
        "x": 1020,
        "y": 384
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 924,
        "y": 384
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 732,
        "y": 264
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 828,
        "y": 264
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 564,
        "y": 288
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 1116,
        "y": 216
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 1236,
        "y": 216
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 1308,
        "y": 384
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 348,
        "y": 336
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 444,
        "y": 336
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 396,
        "y": 216
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 972,
        "y": 264
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 1164,
        "y": 120
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 588,
        "y": 168
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 804,
        "y": 144
      }
    ],
    "npcs": []
  },
  {
    "id": 62,
    "name": "Trại độc nhãn 3",
    "planetId": 0,
    "tileId": 18,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [
      {
        "name": "Trại độc nhãn 2",
        "minX": 0,
        "minY": 360,
        "maxX": 24,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 61,
        "goX": 1620,
        "goY": 384
      },
      {
        "name": "Tầng 1",
        "minX": 1368,
        "minY": 360,
        "maxX": 1440,
        "maxY": 384,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 55,
        "goX": 60,
        "goY": 312
      }
    ],
    "mobs": [
      {
        "templateId": 34,
        "level": 8,
        "x": 228,
        "y": 384
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 348,
        "y": 384
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 468,
        "y": 384
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 588,
        "y": 384
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 708,
        "y": 384
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 828,
        "y": 384
      },
      {
        "templateId": 34,
        "level": 8,
        "x": 948,
        "y": 384
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 1068,
        "y": 384
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 276,
        "y": 240
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 420,
        "y": 264
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 708,
        "y": 264
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 948,
        "y": 264
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 1068,
        "y": 240
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 420,
        "y": 144
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 684,
        "y": 144
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 948,
        "y": 144
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 1236,
        "y": 216
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 1380,
        "y": 144
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 1548,
        "y": 216
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 1572,
        "y": 384
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 1188,
        "y": 384
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 564,
        "y": 192
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 828,
        "y": 192
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 1284,
        "y": 384
      }
    ],
    "npcs": []
  },
  {
    "id": 63,
    "name": "Trại lính Fide",
    "planetId": 2,
    "tileId": 19,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 1,
    "waypoints": [
      {
        "name": "Núi cây quỷ",
        "minX": 1176,
        "minY": 792,
        "maxX": 1200,
        "maxY": 816,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 65,
        "goX": 60,
        "goY": 312
      },
      {
        "name": "Trại qủy già",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 66,
        "goX": 1620,
        "goY": 360
      }
    ],
    "mobs": [
      {
        "templateId": 45,
        "level": 10,
        "x": 972,
        "y": 648
      },
      {
        "templateId": 45,
        "level": 10,
        "x": 1092,
        "y": 408
      },
      {
        "templateId": 45,
        "level": 10,
        "x": 996,
        "y": 144
      },
      {
        "templateId": 46,
        "level": 10,
        "x": 804,
        "y": 144
      },
      {
        "templateId": 46,
        "level": 10,
        "x": 612,
        "y": 144
      },
      {
        "templateId": 46,
        "level": 10,
        "x": 660,
        "y": 288
      },
      {
        "templateId": 45,
        "level": 10,
        "x": 492,
        "y": 288
      },
      {
        "templateId": 46,
        "level": 10,
        "x": 780,
        "y": 432
      },
      {
        "templateId": 45,
        "level": 10,
        "x": 612,
        "y": 432
      },
      {
        "templateId": 46,
        "level": 10,
        "x": 492,
        "y": 600
      },
      {
        "templateId": 45,
        "level": 10,
        "x": 660,
        "y": 600
      },
      {
        "templateId": 45,
        "level": 10,
        "x": 756,
        "y": 792
      },
      {
        "templateId": 46,
        "level": 10,
        "x": 588,
        "y": 792
      },
      {
        "templateId": 45,
        "level": 10,
        "x": 228,
        "y": 792
      },
      {
        "templateId": 46,
        "level": 10,
        "x": 396,
        "y": 792
      },
      {
        "templateId": 49,
        "level": 11,
        "x": 228,
        "y": 552
      }
    ],
    "npcs": []
  },
  {
    "id": 64,
    "name": "Núi dây leo",
    "planetId": 2,
    "tileId": 19,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 1,
    "waypoints": [
      {
        "name": "Núi cây quỷ",
        "minX": 0,
        "minY": 288,
        "maxX": 24,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 65,
        "goX": 1620,
        "goY": 312
      },
      {
        "name": "Thung lũng Raspberry",
        "minX": 1656,
        "minY": 288,
        "maxX": 1680,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 72,
        "goX": 60,
        "goY": 312
      }
    ],
    "mobs": [
      {
        "templateId": 44,
        "level": 10,
        "x": 300,
        "y": 312
      },
      {
        "templateId": 44,
        "level": 10,
        "x": 492,
        "y": 312
      },
      {
        "templateId": 44,
        "level": 10,
        "x": 708,
        "y": 312
      },
      {
        "templateId": 44,
        "level": 10,
        "x": 1140,
        "y": 312
      },
      {
        "templateId": 44,
        "level": 10,
        "x": 924,
        "y": 312
      },
      {
        "templateId": 44,
        "level": 10,
        "x": 1332,
        "y": 312
      },
      {
        "templateId": 43,
        "level": 10,
        "x": 372,
        "y": 168
      },
      {
        "templateId": 43,
        "level": 10,
        "x": 588,
        "y": 192
      },
      {
        "templateId": 43,
        "level": 10,
        "x": 804,
        "y": 168
      },
      {
        "templateId": 43,
        "level": 10,
        "x": 1020,
        "y": 192
      },
      {
        "templateId": 43,
        "level": 10,
        "x": 1212,
        "y": 168
      }
    ],
    "npcs": []
  },
  {
    "id": 65,
    "name": "Núi cây quỷ",
    "planetId": 2,
    "tileId": 19,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 1,
    "waypoints": [
      {
        "name": "Núi dây leo",
        "minX": 1656,
        "minY": 288,
        "maxX": 1680,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 64,
        "goX": 60,
        "goY": 312
      },
      {
        "name": "Trại lính Fide",
        "minX": 0,
        "minY": 288,
        "maxX": 24,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 63,
        "goX": 1140,
        "goY": 816
      }
    ],
    "mobs": [
      {
        "templateId": 44,
        "level": 10,
        "x": 1332,
        "y": 240
      },
      {
        "templateId": 44,
        "level": 10,
        "x": 1140,
        "y": 240
      },
      {
        "templateId": 45,
        "level": 10,
        "x": 972,
        "y": 312
      },
      {
        "templateId": 45,
        "level": 10,
        "x": 756,
        "y": 264
      },
      {
        "templateId": 45,
        "level": 10,
        "x": 588,
        "y": 312
      },
      {
        "templateId": 44,
        "level": 10,
        "x": 372,
        "y": 264
      },
      {
        "templateId": 43,
        "level": 10,
        "x": 564,
        "y": 144
      },
      {
        "templateId": 43,
        "level": 10,
        "x": 972,
        "y": 144
      },
      {
        "templateId": 43,
        "level": 10,
        "x": 756,
        "y": 120
      }
    ],
    "npcs": []
  },
  {
    "id": 66,
    "name": "Trại qủy già",
    "planetId": 2,
    "tileId": 19,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 1,
    "waypoints": [
      {
        "name": "Trại lính Fide",
        "minX": 1656,
        "minY": 336,
        "maxX": 1680,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 63,
        "goX": 60,
        "goY": 336
      },
      {
        "name": "Vực chết",
        "minX": 0,
        "minY": 336,
        "maxX": 24,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 67,
        "goX": 1140,
        "goY": 720
      }
    ],
    "mobs": [
      {
        "templateId": 46,
        "level": 10,
        "x": 1476,
        "y": 360
      },
      {
        "templateId": 46,
        "level": 10,
        "x": 1284,
        "y": 360
      },
      {
        "templateId": 46,
        "level": 10,
        "x": 1092,
        "y": 360
      },
      {
        "templateId": 47,
        "level": 11,
        "x": 924,
        "y": 360
      },
      {
        "templateId": 47,
        "level": 11,
        "x": 732,
        "y": 360
      },
      {
        "templateId": 47,
        "level": 11,
        "x": 540,
        "y": 312
      },
      {
        "templateId": 46,
        "level": 10,
        "x": 420,
        "y": 312
      },
      {
        "templateId": 46,
        "level": 10,
        "x": 300,
        "y": 360
      }
    ],
    "npcs": []
  },
  {
    "id": 67,
    "name": "Vực chết",
    "planetId": 2,
    "tileId": 19,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 1,
    "waypoints": [
      {
        "name": "Trại qủy già",
        "minX": 1176,
        "minY": 696,
        "maxX": 1200,
        "maxY": 720,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 66,
        "goX": 60,
        "goY": 360
      },
      {
        "name": "Thung lũng chết",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 73,
        "goX": 1044,
        "goY": 504
      }
    ],
    "mobs": [
      {
        "templateId": 47,
        "level": 11,
        "x": 804,
        "y": 720
      },
      {
        "templateId": 47,
        "level": 11,
        "x": 612,
        "y": 720
      },
      {
        "templateId": 47,
        "level": 11,
        "x": 420,
        "y": 720
      },
      {
        "templateId": 47,
        "level": 11,
        "x": 204,
        "y": 720
      },
      {
        "templateId": 49,
        "level": 11,
        "x": 876,
        "y": 96
      },
      {
        "templateId": 49,
        "level": 11,
        "x": 492,
        "y": 96
      },
      {
        "templateId": 49,
        "level": 11,
        "x": 228,
        "y": 96
      },
      {
        "templateId": 49,
        "level": 11,
        "x": 804,
        "y": 360
      },
      {
        "templateId": 49,
        "level": 11,
        "x": 972,
        "y": 360
      },
      {
        "templateId": 49,
        "level": 11,
        "x": 612,
        "y": 384
      },
      {
        "templateId": 49,
        "level": 11,
        "x": 396,
        "y": 360
      },
      {
        "templateId": 49,
        "level": 11,
        "x": 228,
        "y": 480
      }
    ],
    "npcs": []
  },
  {
    "id": 68,
    "name": "Thung lũng Nappa",
    "planetId": 2,
    "tileId": 20,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [
      {
        "name": "Vực cấm",
        "minX": 1656,
        "minY": 384,
        "maxX": 1680,
        "maxY": 408,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 69,
        "goX": 60,
        "goY": 192
      }
    ],
    "mobs": [
      {
        "templateId": 39,
        "level": 9,
        "x": 372,
        "y": 312
      },
      {
        "templateId": 39,
        "level": 9,
        "x": 564,
        "y": 312
      },
      {
        "templateId": 39,
        "level": 9,
        "x": 972,
        "y": 312
      },
      {
        "templateId": 39,
        "level": 9,
        "x": 1164,
        "y": 312
      },
      {
        "templateId": 39,
        "level": 9,
        "x": 684,
        "y": 408
      },
      {
        "templateId": 39,
        "level": 9,
        "x": 828,
        "y": 408
      },
      {
        "templateId": 39,
        "level": 9,
        "x": 1284,
        "y": 408
      },
      {
        "templateId": 25,
        "level": 8,
        "x": 756,
        "y": 168
      },
      {
        "templateId": 25,
        "level": 8,
        "x": 1332,
        "y": 192
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 84,
        "y": 408,
        "templateId": 12,
        "avatar": 639
      }
    ]
  },
  {
    "id": 69,
    "name": "Vực cấm",
    "planetId": 2,
    "tileId": 20,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [
      {
        "name": "Thung lũng Nappa",
        "minX": 0,
        "minY": 168,
        "maxX": 24,
        "maxY": 192,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 68,
        "goX": 1620,
        "goY": 408
      },
      {
        "name": "Núi Appule",
        "minX": 1656,
        "minY": 384,
        "maxX": 1680,
        "maxY": 408,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 70,
        "goX": 60,
        "goY": 696
      }
    ],
    "mobs": [
      {
        "templateId": 39,
        "level": 9,
        "x": 276,
        "y": 288
      },
      {
        "templateId": 39,
        "level": 9,
        "x": 396,
        "y": 384
      },
      {
        "templateId": 39,
        "level": 9,
        "x": 1380,
        "y": 264
      },
      {
        "templateId": 39,
        "level": 9,
        "x": 948,
        "y": 384
      },
      {
        "templateId": 40,
        "level": 9,
        "x": 660,
        "y": 384
      },
      {
        "templateId": 25,
        "level": 8,
        "x": 900,
        "y": 192
      },
      {
        "templateId": 25,
        "level": 8,
        "x": 516,
        "y": 192
      },
      {
        "templateId": 40,
        "level": 9,
        "x": 1140,
        "y": 264
      }
    ],
    "npcs": []
  },
  {
    "id": 70,
    "name": "Núi Appule",
    "planetId": 2,
    "tileId": 20,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [
      {
        "name": "Vực cấm",
        "minX": 0,
        "minY": 672,
        "maxX": 24,
        "maxY": 696,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 69,
        "goX": 1620,
        "goY": 408
      },
      {
        "name": "Căn cứ Raspberry",
        "minX": 0,
        "minY": 168,
        "maxX": 24,
        "maxY": 192,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 71,
        "goX": 1020,
        "goY": 1080
      }
    ],
    "mobs": [
      {
        "templateId": 39,
        "level": 9,
        "x": 252,
        "y": 696
      },
      {
        "templateId": 40,
        "level": 9,
        "x": 828,
        "y": 528
      },
      {
        "templateId": 41,
        "level": 9,
        "x": 396,
        "y": 360
      },
      {
        "templateId": 40,
        "level": 9,
        "x": 156,
        "y": 528
      },
      {
        "templateId": 39,
        "level": 9,
        "x": 756,
        "y": 360
      },
      {
        "templateId": 40,
        "level": 9,
        "x": 1116,
        "y": 360
      },
      {
        "templateId": 40,
        "level": 9,
        "x": 924,
        "y": 192
      },
      {
        "templateId": 41,
        "level": 9,
        "x": 588,
        "y": 192
      },
      {
        "templateId": 40,
        "level": 9,
        "x": 564,
        "y": 696
      },
      {
        "templateId": 39,
        "level": 9,
        "x": 972,
        "y": 696
      },
      {
        "templateId": 41,
        "level": 9,
        "x": 516,
        "y": 528
      },
      {
        "templateId": 40,
        "level": 9,
        "x": 300,
        "y": 192
      }
    ],
    "npcs": []
  },
  {
    "id": 71,
    "name": "Căn cứ Raspberry",
    "planetId": 2,
    "tileId": 20,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [
      {
        "name": "Núi Appule",
        "minX": 1056,
        "minY": 1056,
        "maxX": 1080,
        "maxY": 1080,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 70,
        "goX": 60,
        "goY": 192
      },
      {
        "name": "Thung lũng Raspberry",
        "minX": 0,
        "minY": 1032,
        "maxX": 24,
        "maxY": 1056,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 72,
        "goX": 1620,
        "goY": 312
      }
    ],
    "mobs": [
      {
        "templateId": 41,
        "level": 9,
        "x": 468,
        "y": 624
      },
      {
        "templateId": 41,
        "level": 9,
        "x": 300,
        "y": 528
      },
      {
        "templateId": 41,
        "level": 9,
        "x": 444,
        "y": 312
      },
      {
        "templateId": 42,
        "level": 9,
        "x": 612,
        "y": 456
      },
      {
        "templateId": 41,
        "level": 9,
        "x": 828,
        "y": 168
      },
      {
        "templateId": 41,
        "level": 9,
        "x": 972,
        "y": 552
      },
      {
        "templateId": 42,
        "level": 9,
        "x": 852,
        "y": 720
      },
      {
        "templateId": 41,
        "level": 9,
        "x": 972,
        "y": 888
      },
      {
        "templateId": 41,
        "level": 9,
        "x": 108,
        "y": 360
      },
      {
        "templateId": 41,
        "level": 9,
        "x": 588,
        "y": 840
      },
      {
        "templateId": 42,
        "level": 9,
        "x": 252,
        "y": 168
      }
    ],
    "npcs": []
  },
  {
    "id": 72,
    "name": "Thung lũng Raspberry",
    "planetId": 2,
    "tileId": 20,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [
      {
        "name": "Căn cứ Raspberry",
        "minX": 1656,
        "minY": 288,
        "maxX": 1680,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 71,
        "goX": 61,
        "goY": 1055
      },
      {
        "name": "Núi dây leo",
        "minX": 0,
        "minY": 288,
        "maxX": 24,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 64,
        "goX": 1620,
        "goY": 312
      }
    ],
    "mobs": [
      {
        "templateId": 41,
        "level": 9,
        "x": 900,
        "y": 312
      },
      {
        "templateId": 43,
        "level": 10,
        "x": 732,
        "y": 192
      },
      {
        "templateId": 43,
        "level": 10,
        "x": 1068,
        "y": 192
      },
      {
        "templateId": 41,
        "level": 9,
        "x": 276,
        "y": 312
      },
      {
        "templateId": 41,
        "level": 9,
        "x": 564,
        "y": 312
      },
      {
        "templateId": 41,
        "level": 9,
        "x": 1404,
        "y": 312
      },
      {
        "templateId": 41,
        "level": 9,
        "x": 1188,
        "y": 312
      },
      {
        "templateId": 43,
        "level": 10,
        "x": 420,
        "y": 192
      }
    ],
    "npcs": []
  },
  {
    "id": 73,
    "name": "Thung lũng chết",
    "planetId": 2,
    "tileId": 21,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 3,
    "waypoints": [
      {
        "name": "Đồi cây Fide",
        "minX": 1080,
        "minY": 144,
        "maxX": 1104,
        "maxY": 168,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 74,
        "goX": 60,
        "goY": 336
      },
      {
        "name": "Vực chết",
        "minX": 1080,
        "minY": 480,
        "maxX": 1104,
        "maxY": 504,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 67,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [
      {
        "templateId": 48,
        "level": 11,
        "x": 612,
        "y": 504
      },
      {
        "templateId": 48,
        "level": 11,
        "x": 828,
        "y": 504
      },
      {
        "templateId": 48,
        "level": 11,
        "x": 372,
        "y": 504
      },
      {
        "templateId": 48,
        "level": 11,
        "x": 132,
        "y": 504
      },
      {
        "templateId": 49,
        "level": 11,
        "x": 84,
        "y": 288
      },
      {
        "templateId": 48,
        "level": 11,
        "x": 828,
        "y": 168
      },
      {
        "templateId": 48,
        "level": 11,
        "x": 636,
        "y": 168
      },
      {
        "templateId": 48,
        "level": 11,
        "x": 228,
        "y": 168
      },
      {
        "templateId": 48,
        "level": 11,
        "x": 420,
        "y": 168
      }
    ],
    "npcs": []
  },
  {
    "id": 74,
    "name": "Đồi cây Fide",
    "planetId": 2,
    "tileId": 21,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 3,
    "waypoints": [
      {
        "name": "Thung lũng chết",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 73,
        "goX": 1044,
        "goY": 168
      },
      {
        "name": "Khe núi tử thần",
        "minX": 1656,
        "minY": 312,
        "maxX": 1680,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 75,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [
      {
        "templateId": 51,
        "level": 11,
        "x": 228,
        "y": 336
      },
      {
        "templateId": 52,
        "level": 12,
        "x": 900,
        "y": 336
      },
      {
        "templateId": 51,
        "level": 11,
        "x": 1140,
        "y": 336
      },
      {
        "templateId": 51,
        "level": 11,
        "x": 1380,
        "y": 336
      },
      {
        "templateId": 51,
        "level": 11,
        "x": 444,
        "y": 336
      },
      {
        "templateId": 52,
        "level": 12,
        "x": 660,
        "y": 336
      },
      {
        "templateId": 49,
        "level": 11,
        "x": 564,
        "y": 144
      },
      {
        "templateId": 49,
        "level": 11,
        "x": 1044,
        "y": 144
      }
    ],
    "npcs": []
  },
  {
    "id": 75,
    "name": "Khe núi tử thần",
    "planetId": 2,
    "tileId": 21,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 3,
    "waypoints": [
      {
        "name": "Đồi cây Fide",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 74,
        "goX": 1620,
        "goY": 336
      },
      {
        "name": "Núi đá",
        "minX": 1656,
        "minY": 312,
        "maxX": 1680,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 76,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [
      {
        "templateId": 52,
        "level": 12,
        "x": 276,
        "y": 336
      },
      {
        "templateId": 52,
        "level": 12,
        "x": 516,
        "y": 336
      },
      {
        "templateId": 53,
        "level": 12,
        "x": 780,
        "y": 336
      },
      {
        "templateId": 52,
        "level": 12,
        "x": 1068,
        "y": 336
      },
      {
        "templateId": 52,
        "level": 12,
        "x": 1356,
        "y": 336
      },
      {
        "templateId": 52,
        "level": 12,
        "x": 396,
        "y": 216
      },
      {
        "templateId": 51,
        "level": 11,
        "x": 660,
        "y": 216
      },
      {
        "templateId": 51,
        "level": 11,
        "x": 1020,
        "y": 216
      },
      {
        "templateId": 52,
        "level": 12,
        "x": 1236,
        "y": 216
      }
    ],
    "npcs": []
  },
  {
    "id": 76,
    "name": "Núi đá",
    "planetId": 2,
    "tileId": 21,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 3,
    "waypoints": [
      {
        "name": "Khe núi tử thần",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 75,
        "goX": 1620,
        "goY": 336
      },
      {
        "name": "Rừng đá",
        "minX": 1656,
        "minY": 312,
        "maxX": 1680,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 77,
        "goX": 60,
        "goY": 216
      }
    ],
    "mobs": [
      {
        "templateId": 52,
        "level": 12,
        "x": 324,
        "y": 264
      },
      {
        "templateId": 52,
        "level": 12,
        "x": 540,
        "y": 336
      },
      {
        "templateId": 52,
        "level": 12,
        "x": 732,
        "y": 240
      },
      {
        "templateId": 53,
        "level": 12,
        "x": 948,
        "y": 240
      },
      {
        "templateId": 52,
        "level": 12,
        "x": 1116,
        "y": 336
      },
      {
        "templateId": 53,
        "level": 12,
        "x": 1332,
        "y": 336
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 1212,
        "y": 144
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 516,
        "y": 144
      }
    ],
    "npcs": []
  },
  {
    "id": 77,
    "name": "Rừng đá",
    "planetId": 2,
    "tileId": 21,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 3,
    "waypoints": [
      {
        "name": "Núi đá",
        "minX": 0,
        "minY": 192,
        "maxX": 24,
        "maxY": 216,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 76,
        "goX": 1620,
        "goY": 336
      },
      {
        "name": "Hang quỷ chim",
        "minX": 1656,
        "minY": 192,
        "maxX": 1680,
        "maxY": 216,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 81,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [
      {
        "templateId": 53,
        "level": 12,
        "x": 348,
        "y": 360
      },
      {
        "templateId": 53,
        "level": 12,
        "x": 588,
        "y": 360
      },
      {
        "templateId": 53,
        "level": 12,
        "x": 828,
        "y": 216
      },
      {
        "templateId": 53,
        "level": 12,
        "x": 1092,
        "y": 360
      },
      {
        "templateId": 53,
        "level": 12,
        "x": 1332,
        "y": 360
      },
      {
        "templateId": 53,
        "level": 12,
        "x": 1452,
        "y": 288
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 468,
        "y": 192
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 828,
        "y": 120
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 1116,
        "y": 216
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 1332,
        "y": 192
      }
    ],
    "npcs": []
  },
  {
    "id": 78,
    "name": "Lãnh  địa Fize",
    "planetId": 0,
    "tileId": 0,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 79,
    "name": "Núi khỉ đỏ",
    "planetId": 2,
    "tileId": 19,
    "bgId": 11,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Hang khỉ đen",
        "minX": 0,
        "minY": 336,
        "maxX": 24,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 83,
        "goX": 1620,
        "goY": 336
      },
      {
        "name": "Núi khỉ vàng",
        "minX": 1656,
        "minY": 336,
        "maxX": 1680,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 80,
        "goX": 60,
        "goY": 144
      }
    ],
    "mobs": [
      {
        "templateId": 56,
        "level": 15,
        "x": 396,
        "y": 168
      },
      {
        "templateId": 56,
        "level": 15,
        "x": 1164,
        "y": 192
      },
      {
        "templateId": 56,
        "level": 15,
        "x": 1356,
        "y": 360
      },
      {
        "templateId": 56,
        "level": 15,
        "x": 324,
        "y": 360
      },
      {
        "templateId": 56,
        "level": 15,
        "x": 564,
        "y": 360
      },
      {
        "templateId": 56,
        "level": 15,
        "x": 828,
        "y": 360
      },
      {
        "templateId": 56,
        "level": 15,
        "x": 1092,
        "y": 360
      },
      {
        "templateId": 56,
        "level": 15,
        "x": 780,
        "y": 144
      }
    ],
    "npcs": []
  },
  {
    "id": 80,
    "name": "Núi khỉ vàng",
    "planetId": 2,
    "tileId": 19,
    "bgId": 11,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Núi khỉ đỏ",
        "minX": 0,
        "minY": 120,
        "maxX": 24,
        "maxY": 144,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 79,
        "goX": 1620,
        "goY": 360
      },
      {
        "name": "Cánh đồng tuyết",
        "minX": 1656,
        "minY": 120,
        "maxX": 1680,
        "maxY": 144,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 105,
        "goX": 60,
        "goY": 408
      }
    ],
    "mobs": [
      {
        "templateId": 57,
        "level": 16,
        "x": 324,
        "y": 240
      },
      {
        "templateId": 57,
        "level": 16,
        "x": 444,
        "y": 288
      },
      {
        "templateId": 57,
        "level": 16,
        "x": 588,
        "y": 336
      },
      {
        "templateId": 57,
        "level": 16,
        "x": 1092,
        "y": 336
      },
      {
        "templateId": 57,
        "level": 16,
        "x": 1212,
        "y": 288
      },
      {
        "templateId": 57,
        "level": 16,
        "x": 1332,
        "y": 240
      },
      {
        "templateId": 57,
        "level": 16,
        "x": 1452,
        "y": 192
      }
    ],
    "npcs": [
      {
        "status": 0,
        "x": 875,
        "y": 408,
        "templateId": 60,
        "avatar": 1359
      }
    ]
  },
  {
    "id": 81,
    "name": "Hang quỷ chim",
    "planetId": 2,
    "tileId": 20,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Núi khỉ đen",
        "minX": 1416,
        "minY": 312,
        "maxX": 1440,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 82,
        "goX": 60,
        "goY": 384
      },
      {
        "name": "Rừng đá",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 77,
        "goX": 1620,
        "goY": 216
      }
    ],
    "mobs": [
      {
        "templateId": 50,
        "level": 12,
        "x": 948,
        "y": 216
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 324,
        "y": 216
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 780,
        "y": 168
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 540,
        "y": 168
      },
      {
        "templateId": 53,
        "level": 12,
        "x": 324,
        "y": 336
      },
      {
        "templateId": 54,
        "level": 13,
        "x": 948,
        "y": 336
      },
      {
        "templateId": 53,
        "level": 12,
        "x": 516,
        "y": 336
      },
      {
        "templateId": 53,
        "level": 12,
        "x": 1116,
        "y": 336
      },
      {
        "templateId": 54,
        "level": 13,
        "x": 708,
        "y": 336
      }
    ],
    "npcs": []
  },
  {
    "id": 82,
    "name": "Núi khỉ đen",
    "planetId": 2,
    "tileId": 20,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Hang quỷ chim",
        "minX": 0,
        "minY": 360,
        "maxX": 24,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 81,
        "goX": 1380,
        "goY": 336
      },
      {
        "name": "Hang khỉ đen",
        "minX": 1656,
        "minY": 360,
        "maxX": 1680,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 83,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [
      {
        "templateId": 54,
        "level": 13,
        "x": 324,
        "y": 384
      },
      {
        "templateId": 54,
        "level": 13,
        "x": 564,
        "y": 384
      },
      {
        "templateId": 54,
        "level": 13,
        "x": 804,
        "y": 384
      },
      {
        "templateId": 54,
        "level": 13,
        "x": 1068,
        "y": 384
      },
      {
        "templateId": 54,
        "level": 13,
        "x": 1284,
        "y": 384
      },
      {
        "templateId": 54,
        "level": 13,
        "x": 132,
        "y": 240
      },
      {
        "templateId": 54,
        "level": 13,
        "x": 396,
        "y": 240
      },
      {
        "templateId": 55,
        "level": 14,
        "x": 756,
        "y": 192
      },
      {
        "templateId": 54,
        "level": 13,
        "x": 1188,
        "y": 240
      },
      {
        "templateId": 54,
        "level": 13,
        "x": 1476,
        "y": 240
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 252,
        "y": 144
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 1308,
        "y": 144
      }
    ],
    "npcs": []
  },
  {
    "id": 83,
    "name": "Hang khỉ đen",
    "planetId": 2,
    "tileId": 21,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 3,
    "waypoints": [
      {
        "name": "Núi khỉ đen",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 82,
        "goX": 1620,
        "goY": 384
      },
      {
        "name": "Núi khỉ đỏ",
        "minX": 1656,
        "minY": 312,
        "maxX": 1680,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 79,
        "goX": 60,
        "goY": 360
      }
    ],
    "mobs": [
      {
        "templateId": 55,
        "level": 14,
        "x": 348,
        "y": 240
      },
      {
        "templateId": 55,
        "level": 14,
        "x": 468,
        "y": 192
      },
      {
        "templateId": 55,
        "level": 14,
        "x": 612,
        "y": 144
      },
      {
        "templateId": 55,
        "level": 14,
        "x": 900,
        "y": 144
      },
      {
        "templateId": 55,
        "level": 14,
        "x": 1020,
        "y": 192
      },
      {
        "templateId": 55,
        "level": 14,
        "x": 1140,
        "y": 240
      },
      {
        "templateId": 55,
        "level": 14,
        "x": 1260,
        "y": 288
      },
      {
        "templateId": 55,
        "level": 14,
        "x": 564,
        "y": 336
      },
      {
        "templateId": 55,
        "level": 14,
        "x": 924,
        "y": 336
      },
      {
        "templateId": 56,
        "level": 15,
        "x": 756,
        "y": 336
      }
    ],
    "npcs": []
  },
  {
    "id": 84,
    "name": "Siêu Thị",
    "planetId": 0,
    "tileId": 11,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [
      {
        "name": "Sân sau siêu thị",
        "minX": 1056,
        "minY": 312,
        "maxX": 1080,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 104,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 84,
        "y": 336,
        "templateId": 17,
        "avatar": 1142
      },
      {
        "status": 1,
        "x": 180,
        "y": 336,
        "templateId": 7,
        "avatar": 562
      },
      {
        "status": 1,
        "x": 276,
        "y": 336,
        "templateId": 21,
        "avatar": 1410
      },
      {
        "status": 1,
        "x": 372,
        "y": 336,
        "templateId": 16,
        "avatar": 728
      },
      {
        "status": 1,
        "x": 468,
        "y": 336,
        "templateId": 9,
        "avatar": 565
      },
      {
        "status": 1,
        "x": 564,
        "y": 336,
        "templateId": 8,
        "avatar": 350
      },
      {
        "status": 1,
        "x": 900,
        "y": 336,
        "templateId": 10,
        "avatar": 7184
      },
      {
        "status": 1,
        "x": 660,
        "y": 336,
        "templateId": 28,
        "avatar": 1415
      },
      {
        "status": 1,
        "x": 790,
        "y": 336,
        "templateId": 75,
        "avatar": 11378
      }
    ]
  },
  {
    "id": 85,
    "name": "Hành tinh M-2",
    "planetId": 2,
    "tileId": 20,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 3,
    "waypoints": [],
    "mobs": [
      {
        "templateId": 57,
        "level": 16,
        "x": 108,
        "y": 360
      },
      {
        "templateId": 57,
        "level": 16,
        "x": 1572,
        "y": 360
      },
      {
        "templateId": 57,
        "level": 16,
        "x": 1404,
        "y": 360
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 180,
        "y": 192
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 1044,
        "y": 360,
        "templateId": 36,
        "avatar": 2344
      }
    ]
  },
  {
    "id": 86,
    "name": "Hành tinh Polaris",
    "planetId": 2,
    "tileId": 6,
    "bgId": 5,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [
      {
        "templateId": 50,
        "level": 12,
        "x": 1524,
        "y": 192
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 1356,
        "y": 216
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 156,
        "y": 192
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 324,
        "y": 240
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 756,
        "y": 336,
        "templateId": 30,
        "avatar": 2333
      }
    ]
  },
  {
    "id": 87,
    "name": "Hành tinh Cretaceous",
    "planetId": 2,
    "tileId": 11,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [],
    "mobs": [
      {
        "templateId": 56,
        "level": 15,
        "x": 132,
        "y": 384
      },
      {
        "templateId": 57,
        "level": 16,
        "x": 1548,
        "y": 384
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 276,
        "y": 264
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 1356,
        "y": 264
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 780,
        "y": 384,
        "templateId": 31,
        "avatar": 2334
      }
    ]
  },
  {
    "id": 88,
    "name": "Hành tinh Monmaasu",
    "planetId": 2,
    "tileId": 8,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 1,
    "waypoints": [],
    "mobs": [
      {
        "templateId": 50,
        "level": 12,
        "x": 156,
        "y": 216
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 1476,
        "y": 216
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 348,
        "y": 168
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 1284,
        "y": 168
      },
      {
        "templateId": 56,
        "level": 15,
        "x": 276,
        "y": 336
      },
      {
        "templateId": 56,
        "level": 15,
        "x": 1356,
        "y": 336
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 780,
        "y": 336,
        "templateId": 32,
        "avatar": 2335
      }
    ]
  },
  {
    "id": 89,
    "name": "Hành tinh Rudeeze",
    "planetId": 2,
    "tileId": 3,
    "bgId": 1,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [
      {
        "templateId": 57,
        "level": 16,
        "x": 108,
        "y": 288
      },
      {
        "templateId": 57,
        "level": 16,
        "x": 1524,
        "y": 360
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 924,
        "y": 192,
        "templateId": 33,
        "avatar": 2336
      }
    ]
  },
  {
    "id": 90,
    "name": "Hành tinh Gelbo",
    "planetId": 2,
    "tileId": 10,
    "bgId": 7,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [
      {
        "templateId": 57,
        "level": 16,
        "x": 108,
        "y": 360
      },
      {
        "templateId": 57,
        "level": 16,
        "x": 1596,
        "y": 384
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 252,
        "y": 192
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 1380,
        "y": 216
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 804,
        "y": 240,
        "templateId": 34,
        "avatar": 2337
      }
    ]
  },
  {
    "id": 91,
    "name": "Hành tinh Tigere",
    "planetId": 2,
    "tileId": 1,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 1,
    "waypoints": [],
    "mobs": [
      {
        "templateId": 56,
        "level": 15,
        "x": 132,
        "y": 360
      },
      {
        "templateId": 56,
        "level": 15,
        "x": 1572,
        "y": 360
      },
      {
        "templateId": 57,
        "level": 16,
        "x": 324,
        "y": 168
      },
      {
        "templateId": 57,
        "level": 16,
        "x": 1356,
        "y": 168
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 804,
        "y": 120,
        "templateId": 35,
        "avatar": 2338
      }
    ]
  },
  {
    "id": 92,
    "name": "Thành phố phía đông",
    "planetId": 2,
    "tileId": 22,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Thành phố phía nam",
        "minX": 1416,
        "minY": 336,
        "maxX": 1440,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 93,
        "goX": 60,
        "goY": 360
      },
      {
        "name": "Nhà Bunma",
        "minX": 0,
        "minY": 336,
        "maxX": 24,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 102,
        "goX": 636,
        "goY": 360
      }
    ],
    "mobs": [
      {
        "templateId": 58,
        "level": 11,
        "x": 204,
        "y": 360
      },
      {
        "templateId": 58,
        "level": 11,
        "x": 396,
        "y": 360
      },
      {
        "templateId": 58,
        "level": 11,
        "x": 588,
        "y": 360
      },
      {
        "templateId": 58,
        "level": 11,
        "x": 804,
        "y": 360
      },
      {
        "templateId": 58,
        "level": 11,
        "x": 996,
        "y": 360
      },
      {
        "templateId": 58,
        "level": 11,
        "x": 1188,
        "y": 360
      }
    ],
    "npcs": []
  },
  {
    "id": 93,
    "name": "Thành phố phía nam",
    "planetId": 2,
    "tileId": 22,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Thành phố phía đông",
        "minX": 0,
        "minY": 336,
        "maxX": 24,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 92,
        "goX": 1380,
        "goY": 360
      },
      {
        "name": "Đảo Balê",
        "minX": 1656,
        "minY": 264,
        "maxX": 1680,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 94,
        "goX": 60,
        "goY": 384
      }
    ],
    "mobs": [
      {
        "templateId": 59,
        "level": 12,
        "x": 348,
        "y": 288
      },
      {
        "templateId": 59,
        "level": 12,
        "x": 516,
        "y": 288
      },
      {
        "templateId": 59,
        "level": 12,
        "x": 684,
        "y": 360
      },
      {
        "templateId": 59,
        "level": 12,
        "x": 876,
        "y": 360
      },
      {
        "templateId": 59,
        "level": 12,
        "x": 1092,
        "y": 264
      },
      {
        "templateId": 59,
        "level": 12,
        "x": 1212,
        "y": 360
      },
      {
        "templateId": 59,
        "level": 12,
        "x": 1380,
        "y": 360
      }
    ],
    "npcs": []
  },
  {
    "id": 94,
    "name": "Đảo Balê",
    "planetId": 2,
    "tileId": 22,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Thành phố phía nam",
        "minX": 0,
        "minY": 360,
        "maxX": 24,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 93,
        "goX": 1620,
        "goY": 288
      },
      {
        "name": "Cao nguyên",
        "minX": 1656,
        "minY": 360,
        "maxX": 1680,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 96,
        "goX": 60,
        "goY": 144
      }
    ],
    "mobs": [
      {
        "templateId": 60,
        "level": 13,
        "x": 324,
        "y": 360
      },
      {
        "templateId": 60,
        "level": 13,
        "x": 468,
        "y": 168
      },
      {
        "templateId": 60,
        "level": 13,
        "x": 588,
        "y": 384
      },
      {
        "templateId": 60,
        "level": 13,
        "x": 804,
        "y": 384
      },
      {
        "templateId": 60,
        "level": 13,
        "x": 1068,
        "y": 384
      },
      {
        "templateId": 60,
        "level": 13,
        "x": 1188,
        "y": 168
      },
      {
        "templateId": 60,
        "level": 13,
        "x": 1356,
        "y": 360
      }
    ],
    "npcs": []
  },
  {
    "id": 95,
    "name": "Hành tinh Bill 2",
    "planetId": 0,
    "tileId": 29,
    "bgId": 16,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Hành tinh Bill",
        "minX": 936,
        "minY": 288,
        "maxX": 960,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 154,
        "goX": 65,
        "goY": 312
      }
    ],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 96,
    "name": "Cao nguyên",
    "planetId": 2,
    "tileId": 22,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Đảo Balê",
        "minX": 0,
        "minY": 120,
        "maxX": 24,
        "maxY": 144,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 94,
        "goX": 1620,
        "goY": 384
      },
      {
        "name": "Thành phố phía bắc",
        "minX": 1656,
        "minY": 144,
        "maxX": 1680,
        "maxY": 168,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 97,
        "goX": 60,
        "goY": 384
      }
    ],
    "mobs": [
      {
        "templateId": 61,
        "level": 14,
        "x": 252,
        "y": 360
      },
      {
        "templateId": 61,
        "level": 14,
        "x": 420,
        "y": 336
      },
      {
        "templateId": 61,
        "level": 14,
        "x": 972,
        "y": 240
      },
      {
        "templateId": 61,
        "level": 14,
        "x": 1140,
        "y": 216
      }
    ],
    "npcs": []
  },
  {
    "id": 97,
    "name": "Thành phố phía bắc",
    "planetId": 2,
    "tileId": 23,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 100,
    "waypoints": [
      {
        "name": "Ngọn núi phía bắc",
        "minX": 1656,
        "minY": 360,
        "maxX": 1680,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 98,
        "goX": 60,
        "goY": 384
      },
      {
        "name": "Cao nguyên",
        "minX": 0,
        "minY": 360,
        "maxX": 24,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 96,
        "goX": 1620,
        "goY": 168
      }
    ],
    "mobs": [
      {
        "templateId": 62,
        "level": 15,
        "x": 228,
        "y": 384
      },
      {
        "templateId": 62,
        "level": 15,
        "x": 444,
        "y": 384
      },
      {
        "templateId": 62,
        "level": 15,
        "x": 660,
        "y": 384
      },
      {
        "templateId": 62,
        "level": 15,
        "x": 876,
        "y": 384
      },
      {
        "templateId": 62,
        "level": 15,
        "x": 1140,
        "y": 384
      },
      {
        "templateId": 62,
        "level": 15,
        "x": 1380,
        "y": 384
      }
    ],
    "npcs": []
  },
  {
    "id": 98,
    "name": "Ngọn núi phía bắc",
    "planetId": 2,
    "tileId": 23,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 100,
    "waypoints": [
      {
        "name": "Thành phố phía bắc",
        "minX": 0,
        "minY": 360,
        "maxX": 24,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 97,
        "goX": 1620,
        "goY": 384
      },
      {
        "name": "Thung lũng phía bắc",
        "minX": 1656,
        "minY": 360,
        "maxX": 1680,
        "maxY": 384,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 99,
        "goX": 60,
        "goY": 144
      }
    ],
    "mobs": [
      {
        "templateId": 63,
        "level": 16,
        "x": 372,
        "y": 312
      },
      {
        "templateId": 63,
        "level": 16,
        "x": 612,
        "y": 384
      },
      {
        "templateId": 63,
        "level": 16,
        "x": 828,
        "y": 168
      },
      {
        "templateId": 63,
        "level": 16,
        "x": 996,
        "y": 384
      },
      {
        "templateId": 63,
        "level": 16,
        "x": 1164,
        "y": 384
      },
      {
        "templateId": 63,
        "level": 16,
        "x": 1332,
        "y": 312
      }
    ],
    "npcs": []
  },
  {
    "id": 99,
    "name": "Thung lũng phía bắc",
    "planetId": 2,
    "tileId": 23,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 100,
    "waypoints": [
      {
        "name": "Ngọn núi phía bắc",
        "minX": 0,
        "minY": 120,
        "maxX": 24,
        "maxY": 144,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 98,
        "goX": 1620,
        "goY": 384
      },
      {
        "name": "Thị trấn Ginder",
        "minX": 1656,
        "minY": 120,
        "maxX": 1680,
        "maxY": 144,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 100,
        "goX": 60,
        "goY": 168
      }
    ],
    "mobs": [
      {
        "templateId": 64,
        "level": 17,
        "x": 804,
        "y": 384
      },
      {
        "templateId": 64,
        "level": 17,
        "x": 1380,
        "y": 192
      },
      {
        "templateId": 64,
        "level": 17,
        "x": 372,
        "y": 240
      },
      {
        "templateId": 64,
        "level": 17,
        "x": 516,
        "y": 288
      },
      {
        "templateId": 64,
        "level": 17,
        "x": 660,
        "y": 336
      },
      {
        "templateId": 64,
        "level": 17,
        "x": 972,
        "y": 336
      },
      {
        "templateId": 64,
        "level": 17,
        "x": 1092,
        "y": 288
      },
      {
        "templateId": 64,
        "level": 17,
        "x": 1236,
        "y": 240
      }
    ],
    "npcs": []
  },
  {
    "id": 100,
    "name": "Thị trấn Ginder",
    "planetId": 2,
    "tileId": 23,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 100,
    "waypoints": [
      {
        "name": "Thung lũng phía bắc",
        "minX": 0,
        "minY": 144,
        "maxX": 24,
        "maxY": 168,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 99,
        "goX": 1620,
        "goY": 144
      },
      {
        "name": "Võ đài Xên bọ hung",
        "minX": 1656,
        "minY": 168,
        "maxX": 1680,
        "maxY": 192,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 103,
        "goX": 60,
        "goY": 312
      }
    ],
    "mobs": [
      {
        "templateId": 65,
        "level": 18,
        "x": 228,
        "y": 384
      },
      {
        "templateId": 65,
        "level": 18,
        "x": 372,
        "y": 336
      },
      {
        "templateId": 65,
        "level": 18,
        "x": 516,
        "y": 384
      },
      {
        "templateId": 65,
        "level": 18,
        "x": 660,
        "y": 168
      },
      {
        "templateId": 65,
        "level": 18,
        "x": 804,
        "y": 384
      },
      {
        "templateId": 65,
        "level": 18,
        "x": 948,
        "y": 336
      },
      {
        "templateId": 65,
        "level": 18,
        "x": 1092,
        "y": 384
      },
      {
        "templateId": 65,
        "level": 18,
        "x": 1236,
        "y": 168
      },
      {
        "templateId": 65,
        "level": 18,
        "x": 1404,
        "y": 384
      }
    ],
    "npcs": []
  },
  {
    "id": 101,
    "name": "Nhà Bunma",
    "planetId": 0,
    "tileId": 28,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Siêu Thị",
        "minX": 744,
        "minY": 216,
        "maxX": 768,
        "maxY": 240,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 84,
        "goX": 46,
        "goY": 336
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 368,
        "y": 76,
        "templateId": 6,
        "avatar": -1
      },
      {
        "status": 1,
        "x": 263,
        "y": 240,
        "templateId": 37,
        "avatar": 2752
      },
      {
        "status": 1,
        "x": 504,
        "y": 241,
        "templateId": 10,
        "avatar": 640
      }
    ]
  },
  {
    "id": 102,
    "name": "Nhà Bunma",
    "planetId": 2,
    "tileId": 22,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Thành phố phía đông",
        "minX": 672,
        "minY": 336,
        "maxX": 696,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 92,
        "goX": 60,
        "goY": 360
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 276,
        "y": 360,
        "templateId": 37,
        "avatar": 2752
      },
      {
        "status": 0,
        "x": 143,
        "y": 360,
        "templateId": 38,
        "avatar": 1364
      }
    ]
  },
  {
    "id": 103,
    "name": "Võ đài Xên bọ hung",
    "planetId": 2,
    "tileId": 23,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 100,
    "waypoints": [
      {
        "name": "Thị trấn Ginder",
        "minX": 0,
        "minY": 288,
        "maxX": 24,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 100,
        "goX": 1620,
        "goY": 192
      }
    ],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 104,
    "name": "Sân sau siêu thị",
    "planetId": 0,
    "tileId": 11,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [
      {
        "name": "Siêu Thị",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 84,
        "goX": 1040,
        "goY": 336
      }
    ],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 105,
    "name": "Cánh đồng tuyết",
    "planetId": 2,
    "tileId": 24,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 4,
    "waypoints": [
      {
        "name": "Dòng sông băng",
        "minX": 1656,
        "minY": 168,
        "maxX": 1680,
        "maxY": 192,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 108,
        "goX": 60,
        "goY": 144
      },
      {
        "name": "Rừng băng",
        "minX": 1656,
        "minY": 384,
        "maxX": 1680,
        "maxY": 408,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 109,
        "goX": 60,
        "goY": 168
      },
      {
        "name": "Núi khỉ vàng",
        "minX": 0,
        "minY": 384,
        "maxX": 24,
        "maxY": 408,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 80,
        "goX": 1620,
        "goY": 144
      }
    ],
    "mobs": [
      {
        "templateId": 66,
        "level": 19,
        "x": 276,
        "y": 408
      },
      {
        "templateId": 66,
        "level": 19,
        "x": 684,
        "y": 408
      },
      {
        "templateId": 66,
        "level": 19,
        "x": 996,
        "y": 408
      },
      {
        "templateId": 66,
        "level": 19,
        "x": 1308,
        "y": 408
      },
      {
        "templateId": 66,
        "level": 19,
        "x": 540,
        "y": 192
      },
      {
        "templateId": 66,
        "level": 19,
        "x": 804,
        "y": 192
      },
      {
        "templateId": 66,
        "level": 19,
        "x": 1068,
        "y": 192
      },
      {
        "templateId": 66,
        "level": 19,
        "x": 1356,
        "y": 192
      }
    ],
    "npcs": []
  },
  {
    "id": 106,
    "name": "Rừng tuyết",
    "planetId": 2,
    "tileId": 24,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 4,
    "waypoints": [
      {
        "name": "Rừng băng",
        "minX": 0,
        "minY": 384,
        "maxX": 24,
        "maxY": 408,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 109,
        "goX": 60,
        "goY": 432
      },
      {
        "name": "Núi tuyết",
        "minX": 1656,
        "minY": 144,
        "maxX": 1680,
        "maxY": 168,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 107,
        "goX": 60,
        "goY": 144
      },
      {
        "name": "Hang băng",
        "minX": 1656,
        "minY": 384,
        "maxX": 1680,
        "maxY": 408,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 110,
        "goX": 1620,
        "goY": 168
      }
    ],
    "mobs": [
      {
        "templateId": 66,
        "level": 19,
        "x": 324,
        "y": 288
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 660,
        "y": 264
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 1116,
        "y": 216
      },
      {
        "templateId": 66,
        "level": 19,
        "x": 492,
        "y": 408
      },
      {
        "templateId": 66,
        "level": 19,
        "x": 804,
        "y": 408
      },
      {
        "templateId": 66,
        "level": 19,
        "x": 948,
        "y": 408
      },
      {
        "templateId": 66,
        "level": 19,
        "x": 1284,
        "y": 408
      }
    ],
    "npcs": []
  },
  {
    "id": 107,
    "name": "Núi tuyết",
    "planetId": 2,
    "tileId": 24,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 4,
    "waypoints": [
      {
        "name": "Rừng tuyết",
        "minX": 0,
        "minY": 120,
        "maxX": 24,
        "maxY": 144,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 106,
        "goX": 1620,
        "goY": 168
      },
      {
        "name": "Hang băng",
        "minX": 0,
        "minY": 432,
        "maxX": 24,
        "maxY": 456,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 110,
        "goX": 1620,
        "goY": 432
      },
      {
        "name": "Dòng sông băng",
        "minX": 888,
        "minY": 672,
        "maxX": 912,
        "maxY": 696,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 108,
        "goX": 660,
        "goY": 696
      }
    ],
    "mobs": [
      {
        "templateId": 67,
        "level": 20,
        "x": 636,
        "y": 144
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 468,
        "y": 144
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 300,
        "y": 144
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 252,
        "y": 456
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 420,
        "y": 456
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 588,
        "y": 456
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 132,
        "y": 696
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 324,
        "y": 696
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 660,
        "y": 696
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 492,
        "y": 696
      }
    ],
    "npcs": []
  },
  {
    "id": 108,
    "name": "Dòng sông băng",
    "planetId": 2,
    "tileId": 25,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 5,
    "waypoints": [
      {
        "name": "Núi tuyết",
        "minX": 696,
        "minY": 672,
        "maxX": 720,
        "maxY": 696,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 107,
        "goX": 852,
        "goY": 696
      },
      {
        "name": "Cánh đồng tuyết",
        "minX": 0,
        "minY": 120,
        "maxX": 24,
        "maxY": 144,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 105,
        "goX": 1620,
        "goY": 192
      },
      {
        "name": "Rừng băng",
        "minX": 0,
        "minY": 528,
        "maxX": 24,
        "maxY": 552,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 109,
        "goX": 1620,
        "goY": 432
      }
    ],
    "mobs": [
      {
        "templateId": 67,
        "level": 20,
        "x": 204,
        "y": 144
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 444,
        "y": 144
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 444,
        "y": 360
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 108,
        "y": 360
      },
      {
        "templateId": 68,
        "level": 21,
        "x": 204,
        "y": 552
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 444,
        "y": 552
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 180,
        "y": 696
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 492,
        "y": 696
      },
      {
        "templateId": 67,
        "level": 20,
        "x": 324,
        "y": 696
      }
    ],
    "npcs": []
  },
  {
    "id": 109,
    "name": "Rừng băng",
    "planetId": 2,
    "tileId": 25,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 5,
    "waypoints": [
      {
        "name": "Rừng tuyết",
        "minX": 0,
        "minY": 408,
        "maxX": 24,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 106,
        "goX": 60,
        "goY": 408
      },
      {
        "name": "Cánh đồng tuyết",
        "minX": 0,
        "minY": 144,
        "maxX": 24,
        "maxY": 168,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 105,
        "goX": 1620,
        "goY": 408
      },
      {
        "name": "Dòng sông băng",
        "minX": 1656,
        "minY": 408,
        "maxX": 1680,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 108,
        "goX": 60,
        "goY": 552
      }
    ],
    "mobs": [
      {
        "templateId": 68,
        "level": 21,
        "x": 204,
        "y": 168
      },
      {
        "templateId": 68,
        "level": 21,
        "x": 228,
        "y": 432
      },
      {
        "templateId": 68,
        "level": 21,
        "x": 444,
        "y": 432
      },
      {
        "templateId": 68,
        "level": 21,
        "x": 636,
        "y": 432
      },
      {
        "templateId": 68,
        "level": 21,
        "x": 876,
        "y": 144
      },
      {
        "templateId": 68,
        "level": 21,
        "x": 1356,
        "y": 216
      },
      {
        "templateId": 69,
        "level": 22,
        "x": 1116,
        "y": 240
      },
      {
        "templateId": 68,
        "level": 21,
        "x": 1044,
        "y": 384
      },
      {
        "templateId": 68,
        "level": 21,
        "x": 1188,
        "y": 384
      },
      {
        "templateId": 68,
        "level": 21,
        "x": 372,
        "y": 168
      },
      {
        "templateId": 68,
        "level": 21,
        "x": 564,
        "y": 168
      }
    ],
    "npcs": []
  },
  {
    "id": 110,
    "name": "Hang băng",
    "planetId": 2,
    "tileId": 25,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 5,
    "waypoints": [
      {
        "name": "Núi tuyết",
        "minX": 1656,
        "minY": 408,
        "maxX": 1680,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 107,
        "goX": 60,
        "goY": 456
      },
      {
        "name": "Rừng tuyết",
        "minX": 1656,
        "minY": 144,
        "maxX": 1680,
        "maxY": 168,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 106,
        "goX": 1620,
        "goY": 408
      }
    ],
    "mobs": [
      {
        "templateId": 68,
        "level": 21,
        "x": 348,
        "y": 432
      },
      {
        "templateId": 68,
        "level": 21,
        "x": 1236,
        "y": 432
      },
      {
        "templateId": 68,
        "level": 21,
        "x": 1380,
        "y": 168
      },
      {
        "templateId": 69,
        "level": 22,
        "x": 132,
        "y": 336
      },
      {
        "templateId": 69,
        "level": 22,
        "x": 540,
        "y": 336
      },
      {
        "templateId": 69,
        "level": 22,
        "x": 492,
        "y": 96
      },
      {
        "templateId": 69,
        "level": 22,
        "x": 204,
        "y": 72
      },
      {
        "templateId": 68,
        "level": 21,
        "x": 948,
        "y": 432
      },
      {
        "templateId": 69,
        "level": 22,
        "x": 852,
        "y": 240
      },
      {
        "templateId": 69,
        "level": 22,
        "x": 1068,
        "y": 240
      },
      {
        "templateId": 69,
        "level": 22,
        "x": 1236,
        "y": 216
      }
    ],
    "npcs": []
  },
  {
    "id": 111,
    "name": "Đông Nam Karin",
    "planetId": 2,
    "tileId": 4,
    "bgId": 3,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Rừng Karin",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 47,
        "goX": 900,
        "goY": 336
      }
    ],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 112,
    "name": "Võ đài Hạt Mít",
    "planetId": 2,
    "tileId": 26,
    "bgId": 15,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": [
      {
        "status": 0,
        "x": 217,
        "y": 408,
        "templateId": 21,
        "avatar": 1410
      }
    ]
  },
  {
    "id": 113,
    "name": "Đại hội võ thuật",
    "planetId": 2,
    "tileId": 23,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 295,
        "y": 360,
        "templateId": 22,
        "avatar": 1411
      },
      {
        "status": 1,
        "x": 474,
        "y": 360,
        "templateId": 22,
        "avatar": 1411
      }
    ]
  },
  {
    "id": 114,
    "name": "Cổng phi thuyền",
    "planetId": 2,
    "tileId": 12,
    "bgId": 11,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 128,
        "y": 330,
        "templateId": 44,
        "avatar": 4390
      },
      {
        "status": 1,
        "x": 160,
        "y": 336,
        "templateId": 45,
        "avatar": 4391
      },
      {
        "status": 1,
        "x": 480,
        "y": 336,
        "templateId": 46,
        "avatar": 4388
      }
    ]
  },
  {
    "id": 115,
    "name": "Phòng chờ",
    "planetId": 2,
    "tileId": 12,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 231,
        "y": 330,
        "templateId": 44,
        "avatar": 4390
      },
      {
        "status": 1,
        "x": 480,
        "y": 330,
        "templateId": 46,
        "avatar": 4388
      }
    ]
  },
  {
    "id": 116,
    "name": "Thánh địa Kaio",
    "planetId": 0,
    "tileId": 0,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 117,
    "name": "Cửa Ải 1",
    "planetId": 2,
    "tileId": 12,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 231,
        "y": 330,
        "templateId": 44,
        "avatar": 4390
      },
      {
        "status": 1,
        "x": 480,
        "y": 330,
        "templateId": 46,
        "avatar": 4388
      }
    ]
  },
  {
    "id": 118,
    "name": "Cửa Ải 2",
    "planetId": 2,
    "tileId": 13,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 231,
        "y": 330,
        "templateId": 44,
        "avatar": 4390
      },
      {
        "status": 1,
        "x": 480,
        "y": 330,
        "templateId": 46,
        "avatar": 4388
      }
    ]
  },
  {
    "id": 119,
    "name": "Cửa Ải 3",
    "planetId": 2,
    "tileId": 12,
    "bgId": 11,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 231,
        "y": 330,
        "templateId": 44,
        "avatar": 4390
      },
      {
        "status": 1,
        "x": 480,
        "y": 330,
        "templateId": 46,
        "avatar": 4388
      }
    ]
  },
  {
    "id": 120,
    "name": "Phòng chỉ huy",
    "planetId": 2,
    "tileId": 12,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 231,
        "y": 330,
        "templateId": 44,
        "avatar": 4390
      },
      {
        "status": 1,
        "x": 480,
        "y": 330,
        "templateId": 46,
        "avatar": 4388
      }
    ]
  },
  {
    "id": 121,
    "name": "Đấu trường",
    "planetId": 0,
    "tileId": 0,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 122,
    "name": "Ngũ Hành Sơn",
    "planetId": 0,
    "tileId": 1,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Ngũ Hành Sơn",
        "minX": 1512,
        "minY": 336,
        "maxX": 1536,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 123,
        "goX": 60,
        "goY": 360
      }
    ],
    "mobs": [
      {
        "templateId": 56,
        "level": 20,
        "x": 324,
        "y": 384
      },
      {
        "templateId": 56,
        "level": 20,
        "x": 588,
        "y": 408
      },
      {
        "templateId": 56,
        "level": 20,
        "x": 780,
        "y": 408
      },
      {
        "templateId": 56,
        "level": 20,
        "x": 1140,
        "y": 360
      }
    ],
    "npcs": [
      {
        "status": 0,
        "x": 468,
        "y": 312,
        "templateId": 6,
        "avatar": 0
      },
      {
        "status": 1,
        "x": 140,
        "y": 384,
        "templateId": 49,
        "avatar": 4544
      }
    ]
  },
  {
    "id": 123,
    "name": "Ngũ Hành Sơn",
    "planetId": 0,
    "tileId": 1,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Ngũ Hành Sơn",
        "minX": 0,
        "minY": 336,
        "maxX": 24,
        "maxY": 360,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 122,
        "goX": 1476,
        "goY": 360
      },
      {
        "name": "Ngũ Hành Sơn",
        "minX": 1224,
        "minY": 264,
        "maxX": 1248,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 124,
        "goX": 48,
        "goY": 288
      }
    ],
    "mobs": [
      {
        "templateId": 57,
        "level": 20,
        "x": 300,
        "y": 408
      },
      {
        "templateId": 57,
        "level": 20,
        "x": 492,
        "y": 384
      },
      {
        "templateId": 57,
        "level": 20,
        "x": 636,
        "y": 384
      },
      {
        "templateId": 57,
        "level": 20,
        "x": 828,
        "y": 336
      }
    ],
    "npcs": [
      {
        "status": 0,
        "x": 180,
        "y": 360,
        "templateId": 6,
        "avatar": 0
      }
    ]
  },
  {
    "id": 124,
    "name": "Ngũ Hành Sơn",
    "planetId": 0,
    "tileId": 1,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Ngũ Hành Sơn",
        "minX": 0,
        "minY": 264,
        "maxX": 24,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 123,
        "goX": 1188,
        "goY": 288
      }
    ],
    "mobs": [
      {
        "templateId": 50,
        "level": 20,
        "x": 564,
        "y": 216
      },
      {
        "templateId": 50,
        "level": 20,
        "x": 348,
        "y": 144
      },
      {
        "templateId": 57,
        "level": 20,
        "x": 588,
        "y": 408
      },
      {
        "templateId": 50,
        "level": 20,
        "x": 852,
        "y": 192
      },
      {
        "templateId": 57,
        "level": 20,
        "x": 324,
        "y": 432
      },
      {
        "templateId": 57,
        "level": 20,
        "x": 780,
        "y": 432
      }
    ],
    "npcs": [
      {
        "status": 1,
        "x": 517,
        "y": 233,
        "templateId": 6,
        "avatar": 0
      },
      {
        "status": 1,
        "x": 1060,
        "y": 408,
        "templateId": 49,
        "avatar": 4544
      },
      {
        "status": 1,
        "x": 979,
        "y": 418,
        "templateId": 48,
        "avatar": 4520
      }
    ]
  },
  {
    "id": 125,
    "name": "Võ đài Bang",
    "planetId": 0,
    "tileId": 0,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 126,
    "name": "Thành phố Santa",
    "planetId": 2,
    "tileId": 11,
    "bgId": 10,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [
      {
        "templateId": 70,
        "level": 23,
        "x": 400,
        "y": 360
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 228,
        "y": 240
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 540,
        "y": 240
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 708,
        "y": 240
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 1020,
        "y": 240
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 372,
        "y": 168
      },
      {
        "templateId": 50,
        "level": 12,
        "x": 876,
        "y": 168
      }
    ],
    "npcs": [
      {
        "status": 0,
        "x": 137,
        "y": 360,
        "templateId": 53,
        "avatar": 4668
      }
    ]
  },
  {
    "id": 127,
    "name": "Cổng phi thuyền",
    "planetId": 2,
    "tileId": 12,
    "bgId": 11,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [],
    "mobs": [],
    "npcs": [
      {
        "status": 0,
        "x": 108,
        "y": 312,
        "templateId": 44,
        "avatar": 4390
      }
    ]
  },
  {
    "id": 128,
    "name": "Bụng Mabư",
    "planetId": 0,
    "tileId": 12,
    "bgId": 11,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 129,
    "name": "Đại hội võ thuật",
    "planetId": 2,
    "tileId": 23,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": [
      {
        "status": 1,
        "x": 295,
        "y": 360,
        "templateId": 23,
        "avatar": 1415
      },
      {
        "status": 1,
        "x": 474,
        "y": 360,
        "templateId": 23,
        "avatar": 1415
      }
    ]
  },
  {
    "id": 130,
    "name": "Đại hội võ thuật Vũ Trụ",
    "planetId": 0,
    "tileId": 0,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 131,
    "name": "Hành Tinh Yardart",
    "planetId": 2,
    "tileId": 27,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 4,
    "waypoints": [
      {
        "name": "Hành Tinh Yardart 2",
        "minX": 1416,
        "minY": 432,
        "maxX": 1440,
        "maxY": 456,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 132,
        "goX": 60,
        "goY": 456
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 0,
        "x": 941,
        "y": 144,
        "templateId": 60,
        "avatar": 1359
      }
    ]
  },
  {
    "id": 132,
    "name": "Hành Tinh Yardart 2",
    "planetId": 2,
    "tileId": 27,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 4,
    "waypoints": [
      {
        "name": "Hành Tinh Yardart",
        "minX": 0,
        "minY": 432,
        "maxX": 24,
        "maxY": 456,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 131,
        "goX": 1381,
        "goY": 451
      },
      {
        "name": "Hành Tinh Yardart 3",
        "minX": 1416,
        "minY": 288,
        "maxX": 1440,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 133,
        "goX": 60,
        "goY": 312
      }
    ],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 133,
    "name": "Hành Tinh Yardart 3",
    "planetId": 2,
    "tileId": 27,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 4,
    "waypoints": [
      {
        "name": "Hành Tinh Yardart 2",
        "minX": 0,
        "minY": 288,
        "maxX": 24,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 132,
        "goX": 1380,
        "goY": 312
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 0,
        "x": 1359,
        "y": 288,
        "templateId": 61,
        "avatar": 516
      }
    ]
  },
  {
    "id": 134,
    "name": "Đại hội võ thuật Vũ Trụ 6-7",
    "planetId": 0,
    "tileId": 0,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 135,
    "name": "Động hải tặc",
    "planetId": 0,
    "tileId": 28,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Cảng hải tặc",
        "minX": 1176,
        "minY": 1008,
        "maxX": 1200,
        "maxY": 1032,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 138,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [
      {
        "templateId": 34,
        "level": 8,
        "x": 204,
        "y": 336
      },
      {
        "templateId": 34,
        "level": 8,
        "x": 420,
        "y": 336
      },
      {
        "templateId": 34,
        "level": 8,
        "x": 636,
        "y": 336
      },
      {
        "templateId": 34,
        "level": 8,
        "x": 876,
        "y": 336
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 276,
        "y": 600
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 468,
        "y": 600
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 684,
        "y": 600
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 924,
        "y": 600
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 156,
        "y": 1032
      },
      {
        "templateId": 35,
        "level": 8,
        "x": 348,
        "y": 1032
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 612,
        "y": 1032
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 828,
        "y": 1032
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 468,
        "y": 1032
      }
    ],
    "npcs": []
  },
  {
    "id": 136,
    "name": "Hang Bạch Tuộc",
    "planetId": 0,
    "tileId": 28,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Cảng hải tặc",
        "minX": 0,
        "minY": 168,
        "maxX": 24,
        "maxY": 192,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 138,
        "goX": 660,
        "goY": 336
      },
      {
        "name": "Động kho báu",
        "minX": 1416,
        "minY": 528,
        "maxX": 1440,
        "maxY": 552,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 137,
        "goX": 60,
        "goY": 168
      }
    ],
    "mobs": [
      {
        "templateId": 36,
        "level": 8,
        "x": 324,
        "y": 192
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 492,
        "y": 576
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 876,
        "y": 576
      },
      {
        "templateId": 36,
        "level": 8,
        "x": 1068,
        "y": 168
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 492,
        "y": 312
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 876,
        "y": 288
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 1308,
        "y": 216
      },
      {
        "templateId": 71,
        "level": 24,
        "x": 700,
        "y": 576
      }
    ],
    "npcs": []
  },
  {
    "id": 137,
    "name": "Động kho báu",
    "planetId": 0,
    "tileId": 28,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Hang Bạch Tuộc",
        "minX": 0,
        "minY": 144,
        "maxX": 24,
        "maxY": 168,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 136,
        "goX": 1380,
        "goY": 552
      }
    ],
    "mobs": [
      {
        "templateId": 37,
        "level": 8,
        "x": 1068,
        "y": 264
      },
      {
        "templateId": 38,
        "level": 8,
        "x": 252,
        "y": 168
      },
      {
        "templateId": 38,
        "level": 8,
        "x": 444,
        "y": 168
      },
      {
        "templateId": 38,
        "level": 8,
        "x": 636,
        "y": 168
      },
      {
        "templateId": 38,
        "level": 8,
        "x": 852,
        "y": 168
      },
      {
        "templateId": 38,
        "level": 8,
        "x": 924,
        "y": 456
      },
      {
        "templateId": 38,
        "level": 8,
        "x": 684,
        "y": 456
      },
      {
        "templateId": 38,
        "level": 8,
        "x": 468,
        "y": 456
      }
    ],
    "npcs": []
  },
  {
    "id": 138,
    "name": "Cảng hải tặc",
    "planetId": 0,
    "tileId": 28,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Động hải tặc",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 135,
        "goX": 1116,
        "goY": 1032
      },
      {
        "name": "Hang Bạch Tuộc",
        "minX": 696,
        "minY": 312,
        "maxX": 720,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 136,
        "goX": 60,
        "goY": 192
      }
    ],
    "mobs": [
      {
        "templateId": 37,
        "level": 8,
        "x": 156,
        "y": 240
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 276,
        "y": 168
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 372,
        "y": 240
      },
      {
        "templateId": 37,
        "level": 8,
        "x": 492,
        "y": 168
      },
      {
        "templateId": 72,
        "level": 23,
        "x": 550,
        "y": 336
      }
    ],
    "npcs": []
  },
  {
    "id": 139,
    "name": "Hành tinh Potaufeu",
    "planetId": 2,
    "tileId": 9,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Hang động Potaufeu",
        "minX": 600,
        "minY": 384,
        "maxX": 672,
        "maxY": 408,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 140,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 0,
        "x": 134,
        "y": 408,
        "templateId": 63,
        "avatar": 5833
      }
    ]
  },
  {
    "id": 140,
    "name": "Hang động Potaufeu",
    "planetId": 2,
    "tileId": 9,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Hành tinh Potaufeu",
        "minX": 24,
        "minY": 312,
        "maxX": 120,
        "maxY": 336,
        "isEnter": true,
        "isOffline": false,
        "goMapId": 139,
        "goX": 636,
        "goY": 408
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 0,
        "x": 434,
        "y": 336,
        "templateId": 62,
        "avatar": 5828
      }
    ]
  },
  {
    "id": 141,
    "name": "Con đường rắn độc",
    "planetId": 0,
    "tileId": 14,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 5,
    "waypoints": [
      {
        "name": "Con đường rắn độc",
        "minX": 1656,
        "minY": 312,
        "maxX": 1680,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 142,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [
      {
        "templateId": 24,
        "level": 8,
        "x": 204,
        "y": 336
      },
      {
        "templateId": 24,
        "level": 8,
        "x": 420,
        "y": 336
      },
      {
        "templateId": 24,
        "level": 8,
        "x": 660,
        "y": 336
      },
      {
        "templateId": 24,
        "level": 8,
        "x": 900,
        "y": 336
      },
      {
        "templateId": 24,
        "level": 8,
        "x": 1140,
        "y": 336
      },
      {
        "templateId": 24,
        "level": 8,
        "x": 1380,
        "y": 336
      },
      {
        "templateId": 24,
        "level": 8,
        "x": 1572,
        "y": 336
      },
      {
        "templateId": 33,
        "level": 8,
        "x": 300,
        "y": 216
      },
      {
        "templateId": 33,
        "level": 8,
        "x": 540,
        "y": 216
      },
      {
        "templateId": 33,
        "level": 8,
        "x": 780,
        "y": 216
      },
      {
        "templateId": 33,
        "level": 8,
        "x": 1020,
        "y": 216
      },
      {
        "templateId": 33,
        "level": 8,
        "x": 1260,
        "y": 216
      },
      {
        "templateId": 33,
        "level": 8,
        "x": 1500,
        "y": 216
      }
    ],
    "npcs": [
      {
        "status": 0,
        "x": 250,
        "y": 336,
        "templateId": 19,
        "avatar": 1356
      }
    ]
  },
  {
    "id": 142,
    "name": "Con đường rắn độc",
    "planetId": 0,
    "tileId": 14,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 5,
    "waypoints": [
      {
        "name": "Con đường rắn độc",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 141,
        "goX": 1630,
        "goY": 336
      },
      {
        "name": "Con đường rắn độc",
        "minX": 1656,
        "minY": 312,
        "maxX": 1680,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 143,
        "goX": 60,
        "goY": 336
      }
    ],
    "mobs": [
      {
        "templateId": 26,
        "level": 8,
        "x": 1428,
        "y": 336
      },
      {
        "templateId": 26,
        "level": 8,
        "x": 1212,
        "y": 336
      },
      {
        "templateId": 26,
        "level": 8,
        "x": 996,
        "y": 336
      },
      {
        "templateId": 26,
        "level": 8,
        "x": 780,
        "y": 336
      },
      {
        "templateId": 26,
        "level": 8,
        "x": 588,
        "y": 336
      },
      {
        "templateId": 26,
        "level": 8,
        "x": 372,
        "y": 336
      },
      {
        "templateId": 26,
        "level": 8,
        "x": 180,
        "y": 336
      },
      {
        "templateId": 25,
        "level": 8,
        "x": 1332,
        "y": 192
      },
      {
        "templateId": 25,
        "level": 8,
        "x": 1116,
        "y": 216
      },
      {
        "templateId": 25,
        "level": 8,
        "x": 900,
        "y": 192
      },
      {
        "templateId": 25,
        "level": 8,
        "x": 684,
        "y": 216
      },
      {
        "templateId": 25,
        "level": 8,
        "x": 492,
        "y": 192
      },
      {
        "templateId": 25,
        "level": 8,
        "x": 276,
        "y": 216
      }
    ],
    "npcs": []
  },
  {
    "id": 143,
    "name": "Con đường rắn độc",
    "planetId": 0,
    "tileId": 14,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 5,
    "waypoints": [
      {
        "name": "Con đường rắn độc",
        "minX": 0,
        "minY": 312,
        "maxX": 24,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 142,
        "goX": 1630,
        "goY": 336
      }
    ],
    "mobs": [
      {
        "templateId": 49,
        "level": 8,
        "x": 1428,
        "y": 312
      },
      {
        "templateId": 49,
        "level": 8,
        "x": 1212,
        "y": 312
      },
      {
        "templateId": 49,
        "level": 8,
        "x": 972,
        "y": 312
      },
      {
        "templateId": 49,
        "level": 8,
        "x": 756,
        "y": 312
      },
      {
        "templateId": 49,
        "level": 8,
        "x": 516,
        "y": 312
      },
      {
        "templateId": 49,
        "level": 8,
        "x": 300,
        "y": 312
      },
      {
        "templateId": 50,
        "level": 8,
        "x": 396,
        "y": 216
      },
      {
        "templateId": 50,
        "level": 8,
        "x": 156,
        "y": 168
      },
      {
        "templateId": 50,
        "level": 8,
        "x": 612,
        "y": 168
      },
      {
        "templateId": 50,
        "level": 8,
        "x": 852,
        "y": 216
      },
      {
        "templateId": 50,
        "level": 8,
        "x": 1092,
        "y": 168
      },
      {
        "templateId": 50,
        "level": 8,
        "x": 1332,
        "y": 216
      }
    ],
    "npcs": []
  },
  {
    "id": 144,
    "name": "Hoang mạc",
    "planetId": 2,
    "tileId": 12,
    "bgId": 11,
    "typeMap": 0,
    "bgType": 2,
    "waypoints": [
      {
        "name": "Con đường rắn độc",
        "minX": 0,
        "minY": 240,
        "maxX": 24,
        "maxY": 264,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 5,
        "goX": 1139,
        "goY": 0
      }
    ],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 145,
    "name": "Võ Đài Siêu Cấp",
    "planetId": 2,
    "tileId": 13,
    "bgId": 10,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": [
      {
        "status": 0,
        "x": 754,
        "y": 160,
        "templateId": 64,
        "avatar": 6578
      }
    ]
  },
  {
    "id": 146,
    "name": "Tây Karin",
    "planetId": 0,
    "tileId": 4,
    "bgId": 3,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [
      {
        "templateId": 6,
        "level": 3,
        "x": 300,
        "y": 336
      },
      {
        "templateId": 25,
        "level": 8,
        "x": 650,
        "y": 200
      },
      {
        "templateId": 26,
        "level": 8,
        "x": 1000,
        "y": 336
      }
    ],
    "npcs": []
  },
  {
    "id": 147,
    "name": "Sa mạc",
    "planetId": 0,
    "tileId": 3,
    "bgId": 2,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Vùng đất băng giá",
        "minX": 1512,
        "minY": 768,
        "maxX": 1536,
        "maxY": 792,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 152,
        "goX": 1576,
        "goY": 168
      }
    ],
    "mobs": [
      {
        "templateId": 76,
        "level": 10,
        "x": 1308,
        "y": 432
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 348,
        "y": 504
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 492,
        "y": 792
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 132,
        "y": 792
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 996,
        "y": 792
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 1428,
        "y": 792
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 540,
        "y": 408
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 348,
        "y": 432
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 180,
        "y": 672
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 876,
        "y": 240
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 996,
        "y": 672
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 1212,
        "y": 744
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 1260,
        "y": 384
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 1380,
        "y": 384
      },
      {
        "templateId": 76,
        "level": 10,
        "x": 708,
        "y": 240
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 660,
        "y": 240
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 852,
        "y": 360
      }
    ],
    "npcs": []
  },
  {
    "id": 148,
    "name": "Lâu đài Lychee",
    "planetId": 2,
    "tileId": 15,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Hành tinh bóng tối",
        "minX": 0,
        "minY": 456,
        "maxX": 24,
        "maxY": 480,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 151,
        "goX": 1626,
        "goY": 288
      }
    ],
    "mobs": [
      {
        "templateId": 73,
        "level": 9,
        "x": 708,
        "y": 480
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 444,
        "y": 480
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 180,
        "y": 480
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 300,
        "y": 480
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 588,
        "y": 480
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 852,
        "y": 480
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 228,
        "y": 384
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 396,
        "y": 384
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 564,
        "y": 384
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 732,
        "y": 384
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 852,
        "y": 384
      }
    ],
    "npcs": []
  },
  {
    "id": 149,
    "name": "Thành phố Santa",
    "planetId": 2,
    "tileId": 11,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Sa mạc",
        "minX": 1512,
        "minY": 312,
        "maxX": 1536,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 147,
        "goX": 40,
        "goY": 792
      }
    ],
    "mobs": [
      {
        "templateId": 74,
        "level": 9,
        "x": 1380,
        "y": 336
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 1188,
        "y": 336
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 996,
        "y": 336
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 828,
        "y": 336
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 684,
        "y": 336
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 564,
        "y": 336
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 420,
        "y": 336
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 228,
        "y": 336
      },
      {
        "templateId": 76,
        "level": 10,
        "x": 1284,
        "y": 336
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 1428,
        "y": 216
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 1212,
        "y": 216
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 1020,
        "y": 216
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 804,
        "y": 216
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 612,
        "y": 216
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 420,
        "y": 216
      }
    ],
    "npcs": []
  },
  {
    "id": 150,
    "name": "Lôi Đài",
    "planetId": 0,
    "tileId": 0,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 151,
    "name": "Hành tinh bóng tối",
    "planetId": 2,
    "tileId": 12,
    "bgId": 11,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Lâu đài Lychee",
        "minX": 1656,
        "minY": 264,
        "maxX": 1680,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 148,
        "goX": 25,
        "goY": 480
      },
      {
        "name": "Vùng đất băng giá",
        "minX": 0,
        "minY": 264,
        "maxX": 24,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 152,
        "goX": 42,
        "goY": 168
      }
    ],
    "mobs": [
      {
        "templateId": 76,
        "level": 10,
        "x": 900,
        "y": 360
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 588,
        "y": 360
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 1164,
        "y": 360
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 1068,
        "y": 360
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 756,
        "y": 360
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 804,
        "y": 264
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 972,
        "y": 264
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 660,
        "y": 264
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 1116,
        "y": 264
      }
    ],
    "npcs": []
  },
  {
    "id": 152,
    "name": "Vùng đất băng giá",
    "planetId": 2,
    "tileId": 25,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 5,
    "waypoints": [
      {
        "name": "Hành tinh bóng tối",
        "minX": 0,
        "minY": 144,
        "maxX": 24,
        "maxY": 168,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 151,
        "goX": 47,
        "goY": 288
      },
      {
        "name": "Sa mạc",
        "minX": 1608,
        "minY": 144,
        "maxX": 1632,
        "maxY": 168,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 147,
        "goX": 1463,
        "goY": 792
      }
    ],
    "mobs": [
      {
        "templateId": 76,
        "level": 10,
        "x": 852,
        "y": 432
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 1260,
        "y": 432
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 1500,
        "y": 432
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 1404,
        "y": 168
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 1524,
        "y": 168
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 1044,
        "y": 432
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 924,
        "y": 432
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 156,
        "y": 168
      },
      {
        "templateId": 73,
        "level": 9,
        "x": 396,
        "y": 168
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 276,
        "y": 168
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 180,
        "y": 432
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 324,
        "y": 432
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 492,
        "y": 432
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 804,
        "y": 432
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 1452,
        "y": 168
      },
      {
        "templateId": 74,
        "level": 9,
        "x": 1404,
        "y": 432
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 1452,
        "y": 96
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 1332,
        "y": 360
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 1500,
        "y": 360
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 1044,
        "y": 360
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 828,
        "y": 360
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 1116,
        "y": 72
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 732,
        "y": 72
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 204,
        "y": 96
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 348,
        "y": 96
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 492,
        "y": 96
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 420,
        "y": 360
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 228,
        "y": 360
      },
      {
        "templateId": 75,
        "level": 9,
        "x": 564,
        "y": 360
      },
      {
        "templateId": 76,
        "level": 10,
        "x": 300,
        "y": 168
      }
    ],
    "npcs": []
  },
  {
    "id": 153,
    "name": "Lãnh địa bang hội",
    "planetId": 0,
    "tileId": 1,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": [
      {
        "status": 0,
        "x": 650,
        "y": 744,
        "templateId": 3,
        "avatar": 0
      },
      {
        "status": 0,
        "x": 741,
        "y": 744,
        "templateId": 68,
        "avatar": 7188
      },
      {
        "status": 0,
        "x": 913,
        "y": 192,
        "templateId": 10,
        "avatar": 7184
      },
      {
        "status": 0,
        "x": 467,
        "y": 436,
        "templateId": 47,
        "avatar": 4339
      }
    ]
  },
  {
    "id": 154,
    "name": "Hành tinh Bill",
    "planetId": 0,
    "tileId": 29,
    "bgId": 16,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Hành tinh Bill 2",
        "minX": 0,
        "minY": 288,
        "maxX": 24,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 95,
        "goX": 890,
        "goY": 312
      }
    ],
    "mobs": [],
    "npcs": [
      {
        "status": 0,
        "x": 810,
        "y": 312,
        "templateId": 44,
        "avatar": 4390
      },
      {
        "status": 0,
        "x": 645,
        "y": 312,
        "templateId": 55,
        "avatar": 5067
      },
      {
        "status": 0,
        "x": 725,
        "y": 312,
        "templateId": 56,
        "avatar": 5073
      },
      {
        "status": 1,
        "x": 209,
        "y": 312,
        "templateId": 76,
        "avatar": 5824
      }
    ]
  },
  {
    "id": 155,
    "name": "Hành tinh ngục tù",
    "planetId": 0,
    "tileId": 30,
    "bgId": 17,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Hành tinh ngục tù",
        "minX": 1416,
        "minY": 720,
        "maxX": 1440,
        "maxY": 744,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 166,
        "goX": 47,
        "goY": 480
      }
    ],
    "mobs": [
      {
        "templateId": 78,
        "level": 20,
        "x": 444,
        "y": 816
      },
      {
        "templateId": 78,
        "level": 20,
        "x": 444,
        "y": 816
      },
      {
        "templateId": 78,
        "level": 20,
        "x": 372,
        "y": 456
      },
      {
        "templateId": 78,
        "level": 20,
        "x": 684,
        "y": 864
      },
      {
        "templateId": 78,
        "level": 20,
        "x": 1308,
        "y": 744
      },
      {
        "templateId": 78,
        "level": 20,
        "x": 1116,
        "y": 744
      },
      {
        "templateId": 78,
        "level": 20,
        "x": 1068,
        "y": 432
      },
      {
        "templateId": 78,
        "level": 20,
        "x": 1308,
        "y": 408
      },
      {
        "templateId": 78,
        "level": 20,
        "x": 948,
        "y": 192
      },
      {
        "templateId": 78,
        "level": 20,
        "x": 804,
        "y": 216
      },
      {
        "templateId": 78,
        "level": 20,
        "x": 180,
        "y": 792
      }
    ],
    "npcs": [
      {
        "status": 0,
        "x": 127,
        "y": 792,
        "templateId": 44,
        "avatar": 4390
      }
    ]
  },
  {
    "id": 156,
    "name": "Tây thánh địa",
    "planetId": 2,
    "tileId": 19,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 1,
    "waypoints": [
      {
        "name": "Đông thánh Địa",
        "minX": 1405,
        "minY": 600,
        "maxX": 1429,
        "maxY": 624,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 157,
        "goX": 90,
        "goY": 312
      }
    ],
    "mobs": [
      {
        "templateId": 39,
        "level": 20,
        "x": 444,
        "y": 816
      },
      {
        "templateId": 39,
        "level": 20,
        "x": 564,
        "y": 360
      },
      {
        "templateId": 39,
        "level": 20,
        "x": 1284,
        "y": 168
      },
      {
        "templateId": 39,
        "level": 20,
        "x": 852,
        "y": 624
      },
      {
        "templateId": 39,
        "level": 20,
        "x": 372,
        "y": 504
      },
      {
        "templateId": 49,
        "level": 20,
        "x": 612,
        "y": 72
      },
      {
        "templateId": 49,
        "level": 20,
        "x": 948,
        "y": 120
      },
      {
        "templateId": 49,
        "level": 20,
        "x": 372,
        "y": 648
      },
      {
        "templateId": 49,
        "level": 20,
        "x": 180,
        "y": 336
      },
      {
        "templateId": 49,
        "level": 20,
        "x": 612,
        "y": 504
      },
      {
        "templateId": 39,
        "level": 20,
        "x": 1164,
        "y": 360
      },
      {
        "templateId": 39,
        "level": 20,
        "x": 804,
        "y": 816
      }
    ],
    "npcs": []
  },
  {
    "id": 157,
    "name": "Đông thánh Địa",
    "planetId": 2,
    "tileId": 19,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 1,
    "waypoints": [
      {
        "name": "Tây thánh địa",
        "minX": 12,
        "minY": 288,
        "maxX": 36,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 156,
        "goX": 1400,
        "goY": 624
      },
      {
        "name": "Bắc thánh địa",
        "minX": 936,
        "minY": 1344,
        "maxX": 960,
        "maxY": 1368,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 158,
        "goX": 76,
        "goY": 456
      }
    ],
    "mobs": [
      {
        "templateId": 40,
        "level": 21,
        "x": 372,
        "y": 768
      },
      {
        "templateId": 40,
        "level": 21,
        "x": 444,
        "y": 1272
      },
      {
        "templateId": 40,
        "level": 21,
        "x": 612,
        "y": 1008
      },
      {
        "templateId": 40,
        "level": 21,
        "x": 468,
        "y": 624
      },
      {
        "templateId": 40,
        "level": 21,
        "x": 732,
        "y": 312
      },
      {
        "templateId": 40,
        "level": 21,
        "x": 204,
        "y": 1128
      },
      {
        "templateId": 43,
        "level": 21,
        "x": 588,
        "y": 120
      },
      {
        "templateId": 43,
        "level": 21,
        "x": 780,
        "y": 528
      },
      {
        "templateId": 50,
        "level": 21,
        "x": 708,
        "y": 816
      },
      {
        "templateId": 50,
        "level": 21,
        "x": 756,
        "y": 1152
      }
    ],
    "npcs": []
  },
  {
    "id": 158,
    "name": "Bắc thánh địa",
    "planetId": 2,
    "tileId": 25,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 5,
    "waypoints": [
      {
        "name": "Đông thánh Địa",
        "minX": 12,
        "minY": 432,
        "maxX": 36,
        "maxY": 456,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 157,
        "goX": 877,
        "goY": 1368
      },
      {
        "name": "Nam thánh Địa",
        "minX": 1644,
        "minY": 408,
        "maxX": 1668,
        "maxY": 432,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 159,
        "goX": 100,
        "goY": 1464
      }
    ],
    "mobs": [
      {
        "templateId": 67,
        "level": 21,
        "x": 1476,
        "y": 600
      },
      {
        "templateId": 67,
        "level": 21,
        "x": 444,
        "y": 624
      },
      {
        "templateId": 67,
        "level": 21,
        "x": 804,
        "y": 288
      },
      {
        "templateId": 66,
        "level": 21,
        "x": 1212,
        "y": 600
      },
      {
        "templateId": 66,
        "level": 21,
        "x": 1164,
        "y": 408
      },
      {
        "templateId": 66,
        "level": 21,
        "x": 660,
        "y": 552
      },
      {
        "templateId": 66,
        "level": 21,
        "x": 924,
        "y": 624
      },
      {
        "templateId": 69,
        "level": 21,
        "x": 684,
        "y": 120
      },
      {
        "templateId": 69,
        "level": 21,
        "x": 348,
        "y": 192
      },
      {
        "templateId": 69,
        "level": 21,
        "x": 900,
        "y": 480
      },
      {
        "templateId": 69,
        "level": 21,
        "x": 1236,
        "y": 144
      }
    ],
    "npcs": []
  },
  {
    "id": 159,
    "name": "Nam thánh Địa",
    "planetId": 2,
    "tileId": 25,
    "bgId": 8,
    "typeMap": 0,
    "bgType": 5,
    "waypoints": [
      {
        "name": "Bắc thánh địa",
        "minX": 12,
        "minY": 1440,
        "maxX": 36,
        "maxY": 1464,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 158,
        "goX": 1621,
        "goY": 432
      }
    ],
    "mobs": [
      {
        "templateId": 68,
        "level": 22,
        "x": 228,
        "y": 528
      },
      {
        "templateId": 68,
        "level": 22,
        "x": 396,
        "y": 1056
      },
      {
        "templateId": 68,
        "level": 22,
        "x": 1020,
        "y": 1368
      },
      {
        "templateId": 68,
        "level": 22,
        "x": 708,
        "y": 1128
      },
      {
        "templateId": 68,
        "level": 22,
        "x": 300,
        "y": 696
      },
      {
        "templateId": 68,
        "level": 22,
        "x": 732,
        "y": 1536
      },
      {
        "templateId": 68,
        "level": 22,
        "x": 348,
        "y": 288
      },
      {
        "templateId": 68,
        "level": 22,
        "x": 684,
        "y": 288
      },
      {
        "templateId": 68,
        "level": 22,
        "x": 948,
        "y": 1560
      },
      {
        "templateId": 69,
        "level": 22,
        "x": 300,
        "y": 72
      },
      {
        "templateId": 69,
        "level": 22,
        "x": 948,
        "y": 528
      },
      {
        "templateId": 69,
        "level": 22,
        "x": 156,
        "y": 840
      },
      {
        "templateId": 69,
        "level": 22,
        "x": 1068,
        "y": 1128
      },
      {
        "templateId": 69,
        "level": 22,
        "x": 612,
        "y": 72
      }
    ],
    "npcs": []
  },
  {
    "id": 160,
    "name": "Khu hang động",
    "planetId": 0,
    "tileId": 31,
    "bgId": 18,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Bìa rừng nguyên thủy",
        "minX": 1405,
        "minY": 1560,
        "maxX": 1429,
        "maxY": 1584,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 161,
        "goX": 96,
        "goY": 312
      }
    ],
    "mobs": [
      {
        "templateId": 80,
        "level": 21,
        "x": 132,
        "y": 168
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 540,
        "y": 168
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 708,
        "y": 600
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1212,
        "y": 648
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 876,
        "y": 1080
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1308,
        "y": 144
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 348,
        "y": 168
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 756,
        "y": 168
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 372,
        "y": 1320
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 1164,
        "y": 1584
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 1308,
        "y": 1824
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 684,
        "y": 1824
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 492,
        "y": 576
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 156,
        "y": 888
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 996,
        "y": 1824
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1140,
        "y": 1704
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 348,
        "y": 576
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 1068,
        "y": 288
      }
    ],
    "npcs": [
      {
        "status": 0,
        "x": 325,
        "y": 1512,
        "templateId": 70,
        "avatar": 9075
      },
      {
        "status": 0,
        "x": 375,
        "y": 1512,
        "templateId": 71,
        "avatar": 9076
      }
    ]
  },
  {
    "id": 161,
    "name": "Bìa rừng nguyên thủy",
    "planetId": 0,
    "tileId": 31,
    "bgId": 18,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Khu hang động",
        "minX": 20,
        "minY": 288,
        "maxX": 44,
        "maxY": 312,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 160,
        "goX": 1370,
        "goY": 1584
      },
      {
        "name": "Rừng nguyên thủy",
        "minX": 1875,
        "minY": 312,
        "maxX": 1899,
        "maxY": 336,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 162,
        "goX": 55,
        "goY": 288
      }
    ],
    "mobs": [
      {
        "templateId": 80,
        "level": 21,
        "x": 108,
        "y": 528
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 852,
        "y": 792
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 564,
        "y": 144
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 1116,
        "y": 288
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 1500,
        "y": 96
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 900,
        "y": 144
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1476,
        "y": 336
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 1116,
        "y": 600
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1500,
        "y": 1032
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 900,
        "y": 1104
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 324,
        "y": 552
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 1740,
        "y": 960
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 1212,
        "y": 144
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1812,
        "y": 96
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 468,
        "y": 936
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1812,
        "y": 648
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 804,
        "y": 336
      }
    ],
    "npcs": [
      {
        "status": 0,
        "x": 1807,
        "y": 336,
        "templateId": 71,
        "avatar": 9076
      }
    ]
  },
  {
    "id": 162,
    "name": "Rừng nguyên thủy",
    "planetId": 2,
    "tileId": 31,
    "bgId": 18,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Bìa rừng nguyên thủy",
        "minX": 20,
        "minY": 264,
        "maxX": 44,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 161,
        "goX": 1860,
        "goY": 336
      },
      {
        "name": "Làng Plant nguyên thủy",
        "minX": 1885,
        "minY": 936,
        "maxX": 1909,
        "maxY": 960,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 163,
        "goX": 61,
        "goY": 816
      }
    ],
    "mobs": [
      {
        "templateId": 80,
        "level": 21,
        "x": 1308,
        "y": 144
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1140,
        "y": 384
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 876,
        "y": 744
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 276,
        "y": 528
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 636,
        "y": 744
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 492,
        "y": 96
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 492,
        "y": 456
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 396,
        "y": 792
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 468,
        "y": 1080
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 204,
        "y": 1032
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 132,
        "y": 1272
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 444,
        "y": 1272
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 804,
        "y": 1272
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1236,
        "y": 648
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1788,
        "y": 720
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1380,
        "y": 912
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1356,
        "y": 1152
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1044,
        "y": 1272
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1596,
        "y": 1152
      }
    ],
    "npcs": []
  },
  {
    "id": 163,
    "name": "Làng Plant nguyên thủy",
    "planetId": 2,
    "tileId": 31,
    "bgId": 18,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Rừng nguyên thủy",
        "minX": 20,
        "minY": 792,
        "maxX": 44,
        "maxY": 816,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 162,
        "goX": 1875,
        "goY": 960
      }
    ],
    "mobs": [
      {
        "templateId": 80,
        "level": 21,
        "x": 444,
        "y": 528
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 396,
        "y": 144
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 804,
        "y": 744
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 1188,
        "y": 744
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1788,
        "y": 168
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1692,
        "y": 456
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 1812,
        "y": 816
      },
      {
        "templateId": 81,
        "level": 21,
        "x": 588,
        "y": 744
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 1524,
        "y": 816
      },
      {
        "templateId": 80,
        "level": 21,
        "x": 420,
        "y": 816
      }
    ],
    "npcs": []
  },
  {
    "id": 164,
    "name": "Tranh ngọc Namếc",
    "planetId": 0,
    "tileId": 0,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 165,
    "name": "Map Boss",
    "planetId": 0,
    "tileId": 1,
    "bgId": 0,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [],
    "mobs": [],
    "npcs": []
  },
  {
    "id": 166,
    "name": "Hành tinh ngục tù",
    "planetId": 0,
    "tileId": 30,
    "bgId": 17,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Hành tinh ngục tù",
        "minX": 0,
        "minY": 456,
        "maxX": 24,
        "maxY": 480,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 155,
        "goX": 1381,
        "goY": 744
      }
    ],
    "mobs": [
      {
        "templateId": 87,
        "level": 21,
        "x": 804,
        "y": 72
      },
      {
        "templateId": 87,
        "level": 21,
        "x": 924,
        "y": 48
      },
      {
        "templateId": 87,
        "level": 21,
        "x": 1164,
        "y": 48
      },
      {
        "templateId": 87,
        "level": 21,
        "x": 324,
        "y": 432
      },
      {
        "templateId": 87,
        "level": 21,
        "x": 540,
        "y": 528
      },
      {
        "templateId": 87,
        "level": 21,
        "x": 756,
        "y": 480
      },
      {
        "templateId": 87,
        "level": 21,
        "x": 1044,
        "y": 528
      },
      {
        "templateId": 87,
        "level": 21,
        "x": 1380,
        "y": 504
      },
      {
        "templateId": 86,
        "level": 21,
        "x": 492,
        "y": 168
      },
      {
        "templateId": 86,
        "level": 21,
        "x": 660,
        "y": 120
      },
      {
        "templateId": 86,
        "level": 21,
        "x": 876,
        "y": 144
      },
      {
        "templateId": 86,
        "level": 21,
        "x": 1284,
        "y": 120
      },
      {
        "templateId": 86,
        "level": 21,
        "x": 228,
        "y": 528
      },
      {
        "templateId": 86,
        "level": 21,
        "x": 396,
        "y": 528
      },
      {
        "templateId": 86,
        "level": 21,
        "x": 684,
        "y": 600
      },
      {
        "templateId": 86,
        "level": 21,
        "x": 924,
        "y": 600
      },
      {
        "templateId": 86,
        "level": 21,
        "x": 1284,
        "y": 576
      },
      {
        "templateId": 86,
        "level": 21,
        "x": 1500,
        "y": 576
      }
    ],
    "npcs": [
      {
        "status": 0,
        "x": 848,
        "y": 600,
        "templateId": 77,
        "avatar": 11421
      }
    ]
  },
  {
    "id": 167,
    "name": "Địa ngục tầng 1",
    "planetId": 0,
    "tileId": 32,
    "bgId": 19,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Địa ngục tầng 2",
        "minX": 1700,
        "minY": 264,
        "maxX": 1724,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 168,
        "goX": 96,
        "goY": 288
      }
    ],
    "mobs": [
      {
        "templateId": 88,
        "level": 10,
        "x": 204,
        "y": 288
      },
      {
        "templateId": 88,
        "level": 10,
        "x": 516,
        "y": 384
      },
      {
        "templateId": 88,
        "level": 10,
        "x": 828,
        "y": 408
      },
      {
        "templateId": 88,
        "level": 10,
        "x": 1260,
        "y": 408
      },
      {
        "templateId": 89,
        "level": 10,
        "x": 348,
        "y": 288
      },
      {
        "templateId": 89,
        "level": 10,
        "x": 972,
        "y": 408
      },
      {
        "templateId": 89,
        "level": 10,
        "x": 1548,
        "y": 408
      },
      {
        "templateId": 89,
        "level": 10,
        "x": 1116,
        "y": 408
      }
    ],
    "npcs": []
  },
  {
    "id": 168,
    "name": "Địa ngục tầng 2",
    "planetId": 0,
    "tileId": 32,
    "bgId": 19,
    "typeMap": 0,
    "bgType": 0,
    "waypoints": [
      {
        "name": "Địa ngục tầng 1",
        "minX": 12,
        "minY": 264,
        "maxX": 36,
        "maxY": 288,
        "isEnter": false,
        "isOffline": false,
        "goMapId": 167,
        "goX": 1660,
        "goY": 288
      }
    ],
    "mobs": [
      {
        "templateId": 88,
        "level": 10,
        "x": 180,
        "y": 288
      },
      {
        "templateId": 88,
        "level": 10,
        "x": 516,
        "y": 384
      },
      {
        "templateId": 88,
        "level": 10,
        "x": 924,
        "y": 312
      },
      {
        "templateId": 88,
        "level": 10,
        "x": 1188,
        "y": 312
      },
      {
        "templateId": 89,
        "level": 10,
        "x": 348,
        "y": 288
      },
      {
        "templateId": 89,
        "level": 10,
        "x": 804,
        "y": 408
      },
      {
        "templateId": 89,
        "level": 10,
        "x": 1068,
        "y": 312
      },
      {
        "templateId": 89,
        "level": 10,
        "x": 1332,
        "y": 408
      },
      {
        "templateId": 89,
        "level": 10,
        "x": 1524,
        "y": 408
      }
    ],
    "npcs": [
      {
        "status": 0,
        "x": 1666,
        "y": 288,
        "templateId": 21,
        "avatar": 1410
      }
    ]
  }
];

export const TORI_MOBS = {
  "0": "Mộc nhân",
  "1": "Khủng long",
  "2": "Lợn lòi",
  "3": "Quỷ đất",
  "4": "Khủng long mẹ",
  "5": "Lợn lòi mẹ",
  "6": "Quỷ đất mẹ",
  "7": "Thằn lằn bay",
  "8": "Phi long",
  "9": "Quỷ bay",
  "10": "Thằn lằn mẹ",
  "11": "Phi long mẹ",
  "12": "Quỷ bay mẹ",
  "13": "Ốc mượn hồn",
  "14": "Ốc sên",
  "15": "Heo Xayda mẹ",
  "16": "Heo rừng",
  "17": "Heo da xanh",
  "18": "Heo Xayda",
  "19": "Heo rừng mẹ",
  "20": "Heo xanh mẹ",
  "21": "Alien",
  "22": "Bulon",
  "23": "Ukulele",
  "24": "Quỷ mập",
  "25": "Tambourine",
  "26": "Drum",
  "27": "Akkuman",
  "34": "Lính độc nhãn",
  "36": "Sói xám",
  "37": "Robot bay",
  "38": "Robot thép",
  "39": "Nappa",
  "40": "Soldier",
  "41": "Appule",
  "42": "Raspberry",
  "43": "Thằn lằn xanh",
  "47": "Quỷ già",
  "48": "Cá sấu",
  "54": "Khỉ lông đen",
  "55": "Khỉ giáp sắt",
  "56": "Khỉ lông đỏ",
  "57": "Khỉ lông vàng",
  "58": "Xên con cấp 1",
  "59": "Xên con cấp 2",
  "60": "Xên con cấp 3",
  "61": "Xên con cấp 4",
  "62": "Xên con cấp 5",
  "63": "Xên con cấp 6",
  "64": "Xên con cấp 7",
  "65": "Xên con cấp 8",
  "70": "Hirudegarn",
  "71": "Vua Bạch Tuộc",
  "72": "Rôbốt bảo vệ"
};
