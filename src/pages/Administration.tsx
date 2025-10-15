import React from 'react';
import { Users, Mail, Phone, Award, BookOpen, Star } from 'lucide-react';

const Administration = () => {
  const leadership = [
    {
      name: 'Mr. Amar Kumar Pal',
      position: 'Chairman',
      qualification: '',
      experience: '22+ years',
      email: 'chairman@budsgardenschool.edu.in',
      phone: '+91 9431376581 , +91 7631130006',
      description: 'Visionary leader committed to educational excellence and holistic development.',
    },
    {
      name: 'Mr. Pramod Kumar',
      position: 'Principal',
      qualification: 'M.A, B.Ed',
      experience: '25 years',
      email: 'principal@budsgardenschool.edu.in',
      phone: '+91 123-456-7891',
      description: 'Experienced educator focused on student-centered learning and academic achievement.',
    },
    {
      name: 'Mr. Unknown',
      position: 'Vice Principal',
      qualification: 'M.Sc, B.Ed',
      experience: '20 years',
      email: 'vp@budsgardenschool.edu.in',
      phone: '+91 123-456-7892',
      description: 'Dedicated administrator overseeing daily operations and student discipline.',
    },
  ];

  const departments = [
    {
      name: 'Academic Department',
      head: 'Dr. Sunita Patel',
      staff: 45,
      subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Hindi', 'Computer Science'],
    },
    {
      name: 'Primary Section',
      head: 'Mrs. Kavita Joshi',
      staff: 25,
      subjects: ['Foundation Studies', 'Creative Arts', 'Physical Education', 'Moral Science'],
    },
    {
      name: 'Administrative Services',
      head: 'Mr. Rajesh Gupta',
      staff: 15,
      subjects: ['Finance', 'Human Resources', 'Student Records', 'Transportation'],
    },
    {
      name: 'Student Support Services',
      head: 'Ms. Neha Singh',
      staff: 8,
      subjects: ['Counseling', 'Career Guidance', 'Health Services', 'Library Services'],
    },
  ];

  const facultyStats = [
    { number: '150+', label: 'Total Faculty', icon: Users },
    { number: '95%', label: 'Post Graduates', icon: BookOpen },
    { number: '20+', label: 'Years Average Experience', icon: Award },
    { number: '15:1', label: 'Student-Teacher Ratio', icon: Star },
  ];

  const seniorFaculty = [
    {
      name: 'Dr. Meera Agarwal',
      department: 'Mathematics',
      qualification: 'Ph.D Mathematics',
      specialization: 'Advanced Mathematics, Statistics',
      experience: '22 years',
      achievements: ['Best Teacher Award 2023', 'Mathematics Olympiad Coach'],
    },
    {
      name: 'Prof. Suresh Kumar',
      department: 'Science',
      qualification: 'M.Sc Physics, B.Ed',
      specialization: 'Physics, Electronics',
      experience: '18 years',
      achievements: ['Science Fair Coordinator', 'Research Publication Author'],
    },
    {
      name: 'Mrs. Rekha Menon',
      department: 'English',
      qualification: 'M.A English Literature',
      specialization: 'Literature, Creative Writing',
      experience: '16 years',
      achievements: ['Literary Club Mentor', 'Drama Competition Winner'],
    },
    {
      name: 'Mr. Vijay Sharma',
      department: 'Physical Education',
      qualification: 'M.P.Ed',
      specialization: 'Sports Coaching, Fitness Training',
      experience: '14 years',
      achievements: ['State Level Sports Coach', 'Fitness Trainer Certification'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Users size={48} className="mr-4" />
            <h1 className="text-5xl font-bold">Administration & Faculty</h1>
          </div>
          <p className="text-xl text-emerald-100">
            Meet our dedicated leadership team and experienced faculty members
          </p>
        </div>
      </section>

      {/* Faculty Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Teaching Excellence</h2>
            <p className="text-xl text-gray-600">Qualified professionals committed to student success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={40} className="text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced leaders guiding our educational mission</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Photo</span>
                  </div>
                  
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-emerald-600 font-semibold mb-2">{leader.position}</p>
                    <p className="text-gray-600 text-sm">{leader.qualification}</p>
                    <p className="text-gray-500 text-sm">{leader.experience} experience</p>
                  </div>

                  <p className="text-gray-700 text-center mb-4">{leader.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center text-gray-600">
                      <Mail size={16} className="mr-2" />
                      <span>{leader.email}</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                      <Phone size={16} className="mr-2" />
                      <span>{leader.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Structure</h2>
            <p className="text-xl text-gray-600">Organized teams ensuring comprehensive education delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{dept.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-600">{dept.staff}</div>
                    <div className="text-sm text-gray-600">Staff Members</div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 mb-2"><strong>Department Head:</strong> {dept.head}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Areas of Focus:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Faculty */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Senior Faculty Members</h2>
            <p className="text-xl text-gray-600">Experienced educators leading their respective departments</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {seniorFaculty.map((faculty, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-500 text-xs">Photo</span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{faculty.name}</h3>
                      <p className="text-emerald-600 font-semibold">{faculty.department}</p>
                      <p className="text-gray-600 text-sm">{faculty.qualification}</p>
                    </div>

                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>Specialization:</strong> {faculty.specialization}</p>
                      <p><strong>Experience:</strong> {faculty.experience}</p>
                    </div>

                    <div className="mt-3">
                      <h4 className="font-semibold text-gray-900 mb-1">Achievements:</h4>
                      <ul className="text-sm text-gray-600">
                        {faculty.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center">
                            <Award size={12} className="text-yellow-500 mr-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Administration */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Administration</h2>
          <p className="text-xl text-gray-300 mb-8">
            For administrative matters, academic inquiries, or to schedule meetings
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Academic Office</h3>
              <p className="text-gray-300 mb-2">+91 123-456-7891</p>
              <p className="text-gray-300">academic@budsgardenschool.edu.in</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Administration Office</h3>
              <p className="text-gray-300 mb-2">+91 123-456-7892</p>
              <p className="text-gray-300">admin@budsgardenschool.edu.in</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">HR Department</h3>
              <p className="text-gray-300 mb-2">+91 123-456-7893</p>
              <p className="text-gray-300">hr@budsgardenschool.edu.in</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Administration;