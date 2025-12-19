import { Link } from 'react-router-dom'; // Use Link for internal navigation

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
    ],
    Vehicles: [
      { name: 'All Inventory', href: '/cars' },
      { name: 'SUVs', href: '/suv' },
      { name: 'Sedans', href: '/sedans' },
      { name: 'Pickups', href: '/pickups' },
    ],
    Support: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Financing', href: '/financing' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'facebook', href: 'https://facebook.com', color: 'bg-blue-600' },
    { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com', color: 'bg-gradient-to-br from-purple-600 to-pink-500' },
    { name: 'X', icon: 'twitter', href: 'https://x.com', color: 'bg-black' },
    { name: 'YouTube', icon: 'youtube', href: 'https://youtube.com', color: 'bg-red-600' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden mt-20">
      {/* Subtle red glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Logo & Description */}
          <div className="space-y-8">
            <Link to="/" className="inline-flex items-center gap-4 group">
              <div className="size-16 rounded-2xl bg-red-600 flex items-center justify-center shadow-2xl group-hover:shadow-red-600/50 group-hover:scale-110 transition-all duration-500">
                <span className="material-symbols-outlined text-5xl text-white font-bold">directions_car</span>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white">
                  Suna Motors<span className="text-red-600"> Bazaar</span>
                </h3>
              </div>
            </Link>

            <div className="space-y-6">
              <p className="text-lg text-gray-400 max-w-sm leading-relaxed">
                Kenya's most trusted marketplace for premium vehicles. Verified quality, transparent pricing, and nationwide delivery.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`flex items-center justify-center size-12 rounded-xl ${social.color} text-white shadow-lg hover:bg-red-600 hover:scale-110 hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300`}
                  >
                    <span className="material-symbols-outlined text-2xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xl font-black text-white mb-8 relative inline-block">
                {category}
                <span className="absolute left-0 bottom-[-10px] w-12 h-1 bg-red-600 rounded-full" />
              </h3>
              <ul className="space-y-5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-base text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      {link.name}
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
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
        <div className="mt-16 pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-gray-500">
            © {currentYear} Suna Motors Bazaar. All rights reserved.
          </p>
          <p className="text-gray-500 flex items-center gap-2">
            Crafted with
            <span className="material-symbols-outlined text-red-600 text-lg animate-pulse">favorite</span>
            in Kenya
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;