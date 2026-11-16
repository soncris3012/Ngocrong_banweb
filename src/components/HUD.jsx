import React from 'react';
import { 
  Sparkles, Volume2, VolumeX, Trophy, 
  Database, Package, ShoppingBag, Zap, Shield, Heart, Award
} from 'lucide-react';
import { PLANETS, QUESTS } from '../game/constants';
import { sound } from '../game/audio';

export const HUD = ({ 
  player, 
  onOpenInventory, 
  onOpenShop, 
  onOpenLeaderboard, 
  onOpenSupabase, 
  onOpenShenron,
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
  const dragonBallCount = (player.dragonBalls || []).filter(Boolean).length;

  return (
    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-2.5 sm:p-4 select-none">
      {/* ================= TOP BAR ================= */}
      <div className="flex justify-between items-start w-full">
        {/* AVATAR & THANH MÁU CHUẨN GIAO DIỆN NRO */}
        <div className="pointer-events-auto bg-gray-950/90 backdrop-blur-md border-2 border-yellow-500/80 rounded-2xl p-2.5 shadow-2xl flex items-center gap-3">
          {/* Avatar Nhân vật Thật Chuẩn NRO */}
          <div 
            className={`w-14 h-14 rounded-xl flex items-center justify-center border-2 shadow-inner relative overflow-hidden ${
              player.isSuperSaiyan ? 'border-yellow-400 ring-2 ring-yellow-400 bg-amber-900/40' : 'border-white/30 bg-gray-800/80'
            }`}
          >
            <img 
              src={
                player.planet === 2 
                  ? '/assets/nhanvat/xayda/avatar/Cađíc_base/avt.png'
                  : player.planet === 1
                  ? '/assets/nhanvat/detu/namek/avtlon.png'
                  : '/assets/nhanvat/traidat/avatar/Goku_base/avt.png'
              }
              alt={player.name}
              className="w-full h-full object-contain scale-110 translate-y-1"
            />
            {player.isSuperSaiyan && (
              <span className="absolute top-0 right-0 bg-yellow-500 text-black text-[8px] font-black px-1 rounded-bl">
                SSJ
              </span>
            )}
            {player.isSuperSaiyan && (
              <span className="absolute inset-0 bg-yellow-400/20 animate-pulse pointer-events-none" />
            )}
          </div>

          {/* Thanh HP & KI & Sức Mạnh */}
          <div className="flex flex-col gap-1 w-44 sm:w-60">
            <div className="flex justify-between items-center text-xs font-bold text-yellow-300">
              <span className="truncate max-w-[130px] flex items-center gap-1">
                {player.name}
                {player.isSuperSaiyan && <span className="text-[10px] text-yellow-400 font-pixel">[SSJ]</span>}
              </span>
              <span className="text-[10px] text-gray-300 font-mono">Map: {player.currentMapName || 'Làng Aru'}</span>
            </div>

            {/* Thanh HP Đỏ */}
            <div className="relative w-full h-4 bg-gray-900 rounded-full overflow-hidden border border-red-800 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-red-400 transition-all duration-150"
                style={{ width: `${hpPercent}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white drop-shadow font-mono">
                HP: {Math.round(player.hp)} / {player.maxHp}
              </span>
            </div>

            {/* Thanh KI Lam */}
            <div className="relative w-full h-4 bg-gray-900 rounded-full overflow-hidden border border-blue-800 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 transition-all duration-150"
                style={{ width: `${kiPercent}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white drop-shadow font-mono">
                KI: {Math.round(player.ki)} / {player.maxKi}
              </span>
            </div>

            {/* Sức mạnh & Tiềm năng */}
            <div className="flex justify-between text-[11px] font-bold text-gray-200 mt-0.5">
              <span className="text-amber-300 flex items-center gap-1 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" /> SM: {player.power.toLocaleString()}
              </span>
              <span className="text-cyan-300 font-mono">TN: {player.potential.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* TRACKER NHIỆM VỤ (CENTER) */}
        {curQuest && (
          <div className="pointer-events-auto hidden md:flex flex-col items-center bg-gray-950/85 backdrop-blur border border-yellow-500/60 rounded-2xl px-4 py-2 shadow-xl max-w-md text-center">
            <span className="text-xs font-bold text-yellow-400 uppercase tracking-wide">
              📜 {curQuest.title}
            </span>
            <span className="text-[11px] text-gray-300 mt-0.5">{curQuest.desc}</span>
            <div className="flex items-center gap-2 mt-1 text-[11px] font-bold text-green-400 font-mono">
              <span>Tiến độ: {player.questProgress} / {curQuest.targetCount}</span>
              {player.questProgress >= curQuest.targetCount && (
                <span className="text-yellow-300 animate-pulse font-pixel text-[10px]">✓ HOÀN THÀNH</span>
              )}
            </div>
          </div>
        )}

        {/* TIỀN TỆ & NGỌC RỒNG & NÚT CHỨC NĂNG (RIGHT) */}
        <div className="pointer-events-auto flex flex-col items-end gap-2">
          {/* Vàng, Ngọc & Đậu thần */}
          <div className="bg-gray-950/90 backdrop-blur border border-yellow-500/60 rounded-2xl px-3 py-1.5 flex items-center gap-3 text-xs font-bold shadow-xl">
            {/* Vàng */}
            <div className="flex items-center gap-1.5 text-yellow-400 font-mono">
              <img src="/assets/hud/giaodientrong/vang.png" alt="Vàng" className="w-4 h-4 object-contain" />
              <span>{player.gold.toLocaleString()}</span>
            </div>

            {/* Ngọc Xanh */}
            <div className="flex items-center gap-1.5 text-cyan-400 font-mono">
              <img src="/assets/hud/giaodientrong/ngoc.png" alt="Ngọc" className="w-4 h-4 object-contain" />
              <span>{player.gem.toLocaleString()}</span>
            </div>

            {/* Đậu Thần */}
            <div 
              onClick={() => engineRef.current?.eatSenzu()}
              title="Click để ăn đậu thần hồi 100% HP/KI (Phím H)"
              className="flex items-center gap-1.5 text-green-400 bg-green-950/60 hover:bg-green-800/60 px-2 py-0.5 rounded-lg cursor-pointer transition border border-green-500/40"
            >
              <img src="/assets/hud/giaodientrong/odauthan.png" alt="Đậu" className="w-4 h-4 object-contain" />
              <span className="font-mono">{player.senzuCount}</span>
            </div>
          </div>

          {/* THANH 7 VIÊN NGỌC RỒNG */}
          <div 
            onClick={() => {
              if (dragonBallCount >= 7) onOpenShenron();
            }}
            title={dragonBallCount >= 7 ? "Click để gọi Rồng Thần Shenron!" : "Đánh quái để thu thập đủ 7 viên ngọc rồng!"}
            className={`flex items-center gap-1 bg-gray-950/90 backdrop-blur border px-2.5 py-1 rounded-xl shadow-lg transition ${
              dragonBallCount >= 7 ? 'border-yellow-400 animate-pulse cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.6)]' : 'border-gray-800 opacity-90'
            }`}
          >
            {Array.from({ length: 7 }).map((_, i) => {
              const collected = player.dragonBalls && player.dragonBalls[i];
              return (
                <img 
                  key={i}
                  src={`/assets/vatpham/vatphamgame/ngocrong/nr${i + 1}s.png`}
                  alt={`${i + 1} sao`}
                  className={`w-4 h-4 object-contain transition ${collected ? 'opacity-100 scale-110 drop-shadow' : 'opacity-25 grayscale'}`}
                />
              );
            })}
            <span className={`text-[10px] font-bold ml-1 font-mono ${dragonBallCount >= 7 ? 'text-yellow-400 animate-bounce' : 'text-gray-400'}`}>
              {dragonBallCount >= 7 ? 'GỌI RỒNG!' : `${dragonBallCount}/7`}
            </span>
          </div>

          {/* DANH SÁCH NÚT ICON MODAL */}
          <div className="flex items-center gap-1.5 bg-gray-950/80 backdrop-blur p-1 rounded-xl border border-gray-800">
            <button onClick={onOpenInventory} title="Hành Trang" className="p-2 rounded-lg bg-gray-900 hover:bg-amber-600 transition text-white shadow">
              <Package className="w-4 h-4" />
            </button>
            <button onClick={onOpenShop} title="Cửa Hàng Santa" className="p-2 rounded-lg bg-gray-900 hover:bg-red-600 transition text-white shadow">
              <ShoppingBag className="w-4 h-4" />
            </button>
            <button onClick={onOpenLeaderboard} title="Bảng Xếp Hạng" className="p-2 rounded-lg bg-gray-900 hover:bg-yellow-600 transition text-white shadow">
              <Trophy className="w-4 h-4" />
            </button>
            <button onClick={onOpenSupabase} title="Cấu Hình Supabase DB" className="p-2 rounded-lg bg-gray-900 hover:bg-emerald-600 transition text-white shadow">
              <Database className="w-4 h-4" />
            </button>
            <button onClick={toggleSound} title="Bật/Tắt Âm Thanh" className="p-2 rounded-lg bg-gray-900 hover:bg-gray-800 transition text-white shadow">
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-green-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR: PHÍM NÓNG & SKILL HOTBAR ================= */}
      <div className="flex justify-between items-end w-full">
        {/* MOBILE VIRTUAL JOYSTICK */}
        <div className="pointer-events-auto flex md:hidden items-center gap-1.5 bg-gray-950/80 p-2 rounded-2xl backdrop-blur border border-white/10">
          <button 
            onTouchStart={() => { if (engineRef.current) engineRef.current.mobileControls.left = true; }}
            onTouchEnd={() => { if (engineRef.current) engineRef.current.mobileControls.left = false; }}
            className="w-12 h-12 bg-gray-900 active:bg-blue-600 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow border border-gray-700"
          >
            ◀
          </button>
          <div className="flex flex-col gap-1.5">
            <button 
              onTouchStart={() => { if (engineRef.current) engineRef.current.mobileControls.up = true; }}
              onTouchEnd={() => { if (engineRef.current) engineRef.current.mobileControls.up = false; }}
              className="w-12 h-12 bg-gray-900 active:bg-blue-600 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow border border-gray-700"
            >
              ▲
            </button>
            <button 
              onTouchStart={() => { if (engineRef.current) engineRef.current.mobileControls.down = true; }}
              onTouchEnd={() => { if (engineRef.current) engineRef.current.mobileControls.down = false; }}
              className="w-12 h-12 bg-gray-900 active:bg-blue-600 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow border border-gray-700"
            >
              ▼
            </button>
          </div>
          <button 
            onTouchStart={() => { if (engineRef.current) engineRef.current.mobileControls.right = true; }}
            onTouchEnd={() => { if (engineRef.current) engineRef.current.mobileControls.right = false; }}
            className="w-12 h-12 bg-gray-900 active:bg-blue-600 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow border border-gray-700"
          >
            ▶
          </button>
        </div>

        {/* THANH SKILL HOTBAR VỚI REAL ICONS GỐC NRO */}
        <div className="pointer-events-auto flex items-center gap-2 bg-gray-950/95 backdrop-blur border-2 border-yellow-500/60 p-2.5 rounded-3xl shadow-2xl mx-auto">
          {/* Skill 1: Đấm [J] */}
          <button 
            onClick={() => engineRef.current?.triggerAttack()}
            className="group relative flex flex-col items-center justify-center w-14 h-14 bg-gray-900 hover:bg-gray-800 active:scale-95 transition rounded-2xl border border-red-500 shadow-lg overflow-hidden"
          >
            <img src="/assets/kynang/iconkynang/traidat/skill1_traidat.png" alt="Đấm" className="w-8 h-8 object-contain" />
            <span className="text-[9px] font-pixel text-yellow-300 font-bold mt-0.5">ĐẤM [J]</span>
          </button>

          {/* Skill 2: Kamehameha [K] */}
          <button 
            onClick={() => engineRef.current?.triggerBeam()}
            className="group relative flex flex-col items-center justify-center w-14 h-14 bg-gray-900 hover:bg-gray-800 active:scale-95 transition rounded-2xl border border-cyan-400 shadow-lg overflow-hidden"
          >
            <img src="/assets/kynang/iconkynang/traidat/skill2_traidat.png" alt="Kame" className="w-8 h-8 object-contain" />
            <span className="text-[9px] font-pixel text-cyan-300 font-bold mt-0.5">KAME [K]</span>
          </button>

          {/* Skill 3: Thái Dương Hạ San [U] */}
          <button 
            onClick={() => engineRef.current?.triggerSolarFlare()}
            className="group relative flex flex-col items-center justify-center w-14 h-14 bg-gray-900 hover:bg-gray-800 active:scale-95 transition rounded-2xl border border-yellow-400 shadow-lg overflow-hidden"
          >
            <img src="/assets/kynang/iconkynang/traidat/skill3_traidat.png" alt="Thái dương" className="w-8 h-8 object-contain" />
            <span className="text-[9px] font-pixel text-yellow-300 font-bold mt-0.5">CHÓI [U]</span>
          </button>

          {/* Skill 4: Quả Cầu Kênh Khi [I] */}
          <button 
            onClick={() => engineRef.current?.triggerSpiritBomb()}
            className="group relative flex flex-col items-center justify-center w-14 h-14 bg-gray-900 hover:bg-gray-800 active:scale-95 transition rounded-2xl border border-blue-500 shadow-lg overflow-hidden"
          >
            <img src="/assets/kynang/iconkynang/traidat/skill4_traidat.png" alt="Kênh khi" className="w-8 h-8 object-contain" />
            <span className="text-[9px] font-pixel text-blue-300 font-bold mt-0.5">KHI [I]</span>
          </button>

          {/* Skill 5: Biến Hình Super Saiyan [O] */}
          <button 
            onClick={() => engineRef.current?.toggleSuperSaiyan()}
            className={`group relative flex flex-col items-center justify-center w-14 h-14 active:scale-95 transition rounded-2xl border-2 shadow-lg overflow-hidden ${
              player.isSuperSaiyan ? 'bg-amber-900 border-yellow-300 shadow-[0_0_15px_rgba(250,204,21,0.8)]' : 'bg-gray-900 border-yellow-600 hover:bg-gray-800'
            }`}
          >
            <img src="/assets/kynang/iconkynang/traidat/skill8_traidat.png" alt="Super Saiyan" className="w-8 h-8 object-contain" />
            <span className="text-[9px] font-pixel text-yellow-400 font-bold mt-0.5">SSJ [O]</span>
          </button>

          {/* Nút Tụ Ki [L] */}
          <button 
            onMouseDown={() => engineRef.current?.toggleChargeKi(true)}
            onMouseUp={() => engineRef.current?.toggleChargeKi(false)}
            onTouchStart={() => engineRef.current?.toggleChargeKi(true)}
            onTouchEnd={() => engineRef.current?.toggleChargeKi(false)}
            className="group relative flex flex-col items-center justify-center w-14 h-14 bg-gray-900 hover:bg-gray-800 active:scale-95 transition rounded-2xl border border-amber-400 shadow-lg"
          >
            <span className="text-2xl">⚡</span>
            <span className="text-[9px] font-pixel text-amber-300 font-bold">TỤ KI [L]</span>
          </button>

          {/* Nút Ăn Đậu [H] */}
          <button 
            onClick={() => engineRef.current?.eatSenzu()}
            className="group relative flex flex-col items-center justify-center w-14 h-14 bg-gray-900 hover:bg-gray-800 active:scale-95 transition rounded-2xl border border-green-400 shadow-lg"
          >
            <img src="/assets/hud/giaodientrong/odauthan.png" alt="Đậu" className="w-7 h-7 object-contain" />
            <span className="text-[9px] font-pixel text-green-300 font-bold">ĐẬU [H]</span>
          </button>

          {/* Nút Nói [E] */}
          <button 
            onClick={() => engineRef.current?.checkInteractions()}
            className="group relative flex flex-col items-center justify-center w-14 h-14 bg-gray-900 hover:bg-gray-800 active:scale-95 transition rounded-2xl border border-purple-400 shadow-lg"
          >
            <span className="text-2xl">💬</span>
            <span className="text-[9px] font-pixel text-purple-300 font-bold">NÓI [E]</span>
          </button>
        </div>

        {/* HƯỚNG DẪN BÀN PHÍM */}
        <div className="pointer-events-auto hidden xl:flex flex-col text-[11px] bg-gray-950/90 backdrop-blur p-3 rounded-2xl border border-yellow-500/50 text-gray-300 leading-relaxed shadow-xl">
          <span className="font-bold text-yellow-400 mb-0.5">🎮 Bảng phím chiêu thức:</span>
          <span>• <b>J:</b> Đấm combo 3 hit</span>
          <span>• <b>K:</b> Kamehameha xuyên màn hình</span>
          <span>• <b>U:</b> Thái Dương Hạ San (Gây choáng)</span>
          <span>• <b>I:</b> Quả Cầu Kênh Khi (Sát thương khủng)</span>
          <span>• <b>O:</b> Biến hình Super Saiyan (x2 Công)</span>
          <span>• <b>L:</b> Giữ Tụ KI | <b>H:</b> Ăn Đậu Karin</span>
          <span>• <b>E:</b> Trò chuyện NPC / Rương đồ / Cổng</span>
        </div>
      </div>
    </div>
  );
};
