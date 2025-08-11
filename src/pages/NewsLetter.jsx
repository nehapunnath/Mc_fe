import React from 'react';
import { FaNewspaper, FaArrowRight } from 'react-icons/fa';

const Newsletter = () => {
  // Sample newsletter data
  const newsletters = [
    {
      id: 1,
      title: "Annual School Magazine 2023",
      date: "December 15, 2023",
      description: "Celebrating another year of academic excellence and student achievements at Mount Carmel.",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Sports Day Special Edition",
      date: "November 5, 2023",
      description: "Relive the excitement of our annual sports day through pictures and student accounts.",
      image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      title: "Science Fair Highlights",
      date: "October 20, 2023",
      description: "Showcasing innovative projects from our young scientists and future innovators.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      title: "Cultural Fest Recap",
      date: "September 12, 2023",
      description: "A colorful documentation of our annual cultural festival celebrating diversity and talent.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      title: "New Academic Programs",
      date: "August 5, 2023",
      description: "Learn about our new curriculum enhancements and special programs for the academic year.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      title: "Alumni Success Stories",
      date: "July 18, 2023",
      description: "Where are they now? Catch up with our distinguished alumni making waves in various fields.",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="w-full bg-[#ebd8b4]">
      {/* Banner Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#541212] opacity-90"></div>
        <div className="relative z-0 flex justify-center items-center h-64 md:h-96 bg-[#541212]">

        {/* <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Newsletter Banner" 
          className="w-full h-64 md:h-96 object-cover"
        /> */}
        </div>
        
        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 ">
          <div className="bg-white/20 p-4 rounded-full mb-4">
            <FaNewspaper className="text-3xl md:text-4xl" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Newsletter</h1>
          <p className="text-lg md:text-xl max-w-2xl">News, Stories, and Milestones from across Campus</p>
        </div>
      </div>

      {/* Newsletter Content */}
      <div className="container mx-auto px-4 py-12 md:py-20 bg-[#ebd8b4] ">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#541212] mb-3">Latest Publications</h2>
          <div className="w-20 h-1 bg-[#541212] mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Stay updated with our monthly collections of school news, student achievements, and upcoming events.
          </p>
        </div>

        {/* Newsletter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsletters.map((newsletter) => (
            <div key={newsletter.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={newsletter.image} 
                alt={newsletter.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-gray-500">{newsletter.date}</span>
                <h3 className="text-xl font-bold text-[#541212] mt-1 mb-2">{newsletter.title}</h3>
                <p className="text-gray-600 mb-4">{newsletter.description}</p>
                {/* <button className="flex items-center text-[#541212] font-medium hover:text-[#3a0d0d] transition-colors">
                  Read More <FaArrowRight className="ml-2" />
                </button> */}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default Newsletter;