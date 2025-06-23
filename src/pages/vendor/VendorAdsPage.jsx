import React from "react";
import { useNavigate } from "react-router-dom";
import { dummyAds } from "../../data/DummyAds";
import { useAuth } from "../../components/SIngleCompos/authContext/AuthContext";

function VendorAdsPage() {
  const { isLoggedIn, username, role } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn || role !== "vendor") {
    return (
      <div className="h-screen w-screen flex items-center justify-center py-10 text-red-500">
        Access denied. Vendor login required.
      </div>
    );
  }

  const myAds = dummyAds.filter((ad) => ad.vendor.id === username);

  const handleDelete = (id) => {
    // Placeholder: Delete logic (e.g. update state or call API)
    alert(`Ad with ID ${id} would be deleted here.`);
  };

  return (
    <div className=" md:ml-64 ml-0 pt-16 px-4 max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">My Ads</h1>

      {myAds.length === 0 ? (
        <p className="text-gray-600">You haven't posted any ads yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {myAds.map((ad) => (
            <div
              key={ad.id}
              className="border rounded-lg shadow hover:shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={ad.images[0]}
                alt={ad.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{ad.title}</h2>
                  <p className="text-gray-500 text-sm">GHS {ad.price}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Category: {ad.category}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => navigate(`/vendor/ads/${ad.id}`)} 
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                  >
                    View
                  </button>
                  <button
                    onClick={() => navigate(`/dashboard/edit-ad/${ad.id}`)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(ad.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VendorAdsPage;
