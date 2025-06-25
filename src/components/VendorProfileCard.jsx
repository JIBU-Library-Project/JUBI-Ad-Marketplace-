import { useNavigate } from "react-router-dom";
import { getUserFromToken } from "../services/utils";

const VendorProfileCard = () => {
  const navigate = useNavigate();

  const user = getUserFromToken();
  const name = user?.companyName || "Vendor";
  const phone = user?.phone;
  const location = user?.location;
  const vendorid = user?._id;

  return (
    <div className="border p-4 rounded shadow-md w-full max-w-sm">
      <h2 className="font-bold text-lg mb-2">Posted by: {name}</h2>
      <p className="text-sm text-gray-700">Location: {location}</p>
      <p className="text-sm text-gray-700">Phone: {phone}</p>
      <button
        className="mt-4 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        onClick={() => window.open(`https://wa.me/${phone}`, "_blank")}
      >
        Message on WhatsApp
      </button>
      <button
        className="mt-2 block text-blue-500 underline text-sm"
        onClick={() => navigate(`/vendor/${vendorid}/ads`)}
      >
        View All Ads by {name}
      </button>
    </div>
  );
};

export default VendorProfileCard;
