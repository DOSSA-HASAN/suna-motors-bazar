function Contact() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Header - Sticky & Premium */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="size-10 rounded-xl bg-red-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition">
              <span className="material-symbols-outlined text-3xl text-white font-bold">directions_car</span>
            </div>
            <h2 className="text-xl font-black tracking-tight">Suna Motors Bazaar</h2>
          </a>
          <nav className="hidden lg:flex items-center gap-10">
            <a href="/" className="text-gray-600 hover:text-red-600 font-medium transition">Home</a>
            <a href="/cars" className="text-gray-600 hover:text-red-600 font-medium transition">Inventory</a>
            <a href="/sell" className="text-gray-600 hover:text-red-600 font-medium transition">Sell Your Car</a>
            <a href="/financing" className="text-gray-600 hover:text-red-600 font-medium transition">Financing</a>
            <a href="/contact" className="text-red-600 font-bold">Contact</a>
          </nav>
          <button className="lg:hidden">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 font-bold text-sm mb-6">
              <span className="size-3 rounded-full bg-green-500 animate-pulse"></span>
              We're Online — Ready to Help!
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or ready to find your perfect car? Our team is here to assist you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Contact Info & Map */}
            <div className="space-y-12">
              {/* Phone & WhatsApp Card */}
              <div className="bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 size-48 bg-red-600/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="size-20 rounded-2xl bg-red-600 flex items-center justify-center shadow-xl">
                      <span className="material-symbols-outlined text-5xl text-white">call</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 uppercase tracking-wider font-bold">Speak to Sales</p>
                      <p className="text-lg font-medium">Mon–Sat: 8AM – 7PM • Sun: 10AM – 5PM</p>
                    </div>
                  </div>
                  <a href="tel:0792669697" className="block text-5xl font-black text-red-600 mb-4 hover:text-red-700 transition">
                    0792 669 697
                  </a>
                  <div className="flex items-center gap-3 text-green-600 font-bold">
                    <span className="material-symbols-outlined text-2xl animate-pulse">online_prediction</span>
                    <span>Typically replies in under 5 minutes</span>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <a href="tel:0792669697" className="flex-1 py-5 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition flex items-center justify-center gap-3 shadow-lg">
                      <span className="material-symbols-outlined text-2xl">call</span>
                      Call Now
                    </a>
                    <a href="https://wa.me/254792669697" className="flex-1 py-5 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#20bd5a] transition flex items-center justify-center gap-3 shadow-lg">
                      <span className="material-symbols-outlined text-2xl">chat</span>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Location & Hours */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
                  <span className="material-symbols-outlined text-5xl text-red-600 mb-4 block">location_on</span>
                  <h3 className="text-2xl font-black mb-3">Visit Our Showroom</h3>
                  <p className="text-gray-600 mb-6">
                    Ngong Road, Nairobi<br />
                    Opposite Uchumi Hyper<br />
                    Next to Naivas Supermarket
                  </p>
                  <a href="https://maps.google.com" className="text-red-600 font-bold hover:underline flex items-center justify-center gap-2">
                    Get Directions <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
                  <span className="material-symbols-outlined text-5xl text-red-600 mb-4 block">schedule</span>
                  <h3 className="text-2xl font-black mb-3">Opening Hours</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>Monday – Saturday: 8:00 AM – 7:00 PM</li>
                    <li>Sunday & Holidays: 10:00 AM – 5:00 PM</li>
                  </ul>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-2xl h-96 relative">
                <img 
                  src="https://images.unsplash.com/photo-1568113588885-f5c45c2d0e75?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="Map location of Suna Motors Bazaar in Nairobi"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h4 className="text-2xl font-black mb-2">Suna Motors Bazaar</h4>
                    <p>Ngong Road, Nairobi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-3xl p-10 shadow-2xl">
                <h2 className="text-4xl font-black mb-8">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Your name" 
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-600 focus:outline-none transition"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="0792 669 697" 
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-600 focus:outline-none transition"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="you@example.com" 
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-600 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Subject</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-600 focus:outline-none transition">
                      <option>General Inquiry</option>
                      <option>Vehicle Inquiry</option>
                      <option>Financing Options</option>
                      <option>Sell My Car</option>
                      <option>Schedule Viewing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Your Message</label>
                    <textarea 
                      rows="6" 
                      placeholder="Tell us how we can help you..." 
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-600 focus:outline-none transition resize-none"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full py-6 bg-red-600 text-white font-black text-xl rounded-2xl hover:bg-red-700 hover:scale-105 shadow-2xl transition-all duration-300">
                    Send Message
                  </button>
                  <p className="text-center text-sm text-gray-500">
                    By submitting, you agree to our <a href="/privacy" className="text-red-600 hover:underline">Privacy Policy</a>
                  </p>
                </form>
              </div>

              {/* Quick Tips */}
              <div className="mt-8 bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-8">
                <h4 className="text-2xl font-black mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-4xl text-red-600">tips_and_updates</span>
                  Quick Tips
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-600 mt-1">check_circle</span>
                    <span>Call or WhatsApp for fastest response</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-600 mt-1">check_circle</span>
                    <span>Schedule a viewing in advance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-600 mt-1">check_circle</span>
                    <span>We offer free vehicle history reports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default Contact;