import React from 'react';
import CountdownTimer from './Countdown';
import LogosDiv from './Logos';

const HeaderDiv = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 pt-4 md:pt-5 gap-4 md:gap-0">
      <LogosDiv />
      <CountdownTimer />
    </div>
  );
};

export default HeaderDiv;
