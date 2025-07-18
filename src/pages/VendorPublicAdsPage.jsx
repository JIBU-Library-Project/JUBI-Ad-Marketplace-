import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import SafetyTipsCard from "../components/SafetyTipsCard";
import OwnerAds from "../components/SIngleCompos/OwnerAds";
import { apiFetchAdverts } from "../services/adverts"; // ✅ Make sure this path is correct

function VendorPublicAdsPage() {
  const { id: vendorId } = useParams(); // Get vendor ID from URL
  const [ads, setAds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAds = async () => {
      setLoading(true);
      toast.success("loading...")
      try {
        const response = await apiFetchAdverts();
        setAds(response.data.ads);
      } catch (error) {
        console.error("Failed to fetch ads:", error);
        toast.error("Failed to load ads. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAds();
  }, []);

  const vendorAds = ads.filter((ad) => ad.vendor?.id === vendorId);
  const vendor = vendorAds[0]?.vendor;

  const filteredAds = vendorAds.filter((ad) =>
    ad.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#ededed]">
      <NavigationBar />

      <div className="max-w-[75vw] mx-auto py-10 px-4 pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT COLUMN: Search */}
          <div className="col-span-12 lg:col-span-3">
            <h1 className="text-xl font-medium text-white bg-[#028635] h-15 flex justify-center items-center mb-1 p-8 overflow-hidden">
              All Ads by {vendor?.name || "Vendor"}
            </h1>
            <div className="bg-white border border-gray-400 shadow-2xl p-4 h-fit">
              <h2 className="text-lg font-bold mb-3">Search Vendor Ads</h2>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title..."
                className="w-full border border-gray-400 px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* MIDDLE COLUMN: Ads */}
          <div className="col-span-12 lg:col-span-6 space-y-4">
            {loading ? (
              <p>Loading vendor ads...</p>
            ) : filteredAds.length === 0 ? (
              <p>No ads found for this vendor.</p>
            ) : (
              filteredAds.map((ad) => (
                <Link
                  key={ad._id}
                  to={`/ads/${ad._id}`}
                  className="flex bg-white border border-gray-400 rounded-md shadow-md hover:shadow-lg hover:scale-[1.01] transition overflow-hidden"
                >
                  <img
                    src={ad.images?.[0]}
                    alt={ad.title}
                    className="w-40 h-40 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <h2 className="text-lg font-semibold">{ad.title}</h2>
                      <p className="text-sm text-gray-500 mt-1">
                        GHS {ad.price}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Category: {ad.category}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          {/* RIGHT COLUMN: Vendor Info, Safety Tips, Owner Ads */}
          <div className="col-span-12 lg:col-span-3 space-y-6 p-5 shadow-2xl border border-gray-400 bg-white h-fit">
            {vendor && (
              <div>
                <h3 className="font-bold text-xl mb-1">{vendor.name}</h3>
                <p className="text-sm text-gray-500">
                  Posting from: {vendor.location}
                </p>
                <p className="text-sm text-gray-500">
                  Phone: {vendor.phone}
                </p>
                <button
                  onClick={() =>
                    window.open(`https://wa.me/${vendor.phone}`, "_blank")
                  }
                  className="bg-green-600 text-white font-medium py-2 px-3 rounded hover:bg-green-700 mt-2"
                >
                  Message on WhatsApp
                </button>
              </div>
            )}

            <div className="h-70 over">
              <SafetyTipsCard />
         
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default VendorPublicAdsPage;
