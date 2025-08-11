import React from "react";
import { FaChalkboardTeacher, FaUser, FaEnvelope, FaPhone, FaFileUpload } from "react-icons/fa";
import s1 from '../assets/s1.JPG'

const Careers = () => {
  return (
    <div className="w-full bg-[#ebd8b4]">
      {/* Banner Section */}
      <div className="relative bg-[#541212] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10 "></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <FaChalkboardTeacher className="text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Serve with Purpose in a Faith-Centered Educational Community
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-[#541212]mb-2">Educate & Inspire</h2>
              <div className="w-24 h-1 bg-[#541212] mb-6"></div>
              <p className="text-gray-700 mb-6">
                At Mount Carmel School, we are committed to nurturing young minds through quality education grounded in faith and values. We seek dedicated professionals who are passionate about making a meaningful impact in the lives of our students. Join our vibrant community and contribute to shaping the leaders of tomorrow.
              </p>
            </div>
            <div className=" p-6 rounded-lg ">
              <img 
                src={s1} 
                alt="Teaching staff at Mount Carmel"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className=" rounded-lg shadow-xl p-6 md:p-8 border-2 border-[#541212]">
            <h2 className="text-2xl font-bold text-[#541212] mb-2">Fill in your details</h2>
            <div className="w-24 h-1 [#541212] mb-8"></div>
            
            <form className="space-y-6 ">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-gray-700 font-medium">Your Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                    placeholder="Full Name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="mobile" className="block text-gray-700 font-medium">Mobile Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="mobile"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="resume" className="block text-gray-700 font-medium">Upload Resume</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaFileUpload className="text-gray-400" />
                  </div>
                  <input
                    type="file"
                    id="resume"
                    className="block w-full pl-10 pr-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#8B0000]/10 file:text-[#8B0000] hover:file:bg-[#8B0000]/20"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-gray-700 font-medium">Your Message (Optional)</label>
                <textarea
                  id="message"
                  rows="4"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  placeholder="Tell us why you'd like to join our team..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B0000] hover:bg-[#700000] text-white font-bold py-3 px-4 rounded-md transition-colors duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;