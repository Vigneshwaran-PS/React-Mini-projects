import React, { useState, useEffect } from 'react';
import './DigitalColock.css';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const padZero = (val) => {
    return val < 10 ? '0' + val : val;
  };

  const meridium = (hour) => {
    return hour >= 12 ? 'PM' : 'AM';
  };

  const twelveHourFormat = (hour) => {
    const h = hour % 12;
    return h === 0 ? 12 : h;
  };

  return (
    <div className="clock-wrapper">
      <div className="cloak">
        <h1>Digital Clock</h1>
        <div className="time">
          {padZero(twelveHourFormat(time.getHours()))} : {padZero(time.getMinutes())} : {padZero(time.getSeconds())} {meridium(time.getHours())}
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
