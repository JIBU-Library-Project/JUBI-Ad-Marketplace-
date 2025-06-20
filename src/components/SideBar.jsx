import React from "react";
import K from "../constants";
import { NavLink } from "react-router";

function SideBar() {
  return (
    <div className="bg-black w-60 h-screen  p-10 py-20 text-white  ">
      <span>LOGO</span>
      <div className="flex flex-col gap-y-5 mt-10">
        {K.NAVLINKS.map(({ icon, text, path }) => (
          <NavLink to={path} className="flex items-center gap-x-2 hover:bg-amber-50 hover:text-purple-400 p-3 rounded-md">
            <span>{icon}</span>
            <span>{text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
