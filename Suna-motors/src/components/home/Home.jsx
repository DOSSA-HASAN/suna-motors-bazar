function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 font-display antialiased min-h-screen flex flex-col">
      {/* Main */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <img
            src="https://www.edmunds.com/assets/m/land-rover/range-rover-velar/2023/oem/2023_land-rover_range-rover-velar_4dr-suv_p340-r-dynamic-s_fq_oem_1_600.jpg"
            alt="Premium Range Rover Velar driving on open road"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 text-center text-white">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-red-600/90 backdrop-blur rounded-full mb-6 animate-pulse">
              <span className="size-3 bg-white rounded-full animate-ping" />
              <span className="text-sm font-bold uppercase tracking-wider">New Premium Stock Just Arrived!</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Drive Your Dream<br />Today in Kenya
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
              Discover verified, premium imported & local vehicles. Quality inspected, priced right, delivered nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-5 bg-red-600 text-white font-bold text-lg rounded-full hover:bg-red-700 hover:scale-105 shadow-2xl transition-all duration-300">
                Browse Inventory Now
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/20 transition">
                How It Works
              </button>
            </div>
            <div className="flex justify-center gap-10 mt-12 text-sm font-medium">
              <div className="flex items-center gap-3"><span className="material-symbols-outlined text-2xl">verified</span> KEBS Verified</div>
              <div className="flex items-center gap-3"><span className="material-symbols-outlined text-2xl">local_shipping</span> Nationwide Delivery</div>
              <div className="flex items-center gap-3"><span className="material-symbols-outlined text-2xl">security</span> Secure Financing</div>
            </div>
          </div>
        </section>

        {/* Advanced Search Bar */}
{/* Advanced Search Bar - Now Functional */}
<section className="max-w-[1280px] mx-auto px-6 md:px-10 -mt-20 relative z-20 mb-20">
  <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const params = new URLSearchParams();

        const make = formData.get('make');
        const model = formData.get('model');
        const budget = formData.get('budget');

        if (make && make !== 'All Makes') params.append('make', make);
        if (model && model !== 'All Models') params.append('model', model);

        // Handle budget ranges
        if (budget === 'Under KSh 3M') {
          params.append('priceMax', '3000000');
        } else if (budget === 'KSh 3M - 6M') {
          params.append('priceMin', '3000000');
          params.append('priceMax', '6000000');
        } else if (budget === 'Over KSh 6M') {
          params.append('priceMin', '6000000');
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
        <option value="" disabled>All Makes</option>
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
        <option value="" disabled>All Models</option>
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
        <option value="" disabled>Any Budget</option>
        <option>Under KSh 3M</option>
        <option>KSh 3M - 6M</option>
        <option>Over KSh 6M</option>
      </select>

      <button 
        type="submit"
        className="h-16 bg-red-600 text-white font-bold text-lg rounded-2xl hover:bg-red-700 hover:scale-105 shadow-lg transition-all flex items-center justify-center gap-3"
      >
        <span className="material-symbols-outlined text-2xl">search</span>
        Find My Car
      </button>
    </form>
  </div>
</section>
        {/* Popular Categories */}
<section className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 bg-gray-50">
  <h2 className="text-4xl font-black text-center mb-12">Popular Brands in Kenya</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
    {/* Toyota */}
    <a href="/cars?brand=toyota" className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col items-center justify-center">
      <img 
        src="https://pngimg.com/uploads/car_logo/car_logo_PNG1665.png" 
        alt="Toyota Logo" 
        className="max-h-20 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition duration-500"
      />
      <p className="mt-4 text-lg font-bold text-gray-700 group-hover:text-red-600 transition">Toyota</p>
      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 rounded-2xl transition" />
    </a>

    {/* Mercedes-Benz */}
    <a href="/cars?brand=mercedes" className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col items-center justify-center">
      <img 
        src="https://www.freeiconspng.com/uploads/mercedes-benz-logo-png-9.png" 
        alt="Mercedes-Benz Logo" 
        className="max-h-20 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition duration-500"
      />
      <p className="mt-4 text-lg font-bold text-gray-700 group-hover:text-red-600 transition">Mercedes</p>
      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 rounded-2xl transition" />
    </a>

    {/* Subaru */}
    <a href="/cars?brand=subaru" className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col items-center justify-center">
      <img 
        src="https://assets.stickpng.com/images/580b585b2edbce24c47b2cbf.png" 
        alt="Subaru Logo" 
        className="max-h-20 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition duration-500"
      />
      <p className="mt-4 text-lg font-bold text-gray-700 group-hover:text-red-600 transition">Subaru</p>
      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 rounded-2xl transition" />
    </a>

    {/* Land Rover */}
    <a href="/cars?brand=landrover" className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col items-center justify-center">
      <img 
        src="https://pngimg.com/uploads/land_rover/land_rover_PNG20.png" 
        alt="Land Rover Logo" 
        className="max-h-20 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition duration-500"
      />
      <p className="mt-4 text-lg font-bold text-gray-700 group-hover:text-red-600 transition">Land Rover</p>
      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 rounded-2xl transition" />
    </a>

    {/* Nissan */}
    <a href="/cars?brand=nissan" className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col items-center justify-center">
      <img 
        src="https://pngimg.com/uploads/nissan/nissan_PNG10.png" 
        alt="Nissan Logo" 
        className="max-h-20 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition duration-500"
      />
      <p className="mt-4 text-lg font-bold text-gray-700 group-hover:text-red-600 transition">Nissan</p>
      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 rounded-2xl transition" />
    </a>

    {/* Mazda */}
    <a href="/cars?brand=mazda" className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col items-center justify-center">
      <img 
        src="https://pngimg.com/uploads/mazda/mazda_PNG86.png" 
        alt="Mazda Logo" 
        className="max-h-20 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition duration-500"
      />
      <p className="mt-4 text-lg font-bold text-gray-700 group-hover:text-red-600 transition">Mazda</p>
      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 rounded-2xl transition" />
    </a>

    {/* Mitsubishi */}
    <a href="/cars?brand=mitsubishi" className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col items-center justify-center">
      <img 
        src="https://pngimg.com/uploads/mitsubishi/mitsubishi_PNG9.png" 
        alt="Mitsubishi Logo" 
        className="max-h-20 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition duration-500"
      />
      <p className="mt-4 text-lg font-bold text-gray-700 group-hover:text-red-600 transition">Mitsubishi</p>
      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 rounded-2xl transition" />
    </a>

    {/* Isuzu */}
    <a href="/cars?brand=isuzu" className="group relative rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col items-center justify-center">
      <img 
        src="https://pngimg.com/uploads/isuzu/isuzu_PNG14.png" 
        alt="Isuzu Logo" 
        className="max-h-20 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition duration-500"
      />
      <p className="mt-4 text-lg font-bold text-gray-700 group-hover:text-red-600 transition">Isuzu</p>
      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 rounded-2xl transition" />
    </a>
  </div>
</section>
        {/* Featured Vehicles */}
{/* Popular Body Types - Evergreen Alternative (Similar Layout, Permanent Content) */}
<section className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 bg-gray-100">
  <div className="flex justify-between items-end mb-12">
    <div>
      <h2 className="text-4xl font-black mb-3">Popular Body Types</h2>
      <p className="text-lg text-gray-600">Choose the perfect style for your Kenyan roads and lifestyle</p>
    </div>
    <a href="/cars" className="text-red-600 font-bold text-lg hover:underline">View All →</a>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* SUV Card */}
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
      <div className="relative h-72 overflow-hidden">
        <img src="https://carskenya.co.ke/wp-content/uploads/2025/06/Mercedes-G-Wagon.webp" alt="Premium SUVs - Powerful and Versatile" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
        <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg"><span className="text-sm font-bold">Most Popular</span></div>
        <button className="absolute top-6 right-6 size-12 bg-white/90 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition"><span className="material-symbols-outlined">favorite</span></button>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-black mb-2">SUVs</h3>
        <p className="text-lg text-gray-600 mb-6">Conquer any terrain with power, space, and comfort</p>
        <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">terrain</span> Off-Road Ready</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">group</span> Family Friendly</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">shield</span> Top Safety</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">flash_on</span> High Performance</div>
        </div>
        <button className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition">Browse SUVs</button>
      </div>
    </div>

    {/* Sedan Card */}
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
      <div className="relative h-72 overflow-hidden">
        <img src="https://www.topgear.com/sites/default/files/news-listicle/image/2023/09/LEAD.jpg" alt="Elegant Sedans - Smooth and Efficient" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
        <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 rounded-full shadow"><span className="text-sm font-bold">Fuel Efficient</span></div>
        <button className="absolute top-6 right-6 size-12 bg-white/90 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition"><span className="material-symbols-outlined">favorite</span></button>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-black mb-2">Sedans</h3>
        <p className="text-lg text-gray-600 mb-6">Elegant, smooth rides perfect for city and highway</p>
        <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">local_gas_station</span> Great Mileage</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">directions_car</span> Comfortable Drive</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">star</span> Premium Options</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">speed</span> Responsive Handling</div>
        </div>
        <button className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition">Browse Sedans</button>
      </div>
    </div>

    {/* Pickup Card */}
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
      <div className="relative h-72 overflow-hidden">
        <img src="https://www.toyotahilux.ke/blogpic/toyota-hilux-pickups-kenya.webp" alt="Tough Pickups - Built for Work" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
        <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 rounded-full shadow"><span className="text-sm font-bold">Built Tough</span></div>
        <button className="absolute top-6 right-6 size-12 bg-white/90 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition"><span className="material-symbols-outlined">favorite</span></button>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-black mb-2">Pickups</h3>
        <p className="text-lg text-gray-600 mb-6">Reliable workhorses for business and adventure</p>
        <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">construction</span> Heavy Duty</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">luggage</span> High Load Capacity</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">shield</span> Durable Build</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">terrain</span> 4x4 Options</div>
        </div>
        <button className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition">Browse Pickups</button>
      </div>
    </div>

    {/* Luxury Card */}
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
      <div className="relative h-72 overflow-hidden">
        <img src="https://www.autobest.co.in/uploads/blog/211781680426.jpg" alt="High-End Luxury Vehicles" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
        <div className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg"><span className="text-sm font-bold">Exclusive</span></div>
        <button className="absolute top-6 right-6 size-12 bg-white/90 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition"><span className="material-symbols-outlined">favorite</span></button>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-black mb-2">Luxury</h3>
        <p className="text-lg text-gray-600 mb-6">Ultimate comfort and prestige on wheels</p>
        <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">diamond</span> Premium Features</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">volume_up</span> Advanced Tech</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">spa</span> Supreme Comfort</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">flash_on</span> Top Performance</div>
        </div>
        <button className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition">Browse Luxury</button>
      </div>
    </div>

    {/* Hatchback Card */}
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
      <div className="relative h-72 overflow-hidden">
        <img src="https://pictures.dealer.com/m/motorworldtoyota/1234/5c760121ae8048688cc40990733d305a.png" alt="Compact Hatchbacks - City Smart" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
        <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 rounded-full shadow"><span className="text-sm font-bold">City Friendly</span></div>
        <button className="absolute top-6 right-6 size-12 bg-white/90 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition"><span className="material-symbols-outlined">favorite</span></button>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-black mb-2">Hatchbacks</h3>
        <p className="text-lg text-gray-600 mb-6">Compact, efficient, and perfect for urban driving</p>
        <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">local_gas_station</span> Best Fuel Economy</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">parking</span> Easy Parking</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">directions</span> Agile Handling</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">inventory_2</span> Practical Space</div>
        </div>
        <button className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition">Browse Hatchbacks</button>
      </div>
    </div>

    {/* Van/Minivan Card */}
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
      <div className="relative h-72 overflow-hidden">
        <img src="https://static.dealersyard.com/blog/red-toyota-noah-minivan.webp" alt="Spacious Vans for Families" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
        <div className="absolute top-6 left-6 bg-white/90 px-4 py-2 rounded-full shadow"><span className="text-sm font-bold">Family Favorite</span></div>
        <button className="absolute top-6 right-6 size-12 bg-white/90 rounded-full shadow-lg hover:bg-red-600 hover:text-white transition"><span className="material-symbols-outlined">favorite</span></button>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-black mb-2">Vans & Minivans</h3>
        <p className="text-lg text-gray-600 mb-6">Maximum space for families and groups</p>
        <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">event_seat</span> 7-8 Seaters</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">luggage</span> Huge Cargo</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">child_friendly</span> Kid-Friendly</div>
          <div className="flex items-center gap-2"><span className="material-symbols-outlined">ac_unit</span> Comfort Features</div>
        </div>
        <button className="w-full py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition">Browse Vans</button>
      </div>
    </div>
  </div>
</section>

        {/* Sell Your Car Banner */}
        <section className="bg-red-600 text-white py-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Sell Your Car?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">Get a free instant valuation and sell fast to thousands of verified buyers. Highest offers guaranteed.</p>
            <button className="px-12 py-6 bg-white text-red-600 font-bold text-xl rounded-full hover:bg-gray-100 hover:scale-105 shadow-2xl transition-all">
              Get Free Valuation Now
            </button>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
            <h2 className="text-4xl font-black mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="p-8 bg-gray-50 rounded-3xl shadow-lg">
                <p className="text-lg italic mb-6">"Best experience ever! Found my dream Prado in perfect condition. Delivery was seamless."</p>
                <p className="font-bold">– John M., Nairobi</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl shadow-lg">
                <p className="text-lg italic mb-6">"Transparent pricing and super helpful team. Got financing approved in hours!"</p>
                <p className="font-bold">– Sarah K., Mombasa</p>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl shadow-lg">
                <p className="text-lg italic mb-6">"Sold my car in 3 days for more than expected. Highly recommend Suna Motors!"</p>
                <p className="font-bold">– David O., Eldoret</p>
              </div>
            </div>
          </div>
        </section>
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
        {/* Key Stats & Trust Section - Data-Driven Alternative */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
    <h2 className="text-4xl md:text-5xl font-black mb-6">Trusted by Thousands Across Kenya</h2>
    <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">Proven numbers that show why drivers and sellers choose Suna Motors Bazaar</p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="group">
        <div className="text-6xl font-black text-red-600 mb-4">200+</div>
        <p className="text-xl font-bold text-gray-800">Premium Vehicles Listed</p>
        <p className="text-gray-600 mt-2">Carefully inspected and ready to drive</p>
      </div>
      <div className="group">
        <div className="text-6xl font-black text-red-600 mb-4">2,000+</div>
        <p className="text-xl font-bold text-gray-800">Happy Customers</p>
        <p className="text-gray-600 mt-2">Successful buys & sells nationwide</p>
      </div>
      <div className="group">
        <div className="text-6xl font-black text-red-600 mb-4">98%</div>
        <p className="text-xl font-bold text-gray-800">Satisfaction Rate</p>
        <p className="text-gray-600 mt-2">From verified buyer feedback</p>
      </div>
      <div className="group">
        <div className="text-6xl font-black text-red-600 mb-4">24/7</div>
        <p className="text-xl font-bold text-gray-800">Support Available</p>
        <p className="text-gray-600 mt-2">Expert team ready to assist anytime</p>
      </div>
    </div>
  </div>
</section>

        {/* Why Choose Us */}
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Why Thousands Trust Suna Motors Bazaar</h2>
            <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">We make buying your next car simple, safe, and exciting.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="group hover:scale-105 transition-all duration-500">
                <div className="size-24 mx-auto bg-red-600/20 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-red-600/40 transition">
                  <span className="material-symbols-outlined text-5xl text-red-600">verified_user</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">150-Point Verified Inspection</h3>
                <p className="text-gray-400">Every vehicle undergoes rigorous checks for quality and safety.</p>
              </div>
              <div className="group hover:scale-105 transition-all duration-500">
                <div className="size-24 mx-auto bg-red-600/20 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-red-600/40 transition">
                  <span className="material-symbols-outlined text-5xl text-red-600">request_quote</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">No Hidden Fees Ever</h3>
                <p className="text-gray-400">Transparent pricing — what you see is exactly what you pay.</p>
              </div>
              <div className="group hover:scale-105 transition-all duration-500">
                <div className="size-24 mx-auto bg-red-600/20 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-red-600/40 transition">
                  <span className="material-symbols-outlined text-5xl text-red-600">handshake</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Instant Financing Options</h3>
                <p className="text-gray-400">Partnered with top banks for fast approvals and great rates.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;