import React, { useEffect, useState } from "react";
import AdCard from "../components/AdCard";
import SafetyTipsCard from "../components/SafetyTipsCard";
import OwnerAds from "../components/SIngleCompos/OwnerAds";
import NavigationBar from "../components/NavigationBar";
import { apiFetchAdverts } from "../services/adverts";
import { toast } from "react-toastify";

const categories = [
  "Electronics",
  "Real-Estate",
  "Food",
  "Fashion",
];

function AllAdsPage() {
  const [ads, setAds] = useState([]);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

useEffect(() => {
  const fetchAds = async () => {
    try {
      const response = await apiFetchAdverts();
      setAds(response.data.ads);
      toast.success("Ads loaded successfully")
      console.log(response.data.ads);
    } catch (error) {
      console.error("Failed to fetch ads:", error);
      toast.error("Failed to load ads. Please try again later.");
    }
  };

  fetchAds();
}, []);

  // Filter logic
 const filteredAds = ads.filter((ad) => {
  const matchesQuery = ad.title?.toLowerCase().includes(query.toLowerCase());
  const matchesCategory = activeCategory
    ? ad.category?.toLowerCase() === activeCategory.toLowerCase()
    : true;
  return matchesQuery && matchesCategory;
});

  return (
    <div>
      <NavigationBar />
      <div className="max-w-[80vw] mx-auto py-10 px-4 pt-45 ">
        <h1 className="text-2xl font-bold mb-8">Browse All Ads</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section: Ads + Search */}
          <div className="md:w-2/3 w-full">
            {/* Search Box */}
            <div className="border border-gray-400 shadow-2xl bg-white p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Find What You Need</h2>

              {/* Search input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search by title
                </label>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="e.g. phone, pizza, land..."
                />
              </div>

              {/* Category filters */}
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
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-gray-100 text-gray-800 hover:bg-blue-100 border-gray-300"
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
                    View All Ads
                  </button>
                </div>
              </div>
            </div>

            {/* Ads Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredAds.length === 0 ? (
                <p className="text-gray-500 col-span-2">
                  No ads match your search.
                </p>
              ) : (
                filteredAds.map((ad) => <AdCard key={ad._id} ad={ad} />)
              )}
            </div>
          </div>

          {/* Right Section: Safety + Owner Ads */}
          <div className="md:w-1/3 w-full space-y-6">
            <div className="border relative h-70 border-gray-400 shadow-2xl bg-white p-6">
              <SafetyTipsCard />
            </div>
            <div className="h-70 border border-gray-400 shadow-2xl bg-white p-6 objec">
              <OwnerAds />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllAdsPage;
