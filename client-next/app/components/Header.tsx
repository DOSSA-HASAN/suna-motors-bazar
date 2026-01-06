"use client"; // Required because we use useState and usePathname

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Poppins, Pacifico } from "next/font/google";

// 1. Configure the Poppins font
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins", // This creates a CSS variable
});

// 2. Configure the Pacifico font
const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-pacifico",
});

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const pathname = usePathname(); // Next.js equivalent of useLocation().pathname
    const router = useRouter(); // Next.js equivalent of useNavigate()

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Inventory", href: "/cars" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // router.push is the Next.js version of navigate()
            router.push(`/cars?search=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery("");
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-md">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between h-25 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="size-15 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-md border border-gray-100 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                            <Image
                                src="/logo.jpg" // Place your logo in the 'public' folder
                                alt="Suna Motors Logo"
                                width={60}
                                height={60}
                                className="w-full h-full object-contain"
                                priority // Ensures the logo loads fast for SEO/LCP
                            />
                        </div>

                        <div className="flex flex-col">
                            <h1 className="text-2xl lg:text-3xl font-black tracking-tight text-gray-900 leading-none">
                                Suna Motor<span className="text-blue-600"> Bazaar</span>
                            </h1>
                            <span className={`${pacifico.className} text-[13px] uppercase tracking-[0.2em] font-bold text-gray-500 mt-1`}>
                                Cars For Everyone
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`
                  relative text-base font-semibold transition-all duration-300 pb-1
                  ${pathname === link.href
                                        ? "text-blue-600"
                                        : "text-gray-700 hover:text-blue-600"
                                    }
                `}
                            >
                                {link.name}
                                <span
                                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 scale-x-0 transition-transform duration-300 origin-left ${pathname === link.href
                                        ? "scale-x-100"
                                        : "group-hover:scale-x-100"
                                        }`}
                                />
                            </Link>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <form
                            onSubmit={handleSearch}
                            className="hidden md:flex items-center bg-gray-100 rounded-full px-5 py-3 w-80 shadow-inner focus-within:shadow-lg focus-within:ring-2 focus-within:ring-blue-600/30 transition-all duration-300"
                        >
                            <button type="submit" className="flex items-center justify-center">
                                <span className="material-symbols-outlined text-gray-500 text-xl hover:text-blue-600 transition-colors">
                                    search
                                </span>
                            </button>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search cars, SUVs, brands..."
                                className="bg-transparent ml-3 text-base w-full focus:outline-none placeholder:text-gray-500"
                            />
                        </form>

                        <button className="flex items-center justify-center size-12 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-md group">
                            <span className="material-symbols-outlined text-xl text-blue-600 group-hover:text-white transition-colors">
                                favorite
                            </span>
                        </button>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden flex items-center justify-center size-12 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md"
                        >
                            <span className="material-symbols-outlined text-xl">
                                {mobileMenuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`
            lg:hidden overflow-hidden transition-all duration-500 ease-out
            ${mobileMenuOpen
                            ? "max-h-96 opacity-100 border-t border-gray-100 shadow-xl"
                            : "max-h-0 opacity-0"
                        }
          `}
                >
                    <nav className="flex flex-col bg-white py-6 px-6 space-y-1">
                        <form
                            onSubmit={handleSearch}
                            className="flex md:hidden items-center bg-gray-100 rounded-lg px-4 py-3 mb-4"
                        >
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search..."
                                className="bg-transparent text-base w-full focus:outline-none"
                            />
                            <button type="submit">
                                <span className="material-symbols-outlined text-gray-500">
                                    search
                                </span>
                            </button>
                        </form>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`
                  px-6 py-4 text-lg font-medium rounded-lg transition-all duration-200
                  ${pathname === link.href
                                        ? "text-blue-600 bg-blue-50"
                                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                                    }
                `}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;