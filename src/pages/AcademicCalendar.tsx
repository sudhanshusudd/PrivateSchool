import React, { useState } from 'react';
import { Calendar, Download, Clock, BookOpen, Trophy, FileText } from 'lucide-react';
import Hero from '../components/Hero';

const AcademicCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');

  const months = [
    'all', 'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December', 'January', 'February', 'March'
  ];

  const events = [
    {
      date: 'April 1, 2024',
      month: 'April',
      title: 'New Academic Session Begins',
      type: 'academic',
      description: 'First day of classes for all students',
      icon: BookOpen,
    },
    {
      date: 'April 15, 2024',
      month: 'April',
      title: 'Parent-Teacher Meeting',
      type: 'meeting',
      description: 'Meet with teachers to discuss student progress',
      icon: FileText,
    },
    {
      date: 'May 10-12, 2024',
      month: 'May',
      title: 'Annual Sports Day',
      type: 'event',
      description: 'Inter-house sports competitions and athletics',
      icon: Trophy,
    },
    {
      date: 'May 20-30, 2024',
      month: 'May',
      title: 'First Term Examinations',
      type: 'exam',
      description: 'First terminal examinations for all classes',
      icon: FileText,
    },
    {
      date: 'June 1-15, 2024',
      month: 'June',
      title: 'Summer Vacation',
      type: 'holiday',
      description: 'Summer break for students and staff',
      icon: Calendar,
    },
    {
      date: 'July 5, 2024',
      month: 'July',
      title: 'Second Term Begins',
      type: 'academic',
      description: 'Classes resume after summer vacation',
      icon: BookOpen,
    },
    {
      date: 'August 15, 2024',
      month: 'August',
      title: 'Independence Day Celebration',
      type: 'event',
      description: 'National holiday with cultural programs',
      icon: Trophy,
    },
    {
      date: 'September 5, 2024',
      month: 'September',
      title: "Teachers' Day",
      type: 'event',
      description: 'Celebration honoring our dedicated teachers',
      icon: Trophy,
    },
    {
      date: 'October 2-10, 2024',
      month: 'October',
      title: 'Dussehra Holidays',
      type: 'holiday',
      description: 'Festival holidays for students',
      icon: Calendar,
    },
    {
      date: 'October 20, 2024',
      month: 'October',
      title: 'Science Exhibition',
      type: 'event',
      description: 'Student science projects and innovations',
      icon: Trophy,
    },
    {
      date: 'November 5-15, 2024',
      month: 'November',
      title: 'Diwali Holidays',
      type: 'holiday',
      description: 'Festival of lights celebration break',
      icon: Calendar,
    },
    {
      date: 'December 1-20, 2024',
      month: 'December',
      title: 'Second Term Examinations',
      type: 'exam',
      description: 'Half-yearly examinations for all classes',
      icon: FileText,
    },
    {
      date: 'December 21-31, 2024',
      month: 'December',
      title: 'Winter Vacation',
      type: 'holiday',
      description: 'Winter break and Christmas holidays',
      icon: Calendar,
    },
    {
      date: 'January 1, 2025',
      month: 'January',
      title: 'New Year Holiday',
      type: 'holiday',
      description: 'New Year celebration',
      icon: Calendar,
    },
    {
      date: 'January 15, 2025',
      month: 'January',
      title: 'Third Term Begins',
      type: 'academic',
      description: 'Classes resume after winter vacation',
      icon: BookOpen,
    },
    {
      date: 'February 14, 2025',
      month: 'February',
      title: 'Annual Cultural Festival',
      type: 'event',
      description: 'Music, dance, and cultural performances',
      icon: Trophy,
    },
    {
      date: 'March 1-20, 2025',
      month: 'March',
      title: 'Annual Examinations',
      type: 'exam',
      description: 'Final examinations for all classes',
      icon: FileText,
    },
    {
      date: 'March 31, 2025',
      month: 'March',
      title: 'Academic Session Ends',
      type: 'academic',
      description: 'Last day of the academic year',
      icon: BookOpen,
    },
  ];

  const filteredEvents = selectedMonth === 'all' ? events : events.filter(event => event.month === selectedMonth);

  const getEventColor = (type: string) => {
    switch (type) {
      case 'academic': return 'bg-blue-100 border-blue-500 text-blue-800';
      case 'exam': return 'bg-red-100 border-red-500 text-red-800';
      case 'event': return 'bg-green-100 border-green-500 text-green-800';
      case 'holiday': return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      case 'meeting': return 'bg-purple-100 border-purple-500 text-purple-800';
      default: return 'bg-gray-100 border-gray-500 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Hero
        icon={<Calendar size={48} />}
        title="Academic Calendar 2024-25"
        subtitle="Important dates and events for the academic year"
        gradientFrom="from-teal-600"
        gradientTo="to-blue-600"
        textColor="text-teal-100"
      />

      {/* Download Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Academic Year 2024-25</h2>
              <p className="text-gray-600">Plan your year with our comprehensive academic calendar</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download size={20} className="mr-2" />
                Download PDF
              </button>
              <button className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Calendar size={20} className="mr-2" />
                Add to Google Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            <label className="text-gray-700 font-medium mr-4">Filter by Month:</label>
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedMonth === month
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {month === 'all' ? 'All Months' : month}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {filteredEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div key={index} className={`border-l-4 p-6 rounded-r-lg ${getEventColor(event.type)}`}>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${event.type === 'academic' ? 'bg-blue-200' :
                            event.type === 'exam' ? 'bg-red-200' :
                              event.type === 'event' ? 'bg-green-200' :
                                event.type === 'holiday' ? 'bg-yellow-200' :
                                  'bg-purple-200'
                          }`}>
                          <Icon size={24} className={
                            event.type === 'academic' ? 'text-blue-700' :
                              event.type === 'exam' ? 'text-red-700' :
                                event.type === 'event' ? 'text-green-700' :
                                  event.type === 'holiday' ? 'text-yellow-700' :
                                    'text-purple-700'
                          } />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">{event.title}</h3>
                          <span className="text-sm font-medium flex items-center">
                            <Clock size={16} className="mr-1" />
                            {event.date}
                          </span>
                        </div>
                        <p className="text-gray-700">{event.description}</p>
                        <div className="mt-2">
                          <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${event.type === 'academic' ? 'bg-blue-200 text-blue-800' :
                              event.type === 'exam' ? 'bg-red-200 text-red-800' :
                                event.type === 'event' ? 'bg-green-200 text-green-800' :
                                  event.type === 'holiday' ? 'bg-yellow-200 text-yellow-800' :
                                    'bg-purple-200 text-purple-800'
                            }`}>
                            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Quick Reference</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Term Dates</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>• First Term: April - May</li>
                  <li>• Second Term: July - December</li>
                  <li>• Third Term: January - March</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Examination Periods</h3>
                <ul className="space-y-2 text-green-800">
                  <li>• First Term: May 20-30</li>
                  <li>• Half-Yearly: Dec 1-20</li>
                  <li>• Annual: March 1-20</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Major Holidays</h3>
                <ul className="space-y-2 text-yellow-800">
                  <li>• Summer: June 1-15</li>
                  <li>• Diwali: Nov 5-15</li>
                  <li>• Winter: Dec 21-31</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Important Notes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">For Students</h3>
                <ul className="space-y-2 text-gray-300 text-left">
                  <li>• Attendance is mandatory for all scheduled events</li>
                  <li>• Examination dates are subject to change with prior notice</li>
                  <li>• Holiday homework will be assigned during breaks</li>
                  <li>• Special events may have dress code requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">For Parents</h3>
                <ul className="space-y-2 text-gray-300 text-left">
                  <li>• Parent-teacher meetings are mandatory</li>
                  <li>• School calendar updates will be communicated via SMS/email</li>
                  <li>• Fee payments must be completed before examination dates</li>
                  <li>• Emergency closures will be announced through official channels</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicCalendar;