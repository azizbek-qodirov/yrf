import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

const slides = [
  {
    title: "Important Dates",
    icon: "📅",
    price: "Dec 10",
    details: [
      { label: "Registration", value: "Dec 10" },
      { label: "Research Period", value: "7 days" },
      { label: "Final Presentation", value: "Dec 18" },
    ],
  },
  {
    title: "Awards",
    icon: "🏆",
    price: "500k",
    details: [
      { label: "First Place", value: "500,000 UZS" },
      { label: "Second Place", value: "300,000 UZS" },
      { label: "Third Place", value: "200,000 UZS" },
    ],
  },
  {
    title: "Eligibility",
    icon: "👥",
    price: "7-11",
    details: [
      { label: "Grade Level", value: "7-11" },
      { label: "Location", value: "School No. 5" },
      { label: "Certificate", value: "Included" },
    ],
  },
  {
    title: "Benefits",
    icon: "🎁",
    price: "Free",
    details: [
      { label: "Refreshments", value: "Provided" },
      { label: "Networking", value: "Industry Experts" },
      { label: "Extras", value: "Special Gifts" },
    ],
  },
];

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 4000);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  return (
    <div className="min-h-screen w-full bg-gray-900">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-4 md:p-8 flex flex-col items-center lg:items-start">
          <h1
            className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8"
            style={{
              background: "linear-gradient(to right, #3b82f6, #a855f7)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Kelajagimizning Yosh Tadqiqotchilari
          </h1>

          {/* Project Image */}
          <div className="w-full mb-6 rounded-2xl overflow-hidden">
            <img
              style={{ maxHeight: "500px" }}
              src="/images/oxus_image.webp"
              alt="Research Competition"
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="text-lg text-gray-300 text-center lg:text-left">
            "Young Researchers of the Future" loyihasi o'quvchilarni ilmiy-tadqiqot faoliyatiga jalb qilish va
            ularning tahliliy fikrlash hamda muammolarni hal qilish ko'nikmalarini rivojlantirishga yo'naltirilgan.
            Loyihaning asosiy maqsadi o'quvchilarni iqtisodiyot va geografiya fanlari bo'yicha real muammolarni
            tahlil qilish va yechimlar ishlab chiqishga o'rgatishdir.
          </p>

          {/* Prize Highlight */}
          <div className="mt-6 p-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl backdrop-blur-xl border border-white/10 text-center lg:text-center w-2/3">
            <p className="text-white/80 mb-1">First Place Prize</p>
            <p className="text-2xl font-bold text-white">500,000 UZS</p>
          </div>
        </div>

        {/* Right Section - Slideshow */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center justify-center min-h-[600px] p-4">
          {/* Globe Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/earth.png"
              alt="Globe"
              className="w-[800px] h-[800px] object-cover rounded-full opacity-50 ml-5"
            />
          </div>

          {/* Slides Container */}
          <div 
            className="relative w-full px-8 md:px-16 z-10 mb-24"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center justify-center mt-20">
              {slides.map((slide, index) => {
                const position = (index - currentSlide + slides.length) % slides.length;
                const getStyles = () => {
                  const baseTransform = "translateX(-50%) scale(0.85)";
                  const activeTransform = "translateX(-50%) scale(1)";

                  switch (position) {
                    case 0:
                      return {
                        transform: activeTransform,
                        left: "50%",
                        opacity: 1,
                        zIndex: 20,
                      };
                    case 1:
                      return {
                        transform: baseTransform,
                        left: "85%",
                        opacity: 0.7,
                        zIndex: 10,
                      };
                    case slides.length - 1:
                      return {
                        transform: baseTransform,
                        left: "15%",
                        opacity: 0.7,
                        zIndex: 10,
                      };
                    default:
                      return {
                        transform: baseTransform,
                        left: "50%",
                        opacity: 0,
                        zIndex: 0,
                      };
                  }
                };

                return (
                  <div
                    key={index}
                    className="absolute w-[220px] md:w-[280px] transition-all duration-500 ease-out"
                    style={getStyles()}
                  >
                    <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl p-4 md:p-6 backdrop-blur-xl border border-white/10">
                      <div className="flex items-center justify-between mb-4 md:mb-6">
                        <div className="text-3xl md:text-4xl">{slide.icon}</div>
                        <div className="text-white/80 text-sm">{slide.title}</div>
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
                        {slide.price}
                      </div>
                      <div className="space-y-3 md:space-y-4 text-sm md:text-base">
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

          {/* Controls and Register Button Container */}
          <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-6">
            {/* Navigation */}
            <div className="flex items-center justify-evenly gap-20">

              <button
                onClick={prevSlide}
                className="text-white/70 hover:text-white transition-colors"
              >
                <ArrowLeftCircle size={40} />
              </button>
              <button
                onClick={nextSlide}
                className="text-white/70 hover:text-white transition-colors"
              >
                <ArrowRightCircle size={40} />
              </button>
            </div>

            {/* Register Button */}
            <button className="bg-gradient-to-r mb-20 from-blue-600 to-purple-600 text-white px-6 py-3 px-10 mb-10  rounded-lg shadow-lg hover:opacity-90 transition-opacity">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;