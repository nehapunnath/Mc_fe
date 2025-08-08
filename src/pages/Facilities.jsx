import React from 'react';
import { FaBook, FaFlask, FaFutbol, FaMusic, FaLaptop, FaChalkboard, FaBuilding } from 'react-icons/fa';

const Facilities = () => {
  return (
    <div className="w-full bg-white">
      {/* Banner Section */}
      <div className="relative bg-[#541212] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10 bg-[url('https://mccsblr.edu.in/wp-content/uploads/2023/06/pattern.png')]"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <FaBuilding className="text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Facilities</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Facilities Designed for a Nurturing Learning Environment
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Left Side Content */}
          <div className="mb-12 md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-[#541212] mb-4">
              Spaces That Inspire Learning and Growth
            </h2>
            <div className="w-20 h-1 bg-[#541212] mb-6"></div>
            <p className="text-lg text-gray-700 mb-8">
              Each space at MCCS is designed to spark curiosity and support holistic student development.
            </p>
          </div>

          {/* Gallery Slider - Same as About page */}
          <div className="px-4 md:px-16 py-12">
            <div className="relative">
              <div 
                className="flex overflow-x-auto pb-4 space-x-8 cursor-grab active:cursor-grabbing scrollbar-hide"
                onMouseDown={(e) => {
                  const slider = e.currentTarget;
                  let isDown = false;
                  let startX = e.pageX - slider.offsetLeft;
                  let scrollLeft = slider.scrollLeft;

                  const mouseDown = () => isDown = true;
                  const mouseLeave = () => isDown = false;
                  const mouseUp = () => isDown = false;
                  const mouseMove = (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - slider.offsetLeft;
                    const walk = (x - startX) * 2;
                    slider.scrollLeft = scrollLeft - walk;
                  };

                  slider.addEventListener('mousemove', mouseMove);
                  slider.addEventListener('mouseup', mouseUp);
                  slider.addEventListener('mouseleave', mouseLeave);

                  return () => {
                    slider.removeEventListener('mousemove', mouseMove);
                    slider.removeEventListener('mouseup', mouseUp);
                    slider.removeEventListener('mouseleave', mouseLeave);
                  };
                }}
              >
                {/* Library Card */}
                <div className="relative flex-shrink-0 w-[24rem] h-[32rem] group">
                  <img
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Library"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <div className="bg-[#541212]/10 p-4 rounded-full inline-block mb-4">
                        <FaBook className="text-2xl text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">
                        Modern Library
                      </h4>
                      <p className="text-gray-200 text-base">
                        Our well-stocked library with thousands of books, journals, and digital resources to support academic and leisure reading.
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#541212] via-[#541212]/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Science Labs Card */}
                <div className="relative flex-shrink-0 w-[24rem] h-[32rem] group">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Science Labs"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <div className="bg-[#541212]/10 p-4 rounded-full inline-block mb-4">
                        <FaFlask className="text-2xl text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">
                        Science Laboratories
                      </h4>
                      <p className="text-gray-200 text-base">
                        State-of-the-art labs for Physics, Chemistry, and Biology with modern equipment for hands-on learning and research.
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#541212] via-[#541212]/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Sports Facilities Card */}
                <div className="relative flex-shrink-0 w-[24rem] h-[32rem] group">
                  <img
                    src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Sports Facilities"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <div className="bg-[#541212]/10 p-4 rounded-full inline-block mb-4">
                        <FaFutbol className="text-2xl text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">
                        Sports Complex
                      </h4>
                      <p className="text-gray-200 text-base">
                        Comprehensive sports infrastructure including playgrounds, indoor courts, and equipment for various sports activities.
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#541212] via-[#541212]/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Auditorium Card */}
                <div className="relative flex-shrink-0 w-[24rem] h-[32rem] group">
                  <img
                    src="https://images.unsplash.com/photo-1567942712661-82b9b407abbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Auditorium"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <div className="bg-[#541212]/10 p-4 rounded-full inline-block mb-4">
                        <FaMusic className="text-2xl text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">
                        Auditorium
                      </h4>
                      <p className="text-gray-200 text-base">
                        A spacious auditorium with modern acoustics and seating for cultural events, seminars, and performances.
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#541212] via-[#541212]/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Computer Lab Card */}
                <div className="relative flex-shrink-0 w-[24rem] h-[32rem] group">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Computer Lab"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-8">
                      <div className="bg-[#541212]/10 p-4 rounded-full inline-block mb-4">
                        <FaLaptop className="text-2xl text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">
                        Computer Labs
                      </h4>
                      <p className="text-gray-200 text-base">
                        High-tech computer labs with the latest hardware and software to support digital learning and innovation.
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#541212] via-[#541212]/40 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;