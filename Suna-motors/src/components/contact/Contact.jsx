import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual EmailJS IDs
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setStatus("success");
        setIsSending(false);
        formRef.current.reset(); // Clear form on success
        setTimeout(() => setStatus(null), 5000);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setIsSending(false);
        setTimeout(() => setStatus(null), 5000);
      }
    );
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <main className="py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          {/* Hero Section ... (kept the same) */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 font-bold text-sm mb-6">
              <span className="size-3 rounded-full bg-green-500 animate-pulse"></span>
              We're Online — Ready to Help!
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Get in Touch
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column (Contact Info) ... (kept the same) */}
            <div className="space-y-12">
              {/* ... Your Call/WhatsApp and Location Cards ... */}
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-3xl p-10 shadow-2xl">
                <h2 className="text-4xl font-black mb-8">Send Us a Message</h2>

                {/* --- FEEDBACK ALERTS --- */}
                {status === "success" && (
                  <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-2xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-2xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined">error</span>
                    Something went wrong. Please try calling us instead.
                  </div>
                )}

                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">
                        Full Name
                      </label>
                      <input
                        name="user_name" // Ensure this matches your EmailJS template variable
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
                      placeholder="sunabazaar044@gmail.com"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-600 focus:outline-none transition"
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
                      <option>Financing Options</option>
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
                    {isSending ? (
                      <>
                        <div className="size-5 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
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
