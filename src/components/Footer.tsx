import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                {/* <span className="text-blue-900 font-bold">ES</span> */}
                <img
                  src="/logo.png"
                  alt="ES Logo"
                  className="h-6 w-auto inline-block"
                />
              </div>
              <h3 className="text-xl font-bold">Buds Garden School</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Committed to providing world-class education and nurturing
              tomorrow's leaders with values, knowledge, and skills.
            </p>
            <div className="flex space-x-4">
              <Facebook
                size={20}
                className="cursor-pointer hover:text-blue-300"
              />
              <Twitter
                size={20}
                className="cursor-pointer hover:text-blue-300"
              />
              <Instagram
                size={20}
                className="cursor-pointer hover:text-blue-300"
              />
              <Youtube
                size={20}
                className="cursor-pointer hover:text-blue-300"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-blue-100 hover:text-white"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/administration"
                  className="text-blue-100 hover:text-white"
                >
                  Administration
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="text-blue-100 hover:text-white"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-blue-100 hover:text-white">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Important</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/results" className="text-blue-100 hover:text-white">
                  Results
                </Link>
              </li>
              <li>
                <Link to="/hostel" className="text-blue-100 hover:text-white">
                  Hostel
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/academic-calendar"
                  className="text-blue-100 hover:text-white"
                >
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link
                  to="/academics/school-rules"
                  className="text-blue-100 hover:text-white"
                >
                  School Rules
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span className="text-blue-100">
                  Daludih, Rajganj, India, 735134
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span className="text-blue-100">
                  +91 9431376581 , +91 7631130006
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span className="text-blue-100">
                  info@budsgardenschool.edu.in
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2025 Buds Garden School. All rights reserved. | Designed for
            educational excellence by{" "}
            <a
              href="https://www.metagrad.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors duration-200"
              style={{ color: "#ffffff" }}
              onMouseOver={(e) => (e.target.style.color = "#cccccc")}
              onMouseOut={(e) => (e.target.style.color = "#ffffff")}
            >
              MetaGrad Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
