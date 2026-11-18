import React, { useState, useEffect, useRef } from 'react';
import { GameEngine } from './game/GameEngine';
import { MainMenu } from './components/desktop_ui/MainMenu';
import { ServerSelectModal } from './components/desktop_ui/ServerSelectModal';
import { LoginModal } from './components/desktop_ui/LoginModal';
import { CharacterCreateModal } from './components/desktop_ui/CharacterCreateModal';
import { SplashScreen } from './components/desktop_ui/SplashScreen';
import { saveCharacterData, loadCharacterData } from './services/supabase';
import { assets } from './game/assetLoader';
import { MAPS_CONFIG, PLANET_DEFS } from './game/nroData';

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
    saveVersion: 4,
    name: PLANET_DEFS[0].defaultPlayerName,
    planet: 0,
    characterIndex: 0,
    mapId: 0,
    x: 325,
    y: 175,
    hp: 360,
    maxHp: 360,
    ki: 360,
    maxKi: 360,
    attack: 26,
    defense: 4,
    crit: 3,
    power: 1200,
    potential: 1200,
    gold: 2000,
    gem: 20,
    senzuCount: 5,
    senzuLevel: 1,
    skillLoadout: [0, -1, -1, -1, -1],
    skillLevels: { td_1: 1 },
    questId: 1,
    questStep: 0,
    questProgress: 0
  });

  const [textInputActive, setTextInputActive] = useState(false);
  const [textInputVal, setTextInputVal] = useState('');

  // Tự động co giãn chuẩn tỉ lệ FitViewport(1020, 610) & tự xoay ngang 90° nếu mở dọc trên điện thoại
  const [viewport, setViewport] = useState(() => ({
    winW: typeof window !== 'undefined' ? window.innerWidth : 1020,
    winH: typeof window !== 'undefined' ? window.innerHeight : 610
  }));

  useEffect(() => {
    let rafId = 0;
    const syncViewport = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setViewport({
          winW: window.innerWidth || 1020,
          winH: window.innerHeight || 610
        });
      });
    };
    window.addEventListener('resize', syncViewport);
    window.addEventListener('orientationchange', syncViewport);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', syncViewport);
      window.removeEventListener('orientationchange', syncViewport);
    };
  }, []);

  const isPortrait = viewport.winH > viewport.winW;
  const landW = isPortrait ? viewport.winH : viewport.winW;
  const landH = isPortrait ? viewport.winW : viewport.winH;
  const fitScale = Math.max(0.1, Math.min(landW / 1020, landH / 610));

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
          const homeMap = PLANET_DEFS[data.planet || 0]?.homeMapId || 0;
          const validMap = typeof data.mapId === 'number' && data.mapId >= 0 && data.mapId < MAPS_CONFIG.length ? data.mapId : homeMap;
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

  const tryLockLandscape = () => {
    try {
      window.screen?.orientation?.lock?.('landscape')?.catch?.(() => {});
    } catch {
      // iOS Safari không hỗ trợ orientation.lock -> Đã tự xoay ngang 90° bằng Stage CSS!
    }
  };

  const handleEnterGame = () => {
    tryLockLandscape();
    setScreenView('SPLASH');
  };

  const handleSelectCharacter = (newChar) => {
    tryLockLandscape();
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
    <div className="fixed inset-0 overflow-hidden bg-black select-none touch-none">
      {/* KHUNG CHUẨN TỈ LỆ FitViewport(1020, 610) + TỰ ĐỘNG XOAY NGANG 90° TRÊN ĐIỆN THOẠI DỌC */}
      <div
        style={{
          position: 'absolute',
          width: '1020px',
          height: '610px',
          left: '50%',
          top: '50%',
          transformOrigin: 'center center',
          transform: `translate(-50%, -50%) ${isPortrait ? 'rotate(90deg) ' : ''}scale(${fitScale})`
        }}
        className="overflow-hidden bg-black"
      >
        {/* 0. MÀN HÌNH NẠP TEXTURE KHỞI ĐẦU CHUẨN NRO */}
        {!assetsLoaded && (
          <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6 select-none">
            <img
              src="/assets/hud/giaodienngoai/chung/chuberong.png"
              alt="Ngọc Rồng Online"
              className="w-72 object-contain mb-6"
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
            message={`Đang vào ${MAPS_CONFIG[playerState.mapId]?.name || 'Nhà Gôhan'}...`}
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
              className="absolute inset-0 block w-[1020px] h-[610px] cursor-pointer z-10 touch-none"
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
    </div>
  );
}

export default App;
