import React from 'react';
import { FaInfoCircle, FaFileAlt, FaBalanceScale, FaSchool } from 'react-icons/fa';

const SchoolInfo = () => {
  return (
    <div className="w-full bg-[#ebd8b4]">
      {/* Banner Section */}
      <div className="relative bg-[#541212] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10 bg-[url('https://mccsblr.edu.in/wp-content/uploads/2023/06/pattern.png')]"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <FaInfoCircle className="text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">School Info</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Transparency in Education: Our Commitments and Provisions
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container bg-[#ebd8b4] mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Three Boxes Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Fee Structure Box */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="bg-[#541212]/10 p-4 rounded-full inline-block mb-4">
                  <FaFileAlt className="text-2xl text-[#541212]" />
                </div>
                <h3 className="text-xl font-bold text-[#541212] mb-2">Fee Structure</h3>
                <p className="text-gray-600 mb-4">
                  Transparent and detailed overview of tuition and associated fees for all classes.
                </p>
                <button className="text-[#541212] font-semibold hover:underline flex items-center">
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Affidavit Box */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="bg-[#541212]/10 p-4 rounded-full inline-block mb-4">
                  <FaBalanceScale className="text-2xl text-[#541212]" />
                </div>
                <h3 className="text-xl font-bold text-[#541212] mb-2">Affidavit</h3>
                <p className="text-gray-600 mb-4">
                  Essential declarations and compliance documents required for school admissions.
                </p>
                <button className="text-[#541212] font-semibold hover:underline flex items-center">
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Infrastructure Box */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="bg-[#541212]/10 p-4 rounded-full inline-block mb-4">
                  <FaSchool className="text-2xl text-[#541212]" />
                </div>
                <h3 className="text-xl font-bold text-[#541212] mb-2">Infrastructure Details</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive look at our campus facilities that foster academic excellence.
                </p>
                <button className="text-[#541212] font-semibold hover:underline flex items-center">
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>
    </div>
  );
};

export default SchoolInfo;