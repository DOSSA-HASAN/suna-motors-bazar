"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // For optimized images

const BASE_URL = "https://suna-botors-bazar.onrender.com/api/cars";

export default function CarDetails() {
    const { id } = useParams();
    const [car, setCar] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [copied, setCopied] = useState(false);

    // --- LOGIC ---
    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy link", err);
        }
    };

    const shareToWhatsapp = () => {
        if (!car) return;
        const shareMessage = `Check out this ${car.brand} ${car.model} (${car.year}) I found on Suna Motor Bazaar: ${window.location.href}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
        window.open(whatsappUrl, "_blank");
    };

    useEffect(() => {
        if (!id) return;
        const fetchCar = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${BASE_URL}/${id}`);
                if (!res.ok) throw new Error("Vehicle not found");
                const data = await res.json();
                setCar(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCar();
    }, [id]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
        </div>
    );

    if (error || !car) return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Error: {error}</h2>
            <Link href="/cars" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
                Back to Inventory
            </Link>
        </div>
    );

    const images = car.images || [];

    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen">
            <main className="py-8">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10">
                        {/* Left: Gallery & Details */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="rounded-3xl overflow-hidden shadow-2xl bg-black aspect-[16/9] relative">
                                    <img
                                        src={images[activeImageIndex]?.url || "https://via.placeholder.com/1200x800?text=No+Image"}
                                        alt={`${car.brand} main view`}
                                        className="w-full h-full object-contain transition-all duration-500"
                                    />
                                    {images.length > 1 && (
                                        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => setActiveImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)}
                                                className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-blue-600 transition"
                                            >
                                                <span className="material-symbols-outlined">arrow_back_ios</span>
                                            </button>
                                            <button
                                                onClick={() => setActiveImageIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)}
                                                className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-blue-600 transition"
                                            >
                                                <span className="material-symbols-outlined">arrow_forward_ios</span>
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {images.length > 1 && (
                                    <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                                        {images.map((img: any, index: number) => (
                                            <button
                                                key={img.publicId || index}
                                                onClick={() => setActiveImageIndex(index)}
                                                className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-4 transition-all ${activeImageIndex === index ? "border-blue-600 scale-95" : "border-transparent opacity-60 hover:opacity-100"
                                                    }`}
                                            >
                                                <img src={img.url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-xl">
                                <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                                    <div>
                                        <h1 className="text-4xl font-black">{car.brand} {car.model} {car.year}</h1>
                                        <p className="text-gray-500 mt-2">Ref ID: {car._id.slice(-8).toUpperCase()}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">Price</p>
                                        <p className="text-3xl font-black text-blue-600">KES {Number(car.price).toLocaleString()}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-gray-100 mb-8">
                                    <DetailItem icon="speed" label="Mileage" value={`${car.mileage?.toLocaleString()} km`} />
                                    <DetailItem icon="local_gas_station" label="Fuel" value={car.fuelType} />
                                    <DetailItem icon="settings" label="Gearbox" value={car.transmission} />
                                    <DetailItem icon="palette" label="Color" value={car.color || "Unspecified"} />
                                </div>

                                <h3 className="text-2xl font-black mb-4">Description</h3>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{car.description}</p>
                            </div>
                        </div>

                        {/* Right: Sticky Action Sidebar */}
                        <div className="lg:sticky lg:top-8 h-fit space-y-6">
                            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                                <h4 className="text-xl font-bold mb-6">Interested in this car?</h4>
                                <div className="space-y-4">
                                    <a
                                        href={`https://wa.me/254728166487?text=Hi, I'm interested in the ${car.year} ${car.brand} ${car.model} (KES ${car.price})`}
                                        target="_blank" rel="noreferrer"
                                        className="w-full py-4 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#20bd5a] transition flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">chat</span> WhatsApp Expert
                                    </a>

                                    <button onClick={shareToWhatsapp} className="w-full py-4 border-2 border-[#25D366] text-[#25D366] font-bold rounded-2xl hover:bg-[#25D366] hover:text-white transition flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined">share</span> Share on WhatsApp
                                    </button>

                                    <button
                                        onClick={handleCopyLink}
                                        className={`w-full py-4 font-bold rounded-2xl transition flex items-center justify-center gap-2 border-2 ${copied ? "bg-green-600 border-green-600 text-white" : "border-gray-200 text-gray-700 hover:border-blue-600 hover:text-blue-600"
                                            }`}
                                    >
                                        <span className="material-symbols-outlined">{copied ? "check_circle" : "link"}</span>
                                        {copied ? "Link Copied!" : "Copy Page Link"}
                                    </button>

                                    <a href="tel:0728166487" className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined">call</span> Call Dealer
                                    </a>

                                    <hr className="my-6" />
                                    <div className="bg-gray-50 p-4 rounded-2xl">
                                        <p className="text-sm font-bold mb-2 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-blue-600 text-sm">info</span> Financing Estimate
                                        </p>
                                        <p className="text-xs text-gray-600">
                                            Pay as low as <span className="font-bold text-gray-900">KES {Math.round(car.price * 0.025).toLocaleString()}/mo</span> with 30% deposit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

// Sub-component for clean detail items
function DetailItem({ icon, label, value }: { icon: string, label: string, value: string }) {
    return (
        <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-600">{icon}</span>
            <div>
                <p className="text-xs text-gray-500 uppercase">{label}</p>
                <p className="font-bold">{value}</p>
            </div>
        </div>
    );
}