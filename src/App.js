import React from 'react';
import CountdownTimer from './CountdownTimer';

import './App.css';

export default function App() {
  const targetTameDate = new Date('August 25, 2022 15:00:00').getTime();

  return (
    <div class='background'>
      <div class='container'>
        <div>
          <h1 class='header font-face-m show-counter'>Tame Impala Countdown</h1>
        </div>
        <CountdownTimer targetDate={targetTameDate} />
        <div>
          <h3 class='header font-face-m show-counter'>Not long to go now Babs!</h3>
        </div>
      </div>
    </div>
  );
}