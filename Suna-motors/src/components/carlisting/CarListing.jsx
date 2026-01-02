import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const BASE_URL = "https://suna-botors-bazar.onrender.com/api/cars";

function CarListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({ total: 0, page: 1, pages: 1 });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);

        // 1. Map frontend search params to Backend query keys
        const queryParams = new URLSearchParams();

        // ADDED: Handle the global search from the navbar
        if (searchParams.get("search")) {
          queryParams.append("search", searchParams.get("search"));
        }

        // Existing filters
        if (searchParams.get("make"))
          queryParams.append("brand", searchParams.get("make"));
        if (searchParams.get("model"))
          queryParams.append("model", searchParams.get("model"));
        if (searchParams.get("priceMin"))
          queryParams.append("minPrice", searchParams.get("priceMin"));
        if (searchParams.get("priceMax"))
          queryParams.append("maxPrice", searchParams.get("priceMax"));

        // Ensure the current page is sent to the backend
        const currentPage = searchParams.get("page") || "1";
        queryParams.append("page", currentPage);

        const url = `${BASE_URL}?${queryParams.toString()}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch vehicles");

        const data = await res.json();

        // 2. Update states with backend response
        setCars(data.cars || []);
        setPagination({
          total: data.total || 0,
          page: data.page || 1,
          pages: data.pages || 1,
        });
      } catch (err) {
        console.error("Error fetching cars:", err);
        setError("Unable to load vehicles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [searchParams]); // Refetch whenever searchParams change

  // --- HANDLER: Change Page while preserving other filters ---
  const handlePageChange = (newPage) => {
    const current = new URLSearchParams(searchParams);
    current.set("page", newPage);
    setSearchParams(current);

    // Smooth scroll back to top of listings
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <main className="py-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          {/* SEARCH FEEDBACK: Tell the user what they searched for */}
          {searchParams.get("search") && (
            <div className="mb-8 flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-600">
                Showing results for:{" "}
                <span className="font-bold text-red-600">
                  "{searchParams.get("search")}"
                </span>
              </p>
              <button
                onClick={() => setSearchParams({})}
                className="text-sm text-gray-400 hover:text-red-600 underline"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Listings Grid */}
          <div id="listings" className="mb-16">
            {loading ? (
              <div className="text-center py-32">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-red-600 border-solid"></div>
                <p className="mt-4 text-gray-500 font-medium">
                  Finding the best deals...
                </p>
              </div>
            ) : error ? (
              <div className="text-center py-32">
                <p className="text-red-600 mb-4 font-bold">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition shadow-lg"
                >
                  Retry
                </button>
              </div>
            ) : cars.length === 0 ? (
              <div className="text-center py-32">
                <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">
                  search_off
                </span>
                <p className="text-2xl text-gray-600 font-bold">
                  No vehicles match your search.
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 text-red-600 font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {cars.map((car) => (
                  <div
                    key={car._id}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={
                          car.images?.[0]?.url ||
                          "https://via.placeholder.com/600x400?text=No+Image"
                        }
                        alt={`${car.brand} ${car.model}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-black mb-2 truncate">
                        {car.brand} {car.model} {car.year}
                      </h3>
                      <p className="text-3xl font-black text-red-600 mb-4">
                        KES {Number(car.price).toLocaleString()}
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-gray-400">
                            speed
                          </span>
                          {car.mileage?.toLocaleString()} km
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-gray-400">
                            local_gas_station
                          </span>
                          {car.fuelType}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-gray-400">
                            settings
                          </span>
                          {car.transmission}
                        </div>
                      </div>

                      <Link
                        to={`/car/${car._id}`}
                        className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition text-center block shadow-md active:scale-95"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* --- PAGINATION SECTION --- */}
          {!loading && pagination.pages > 1 && (
            <div className="flex flex-col items-center gap-6 py-12 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <button
                  disabled={pagination.page <= 1}
                  onClick={() => handlePageChange(pagination.page - 1)}
                  className="flex items-center justify-center w-12 h-12 rounded-xl border-2 border-gray-200 hover:border-red-600 hover:text-red-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>

                <div className="flex gap-2">
                  {[...Array(pagination.pages)].map((_, index) => {
                    const pageNum = index + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-12 h-12 rounded-xl font-bold transition-all ${
                          pagination.page === pageNum
                            ? "bg-red-600 text-white shadow-lg shadow-red-200"
                            : "bg-white border-2 border-gray-100 text-gray-600 hover:border-red-600"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  disabled={pagination.page >= pagination.pages}
                  onClick={() => handlePageChange(pagination.page + 1)}
                  className="flex items-center justify-center w-12 h-12 rounded-xl border-2 border-gray-200 hover:border-red-600 hover:text-red-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>

              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Showing page {pagination.page} of {pagination.pages}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default CarListing;
