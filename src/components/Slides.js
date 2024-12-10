import React from 'react';

const slides = [
  {
    title: "Muhim sanalar",
    icon: "📅",
    price: "11-dekabr",
    details: [
      { label: "Oxirgi muddat", value: "15-dekabr" },
      { label: "Tadqiqot davomiyligi", value: "7 kun" },
      { label: "Taqdimot sanasi", value: "22-dekabr" },
    ],
  },
  {
    title: "Mukofotlar",
    icon: "🏆",
    price: "500,000 UZS",
    details: [
      { label: "Birinchi o'rin", value: "500,000 UZS" },
      { label: "Ikkinchi o'rin", value: "300,000 UZS" },
      { label: "Uchinchi o'rin", value: "200,000 UZS" },
    ],
  },
  {
    title: "Talablar",
    icon: "👥",
    price: "4-6",
    details: [
      { label: "Yosh chegarasi", value: "12-19" },
      { label: "Guruh a'zolari", value: "4-6 kishi" },
      { label: "Manzil", value: "5-maktab" },
    ],
  },
  {
    title: "Imtiyozlar",
    icon: "🎁",
    price: "Bepul",
    details: [
      { label: "Coffe break", value: "Mavjud" },
      { label: "Networking", value: "Masterklass" },
      { label: "Boshqa", value: "Sertifikat va sovg'alar" },
    ],
  },
];

const SlidesDiv = ({ currentSlide, setIsPaused }) => {
  return (
    <div
      className="relative w-full px-4 md:px-16 z-10 mb-16 md:mb-24 mt-16 md:mt-20 lg:mt-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center justify-center">
        {slides.map((slide, index) => {
          const position = (index - currentSlide + slides.length) % slides.length;
          const getStyles = () => {
            const baseTransform = "translateX(-50%) scale(0.8)";
            const activeTransform = "translateX(-50%) scale(0.95)";
            
            switch (position) {
              case 0:
                return {
                  transform: activeTransform,
                  left: "50%",
                  opacity: 1,
                  zIndex: 20
                };
              case 1:
                return {
                  transform: baseTransform,
                  left: "80%",
                  opacity: 0.7,
                  zIndex: 10
                };
              case slides.length - 1:
                return {
                  transform: baseTransform,
                  left: "20%",
                  opacity: 0.7,
                  zIndex: 10
                };
              default:
                return {
                  transform: baseTransform,
                  left: "50%",
                  opacity: 0,
                  zIndex: 0
                };
            }
          };

          return (
            <div
              key={index}
              className="absolute w-[200px] sm:w-[220px] md:w-[280px] transition-all duration-500 ease-out"
              style={getStyles()}
            >
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-3 sm:p-4 md:p-6 backdrop-blur-xl border border-white/10">
                <div className="flex items-center justify-between mb-3 md:mb-6">
                  <div className="text-2xl sm:text-3xl md:text-4xl">{slide.icon}</div>
                  <div className="text-white/80 text-xs sm:text-sm">{slide.title}</div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-8">
                  {slide.price}
                </div>
                <div className="space-y-2 md:space-y-4 text-xs sm:text-sm md:text-base">
                  {slide.details.map((detail, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-white/60">{detail.label}</span>
                      <span className="text-white font-medium">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { SlidesDiv, slides };
