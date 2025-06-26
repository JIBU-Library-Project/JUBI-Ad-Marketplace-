import React, { useState, useEffect } from "react";

const SlidingHeadline = () => {
  const slogans = [
    { white: "Advertise Smarter,", yellow: "Sell Faster." },
    { white: "Smarter Ads,", yellow: "Greater Reach." },
    { white: "Reach More,", yellow: "Spend Less." },
    { white: "Think Ad,", yellow: "Just Post It." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === slogans.length - 1 ? 0 : prev + 1));
        setFade(true); // fade in
      }, 300); // match fade-out duration
    }, 3500); // delay between slides

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-5 pb-5">
      <p className="text-3xl md:text-4xl font- text-center overflow-hidden">
        <span
          className={`block transition-all duration-500 ease-in-out transform ${
            fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
        >
          <span className="text-white">{slogans[currentIndex].white} </span>
          <span className="text-yellow-400">
            {slogans[currentIndex].yellow}
          </span>
        </span>
      </p>
    </div>
  );
};

export default SlidingHeadline;
