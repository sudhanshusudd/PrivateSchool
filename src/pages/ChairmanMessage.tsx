import React from 'react';
import { Quote } from 'lucide-react';

const ChairmanMessage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Chairman's Message</h1>
          <p className="text-xl text-blue-100">
            Words of wisdom and vision from our esteemed Chairman
          </p>
        </div>
      </section>

      {/* Chairman's Message Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Chairman's Photo */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-gray-500">Chairman Photo</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mr. Amar Kumar Pal</h3>
                <p className="text-lg text-gray-600">Chairman</p>
                <p className="text-sm text-gray-500 mt-2"></p>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <Quote size={48} className="text-blue-600 mb-4" />
                </div>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p className="text-2xl font-light text-gray-800 italic">
                    "Education is not just about imparting knowledge; it's about igniting the spark 
                    of curiosity, building character, and preparing young minds for the challenges 
                    and opportunities of tomorrow."
                  </p>

                  <p>
                    Dear Students, Parents, and Faculty Members,
                  </p>

                  <p>
                    When I founded Buds Garden School in 2009, I had a simple yet profound vision: 
                    to create an institution where every child could discover their potential, 
                    develop their talents, and grow into confident, capable, and compassionate 
                    individuals who would make a positive difference in the world.
                  </p>

                  <p>
                    Over the past three decades, I have witnessed countless transformations - 
                    shy students becoming confident leaders, curious minds evolving into 
                    innovative thinkers, and young hearts developing into caring citizens. 
                    These transformations remind me daily why education is the most powerful 
                    tool we have to shape the future.
                  </p>

                  <p>
                    Our commitment goes beyond academic excellence. While we take pride in our 
                    consistently outstanding CBSE results, we are equally proud of the values 
                    we instill in our students. Integrity, compassion, perseverance, and 
                    respect for diversity are not just words on our walls - they are the 
                    foundation of everything we do.
                  </p>

                  <p>
                    In today's rapidly evolving world, we understand that preparing students 
                    for the future requires more than traditional teaching methods. Our 
                    investment in modern infrastructure, technology integration, and 
                    innovative teaching methodologies ensures that our students are equipped 
                    with 21st-century skills while remaining grounded in timeless values.
                  </p>

                  <p>
                    To our dedicated faculty, I extend my deepest gratitude. Your passion, 
                    commitment, and tireless efforts to nurture each child make our mission 
                    possible. To our parents, thank you for trusting us with your most 
                    precious gifts - your children. And to our students, remember that you 
                    are not just the leaders of tomorrow; you are the change-makers of today.
                  </p>

                  <p>
                    As we look toward the future, we remain committed to our founding principles 
                    while embracing innovation and growth. Together, we will continue to build 
                    an institution that not only educates minds but also touches hearts and 
                    transforms lives.
                  </p>

                  <p className="font-semibold">
                    With warm regards and best wishes for continued success,
                  </p>

                  <div className="mt-8">
                    <p className="font-bold text-xl text-blue-900">Mr. Amar Kumar Pal</p>
                    <p className="text-gray-600">Chairman, Buds Garden School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Chairman's Achievements & Recognition
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Educational Leadership</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 22+ years of experience in educational administration</li>
                  <li>• Founded 3 successful educational institutions</li>
                  <li>• Member of State Education Advisory Board</li>
                  <li>• Consultant for CBSE curriculum development</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-600 mb-4">Awards & Recognition</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• National Education Excellence Award 2020</li>
                  <li>• Lifetime Achievement in Education 2018</li>
                  <li>• Outstanding Contribution to Education 2015</li>
                  <li>• Best School Administrator Award 2012</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChairmanMessage;