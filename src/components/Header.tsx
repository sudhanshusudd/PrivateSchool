import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

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
    {
      name: "Hostel",
      href: "/hostel",
      children: [
        { name: "Hostel Rules", href: "/hostel/rules" },
        // { name: 'Admission', href: '/hostel/admission' },
      ],
    },
    { name: "Results", href: "/results" },
    {
      name: "Activities",
      href: "/activities",
      children: [
        { name: "Physical Activities", href: "/activities/physical" },
        // { name: 'Creative Activities', href: '/activities/creative' },
      ],
    },
    { name: "MPD", href: "/mpd" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-1 text-[11px]">
        <div className="container mx-auto px-2">
          <div className="flex flex-nowrap items-center justify-between whitespace-nowrap overflow-hidden text-ellipsis">
            <div className="flex items-center space-x-2">
              <Phone size={12} className="inline-block" />
              <span>+91 9431376581 , +91 7631130006</span>
            </div>

            <div className="flex items-center space-x-2">
              <Mail size={12} className="inline-block" />
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
              <MapPin size={12} className="inline-block" />
              <span>Buds Garden School, Daludih, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white-600 rounded-full flex items-center justify-center">
              {/* <span className="text-white font-bold text-xl">ES</span> */}
              <img
                src="/logo.png"
                alt="ES Logo"
                className="h-10 w-auto inline-block"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900">
                Buds Garden School
              </h1>
              <p className="text-sm text-gray-600">
                Nurturing Excellence, Building Future
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 transition-colors ${
                    location.pathname === item.href ||
                    location.pathname.startsWith(item.href + "/")
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.children && <ChevronDown size={14} />}
                </Link>

                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                      location.pathname === item.href
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-blue-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg"
                          onClick={() => setIsMenuOpen(false)}
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
