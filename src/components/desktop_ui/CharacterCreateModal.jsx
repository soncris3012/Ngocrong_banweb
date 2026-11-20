import React, { useState, useEffect } from 'react';
import { sound } from '../../game/audio';
import { PLANET_DEFS, createStarterSkillLevels, createStarterEquipment } from '../../game/nroData';

export const CharacterCreateModal = ({ currentServer, onOpenServerSelect, onSelectCharacter, onClose, virtualW = 1020 }) => {
  const [planetIndex, setPlanetIndex] = useState(0); // 0: Trái Đất, 1: Xayda, 2: Namếc
  const [characterIndex, setCharacterIndex] = useState(0); // 0, 1, 2
  const [focusGroup, setFocusGroup] = useState('char'); // 'planet' | 'char'
  const [characterName, setCharacterName] = useState(PLANET_DEFS[0].defaultPlayerName);
  const [error, setError] = useState('');
  const [bobOffset, setBobOffset] = useState(0);

  const centerOffX = Math.max(0, Math.round((virtualW - 1020) / 2));

  const planetConfigs = [
    {
      id: 0,
      folder: 'traidat',
      name: 'Trái đất',
      skyColor: '#19b0f8',
      groundColor: '#175e1c',
      characters: PLANET_DEFS[0].charNames,
      defaultName: PLANET_DEFS[0].defaultPlayerName,
      lore: 'Quê nhà: Nhà Gôhan (Ông Gôhan) • Minh sư: Quy Lão Kame'
    },
    {
      id: 1,
      folder: 'xayda',
      name: 'Xayda',
      skyColor: '#c26219',
      groundColor: '#572814',
      characters: PLANET_DEFS[1].charNames,
      defaultName: PLANET_DEFS[1].defaultPlayerName,
      lore: 'Quê nhà: Nhà Paragus (Ông Paragus) • Minh sư: Vua Vegeta'
    },
    {
      id: 2,
      folder: 'namek',
      name: 'Namếc',
      skyColor: '#05c2a8',
      groundColor: '#0d6e5b',
      characters: PLANET_DEFS[2].charNames,
      defaultName: PLANET_DEFS[2].defaultPlayerName,
      lore: 'Quê nhà: Nhà Moori (Ông Moori) • Minh sư: Trưởng Lão Guru'
    }
  ];

  const currentConfig = planetConfigs[planetIndex];
  const folder = currentConfig.folder;

  useEffect(() => {
    let t = 0;
    const interval = setInterval(() => {
      t += 0.16;
      setBobOffset(Math.sin(t) * 4);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const handlePlanetChange = (index) => {
    sound.playClick();
    setPlanetIndex(index);
    setCharacterIndex(0);
    setFocusGroup('planet');
    setCharacterName(planetConfigs[index].defaultName);
  };

  const handleCharacterChange = (index) => {
    sound.playClick();
    setCharacterIndex(index);
    setFocusGroup('char');
  };

  const handleCreate = (e) => {
    if (e) e.preventDefault();
    const name = characterName.trim();
    if (!name) {
      setError('Vui lòng nhập tên nhân vật!');
      return;
    }
    if (name.length < 2 || name.length > 16) {
      setError('Tên nhân vật phải từ 2 đến 16 ký tự!');
      return;
    }

    sound.playClick();
    const planetDef = PLANET_DEFS[planetIndex] || PLANET_DEFS[0];
    const baseStats = planetDef.baseStats;

    onSelectCharacter({
      saveVersion: 4,
      name,
      planet: planetIndex,
      characterIndex,
      headId: characterIndex + 1,
      mapId: planetDef.homeMapId,
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
      skillLoadout: [0, -1, -1, -1, -1],
      skillLevels: createStarterSkillLevels(planetIndex),
      bag: [],
      equipped: createStarterEquipment(planetIndex),
      isNewCharacter: true,
      ...baseStats
    });
  };

  // Tọa độ mũi tên vàng nhảy chuẩn ManHinhChoiMoi.java
  const arrowIndex = focusGroup === 'planet' ? planetIndex : characterIndex;
  const arrowLeft = centerOffX + 294 + arrowIndex * 155 + (135 - 28) / 2;
  const arrowBottom = (focusGroup === 'planet' ? 385 : 300) + 52 + bobOffset;

  return (
    <div
      className="absolute inset-0 z-40 w-full h-full overflow-hidden select-none"
      style={{ backgroundColor: currentConfig.groundColor }}
    >
      {/* 1. PARALLAX NỀN TRẢI RỘNG TOÀN MÀN HÌNH KHÔNG VIỀN ĐEN */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Bầu trời nửa trên */}
        <div
          className="absolute left-0 top-0 right-0 w-full"
          style={{ height: '330px', backgroundColor: currentConfig.skyColor }}
        />

        {planetIndex === 1 ? (
          <>
            <div
              className="absolute left-0 right-0 w-full"
              style={{
                bottom: '455px',
                height: '155px',
                backgroundImage: `url('/assets/hud/giaodienngoai/xayda/bautroixayda.jpg')`,
                backgroundSize: '255px 155px',
                backgroundRepeat: 'repeat-x'
              }}
            />
            <img
              src="/assets/hud/giaodienngoai/xayda/matrang.png"
              alt="Mặt Trăng"
              className="absolute object-contain"
              style={{ left: `${centerOffX + 750}px`, bottom: '490px', width: '64px', height: '64px' }}
            />
            <div
              className="absolute left-0 right-0 w-full"
              style={{
                bottom: '310px',
                height: '150px',
                backgroundImage: `url('/assets/hud/giaodienngoai/xayda/sky_phu_xayda.png')`,
                backgroundSize: '255px 150px',
                backgroundPosition: 'bottom left',
                backgroundRepeat: 'repeat-x'
              }}
            />
          </>
        ) : (
          <div
            className="absolute left-0 right-0 w-full"
            style={{
              bottom: '310px',
              height: '150px',
              backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/sky_${folder}.png')`,
              backgroundSize: '255px 150px',
              backgroundPosition: 'bottom left',
              backgroundRepeat: 'repeat-x'
            }}
          />
        )}

        {/* Núi xa: y=310 */}
        <div
          className="absolute left-0 right-0 w-full"
          style={{
            bottom: '310px',
            height: '150px',
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/nuixa_${folder}.png')`,
            backgroundSize: '255px 150px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Núi giữa: y=280 */}
        <div
          className="absolute left-0 right-0 w-full"
          style={{
            bottom: '280px',
            height: '170px',
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/nui_${folder}.png')`,
            backgroundSize: '510px 170px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Đồi cây: y=205 */}
        <div
          className="absolute left-0 right-0 w-full"
          style={{
            bottom: '205px',
            height: '170px',
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/nuicay_${folder}.png')`,
            backgroundSize: '340px 170px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Núi thấp: y=125 */}
        <div
          className="absolute left-0 right-0 w-full"
          style={{
            bottom: '125px',
            height: '180px',
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/nuithap_${folder}.png')`,
            backgroundSize: '340px 180px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Cỏ trên mặt đất: y=125, h=50 */}
        <div
          className="absolute left-0 right-0 w-full"
          style={{
            bottom: '125px',
            height: '50px',
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/cayco1_${folder}.png')`,
            backgroundSize: '50px 50px',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Mặt đất: y=75, h=50 */}
        <div
          className="absolute left-0 right-0 w-full"
          style={{
            bottom: '75px',
            height: '50px',
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/matdat_${folder}1.png')`,
            backgroundSize: '50px 50px',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Đất giữa: y=25, h=50 */}
        <div
          className="absolute left-0 right-0 w-full"
          style={{
            bottom: '25px',
            height: '50px',
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/dat_${folder}1.png')`,
            backgroundSize: '50px 50px',
            backgroundRepeat: 'repeat-x'
          }}
        />

        {/* Lòng đất sát đáy y=0, h=50 */}
        <div
          className="absolute left-0 right-0 bottom-0 w-full"
          style={{
            height: '50px',
            backgroundImage: `url('/assets/hud/giaodienngoai/${folder}/longdat_${folder}1.png')`,
            backgroundSize: '50px 50px',
            backgroundRepeat: 'repeat-x'
          }}
        />
      </div>

      {/* 2. NÚT MÁY CHỦ GÓC TRÁI TRÊN — (20, 540, 135, 50) */}
      <button
        type="button"
        onClick={() => {
          sound.playPunch();
          onOpenServerSelect();
        }}
        className="absolute z-20 flex items-center justify-center transition active:scale-95"
        style={{ left: '20px', bottom: '540px', width: '135px', height: '50px' }}
      >
        <img
          src="/assets/hud/giaodienngoai/chung/nutdangnhap2.png"
          alt=""
          className="absolute inset-0 w-full h-full object-fill pointer-events-none"
        />
        <span className="relative z-10 font-dragon text-[#532905] text-xs font-bold">
          Máy chủ ({currentServer})
        </span>
      </button>

      {/* Ghi chú Hậu Bối góc phải trên */}
      <div
        className="absolute z-20 text-right pointer-events-none"
        style={{ right: '20px', top: '18px' }}
      >
        <div className="font-dragon text-white text-xs font-bold drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
          Chiến Binh Hậu Bối ({currentConfig.name})
        </div>
        <div className="font-dragon text-[#fde047] text-[11px] drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]">
          {currentConfig.lore}
        </div>
      </div>

      {/* 3. Ô NHẬP TÊN NHÂN VẬT */}
      <form
        onSubmit={handleCreate}
        className="absolute z-20 flex items-center justify-center px-3"
        style={{ left: `${centerOffX + 362}px`, bottom: '480px', width: '320px', height: '50px' }}
      >
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
          placeholder="Tên nhân vật"
          maxLength={16}
          className="relative z-10 w-full h-full bg-transparent text-center font-dragon text-[#532905] text-sm font-bold outline-none placeholder:text-[#532905]/50"
        />
      </form>

      {error && (
        <div
          className="absolute z-30 text-center w-[360px]"
          style={{ left: `${centerOffX + 342}px`, bottom: '452px' }}
        >
          <span className="text-red-300 font-dragon text-xs bg-black/80 px-3 py-0.5 rounded-full border border-red-400/50">
            {error}
          </span>
        </div>
      )}

      {/* 4. MŨI TÊN VÀNG CHỈ MỤC ĐANG CHỌN */}
      <img
        src="/assets/hud/giaodienngoai/chung/muitenvang.png"
        alt=""
        className="absolute z-30 pointer-events-none object-contain"
        style={{
          left: `${arrowLeft}px`,
          bottom: `${arrowBottom}px`,
          width: '28px',
          height: '28px'
        }}
      />

      {/* 5. HÀNG NÚT CHỌN HÀNH TINH */}
      {planetConfigs.map((p, idx) => {
        const isSelected = planetIndex === idx;
        return (
          <button
            key={p.id}
            type="button"
            onClick={() => handlePlanetChange(idx)}
            className="absolute z-20 flex items-center justify-center transition active:scale-95"
            style={{
              left: `${centerOffX + 294 + idx * 155}px`,
              bottom: '385px',
              width: '135px',
              height: '50px'
            }}
          >
            <img
              src={`/assets/hud/giaodienngoai/chung/${isSelected ? 'nutclick.png' : 'nutdangnhap2.png'}`}
              alt=""
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            <span className="relative z-10 font-dragon text-[#532905] text-xs font-bold">
              {p.name}
            </span>
          </button>
        );
      })}

      {/* 6. HÀNG NÚT CHỌN NHÂN VẬT */}
      {currentConfig.characters.map((charName, idx) => {
        const isSelected = characterIndex === idx;
        return (
          <button
            key={charName}
            type="button"
            onClick={() => handleCharacterChange(idx)}
            className="absolute z-20 flex items-center justify-center transition active:scale-95"
            style={{
              left: `${centerOffX + 294 + idx * 155}px`,
              bottom: '300px',
              width: '135px',
              height: '50px'
            }}
          >
            <img
              src={`/assets/hud/giaodienngoai/chung/${isSelected ? 'nutclick.png' : 'nutdangnhap2.png'}`}
              alt=""
              className="absolute inset-0 w-full h-full object-fill pointer-events-none"
            />
            <span className="relative z-10 font-dragon text-[#532905] text-[11px] font-bold px-1 truncate">
              {charName}
            </span>
          </button>
        );
      })}

      {/* 7. NHÂN VẬT ĐỨNG TRÊN THẢM CỎ */}
      <div
        className="absolute z-20 flex flex-col items-center pointer-events-none"
        style={{ left: `${centerOffX + 190}px`, bottom: '122px', width: '96px' }}
      >
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

      {/* 8. NÚT ĐÓNG GÓC TRÁI DƯỚI & TẠO MỚI GIỮA DƯỚI */}
      <button
        type="button"
        onClick={() => {
          sound.playPunch();
          onClose();
        }}
        className="absolute z-20 flex items-center justify-center transition active:scale-95"
        style={{ left: '20px', bottom: '20px', width: '135px', height: '50px' }}
      >
        <img
          src="/assets/hud/giaodienngoai/chung/nutdangnhap2.png"
          alt=""
          className="absolute inset-0 w-full h-full object-fill pointer-events-none"
        />
        <span className="relative z-10 font-dragon text-[#532905] text-xs font-bold">
          Đóng
        </span>
      </button>

      <button
        type="button"
        onClick={handleCreate}
        className="absolute z-20 flex items-center justify-center transition active:scale-95"
        style={{ left: `${centerOffX + 442}px`, bottom: '20px', width: '135px', height: '50px' }}
      >
        <img
          src="/assets/hud/giaodienngoai/chung/nutdangnhap2.png"
          alt=""
          className="absolute inset-0 w-full h-full object-fill pointer-events-none"
        />
        <span className="relative z-10 font-dragon text-[#532905] text-sm font-bold">
          Tạo mới
        </span>
      </button>
    </div>
  );
};
