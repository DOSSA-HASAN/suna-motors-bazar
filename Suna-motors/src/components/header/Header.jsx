import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Inventory', href: '/cars' },
    { name: 'SUVs', href: '/suv' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Get current path for active link highlighting
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="size-11 rounded-xl bg-red-600 flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
              <span className="material-symbols-outlined text-3xl text-white font-bold">directions_car</span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-black tracking-tight text-gray-900">
              Suna Motors<span className="text-red-600"> Bazaar</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`
                  relative text-base font-semibold transition-all duration-300 pb-1
                  ${currentPath === link.href
                    ? 'text-red-600'
                    : 'text-gray-700 hover:text-red-600'
                  }
                `}
              >
                {link.name}
                <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-red-600 scale-x-0 transition-transform duration-300 origin-left ${currentPath === link.href ? 'scale-x-100' : 'group-hover:scale-x-100'}`} />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-5 py-3 w-80 shadow-inner focus-within:shadow-lg focus-within:ring-2 focus-within:ring-red-600/30 transition-all duration-300">
              <span className="material-symbols-outlined text-gray-500 text-xl">search</span>
              <input
                type="text"
                placeholder="Search cars, SUVs, brands..."
                className="bg-transparent ml-3 text-base w-full focus:outline-none placeholder:text-gray-500"
              />
            </div>

            {/* Favorites */}
            <button className="flex items-center justify-center size-12 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-md group">
              <span className="material-symbols-outlined text-xl text-red-600 group-hover:text-white transition-colors">
                favorite
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center size-12 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-md"
            >
              <span className="material-symbols-outlined text-xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-500 ease-out
            ${mobileMenuOpen
              ? 'max-h-96 opacity-100 border-t border-gray-100 shadow-xl'
              : 'max-h-0 opacity-0'
            }
          `}
        >
          <nav className="flex flex-col bg-white py-6 px-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  px-6 py-4 text-lg font-medium rounded-lg transition-all duration-200
                  ${currentPath === link.href
                    ? 'text-red-600 bg-red-50'
                    : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
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