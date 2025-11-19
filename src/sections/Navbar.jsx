import { useState, useEffect } from "react";

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  // Update tijd elke seconde
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  // Format tijd als HH:MM:SS
  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <div className="fixed inset-x-0 top-0 z-20 w-full backdrop-blur-lg bg-primary/40 py-3 flex justify-between items-center px-6">
      {/* Naam */}
      <a
        href="/"
        className="text-xl font-bold text-white transition-colors hover:text-gray-300"
      >
        Alex's Weboplossingen
      </a>

      {/* Huidige tijd */}
      <p className="text-white font-mono">{formatTime(time)}</p>
    </div>
  );
};

export default Navbar;
