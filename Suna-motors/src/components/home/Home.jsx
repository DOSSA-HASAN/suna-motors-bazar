import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// import ranges from "../../assets/image.jpg";
import toyotaLogo from "../../assets/Toyota.jpg";
import suzuki from "../../assets/suzukilogo.jpg";
import Nissan from "../../assets/Nissanlogo.jpg";
import jaguar from "../../assets/jaguar.jpg";
import subishi from "../../assets/Mitsubishi.jpg";
import honda from "../../assets/Honda.jpg";
import benz from "../../assets/benz.jpg";
import audi from "../../assets/audi.jpg";
import subaru from "../../assets/subaru.jpg";
import bmw from "../../assets/BMW.jpeg";
import chevrolet from "../../assets/chevrolet.jpg";
import VW from "../../assets/Vw.jpg";
import Lexus from "../../assets/lexus.jpg";
import mazda from "../../assets/MAZDA.jpg";
import ford from "../../assets/Ford.jpg";
import volvo from "../../assets/VOLVO.jpg";
import CarListing from "../carlisting/CarListing";

function Home() {
  const carData = {
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
    "Land Rover": [
      "Defender",
      "Range Rover Sport",
      "Discovery",
      "Range Rover Vogue",
      "Evoque",
      "Velar",
    ],
    BMW: ["X5", "X3", "X1", "3 Series", "5 Series", "7 Series"],
    Lexus: ["RX", "LX 570", "NX", "IS", "ES", "GX"],
    Volkswagen: ["Golf", "Tiguan", "Touareg", "Passat", "Polo", "Amarok"],
    Audi: ["A4", "A6", "Q5", "Q7", "Q3"],
    Hyundai: ["Tucson", "Santa Fe", "Elantra", "Creta"],
    Honda: ["CR-V", "Civic", "Fit", "Accord", "Vezel"],
    Mitsubishi: ["Pajero", "Outlander", "L200", "RVR"],
    Isuzu: ["D-Max", "MU-X", "NPR", "FRR"],
    Suzuki: ["Swift", "Jimny", "Vitara", "Ertiga"],
  };

  const navigate = useNavigate();

  // 2. State for the dropdowns
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  // 3. Logic: If the Make changes, reset the Model to empty
  useEffect(() => {
    setSelectedModel("");
  }, [selectedMake]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    // Get values directly from state or form
    if (selectedMake) params.append("make", selectedMake);
    if (selectedModel) params.append("model", selectedModel);

    const budget = formData.get("budget");
    if (budget === "Under KSh 3M") {
      params.append("priceMax", "3000000");
    } else if (budget === "KSh 3M - 6M") {
      params.append("priceMin", "3000000");
      params.append("priceMax", "6000000");
    } else if (budget === "Over KSh 6M") {
      params.append("priceMin", "6000000");
    }

    // Redirect to your inventory page
    navigate(`/cars?${params.toString()}`);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of 6 high-quality premium SUV images: Toyota Prado TX & Mercedes-AMG GLC 63 (V8 models)
  // All dynamic/driving shots, no Range Rover Velar
  const slides = ["./car1.png", "./car2.png", "./car3.png", "./car4.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Auto-advance every 8 seconds

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className="bg-gray-50 text-gray-900 font-display antialiased min-h-screen flex flex-col">
      {/* Main */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Slideshow Background Images */}
          <div className="absolute inset-0">
            {slides.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Premium luxury SUV - ${
                  index < 4 ? "Toyota Prado TX" : "Mercedes-AMG GLC 63"
                } in action`}
                className={`absolute inset-0 w-full h-full object-cover brightness-75 transition-opacity duration-1500 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Dark Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Main Hero Content */}
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 text-center text-white">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-red-600/90 backdrop-blur rounded-full mb-6 animate-pulse">
              <span className="size-3 bg-white rounded-full animate-ping" />
              <span className="text-sm font-bold uppercase tracking-wider">
                New Premium Stock Just Arrived!
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Drive Your Dream
              <br />
              Today in Kenya
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
              Discover verified, premium imported & local vehicles. Quality
              inspected, priced right, delivered nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/cars" // Change to your actual inventory page route
                className="px-10 py-5 bg-red-600 text-white font-bold text-lg rounded-full hover:bg-red-700 hover:scale-105 shadow-2xl transition-all duration-300"
              >
                Browse Inventory Now
              </Link>
              <button className="px-10 py-5 bg-white/10 backdrop-blur border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/20 transition">
                How It Works
              </button>
            </div>
            <div className="flex justify-center gap-10 mt-12 text-sm font-medium">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl">
                  verified
                </span>{" "}
                KEBS Verified
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl">
                  local_shipping
                </span>{" "}
                Nationwide Delivery
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl">
                  security
                </span>{" "}
                Secure Financing
              </div>
            </div>
          </div>

          {/* Dots Navigation Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white w-10" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Advanced Search Bar - Now Functional */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-10 -mt-20 relative z-20 mb-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            {/* <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const params = new URLSearchParams();

                const make = formData.get("make");
                const model = formData.get("model");
                const budget = formData.get("budget");

                if (make && make !== "Makes") params.append("make", make);
                if (model && model !== "Models") params.append("model", model);

                // Handle budget ranges
                if (budget === "Under KSh 3M") {
                  params.append("priceMax", "3000000");
                } else if (budget === "KSh 3M - 6M") {
                  params.append("priceMin", "3000000");
                  params.append("priceMax", "6000000");
                } else if (budget === "Over KSh 6M") {
                  params.append("priceMin", "6000000");
                }

                // Redirect to inventory with filters
                window.location.href = `/cars?${params.toString()}`;
              }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              <select
                name="make"
                className="h-16 px-6 bg-gray-50 rounded-2xl text-lg font-medium focus:ring-4 focus:ring-red-600/20 focus:bg-white transition"
                defaultValue=""
              >
                <option value="" disabled>
                  Make
                </option>
                <option>Toyota</option>
                <option>Mercedes-Benz</option>
                <option>Subaru</option>
                <option>Land Rover</option>
                <option>Nissan</option>
                <option>Mazda</option>
                <option>BMW</option>
                <option>Lexus</option>
              </select>

              <select
                name="model"
                className="h-16 px-6 bg-gray-50 rounded-2xl text-lg font-medium focus:ring-4 focus:ring-red-600/20 focus:bg-white transition"
                defaultValue=""
              >
                <option value="" disabled>
                  Model
                </option>
                <option>Prado</option>
                <option>Land Cruiser</option>
                <option>Harrier</option>
                <option>Forester</option>
                <option>C-Class</option>
                <option>X5</option>
                <option>RX</option>
                <option>Patrol</option>
              </select>

              <select
                name="budget"
                className="h-16 px-6 bg-gray-50 rounded-2xl text-lg font-medium focus:ring-4 focus:ring-red-600/20 focus:bg-white transition"
                defaultValue=""
              >
                <option value="" disabled>
                  Price
                </option>
                <option>Under KSh 3M</option>
                <option>KSh 3M - 6M</option>
                <option>Over KSh 6M</option>
              </select>

              <button
                type="submit"
                className="h-16 bg-red-600 text-white font-bold text-lg rounded-2xl hover:bg-red-700 hover:scale-105 shadow-lg transition-all flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined text-2xl">
                  search
                </span>
                Find My Car
              </button>
            </form> */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              {/* Make Selection */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-400 ml-2">
                  Make
                </label>
                <select
                  name="make"
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                  className="h-14 px-4 bg-gray-100 rounded-xl font-semibold outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                >
                  <option value="">All Makes</option>
                  {Object.keys(carData).map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
              </div>

              {/* Model Selection */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-400 ml-2">
                  Model
                </label>
                <select
                  name="model"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={!selectedMake}
                  className="h-14 px-4 bg-gray-100 rounded-xl font-semibold outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50 appearance-none"
                >
                  <option value="">
                    {selectedMake ? "All Models" : "Select Make First"}
                  </option>
                  {selectedMake &&
                    carData[selectedMake].map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                </select>
              </div>

              {/* Budget Selection */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-400 ml-2">
                  Price
                </label>
                <select
                  name="budget"
                  className="h-14 px-4 bg-gray-100 rounded-xl font-semibold outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                >
                  <option value="">Prices</option>
                  <option>Under KSh 3M</option>
                  <option>KSh 3M - 6M</option>
                  <option>Over KSh 6M</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="h-14 w-full bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                >
                  Search Cars
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="py-10 bg-gray-50">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            {/* Optional small heading above the full listing */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Our Full Inventory
              </h2>
              <p className="text-xl text-gray-600">
                Browse every vehicle we have in stock right here
              </p>
            </div>

            {/* This renders everything that is inside your CarListing.jsx */}
            <CarListing />
          </div>
        </section>
        {/* Popular Categories */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Popular Brands in Southern Nyanza
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore premium vehicles from the most trusted and loved brands on
              Kenyan roads
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 justify-items-center">
            {/* Toyota */}
            <a
              href="/cars?brand=toyota"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={toyotaLogo}
                alt="Toyota Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Toyota
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>

            {/* Suzuki */}
            <a
              href="/cars?brand=suzuki"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={suzuki}
                alt="Suzuki Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Suzuki
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>

            {/* Nissan */}
            <a
              href="/cars?brand=nissan"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={Nissan}
                alt="Nissan Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Nissan
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>

            {/* Jaguar */}
            <a
              href="/cars?brand=jaguar"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={jaguar}
                alt="Jaguar Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Jaguar
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>

            {/* Mitsubishi */}
            <a
              href="/cars?brand=mitsubishi"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={subishi}
                alt="Mitsubishi Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Mitsubishi
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>

            {/* Honda */}
            <a
              href="/cars?brand=honda"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={honda}
                alt="Honda Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Honda
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>

            {/* Mercedes-Benz */}
            <a
              href="/cars?brand=mercedes"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={benz}
                alt="Mercedes-Benz Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Mercedes
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>

            {/* Audi */}
            <a
              href="/cars?brand=audi"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={audi}
                alt="Audi Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Audi
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>

            {/* Subaru */}
            <a
              href="/cars?brand=subaru"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={subaru}
                alt="Subaru Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Subaru
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>

            {/* BMW */}
            <a
              href="/cars?brand=bmw"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={bmw}
                alt="BMW Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                BMW
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>

            {/* Chevrolet */}
            <a
              href="/cars?brand=chevrolet"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={chevrolet}
                alt="Chevrolet Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Chevrolet
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>
            <a
              href="/cars?brand=chevrolet"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={VW}
                alt="Chevrolet Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Chevrolet
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>
            <a
              href="/cars?brand=chevrolet"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={Lexus}
                alt="Chevrolet Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Chevrolet
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>
            <a
              href="/cars?brand=chevrolet"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={mazda}
                alt="Chevrolet Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Chevrolet
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>
            <a
              href="/cars?brand=chevrolet"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={volvo}
                alt="Chevrolet Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Chevrolet
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>
            <a
              href="/cars?brand=chevrolet"
              className="group relative bg-white rounded-full size-40 shadow-xl hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-500 hover:-translate-y-6 hover:scale-110 flex items-center justify-center overflow-hidden"
            >
              <img
                src={ford}
                alt="Chevrolet Logo"
                className="max-h-28 max-w-full object-contain"
              />
              <p className="absolute bottom-4 text-xl font-black text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Chevrolet
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />
            </a>
          </div>
        </section>

        {/* Sell Your Car Banner */}
        <section className="bg-red-600 text-white py-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Sell Your Car?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Get a free instant valuation and sell fast to thousands of
              verified buyers. Highest offers guaranteed.
            </p>
            <button className="px-12 py-6 bg-white text-red-600 font-bold text-xl rounded-full hover:bg-gray-100 hover:scale-105 shadow-2xl transition-all">
              Get Free Valuation Now
            </button>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
            <h2 className="text-4xl font-black mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-8 bg-gray-50 rounded-3xl shadow-lg">
                <p className="text-lg italic mb-6">
                  "Best experience ever! Found my dream Prado in perfect
                  condition. Delivery was seamless."
                </p>
                <p className="font-bold">– John M., Nairobi</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl shadow-lg">
                <p className="text-lg italic mb-6">
                  "Transparent pricing and super helpful team. Got financing
                  approved in hours!"
                </p>
                <p className="font-bold">– Sarah K., Mombasa</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl shadow-lg">
                <p className="text-lg italic mb-6">
                  "Sold my car in 3 days for more than expected. Highly
                  recommend Suna Motor!"
                </p>
                <p className="font-bold">– David O., Eldoret</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-white rounded-3xl shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">
              Flexible Payment Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the plan that suits your budget — drive your SUV home
              today!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 text-center hover:shadow-2xl transition">
              <span className="material-symbols-outlined text-6xl text-red-600 mb-6">
                payments
              </span>
              <h3 className="text-2xl font-black mb-4">Cash Sale</h3>
              <p className="text-gray-700 mb-6">
                Full payment upfront for instant ownership and the best deals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Immediate logbook transfer</li>
                <li>✓ Special cash discount</li>
                <li>✓ No monthly commitments</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 text-center hover:shadow-2xl transition">
              <span className="material-symbols-outlined text-6xl text-red-600 mb-6">
                credit_score
              </span>
              <h3 className="text-2xl font-black mb-4">Hire Purchase</h3>
              <p className="text-gray-700 mb-6">
                Affordable monthly installments with low deposit.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ As low as 20% deposit</li>
                <li>✓ Flexible 12-60 month terms</li>
                <li>✓ Quick approval process</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 text-center hover:shadow-2xl transition">
              <span className="material-symbols-outlined text-6xl text-red-600 mb-6">
                account_balance
              </span>
              <h3 className="text-2xl font-black mb-4">Bank Financing</h3>
              <p className="text-gray-700 mb-6">
                Partnered with top banks for competitive rates.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Up to 90% financing</li>
                <li>✓ Low interest rates</li>
                <li>✓ Fast bank approval</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="/financing"
              className="px-12 py-5 bg-red-600 text-white font-bold text-lg rounded-full hover:bg-red-700 transition"
            >
              Learn More About Financing
            </a>
          </div>
        </section>
        {/* Key Stats & Trust Section - Data-Driven Alternative */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Trusted by Thousands Across Kenya
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Proven numbers that show why drivers and sellers choose Suna Motor
              Bazaar
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="group">
                <div className="text-6xl font-black text-red-600 mb-4">
                  200+
                </div>
                <p className="text-xl font-bold text-gray-800">
                  Premium Vehicles Listed
                </p>
                <p className="text-gray-600 mt-2">
                  Carefully inspected and ready to drive
                </p>
              </div>
              <div className="group">
                <div className="text-6xl font-black text-red-600 mb-4">
                  2,000+
                </div>
                <p className="text-xl font-bold text-gray-800">
                  Happy Customers
                </p>
                <p className="text-gray-600 mt-2">
                  Successful buys & sells nationwide
                </p>
              </div>
              <div className="group">
                <div className="text-6xl font-black text-red-600 mb-4">98%</div>
                <p className="text-xl font-bold text-gray-800">
                  Satisfaction Rate
                </p>
                <p className="text-gray-600 mt-2">
                  From verified buyer feedback
                </p>
              </div>
              <div className="group">
                <div className="text-6xl font-black text-red-600 mb-4">
                  24/7
                </div>
                <p className="text-xl font-bold text-gray-800">
                  Support Available
                </p>
                <p className="text-gray-600 mt-2">
                  Expert team ready to assist anytime
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Why Thousands Trust Suna Motor Bazaar
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
              We make buying your next car simple, safe, and exciting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="group hover:scale-105 transition-all duration-500">
                <div className="size-24 mx-auto bg-red-600/20 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-red-600/40 transition">
                  <span className="material-symbols-outlined text-5xl text-red-600">
                    verified_user
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  150-Point Verified Inspection
                </h3>
                <p className="text-gray-400">
                  Every vehicle undergoes rigorous checks for quality and
                  safety.
                </p>
              </div>
              <div className="group hover:scale-105 transition-all duration-500">
                <div className="size-24 mx-auto bg-red-600/20 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-red-600/40 transition">
                  <span className="material-symbols-outlined text-5xl text-red-600">
                    request_quote
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">No Hidden Fees Ever</h3>
                <p className="text-gray-400">
                  Transparent pricing — what you see is exactly what you pay.
                </p>
              </div>
              <div className="group hover:scale-105 transition-all duration-500">
                <div className="size-24 mx-auto bg-red-600/20 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-red-600/40 transition">
                  <span className="material-symbols-outlined text-5xl text-red-600">
                    handshake
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Instant Financing Options
                </h3>
                <p className="text-gray-400">
                  Partnered with top banks for fast approvals and great rates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
