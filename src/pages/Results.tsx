import React, { useState } from 'react';
import { Trophy, Calendar, TrendingUp, Award, Users, Download } from 'lucide-react';
import Hero from '../components/Hero';
import { useNavigate } from 'react-router-dom';

const Results = () => {
  const [selectedYear] = useState('2025');
  const [selectedClass] = useState('all');
  const navigate = useNavigate();
  const resultsData = {
    '2025': {
      'X': {
        passRate: '100%',
        firstDivision: '96%',
        schoolToppers: 10,
        subjectToppers: 28,
        results: [
          { name: 'Sonali Kumari', percentage: '94.8%' },
          { name: 'Suraj Kumar Mahato', percentage: '94.6%' },
          { name: 'Aarifa Parween', percentage: '93.6%' },
          { name: 'Nawnneet Kumar Tiwary', percentage: '91.8%' },
          { name: 'Khushi Kumari', percentage: '91.2%' },
          { name: 'Joshina Kumari Chourasia', percentage: '91.0%' },
          { name: 'Shubham Kumar Dey', percentage: '90.8%' },
          { name: 'Sonal Kumari', percentage: '90.6%' },
          { name: 'Rupa Kumari', percentage: '88.2%' },
          { name: 'Archi Priya', percentage: '88.0%' },
        ],
      },
      'XII': {
        passRate: '100%',
        firstDivision: '94%',
        schoolToppers: 10,
        subjectToppers: 20,
        results: [
          { name: 'Sudhanshu Ranjan Rai', percentage: '93.4%' },
          { name: 'Akshay Sharma', percentage: '92.2%' },
          { name: 'Anurag Kumar', percentage: '91.8%' },
          { name: 'Anushka', percentage: '91.4%' },
          { name: 'Sarthak Dey', percentage: '91.2%' },
          { name: 'Sanskriti', percentage: '90.2%' },
          { name: 'Saquib Meraj', percentage: '90.2%' },
          { name: 'Rajveer Bhagat', percentage: '88.6%' },
          { name: 'Rahul Kumar Saw', percentage: '88.6%' },
          { name: 'Arnav Mittal', percentage: '88.2%' },
        ],
      },
    },
  };

  const achievements = [
    {
      year: '2025',
      title: 'Outstanding Academic Performance',
      description: 'School achieves 100% pass rate for the 6th consecutive year',
      icon: Trophy,
    },
    {
      year: '2025',
      title: 'State-Level Recognition',
      description: '20 students among state toppers in various subjects',
      icon: Award,
    },
    {
      year: '2025',
      title: 'Excellence in Sciences',
      description: 'Highest number of students cleared JEE and NEET entrance exams',
      icon: TrendingUp,
    },
    {
      year: '2025',
      title: 'Best Performing School',
      description: 'Awarded by CBSE for consistent academic excellence',
      icon: Trophy,
    },
  ];

  const getCurrentResults = () => {
    if (selectedClass === 'all') {
      const yearData = resultsData[selectedYear];
      if (!yearData) return null;
      return {
        combined: true,
        classX: yearData.X,
        classXII: yearData.XII,
      };
    } else {
      return resultsData[selectedYear]?.[selectedClass] || null;
    }
  };

  const currentResults = getCurrentResults();

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Hero
        icon={<Trophy size={48} />}
        title="CBSE Results"
        subtitle="Celebrating academic excellence and outstanding achievements of our students"
        gradientFrom="from-purple-600"
        gradientTo="to-pink-600"
        textColor="text-purple-100"
      />

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Pass Rate (2025)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">First Division</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">48</div>
              <div className="text-gray-600">Subject Toppers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-gray-600">Years of 100% Pass Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Display */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {currentResults ? (
            <div className="space-y-12">
              {/* Combined Results for "All Classes" */}
              {currentResults.combined ? (
                <>
                  {/* Class X Results */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                      Class X Results - 2025
                    </h2>

                    {/* Class X Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                      <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{currentResults.classX.passRate}</div>
                        <div className="text-gray-600">Pass Rate</div>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600 mb-2">{currentResults.classX.firstDivision}</div>
                        <div className="text-gray-600">First Division</div>
                      </div>
                      <div className="bg-purple-50 p-6 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-2">{currentResults.classX.schoolToppers}</div>
                        <div className="text-gray-600">School Toppers</div>
                      </div>
                      <div className="bg-orange-50 p-6 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-600 mb-2">{currentResults.classX.subjectToppers}</div>
                        <div className="text-gray-600">Subject Toppers</div>
                      </div>
                    </div>

                    {/* Class X Top Performers */}
                    <div className="mb-12">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Top Performers - Class X</h3>
                      <div className="space-y-4">
                        {currentResults.classX.results.map((student, index) => (
                          <div key={index} className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-lg font-semibold text-gray-900">{student.name}</h4>
                              <span className="text-2xl font-bold text-purple-600">{student.percentage}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Class XII Results */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                      Class XII Results - 2025
                    </h2>

                    {/* Class XII Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                      <div className="bg-blue-50 p-6 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{currentResults.classXII.passRate}</div>
                        <div className="text-gray-600">Pass Rate</div>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600 mb-2">{currentResults.classXII.firstDivision}</div>
                        <div className="text-gray-600">First Division</div>
                      </div>
                      <div className="bg-purple-50 p-6 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-2">{currentResults.classXII.schoolToppers}</div>
                        <div className="text-gray-600">School Toppers</div>
                      </div>
                      <div className="bg-orange-50 p-6 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-600 mb-2">{currentResults.classXII.subjectToppers}</div>
                        <div className="text-gray-600">Subject Toppers</div>
                      </div>
                    </div>

                    {/* Class XII Top Performers */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Top Performers - Class XII</h3>
                      <div className="space-y-4">
                        {currentResults.classXII.results.map((student, index) => (
                          <div key={index} className="bg-gray-50 p-6 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-lg font-semibold text-gray-900">{student.name}</h4>
                              <span className="text-2xl font-bold text-purple-600">{student.percentage}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No results available.</div>
            </div>
          )}
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Achievements</h2>
            <p className="text-xl text-gray-600">Celebrating our students' outstanding performance</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <Icon size={32} className="text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-grow bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                      <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Celebrate Success with Us</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join Buds Garden and be part of our legacy of academic achievement
          </p>

          <div onClick={() => navigate('/contact')} className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Users size={20} className="mr-2" />
              Admission Inquiry
            </button>
            {/* <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
              <Download size={20} className="mr-2" />
              Download Prospectus
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
