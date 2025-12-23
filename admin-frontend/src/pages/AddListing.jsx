import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AdminLayout from "../components/layout/AdminLayout";
import { carService } from "../api/carService";

export default function AddListing() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // Unified Form State
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    mileage: "",
    engineSize: "",
    price: "",
    fuelType: "",
    transmission: "",
    description: "",
    isAvailable: true,
  });

  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

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
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
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
          <div className="lg:col-span-2 space-y-6">
            {/* Vehicle Information */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#f4f4e6] p-8">
              <div className="flex items-center gap-3 mb-8 border-b border-[#f4f4e6] pb-4">
                <span className="material-symbols-outlined text-slate-900">
                  directions_car
                </span>
                <h2 className="text-lg font-black uppercase tracking-tight text-slate-800">
                  Vehicle Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-[#9e9d47] uppercase tracking-widest ml-1">
                    Make
                  </label>
                  <input
                    required
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#fcfcf8] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506] font-medium"
                    placeholder="e.g. Toyota"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-[#9e9d47] uppercase tracking-widest ml-1">
                    Model
                  </label>
                  <input
                    required
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#fcfcf8] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506] font-medium"
                    placeholder="e.g. Camry"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-[#9e9d47] uppercase tracking-widest ml-1">
                    Year
                  </label>
                  <input
                    required
                    name="year"
                    type="number"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#fcfcf8] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506] font-medium"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-[#9e9d47] uppercase tracking-widest ml-1">
                    Mileage (km)
                  </label>
                  <input
                    required
                    name="mileage"
                    type="number"
                    value={formData.mileage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#fcfcf8] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506] font-medium"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-[#9e9d47] uppercase tracking-widest ml-1">
                    Engine Capacity (CC)
                  </label>
                  <input
                    required
                    name="engineSize"
                    type="number"
                    value={formData.engineSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#fcfcf8] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506] font-medium"
                    placeholder="e.g. 2000"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-[#9e9d47] uppercase tracking-widest ml-1">
                    Price (Ksh)
                  </label>
                  <input
                    required
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#fcfcf8] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506] font-black text-lg text-slate-900"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#f4f4e6] p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-[#9e9d47] uppercase tracking-widest ml-1">
                    Fuel Type
                  </label>
                  <select
                    name="fuelType"
                    value={formData.fuelType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#fcfcf8] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506] font-medium"
                  >
                    <option value="">Select...</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-[#9e9d47] uppercase tracking-widest ml-1">
                    Transmission
                  </label>
                  <select
                    name="transmission"
                    value={formData.transmission}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#fcfcf8] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506] font-medium"
                  >
                    <option value="">Select...</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#f4f4e6] p-8">
              <label className="text-[10px] font-black text-[#9e9d47] uppercase tracking-widest ml-1 mb-2 block">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 bg-[#fcfcf8] rounded-xl border-none focus:ring-2 focus:ring-[#f9f506] font-medium resize-none"
                placeholder="Enter vehicle description..."
              ></textarea>
            </div>
          </div>

          {/* Right Column: Media & Availability */}
          <div className="lg:col-span-1 space-y-6">
            {/* Media Upload */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#f4f4e6] p-6">
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-4 ml-1">
                Media Gallery
              </h2>
              <div
                onClick={() => fileInputRef.current.click()}
                className="w-full aspect-video border-2 border-dashed border-slate-200 rounded-2xl bg-[#fcfcf8] flex flex-col items-center justify-center cursor-pointer hover:border-[#f9f506] transition-all group"
              >
                <span className="material-symbols-outlined text-4xl text-slate-300 group-hover:text-[#f9f506] transition-colors">
                  cloud_upload
                </span>
                <p className="text-xs font-black text-slate-400 mt-2 uppercase">
                  Upload Photos
                </p>
                <input
                  type="file"
                  ref={fileInputRef}
                  multiple
                  onChange={handleImageChange}
                  className="hidden"
                  accept="image/*"
                />
              </div>

              {previews.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {previews.map((url, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-xl border border-slate-100 overflow-hidden shadow-sm"
                    >
                      <img
                        src={url}
                        className="w-full h-full object-cover"
                        alt="preview"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute top-1 right-1 bg-white/90 rounded-full size-5 flex items-center justify-center text-red-500 shadow-md"
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          close
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Availability Toggle (The part you liked) */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#f4f4e6] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-slate-800 uppercase tracking-tight">
                    Available for Sale
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                    Marketplace Visibility
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="isAvailable"
                    checked={formData.isAvailable}
                    onChange={handleInputChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-100 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                </label>
              </div>
            </div>

            {/* Submit Action */}
            <div className="bg-slate-900 rounded-2xl p-6 shadow-xl space-y-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#f9f506] text-slate-900 py-4 rounded-xl font-black uppercase tracking-widest shadow-lg hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <span className="animate-spin h-5 w-5 border-2 border-slate-900 border-t-transparent rounded-full"></span>
                ) : (
                  <>
                    <span className="material-symbols-outlined">
                      rocket_launch
                    </span>
                    Publish Listing
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-full py-2 text-slate-500 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors"
              >
                Discard Draft
              </button>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
