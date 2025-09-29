import React from 'react';
import { Palette, Music, Drama, Feather, Camera, Brush, Clock, Users, Award, Calendar } from 'lucide-react';

const CreativeActivities = () => {
  const creativePrograms = [
    {
      name: 'Visual Arts',
      icon: Palette,
      description: 'Painting, drawing, sculpture, and mixed media art',
      instructor: 'Ms. Kavita Agarwal',
      schedule: 'Mon, Wed, Fri - 4:00 PM',
      ageGroups: ['6-12 years', '13+ years'],
      achievements: ['State Art Competition Winners', 'Regional Exhibition Participants'],
      activities: ['Oil Painting', 'Watercolors', 'Sketching', 'Clay Modeling', 'Digital Art'],
    },
    {
      name: 'Music Program',
      icon: Music,
      description: 'Vocal and instrumental music training',
      instructor: 'Mr. Ravi Shankar',
      schedule: 'Tue, Thu, Sat - 4:30 PM',
      ageGroups: ['All ages'],
      achievements: ['Inter-School Music Competition Winners', 'Classical Music Festival Performers'],
      activities: ['Vocal Training', 'Guitar', 'Piano', 'Tabla', 'Flute'],
    },
    {
      name: 'Drama & Theater',
      icon: Drama,
      description: 'Acting, stage performance, and theater arts',
      instructor: 'Mrs. Priya Mehta',
      schedule: 'Wed, Fri - 5:00 PM',
      ageGroups: ['8+ years'],
      achievements: ['Best Drama Performance 2023', 'Regional Theater Festival Winners'],
      activities: ['Acting Workshops', 'Script Writing', 'Stage Design', 'Voice Modulation', 'Improvisation'],
    },
    {
      name: 'Creative Writing',
      icon: Feather,
      description: 'Poetry, short stories, and literary expression',
      instructor: 'Mr. Amit Verma',
      schedule: 'Mon, Thu - 4:00 PM',
      ageGroups: ['10+ years'],
      achievements: ['Published Young Authors', 'Literary Magazine Contributors'],
      activities: ['Poetry Writing', 'Short Stories', 'Essay Writing', 'Journalism', 'Creative Essays'],
    },
    {
      name: 'Photography',
      icon: Camera,
      description: 'Digital photography and visual storytelling',
      instructor: 'Ms. Neha Singh',
      schedule: 'Sat, Sun - 10:00 AM',
      ageGroups: ['12+ years'],
      achievements: ['Photography Contest Winners', 'Student Exhibition Displays'],
      activities: ['Digital Photography', 'Photo Editing', 'Portrait Photography', 'Nature Photography', 'Event Coverage'],
    },
    {
      name: 'Crafts & Design',
      icon: Brush,
      description: 'Handicrafts, design, and creative projects',
      instructor: 'Mrs. Sunita Joshi',
      schedule: 'Tue, Fri - 4:30 PM',
      ageGroups: ['All ages'],
      achievements: ['Craft Fair Winners', 'Design Competition Awards'],
      activities: ['Paper Crafts', 'Textile Design', 'Jewelry Making', 'Wood Work', 'Recycled Art'],
    },
  ];

  const upcomingEvents = [
    {
      date: 'March 18, 2024',
      event: 'Annual Art Exhibition',
      type: 'Visual Arts',
      description: 'Student artwork display and competition',
      time: '10:00 AM - 6:00 PM',
    },
    {
      date: 'March 25, 2024',
      event: 'Spring Music Concert',
      type: 'Music',
      description: 'Student musical performances and recitals',
      time: '7:00 PM - 9:00 PM',
    },
    {
      date: 'April 8, 2024',
      event: 'Drama Festival',
      type: 'Theater',
      description: 'Student plays and theatrical performances',
      time: '6:00 PM - 9:00 PM',
    },
    {
      date: 'April 15, 2024',
      event: 'Literary Meet',
      type: 'Writing',
      description: 'Poetry recitation and story reading session',
      time: '4:00 PM - 6:00 PM',
    },
  ];

  const facilities = [
    {
      name: 'Art Studio',
      description: 'Well-equipped art studio with natural lighting and professional supplies',
      equipment: ['Easels and canvases', 'Professional art supplies', 'Pottery wheel', 'Kiln for ceramics'],
    },
    {
      name: 'Music Room',
      description: 'Acoustically designed music room with various instruments',
      equipment: ['Piano and keyboard', 'Guitar collection', 'Traditional instruments', 'Recording equipment'],
    },
    {
      name: 'Theater Hall',
      description: '200-seat auditorium with professional stage and lighting',
      equipment: ['Stage with curtains', 'Professional lighting', 'Sound system', 'Costume storage'],
    },
    {
      name: 'Digital Media Lab',
      description: 'Computer lab equipped with creative software and equipment',
      equipment: ['High-end computers', 'Graphics tablets', 'Professional cameras', 'Video editing software'],
    },
  ];

  const successStories = [
    {
      name: 'Anya Sharma',
      achievement: 'Won State Level Painting Competition',
      program: 'Visual Arts',
      quote: 'The art program helped me discover my passion and develop my skills professionally.',
    },
    {
      name: 'Arjun Patel',
      achievement: 'Selected for National Music Competition',
      program: 'Music',
      quote: 'Learning music here has given me confidence and opened new opportunities.',
    },
    {
      name: 'Priya Gupta',
      achievement: 'Published Young Author',
      program: 'Creative Writing',
      quote: 'The writing workshops inspired me to become a published author at age 16.',
    },
  ];

  const workshops = [
    {
      title: 'Weekend Art Workshop',
      description: 'Intensive 2-day workshop covering various art techniques',
      duration: 'Saturday-Sunday, 10 AM - 4 PM',
      fee: '₹500 per participant',
    },
    {
      title: 'Summer Music Camp',
      description: '15-day comprehensive music training program',
      duration: 'May 1-15, 9 AM - 12 PM',
      fee: '₹2,500 per participant',
    },
    {
      title: 'Drama Intensive',
      description: '1-week theater workshop with professional directors',
      duration: 'Spring Break, 2 PM - 6 PM',
      fee: '₹1,200 per participant',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Palette size={48} className="mr-4" />
            <h1 className="text-5xl font-bold">Creative Activities & Arts</h1>
          </div>
          <p className="text-xl text-purple-100">
            Nurturing artistic talents and creative expression through comprehensive arts programs
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Creative Programs</h2>
            <p className="text-xl text-gray-600">Explore various forms of artistic expression with expert guidance</p>
          </div>

          <div className="space-y-8">
            {creativePrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon size={32} className="text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                        <p className="text-gray-600 text-sm">{program.description}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Program Details</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Users size={14} className="mr-2 text-purple-600" />
                          <span>{program.instructor}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-2 text-green-600" />
                          <span>{program.schedule}</span>
                        </div>
                        <div>
                          <strong>Age Groups:</strong> {program.ageGroups.join(', ')}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Activities</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.activities.map((activity, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Achievements</h4>
                      <ul className="space-y-1">
                        {program.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <Award size={12} className="text-yellow-500 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Creative Spaces & Facilities</h2>
            <p className="text-xl text-gray-600">Inspiring environments equipped with professional tools and equipment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.name}</h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Equipment & Resources:</h4>
                  <ul className="space-y-1">
                    {facility.equipment.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">Celebrating the achievements of our talented students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Photo</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                <p className="text-purple-600 font-semibold mb-2">{story.achievement}</p>
                <p className="text-sm text-gray-500 mb-4">{story.program}</p>
                
                <blockquote className="text-gray-600 italic">
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Creative Events</h2>
            <p className="text-xl text-gray-600">Join us for these exciting artistic showcases and competitions</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Calendar size={20} className="text-purple-600 mr-3" />
                    <span className="text-purple-600 font-semibold">{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.type === 'Visual Arts' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'Music' ? 'bg-green-100 text-green-800' :
                      event.type === 'Theater' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.event}</h3>
                <p className="text-gray-600 mb-2">{event.description}</p>
                
                <div className="flex items-center text-gray-500">
                  <Clock size={16} className="mr-2" />
                  <span className="text-sm">{event.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Workshops */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Workshops</h2>
            <p className="text-xl text-gray-600">Intensive training programs for dedicated students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{workshop.title}</h3>
                <p className="text-gray-600 mb-4">{workshop.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{workshop.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Fee:</span>
                    <span className="font-medium text-purple-600">{workshop.fee}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Creative Activities */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Benefits of Creative Activities</h2>
            <p className="text-xl text-purple-100">How arts education enhances overall development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cognitive Development</h3>
              <p className="text-purple-100">Enhances problem-solving and critical thinking skills</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💭</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Thinking</h3>
              <p className="text-purple-100">Develops imagination and innovative thinking abilities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Emotional Expression</h3>
              <p className="text-purple-100">Provides healthy outlets for emotions and feelings</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Skills</h3>
              <p className="text-purple-100">Builds confidence and communication abilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Unleash Your Creative Potential</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our creative programs and discover your artistic talents. Registration is now open for all programs!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              <Users size={20} className="mr-2" />
              Register for Programs
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-colors">
              <Calendar size={20} className="mr-2" />
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeActivities;