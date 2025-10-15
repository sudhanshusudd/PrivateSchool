import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building, MessageSquare, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Chairman's Message",
      description: "Inspiring words from our visionary chairman about the school's mission and future.",
      link: '/about/chairman-message',
    },
    {
      icon: Users,
      title: "Principal's Message",
      description: "Leadership insights and educational philosophy from our principal.",
      link: '/about/principal-message',
    },
    {
      icon: Building,
      title: 'Infrastructure',
      description: 'State-of-the-art facilities designed to enhance the learning experience.',
      link: '/about/infrastructure',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">About Buds Garden School</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Established in 2009, Buds Garden School has been a beacon of quality education, 
              nurturing young minds and shaping future leaders for nearly three decades.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Buds Garden School was founded with a vision to provide world-class education 
                  that goes beyond textbooks. Our commitment to academic excellence, character 
                  building, and holistic development has made us one of the most trusted 
                  educational institutions in the region.
                </p>
                <p>
                  We believe in nurturing each child's unique potential while instilling 
                  strong moral values, critical thinking skills, and a passion for lifelong 
                  learning. Our comprehensive approach ensures that students are well-prepared 
                  for the challenges of tomorrow.
                </p>
                <p>
                  With state-of-the-art facilities, experienced faculty, and a supportive 
                  learning environment, we continue to set new standards in education and 
                  produce graduates who make meaningful contributions to society.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission & Vision</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 mb-2">Mission</h4>
                  <p className="text-gray-700">
                    To provide quality education that develops intellectual curiosity, 
                    critical thinking, and strong character in our students, preparing 
                    them to be responsible global citizens.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-green-600 mb-2">Vision</h4>
                  <p className="text-gray-700">
                    To be a leading educational institution that inspires excellence, 
                    fosters innovation, and empowers students to achieve their full 
                    potential in a rapidly changing world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">E</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">Striving for the highest standards in academics, character, and service.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">Building honest, ethical, and responsible individuals.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compassion</h3>
              <p className="text-gray-600">Fostering empathy, kindness, and care for others.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">R</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Respect</h3>
              <p className="text-gray-600">Valuing diversity, dignity, and the worth of every individual.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">R</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsibility</h3>
              <p className="text-gray-600">Taking ownership of actions and contributing to society.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">Encouraging creativity, critical thinking, and lifelong learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Learn More About Us</h2>
            <p className="text-xl text-gray-600">Discover different aspects of our school</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-blue-500 hover:shadow-lg transition-all group"
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon size={40} className="text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700">
                    <span className="mr-2">Read More</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;