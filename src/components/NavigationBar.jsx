import { useNavigate } from "react-router";
import logo from "../assets/jubimarklogo.png";

const NavigationBar = () => {
  const navigate = useNavigate()

  return (
    <div className=" flex h-20 justify-between pr-20 items-center bg-[#ffffff]/70 backdrop-blur-md border-b-3 border-[#0b8607] shadow-2xl fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-2 flex-shrink-0 pl-20">
        <img src={logo} alt="" className="w-40" />
      </div>
      <span className="pl-10">
        <button className="bg-[#08a258] p-2 pr-5 pl-5 rounded-[10px] hover:bg-green-400 text-white " 
        onClick={()=>navigate('/ads')}>
          View All Ads{" "}
        </button>
      </span>
    </div>
  );
};

export default NavigationBar;
