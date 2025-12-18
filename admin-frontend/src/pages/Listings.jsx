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
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Inventory ({meta.total})
          </h2>
          <Link
            to={"/add-listings"}
            className="bg-[#f9f506] font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-sm"
          >
            <span className="material-symbols-outlined">add</span> Add New Car
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 flex gap-4">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-[#f8f8f5] border-none rounded-lg"
              placeholder="Search by model or brand..."
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value, page: 1 })
              }
            />
          </div>
          {/* Add more select inputs here for Brand, Year, etc. */}
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Vehicle</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Mileage</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan="5" className="p-10 text-center text-slate-400">
                    Loading inventory...
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
                          className="h-12 w-16 object-cover rounded border border-slate-200"
                          alt={car.model}
                        />
                        <div>
                          <div className="font-bold text-slate-900">
                            {car.brand} {car.model}
                          </div>
                          <div className="text-xs text-slate-500">
                            {car.year} • {car.fuelType}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      ${car.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {car.mileage.toLocaleString()} mi
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          car.isAvailable
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {car.isAvailable ? "Available" : "Sold"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link
                          to={`/inventory/edit/${car._id}`}
                          className="p-1.5 hover:bg-slate-100 rounded-md text-slate-600 inline-block"
                        >
                          <span className="material-symbols-outlined text-[20px]">
                            edit
                          </span>
                        </Link>
                        <button
                          onClick={() => handleDelete(car._id)}
                          className="p-1.5 hover:bg-red-50 text-red-600 rounded-md"
                        >
                          <span className="material-symbols-outlined text-[20px]">
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

          {/* Pagination Footer */}
          <div className="p-4 border-t border-slate-100 flex justify-between items-center bg-white">
            <span className="text-sm text-slate-500">
              Page {meta.page} of {meta.pages}
            </span>
            <div className="flex gap-2">
              <button
                disabled={meta.page === 1}
                onClick={() => setFilters({ ...filters, page: meta.page - 1 })}
                className="px-3 py-1 border border-slate-200 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                disabled={meta.page === meta.pages}
                onClick={() => setFilters({ ...filters, page: meta.page + 1 })}
                className="px-3 py-1 bg-[#f9f506] font-medium rounded disabled:opacity-50"
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
