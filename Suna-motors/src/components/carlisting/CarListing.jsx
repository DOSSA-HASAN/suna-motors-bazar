import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://suna-botors-bazar.onrender.com/api/cars';

function CarListing() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({ total: 0, page: 1, pages: 1 });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        setError(null);

        // 1. Get current URL params (from your Home search)
        const params = new URLSearchParams(window.location.search);
        
        // 2. Map frontend names to your Backend keys (brand, minPrice, etc.)
        const queryParams = new URLSearchParams();
        if (params.get('make')) queryParams.append('brand', params.get('make'));
        if (params.get('model')) queryParams.append('model', params.get('model'));
        if (params.get('priceMin')) queryParams.append('minPrice', params.get('priceMin'));
        if (params.get('priceMax')) queryParams.append('maxPrice', params.get('priceMax'));
        
        // Add default pagination if not present
        if (!params.get('page')) queryParams.append('page', '1');

        const url = `${BASE_URL}?${queryParams.toString()}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch vehicles');

        const data = await res.json();
        
        // 3. Your backend returns { cars: [], total: x, page: y, pages: z }
        setCars(data.cars || []);
        setPagination({
          total: data.total,
          page: data.page,
          pages: data.pages
        });
      } catch (err) {
        console.error('Error fetching cars:', err);
        setError('Unable to load vehicles. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, [window.location.search]); // Refetch when URL search params change

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* ... Hero Banner code stays same ... */}

      <main className="py-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          
          {/* Listings Grid */}
          <div id="listings" className="mb-16">
            {loading ? (
               <div className="text-center py-32">
                 <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-red-600 border-solid"></div>
               </div>
            ) : error ? (
              <div className="text-center py-32">
                <p className="text-red-600 mb-4">{error}</p>
                <button onClick={() => window.location.reload()} className="bg-red-600 text-white px-6 py-2 rounded-full">Retry</button>
              </div>
            ) : cars.length === 0 ? (
              <div className="text-center py-32">
                <p className="text-2xl text-gray-600">No vehicles match your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {cars.map((car) => (
                  <div key={car._id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                    <div className="relative h-64 overflow-hidden">
                      {/* Backend uses car.images array with .url property */}
                      <img
                        src={car.images?.[0]?.url || 'https://via.placeholder.com/600x400?text=No+Image'}
                        alt={`${car.brand} ${car.model}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-black mb-2">
                        {car.year} {car.brand} {car.model}
                      </h3>
                      <p className="text-3xl font-black text-red-600 mb-4">
                        KES {Number(car.price).toLocaleString()}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined">speed</span> {car.mileage?.toLocaleString()} km
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined">local_gas_station</span> {car.fuelType}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined">settings</span> {car.transmission}
                        </div>
                      </div>

                      <Link
                        to={`/car/${car._id}`}
                        className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition text-center block"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pagination */}
          {pagination.pages > 1 && (
            <div className="flex justify-center items-center gap-4 py-8">
               {/* Simplified logic: In a real app, use useSearchParams from react-router-dom to update page */}
               <p className="text-gray-500">Page {pagination.page} of {pagination.pages}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default CarListing;