import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AdminLayout from "../../components/layout/AdminLayout";
import { carService } from "../../api/carService";

const EditListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // States
  const [loading, setLoading] = useState(true); // Initial fetch loading
  const [isUpdating, setIsUpdating] = useState(false); // Form submission loading

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    mileage: "",
    fuelType: "Petrol",
    transmission: "Automatic",
    description: "",
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
          fuelType: car.fuelType,
          transmission: car.transmission,
          description: car.description,
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    if (isUpdating) return; // Guard

    setIsUpdating(true);
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));
    removedImages.forEach((publicId) => data.append("removedImages", publicId));
    newImageFiles.forEach((file) => data.append("images", file));

    try {
      await carService.update(id, data);
      toast.success("Listing updated successfully!");
      navigate("/listings"); // Redirect to /listings as requested
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
      <div className="flex flex-col gap-6 max-w-5xl">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-slate-900">Edit Vehicle</h2>
          <button
            onClick={() => navigate(-1)}
            className="text-slate-500 hover:text-slate-800 font-medium flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>{" "}
            Back
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-100 transition-opacity duration-300">
            {/* Fields */}
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-700 border-b pb-2 text-sm uppercase">
                Basic Details
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  placeholder="Brand"
                  className="col-span-1 px-4 py-2 bg-[#f8f8f5] rounded-lg border-none"
                  required
                />
                <input
                  name="model"
                  value={formData.model}
                  onChange={handleInputChange}
                  placeholder="Model"
                  className="col-span-1 px-4 py-2 bg-[#f8f8f5] rounded-lg border-none"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="year"
                  type="number"
                  value={formData.year}
                  onChange={handleInputChange}
                  placeholder="Year"
                  className="w-full px-4 py-2 bg-[#f8f8f5] rounded-lg border-none"
                  required
                />
                <input
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Price ($)"
                  className="w-full px-4 py-2 bg-[#f8f8f5] rounded-lg border-none"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-slate-700 border-b pb-2 text-sm uppercase">
                Specifications
              </h3>
              <input
                name="mileage"
                type="number"
                value={formData.mileage}
                onChange={handleInputChange}
                placeholder="Mileage"
                className="w-full px-4 py-2 bg-[#f8f8f5] rounded-lg border-none"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <select
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleInputChange}
                  className="px-4 py-2 bg-[#f8f8f5] rounded-lg border-none"
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
                  className="px-4 py-2 bg-[#f8f8f5] rounded-lg border-none"
                >
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </select>
              </div>
            </div>

            {/* Media Gallery */}
            <div className="md:col-span-2 space-y-4 mt-4">
              <h3 className="font-semibold text-slate-700 border-b pb-2 text-sm uppercase">
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
                      className="w-full h-full object-cover rounded-lg border border-slate-200"
                      alt="Car"
                    />
                    <button
                      type="button"
                      onClick={() => markImageForRemoval(img.publicId)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-red-600"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        close
                      </span>
                    </button>
                  </div>
                ))}

                {newImagePreviews.map((url, index) => (
                  <div key={index} className="relative aspect-video group">
                    <img
                      src={url}
                      className="w-full h-full object-cover rounded-lg border-2 border-[#f9f506]"
                      alt="Preview"
                    />
                    <button
                      type="button"
                      onClick={() => removeNewImage(index)}
                      className="absolute -top-2 -right-2 bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md"
                    >
                      <span className="material-symbols-outlined text-[16px]">
                        close
                      </span>
                    </button>
                    <div className="absolute bottom-1 right-1 bg-[#f9f506] text-[8px] font-bold px-1 rounded">
                      NEW
                    </div>
                  </div>
                ))}

                <label className="border-2 border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors aspect-video">
                  <span className="material-symbols-outlined text-slate-400">
                    add_a_photo
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

            <div className="md:col-span-2">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 bg-[#f8f8f5] rounded-lg border-none resize-none"
                placeholder="Description..."
              ></textarea>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end gap-3">
            <button
              type="button"
              disabled={isUpdating}
              onClick={() => navigate("/listings")}
              className="px-6 py-2.5 rounded-lg font-bold text-slate-600 hover:bg-slate-100 disabled:opacity-50"
            >
              Discard
            </button>
            <button
              type="submit"
              disabled={isUpdating}
              className={`bg-[#f9f506] text-slate-900 px-10 py-2.5 rounded-lg font-extrabold shadow-sm transition-all flex items-center gap-2 ${
                isUpdating
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:shadow-md active:scale-95"
              }`}
            >
              {isUpdating ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-slate-900 border-t-transparent rounded-full"></span>
                  UPDATING...
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
