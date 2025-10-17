import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const MPD = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Dynamic Quick Links
  const quickLinks = [
    { title: "GENERAL INFORMATION", path: "/mpd" },
    { title: "DOCUMENT & INFORMATION", path: "/documentInformation" },
    { title: "RESULT AND ACADEMICS", path: "/resultAcademics" },
    { title: "STAFF (TEACHING)", path: "/staffTeaching" },
    { title: "SCHOOL INFRASTRUCTURE", path: "/schoolInfrastructure" },
  ];

  // ✅ Data from uploaded image
  const info = {
    name: "BUDS GARDEN SCHOOL",
    affiliation: "3430311",
    schoolCode: "66510",
    address: "AT-DALUDIH PO+PS RAJGANJ, DHANBAD, JHARKHAND.",
    principal: "MR PRAMOD KUMAR",
    email: "budsgarden.rajganj@gmail.com",
    contact: "+91 8539993610 / +91 9431376581",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section
        className="relative bg-cover bg-center py-24 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-2 tracking-wide uppercase">
            General Information
          </h1>
          <p className="text-gray-200 text-lg">
            Home <span className="text-blue-300">// General Information</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Professional Quick Link Sidebar */}
          <aside className="lg:col-span-1">
            <h2 className="font-bold text-gray-800 mb-4 text-lg border-b pb-2">
              QUICK LINK
            </h2>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <li
                    key={index}
                    onClick={() => navigate(link.path)}
                    className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-md cursor-pointer border transition-all duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white border-blue-700 shadow-sm"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-400"
                    }`}
                  >
                    <span>{link.title}</span>
                    <ChevronRight
                      size={16}
                      className={`${isActive ? "text-white" : "text-gray-500"}`}
                    />
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Professional General Information Table */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-800 px-6 py-4 border-b bg-gray-50">
              GENERAL INFORMATION
            </h2>

            <table className="w-full border-collapse">
              <tbody className="text-gray-800">
                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="font-semibold px-6 py-4 border-r w-1/2 text-gray-700">
                    NAME OF SCHOOL
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-900">
                    {info.name}
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="font-semibold px-6 py-4 border-r text-gray-700">
                    AFFILIATION NO.(IF APPLICABLE)
                  </td>
                  <td className="px-6 py-4">{info.affiliation}</td>
                </tr>

                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="font-semibold px-6 py-4 border-r text-gray-700">
                    SCHOOL CODE (IF APPLICABLE)
                  </td>
                  <td className="px-6 py-4">{info.schoolCode}</td>
                </tr>

                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="font-semibold px-6 py-4 border-r text-gray-700">
                    COMPLETE ADDRESS WITH PIN CODE
                  </td>
                  <td className="px-6 py-4">{info.address}</td>
                </tr>

                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="font-semibold px-6 py-4 border-r text-gray-700">
                    PRINCIPAL NAME & QUALIFICATION
                  </td>
                  <td className="px-6 py-4">{info.principal}</td>
                </tr>

                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="font-semibold px-6 py-4 border-r text-gray-700">
                    SCHOOL EMAIL ID
                  </td>
                  <td className="px-6 py-4 text-blue-700 hover:underline cursor-pointer">
                    {info.email}
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition">
                  <td className="font-semibold px-6 py-4 border-r text-gray-700">
                    CONTACT DETAIL (LANDLINE/MOBILE)
                  </td>
                  <td className="px-6 py-4">{info.contact}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MPD;
