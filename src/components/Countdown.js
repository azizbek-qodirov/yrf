import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prev, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prev, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="absolute top-8 right-8 bg-gray-900/80 backdrop-blur-lg rounded-xl p-6 border border-white/10"
      style={{
        boxShadow: "0 0 6px 2px rgba(0, 216, 255, 0.7)",
        background: 'linear-gradient(130deg, #1A1125 0%, #2B1B3B 50%, #1A1125 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        color: '#fff',
      }}
    >
      <div className="flex gap-4 text-center">
        <div className="flex flex-col" >
          <div className="bg-gray-800 rounded-lg p-3 min-w-[60px]">
            <span className="text-2xl font-bold text-white">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
          </div>
          <span className="text-1xl text-white-400 mt-1">DAYS</span>
        </div>
        <div className="flex flex-col">
          <div className="bg-gray-800 rounded-lg p-3 min-w-[60px]">
            <span className="text-2xl font-bold text-white">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
          </div>
          <span className="text-1xl text-white-400 mt-1">HOURS</span>
        </div>
        <div className="flex flex-col">
          <div className="bg-gray-800 rounded-lg p-3 min-w-[60px]">
            <span className="text-2xl font-bold text-white">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
          </div>
          <span className="text-1xl text-white-400 mt-1">MINUTES</span>
        </div>
        <div className="flex flex-col">
          <div className="bg-gray-800 rounded-lg p-3 min-w-[60px]">
            <span className="text-2xl font-bold text-white">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
          <span className="text-1xl text-white-400 mt-1">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;