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
import { assets } from './game/assetLoader';

export function App() {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);

  // Trạng thái tài nguyên & tải game
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [loadPercent, setLoadPercent] = useState(15);

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

  // Nạp trước (Preload) toàn bộ tài nguyên game để đảm bảo 0% lỗi hình ảnh
  useEffect(() => {
    assets.init();
    assets.onProgress((loaded, total) => {
      const pct = Math.min(100, Math.round((loaded / Math.max(1, total)) * 100));
      setLoadPercent(pct);
    });
    assets.waitForReady(3500).then(() => {
      setLoadPercent(100);
      setTimeout(() => {
        setAssetsLoaded(true);
      }, 250);
    });
  }, []);

  // Tự động kiểm tra nhân vật đã lưu trước đó
  useEffect(() => {
    const lastCharName = localStorage.getItem('nro_last_character');
    if (lastCharName) {
      loadCharacterData(lastCharName).then(data => {
        if (data) {
          // Đảm bảo không bị lưu đè vị trí cũ vào rương hoặc NPC
          const spawnX = (!data.x || data.x < 560) ? 640 : data.x;
          const spawnY = (!data.y || data.y > 440) ? 420 : data.y;
          setPlayerState(prev => ({ ...prev, ...data, x: spawnX, y: spawnY }));
          setCharacterSelected(true);
        }
      });
    }
  }, []);

  // Khởi tạo Canvas và GameEngine khi đã chọn nhân vật và tài nguyên đã sẵn sàng
  useEffect(() => {
    if (!characterSelected || !assetsLoaded) return;

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
  }, [characterSelected, assetsLoaded]);

  const handleSelectCharacter = (newChar) => {
    setPlayerState(prev => ({ ...prev, ...newChar, x: 620, y: 420 }));
    setCharacterSelected(true);
    saveCharacterData({ ...newChar, x: 620, y: 420 });
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
      {/* 0. MÀN HÌNH TẢI TÀI NGUYÊN (PRELOADER) ĐẢM BẢO KHÔNG LỖI ĐỒ HOẠ */}
      {!assetsLoaded && (
        <div className="fixed inset-0 z-[100] bg-gray-950 flex flex-col items-center justify-center p-6 select-none">
          {/* Logo Ngọc Rồng */}
          <div className="relative flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-200 shadow-[0_0_50px_rgba(251,191,36,0.6)] flex items-center justify-center animate-bounce mb-4 border-2 border-yellow-300">
              <span className="text-4xl">⭐</span>
            </div>
            <h1 className="font-pixel text-2xl sm:text-3xl text-yellow-400 drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] tracking-wider">
              NGỌC RỒNG ONLINE
            </h1>
            <p className="text-yellow-200/80 text-xs mt-1 font-mono tracking-widest uppercase">
              Web Edition • Siêu mượt 60 FPS
            </p>
          </div>

          {/* Thanh Tiến Độ Tải */}
          <div className="w-full max-w-md bg-gray-900 border-2 border-yellow-500/80 rounded-2xl p-4 shadow-2xl flex flex-col gap-3">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-yellow-300 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                Đang nạp đồ hoạ & Sprite...
              </span>
              <span className="text-yellow-400 font-black text-sm">{loadPercent}%</span>
            </div>

            {/* Thanh Bar */}
            <div className="w-full bg-gray-950 rounded-xl h-4 p-0.5 border border-yellow-600/40 overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-lg transition-all duration-150 shadow-[0_0_12px_rgba(250,204,21,0.8)]"
                style={{ width: `${loadPercent}%` }}
              />
            </div>

            <p className="text-[11px] text-gray-400 text-center font-mono mt-1">
              Vui lòng chờ trong giây lát để bản đồ tải đầy đủ 100% không giật lag...
            </p>
          </div>

          {/* Mẹo phím tắt hữu ích */}
          <div className="mt-8 bg-gray-900/60 border border-gray-800 rounded-xl px-4 py-2.5 text-gray-400 text-xs font-mono max-w-md text-center">
            💡 <b className="text-yellow-300">Mẹo:</b> Phím <span className="text-white font-bold">[J]</span> Đấm • <span className="text-white font-bold">[K]</span> Kamehameha • <span className="text-white font-bold">[O]</span> Hóa Super Saiyan • Click chuột bất kỳ đâu để chạy tới!
          </div>
        </div>
      )}

      {/* 1. MÀN HÌNH CHỌN NHÂN VẬT NẾU CHƯA CHỌN */}
      {assetsLoaded && !characterSelected && (
        <AuthModal onSelectCharacter={handleSelectCharacter} />
      )}

      {/* 2. GAME CANVAS 60 FPS */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 block w-full h-full cursor-crosshair z-0"
      />

      {/* 3. HEADS-UP DISPLAY (HUD) */}
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
