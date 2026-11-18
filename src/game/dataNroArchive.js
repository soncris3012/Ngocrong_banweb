// Dữ liệu Gốc Trích Xuất 100% từ ElectroHeavenVN/DataNRO (TeaMobi + HSNR + BlueFake + ILoveNRO)
// Bao gồm: 24 Máy Chủ Đa Cụm, 187 Map Gốc TeaMobi, 27 Bí Kíp Chiêu Thức (Cấp 1..9), 97 Mẫu Quái & 84 NPC!

export const DATANRO_SERVERS = [
  {
    "id": 1,
    "code": "Server1",
    "publisher": "TeaMobi",
    "name": "Vũ trụ 1",
    "expRate": 1,
    "tag": "Chuẩn gốc"
  },
  {
    "id": 2,
    "code": "Server2",
    "publisher": "TeaMobi",
    "name": "Vũ trụ 2",
    "expRate": 1,
    "tag": "Chuẩn gốc"
  },
  {
    "id": 3,
    "code": "Server3",
    "publisher": "TeaMobi",
    "name": "Vũ trụ 3",
    "expRate": 1,
    "tag": "Chuẩn gốc"
  },
  {
    "id": 4,
    "code": "Server4",
    "publisher": "TeaMobi",
    "name": "Vũ trụ 4",
    "expRate": 1,
    "tag": "Chuẩn gốc"
  },
  {
    "id": 5,
    "code": "Server5",
    "publisher": "TeaMobi",
    "name": "Vũ trụ 5",
    "expRate": 1,
    "tag": "Chuẩn gốc"
  },
  {
    "id": 6,
    "code": "Server6",
    "publisher": "TeaMobi",
    "name": "Vũ trụ 6",
    "expRate": 1,
    "tag": "Chuẩn gốc"
  },
  {
    "id": 7,
    "code": "Server7",
    "publisher": "TeaMobi",
    "name": "Vũ trụ 7",
    "expRate": 1,
    "tag": "Chuẩn gốc"
  },
  {
    "id": "8-9-10",
    "code": "Server8910",
    "publisher": "TeaMobi",
    "name": "Vũ trụ 8-9-10",
    "expRate": 2,
    "tag": "Liên Vũ Trụ x2"
  },
  {
    "id": 11,
    "code": "Server11",
    "publisher": "TeaMobi",
    "name": "Vũ trụ 11",
    "expRate": 2,
    "tag": "TNSM x2"
  },
  {
    "id": 12,
    "code": "Server12",
    "publisher": "TeaMobi",
    "name": "Vũ trụ 12",
    "expRate": 2,
    "tag": "TNSM x2"
  },
  {
    "id": 13,
    "code": "Server13",
    "publisher": "TeaMobi",
    "name": "Vũ trụ 13",
    "expRate": 2,
    "tag": "TNSM x2"
  },
  {
    "id": 14,
    "code": "Server14",
    "publisher": "TeaMobi",
    "name": "Vũ trụ 14",
    "expRate": 2,
    "tag": "TNSM x2"
  },
  {
    "id": "Super1",
    "code": "Super1",
    "publisher": "TeaMobi",
    "name": "Siêu Cấp 1",
    "expRate": 3,
    "tag": "Super x3"
  },
  {
    "id": "Super2",
    "code": "Super2",
    "publisher": "TeaMobi",
    "name": "Siêu Cấp 2",
    "expRate": 3,
    "tag": "Super x3"
  },
  {
    "id": "Super3",
    "code": "Super3",
    "publisher": "TeaMobi",
    "name": "Siêu Cấp 3",
    "expRate": 3,
    "tag": "Super x3"
  },
  {
    "id": "Universe1",
    "code": "Universe1",
    "publisher": "TeaMobi",
    "name": "Universe 1 (World)",
    "expRate": 2,
    "tag": "Quốc Tế"
  },
  {
    "id": "Naga",
    "code": "Naga",
    "publisher": "TeaMobi",
    "name": "Naga (Indo)",
    "expRate": 2,
    "tag": "Đông Nam Á"
  },
  {
    "id": "HSNR1",
    "code": "HSNR-S1",
    "publisher": "HSNR",
    "name": "Hồi Sinh NR 1",
    "expRate": 5,
    "tag": "HSNR x5"
  },
  {
    "id": "HSNR2",
    "code": "HSNR-S2",
    "publisher": "HSNR",
    "name": "Hồi Sinh NR 2",
    "expRate": 5,
    "tag": "HSNR x5"
  },
  {
    "id": "HSNR3",
    "code": "HSNR-S3",
    "publisher": "HSNR",
    "name": "Hồi Sinh NR 3",
    "expRate": 5,
    "tag": "HSNR x5"
  },
  {
    "id": "HSNR4",
    "code": "HSNR-S4",
    "publisher": "HSNR",
    "name": "Hồi Sinh NR 4",
    "expRate": 5,
    "tag": "HSNR x5"
  },
  {
    "id": "Blue1",
    "code": "Blue1",
    "publisher": "BlueFake",
    "name": "Blue NRO 1",
    "expRate": 8,
    "tag": "Blue x8"
  },
  {
    "id": "ILoveNRO",
    "code": "ToiYeuNgocRong",
    "publisher": "ILoveNRO",
    "name": "Tôi Yêu NRO",
    "expRate": 6,
    "tag": "ILove x6"
  },
  {
    "id": "PHONGANHEM",
    "code": "PHONGANHEM",
    "publisher": "VIP",
    "name": "Phòng Anh Em",
    "expRate": 12,
    "tag": "VIP x12"
  },
  {
    "id": "HAIDANG1",
    "code": "HAIDANG1",
    "publisher": "Admin",
    "name": "HAIDANG1 (Test)",
    "expRate": 10,
    "tag": "Admin x10"
  }
];

export function getServerConfig(serverId) {
  return (
    DATANRO_SERVERS.find((s) => String(s.id) === String(serverId) || s.code === String(serverId)) ||
    DATANRO_SERVERS[0]
  );
}

