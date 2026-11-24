import React, { useState, useEffect, useRef } from 'react';
import { GameEngine } from './game/GameEngine';
import { MainMenu } from './components/desktop_ui/MainMenu';
import { ServerSelectModal } from './components/desktop_ui/ServerSelectModal';
import { LoginModal } from './components/desktop_ui/LoginModal';
import { CharacterCreateModal } from './components/desktop_ui/CharacterCreateModal';
import { SplashScreen } from './components/desktop_ui/SplashScreen';
import { saveCharacterData, loadCharacterData } from './services/supabase';
import { assets } from './game/assetLoader';
import { MAPS_CONFIG, PLANET_DEFS, createStarterEquipment } from './game/nroData';

export function App() {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const hiddenInputRef = useRef(null);

  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);
  const [loadedCount, setLoadedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

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
    equipped: createStarterEquipment(0),
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
  const screenW = isPortrait ? viewport.winH : viewport.winW;
  const screenH = isPortrait ? viewport.winW : viewport.winH;
  const screenRatio = screenW / Math.max(1, screenH);

  // Tính toán Virtual Viewport linh hoạt chuẩn LibGDX FitViewport không viền đen (Zero Black Bars)
  // Trên màn hình dài (19.5:9, 20:9, 21:9): Giữ chiều cao 610, mở rộng chiều rộng (vd 1220, 1340, 1420)
  // Trên màn hình vuông/gập (Fold, iPad 4:3): Giữ chiều rộng 1020, mở rộng chiều cao (vd 765, 850)
  let virtualW = 1020;
  let virtualH = 610;
  if (screenRatio >= 1020 / 610) {
    virtualW = Math.round(610 * screenRatio);
    virtualH = 610;
  } else {
    virtualW = 1020;
    virtualH = Math.round(1020 / screenRatio);
  }
  const fitScale = screenW / virtualW;

  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.updateDimensions(virtualW, virtualH);
    }
  }, [virtualW, virtualH]);

  // Nạp tài nguyên phân tầng:
  // Giai đoạn 1: Nạp 31 ảnh giao diện Menu chính cực nhanh (< 1 giây) để người chơi thấy Menu ngay lập tức!
  // Giai đoạn 2: Nạp ngầm tài nguyên trong game (HUD, Tân thủ, World) trong khi người chơi ở Menu
  useEffect(() => {
    let active = true;

    async function startPreload() {
      await assets.preloadMenu((loaded, total, pct) => {
        if (!active) return;
        setLoadedCount(loaded);
        setTotalCount(total);
        setLoadPercent(pct);
      });

      if (!active) return;
      setAssetsLoaded(true);

      // Chạy ngầm nạp Game Core ngay lập tức
      assets.preloadGameCore();
    }

    startPreload();

    return () => {
      active = false;
    };
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

    const engine = new GameEngine(canvas, { ...playerState, serverId: currentServer, virtualW, virtualH }, {
      // KHÔNG gọi setPlayerState mỗi giây trong lúc đang chơi trên Canvas để triệt tiêu hoàn toàn hiện tượng React Re-render gây khựng 1Hz!
      onStateSync: null,
      onReturnToMenu: () => {
        if (engineRef.current) {
          const latest = { ...engineRef.current.player };
          setPlayerState(latest);
          setSavedCharacter(latest);
          saveCharacterData(latest);
        }
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

  const requestFullscreenSafe = () => {
    try {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        const el = document.documentElement;
        if (el.requestFullscreen) {
          el.requestFullscreen().catch(() => {});
        } else if (el.webkitRequestFullscreen) {
          el.webkitRequestFullscreen();
        }
      }
    } catch (_) {}
  };

  const toggleFullscreen = (e) => {
    if (e) e.stopPropagation();
    try {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        requestFullscreenSafe();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    } catch (_) {}
  };

  const tryLockLandscape = () => {
    requestFullscreenSafe();
    try {
      window.screen?.orientation?.lock?.('landscape')?.catch?.(() => {});
    } catch {
      // iOS Safari không hỗ trợ orientation.lock -> Đã tự xoay ngang 90° bằng Stage CSS!
    }
  };

  const handleEnterGame = async () => {
    tryLockLandscape();
    if (!assets.gameCoreReady) {
      setScreenView('SPLASH');
      await assets.preloadGameCore();
    }
    setScreenView('SPLASH');
  };

  const handleSelectCharacter = async (newChar) => {
    tryLockLandscape();
    setPlayerState(newChar);
    setSavedCharacter(newChar);
    localStorage.setItem('nro_last_character', newChar.name);
    saveCharacterData(newChar);
    if (!assets.gameCoreReady) {
      setScreenView('SPLASH');
      await assets.preloadGameCore();
    }
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
    <div
      onClick={requestFullscreenSafe}
      className="fixed inset-0 overflow-hidden bg-black select-none touch-none"
    >
      {/* NÚT BẬT/TẮT TOÀN MÀN HÌNH NỔI TRÊN GÓC (TỰ ĐỘNG CHUẨN TRÊN MỌI THIẾT BỊ) */}
      <button
        type="button"
        onClick={toggleFullscreen}
        className="fixed top-2.5 right-3.5 z-50 px-2.5 py-1 rounded bg-black/60 hover:bg-black/85 border border-yellow-500/50 text-[#fde047] font-dragon text-[11px] font-bold tracking-wide backdrop-blur-sm transition-transform active:scale-95 shadow-md flex items-center gap-1.5"
      >
        <span>⛶</span>
        <span>Toàn Màn Hình</span>
      </button>

      {/* KHUNG CHUẨN TỈ LỆ FitViewport DYNAMIC KHÔNG VIỀN ĐEN + TỰ ĐỘNG XOAY NGANG 90° TRÊN ĐIỆN THOẠI DỌC */}
      <div
        style={{
          position: 'absolute',
          width: `${virtualW}px`,
          height: `${virtualH}px`,
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
              className="w-72 object-contain mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]"
            />
            <img
              src="/assets/vatpham/vatphamgame/ngocrong/nr5s.png"
              alt=""
              className="w-9 h-9 object-contain animate-spin mb-3"
            />
            <p className="font-dragon text-[#fde047] text-sm font-bold tracking-wide mb-2">
              Đang tải dữ liệu trò chơi... {loadPercent}%
            </p>
            {/* Thanh tiến trình chuẩn Dragon Boy */}
            <div className="w-64 h-3.5 bg-[#2a1303] border border-[#78350f] rounded-full p-0.5 overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-yellow-300 rounded-full transition-all duration-75 ease-out"
                style={{ width: `${loadPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* 1. GIAO DIỆN NGOÀI (MAIN MENU CHUẨN MANHINHDANGNHAP) */}
        {assetsLoaded && screenView === 'MENU' && (
          <MainMenu
            savedCharacter={savedCharacter}
            currentServer={currentServer}
            virtualW={virtualW}
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
            virtualW={virtualW}
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
              className="absolute inset-0 block w-full h-full cursor-pointer z-10 touch-none"
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
