function SUV() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Hero Banner - Premium SUV Adventure Vibe */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://kai-and-karo.ams3.cdn.digitaloceanspaces.com/media/vehicles/images/0d0c8852-350c-4af4-8f93-79be48fa80cb.jpeg"
          alt="Premium SUVs ready for Kenyan roads"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Premium SUV Collection
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover verified, high-quality SUVs built for Kenyan terrain — power, comfort, and reliability guaranteed.
          </p>
          <a href="#listings" className="px-12 py-5 bg-red-600 text-white font-bold text-lg rounded-full hover:bg-red-700 hover:scale-105 shadow-2xl transition-all">
            Browse All SUVs
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          {/* Page Heading & Search */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Explore Our SUV Inventory</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hand-picked premium SUVs — rigorously inspected, transparently priced, ready for nationwide delivery.
            </p>
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="flex items-center bg-white rounded-full shadow-lg px-6 py-4">
                <span className="material-symbols-outlined text-2xl text-gray-500">search</span>
                <input
                  type="text"
                  placeholder="Search by make, model, year..."
                  className="ml-4 w-full text-lg focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {['Make', 'Year', 'Price Range', 'Fuel Type', 'Mileage'].map((filter) => (
              <button key={filter} className="px-6 py-3 bg-white border border-gray-200 rounded-full font-medium hover:border-red-600 hover:shadow-md transition flex items-center gap-2">
                {filter}
                <span className="material-symbols-outlined text-lg">expand_more</span>
              </button>
            ))}
            <button className="px-6 py-3 text-red-600 font-medium hover:underline">Clear Filters</button>
          </div>

          {/* Listings Grid - Premium Cards (12 cards for 3 pages) */}
          <div id="listings" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {/* Page 1 */}
            {/* Card 1 - Toyota Prado TX */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://kai-and-karo.ams3.cdn.digitaloceanspaces.com/media/vehicles/images/IMG-20231213-WA0195.jpg" 
                  alt="2018 Toyota Prado TX" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">NEW ARRIVAL</div>
                <button className="absolute top-4 right-4 size-12 bg-white/90 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">photo_camera</span> 12 Photos
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2">2018 Toyota Prado TX</h3>
                <p className="text-3xl font-black text-red-600 mb-4">KES 5,800,000</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">calendar_today</span> 2018</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">speed</span> 65,000 km</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">local_gas_station</span> Diesel</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">settings</span> Automatic</div>
                </div>
                <button className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 2 - Subaru Forester XT */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://kai-and-karo.ams3.cdn.digitaloceanspaces.com/media/vehicles/images/546c485b-619d-4269-b829-d9be5a78e50e.jpeg" 
                  alt="2019 Subaru Forester XT" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <button className="absolute top-4 right-4 size-12 bg-white/90 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2">2019 Subaru Forester XT</h3>
                <p className="text-3xl font-black text-red-600 mb-4">KES 3,200,000</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">calendar_today</span> 2019</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">speed</span> 40,000 km</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">local_gas_station</span> Petrol</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">settings</span> Automatic</div>
                </div>
                <button className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 3 - Mitsubishi Outlander PHEV */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://kai-and-karo.ams3.cdn.digitaloceanspaces.com/media/vehicles/images/IMG-20240423-WA0207.jpg" 
                  alt="2020 Mitsubishi Outlander PHEV" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">HYBRID</div>
                <button className="absolute top-4 right-4 size-12 bg-white/90 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2">2020 Mitsubishi Outlander PHEV</h3>
                <p className="text-3xl font-black text-red-600 mb-4">KES 3,500,000</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">calendar_today</span> 2020</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">speed</span> 55,000 km</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">local_gas_station</span> Hybrid</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">settings</span> Automatic</div>
                </div>
                <button className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 4 - Mazda CX-5 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://kai-and-karo.ams3.cdn.digitaloceanspaces.com/media/vehicles/images/IMG-20230922-WA0115.jpg" 
                  alt="2021 Mazda CX-5" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <button className="absolute top-4 right-4 size-12 bg-white/90 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2">2021 Mazda CX-5</h3>
                <p className="text-3xl font-black text-red-600 mb-4">KES 4,500,000</p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">calendar_today</span> 2021</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">speed</span> 20,000 km</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">local_gas_station</span> Diesel</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined">settings</span> Automatic</div>
                </div>
                <button className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Page 2 Cards (hidden in demo, but in real app use state or router for pagination) */}
            {/* Card 5 - Honda CR-V */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://kai-and-karo.ams3.cdn.digitaloceanspaces.com/media/vehicles/images/IMG-20240112-WA0196.jpg" 
                  alt="2017 Honda CR-V" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <button className="absolute top-4 right-4 size-12 bg-white/90 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2">2017 Honda CR-V</h3>
                <p className="text-3xl font-black text-red-600 mb-4">KES 4,100,000</p>
                {/* Specs */}
                <button className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 6 - Nissan X-Trail */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://carsforsale.co.ke/wp-content/uploads/2024/05/2017-Nissan-X-Trail-2.0-4WD-NT32-b.jpg" 
                  alt="2016 Nissan X-Trail" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">SALE</div>
                <button className="absolute top-4 right-4 size-12 bg-white/90 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2">2016 Nissan X-Trail</h3>
                <p className="text-3xl font-black text-red-600 mb-4">KES 2,400,000</p>
                {/* Specs */}
                <button className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 7 - Toyota Fortuner */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://carsforsale.co.ke/wp-content/uploads/2024/05/2018-Toyota-Fortuner-2.8GD-6-4WD-Automatic-C.jpg" 
                  alt="2019 Toyota Fortuner" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <button className="absolute top-4 right-4 size-12 bg-white/90 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2">2019 Toyota Fortuner</h3>
                <p className="text-3xl font-black text-red-600 mb-4">KES 6,200,000</p>
                {/* Specs */}
                <button className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Card 8 - Land Rover Discovery */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://kai-and-karo.ams3.cdn.digitaloceanspaces.com/media/vehicles/images/WhatsApp_Image_2023-06-23_at_09.39.40_1.jpeg" 
                  alt="2018 Land Rover Discovery" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                <button className="absolute top-4 right-4 size-12 bg-white/90 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black mb-2">2018 Land Rover Discovery</h3>
                <p className="text-3xl font-black text-red-600 mb-4">KES 5,500,000</p>
                {/* Specs */}
                <button className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Add 4 more cards for page 3 if needed */}
          </div>

          {/* Pagination - Clickable (in real app, use router or state) */}
          <div className="flex justify-center items-center gap-4 py-8">
            <button className="px-6 py-3 bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition">
              Previous
            </button>
            <div className="flex gap-2">
              <a href="#page1" className="size-12 bg-red-600 text-white rounded-full font-bold flex items-center justify-center">1</a>
              <a href="#page2" className="size-12 bg-white border border-gray-200 rounded-full hover:bg-red-600 hover:text-white transition flex items-center justify-center font-bold">2</a>
              <a href="#page3" className="size-12 bg-white border border-gray-200 rounded-full hover:bg-red-600 hover:text-white transition flex items-center justify-center font-bold">3</a>
            </div>
            <button className="px-6 py-3 bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition">
              Next
            </button>
          </div>

          {/* Payment Options Section */}
          <section className="py-16 bg-white rounded-3xl shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">Flexible Payment Options</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that suits your budget — drive your SUV home today!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 text-center hover:shadow-2xl transition">
                <span className="material-symbols-outlined text-6xl text-red-600 mb-6">payments</span>
                <h3 className="text-2xl font-black mb-4">Cash Sale</h3>
                <p className="text-gray-700 mb-6">Full payment upfront for instant ownership and the best deals.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Immediate logbook transfer</li>
                  <li>✓ Special cash discount</li>
                  <li>✓ No monthly commitments</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 text-center hover:shadow-2xl transition">
                <span className="material-symbols-outlined text-6xl text-red-600 mb-6">credit_score</span>
                <h3 className="text-2xl font-black mb-4">Hire Purchase</h3>
                <p className="text-gray-700 mb-6">Affordable monthly installments with low deposit.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ As low as 20% deposit</li>
                  <li>✓ Flexible 12-60 month terms</li>
                  <li>✓ Quick approval process</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 text-center hover:shadow-2xl transition">
                <span className="material-symbols-outlined text-6xl text-red-600 mb-6">account_balance</span>
                <h3 className="text-2xl font-black mb-4">Bank Financing</h3>
                <p className="text-gray-700 mb-6">Partnered with top banks for competitive rates.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>✓ Up to 90% financing</li>
                  <li>✓ Low interest rates</li>
                  <li>✓ Fast bank approval</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <a href="/financing" className="px-12 py-5 bg-red-600 text-white font-bold text-lg rounded-full hover:bg-red-700 transition">
                Learn More About Financing
              </a>
            </div>
          </section>

          {/* Trust Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-xl transition">
              <div className="size-20 mx-auto bg-red-600/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-5xl text-red-600">verified</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Verified Imports</h4>
              <p className="text-gray-600">Every SUV is thoroughly inspected and documented</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-xl transition">
              <div className="size-20 mx-auto bg-red-600/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-5xl text-red-600">payments</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Financing Available</h4>
              <p className="text-gray-600">Up to 80% financing with our trusted bank partners</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-xl transition">
              <div className="size-20 mx-auto bg-red-600/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-5xl text-red-600">description</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Logbook Ready</h4>
              <p className="text-gray-600">Instant transfer and all paperwork handled</p>
            </div>
          </div>
          {/* Custom Inquiry Banner */}
<section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-3xl shadow-2xl mb-16">
  <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center">
    <h2 className="text-4xl md:text-5xl font-black mb-6">
      Can't Find Your Dream SUV?
    </h2>
    <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
      Tell us what you're looking for — make, model, budget, or features — and we'll source it for you from our trusted network.
    </p>
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <a href="/contact" className="px-12 py-6 bg-white text-red-600 font-bold text-xl rounded-full hover:bg-gray-100 hover:scale-105 shadow-2xl transition-all">
        Request a Custom Search
      </a>
      <a href="tel:0792669697" className="px-12 py-6 bg-transparent border-2 border-white text-white font-bold text-xl rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-3">
        <span className="material-symbols-outlined text-2xl">call</span>
        Call for Assistance
      </a>
    </div>
  </div>
</section>
        </div>
      </main>
    </div>
  );
}

export default SUV;