export const DATANRO_SKILLS_RAW = {
  "traidat": [
    {
      "id": 0,
      "name": "Chiêu đấm Dragon",
      "maxPoint": 7,
      "manaUseType": 0,
      "type": 1,
      "icon": 539,
      "description": "Tấn công cận chiến",
      "damInfo": "Tăng sức đánh: #%",
      "levels": [
        {
          "point": 1,
          "powRequire": 1000,
          "price": 0,
          "coolDown": 500,
          "manaUse": 1,
          "damage": 100
        },
        {
          "point": 2,
          "powRequire": 10000,
          "price": 10,
          "coolDown": 500,
          "manaUse": 2,
          "damage": 110
        },
        {
          "point": 3,
          "powRequire": 22000,
          "price": 50,
          "coolDown": 500,
          "manaUse": 4,
          "damage": 120
        },
        {
          "point": 4,
          "powRequire": 66000,
          "price": 100,
          "coolDown": 500,
          "manaUse": 8,
          "damage": 130
        },
        {
          "point": 5,
          "powRequire": 200000,
          "price": 500,
          "coolDown": 500,
          "manaUse": 16,
          "damage": 140
        },
        {
          "point": 6,
          "powRequire": 600000,
          "price": 1000,
          "coolDown": 500,
          "manaUse": 32,
          "damage": 150
        },
        {
          "point": 7,
          "powRequire": 1800000,
          "price": 2000,
          "coolDown": 500,
          "manaUse": 70,
          "damage": 160
        }
      ]
    },
    {
      "id": 1,
      "name": "Chiêu Kamejoko",
      "maxPoint": 7,
      "manaUseType": 0,
      "type": 1,
      "icon": 540,
      "description": "Đánh xa nhờ năng lượng",
      "damInfo": "Tăng sức đánh: #%",
      "levels": [
        {
          "point": 1,
          "powRequire": 10000,
          "price": 500,
          "coolDown": 2000,
          "manaUse": 30,
          "damage": 150
        },
        {
          "point": 2,
          "powRequire": 20000,
          "price": 1000,
          "coolDown": 2500,
          "manaUse": 60,
          "damage": 200
        },
        {
          "point": 3,
          "powRequire": 60000,
          "price": 2000,
          "coolDown": 3000,
          "manaUse": 120,
          "damage": 250
        },
        {
          "point": 4,
          "powRequire": 180000,
          "price": 4000,
          "coolDown": 3500,
          "manaUse": 240,
          "damage": 300
        },
        {
          "point": 5,
          "powRequire": 540000,
          "price": 8000,
          "coolDown": 4000,
          "manaUse": 480,
          "damage": 350
        },
        {
          "point": 6,
          "powRequire": 1600000,
          "price": 9999,
          "coolDown": 4500,
          "manaUse": 960,
          "damage": 400
        },
        {
          "point": 7,
          "powRequire": 4800000,
          "price": 9999,
          "coolDown": 5000,
          "manaUse": 1280,
          "damage": 450
        }
      ]
    },
    {
      "id": 6,
      "name": "Thái Dương Hạ San",
      "maxPoint": 7,
      "manaUseType": 1,
      "type": 3,
      "icon": 717,
      "description": "Làm chói mắt đối phương",
      "damInfo": "Thời gian tác dụng: # mili giây",
      "levels": [
        {
          "point": 1,
          "powRequire": 60000,
          "price": 500,
          "coolDown": 60000,
          "manaUse": 45,
          "damage": 3000
        },
        {
          "point": 2,
          "powRequire": 120000,
          "price": 1000,
          "coolDown": 55000,
          "manaUse": 40,
          "damage": 4000
        },
        {
          "point": 3,
          "powRequire": 360000,
          "price": 2000,
          "coolDown": 50000,
          "manaUse": 35,
          "damage": 5000
        },
        {
          "point": 4,
          "powRequire": 1000000,
          "price": 4000,
          "coolDown": 45000,
          "manaUse": 30,
          "damage": 6000
        },
        {
          "point": 5,
          "powRequire": 3200000,
          "price": 8000,
          "coolDown": 40000,
          "manaUse": 25,
          "damage": 7000
        },
        {
          "point": 6,
          "powRequire": 10000000,
          "price": 9999,
          "coolDown": 35000,
          "manaUse": 20,
          "damage": 8000
        },
        {
          "point": 7,
          "powRequire": 30000000,
          "price": 9999,
          "coolDown": 30000,
          "manaUse": 15,
          "damage": 9000
        }
      ]
    },
    {
      "id": 9,
      "name": "Kaioken",
      "maxPoint": 7,
      "manaUseType": 0,
      "type": 1,
      "icon": 716,
      "description": "Tấn công cận chiến, mức sát thương lớn",
      "damInfo": "Tăng sức đánh: #%",
      "levels": [
        {
          "point": 2,
          "powRequire": 200000000,
          "price": 9999,
          "coolDown": 500,
          "manaUse": 13000,
          "damage": 170
        },
        {
          "point": 3,
          "powRequire": 250000000,
          "price": 9999,
          "coolDown": 500,
          "manaUse": 15000,
          "damage": 180
        },
        {
          "point": 4,
          "powRequire": 300000000,
          "price": 9999,
          "coolDown": 500,
          "manaUse": 18000,
          "damage": 190
        },
        {
          "point": 5,
          "powRequire": 350000000,
          "price": 9999,
          "coolDown": 500,
          "manaUse": 21000,
          "damage": 200
        },
        {
          "point": 6,
          "powRequire": 400000000,
          "price": 9999,
          "coolDown": 500,
          "manaUse": 24000,
          "damage": 210
        },
        {
          "point": 7,
          "powRequire": 450000000,
          "price": 9999,
          "coolDown": 500,
          "manaUse": 27000,
          "damage": 220
        },
        {
          "point": 1,
          "powRequire": 150000000,
          "price": 9999,
          "coolDown": 500,
          "manaUse": 9000,
          "damage": 160
        }
      ]
    },
    {
      "id": 10,
      "name": "Quả cầu kênh khi",
      "maxPoint": 7,
      "manaUseType": 1,
      "type": 1,
      "icon": 711,
      "description": "Quả cầu năng lượng có mức sát thương cực lớn",
      "damInfo": "Gây sát thương #%",
      "levels": [
        {
          "point": 1,
          "powRequire": 500000000,
          "price": 9999,
          "coolDown": 360000,
          "manaUse": 50,
          "damage": 500
        },
        {
          "point": 2,
          "powRequire": 600000000,
          "price": 9999,
          "coolDown": 350000,
          "manaUse": 55,
          "damage": 600
        },
        {
          "point": 3,
          "powRequire": 700000000,
          "price": 9999,
          "coolDown": 340000,
          "manaUse": 60,
          "damage": 700
        },
        {
          "point": 4,
          "powRequire": 800000000,
          "price": 9999,
          "coolDown": 330000,
          "manaUse": 65,
          "damage": 800
        },
        {
          "point": 5,
          "powRequire": 900000000,
          "price": 9999,
          "coolDown": 320000,
          "manaUse": 70,
          "damage": 900
        },
        {
          "point": 6,
          "powRequire": 1000000000,
          "price": 9999,
          "coolDown": 310000,
          "manaUse": 75,
          "damage": 1000
        },
        {
          "point": 7,
          "powRequire": 1100000000,
          "price": 9999,
          "coolDown": 300000,
          "manaUse": 80,
          "damage": 1100
        }
      ]
    },
    {
      "id": 20,
      "name": "Dịch chuyển tức thời",
      "maxPoint": 7,
      "manaUseType": 0,
      "type": 1,
      "icon": 3783,
      "description": "Dịch chuyển tức thời",
      "damInfo": "Dịch chuyển tức thời và gây choáng kẻ thù",
      "levels": [
        {
          "point": 1,
          "powRequire": 10000000,
          "price": 9999,
          "coolDown": 20000,
          "manaUse": 5000,
          "damage": 1000
        },
        {
          "point": 2,
          "powRequire": 25000000,
          "price": 9999,
          "coolDown": 19000,
          "manaUse": 7000,
          "damage": 1500
        },
        {
          "point": 3,
          "powRequire": 50000000,
          "price": 9999,
          "coolDown": 18000,
          "manaUse": 10000,
          "damage": 2000
        },
        {
          "point": 4,
          "powRequire": 125000000,
          "price": 9999,
          "coolDown": 17000,
          "manaUse": 15000,
          "damage": 2500
        },
        {
          "point": 5,
          "powRequire": 625000000,
          "price": 9999,
          "coolDown": 16000,
          "manaUse": 20000,
          "damage": 3000
        },
        {
          "point": 6,
          "powRequire": 3125000000,
          "price": 9999,
          "coolDown": 15000,
          "manaUse": 25000,
          "damage": 3500
        },
        {
          "point": 7,
          "powRequire": 15625000000,
          "price": 9999,
          "coolDown": 14000,
          "manaUse": 30000,
          "damage": 4000
        }
      ]
    },
    {
      "id": 22,
      "name": "Thôi miên",
      "maxPoint": 7,
      "manaUseType": 0,
      "type": 1,
      "icon": 3782,
      "description": "Thôi miên",
      "damInfo": "Ru ngủ kẻ thù # giây",
      "levels": [
        {
          "point": 1,
          "powRequire": 10000000,
          "price": 9999,
          "coolDown": 30000,
          "manaUse": 10000,
          "damage": 5
        },
        {
          "point": 2,
          "powRequire": 25000000,
          "price": 9999,
          "coolDown": 32000,
          "manaUse": 10000,
          "damage": 6
        },
        {
          "point": 3,
          "powRequire": 50000000,
          "price": 9999,
          "coolDown": 34000,
          "manaUse": 10000,
          "damage": 7
        },
        {
          "point": 4,
          "powRequire": 125000000,
          "price": 9999,
          "coolDown": 36000,
          "manaUse": 10000,
          "damage": 8
        },
        {
          "point": 5,
          "powRequire": 625000000,
          "price": 9999,
          "coolDown": 38000,
          "manaUse": 10000,
          "damage": 9
        },
        {
          "point": 6,
          "powRequire": 3125000000,
          "price": 9999,
          "coolDown": 40000,
          "manaUse": 10000,
          "damage": 10
        },
        {
          "point": 7,
          "powRequire": 15625000000,
          "price": 9999,
          "coolDown": 42000,
          "manaUse": 10000,
          "damage": 11
        }
      ]
    },
    {
      "id": 24,
      "name": "Super Kamejoko",
      "maxPoint": 9,
      "manaUseType": 1,
      "type": 4,
      "icon": 11162,
      "description": "Đánh xa nhờ năng lượng",
      "damInfo": "Tăng sức đánh: #%",
      "levels": [
        {
          "point": 1,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 170000,
          "manaUse": 80,
          "damage": 550
        },
        {
          "point": 2,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 160000,
          "manaUse": 75,
          "damage": 600
        },
        {
          "point": 3,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 150000,
          "manaUse": 70,
          "damage": 650
        },
        {
          "point": 4,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 140000,
          "manaUse": 65,
          "damage": 700
        },
        {
          "point": 5,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 130000,
          "manaUse": 60,
          "damage": 750
        },
        {
          "point": 6,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 120000,
          "manaUse": 55,
          "damage": 800
        },
        {
          "point": 7,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 110000,
          "manaUse": 50,
          "damage": 850
        },
        {
          "point": 8,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 100000,
          "manaUse": 45,
          "damage": 900
        },
        {
          "point": 9,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 90000,
          "manaUse": 40,
          "damage": 950
        },
        {
          "point": 10,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 80000,
          "manaUse": 35,
          "damage": 1000
        }
      ]
    },
    {
      "id": 19,
      "name": "Khiên năng lượng",
      "maxPoint": 7,
      "manaUseType": 1,
      "type": 3,
      "icon": 3784,
      "description": "Khiên năng lượng",
      "damInfo": "Vô hiệu các đòn tấn công",
      "levels": [
        {
          "point": 1,
          "powRequire": 10000000,
          "price": 9999,
          "coolDown": 75000,
          "manaUse": 51,
          "damage": 15
        },
        {
          "point": 2,
          "powRequire": 25000000,
          "price": 9999,
          "coolDown": 80000,
          "manaUse": 48,
          "damage": 20
        },
        {
          "point": 3,
          "powRequire": 50000000,
          "price": 9999,
          "coolDown": 85000,
          "manaUse": 45,
          "damage": 25
        },
        {
          "point": 4,
          "powRequire": 125000000,
          "price": 9999,
          "coolDown": 90000,
          "manaUse": 42,
          "damage": 30
        },
        {
          "point": 5,
          "powRequire": 625000000,
          "price": 9999,
          "coolDown": 95000,
          "manaUse": 39,
          "damage": 35
        },
        {
          "point": 6,
          "powRequire": 3125000000,
          "price": 9999,
          "coolDown": 100000,
          "manaUse": 36,
          "damage": 40
        },
        {
          "point": 7,
          "powRequire": 15625000000,
          "price": 9999,
          "coolDown": 105000,
          "manaUse": 33,
          "damage": 45
        }
      ]
    }
  ],
  "namek": [
    {
      "id": 2,
      "name": "Chiêu đấm Demon",
      "maxPoint": 7,
      "manaUseType": 0,
      "type": 1,
      "icon": 539,
      "description": "Tấn công cận chiến",
      "damInfo": "Tăng sức đánh: #%",
      "levels": [
        {
          "point": 1,
          "powRequire": 1000,
          "price": 0,
          "coolDown": 400,
          "manaUse": 1,
          "damage": 95
        },
        {
          "point": 2,
          "powRequire": 10000,
          "price": 10,
          "coolDown": 400,
          "manaUse": 2,
          "damage": 105
        },
        {
          "point": 3,
          "powRequire": 22000,
          "price": 50,
          "coolDown": 400,
          "manaUse": 4,
          "damage": 115
        },
        {
          "point": 4,
          "powRequire": 66000,
          "price": 100,
          "coolDown": 400,
          "manaUse": 8,
          "damage": 125
        },
        {
          "point": 5,
          "powRequire": 200000,
          "price": 1000,
          "coolDown": 400,
          "manaUse": 16,
          "damage": 135
        },
        {
          "point": 6,
          "powRequire": 600000,
          "price": 2000,
          "coolDown": 400,
          "manaUse": 32,
          "damage": 145
        },
        {
          "point": 7,
          "powRequire": 1800000,
          "price": 4000,
          "coolDown": 400,
          "manaUse": 70,
          "damage": 155
        }
      ]
    },
    {
      "id": 3,
      "name": "Chiêu Masenko",
      "maxPoint": 7,
      "manaUseType": 0,
      "type": 1,
      "icon": 540,
      "description": "Đánh xa nhờ năng lượng",
      "damInfo": "Tăng sức đánh: #%",
      "levels": [
        {
          "point": 1,
          "powRequire": 10000,
          "price": 500,
          "coolDown": 800,
          "manaUse": 8,
          "damage": 100
        },
        {
          "point": 2,
          "powRequire": 20000,
          "price": 1000,
          "coolDown": 790,
          "manaUse": 16,
          "damage": 110
        },
        {
          "point": 3,
          "powRequire": 60000,
          "price": 2000,
          "coolDown": 780,
          "manaUse": 32,
          "damage": 120
        },
        {
          "point": 4,
          "powRequire": 180000,
          "price": 4000,
          "coolDown": 760,
          "manaUse": 64,
          "damage": 130
        },
        {
          "point": 5,
          "powRequire": 540000,
          "price": 8000,
          "coolDown": 740,
          "manaUse": 128,
          "damage": 140
        },
        {
          "point": 6,
          "powRequire": 1600000,
          "price": 9999,
          "coolDown": 720,
          "manaUse": 256,
          "damage": 150
        },
        {
          "point": 7,
          "powRequire": 4800000,
          "price": 9999,
          "coolDown": 700,
          "manaUse": 512,
          "damage": 160
        }
      ]
    },
    {
      "id": 7,
      "name": "Trị thương",
      "maxPoint": 7,
      "manaUseType": 1,
      "type": 2,
      "icon": 724,
      "description": "Phục hồi HP KI cho đồng đội",
      "damInfo": "Phục hồi #% HP và KI cho đồng đội",
      "levels": [
        {
          "point": 1,
          "powRequire": 60000,
          "price": 500,
          "coolDown": 30000,
          "manaUse": 40,
          "damage": 50
        },
        {
          "point": 2,
          "powRequire": 120000,
          "price": 1000,
          "coolDown": 32000,
          "manaUse": 35,
          "damage": 55
        },
        {
          "point": 3,
          "powRequire": 360000,
          "price": 2000,
          "coolDown": 34000,
          "manaUse": 30,
          "damage": 60
        },
        {
          "point": 4,
          "powRequire": 1000000,
          "price": 4000,
          "coolDown": 38000,
          "manaUse": 25,
          "damage": 65
        },
        {
          "point": 5,
          "powRequire": 3200000,
          "price": 8000,
          "coolDown": 40000,
          "manaUse": 20,
          "damage": 70
        },
        {
          "point": 6,
          "powRequire": 10000000,
          "price": 9999,
          "coolDown": 42000,
          "manaUse": 15,
          "damage": 75
        },
        {
          "point": 7,
          "powRequire": 30000000,
          "price": 9999,
          "coolDown": 44000,
          "manaUse": 10,
          "damage": 80
        }
      ]
    },
    {
      "id": 11,
      "name": "Makankosappo",
      "maxPoint": 7,
      "manaUseType": 2,
      "type": 1,
      "icon": 723,
      "description": "Chưởng tia lazer xoắn ốc",
      "damInfo": "Gây sát thương #%",
      "levels": [
        {
          "point": 1,
          "powRequire": 150000000,
          "price": 9999,
          "coolDown": 360000,
          "manaUse": 0,
          "damage": 70
        },
        {
          "point": 2,
          "powRequire": 200000000,
          "price": 9999,
          "coolDown": 350000,
          "manaUse": 0,
          "damage": 80
        },
        {
          "point": 3,
          "powRequire": 250000000,
          "price": 9999,
          "coolDown": 340000,
          "manaUse": 0,
          "damage": 90
        },
        {
          "point": 4,
          "powRequire": 300000000,
          "price": 9999,
          "coolDown": 330000,
          "manaUse": 0,
          "damage": 100
        },
        {
          "point": 5,
          "powRequire": 350000000,
          "price": 9999,
          "coolDown": 320000,
          "manaUse": 0,
          "damage": 110
        },
        {
          "point": 6,
          "powRequire": 400000000,
          "price": 9999,
          "coolDown": 310000,
          "manaUse": 0,
          "damage": 120
        },
        {
          "point": 7,
          "powRequire": 450000000,
          "price": 9999,
          "coolDown": 300000,
          "manaUse": 0,
          "damage": 130
        }
      ]
    },
    {
      "id": 12,
      "name": "Đẻ trứng",
      "maxPoint": 7,
      "manaUseType": 1,
      "type": 3,
      "icon": 722,
      "description": "Đẻ trứng tạo quái vật",
      "damInfo": "Tạo quái đi theo hỗ trợ",
      "levels": [
        {
          "point": 1,
          "powRequire": 500000000,
          "price": 9999,
          "coolDown": 360000,
          "manaUse": 20,
          "damage": 50
        },
        {
          "point": 2,
          "powRequire": 600000000,
          "price": 9999,
          "coolDown": 390000,
          "manaUse": 30,
          "damage": 55
        },
        {
          "point": 3,
          "powRequire": 700000000,
          "price": 9999,
          "coolDown": 420000,
          "manaUse": 40,
          "damage": 60
        },
        {
          "point": 4,
          "powRequire": 800000000,
          "price": 9999,
          "coolDown": 450000,
          "manaUse": 50,
          "damage": 65
        },
        {
          "point": 5,
          "powRequire": 900000000,
          "price": 9999,
          "coolDown": 480000,
          "manaUse": 60,
          "damage": 70
        },
        {
          "point": 6,
          "powRequire": 1000000000,
          "price": 9999,
          "coolDown": 510000,
          "manaUse": 70,
          "damage": 75
        },
        {
          "point": 7,
          "powRequire": 1100000000,
          "price": 9999,
          "coolDown": 540000,
          "manaUse": 80,
          "damage": 80
        }
      ]
    },
    {
      "id": 17,
      "name": "Liên hoàn",
      "maxPoint": 7,
      "manaUseType": 0,
      "type": 1,
      "icon": 3778,
      "description": "Liên hoàn",
      "damInfo": "Tăng sức đánh: #%",
      "levels": [
        {
          "point": 1,
          "powRequire": 10000000,
          "price": 9999,
          "coolDown": 350,
          "manaUse": 100,
          "damage": 160
        },
        {
          "point": 2,
          "powRequire": 25000000,
          "price": 9999,
          "coolDown": 345,
          "manaUse": 200,
          "damage": 165
        },
        {
          "point": 3,
          "powRequire": 50000000,
          "price": 9999,
          "coolDown": 340,
          "manaUse": 300,
          "damage": 170
        },
        {
          "point": 4,
          "powRequire": 125000000,
          "price": 9999,
          "coolDown": 335,
          "manaUse": 400,
          "damage": 175
        },
        {
          "point": 5,
          "powRequire": 625000000,
          "price": 9999,
          "coolDown": 330,
          "manaUse": 500,
          "damage": 180
        },
        {
          "point": 6,
          "powRequire": 3125000000,
          "price": 9999,
          "coolDown": 335,
          "manaUse": 600,
          "damage": 185
        },
        {
          "point": 7,
          "powRequire": 15625000000,
          "price": 9999,
          "coolDown": 330,
          "manaUse": 700,
          "damage": 190
        }
      ]
    },
    {
      "id": 18,
      "name": "Biến Sôcôla",
      "maxPoint": 7,
      "manaUseType": 1,
      "type": 1,
      "icon": 3780,
      "description": "Biến socola",
      "damInfo": "Biến quái thành Sôcôla",
      "levels": [
        {
          "point": 1,
          "powRequire": 10000000,
          "price": 9999,
          "coolDown": 30000,
          "manaUse": 22,
          "damage": 15
        },
        {
          "point": 2,
          "powRequire": 25000000,
          "price": 9999,
          "coolDown": 29000,
          "manaUse": 20,
          "damage": 17
        },
        {
          "point": 3,
          "powRequire": 50000000,
          "price": 9999,
          "coolDown": 28000,
          "manaUse": 18,
          "damage": 19
        },
        {
          "point": 4,
          "powRequire": 125000000,
          "price": 9999,
          "coolDown": 27000,
          "manaUse": 16,
          "damage": 21
        },
        {
          "point": 5,
          "powRequire": 625000000,
          "price": 9999,
          "coolDown": 26000,
          "manaUse": 14,
          "damage": 23
        },
        {
          "point": 6,
          "powRequire": 3125000000,
          "price": 9999,
          "coolDown": 25000,
          "manaUse": 12,
          "damage": 25
        },
        {
          "point": 7,
          "powRequire": 15625000000,
          "price": 9999,
          "coolDown": 24000,
          "manaUse": 10,
          "damage": 27
        }
      ]
    },
    {
      "id": 26,
      "name": "Ma phong ba",
      "maxPoint": 9,
      "manaUseType": 1,
      "type": 4,
      "icon": 11194,
      "description": "Nhốt đối thủ vào bình chứa",
      "damInfo": "Gây sát thương chuẩn mỗi giây bằng #% max HP bản thân",
      "levels": [
        {
          "point": 1,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 170000,
          "manaUse": 80,
          "damage": 1
        },
        {
          "point": 2,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 160000,
          "manaUse": 75,
          "damage": 2
        },
        {
          "point": 3,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 150000,
          "manaUse": 70,
          "damage": 3
        },
        {
          "point": 4,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 140000,
          "manaUse": 65,
          "damage": 4
        },
        {
          "point": 5,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 130000,
          "manaUse": 60,
          "damage": 5
        },
        {
          "point": 6,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 120000,
          "manaUse": 55,
          "damage": 6
        },
        {
          "point": 7,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 110000,
          "manaUse": 50,
          "damage": 7
        },
        {
          "point": 8,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 100000,
          "manaUse": 45,
          "damage": 8
        },
        {
          "point": 9,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 90000,
          "manaUse": 40,
          "damage": 9
        },
        {
          "point": 10,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 80000,
          "manaUse": 35,
          "damage": 10
        }
      ]
    },
    {
      "id": 19,
      "name": "Khiên năng lượng",
      "maxPoint": 7,
      "manaUseType": 1,
      "type": 3,
      "icon": 3784,
      "description": "Khiên năng lượng",
      "damInfo": "Vô hiệu các đòn tấn công",
      "levels": [
        {
          "point": 1,
          "powRequire": 10000000,
          "price": 9999,
          "coolDown": 75000,
          "manaUse": 51,
          "damage": 15
        },
        {
          "point": 2,
          "powRequire": 25000000,
          "price": 9999,
          "coolDown": 80000,
          "manaUse": 48,
          "damage": 20
        },
        {
          "point": 3,
          "powRequire": 50000000,
          "price": 9999,
          "coolDown": 85000,
          "manaUse": 45,
          "damage": 25
        },
        {
          "point": 4,
          "powRequire": 125000000,
          "price": 9999,
          "coolDown": 90000,
          "manaUse": 42,
          "damage": 30
        },
        {
          "point": 5,
          "powRequire": 625000000,
          "price": 9999,
          "coolDown": 95000,
          "manaUse": 39,
          "damage": 35
        },
        {
          "point": 6,
          "powRequire": 3125000000,
          "price": 9999,
          "coolDown": 100000,
          "manaUse": 36,
          "damage": 40
        },
        {
          "point": 7,
          "powRequire": 15625000000,
          "price": 9999,
          "coolDown": 105000,
          "manaUse": 33,
          "damage": 45
        }
      ]
    }
  ],
  "xayda": [
    {
      "id": 4,
      "name": "Chiêu đấm Galick",
      "maxPoint": 7,
      "manaUseType": 0,
      "type": 1,
      "icon": 539,
      "description": "Tấn công cận chiến",
      "damInfo": "Tăng sức đánh: #%",
      "levels": [
        {
          "point": 1,
          "powRequire": 1000,
          "price": 0,
          "coolDown": 500,
          "manaUse": 1,
          "damage": 110
        },
        {
          "point": 2,
          "powRequire": 10000,
          "price": 10,
          "coolDown": 500,
          "manaUse": 2,
          "damage": 120
        },
        {
          "point": 3,
          "powRequire": 22000,
          "price": 50,
          "coolDown": 500,
          "manaUse": 4,
          "damage": 130
        },
        {
          "point": 4,
          "powRequire": 66000,
          "price": 100,
          "coolDown": 500,
          "manaUse": 8,
          "damage": 140
        },
        {
          "point": 5,
          "powRequire": 200000,
          "price": 1000,
          "coolDown": 500,
          "manaUse": 16,
          "damage": 150
        },
        {
          "point": 6,
          "powRequire": 600000,
          "price": 2000,
          "coolDown": 500,
          "manaUse": 32,
          "damage": 160
        },
        {
          "point": 7,
          "powRequire": 1800000,
          "price": 4000,
          "coolDown": 500,
          "manaUse": 70,
          "damage": 170
        }
      ]
    },
    {
      "id": 5,
      "name": "Chiêu Antomic",
      "maxPoint": 7,
      "manaUseType": 0,
      "type": 1,
      "icon": 540,
      "description": "Đánh xa nhờ năng lượng",
      "damInfo": "Tăng sức đánh: #%",
      "levels": [
        {
          "point": 1,
          "powRequire": 10000,
          "price": 500,
          "coolDown": 1000,
          "manaUse": 18,
          "damage": 110
        },
        {
          "point": 2,
          "powRequire": 20000,
          "price": 1000,
          "coolDown": 1200,
          "manaUse": 34,
          "damage": 140
        },
        {
          "point": 3,
          "powRequire": 60000,
          "price": 2000,
          "coolDown": 1400,
          "manaUse": 68,
          "damage": 170
        },
        {
          "point": 4,
          "powRequire": 180000,
          "price": 4000,
          "coolDown": 1600,
          "manaUse": 136,
          "damage": 200
        },
        {
          "point": 5,
          "powRequire": 540000,
          "price": 8000,
          "coolDown": 1800,
          "manaUse": 258,
          "damage": 230
        },
        {
          "point": 6,
          "powRequire": 1600000,
          "price": 9999,
          "coolDown": 2000,
          "manaUse": 514,
          "damage": 260
        },
        {
          "point": 7,
          "powRequire": 4800000,
          "price": 9999,
          "coolDown": 2200,
          "manaUse": 1026,
          "damage": 290
        }
      ]
    },
    {
      "id": 8,
      "name": "Tái tạo năng lượng",
      "maxPoint": 7,
      "manaUseType": 1,
      "type": 3,
      "icon": 720,
      "description": "Tái tạo lại HP và MP đang có",
      "damInfo": "Tự tái tạo HP MP #%/s",
      "levels": [
        {
          "point": 1,
          "powRequire": 60000,
          "price": 500,
          "coolDown": 55000,
          "manaUse": 0,
          "damage": 4
        },
        {
          "point": 2,
          "powRequire": 120000,
          "price": 1000,
          "coolDown": 50000,
          "manaUse": 0,
          "damage": 5
        },
        {
          "point": 3,
          "powRequire": 360000,
          "price": 2000,
          "coolDown": 45000,
          "manaUse": 0,
          "damage": 6
        },
        {
          "point": 4,
          "powRequire": 1000000,
          "price": 4000,
          "coolDown": 40000,
          "manaUse": 0,
          "damage": 7
        },
        {
          "point": 5,
          "powRequire": 3200000,
          "price": 8000,
          "coolDown": 35000,
          "manaUse": 0,
          "damage": 8
        },
        {
          "point": 6,
          "powRequire": 10000000,
          "price": 9999,
          "coolDown": 30000,
          "manaUse": 0,
          "damage": 9
        },
        {
          "point": 7,
          "powRequire": 30000000,
          "price": 9999,
          "coolDown": 25000,
          "manaUse": 0,
          "damage": 10
        }
      ]
    },
    {
      "id": 13,
      "name": "Biến hình",
      "maxPoint": 7,
      "manaUseType": 1,
      "type": 3,
      "icon": 718,
      "description": "Biến hình thành khỉ",
      "damInfo": "Tăng sức đánh, HP và tốc độ",
      "levels": [
        {
          "point": 1,
          "powRequire": 250000000,
          "price": 9999,
          "coolDown": 300000,
          "manaUse": 10,
          "damage": 100
        },
        {
          "point": 2,
          "powRequire": 350000000,
          "price": 9999,
          "coolDown": 310000,
          "manaUse": 10,
          "damage": 100
        },
        {
          "point": 3,
          "powRequire": 450000000,
          "price": 9999,
          "coolDown": 320000,
          "manaUse": 10,
          "damage": 100
        },
        {
          "point": 4,
          "powRequire": 550000000,
          "price": 9999,
          "coolDown": 330000,
          "manaUse": 10,
          "damage": 100
        },
        {
          "point": 5,
          "powRequire": 650000000,
          "price": 9999,
          "coolDown": 340000,
          "manaUse": 10,
          "damage": 100
        },
        {
          "point": 6,
          "powRequire": 750000000,
          "price": 9999,
          "coolDown": 350000,
          "manaUse": 10,
          "damage": 100
        },
        {
          "point": 7,
          "powRequire": 850000000,
          "price": 9999,
          "coolDown": 360000,
          "manaUse": 10,
          "damage": 100
        }
      ]
    },
    {
      "id": 14,
      "name": "Tự phát nổ",
      "maxPoint": 7,
      "manaUseType": 1,
      "type": 3,
      "icon": 2248,
      "description": "Tự phát nổ",
      "damInfo": "Hy sinh, gây sát thương lớn cho kẻ thù",
      "levels": [
        {
          "point": 1,
          "powRequire": 250000000,
          "price": 9999,
          "coolDown": 120000,
          "manaUse": 50,
          "damage": 100
        },
        {
          "point": 2,
          "powRequire": 300000000,
          "price": 9999,
          "coolDown": 120000,
          "manaUse": 50,
          "damage": 105
        },
        {
          "point": 3,
          "powRequire": 350000000,
          "price": 9999,
          "coolDown": 120000,
          "manaUse": 50,
          "damage": 110
        },
        {
          "point": 4,
          "powRequire": 400000000,
          "price": 9999,
          "coolDown": 120000,
          "manaUse": 50,
          "damage": 115
        },
        {
          "point": 5,
          "powRequire": 450000000,
          "price": 9999,
          "coolDown": 120000,
          "manaUse": 50,
          "damage": 120
        },
        {
          "point": 6,
          "powRequire": 500000000,
          "price": 9999,
          "coolDown": 120000,
          "manaUse": 50,
          "damage": 125
        },
        {
          "point": 7,
          "powRequire": 550000000,
          "price": 9999,
          "coolDown": 120000,
          "manaUse": 50,
          "damage": 130
        }
      ]
    },
    {
      "id": 21,
      "name": "Huýt sáo",
      "maxPoint": 7,
      "manaUseType": 0,
      "type": 3,
      "icon": 3781,
      "description": "Huýt sáo",
      "damInfo": "Tăng tạm thời +#%HP cho mọi người xung quanh và +1 đòn chí mạng",
      "levels": [
        {
          "point": 1,
          "powRequire": 10000000,
          "price": 9999,
          "coolDown": 210000,
          "manaUse": 50,
          "damage": 40
        },
        {
          "point": 2,
          "powRequire": 25000000,
          "price": 9999,
          "coolDown": 205000,
          "manaUse": 45,
          "damage": 50
        },
        {
          "point": 3,
          "powRequire": 50000000,
          "price": 9999,
          "coolDown": 200000,
          "manaUse": 40,
          "damage": 60
        },
        {
          "point": 4,
          "powRequire": 125000000,
          "price": 9999,
          "coolDown": 195000,
          "manaUse": 35,
          "damage": 70
        },
        {
          "point": 5,
          "powRequire": 625000000,
          "price": 9999,
          "coolDown": 190000,
          "manaUse": 30,
          "damage": 80
        },
        {
          "point": 6,
          "powRequire": 3125000000,
          "price": 9999,
          "coolDown": 185000,
          "manaUse": 25,
          "damage": 90
        },
        {
          "point": 7,
          "powRequire": 15625000000,
          "price": 9999,
          "coolDown": 180000,
          "manaUse": 20,
          "damage": 100
        }
      ]
    },
    {
      "id": 23,
      "name": "Trói",
      "maxPoint": 7,
      "manaUseType": 0,
      "type": 1,
      "icon": 3779,
      "description": "Trói",
      "damInfo": "Trói kẻ thù",
      "levels": [
        {
          "point": 1,
          "powRequire": 10000000,
          "price": 9999,
          "coolDown": 15000,
          "manaUse": 5000,
          "damage": 5
        },
        {
          "point": 2,
          "powRequire": 25000000,
          "price": 9999,
          "coolDown": 20000,
          "manaUse": 10000,
          "damage": 10
        },
        {
          "point": 3,
          "powRequire": 50000000,
          "price": 9999,
          "coolDown": 25000,
          "manaUse": 15000,
          "damage": 15
        },
        {
          "point": 4,
          "powRequire": 125000000,
          "price": 9999,
          "coolDown": 30000,
          "manaUse": 20000,
          "damage": 20
        },
        {
          "point": 5,
          "powRequire": 625000000,
          "price": 9999,
          "coolDown": 35000,
          "manaUse": 25000,
          "damage": 25
        },
        {
          "point": 6,
          "powRequire": 3125000000,
          "price": 9999,
          "coolDown": 40000,
          "manaUse": 30000,
          "damage": 30
        },
        {
          "point": 7,
          "powRequire": 15625000000,
          "price": 9999,
          "coolDown": 45000,
          "manaUse": 32000,
          "damage": 35
        }
      ]
    },
    {
      "id": 25,
      "name": "Cađíc liên hoàn chưởng",
      "maxPoint": 9,
      "manaUseType": 1,
      "type": 4,
      "icon": 11193,
      "description": "Đánh xa nhờ năng lượng",
      "damInfo": "Tăng sức đánh: #%",
      "levels": [
        {
          "point": 1,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 170000,
          "manaUse": 80,
          "damage": 550
        },
        {
          "point": 2,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 160000,
          "manaUse": 75,
          "damage": 600
        },
        {
          "point": 3,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 150000,
          "manaUse": 70,
          "damage": 650
        },
        {
          "point": 4,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 140000,
          "manaUse": 65,
          "damage": 700
        },
        {
          "point": 5,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 130000,
          "manaUse": 60,
          "damage": 750
        },
        {
          "point": 6,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 120000,
          "manaUse": 55,
          "damage": 800
        },
        {
          "point": 7,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 110000,
          "manaUse": 50,
          "damage": 850
        },
        {
          "point": 8,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 100000,
          "manaUse": 45,
          "damage": 900
        },
        {
          "point": 9,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 90000,
          "manaUse": 40,
          "damage": 950
        },
        {
          "point": 10,
          "powRequire": 60000000000,
          "price": 9999,
          "coolDown": 80000,
          "manaUse": 35,
          "damage": 1000
        }
      ]
    },
    {
      "id": 19,
      "name": "Khiên năng lượng",
      "maxPoint": 7,
      "manaUseType": 1,
      "type": 3,
      "icon": 3784,
      "description": "Khiên năng lượng",
      "damInfo": "Vô hiệu các đòn tấn công",
      "levels": [
        {
          "point": 1,
          "powRequire": 10000000,
          "price": 9999,
          "coolDown": 75000,
          "manaUse": 51,
          "damage": 15
        },
        {
          "point": 2,
          "powRequire": 25000000,
          "price": 9999,
          "coolDown": 80000,
          "manaUse": 48,
          "damage": 20
        },
        {
          "point": 3,
          "powRequire": 50000000,
          "price": 9999,
          "coolDown": 85000,
          "manaUse": 45,
          "damage": 25
        },
        {
          "point": 4,
          "powRequire": 125000000,
          "price": 9999,
          "coolDown": 90000,
          "manaUse": 42,
          "damage": 30
        },
        {
          "point": 5,
          "powRequire": 625000000,
          "price": 9999,
          "coolDown": 95000,
          "manaUse": 39,
          "damage": 35
        },
        {
          "point": 6,
          "powRequire": 3125000000,
          "price": 9999,
          "coolDown": 100000,
          "manaUse": 36,
          "damage": 40
        },
        {
          "point": 7,
          "powRequire": 15625000000,
          "price": 9999,
          "coolDown": 105000,
          "manaUse": 33,
          "damage": 45
        }
      ]
    }
  ]
};

