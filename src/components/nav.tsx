"use client";
import { Network, Power, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Nav() {
  const [dateTime, setDateTime] = useState(getDateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getDateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getDateTime() {
    const now = new Date();
    const date = now.getDate();
    const month = now.toLocaleString("en-US", { month: "short" });
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${month} ${date} ${hours}:${minutes}`;
  }
  return (
    <header className="flex items-center justify-between w-full p-1 bg-[#070419] shadow-md">
      <div className="ml-16"></div>
      <h1 className="text-md font-medium text-white">{dateTime}</h1>
      <div className="flex items-center text-white space-x-3">
        <Network size={16} />
        <Volume2 size={16} />
        <Power size={16} />
      </div>
    </header>
  );
}
