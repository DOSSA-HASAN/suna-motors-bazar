import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AdminLayout from "../../components/layout/AdminLayout";
import { carService } from "../../api/carService";

const EditListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // States
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    engineSize: "",
    fuelType: "Petrol",
    transmission: "Automatic",
    description: "",
    isAvailable: true, // NEW: Availability state
  });

  const [existingImages, setExistingImages] = useState([]);
  const [removedImages, setRemovedImages] = useState([]);
  const [newImageFiles, setNewImageFiles] = useState([]);
  const [newImagePreviews, setNewImagePreviews] = useState([]);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const car = await carService.getById(id);
        setFormData({
          brand: car.brand,
          model: car.model,
          year: car.year,
          price: car.price,
          mileage: car.mileage,
          engineSize: car.engineSize || "",
          fuelType: car.fuelType,
          transmission: car.transmission,
          description: car.description,
          isAvailable: car.isAvailable ?? true, // NEW: Populate availability
        });
        setExistingImages(car.images);
        setLoading(false);
      } catch (err) {
        toast.error("Failed to load car details");
        navigate("/listings");
      }
    };
    fetchCar();
  }, [id, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setNewImageFiles((prev) => [...prev, ...files]);
    const previews = files.map((file) => URL.createObjectURL(file));
    setNewImagePreviews((prev) => [...prev, ...previews]);
  };

  const markImageForRemoval = (publicId) => {
    setRemovedImages((prev) => [...prev, publicId]);
    setExistingImages((prev) =>
      prev.filter((img) => img.publicId !== publicId)
    );
  };

  const removeNewImage = (index) => {
    setNewImageFiles((prev) => prev.filter((_, i) => i !== index));
    setNewImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdating) return;

    setIsUpdating(true);
    const data = new FormData();

    // Appends all fields
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    removedImages.forEach((publicId) => data.append("removedImages", publicId));
    newImageFiles.forEach((file) => data.append("images", file));

    try {
      await carService.update(id, data);
      toast.success("Listing updated successfully!");
      navigate("/listings");
    } catch (err) {
      toast.error(err.response?.data?.message || "Update failed");
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading)
    return (
      <AdminLayout>
        <div className="flex justify-center p-20 text-slate-400">
          Loading car details...
        </div>
      </AdminLayout>
    );

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6 max-w-5xl mx-auto pb-10">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Edit Vehicle
            </h2>
            <p className="text-slate-500 text-sm">
              Update listing information and visibility.
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="text-slate-500 hover:text-slate-800 font-bold flex items-center gap-1 transition-colors"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_back
            </span>
            Back
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Basic Details */}
            <div className="space-y-5">
              <h3 className="font-black text-slate-400 border-b border-slate-50 pb-2 text-[10px] uppercase tracking-widest">
                Basic Details
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 ml-1">
                    MAKE
                  </label>
                  <input
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    placeholder="e.g. Toyota"
                    className="w-full px-4 py-2.5 bg-[#f8f8f5] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506]"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 ml-1">
                    MODEL
                  </label>
                  <input
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    placeholder="e.g. Camry"
                    className="w-full px-4 py-2.5 bg-[#f8f8f5] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506]"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 ml-1">
                    YEAR
                  </label>
                  <input
                    name="year"
                    type="number"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#f8f8f5] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506]"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 ml-1">
                    PRICE ($)
                  </label>
                  <input
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#f8f8f5] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Specifications & Availability */}
            <div className="space-y-5">
              <h3 className="font-black text-slate-400 border-b border-slate-50 pb-2 text-[10px] uppercase tracking-widest">
                Specifications & Status
              </h3>

              {/* NEW: Availability Toggle Switch */}
              <div className="flex items-center justify-between bg-[#f8f8f5] p-3 rounded-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <span
                    className={`material-symbols-outlined ${
                      formData.isAvailable
                        ? "text-emerald-500"
                        : "text-slate-400"
                    }`}
                  >
                    {formData.isAvailable
                      ? "check_circle"
                      : "do_not_disturb_on"}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-800">
                      Available for Sale
                    </p>
                    <p className="text-[10px] text-slate-500">
                      Hide or show this listing on the website
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="isAvailable"
                    checked={formData.isAvailable}
                    onChange={handleInputChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 ml-1">
                    MILEAGE (KM)
                  </label>
                  <input
                    name="mileage"
                    type="number"
                    value={formData.mileage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#f8f8f5] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506]"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 ml-1">
                    ENGINE (CC)
                  </label>
                  <input
                    name="engineSize"
                    type="number"
                    value={formData.engineSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-[#f8f8f5] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506]"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleInputChange}
                  className="px-4 py-2.5 bg-[#f8f8f5] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506] text-sm font-medium"
                >
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
                <select
                  name="transmission"
                  value={formData.transmission}
                  onChange={handleInputChange}
                  className="px-4 py-2.5 bg-[#f8f8f5] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506] text-sm font-medium"
                >
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>
            </div>

            {/* Media Gallery (Full Width) */}
            <div className="md:col-span-2 space-y-4 mt-2">
              <h3 className="font-black text-slate-400 border-b border-slate-50 pb-2 text-[10px] uppercase tracking-widest">
                Media Management
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {existingImages.map((img) => (
                  <div
                    key={img.publicId}
                    className="relative aspect-video group"
                  >
                    <img
                      src={img.url}
                      className="w-full h-full object-cover rounded-xl border border-slate-100"
                      alt="Car"
                    />
                    <button
                      type="button"
                      onClick={() => markImageForRemoval(img.publicId)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        close
                      </span>
                    </button>
                  </div>
                ))}

                {newImagePreviews.map((url, index) => (
                  <div key={index} className="relative aspect-video group">
                    <img
                      src={url}
                      className="w-full h-full object-cover rounded-xl border-2 border-[#f9f506]"
                      alt="Preview"
                    />
                    <button
                      type="button"
                      onClick={() => removeNewImage(index)}
                      className="absolute -top-2 -right-2 bg-slate-900 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        close
                      </span>
                    </button>
                    <div className="absolute bottom-1 right-1 bg-[#f9f506] text-[8px] font-black px-1.5 py-0.5 rounded shadow-sm">
                      NEW
                    </div>
                  </div>
                ))}

                <label className="border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 hover:border-[#f9f506] transition-all aspect-video group">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-[#f9f506] transition-colors">
                    add_a_photo
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase">
                    Add Photo
                  </span>
                  <input
                    type="file"
                    multiple
                    hidden
                    onChange={handleFileChange}
                    disabled={isUpdating}
                  />
                </label>
              </div>
            </div>

            {/* Description (Full Width) */}
            <div className="md:col-span-2 space-y-1">
              <label className="text-[10px] font-bold text-slate-400 ml-1 uppercase">
                Vehicle Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 bg-[#f8f8f5] rounded-2xl border-none resize-none focus:ring-2 focus:ring-[#f9f506] font-medium"
                placeholder="Write something about the vehicle's condition, features, etc..."
              ></textarea>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end items-center gap-4">
            <button
              type="button"
              disabled={isUpdating}
              onClick={() => navigate("/listings")}
              className="text-sm font-black text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest"
            >
              Cancel Changes
            </button>
            <button
              type="submit"
              disabled={isUpdating}
              className={`bg-[#f9f506] text-slate-900 px-10 py-3.5 rounded-xl font-black shadow-sm transition-all flex items-center gap-2 ${
                isUpdating
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
              }`}
            >
              {isUpdating ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-slate-900 border-t-transparent rounded-full"></span>
                  SAVING...
                </>
              ) : (
                "UPDATE LISTING"
              )}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditListing;
