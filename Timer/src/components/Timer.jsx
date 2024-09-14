import React, { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(60); // Timer duration
  const [isRunning, setIsRunning] = useState(false); // Timer state (running or not)
  const intervalRef = useRef(null); // Interval reference

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(60);
  };

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  }, [time]);

  const getBackgroundColor = () => {
    if (time <= 10) return "red";
    return "green";
  };

  return (
    <div style={{ backgroundColor: getBackgroundColor(), padding: "20px" }}>
      <h1>
        Timer: {Math.floor(time / 60)}:{time % 60}
      </h1>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
