import React, { useState, useEffect } from 'react';
import { sound } from '../../game/audio';
import { PLANET_DEFS } from '../../game/nroData';

export const CharacterCreateModal = ({ currentServer, onOpenServerSelect, onSelectCharacter, onClose }) => {
  const [planetIndex, setPlanetIndex] = useState(0); // 0: Trái Đất, 1: Xayda, 2: Namếc
  const [characterIndex, setCharacterIndex] = useState(0); // 0, 1, 2
  const [focusGroup, setFocusGroup] = useState('char'); // 'planet' | 'char'
  const [characterName, setCharacterName] = useState('SonGoku');
  const [error, setError] = useState('');
  const [bobOffset, setBobOffset] = useState(0);

  const planetConfigs = [
    {
      id: 0,
      folder: 'traidat',
      name: 'Trái đất',
      bgColor: '#19b0f8',
      characters: ['Goku', 'Krillin', 'Yamcha'],
      defaultName: 'SonGoku'
    },
    {
      id: 1,
      folder: 'xayda',
      name: 'Xayda',
      bgColor: '#c26219',
      characters: ['Cađíc', 'Rađíc', 'Kakalot'],
      defaultName: 'Cađíc'
    },
    {
      id: 2,
      folder: 'namek',
      name: 'Namếc',
      bgColor: '#05c2a8',
      characters: ['Ốc tiêu', 'Piccolo', 'Kami'],
      defaultName: 'Piccolo'
    }
  ];

  const currentConfig = planetConfigs[planetIndex];

  useEffect(() => {
    let t = 0;
    const interval = setInterval(() => {
      t += 0.15;
      setBobOffset(Math.sin(t) * 4);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const handlePlanetChange = (index) => {
    sound.playPunch();
    setPlanetIndex(index);
    setCharacterIndex(0);
    setFocusGroup('planet');
    setCharacterName(planetConfigs[index].defaultName);
  };

  const handleCharacterChange = (index) => {
    sound.playPunch();
    setCharacterIndex(index);
    setFocusGroup('char');
    setCharacterName(currentConfig.characters[index]);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const name = characterName.trim();
    if (!name) {
      setError('Vui lòng nhập tên nhân vật!');
      return;
    }
    if (name.length < 2 || name.length > 16) {
      setError('Tên nhân vật phải từ 2 đến 16 ký tự!');
      return;
    }

    sound.playHeal();
    const baseStats = PLANET_DEFS[planetIndex].baseStats;

    onSelectCharacter({
      name,
      planet: planetIndex,
      characterIndex,
      headId: characterIndex + 1,
      mapId: 0,
      x: 325,
      y: 175,
      questId: 1,
      questStep: 0,
      questProgress: 0,
      power: 1200,
      potential: 1200,
      gold: 2000,
      gem: 20,
      senzuCount: 5,
      senzuLevel: 1,
      isNewCharacter: true,
      ...baseStats
    });
  };

  const folder = currentConfig.folder;

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col items-center justify-between overflow-hidden select-none transition-colors duration-300"
      style={{ backgroundColor: currentConfig.bgColor }}
    >
      {/* 1. PARALLAX NỀN THEO HÀNH TINH */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: currentConfig.bgColor }} />

        {planetIndex === 1 ? (
          <div
            className="absolute bottom-[40%] left-0 w-full h-[240px]"
            style={{
              backgroundImage: `url('/assets/hud/giaodienngoai/xayda/bautroixayda.jpg')`,
              backgroundSize: '255px 150px',
              backgroundRepeat: 'repeat-x'
            }}
          >
            <img
              src="/assets/hud/giaodienngoai/xayda/matrang.png"
              alt="Mặt Trăng"
              className="absolute right-[18%] top-[10%] w-16 h-16 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
            />
          </div>
        ) : (
          <div
            className="absolute bottom-[40%] left-0 w-full h-[240px]"
            style={{
              backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/sky_${folder}.png')`,
              backgroundSize: '255px 150px',
              backgroundRepeat: 'repeat-x'
            }}
          />
        )}

        <div
          className="absolute bottom-[34%] left-0 w-full h-[180px]"
          style={{
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/nuixa_${folder}.png')`,
            backgroundSize: '255px 150px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'repeat-x'
          }}
        />
        <div
          className="absolute bottom-[25%] left-0 w-full h-[190px]"
          style={{
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/nui_${folder}.png')`,
            backgroundSize: '510px 170px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'repeat-x'
          }}
        />
        <div
          className="absolute bottom-[100px] left-0 w-full h-[22%]"
          style={{ backgroundColor: planetIndex === 1 ? '#572814' : planetIndex === 2 ? '#0d6e5b' : '#175e1c' }}
        />
        <div
          className="absolute bottom-[18%] left-0 w-full h-[190px]"
          style={{
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/nuicay_${folder}.png')`,
            backgroundSize: '340px 170px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'repeat-x'
          }}
        />
        <div
          className="absolute bottom-[100px] left-0 w-full h-[200px]"
          style={{
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/nuithap_${folder}.png')`,
            backgroundSize: '340px 180px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'repeat-x'
          }}
        />
        <div
          className="absolute bottom-[100px] left-0 w-full h-[50px] z-10"
          style={{
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/cayco1_${folder}.png')`,
            backgroundSize: '50px 50px',
            backgroundRepeat: 'repeat-x'
          }}
        />
        <div
          className="absolute bottom-[50px] left-0 w-full h-[50px] z-10"
          style={{
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/matdat_${folder}1.png')`,
            backgroundSize: '50px 50px',
            backgroundRepeat: 'repeat-x'
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-[50px] z-10"
          style={{
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/dat_${folder}1.png')`,
            backgroundSize: '50px 50px',
            backgroundRepeat: 'repeat-x'
          }}
        />
      </div>

      {/* 2. TOP BAR: NÚT MÁY CHỦ */}
      <div className="relative z-20 w-full max-w-5xl flex items-center justify-between p-4">
        <button
          type="button"
          onClick={() => {
            sound.playPunch();
            onOpenServerSelect();
          }}
          className="relative w-[140px] h-[48px] flex items-center justify-center transition active:scale-95 shadow-md"
        >
          <img
            src="/assets/hud/giaodienngoai/chung/nutdangnhap2.png"
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow"
          />
          <span className="relative z-10 font-dragon text-[#532905] text-xs font-bold">
            Máy chủ ({currentServer})
          </span>
        </button>

        <span className="font-dragon text-white text-xs sm:text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] font-bold">
          Chọn Hành Tinh & Khởi Tạo Nhân Vật
        </span>
      </div>

      {/* 3. CENTER CONTROLS */}
      <div className="relative z-20 flex flex-col items-center gap-3 w-full max-w-3xl px-4">
        {/* Ô NHẬP TÊN NHÂN VẬT */}
        <div className="relative w-[320px] h-[52px] flex items-center justify-center px-4 shadow-lg">
          <img
            src="/assets/hud/giaodienngoai/chung/input.png"
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none"
          />
          <input
            type="text"
            value={characterName}
            onChange={(e) => {
              setCharacterName(e.target.value);
              setError('');
            }}
            placeholder="Tên nhân vật..."
            maxLength={16}
            className="relative z-10 w-full h-full bg-transparent text-center font-dragon text-[#532905] text-sm font-bold outline-none placeholder:text-[#532905]/50"
          />
        </div>
        {error && (
          <span className="text-red-400 font-dragon text-xs bg-black/80 px-3 py-1 rounded-full border border-red-500/50">
            {error}
          </span>
        )}

        {/* HÀNG NÚT CHỌN HÀNH TINH */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2">
          {planetConfigs.map((p, idx) => {
            const isSelected = planetIndex === idx;
            return (
              <div key={p.id} className="relative flex flex-col items-center">
                {isSelected && focusGroup === 'planet' && (
                  <img
                    src="/assets/hud/giaodienngoai/chung/muitenvang.png"
                    alt="Chọn"
                    className="w-7 h-7 absolute -top-8 z-30 pointer-events-none drop-shadow"
                    style={{ transform: `translateY(${bobOffset}px)` }}
                  />
                )}
                <button
                  type="button"
                  onClick={() => handlePlanetChange(idx)}
                  className="relative w-[120px] sm:w-[140px] h-[48px] flex items-center justify-center transition active:scale-95 shadow-md"
                >
                  <img
                    src={`/assets/hud/giaodienngoai/chung/${isSelected ? 'nutclick.png' : 'nutdangnhap2.png'}`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow"
                  />
                  <span className="relative z-10 font-dragon text-[#532905] text-xs sm:text-sm font-bold">
                    {p.name}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* HÀNG NÚT CHỌN NHÂN VẬT */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-2">
          {currentConfig.characters.map((charName, idx) => {
            const isSelected = characterIndex === idx;
            return (
              <div key={charName} className="relative flex flex-col items-center">
                {isSelected && focusGroup === 'char' && (
                  <img
                    src="/assets/hud/giaodienngoai/chung/muitenvang.png"
                    alt="Chọn"
                    className="w-7 h-7 absolute -top-8 z-30 pointer-events-none drop-shadow"
                    style={{ transform: `translateY(${bobOffset}px)` }}
                  />
                )}
                <button
                  type="button"
                  onClick={() => handleCharacterChange(idx)}
                  className="relative w-[120px] sm:w-[140px] h-[48px] flex items-center justify-center transition active:scale-95 shadow-md"
                >
                  <img
                    src={`/assets/hud/giaodienngoai/chung/${isSelected ? 'nutclick.png' : 'nutdangnhap2.png'}`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow"
                  />
                  <span className="relative z-10 font-dragon text-[#532905] text-xs sm:text-sm font-bold">
                    {charName}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* PREVIEW NHÂN VẬT TRÊN MẶT ĐẤT */}
        <div className="relative mt-2 w-32 h-36 flex flex-col items-center justify-center">
          <img
            src={`/assets/hud/giaodienngoai/${folder}/dau_${folder}_${characterIndex + 1}.png`}
            alt="Head"
            className="w-16 h-16 object-contain z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          />
          <img
            src={`/assets/hud/giaodienngoai/${folder}/than${folder}.png`}
            alt="Body"
            className="w-12 h-10 object-contain -mt-3.5 z-10"
          />
          <img
            src={`/assets/hud/giaodienngoai/${folder}/chan${folder}.png`}
            alt="Legs"
            className="w-12 h-7 object-contain -mt-1.5 z-0"
          />
        </div>
      </div>

      {/* 4. BOTTOM BAR */}
      <div className="relative z-20 w-full max-w-5xl flex items-center justify-between p-4 mb-2">
        <button
          type="button"
          onClick={() => {
            sound.playPunch();
            onClose();
          }}
          className="relative w-[130px] h-[48px] flex items-center justify-center transition active:scale-95 shadow-md"
        >
          <img
            src="/assets/hud/giaodienngoai/chung/nutdangnhap2.png"
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow"
          />
          <span className="relative z-10 font-dragon text-[#532905] text-xs font-bold">
            Đóng
          </span>
        </button>

        <button
          type="button"
          onClick={handleCreate}
          className="relative w-[150px] h-[50px] flex items-center justify-center transition active:scale-95 shadow-xl hover:brightness-105"
        >
          <img
            src="/assets/hud/giaodienngoai/chung/nutdangnhap2.png"
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow"
          />
          <span className="relative z-10 font-dragon text-[#532905] text-sm font-black">
            Tạo mới
          </span>
        </button>
      </div>
    </div>
  );
};
