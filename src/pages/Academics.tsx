import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, FileText, Calendar, ArrowRight, Award, Book } from 'lucide-react';
import Hero from '../components/Hero';

const Academics = () => {
  const academicPrograms = [
    {
      level: 'Primary School',
      grades: 'Classes I - V',
      description: 'Foundation years focusing on basic literacy, numeracy, and character development.',
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies', 'Art', 'Physical Education'],
    },
    {
      level: 'Middle School',
      grades: 'Classes VI - VIII',
      description: 'Comprehensive curriculum building critical thinking and subject expertise.',
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Studies', 'Computer Science', 'Sanskrit'],
    },
    {
      level: 'Secondary School',
      grades: 'Classes IX - X',
      description: 'CBSE curriculum preparing students for board examinations.',
      subjects: ['English', 'Hindi', 'Mathematics', 'Science', 'Social Science', 'Computer Applications'],
    },
    {
      level: 'Senior Secondary',
      grades: 'Classes XI - XII',
      description: 'Specialized streams preparing for higher education and career paths.',
      subjects: ['Science Stream', 'Commerce Stream', 'Arts Stream'],
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Students',
      description: 'Learn about our student community, achievements, and support systems.',
      link: '/academics/students',
    },
    {
      icon: FileText,
      title: 'School Rules',
      description: 'Comprehensive guidelines for student conduct and academic integrity.',
      link: '/academics/school-rules',
    },
    {
      icon: Calendar,
      title: 'Academic Calendar',
      description: 'Important dates, events, and examination schedules for the academic year.',
      link: '/academics/academic-calendar',
    },
  ];

  const achievements = [
    { metric: '100%', label: 'CBSE Pass Rate' },
    { metric: '95%', label: 'First Division Results' },
    { metric: '50+', label: 'Subject Toppers' },
    { metric: '25:1', label: 'Student-Teacher Ratio' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Hero
        icon={<Book size={48} />}
        title="Academics"
        subtitle="Excellence in education through comprehensive curriculum and innovative teaching methods"
        gradientFrom="from-indigo-600"
        gradientTo="to-purple-600"
        textColor="text-indigo-100"
      />

      {/* Academic Excellence Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Academic Excellence</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Our academic program is designed to challenge students intellectually while providing
              the support they need to succeed. We follow the CBSE curriculum with innovative teaching
              methodologies that make learning engaging and effective.
            </p>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{achievement.metric}</div>
                  <div className="text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600">Comprehensive education from foundation to specialization</p>
          </div>

          <div className="space-y-8">
            {academicPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.level}</h3>
                      <p className="text-lg text-indigo-600 font-semibold">{program.grades}</p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Award size={48} className="text-indigo-500" />
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{program.description}</p>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Subjects Offered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.subjects.map((subject, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Information</h2>
            <p className="text-xl text-gray-600">Detailed information about our academic structure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-indigo-500 hover:shadow-lg transition-all group"
                >
                  <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 transition-colors">
                    <Icon size={40} className="text-indigo-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center justify-center text-indigo-600 group-hover:text-indigo-700">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Teaching Approach</h2>
              <p className="text-xl text-gray-600">Innovative methods for effective learning</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Learning</h3>
                <p className="text-gray-600">
                  Engaging classroom sessions with smart boards, multimedia content, and hands-on activities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Attention</h3>
                <p className="text-gray-600">
                  Small class sizes ensure individual attention and customized learning experiences.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Award size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Assessment Methods</h3>
                <p className="text-gray-600">
                  Continuous evaluation through projects, presentations, and regular assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;