export const DATANRO_MAPS_CATALOG = [{"id": 0, "name": "Làng Aru"}, {"id": 1, "name": "Đồi hoa cúc"}, {"id": 2, "name": "Thung lũng tre"}, {"id": 3, "name": "Rừng nấm"}, {"id": 4, "name": "Rừng xương"}, {"id": 5, "name": "Đảo Kamê"}, {"id": 6, "name": "Đông Karin"}, {"id": 7, "name": "Làng Mori"}, {"id": 8, "name": "Đồi nấm tím"}, {"id": 9, "name": "Thị trấn Moori"}, {"id": 10, "name": "Thung lũng Namếc"}, {"id": 11, "name": "Thung lũng Maima"}, {"id": 12, "name": "Vực maima"}, {"id": 13, "name": "Đảo Guru"}, {"id": 14, "name": "Làng Kakarot"}, {"id": 15, "name": "Đồi hoang"}, {"id": 16, "name": "Làng Plant"}, {"id": 17, "name": "Rừng nguyên sinh"}, {"id": 18, "name": "Rừng thông Xayda"}, {"id": 19, "name": "Thành phố Vegeta"}, {"id": 20, "name": "Vách núi đen"}, {"id": 21, "name": "Nhà Gôhan"}, {"id": 22, "name": "Nhà Moori"}, {"id": 23, "name": "Nhà Broly"}, {"id": 24, "name": "Trạm tàu vũ trụ"}, {"id": 25, "name": "Trạm tàu vũ trụ"}, {"id": 26, "name": "Trạm tàu vũ trụ"}, {"id": 27, "name": "Rừng Bamboo"}, {"id": 28, "name": "Rừng dương xỉ"}, {"id": 29, "name": "Nam Kamê"}, {"id": 30, "name": "Đảo Bulông"}, {"id": 31, "name": "Núi hoa vàng"}, {"id": 32, "name": "Núi hoa tím"}, {"id": 33, "name": "Nam Guru"}, {"id": 34, "name": "Đông Nam Guru"}, {"id": 35, "name": "Rừng cọ"}, {"id": 36, "name": "Rừng đá"}, {"id": 37, "name": "Thung lũng đen"}, {"id": 38, "name": "Bờ vực đen"}, {"id": 39, "name": "Vách núi Aru"}, {"id": 40, "name": "Vách núi Moori"}, {"id": 41, "name": "Vực Plant"}, {"id": 42, "name": "Vách núi Aru"}, {"id": 43, "name": "Vách núi Moori"}, {"id": 44, "name": "Vách núi Kakarot"}, {"id": 45, "name": "Thần điện"}, {"id": 46, "name": "Tháp Karin"}, {"id": 47, "name": "Rừng Karin"}, {"id": 48, "name": "Hành tinh Kaio"}, {"id": 49, "name": "Phòng tập thời gian"}, {"id": 50, "name": "Thánh địa Kaio"}, {"id": 51, "name": "Đấu trường"}, {"id": 52, "name": "Đại hội võ thuật"}, {"id": 53, "name": "Tường thành 1"}, {"id": 54, "name": "Tầng 3"}, {"id": 55, "name": "Tầng 1"}, {"id": 56, "name": "Tầng 2"}, {"id": 57, "name": "Tầng 4"}, {"id": 58, "name": "Tường thành 2"}, {"id": 59, "name": "Tường thành 3"}, {"id": 60, "name": "Trại độc nhãn 1"}, {"id": 61, "name": "Trại độc nhãn 2"}, {"id": 62, "name": "Trại độc nhãn 3"}, {"id": 63, "name": "Trại lính Fide"}, {"id": 64, "name": "Núi dây leo"}, {"id": 65, "name": "Núi cây quỷ"}, {"id": 66, "name": "Trại quỷ già"}, {"id": 67, "name": "Vực chết"}, {"id": 68, "name": "Thung lũng Nappa"}, {"id": 69, "name": "Vực cấm"}, {"id": 70, "name": "Núi Appule"}, {"id": 71, "name": "Căn cứ Raspberry"}, {"id": 72, "name": "Thung lũng Raspberry"}, {"id": 73, "name": "Thung lũng chết"}, {"id": 74, "name": "Đồi cây Fide"}, {"id": 75, "name": "Khe núi tử thần"}, {"id": 76, "name": "Núi đá"}, {"id": 77, "name": "Rừng đá"}, {"id": 78, "name": "Lãnh  địa Fize"}, {"id": 79, "name": "Núi khỉ đỏ"}, {"id": 80, "name": "Núi khỉ vàng"}, {"id": 81, "name": "Hang quỷ chim"}, {"id": 82, "name": "Núi khỉ đen"}, {"id": 83, "name": "Hang khỉ đen"}, {"id": 84, "name": "Siêu Thị"}, {"id": 85, "name": "Hành tinh M-2"}, {"id": 86, "name": "Hành tinh Polaris"}, {"id": 87, "name": "Hành tinh Cretaceous"}, {"id": 88, "name": "Hành tinh Monmaasu"}, {"id": 89, "name": "Hành tinh Rudeeze"}, {"id": 90, "name": "Hành tinh Gelbo"}, {"id": 91, "name": "Hành tinh Tigere"}, {"id": 92, "name": "Thành phố phía đông"}, {"id": 93, "name": "Thành phố phía nam"}, {"id": 94, "name": "Đảo Balê"}, {"id": 95, "name": "95"}, {"id": 96, "name": "Cao nguyên"}, {"id": 97, "name": "Thành phố phía bắc"}, {"id": 98, "name": "Ngọn núi phía bắc"}, {"id": 99, "name": "Thung lũng phía bắc"}, {"id": 100, "name": "Thị trấn Ginder"}, {"id": 101, "name": "101"}, {"id": 102, "name": "Nhà Bunma"}, {"id": 103, "name": "Võ đài Xên bọ hung"}, {"id": 104, "name": "Sân sau siêu thị"}, {"id": 105, "name": "Cánh đồng tuyết"}, {"id": 106, "name": "Rừng tuyết"}, {"id": 107, "name": "Núi tuyết"}, {"id": 108, "name": "Dòng sông băng"}, {"id": 109, "name": "Rừng băng"}, {"id": 110, "name": "Hang băng"}, {"id": 111, "name": "Đông Nam Karin"}, {"id": 112, "name": "Võ đài Hạt Mít"}, {"id": 113, "name": "Đại hội võ thuật"}, {"id": 114, "name": "Cổng phi thuyền"}, {"id": 115, "name": "Phòng chờ"}, {"id": 116, "name": "Thánh địa Kaio"}, {"id": 117, "name": "Cửa Ải 1"}, {"id": 118, "name": "Cửa Ải 2"}, {"id": 119, "name": "Cửa Ải 3"}, {"id": 120, "name": "Phòng chỉ huy"}, {"id": 121, "name": "Đấu trường"}, {"id": 122, "name": "Ngũ Hành Sơn"}, {"id": 123, "name": "Ngũ Hành Sơn"}, {"id": 124, "name": "Ngũ Hành Sơn"}, {"id": 125, "name": "Võ đài Bang"}, {"id": 126, "name": "Thành phố Santa"}, {"id": 127, "name": "Cổng phi thuyền"}, {"id": 128, "name": "Bụng Mabư"}, {"id": 129, "name": "Đại hội võ thuật"}, {"id": 130, "name": "Đại hội võ thuật Vũ Trụ"}, {"id": 131, "name": "Hành Tinh Yardart"}, {"id": 132, "name": "Hành Tinh Yardart 2"}, {"id": 133, "name": "Hành Tinh Yardart 3"}, {"id": 134, "name": "Đại hội võ thuật Vũ Trụ 6-7"}, {"id": 135, "name": "Động hải tặc"}, {"id": 136, "name": "Hang Bạch Tuộc"}, {"id": 137, "name": "Động kho báu"}, {"id": 138, "name": "Cảng hải tặc"}, {"id": 139, "name": "Hành tinh Potaufeu"}, {"id": 140, "name": "Hang động Potaufeu"}, {"id": 141, "name": "Con đường rắn độc"}, {"id": 142, "name": "Con đường rắn độc"}, {"id": 143, "name": "Con đường rắn độc"}, {"id": 144, "name": "Hoang mạc"}, {"id": 145, "name": "Võ Đài Siêu Cấp"}, {"id": 146, "name": "Tây Karin"}, {"id": 147, "name": "Sa mạc"}, {"id": 148, "name": "Lâu đài Lychee"}, {"id": 149, "name": "Thành phố Santa"}, {"id": 150, "name": "Lôi Đài"}, {"id": 151, "name": "Hành tinh bóng tối"}, {"id": 152, "name": "Vùng đất băng giá"}, {"id": 153, "name": "Lãnh địa bang hội"}, {"id": 154, "name": "Hành tinh Bill"}, {"id": 155, "name": "Hành tinh ngục tù"}, {"id": 156, "name": "Tây thánh địa"}, {"id": 157, "name": "Đông thánh Địa"}, {"id": 158, "name": "Bắc thánh địa"}, {"id": 159, "name": "Nam thánh Địa"}, {"id": 160, "name": "Khu hang động"}, {"id": 161, "name": "Bìa rừng nguyên thủy"}, {"id": 162, "name": "Rừng nguyên thủy"}, {"id": 163, "name": "Làng Plant nguyên thủy"}, {"id": 164, "name": "Tranh ngọc Namếc"}, {"id": 165, "name": "Map Boss"}, {"id": 166, "name": "Hành tinh ngục tù"}, {"id": 167, "name": "Địa ngục tầng 1"}, {"id": 168, "name": "Địa ngục tầng 2"}, {"id": 169, "name": "Địa ngục tầng 3"}, {"id": 170, "name": "Phòng tập thời gian"}, {"id": 171, "name": "Địa ngục tầng 4"}, {"id": 172, "name": "Phòng chờ thời gian"}, {"id": 173, "name": "Cánh đồng tuyết 2"}, {"id": 174, "name": "Rừng tuyết 2"}, {"id": 175, "name": "Hang băng 2"}, {"id": 176, "name": "NEW Nam Kamê"}, {"id": 177, "name": "Rừng nguyên sinh"}, {"id": 178, "name": "Ngọn núi phía bắc"}, {"id": 179, "name": "Phòng thí nghiệm Myuu"}, {"id": 180, "name": "Mù căng chải"}, {"id": 181, "name": "Sa mạc hoang vu"}, {"id": 182, "name": "Hành tinh Bill"}, {"id": 183, "name": "Hành tinh Bill"}, {"id": 184, "name": "Tường thành cổ 1"}, {"id": 185, "name": "Tường thành cổ 2"}, {"id": 186, "name": "Đấu trường thành cổ"}];

