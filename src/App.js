import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import HeaderDiv from './components/Header';
import LearnMoreModal from './components/LearnMore';
import LeftSection from './components/LeftSection';
import RegistrationForm from './components/RegistrationForm';
import { slides, SlidesDiv } from './components/Slides';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isRegistrationVisible, setIsRegistrationVisible] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 4000);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  return (
    <div className="h-screen w-full bg-gray-900 Main-bg flex flex-col overflow-hidden" style={{
      background: "linear-gradient(130deg, #1A1125 0%, #2B1B3B 50%, #1A1125 100%)",
    }}>
      {/* Header - Full Width */}
      <div className="flex-none">
        <HeaderDiv />
      </div>
      {/* Content Container */}
      <div className="flex-1 flex items-center"> 
        {isRegistrationVisible ? (
          <RegistrationForm onBack={() => setIsRegistrationVisible(false)} />
        ) : (
          <div className="flex flex-col lg:flex-row items-center w-full">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:items-center px-8 lg:px-0 text-left gap-10">
              <LeftSection 
                setIsModalOpen={setIsModalOpen} 
                setIsRegistrationVisible={setIsRegistrationVisible} 
              />
            </div>
            {/* Right Section - Slideshow */}
            <div className="w-full lg:w-[48%] relative flex flex-col items-center justify-center">
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20">
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
              {/* Slides Container */}
              <div className="w-full flex items-center justify-center">
                <SlidesDiv currentSlide={currentSlide} setIsPaused={setIsPaused} />
              </div>
            </div>
          </div>
        )}
      </div>
      <LearnMoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;