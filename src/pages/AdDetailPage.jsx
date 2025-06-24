import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyAds } from "../data/DummyAds";
import CarouselForAds from "../components/SIngleCompos/CarouselForAds";
import SafetyTipsCard from "../components/SafetyTipsCard";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function AdDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ad = dummyAds.find((item) => item.id === id);

  if (!ad) {
    return <div className="text-center py-10">Ad not found</div>;
  }

  const {
    title,
    description,
    price,

    images,
    vendor,
    metadata,
  } = ad;

  return (
    <div>
      <NavigationBar />
      <div className="max-w-7xl mx-auto px-4 py-10 pt-40">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT: Main content */}
          <div className="flex-1">
            <div>
              <h1 className="text-3xl font-bold mb-2">{title}</h1>
              <p className="text-lg text-gray-600 mb-2">{vendor.location}</p>

              <div>
                <p className="text-2xl font-semibold text-green-700 mb-4">
                  GHS {price}
                </p>
              </div>
            </div>

            <div className="rounded overflow-hidden border mb-6">
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
          <div className="w-full lg:w-[350px] space-y-6 max-h-screen p-5 shadow-xl border-[#dfdfdf] border ">
            <div>
              <h3 className="font-bold text-xl mb-1">{vendor.name}</h3>
              <p className="text-sm text-gray-500">
                Posting for less than 1 month
              </p>
              <button
                onClick={() => navigate(`/vendor/${vendor.id}/ads`)}
                className="text-blue-600 text-sm hover:cursor-pointer  hover:underline mt-2 font-medium"
              >
                See all ads
              </button>
            </div>

            <div className="bg-gray-100 p-4 rounded">
              <p className="text-sm mb-3 font">
                Hi <em className="font-bold">{vendor.name}</em>,
              </p>
              <p className="text-sm mb-2">
                I’m interested in your item. Is this still available?
              </p>
              <p className="text-sm">Thanks</p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                className="bg-green-600 text-white font-medium py-2 rounded hover:cursor-pointer hover:bg-green-700"
                onClick={() =>
                  window.open(`https://wa.me/${vendor.phone}`, "_blank")
                }
              >
                Send Message
              </button>
              <button
                className="bg-green-700 hover:cursor-pointer text-white font-medium py-2 rounded hover:bg-green-800"
                onClick={() =>
                  window.open(`https://wa.me/${vendor.phone}`, "_blank")
                }
              >
                Make Offer
              </button>
            </div>

            <div className="flex gap-4 pt-3 border-t border-gray-400">
              <button className="text-sm text-gray-700 ">⚠️ Report</button>
            </div>
            <hr className="text-gray-400" />
            <SafetyTipsCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdDetailPage;
