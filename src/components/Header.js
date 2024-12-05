import React from 'react';
import CountdownTimer from './Countdown';
import LogosDiv from './Logos';

const HeaderDiv = () => {
  return (
    <div className="flex justify-between align-center px-8 pt-5">
      <LogosDiv />
      <CountdownTimer />
    </div>
  );
};

export default HeaderDiv;
