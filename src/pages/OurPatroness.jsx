import React from 'react';
import { FaCrown } from 'react-icons/fa';
import ladyofMc from '../assets/Lady-of-Mc.jpg';
import ladyofmc from '../assets/lady-of-mc.png';
import { Link } from 'react-router-dom';

const OurPatroness = () => {
    return (
        <div className="w-full bg-gray-50">
            {/* Banner Section */}
            <div className="relative">
                <div className="absolute inset-0 bg-[#541212] opacity-80"></div>
        <div className="relative z-0 flex justify-center items-center h-64 md:h-96 bg-[#541212]">
            </div>


                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <div className="bg-white/20 p-4 mb-4 rounded-full">
                        <FaCrown className="text-3xl md:text-4xl" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-tight">Our Patroness</h1>
                    <p className="text-2xl md:text-3xl font-light">Our Lady of Mount Carmel</p>
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full bg-white py-12 px-4 md:px-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* Image Container - Matches text height */}
                    <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
                        <div className="relative h-full min-h-[400px]">
                            <img
                                src={ladyofmc}
                                alt="Our Lady of Mount Carmel"
                                className="absolute inset-0 w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-grow flex flex-col justify-center py-4">
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#541212]">
                            Our Patroness – Our Lady of Mount Carmel
                        </h1>

                        <div className="space-y-5 text-lg md:text-xl leading-loose text-gray-800">
                            <p>
                                The title <strong>“Our Lady of Mount Carmel”</strong> originates from <strong>Mount Carmel</strong> in the Holy Land,
                                a sacred place of <strong>prayer, contemplation, and prophetic encounter</strong>. Revered as the <strong>Patroness of the Carmelite Order</strong>,
                                Our Lady of Mount Carmel holds a special place in the heart of our institution. On <strong>July 16<sup>th</sup></strong> we solemnly celebrate
                                the feast of our Patroness.
                            </p>

                            <p>
                                Mary, under this beautiful title, is a <strong>symbol of hope, purity, and unwavering commitment</strong>. As our Patroness,
                                she lovingly shelters us under her protective mantle, guiding our school community to live lives filled with
                                <strong> love, humility, and service</strong>.
                            </p>

                            <p>
                                Her example inspires our students and staff to grow not just in knowledge, but in compassion, grace,
                                and moral strength — forming individuals who strive to make a difference in the world.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link to="/our-foundress">
                                <button className="bg-[#891313] text-white px-4 py-3 rounded-full text-sm font-semibold hover:bg-[#6e1010] transition tracking-wide">
                                    About Our Foundress
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPatroness;