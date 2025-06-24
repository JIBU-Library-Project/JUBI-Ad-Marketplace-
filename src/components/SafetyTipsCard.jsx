// components/SafetyTipsCard.jsx
import React, { useState } from "react";

// const safetyTips = [
//   "Share photos and ask lots of questions about the items you are buying and selling.",
//   "Always meet in a public, well-lit area for in-person transactions.",
//   "Never send money in advance for an item you haven't seen.",
//   "Verify the identity of the seller or buyer before making a deal.",
//   "Trust your instincts — if it sounds too good to be true, it probably is."
// ];

const safetyTips = [
  "Always ask the vendor for clear photos and details before making a decision.",
  "Meet vendors in safe, public places — avoid isolated locations.",
  "Never send money in advance to a vendor you haven’t met or verified.",
  "Double-check the item’s condition in person before paying.",
  "If anything feels suspicious or rushed, walk away — your safety comes first."
];


function SafetyTipsCard() {
  const [index, setIndex] = useState(0);

  const nextTip = () => {
    setIndex((prev) => (prev + 1) % safetyTips.length);
  };

  const prevTip = () => {
    setIndex((prev) => (prev - 1 + safetyTips.length) % safetyTips.length);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold text-[#464646] ">Stay Safe</h2>
        
        </div>
        <hr className="pb-6 text-gray-400" />
      

      <p className="text-sm text-gray-600 italic mb-4 pb-8">"{safetyTips[index]}"</p>

      <div className="flex items-center justify-between text-sm">
        <button
          onClick={prevTip}
          className="text-white font-bold hover:cursor-pointer bg-green-500 p-2"
        >
         &#8592;
        </button>
        <span className="text-gray-500  flex item">
          {index + 1} of {safetyTips.length}
        </span>
        <button
          onClick={nextTip}
          className="text-white font-bold hover:cursor-pointer bg-green-500 p-2"
        >
           &#8594;
        </button>
      </div>

      <div className="mt-2 pt-5">
        <a
          href="/safety-tips"
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          Read all safety tips
        </a>
      </div>
    </div>
  );
}

export default SafetyTipsCard;