import React from 'react';
import { FaClock, FaUserTie, FaSchool, FaPhone, FaCalendarAlt, FaBell, FaChalkboardTeacher, FaEnvelope } from 'react-icons/fa';

const OfficeDetails = () => {
    return (
        <div className="w-full bg-[#ebd8b4]">
            {/* Banner Section */}
            <div className="relative bg-[#541212] py-20 md:py-28">
                <div className="absolute inset-0 opacity-10 bg-[url('https://mccsblr.edu.in/wp-content/uploads/2023/06/pattern.png')]"></div>
                <div className="container mx-auto px-4 text-center text-white relative z-10">
                    <div className="flex justify-center mb-4">
                        <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                            <FaClock className="text-3xl" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Office Timings</h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        Plan your visit during designated office hours
                    </p>
                </div>
            </div>

            {/* Three Box Section */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Box 1 - Office Timings */}
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-[#f0e6d2] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#8B0000] to-[#541212]"></div>
                        <div className="text-white bg-[#541212] p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                            <FaClock className="text-2xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#541212] mb-4 text-center">Office Timings</h2>
                        <div className="space-y-4 text-gray-700 flex-grow">
                            <div className="bg-[#f9f5f0] p-3 rounded-lg">
                                <div className="flex items-center gap-2 text-[#541212] font-semibold mb-1">
                                    <FaCalendarAlt />
                                    <h3>Monday – Friday</h3>
                                </div>
                                <ul className="space-y-2 pl-6">
                                    <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#541212]">
                                        9:30 am – 11:00 am
                                    </li>
                                    <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#541212]">
                                        12:30 pm – 1:30 pm
                                    </li>
                                    <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-[#541212]">
                                        3:00 pm – 3:30 pm
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#f9f5f0] p-3 rounded-lg">
                                <div className="flex items-center gap-2 text-[#541212] font-semibold mb-1">
                                    <FaCalendarAlt />
                                    <h3>Saturdays (1st & 3rd)</h3>
                                </div>
                                <p>10:00 am – 11:30 am</p>
                            </div>

                            <div className="text-sm bg-[#fff8ee] p-3 rounded-lg border border-[#f0e6d2]">
                                <p className="italic">School office closed on:</p>
                                <ul className="list-disc list-inside ml-2 mt-1">
                                    <li>Saturday afternoons</li>
                                    <li>Sundays</li>
                                    <li>Second Saturdays</li>
                                    <li>Public holidays</li>
                                </ul>
                            </div>

                            <div className="flex items-start gap-2 text-sm bg-[#f9f5f0] p-3 rounded-lg">
                                <FaPhone className="text-[#541212] mt-0.5" />
                                <p>* No phone calls before 8:30 am or after 4:00pm</p>
                            </div>
                        </div>

                        {/* Contact Button at bottom */}
                        <div className="mt-auto pt-6">
                            <button className="w-full bg-[#541212] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#3a0d0d] transition flex items-center justify-center gap-2">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Box 2 - Visiting Hours */}
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-[#f0e6d2] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#8B0000] to-[#541212]"></div>
                        <div className="text-white bg-[#541212] p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                            <FaUserTie className="text-2xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#541212] mb-4 text-center">Visiting Hours</h2>
                        <div className="space-y-4 text-gray-700 flex-grow">
                            <div className="bg-[#f9f5f0] p-4 rounded-lg border-l-4 border-[#541212]">
                                <h3 className="font-semibold text-[#541212] flex items-center gap-2">
                                    <FaUserTie />
                                    Principal
                                </h3>
                                <p className="mt-2">10:00 am – 11:30 am</p>
                                <p className="text-sm italic mt-2 bg-[#fff8ee] p-2 rounded">
                                    Prior appointment MUST be obtained
                                </p>
                            </div>

                            <div className="bg-[#f9f5f0] p-4 rounded-lg border-l-4 border-[#8B0000]">
                                <h3 className="font-semibold text-[#541212] flex items-center gap-2">
                                    <FaChalkboardTeacher />
                                    Class Teachers
                                </h3>
                                <p className="mt-2">3:00 pm – 3:30 pm</p>
                            </div>
                        </div>

                        {/* Contact Button at bottom */}
                        <div className="mt-auto pt-6">
                            <button className="w-full bg-[#541212] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#3a0d0d] transition flex items-center justify-center gap-2">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Box 3 - School Timings */}
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-[#f0e6d2] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#8B0000] to-[#541212]"></div>
                        <div className="text-white bg-[#541212] p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                            <FaSchool className="text-2xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#541212] mb-4 text-center">School Timings</h2>
                        <div className="space-y-4 text-gray-700 flex-grow">
                            <div className="bg-[#f9f5f0] rounded-lg overflow-hidden">
                                <div className="bg-[#541212] text-white px-4 py-2 font-semibold flex items-center gap-2">
                                    <FaBell />
                                    Daily Schedule
                                </div>
                                <div className="p-4">
                                    <ul className="space-y-3">
                                        <li className="flex justify-between border-b border-[#f0e6d2] pb-2">
                                            <span className="font-medium">PRE-K:</span>
                                            <span>9:00 am – 12:30 pm</span>
                                        </li>
                                        <li className="flex justify-between border-b border-[#f0e6d2] pb-2">
                                            <span className="font-medium">LKG & UKG:</span>
                                            <span>8:30 am – 1:30 pm</span>
                                        </li>
                                        <li className="flex justify-between border-b border-[#f0e6d2] pb-2">
                                            <span className="font-medium">I to X (Mon-Fri):</span>
                                            <span>8:30 am – 3:15 pm</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span className="font-medium">VI to X (Sat):</span>
                                            <span>8:30 am – 12:30 pm</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-[#fff8ee] p-3 rounded-lg border border-[#f0e6d2] text-center">
                                <p className="font-semibold text-[#541212] flex items-center justify-center gap-2">
                                    <FaBell className="animate-pulse" />
                                    Assembly Time: 8:30 am (Mon-Sat)
                                </p>
                            </div>
                        </div>

                        {/* Contact Button at bottom */}
                        <div className="mt-auto pt-6">
                            <button className="w-full bg-[#541212] text-white px-4 py-3 rounded-lg font-medium hover:bg-[#3a0d0d] transition flex items-center justify-center gap-2">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeDetails;