import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { apiSingleVendorAds } from "../../services/adverts";
import { getUserFromToken } from "../../services/utils";

function VendorOverview() {
  const [ads, setAds] = useState([]);
  const user = getUserFromToken();
  const vendorid = user?._id;
  const companyName = user?.companyName || "Vendor";

  useEffect(() => {
    const fetchVendorAds = async () => {
      try {
        const response = await apiSingleVendorAds();
        const vendorAds = response.data.vendorAds || [];
        console.log("Fetched vendorAds:", vendorAds);
        setAds(vendorAds);
      } catch (error) {
        console.error("Failed to fetch vendorAds", error);
        toast.error("Failed to fetch vendor ads");
      }
    };

    fetchVendorAds();
  }, []);


  const myAds = ads.filter(
    (ad) => String(ad.vendorDetails?.id) === String(vendorid)
  );

  const latestAd = myAds[0];

  return (
    <div className="md:ml-64 ml-0 pt-16 px-4 max-w-6xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Welcome back, {companyName}!
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow-2xl p-6 text-center hover:scale-[1.03] border border-gray-400 hover:shadow-yellow-200 transition-transform duration-300">
          <h2 className="text-2xl font-bold">{myAds.length}</h2>
          <p className="text-gray-500 mt-2">Total Ads Posted</p>
        </div>
        <div className="bg-white shadow-2xl p-6 text-center hover:scale-[1.03] border border-gray-400 hover:shadow-yellow-200 transition-transform duration-300">
          <h2 className="text-2xl font-bold">{myAds.length}</h2>
          <p className="text-gray-500 mt-2">Active Ads</p>
        </div>
        <div className="bg-white shadow-2xl p-6 text-center hover:scale-[1.03] border border-gray-400 hover:shadow-yellow-200 transition-transform duration-300">
          <h2 className="text-base font-bold">
            {latestAd?.title || "No recent ad"}
          </h2>
          <p className="text-gray-500 mt-2">Most Recent Ad</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <Link
          to="/dashboard/create-ad"
          className="bg-green-600 text-white px-5 py-3 text-center hover:bg-green-700 hover:scale-[1.02] transition-transform duration-300 w-full sm:w-auto"
        >
         Post New Ad
        </Link>
        <Link
          to="/dashboard/my-ads"
          className="bg-gray-500 text-white px-5 py-3 text-center hover:bg-gray-700 hover:scale-[1.02] transition-transform duration-300 w-full sm:w-auto"
        >
         View My Ads
        </Link>
      </div>

      {/* Recent Ads Preview */}
      <div>
        <h2 className="text-lg font-bold mb-4  text-gray-800">Your Recent Ads</h2>

        {myAds.length === 0 ? (
          <p className="text-gray-500">You haven't posted any ads yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2  overflow-hidden gap-6">
            {myAds.slice(0, 3).map((ad) => (
              <Link
                to={`ads/${ad._id}`}
                key={ad._id}
                className="bg-white border overflow-hidden border-gray-400 rounded-2xl shadow-2xl flex flex-col md:flex-row hover:shadow-yellow-200 hover:scale-[1.02] transition-transform duration-300"
              >
                <img
                  src={ad.images?.[0] || "/placeholder.jpg"}
                  alt={ad.title}
                  className="w-full md:w-1/2 h-52 object-cover"
                />
                <div className="p-4 flex flex-col justify-between md:w-1/2">
                  <div>
                    <h3 className="text-base font-semibold text-gray-800">
                      {ad.title}
                    </h3>
                    <p className="text-sm text-gray-600">GHS {ad.price}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Category: {ad.category}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default VendorOverview;
