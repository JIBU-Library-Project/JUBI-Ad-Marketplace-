import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SafetyTipsCard from "../../components/SafetyTipsCard";
import { apiDeleteAdvert, apiSingleVendorAds } from "../../services/adverts";
import { toast } from "react-toastify"; // uncommented
import VendorSafety from "../../components/VendorSafety";

const categories = [
  "Electronics",
  "Real-Estate",
  "Food",
  "Fashion",
];

function VendorAdsPage() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [myAds, setMyAds] = useState([]);

  useEffect(() => {
    const fetchVendorAds = async () => {
      try {
        const response = await apiSingleVendorAds();
        const vendorAds = response.data.vendorAds;
        console.log(vendorAds);
        setMyAds(vendorAds);
      } catch (error) {
        console.error("Failed to fetch vendorAds", error);
        toast.error("Failed to fetch vendor ads");
      }
    };

    fetchVendorAds();
  }, []);

  const filteredAds = myAds.filter((ad) => {
  const titleMatch = ad.title?.toLowerCase().includes(query.toLowerCase());
  const categoryMatch = activeCategory
    ? ad.category?.toLowerCase() === activeCategory.toLowerCase()
    : true;
  return titleMatch && categoryMatch;
});


  const handleDelete = async (id) => {
    try {
      const response = await apiDeleteAdvert(id);
      const deletedAd = response.data?.ads;
      console.log(deletedAd);

      alert(response.data.message || "You've deleted an Ad");
    } catch (error) {
      console.error("Failed to delete an Ad", error);
      alert("Error deleting the ad.");
    }
  };

  return (
    <div className="md:ml-64 ml-0 pt-16 px-4 max-w-7xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-8">Your Advert Listings</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Ads + Search */}
        <div className="md:w-2/3 w-full">
          {/* Search & Filter Box */}
          <div className="border border-gray-300 bg-white p-6 rounded-md shadow-md mb-6">
            <h2 className="text-lg font-semibold mb-4">Search & Filter</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Search by Title
              </label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-yellow-500"
                placeholder="e.g. table, phone, land..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() =>
                      setActiveCategory((prev) => (prev === cat ? "" : cat))
                    }
                    className={`px-3 py-1 text-sm border rounded ${
                      activeCategory === cat
                        ? "bg-yellow-600 text-white border-yellow-600"
                        : "bg-gray-100 text-gray-800 hover:bg-yellow-100 border-gray-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setQuery("");
                    setActiveCategory("");
                  }}
                  className="mt-2 px-4 py-2 text-sm bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                >
                  View All
                </button>
              </div>
            </div>
          </div>

          {/* Ads List - Horizontal Cards */}
          <div className="space-y-6">
            {filteredAds.length === 0 ? (
              <p className="text-gray-500">No ads match your filters.</p>
            ) : (
              filteredAds.map((ad) => (
                <div
                  key={ad._id}
                  className="bg-white border border-gray-200 rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden transition hover:shadow-lg"
                >
                  <img
                    src={ad.images[0]}
                    alt={ad.title}
                    className="w-full md:w-60 h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {ad.title}
                      </h2>
                      <p className="text-gray-600 text-sm mt-1">
                        GHS {ad.price}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Category: {ad.category}
                      </p>
                    </div>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      <button
                        onClick={() => navigate(`/dashboard/ads/${ad._id}`)}
                        className="px-4 py-1.5 bg-blue-100 text-blue-700 font-medium rounded hover:bg-blue-200 text-sm"
                      >
                        View
                      </button>
                      <button
                        onClick={() =>
                          navigate(`/dashboard/ads/${ad._id}/edit`)
                        }
                        className="px-4 py-1.5 bg-yellow-100 text-yellow-800 font-medium rounded hover:bg-yellow-200 text-sm"
                      >
                         Edit
                      </button>
                      <button
                        onClick={() => handleDelete(ad._id)}
                        className="px-4 py-1.5 bg-red-100 text-red-700 font-medium rounded hover:bg-red-200 text-sm"
                      >
                         Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right Section: Safety Tips */}
        <div className="md:w-1/3 w-full space-y-6 ">
          <div className="border border-gray-300 bg-white p-6 rounded shadow-md">
           <VendorSafety/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorAdsPage;
