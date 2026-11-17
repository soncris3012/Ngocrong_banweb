import React, { useState, useEffect, useRef } from 'react';
import { GameEngine } from './game/GameEngine';
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
  const hiddenInputRef = useRef(null);

  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [loadPercent, setLoadPercent] = useState(12);

  // 'MENU' | 'CHAR_CREATE' | 'SPLASH' | 'GAME'
  const [screenView, setScreenView] = useState('MENU');

  const [showServerSelect, setShowServerSelect] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentServer, setCurrentServer] = useState(() => {
    const saved = localStorage.getItem('nro_server');
    return saved ? (isNaN(saved) ? saved : Number(saved)) : 1;
  });

  const [savedCharacter, setSavedCharacter] = useState(null);
  const [playerState, setPlayerState] = useState({
    name: 'SonGoku',
    planet: 0,
    characterIndex: 0,
    mapId: 0,
    x: 325,
    y: 175,
    hp: 1500,
    maxHp: 1500,
    ki: 1400,
    maxKi: 1400,
    attack: 75,
    defense: 15,
    crit: 8,
    power: 2000,
    potential: 2500,
    gold: 15000,
    gem: 50,
    senzuCount: 10,
    senzuLevel: 1,
    questId: 1,
    questProgress: 0
  });

  const [textInputActive, setTextInputActive] = useState(false);
  const [textInputVal, setTextInputVal] = useState('');

  // Nạp toàn bộ tài nguyên cốt lõi của repo DANG-PH/ngoc-rong-online
  useEffect(() => {
    assets.init();
    assets.onProgress((loaded, total) => {
      const pct = Math.min(100, Math.round((loaded / Math.max(1, total)) * 100));
      setLoadPercent(pct);
    });
    assets.waitForReady(4000).then(() => {
      setLoadPercent(100);
      setTimeout(() => setAssetsLoaded(true), 200);
    });
  }, []);

  // Tự động đọc nhân vật đã lưu trên máy hoặc Supabase
  useEffect(() => {
    const lastCharName = localStorage.getItem('nro_last_character');
    if (lastCharName) {
      loadCharacterData(lastCharName).then((data) => {
        if (data) {
          const validMap = typeof data.mapId === 'number' && data.mapId >= 0 && data.mapId <= 4 ? data.mapId : 0;
          const validY = data.y && data.y >= 100 && data.y <= 350 ? data.y : 175;
          const validX = data.x && data.x >= 40 ? data.x : 260;
          const normalized = { ...data, mapId: validMap, x: validX, y: validY };
          setSavedCharacter(normalized);
          setPlayerState((prev) => ({ ...prev, ...normalized }));
        } else {
          setSavedCharacter({ name: lastCharName, planet: 0 });
        }
      });
    }
  }, []);

  // Khởi chạy Engine LibGDX 60 FPS khi vào màn hình 'GAME' (KHÔNG dùng HUD HTML/Tailwind giả!)
  useEffect(() => {
    if (screenView !== 'GAME') return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = new GameEngine(canvas, playerState, {
      onStateSync: (syncedPlayer) => {
        setPlayerState(syncedPlayer);
      },
      onReturnToMenu: () => {
        setScreenView('MENU');
      },
      onTextInputToggle: (open, initialText = '') => {
        setTextInputActive(open);
        setTextInputVal(initialText);
        if (open) {
          setTimeout(() => hiddenInputRef.current?.focus(), 40);
        }
      }
    });

    engineRef.current = engine;
    window.__nroEngine = engine;
    engine.start();

    const saveInterval = setInterval(() => {
      if (engineRef.current) {
        saveCharacterData(engineRef.current.player);
      }
    }, 15000);

    return () => {
      clearInterval(saveInterval);
      engine.destroy();
      engineRef.current = null;
    };
  }, [screenView]);

  const handleEnterGame = () => {
    setScreenView('SPLASH');
  };

  const handleSelectCharacter = (newChar) => {
    setPlayerState(newChar);
    setSavedCharacter(newChar);
    localStorage.setItem('nro_last_character', newChar.name);
    saveCharacterData(newChar);
    setScreenView('SPLASH');
  };

  const handleLoginSuccess = (user) => {
    loadCharacterData(user.name).then((data) => {
      const charData = data || {
        name: user.name,
        planet: 0,
        characterIndex: 0,
        mapId: 0,
        x: 260,
        y: 175,
        power: 2000,
        potential: 2500
      };
      setSavedCharacter(charData);
      setPlayerState((prev) => ({ ...prev, ...charData }));
    });
  };

  const handleClearData = () => {
    localStorage.removeItem('nro_last_character');
    localStorage.removeItem('nro_account_user');
    setSavedCharacter(null);
  };

  const handleSelectServer = (server) => {
    setCurrentServer(server);
    localStorage.setItem('nro_server', String(server));
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black select-none">
      {/* 0. MÀN HÌNH NẠP TEXTURE KHỞI ĐẦU CHUẨN NRO */}
      {!assetsLoaded && (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 select-none">
          <img
            src="/assets/hud/giaodienngoai/chung/chuberong.png"
            alt="Ngọc Rồng Online"
            className="w-64 sm:w-80 object-contain mb-6"
          />
          <img
            src="/assets/vatpham/vatphamgame/ngocrong/nr5s.png"
            alt=""
            className="w-10 h-10 object-contain animate-spin mb-3"
          />
          <p className="font-dragon text-[#fde047] text-sm font-bold">
            Đang tải dữ liệu trò chơi... {loadPercent}%
          </p>
        </div>
      )}

      {/* 1. GIAO DIỆN NGOÀI (MAIN MENU CHUẨN MANHINHDANGNHAP) */}
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

      {/* 2. MÀN HÌNH TẠO NHÂN VẬT CHUẨN MANHINHCHOIMOI */}
      {assetsLoaded && screenView === 'CHAR_CREATE' && (
        <CharacterCreateModal
          currentServer={currentServer}
          onOpenServerSelect={() => setShowServerSelect(true)}
          onSelectCharacter={handleSelectCharacter}
          onClose={() => setScreenView('MENU')}
        />
      )}

      {/* 3. SPLASH NGỌC RỒNG XOAY CHUYỂN CẢNH */}
      {screenView === 'SPLASH' && (
        <SplashScreen
          onFinish={() => setScreenView('GAME')}
          message="Đang vào Nhà Gôhan..."
        />
      )}

      {/* 4. POPUP CHỌN MÁY CHỦ & ĐĂNG NHẬP */}
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

      {/* 5. MÀN HÌNH TRONG GAME THUẦN CANVAS LIBGDX 100% */}
      {screenView === 'GAME' && (
        <>
          <canvas
            ref={canvasRef}
            className="absolute inset-0 block w-full h-full cursor-pointer z-10"
          />

          {/* Cầu nối bàn phím ẩn khi mở khungchat.png để gõ Tiếng Việt & Giftcode trên cả PC lẫn Mobile */}
          {textInputActive && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (engineRef.current) {
                  engineRef.current.hud.submitChatOrGiftcode(textInputVal);
                }
              }}
              className="fixed top-0 left-0 opacity-0 pointer-events-none"
            >
              <input
                ref={hiddenInputRef}
                type="text"
                value={textInputVal}
                maxLength={64}
                onChange={(e) => {
                  const v = e.target.value;
                  setTextInputVal(v);
                  if (engineRef.current) {
                    engineRef.current.hud.chatInputText = v;
                  }
                }}
              />
            </form>
          )}
        </>
      )}
    </div>
  );
}

export default App;
