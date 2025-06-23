// src/pages/vendor/VendorOverview.jsx
import React from "react";
import { dummyAds } from "../../data/DummyAds";
import { useAuth } from "../../components/SIngleCompos/authContext/AuthContext";
import { Link } from "react-router-dom";

function VendorOverview() {
  const { username } = useAuth();

  // Get ads belonging to this vendor
  const myAds = dummyAds.filter((ad) => ad.vendor.id === username);
  const latestAd = myAds[0]; // Assuming first is latest (reverse if needed)

  return (
    <div className="md:ml-64 ml-0 pt-16 px-4 max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Welcome back, {username}!</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-white border shadow rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold">{myAds.length}</h2>
          <p className="text-gray-500 mt-2">Total Ads Posted</p>
        </div>
        <div className="bg-white border shadow rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold">{myAds.length}</h2>
          <p className="text-gray-500 mt-2">Active Ads</p>
        </div>
        <div className="bg-white border shadow rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold">
            {latestAd?.title || "No recent ad"}
          </h2>
          <p className="text-gray-500 mt-2">Most Recent Ad</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <Link
          to="/dashboard/create-ad"
          className="bg-green-600 text-white px-5 py-3 rounded-lg text-center hover:bg-green-700 w-full sm:w-auto"
        >
          ➕ Post New Ad
        </Link>
        <Link
          to="/dashboard/my-ads"
          className="bg-blue-600 text-white px-5 py-3 rounded-lg text-center hover:bg-blue-700 w-full sm:w-auto"
        >
          📋 View My Ads
        </Link>
      </div>

      {/* Recent Ads Preview */}
      <div>
        <h2 className="text-lg font-bold mb-4">Your Recent Ads</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {myAds.slice(0, 3).map((ad) => (
            <Link
              to={`/vendor/ads/${ad.id}`} 
              key={ad.id}
              className="bg-white border rounded-lg shadow hover:shadow-md p-4 transition"
            >
              <img
                src={ad.images[0]}
                alt={ad.title}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="text-base font-semibold">{ad.title}</h3>
              <p className="text-sm text-gray-500">GHS {ad.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VendorOverview;
