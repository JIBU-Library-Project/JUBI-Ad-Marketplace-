import { useNavigate } from "react-router-dom";

const AdCard = ({
  ad: { images, _id, title, price, category, vendorDetails },
  isVendorView = false,
  onEdit,
  onDelete,
}) => {
  const navigate = useNavigate();



  const firstImage = images?.[0];

  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit?.(_id);
    navigate(`/dashboard/ads/${_id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation(); 
    if (window.confirm("Are you sure you want to delete this ad?")) {
      onDelete?.(_id);
    }
  };

  const handleNavigate = () => {
    navigate(`/ads/${_id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer bg-white shadow-2xl border border-gray-300 rounded-lg overflow-hidden flex flex-col sm:flex-row min-h-[200px] hover:shadow-blue-100 transition"
    >
      {/* Image */}
      <div className="sm:w-1/3 w-full">
        <img
          src={firstImage}
          alt={title}
          className="w-full h-full max-h-52 object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-4 flex-grow">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-1 break-words">
            {title}
          </h2>
          <p className="text-sm text-gray-600 font-medium pt-3">GHS {price}</p>
          <p className="text-xs text-gray-500 mt-1">Category: {category}</p>
          <p className="text-xs text-gray-500">
            Posted by:{" "}
            <span className="font-medium">
              {vendorDetails?.companyName || "Anonymous"}
            </span>
          </p>
          <p className="text-xs text-gray-400 pt-5">
            {/* On {new Date(createdAt).toDateString()} */}
          </p>
        </div>

        {/* Vendor Actions */}
        {isVendorView && (
          <div className="mt-4 flex gap-4 flex-wrap">
            <button
              onClick={handleEdit}
              className="text-yellow-600 hover:underline text-sm"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="text-red-600 hover:underline text-sm"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdCard;
