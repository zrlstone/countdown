import React from 'react';
import CountdownTimer from './CountdownTimer';

import './App.css';

export default function App() {
  // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const targetTameDate = new Date('August 25, 2022 15:00:00').getTime();

  // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div>
      <div>
        <h1 class='header'>Tame Impala Countdown Timer</h1>
      </div>
      <CountdownTimer targetDate={targetTameDate} />
    </div>
  );
}