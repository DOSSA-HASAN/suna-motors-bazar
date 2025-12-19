function Cars() {
    return (
      <div className="bg-background-light text-[#111418] font-['Inter'] min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-[#f0f2f4] shadow-sm">
          <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4 lg:gap-8">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl">directions_car</span>
                </div>
                <h2 className="text-lg lg:text-xl font-bold hidden sm:block">Suna Motors Bazaar</h2>
              </div>
  
              <nav className="hidden lg:flex items-center gap-6 xl:gap-9">
                <a href="#" className="text-[#617589] hover:text-primary transition text-sm font-medium">Home</a>
                <a href="#" className="text-primary text-sm font-bold">All Listings</a>
                <a href="#" className="text-[#617589] hover:text-primary transition text-sm font-medium">Sell Your Car</a>
                <a href="#" className="text-[#617589] hover:text-primary transition text-sm font-medium">About Us</a>
                <a href="#" className="text-[#617589] hover:text-primary transition text-sm font-medium">Contact</a>
              </nav>
            </div>
  
            <div className="flex items-center justify-end gap-4 md:gap-8 flex-1">
              <div className="hidden md:flex items-center rounded-lg overflow-hidden h-10 max-w-64 min-w-40">
                <div className="bg-[#f0f2f4] flex items-center px-4">
                  <span className="material-symbols-outlined text-xl text-[#617589]">search</span>
                </div>
                <input
                  type="text"
                  placeholder="Search by keyword..."
                  className="bg-[#f0f2f4] px-4 text-sm flex-1 focus:outline-none h-full placeholder:text-[#617589]"
                />
              </div>
  
              <button className="rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-[#e0dc00] transition">
                Log In
              </button>
            </div>
          </div>
        </header>
  
        {/* Main */}
        <main className="flex-1">
          <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
            {/* Page Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight">All Listings</h1>
                <p className="text-base text-[#617589]">Browse our premium selection of verified vehicles in Kenya.</p>
              </div>
            </div>
  
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <aside className="w-full lg:w-72 flex-shrink-0">
                <div className="sticky top-24 bg-white rounded-xl border border-[#dbe0e6] shadow-sm">
                  <div className="p-5 border-b border-[#dbe0e6] flex items-center justify-between">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <span className="material-symbols-outlined text-xl">tune</span>
                      Filters
                    </h3>
                    <button className="text-primary text-sm font-medium hover:underline">Reset All</button>
                  </div>
  
                  <div className="p-5 flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                    {/* Make & Model */}
                    <div className="space-y-3">
                      <label className="text-sm font-semibold">Make</label>
                      <div className="relative">
                        <select className="w-full rounded-lg border border-[#dbe0e6] bg-white px-3 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary appearance-none">
                          <option>Any Make</option>
                          <option>Toyota</option>
                          <option>Subaru</option>
                          <option>Mazda</option>
                          <option>Honda</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#617589] pointer-events-none">expand_more</span>
                      </div>
  
                      <label className="text-sm font-semibold mt-4">Model</label>
                      <div className="relative">
                        <select disabled className="w-full rounded-lg border border-[#dbe0e6] bg-[#f9fafb] px-3 py-2.5 text-sm text-[#617589] appearance-none cursor-not-allowed">
                          <option>Select Make First</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none">expand_more</span>
                      </div>
                    </div>
  
                    <hr className="border-[#f0f2f4]" />
  
                    {/* Price Range */}
                    <div className="space-y-3">
                      <label className="text-sm font-semibold">Price Range (KES)</label>
                      <div className="flex items-center gap-2">
                        <input type="number" placeholder="Min" className="w-full rounded-lg border border-[#dbe0e6] px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
                        <span className="text-[#617589]">-</span>
                        <input type="number" placeholder="Max" className="w-full rounded-lg border border-[#dbe0e6] px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
                      </div>
                      <input type="range" className="w-full h-1 bg-[#dbe0e6] rounded-lg accent-primary" />
                    </div>
  
                    <hr className="border-[#f0f2f4]" />
  
                    {/* Year */}
                    <div className="space-y-3">
                      <label className="text-sm font-semibold">Year</label>
                      <div className="flex items-center gap-2">
                        <input type="number" placeholder="2010" className="w-full rounded-lg border border-[#dbe0e6] px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
                        <span className="text-[#617589]">-</span>
                        <input type="number" placeholder="2024" className="w-full rounded-lg border border-[#dbe0e6] px-3 py-2 text-sm focus:border-primary focus:ring-primary" />
                      </div>
                    </div>
  
                    <hr className="border-[#f0f2f4]" />
  
                    {/* Fuel Type */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold mb-1">Fuel Type</label>
                      {['Petrol', 'Diesel', 'Hybrid', 'Electric'].map((fuel) => (
                        <label key={fuel} className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" className="h-4 w-4 rounded border-[#dbe0e6] text-primary focus:ring-primary" />
                          <span className="text-sm">{fuel}</span>
                        </label>
                      ))}
                    </div>
  
                    <hr className="border-[#f0f2f4]" />
  
                    {/* Transmission */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold mb-1">Transmission</label>
                      <div className="flex gap-2">
                        {['Auto', 'Manual'].map((trans) => (
                          <label key={trans} className="flex-1 cursor-pointer">
                            <input type="radio" name="transmission" defaultChecked={trans === 'Auto'} className="peer sr-only" />
                            <div className="rounded-lg border border-[#dbe0e6] bg-white py-2 text-center text-sm font-medium text-[#617589] peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary transition">
                              {trans}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
  
                    <button className="w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-white hover:bg-[#e0dc00] transition">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </aside>
  
              {/* Listings */}
              <div className="flex-1">
                {/* Sort & Count */}
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-white p-4 shadow-sm border border-[#dbe0e6] mb-6">
                  <p className="text-sm font-medium">Showing <span className="font-bold">42</span> vehicles</p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#617589] hidden sm:inline">Sort by:</span>
                    <div className="relative min-w-[160px]">
                      <select className="w-full appearance-none rounded-lg border-0 bg-[#f0f2f4] py-2 pl-3 pr-8 text-sm font-medium focus:ring-2 focus:ring-primary">
                        <option>Newest First</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Mileage: Low to High</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[#617589] pointer-events-none">sort</span>
                    </div>
                  </div>
                </div>
  
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {/* Car 1 - Toyota Harrier */}
                  <div className="group flex flex-col rounded-xl bg-white border border-[#dbe0e6] shadow-sm hover:shadow-md transition overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <span className="absolute left-3 top-3 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">Available</span>
                      <img src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=936349951858916" alt="2020 Toyota Harrier Premium red" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      <button className="absolute right-3 bottom-3 rounded-full bg-white/90 p-2 text-gray-400 hover:text-red-500 transition shadow-sm">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                      </button>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="mb-3">
                        <p className="text-sm text-[#617589] font-medium">2020</p>
                        <h3 className="text-lg font-bold line-clamp-1">Toyota Harrier Premium</h3>
                        <p className="text-xl font-black text-primary mt-1">KES 3,850,000</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 border-t border-[#f0f2f4] py-3 mt-auto">
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="material-symbols-outlined text-[#617589]">speed</span>
                          <span className="text-xs font-medium">45k km</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center border-x border-[#f0f2f4]">
                          <span className="material-symbols-outlined text-[#617589]">local_gas_station</span>
                          <span className="text-xs font-medium">Petrol</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="material-symbols-outlined text-[#617589]">settings</span>
                          <span className="text-xs font-medium">Auto</span>
                        </div>
                      </div>
                      <button className="mt-2 w-full rounded-lg border border-primary bg-white py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white transition">
                        View Details
                      </button>
                    </div>
                  </div>
  
                  {/* Car 2 - Subaru Forester */}
                  <div className="group flex flex-col rounded-xl bg-white border border-[#dbe0e6] shadow-sm hover:shadow-md transition overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <span className="absolute left-3 top-3 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">Available</span>
                      <img src="https://media.ed.edmunds-media.com/subaru/forester/2019/oem/2019_subaru_forester_4dr-suv_limited_fq_oem_1_1600.jpg" alt="2019 Subaru Forester XT silver" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      <button className="absolute right-3 bottom-3 rounded-full bg-white/90 p-2 text-gray-400 hover:text-red-500 transition shadow-sm">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                      </button>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="mb-3">
                        <p className="text-sm text-[#617589] font-medium">2019</p>
                        <h3 className="text-lg font-bold line-clamp-1">Subaru Forester XT</h3>
                        <p className="text-xl font-black text-primary mt-1">KES 2,900,000</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 border-t border-[#f0f2f4] py-3 mt-auto">
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="material-symbols-outlined text-[#617589]">speed</span>
                          <span className="text-xs font-medium">62k km</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center border-x border-[#f0f2f4]">
                          <span className="material-symbols-outlined text-[#617589]">local_gas_station</span>
                          <span className="text-xs font-medium">Petrol</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="material-symbols-outlined text-[#617589]">settings</span>
                          <span className="text-xs font-medium">Auto</span>
                        </div>
                      </div>
                      <button className="mt-2 w-full rounded-lg border border-primary bg-white py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white transition">
                        View Details
                      </button>
                    </div>
                  </div>
  
                  {/* Car 3 - Mazda CX-5 */}
                  <div className="group flex flex-col rounded-xl bg-white border border-[#dbe0e6] shadow-sm hover:shadow-md transition overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <span className="absolute left-3 top-3 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">Available</span>
                      <img src="https://images.cars.com/cldstatic/wp-content/uploads/mazda-cx-5-2022-oem-01-angle-exterior-front-white.jpg" alt="2021 Mazda CX-5 white" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      <button className="absolute right-3 bottom-3 rounded-full bg-white/90 p-2 text-gray-400 hover:text-red-500 transition shadow-sm">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                      </button>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="mb-3">
                        <p className="text-sm text-[#617589] font-medium">2021</p>
                        <h3 className="text-lg font-bold line-clamp-1">Mazda CX-5 KF</h3>
                        <p className="text-xl font-black text-primary mt-1">KES 3,450,000</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 border-t border-[#f0f2f4] py-3 mt-auto">
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="material-symbols-outlined text-[#617589]">speed</span>
                          <span className="text-xs font-medium">28k km</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center border-x border-[#f0f2f4]">
                          <span className="material-symbols-outlined text-[#617589]">local_gas_station</span>
                          <span className="text-xs font-medium">Diesel</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="material-symbols-outlined text-[#617589]">settings</span>
                          <span className="text-xs font-medium">Auto</span>
                        </div>
                      </div>
                      <button className="mt-2 w-full rounded-lg border border-primary bg-white py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white transition">
                        View Details
                      </button>
                    </div>
                  </div>
  
                  {/* Car 4 - Mercedes C200 (Sold) */}
                  <div className="group flex flex-col rounded-xl bg-white border border-[#dbe0e6] shadow-sm hover:shadow-md transition overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <span className="absolute left-3 top-3 rounded-full bg-gray-600/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">Sold</span>
                      <img src="https://images.squarespace-cdn.com/content/v1/5aac1f6a5cfd796d520a4a7a/1736856878374-D3M4S6U8UMLXPMWFAJM0/Mercedes+C200-4.jpg?format=1000w" alt="2017 Mercedes Benz C200 black" className="w-full h-full object-cover grayscale group-hover:scale-105 transition duration-300" />
                      <button className="absolute right-3 bottom-3 rounded-full bg-white/90 p-2 text-gray-400 transition shadow-sm">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                      </button>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="mb-3">
                        <p className="text-sm text-[#617589] font-medium">2017</p>
                        <h3 className="text-lg font-bold line-clamp-1">Mercedes Benz C200</h3>
                        <p className="text-xl font-black text-primary mt-1">KES 4,100,000</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 border-t border-[#f0f2f4] py-3 mt-auto">
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="material-symbols-outlined text-[#617589]">speed</span>
                          <span className="text-xs font-medium">55k km</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center border-x border-[#f0f2f4]">
                          <span className="material-symbols-outlined text-[#617589]">local_gas_station</span>
                          <span className="text-xs font-medium">Petrol</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="material-symbols-outlined text-[#617589]">settings</span>
                          <span className="text-xs font-medium">Auto</span>
                        </div>
                      </div>
                      <button disabled className="mt-2 w-full rounded-lg bg-gray-100 py-2 text-sm font-bold text-gray-400 cursor-not-allowed">
                        Sold Out
                      </button>
                    </div>
                  </div>
  
                  {/* Car 5 - Volkswagen Golf */}
                  <div className="group flex flex-col rounded-xl bg-white border border-[#dbe0e6] shadow-sm hover:shadow-md transition overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <span className="absolute left-3 top-3 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">Available</span>
                      <img src="https://platform.cstatic-images.com/xxlarge/in/v2/stock_photos/f3c53a76-b98e-427c-a94e-bb4781c71ac1/eb5374fd-cb4b-4f9d-9e25-719bef828f06.png" alt="2016 Volkswagen Golf TSI white" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      <button className="absolute right-3 bottom-3 rounded-full bg-white/90 p-2 text-gray-400 hover:text-red-500 transition shadow-sm">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                      </button>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="mb-3">
                        <p className="text-sm text-[#617589] font-medium">2016</p>
                        <h3 className="text-lg font-bold line-clamp-1">Volkswagen Golf TSI</h3>
                        <p className="text-xl font-black text-primary mt-1">KES 1,850,000</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 border-t border-[#f0f2f4] py-3 mt-auto">
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="material-symbols-outlined text-[#617589]">speed</span>
                          <span className="text-xs font-medium">70k km</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center border-x border-[#f0f2f4]">
                          <span className="material-symbols-outlined text-[#617589]">local_gas_station</span>
                          <span className="text-xs font-medium">Petrol</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="material-symbols-outlined text-[#617589]">settings</span>
                          <span className="text-xs font-medium">Auto</span>
                        </div>
                      </div>
                      <button className="mt-2 w-full rounded-lg border border-primary bg-white py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white transition">
                        View Details
                      </button>
                    </div>
                  </div>
  
                  {/* Car 6 - Nissan X-Trail */}
                  <div className="group flex flex-col rounded-xl bg-white border border-[#dbe0e6] shadow-sm hover:shadow-md transition overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <span className="absolute left-3 top-3 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">Available</span>
                      <img src="https://editorial.pxcrush.net/carsales/general/editorial/2022-nissan-x-trail-ti-4wd-016.jpg?width=1024&height=682" alt="2022 Nissan X-Trail Hybrid blue" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      <button className="absolute right-3 bottom-3 rounded-full bg-white/90 p-2 text-gray-400 hover:text-red-500 transition shadow-sm">
                        <span className="material-symbols-outlined text-xl">favorite</span>
                      </button>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="mb-3">
                        <p className="text-sm text-[#617589] font-medium">2022</p>
                        <h3 className="text-lg font-bold line-clamp-1">Nissan X-Trail Hybrid</h3>
                        <p className="text-xl font-black text-primary mt-1">KES 3,100,000</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2 border-t border-[#f0f2f4] py-3 mt-auto">
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="material-symbols-outlined text-[#617589]">speed</span>
                          <span className="text-xs font-medium">15k km</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center border-x border-[#f0f2f4]">
                          <span className="material-symbols-outlined text-[#617589]">bolt</span>
                          <span className="text-xs font-medium">Hybrid</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-center">
                          <span className="material-symbols-outlined text-[#617589]">settings</span>
                          <span className="text-xs font-medium">Auto</span>
                        </div>
                      </div>
                      <button className="mt-2 w-full rounded-lg border border-primary bg-white py-2 text-sm font-bold text-primary hover:bg-primary hover:text-white transition">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
  
                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mt-8 py-4">
                  <button className="h-10 w-10 rounded-lg border border-[#dbe0e6] bg-white flex items-center justify-center hover:bg-gray-50">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="h-10 w-10 rounded-lg border border-primary bg-primary text-white font-bold">1</button>
                  {[2, 3].map((n) => (
                    <button key={n} className="h-10 w-10 rounded-lg border border-[#dbe0e6] bg-white text-[#617589] hover:bg-gray-50 font-medium">
                      {n}
                    </button>
                  ))}
                  <span className="px-2 text-[#617589]">...</span>
                  <button className="h-10 w-10 rounded-lg border border-[#dbe0e6] bg-white text-[#617589] hover:bg-gray-50 font-medium">8</button>
                  <button className="h-10 w-10 rounded-lg border border-[#dbe0e6] bg-white flex items-center justify-center hover:bg-gray-50">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
  
        {/* Footer */}
        <footer className="bg-white border-t border-[#f0f2f4] py-10">
          <div className="max-w-[1440px] mx-auto px-4 md:px-10">
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
              <div className="max-w-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-2xl">directions_car</span>
                  </div>
                  <h2 className="text-lg font-bold">Suna Motors Bazaar</h2>
                </div>
                <p className="text-sm text-[#617589]">Your trusted partner for buying premium vehicles in Kenya. Quality, transparency, and value in every deal.</p>
                <div className="flex gap-4 text-[#617589]">
                  <a href="#" className="hover:text-primary"><span className="material-symbols-outlined">social_leaderboard</span></a>
                  <a href="#" className="hover:text-primary"><span className="material-symbols-outlined">photo_camera</span></a>
                  <a href="#" className="hover:text-primary"><span className="material-symbols-outlined">alternate_email</span></a>
                </div>
              </div>
  
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
                <div className="space-y-3">
                  <h4 className="font-bold text-sm">Company</h4>
                  <a href="#" className="block text-sm text-[#617589] hover:text-primary">About Us</a>
                  <a href="#" className="block text-sm text-[#617589] hover:text-primary">Careers</a>
                  <a href="#" className="block text-sm text-[#617589] hover:text-primary">Press</a>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-sm">Support</h4>
                  <a href="#" className="block text-sm text-[#617589] hover:text-primary">Contact Us</a>
                  <a href="#" className="block text-sm text-[#617589] hover:text-primary">FAQ</a>
                  <a href="#" className="block text-sm text-[#617589] hover:text-primary">Privacy Policy</a>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-sm">Contact</h4>
                  <p className="text-sm text-[#617589]">+254 700 000 000</p>
                  <p className="text-sm text-[#617589]">info@sunamotors.co.ke</p>
                  <p className="text-sm text-[#617589]">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
  
            <div className="border-t border-[#f0f2f4] pt-6 text-center text-sm text-[#617589]">
              © 2024 Suna Motors Bazaar. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Cars;