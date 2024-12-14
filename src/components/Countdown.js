import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('December 22, 2024 12:00:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { kun: 0, soat: 0, daqiqa: 0, sekund: 0 };
    }

    const kun = Math.floor(difference / (1000 * 60 * 60 * 24));
    const soat = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const daqiqa = Math.floor((difference / (1000 * 60)) % 60);
    const sekund = Math.floor((difference / 1000) % 60);

    return { kun: kun, soat: soat, daqiqa: daqiqa, sekund: sekund };
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
      <h2 className="text-center md:text-lg font-semibold text-white tracking-wider">
        Taqdimot marosimigacha<br/> qolgan vaqt:
      </h2>
      <div className="flex gap-1 md:gap-2 text-center items-center">
        {['kun', 'soat', 'daqiqa', 'sekund'].map((unit, index, arr) => (
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