import React from "react";
import { useNavigate } from "react-router-dom";

const VendorProfileCard = ({ vendor }) => {
  const navigate = useNavigate();

  if (!vendor) return null;

  return (
    <div className="border p-4 rounded shadow-md w-full max-w-sm">
      <h2 className="font-bold text-lg mb-2">Posted by: {vendor.companyName}</h2>
      <p className="text-sm text-gray-700">Location: {vendor.location}</p>
      <p className="text-sm text-gray-700">Phone: {vendor.phone}</p>
      <button
        className="mt-4 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        onClick={() => window.open(`https://wa.me/${vendor.phone}`, "_blank")}
      >
        Message on WhatsApp
      </button>
      <button
        className="mt-2 block text-blue-500 underline text-sm"
        onClick={() => navigate(`/vendor/${vendor.id}/ads`)}
      >
        View All Ads by {vendor.name}
      </button>
    </div>
  );
};

export default VendorProfileCard;
