import React from 'react';
import { X, ShoppingBag, Coins, Diamond } from 'lucide-react';
import { SHOP_ITEMS } from '../game/constants';
import { sound } from '../game/audio';

export const ShopModal = ({ player, onClose, onUpdatePlayer }) => {
  const buyItem = (item) => {
    if (item.currency === 'gold' && player.gold < item.price) {
      alert('Không đủ Vàng để mua vật phẩm này!');
      return;
    }
    if (item.currency === 'gem' && player.gem < item.price) {
      alert('Không đủ Ngọc để mua vật phẩm này!');
      return;
    }

    const updated = { ...player };

    if (item.currency === 'gold') updated.gold -= item.price;
    if (item.currency === 'gem') updated.gem -= item.price;

    if (item.type === 'consumable') {
      updated.senzuCount = Math.min(20, updated.senzuCount + (item.quantity || 10));
    } else if (item.type === 'special') {
      // Đổi thỏi vàng ra 100k vàng
      updated.gold += 100000;
    } else {
      // Thêm trang bị vào inventory
      updated.inventory = [...(updated.inventory || []), { ...item, instanceId: Date.now() }];
      // Áp dụng trực tiếp chỉ số nếu trang bị
      if (item.options?.hp) {
        updated.maxHp += item.options.hp;
        updated.hp += item.options.hp;
      }
      if (item.options?.ki) {
        updated.maxKi += item.options.ki;
        updated.ki += item.options.ki;
      }
      if (item.options?.attack) updated.attack += item.options.attack;
      if (item.options?.defense) updated.defense += item.options.defense;
      if (item.options?.crit) updated.crit += item.options.crit;
      updated.power += 5000; // Mua đồ tăng thêm sức mạnh
    }

    sound.playCoin();
    onUpdatePlayer(updated);
    alert(`Đã mua thành công: ${item.name}!`);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-900 border-2 border-red-500 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* HEADER */}
        <div className="bg-gradient-to-r from-red-800 to-rose-950 px-5 py-3.5 flex justify-between items-center border-b border-red-700/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-red-300" />
            <h3 className="font-bold text-lg text-white">Cửa Hàng Santa & Thương Nhân Capsule</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-black/30 text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* TIỀN TỆ HIỆN CÓ */}
        <div className="bg-gray-950/80 px-5 py-2.5 border-b border-gray-800 flex items-center justify-between text-xs font-bold">
          <span className="text-gray-400">Số dư hiện tại:</span>
          <div className="flex items-center gap-4">
            <span className="text-yellow-400 flex items-center gap-1">
              <Coins className="w-4 h-4" /> {player.gold.toLocaleString()} Vàng
            </span>
            <span className="text-cyan-400 flex items-center gap-1">
              <Diamond className="w-4 h-4" /> {player.gem.toLocaleString()} Ngọc
            </span>
          </div>
        </div>

        {/* DANH SÁCH VẬT PHẨM */}
        <div className="p-5 max-h-96 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SHOP_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="bg-gray-800/80 border border-gray-700 hover:border-red-400/60 transition p-3 rounded-xl flex flex-col justify-between gap-2 shadow"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl p-2 bg-gray-950 rounded-lg border border-gray-700">{item.icon}</span>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-yellow-300">{item.name}</span>
                  <span className="text-[11px] text-gray-300 leading-snug mt-0.5">{item.desc}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-700/60 mt-1">
                <div className="flex items-center gap-1 text-xs font-bold">
                  {item.currency === 'gold' ? (
                    <span className="text-yellow-400 flex items-center gap-1">
                      <Coins className="w-3.5 h-3.5" /> {item.price.toLocaleString()} Vàng
                    </span>
                  ) : (
                    <span className="text-cyan-400 flex items-center gap-1">
                      <Diamond className="w-3.5 h-3.5" /> {item.price.toLocaleString()} Ngọc
                    </span>
                  )}
                </div>

                <button 
                  onClick={() => buyItem(item)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-500 text-white transition shadow active:scale-95"
                >
                  Mua Ngay
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="p-4 bg-gray-950 border-t border-gray-800 flex justify-end">
          <button onClick={onClose} className="px-5 py-2 rounded-xl text-xs font-bold bg-gray-800 hover:bg-gray-700 text-white transition">
            Đóng Cửa Hàng
          </button>
        </div>
      </div>
    </div>
  );
};