export const DATANRO_MOBS_CATALOG = [{"id": 0, "name": "Mộc nhân", "hp": 100, "speed": 1, "type": 0}, {"id": 1, "name": "Khủng long", "hp": 200, "speed": 1, "type": 1}, {"id": 2, "name": "Lợn lòi", "hp": 200, "speed": 1, "type": 1}, {"id": 3, "name": "Quỷ đất", "hp": 200, "speed": 1, "type": 1}, {"id": 4, "name": "Khủng long mẹ", "hp": 500, "speed": 2, "type": 1}, {"id": 5, "name": "Lợn lòi mẹ", "hp": 500, "speed": 1, "type": 1}, {"id": 6, "name": "Quỷ đất mẹ", "hp": 500, "speed": 2, "type": 1}, {"id": 7, "name": "Thằn lằn bay", "hp": 600, "speed": 1, "type": 4}, {"id": 8, "name": "Phi long", "hp": 600, "speed": 2, "type": 4}, {"id": 9, "name": "Quỷ bay", "hp": 600, "speed": 1, "type": 4}, {"id": 10, "name": "Thằn lằn mẹ", "hp": 1000, "speed": 2, "type": 4}, {"id": 11, "name": "Phi long mẹ", "hp": 1000, "speed": 1, "type": 4}, {"id": 12, "name": "Quỷ bay mẹ", "hp": 1000, "speed": 2, "type": 4}, {"id": 13, "name": "Ốc mượn hồn", "hp": 3000, "speed": 2, "type": 1}, {"id": 14, "name": "Ốc sên", "hp": 3000, "speed": 2, "type": 1}, {"id": 15, "name": "Heo Xayda mẹ", "hp": 3000, "speed": 2, "type": 1}, {"id": 16, "name": "Heo rừng", "hp": 1500, "speed": 1, "type": 1}, {"id": 17, "name": "Heo da xanh", "hp": 1500, "speed": 1, "type": 1}, {"id": 18, "name": "Heo Xayda", "hp": 1500, "speed": 1, "type": 1}, {"id": 19, "name": "Heo rừng mẹ", "hp": 12000, "speed": 2, "type": 1}, {"id": 20, "name": "Heo xanh mẹ", "hp": 12000, "speed": 2, "type": 1}, {"id": 21, "name": "Alien", "hp": 12000, "speed": 2, "type": 4}, {"id": 22, "name": "Bulon", "hp": 6000, "speed": 2, "type": 1}, {"id": 23, "name": "Ukulele", "hp": 6000, "speed": 2, "type": 1}, {"id": 24, "name": "Quỷ mập", "hp": 6000, "speed": 2, "type": 1}, {"id": 25, "name": "Tambourine", "hp": 20000, "speed": 2, "type": 4}, {"id": 26, "name": "Drum", "hp": 20000, "speed": 2, "type": 1}, {"id": 27, "name": "Akkuman", "hp": 20000, "speed": 2, "type": 1}, {"id": 28, "name": "Thằn lằn bay 2", "hp": 1500, "speed": 2, "type": 4}, {"id": 29, "name": "Phi long 2", "hp": 1500, "speed": 2, "type": 4}, {"id": 30, "name": "Quỷ bay 2", "hp": 1500, "speed": 2, "type": 4}, {"id": 31, "name": "Không tặc", "hp": 3000, "speed": 2, "type": 4}, {"id": 32, "name": "Quỷ đầu to", "hp": 3000, "speed": 2, "type": 4}, {"id": 33, "name": "Quỷ địa ngục", "hp": 3000, "speed": 2, "type": 4}, {"id": 34, "name": "Lính độc nhãn", "hp": 30000, "speed": 2, "type": 1}, {"id": 35, "name": "Lính độc nhãn", "hp": 30000, "speed": 2, "type": 1}, {"id": 36, "name": "Sói xám", "hp": 30000, "speed": 2, "type": 1}, {"id": 37, "name": "Robot bay", "hp": 30000, "speed": 2, "type": 4}, {"id": 38, "name": "Robot thép", "hp": 30000, "speed": 2, "type": 1}, {"id": 39, "name": "Nappa", "hp": 40000, "speed": 2, "type": 1}, {"id": 40, "name": "Soldier", "hp": 50000, "speed": 2, "type": 1}, {"id": 41, "name": "Appule", "hp": 60000, "speed": 2, "type": 1}, {"id": 42, "name": "Raspberry", "hp": 70000, "speed": 2, "type": 1}, {"id": 43, "name": "Thằn lằn xanh", "hp": 80000, "speed": 2, "type": 4}, {"id": 44, "name": "Quỷ đầu nhọn", "hp": 90000, "speed": 2, "type": 1}, {"id": 45, "name": "Quỷ đầu vàng", "hp": 100000, "speed": 2, "type": 1}, {"id": 46, "name": "Quỷ da tím", "hp": 110000, "speed": 2, "type": 1}, {"id": 47, "name": "Quỷ già", "hp": 120000, "speed": 2, "type": 1}, {"id": 48, "name": "Cá sấu", "hp": 130000, "speed": 2, "type": 1}, {"id": 49, "name": "Dơi da xanh", "hp": 140000, "speed": 2, "type": 4}, {"id": 50, "name": "Quỷ chim", "hp": 180000, "speed": 2, "type": 4}, {"id": 51, "name": "Lính đầu trọc", "hp": 150000, "speed": 1, "type": 1}, {"id": 52, "name": "Lính tai dài", "hp": 160000, "speed": 2, "type": 1}, {"id": 53, "name": "Lính vũ trụ", "hp": 170000, "speed": 2, "type": 1}, {"id": 54, "name": "Khỉ lông đen", "hp": 300000, "speed": 2, "type": 1}, {"id": 55, "name": "Khỉ giáp sắt", "hp": 350000, "speed": 2, "type": 1}, {"id": 56, "name": "Khỉ lông đỏ", "hp": 400000, "speed": 2, "type": 1}, {"id": 57, "name": "Khỉ lông vàng", "hp": 450000, "speed": 2, "type": 1}, {"id": 58, "name": "Xên con cấp 1", "hp": 200000, "speed": 3, "type": 1}, {"id": 59, "name": "Xên con cấp 2", "hp": 250000, "speed": 3, "type": 1}, {"id": 60, "name": "Xên con cấp 3", "hp": 300000, "speed": 3, "type": 1}, {"id": 61, "name": "Xên con cấp  4", "hp": 350000, "speed": 3, "type": 1}, {"id": 62, "name": "Xên con cấp  5", "hp": 400000, "speed": 3, "type": 1}, {"id": 63, "name": "Xên con cấp  6", "hp": 450000, "speed": 3, "type": 1}, {"id": 64, "name": "Xên con cấp  7", "hp": 500000, "speed": 3, "type": 1}, {"id": 65, "name": "Xên con cấp  8", "hp": 550000, "speed": 3, "type": 1}, {"id": 66, "name": "Tai tím", "hp": 350000, "speed": 2, "type": 1}, {"id": 67, "name": "Abo", "hp": 400000, "speed": 2, "type": 1}, {"id": 68, "name": "Kado", "hp": 450000, "speed": 2, "type": 1}, {"id": 69, "name": "Da xanh", "hp": 500000, "speed": 2, "type": 4}, {"id": 70, "name": "Hirudegarn", "hp": 40000000, "speed": 1, "type": 1}, {"id": 71, "name": "Vua Bạch Tuộc", "hp": 1500000, "speed": 1, "type": 1}, {"id": 72, "name": "Rôbốt bảo vệ", "hp": 1000000, "speed": 1, "type": 1}, {"id": 73, "name": "Kawazu", "hp": 50000, "speed": 2, "type": 1}, {"id": 74, "name": "Kinkarn", "hp": 55000, "speed": 2, "type": 1}, {"id": 75, "name": "Arbee", "hp": 60000, "speed": 2, "type": 4}, {"id": 76, "name": "Cỗ máy hủy diệt", "hp": 80000, "speed": 1, "type": 0}, {"id": 77, "name": "Gấu tướng cướp", "hp": 8000000000, "speed": 2, "type": 1}, {"id": 78, "name": "Khỉ lông xanh", "hp": 2000000, "speed": 2, "type": 1}, {"id": 79, "name": "Taburine Đỏ", "hp": 3000000, "speed": 3, "type": 4}, {"id": 80, "name": "Cabira", "hp": 4000000, "speed": 2, "type": 1}, {"id": 81, "name": "Tobi", "hp": 5000000, "speed": 2, "type": 1}, {"id": 82, "name": "Voi Chín Ngà", "hp": 20000000, "speed": 2, "type": 1}, {"id": 83, "name": "Gà Chín Cựa", "hp": 12000000, "speed": 2, "type": 1}, {"id": 84, "name": "Ngựa Chín Lmao", "hp": 15000000, "speed": 2, "type": 1}, {"id": 85, "name": "Piano", "hp": 10000000000, "speed": 2, "type": 1}, {"id": 86, "name": "Ếch mặt đỏ", "hp": 4000000, "speed": 2, "type": 1}, {"id": 87, "name": "Jinai", "hp": 6000000, "speed": 2, "type": 4}, {"id": 88, "name": "Quỷ đỏ", "hp": 1000000, "speed": 2, "type": 1}, {"id": 89, "name": "Quỷ xanh", "hp": 1500000, "speed": 2, "type": 1}, {"id": 90, "name": "Quỷ xanh lá", "hp": 1000000, "speed": 2, "type": 1}, {"id": 91, "name": "Quỷ vàng", "hp": 1500000, "speed": 2, "type": 1}, {"id": 92, "name": "Godzilla", "hp": 1500000, "speed": 2, "type": 1}, {"id": 93, "name": "Kong", "hp": 1500000, "speed": 2, "type": 1}, {"id": 94, "name": "Máy đo sức mạnh", "hp": 5000000000, "speed": 1, "type": 0}, {"id": 95, "name": "Cađíc M", "hp": 6000000, "speed": 2, "type": 1}, {"id": 96, "name": "Quái mới", "hp": 6000000, "speed": 2, "type": 1}];

