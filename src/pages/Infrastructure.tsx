import React, { useState } from "react";
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
  X,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Hero from "../components/Hero";
import { LucideIcon } from "lucide-react";

export type Activity = {
  icon: LucideIcon;
  title: string;
  src: string;
  description: string;
  features: string[];
  images: string[];
};

const Infrastructure = () => {
  const [selectedImage, setSelectedImage] = useState<Activity | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  
  const facilities = [
    {
      icon: BookOpen,
      title: "Modern Classrooms",
      src: "/Academic/Academic1.jpg",
      description:
        "Spacious, well-ventilated classrooms equipped with smart boards and modern teaching aids.",
      features: [
        "Smart Board Technology",
        "Air Conditioned",
        "Ergonomic Furniture",
        "Natural Lighting",
      ],
      images : [
        "/ModernClassrooms/ModernClassrooms1.jpg",
        "/ModernClassrooms/ModernClassrooms2.jpg",
        "/ModernClassrooms/ModernClassrooms3.jpg",
        "/ModernClassrooms/ModernClassrooms4.jpg",
        "/ModernClassrooms/ModernClassrooms5.jpg"
      ]
    },
    {
      icon: FlaskConical,
      title: "Science Laboratories",
      src: "/ScienceLabs/ScienceLab1.jpg",
      description:
        "State-of-the-art physics, chemistry, and biology labs with modern equipment.",
      features: [
        "Advanced Equipment",
        "Safety Protocols",
        "Research Facilities",
        "Experiment Kits",
      ],
      images : [
        "/ScienceLabs/ScienceLab1.jpg",
        "/ScienceLabs/ScienceLab2.jpg",
        "/ScienceLabs/ScienceLab3.jpg",
        "/ScienceLabs/ScienceLab4.jpg",
        "/ScienceLabs/ScienceLab5.jpg"
      ]
    },
    {
      icon: Computer,
      title: "Computer Labs",
      src: "/ComputerLabs/ComputerLab1.jpg",
      description:
        "Multiple computer labs with latest hardware and software for digital literacy.",
      features: [
        "Latest Computers",
        "High-Speed Internet",
        "Programming Tools",
        "1:1 Computer Access",
      ],
      images : [
        "/ComputerLabs/ComputerLab1.jpg",
        "/ComputerLabs/ComputerLab2.jpg",
        "/ComputerLabs/ComputerLab3.jpg",
        "/ComputerLabs/ComputerLab4.jpg",
        "/ComputerLabs/ComputerLab5.jpg"
      ]
    },
    {
      icon: BookOpen,
      title: "Library",
      src: "/Library/Library2.jpg",
      description:
        "Extensive collection of books, journals, and digital resources in our modern library.",
      features: [
        "50,000+ Books",
        "Digital Resources",
        "Reading Spaces",
        "Research Section",
      ],
      images : [
        "/Library/Library1.jpg",
        "/Library/Library2.jpg",
        "/Library/Library3.jpg",
        "/Library/Library4.jpg",
        "/Library/Library5.jpg"
      ]
    },
    {
      icon: Trophy,
      title: "Sports Complex",
      src: "/SportsComplex/SportsComplex1.jpg",
      description:
        "Comprehensive sports facilities including playground, gymnasium, and indoor games.",
      features: [
        "Cricket Ground",
        "Basketball Court",
        "Football Ground",
        "Volleyball Court",
        "badminton Court",
        "Gymnasium",
      ],
      images : [
        "/SportsComplex/SportsComplex1.jpg",
        "/SportsComplex/SportsComplex2.jpg",
        "/SportsComplex/SportsComplex3.jpeg",
        "/SportsComplex/SportsComplex4.jpg",
        "/SportsComplex/SportsComplex5.jpg"
      ]
    },
    {
      icon: TestTubes,
      title: "ATAL Tinkering Lab",
      src: "/ATAL/Atal1.jpg",
      description:
        "Innovation hub fostering creativity and STEM learning among students.",
      features: [
        "Hands-on STEM Learning",
        "Robotics and Electronics Kits",
        "Design Thinking Projects",
        "Encouraging Problem-Solving Skills",
      ],
      images : [
        "/ATAL/Atal1.jpg",
        "/ATAL/Atal2.jpg",
        "/ATAL/Atal3.jpg",
        "/ATAL/Atal4.jpg",
        "/ATAL/Atal5.jpg"
      ]
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

  const openGallery = (activity: Activity) => {
      setSelectedImage(activity);
      setCurrentIndex(null); // reset zoom modal
    };
  
    const closeGallery = () => {
      setSelectedImage(null);
      setCurrentIndex(null);
    };
  
    const openModal = (index: number) => {
      setCurrentIndex(index);
    };
  
    const closeModal = (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setCurrentIndex(null);
    };
  
    const showPrev = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!selectedImage) return;
  
      setCurrentIndex((prev) =>
        prev !== null && prev > 0
          ? prev - 1
          : selectedImage.images.length - 1
      );
    };
  
    const showNext = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!selectedImage) return;
  
      setCurrentIndex((prev) =>
        prev !== null && prev < selectedImage.images.length - 1
          ? prev + 1
          : 0
      );
    };

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

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6 grid grid-cols-1 md:grid-cols-3">
                    <div className="flex flex-col items-start justify-start">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <Icon size={25} className="text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3r">
                        {facility.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-xs md:text-sm">
                        {facility.description}
                      </p>
                    </div>
                    <ul className="p-2 flex flex-col items-start justify-end">
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
                    <div className="flex flex-row items-start justify-end">
                    <div className="rounded-xl overflow-hidden w-[60%]">
                      <img onClick={() => openGallery(facility)} src={facility.src} alt={facility.src} className="max-h-36 w-full cursor-pointer"/>
                    </div>
                  </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

             {/* 🖼️ Gallery Modal */}
      {selectedImage && currentIndex === null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeGallery}
        >
          <div
            className="max-w-5xl w-full bg-white mx-4 p-4 rounded-lg h-96 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex flex-row items-center justify-between">
              <h1 className="text-base md:text-xl font-bold text-gray-700">
                {selectedImage.title}
              </h1>
              <button className="text-red-500" onClick={closeGallery}>
                <X />
              </button>
            </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto max-h-96"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {selectedImage.images.map((src, index) => (
                <div
                  key={index}
                  className="w-full overflow-hidden rounded-lg shadow-md cursor-pointer border border-gray-200"
                  onClick={() => openModal(index)}
                >
                  <img
                    src={src}
                    alt={src}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) =>
                      (e.currentTarget.src =
                        "https://via.placeholder.com/400x300?text=Image+Missing")
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 🔍 Image Zoom Modal */}
      {selectedImage && currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60]"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-red-500 hover:text-gray-300"
            onClick={closeModal}
          >
            <X size={28} />
          </button>
            <button
              className="absolute left-4 text-white hover:text-gray-300"
              onClick={showPrev}
            >
              <ArrowLeft size={36} />
            </button>
          <div className="relative max-w-3xl w-full flex items-center justify-center px-4 md:px-0">
            <img
              src={selectedImage.images[currentIndex]}
              alt="Preview"
              className="max-h-[80vh] rounded-lg shadow-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />

          </div>
            <button
              className="absolute right-4 text-white hover:text-gray-300"
              onClick={showNext}
            >
              <ArrowRight size={36} />
            </button>
        </div>
      )}

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
