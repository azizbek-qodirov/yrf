import React from 'react';

const LogosDiv = () => {
  return (
    <div className="flex items-center justify-center md:ml-12">
      <img
        src="./images/yrf.png"
        alt="YRF Logo"
        className="h-16 md:h-24 lg:h-35 mt-6 md:mt-10"
      />
      <img
        src="./images/oxus2.png"
        alt="Oxus Logo"
        className="h-16 md:h-24 lg:h-40"
      />
    </div>
  );
};

export default LogosDiv;
