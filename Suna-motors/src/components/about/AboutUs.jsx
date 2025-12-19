function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Hero - Enhanced Premium Impact */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/nkkio05nizj5catguopm"
          alt="Premium vehicles at Suna Motors Bazaar"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight drop-shadow-lg">
            Driving Kenya<br /><span className="text-red-600">Forward</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Kenya's premier marketplace for premium, verified imported and local vehicles. Quality assured, transparently priced, delivered nationwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/cars" className="px-14 py-6 bg-red-600 text-white font-bold text-xl rounded-full hover:bg-red-700 hover:scale-105 shadow-2xl transition-all duration-300">
              Explore Inventory
            </a>
            <a href="/contact" className="px-14 py-6 bg-white/10 backdrop-blur-lg border-2 border-white text-white font-bold text-xl rounded-full hover:bg-white/20 transition-all duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Our Story - With Busy Open Car Lots (Plates Hidden) */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8">
                Building Trust in Every Kenyan Drive
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in Nairobi with a passion for reliable mobility, Suna Motors Bazaar was created to solve real challenges in Kenya's car market — from hidden vehicle issues to unfair pricing and complicated logistics.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We partner exclusively with verified importers and local sellers, perform independent inspections, and provide complete documentation. Our goal: make premium car ownership accessible, safe, and enjoyable for every Kenyan.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                From families in Nairobi to adventurers in the Rift Valley, we've proudly served thousands — earning trust one satisfied driver at a time.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer" className="w-14 h-14 rounded-full border-4 border-white shadow" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer" className="w-14 h-14 rounded-full border-4 border-white shadow" />
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Customer" className="w-14 h-14 rounded-full border-4 border-white shadow" />
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Customer" className="w-14 h-14 rounded-full border-4 border-white shadow" />
                  <div className="w-14 h-14 rounded-full bg-red-600 border-4 border-white flex items-center justify-center text-white font-bold shadow">+5K</div>
                </div>
                <div>
                  <p className="font-black text-2xl">5,000+</p>
                  <p className="text-gray-600 font-medium">Happy Kenyan Drivers</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=31347278038192712"
                  alt="Our extensive open-air bazaar filled with premium vehicles"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=727081296115694"
                  alt="Rows of verified cars in our spacious outdoor lot"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-6 text-red-600">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To be Kenya's most trusted and innovative automotive marketplace — empowering every driver with safe, reliable, and affordable premium vehicles.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-6 text-red-600">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Deliver exceptional value through rigorous quality standards, complete transparency, nationwide accessibility, and outstanding customer care.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">What Sets Us Apart</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto">The Suna Motors difference — built for Kenyan drivers</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group bg-gray-50 rounded-3xl p-12 shadow-lg hover:shadow-2xl hover:-translate-y-6 transition-all duration-500">
              <div className="size-24 mx-auto bg-red-600/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-red-600/20">
                <span className="material-symbols-outlined text-6xl text-red-600">verified</span>
              </div>
              <h3 className="text-2xl font-black mb-4">Unmatched Quality Assurance</h3>
              <p className="text-gray-600">150+ point mechanical & body inspection on every vehicle — certified and documented.</p>
            </div>
            <div className="group bg-gray-50 rounded-3xl p-12 shadow-lg hover:shadow-2xl hover:-translate-y-6 transition-all duration-500">
              <div className="size-24 mx-auto bg-red-600/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-red-600/20">
                <span className="material-symbols-outlined text-6xl text-red-600">visibility</span>
              </div>
              <h3 className="text-2xl font-black mb-4">Total Transparency</h3>
              <p className="text-gray-600">Full service history, accident reports, and fixed pricing — no surprises, ever.</p>
            </div>
            <div className="group bg-gray-50 rounded-3xl p-12 shadow-lg hover:shadow-2xl hover:-translate-y-6 transition-all duration-500">
              <div className="size-24 mx-auto bg-red-600/10 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-red-600/20">
                <span className="material-symbols-outlined text-6xl text-red-600">support_agent</span>
              </div>
              <h3 className="text-2xl font-black mb-4">Personalized Support</h3>
              <p className="text-gray-600">Dedicated experts guide you from selection to registration, insurance, and delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Community */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-black mb-6">Commitment to Sustainability</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We promote fuel-efficient and low-emission vehicles, partner with eco-conscious importers, and encourage responsible car ownership for a greener Kenya.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-black mb-6">Giving Back to Community</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Proud supporters of road safety campaigns and local initiatives — because safe roads benefit every Kenyan family.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl font-black mb-12">Trusted Partnerships & Certifications</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            <div className="text-2xl font-bold">KEBS Certified</div>
            <div className="text-2xl font-bold">NTSA Approved</div>
            <div className="text-2xl font-bold">Partnered with KCB & Equity Bank</div>
            <div className="text-2xl font-bold">AA Kenya Recommended</div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16">Meet Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="size-80 mx-auto rounded-3xl overflow-hidden mb-8">
                <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-8xl text-red-600">person</span>
                </div>
              </div>
              <h3 className="text-2xl font-black mb-2">Igor Suna</h3>
              <p className="text-red-600 font-semibold mb-4">Founder & CEO</p>
              <p className="text-gray-600">Visionary leader driving innovation in Kenya's automotive space</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="size-80 mx-auto rounded-3xl overflow-hidden mb-8">
                <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-8xl text-red-600">person</span>
                </div>
              </div>
              <h3 className="text-2xl font-black mb-2">Grace Muthoni</h3>
              <p className="text-red-600 font-semibold mb-4">Head of Customer Experience</p>
              <p className="text-gray-600">Ensuring every client feels valued and supported</p>
            </div>
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
              <div className="size-80 mx-auto rounded-3xl overflow-hidden mb-8">
                <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-8xl text-red-600">person</span>
                </div>
              </div>
              <h3 className="text-2xl font-black mb-2">James Otieno</h3>
              <p className="text-red-600 font-semibold mb-4">Vehicle Quality Director</p>
              <p className="text-gray-600">Overseeing rigorous standards for every car</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-20">Our Journey So Far</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>
            <div className="space-y-20">
              {[
                { year: "2018", title: "Humble Beginnings", desc: "Launched as a trusted importer focused on quality vehicles in Nairobi" },
                { year: "2020", title: "Nationwide Expansion", desc: "Introduced seamless delivery across all major Kenyan counties" },
                { year: "2022", title: "Major Milestone", desc: "Delivered our 1,000th vehicle and earned widespread trust" },
                { year: "2025", title: "Market Leader", desc: "Kenya's go-to premium car marketplace with 5,000+ happy customers" },
              ].map((milestone, i) => (
                <div key={i} className={`flex items-center ${i % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}>
                  <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-gray-50 p-10 rounded-3xl shadow-2xl">
                      <p className="text-5xl font-black text-red-600 mb-3">{milestone.year}</p>
                      <h3 className="text-2xl font-bold mb-4">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 size-12 bg-red-600 rounded-full border-8 border-white shadow-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-red-600 text-white py-24">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Drive Your Dream?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Contact our expert team today for personalized assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-lg mx-auto">
            <div className="text-4xl font-black flex items-center gap-4">
              <span className="material-symbols-outlined text-5xl">call</span>
              0792 669 697
            </div>
            <div className="flex gap-6">
              <a href="tel:0792669697" className="px-10 py-5 bg-white text-red-600 font-bold text-xl rounded-full hover:bg-gray-100 hover:scale-105 transition-all shadow-2xl">
                Call Now
              </a>
              <a href="https://wa.me/254792669697" className="px-10 py-5 bg-[#25D366] text-white font-bold text-xl rounded-full hover:bg-[#20bd5a] hover:scale-105 transition-all shadow-2xl flex items-center gap-3">
                <span className="material-symbols-outlined text-2xl">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;