import React from 'react';
import { GraduationCap } from 'lucide-react';
import Hero from '../components/Hero';

const PrincipalMessage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Hero
        icon={<GraduationCap size={48} />}
        title="Principal's Message"
        subtitle="Educational philosophy and leadership insights from our Principal"
        gradientFrom="from-green-600"
        gradientTo="to-blue-600"
        textColor="text-green-100"
      />

      {/* Principal's Message Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Principal's Photo */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-gray-500">Principal Photo</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Mr. Pramod Kumar</h3>
                <p className="text-lg text-gray-600">Principal</p>
                <p className="text-sm text-gray-500 mt-2">M.A, B.Ed, 25 years experience</p>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <GraduationCap size={48} className="text-green-600 mb-4" />
                </div>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p className="text-2xl font-light text-gray-800 italic">
                    "Every child is unique and capable of achieving greatness. Our role is to
                    provide the right environment, guidance, and opportunities for them to
                    discover and develop their full potential."
                  </p>

                  <p>
                    Dear Students, Parents, and Colleagues,
                  </p>

                  <p>
                    As the Principal of Buds Garden School, I am honored to lead an institution
                    that has consistently demonstrated its commitment to educational excellence
                    and holistic development. Our school is not just a place of learning; it's
                    a community where dreams take shape and futures are built.
                  </p>

                  <p>
                    Education in the 21st century demands a balance between traditional wisdom
                    and modern innovation. At Buds Garden School, we strive to provide our
                    students with a comprehensive education that includes academic rigor,
                    character development, creative expression, and physical wellness. We
                    believe that true education prepares students not just for examinations,
                    but for life itself.
                  </p>

                  <p>
                    Our dedicated team of educators works tirelessly to create an environment
                    where every student feels valued, challenged, and supported. We understand
                    that each child learns differently, and we are committed to providing
                    personalized attention and diverse learning opportunities to help every
                    student succeed.
                  </p>

                  <p>
                    The success of our students in CBSE examinations, their achievements in
                    various competitions, and their acceptance into prestigious institutions
                    are testaments to the quality of education we provide. However, what makes
                    me truly proud is seeing our alumni become responsible citizens who
                    contribute positively to society.
                  </p>

                  <p>
                    We encourage our students to be curious, ask questions, think critically,
                    and never stop learning. We want them to develop not just intellectual
                    capabilities, but also emotional intelligence, social awareness, and
                    moral courage.
                  </p>

                  <p>
                    To our parents, I want to assure you that your children are in safe and
                    capable hands. We view our relationship with parents as a partnership in
                    your child's education, and we welcome your involvement and feedback.
                  </p>

                  <p>
                    As we continue to evolve and adapt to the changing educational landscape,
                    our commitment to excellence remains unwavering. Together, we will prepare
                    our students to be the leaders, innovators, and change-makers of tomorrow.
                  </p>

                  <p className="font-semibold">
                    With best wishes for academic success and personal growth,
                  </p>

                  <div className="mt-8">
                    <p className="font-bold text-xl text-green-700">Mr. Pramod Kumar</p>
                    <p className="text-gray-600">Principal, Buds Garden School</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Educational Philosophy
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Student-Centered Learning</h3>
                <p className="text-gray-700">
                  We believe in placing students at the center of the learning process,
                  adapting our teaching methods to their individual needs and learning styles.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-green-600 mb-3">Holistic Development</h3>
                <p className="text-gray-700">
                  We focus on developing the whole child - intellectually, emotionally,
                  socially, and physically - to prepare them for all aspects of life.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Innovation & Creativity</h3>
                <p className="text-gray-700">
                  We encourage innovative thinking and creative expression, helping students
                  develop the skills needed for the modern world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipalMessage;