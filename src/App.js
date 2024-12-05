import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';
import CountdownTimer from './components/Countdown';
import LearnMoreModal from './components/LearnMore';
import LeftSection from './components/LeftSection';
import { slides, SlidesDiv } from './components/Slides';




// const PrizeAnnouncement = () => {
//   return (
//     <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-max">
//       <div className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
//         <div className="text-center">
//           <div className="text-lg text-white/80 mb-2">First Prize</div>
//           <div className="text-4xl font-bold text-[#00ffff]">500,000 UZS</div>
//         </div>
//       </div>
//     </div>
//   );
// };

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // Fix: Re-enable `currentSlide`
  const [isPaused, setIsPaused] = useState(false); // Use `isPaused` for carousel control

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
    <div className="min-h-screen w-full bg-gray-900"
     style={{
      background: 'linear-gradient(130deg, #1A1125 0%, #2B1B3B 50%, #1A1125 100%)',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      color: '#fff',
    }}>
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center items-start lg:items-center px-8 lg:px-0 text-left gap-10 relative">
          <LeftSection setIsModalOpen={setIsModalOpen} />
        </div>

        {/* Right Section - Slideshow */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center justify-center min-h-[600px] p-4">
          <CountdownTimer />

          {/* Navigation controls moved up */}
          <div className="absolute top-1/2 w-full px-4 flex justify-between z-20">
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
          <SlidesDiv currentSlide={currentSlide} setIsPaused={setIsPaused}/>
        </div>
      </div>

      <LearnMoreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;