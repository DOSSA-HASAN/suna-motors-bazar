"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CarDetails from "../cars/[id]/page";
import { CardSim } from "lucide-react";

export default function HomeClient() {
    const router = useRouter();

    const carData: Record<string, string[]> = {
        Toyota: [
            "Prado",
            "Land Cruiser",
            "Harrier",
            "Vitz",
            "Hilux",
            "Noah",
            "Voxy",
            "Premio",
            "Allion",
            "Rav4",
            "Axio",
            "Fielder",
            "Rush",
            "Alphard",
            "Fortuner",
        ],
        "Mercedes-Benz": [
            "C-Class",
            "E-Class",
            "S-Class",
            "GLE",
            "G-Wagon",
            "GLC",
            "GLA",
            "CLA",
            "Vito",
        ],
        Subaru: ["Forester", "Impreza", "Outback", "XV", "Legacy", "Levorg", "WRX"],
        Mazda: ["CX-5", "Demio", "Axela", "Atenza", "CX-3", "CX-8", "BT-50"],
        Nissan: [
            "Patrol",
            "X-Trail",
            "Note",
            "Juke",
            "Serena",
            "Navara",
            "Teana",
            "Sylphy",
            "Tiida",
        ],
        BMW: ["X5", "X3", "X1", "3 Series", "5 Series", "7 Series"],
        Lexus: ["RX", "LX 570", "NX", "IS", "ES", "GX"],
        Volkswagen: ["Golf", "Tiguan", "Touareg", "Passat", "Polo", "Amarok"],
        Audi: ["A4", "A6", "Q5", "Q7", "Q3"],
        Hyundai: ["Tucson", "Santa Fe", "Elantra", "Creta"],
        Honda: ["CR-V", "Civic", "Fit", "Accord", "Vezel"],
        Mitsubishi: ["Pajero", "Outlander", "L200", "RVR"],
        Suzuki: ["Swift", "Jimny", "Vitara", "Ertiga"],
    };

    const [selectedMake, setSelectedMake] = useState("");
    const [selectedModel, setSelectedModel] = useState("");

    useEffect(() => {
        setSelectedModel("");
    }, [selectedMake]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const params = new URLSearchParams();

        if (selectedMake) params.append("make", selectedMake);
        if (selectedModel) params.append("model", selectedModel);

        const budget = formData.get("budget");
        if (budget === "Under KSh 3M") params.append("priceMax", "3000000");
        if (budget === "KSh 3M - 6M") {
            params.append("priceMin", "3000000");
            params.append("priceMax", "6000000");
        }
        if (budget === "Over KSh 6M") params.append("priceMin", "6000000");

        router.push(`/cars?${params.toString()}`);
    };

    const slides = ["/car1.png", "/car2.png", "/car3.png", "/car4.png"];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setCurrentSlide((prev) => (prev + 1) % slides.length),
            8000
        );
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <main className="flex-1">
                {/* HERO */}
                <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
                    <div className="absolute inset-0">
                        {slides.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt="Luxury vehicle"
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="absolute inset-0 bg-black/70" />

                    <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-black mb-6">
                                Drive Your Dream
                                <br /> Today in Kenya
                            </h1>
                            <p className="text-xl mb-10 max-w-3xl mx-auto">
                                Discover verified, premium imported & local vehicles.
                            </p>
                            <Link
                                href="/cars"
                                className="px-10 py-5 bg-blue-600 rounded-full font-bold hover:bg-blue-700 transition"
                            >
                                Browse Inventory
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SEARCH */}
                <section className="-mt-20 relative z-20 max-w-7xl mx-auto px-6 mb-20">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-3xl shadow-xl p-8 grid md:grid-cols-4 gap-4"
                    >
                        <select
                            value={selectedMake}
                            onChange={(e) => setSelectedMake(e.target.value)}
                            className="h-14 rounded-xl bg-gray-100 px-4"
                        >
                            <option value="">All Makes</option>
                            {Object.keys(carData).map((make) => (
                                <option key={make}>{make}</option>
                            ))}
                        </select>

                        <select
                            value={selectedModel}
                            onChange={(e) => setSelectedModel(e.target.value)}
                            disabled={!selectedMake}
                            className="h-14 rounded-xl bg-gray-100 px-4 disabled:opacity-50"
                        >
                            <option value="">All Models</option>
                            {selectedMake &&
                                carData[selectedMake].map((model) => (
                                    <option key={model}>{model}</option>
                                ))}
                        </select>

                        <select name="budget" className="h-14 rounded-xl bg-gray-100 px-4">
                            <option value="">Price</option>
                            <option>Under KSh 3M</option>
                            <option>KSh 3M - 6M</option>
                            <option>Over KSh 6M</option>
                        </select>

                        <button className="h-14 bg-blue-600 text-white rounded-full font-bold">
                            Search Cars
                        </button>
                    </form>
                </section>

                {/* INVENTORY */}
                <section className="max-w-7xl mx-auto px-6 py-20">
                    <h2 className="text-4xl font-black text-center mb-12">
                        Our Full Inventory
                    </h2>
                    <CarDetails />
                </section>

                {/* SELL BANNER */}
                <section className="bg-blue-600 text-white py-20 text-center">
                    <h2 className="text-4xl font-black mb-6">Ready to Sell Your Car?</h2>
                    <p className="text-xl mb-8">
                        Get a free valuation and sell fast.
                    </p>
                    <button className="px-12 py-5 bg-white text-blue-600 font-bold rounded-full">
                        Get Free Valuation
                    </button>
                </section>

                {/* TESTIMONIALS */}
                <section className="py-20 bg-white text-center">
                    <h2 className="text-4xl font-black mb-12">
                        What Our Customers Say
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
                        {[
                            "Best experience ever!",
                            "Transparent pricing!",
                            "Sold my car in 3 days!",
                        ].map((text, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-3xl shadow">
                                <p className="italic mb-4">"{text}"</p>
                                <p className="font-bold">– Verified Customer</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* STATS */}
                <section className="py-20 bg-gray-50 text-center">
                    <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
                        {[
                            ["200+", "Vehicles Listed"],
                            ["2,000+", "Happy Customers"],
                            ["98%", "Satisfaction Rate"],
                            ["24/7", "Support"],
                        ].map(([num, label]) => (
                            <div key={label}>
                                <div className="text-6xl font-black text-blue-600">{num}</div>
                                <p className="font-bold">{label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WHY US */}
                <section className="bg-gray-900 text-white py-20 text-center">
                    <h2 className="text-4xl font-black mb-12">
                        Why Thousands Trust Us
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
                        {[
                            "Verified Inspection",
                            "No Hidden Fees",
                            "Instant Financing",
                        ].map((title) => (
                            <div key={title}>
                                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                                <p className="text-gray-400">
                                    Trusted, transparent, and fast.
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
