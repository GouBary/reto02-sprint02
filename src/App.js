import "./App.css";
import React, { useState, useEffect } from "react";
import Clock from "./components/Clock";

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("May 30, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance > 0) {
        // Stop Timer
        clearInterval(interval.current);
      
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  });

  return (
    <div className="App">
      <div className="img2">
   <img src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1654716684/drive-download-20220608T192311Z-001/bg-stars_pv7oum.svg"/>
      </div>
      <h3>WE´RE LAUNCHING SOON</h3>
    <div className="Clock">
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
        <div className="iconos">
        <img src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1654716684/drive-download-20220608T192311Z-001/icon-facebook_fiankr.svg"/>
        ....      
        <img src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1654716684/drive-download-20220608T192311Z-001/icon-instagram_xnnedc.svg"/>
        ....
        <img src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1654716685/drive-download-20220608T192311Z-001/icon-pinterest_emojhk.svg"/>
        </div>
      </div>
       <div className="img1">
   <img src="https://res.cloudinary.com/dcdmk6vze/image/upload/v1654716685/drive-download-20220608T192311Z-001/pattern-hills_kqhvqw.svg"/>
      </div>
    </div>
  );
}

export default App;