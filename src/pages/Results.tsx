import React, { useState } from 'react';
import { Trophy, Download, Calendar, TrendingUp, Award, Users, Search, Filter } from 'lucide-react';

const Results = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedClass, setSelectedClass] = useState('all');

  const years = ['2024', '2023', '2022', '2021', '2020'];
  const classes = [
    { value: 'all', label: 'All Classes' },
    { value: 'X', label: 'Class X' },
    { value: 'XII', label: 'Class XII' },
  ];

  const resultsData = {
    '2024': {
      'X': {
        passRate: '100%',
        firstDivision: '95%',
        schoolToppers: 8,
        subjectToppers: 25,
        results: [
          { name: 'Aarav Sharma', percentage: '98.6%', rank: '1st', subjects: 'Mathematics, Science, English' },
          { name: 'Priya Patel', percentage: '97.8%', rank: '2nd', subjects: 'Science, Mathematics, Hindi' },
          { name: 'Rohit Kumar', percentage: '96.2%', rank: '3rd', subjects: 'Mathematics, Social Science' },
        ],
      },
      'XII': {
        passRate: '100%',
        firstDivision: '92%',
        schoolToppers: 5,
        subjectToppers: 18,
        results: [
          { name: 'Ananya Singh', percentage: '99.2%', rank: '1st', subjects: 'Physics, Chemistry, Mathematics' },
          { name: 'Karan Gupta', percentage: '98.4%', rank: '2nd', subjects: 'Physics, Mathematics, Chemistry' },
          { name: 'Sneha Joshi', percentage: '97.6%', rank: '3rd', subjects: 'Biology, Chemistry, Physics' },
        ],
      },
    },
    '2023': {
      'X': {
        passRate: '100%',
        firstDivision: '93%',
        schoolToppers: 6,
        subjectToppers: 22,
        results: [
          { name: 'Arjun Reddy', percentage: '97.4%', rank: '1st', subjects: 'Mathematics, Science, English' },
          { name: 'Kavya Nair', percentage: '96.8%', rank: '2nd', subjects: 'Science, Mathematics, Social Science' },
          { name: 'Vikash Singh', percentage: '95.6%', rank: '3rd', subjects: 'Mathematics, Hindi, Science' },
        ],
      },
      'XII': {
        passRate: '100%',
        firstDivision: '90%',
        schoolToppers: 4,
        subjectToppers: 16,
        results: [
          { name: 'Riya Agarwal', percentage: '98.8%', rank: '1st', subjects: 'Chemistry, Physics, Mathematics' },
          { name: 'Aditya Sharma', percentage: '97.2%', rank: '2nd', subjects: 'Physics, Mathematics, Chemistry' },
          { name: 'Pooja Kumari', percentage: '96.4%', rank: '3rd', subjects: 'Biology, Chemistry, Physics' },
        ],
      },
    },
  };

  const achievements = [
    {
      year: '2024',
      title: 'Outstanding Academic Performance',
      description: 'School achieves 100% pass rate for the 5th consecutive year',
      icon: Trophy,
    },
    {
      year: '2024',
      title: 'State-Level Recognition',
      description: '15 students among state toppers in various subjects',
      icon: Award,
    },
    {
      year: '2023',
      title: 'Excellence in Sciences',
      description: 'Highest number of students cleared JEE and NEET entrance exams',
      icon: TrendingUp,
    },
    {
      year: '2023',
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
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Trophy size={48} className="mr-4" />
            <h1 className="text-5xl font-bold">CBSE Results</h1>
          </div>
          <p className="text-xl text-purple-100">
            Celebrating academic excellence and outstanding achievements of our students
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Pass Rate (2024)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">94%</div>
              <div className="text-gray-600">First Division</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">43</div>
              <div className="text-gray-600">Subject Toppers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">Years of 100% Pass Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Calendar size={20} className="text-gray-600" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <Filter size={20} className="text-gray-600" />
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {classes.map((cls) => (
                    <option key={cls.value} value={cls.value}>
                      {cls.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex items-center px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <Download size={16} className="mr-2" />
                Download Results
              </button>
              <button className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Search size={16} className="mr-2" />
                Search Student
              </button>
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Class X Results - {selectedYear}</h2>
                    
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
                              <div className="flex items-center space-x-4">
                                <span className="text-2xl font-bold text-purple-600">{student.percentage}</span>
                                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                                  {student.rank}
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-600">Subject Excellence: {student.subjects}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Class XII Results */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Class XII Results - {selectedYear}</h2>
                    
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
                              <div className="flex items-center space-x-4">
                                <span className="text-2xl font-bold text-purple-600">{student.percentage}</span>
                                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                                  {student.rank}
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-600">Subject Excellence: {student.subjects}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Single Class Results */
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Class {selectedClass} Results - {selectedYear}
                  </h2>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{currentResults.passRate}</div>
                      <div className="text-gray-600">Pass Rate</div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600 mb-2">{currentResults.firstDivision}</div>
                      <div className="text-gray-600">First Division</div>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-2">{currentResults.schoolToppers}</div>
                      <div className="text-gray-600">School Toppers</div>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-2">{currentResults.subjectToppers}</div>
                      <div className="text-gray-600">Subject Toppers</div>
                    </div>
                  </div>

                  {/* Top Performers */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Top Performers</h3>
                    <div className="space-y-4">
                      {currentResults.results.map((student, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">{student.name}</h4>
                            <div className="flex items-center space-x-4">
                              <span className="text-2xl font-bold text-purple-600">{student.percentage}</span>
                              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                                {student.rank}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-600">Subject Excellence: {student.subjects}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No results available for the selected criteria.</div>
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
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Users size={20} className="mr-2" />
              Admission Inquiry
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
              <Download size={20} className="mr-2" />
              Download Prospectus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;