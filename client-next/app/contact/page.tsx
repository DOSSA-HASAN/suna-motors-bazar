"use client";

import React, { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSending(true);

        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(
                (result) => {
                    setIsSending(false);
                    setShowSuccess(true);
                    formRef.current?.reset();
                    setTimeout(() => setShowSuccess(false), 5000);
                },
                (error) => {
                    console.error(error.text);
                    setIsSending(false);
                    alert("Failed to send message. Please try again or use WhatsApp.");
                }
            );
    };

    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
            <main className="py-16">
                <div className="max-w-[1440px] mx-auto px-6 md:px-10">

                    {/* Hero Section */}
                    <header className="text-center mb-16">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 font-bold text-sm mb-6"
                            role="status"
                            aria-label="Current status: Online"
                        >
                            <span className="size-3 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></span>
                            We're Online — Ready to Help!
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-6">Get in Touch</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Looking to buy/sell a car, land, or developed property in and around Migori?
                            Our team is here to assist you.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-full">

                        {/* Left: Contact Info & Map */}
                        <aside className="space-y-12" aria-label="Contact Information and Location">
                            <div className="bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden w-full">
                                <div className="absolute -right-10 -top-10 size-48 bg-blue-600/10 rounded-full blur-3xl" aria-hidden="true"></div>
                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
                                        <div className="size-20 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl" aria-hidden="true">
                                            <span className="material-symbols-outlined text-5xl text-white">call</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600 uppercase tracking-wider font-bold">Speak to Sales</p>
                                            <p className="text-lg font-medium">Mon–Sat: 8AM – 7PM • Sun: 10AM – 5PM</p>
                                        </div>
                                    </div>

                                    <a
                                        href="tel:0728166487"
                                        className="block text-3xl md:text-5xl font-black text-blue-600 mb-4 hover:text-blue-700 transition outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
                                        aria-label="Call Suna Bazaar at 07 28 16 64 87"
                                    >
                                        0728 166 487
                                    </a>

                                    <a
                                        href="mailto:sunabazaar044@gmail.com"
                                        className="font-bold text-green-500 text-xl md:text-3xl break-all outline-none focus:underline"
                                        aria-label="Email us at sunabazaar044@gmail.com"
                                    >
                                        sunabazaar044@gmail.com
                                    </a>

                                    <div className="mt-8 flex gap-4">
                                        <a href="tel:0728166487" className="flex-1 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition flex items-center justify-center gap-3 shadow-lg focus:ring-4 focus:ring-blue-200">
                                            <span className="material-symbols-outlined text-2xl" aria-hidden="true">call</span> Call Now
                                        </a>
                                        <a href="https://wa.me/254728166487" target="_blank" rel="noopener noreferrer" className="flex-1 py-5 bg-[#25D366] text-white font-bold rounded-2xl hover:bg-[#20bd5a] transition flex items-center justify-center gap-3 shadow-lg focus:ring-4 focus:ring-green-200">
                                            <span className="material-symbols-outlined text-2xl" aria-hidden="true">chat</span> WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <section className="rounded-3xl overflow-hidden shadow-2xl h-96 relative" aria-label="Our Location Map">
                                <iframe
                                
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1175966409187!2d34.46512037415227!3d-1.073843098915825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d353f8008b9c87%3A0xce432c1d2bccd63!2sSuna%20Motor%20bazaar!5e0!3m2!1sen!2ske!4v1767721716668!5m2!1sen!2ske" // Use your actual embed URL
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="Suna Motors Bazaar Location in Migori"
                                    className="absolute inset-0"
                                ></iframe>
                            </section>
                        </aside>

                        {/* Right: Contact Form */}
                        <section className="lg:sticky lg:top-24" aria-labelledby="form-heading">
                            <div className="bg-white rounded-3xl p-10 shadow-2xl">
                                <h2 id="form-heading" className="text-4xl font-black mb-8">Send Us a Message</h2>

                                {/* ARIA Live region for success messages */}
                                <div aria-live="polite" className="sr-only">
                                    {showSuccess ? "Success! Your message has been sent." : ""}
                                </div>

                                {showSuccess && (
                                    <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-2xl font-bold flex items-center gap-2 animate-in fade-in duration-500">
                                        <span className="material-symbols-outlined" aria-hidden="true">check_circle</span>
                                        Message sent successfully!
                                    </div>
                                )}

                                <form ref={formRef} onSubmit={sendEmail} className="space-y-6" aria-label="Contact contact form">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="user_name" className="block text-sm font-bold mb-2">Full Name</label>
                                            <input id="user_name" name="user_name" type="text" placeholder="Your name" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-blue-600 outline-none focus:ring-2 focus:ring-blue-100" required aria-required="true" />
                                        </div>
                                        <div>
                                            <label htmlFor="user_phone" className="block text-sm font-bold mb-2">Phone Number</label>
                                            <input id="user_phone" name="user_phone" type="tel" placeholder="0728 166 487" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-blue-600 outline-none focus:ring-2 focus:ring-blue-100" required aria-required="true" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="user_email" className="block text-sm font-bold mb-2">Email Address</label>
                                        <input id="user_email" name="user_email" type="email" placeholder="example@mail.com" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-blue-600 outline-none focus:ring-2 focus:ring-blue-100" required aria-required="true" />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-bold mb-2">Subject</label>
                                        <select id="subject" name="subject" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-blue-600 outline-none focus:ring-2 focus:ring-blue-100">
                                            <option>General Inquiry</option>
                                            <option>Vehicle Inquiry</option>
                                            <option>Sell My Car</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold mb-2">Your Message</label>
                                        <textarea id="message" name="message" rows={6} placeholder="Tell us how we can help..." className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-blue-600 outline-none focus:ring-2 focus:ring-blue-100 resize-none" required aria-required="true"></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSending}
                                        aria-busy={isSending}
                                        className={`w-full py-6 text-white font-black text-xl rounded-2xl shadow-xl transition-all focus:ring-4 focus:ring-blue-200 ${isSending ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.01]"
                                            }`}
                                    >
                                        {isSending ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}