import React from 'react';
import { 
  Heart, Zap, Shield, Swords, Sparkles, 
  Coins, Diamond, Volume2, VolumeX, Trophy, 
  Database, Package, ShoppingBag, ArrowRight
} from 'lucide-react';
import { PLANETS, QUESTS } from '../game/constants';
import { sound } from '../game/audio';

export const HUD = ({ 
  player, 
  onOpenInventory, 
  onOpenShop, 
  onOpenLeaderboard, 
  onOpenSupabase, 
  onTriggerAction,
  engineRef 
}) => {
  const [isMuted, setIsMuted] = React.useState(false);
  const planet = PLANETS[player.planet] || PLANETS[0];
  const curQuest = QUESTS.find(q => q.id === player.questId);

  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const hpPercent = Math.max(0, Math.min(100, (player.hp / player.maxHp) * 100));
  const kiPercent = Math.max(0, Math.min(100, (player.ki / player.maxKi) * 100));

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-3 select-none">
      {/* HEADER / TOP BAR */}
      <div className="flex justify-between items-start w-full">
        {/* THÔNG TIN NHÂN VẬT & CHỈ SỐ */}
        <div className="pointer-events-auto bg-gray-900/90 backdrop-blur border-2 border-yellow-500/70 rounded-xl p-2.5 shadow-2xl flex items-center gap-3">
          {/* Avatar Hành Tinh */}
          <div 
            className="w-14 h-14 rounded-lg flex flex-col items-center justify-center font-bold text-2xl border-2 border-white/20 shadow-inner"
            style={{ backgroundColor: planet.primaryColor }}
          >
            <span>{planet.symbol}</span>
            <span className="text-[9px] font-pixel text-white uppercase mt-0.5">{planet.name}</span>
          </div>

          {/* Thanh HP & KI & Sức Mạnh */}
          <div className="flex flex-col gap-1 w-44 sm:w-56">
            <div className="flex justify-between items-center text-xs font-bold text-yellow-400">
              <span className="truncate max-w-[120px]">{player.name}</span>
              <span className="text-[10px] text-gray-300 font-pixel">Map: {player.currentMapName || 'Làng Aru'}</span>
            </div>

            {/* Thanh Máu HP */}
            <div className="relative w-full h-4 bg-gray-950 rounded-full overflow-hidden border border-red-900/60">
              <div 
                className="h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-150"
                style={{ width: `${hpPercent}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white drop-shadow">
                HP: {Math.round(player.hp)} / {player.maxHp}
              </span>
            </div>

            {/* Thanh Nội Lực KI */}
            <div className="relative w-full h-4 bg-gray-950 rounded-full overflow-hidden border border-blue-900/60">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-150"
                style={{ width: `${kiPercent}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white drop-shadow">
                KI: {Math.round(player.ki)} / {player.maxKi}
              </span>
            </div>

            {/* Sức mạnh & Tiềm năng */}
            <div className="flex justify-between text-[11px] font-semibold text-gray-200 mt-0.5">
              <span className="text-amber-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> SM: {player.power.toLocaleString()}
              </span>
              <span className="text-cyan-300">TN: {player.potential.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* TRACKER NHIỆM VỤ HIỆN TẠI (CENTER) */}
        {curQuest && (
          <div className="pointer-events-auto hidden md:flex flex-col items-center bg-gray-900/85 backdrop-blur border border-amber-500/50 rounded-xl px-4 py-2 shadow-lg max-w-md text-center">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">
              📜 Nhiệm Vụ: {curQuest.title}
            </span>
            <span className="text-[11px] text-gray-300 mt-0.5">
              {curQuest.desc}
            </span>
            <div className="flex items-center gap-2 mt-1 text-[11px] font-bold text-green-400">
              <span>Tiến độ: {player.questProgress} / {curQuest.targetCount}</span>
              {player.questProgress >= curQuest.targetCount && (
                <span className="text-yellow-300 animate-pulse">✓ Xong!</span>
              )}
            </div>
          </div>
        )}

        {/* NÚT TÍNH NĂNG & TIỀN TỆ (TOP RIGHT) */}
        <div className="pointer-events-auto flex flex-col items-end gap-2">
          {/* Vàng & Ngọc */}
          <div className="bg-gray-900/90 backdrop-blur border border-yellow-500/50 rounded-xl px-3 py-1.5 flex items-center gap-3 text-xs font-bold shadow-lg">
            <div className="flex items-center gap-1 text-yellow-400">
              <Coins className="w-4 h-4" />
              <span>{player.gold.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1 text-cyan-400">
              <Diamond className="w-4 h-4" />
              <span>{player.gem.toLocaleString()}</span>
            </div>
            <div 
              onClick={() => engineRef.current?.eatSenzu()}
              title="Click để ăn đậu thần hồi 100% HP/KI (Phím H)"
              className="flex items-center gap-1 text-green-400 bg-green-950/60 hover:bg-green-800/60 px-2 py-0.5 rounded cursor-pointer transition border border-green-500/40"
            >
              <span>🌱</span>
              <span>{player.senzuCount}</span>
            </div>
          </div>

          {/* Danh sách nút Action */}
          <div className="flex items-center gap-1.5 bg-gray-900/80 backdrop-blur p-1 rounded-xl border border-gray-700">
            <button 
              onClick={onOpenInventory}
              title="Hành Trang & Trang Bị"
              className="p-2 rounded-lg bg-gray-800 hover:bg-amber-600 transition text-white shadow"
            >
              <Package className="w-4 h-4" />
            </button>
            <button 
              onClick={onOpenShop}
              title="Cửa Hàng Santa"
              className="p-2 rounded-lg bg-gray-800 hover:bg-red-600 transition text-white shadow"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
            <button 
              onClick={onOpenLeaderboard}
              title="Bảng Xếp Hạng Cao Thủ"
              className="p-2 rounded-lg bg-gray-800 hover:bg-yellow-600 transition text-white shadow"
            >
              <Trophy className="w-4 h-4" />
            </button>
            <button 
              onClick={onOpenSupabase}
              title="Cấu Hình Supabase Cloud Database"
              className="p-2 rounded-lg bg-gray-800 hover:bg-emerald-600 transition text-white shadow"
            >
              <Database className="w-4 h-4" />
            </button>
            <button 
              onClick={toggleSound}
              title="Bật/Tắt Âm Thanh"
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition text-white shadow"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-green-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER / BOTTOM BAR: PHÍM NÓNG & ĐIỀU KHIỂN */}
      <div className="flex justify-between items-end w-full">
        {/* MOBILE D-PAD (TRÁI / PHẢI / NHẢY / CÚI) */}
        <div className="pointer-events-auto flex md:hidden items-center gap-2 bg-gray-900/70 p-2 rounded-2xl backdrop-blur border border-white/10">
          <button 
            onTouchStart={() => { if (engineRef.current) engineRef.current.mobileControls.left = true; }}
            onTouchEnd={() => { if (engineRef.current) engineRef.current.mobileControls.left = false; }}
            onMouseDown={() => { if (engineRef.current) engineRef.current.mobileControls.left = true; }}
            onMouseUp={() => { if (engineRef.current) engineRef.current.mobileControls.left = false; }}
            className="w-12 h-12 bg-gray-800/90 active:bg-blue-600 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow"
          >
            ◀
          </button>
          <div className="flex flex-col gap-2">
            <button 
              onTouchStart={() => { if (engineRef.current) engineRef.current.mobileControls.up = true; }}
              onTouchEnd={() => { if (engineRef.current) engineRef.current.mobileControls.up = false; }}
              onMouseDown={() => { if (engineRef.current) engineRef.current.mobileControls.up = true; }}
              onMouseUp={() => { if (engineRef.current) engineRef.current.mobileControls.up = false; }}
              className="w-12 h-12 bg-gray-800/90 active:bg-blue-600 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow"
            >
              ▲
            </button>
            <button 
              onTouchStart={() => { if (engineRef.current) engineRef.current.mobileControls.down = true; }}
              onTouchEnd={() => { if (engineRef.current) engineRef.current.mobileControls.down = false; }}
              onMouseDown={() => { if (engineRef.current) engineRef.current.mobileControls.down = true; }}
              onMouseUp={() => { if (engineRef.current) engineRef.current.mobileControls.down = false; }}
              className="w-12 h-12 bg-gray-800/90 active:bg-blue-600 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow"
            >
              ▼
            </button>
          </div>
          <button 
            onTouchStart={() => { if (engineRef.current) engineRef.current.mobileControls.right = true; }}
            onTouchEnd={() => { if (engineRef.current) engineRef.current.mobileControls.right = false; }}
            onMouseDown={() => { if (engineRef.current) engineRef.current.mobileControls.right = true; }}
            onMouseUp={() => { if (engineRef.current) engineRef.current.mobileControls.right = false; }}
            className="w-12 h-12 bg-gray-800/90 active:bg-blue-600 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow"
          >
            ▶
          </button>
        </div>

        {/* THANH SKILL HOTBAR (CENTER) */}
        <div className="pointer-events-auto flex items-center gap-2 bg-gray-900/90 backdrop-blur border border-yellow-500/40 p-2 rounded-2xl shadow-2xl mx-auto">
          {/* Nút Đấm [J] */}
          <button 
            onClick={() => engineRef.current?.triggerAttack()}
            className="group relative flex flex-col items-center justify-center w-14 h-14 bg-gradient-to-b from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 active:scale-95 transition rounded-xl border-2 border-red-400/80 shadow-lg"
          >
            <span className="text-xl">🥊</span>
            <span className="text-[10px] font-bold text-white font-pixel">ĐẤM [J]</span>
          </button>

          {/* Nút Chưởng [K] */}
          <button 
            onClick={() => engineRef.current?.triggerBeam()}
            className="group relative flex flex-col items-center justify-center w-14 h-14 bg-gradient-to-b from-blue-600 to-cyan-700 hover:from-blue-500 hover:to-cyan-600 active:scale-95 transition rounded-xl border-2 border-cyan-400/80 shadow-lg"
          >
            <span className="text-xl">💥</span>
            <span className="text-[10px] font-bold text-white font-pixel truncate max-w-[50px]">{planet.signatureSkill} [K]</span>
          </button>

          {/* Nút Tụ Ki [L] */}
          <button 
            onMouseDown={() => engineRef.current?.toggleChargeKi(true)}
            onMouseUp={() => engineRef.current?.toggleChargeKi(false)}
            onTouchStart={() => engineRef.current?.toggleChargeKi(true)}
            onTouchEnd={() => engineRef.current?.toggleChargeKi(false)}
            className="group relative flex flex-col items-center justify-center w-14 h-14 bg-gradient-to-b from-amber-500 to-yellow-700 hover:from-amber-400 hover:to-yellow-600 active:scale-95 transition rounded-xl border-2 border-amber-300 shadow-lg"
          >
            <span className="text-xl">⚡</span>
            <span className="text-[10px] font-bold text-white font-pixel">TỤ KI [L]</span>
          </button>

          {/* Nút Ăn Đậu [H] */}
          <button 
            onClick={() => engineRef.current?.eatSenzu()}
            className="group relative flex flex-col items-center justify-center w-14 h-14 bg-gradient-to-b from-emerald-600 to-green-800 hover:from-emerald-500 hover:to-green-700 active:scale-95 transition rounded-xl border-2 border-green-400 shadow-lg"
          >
            <span className="text-xl">🌱</span>
            <span className="text-[10px] font-bold text-white font-pixel">ĐẬU [H]</span>
          </button>

          {/* Nút Tương Tác / Cổng [E] */}
          <button 
            onClick={() => engineRef.current?.checkInteractions()}
            className="group relative flex flex-col items-center justify-center w-14 h-14 bg-gradient-to-b from-purple-600 to-indigo-800 hover:from-purple-500 hover:to-indigo-700 active:scale-95 transition rounded-xl border-2 border-purple-400 shadow-lg"
          >
            <span className="text-xl">💬</span>
            <span className="text-[10px] font-bold text-white font-pixel">NÓI [E]</span>
          </button>
        </div>

        {/* HƯỚNG DẪN BÀN PHÍM (DESKTOP TRÊN GÓC PHẢI DƯỚI) */}
        <div className="pointer-events-auto hidden lg:flex flex-col text-[11px] bg-gray-900/80 backdrop-blur p-2.5 rounded-xl border border-gray-700 text-gray-300 leading-relaxed shadow-lg">
          <span className="font-bold text-yellow-400 mb-0.5">🎮 Phím điều khiển:</span>
          <span>• A / D hoặc ◀ ▶: Chạy</span>
          <span>• W hoặc ▲ / Space: Nhảy / Bay</span>
          <span>• S hoặc ▼: Hạ cánh</span>
          <span>• J: Đấm | K: Chưởng</span>
          <span>• L: Tụ KI | H: Ăn Đậu Karin</span>
          <span>• E: Tương tác NPC / Qua cổng</span>
        </div>
      </div>
    </div>
  );
};
