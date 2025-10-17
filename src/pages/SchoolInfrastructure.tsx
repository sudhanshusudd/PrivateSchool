import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight, ExternalLink } from "lucide-react";

const SchoolInfrastructure = () => {
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

  // ✅ School Infrastructure Data
  const infraData = [
    {
      label: "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)",
      value: "5225",
    },
    {
      label: "NO. AND SIZE OF THE CLASS ROOMS (IN SQ FTMTR)",
      value: "30",
    },
    {
      label:
        "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)",
      value: "5",
    },
    {
      label: "INTERNET FACILITY (Y/N)",
      value: "Yes",
    },
    {
      label: "NO. OF GIRLS TOILETS",
      value: "12",
    },
    {
      label: "NO. OF BOYS TOILETS",
      value: "12",
    },
    {
      label:
        "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL",
      value: "https://www.youtube.com/watch?v=35p6BktH51E",
      isLink: true,
    },
  ];

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
            School Infrastructure
          </h1>
          <p className="text-gray-200 text-lg">
            Home{" "}
            <span className="text-blue-300">// School Infrastructure</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* ✅ Quick Links Sidebar */}
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

          {/* ✅ Infrastructure Table */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-800 px-6 py-4 border-b bg-gray-50 uppercase">
              School Infrastructure Information Details
            </h2>

            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-900 text-white text-left">
                  <th className="px-6 py-3 font-semibold w-2/3">INFORMATION</th>
                  <th className="px-6 py-3 font-semibold w-1/3">DETAILS</th>
                </tr>
              </thead>
              <tbody>
                {infraData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b text-gray-700 hover:bg-blue-50 transition ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-3 font-medium">{row.label}</td>
                    <td className="px-6 py-3">
                      {row.isLink ? (
                        <a
                          href={row.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800 transition"
                        >
                          View Video
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      ) : (
                        row.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolInfrastructure;
