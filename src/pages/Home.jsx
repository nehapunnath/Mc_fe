import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import About from '../components/About';

function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Background Section with Gradient */}
            <div
                style={{
                    background: 'linear-gradient(to right, #541212, #cc937dff)',
                }}
                className="relative overflow-hidden"
            >
                <Header />

                {/* 2-Column Section (Image + Video) - Responsive Stacking */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center min-h-[300px] sm:min-h-[340px]">
                        {/* Image Column */}
                        <div className="h-full rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-500">
                            <img
                                src="https://mccsblr.edu.in/wp-content/uploads/2025/07/June-2025-Photos-16.jpg"
                                alt="Mount Carmel School Campus"
                                className="w-full h-full object-cover min-h-[200px] sm:min-h-[300px]"
                                loading="lazy"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/default-school.jpg';
                                }}
                            />
                        </div>

                        {/* Video Column */}
                        <div className="h-full relative rounded-lg overflow-hidden shadow-xl aspect-video md:aspect-auto md:min-h-[300px]">
                            <div className="w-full h-full">
                                <iframe
                                    className="w-full h-full rounded-lg min-h-[200px] sm:min-h-[300px]"
                                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                                    title="Mount Carmel School Video Tour"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Welcome Section */}
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

            {/* Campus Life & Beyond Section */}
            <main className="flex-grow">
                <section className="py-12 sm:py-16" style={{ backgroundColor: '#f0e7e3ff' }}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                            Campus Life & Beyond
                        </h2>
                        <div className="w-24 h-1 bg-[#541212] mx-auto mb-6"></div>
                        <p className="text-base sm:text-lg text-gray-700 text-center mb-8 sm:mb-12 px-4">
                            Discover the vibrant and enriching experiences that define life at Mount Carmel Central School, from engaging events to state-of-the-art facilities.
                        </p>

                        {/* Cards Section - Responsive Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
                            {/* Card 1: Upcoming Events */}
                            <div className="flex flex-col items-center">
                                <div className="relative w-full h-64 sm:h-72 md:h-80 group perspective-1000">
                                    <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
                                        {/* Front Face */}
                                        <div className="absolute w-full h-full backface-hidden rounded-lg shadow-xl overflow-hidden">
                                            <div className="relative w-full h-full bg-[#1E3A8A] bg-opacity-80">
                                                <img
                                                    src="https://mccsblr.edu.in/wp-content/uploads/2025/07/June-2025-Photos-10.jpg"
                                                    alt="Upcoming Events"
                                                    className="w-full h-full object-cover opacity-50"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.onerror = null;
                                                        e.target.src = '/default-image.jpg';
                                                    }}
                                                />
                                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                                                    <svg className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zM7 11h10v2H7v-2zm0 4h10v2H7v-2z" />
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
                                    to="/events"
                                    className="mt-4 px-4 py-1 sm:px-6 sm:py-2 bg-white text-[#1E3A8A] font-semibold rounded-full hover:bg-gray-200 transition text-sm sm:text-base"
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
                                                    src="https://mccsblr.edu.in/wp-content/uploads/2025/07/June-2025-Photos-12.jpg"
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
                                    className="mt-4 px-4 py-1 sm:px-6 sm:py-2 bg-white text-[#7C2D12] font-semibold rounded-full hover:bg-gray-200 transition text-sm sm:text-base"
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
                                                    src="https://mccsblr.edu.in/wp-content/uploads/2025/07/June-2025-Photos-14.jpg"
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
                                    className="mt-4 px-4 py-1 sm:px-6 sm:py-2 bg-white text-[#15803D] font-semibold rounded-full hover:bg-gray-200 transition text-sm sm:text-base"
                                >
                                    View Facilities
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Principal's Message Section */}
            <section className="py-12 sm:py-16" style={{ backgroundColor: '#f0e7e3ff' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Side - Text Content */}
                        <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
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
                                <p className="font-semibold text-lg text-[#541212]">- Dr. Susan Mathew</p>
                                <p className="text-gray-600 text-sm sm:text-base">Principal, Mount Carmel School</p>
                            </div>
                            
                            <button className="mt-4 sm:mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-[#541212] text-white rounded-lg hover:bg-[#3a0d0d] transition duration-300 text-sm sm:text-base">
                                Read More
                            </button>
                        </div>
                        
                        {/* Right Side - Principal's Image */}
                        <div className="flex justify-center md:justify-end order-1 md:order-2">
                            <div className="relative w-full max-w-md h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                                <img
                                    src="https://images.tech.co/wp-content/uploads/2023/10/16074111/Abigail_Baily_1920x1214-min_1_1000x632_1_800x506.png"
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
            <section className="py-12 sm:py-20" style={{ backgroundColor: '#f0e7e3ff' }}>
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
            
            <About />
        </div>
    );
}

export default Home;