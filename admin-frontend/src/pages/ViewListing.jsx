import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import AdminLayout from "../components/layout/AdminLayout";
import { carService } from "../api/carService";

export default function ViewListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        setLoading(true);
        const data = await carService.getById(id);
        setCar(data);
      } catch (err) {
        toast.error("Could not find this vehicle");
        navigate("/listings");
      } finally {
        setLoading(false);
      }
    };
    fetchCarDetails();
  }, [id, navigate]);

  const handleDelete = async () => {
    if (
      !window.confirm(
        "Are you sure? This will delete the car and all its images from Cloudinary."
      )
    )
      return;
    try {
      await carService.delete(id);
      toast.success("Listing deleted");
      navigate("/listings");
    } catch (err) {
      toast.error("Failed to delete listing");
    }
  };

  if (loading)
    return (
      <AdminLayout>
        <div className="flex h-96 items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );

  if (!car) return null;

  return (
    <AdminLayout>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
        {/* Breadcrumbs & Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <nav className="flex items-center gap-2 text-sm text-[#9e9d47] mb-2">
              <Link to="/listings" className="hover:text-[#1c1c0d]">
                Inventory
              </Link>
              <span className="material-symbols-outlined text-[16px]">
                chevron_right
              </span>
              <span className="text-[#1c1c0d] font-medium">
                #{car._id.slice(-6).toUpperCase()}
              </span>
            </nav>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-[#1c1c0d] tracking-tight">
                {car.year} {car.brand} {car.model}
              </h1>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                  car.isAvailable
                    ? "bg-green-100 text-green-700 border-green-200"
                    : "bg-gray-100 text-gray-500 border-gray-200"
                }`}
              >
                {car.isAvailable ? "Active" : "Sold"}
              </span>
            </div>
            <p className="text-[#9e9d47]">
              Stock ID: #SM-{car._id.slice(-4).toUpperCase()} • Created{" "}
              {new Date(car.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDelete}
              className="flex items-center gap-2 h-10 px-4 rounded-lg bg-white border border-red-100 text-red-600 hover:bg-red-50 font-bold transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                delete
              </span>
              <span>Delete</span>
            </button>
            <Link
              to={`/listings/edit/${car._id}`}
              className="flex items-center gap-2 h-10 px-6 rounded-lg bg-[#f9f506] text-black hover:bg-[#ebe705] transition-colors font-bold"
            >
              <span className="material-symbols-outlined text-[20px]">
                edit
              </span>
              <span>Edit Listing</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Gallery Section */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="w-full aspect-video rounded-xl bg-gray-100 overflow-hidden relative border border-[#f4f4e6]">
              {car.images?.length > 0 ? (
                <img
                  src={car.images[activeImage].url}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  alt="Car Main View"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Images Available
                </div>
              )}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                {activeImage + 1} of {car.images?.length || 0} Images
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {car.images?.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative flex-shrink-0 w-24 aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === index
                      ? "border-[#f9f506] ring-2 ring-[#f9f506]/20"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img.url}
                    className="w-full h-full object-cover"
                    alt="Thumbnail"
                  />
                </button>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#f4f4e6]">
              <h3 className="text-lg font-bold text-[#1c1c0d] mb-3">
                Vehicle Description
              </h3>
              <p className="text-[#1c1c0d]/80 text-sm leading-relaxed whitespace-pre-line">
                {car.description || "No description provided for this listing."}
              </p>
            </div>
          </div>

          {/* Details Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#f4f4e6]">
              <p className="text-[#9e9d47] text-sm font-medium mb-1">
                Listing Price
              </p>
              <div className="flex items-end gap-2">
                <h2 className="text-3xl font-black text-[#1c1c0d] tracking-tight">
                  ${car.price?.toLocaleString()}
                </h2>
                <span className="text-sm text-[#9e9d47] mb-1.5 font-bold">
                  USD
                </span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#f4f4e6]">
              <h3 className="text-lg font-bold text-[#1c1c0d] mb-4">
                Specifications
              </h3>
              <div className="flex flex-col gap-4">
                <SpecRow
                  label="Mileage"
                  value={`${car.mileage?.toLocaleString()} km`}
                />
                <SpecRow label="Transmission" value={car.transmission} />
                <SpecRow label="Fuel Type" value={car.fuelType} />
                <SpecRow label="Year" value={car.year} />
                <div className="flex justify-between items-center">
                  <span className="text-[#9e9d47] text-sm">Stock ID</span>
                  <span className="text-[#1c1c0d] font-mono text-xs bg-gray-50 px-2 py-1 rounded">
                    #{car._id.slice(-8).toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Created By Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-[#f4f4e6]">
              <h3 className="text-xs font-bold text-[#9e9d47] uppercase tracking-wider mb-4">
                Listing Meta
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-sm">
                  {car.createdBy?.name?.charAt(0) || "A"}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-[#9e9d47]">Created by</span>
                  <span className="text-sm font-medium">
                    {car.createdBy?.name || "Admin"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

function SpecRow({ label, value }) {
  return (
    <div className="flex justify-between items-center pb-3 border-b border-gray-50">
      <span className="text-[#9e9d47] text-sm">{label}</span>
      <span className="text-[#1c1c0d] font-semibold text-sm">
        {value || "N/A"}
      </span>
    </div>
  );
}
