import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import s2 from '../assets/s2.JPG';
import s1 from '../assets/s1.JPG';
import mc4 from '../assets/mc4.JPG'
function CampusAndBeyond() {
  return (
    
            <main className="flex-grow">
                <section className="py-12 sm:py-20" style={{ backgroundColor: '#ebd8b4' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                            Campus Life & Beyond
                        </h2>
                        <div className="w-24 h-1 bg-[#541212] mx-auto mb-10"></div>
                        <p className="text-base sm:text-lg text-gray-700 text-center mb-12 px-4">
                            Discover the vibrant and enriching experiences that define life at Mount Carmel School, from engaging events to state-of-the-art facilities.
                        </p>
                        <br /><br />

                        {/* Cards Section - Responsive Grid with Spacing */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-0">
                            {/* Card 1: Upcoming Events */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-full h-64 sm:h-72 md:h-80 group perspective-1000">
                                    <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
                                        {/* Front Face */}
                                        <div className="absolute w-full h-full backface-hidden rounded-lg shadow-xl overflow-hidden">
                                            <div className="relative w-full h-full bg-[#1E3A8A] bg-opacity-80">
                                                <img
                                                    src={mc4}
                                                    alt="Gallery"
                                                    className="w-full h-full object-cover opacity-50"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = '/default-image.jpg';
                                                    }}
                                                />
                                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                                                    <svg className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM6 14h12v2H6v-2zm0-4h12v2H6v-2zm0-4h12v2H6V6z" />
                                                    </svg>
                                                    <h3 className="text-lg sm:text-xl font-semibold text-center">Upcoming Events</h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Back Face */}
                                        <div className="absolute w-full h-full backface-hidden rounded-lg shadow-xl bg-[#1E3A8A] bg-opacity-80 flex flex-col items-center justify-center text-white p-4 sm:p-6 rotate-y-180">
                                            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Upcoming Events</h3>
                                            <p className="text-center text-xs sm:text-sm">
                                                Stay updated with our exciting events, including cultural fests, sports days, and academic competitions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to="/upcoming-events"
                                    className="mt-6 px-4 py-1 sm:px-6 sm:py-2 text-white bg-[#1E3A8A] font-semibold rounded-full  transition text-sm sm:text-base"
                                >
                                     View Events
                                </Link>
                            </div>

                            {/* Card 2: Gallery */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-full h-64 sm:h-72 md:h-80 group perspective-1000">
                                    <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
                                        {/* Front Face */}
                                        <div className="absolute w-full h-full backface-hidden rounded-lg shadow-xl overflow-hidden">
                                            <div className="relative w-full h-full bg-[#7C2D12] bg-opacity-80">
                                                <img
                                                    src={s2}
                                                    alt="Gallery"
                                                    className="w-full h-full object-cover opacity-50"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = '/default-image.jpg';
                                                    }}
                                                />
                                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                                                    <svg className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM6 14h12v2H6v-2zm0-4h12v2H6v-2zm0-4h12v2H6V6z" />
                                                    </svg>
                                                    <h3 className="text-lg sm:text-xl font-semibold text-center">Gallery</h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Back Face */}
                                        <div className="absolute w-full h-full backface-hidden rounded-lg shadow-xl bg-[#7C2D12] bg-opacity-80 flex flex-col items-center justify-center text-white p-4 sm:p-6 rotate-y-180">
                                            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Gallery</h3>
                                            <p className="text-center text-xs sm:text-sm">
                                                Explore our vibrant campus through photos of events, activities, and student achievements.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to="/gallery"
                                    className="mt-6 px-4 py-1 sm:px-6 sm:py-2 text-white bg-[#7C2D12] font-semibold rounded-full  transition text-sm sm:text-base"
                                >
                                    View Gallery
                                </Link>
                            </div>

                            {/* Card 3: Facilities */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-full h-64 sm:h-72 md:h-80 group perspective-1000">
                                    <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
                                        {/* Front Face */}
                                        <div className="absolute w-full h-full backface-hidden rounded-lg shadow-xl overflow-hidden">
                                            <div className="relative w-full h-full bg-[#15803D] bg-opacity-80">
                                                <img
                                                    src={s1}
                                                    alt="Facilities"
                                                    className="w-full h-full object-cover opacity-50"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = '/default-image.jpg';
                                                    }}
                                                />
                                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                                                    <svg className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 16H7v-4h4v4zm0-6H7V9h4v4zm6 6h-4v-4h4v4zm0-6h-4V9h4v4zm0-6h-4V5h4v2zm2 12h-2V5h2v14z" />
                                                    </svg>
                                                    <h3 className="text-lg sm:text-xl font-semibold text-center">Facilities</h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Back Face */}
                                        <div className="absolute w-full h-full backface-hidden rounded-lg shadow-xl bg-[#15803D] bg-opacity-80 flex flex-col items-center justify-center text-white p-4 sm:p-6 rotate-y-180">
                                            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Facilities</h3>
                                            <p className="text-center text-xs sm:text-sm">
                                                Discover our state-of-the-art facilities, including labs, libraries, and sports amenities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    to="/facilities"
                                    className="mt-6 px-4 py-1 sm:px-6 sm:py-2 text-white bg-[#15803D] font-semibold rounded-full  transition text-sm sm:text-base"
                                >
                                    View Facilities
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
  )
}

export default CampusAndBeyond