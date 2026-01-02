import { Link } from "react-router-dom";
import logo from "/logo.jpg";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
    ],
    Vehicles: [
      { name: "All Inventory", href: "/cars" },
      { name: "SUVs", href: "/suv" },
      { name: "Sedans", href: "/sedans" },
      { name: "Pickups", href: "/pickups" },
    ],
    Support: [
      { name: "FAQ", href: "/faq" },
      { name: "Financing", href: "/financing" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: "facebook",
      href: "https://www.facebook.com/SunaPropertyBazaar",
      color: "bg-blue-600",
    },
    // Add more social links here when ready
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden mt-20">
      {/* Subtle red glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo & Description */}
          <div className="space-y-10">
            <Link to="/" className="block group">
              <div className="flex flex-col items-center md:items-start gap-6">
                {/* Large, prominent logo */}
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-red-600/20 group-hover:ring-red-600/40 group-hover:shadow-red-600/30 group-hover:scale-105 transition-all duration-500">
                  <img
                    src={logo}
                    alt="Suna Motors & Property Bazaar Logo"
                    className="w-full h-full object-contain bg-white p-4"
                  />
                </div>

                {/* Company Name */}
                <h3 className="text-4xl md:text-5xl font-black text-white text-center md:text-left">
                  Suna Motor
                  <span className="text-red-600"> & Property Bazaar</span>
                </h3>
              </div>
            </Link>

            <div className="space-y-8 mt-8">
              <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                Your trusted marketplace in Migori for quality used vehicles,
                prime land, and developed properties. Verified quality •
                Transparent pricing • Expert guidance.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`flex items-center justify-center size-14 rounded-2xl ${social.color} text-white shadow-xl hover:bg-red-600 hover:scale-110 hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300`}
                  >
                    <span className="material-symbols-outlined text-3xl">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-2xl font-black text-white mb-10 relative inline-block">
                {category}
                <span className="absolute left-0 bottom-[-12px] w-16 h-1.5 bg-red-600 rounded-full" />
              </h3>
              <ul className="space-y-6">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-lg text-gray-400 hover:text-white hover:translate-x-3 transition-all duration-300 inline-flex items-center gap-3 group"
                    >
                      {link.name}
                      <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity">
                        arrow_forward
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-base">
          <p className="text-gray-500">
            © {currentYear} Suna Motor & Property Bazaar. All rights reserved.
          </p>
          <p className="text-gray-500 flex items-center gap-3">
            Crafted with
            <span className="material-symbols-outlined text-red-600 text-2xl animate-pulse">
              favorite
            </span>
            in Migori, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
