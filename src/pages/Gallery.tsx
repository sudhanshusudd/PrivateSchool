import React, { useState } from 'react';
import { Camera, Play, Filter, Search, Calendar, Users, Award, BookOpen } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('2024');

  const categories = [
    { value: 'all', label: 'All Categories', icon: Camera },
    { value: 'academic', label: 'Academic Events', icon: BookOpen },
    { value: 'sports', label: 'Sports & Athletics', icon: Award },
    { value: 'cultural', label: 'Cultural Activities', icon: Users },
    { value: 'infrastructure', label: 'Campus & Infrastructure', icon: Camera },
  ];

  const years = ['2024', '2023', '2022', '2021'];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'academic',
      year: '2024',
      title: 'Science Exhibition 2024',
      description: 'Students showcasing innovative science projects',
      thumbnail: 'https://images.pexels.com/photos/8471888/pexels-photo-8471888.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'March 15, 2024',
    },
    {
      id: 2,
      type: 'image',
      category: 'sports',
      year: '2024',
      title: 'Basketball Championship',
      description: 'Inter-house basketball tournament finals',
      thumbnail: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'February 20, 2024',
    },
    {
      id: 3,
      type: 'video',
      category: 'cultural',
      year: '2024',
      title: 'Annual Day Celebration',
      description: 'Highlights from our grand annual day event',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'January 25, 2024',
    },
    {
      id: 4,
      type: 'image',
      category: 'infrastructure',
      year: '2024',
      title: 'New Library Wing',
      description: 'Our newly renovated library with modern facilities',
      thumbnail: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'January 10, 2024',
    },
    {
      id: 5,
      type: 'image',
      category: 'academic',
      year: '2024',
      title: 'Mathematics Olympiad',
      description: 'Students participating in national mathematics competition',
      thumbnail: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'December 15, 2023',
    },
    {
      id: 6,
      type: 'image',
      category: 'sports',
      year: '2023',
      title: 'Swimming Competition',
      description: 'Annual inter-school swimming championship',
      thumbnail: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'November 20, 2023',
    },
    {
      id: 7,
      type: 'image',
      category: 'cultural',
      year: '2023',
      title: 'Drama Performance',
      description: 'Students performing in the annual drama festival',
      thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'October 30, 2023',
    },
    {
      id: 8,
      type: 'image',
      category: 'infrastructure',
      year: '2023',
      title: 'Science Laboratory',
      description: 'State-of-the-art chemistry laboratory',
      thumbnail: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'September 15, 2023',
    },
    {
      id: 9,
      type: 'video',
      category: 'sports',
      year: '2023',
      title: 'Sports Day Highlights',
      description: 'Best moments from our annual sports day',
      thumbnail: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'August 25, 2023',
    },
    {
      id: 10,
      type: 'image',
      category: 'cultural',
      year: '2023',
      title: 'Art Exhibition',
      description: 'Student artwork displayed in annual art exhibition',
      thumbnail: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'July 20, 2023',
    },
    {
      id: 11,
      type: 'image',
      category: 'academic',
      year: '2023',
      title: 'Graduation Ceremony',
      description: 'Class XII graduation ceremony celebration',
      thumbnail: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'June 15, 2023',
    },
    {
      id: 12,
      type: 'image',
      category: 'infrastructure',
      year: '2023',
      title: 'Campus Garden',
      description: 'Beautiful landscaped gardens around the campus',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'May 10, 2023',
    },
  ];

  const filteredItems = galleryItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const yearMatch = item.year === selectedYear;
    return categoryMatch && yearMatch;
  });

  const stats = [
    { number: '500+', label: 'Photos' },
    { number: '50+', label: 'Videos' },
    { number: '25+', label: 'Events Covered' },
    { number: '5', label: 'Years Archive' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Camera size={48} className="mr-4" />
            <h1 className="text-5xl font-bold">Photo & Video Gallery</h1>
          </div>
          <p className="text-xl text-teal-100">
            Capturing memories and celebrating moments from our vibrant school life
          </p>
        </div>
      </section>

      {/* Gallery Statistics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter size={20} className="text-gray-600" />
                <span className="text-gray-700 font-medium">Filter by:</span>
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <Search size={20} className="text-gray-600" />
              <input
                type="text"
                placeholder="Search gallery..."
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={18} className="mr-2" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <Play size={24} className="text-teal-600 ml-1" />
                        </div>
                      </div>
                    )}

                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        item.category === 'academic' ? 'bg-blue-100 text-blue-800' :
                        item.category === 'sports' ? 'bg-green-100 text-green-800' :
                        item.category === 'cultural' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        <span>{item.date}</span>
                      </div>
                      <span className="capitalize">{item.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Camera size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more content.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Albums */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Albums</h2>
            <p className="text-xl text-gray-600">Special collections from memorable events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <BookOpen size={32} />
                <span className="text-blue-200 text-sm">25 Photos</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Academic Excellence Awards 2024</h3>
              <p className="text-blue-100 text-sm">Celebrating our top performing students and their achievements</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <Award size={32} />
                <span className="text-green-200 text-sm">40 Photos</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sports Championship 2024</h3>
              <p className="text-green-100 text-sm">Highlights from our victorious sports competitions and tournaments</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <Users size={32} />
                <span className="text-purple-200 text-sm">60 Photos</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Cultural Festival 2024</h3>
              <p className="text-purple-100 text-sm">Vibrant moments from our annual cultural celebration and performances</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Highlights */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Highlights</h2>
            <p className="text-xl text-gray-600">Watch the best moments from our school events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="School Tour"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <Play size={24} className="text-teal-600 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Virtual School Tour</h3>
                <p className="text-gray-600 text-sm">Take a comprehensive tour of our campus and facilities</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Student Life"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <Play size={24} className="text-teal-600 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">A Day in Student Life</h3>
                <p className="text-gray-600 text-sm">Experience a typical day at Buds Garden School through student eyes</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Alumni Success"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <Play size={24} className="text-teal-600 ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Alumni Success Stories</h3>
                <p className="text-gray-600 text-sm">Hear from our successful graduates about their journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Share Your Memories</h2>
          <p className="text-xl text-teal-100 mb-8">
            Have photos or videos from school events? We'd love to feature them in our gallery!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Camera size={20} className="mr-2" />
              Submit Photos
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors">
              <Play size={20} className="mr-2" />
              Submit Videos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;