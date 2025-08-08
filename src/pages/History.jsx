import React from 'react';
import { FaHistory, FaSchool, FaChalkboardTeacher } from 'react-icons/fa';
import s1 from '../assets/s1.JPG';
import { Link } from 'react-router-dom';

const History = () => {
    return (
        <div className="w-full ">
            {/* Banner Section */}
            <div className="relative bg-[#541212] py-20 md:py-28">
                <div className="container mx-auto px-4 text-center text-white relative z-10">
                    <div className="flex justify-center mb-4">
                        <div className="bg-white/20 p-4 rounded-full">
                            <FaHistory className="text-3xl" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">History</h1>
                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                        A Legacy of Academic Excellence and Spiritual Values Since 1944
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full bg-[#ebd8b4] py-12 md:py-16">
                <div className=" w-full  px-4 ">
                    <div className="max-w-7xl mx-auto bg-[#ebd8b4] r overflow-hidden">
                        {/* Image Section - Now at the top */}
                        <div className="w-full">
                            <img
                                src={s1}
                                alt="MCCS Building"
                                className="w-full h-96 md:h-[28rem] object-cover"
                            />
                        </div>

                        {/* Content Below Image */}
                        <div className="p-8">
                            <p className="text-sm text-[#541212] bg-[#ebd8b4] font-semibold mb-2">ABOUT US</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#541212] mb-4">History</h2>
                            <h3 className="text-xl text-gray-700 mb-6">A Legacy Rooted in Excellence and Values</h3>
                            <div className="space-y-4  text-black text-xl leading-relaxed">
                                <p>
                                    Mount Carmel Central School (MCCS) established in 2017 under the visionary leadership of Mount Carmel College, one of India's premier institutions dedicated to empowering young women through education. The school is managed by the Carmelite Sisters of St. Teresa (CSST), a congregation founded in 1887 by Mother Teresa of St. Rose of Lima, who envisioned a society transformed through love, learning, and service.
                                </p>
                                <p>
                                    Though MCCS is a relatively young institution, it inherits a rich educational heritage spanning over 75 years. The founding ideals of the CSST — academic excellence, moral integrity, and service to society — remain the cornerstone of our mission today.
                                </p>
                                <p>
                                    Affiliated to the Central Board of Secondary Education (CBSE), New Delhi (Affiliation No. 831084), MCCS has quickly earned a reputation for its vibrant learning environment, strong academic foundation, and value-based approach to education. The school was founded to extend the legacy of Mount Carmel's holistic education to younger students, fostering intellectual curiosity, leadership, and character from an early age.
                                </p>
                                <p>
                                    Our campus stands as a symbol of our commitment to providing a nurturing space where students not only learn but also grow into responsible, compassionate citizens. With a dedicated faculty, modern facilities, and a spirit rooted in faith and service, MCCS continues to build on its strong foundation, preparing students to meet the challenges of a changing world with confidence and purpose.
                                </p>
                            </div>
                        </div>

                        {/* Buttons Section */}
                        <div className=" px-8 py-6 bg-[#ebd8b4]">
                            <div className="flex flex-wrap justify-center gap-4 bg-[#ebd8b4]">
                                <Link to="/about/our-foundress">
                                    <button className="flex items-center bg-[#541212] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3a0d0d] transition">
                                        Our Foundress
                                    </button>
                                </Link>

                                <Link to="/about/our-principal">
                                <button className="flex items-center bg-[#541212] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3a0d0d] transition">
                                    Our Principal
                                </button>
                                </Link>

                                
                                <Link to="/about/staff-details">
                                <button className="flex items-center bg-[#541212] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3a0d0d] transition">
                                    Teaching Staff
                                </button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;