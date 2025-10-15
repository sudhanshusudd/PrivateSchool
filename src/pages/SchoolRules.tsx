import React from 'react';
import { FileText, Clock, Shield, Users, BookOpen, AlertCircle } from 'lucide-react';

const SchoolRules = () => {
  const ruleCategories = [
    {
      icon: Clock,
      title: 'Attendance & Punctuality',
      rules: [
        'Regular attendance is mandatory. Minimum 85% attendance required for appearing in examinations.',
        'Students must arrive at school by 8:00 AM. Late arrivals will be marked and parents notified.',
        'Students leaving early must have prior written permission from parents.',
        'Repeated absence without valid reason may result in disciplinary action.',
        'Medical certificates required for absence exceeding 3 consecutive days.',
      ],
    },
    {
      icon: Shield,
      title: 'Uniform & Dress Code',
      rules: [
        'School uniform is mandatory for all students on all school days.',
        'Sports uniform required during PE classes and sports activities.',
        'Proper grooming standards must be maintained at all times.',
        'Students should wear school ID cards prominently.',
        'Inappropriate accessories, makeup, or hairstyles are not permitted.',
      ],
    },
    {
      icon: BookOpen,
      title: 'Academic Conduct',
      rules: [
        'Complete all assignments and homework on time.',
        'Maintain discipline during class hours and follow teacher instructions.',
        'Academic dishonesty, including copying and plagiarism, is strictly prohibited.',
        'Bring required textbooks and stationery to all classes.',
        'Participate actively in class discussions and group activities.',
      ],
    },
    {
      icon: Users,
      title: 'Behavior & Discipline',
      rules: [
        'Treat all faculty, staff, and fellow students with respect and courtesy.',
        'Bullying, harassment, or discrimination of any kind will not be tolerated.',
        'Use appropriate language and maintain proper behavior on school premises.',
        'Follow instructions from teachers and school staff immediately.',
        'Report any incidents of misconduct to the appropriate authorities.',
      ],
    },
  ];

  const generalRules = [
    'Students are not allowed to bring mobile phones, electronic devices, or valuable items to school.',
    'Damage to school property will result in disciplinary action and compensation charges.',
    'Students must use designated pathways and are not permitted in restricted areas.',
    'Food sharing among students is discouraged for health and safety reasons.',
    'Permission required for organizing any events or celebrations within school premises.',
    'Students must maintain cleanliness in classrooms, corridors, and common areas.',
    'Emergency procedures and fire drill instructions must be followed strictly.',
    'Parents must inform the school immediately about any change in contact information.',
  ];

  const consequences = [
    {
      level: 'First Warning',
      description: 'Verbal warning and counseling session',
      actions: ['Student counseling', 'Parent notification', 'Behavior monitoring'],
    },
    {
      level: 'Second Warning',
      description: 'Written warning and parent meeting',
      actions: ['Written warning letter', 'Mandatory parent meeting', 'Behavioral contract'],
    },
    {
      level: 'Suspension',
      description: 'Temporary suspension from school',
      actions: ['1-3 days suspension', 'Disciplinary committee review', 'Counseling sessions'],
    },
    {
      level: 'Serious Violations',
      description: 'Expulsion or transfer recommendation',
      actions: ['Permanent expulsion', 'Transfer certificate', 'Legal action if required'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <FileText size={48} className="mr-4" />
            <h1 className="text-5xl font-bold">School Rules & Code of Conduct</h1>
          </div>
          <p className="text-xl text-red-100">
            Guidelines for maintaining a safe, respectful, and conducive learning environment
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Commitment to Excellence</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Buds Garden School is committed to providing a safe, inclusive, and supportive environment 
              where all students can learn and grow. These rules and guidelines are designed to ensure 
              mutual respect, academic integrity, and personal responsibility among all members of our 
              school community.
            </p>
          </div>
        </div>
      </section>

      {/* Rule Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Code of Conduct</h2>
            <p className="text-xl text-gray-600">Specific guidelines for different aspects of school life</p>
          </div>

          <div className="space-y-8">
            {ruleCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <Icon size={32} className="text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.rules.map((rule, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">General School Rules</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-center mb-2">
                <AlertCircle size={24} className="text-yellow-600 mr-2" />
                <h3 className="text-lg font-semibold text-yellow-800">Important Notice</h3>
              </div>
              <p className="text-yellow-700">
                All students and parents are expected to read and understand these rules thoroughly. 
                Adherence to these guidelines is essential for maintaining the school's standards of excellence.
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

      {/* Disciplinary Actions */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Disciplinary Procedure</h2>
              <p className="text-xl text-gray-600">Progressive discipline system for rule violations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consequences.map((consequence, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">{consequence.level}</h3>
                  <p className="text-gray-700 mb-4">{consequence.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Actions Taken:</h4>
                    <ul className="space-y-1">
                      {consequence.actions.map((action, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parent Responsibilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Parent Responsibilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Communication</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Attend parent-teacher meetings regularly</li>
                  <li>• Respond promptly to school communications</li>
                  <li>• Update contact information as needed</li>
                  <li>• Discuss school progress with your child</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ensure regular school attendance</li>
                  <li>• Monitor homework completion</li>
                  <li>• Reinforce school rules at home</li>
                  <li>• Support school policies and decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About School Rules?</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions or need clarification about our school rules and policies, 
            please don't hesitate to contact us.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Academic Office</h3>
              <p className="text-gray-300">+91 123-456-7891</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Discipline Committee</h3>
              <p className="text-gray-300">discipline@budsgardenschool.edu.in</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolRules;