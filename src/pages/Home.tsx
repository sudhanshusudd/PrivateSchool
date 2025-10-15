import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, BookOpen, Trophy, Clock, MapPin } from 'lucide-react';

const Home = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Consistently achieving top results in CBSE examinations with 100% pass rate.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Qualified and experienced teachers dedicated to student success.',
    },
    {
      icon: BookOpen,
      title: 'Modern Curriculum',
      description: 'Comprehensive education combining academics with life skills development.',
    },
    {
      icon: Trophy,
      title: 'Sports & Activities',
      description: 'State-level achievements in sports and cultural competitions.',
    },
  ];

  const quickLinks = [
    { title: 'Admissions Open', link: '/contact', color: 'bg-green-600' },
    { title: 'Academic Calendar', link: '/academics/academic-calendar', color: 'bg-blue-600' },
    { title: 'CBSE Results', link: '/results', color: 'bg-purple-600' },
    { title: 'Photo Gallery', link: '/gallery', color: 'bg-orange-600' },
  ];

  const announcements = [
    {
      date: '15 Jan 2024',
      title: 'New Academic Session Begins',
      description: 'Classes for the new academic year 2024-25 commence from April 1st.',
    },
    {
      date: '10 Jan 2024',
      title: 'Sports Day Celebration',
      description: 'Annual sports day will be held on February 25th at the school ground.',
    },
    {
      date: '05 Jan 2024',
      title: 'Science Exhibition',
      description: 'Students to showcase innovative projects in the upcoming science fair.',
    },
  ];

  return (
    <div className="space-y-0">

      <section className="relative w-full text-white overflow-hidden">
        <img
          src="/hero.png"
          alt="Hero"
          className="w-full h-auto object-contain"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-4xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight -mt-[450px] whitespace-nowrap">
              Welcome to <span className="text-yellow-400">Buds Garden School</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl mb-8 text-blue-100 leading-relaxed max-w-3xl">
              Nurturing Excellence, Building Future Leaders Through Quality Education,
              Character Development, and Holistic Growth Since 2009.
            </p>
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 mt-[200px]">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                Apply for Admission
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`${item.color} text-white p-6 rounded-lg text-center font-semibold hover:opacity-90 transition-opacity`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* School Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Buds Garden School?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a nurturing environment where students excel academically,
              develop strong character, and prepare for a successful future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon size={40} className="text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">29+</div>
              <div className="text-blue-200">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">2500+</div>
              <div className="text-blue-200">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">150+</div>
              <div className="text-blue-200">Qualified Teachers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-blue-200">CBSE Pass Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Announcements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Announcements</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest happenings at our school.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {announcements.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-3">
                  <Clock size={16} className="text-blue-600 mr-2" />
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our School Family?</h2>
          <p className="text-xl mb-8 text-green-100">
            Give your child the best educational experience with us. Admissions are now open!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <MapPin size={20} className="mr-2" />
              Schedule a Visit
            </Link>
            <Link
              to="/academics"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Programs
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;