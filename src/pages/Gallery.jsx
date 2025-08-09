import React, { useState } from "react";
import { FaImages, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import s1 from '../assets/s1.JPG';
import mc3 from '../assets/mc3.JPG';
import s2 from '../assets/s2.JPG';
import mc7 from '../assets/mc7.JPG';
import mc2 from '../assets/mc2.JPG';
// import mc9 from '../assets/mc9.JPG';
import mc1 from '../assets/mc1.JPG';
import mc6 from '../assets/mc6.JPG';
import mc4 from '../assets/mc4.JPG';
import mc5 from '../assets/mc5.JPG';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categoryIndices, setCategoryIndices] = useState({
    Campus: 0,
    Events: 0,
    Learning: 0,
    Library: 0
  });

  const galleryImages = [
    { id: 1, src: s1, alt: "School Building", category: "Campus" },
    { id: 2, src: mc3, alt: "Sports Day", category: "Events" },
    { id: 3, src: mc7, alt: "Classroom", category: "Learning" },
    { id: 4, src: mc2, alt: "Library", category: "Library" },
    { id: 5, src: s2, alt: "Art Exhibition", category: "Events" },
  ];

  const categoryImages = {
    Campus: [
      { id: 6, src: s1, alt: "Main Building", category: "Campus" },
      { id: 7, src: mc4, alt: "Playground", category: "Campus" },
      { id: 8, src: mc1, alt: "School Entrance", category: "Campus" },
    ],
    Events: [
      { id: 9, src: mc3, alt: "Sports Day", category: "Events" },
      { id: 10, src: mc5, alt: "Sports Day", category: "Events" },
    ],
    Learning: [
      { id: 12, src: mc7, alt: "Classroom", category: "Learning" },
      { id: 13, src: mc1, alt: "Lab Session", category: "Learning" },
      { id: 14, src: mc6, alt: "Group Study", category: "Learning" },
    ],
    Library: [
      { id: 15, src: mc2, alt: "Main Library", category: "Library" },
    //   { id: 16, src: mc9, alt: "Reading Area", category: "Library" },
    ]
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextCategorySlide = (category) => {
    setCategoryIndices(prev => ({
      ...prev,
      [category]: (prev[category] + 1) % categoryImages[category].length
    }));
  };

  const prevCategorySlide = (category) => {
    setCategoryIndices(prev => ({
      ...prev,
      [category]: (prev[category] - 1 + categoryImages[category].length) % categoryImages[category].length
    }));
  };

  return (
    <div className="w-full bg-gradient-to-b bg-[#ebd8b4] min-h-screen">
      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-[#541212] to-[#541212] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://mccsblr.edu.in/wp-content/uploads/2023/06/pattern.png')] bg-cover"></div>
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="bg-white/20 p-5 rounded-full backdrop-blur-lg shadow-lg">
              <FaImages className="text-3xl md:text-4xl" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight animate-slide-up">Gallery</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto animate-slide-up delay-100">
            Snapshots of Learning, Growth, and Celebration
          </p>
        </div>
      </div>

      {/* Main Gallery Slider */}
      <div className="container mx-auto px-6 py-16">
        <div className=" rounded-2xl shadow-2xl overflow-hidden mb-16">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {galleryImages.map((image) => (
                  <div key={image.id} className="w-full flex-shrink-0">
                    <div className="relative h-96 md:h-[600px] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
                        <h3 className="text-white text-2xl md:text-3xl font-bold">{image.alt}</h3>
                        <p className="text-white/80 text-base md:text-lg">{image.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#541212]/80 text-white p-4 rounded-full hover:bg-[#600000] transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#541212]/80 text-white p-4 rounded-full hover:bg-[#600000] transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>
          <div className="p-6 ">
            <div className="flex justify-center space-x-4 overflow-x-auto py-3">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-4 transition-all duration-300 ${currentIndex === index ? 'border-[#8B0000] shadow-lg' : 'border-transparent hover:border-[#8B0000]/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Sliders Section */}
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#541212] mb-10 pb-3 border-b-4 border-[#541212] tracking-tight animate-fade-in">
            Explore More Memories
          </h2>

          {Object.keys(categoryImages).map((category) => (
            <div key={category} className="mb-20">
              <h3 className="text-2xl font-semibold text-[#541212] mb-8 capitalize tracking-wide animate-slide-up">
                {category}
              </h3>
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${categoryIndices[category] * 100}%)` }}
                  >
                    {categoryImages[category].map((image) => (
                      <div key={image.id} className="w-full flex-shrink-0">
                        <div className="relative h-auto max-h-[500px] md:max-h-[600px] overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-contain transition-transform duration-500 ease-out hover:scale-105 bg-gray-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                            <h4 className="font-semibold text-lg text-white truncate">{image.alt}</h4>
                            <p className="text-sm text-white/80 mt-2 capitalize">{image.category}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {categoryImages[category].length > 1 && (
                  <>
                    <button
                      onClick={() => prevCategorySlide(category)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#541212] text-white p-4 rounded-full hover:bg-[#600000] transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 transform hover:scale-110 focus:outline-none"
                      aria-label={`Previous ${category} image`}
                    >
                      <FaChevronLeft className="text-lg" />
                    </button>
                    <button
                      onClick={() => nextCategorySlide(category)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#541212] text-white p-4 rounded-full hover:bg-[#600000] transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 transform hover:scale-110 focus:outline-none"
                      aria-label={`Next ${category} image`}
                    >
                      <FaChevronRight className="text-lg" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;