import React, { useState, useEffect, useRef } from 'react';
import { GameEngine } from './game/GameEngine';
import { HUD } from './components/HUD';
import { NPCModal } from './components/NPCModal';
import { ShopModal } from './components/ShopModal';
import { InventoryModal } from './components/InventoryModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { SupabaseModal } from './components/SupabaseModal';
import { ShenronModal } from './components/ShenronModal';
import { MainMenu } from './components/desktop_ui/MainMenu';
import { ServerSelectModal } from './components/desktop_ui/ServerSelectModal';
import { LoginModal } from './components/desktop_ui/LoginModal';
import { CharacterCreateModal } from './components/desktop_ui/CharacterCreateModal';
import { SplashScreen } from './components/desktop_ui/SplashScreen';
import { saveCharacterData, loadCharacterData } from './services/supabase';
import { assets } from './game/assetLoader';

export function App() {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);

  // Trạng thái tài nguyên & tải game
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [loadPercent, setLoadPercent] = useState(15);

  // Màn hình hiện tại: 'MENU' | 'CHAR_CREATE' | 'SPLASH' | 'GAME'
  const [screenView, setScreenView] = useState('MENU');

  // Modals mở từ Menu
  const [showServerSelect, setShowServerSelect] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentServer, setCurrentServer] = useState(() => {
    const saved = localStorage.getItem('nro_server');
    return saved ? (isNaN(saved) ? saved : Number(saved)) : 1;
  });

  // Trạng thái nhân vật đã lưu
  const [savedCharacter, setSavedCharacter] = useState(null);

  // Trạng thái người chơi hiện tại
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

  // Trạng thái Modals trong game
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

  // Tự động kiểm tra nhân vật đã lưu trước đó để hiển thị trên nút [ TK. username ]
  useEffect(() => {
    const lastCharName = localStorage.getItem('nro_last_character');
    if (lastCharName) {
      loadCharacterData(lastCharName).then(data => {
        if (data) {
          const spawnX = (!data.x || data.x < 560) ? 640 : data.x;
          const spawnY = (!data.y || data.y > 440) ? 420 : data.y;
          const fullData = { ...data, x: spawnX, y: spawnY };
          setSavedCharacter(fullData);
          setPlayerState(prev => ({ ...prev, ...fullData }));
        } else {
          setSavedCharacter({ name: lastCharName, planet: 0 });
        }
      });
    }
  }, []);

  // Khởi tạo Canvas và GameEngine khi vào trạng thái 'GAME'
  useEffect(() => {
    if (screenView !== 'GAME') return;

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
  }, [screenView]);

  // Vào game từ nhân vật có sẵn
  const handleEnterGame = () => {
    setScreenView('SPLASH');
  };

  // Tạo nhân vật mới thành công
  const handleSelectCharacter = (newChar) => {
    const charData = { ...newChar, x: 620, y: 420 };
    setPlayerState(prev => ({ ...prev, ...charData }));
    setSavedCharacter(charData);
    localStorage.setItem('nro_last_character', newChar.name);
    saveCharacterData(charData);
    setScreenView('SPLASH');
  };

  // Đăng nhập thành công từ LoginModal
  const handleLoginSuccess = (user) => {
    loadCharacterData(user.name).then(data => {
      const charData = data || { name: user.name, planet: 0, power: 2000, potential: 2000 };
      setSavedCharacter(charData);
      setPlayerState(prev => ({ ...prev, ...charData }));
    });
  };

  // Xóa dữ liệu đã lưu
  const handleClearData = () => {
    localStorage.removeItem('nro_last_character');
    localStorage.removeItem('nro_account_user');
    setSavedCharacter(null);
  };

  // Đổi server
  const handleSelectServer = (server) => {
    setCurrentServer(server);
    localStorage.setItem('nro_server', String(server));
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
      {/* 0. MÀN HÌNH TẢI TÀI NGUYÊN BAN ĐẦU */}
      {!assetsLoaded && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 select-none">
          <img 
            src="/assets/hud/giaodienngoai/chung/chuberong.png" 
            alt="Ngọc Rồng Online" 
            className="w-72 sm:w-96 object-contain mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          />

          <div className="w-full max-w-md bg-gray-950 border-2 border-yellow-500/80 rounded-2xl p-4 shadow-2xl flex flex-col gap-3">
            <div className="flex justify-between items-center text-xs font-dragon">
              <span className="text-yellow-300 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                Đang nạp đồ hoạ Sprite & Bản đồ...
              </span>
              <span className="text-yellow-400 font-bold text-sm">{loadPercent}%</span>
            </div>

            <div className="w-full bg-gray-900 rounded-xl h-4 p-0.5 border border-yellow-600/40 overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 rounded-lg transition-all duration-150 shadow-[0_0_12px_rgba(250,204,21,0.8)]"
                style={{ width: `${loadPercent}%` }}
              />
            </div>

            <p className="text-[11px] text-gray-400 text-center font-dragon mt-1">
              Khởi động hệ thống Web Edition 60 FPS chuẩn LibGDX...
            </p>
          </div>
        </div>
      )}

      {/* 1. MÀN HÌNH CHÍNH (MAIN MENU) CHUẨN LIBGDX DESKTOP */}
      {assetsLoaded && screenView === 'MENU' && (
        <MainMenu
          savedCharacter={savedCharacter}
          currentServer={currentServer}
          onEnterGame={handleEnterGame}
          onOpenCharacterCreate={() => setScreenView('CHAR_CREATE')}
          onOpenLogin={() => setShowLoginModal(true)}
          onOpenServerSelect={() => setShowServerSelect(true)}
          onClearData={handleClearData}
        />
      )}

      {/* 2. MÀN HÌNH CHỌN HÀNH TINH & TẠO NHÂN VẬT CHUẨN MANHINHCHOIMOI */}
      {assetsLoaded && screenView === 'CHAR_CREATE' && (
        <CharacterCreateModal
          currentServer={currentServer}
          onOpenServerSelect={() => setShowServerSelect(true)}
          onSelectCharacter={handleSelectCharacter}
          onClose={() => setScreenView('MENU')}
        />
      )}

      {/* 3. MÀN HÌNH SPLASH CHUYỂN CẢNH (MANHINHSPLASH) */}
      {screenView === 'SPLASH' && (
        <SplashScreen
          onFinish={() => setScreenView('GAME')}
          message="Đang tiến vào thế giới Ngọc Rồng..."
        />
      )}

      {/* 4. MODALS MỞ TỪ NGOÀI GIAO DIỆN */}
      {showServerSelect && (
        <ServerSelectModal
          currentServer={currentServer}
          onSelectServer={handleSelectServer}
          onClose={() => setShowServerSelect(false)}
        />
      )}

      {showLoginModal && (
        <LoginModal
          onLoginSuccess={handleLoginSuccess}
          onClose={() => setShowLoginModal(false)}
        />
      )}

      {/* 5. GIAO DIỆN TRONG GAME (GAME ENGINE & HUD) */}
      {screenView === 'GAME' && (
        <>
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 block w-full h-full cursor-crosshair z-0"
          />

          <div className="z-20 relative w-full h-full pointer-events-none">
            <HUD 
              player={playerState}
              engineRef={engineRef}
              onOpenInventory={() => setShowInventory(true)}
              onOpenShop={() => setShowShop(true)}
              onOpenLeaderboard={() => setShowLeaderboard(true)}
              onOpenSupabase={() => setShowSupabase(true)}
              onOpenShenron={() => setShowShenron(true)}
              onReturnToMenu={() => setScreenView('MENU')}
            />
          </div>

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
        </>
      )}
    </div>
  );
}

export default App;
