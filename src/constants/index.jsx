import { FaHome } from "react-icons/fa";

const K = {
  NAVLINKS: [
    {
      icon: <FaHome />,
      text: "Overview",
      path: "/dashboard",
    },
    {
      icon: <FaHome />,
      text: "All Adverts",
      path: "/dashboard/my-ads",
    },
    {
      icon: <FaHome />,
      text: "Create Advert",
      path: "/dashboard/create-ad",
    },
    {
      icon: <FaHome />,
      text: "Edit Ad",
      path: "/dashboard/ads/:id",
    },
  ],
};

export default K;
