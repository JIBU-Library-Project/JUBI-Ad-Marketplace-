import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetchAdverts } from "../services/adverts";
import { toast } from "react-toastify";

function LandingAds() {
  const [ads, setAds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await apiFetchAdverts();
        const allAds = response.data.ads;

        const shuffled = [...allAds].sort(() => 0.5 - Math.random());
        setAds(shuffled.slice(0, 9));

        toast.success("Ads loaded successfully");
        console.log(shuffled.slice(0, 9));
      } catch (error) {
        console.error("Failed to fetch ads:", error);
        toast.error("Failed to load ads. Please try again later.");
      }
    };

    fetchAds();
  }, []);

  const handleViewMore = () => {
    toast("Login to see more Ads");
    navigate("/ads");
  };

  return (
    <div className="px-6 py-10  max-w-7xl mx-auto">
      <h1 className="text-3xl font-medium mb-8">Discover Popular Ads</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ads.map((ad) => (
          <div
            key={ad._id}
              
            onClick={() => navigate(`/ads/${ad._id}`)}
            className="flex bg-white shadow hover:shadow-lg transition hover:scale-[1.01] overflow-hidden h-44 cursor-pointer border border-gray-400 rounded-2xl"
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
             <button>
              
             </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex items-center justify-center pt-20  "
        onClick={handleViewMore}
      >
        <button className="bg-green-600 hover:cursor-pointer p-2 text-white rounded-full pr-5 pl-5 hover:bg-green-400">
          View More Ads{" "}
        </button>
      </div>
    </div>
  );
}

export default LandingAds;
