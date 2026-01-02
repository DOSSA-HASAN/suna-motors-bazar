import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual IDs from the EmailJS Dashboard
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setIsSending(false);
        setShowSuccess(true);
        formRef.current.reset(); // Clears the form after sending
        setTimeout(() => setShowSuccess(false), 5000); // Hide message after 5s
      },
      (error) => {
        console.log(error.text);
        setIsSending(false);
        alert("Failed to send message. Please try again or use WhatsApp.");
      }
    );
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
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
                  <div className="mt-8 flex gap-4">
                    <a
                      href="tel:0728166487"
                      className="flex-1 py-5 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition flex items-center justify-center gap-3 shadow-lg"
                    >
                      <span className="material-symbols-outlined text-2xl">
                        call
                      </span>{" "}
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/254728166487"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-5 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#20bd5a] transition flex items-center justify-center gap-3 shadow-lg"
                    >
                      <span className="material-symbols-outlined text-2xl">
                        chat
                      </span>{" "}
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Fixed Google Map */}
              <div className="rounded-3xl overflow-hidden shadow-2xl h-96 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.544600125433!2d34.4727183!3d-1.0532289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d49992d4f2963d%3A0x6b488734f198126b!2sMigori!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Suna Motors Bazaar Location"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-3xl p-10 shadow-2xl">
                <h2 className="text-4xl font-black mb-8">Send Us a Message</h2>

                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-2xl font-bold flex items-center gap-2 animate-fade-in">
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Message sent successfully! We'll be in touch.
                  </div>
                )}

                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Full Name
                      </label>
                      <input
                        name="user_name"
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
                        name="user_phone"
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
                      name="user_email"
                      type="email"
                      placeholder="example@mail.com"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-600 focus:outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-600 focus:outline-none transition"
                    >
                      <option>General Inquiry</option>
                      <option>Vehicle Inquiry</option>
                      <option>Land/Property Inquiry</option>
                      <option>Sell My Car/Land</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-600 focus:outline-none transition resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full py-6 text-white font-black text-xl rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSending
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-600 hover:bg-red-700 hover:scale-105"
                    }`}
                  >
                    {isSending ? "Sending..." : "Send Message"}
                    {!isSending && (
                      <span className="material-symbols-outlined">send</span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
