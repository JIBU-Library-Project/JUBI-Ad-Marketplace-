// src/pages/VendorAdDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import CarouselForAds from "../../components/SIngleCompos/CarouselForAds";
import { useEffect } from "react";
import { apiGetSingleAdvert } from "../../services/adverts";
import { useState } from "react";

function VendorAdDetailPage() {

const [singleAd, setSingleAd] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();




 useEffect(() => {
    const fetchSingleAd = async () => {
      setLoading(true);
  
      try {
        const response = await apiGetSingleAdvert(id);
        const ad = response.data?.ad || response.data?.ads; // support either key
        setSingleAd(ad);
        console.log(ad);
      } catch (error) {
        console.error("Failed to fetch single Ad:", error);
      } finally {
           //{toast.success("Loading...")}
        setLoading(false);
      }
    };

    if (id) fetchSingleAd();
  }, [id]);






if (loading) return <div className="text-center py-10"> </div>;
  if (!singleAd) return <div className="text-center py-10">Ad not found</div>;
 
 const { title, description, price, images, metadata, vendorDetails } =
    singleAd;

  return (
    <div className="bg-[#f1f1f1] min-w-screen ">
      {/* Optional Vendor Header */}

      <div className="md:ml-100  max-w-7xl mx-auto px-4 py-10 pt-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT: Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <p className="text-lg text-gray-600 mb-2">{vendorDetails.location}</p>
              <p className="text-2xl font-semibold text-green-700 mb-4">
                GHS {price}
              </p>
            </div>

            <div className=" overflow-hidden border border-gray-600 shadow-2xl mb-6">
              <CarouselForAds images={images} />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Description</h2>
              <hr className="text-gray-400" />
              <p className="text-gray-700">{description}</p>

              <h2 className="text-xl font-semibold mt-6">Details</h2>
              <hr className="text-gray-400" />
              <ul className="list-disc pl-5 text-sm text-gray-800">
                {Object.entries(metadata).map(([key, value]) => (
                  <li key={key}>
                    <strong className="capitalize">{key}:</strong>{" "}
                    {String(value)}
                  </li>
                ))}
              </ul>
              <hr className="text-gray-400" />
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <div className="w-full lg:w-[350px] space-y-6 max-h-screen p-5 shadow-xl border bg-[#fff] border-[#dfdfdf]">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-xl mb-1">{vendorDetails.companyName}</h3>
                <p className="text-sm text-gray-600">{vendorDetails.location}</p>
                <p className="text-sm text-gray-600">{vendorDetails.phone}</p>
                
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded">
              <p className="text-sm mb-3">
                Hello <strong>{vendorDetails.companyName}</strong>, this is your posted ad.
              </p>
              <p className="text-sm text-gray-600">
                You can update or remove it from your dashboard.
              </p>
            </div>

            <div className="pt-3 border-t border-gray-400 text-sm text-gray-700">
              ⚠️ This is your personal view. Use the dashboard to manage.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorAdDetailPage;
