import { Outlet, useNavigate } from "react-router";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const DashboardLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    //retrieve token from local storage
    const token = localStorage.getItem("accessToken");

    // if no token, navigate to login
    if (!token) {
      navigate("/");
    }  
  }, []);

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
