"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

// 1. Define the Car Interface so TypeScript knows what a 'car' is
interface CarImage {
    url: string;
    publicId?: string;
}

interface Car {
    _id: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    fuelType: string;
    transmission: string;
    images: CarImage[];
}

interface PaginationData {
    total: number;
    page: number;
    pages: number;
}

const BASE_URL = "https://suna-botors-bazar.onrender.com/api/cars";

// Next.js requires useSearchParams to be wrapped in a Suspense boundary 
// if used in a client component that is rendeblue on the server.
export default function CarListingPage() {
    return (
        <Suspense fallback={<div className="text-center py-20">Loading Search...</div>}>
            <CarListing />
        </Suspense>
    );
}

function CarListing() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // 2. Add Types to your States
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [pagination, setPagination] = useState<PaginationData>({ total: 0, page: 1, pages: 1 });

    useEffect(() => {
        const fetchCars = async () => {
            try {
                setLoading(true);
                setError(null);

                const queryParams = new URLSearchParams();

                // Map filters
                if (searchParams.get("search")) queryParams.append("search", searchParams.get("search")!);
                if (searchParams.get("make")) queryParams.append("brand", searchParams.get("make")!);
                if (searchParams.get("model")) queryParams.append("model", searchParams.get("model")!);
                if (searchParams.get("priceMin")) queryParams.append("minPrice", searchParams.get("priceMin")!);
                if (searchParams.get("priceMax")) queryParams.append("maxPrice", searchParams.get("priceMax")!);

                const currentPage = searchParams.get("page") || "1";
                queryParams.append("page", currentPage);

                const res = await fetch(`${BASE_URL}?${queryParams.toString()}`);
                if (!res.ok) throw new Error("Failed to fetch vehicles");

                const data = await res.json();

                setCars(data.cars || []);
                setPagination({
                    total: data.total || 0,
                    page: data.page || 1,
                    pages: data.pages || 1,
                });
            } catch (err: any) {
                setError(err.message || "Unable to load vehicles.");
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, [searchParams]);

    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        router.push(`${pathname}?${params.toString()}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen">
            <main className="py-12">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10">

                    {/* SEARCH FEEDBACK */}
                    {searchParams.get("search") && (
                        <div className="mb-8 flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                            <p className="text-gray-600">
                                Results for: <span className="font-bold text-blue-600">"{searchParams.get("search")}"</span>
                            </p>
                            <button onClick={() => router.push(pathname)} className="text-sm text-gray-400 hover:text-blue-600 underline">
                                Clear Search
                            </button>
                        </div>
                    )}

                    {/* Listings Grid */}
                    <div id="listings" className="mb-16">
                        {loading ? (
                            <div className="text-center py-32">
                                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
                            </div>
                        ) : error ? (
                            <div className="text-center py-32 text-blue-600 font-bold">{error}</div>
                        ) : cars.length === 0 ? (
                            <div className="text-center py-32 text-gray-500">No vehicles found.</div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {cars.map((car) => (
                                    <div key={car._id} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={car.images?.[0]?.url || "https://via.placeholder.com/600x400"}
                                                alt={car.model}
                                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold truncate">{car.brand} {car.model} {car.year}</h3>
                                            <p className="text-2xl font-black text-blue-600 my-2">KES {car.price.toLocaleString()}</p>

                                            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                                                <span className="flex items-center gap-1"><i className="material-symbols-outlined text-sm">speed</i> {car.mileage.toLocaleString()}km</span>
                                                <span className="flex items-center gap-1"><i className="material-symbols-outlined text-sm">settings</i> {car.transmission}</span>
                                            </div>

                                            <Link
                                                href={`/cars/${car._id}`}
                                                className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition block text-center"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* PAGINATION */}
                    {!loading && pagination.pages > 1 && (
                        <div className="flex justify-center gap-2">
                            {[...Array(pagination.pages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`w-10 h-10 rounded-lg font-bold ${pagination.page === i + 1 ? "bg-blue-600 text-white" : "bg-white border"}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}