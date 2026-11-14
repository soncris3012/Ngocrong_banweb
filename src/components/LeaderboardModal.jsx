import React, { useState, useEffect } from 'react';
import { X, Trophy, Sparkles, RefreshCw, Globe } from 'lucide-react';
import { fetchLeaderboard, isSupabaseConfigured } from '../services/supabase';
import { PLANETS } from '../game/constants';

export const LeaderboardModal = ({ onClose }) => {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);
  const isConnected = isSupabaseConfigured();

  const loadRank = async () => {
    setLoading(true);
    const data = await fetchLeaderboard();
    setRanking(data);
    setLoading(false);
  };

  useEffect(() => {
    loadRank();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 border-2 border-yellow-500 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-yellow-700 via-amber-800 to-yellow-900 px-5 py-3.5 flex justify-between items-center border-b border-yellow-600/50">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-300" />
            <h3 className="font-bold text-lg text-white">Bảng Xếp Hạng Cao Thủ Ngọc Rồng</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-black/30 text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STATUS BAR */}
        <div className="bg-gray-950/80 px-5 py-2.5 border-b border-gray-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className={isConnected ? "text-emerald-400 font-semibold" : "text-amber-400 font-semibold"}>
              {isConnected ? "● Đang đồng bộ trực tiếp từ Supabase Realtime" : "○ Chế độ Bảng xếp hạng Cục bộ (Local Demo)"}
            </span>
          </div>
          <button 
            onClick={loadRank}
            className="flex items-center gap-1 text-gray-300 hover:text-white transition"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} /> Làm mới
          </button>
        </div>

        {/* DANH SÁCH XẾP HẠNG */}
        <div className="p-5 max-h-96 overflow-y-auto flex flex-col gap-2">
          {loading ? (
            <div className="py-12 text-center text-gray-400 text-sm">Đang tải bảng xếp hạng...</div>
          ) : (
            ranking.map((player, idx) => {
              const planet = PLANETS[player.planet] || PLANETS[0];
              const isTop1 = idx === 0;
              const isTop2 = idx === 1;
              const isTop3 = idx === 2;

              return (
                <div 
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-xl border transition ${
                    isTop1 
                      ? 'bg-yellow-950/40 border-yellow-500/80 shadow-lg' 
                      : isTop2 
                      ? 'bg-gray-800/80 border-gray-400/60' 
                      : isTop3 
                      ? 'bg-amber-950/30 border-amber-600/50' 
                      : 'bg-gray-800/40 border-gray-700/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Thứ hạng */}
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                      isTop1 ? 'bg-yellow-500 text-gray-950 shadow-md' :
                      isTop2 ? 'bg-gray-300 text-gray-950 shadow-md' :
                      isTop3 ? 'bg-amber-600 text-white shadow-md' :
                      'bg-gray-800 text-gray-400'
                    }`}>
                      {idx + 1}
                    </div>

                    {/* Tên & Hành tinh */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5 font-bold text-sm text-white">
                        <span>{player.name}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded bg-gray-950 border border-gray-700 text-gray-300">
                          {planet.symbol} {planet.name}
                        </span>
                      </div>
                      <div className="text-[11px] text-gray-400">
                        ATK: {player.attack.toLocaleString()} | HP: {player.max_hp?.toLocaleString() || '100,000'}
                      </div>
                    </div>
                  </div>

                  {/* Sức mạnh */}
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Sức mạnh</div>
                    <div className="text-sm font-bold text-yellow-400 flex items-center gap-1 justify-end">
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      {player.power.toLocaleString()}
                    </div>
                  </div>
                </div>
              );
            })
          )}
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
