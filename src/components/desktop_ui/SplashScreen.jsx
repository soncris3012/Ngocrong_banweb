import React, { useEffect, useState } from 'react';

export const SplashScreen = ({ onFinish }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const rotInterval = setInterval(() => {
      setRotation((prev) => (prev + 15) % 360);
    }, 25);

    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 680);

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
        className="w-[300px] sm:w-[340px] object-contain mb-4"
      />
      <img
        src="/assets/vatpham/vatphamgame/ngocrong/nr5s.png"
        alt=""
        className="w-7 h-7 object-contain mb-2"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      <span className="font-dragon text-white text-sm tracking-wide">
        Xin chờ...
      </span>
    </div>
  );
};
