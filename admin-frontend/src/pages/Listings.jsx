import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import AdminLayout from "../components/layout/AdminLayout";
import { carService } from "../api/carService";
import { Link } from "react-router-dom";

export default function Listings() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState({ page: 1, pages: 1, total: 0 });
  const [filters, setFilters] = useState({ search: "", brand: "", page: 1 });

  const fetchCars = async () => {
    setLoading(true);
    try {
      const data = await carService.getAll(filters);
      setCars(data.cars);
      setMeta({ page: data.page, pages: data.pages, total: data.total });
    } catch (err) {
      toast.error("Failed to load inventory");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, [filters]);

  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Are you sure? This will remove the images from Cloudinary too."
      )
    )
      return;
    try {
      await carService.delete(id);
      toast.success("Car removed");
      fetchCars();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        {/* Header - Stacked on Mobile */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Inventory ({meta.total})
          </h2>
          <Link
            to={"/add-listings"}
            className="w-full sm:w-auto bg-[#f9f506] font-bold px-5 py-2.5 rounded-lg flex justify-center items-center gap-2 shadow-sm hover:scale-[1.02] transition-transform"
          >
            <span className="material-symbols-outlined text-xl">add</span> Add
            New Car
          </Link>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-[#f8f8f5] border-none rounded-lg focus:ring-2 focus:ring-[#f9f506]"
              placeholder="Search by model or brand..."
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value, page: 1 })
              }
            />
          </div>
        </div>

        {/* Responsive Table Container */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-[800px] w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
                <tr>
                  <th className="px-6 py-4">Vehicle</th>
                  <th className="px-6 py-4">Engine (CC)</th>{" "}
                  {/* New Feature Column */}
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Mileage</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan="6" className="p-20 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <span className="animate-spin h-8 w-8 border-4 border-[#f9f506] border-t-transparent rounded-full"></span>
                        <span className="text-slate-400 font-medium">
                          Loading inventory...
                        </span>
                      </div>
                    </td>
                  </tr>
                ) : cars.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="p-20 text-center text-slate-400">
                      No vehicles found.
                    </td>
                  </tr>
                ) : (
                  cars.map((car) => (
                    <tr
                      key={car._id}
                      className="group hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={
                              car.images[0]?.url ||
                              "https://via.placeholder.com/150"
                            }
                            className="h-12 w-16 object-cover rounded border border-slate-200 flex-shrink-0"
                            alt={car.model}
                          />
                          <div className="min-w-0">
                            <div className="font-bold text-slate-900 truncate">
                              {car.brand} {car.model}
                            </div>
                            <div className="text-xs text-slate-500">
                              {car.year} • {car.fuelType}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Engine Capacity Display */}
                      <td className="px-6 py-4 text-slate-600 font-medium">
                        {car.engineSize
                          ? `${car.engineSize.toLocaleString()} cc`
                          : "N/A"}
                      </td>

                      <td className="px-6 py-4 font-semibold text-slate-900">
                        Ksh {car.price.toLocaleString()}
                      </td>

                      <td className="px-6 py-4 text-slate-600">
                        {car.mileage.toLocaleString()} km
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider ${
                            car.isAvailable
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {car.isAvailable ? "Available" : "Sold"}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-1 sm:gap-2">
                          <Link
                            to={`/inventory/edit/${car._id}`}
                            className="p-2 hover:bg-slate-100 rounded-md text-slate-600 transition-colors"
                            title="Edit"
                          >
                            <span className="material-symbols-outlined text-lg leading-none">
                              edit
                            </span>
                          </Link>
                          <button
                            onClick={() => handleDelete(car._id)}
                            className="p-2 hover:bg-red-50 text-red-600 rounded-md transition-colors"
                            title="Delete"
                          >
                            <span className="material-symbols-outlined text-lg leading-none">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer - Responsive */}
          <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white">
            <span className="text-sm text-slate-500 font-medium">
              Showing {cars.length} of {meta.total} vehicles
            </span>
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                disabled={meta.page === 1}
                onClick={() => setFilters({ ...filters, page: meta.page - 1 })}
                className="flex-1 sm:flex-none px-4 py-2 border border-slate-200 rounded-lg text-sm font-bold disabled:opacity-30 hover:bg-slate-50"
              >
                Previous
              </button>
              <button
                disabled={meta.page === meta.pages}
                onClick={() => setFilters({ ...filters, page: meta.page + 1 })}
                className="flex-1 sm:flex-none px-4 py-2 bg-[#f9f506] font-bold rounded-lg text-sm shadow-sm disabled:opacity-30 active:scale-95 transition-all"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
