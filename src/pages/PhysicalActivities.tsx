import React from 'react';
import { Trophy, Clock, Users, Target, Award, Calendar, MapPin } from 'lucide-react';

const PhysicalActivities = () => {
  const sportsPrograms = [
    {
      name: 'Basketball',
      level: 'Beginner to Advanced',
      schedule: 'Mon, Wed, Fri - 4:30 PM',
      coach: 'Mr. Rajesh Singh',
      achievements: ['State Champions 2023', 'Inter-School Tournament Winners'],
      facilities: 'Indoor and outdoor courts with professional lighting',
    },
    {
      name: 'Cricket',
      level: 'All Levels',
      schedule: 'Tue, Thu, Sat - 4:00 PM',
      coach: 'Mr. Vikas Sharma',
      achievements: ['Regional Champions U-17', 'District Level Winners'],
      facilities: 'Full-size cricket ground with practice nets',
    },
    {
      name: 'Football',
      level: 'Beginner to Advanced',
      schedule: 'Mon, Wed, Fri - 5:00 PM',
      coach: 'Ms. Priya Patel',
      achievements: ['Inter-School Football Trophy', 'Best Team Spirit Award'],
      facilities: 'FIFA standard football field with floodlights',
    },
    {
      name: 'Swimming',
      level: 'All Levels',
      schedule: 'Daily - 6:00 AM & 4:00 PM',
      coach: 'Mr. Amit Kumar',
      achievements: ['Multiple individual state records', 'Swimming championship medals'],
      facilities: 'Olympic-size swimming pool with diving boards',
    },
    {
      name: 'Athletics',
      level: 'All Levels',
      schedule: 'Mon to Sat - 5:30 PM',
      coach: 'Mrs. Sunita Devi',
      achievements: ['District athletics meet winners', '15+ individual medals'],
      facilities: '400m track with field event areas',
    },
    {
      name: 'Badminton',
      level: 'Beginner to Advanced',
      schedule: 'Tue, Thu, Sat - 5:00 PM',
      coach: 'Mr. Suresh Gupta',
      achievements: ['State doubles champions', 'Inter-school tournament winners'],
      facilities: '8 indoor courts with professional flooring',
    },
  ];

  const upcomingEvents = [
    {
      date: 'March 15, 2024',
      event: 'Inter-House Basketball Championship',
      venue: 'School Basketball Court',
      time: '9:00 AM - 5:00 PM',
    },
    {
      date: 'March 22, 2024',
      event: 'Swimming Gala',
      venue: 'School Swimming Pool',
      time: '8:00 AM - 12:00 PM',
    },
    {
      date: 'April 5, 2024',
      event: 'Annual Athletics Meet',
      venue: 'School Athletics Track',
      time: '7:00 AM - 6:00 PM',
    },
    {
      date: 'April 12, 2024',
      event: 'Cricket Tournament Final',
      venue: 'Main Cricket Ground',
      time: '2:00 PM - 6:00 PM',
    },
  ];

  const facilities = [
    {
      name: 'Sports Complex',
      description: 'Multi-purpose indoor facility with courts for basketball, badminton, and table tennis',
      features: ['Air conditioned', 'Professional lighting', 'Spectator seating', 'Equipment storage'],
    },
    {
      name: 'Swimming Pool',
      description: 'Olympic-size pool with separate areas for beginners and advanced swimmers',
      features: ['Lane markers', 'Diving boards', 'Pool-side seating', 'Changing rooms'],
    },
    {
      name: 'Cricket Ground',
      description: 'Full-size cricket field with practice nets and pavilion',
      features: ['Natural grass pitch', 'Floodlights', 'Pavilion', 'Practice nets'],
    },
    {
      name: 'Athletics Track',
      description: '400-meter track with field event areas for comprehensive athletics training',
      features: ['8-lane track', 'Long jump pit', 'Shot put area', 'High jump setup'],
    },
  ];

  const coachingPrograms = [
    {
      program: 'Beginners Program',
      description: 'Introduction to sports fundamentals and basic skills development',
      duration: '3 months',
      ageGroup: '6-10 years',
    },
    {
      program: 'Intermediate Training',
      description: 'Skill enhancement and competitive preparation',
      duration: '6 months',
      ageGroup: '11-14 years',
    },
    {
      program: 'Advanced Coaching',
      description: 'Professional training for serious athletes and competition preparation',
      duration: 'Ongoing',
      ageGroup: '15+ years',
    },
    {
      program: 'Elite Squad',
      description: 'Intensive training for state and national level competitions',
      duration: 'Year-round',
      ageGroup: 'Selected athletes',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Trophy size={48} className="mr-4" />
            <h1 className="text-5xl font-bold">Physical Activities & Sports</h1>
          </div>
          <p className="text-xl text-blue-100">
            Comprehensive sports programs promoting fitness, teamwork, and competitive excellence
          </p>
        </div>
      </section>

      {/* Sports Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Sports Programs</h2>
            <p className="text-xl text-gray-600">Professional coaching and world-class facilities for all skill levels</p>
          </div>

          <div className="space-y-8">
            {sportsPrograms.map((sport, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{sport.name}</h3>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <Target size={16} className="mr-2 text-blue-600" />
                        <span>Level: {sport.level}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2 text-green-600" />
                        <span>Schedule: {sport.schedule}</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-2 text-purple-600" />
                        <span>Coach: {sport.coach}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Recent Achievements</h4>
                    <ul className="space-y-2">
                      {sport.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center">
                          <Award size={14} className="text-yellow-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Facilities</h4>
                    <p className="text-gray-600 text-sm">{sport.facilities}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Sports Facilities</h2>
            <p className="text-xl text-gray-600">State-of-the-art infrastructure for optimal sports performance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.name}</h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Coaching Programs</h2>
            <p className="text-xl text-gray-600">Structured training programs for all ages and skill levels</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coachingPrograms.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.program}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Age Group:</span>
                    <span className="font-medium">{program.ageGroup}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Sports Events</h2>
            <p className="text-xl text-gray-600">Mark your calendars for these exciting competitions</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Calendar size={20} className="text-blue-600 mr-3" />
                    <span className="text-blue-600 font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.event}</h3>
                
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-2" />
                  <span>{event.venue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Health & Safety</h2>
              <p className="text-xl text-gray-600">We prioritize student safety and well-being in all activities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Safety Measures</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Qualified first aid personnel present during all activities
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Regular equipment safety checks and maintenance
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Comprehensive insurance coverage for all participants
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Emergency medical support and nearby hospital coordination
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Health Benefits</h3>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Improved cardiovascular fitness and endurance
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Enhanced muscle strength and flexibility
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Better coordination and motor skills development
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Stress relief and improved mental health
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Sports Programs</h2>
          <p className="text-xl text-blue-100 mb-8">
            Registration for new sports programs is now open. Don't miss the opportunity to be part of our winning teams!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Users size={20} className="mr-2" />
              Register Now
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              <MapPin size={20} className="mr-2" />
              Visit Facilities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhysicalActivities;