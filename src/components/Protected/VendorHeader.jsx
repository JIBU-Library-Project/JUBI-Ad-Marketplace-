import React from "react";

function VendorHeader() {
  const username = localStorage.getItem("username") || "Vendor";

  return (
    <div className="flex items-center  gap-3">
      <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold uppercase">
        {username.charAt(0)}
      </div>
      <div className="grid grid-cols-1 items-center leading-tight">
        <span className="text-md font-semibold text-[#7c8503] ">{username}</span>
        <span className="text-xs text-[#bdbdbd] ">Vendor</span>
      </div>
    </div>
  );
}

export default VendorHeader;