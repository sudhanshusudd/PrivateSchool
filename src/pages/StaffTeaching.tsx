import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import HeroImage from "../components/HeroImage";

const StaffTeaching = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { title: "General Information", path: "/mpd" },
    { title: "Document And Information", path: "/documentInformation" },
    { title: "Result And Academics", path: "/resultAcademics" },
    { title: "Staff Teaching", path: "/staffTeaching" },
    { title: "School Infrastructure", path: "/schoolInfrastructure" },
  ];

  const staffData = [
    { label: "Principal", value: "1" },
    { label: "Total No Of Teachers", value: "34" },
    { label: "Pgt", value: "9" },
    { label: "Tgt", value: "10" },
    { label: "Prt", value: "14" },
    { label: "Teacher Section Ratio", value: "1.41:1" },
    { label: "Special Educator Details", value: "1" },
    { label: "Counsellor And Wellness Teacher Details", value: "1" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroImage title="Staff (Teaching)" backgroundImage="/cultural/cultural5.jpeg" />


      {/* Main Content */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar */}
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

          {/* Staff Table */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-800 px-6 py-4 border-b bg-gray-50">
              Staff (Teaching) Information Details
            </h2>

            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-900 text-white text-left">
                  <th className="px-6 py-3 font-semibold w-2/3">Information</th>
                  <th className="px-6 py-3 font-semibold w-1/3">Details</th>
                </tr>
              </thead>
              <tbody>
                {staffData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b text-gray-700 hover:bg-blue-50 transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                  >
                    <td className="px-6 py-3 font-medium">{row.label}</td>
                    <td className="px-6 py-3">{row.value}</td>
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

export default StaffTeaching;
