import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Palette, ArrowRight, Calendar, Users } from 'lucide-react';

const Activities = () => {
  const activityStats = [
    { number: '50+', label: 'Activity Programs' },
    { number: '25+', label: 'Sports Events' },
    { number: '15+', label: 'Cultural Activities' },
    { number: '100%', label: 'Student Participation' },
  ];

  const upcomingEvents = [
    {
      date: 'March 15, 2024',
      title: 'Inter-House Basketball Tournament',
      type: 'Sports',
      description: 'Annual basketball competition between all four houses',
    },
    {
      date: 'March 22, 2024',
      title: 'Art & Craft Exhibition',
      type: 'Creative',
      description: 'Student artwork and handicraft display for parents',
    },
    {
      date: 'April 5, 2024',
      title: 'Science Model Competition',
      type: 'Academic',
      description: 'Students showcase innovative science projects',
    },
    {
      date: 'April 12, 2024',
      title: 'Annual Sports Day',
      type: 'Sports',
      description: 'Track and field events, team sports, and athletic competitions',
    },
  ];

  const achievements = [
    {
      category: 'Sports',
      achievements: [
        'State Champions - Basketball (Boys) 2023',
        'District Winners - Athletics (Girls) 2023',
        'Regional Champions - Cricket (Under-17) 2023',
        'Inter-School Football Trophy 2023',
      ],
    },
    {
      category: 'Cultural',
      achievements: [
        'First Prize - Inter-School Drama Competition 2023',
        'Best Classical Music Performance - Regional Level',
        'Winner - State Level Art Competition',
        'Excellence Award - Dance Festival 2023',
      ],
    },
    {
      category: 'Academic',
      achievements: [
        'National Science Olympiad - 15 Qualifiers',
        'Mathematics Competition - State Toppers',
        'Debate Championship - Regional Winners',
        'Quiz Competition - District Champions',
      ],
    },
  ];

  const activityCategories = [
    {
      icon: Trophy,
      title: 'Physical Activities',
      description: 'Sports, games, and physical fitness programs to develop strength, coordination, and teamwork.',
      link: '/activities/physical',
      color: 'bg-blue-600',
      activities: ['Basketball', 'Cricket', 'Football', 'Athletics', 'Swimming', 'Badminton'],
    },
    // {
    //   icon: Palette,
    //   title: 'Creative Activities',
    //   description: 'Arts, music, drama, and creative expression programs to nurture artistic talents.',
    //   link: '/activities/creative',
    //   color: 'bg-purple-600',
    //   activities: ['Painting', 'Music', 'Drama', 'Dance', 'Sculpture', 'Creative Writing'],
    // },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Student Activities</h1>
          <p className="text-xl text-orange-100">
            Comprehensive programs for physical development, creative expression, and character building
          </p>
        </div>
      </section>

      {/* Activity Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Activity Programs</h2>
            <p className="text-xl text-gray-600">Developing well-rounded individuals through diverse activities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {activityStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Activity Categories */}
          <div className="grid grid-cols-1  gap-8">
            {activityCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  key={index}
                  to={category.link}
                  className="group bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-orange-500 hover:shadow-lg transition-all"
                >
                  <div className={`${category.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon size={48} />
                      <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-blue-100">{category.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Popular Activities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.activities.map((activity, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Don't miss these exciting activities and competitions</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Calendar size={20} className="text-orange-600 mr-2" />
                    <span className="text-orange-600 font-semibold">{event.date}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.type === 'Sports' ? 'bg-blue-100 text-blue-800' :
                    event.type === 'Creative' ? 'bg-purple-100 text-purple-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Achievements</h2>
            <p className="text-xl text-gray-600">Celebrating our students' outstanding performance in various activities</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {achievements.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{category.category} Achievements</h3>
                <ul className="space-y-3">
                  {category.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <Trophy size={16} className="text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Benefits */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Activities Matter</h2>
            <p className="text-xl text-blue-100">The importance of extra-curricular activities in student development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Teamwork Skills</h3>
              <p className="text-blue-100">Learning to collaborate and work effectively in groups</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Leadership Qualities</h3>
              <p className="text-blue-100">Developing confidence and leadership abilities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Expression</h3>
              <p className="text-blue-100">Nurturing artistic talents and creative thinking</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">💪</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Physical Fitness</h3>
              <p className="text-blue-100">Promoting healthy lifestyle and physical well-being</p>
            </div>
          </div>
        </div>
      </section>

      {/* Participation Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Participate</h2>
            <p className="text-xl text-gray-600 mb-8">
              All students are encouraged to participate in various activities throughout the academic year. 
              Activities are scheduled after regular class hours and on weekends.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Registration Process</h3>
                <ul className="text-gray-600 space-y-2 text-left">
                  <li>• Registration forms available at the activity office</li>
                  <li>• Submit completed forms with parent's consent</li>
                  <li>• Attend orientation session for selected activities</li>
                  <li>• Follow regular practice schedules</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Activity Timings</h3>
                <ul className="text-gray-600 space-y-2 text-left">
                  <li>• Weekdays: 4:00 PM - 6:00 PM</li>
                  <li>• Saturdays: 2:00 PM - 5:00 PM</li>
                  <li>• Special events: As per schedule</li>
                  <li>• Competition training: Extended hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;