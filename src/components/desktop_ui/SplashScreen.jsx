import React, { useEffect, useState } from 'react';
import { assets } from '../../game/assetLoader';

export const SplashScreen = ({ onFinish, message = 'Đang tải bản đồ...' }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const rotInterval = setInterval(() => {
      setRotation((prev) => (prev + 18) % 360);
    }, 25);

    let finished = false;
    let pollInterval = null;

    const complete = () => {
      if (finished) return;
      finished = true;
      if (pollInterval) clearInterval(pollInterval);
      if (onFinish) onFinish();
    };

    // Tối thiểu 500ms cho hiệu ứng ngọc rồng xoay mượt mà chuẩn Dragon Boy
    const minTimer = setTimeout(() => {
      if (assets.isGameCoreReady()) {
        complete();
      } else {
        pollInterval = setInterval(() => {
          if (assets.isGameCoreReady() || finished) {
            complete();
          }
        }, 50);

        // Safety timeout tối đa 2s
        setTimeout(complete, 2000);
      }
    }, 500);

    return () => {
      finished = true;
      clearInterval(rotInterval);
      clearTimeout(minTimer);
      if (pollInterval) clearInterval(pollInterval);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center select-none">
      <img
        src="/assets/hud/giaodienngoai/chung/chuberong.png"
        alt="Chú Bé Rồng"
        className="w-[280px] sm:w-[320px] object-contain mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
      />
      <img
        src="/assets/vatpham/vatphamgame/ngocrong/nr5s.png"
        alt=""
        className="w-8 h-8 object-contain mb-3"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      <span className="font-dragon text-[#fde047] text-sm tracking-wide font-bold drop-shadow">
        {message}
      </span>
    </div>
  );
};
export default SplashScreen;
