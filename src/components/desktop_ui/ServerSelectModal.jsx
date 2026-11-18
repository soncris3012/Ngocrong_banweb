import React, { useState } from 'react';
import { sound } from '../../game/audio';
import { DATANRO_SERVERS, getServerConfig } from '../../game/dataNroArchive';

export const ServerSelectModal = ({ currentServer, onSelectServer, onClose }) => {
  const [tabKey, setTabKey] = useState('TEAMOBI_STD'); // 'TEAMOBI_STD' | 'TEAMOBI_SUPER' | 'COMMUNITY'
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const tabs = [
    {
      key: 'TEAMOBI_STD',
      label: 'TeaMobi Vũ Trụ',
      desc: '12 Vũ trụ chuẩn gốc TeaMobi từ DataNRO (Vũ trụ 1-7 gốc, Liên Vũ Trụ 8-9-10, Vũ trụ 11-14 x2 TNSM).',
      servers: DATANRO_SERVERS.filter(
        (s) => s.publisher === 'TeaMobi' && !String(s.code).startsWith('Super') && s.code !== 'Universe1' && s.code !== 'Naga'
      )
    },
    {
      key: 'TEAMOBI_SUPER',
      label: 'Siêu Cấp & Quốc Tế',
      desc: 'Cụm máy chủ Siêu Cấp 1-3 (x3 TNSM), Universe 1 (World) & Naga (Đông Nam Á) trích xuất từ DataNRO.',
      servers: DATANRO_SERVERS.filter(
        (s) => String(s.code).startsWith('Super') || s.code === 'Universe1' || s.code === 'Naga'
      )
    },
    {
      key: 'COMMUNITY',
      label: 'Phòng Anh Em & Cộng Đồng',
      desc: 'Máy chủ VIP Phòng Anh Em (Sơn•Quyết•Bảo•Hùng•Đạt•Khánh•Ba Chíp x12 TNSM) cùng HSNR, Blue & ILoveNRO!',
      servers: DATANRO_SERVERS.filter((s) => s.publisher !== 'TeaMobi')
    }
  ];

  const activeTab = tabs.find((t) => t.key === tabKey) || tabs[0];
  const currentCfg = getServerConfig(currentServer);

  const handleSelect = (serverObj) => {
    sound.playPunch();
    onSelectServer(serverObj.id);
    onClose();
  };

  return (
    <div className="absolute inset-0 z-50 bg-black/75 flex items-center justify-center p-3 select-none">
      <div
        className="relative w-[760px] h-[490px] rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center justify-between p-4 border border-amber-900/60"
        style={{
          backgroundImage: `url('/assets/hud/giaodienngoai/chung/formmaychu.jpg')`,
          backgroundSize: '100% 100%',
          imageRendering: 'pixelated'
        }}
      >
        {/* HEADER */}
        <div className="relative -mt-1 w-[280px] h-[44px] flex items-center justify-center shadow-md">
          <img
            src="/assets/hud/giaodienngoai/chung/maychubutton.png"
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none"
          />
          <span className="relative z-10 font-dragon text-[#532905] text-sm font-bold drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
            Danh Sách 25 Máy Chủ DataNRO
          </span>
        </div>

        {/* BODY */}
        <div className="w-full flex-1 flex flex-row gap-4 mt-2 px-2 overflow-hidden">
          {/* CỘT TRÁI: 3 CỤM MÁY CHỦ */}
          <div className="w-[225px] flex flex-col gap-2">
            {tabs.map((t) => {
              const active = tabKey === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => {
                    setTabKey(t.key);
                    sound.playPunch();
                  }}
                  className="relative w-full h-[42px] flex items-center justify-center transition active:scale-95"
                >
                  <img
                    src={`/assets/hud/giaodienngoai/chung/${active ? 'maychuclickbutton.png' : 'maychubutton.png'}`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                  />
                  <span className="relative z-10 font-dragon text-[#532905] text-xs font-bold px-2 truncate">
                    {t.label}
                  </span>
                </button>
              );
            })}

            <div className="mt-1 bg-black/55 border border-amber-950/50 rounded-xl p-3 text-[11px] font-dragon leading-relaxed text-[#fff4dc] shadow-inner">
              <p className="font-bold text-yellow-300 mb-1">
                Đang chọn: {currentCfg.name} (x{currentCfg.expRate} TNSM)
              </p>
              <p>{activeTab.desc}</p>
            </div>
          </div>

          {/* CỘT PHẢI: LƯỚI MÁY CHỦ */}
          <div className="flex-1 bg-black/30 rounded-xl border border-amber-900/40 p-3 overflow-y-auto">
            <div className="grid grid-cols-3 gap-x-3 gap-y-2.5 w-full">
              {activeTab.servers.map((sv) => {
                const isCurrent = String(currentServer) === String(sv.id);
                const isHovered = hoveredBtn === sv.code;
                return (
                  <button
                    key={sv.code}
                    type="button"
                    onMouseEnter={() => setHoveredBtn(sv.code)}
                    onMouseLeave={() => setHoveredBtn(null)}
                    onClick={() => handleSelect(sv)}
                    className="relative w-full h-[48px] flex flex-col items-center justify-center transition active:scale-95"
                  >
                    <img
                      src={`/assets/hud/giaodienngoai/chung/${isCurrent || isHovered ? 'nutclick2.png' : 'nutdangnhap3.png'}`}
                      alt=""
                      className="absolute inset-0 w-full h-full object-fill pointer-events-none"
                    />
                    <span className="relative z-10 font-dragon text-[#532905] text-[11px] font-bold leading-tight">
                      {sv.name}
                    </span>
                    <span className="relative z-10 font-dragon text-[#7c2d12] text-[9.5px] font-bold">
                      {sv.tag}
                    </span>
                    {isCurrent && (
                      <span className="absolute -top-1 -right-1 z-20 bg-green-600 text-white text-[8.5px] px-1.5 py-0.5 rounded-full font-bold shadow">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="w-full flex items-center justify-between pt-2 px-2 border-t border-amber-950/40 text-[11px] font-dragon text-[#532905]">
          <span className="font-bold">
            Nguồn dữ liệu máy chủ: TeaMobi • HSNR • Blue • ILoveNRO • Phòng Anh Em
          </span>

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
