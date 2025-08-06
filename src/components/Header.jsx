import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full text-white px-6 py-4 flex items-center justify-between relative z-50">
      {/* Logo + Name */}
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="h-12 w-12" />
        <div className="font-bold text-sm leading-tight">
          <div>MOUNT CARMEL CENTRAL SCHOOL</div>
          <div className="text-xs">BENGALURU - 560052</div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center space-x-8 text-sm font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `relative pb-1 transition-all duration-300 hover:underline underline-offset-4 ${
              isActive ? 'underline' : ''
            }`
          }
        >
          Home
        </NavLink>

        {/* Explore MCS Dropdown */}
        <div className="relative group">
          <button className="relative pb-1 transition-all duration-300 group-hover:underline underline-offset-4">
            Explore MCS
          </button>
          <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white text-black shadow-md py-2 rounded min-w-[160px] z-50">
            <Link to="/about" className="px-4 py-2 hover:bg-gray-100">About Us</Link>
            <Link to="/faculty" className="px-4 py-2 hover:bg-gray-100">Faculty</Link>
            <Link to="/events" className="px-4 py-2 hover:bg-gray-100">Events</Link>
          </div>
        </div>

        <NavLink
          to="/newsletter"
          className={({ isActive }) =>
            `relative pb-1 transition-all duration-300 hover:underline underline-offset-4 ${
              isActive ? 'underline' : ''
            }`
          }
        >
          Newsletter
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `relative pb-1 transition-all duration-300 hover:underline underline-offset-4 ${
              isActive ? 'underline' : ''
            }`
          }
        >
          Contact
        </NavLink>

        {/* Login Dropdown */}
        <div className="relative group">
          <button className="relative pb-1 transition-all duration-300 group-hover:underline underline-offset-4">
            Login
          </button>
          <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white text-black shadow-md py-2 rounded min-w-[160px] z-50">
            <Link to="/student-login" className="px-4 py-2 hover:bg-gray-100">Student</Link>
            <Link to="/staff-login" className="px-4 py-2 hover:bg-gray-100">Staff</Link>
          </div>
        </div>

        {/* Admissions Button */}
        <Link
          to="/admissions"
          className="bg-white text-[#8B0000] font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition"
        >
          Admissions
        </Link>
      </nav>
    </header>
  );
};

export default Header;