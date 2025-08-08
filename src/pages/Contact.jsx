import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaHeadset } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative bg-[#541212] py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <FaHeadset className="text-4xl md:text-5xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg md:text-xl opacity-90">Reach Out—We're Here to Serve with Grace</p>
        </div>
      </div>

      {/* Contact Details & Form Section */}
      <div className="bg-[#ebd8b4] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Contact Details */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#541212] mb-4">Get in Touch</h2>
              <div className="w-16 h-1 bg-[#541212] border-b-2 border-[#541212] mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#541212] p-3 rounded-full text-white mr-4">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#541212]">Address</h3>
                    <p className="text-gray-700 mt-1">Mount Carmel Central School<br />Mangalore, Karnataka<br />India - 575001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#541212] p-3 rounded-full text-white mr-4">
                    <FaPhone className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#541212]">Phone</h3>
                    <p className="text-gray-700 mt-1">+91 1234567890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#541212] p-3 rounded-full text-white mr-4">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#541212]">Email</h3>
                    <p className="text-gray-700 mt-1">info@mountcarmelschool.edu</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4 text-[#541212]">Connect With Us</h3>
                <div className="flex space-x-5">
                  <a href="#" className="bg-[#541212] text-white p-3 rounded-full hover:bg-[#3a0d0d] transition-colors">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="#" className="bg-[#541212] text-white p-3 rounded-full hover:bg-[#3a0d0d] transition-colors">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="#" className="bg-[#541212] text-white p-3 rounded-full hover:bg-[#3a0d0d] transition-colors">
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#541212] mb-4">Fill Your Details</h2>
              <div className="w-16 h-1 bg-[#541212] border-b-2 border-[#541212] mb-8"></div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#541212] mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#541212]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#541212] mb-2 font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#541212]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-[#541212] mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#541212]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#541212] mb-2 font-medium">Your Message (Optional)</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#541212]"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#541212] text-white py-3 px-6 rounded-lg hover:bg-[#3a0d0d] transition-colors font-medium text-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-96 md:h-[500px]">
        <iframe
          title="Mount Carmel Central School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.012084396642!2d74.8562093153431!3d12.91451999089618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x41e1d3225f5b4c8e!2sMount%20Carmel%20Central%20School!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;