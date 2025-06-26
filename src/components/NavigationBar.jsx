import { useNavigate } from "react-router";
import logo from "../assets/jubimarklogo.png";
import { toast } from "react-toastify";

const NavigationBar = () => {
  const navigate = useNavigate()



  const handleLogout = () => {
  localStorage.removeItem("accessToken")
  toast("You've logged out successfully");
    navigate("/login");
  };

  return (
    <div className=" flex h-20 justify-between pr-20 items-center bg-[#ffffff]/70 backdrop-blur-md border-b-3 border-[#0b8607] shadow-2xl fixed top-0 left-0 right-0 z-50">
     <button className="hover:cursor-pointer" onClick={()=> navigate('/user-homepage') }>
       <div className="flex items-center space-x-2 flex-shrink-0 pl-20">
        <img src={logo} alt="" className="w-40" />
      </div>
     </button>
      <span className="pl-10 flex flex-wrap">
        <button className="bg-[#272822] p-2 pr-5 pl-5 rounded-[10px] hover:bg-gray-700 hover:cursor-pointer text-white " 
        onClick={()=>navigate('/user-homepage')}>
          Home{" "}
        </button>
        <button className="bg-[#08a258] p-2 pr-5   pl-5  ml-5 rounded-[10px] hover:bg-green-400 hover:cursor-pointer text-white " 
        onClick={()=>navigate('/ads')}>
          View All Ads{" "}
        </button>

        <button
            onClick={handleLogout}
            className="bg-[#ff0e06] p-2 pr-5   pl-5  ml-5 rounded-[10px] hover:bg-red-400 hover:cursor-pointer text-white " 
          >
            Logout
          </button>
      </span>
    </div>
  );
};

export default NavigationBar;
