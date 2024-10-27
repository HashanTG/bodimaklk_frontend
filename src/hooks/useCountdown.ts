// src/hooks/useCountdown.ts
import { useEffect, useState } from "react";

const getTimeLeft = (targetDate: number) => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  const timeLeft = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };

  return difference > 0 ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

export function useCountdown(targetDate: number) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds] as const;
}
