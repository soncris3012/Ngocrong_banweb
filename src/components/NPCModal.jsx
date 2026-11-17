import React, { useState } from 'react';
import { X, Sparkles, Heart, Zap, Swords, Shield, Award } from 'lucide-react';
import { sound } from '../game/audio';

export const NPCModal = ({ npc, player, onClose, onUpdatePlayer }) => {
  const [activeTab, setActiveTab] = useState('talk'); // 'talk', 'upgrade'

  if (!npc) return null;

  // Nâng cấp chỉ số bằng Tiềm Năng
  const upgradeStat = (statType, cost, gain) => {
    if (player.potential < cost) {
      alert('Không đủ tiềm năng để nâng cấp!');
      return;
    }

    const updated = { ...player };
    updated.potential -= cost;

    if (statType === 'hp') {
      updated.maxHp += gain;
      updated.hp += gain;
    } else if (statType === 'ki') {
      updated.maxKi += gain;
      updated.ki += gain;
    } else if (statType === 'attack') {
      updated.attack += gain;
    } else if (statType === 'defense') {
      updated.defense += gain;
    } else if (statType === 'crit') {
      updated.crit += gain;
    }

    // Tăng sức mạnh tương ứng
    updated.power += cost;

    sound.playHeal();
    onUpdatePlayer(updated);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 border-2 border-yellow-500 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* MODAL HEADER */}
        <div className="bg-gradient-to-r from-yellow-700 to-amber-900 px-5 py-3.5 flex justify-between items-center border-b border-yellow-600/50">
          <div className="flex items-center gap-2">
            <span className="text-2xl">👴</span>
            <h3 className="font-bold text-lg text-yellow-200">{npc.name}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-black/30 text-white/80 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* DIALOG & TABS */}
        <div className="p-5 flex flex-col gap-4">
          {/* Lời thoại NPC */}
          <div className="bg-gray-800/90 border border-yellow-500/30 rounded-xl p-3.5 text-sm text-yellow-100 italic leading-relaxed">
            {npc.type === 'gohan' && (
              <>
                "Chào cháu yêu quý! Ta là Ông Gôhan. Ở Làng Aru này cháu hãy chăm chỉ đấm vào các Mộc Nhân và hái Đậu Thần Karin để tích lũy sức mạnh và tiềm năng võ thuật!"
              </>
            )}
            {(npc.type === 'kame' || npc.type === 'thay_hieu') && (
              <>
                "Chào con! Ta là Thầy Hiếu - Đại võ sư Làng Aru. Hãy dùng điểm <b>Tiềm Năng</b> kiếm được từ việc rèn luyện nắm đấm và hạ gục Mộc Nhân để nâng cao thể lực và sức đánh!"
              </>
            )}
            {npc.type === 'huykhoi' && (
              <>
                "Chào chiến binh trẻ tuổi! Ta là Huy Khôi - Hộ vệ tối cao Làng Aru. Hãy trang bị đầy đủ áo giáp, găng tay và học các chiêu thức tối thượng để chuẩn bị sang Đảo Kame!"
              </>
            )}
            {npc.type === 'hatmit' && (
              <>
                "Bà Hạt Mít đây! Con cần tinh chế ngọc rồng, mở khóa sức mạnh tiềm tàng hay giao dịch thỏi vàng thì cứ nói ta nhé."
              </>
            )}
            {npc.type === 'karin' && (
              <>
                "Thần Mèo Karin trên Tháp Đậu Thần đây. Hãy nhớ chăm sóc và thu hoạch <b>Cây Đậu Thần</b> dưới chân tháp thường xuyên để luôn sung mãn trong chiến đấu!"
              </>
            )}
            {npc.type === 'santa' && (
              <>
                "Santa xin chào hiệp sĩ! Ta có rất nhiều trang bị, rada và đồ quý giá giúp con tăng sức mạnh vượt trội."
              </>
            )}
            {npc.type === 'turtle' && (
              <>
                "Chào đại hiệp! Lão rùa ba ba đây. Sư phụ Quy Lão Kame đang đợi người ở phía trước bãi biển Đảo Kame, hãy cẩn thận lũ Cua Bọc Thép và sát thủ Tàu Pảy Pảy nhé!"
              </>
            )}
            {npc.type === 'guru' && (
              <>
                "Ta là Đại Trưởng Lão Guru của hành tinh Namếc. Hãy giữ gìn hòa bình vũ trụ, thanh trừng bọn Quái Đá Hắc Ám và Khủng Long Bạo Chúa ở Rừng Nấm!"
              </>
            )}
          </div>

          {/* TAB CHUYỂN ĐỔI */}
          <div className="flex border-b border-gray-700">
            <button 
              onClick={() => setActiveTab('talk')}
              className={`py-2 px-4 text-xs font-bold transition border-b-2 ${
                activeTab === 'talk' ? 'border-yellow-400 text-yellow-400' : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              Học Võ & Chỉ Dẫn
            </button>
            <button 
              onClick={() => setActiveTab('upgrade')}
              className={`py-2 px-4 text-xs font-bold transition border-b-2 flex items-center gap-1 ${
                activeTab === 'upgrade' ? 'border-yellow-400 text-yellow-400' : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Nâng Cấp Tiềm Năng
            </button>
          </div>

          {/* TAB NÂNG CẤP TIỀM NĂNG */}
          {activeTab === 'upgrade' ? (
            <div className="flex flex-col gap-2.5 max-h-72 overflow-y-auto pr-1">
              <div className="text-xs text-cyan-300 font-semibold mb-1">
                Tiềm năng khả dụng: <span className="text-amber-300 text-sm font-bold">{player.potential.toLocaleString()}</span>
              </div>

              {/* +100 HP */}
              <div className="flex items-center justify-between bg-gray-800/80 p-2.5 rounded-xl border border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-red-950 text-red-400">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">+100 Máu (HP)</div>
                    <div className="text-[11px] text-gray-400">Hiện tại: {player.maxHp}</div>
                  </div>
                </div>
                <button 
                  onClick={() => upgradeStat('hp', 200, 100)}
                  disabled={player.potential < 200}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:pointer-events-none text-white transition shadow"
                >
                  200 TN
                </button>
              </div>

              {/* +100 KI */}
              <div className="flex items-center justify-between bg-gray-800/80 p-2.5 rounded-xl border border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-blue-950 text-blue-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">+100 Nội Lực (KI)</div>
                    <div className="text-[11px] text-gray-400">Hiện tại: {player.maxKi}</div>
                  </div>
                </div>
                <button 
                  onClick={() => upgradeStat('ki', 200, 100)}
                  disabled={player.potential < 200}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:pointer-events-none text-white transition shadow"
                >
                  200 TN
                </button>
              </div>

              {/* +10 Sức Đánh */}
              <div className="flex items-center justify-between bg-gray-800/80 p-2.5 rounded-xl border border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-yellow-950 text-yellow-400">
                    <Swords className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">+10 Sức Đánh (ATK)</div>
                    <div className="text-[11px] text-gray-400">Hiện tại: {player.attack}</div>
                  </div>
                </div>
                <button 
                  onClick={() => upgradeStat('attack', 500, 10)}
                  disabled={player.potential < 500}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:pointer-events-none text-white transition shadow"
                >
                  500 TN
                </button>
              </div>

              {/* +5 Giáp */}
              <div className="flex items-center justify-between bg-gray-800/80 p-2.5 rounded-xl border border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-purple-950 text-purple-400">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">+5 Giáp Hộ Thân</div>
                    <div className="text-[11px] text-gray-400">Hiện tại: {player.defense}</div>
                  </div>
                </div>
                <button 
                  onClick={() => upgradeStat('defense', 600, 5)}
                  disabled={player.potential < 600}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:pointer-events-none text-white transition shadow"
                >
                  600 TN
                </button>
              </div>

              {/* +1% Chí Mạng */}
              <div className="flex items-center justify-between bg-gray-800/80 p-2.5 rounded-xl border border-gray-700">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-red-950 text-amber-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">+1% Chí Mạng (CRIT)</div>
                    <div className="text-[11px] text-gray-400">Hiện tại: {player.crit}%</div>
                  </div>
                </div>
                <button 
                  onClick={() => upgradeStat('crit', 1000, 1)}
                  disabled={player.potential < 1000}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:pointer-events-none text-white transition shadow"
                >
                  1000 TN
                </button>
              </div>
            </div>
          ) : (
            <div className="text-xs text-gray-300 space-y-2">
              <p>• <b>Chưởng Kamehameha / Masenko:</b> Tốn 100 KI, phóng tia năng lượng xuyên thấu toàn màn hình tiêu diệt toàn bộ quái vật.</p>
              <p>• <b>Tụ Ki (Phím L):</b> Đứng yên gồng nội lực để nạp đầy thanh KI trong chớp mắt.</p>
              <p>• <b>Đậu Thần Karin:</b> Phục hồi 100% sinh mệnh và nội lực ngay lập tức khi khẩn cấp.</p>
              <p>• <b>Cổng dịch chuyển:</b> Chạy sang rìa màn hình để di chuyển giữa các bản đồ (Làng Aru ➜ Đảo Kame ➜ Rừng Nấm).</p>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="p-4 bg-gray-950 border-t border-gray-800 flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-gray-800 hover:bg-gray-700 text-white transition"
          >
            Đóng Lại
          </button>
        </div>
      </div>
    </div>
  );
};
