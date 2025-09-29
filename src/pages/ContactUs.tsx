import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, Building } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: 'general',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Education Street', 'New Delhi, India 110001'],
      color: 'text-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 123-456-7890 (Main)', '+91 123-456-7891 (Admissions)'],
      color: 'text-green-600',
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@excellenceschool.edu.in', 'admissions@excellenceschool.edu.in'],
      color: 'text-purple-600',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 2:00 PM'],
      color: 'text-orange-600',
    },
  ];

  const departments = [
    {
      name: 'Admissions Office',
      phone: '+91 123-456-7891',
      email: 'admissions@excellenceschool.edu.in',
      head: 'Mrs. Sunita Sharma',
      description: 'New student admissions and enrollment queries',
    },
    {
      name: 'Academic Office',
      phone: '+91 123-456-7892',
      email: 'academic@excellenceschool.edu.in',
      head: 'Dr. Rajesh Patel',
      description: 'Academic programs, curriculum, and student progress',
    },
    {
      name: 'Administration',
      phone: '+91 123-456-7893',
      email: 'admin@excellenceschool.edu.in',
      head: 'Mr. Amit Verma',
      description: 'General administration and operational matters',
    },
    {
      name: 'Finance Department',
      phone: '+91 123-456-7894',
      email: 'accounts@excellenceschool.edu.in',
      head: 'Mrs. Priya Gupta',
      description: 'Fee payments, financial assistance, and billing',
    },
    {
      name: 'Hostel Office',
      phone: '+91 123-456-7895',
      email: 'hostel@excellenceschool.edu.in',
      head: 'Mr. Suresh Kumar',
      description: 'Hostel accommodation and residential services',
    },
    {
      name: 'Transport Department',
      phone: '+91 123-456-7896',
      email: 'transport@excellenceschool.edu.in',
      head: 'Mr. Vijay Singh',
      description: 'School bus services and transportation',
    },
  ];

  const quickLinks = [
    { title: 'Admission Process', description: 'Learn about our admission requirements and procedures' },
    { title: 'Fee Structure', description: 'Detailed information about tuition and other fees' },
    { title: 'Academic Calendar', description: 'Important dates and school events' },
    { title: 'School Policies', description: 'Rules, regulations, and institutional policies' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <MessageSquare size={48} className="mr-4" />
            <h1 className="text-5xl font-bold">Contact Us</h1>
          </div>
          <p className="text-xl text-blue-100">
            Get in touch with us for admissions, inquiries, or any assistance you need
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We're here to help and answer any questions you might have</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    info.color === 'text-blue-600' ? 'bg-blue-100' :
                    info.color === 'text-green-600' ? 'bg-green-100' :
                    info.color === 'text-purple-600' ? 'bg-purple-100' :
                    'bg-orange-100'
                  }`}>
                    <Icon size={32} className={info.color} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="admissions">Admissions</option>
                      <option value="academic">Academic Programs</option>
                      <option value="hostel">Hostel Services</option>
                      <option value="transport">Transportation</option>
                      <option value="fees">Fee Information</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter the subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Location */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Campus</h3>
                
                {/* Google Maps Embed Placeholder */}
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin size={48} className="text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Google Maps integration would go here</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">School Address</h4>
                      <p className="text-gray-600">123 Education Street, New Delhi, India 110001</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Building size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Landmarks</h4>
                      <p className="text-gray-600">Near Central Park, Opposite City Hospital</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Information</h3>
                
                <div className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900">{link.title}</h4>
                      <p className="text-gray-600 text-sm">{link.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600">Direct contact information for specific departments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{dept.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <User size={14} className="text-blue-600 mr-2" />
                    <span className="font-medium">{dept.head}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={14} className="text-green-600 mr-2" />
                    <span>{dept.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={14} className="text-purple-600 mr-2" />
                    <span className="break-all">{dept.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to common questions</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the admission requirements?</h3>
                <p className="text-gray-600">Students must meet age requirements, submit academic records, and pass our entrance assessment. Detailed requirements are available in our admission brochure.</p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide transportation services?</h3>
                <p className="text-gray-600">Yes, we operate a fleet of GPS-enabled buses covering most areas of the city. Transportation fees are separate from tuition fees.</p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the student-teacher ratio?</h3>
                <p className="text-gray-600">We maintain a low student-teacher ratio of 25:1 to ensure personalized attention and quality education for every student.</p>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Are hostel facilities available?</h3>
                <p className="text-gray-600">Yes, we provide separate hostel facilities for boys and girls with modern amenities, nutritious meals, and 24/7 supervision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Contact</h2>
          <p className="text-xl text-gray-600 mb-8">
            For urgent matters or emergencies, please contact us immediately
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="bg-red-600 text-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Emergency Hotline</h3>
              <p className="text-2xl font-bold">+91 123-456-7890</p>
              <p className="text-red-200 text-sm">Available 24/7</p>
            </div>
            
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Principal's Office</h3>
              <p className="text-2xl font-bold">+91 123-456-7891</p>
              <p className="text-blue-200 text-sm">Office Hours Only</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;