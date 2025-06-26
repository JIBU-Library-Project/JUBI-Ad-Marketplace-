import { BiLayer, BiLogoCreativeCommons, BiSolidWidget } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { LiaEditSolid } from "react-icons/lia";
import { RiAdvertisementFill } from "react-icons/ri";

const K = {
  NAVLINKS: [
    {
      icon: <FaHome />,
      text: "Overview",
      path: "/dashboard",
    },
    {
      icon: <BiLayer />,
      text: "All Adverts",
      path: "/dashboard/my-ads",
    },
    {
      icon: <BiSolidWidget />,
      text: "Create Advert",
      path: "/dashboard/create-ad",
    },

    {
      path: "/dashboard/ads/:id",
    },
  ],
};

export default K;
