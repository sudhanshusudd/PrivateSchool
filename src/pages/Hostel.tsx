import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, FileText, UserPlus, ArrowRight, Shield, Utensils, Wifi } from 'lucide-react';

const Hostel = () => {
  const hostelFeatures = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: '24/7 security, CCTV surveillance, and controlled access',
    },
    {
      icon: Utensils,
      title: 'Nutritious Meals',
      description: 'Balanced diet with variety, prepared in hygienic conditions',
    },
    {
      icon: Wifi,
      title: 'Modern Amenities',
      description: 'Wi-Fi, study rooms, recreation areas, and laundry facilities',
    },
    {
      icon: Users,
      title: 'Caring Staff',
      description: 'Experienced wardens and housekeeping staff available 24/7',
    },
  ];

  const hostelStats = [
    { number: '500+', label: 'Hostel Capacity' },
    { number: '4', label: 'Separate Blocks' },
    { number: '24/7', label: 'Security & Support' },
    { number: '15+', label: 'Years of Experience' },
  ];

  const roomTypes = [
    {
      type: 'Single Occupancy',
      capacity: '1 Student',
      features: ['Study table and chair', 'Wardrobe', 'Attached bathroom', 'Air conditioning', 'Reading lamp'],
      price: '₹45,000/year',
    },
    {
      type: 'Double Occupancy',
      capacity: '2 Students',
      features: ['Two study tables', 'Individual wardrobes', 'Attached bathroom', 'Air conditioning', 'Balcony access'],
      price: '₹35,000/year',
    },
    {
      type: 'Triple Occupancy',
      capacity: '3 Students',
      features: ['Three study spaces', 'Shared wardrobes', 'Common bathroom', 'Ceiling fan', 'Common area access'],
      price: '₹25,000/year',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Home size={48} className="mr-4" />
            <h1 className="text-5xl font-bold">Hostel Accommodation</h1>
          </div>
          <p className="text-xl text-orange-100">
            Comfortable and safe residential facilities for out-station students
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">A Home Away from Home</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Our hostel facilities provide a safe, comfortable, and conducive environment for students 
              to focus on their studies while developing independence and life skills. With modern 
              amenities and caring supervision, we ensure every student feels at home.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {hostelStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hostel Features</h2>
            <p className="text-xl text-gray-600">Modern facilities designed for comfort and security</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hostelFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Room Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Accommodation Options</h2>
            <p className="text-xl text-gray-600">Choose from our comfortable room configurations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                <div className="bg-orange-600 text-white p-4 text-center">
                  <h3 className="text-xl font-bold">{room.type}</h3>
                  <p className="text-orange-100">{room.capacity}</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-orange-600 text-center mb-2">{room.price}</div>
                    <div className="text-gray-600 text-center text-sm">Including meals and facilities</div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Room Features:</h4>
                    <ul className="space-y-2">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Details */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Facilities</h2>
              <p className="text-xl text-gray-600">Everything students need for comfortable living</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-4">Living Facilities</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Spacious rooms with proper ventilation and natural lighting
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Study areas with ergonomic furniture and good lighting
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Common recreation rooms with TV, games, and books
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Separate blocks for boys and girls with strict supervision
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-4">Support Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    24/7 medical assistance and first aid facilities
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Laundry and housekeeping services
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    High-speed internet and Wi-Fi connectivity
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Regular parent communication and updates
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-4">Dining Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Nutritious meals prepared by qualified chefs
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Variety menu with regional and international cuisines
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Special dietary requirements and allergies accommodated
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Clean, spacious dining hall with proper seating
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-orange-600 mb-4">Security Measures</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Round-the-clock security personnel and CCTV monitoring
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Controlled entry and exit with visitor registration
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Fire safety equipment and emergency evacuation plans
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Regular safety drills and awareness programs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hostel Information</h2>
            <p className="text-xl text-gray-600">Learn more about hostel policies and admission process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              to="/hostel/rules"
              className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-orange-500 hover:shadow-lg transition-all group"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
                <FileText size={40} className="text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hostel Rules & Regulations</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive guidelines for hostel residents to ensure a harmonious living environment
              </p>
              <div className="flex items-center justify-center text-orange-600 group-hover:text-orange-700">
                <span className="mr-2">Read Rules</span>
                <ArrowRight size={16} />
              </div>
            </Link>

            <Link
              to="/hostel/admission"
              className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-orange-500 hover:shadow-lg transition-all group"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors">
                <UserPlus size={40} className="text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hostel Admission Process</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step guide for hostel admission, requirements, and application procedures
              </p>
              <div className="flex items-center justify-center text-orange-600 group-hover:text-orange-700">
                <span className="mr-2">Apply Now</span>
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Hostel Inquiries</h2>
          <p className="text-xl text-gray-300 mb-8">
            For accommodation booking and general inquiries about our hostel facilities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Hostel Warden (Boys)</h3>
              <p className="text-gray-300 mb-1">Mr. Suresh Patel</p>
              <p className="text-gray-300 mb-1">+91 123-456-7894</p>
              <p className="text-gray-300">boys.hostel@excellenceschool.edu.in</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Hostel Warden (Girls)</h3>
              <p className="text-gray-300 mb-1">Mrs. Meena Sharma</p>
              <p className="text-gray-300 mb-1">+91 123-456-7895</p>
              <p className="text-gray-300">girls.hostel@excellenceschool.edu.in</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hostel;