import React, { useState } from 'react';
import { sound } from '../../game/audio';

export const LoginModal = ({ onLoginSuccess, onClose }) => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Registration fields
  const [regEmail, setRegEmail] = useState('');
  const [regCharName, setRegCharName] = useState('');

  // Notification dialog (like khungthongbao.png in desktop)
  const [notification, setNotification] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const u = username.trim();
    const p = password.trim();
    if (!u || !p) {
      setNotification('Vui lòng nhập đầy đủ tên tài khoản và mật khẩu!');
      return;
    }

    sound.playPunch();
    // Save login credentials to localStorage
    localStorage.setItem('nro_account_user', u);
    localStorage.setItem('nro_last_character', u);

    onLoginSuccess({
      username: u,
      name: u
    });
    onClose();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const u = username.trim();
    const p = password.trim();
    const email = regEmail.trim();
    const charName = regCharName.trim() || u;

    if (!u || !p) {
      setNotification('Vui lòng nhập tài khoản và mật khẩu!');
      return;
    }
    if (u.length < 3 || u.length > 20) {
      setNotification('Tên tài khoản phải từ 3 đến 20 ký tự!');
      return;
    }

    sound.playPunch();
    localStorage.setItem('nro_account_user', u);
    localStorage.setItem('nro_last_character', charName);

    onLoginSuccess({
      username: u,
      name: charName,
      email: email
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 select-none">
      {/* KHUNG THÔNG BÁO POPUP NẾU CÓ */}
      {notification && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div 
            className="w-full max-w-[420px] h-[210px] rounded-2xl flex flex-col items-center justify-between p-5 border border-amber-900/60 shadow-2xl relative"
            style={{
              backgroundImage: `url('/assets/hud/giaodienngoai/chung/khungthongbao.png')`,
              backgroundSize: '100% 100%',
              imageRendering: 'pixelated'
            }}
          >
            <div className="mt-4 px-4 text-center">
              <span className="font-dragon text-[#532905] text-xs font-bold leading-relaxed">
                {notification}
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                sound.playPunch();
                setNotification(null);
              }}
              className="w-[120px] h-[40px] flex items-center justify-center transition active:scale-95 mb-2"
              style={{
                backgroundImage: `url('/assets/hud/giaodienngoai/chung/nutdangnhap3.png')`,
                backgroundSize: '100% 100%',
                imageRendering: 'pixelated'
              }}
            >
              <span className="font-dragon text-[#532905] text-xs font-bold">
                OK
              </span>
            </button>
          </div>
        </div>
      )}

      {/* DIALOG ĐĂNG NHẬP / ĐĂNG KÝ (KHUNGDANGNHAP.PNG) */}
      <div 
        className="relative w-full max-w-[460px] min-h-[440px] rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-between border border-amber-950/40"
        style={{
          backgroundImage: `url('/assets/hud/giaodienngoai/chung/khungdangnhap.png')`,
          backgroundSize: '100% 100%',
          imageRendering: 'pixelated'
        }}
      >
        {/* TIÊU ĐỀ */}
        <div className="mt-2 text-center">
          <h2 className="font-dragon text-[#532905] text-base font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
            {!isRegisterMode ? "ĐĂNG NHẬP TÀI KHOẢN" : "ĐĂNG KÝ TÀI KHOẢN MỚI"}
          </h2>
          <div className="w-24 h-0.5 bg-[#532905]/40 mx-auto mt-1" />
        </div>

        {/* FORM INPUTS */}
        {!isRegisterMode ? (
          <form onSubmit={handleLogin} className="w-full px-4 flex flex-col gap-3 my-auto">
            {/* Tên đăng nhập */}
            <div className="flex flex-col gap-1">
              <label className="font-dragon text-[#532905] text-xs font-bold">
                Tài khoản:
              </label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Nhập tên tài khoản..."
                className="w-full h-[40px] px-3 font-dragon text-[#532905] text-xs bg-[#fde8bb] border-2 border-[#b47a3e] rounded-lg shadow-inner outline-none focus:border-[#7c441a]"
                autoFocus
              />
            </div>

            {/* Mật khẩu */}
            <div className="flex flex-col gap-1">
              <label className="font-dragon text-[#532905] text-xs font-bold">
                Mật khẩu:
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu..."
                className="w-full h-[40px] px-3 font-dragon text-[#532905] text-xs bg-[#fde8bb] border-2 border-[#b47a3e] rounded-lg shadow-inner outline-none focus:border-[#7c441a]"
              />
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-center gap-4 mt-2">
              <button
                type="submit"
                className="w-[140px] h-[44px] flex items-center justify-center transition active:scale-95"
                style={{
                  backgroundImage: `url('/assets/hud/giaodienngoai/chung/nutdangnhap3.png')`,
                  backgroundSize: '100% 100%',
                  imageRendering: 'pixelated'
                }}
              >
                <span className="font-dragon text-[#532905] text-xs font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                  Đăng nhập
                </span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-[110px] h-[44px] flex items-center justify-center transition active:scale-95"
                style={{
                  backgroundImage: `url('/assets/hud/giaodienngoai/chung/nutdangnhap3.png')`,
                  backgroundSize: '100% 100%',
                  imageRendering: 'pixelated'
                }}
              >
                <span className="font-dragon text-[#532905] text-xs font-bold">
                  Đóng
                </span>
              </button>
            </div>

            {/* Footer Links */}
            <div className="flex flex-col items-center gap-1.5 mt-2 text-center">
              <button
                type="button"
                onClick={() => setIsRegisterMode(true)}
                className="font-dragon text-[#703d15] text-[11px] underline hover:text-[#412108] transition"
              >
                Chưa có tài khoản? Đăng ký ngay
              </button>

              <button
                type="button"
                onClick={() => setNotification("Để lấy lại mật khẩu xin vui lòng liên hệ Admin hoặc truy cập web ngocrong-banweb.vercel.app")}
                className="font-dragon text-[#8c5224] text-[10px] hover:underline"
              >
                Quên mật khẩu?
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="w-full px-4 flex flex-col gap-2.5 my-auto">
            {/* Tài khoản */}
            <div className="flex flex-col gap-0.5">
              <label className="font-dragon text-[#532905] text-[11px] font-bold">
                Tài khoản mới:
              </label>
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Tên đăng nhập..."
                className="w-full h-[36px] px-3 font-dragon text-[#532905] text-xs bg-[#fde8bb] border-2 border-[#b47a3e] rounded-lg shadow-inner outline-none focus:border-[#7c441a]"
                autoFocus
              />
            </div>

            {/* Mật khẩu */}
            <div className="flex flex-col gap-0.5">
              <label className="font-dragon text-[#532905] text-[11px] font-bold">
                Mật khẩu:
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Mật khẩu..."
                className="w-full h-[36px] px-3 font-dragon text-[#532905] text-xs bg-[#fde8bb] border-2 border-[#b47a3e] rounded-lg shadow-inner outline-none focus:border-[#7c441a]"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-0.5">
              <label className="font-dragon text-[#532905] text-[11px] font-bold">
                Email (không bắt buộc):
              </label>
              <input
                type="email"
                value={regEmail}
                onChange={e => setRegEmail(e.target.value)}
                placeholder="nguoichoi@gmail.com..."
                className="w-full h-[36px] px-3 font-dragon text-[#532905] text-xs bg-[#fde8bb] border-2 border-[#b47a3e] rounded-lg shadow-inner outline-none focus:border-[#7c441a]"
              />
            </div>

            {/* Tên nhân vật game */}
            <div className="flex flex-col gap-0.5">
              <label className="font-dragon text-[#532905] text-[11px] font-bold">
                Tên nhân vật trong game:
              </label>
              <input
                type="text"
                value={regCharName}
                onChange={e => setRegCharName(e.target.value)}
                placeholder="Ví dụ: GokuX, Cađíc, ..."
                className="w-full h-[36px] px-3 font-dragon text-[#532905] text-xs bg-[#fde8bb] border-2 border-[#b47a3e] rounded-lg shadow-inner outline-none focus:border-[#7c441a]"
              />
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-center gap-4 mt-2">
              <button
                type="submit"
                className="w-[140px] h-[42px] flex items-center justify-center transition active:scale-95"
                style={{
                  backgroundImage: `url('/assets/hud/giaodienngoai/chung/nutdangnhap3.png')`,
                  backgroundSize: '100% 100%',
                  imageRendering: 'pixelated'
                }}
              >
                <span className="font-dragon text-[#532905] text-xs font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                  Đăng ký
                </span>
              </button>

              <button
                type="button"
                onClick={() => setIsRegisterMode(false)}
                className="w-[110px] h-[42px] flex items-center justify-center transition active:scale-95"
                style={{
                  backgroundImage: `url('/assets/hud/giaodienngoai/chung/nutdangnhap3.png')`,
                  backgroundSize: '100% 100%',
                  imageRendering: 'pixelated'
                }}
              >
                <span className="font-dragon text-[#532905] text-xs font-bold">
                  Quay lại
                </span>
              </button>
            </div>
          </form>
        )}

        {/* Hướng dẫn */}
        <div className="text-center pb-1">
          <span className="font-dragon text-[#8c5224] text-[10px]">
            Hệ thống đăng nhập tự động đồng bộ tài khoản & đám mây Supabase
          </span>
        </div>
      </div>
    </div>
  );
};