export const DATANRO_NPCS_CATALOG = [{"id": 0, "name": "Ông Gôhan"}, {"id": 1, "name": "Ông Paragus"}, {"id": 2, "name": "Ông Moori"}, {"id": 3, "name": "Rương đồ"}, {"id": 4, "name": "Đậu thần"}, {"id": 5, "name": "Con mèo"}, {"id": 6, "name": "Khu vực"}, {"id": 7, "name": "Bunma"}, {"id": 8, "name": "Dende"}, {"id": 9, "name": "Appule"}, {"id": 10, "name": "Dr. Brief"}, {"id": 11, "name": "Cargo"}, {"id": 12, "name": "Cui"}, {"id": 13, "name": "Quy Lão Kame"}, {"id": 14, "name": "Trưởng lão Guru"}, {"id": 15, "name": "Vua Vegeta"}, {"id": 16, "name": "Uron"}, {"id": 17, "name": "Bò Mộng"}, {"id": 18, "name": "Thần mèo Karin"}, {"id": 19, "name": "Thượng Đế"}, {"id": 20, "name": "Thần Vũ Trụ"}, {"id": 21, "name": "Bà Hạt Mít"}, {"id": 22, "name": "Trọng tài"}, {"id": 23, "name": "Ghi danh"}, {"id": 24, "name": "Rồng Thiêng"}, {"id": 25, "name": "Lính canh"}, {"id": 26, "name": "Độc Nhãn"}, {"id": 27, "name": "Rồng Thiêng Namếc"}, {"id": 28, "name": "Cửa hàng ký gửi"}, {"id": 29, "name": "Rồng Omega"}, {"id": 30, "name": "Rồng 2 sao"}, {"id": 31, "name": "Rồng 3 sao"}, {"id": 32, "name": "Rồng 4 sao"}, {"id": 33, "name": "Rồng 5 sao"}, {"id": 34, "name": "Rồng 6 sao"}, {"id": 35, "name": "Rồng 7 sao"}, {"id": 36, "name": "Rồng 1 sao"}, {"id": 37, "name": "Bunma"}, {"id": 38, "name": "Ca Lích"}, {"id": 39, "name": "Santa"}, {"id": 40, "name": "Mabư mập"}, {"id": 42, "name": "Quốc Vương"}, {"id": 43, "name": "Tổ Sư Kaio"}, {"id": 44, "name": "Ôsin"}, {"id": 45, "name": "Kibit"}, {"id": 46, "name": "Babiđây"}, {"id": 47, "name": "Giu-ma Đầu Bò"}, {"id": 48, "name": "Ngộ Không"}, {"id": 49, "name": "Đường Tăng"}, {"id": 50, "name": "Quả trứng"}, {"id": 51, "name": "Dưa hấu"}, {"id": 52, "name": "Hùng Vương"}, {"id": 53, "name": "Tapion"}, {"id": 54, "name": "Lý Tiểu Nương"}, {"id": 55, "name": "Bill"}, {"id": 56, "name": "Whis"}, {"id": 57, "name": "Champa"}, {"id": 58, "name": "Vados"}, {"id": 59, "name": "Trọng tài"}, {"id": 60, "name": "Goku SSJ"}, {"id": 61, "name": "Goku SSJ"}, {"id": 62, "name": "Potage"}, {"id": 63, "name": "Jaco"}, {"id": 65, "name": "Yarirobe"}, {"id": 66, "name": "Nồi bánh"}, {"id": 67, "name": "Mr Popo"}, {"id": 68, "name": "Panchy"}, {"id": 69, "name": "Thỏ Đại Ca"}, {"id": 70, "name": "Bardock"}, {"id": 71, "name": "Berry"}, {"id": 72, "name": "Ca Đíc"}, {"id": 73, "name": "Fide"}, {"id": 74, "name": "Tori-Bot"}, {"id": 75, "name": "King Furry"}, {"id": 76, "name": "Mai"}, {"id": 77, "name": "Fu"}, {"id": 78, "name": "test16"}, {"id": 80, "name": "Bông hồng"}, {"id": 82, "name": "Chi Chi"}, {"id": 83, "name": "Dr. Myuu"}, {"id": 84, "name": "Rương sưu tập"}, {"id": 85, "name": "Zeno"}, {"id": 87, "name": "Mai Đào"}];
