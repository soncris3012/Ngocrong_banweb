import React from 'react';
import { X, Package, Shield, Heart, Zap, Swords, Award, Sparkles } from 'lucide-react';
import { PLANETS } from '../game/constants';

export const InventoryModal = ({ player, onClose }) => {
  const planet = PLANETS[player.planet] || PLANETS[0];
  const items = player.inventory || [];

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 border-2 border-amber-500 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-amber-700 to-yellow-900 px-5 py-3.5 flex justify-between items-center border-b border-amber-600/50">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-amber-300" />
            <h3 className="font-bold text-lg text-white">Hành Trang & Thông Tin Chiến Binh</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-black/30 text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* NỘI DUNG CHÍNH */}
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5 max-h-[75vh] overflow-y-auto">
          {/* CỘT TRÁI: BẢNG CHỈ SỐ CHI TIẾT */}
          <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-700">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold border-2 border-white/20"
                style={{ backgroundColor: planet.primaryColor }}
              >
                {planet.symbol}
              </div>
              <div>
                <h4 className="font-bold text-white text-base">{player.name}</h4>
                <div className="text-xs text-yellow-400 font-semibold">Hành tinh: {planet.name}</div>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center bg-gray-900/60 p-2 rounded-lg">
                <span className="text-gray-300 flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-amber-400" /> Sức Mạnh:</span>
                <span className="font-bold text-amber-300">{player.power.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-900/60 p-2 rounded-lg">
                <span className="text-gray-300 flex items-center gap-1.5"><Award className="w-4 h-4 text-cyan-400" /> Tiềm Năng:</span>
                <span className="font-bold text-cyan-300">{player.potential.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-900/60 p-2 rounded-lg">
                <span className="text-gray-300 flex items-center gap-1.5"><Heart className="w-4 h-4 text-red-400" /> Sinh Mệnh (HP):</span>
                <span className="font-bold text-red-300">{player.maxHp.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-900/60 p-2 rounded-lg">
                <span className="text-gray-300 flex items-center gap-1.5"><Zap className="w-4 h-4 text-blue-400" /> Nội Lực (KI):</span>
                <span className="font-bold text-blue-300">{player.maxKi.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-900/60 p-2 rounded-lg">
                <span className="text-gray-300 flex items-center gap-1.5"><Swords className="w-4 h-4 text-yellow-400" /> Sức Đánh (ATK):</span>
                <span className="font-bold text-yellow-300">{player.attack}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-900/60 p-2 rounded-lg">
                <span className="text-gray-300 flex items-center gap-1.5"><Shield className="w-4 h-4 text-purple-400" /> Giáp Bảo Vệ:</span>
                <span className="font-bold text-purple-300">{player.defense}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-900/60 p-2 rounded-lg">
                <span className="text-gray-300 flex items-center gap-1.5"><Award className="w-4 h-4 text-rose-400" /> Tỷ Lệ Chí Mạng:</span>
                <span className="font-bold text-rose-300">{player.crit}%</span>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: TÚI ĐỒ (INVENTORY SLOTS) */}
          <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center pb-2 border-b border-gray-700">
              <span className="font-bold text-sm text-yellow-400">Túi Đồ ({items.length}/20)</span>
              <span className="text-[11px] text-green-400 font-semibold">🌱 Đậu Thần: {player.senzuCount}</span>
            </div>

            {/* Ô trang bị */}
            <div className="grid grid-cols-4 gap-2.5">
              {Array.from({ length: 16 }).map((_, idx) => {
                const it = items[idx];
                return (
                  <div 
                    key={idx}
                    className="w-14 h-14 bg-gray-950 border border-gray-700 rounded-xl flex items-center justify-center relative hover:border-amber-400 transition cursor-pointer group shadow-inner"
                  >
                    {it ? (
                      <>
                        <span className="text-2xl">{it.icon}</span>
                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-1 hidden group-hover:flex flex-col bg-gray-900 text-[10px] text-white p-2 rounded border border-yellow-500 z-20 w-32 shadow-xl">
                          <span className="font-bold text-yellow-300">{it.name}</span>
                          <span className="text-gray-300">{it.desc}</span>
                        </div>
                      </>
                    ) : (
                      <span className="text-[10px] text-gray-700 font-mono">{idx + 1}</span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-[11px] text-gray-400 italic bg-gray-900/40 p-2.5 rounded-lg border border-gray-700/50 mt-auto">
              💡 Mẹo: Mua thêm trang bị tại Cửa Hàng Santa để tăng các chỉ số Sức Đánh, HP và Tỷ Lệ Chí Mạng.
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-4 bg-gray-950 border-t border-gray-800 flex justify-end">
          <button onClick={onClose} className="px-5 py-2 rounded-xl text-xs font-bold bg-gray-800 hover:bg-gray-700 text-white transition">
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
