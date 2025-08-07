import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css'
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="relative bg-[#541212] text-white pt-12 pb-6">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[#541212] opacity-95">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://mccsblr.edu.in/wp-content/uploads/2025/07/footer-bg.jpg')" }}
        ></div>
      </div>
      
      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: School Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4">Mount Carmel Central School</h3>
            <div className="w-32 h-32 mb-4">
              <img 
                src= {logo}
                alt="School Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/default-logo.png';
                }}
              />
            </div>
           
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 border-b border-[#c6795a] pb-2">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Upcoming Events', 'Facilities', 'Gallery', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="hover:text-[#ebd8b4] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: About Us */}
          <div>
            <h4 className="text-xl font-semibold mb-4 border-b border-[#c6795a] pb-2">About Us</h4>
            <ul className="space-y-2">
              {['History', 'Our Foundress', 'Our Principal', 'Staff Details', 'Careers'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="hover:text-[#ebd8b4] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-xl font-semibold mb-4 border-b border-[#c6795a] pb-2">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#c6795a]" />
                <address className="not-italic">
                  123 Carmelite Road,<br />
                  Mangalore, Karnataka<br />
                  India - 575002
                </address>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-[#c6795a]" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-[#c6795a]" />
                <a href="mailto:info@mccs.edu.in">info@mccs.edu.in</a>
              </li>
              <li className="flex items-center space-x-4 mt-4">
                <a href="#" className="hover:text-[#ebd8b4] transition-colors duration-300">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="hover:text-[#ebd8b4] transition-colors duration-300">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="hover:text-[#ebd8b4] transition-colors duration-300">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="hover:text-[#ebd8b4] transition-colors duration-300">
                  <FaLinkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-[#c6795a]/30 my-6"></div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-[#ebd8b4]/80">
          © 2025 Mount Carmel Central School. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;