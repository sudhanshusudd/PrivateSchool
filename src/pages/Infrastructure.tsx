import React from "react";
import {
  Building,
  Wifi,
  BookOpen,
  FlaskConical,
  Computer,
  Trophy,
  Bus,
  TestTubes,
  Building2,
} from "lucide-react";
import Hero from "../components/Hero";

const Infrastructure = () => {
  const facilities = [
    {
      icon: BookOpen,
      title: "Modern Classrooms",
      description:
        "Spacious, well-ventilated classrooms equipped with smart boards and modern teaching aids.",
      features: [
        "Smart Board Technology",
        "Air Conditioned",
        "Ergonomic Furniture",
        "Natural Lighting",
      ],
    },
    {
      icon: FlaskConical,
      title: "Science Laboratories",
      description:
        "State-of-the-art physics, chemistry, and biology labs with modern equipment.",
      features: [
        "Advanced Equipment",
        "Safety Protocols",
        "Research Facilities",
        "Experiment Kits",
      ],
    },
    {
      icon: Computer,
      title: "Computer Labs",
      description:
        "Multiple computer labs with latest hardware and software for digital literacy.",
      features: [
        "Latest Computers",
        "High-Speed Internet",
        "Programming Tools",
        "1:1 Computer Access",
      ],
    },
    {
      icon: BookOpen,
      title: "Library",
      description:
        "Extensive collection of books, journals, and digital resources in our modern library.",
      features: [
        "50,000+ Books",
        "Digital Resources",
        "Reading Spaces",
        "Research Section",
      ],
    },
    {
      icon: Trophy,
      title: "Sports Complex",
      description:
        "Comprehensive sports facilities including playground, gymnasium, and indoor games.",
      features: [
        "Cricket Ground",
        "Basketball Court",
        "Swimming Pool",
        "Gymnasium",
      ],
    },
    {
      icon: TestTubes,
      title: "ATAL Tinkering Lab",
      description:
        "Innovation hub fostering creativity and STEM learning among students.",
      features: [
        "Hands-on STEM Learning",
        "Robotics and Electronics Kits",
        "Design Thinking Projects",
        "Encouraging Problem-Solving Skills",
      ],
    },
  ];

  const additionalFacilities = [
    {
      icon: Wifi,
      title: "High-Speed Wi-Fi",
      description: "Campus-wide internet connectivity",
    },
    {
      icon: Bus,
      title: "Transportation",
      description: "GPS-enabled school buses covering entire city",
    },
    {
      icon: Building,
      title: "Medical Room",
      description: "24/7 medical assistance with qualified nurse",
    },
    {
      icon: BookOpen,
      title: "Auditorium",
      description: "250-seater modern auditorium for events",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Hero
        icon={<Building2 size={48} />}
        title="Infrastructure"
        subtitle="World-class facilities designed to enhance learning and development"
        gradientFrom="from-purple-600"
        gradientTo="to-blue-600"
        textColor="text-purple-100"
      />

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Modern Learning Environment
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our campus spans across 15 acres and features state-of-the-art
              infrastructure designed to provide students with the best possible
              learning environment. Every facility is carefully planned to
              support academic excellence, creative expression, and physical
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Everything needed for comprehensive education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-center">
                      {facility.description}
                    </p>
                    <ul className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Facilities
            </h2>
            <p className="text-xl text-gray-600">
              Supporting services for a complete educational experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFacilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {facility.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campus Statistics */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Campus by Numbers</h2>
            <p className="text-xl text-blue-200">
              Our infrastructure at a glance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">10</div>
              <div className="text-blue-200">Acres Campus</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">35+</div>
              <div className="text-blue-200">Classrooms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">10</div>
              <div className="text-blue-200">Laboratories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-blue-200">School Buses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Safety & Security
              </h2>
              <p className="text-xl text-gray-600">
                Your child's safety is our top priority
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Campus Security
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    24/7 security personnel on duty
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    CCTV surveillance throughout campus
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    24/7 Power Backup
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Emergency response protocols
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Health & Safety
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    On-campus medical facility
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Fire safety equipment installed
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Regular health check-ups
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Safe drinking water systems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
