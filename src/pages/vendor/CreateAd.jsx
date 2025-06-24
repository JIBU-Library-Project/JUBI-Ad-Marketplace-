import { useState } from "react";
import AdImageCarousel from "../../components/SIngleCompos/AdImageCarousel";
import { BsMegaphone } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";

const CreateAd = () => {
  const categories = [
    "Food & Groceries",
    "Real Estate",
    "Electronics",
    "Fashion",
  ];

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    category: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Ad submitted successfully!");
  };
  // const isError = object.keys(error).length > 0;

  return (
    <div className="md:ml-64 ml-0 pt-16 px-4">
      <div className="bg-[#f8fafc] shadow-md py-4 px-6 rounded-t-lg flex items-center mb-10">
        <BsMegaphone className=" text-5xl text-green-500 m-2" />
        <h1 className="text-2xl font-bold text-gray-800">
          Post a New Advertisement
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-6 rounded-lg shadow-md space-y-4 w-full mx-auto bg-slate-50"
      >
        {/* <h2 className="text-2xl font-bold mb-4">Post a New Advertisement</h2> */}

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border-2 rounded-1xl"
          required
        >
          <option value="">-- Select Category --</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-1xl"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-1xl"
            required
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-1xl"
            required
          />

          <input
            name="location"
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border-2 rounded-1xl"
            required
          />

          
          {/* ---Category-specific fields---- */}

          <div>
            {formData.category === "Electronics" && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="brand"
                    placeholder="Brand"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                  <input
                    name="model"
                    placeholder="Model"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                  <input
                    name="storage"
                    placeholder="Storage"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                  <input
                    name="condition"
                    placeholder="Condition"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                  <input
                    name="warranty"
                    placeholder="Warranty"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {formData.category === "Fashion" && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="brand"
                    placeholder="Brand"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                  <input
                    name="size"
                    placeholder="Size"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                  <input
                    name="material"
                    placeholder="Material"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                  <input
                    name="gender"
                    placeholder="Gender"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                  <input
                    name="color"
                    placeholder="Color"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {formData.category === "Real Estate" && (
              <>
                <div className="flex flex-row gap-4">
                  <input
                    name="rooms"
                    type="number"
                    placeholder="Rooms"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                  <input
                    name="bathrooms"
                    type="number"
                    placeholder="Bathrooms"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />

                  <input
                    name="paymentTerm"
                    placeholder="Payment Term"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                </div>

                {/* Has Parking Checkbox */}
                <div className="flex items-center space-x-2 m-4 text-2xl">
                  <input
                    type="checkbox"
                    id="hasParking"
                    name="hasParking"
                    checked={formData.hasParking || false}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        hasParking: e.target.checked,
                      }))
                    }
                    className="w-4 h-4"
                  />
                  <label htmlFor="hasParking" className="text-sm text-gray-700 ">
                    Has Parking?
                  </label>

                  {/* Furnished Checkbox */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="furnished"
                      name="furnished"
                      checked={formData.furnished || false}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          furnished: e.target.checked,
                        }))
                      }
                      className="w-4 h-4"
                    />
                    <label
                      htmlFor="furnished"
                      className="text-sm text-gray-700"
                    >
                      Furnished?
                    </label>
                  </div>
                </div>
              </>
            )}

            {formData.category === "Food & Groceries" && (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="type"
                    placeholder="Type"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                  <input
                    name="quantity"
                    placeholder="Quantity"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                  <input
                    name="expiry"
                    type="date"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                  <input
                    name="origin"
                    placeholder="Origin"
                    className="w-full p-2 border-2 rounded-1xl"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-center space-x-2 rounded-1xl">
                  <input
                    type="checkbox"
                    name="packaged"
                    checked={formData.packaged || false}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        packaged: e.target.checked,
                      }))
                    }
                    className="w-4 h-4"
                  />
                  <label htmlFor="packaged" className="text-gray-700">
                    Packaged?
                  </label>
                </div>
              </>
            )}
          </div>

          <div className="text-xl flex" >
            <MdAttachFile className="flex mt-3 text-blue-400"/>
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-2"
            required
          />
           </div>

          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-9 rounded hover:bg-blue-700"
            >
              Submit Ad
            </button>

        </div>
      </form>
    </div>
  );
};

export default CreateAd;
