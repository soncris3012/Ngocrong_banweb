import React, { useState, useEffect } from 'react';
import { sound } from '../../game/audio';

export const MainMenu = ({
  savedCharacter,
  currentServer,
  onEnterGame,
  onOpenCharacterCreate,
  onOpenLogin,
  onOpenServerSelect,
  onClearData
}) => {
  const [scrollCay, setScrollCay] = useState(0);
  const [scrollThap, setScrollThap] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Parallax smooth horizontal scrolling matching LibGDX desktop
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const loop = (time) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      setScrollCay(prev => (prev - 25 * dt) % 340);
      setScrollThap(prev => (prev - 50 * dt) % 340);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  const hasCharacter = Boolean(savedCharacter && savedCharacter.name);

  return (
    <div className="fixed inset-0 z-30 bg-[#19b0f8] flex flex-col items-center justify-between overflow-hidden select-none">
      {/* 1. SEAMLESS PARALLAX BACKGROUND LAYERS MATCHING DESKTOP LIBGDX */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Sky fill: #19b0f8 (matching shapeRenderer.setColor(25/255f, 176/255f, 248/255f, 1)) */}
        <div className="absolute inset-0 bg-[#19b0f8]" />

        {/* Sky with clouds */}
        <div 
          className="absolute bottom-[35%] left-0 w-full h-[220px]"
          style={{
            backgroundImage: `url('/assets/hud/giaodienngoai/traidat/sky_traidat.png')`,
            backgroundSize: '255px 150px',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Nuixa (Dãy núi xa trên nền trời) */}
        <div 
          className="absolute bottom-[35%] left-0 w-full h-[220px]"
          style={{
            backgroundImage: `url('/assets/hud/giaodienngoai/traidat/nuixa_traidat.png')`,
            backgroundSize: '255px 150px',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Nui (Dãy núi đồi xanh giữa) */}
        <div 
          className="absolute bottom-[22%] left-0 w-full h-[260px]"
          style={{
            backgroundImage: `url('/assets/hud/giaodienngoai/traidat/nui_traidat.png')`,
            backgroundSize: '510px 170px',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Nuicay (Đồi cây phía trước - cuộn chậm 25px/s) */}
        <div 
          className="absolute bottom-[10%] left-0 w-[200%] h-[300px]"
          style={{
            backgroundImage: `url('/assets/hud/giaodienngoai/traidat/nuicay_traidat.png')`,
            backgroundSize: '340px 220px',
            backgroundRepeat: 'repeat-x',
            transform: `translateX(${scrollCay}px)`
          }}
        />

        {/* Nuithap (Trụ đá & thảm cỏ trước mặt - chạm đáy 0px, cuộn 50px/s) */}
        <div 
          className="absolute bottom-0 left-0 w-[200%] h-[340px]"
          style={{
            backgroundImage: `url('/assets/hud/giaodienngoai/traidat/nuithap_traidat.png')`,
            backgroundSize: '340px 280px',
            backgroundRepeat: 'repeat-x',
            transform: `translateX(${scrollThap}px)`
          }}
        />
      </div>

      {/* 2. LOGO CHÚ BÉ RỒNG Ở TRÊN GIỮA */}
      <div className="relative z-10 pt-4 sm:pt-6 flex flex-col items-center">
        <img
          src="/assets/hud/giaodienngoai/chung/chuberong.png"
          alt="Chú Bé Rồng Online"
          className="w-[280px] sm:w-[360px] object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.85)] animate-in fade-in zoom-in-95 duration-300"
        />
      </div>

      {/* 3. CENTER BUTTONS STACK (NÚT GỖ CHUẨN LIBGDX NRO) */}
      <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-3.5 my-auto w-full max-w-[330px] px-3">
        {/* NÚT 1: VÀO GAME NẾU ĐÃ CÓ NHÂN VẬT */}
        {hasCharacter && (
          <button
            type="button"
            onMouseEnter={() => setHoveredIdx(0)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => {
              sound.playPunch();
              onEnterGame();
            }}
            className="relative w-full h-[52px] flex items-center justify-center transition active:scale-95 shadow-xl hover:brightness-105"
          >
            <img
              src={`/assets/hud/giaodienngoai/chung/${hoveredIdx === 0 ? 'nutclick.png' : 'nutdangnhap2.png'}`}
              alt=""
              className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow"
            />
            <span className="relative z-10 font-dragon text-[#532905] text-sm sm:text-base font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
              TK. {savedCharacter.name}
            </span>
          </button>
        )}

        {/* NÚT: CHƠI MỚI */}
        <button
          type="button"
          onMouseEnter={() => setHoveredIdx(1)}
          onMouseLeave={() => setHoveredIdx(null)}
          onClick={() => {
            sound.playPunch();
            onOpenCharacterCreate();
          }}
          className="relative w-full h-[52px] flex items-center justify-center transition active:scale-95 shadow-xl hover:brightness-105"
        >
          <img
            src={`/assets/hud/giaodienngoai/chung/${hoveredIdx === 1 ? 'nutclick.png' : 'nutdangnhap2.png'}`}
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow"
          />
          <span className="relative z-10 font-dragon text-[#532905] text-sm sm:text-base font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
            Chơi mới
          </span>
        </button>

        {/* NÚT: ĐỔI TÀI KHOẢN */}
        <button
          type="button"
          onMouseEnter={() => setHoveredIdx(2)}
          onMouseLeave={() => setHoveredIdx(null)}
          onClick={() => {
            sound.playPunch();
            onOpenLogin();
          }}
          className="relative w-full h-[52px] flex items-center justify-center transition active:scale-95 shadow-xl hover:brightness-105"
        >
          <img
            src={`/assets/hud/giaodienngoai/chung/${hoveredIdx === 2 ? 'nutclick.png' : 'nutdangnhap2.png'}`}
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow"
          />
          <span className="relative z-10 font-dragon text-[#532905] text-sm sm:text-base font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
            Đổi tài khoản
          </span>
        </button>

        {/* NÚT: MÁY CHỦ */}
        <button
          type="button"
          onMouseEnter={() => setHoveredIdx(3)}
          onMouseLeave={() => setHoveredIdx(null)}
          onClick={() => {
            sound.playPunch();
            onOpenServerSelect();
          }}
          className="relative w-full h-[52px] flex items-center justify-center transition active:scale-95 shadow-xl hover:brightness-105"
        >
          <img
            src={`/assets/hud/giaodienngoai/chung/${hoveredIdx === 3 ? 'nutclick.png' : 'nutdangnhap2.png'}`}
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow"
          />
          <span className="relative z-10 font-dragon text-[#532905] text-sm sm:text-base font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
            {typeof currentServer === 'number' ? `Máy chủ: Vũ trụ ${currentServer}` : `Máy chủ: ${currentServer}`}
          </span>
        </button>
      </div>

      {/* 4. FOOTER INFO & XÓA DỮ LIỆU */}
      <div className="relative z-10 w-full flex items-center justify-between p-4 text-xs font-dragon text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
        <div className="flex items-center gap-2">
          <span>V0.0.0</span>
          <span>•</span>
          <span>ngocrong-banweb.vercel.app</span>
        </div>

        <button
          type="button"
          onClick={() => {
            if (window.confirm("Bạn có chắc chắn muốn xóa dữ liệu nhân vật đã lưu trên thiết bị?")) {
              sound.playPunch();
              onClearData();
            }
          }}
          className="text-yellow-300 hover:text-yellow-100 hover:underline transition font-bold"
        >
          Xóa dữ liệu
        </button>
      </div>
    </div>
  );
};
