import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CampusAndBeyond from '../components/CampusAndBeyond';
import About from '../components/About';
import mc2 from '../assets/mc2.JPG';
import mc3 from '../assets/mc3.JPG';
import mc6 from '../assets/mc4.JPG';
import mc7 from '../assets/mc7.JPG';
import s2 from '../assets/s2.JPG';
import s1 from '../assets/s1.JPG';
import principal from '../assets/principal.JPG';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel images data
  const carouselImages = [
    mc2,mc3,mc6,mc7,s2
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Background Section with Gradient */}
        <div
          style={{
            background: 'linear-gradient(to right, #541212, #ebd8b4)',
          }}
          className="relative overflow-hidden"
        >
          {/* Container for Image and Video */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start min-h-[300px] sm:min-h-[340px]">
              
              {/* Carousel Column */}
              <div className="relative  overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-500">
                <div className="relative w-full h-full min-h-[200px] sm:min-h-[400px] overflow-hidden">
                  {carouselImages.map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                      <img
                        src={img}
                        alt={`Mount Carmel School Campus ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/default-school.jpg';
                        }}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Carousel Indicators (simplified version) */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2  transition-all `}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Static Image Column */}
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-500">
                <img
                  src={s1}
                  alt="Mount Carmel School Campus"
                  className="w-full h-full object-cover min-h-[200px] sm:min-h-[300px]"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/default-school.jpg';
                  }}
                />
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-white text-center">
              <div className="mb-6 md:mb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Welcome to Mount Carmel School</h1>
                <div className="w-24 h-1 bg-[#c6795a] mx-auto"></div>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
                <p>Founded in 1948 by the Carmelite Sisters of St. Teresa</p>
                <p>Committed to academic excellence and holistic development</p>
                <p>Nurturing future leaders with values and knowledge</p>
                <p>State-of-the-art facilities for comprehensive growth</p>
              </div>

              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-[#541212] text-white rounded-lg hover:bg-[#3a0d0d] transition duration-300 text-sm sm:text-base">
                More About School Life
              </button>
            </div>
          </div>
        </div>

        <CampusAndBeyond/>

        <section className="py-12 sm:py-16" style={{ backgroundColor: '#ebd8b4' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl text-[#541212]">Mount Carmel School</h2>
                
                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 mb-2">Principal's Message</h3>
                  <div className="w-24 h-1 bg-[#c6795a] mb-4 sm:mb-6"></div>
                </div>
                
                <p className="text-base sm:text-lg text-gray-700">
                  "At Mount Carmel School, we believe in nurturing young minds to become compassionate leaders and lifelong learners. 
                  Our holistic approach to education combines academic excellence with character development, preparing students 
                  to face the challenges of tomorrow with confidence and integrity."
                </p>
                
                <p className="text-base sm:text-lg text-gray-700">
                  "We take pride in our diverse community where each child is valued and encouraged to discover their unique potential. 
                  Our dedicated faculty and state-of-the-art facilities create an environment where curiosity is sparked and talents are honed."
                </p>
                
                <div className="pt-2 sm:pt-4">
                  <p className="font-semibold text-lg text-[#541212]">- Nakshathra</p>
                  <p className="text-gray-600 text-sm sm:text-base">Principal, Mount Carmel School</p>
                </div>
                
                <Link to={'/our-principal'}>
                  <button className="mt-4 sm:mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-[#541212] text-white rounded-lg hover:bg-[#3a0d0d] transition duration-300 text-sm sm:text-base">
                  Read More
                </button>
                </Link>
              
              </div>
              
              {/* Right Side - Principal's Image */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-full max-w-md h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={principal}
                    alt="Principal Dr. Susan Mathew"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/default-principal.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Motto, Vision, Mission Section */}
        <section className="py-12 sm:py-20" style={{ backgroundColor: '#ebd8b4' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            
            {/* Left Column: Motto and Vision */}
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
              
              {/* Motto */}
              <div className="bg-[#770e0e] text-white p-6 sm:p-8 md:p-10 rounded shadow">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Motto</h3>
                <div className="w-16 h-0.5 bg-white mb-4 sm:mb-6"></div>
                <p className="text-lg sm:text-xl mb-3 sm:mb-4">Wisdom, Love & Service.</p>
                <p className="italic font-semibold text-sm sm:text-base md:text-lg">
                  "The fear of the Lord is the beginning of wisdom" – <span className="not-italic">Proverb 9:10</span>
                </p>
              </div>

              {/* Vision */}
              <div className="bg-[#c06b2c] text-white p-6 sm:p-8 md:p-10 rounded shadow flex flex-col sm:flex-row items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Vision</h3>
                  <div className="w-16 h-0.5 bg-white mb-4 sm:mb-6"></div>
                  <p className="text-lg sm:text-xl">
                    To mould our students into conscientious, humane citizens through holistic, value based education.
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 w-24 h-24 sm:w-36 sm:h-36">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                    alt="Target Icon"
                    className="w-full h-full object-contain opacity-90"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Mission */}
            <div className="bg-[#f5b622] text-black p-6 sm:p-8 md:p-10 rounded shadow">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Mission</h3>
              <div className="w-16 h-0.5 bg-[#770e0e] mb-4 sm:mb-6"></div>

              <div className="mb-4 sm:mb-6">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2166/2166824.png"
                  alt="Mission Icon"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                  loading="lazy"
                />
              </div>

              <ul className="text-sm sm:text-base md:text-lg leading-6 sm:leading-8 space-y-1 sm:space-y-2">
                <li>• To promote a value based education</li>
                <li>• To promote inter cultural and inter-religious tolerance and harmony</li>
                <li>• To develop leadership qualities among students</li>
                <li>• To create an environment conducive for developing reasoning, logical, creative and analytical skills</li>
                <li>• To develop scientific temperament</li>
                <li>• To synergize young minds towards eco-consciousness</li>
                <li>• To integrate dignity of labor into the curriculum</li>
              </ul>
            </div>
          </div>
        </section>

        <About/>

        <section className="py-16 bg-[#ebd8b4]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Small heading */}
            <h3 className="text-sm font-semibold text-[#541212] mb-2 uppercase tracking-wider">
              Together We Build Dreams
            </h3>
            
            {/* Big heading */}
            <h2 className="text-7xl md:text-5xl font-bold text-blak-900 mb-4">
              Empower Your Child's Future
            </h2>
            
            {/* Medium description */}
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Reach out to discover the opportunities awaiting your child.
            </p>
            
            {/* Contact button with arrow */}
            <Link to={'/contact'}>
              <button className="bg-[#541212] hover:bg-[#3a0d0d] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center mx-auto gap-2">
              Contact Us 
              <i className="fa-solid fa-arrow-right text-white"></i>
            </button>
            </Link>
          
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;