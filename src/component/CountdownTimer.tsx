import React from "react";
import { useCountdown } from "../hooks/useCountdown";

type CountdownProps = {
  targetDate: number;
};

const DateTimeDisplay = ({
  value,
  label,
  highlight = false,
}: {
  value: number;
  label: string;
  highlight?: boolean;
}) => (
  <div className={`flex flex-col items-center mx-2 p-2 rounded-lg ${highlight ? "bg-pink-600 text-white" : "bg-slate-800/80 text-white"}`}>
    <span className="text-3xl font-bold">{String(value).padStart(2, "0")}</span>
    <span className="text-xs uppercase tracking-widest">{label}</span>
  </div>
);

export const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <div className="text-center text-white">
        <h2 className="text-2xl font-semibold mb-2">We’re Live!</h2>
        <p>Welcome to our site.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center space-x-2">
      <DateTimeDisplay value={days} label="Days" highlight={days <= 3} />
      <span className="text-3xl font-bold text-white">:</span>
      <DateTimeDisplay value={hours} label="Hours" />
      <span className="text-3xl font-bold text-white">:</span>
      <DateTimeDisplay value={minutes} label="Minutes" />
      <span className="text-3xl font-bold text-white">:</span>
      <DateTimeDisplay value={seconds} label="Seconds" />
    </div>
  );
};
