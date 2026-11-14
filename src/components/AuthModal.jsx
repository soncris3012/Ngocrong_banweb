import React, { useState } from 'react';
import { Sparkles, Shield, Heart, Zap, Swords, ChevronRight, User } from 'lucide-react';
import { PLANETS } from '../game/constants';
import { sound } from '../game/audio';

export const AuthModal = ({ onSelectCharacter }) => {
  const [selectedPlanet, setSelectedPlanet] = useState(0);
  const [characterName, setCharacterName] = useState('SonGoku');
  const [error, setError] = useState('');

  const planet = PLANETS[selectedPlanet];

  const handleStart = (e) => {
    e.preventDefault();
    const trimmed = characterName.trim();
    if (!trimmed) {
      setError('Vui lòng nhập tên nhân vật!');
      return;
    }
    if (trimmed.length < 3 || trimmed.length > 16) {
      setError('Tên nhân vật phải từ 3 đến 16 ký tự!');
      return;
    }

    sound.playHeal();
    onSelectCharacter({
      name: trimmed,
      planet: selectedPlanet,
      ...planet.baseStats
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-gray-900 border-2 border-yellow-500 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* LOGO & TITLE */}
        <div className="bg-gradient-to-r from-yellow-600 via-amber-700 to-red-800 p-6 text-center border-b border-yellow-500/50 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-20 pointer-events-none text-9xl">🐉</div>
          <h1 className="font-pixel text-xl sm:text-2xl text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wider">
            NGỌC RỒNG ONLINE WEB
          </h1>
          <p className="text-yellow-100/90 text-xs mt-1.5 font-medium">
            Phiên bản Web Game ReactJS • Vercel Ready • Supabase Cloud
          </p>
        </div>

        {/* BODY */}
        <form onSubmit={handleStart} className="p-6 flex flex-col gap-6">
          {/* 1. CHỌN HÀNH TINH */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-yellow-400 uppercase tracking-wide">
              1. Chọn Hành Tinh Xuất Thân:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PLANETS.map((p) => {
                const isSelected = selectedPlanet === p.id;
                return (
                  <button
                    type="button"
                    key={p.id}
                    onClick={() => {
                      setSelectedPlanet(p.id);
                      sound.playPunch();
                    }}
                    className={`p-3.5 rounded-2xl border-2 flex flex-col items-center gap-2 transition text-left relative overflow-hidden ${
                      isSelected 
                        ? 'border-yellow-400 bg-gray-800/95 shadow-[0_0_20px_rgba(250,204,21,0.3)] scale-[1.02]' 
                        : 'border-gray-700 bg-gray-950/60 hover:border-gray-500 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold shadow-md"
                      style={{ backgroundColor: p.primaryColor }}
                    >
                      {p.symbol}
                    </div>
                    <span className="font-bold text-sm text-white">{p.name}</span>
                    <span className="text-[10px] text-gray-400 text-center leading-tight">
                      Chiêu: <b className="text-yellow-300">{p.signatureSkill}</b>
                    </span>
                    {isSelected && (
                      <span className="absolute top-2 right-2 text-yellow-400 text-xs font-bold">✓</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CHI TIẾT ĐẶC TÍNH HÀNH TINH ĐÃ CHỌN */}
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-4 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white flex items-center gap-1.5">
                Đặc quyền tộc {planet.name}:
              </span>
              <span className="text-yellow-400 font-bold text-[11px]">{planet.desc}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs pt-1 border-t border-gray-700/60">
              <div className="bg-gray-900/80 p-2 rounded-xl flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-red-400" />
                <span className="text-gray-300">HP: <b className="text-white">{planet.baseStats.hp}</b></span>
              </div>
              <div className="bg-gray-900/80 p-2 rounded-xl flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-gray-300">KI: <b className="text-white">{planet.baseStats.ki}</b></span>
              </div>
              <div className="bg-gray-900/80 p-2 rounded-xl flex items-center gap-1.5">
                <Swords className="w-3.5 h-3.5 text-yellow-400" />
                <span className="text-gray-300">ATK: <b className="text-white">{planet.baseStats.attack}</b></span>
              </div>
              <div className="bg-gray-900/80 p-2 rounded-xl flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-gray-300">DEF: <b className="text-white">{planet.baseStats.defense}</b></span>
              </div>
            </div>
          </div>

          {/* 2. NHẬP TÊN NHÂN VẬT */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-yellow-400 uppercase tracking-wide">
              2. Đặt Tên Nhân Vật:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                <User className="w-4 h-4" />
              </div>
              <input 
                type="text" 
                value={characterName}
                onChange={(e) => {
                  setCharacterName(e.target.value);
                  setError('');
                }}
                maxLength={16}
                placeholder="Ví dụ: SonGoku_VN, Broly, SuperSaiyan"
                className="w-full bg-gray-950 border border-gray-700 focus:border-yellow-400 rounded-2xl pl-10 pr-4 py-3 text-white font-bold outline-none transition text-sm"
              />
            </div>
            {error && <span className="text-xs text-red-400 font-semibold">{error}</span>}
          </div>

          {/* NÚT BẮT ĐẦU */}
          <button 
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 hover:from-yellow-400 hover:to-orange-500 active:scale-[0.99] transition rounded-2xl font-bold text-gray-950 text-base shadow-xl flex items-center justify-center gap-2 group font-pixel"
          >
            VÀO THẾ GIỚI NGỌC RỒNG
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </form>
      </div>
    </div>
  );
};
