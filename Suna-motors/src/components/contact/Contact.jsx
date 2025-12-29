function Contact() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Header - Sticky & Premium */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="size-10 rounded-xl bg-red-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition">
              <span className="material-symbols-outlined text-3xl text-white font-bold">
                directions_car
              </span>
            </div>
            <h2 className="text-xl font-black tracking-tight">
              Suna Motors Bazaar
            </h2>
          </a>
          <nav className="hidden lg:flex items-center gap-10">
            <a
              href="/"
              className="text-gray-600 hover:text-red-600 font-medium transition"
            >
              Home
            </a>
            <a
              href="/cars"
              className="text-gray-600 hover:text-red-600 font-medium transition"
            >
              Inventory
            </a>
            <a
              href="/sell"
              className="text-gray-600 hover:text-red-600 font-medium transition"
            >
              Sell Your Car
            </a>
            <a
              href="/financing"
              className="text-gray-600 hover:text-red-600 font-medium transition"
            >
              Financing
            </a>
            <a href="/contact" className="text-red-600 font-bold">
              Contact
            </a>
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
              Looking to buy/sell a car, land, or developed property in and
              around Migori? Our team is here to assist you.
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
                      <span className="material-symbols-outlined text-5xl text-white">
                        call
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 uppercase tracking-wider font-bold">
                        Speak to Sales
                      </p>
                      <p className="text-lg font-medium">
                        Mon–Sat: 8AM – 7PM • Sun: 10AM – 5PM
                      </p>
                    </div>
                  </div>
                  <a
                    href="tel:0728166487"
                    className="block text-5xl font-black text-red-600 mb-4 hover:text-red-700 transition"
                  >
                    0728 166 487
                  </a>
                  <div className="flex items-center gap-3 text-green-600 font-bold">
                    <span className="material-symbols-outlined text-2xl animate-pulse">
                      online_prediction
                    </span>
                    <span>Typically replies in under 5 minutes</span>
                  </div>
                  <div className="mt-8 flex gap-4">
                    <a
                      href="tel:0728166487"
                      className="flex-1 py-5 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition flex items-center justify-center gap-3 shadow-lg"
                    >
                      <span className="material-symbols-outlined text-2xl">
                        call
                      </span>
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/254728166487"
                      className="flex-1 py-5 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#20bd5a] transition flex items-center justify-center gap-3 shadow-lg"
                    >
                      <span className="material-symbols-outlined text-2xl">
                        chat
                      </span>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Location & Hours */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
                  <span className="material-symbols-outlined text-5xl text-red-600 mb-4 block">
                    location_on
                  </span>
                  <h3 className="text-2xl font-black mb-3">
                    Visit Our Showroom
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Migori-Isebania Road
                    <br />
                    Next to Girango Hotel
                    <br />
                    Opposite Migori Teachers College
                    <br />
                    Migori Town, Kenya
                  </p>
                  <a
                    href="https://maps.app.goo.gl/ghzLS92EFUpJNLYN6"
                    className="text-red-600 font-bold hover:underline flex items-center justify-center gap-2"
                  >
                    Get Directions{" "}
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </a>
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
                  <span className="material-symbols-outlined text-5xl text-red-600 mb-4 block">
                    schedule
                  </span>
                  <h3 className="text-2xl font-black mb-3">Opening Hours</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>Monday – Sunday: Always Open</li>
                  </ul>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-2xl h-96 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.000123456789!2d34.473!3d-1.064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDMn50.4IlMgMzTCsDI4JzIyLjgiRQ!5e0!3m2!1sen!2ske!4v1735680000000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Suna Motors Bazaar Location"
                  className="absolute inset-0"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 pointer-events-none">
                  <div className="text-white">
                    <h4 className="text-2xl font-black mb-2">
                      Suna Motors Bazaar
                    </h4>
                    <p>Migori-Isebania Road, Migori Town</p>
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
                      <label className="block text-sm font-bold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-600 focus:outline-none transition"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="0728 166 487"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-600 focus:outline-none transition"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="sunabazaar044@gmail.com"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-600 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Subject
                    </label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-600 focus:outline-none transition">
                      <option>General Inquiry</option>
                      <option>Vehicle Inquiry</option>
                      <option>Land/Property Inquiry</option>
                      <option>Financing Options</option>
                      <option>Sell My Car/Land</option>
                      <option>Schedule Viewing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-600 focus:outline-none transition resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-6 bg-red-600 text-white font-black text-xl rounded-2xl hover:bg-red-700 hover:scale-105 shadow-2xl transition-all duration-300"
                  >
                    Send Message
                  </button>
                  <p className="text-center text-sm text-gray-500">
                    By submitting, you agree to our{" "}
                    <a href="/privacy" className="text-red-600 hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>

              {/* Quick Tips */}
              <div className="mt-8 bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-8">
                <h4 className="text-2xl font-black mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-4xl text-red-600">
                    tips_and_updates
                  </span>
                  Quick Tips
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-600 mt-1">
                      check_circle
                    </span>
                    <span>Call or WhatsApp for fastest response</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-600 mt-1">
                      check_circle
                    </span>
                    <span>Schedule a viewing in advance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-600 mt-1">
                      check_circle
                    </span>
                    <span>
                      We deal in quality used cars, land & developed properties
                    </span>
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
