import React, { useState, useEffect } from 'react';
import {
  Camera,
  Play,
  Users,
  Award,
  BookOpen,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { categories, galleryItems, imageFiles } from '../data/galleryData';


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [openModal, setOpenModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalCategory, setModalCategory] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);


  const filteredItems = galleryItems.filter((item) => {
    const categoryMatch =
      selectedCategory === 'all' || item.category === selectedCategory;
    const yearMatch = item.year === selectedYear;
    return categoryMatch && yearMatch;
  });

  const handleCardClick = (category) => {
    if (imageFiles[category]) {
      setModalImages(imageFiles[category]);
      setModalCategory(category);
      setSelectedIndex(null);
      setOpenModal(true);
    }
  };

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === modalImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? modalImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!openModal) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setOpenModal(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [openModal, modalImages]);

  const stats = [
    { number: '100+', label: 'Photos' },
    { number: '10+', label: 'Videos' },
    { number: '15+', label: 'Events Covered' },
    { number: '3', label: 'Years Archive' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${selectedCategory === category.value
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
      <section className="py-16 bg-gray-50 ">
        <div className="container mx-auto px-4 ">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                  onClick={() => handleCardClick(item.category)}
                >
                  <div className="relative">
                    <img
                      src={`/${(item.category as keyof typeof imageFiles) === 'infrastructure' ? 'infra' : item.category}/${imageFiles[item.category as keyof typeof imageFiles][Math.floor(Math.random() * imageFiles[item.category as keyof typeof imageFiles].length)]
                        }`}

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
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    {/* <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        <span>{item.date}</span>
                      </div>
                      <span className="capitalize">{item.type}</span>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-600">
              <Camera size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">No items found</h3>
              <p>Try adjusting your filters to see more content.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto relative p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
            >
              <X size={28} />
            </button>
            <h2 className="text-2xl font-bold mb-4 capitalize">
              {modalCategory} Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {modalImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md cursor-pointer border border-gray-200"
                  onClick={() => handleImageClick(idx)}
                >
                  <img
                    src={`/${modalCategory === "infrastructure" ? "infra" : modalCategory}/${img}`}
                    alt={img}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/400x300?text=Image+Missing")
                    }
                  />
                </div>
              ))}
            </div>


            {selectedIndex !== null && (
              <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                <button
                  onClick={() => {
                    if (selectedIndex !== null) {
                      setOpenModal(false);
                      setSelectedIndex(null);
                    }
                  }}
                  className="absolute top-5 right-5 text-white hover:text-red-400"
                >
                  <X size={32} />
                </button>

                <button
                  onClick={prevImage}
                  className="absolute left-5 text-white hover:text-teal-400"
                >
                  <ChevronLeft size={40} />
                </button>

                <img
                  src={`/${modalCategory === 'infrastructure' ? 'infra' : modalCategory}/${modalImages[selectedIndex]}`}
                  alt="Fullscreen"
                  className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
                />

                <button
                  onClick={nextImage}
                  className="absolute right-5 text-white hover:text-teal-400"
                >
                  <ChevronRight size={40} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Featured Albums */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Albums</h2>
            <p className="text-xl text-gray-600">Special collections from memorable events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div onClick={() => handleCardClick('Academic')} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <BookOpen size={32} />
                <span className="text-blue-200 text-sm">{imageFiles['Academic']?.length || 0} Photos</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Academic Excellence Awards 2024</h3>
              <p className="text-blue-100 text-sm">
                Celebrating our top performing students and their achievements
              </p>
            </div>

            <div onClick={() => handleCardClick('sports')} className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <Award size={32} />
                <span className="text-green-200 text-sm">{imageFiles['sports']?.length || 0} Photos</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sports Championship 2024</h3>
              <p className="text-green-100 text-sm">
                Highlights from our victorious sports competitions and tournaments
              </p>
            </div>

            <div onClick={() => handleCardClick('cultural')} className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6 cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <Users size={32} />
                <span className="text-purple-200 text-sm">{imageFiles['cultural']?.length || 0} Photos</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Cultural Festival 2024</h3>
              <p className="text-purple-100 text-sm">
                Vibrant moments from our annual cultural celebration and performances
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Share Your Memories</h2>
          {/* <p className="text-xl text-teal-100 mb-8">
            Have photos or videos from school events? We'd love to feature them in our gallery!
          </p> */}

          {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Camera size={20} className="mr-2" />
              Submit Photos
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-teal-600 transition-colors">
              <Play size={20} className="mr-2" />
              Submit Videos
            </button>
          </div> */}
          <div className="text-center mb-6">
            <p className="text-xl text-teal-100 mb-4">
              Have photos or videos from school events? Share them with us at{' '}
              <a
                href="mailto:budsgarden.rajganj@gmail.com"
                className="underline font-semibold hover:text-white"
              >
                budsgarden.rajganj@gmail.com
              </a>{' '}
              to be featured in our gallery!
            </p>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Gallery;
