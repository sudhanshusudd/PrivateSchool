import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ArrowDownWideNarrow,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // All items
  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
      children: [
        { name: "Chairman's Message", href: "/about/chairman-message" },
        { name: "Principal's Message", href: "/about/principal-message" },
        { name: "Infrastructure", href: "/about/infrastructure" },
      ],
    },
    {
      name: "Academics",
      href: "/academics",
      children: [
        { name: "Students", href: "/academics/students" },
        { name: "School Rules", href: "/academics/school-rules" },
        { name: "Academic Calendar", href: "/academics/academic-calendar" },
      ],
    },
    { name: "Administration", href: "/administration" },
    { name: "MPD", href: "/mpd" },
    { name: "Results", href: "/results" },
    { name: "Activities", href: "/activities" },
    { name: "Hostel", href: "/hostel" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const visibleItems = navigation.slice(0, 6);
  const hiddenItems = navigation.slice(6);

  const isItemActive = (item: typeof navigation[0]) => {
    if (item.href === "/") {
      return location.pathname === "/"; // exact match for home
    }
    if (location.pathname === item.href) return true;
    if (item.children) {
      return item.children.some((child) => location.pathname === child.href);
    }
    return false;
  };

  return (
    <header className="bg-white shadow-lg w-full relative z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-1 text-[11px] overflow-x-auto">
        <div className="container mx-auto px-2 flex flex-nowrap items-center justify-between space-x-4 min-w-max">
          <div className="flex items-center space-x-2">
            <Phone size={12} />
            <span>+91 9431376581 , +91 7631130006</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={12} />
            <span>budsgarden.rajganj@gmail.com</span>
          </div>
          <div className="flex items-center space-x-1 text-blue-100">
            <span>
              Owned and Run By:{" "}
              <span className="font-medium text-white">
                Buds Garden Education Society, Rajganj, Dhanbad
              </span>{" "}
              | Affiliated To{" "}
              <span className="font-medium text-white">
                C.B.S.E., New Delhi
              </span>{" "}
              | Affiliation No.{" "}
              <span className="font-medium text-white">3430311</span> | School
              Code –<span className="font-medium text-white"> 66510</span>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={12} />
            <span>Buds Garden School, Daludih, India</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900 whitespace-nowrap">
                Buds Garden School
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                Nurturing Excellence, Building Future
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {visibleItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${isItemActive(item) ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-50"
                    }`}
                >
                  {item.name}
                </Link>



                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className={`block px-4 py-3 text-sm ${location.pathname === child.href ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-blue-50"
                          }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}

              </div>
            ))}

            {hiddenItems.length > 0 && (
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("more")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 flex items-center space-x-1">
                  {hiddenItems.length}More<ArrowDownWideNarrow size={18} />
                </button>
                {activeDropdown === "more" && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border z-50">
                    {hiddenItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen((p) => !p)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium ${location.pathname.startsWith(item.href)
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-50"
                      }`}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
