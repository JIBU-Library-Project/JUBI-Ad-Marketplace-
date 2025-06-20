import { Outlet } from "react-router";
import SideBar from "../components/SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <SideBar />
     <div className="px-20">
       <Outlet />
     </div>
    </div>
  );
};

export default DashboardLayout;
