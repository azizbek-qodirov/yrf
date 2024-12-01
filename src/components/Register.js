import { AlertCircle } from 'lucide-react';
import React from 'react';

const Register = () => {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Join?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Don't miss this opportunity to showcase your research skills and win amazing prizes!
        </p>
        
        {/* Registration deadline alert */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 mb-8 inline-flex items-center">
          <AlertCircle className="mr-2" />
          <span>Registration closes on December 10</span>
        </div>
        
        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-50 transition-colors">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Register;