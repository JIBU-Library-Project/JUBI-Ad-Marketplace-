import { useState } from "react";
import { BsMegaphone } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
import { apiCreatedAd } from "../../services/adverts";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateAd = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const category = watch("category");

  const categories = [
    { value: "food", label: "Food & Groceries" },
    { value: "real-estate", label: "Real Estate" },
    { value: "fashion", label: "Fashion" },
    { value: "electronics", label: "Electronics" },
  ];

  const postAd = async (data) => {
    const payload = new FormData();
    payload.append("title", data.title);
    payload.append("description", data.description);
    payload.append("price", data.price);
    payload.append("location", data.location);
    payload.append("category", data.category);
    payload.append("files", data.images[0]);
    console.log(data.images)

    if (data.category.toLowerCase() == "electronics") {
      payload.append("brand", data.brand);
      payload.append("model", data.model);
      payload.append("storage", data.storage);
      payload.append("condition", data.condition);
      payload.append("warranty", data.warranty);
    }

    if (data.category.toLowerCase() == "real-estate") {
      payload.append("rooms", data.rooms);
      payload.append("bathrooms", data.bathrooms);
      payload.append("furnished", data.furnished ? "true" : "false");
      payload.append("paymentTerm", data.paymentTerm);
      payload.append("hasParking", data.hasParking ? "true" : "false");
    }

    if (data.category.toLowerCase() == "food") {
      payload.append("type", data.type);
      payload.append("quantity", data.quantity);
      payload.append("expiry", data.expiry);
      payload.append("origin", data.origin);
      payload.append("packaged", data.packaged ? "true" : "false");
    }

    if (data.category.toLowerCase() == "fashion") {
      payload.append("brand", data.brand);
      payload.append("size", data.size);
      payload.append("material", data.material);
      payload.append("gender", data.gender);
      payload.append("color", data.color);
    }

    setIsSubmitting(true);
    try {
      const response = await apiCreatedAd(payload);
      console.log(response);
      toast.success("Ad posted successfully");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to post ad");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:ml-64 ml-0 pt-16 px-4">
      <div className="bg-black shadow-md py-4 px-6 rounded-t-lg flex items-center mb-10">
        <BsMegaphone className="text-5xl text-green-500 m-2 animate-bounce" />
        <h1 className="text-2xl font-bold text-white">
          Post a New Advertisement
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(postAd)}
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

            <div className="grid grid-cols-3 gap-4">
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
              <input
                placeholder="Material"
                {...register("material")}
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

            <div className=" flex flex-row gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" {...register("furnished")} />
                Furnished
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" {...register("hasParking")} />
                Has Parking
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

            <div className="grid grid-cols-2 gap-4">
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

        {/* Upload Images */}
        <div className="text-xl flex flex-col">
          <label className="mb-1 text-sm text-gray-600">Upload Images</label>
          <div className="flex items-center gap-2">
            <MdAttachFile className="text-blue-400" />
            <input
              {...register("images", {
                required: "At least one image is required",
              })}
              type="file"
              accept="image/*"
              multiple
              className="w-full "
            />
          </div>
          {errors.images && (
            <p className="text-red-500 text-sm">{errors.images.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#32B32B] text-white py-2 px-6 rounded w-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Ad"}
        </button>
      </form>
    </div>
  );
};

export default CreateAd;
