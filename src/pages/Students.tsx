import React from "react";
import { Users, Trophy, BookOpen, Award, TrendingUp } from "lucide-react";

const Students = () => {
  const studentStats = [
    { number: "2,000+", label: "Total Students", icon: Users },
    { number: "14:1", label: "Student-Teacher Ratio", icon: BookOpen },
    // { number: '15+', label: 'Countries Represented', icon: Star },
    { number: "98%", label: "University Acceptance", icon: TrendingUp },
  ];

  const studentAchievements = [
    {
      title: "Academic Excellence",
      description:
        "Our students consistently achieve top ranks in CBSE examinations",
      achievements: [
        "100% pass rate in Class X and XII for 3 consecutive years",
        // "25+ state toppers in various subjects",
        "95% students score above 80% in board examinations",
        "Multiple students selected in JEE Main and NEET",
      ],
    },
    {
      title: "Sports Achievements",
      description:
        "Outstanding performance in inter-school and state-level competitions",
      achievements: [
        "State Champions in Basketball (2023)",
        "Regional Winners in Cricket Tournament",
        "Multiple medals in Swimming Championships",
        "50+ students selected for district sports teams",
      ],
    },
    {
      title: "Cultural Activities",
      description:
        "Recognition in arts, music, dance, and literary competitions",
      achievements: [
        "First Prize in Inter-School Drama Competition",
        "Winners of Classical Music Festival",
        "Multiple awards in painting and sculpture",
        "Published authors in school literary magazine",
      ],
    },
  ];

  const studentSupport = [
    {
      title: "Academic Support",
      services: [
        "Remedial classes for struggling students",
        "Advanced programs for gifted students",
        "Career counseling and guidance",
        "Study skills workshops",
      ],
    },
    {
      title: "Personal Development",
      services: [
        "Leadership development programs",
        "Peer mentoring systems",
        "Personality development workshops",
        "Communication skills training",
      ],
    },
    {
      title: "Health & Wellness",
      services: [
        "24/7 medical support on campus",
        "Regular health check-ups",
        "Counseling and psychological support",
        "Nutrition and fitness programs",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Students</h1>
          <p className="text-xl text-blue-100">
            Nurturing the next generation of leaders, innovators, and global
            citizens
          </p>
        </div>
      </section>

      {/* Student Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Student Community
            </h2>
            <p className="text-xl text-gray-600">
              A diverse and vibrant community of learners
            </p>
          </div>

          {/* Stats Grid — 3 per row with equal spacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {studentStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon size={40} className="text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-lg">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Student Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating excellence in academics, sports, and arts
            </p>
          </div>

          <div className="space-y-8">
            {studentAchievements.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Trophy size={32} className="text-yellow-500 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start">
                      <Award
                        size={20}
                        className="text-green-500 mr-3 mt-1 flex-shrink-0"
                      />
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Student Support Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support for holistic development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentSupport.map((support, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {support.title}
                </h3>
                <ul className="space-y-3">
                  {support.services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life */}
      {/* <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Life</h2>
              <p className="text-xl text-gray-600">Beyond academics - a vibrant campus experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Clubs & Societies</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span>Science Club</span>
                    <span className="text-blue-600 font-medium">150+ members</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span>Literary Society</span>
                    <span className="text-blue-600 font-medium">120+ members</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span>Drama Club</span>
                    <span className="text-blue-600 font-medium">80+ members</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span>Environment Club</span>
                    <span className="text-blue-600 font-medium">200+ members</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Robotics Club</span>
                    <span className="text-blue-600 font-medium">60+ members</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Annual Events</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold">Annual Day Celebration</h4>
                    <p className="text-gray-600 text-sm">Grand showcase of student talents and achievements</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold">Sports Day</h4>
                    <p className="text-gray-600 text-sm">Inter-house competitions and athletic events</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold">Science Fair</h4>
                    <p className="text-gray-600 text-sm">Student innovation and scientific projects</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold">Cultural Festival</h4>
                    <p className="text-gray-600 text-sm">Celebration of arts, music, and dance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Alumni Success */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Our Alumni Success Stories
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our graduates have gone on to excel in top universities and leading
            careers worldwide
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                200+
              </div>
              <div className="text-blue-200">Engineering Graduates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                100+
              </div>
              <div className="text-blue-200">Medical Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-blue-200">Business Leaders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-blue-200">Research Scientists</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;
