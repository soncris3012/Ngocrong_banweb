import React, { useState, useEffect } from 'react';
import { sound } from '../../game/audio';
import { getServerConfig } from '../../game/dataNroArchive';

export const MainMenu = ({
  savedCharacter,
  currentServer,
  onEnterGame,
  onOpenCharacterCreate,
  onOpenLogin,
  onOpenServerSelect
}) => {
  const [scrollCay, setScrollCay] = useState(0);
  const [scrollThap, setScrollThap] = useState(0);
  const [pressedIdx, setPressedIdx] = useState(-1);

  // Cuộn mượt 2 lớp đồi cây (-30px/s) & trụ đá cỏ (-60px/s) chuẩn ManHinhMenu.java (1020x610)
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const loop = (time) => {
      const dt = Math.min(0.05, (time - lastTime) / 1000);
      lastTime = time;

      setScrollCay((prev) => {
        const next = prev - 30 * dt;
        return next <= -340 ? next + 340 : next;
      });
      setScrollThap((prev) => {
        const next = prev - 60 * dt;
        return next <= -340 ? next + 340 : next;
      });

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  const hasCharacter = Boolean(savedCharacter && savedCharacter.name);

  const svCfg = getServerConfig(currentServer);
  const serverLabel = `Máy chủ: ${svCfg.name}`;

  const buttons = hasCharacter
    ? [
        { label: `TK. ${savedCharacter.name}`, onClick: onEnterGame, bottom: 320 },
        { label: 'Chơi mới', onClick: onOpenCharacterCreate, bottom: 255 },
        { label: 'Đổi tài khoản', onClick: onOpenLogin, bottom: 190 },
        { label: serverLabel, onClick: onOpenServerSelect, bottom: 125 }
      ]
    : [
        { label: 'Chơi mới', onClick: onOpenCharacterCreate, bottom: 320 },
        { label: 'Đổi tài khoản', onClick: onOpenLogin, bottom: 255 },
        { label: serverLabel, onClick: onOpenServerSelect, bottom: 190 }
      ];

  return (
    <div className="absolute inset-0 z-30 w-[1020px] h-[610px] overflow-hidden select-none bg-[#175e1c]">
      {/* 1. PARALLAX 5 LỚP TỌA ĐỘ GỐC 100% TỪ ManHinhMenu.java (1020x610) — KHÔNG LỘ DẢI XANH DƯỚI ĐÁY */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Bầu trời trên cùng: rect(0, 460, 1020, 150) */}
        <div
          className="absolute left-0 w-[1020px]"
          style={{ bottom: '310px', height: '300px', backgroundColor: '#19b0f8' }}
        />

        {/* Sky mây: y=310, w=255, h=150 */}
        <div
          className="absolute left-0 w-[1020px]"
          style={{
            bottom: '310px',
            height: '150px',
            backgroundImage: `url('/assets/hud/giaodienngoai/traidat/sky_traidat.png')`,
            backgroundSize: '255px 150px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Núi xa: y=310, w=255, h=150 */}
        <div
          className="absolute left-0 w-[1020px]"
          style={{
            bottom: '310px',
            height: '150px',
            backgroundImage: `url('/assets/hud/giaodienngoai/traidat/nuixa_traidat.png')`,
            backgroundSize: '255px 150px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Dãy núi xanh giữa: y=280, w=510, h=170 */}
        <div
          className="absolute left-0 w-[1020px]"
          style={{
            bottom: '280px',
            height: '170px',
            backgroundImage: `url('/assets/hud/giaodienngoai/traidat/nui_traidat.png')`,
            backgroundSize: '510px 170px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Đồi cây cuộn chậm: y=140, w=340, h=220 */}
        <div
          className="absolute left-0 w-[1700px]"
          style={{
            bottom: '140px',
            height: '220px',
            backgroundImage: `url('/assets/hud/giaodienngoai/traidat/nuicay_traidat.png')`,
            backgroundSize: '340px 220px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'repeat-x',
            transform: `translate3d(${scrollCay}px, 0, 0)`
          }}
        />

        {/* Trụ đá & thảm cỏ chạm sát đáy y=0: w=340, h=280 */}
        <div
          className="absolute left-0 bottom-0 w-[1700px]"
          style={{
            height: '280px',
            backgroundImage: `url('/assets/hud/giaodienngoai/traidat/nuithap_traidat.png')`,
            backgroundSize: '340px 280px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'repeat-x',
            transform: `translate3d(${scrollThap}px, 0, 0)`
          }}
        />
      </div>

      {/* 2. LOGO CHÚ BÉ RỒNG ONLINE — Tọa độ gốc batch.draw(logo, 355, 360, 320, 200) */}
      <img
        src="/assets/hud/giaodienngoai/chung/chuberong.png"
        alt="Chú Bé Rồng Online"
        className="absolute z-10 pointer-events-none object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.65)]"
        style={{
          left: '355px',
          bottom: '360px',
          width: '320px',
          height: '200px'
        }}
      />

      {/* 3. CỤM NÚT GỖ ĐĂNG NHẬP — Tọa độ gốc batch.draw(tex, 352, ys[i], 325, 50) */}
      {buttons.map((btn, idx) => {
        const isActive = pressedIdx === idx;
        return (
          <button
            key={btn.label}
            type="button"
            onPointerDown={() => setPressedIdx(idx)}
            onPointerUp={() => setPressedIdx(-1)}
            onPointerLeave={() => setPressedIdx(-1)}
            onClick={() => {
              sound.playPunch();
              btn.onClick();
            }}
            className="absolute z-20 flex items-center justify-center transition-transform active:scale-[0.98]"
            style={{
              left: '352px',
              bottom: `${btn.bottom}px`,
              width: '325px',
              height: '50px'
            }}
          >
            <img
              src={`/assets/hud/giaodienngoai/chung/${isActive ? 'nutclick.png' : 'nutdangnhap2.png'}`}
              alt=""
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            <span className="relative z-10 font-dragon text-[#532905] text-[15px] font-bold">
              {btn.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
