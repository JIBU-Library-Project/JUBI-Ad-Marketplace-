import { useState } from "react";
import { BsMegaphone } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { apiGetSingleAdvert, apiUpdateAdvert } from "../../services/adverts";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const EditAddPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ads, setAds] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    values: {
      title: ads?.title,
      description: ads?.description,
      price: ads?.price,
      location: ads?.location,
      category: ads?.category,
      brand: ads?.metadata?.brand,
      model: ads?.metadata?.model,
      storage: ads?.metadata?.storage,
      condition: ads?.metadata?.condition,
      warranty: ads?.metadata?.warranty,
      rooms: ads?.metadata?.rooms,
      bathrooms: ads?.metadata?.bathrooms,
      furnished: ads?.metadata?.furnished,
      paymentTerm: ads?.metadata?.paymentTerm,
      hasParking: ads?.metadata?.hasParking,
      type: ads?.metadata?.type,
      quantity: ads?.metadata?.quantity,
      expiry: ads?.meteadata?.expiry,
      origin: ads?.metadata?.origin,
      packaged: ads?.metadata?.packaged,
      // brand: ads?.metadata?.brand,
      size: ads?.metadata?.size,
      material: ads?.metadata?.material,
      gender: ads?.metadata?.gender,
      color: ads?.metadata?.color,
    },
  });

  useEffect(() => {
    const fetchSingleAd = async () => {
      try {
        const response = await apiGetSingleAdvert(params.id);
        console.log(response);

        const ad = response.data?.ad || response.data?.ads;
        setAds(ad);
        reset();
        console.log(ad);
      } catch (error) {
        console.error("Failed to fetch single Ad:", error);
      }
    };

    if (params.id) fetchSingleAd();
  }, [params.id]);

  console.log(ads);

  const category = watch("category");

  const categories = [
    { value: "food", label: "Food & Groceries" },
    { value: "real-estate", label: "Real Estate" },
    { value: "fashion", label: "Fashion" },
    { value: "electronics", label: "Electronics" },
  ];

  const updateAd = async (data) => {
    // const payload = new FormData();
    // payload.append("title", data.title);
    // payload.append("description", data.description);
    // payload.append("price", data.price);
    // payload.append("location", data.location);
    // payload.append("category", data.category);

    // if (data.category.toLowerCase() == "electronics") {
    //   payload.append("brand", data.brand);
    //   payload.append("model", data.model);
    //   payload.append("storage", data.storage);
    //   payload.append("condition", data.condition);
    //   payload.append("warranty", data.warranty);
    // }

    // if (data.category.toLowerCase() == "real-estate") {
    //   payload.append("rooms", data.rooms);
    //   payload.append("bathrooms", data.bathrooms);
    //   payload.append("furnished", data.furnished);
    //   payload.append("paymentTerm", data.paymentTerm);
    //   payload.append("hasParking", data.hasParking);
    // }

    // if (data.category.toLowerCase() == "food") {
    //   payload.append("type", data.type);
    //   payload.append("quantity", data.quantity);
    //   payload.append("expiry", data.expiry);
    //   payload.append("origin", data.origin);
    //   payload.append("packaged", data.packaged);
    // }

    // if (data.category.toLowerCase() == "fashion") {
    //   payload.append("brand", data.brand);
    //   payload.append("size", data.size);
    //   payload.append("material", data.material);
    //   payload.append("gender", data.gender);
    //   payload.append("color", data.color);
    // }

    setIsSubmitting(true);
    try {
      const response = await apiUpdateAdvert(params.id, data);
      console.log(response);
      toast.success("Ad updated successfully");
      navigate("/dashboard/my-ads");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update ad");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:ml-64 ml-0 pt-16 px-4">
      <div className="bg-black shadow-md py-4 px-6 rounded-t-lg flex items-center mb-10">
        <BsMegaphone className="text-5xl text-green-500 m-2" />
        <h1 className="text-2xl font-bold text-white">Edit  Advertisement</h1>
      </div>

      <form
        onSubmit={handleSubmit(updateAd)}
        className="p-6 rounded-lg shadow-md space-y-4 w-full mx-auto bg-slate-50"
      >
        {/* Category */}
        <select
          className="w-full p-2 border-2 rounded"
          {...register("category", { required: "Category Required" })}
        >
          <option value="">-- Select Category --</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
        {/* Common Fields */}
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border-2 rounded"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
        <textarea
          placeholder="Description"
          className="w-full p-2 border-2 rounded"
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
        <input
          type="number"
          placeholder="Price"
          className="w-full p-2 border-2 rounded"
          {...register("price", { required: "Price is required" })}
        />
        {errors.price && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border-2 rounded"
          {...register("location", { required: "Location is required" })}
        />
        {errors.location && (
          <p className="text-red-500 text-sm">{errors.location.message}</p>
        )}
        {/* Conditional Fields */}
        {category === "electronics" && (
          <>
            <div className="grid grid-cols-3 gap-4">
              <input
                placeholder="Brand"
                {...register("brand")}
                className="w-full p-2 border-2 rounded"
              />
              <input
                placeholder="Model"
                {...register("model")}
                className="w-full p-2 border-2 rounded"
              />
              <input
                placeholder="Storage"
                {...register("storage")}
                className="w-full p-2 border-2 rounded"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Condition"
                {...register("condition")}
                className="w-full p-2 border-2 rounded"
              />
              <input
                placeholder="Warranty"
                {...register("warranty")}
                className="w-full p-2 border-2 rounded"
              />
            </div>
          </>
        )}
        {category === "fashion" && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Brand"
                {...register("brand")}
                className="w-full p-2 border-2 rounded"
              />
              <input
                placeholder="Size"
                {...register("size")}
                className="w-full p-2 border-2 rounded"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <input
                placeholder="Material"
                {...register("material")}
                className="w-full p-2 border-2 rounded"
              />
              <input
                placeholder="Gender"
                {...register("gender")}
                className="w-full p-2 border-2 rounded"
              />
              <input
                placeholder="Color"
                {...register("color")}
                className="w-full p-2 border-2 rounded"
              />
            </div>
          </>
        )}
        {category === "real-estate" && (
          <>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="number"
                placeholder="Rooms"
                {...register("rooms")}
                className="w-full p-2 border-2 rounded"
              />
              <input
                type="number"
                placeholder="Bathrooms"
                {...register("bathrooms")}
                className="w-full p-2 border-2 rounded"
              />

              <input
                placeholder="Payment Term"
                {...register("paymentTerm")}
                className="w-full p-2 border-2 rounded"
              />
            </div>

            <div className="grid grid-cols-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" {...register("hasParking")} />
                Has Parking
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" {...register("furnished")} />
                Furnished
              </label>
            </div>
          </>
        )}
        {category === "food" && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Type"
                {...register("type")}
                className="w-full p-2 border-2 rounded"
              />
              <input
                placeholder="Quantity"
                {...register("quantity")}
                className="w-full p-2 border-2 rounded"
              />
            </div>

            <div className=" grid grid-cols-2 gap-4">
              <input
                type="date"
                {...register("expiry")}
                className="w-full p-2 border-2 rounded"
              />
              <input
                placeholder="Origin"
                {...register("origin")}
                className="w-full p-2 border-2 rounded"
              />
            </div>

            <label className="flex items-center gap-2">
              <input type="checkbox" {...register("packaged")} />
              Packaged
            </label>
          </>
        )}
        ;
        {/*    
        <div className="text-xl flex flex-col">
          <label className="mb-1 text-sm text-gray-600">Upload Images</label>
          <div className="flex items-center gap-2">
            <img src={ads?.images[0]} alt="" className="text-blue-400" />
           
          
          </div>
          {errors.images && (
            <p className="text-red-500 text-sm">{errors.images.message}</p>
          )}
        </div> */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#4BBB1A] text-white py-2 px-6 rounded w-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default EditAddPage;
