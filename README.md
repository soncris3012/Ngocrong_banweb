# 🐉 NGỌC RỒNG ONLINE (NRO) - PHIÊN BẢN WEB (REACTJS + SUPABASE)

> **Dự án chuyển đổi mã nguồn NRO Offline (`KhanhNguyen9872/Nro-Offline_src`) thành Web Game chất lượng cao, viết bằng ReactJS, lưu trữ cơ sở dữ liệu trên Supabase Cloud Database và đã deploy trực tiếp lên Vercel.**

🌐 **Chơi Trực Tiếp Trên Web (Live Game):** [https://ngocrong-banweb.vercel.app](https://ngocrong-banweb.vercel.app)  
📦 **Kho Mã Nguồn GitHub:** [https://github.com/soncris3012/Ngocrong_banweb](https://github.com/soncris3012/Ngocrong_banweb)

![Dragon Ball Web Banner](public/200.webp)

---

## 🌟 1. Giới Thiệu Dự Án

Dự án **Ngocrong_banweb** chuyển thể hoàn chỉnh phong cách và cơ chế của tựa game tuổi thơ huyền thoại **Chú Bé Rồng / Ngọc Rồng Online (TeaMobi)** sang nền tảng web hiện đại:
- **Frontend Game:** Được viết bằng **ReactJS (Vite)** kết hợp **HTML5 Canvas 2D Engine 60 FPS**.
- **Không cần cài đặt:** Chơi trực tiếp trên mọi trình duyệt web (Chrome, Safari, Edge, Firefox) cả trên máy tính (PC) lẫn điện thoại di động (Mobile / Tablet cảm ứng).
- **Cơ sở dữ liệu đám mây:** Tích hợp **Supabase (PostgreSQL)** lưu trữ dữ liệu nhân vật, sức mạnh, tiềm năng, hành trang và bảng xếp hạng realtime.
- **Hạ tầng triển khai:** Tối ưu hóa 100% để deploy trực tiếp lên **Vercel** chỉ với 1 click hoặc lệnh terminal.

---

## 🎮 2. Tính Năng & Gameplay Nổi Bật

### 🌌 3 Hành Tinh Khởi Đầu
1. **Trái Đất (Son Goku):** Cân bằng giữa máu và nội lực. Kỹ năng biểu tượng: **Kamehameha** & Quả Cầu Kênh Khi.
2. **Namếc (Piccolo):** Lượng máu dồi dào, khả năng tái sinh và hồi phục thể lực nhanh. Kỹ năng: **Masenko (Makankosappo)** & Trị Thương.
3. **Xayda (Vegeta):** Sức tấn công và chí mạng cực mạnh. Kỹ năng: **Galick Gun** & Gồng nộ Super Saiyan.

### 🕹️ Phím Điều Khiển (Keyboard & Mobile Touch)
| Phím Bấm | Chức Năng |
| :--- | :--- |
| **A / D** hoặc **◀ / ▶** | Di chuyển sang trái / phải |
| **W** hoặc **▲** / **Space** | Nhảy lên hoặc Giữ để Bay lượn trên không |
| **S** hoặc **▼** | Cúi người / Hạ cánh nhanh |
| **J** | Đấm liên hoàn combo cận chiến |
| **K** | Bắn chưởng năng lượng xuyên màn hình (**Kamehameha / Masenko / Galick Gun**) |
| **L** | **Tụ KI / Gồng Năng Lượng:** Hào quang Super Saiyan rực sáng nạp đầy thanh KI |
| **H** | **Ăn Đậu Thần Karin:** Phục hồi ngay lập tức 100% HP và KI |
| **E** | Tương tác trò chuyện với NPC / Bước qua cổng dịch chuyển bản đồ |
| **Mobile D-Pad** | Hệ thống nút ảo cảm ứng mượt mà trên điện thoại |

### 🗺️ Hệ Thống Bản Đồ (Maps) & Cổng Dịch Chuyển
- **Map 0 - Làng Aru:** Nơi xuất phát của các tân thủ, có **Quy Lão Kame**, **Bà Hạt Mít**, **Cây Đậu Thần Karin**, và các **Mộc Nhân** để tập luyện nắm đấm.
- **Map 1 - Đảo Kame:** Đảo biển xanh mát, nhà Kame House, **Thương nhân Santa**, quái vật **Khủng Long Con** và **Cua Bọc Thép**.
- **Map 2 - Rừng Nấm Huyền Bí:** Địa bàn của **Trưởng lão Guru**, quái bay **Thằn Lằn Bay**, và trùm **Khủng Long Mẹ Bạo Chúa**.

### 🌿 Cây Đậu Thần Karin
- Cây đậu thần tại Làng Aru tự động sinh trưởng và kết hạt đậu định kỳ.
- Người chơi có thể đến gần cây và bấm **[E]** hoặc click nút hái để nạp đầy túi đậu thần (tối đa 20 hạt).

### 📜 Hệ Thống Nhiệm Vụ (Quests)
- Chuỗi nhiệm vụ tân thủ: Đấm ngã Mộc Nhân ➜ Thu hoạch Đậu Thần ➜ Thám hiểm Đảo Kame ➜ Tiêu diệt Khủng Long Mẹ.
- Hoàn thành nhiệm vụ nhận được lượng lớn **Sức Mạnh**, **Tiềm Năng**, **Vàng** và **Ngọc Xanh**.

### 🥋 Cửa Hàng & Hành Trang (Shop & Inventory)
- Mua sắm trang phục truyền thống: Áo Kame, Quần võ thuật, Găng tay sắt, Giày thần tốc, Rada cấp 1-5, Thỏi vàng hoàng gia.
- Bảng nâng cấp tiềm năng tại **Quy Lão Kame**: Tự do tăng Max HP, Max KI, Sức đánh (ATK), Giáp (DEF), và Tỷ lệ Chí mạng (% CRIT).

---

## 🗄️ 3. Cấu Hình Cơ Sở Dữ Liệu Supabase

Dự án cung cấp sẵn file schema chuẩn PostgreSQL chuyển đổi từ `mad.sql`:
📁 **`supabase/schema.sql`**

### Cách thiết lập Supabase:
1. Đăng ký/đăng nhập tài khoản miễn phí tại [Supabase.com](https://supabase.com).
2. Tạo một Project mới (ví dụ: `ngocrong-online`).
3. Mở mục **SQL Editor** trên thanh menu bên trái ➜ Nhấn **New Query**.
4. Mở file `supabase/schema.sql` trong dự án này, copy toàn bộ nội dung và dán vào SQL Editor ➜ Nhấn **RUN**.
5. Vào **Project Settings ➜ API**, copy **Project URL** và **Anon Public Key**.
6. Trong game, nhấn vào icon **Database (Supabase)** trên góc phải ➜ Dán URL & Key ➜ Nhấn **Lưu & Kết Nối**!

> *Lưu ý: Nếu chưa cấu hình Supabase, game vẫn chạy hoàn toàn mượt mà và lưu tiến trình người chơi cục bộ vào LocalStorage.*

---

## 🚀 4. Hướng Dẫn Deploy Lên Vercel

Dự án đã có sẵn cấu hình `vercel.json` tối ưu cho Vite + React:

### Cách 1: Deploy qua Vercel CLI (Nhanh nhất)
```bash
# Đăng nhập Vercel (nếu chưa)
vercel login

# Deploy lên môi trường Production
vercel --prod
```

### Cách 2: Deploy qua Vercel Dashboard & GitHub
1. Đẩy code lên GitHub repository `Ngocrong_banweb`.
2. Truy cập [Vercel Dashboard](https://vercel.com/dashboard) ➜ Nhấn **Add New Project**.
3. Chọn repo `Ngocrong_banweb` từ tài khoản GitHub của bạn.
4. Framework Preset chọn: **Vite**.
5. Nhấn **Deploy** ➜ Vercel sẽ tự động build và cấp tên miền `https://ngocrong-banweb.vercel.app`!

---

## 💻 5. Chạy Local Trong Môi Trường Phát Triển

```bash
# 1. Cài đặt các thư viện cần thiết
npm install

# 2. Khởi chạy dev server
npm run dev

# 3. Mở trình duyệt tại:
http://localhost:3000
```

---

## 🏆 6. Tác Quyền & Đóng Góp
- **Gốc mã nguồn tham khảo:** [KhanhNguyen9872/Nro-Offline_src](https://github.com/KhanhNguyen9872/Nro-Offline_src)
- **Tác quyền game gốc:** TeaMobi & Akira Toriyama (Dragon Ball).
- **Chuyển thể Web Game:** `Ngocrong_banweb` by soncris3012.
