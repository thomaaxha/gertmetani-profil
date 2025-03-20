import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 w-full max-w-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Timer className="text-blue-200" />
        <span className="text-lg md:text-xl">Numërimi mbrapsht deri në ditën e zgjedhjeve</span>
      </div>
      <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
        <div>
          <span className="text-2xl md:text-3xl font-bold block">{timeLeft.days}</span>
          <span className="text-xs md:text-sm">Ditë</span>
        </div>
        <div>
          <span className="text-2xl md:text-3xl font-bold block">{timeLeft.hours}</span>
          <span className="text-xs md:text-sm">Orë</span>
        </div>
        <div>
          <span className="text-2xl md:text-3xl font-bold block">{timeLeft.minutes}</span>
          <span className="text-xs md:text-sm">Minuta</span>
        </div>
        <div>
          <span className="text-2xl md:text-3xl font-bold block">{timeLeft.seconds}</span>
          <span className="text-xs md:text-sm">Sekonda</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;