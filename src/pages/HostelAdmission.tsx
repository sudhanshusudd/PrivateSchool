import React from 'react';
import { UserPlus, FileText, CreditCard, CheckCircle, Download, AlertCircle } from 'lucide-react';

const HostelAdmission = () => {
  const admissionSteps = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Complete and submit the hostel admission application form',
      icon: FileText,
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Submit required documents for verification',
      icon: CheckCircle,
    },
    {
      step: 3,
      title: 'Fee Payment',
      description: 'Pay admission fee and security deposit',
      icon: CreditCard,
    },
    {
      step: 4,
      title: 'Room Allocation',
      description: 'Receive room allocation and move-in instructions',
      icon: UserPlus,
    },
  ];

  const requiredDocuments = [
    'Completed hostel admission application form',
    'Copy of school admission letter',
    'Passport size photographs (6 copies)',
    'Copy of Aadhaar card of student and parent',
    'Medical certificate from registered doctor',
    'Copy of previous academic records',
    'Character certificate from previous school',
    'Income certificate of parent/guardian',
    'Caste certificate (if applicable)',
    'Anti-ragging affidavit (signed by student and parent)',
  ];

  const feeStructure = [
    {
      category: 'Single Occupancy',
      admission: '₹5,000',
      annual: '₹45,000',
      security: '₹10,000',
      total: '₹60,000',
      features: ['Private room', 'Attached bathroom', 'AC', 'Study table'],
    },
    {
      category: 'Double Occupancy',
      admission: '₹3,000',
      annual: '₹35,000',
      security: '₹8,000',
      total: '₹46,000',
      features: ['Shared room', 'Attached bathroom', 'AC', 'Individual study space'],
    },
    {
      category: 'Triple Occupancy',
      admission: '₹2,000',
      annual: '₹25,000',
      security: '₹6,000',
      total: '₹33,000',
      features: ['Shared room', 'Common bathroom', 'Fan', 'Study area'],
    },
  ];

  const importantDates = [
    { event: 'Application Form Availability', date: 'March 1, 2024' },
    { event: 'Last Date for Application', date: 'May 15, 2024' },
    { event: 'Document Verification', date: 'May 20-25, 2024' },
    { event: 'Merit List Publication', date: 'May 30, 2024' },
    { event: 'Fee Payment Deadline', date: 'June 10, 2024' },
    { event: 'Room Allocation', date: 'June 15, 2024' },
    { event: 'Check-in Begins', date: 'June 20, 2024' },
  ];

  const eligibilityCriteria = [
    'Must be a registered student of Excellence School',
    'Minimum 75% attendance in previous academic year',
    'No major disciplinary actions in academic record',
    'Medical fitness certificate required',
    'Parent/guardian consent for hostel accommodation',
    'Compliance with hostel rules and regulations',
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <UserPlus size={48} className="mr-4" />
            <h1 className="text-5xl font-bold">Hostel Admission Process</h1>
          </div>
          <p className="text-xl text-green-100">
            Step-by-step guide for hostel admission and accommodation booking
          </p>
        </div>
      </section>

      {/* Quick Download Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Admission Forms & Documents</h2>
              <p className="text-gray-600">Download required forms and information brochures</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <Download size={20} className="mr-2" />
                Application Form
              </button>
              <button className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download size={20} className="mr-2" />
                Information Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-xl text-gray-600">Follow these simple steps to secure your hostel accommodation</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {admissionSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Icon size={32} className="text-green-600" />
                      </div>
                      <div className="w-16 text-center mt-2">
                        <span className="text-sm font-semibold text-gray-600">Step {step.step}</span>
                      </div>
                    </div>
                    <div className="flex-grow bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    {index < admissionSteps.length - 1 && (
                      <div className="ml-8 mt-8">
                        <div className="w-0.5 h-8 bg-gray-300"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Eligibility Criteria</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-center mb-2">
                <AlertCircle size={24} className="text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-blue-800">Important Requirements</h3>
              </div>
              <p className="text-blue-700">
                All applicants must meet the following criteria to be eligible for hostel accommodation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eligibilityCriteria.map((criteria, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{criteria}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Required Documents</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <div className="flex items-center mb-2">
                <FileText size={24} className="text-yellow-600 mr-2" />
                <h3 className="text-lg font-semibold text-yellow-800">Document Checklist</h3>
              </div>
              <p className="text-yellow-700">
                Ensure all documents are properly attested and submit both original and photocopies.
              </p>
            </div>

            <div className="space-y-3">
              {requiredDocuments.map((document, index) => (
                <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-green-600 text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{document}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fee Structure</h2>
            <p className="text-xl text-gray-600">Transparent pricing for different accommodation options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {feeStructure.map((fee, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-green-600 text-white p-4 text-center">
                  <h3 className="text-xl font-bold">{fee.category}</h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Admission Fee</span>
                      <span className="font-semibold">{fee.admission}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual Fee</span>
                      <span className="font-semibold">{fee.annual}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Security Deposit</span>
                      <span className="font-semibold">{fee.security}</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between text-lg font-bold text-green-600">
                        <span>Total Amount</span>
                        <span>{fee.total}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {fee.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Information</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• All fees include accommodation, meals, and basic utilities</li>
                <li>• Security deposit is refundable at the time of checkout</li>
                <li>• Fee payment can be made online or through demand draft</li>
                <li>• Fees are subject to annual revision</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Important Dates</h2>
            
            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <span className="font-medium text-gray-900">{item.event}</span>
                  <span className="text-green-600 font-semibold">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Need Help with Admission?</h2>
            <p className="text-xl text-gray-300">Our admission team is here to assist you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Admission Office</h3>
              <p className="text-gray-300 mb-1">+91 123-456-7897</p>
              <p className="text-gray-300">admission@excellenceschool.edu.in</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Hostel Coordinator</h3>
              <p className="text-gray-300 mb-1">+91 123-456-7898</p>
              <p className="text-gray-300">hostel.admission@excellenceschool.edu.in</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-2">Fee Inquiry</h3>
              <p className="text-gray-300 mb-1">+91 123-456-7899</p>
              <p className="text-gray-300">accounts@excellenceschool.edu.in</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-green-600 p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-2">Online Application Portal</h3>
              <p className="text-green-100 mb-4">
                Apply online for faster processing and track your application status
              </p>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Online Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HostelAdmission;