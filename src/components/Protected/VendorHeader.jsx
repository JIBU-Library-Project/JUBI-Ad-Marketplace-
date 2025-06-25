import React from "react";
import { getUserFromToken } from "../../services/utils";
function VendorHeader() {
  const user = getUserFromToken();
  if (!user) {
    return;
  }
  const name = user?.companyName || user.firstName;
  const role = user?.role;

  return (
    <div className="flex items-center gap-3">
      <div className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold uppercase">
        {name.charAt(0)}
      </div>
      <div className="grid grid-cols-1 items-center leading-tight">
        <span className="text-md font-semibold text-[#7c8503]">{name}</span>
        <span className="text-xs text-[#bdbdbd]">{role} </span>{" "}
        {/* optional fallback */}
      </div>
    </div>
  );
}

export default VendorHeader;
