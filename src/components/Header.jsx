import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserGraduate, FaUserFriends, FaChalkboardTeacher } from 'react-icons/fa';
import logo from '../assets/logo.png';
import ExploreDropdown from './ExploreDropdown';

const Header = () => {
  const [activePage, setActivePage] = useState('Home');
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  useEffect(() => {
    const path = window.location.pathname.split('/').pop() || 'home';
    setActivePage(path.charAt(0).toUpperCase() + path.slice(1));
  }, []);

  const navItems = [
    { name: 'Newsletter', href: '/newsletter', hasDropdown: false },
    { name: 'Contact', href: '/contact', hasDropdown: false },
    {
      name: 'Login',
      href: '/login',
      hasDropdown: true,
      dropdownItems: [
        { 
          name: 'Parent Login', 
          href: '/parent-login',
          description: 'Access updates, reports, and communication.',
          icon: <FaUserFriends className="text-[#541212] mr-2" />
        },
        { 
          name: 'Student Login', 
          href: '/student-login',
          description: 'Connect to learning and resources.',
          icon: <FaUserGraduate className="text-[#541212] mr-2 " />
        },

      ],
    },
  ];

  return (
    <header className="bg-gradient-to-r from-[#541212] to-[#cc937d] text-white py-4 shadow-lg relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and School Name */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="MCS Logo" className="h-10 w-10 rounded-full" />
          <span className="text-xl font-bold">Mount Carmel School</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-8 items-center">
          {/* Home Link */}
          <div className="relative">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `text-lg font-medium no-underline transition-all duration-200 ${
                  isActive ? 'underline underline-offset-4' : ''
                }`
              }
              style={({ isActive }) => ({
                color: 'white',
                textDecoration: 'none',
              })}
              onClick={() => setActivePage('Home')}
            >
              <span className="hover:underline underline-offset-4 decoration-2">
                Home
              </span>
            </NavLink>
          </div>

          {/* Explore MCS */}
          <div 
            className="relative"
            onMouseEnter={() => setShowExploreDropdown(true)}
            onMouseLeave={() => setShowExploreDropdown(false)}
          >
            <div className={`text-lg font-medium cursor-pointer ${activePage === 'Explore MCS' ? 'underline underline-offset-4' : ''}`}>
              <span className="hover:underline underline-offset-4 decoration-2">
                Explore MCS
              </span>
            </div>
            
            {showExploreDropdown && <ExploreDropdown onMouseLeave={() => setShowExploreDropdown(false)} />}
          </div>

          {/* Regular Navigation Items */}
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.hasDropdown && setShowLoginDropdown(true)}
              onMouseLeave={() => item.hasDropdown && setShowLoginDropdown(false)}
            >
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `text-lg font-medium no-underline transition-all duration-200 ${
                    isActive ? 'underline underline-offset-4' : ''
                  }`
                }
                style={({ isActive }) => ({
                  color: 'white',
                  textDecoration: 'none',
                })}
                onClick={() => setActivePage(item.name)}
              >
                <span className="hover:underline underline-offset-4 decoration-2">
                  {item.name}
                </span>
              </NavLink>

              {item.hasDropdown && (
                <div 
                  className={`absolute left-0 top-full bg-white text-black shadow-lg rounded-md w-56 z-50 transition-all duration-200 ${
                    showLoginDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  {item.dropdownItems?.map((dropdownItem) => (
                    <NavLink
                      key={dropdownItem.name}
                      to={dropdownItem.href}
                      className="flex items-start px-4 py-3 hover:bg-gray-100"
                      style={({ isActive }) => ({
                        color: 'inherit',
                        textDecoration: 'none',
                      })}
                      onClick={() => setActivePage(dropdownItem.name)}
                    >
                      {dropdownItem.icon}
                      <div>
                        <div className="font-medium text-[#541212]">{dropdownItem.name}</div>
                        <div className="text-sm text-gray-600 mt-1">{dropdownItem.description}</div>
                      </div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Admissions Button */}
          <NavLink
            to="/admissions"
            className={({ isActive }) =>
              `text-lg font-semibold px-4 py-2 rounded-md bg-white text-[#541212] hover:bg-gray-100 transition-all duration-200 ${
                isActive ? 'underline underline-offset-4' : ''
              }`
            }
            style={{ textDecoration: 'none' }}
            onClick={() => setActivePage('Admissions')}
          >
            <span className="hover:underline">Admissions</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;