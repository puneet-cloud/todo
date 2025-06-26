import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    // Calculate the difference between the target date and the current date
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    // If there's still time left, calculate days, hours, minutes, and seconds
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // Set up an interval to update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  // Map the time left object to displayable components
  const timerComponents = Object.keys(timeLeft).map((unit) => {
    // Only render if the unit has a value (e.g., if days are 0, still show '00')
    if (timeLeft[unit] === undefined) {
      return null;
    }

    return (
      <div key={unit} className="flex flex-col items-center mx-2 sm:mx-4">
        <div className="bg-slate-800 border border-slate-700 p-4 sm:p-6 rounded-xl w-20 h-24 sm:w-28 sm:h-32 flex items-center justify-center mb-2 shadow-xl">
          {/* Display the time unit, padded with a leading zero if necessary */}
          <span className="text-5xl sm:text-6xl font-bold text-blue-400 font-mono">
            {String(timeLeft[unit]).padStart(2, '0')}
          </span>
        </div>
        {/* Display the label for the time unit */}
        <span className="text-gray-400 uppercase text-xs sm:text-sm font-semibold tracking-wide">
          {unit}
        </span>
      </div>
    );
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 to-slate-950 p-6 sm:p-10 flex flex-col items-center justify-center w-full rounded-lg shadow-2xl mb-8">
      <h3 className="text-white text-lg sm:text-2xl font-bold tracking-widest uppercase mb-8">
        You have 
      </h3>
      {timerComponents.length ? (
        // Render the countdown components if there's time left
        <div className="flex justify-center flex-wrap">
          {timerComponents}
        </div>
      ) : (
        // Display a message when the countdown reaches zero
        <span className="text-white text-3xl font-bold">Launch Day!</span>
      )}

    </div>
  );
};

export default CountdownTimer;