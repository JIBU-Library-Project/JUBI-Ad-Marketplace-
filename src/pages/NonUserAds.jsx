import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyAds } from "../data/dummyAds";

function NonUserAds() {
  const [ads, setAds] = useState([]);
  const navigate = useNavigate();


const handleViewMore = () => {alert("Log in or Create an Account to See More Ads")
  navigate('/login')
}

  useEffect(() => {
    const shuffled = [...dummyAds].sort(() => 0.5 - Math.random());
    setAds(shuffled.slice(0, 9));
  }, []);

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Browse Ads</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ads.map((ad) => (
          <div
            key={ad.id}
            onClick={() => navigate("/login")}
            className="flex bg-white shadow hover:shadow-lg transition hover:scale-[1.01] overflow-hidden h-44 cursor-pointer"
          >
            <img
              src={ad.images[0]}
              alt={ad.title}
              className="w-44 h-full object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-lg font-semibold leading-tight line-clamp-1">
                  {ad.title}
                </h2>
                <p className="text-sm text-gray-700 mt-1">GHS {ad.price}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Category: {ad.category}
                </p>
              </div>
              <div className="mt-3 text-sm text-blue-600 hover:text-blue-800 w-fit">
                View Details
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center pt-20  " onClick={handleViewMore}>
        <button className="bg-green-500 hover:cursor-pointer p-2 text-white rounded-full pr-5 pl-5 hover:bg-green-400">View More Ads </button>
      </div>
    </div>
  );
}

export default NonUserAds;
