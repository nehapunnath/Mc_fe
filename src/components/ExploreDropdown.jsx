import React from 'react';
import { NavLink } from 'react-router-dom';
import mc9 from '../assets/mc9.JPG';
import { 
  FaChurch, 
  FaUserTie, 
  FaHistory, 
  FaChalkboardTeacher,
  FaClock,
  FaSchool,
  FaClipboardCheck,
  FaInfoCircle,
  FaFileAlt,
  FaCalendarAlt,
  FaImages,
  FaUserGraduate,
  FaDoorOpen
} from 'react-icons/fa';

const ExploreDropdown = ({ onMouseLeave }) => {
  return (
    <div 
      className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-6xl bg-white rounded-xl shadow-2xl z-50 overflow-hidden border border-gray-200"
      onMouseLeave={onMouseLeave}
    >
      <div className="grid grid-cols-4 h-full">
        {/* Column 1: Full Image with Overlay */}
        <div className="relative group h-full min-h-[500px]">
          <img 
            src={mc9} 
            alt="Mount Carmel School Campus"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#541212cc] to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-2xl  font-bold mb-2">Mount Carmel School</h2>
            <p className="text-white/90">
              Learn about our journey, campus life, academics, and more—your complete guide to Mount Carmel School.
            </p>
          </div>
        </div>

        {/* Column 2: About */}
        <div className="p-6  bg-[#ebd8b4]">
          <h2 className="text-xl font-bold text-[#541212] mb-4 flex items-center">
            <FaChurch className="mr-2" /> About
          </h2>
          <ul className="space-y-3">
            {[
              { icon: <FaChurch />, title: "Our Patroness", desc: "Our Lady of Mount Carmel." },
              { icon: <FaUserTie />, title: "Our Foundress", desc: "Visionary behind our noble mission." },
              { icon: <FaHistory />, title: "History", desc: "Our legacy of empowering education." },
              { icon: <FaChalkboardTeacher />, title: "Our Principal", desc: "Guiding our students with purpose." },
              { icon: <FaUserGraduate />, title: "Staff Details", desc: "Dedicated minds shaping young futures." }
            ].map((item) => (
              <li key={item.title} className="group">
                <NavLink 
                  to={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-start py-2 hover:bg-gray-50 px-2 rounded transition-colors"
                >
                  <span className="text-[#541212] mr-3 mt-1">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-[#541212]">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: School Life & Info */}
        <div className="p-6 ">
          <h2 className="text-xl font-bold text-[#541212] mb-4 flex items-center">
            <FaSchool className="mr-2" /> School Life & Info
          </h2>
          <ul className="space-y-3">
            {[
              { icon: <FaClock />, title: "Office Timings", desc: "Official hours for assistance." },
              { icon: <FaSchool />, title: "Facilities", desc: "Explore our learning-friendly infrastructure." },
              { icon: <FaClipboardCheck />, title: "Assessment Details", desc: "Monitoring progress with purpose." },
              { icon: <FaInfoCircle />, title: "School Info", desc: "Essential details about our institution." },
              { icon: <FaFileAlt />, title: "Mandatory Public Disclosure", desc: "Official documents for public view." }
            ].map((item) => (
              <li key={item.title} className="group">
                <NavLink 
                  to={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-start py-2 hover:bg-gray-50 px-2 rounded transition-colors"
                >
                  <span className="text-[#541212] mr-3 mt-1">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-[#541212]">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Get Involved */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#541212] mb-4 flex items-center">
            <FaCalendarAlt className="mr-2" /> Get Involved
          </h2>
          <ul className="space-y-3">
            {[
              { icon: <FaCalendarAlt />, title: "Upcoming Events", desc: "Stay updated on school events." },
              { icon: <FaImages />, title: "Gallery", desc: "Snapshots of school life moments." },
              { icon: <FaUserTie />, title: "Careers", desc: "Join our inspiring academic team." },
              { icon: <FaDoorOpen />, title: "Admissions", desc: "Enroll today, inspire tomorrow's leaders." }
            ].map((item) => (
              <li key={item.title} className="group">
                <NavLink 
                  to={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-start py-2 hover:bg-gray-50 px-2 rounded transition-colors"
                >
                  <span className="text-[#541212] mr-3 mt-1">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-[#541212]">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExploreDropdown;