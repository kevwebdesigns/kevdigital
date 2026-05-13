import { useState, useEffect } from 'react';

const DURATION = 15 * 60; // 15 minutes in seconds

function getDeadline(): number {
  const stored = localStorage.getItem('offer_deadline');
  if (stored) {
    const deadline = parseInt(stored, 10);
    if (deadline > Date.now()) return deadline;
  }
  const newDeadline = Date.now() + DURATION * 1000;
  localStorage.setItem('offer_deadline', String(newDeadline));
  return newDeadline;
}

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(DURATION);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const deadline = getDeadline();
    const remaining = Math.max(0, Math.floor((deadline - Date.now()) / 1000));
    setSeconds(remaining);
    setMounted(true);

    const interval = setInterval(() => {
      const now = Date.now();
      const rem = Math.max(0, Math.floor((deadline - now) / 1000));
      setSeconds(rem);
      if (rem === 0) {
        // Reset
        const newDeadline = Date.now() + DURATION * 1000;
        localStorage.setItem('offer_deadline', String(newDeadline));
        setSeconds(DURATION);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  const pad = (n: number) => String(n).padStart(2, '0');

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <div className="countdown-box">
        <div className="countdown-digit">{pad(h)}</div>
        <div className="countdown-label">Hours</div>
      </div>
      <div className="text-3xl sm:text-4xl font-black text-galaxy-glow pb-5">:</div>
      <div className="countdown-box">
        <div className="countdown-digit">{pad(m)}</div>
        <div className="countdown-label">Minutes</div>
      </div>
      <div className="text-3xl sm:text-4xl font-black text-galaxy-glow pb-5">:</div>
      <div className="countdown-box">
        <div className="countdown-digit">{pad(s)}</div>
        <div className="countdown-label">Seconds</div>
      </div>
    </div>
  );
}
