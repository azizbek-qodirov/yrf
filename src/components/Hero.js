import { ArrowDown } from 'lucide-react';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-blue-600 to-blue-400 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Main content */}
      <div className="relative container mx-auto px-6 pt-32">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">Kelajagimizning Yosh Tadqiqotchilari</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Engage in real-world research, develop analytical thinking, and showcase your problem-solving skills
          </p>
          
          {/* Prize highlight */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 inline-block">
            <p className="text-2xl font-semibold">First Prize: 500,000 UZS</p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} />
        </div>
      </div>
    </div>
  );
};

export default Hero;