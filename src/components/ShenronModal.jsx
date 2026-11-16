import React from 'react';
import { X, Sparkles, Coins, Diamond, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../game/audio';

export const ShenronModal = ({ player, onClose, onGrantWish }) => {
  const chooseWish = (type) => {
    sound.playSuperSaiyan();
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.4 } });

    const updated = { ...player };
    // Tiêu thụ 7 viên ngọc sau khi ước
    updated.dragonBalls = [false, false, false, false, false, false, false];

    if (type === 'gold') {
      updated.gold += 500000;
      alert('Rồng Thần Shenron đã ban cho bạn 500,000 Vàng!');
    } else if (type === 'gem') {
      updated.gem += 1000;
      alert('Rồng Thần Shenron đã ban cho bạn 1,000 Ngọc Xanh!');
    } else if (type === 'power') {
      updated.power += 500000;
      updated.potential += 500000;
      alert('Rồng Thần Shenron đã tăng cho bạn 500,000 Sức Mạnh và Tiềm Năng!');
    }

    onGrantWish(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-gradient-to-b from-gray-950 via-green-950 to-gray-950 border-4 border-yellow-500 rounded-3xl w-full max-w-xl overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.5)] flex flex-col text-center p-6 relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-800 text-gray-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex justify-center items-center gap-1.5 my-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <img 
              key={i} 
              src={`/assets/vatpham/vatphamgame/ngocrong/nr${i + 1}s.png`} 
              alt={`${i + 1} sao`} 
              className="w-8 h-8 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)] animate-bounce"
              style={{ animationDelay: `${i * 100}ms` }}
            />
          ))}
        </div>

        <h2 className="font-pixel text-yellow-400 text-lg sm:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] mt-2">
          🐉 RỒNG THẦN SHENRON XUẤT HIỆN! 🐉
        </h2>

        <p className="text-emerald-300 text-xs sm:text-sm italic mt-2 px-4 leading-relaxed font-semibold">
          "Hỡi chiến binh quả cảm đã tập hợp đủ 7 Viên Ngọc Rồng! Hãy nói ra 1 điều ước của ngươi, ta sẽ biến nó thành hiện thực ngay lập tức!"
        </p>

        {/* 3 ĐIỀU ƯỚC */}
        <div className="flex flex-col gap-3 mt-6">
          <button 
            onClick={() => chooseWish('gold')}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-yellow-700 to-amber-900 border-2 border-yellow-400 hover:scale-[1.02] active:scale-95 transition shadow-xl text-left"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">🪙</span>
              <div>
                <div className="font-bold text-sm text-yellow-200">Điều ước 1: Tiền Tài Vô Lượng</div>
                <div className="text-[11px] text-gray-200">Nhận ngay 500,000 Vàng để mua sắm trang bị</div>
              </div>
            </div>
            <Coins className="w-5 h-5 text-yellow-400" />
          </button>

          <button 
            onClick={() => chooseWish('gem')}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-cyan-800 to-blue-950 border-2 border-cyan-400 hover:scale-[1.02] active:scale-95 transition shadow-xl text-left"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">💎</span>
              <div>
                <div className="font-bold text-sm text-cyan-200">Điều ước 2: Kho Báu Ngọc Xanh</div>
                <div className="text-[11px] text-gray-200">Nhận ngay 1,000 Ngọc Xanh quý giá</div>
              </div>
            </div>
            <Diamond className="w-5 h-5 text-cyan-400" />
          </button>

          <button 
            onClick={() => chooseWish('power')}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-red-800 to-rose-950 border-2 border-rose-400 hover:scale-[1.02] active:scale-95 transition shadow-xl text-left"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">⚡</span>
              <div>
                <div className="font-bold text-sm text-rose-200">Điều ước 3: Đột Phá Sức Mạnh Vũ Trụ</div>
                <div className="text-[11px] text-gray-200">Tăng ngay 500,000 Sức Mạnh & 500,000 Tiềm Năng</div>
              </div>
            </div>
            <Sparkles className="w-5 h-5 text-rose-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
