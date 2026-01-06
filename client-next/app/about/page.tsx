"use client";

import Link from "next/link";
import Image from "next/image";

// --- Types ---
interface Milestone {
    year: string;
    title: string;
    desc: string;
}

interface TeamMember {
    name: string;
    role: string;
    desc: string;
}

export default function AboutUs() {
    const milestones: Milestone[] = [
        {
            year: "2018",
            title: "Humble Beginnings",
            desc: "Launched as a trusted importer focused on quality vehicles in Nairobi",
        },
        {
            year: "2020",
            title: "Nationwide Expansion",
            desc: "Introduced seamless delivery across all major Kenyan counties",
        },
        {
            year: "2022",
            title: "Major Milestone",
            desc: "Deliveblue our 1,000th vehicle and earned widespread trust",
        },
        {
            year: "2025",
            title: "Market Leader",
            desc: "Southern Nyanza's go-to premium car marketplace with 5,000+ happy customers",
        },
    ];

    const team: TeamMember[] = [
        { name: "Igor Suna", role: "Founder & CEO", desc: "Visionary leader driving innovation in Kenya's automotive space" },
        { name: "Grace Muthoni", role: "Head of Experience", desc: "Ensuring every client feels valued and supported" },
        { name: "James Otieno", role: "Quality Director", desc: "Overseeing rigorous standards for every car" },
    ];

    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen font-sans">
            {/* Hero Section */}
            <section className="relative h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://res.cloudinary.com/dw4e01qx8/f_auto,q_auto/images/nkkio05nizj5catguopm"
                    alt="Premium vehicles at Suna Motors Bazaar"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                        Driving Nyanza <br />
                        <span className="text-blue-600">Forward</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                        Southern Nyanza's premier marketplace for premium, verified vehicles.
                        Quality assublue, transparently priced, deliveblue nationwide.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/cars" className="px-14 py-6 bg-blue-600 text-white font-bold text-xl rounded-full hover:bg-blue-700 hover:scale-105 shadow-2xl transition-all">
                            Explore Inventory
                        </Link>
                        <Link href="/contact" className="px-14 py-6 bg-white/10 backdrop-blur-lg border-2 border-white text-white font-bold text-xl rounded-full hover:bg-white/20 transition-all">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-6 md:px-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8">Building Trust in Every Kenyan Drive</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Founded in Migori with a passion for reliable mobility, Suna Motors Bazaar solves real challenges in Kenya's car market — from hidden vehicle issues to unfair pricing.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                We partner exclusively with verified importers and perform independent inspections to make premium car ownership safe and enjoyable.
                            </p>

                            {/* <div className="flex items-center gap-6">
                                <div className="flex -space-x-4">
                                    {[32, 44, 45, 68].map((id) => (
                                        <img key={id} src={`https://randomuser.me/api/portraits/${id % 2 === 0 ? 'women' : 'men'}/${id}.jpg`} alt="User" className="w-14 h-14 rounded-full border-4 border-white shadow" />
                                    ))}
                                    <div className="w-14 h-14 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center text-white font-bold shadow">+5K</div>
                                </div>
                                <div>
                                    <p className="font-black text-2xl">5,000+</p>
                                    <p className="text-gray-600 font-medium">Happy Nyanza and Migori Drivers</p>
                                </div>
                            </div> */}
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[400px]">
                            <Image src="/car1.png" alt="Bazaar" fill className="object-cover hover:scale-105 transition duration-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16">
                    <div className="bg-white rounded-3xl p-12 shadow-xl border-l-8 border-blue-600">
                        <h3 className="text-3xl font-black mb-6 text-blue-600">Our Vision</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">To be Southern Nyanza's most trusted automotive marketplace — empowering every driver with safe, reliable vehicles.</p>
                    </div>
                    <div className="bg-white rounded-3xl p-12 shadow-xl border-l-8 border-blue-600">
                        <h3 className="text-3xl font-black mb-6 text-blue-600">Our Mission</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">Deliver exceptional value through rigorous quality standards, complete transparency, and outstanding customer care.</p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            {/* <section className="py-24 bg-gray-100">
                <div className="max-w-[1280px] mx-auto px-6 md:px-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-16">Meet Our Expert Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {team.map((member, i) => (
                            <div key={i} className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
                                <div className="size-48 mx-auto rounded-full bg-blue-50 flex items-center justify-center mb-8">
                                    <span className="material-symbols-outlined text-7xl text-blue-600">person</span>
                                </div>
                                <h3 className="text-2xl font-black mb-2">{member.name}</h3>
                                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                                <p className="text-gray-600">{member.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Timeline */}
            <section className="py-24 bg-white hidden md:block">
                <div className="max-w-[1280px] mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-20">Our Journey So Far</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100" />
                        <div className="space-y-20">
                            {milestones.map((m, i) => (
                                <div key={i} className={`flex items-center ${i % 2 === 0 ? "justify-start" : "justify-end"} relative`}>
                                    <div className={`w-1/2 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                                        <div className="bg-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100">
                                            <p className="text-4xl font-black text-blue-600 mb-2">{m.year}</p>
                                            <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                                            <p className="text-gray-600">{m.desc}</p>
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 size-8 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-blue-600 text-white py-24">
                <div className="max-w-[1280px] mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Drive Your Dream?</h2>
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        <div className="flex items-center gap-4 text-3xl font-black">
                            <span className="material-symbols-outlined text-4xl">call</span>
                            0728166487
                        </div>
                        <div className="flex gap-4">
                            <a href="tel:0728166487" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition shadow-xl">Call Now</a>
                            <a href="https://wa.me/254728166487" className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:opacity-90 transition shadow-xl flex items-center gap-2">
                                <span className="material-symbols-outlined">chat</span> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}