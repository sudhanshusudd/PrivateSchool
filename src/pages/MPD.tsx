import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const MPD = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { title: "General Information", path: "/mpd" },
    { title: "Document And Information", path: "/documentInformation" },
    { title: "Result And Academics", path: "/resultAcademics" },
    { title: "Staff Teaching", path: "/staffTeaching" },
    { title: "School Infrastructure", path: "/schoolInfrastructure" },
  ];

  // ✅ Data from uploaded image in camelCase
  const schoolInfo = {
    name: "BUDS GARDEN SCHOOL",
    affiliationNo: "3430311",
    schoolCode: "66510",
    address: "AT-DALUDIH PO+PS RAJGANJ, DHANBAD, JHARKHAND.",
    principalName: "MR PRAMOD KUMAR",
    email: "budsgarden.rajganj@gmail.com",
    contact: "+91 9431376581 , +91 7631130006",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section
        className="relative bg-cover bg-center py-24 text-white"
        style={{
          backgroundImage: "url('/infra/infra5.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-2 tracking-wide">
            General Information
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Quick Link Sidebar */}
          <aside className="lg:col-span-1">
            <h2 className="font-bold text-gray-800 mb-4 text-lg border-b pb-2">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <li
                    key={index}
                    onClick={() => navigate(link.path)}
                    className={`flex items-center justify-between px-4 py-3 text-sm font-medium rounded-md cursor-pointer border transition-all duration-200 ${isActive
                      ? "bg-blue-900 text-white border-blue-900 shadow-sm"
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

          {/* General Information Table */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-800 px-6 py-4 border-b bg-gray-50">
              General Information
            </h2>

            <table className="w-full border-collapse">
              <tbody className="text-gray-800">
                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="font-semibold px-6 py-4 border-r w-1/2 text-gray-700">
                    Name of School
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-900">
                    {schoolInfo.name}
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="font-semibold px-6 py-4 border-r text-gray-700">
                    Affiliation No. (if applicable)
                  </td>
                  <td className="px-6 py-4">{schoolInfo.affiliationNo}</td>
                </tr>

                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="font-semibold px-6 py-4 border-r text-gray-700">
                    School Code (if applicable)
                  </td>
                  <td className="px-6 py-4">{schoolInfo.schoolCode}</td>
                </tr>

                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="font-semibold px-6 py-4 border-r text-gray-700">
                    Complete Address with Pin Code
                  </td>
                  <td className="px-6 py-4">{schoolInfo.address}</td>
                </tr>

                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="font-semibold px-6 py-4 border-r text-gray-700">
                    Principal Name & Qualification
                  </td>
                  <td className="px-6 py-4">{schoolInfo.principalName}</td>
                </tr>

                <tr className="border-b hover:bg-gray-50 transition">
                  <td className="font-semibold px-6 py-4 border-r text-gray-700">
                    School Email ID
                  </td>
                  <td className="px-6 py-4 text-blue-700 hover:underline cursor-pointer">
                    {schoolInfo.email}
                  </td>
                </tr>

                <tr className="hover:bg-gray-50 transition">
                  <td className="font-semibold px-6 py-4 border-r text-gray-700">
                    Contact Detail (Landline/Mobile)
                  </td>
                  <td className="px-6 py-4">{schoolInfo.contact}</td>
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
