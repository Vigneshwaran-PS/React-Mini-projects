import React, { useState, useRef } from 'react';
import './StopWatch.css';

const StopWatch = () => {
  const [time, setTime] = useState({ sec: 0, mSec: 0 });
  const timerRef = useRef(null);

  const startTimer = () => {

    console.log(timerRef)
    if (timerRef.current) return; // Prevent multiple intervals

    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        let { sec, mSec } = prevTime;
        mSec += 1;
        if (mSec >= 10) {
          sec += 1;
          mSec = 0;
        }
        return { sec, mSec };
      });
    }, 100);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime({ sec: 0, mSec: 0 });
  };

  const padZero = (val) => {
    return val < 10 ? '0' + val : val;
  };

  return (
    <div className='stopwatch-wrapper'>
      <h1>Stop Watch</h1>

      <div className='stop-watch-time'>
        {padZero(time.sec)} : {padZero(time.mSec)}
      </div>

      <div className='stop-watch-button'>
        <button onClick={() => startTimer()}>Start</button>
        <button onClick={() => stopTimer()}>Stop</button>
        <button onClick={() => resetTimer()}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
