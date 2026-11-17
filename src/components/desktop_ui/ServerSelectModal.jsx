import React, { useState } from 'react';
import { sound } from '../../game/audio';

export const ServerSelectModal = ({ currentServer, onSelectServer, onClose }) => {
  const [isAdminTab, setIsAdminTab] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const standardServers = [1, 2, 3, 4, 5, 6, 7];

  const handleSelect = (server) => {
    sound.playPunch();
    onSelectServer(server);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 select-none">
      <div 
        className="relative w-full max-w-[700px] h-[450px] rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center justify-between p-4 border border-amber-900/60"
        style={{
          backgroundImage: `url('/assets/hud/giaodienngoai/chung/formmaychu.jpg')`,
          backgroundSize: '100% 100%',
          imageRendering: 'pixelated'
        }}
      >
        {/* HEADER: CHỌN MÁY CHỦ */}
        <div className="relative -mt-2 w-[220px] h-[44px] flex items-center justify-center shadow-md">
          <img
            src="/assets/hud/giaodienngoai/chung/maychubutton.png"
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none"
          />
          <span className="relative z-10 font-dragon text-[#532905] text-base font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
            Chọn máy chủ
          </span>
        </div>

        {/* BODY CONTAINER */}
        <div className="w-full flex-1 flex flex-row gap-4 mt-3 px-3">
          {/* LEFT COLUMN: TABS & DESCRIPTION */}
          <div className="w-[220px] flex flex-col gap-2">
            {/* Tab: Tiêu Chuẩn */}
            <button
              type="button"
              onClick={() => {
                setIsAdminTab(false);
                sound.playPunch();
              }}
              className="relative w-full h-[40px] flex items-center justify-center transition active:scale-95"
            >
              <img
                src={`/assets/hud/giaodienngoai/chung/${!isAdminTab ? 'maychuclickbutton.png' : 'maychubutton.png'}`}
                alt=""
                className="absolute inset-0 w-full h-full object-fill pointer-events-none"
              />
              <span className="relative z-10 font-dragon text-[#532905] text-xs font-bold">
                Máy chủ tiêu chuẩn
              </span>
            </button>

            {/* Tab: Admin */}
            <button
              type="button"
              onClick={() => {
                setIsAdminTab(true);
                sound.playPunch();
              }}
              className="relative w-full h-[40px] flex items-center justify-center transition active:scale-95"
            >
              <img
                src={`/assets/hud/giaodienngoai/chung/${isAdminTab ? 'maychuclickbutton.png' : 'maychubutton.png'}`}
                alt=""
                className="absolute inset-0 w-full h-full object-fill pointer-events-none"
              />
              <span className="relative z-10 font-dragon text-[#532905] text-xs font-bold">
                Máy chủ admin
              </span>
            </button>

            {/* Description note */}
            <div className="mt-2 bg-black/45 border border-amber-950/40 rounded-xl p-3 text-[11px] font-dragon leading-relaxed text-[#fff4dc] shadow-inner">
              {!isAdminTab ? (
                <>
                  <p className="font-bold text-yellow-300 mb-1">Máy chủ tiêu chuẩn:</p>
                  <p>Hành trình 7 Viên Ngọc Rồng đang chờ bạn khám phá!</p>
                </>
              ) : (
                <>
                  <p className="font-bold text-yellow-300 mb-1">Máy chủ thử nghiệm:</p>
                  <p>Dành cho nhà phát triển & kiểm thử tính năng mới.</p>
                </>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: SERVER BUTTONS GRID */}
          <div className="flex-1 flex flex-col justify-start items-center bg-black/25 rounded-xl border border-amber-900/30 p-4">
            {!isAdminTab ? (
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 w-full max-w-[380px]">
                {standardServers.map(s => {
                  const isCurrent = currentServer === s;
                  const isHovered = hoveredBtn === s;
                  return (
                    <button
                      key={s}
                      type="button"
                      onMouseEnter={() => setHoveredBtn(s)}
                      onMouseLeave={() => setHoveredBtn(null)}
                      onClick={() => handleSelect(s)}
                      className="relative w-full h-[46px] flex items-center justify-center transition active:scale-95"
                    >
                      <img
                        src={`/assets/hud/giaodienngoai/chung/${(isCurrent || isHovered) ? 'nutclick2.png' : 'nutdangnhap3.png'}`}
                        alt=""
                        className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                      />
                      <span className="relative z-10 font-dragon text-[#532905] text-xs font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                        Vũ trụ {s}
                      </span>
                      {isCurrent && (
                        <span className="absolute -top-1.5 -right-1.5 z-20 bg-green-600 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold shadow">
                          Đang chọn
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full gap-3">
                <button
                  type="button"
                  onMouseEnter={() => setHoveredBtn('HAIDANG1')}
                  onMouseLeave={() => setHoveredBtn(null)}
                  onClick={() => handleSelect('HAIDANG1')}
                  className="relative w-[180px] h-[48px] flex items-center justify-center transition active:scale-95"
                >
                  <img
                    src={`/assets/hud/giaodienngoai/chung/${(currentServer === 'HAIDANG1' || hoveredBtn === 'HAIDANG1') ? 'nutclick2.png' : 'nutdangnhap3.png'}`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                  />
                  <span className="relative z-10 font-dragon text-[#532905] text-sm font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                    HAIDANG1
                  </span>
                </button>
                <span className="text-xs text-yellow-200/90 font-dragon">
                  Server tốc độ cao 60fps
                </span>
              </div>
            )}
          </div>
        </div>

        {/* FOOTER & CLOSE BUTTON */}
        <div className="w-full flex items-center justify-between pt-2 px-2 border-t border-amber-950/40 text-[11px] font-dragon text-[#532905]">
          <span className="font-bold">© 2025 Chiến Binh Rồng Thiêng | Bản Web</span>

          <button
            type="button"
            onClick={onClose}
            className="relative w-[110px] h-[36px] flex items-center justify-center transition active:scale-95"
          >
            <img
              src="/assets/hud/giaodienngoai/chung/nutdangnhap3.png"
              alt=""
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            <span className="relative z-10 font-dragon text-[#532905] text-xs font-bold">
              Đóng
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
