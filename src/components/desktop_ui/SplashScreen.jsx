import React, { useEffect, useState } from 'react';

export const SplashScreen = ({ onFinish, message = 'Đang tải bản đồ...' }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const rotInterval = setInterval(() => {
      setRotation((prev) => (prev + 18) % 360);
    }, 25);

    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 600);

    return () => {
      clearInterval(rotInterval);
      clearTimeout(timer);
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
