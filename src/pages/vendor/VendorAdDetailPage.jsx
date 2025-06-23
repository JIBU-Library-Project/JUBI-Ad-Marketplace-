// src/pages/VendorAdDetailPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { dummyAds } from "../../data/DummyAds";
import CarouselForAds from "../../components/SIngleCompos/CarouselForAds";

function VendorAdDetailPage() {
  const { id } = useParams();
  const ad = dummyAds.find((item) => item.id === id);

  if (!ad) return <div className="text-center py-10">Ad not found</div>;

  const {
    title,
    description,
    price,
    category,
    images,
    vendor,
    metadata,
    createdAt,
  } = ad;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Simplified Vendor Header for Internal Vendor View */}
      <div className="bg-gray-100 border rounded-md p-4 mb-8 shadow-sm">
        <h2 className="font-bold text-xl mb-2">Ad Posted by You</h2>
        <p className="text-sm text-gray-700">Vendor Name: {vendor.name}</p>
        <p className="text-sm text-gray-700">Phone: {vendor.phone}</p>
        <p className="text-sm text-gray-700">Location: {vendor.location}</p>
        <p className="text-xs text-gray-500 mt-1">
          Posted on: {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Image & Ad Details */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <CarouselForAds images={images}/>
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-xl text-green-600 font-semibold">GHS {price}</p>
          <p className="text-gray-500 text-sm">Category: {category}</p>
          <p className="mt-4 text-gray-700">{description}</p>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Details:</h2>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {Object.entries(metadata).map(([key, value]) => (
                <li key={key}>
                  <strong className="capitalize">{key}:</strong> {String(value)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorAdDetailPage;
