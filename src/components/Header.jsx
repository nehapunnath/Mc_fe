import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUserGraduate, FaUserFriends, FaChevronDown } from 'react-icons/fa';
import logo from '../assets/logo.png';
import ExploreDropdown from './ExploreDropdown';

const Header = () => {
  const [activePage, setActivePage] = useState('Home');
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    explore: false,
    login: false
  });

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
          icon: <FaUserFriends className="text-[#541212] mr-2" />,
        },
        {
          name: 'Student Login',
          href: '/student-login',
          description: 'Connect to learning and resources.',
          icon: <FaUserGraduate className="text-[#541212] mr-2" />,
        },
      ],
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setMobileDropdownOpen({ explore: false, login: false });
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdownOpen(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const closeAllMobileMenus = () => {
    setIsMobileMenuOpen(false);
    setMobileDropdownOpen({ explore: false, login: false });
    setShowExploreDropdown(false);
    setShowLoginDropdown(false);
  };

  return (
    <header className="bg-gradient-to-r from-[#541212] to-[#cc937d] text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo and School Name */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="MCS Logo" className="h-10 w-10 rounded-full" />
          <span className="text-xl font-bold hidden sm:inline">Mount Carmel School</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) => 
              `text-lg font-medium hover:underline underline-offset-4 decoration-2 ${
                isActive ? 'underline' : ''
              }`
            }
            onClick={() => {
              setActivePage('Home');
              setShowExploreDropdown(false);
            }}
          >
            Home
          </NavLink>

          {/* Explore MCS */}
          <div className="relative">
            <button
              className={`text-lg font-medium hover:underline underline-offset-4 decoration-2 flex items-center ${
                activePage === 'Explore MCS' ? 'underline' : ''
              }`}
              onMouseEnter={() => setShowExploreDropdown(true)}
              onClick={() => setShowExploreDropdown(!showExploreDropdown)}
            >
              Explore MCS
              <FaChevronDown className={`ml-1 text-sm transition-transform ${
                showExploreDropdown ? 'rotate-180' : ''
              }`} />
            </button>

            {showExploreDropdown && (
              <div 
                className="absolute left-0"
                onMouseLeave={() => setShowExploreDropdown(false)}
              >
                <ExploreDropdown onMouseLeave={() => setShowExploreDropdown(false)} />
              </div>
            )}
          </div>

          {/* Nav Items */}
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {!item.hasDropdown ? (
                <NavLink
                  to={item.href}
                  className={({ isActive }) => 
                    `text-lg font-medium hover:underline underline-offset-4 decoration-2 ${
                      isActive ? 'underline' : ''
                    }`
                  }
                  onClick={() => {
                    setActivePage(item.name);
                    setShowExploreDropdown(false);
                  }}
                >
                  {item.name}
                </NavLink>
              ) : (
                <>
                  <button
                    className={`text-lg font-medium hover:underline underline-offset-4 decoration-2 flex items-center ${
                      activePage === 'Login' ? 'underline' : ''
                    }`}
                    onMouseEnter={() => setShowLoginDropdown(true)}
                    onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                  >
                    {item.name}
                    <FaChevronDown className={`ml-1 text-sm transition-transform ${
                      showLoginDropdown ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {showLoginDropdown && (
                    <div
                      className="absolute left-0 top-full bg-white text-[#541212] shadow-lg rounded-md w-56 z-50"
                      onMouseEnter={() => setShowLoginDropdown(true)}
                      onMouseLeave={() => setShowLoginDropdown(false)}
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <NavLink
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="flex items-start px-4 py-3 hover:bg-gray-100"
                          onClick={() => {
                            setActivePage(dropdownItem.name);
                            setShowLoginDropdown(false);
                            setShowExploreDropdown(false);
                          }}
                        >
                          {dropdownItem.icon}
                          <div>
                            <div className="font-medium">{dropdownItem.name}</div>
                            <div className="text-sm text-gray-600 mt-1">{dropdownItem.description}</div>
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}

          {/* Admissions Button */}
          <NavLink
            to="/admissions"
            className={({ isActive }) => 
              `text-lg font-semibold px-4 py-2 rounded-md bg-white text-[#541212] hover:bg-gray-100 transition-all ${
                isActive ? 'ring-2 ring-white' : ''
              }`
            }
            onClick={() => {
              setActivePage('Admissions');
              setShowExploreDropdown(false);
            }}
          >
            Admissions
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-[#541212] shadow-lg">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <NavLink 
              to="/" 
              onClick={closeAllMobileMenus}
              className="block font-medium py-2 border-b border-gray-200"
            >
              Home
            </NavLink>

            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleMobileDropdown('explore')}
                className="w-full flex justify-between items-center font-medium py-2"
              >
                <span>Explore MCS</span>
                <FaChevronDown className={`transition-transform ${
                  mobileDropdownOpen.explore ? 'rotate-180' : ''
                }`} />
              </button>
              {mobileDropdownOpen.explore && (
                <div className="pl-4 mt-2 mb-3 space-y-3">
                  {/* Simplified mobile version of ExploreDropdown content */}
                  {[
                    { title: "Our Patroness", href: "/about/our-patroness" },
                    { title: "Our Foundress", href: "/about/our-foundress" },
                    { title: "History", href: "/about/history" },
                    { title: "Our Principal", href: "/about/our-principal" },
                    { title: "Staff Details", href: "/about/staff-details" },
                    { title: "Office Timings", href: "/school-life/office-timings" },
                    { title: "Facilities", href: "/school-life/facilities" },
                    { title: "Assessment Details", href: "/school-life/assessment-details" },
                    { title: "Upcoming Events", href: "/get-involved/upcoming-events" },
                    { title: "Gallery", href: "/get-involved/gallery" }
                  ].map((item) => (
                    <NavLink
                      key={item.title}
                      to={item.href}
                      onClick={closeAllMobileMenus}
                      className="block py-1 text-gray-700 hover:text-[#541212]"
                    >
                      {item.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-200">
                {!item.hasDropdown ? (
                  <NavLink 
                    to={item.href} 
                    onClick={closeAllMobileMenus}
                    className="block font-medium py-2"
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown('login')}
                      className="w-full flex justify-between items-center font-medium py-2"
                    >
                      <span>{item.name}</span>
                      <FaChevronDown className={`transition-transform ${
                        mobileDropdownOpen.login ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {mobileDropdownOpen.login && (
                      <div className="pl-4 mt-2 mb-3 space-y-3">
                        {item.dropdownItems.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.href}
                            onClick={closeAllMobileMenus}
                            className="flex items-start py-2 text-gray-700 hover:text-[#541212]"
                          >
                            {subItem.icon}
                            <div className="ml-2">
                              <div>{subItem.name}</div>
                              <div className="text-xs text-gray-500 mt-1">
                                {subItem.description}
                              </div>
                            </div>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            <NavLink
              to="/admissions"
              onClick={closeAllMobileMenus}
              className="block text-center font-semibold mt-4 bg-[#541212] text-white px-4 py-3 rounded-md"
            >
              Admissions
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;