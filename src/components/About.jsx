import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <>
      {/* Split Background Section */}
      <div className="relative">
        {/* Top Background (Maroon) */}
        <div className="h-1/2 bg-[#541212] absolute top-0 left-0 w-full z-0"></div>
        {/* Bottom Background (Light) */}
        <div className="h-1/2 bg-[#f0e7e3] absolute bottom-0 left-0 w-full z-0"></div>
        
        {/* Content Container */}
        <div className="relative z-10">
          {/* Heading Section (Centered) */}
          <section className="pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Mount Carmel Central School
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#c6795a] mb-6">
                Igniting Young Minds for a Brighter Future
              </h3>
              <p className="text-lg text-white max-w-3xl mx-auto">
                At Mount Carmel Central School, we nurture curiosity, values, and confidence to help students grow into compassionate, capable future leaders.
              </p>
            </div>
          </section>

          {/* Carousel (Overlapping both sections) */}
          <div className="w-full relative h-64 md:h-96 mb-16">
            <div className="absolute inset-0 flex animate-carousel">
              <div className="relative w-full flex-shrink-0">
                <img
                  src="https://mccsblr.edu.in/wp-content/uploads/2025/07/June-2025-Photos-10.jpg"
                  alt="Students learning"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/default-carousel-1.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white p-6 max-w-3xl">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4">Inspiring Excellence</h3>
                    <p className="text-lg md:text-xl">Where curiosity meets opportunity</p>
                  </div>
                </div>
              </div>
              <div className="relative w-full flex-shrink-0">
                <img
                  src="https://mccsblr.edu.in/wp-content/uploads/2025/07/June-2025-Photos-14.jpg"
                  alt="School facilities"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/default-carousel-2.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white p-6 max-w-3xl">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4">State-of-the-Art Facilities</h3>
                    <p className="text-lg md:text-xl">Enabling innovative learning experiences</p>
                  </div>
                </div>
              </div>
              <div className="relative w-full flex-shrink-0">
                <img
                  src="https://mccsblr.edu.in/wp-content/uploads/2025/07/June-2025-Photos-12.jpg"
                  alt="School events"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/default-carousel-3.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="text-center text-white p-6 max-w-3xl">
                    <h3 className="text-2xl md:text-4xl font-bold mb-4">Vibrant Community</h3>
                    <p className="text-lg md:text-xl">Building lifelong connections</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* "What Sets Us Apart" Section (Left-aligned) */}
          <section className="pb-16 bg-[#f0e7e3]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="mb-12 text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
                  WHAT SETS US APART
                </h3>
                <h4 className="text-2xl md:text-3xl font-bold text-[#541212]">
                  Shaping Futures, the Carmel Way
                </h4>
                <div className="w-24 h-1 bg-[#c6795a] mt-4"></div>
              </div>

              {/* Card Slider Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://mccsblr.edu.in/wp-content/uploads/2025/07/June-2025-Photos-10.jpg"
                      alt="Holistic Education"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[#541212] mb-3">Holistic Education</h4>
                    <p className="text-gray-600">
                      Balancing academics with arts, sports, and character development for comprehensive growth.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://mccsblr.edu.in/wp-content/uploads/2025/07/June-2025-Photos-14.jpg"
                      alt="Experienced Faculty"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[#541212] mb-3">Experienced Faculty</h4>
                    <p className="text-gray-600">
                      Dedicated teachers committed to nurturing each student's unique potential and talents.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="https://mccsblr.edu.in/wp-content/uploads/2025/07/June-2025-Photos-12.jpg"
                      alt="Modern Facilities"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[#541212] mb-3">Modern Facilities</h4>
                    <p className="text-gray-600">
                      State-of-the-art infrastructure designed to support innovative learning methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;