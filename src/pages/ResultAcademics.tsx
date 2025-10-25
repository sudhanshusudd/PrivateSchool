import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ResultAcademics = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Dynamic Quick Links in camelCase
  const quickLinks = [
    { title: "General Information", path: "/mpd" },
    { title: "Document And Information", path: "/documentInformation" },
    { title: "Result And Academics", path: "/resultAcademics" },
    { title: "Staff Teaching", path: "/staffTeaching" },
    { title: "School Infrastructure", path: "/schoolInfrastructure" },
  ];

  // ✅ PDF handler
  const openStudentDuePdf = () => {
    window.open("/studentDue.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section
        className="relative bg-cover bg-center py-24 text-white"
        style={{ backgroundImage: "url('/Academic/Academic1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-2 tracking-wide uppercase">
            Result and Academics
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar Quick Links */}
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

          {/* Result & Academics Section */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-800 px-6 py-4 border-b bg-gray-50 uppercase">
              result and academics
            </h2>

            {/* Top Table */}
            <div className="overflow-x-auto">
              <table className="w-full border text-sm text-left">
                <thead>
                  <tr className="bg-blue-600 text-white uppercase text-sm">
                    <th className="px-4 py-3 border w-20 text-center">Sl. No.</th>
                    <th className="px-4 py-3 border">documents and information</th>
                    <th className="px-4 py-3 border w-48 text-center">upload documents</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border hover:bg-gray-50">
                    <td className="px-4 py-3 border text-center font-medium">1</td>
                    <td className="px-4 py-3 border">
                      list of parents teachers association (PTA) members
                    </td>
                    <td className="px-4 py-3 border text-center">
                      <button
                        onClick={openStudentDuePdf}
                        className="bg-blue-600 text-white px-4 py-1.5 rounded border border-blue-700 hover:bg-blue-700 text-sm font-semibold shadow-sm transition"
                      >
                        document
                      </button>
                    </td>
                  </tr>
                  <tr className="border hover:bg-gray-50">
                    <td className="px-4 py-3 border text-center font-medium">2</td>
                    <td className="px-4 py-3 border">
                      last three-year result of the board examination as per applicability
                    </td>
                    <td className="px-4 py-3 border text-center">
                      <button
                        onClick={openStudentDuePdf}
                        className="bg-blue-600 text-white px-4 py-1.5 rounded border border-blue-700 hover:bg-blue-700 text-sm font-semibold shadow-sm transition"
                      >
                        data
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Class-X Results */}
            <h3 className="text-xl font-bold text-gray-900 px-6 pt-8 uppercase">
              result class-x
            </h3>
            <div className="overflow-x-auto px-6 pb-6">
              <table className="w-full border text-sm text-left mt-2">
                <thead>
                  <tr className="bg-blue-600 text-white uppercase text-sm">
                    <th className="px-4 py-3 border">year</th>
                    <th className="px-4 py-3 border">no. of registered students</th>
                    <th className="px-4 py-3 border">no. of students passed</th>
                    <th className="px-4 py-3 border">pass percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border hover:bg-gray-50">
                    <td className="px-4 py-3 border">2020</td>
                    <td className="px-4 py-3 border">55</td>
                    <td className="px-4 py-3 border">55</td>
                    <td className="px-4 py-3 border">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Class-XII Results */}
            <h3 className="text-xl font-bold text-gray-900 px-6 pt-4 uppercase">
              result class-xii
            </h3>
            <div className="overflow-x-auto px-6 pb-8">
              <table className="w-full border text-sm text-left mt-2">
                <thead>
                  <tr className="bg-blue-600 text-white uppercase text-sm">
                    <th className="px-4 py-3 border">year</th>
                    <th className="px-4 py-3 border">no. of registered students</th>
                    <th className="px-4 py-3 border">no. of students passed</th>
                    <th className="px-4 py-3 border">pass percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border hover:bg-gray-50">
                    <td className="px-4 py-3 border">2020</td>
                    <td className="px-4 py-3 border">45</td>
                    <td className="px-4 py-3 border">45</td>
                    <td className="px-4 py-3 border">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResultAcademics;
