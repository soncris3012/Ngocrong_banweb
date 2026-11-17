import React, { useEffect, useState } from 'react';

export const SplashScreen = ({ onFinish, message = "Đang tải dữ liệu..." }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const rotInterval = setInterval(() => {
      setRotation(prev => (prev + 12) % 360);
    }, 30);

    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 700);

    return () => {
      clearInterval(rotInterval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center select-none">
      {/* Dragon Boy Logo */}
      <img 
        src="/assets/hud/giaodienngoai/chung/chuberong.png" 
        alt="Chú Bé Rồng" 
        className="w-72 sm:w-96 object-contain mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
      />

      {/* Loading Spinner nr5s.png */}
      <div className="flex flex-col items-center gap-3">
        <img 
          src="/assets/hud/giaodienngoai/chung/nr5s.png" 
          alt="Loading..." 
          className="w-10 h-10 object-contain"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        <span className="font-dragon text-yellow-400 text-sm tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          {message}
        </span>
      </div>
    </div>
  );
};
