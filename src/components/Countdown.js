import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('December 15, 2024 00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
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