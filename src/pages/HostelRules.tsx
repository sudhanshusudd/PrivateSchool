import React from 'react';
import { FileText, Clock, Shield, Users, Home, AlertTriangle } from 'lucide-react';

const HostelRules = () => {
  const ruleCategories = [
    {
      icon: Clock,
      title: 'Timings & Schedule',
      rules: [
        'Wake up time: 6:00 AM (Monday to Saturday), 7:00 AM (Sunday)',
        'Morning study hours: 6:30 AM - 7:30 AM',
        'Breakfast: 7:30 AM - 9:00 AM',
        'College hours: 9:00 AM - 4:00 PM',
        'Lunch: 12:30 PM - 2:00 PM',
        'Evening study hours: 4:30 PM - 7:00 PM',
        'Dinner: 7:00 PM - 9:00 PM',
        'Night study hours: 9:00 PM - 10:30 PM',
        'Lights out: 11:00 PM (10:30 PM for junior students)',
      ],
    },
    {
      icon: Home,
      title: 'Room & Accommodation',
      rules: [
        'Students must maintain cleanliness of their rooms and common areas',
        'Room inspection will be conducted weekly by hostel staff',
        'Damage to hostel property will result in financial liability',
        'Room change requests must be submitted to the warden with valid reasons',
        'Students are responsible for their personal belongings',
        'Sharing of rooms with day scholars or outsiders is strictly prohibited',
        'Room keys must not be duplicated or shared with others',
        'Electrical appliances are allowed only with prior permission',
      ],
    },
    {
      icon: Shield,
      title: 'Discipline & Conduct',
      rules: [
        'Ragging in any form is strictly prohibited and punishable',
        'Smoking, drinking alcohol, and use of drugs are banned',
        'Fighting, quarreling, and use of abusive language is not tolerated',
        'Students must treat hostel staff and fellow residents with respect',
        'Loud music or noise that disturbs others is not allowed',
        'Gambling and betting activities are strictly forbidden',
        'Political activities and demonstrations are not permitted',
        'Students must follow the dress code within hostel premises',
      ],
    },
    {
      icon: Users,
      title: 'Visitor Policy',
      rules: [
        'Visitors are allowed only during designated visiting hours (10 AM - 6 PM)',
        'All visitors must register at the security desk with valid ID',
        'Opposite gender visitors are not allowed in residential areas',
        'Parents and guardians can visit with prior intimation to wardens',
        'Overnight stay of visitors is not permitted',
        'Students must accompany their visitors at all times',
        'Maximum 2 visitors allowed per student at a time',
        'Visitors must leave the premises before 6:00 PM',
      ],
    },
  ];

  const generalRules = [
    'Attendance at morning assembly and evening roll call is mandatory',
    'Students must inform wardens before leaving the hostel premises',
    'Mobile phones are allowed but with usage restrictions during study hours',
    'Washing machines and common facilities must be used responsibly',
    'Students must participate in cleanliness drives and community activities',
    'Late night outings require prior permission and valid reasons',
    'Food items from outside should not be stored in rooms for extended periods',
    'Students must cooperate with hostel administration and follow instructions',
  ];

  const mealRules = [
    {
      title: 'Dining Hall Etiquette',
      rules: [
        'Maintain proper dress code in the dining hall',
        'Food wastage is strictly discouraged',
        'Use dining hall only during meal times',
        'Clean your table after eating',
        'No outside food in the dining area',
        'Respect the dining hall staff',
      ],
    },
    {
      title: 'Meal Timings',
      rules: [
        'Breakfast: 7:30 AM - 9:00 AM',
        'Lunch: 12:30 PM - 2:00 PM',
        'Evening Snacks: 5:00 PM - 6:00 PM',
        'Dinner: 7:00 PM - 9:00 PM',
        'Late meal facility available with prior notice',
        'Special diet arrangements for medical reasons',
      ],
    },
  ];

  const disciplinaryActions = [
    {
      violation: 'Minor Violations',
      examples: ['Late return', 'Messy room', 'Minor disturbance'],
      consequences: ['Verbal warning', 'Room cleaning duty', 'Parent notification'],
    },
    {
      violation: 'Serious Violations',
      examples: ['Damage to property', 'Fighting', 'Violation of visitor policy'],
      consequences: ['Written warning', 'Fine/compensation', 'Temporary suspension'],
    },
    {
      violation: 'Major Violations',
      examples: ['Ragging', 'Substance abuse', 'Theft'],
      consequences: ['Hostel expulsion', 'Police complaint', 'College disciplinary action'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <FileText size={48} className="mr-4" />
            <h1 className="text-5xl font-bold">Hostel Rules & Regulations</h1>
          </div>
          <p className="text-xl text-indigo-100">
            Guidelines for a harmonious and disciplined hostel life
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hostel Code of Conduct</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our hostel provides a safe and conducive environment for academic and personal growth. 
              These rules ensure the well-being, safety, and comfort of all residents. Adherence to 
              these regulations is mandatory for all hostel residents.
            </p>
          </div>
        </div>
      </section>

      {/* Main Rules Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Rules & Guidelines</h2>
            <p className="text-xl text-gray-600">Comprehensive guidelines for all aspects of hostel life</p>
          </div>

          <div className="space-y-8">
            {ruleCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                      <Icon size={32} className="text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {category.rules.map((rule, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700">{rule}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* General Rules */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">General Guidelines</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-center mb-2">
                <AlertTriangle size={24} className="text-yellow-600 mr-2" />
                <h3 className="text-lg font-semibold text-yellow-800">Important Notice</h3>
              </div>
              <p className="text-yellow-700">
                Violation of any hostel rule may result in disciplinary action including warning, 
                fine, or expulsion from the hostel. All residents are expected to maintain the 
                dignity and reputation of the institution.
              </p>
            </div>

            <div className="space-y-4">
              {generalRules.map((rule, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meal Rules */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Dining Hall Rules</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mealRules.map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disciplinary Actions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Disciplinary Framework</h2>
              <p className="text-xl text-gray-600">Consequences for rule violations</p>
            </div>

            <div className="space-y-6">
              {disciplinaryActions.map((action, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">{action.violation}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {action.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 text-sm">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Consequences:</h4>
                      <ul className="space-y-1">
                        {action.consequences.map((consequence, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 text-sm">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                            {consequence}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Procedures */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Emergency Procedures</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-red-600 mb-4">Medical Emergency</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Immediately inform the nearest warden or security guard</li>
                  <li>• Contact the hostel medical officer</li>
                  <li>• Call emergency services if required (102/108)</li>
                  <li>• Inform parents/guardians as soon as possible</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-red-600 mb-4">Fire Emergency</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Raise alarm and alert other residents</li>
                  <li>• Follow evacuation procedures</li>
                  <li>• Assemble at designated safety points</li>
                  <li>• Do not use elevators during evacuation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Hostel Administration Contacts</h2>
          <p className="text-xl text-gray-300 mb-8">
            For any queries, complaints, or emergencies related to hostel rules
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Chief Warden</h3>
              <p className="text-gray-300 mb-1">Dr. Ramesh Gupta</p>
              <p className="text-gray-300 mb-1">+91 123-456-7896</p>
              <p className="text-gray-300">warden@budsgardenschool.edu.in</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Boys Hostel</h3>
              <p className="text-gray-300 mb-1">Mr. Suresh Patel</p>
              <p className="text-gray-300 mb-1">+91 123-456-7894</p>
              <p className="text-gray-300">boys.hostel@budsgardenschool.edu.in</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Girls Hostel</h3>
              <p className="text-gray-300 mb-1">Mrs. Meena Sharma</p>
              <p className="text-gray-300 mb-1">+91 123-456-7895</p>
              <p className="text-gray-300">girls.hostel@budsgardenschool.edu.in</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HostelRules;