import React, { useRef, useState } from 'react';
import './Toggle.css';

const Toggle = () => {
  const barRef = useRef(null);
  const progressRef = useRef(0);
  const [showRef,setShowRef] = useState(false)

  const progress = () => {
    setShowRef(true)
    progressRef.current = 0;

    const interval = setInterval(() => {
      if (progressRef.current >= 100) {
        clearInterval(interval);
        return;
      }

      progressRef.current += 10;

      if (barRef.current) {
        barRef.current.style.transform = `translateX(${progressRef.current - 100}%)`;
      }
    }, 300);
  };

  return (
    <div className='toggle-container'>
      <div className="toggle-wrapper">
        <h2>Toggle Progress</h2>

        <div className="toggle">
         {
            showRef &&
            <div className='bar-wrapper'>
                <p className='bar' ref={barRef}></p>
            </div>
         }

          <button onClick={progress}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
