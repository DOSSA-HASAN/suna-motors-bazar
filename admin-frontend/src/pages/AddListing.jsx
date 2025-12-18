import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AdminLayout from "../components/layout/AdminLayout";
import { carService } from "../api/carService";

export default function AddListing() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // 1. Unified Form State
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    mileage: "",
    price: "",
    fuelType: "",
    transmission: "",
    description: "",
    isAvailable: true,
  });

  // 2. Image Management
  const [images, setImages] = useState([]); // Real files for backend
  const [previews, setPreviews] = useState([]); // Blob URLs for UI

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);

    // Create preview URLs
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // 3. Submit to Backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    // Append text fields
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    // Append files
    images.forEach((file) => data.append("images", file));

    try {
      await carService.create(data);
      toast.success("Listing created successfully!");
      navigate("/listings");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-[1200px] mx-auto pb-20 overflow-x-hidden">
        <header className="mb-8">
          <h1 className="text-3xl font-black tracking-tight text-[#1c1c0d]">
            Add New Inventory
          </h1>
          <p className="text-[#9e9d47] mt-1">
            Fill in the details to publish your car to the marketplace.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Details Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-[#f4f4e6] p-6">
              <div className="flex items-center gap-3 mb-6 border-b border-[#f4f4e6] pb-4">
                <span className="material-symbols-outlined text-white bg-black rounded-md p-1">
                  info
                </span>
                <h2 className="text-lg font-bold">Vehicle Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#9e9d47] uppercase mb-2">
                    Brand
                  </label>
                  <input
                    required
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    className="form-input w-full rounded-lg border-[#e5e7eb] bg-[#fcfcf8]"
                    placeholder="e.g. Toyota"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#9e9d47] uppercase mb-2">
                    Model
                  </label>
                  <input
                    required
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    className="form-input w-full rounded-lg border-[#e5e7eb] bg-[#fcfcf8]"
                    placeholder="e.g. Camry"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#9e9d47] uppercase mb-2">
                    Year
                  </label>
                  <input
                    required
                    name="year"
                    type="number"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="form-input w-full rounded-lg border-[#e5e7eb] bg-[#fcfcf8]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#9e9d47] uppercase mb-2">
                    Mileage (km)
                  </label>
                  <input
                    required
                    name="mileage"
                    type="number"
                    value={formData.mileage}
                    onChange={handleInputChange}
                    className="form-input w-full rounded-lg border-[#e5e7eb] bg-[#fcfcf8]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-[#9e9d47] uppercase mb-2">
                    Price ($)
                  </label>
                  <input
                    required
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="form-input w-full rounded-lg border-[#e5e7eb] bg-[#fcfcf8] font-bold text-lg"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-[#f4f4e6] p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#9e9d47] uppercase mb-2">
                    Fuel Type
                  </label>
                  <select
                    name="fuelType"
                    value={formData.fuelType}
                    onChange={handleInputChange}
                    className="form-select w-full rounded-lg border-[#e5e7eb] bg-[#fcfcf8]"
                  >
                    <option value="">Select...</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#9e9d47] uppercase mb-2">
                    Transmission
                  </label>
                  <select
                    name="transmission"
                    value={formData.transmission}
                    onChange={handleInputChange}
                    className="form-select w-full rounded-lg border-[#e5e7eb] bg-[#fcfcf8]"
                  >
                    <option value="">Select...</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Media Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-[#f4f4e6] p-6">
              <h2 className="text-lg font-bold mb-4">Media</h2>
              <div
                onClick={() => fileInputRef.current.click()}
                className="w-full aspect-video border-2 border-dashed border-gray-300 rounded-lg bg-[#fcfcf8] flex flex-col items-center justify-center cursor-pointer hover:border-[#f9f506] transition-colors"
              >
                <span className="material-symbols-outlined text-4xl text-gray-400">
                  cloud_upload
                </span>
                <p className="text-sm font-bold mt-2">Upload Photos</p>
                <input
                  type="file"
                  ref={fileInputRef}
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>

              {/* Previews */}
              <div className="grid grid-cols-3 gap-2 mt-6">
                {previews.map((url, i) => (
                  <div
                    key={i}
                    className="relative aspect-square rounded-lg border overflow-hidden"
                  >
                    <img src={url} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(i)}
                      className="absolute top-1 right-1 bg-white/80 rounded-full size-6 flex items-center justify-center text-red-500"
                    >
                      <span className="material-symbols-outlined text-sm">
                        close
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-[#f4f4e6] p-6">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="font-bold">Available for Sale</span>
                <input
                  type="checkbox"
                  name="isAvailable"
                  checked={formData.isAvailable}
                  onChange={handleInputChange}
                  className="w-11 h-6 bg-gray-200 rounded-full checked:bg-[#f9f506] appearance-none relative transition-colors cursor-pointer"
                />
              </label>
            </div>
          </div>

          {/* Sticky Footer */}
          <div className="lg:col-span-3 sticky bottom-0 z-10 bg-white border-t p-4 flex justify-between items-center -mx-10 px-10">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="font-bold text-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#f9f506] px-10 py-3 rounded-lg font-bold shadow-sm hover:scale-[1.02] transition-transform disabled:opacity-50"
            >
              {loading ? "Uploading to Cloudinary..." : "Submit Listing"}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
