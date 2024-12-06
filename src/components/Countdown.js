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
    <div className="flex flex-col items-center gap-4 text-white md:absolute md:top-8 md:right-8 backdrop-blur-lg rounded-xl p-4 md:p-6 border-white/10">
      <h2 className="text-base md:text-lg font-semibold text-white tracking-wider">
        Remaining Time
      </h2>
      <div className="flex gap-1 md:gap-2 text-center items-center">
        {['days', 'hours', 'minutes', 'seconds'].map((unit, index, arr) => (
          <React.Fragment key={index}>
            <div className="flex flex-col">
              <div 
                className="bg-gray-800 rounded-lg p-2 md:p-3 min-w-[45px] md:min-w-[60px] shadow-lg" 
                style={{
                  boxShadow: "10px 10px 1px rgba(0, 0, 0, 0.25)"
                }}
              >
                <span className="text-lg md:text-2xl font-bold text-white">
                  {String(timeLeft[unit]).padStart(2, '0')}
                </span>
              </div>
              <span className="text-sm md:text-base text-gray-400 mt-1">
                {unit.toUpperCase()}
              </span>
            </div>
            {index < arr.length - 1 && (
              <span className="text-lg md:text-2xl font-bold text-white mt-[-20px] md:mt-[-30px]">
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;