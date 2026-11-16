import React, { useState, useEffect, useRef } from 'react';
import { GameEngine } from './game/GameEngine';
import { HUD } from './components/HUD';
import { NPCModal } from './components/NPCModal';
import { ShopModal } from './components/ShopModal';
import { InventoryModal } from './components/InventoryModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { SupabaseModal } from './components/SupabaseModal';
import { AuthModal } from './components/AuthModal';
import { ShenronModal } from './components/ShenronModal';
import { saveCharacterData, loadCharacterData } from './services/supabase';

export function App() {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);

  // Trạng thái nhân vật
  const [characterSelected, setCharacterSelected] = useState(false);
  const [playerState, setPlayerState] = useState({
    name: 'SonGoku',
    planet: 0,
    hp: 1500,
    maxHp: 1500,
    ki: 1200,
    maxKi: 1200,
    attack: 65,
    defense: 15,
    crit: 8,
    power: 2000,
    potential: 2000,
    gold: 5000,
    gem: 50,
    senzuCount: 10,
    senzuLevel: 1,
    questId: 1,
    questProgress: 0,
    currentMapName: 'Làng Aru',
    isSuperSaiyan: false,
    dragonBalls: [false, false, false, false, false, false, false],
    inventory: []
  });

  // Trạng thái Modals
  const [activeNPC, setActiveNPC] = useState(null);
  const [showShop, setShowShop] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showSupabase, setShowSupabase] = useState(false);
  const [showShenron, setShowShenron] = useState(false);

  // Tự động kiểm tra nhân vật đã lưu trước đó
  useEffect(() => {
    const lastCharName = localStorage.getItem('nro_last_character');
    if (lastCharName) {
      loadCharacterData(lastCharName).then(data => {
        if (data) {
          setPlayerState(prev => ({ ...prev, ...data }));
          setCharacterSelected(true);
        }
      });
    }
  }, []);

  // Khởi tạo Canvas và GameEngine khi đã chọn nhân vật
  useEffect(() => {
    if (!characterSelected) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (engineRef.current) {
        engineRef.current.width = canvas.width;
        engineRef.current.height = canvas.height;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const engine = new GameEngine(
      canvas,
      (updatedState) => {
        setPlayerState(prev => ({ ...prev, ...updatedState }));
      },
      (npc) => {
        setActiveNPC(npc);
      },
      () => {
        setShowShenron(true);
      },
      playerState
    );
    engineRef.current = engine;
    engine.start();

    // Auto-save định kỳ 15s một lần
    const saveInterval = setInterval(() => {
      if (engineRef.current) {
        saveCharacterData(engineRef.current.player);
      }
    }, 15000);

    return () => {
      clearInterval(saveInterval);
      window.removeEventListener('resize', handleResize);
      engine.destroy();
    };
  }, [characterSelected]);

  const handleSelectCharacter = (newChar) => {
    setPlayerState(prev => ({ ...prev, ...newChar }));
    setCharacterSelected(true);
    saveCharacterData(newChar);
  };

  const handleUpdatePlayer = (updatedPlayer) => {
    setPlayerState(updatedPlayer);
    if (engineRef.current) {
      Object.assign(engineRef.current.player, updatedPlayer);
      saveCharacterData(updatedPlayer);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-950 font-sans select-none">
      {/* 1. MÀN HÌNH CHỌN NHÂN VẬT NẾU CHƯA CHỌN */}
      {!characterSelected && (
        <AuthModal onSelectCharacter={handleSelectCharacter} />
      )}

      {/* 2. GAME CANVAS 60 FPS */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 block w-full h-full cursor-crosshair z-0"
      />

      {/* 3. HIỆU ỨNG ARCADE SCANLINE RETRO */}
      <div className="absolute inset-0 scanline z-10 pointer-events-none opacity-30" />

      {/* 4. HEADS-UP DISPLAY (HUD) */}
      {characterSelected && (
        <div className="z-20 relative w-full h-full pointer-events-none">
          <HUD 
            player={playerState}
            engineRef={engineRef}
            onOpenInventory={() => setShowInventory(true)}
            onOpenShop={() => setShowShop(true)}
            onOpenLeaderboard={() => setShowLeaderboard(true)}
            onOpenSupabase={() => setShowSupabase(true)}
            onOpenShenron={() => setShowShenron(true)}
          />
        </div>
      )}

      {/* 5. MODALS & POPUPS */}
      {activeNPC && (
        <NPCModal 
          npc={activeNPC} 
          player={playerState} 
          onClose={() => setActiveNPC(null)} 
          onUpdatePlayer={handleUpdatePlayer}
        />
      )}

      {showShop && (
        <ShopModal 
          player={playerState} 
          onClose={() => setShowShop(false)} 
          onUpdatePlayer={handleUpdatePlayer}
        />
      )}

      {showInventory && (
        <InventoryModal 
          player={playerState} 
          onClose={() => setShowInventory(false)} 
        />
      )}

      {showLeaderboard && (
        <LeaderboardModal 
          onClose={() => setShowLeaderboard(false)} 
        />
      )}

      {showSupabase && (
        <SupabaseModal 
          onClose={() => setShowSupabase(false)} 
        />
      )}

      {showShenron && (
        <ShenronModal 
          player={playerState} 
          onClose={() => setShowShenron(false)} 
          onGrantWish={handleUpdatePlayer}
        />
      )}
    </div>
  );
}

export default App;
