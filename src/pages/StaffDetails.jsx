import React from "react";
import { FaChalkboardTeacher, FaUserTie, FaUserGraduate, FaUserShield } from "react-icons/fa";

const StaffDetails = () => {
  // Placeholder image URLs from Google
  const placeholderPrincipal = "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
  const placeholderTeacher = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
  const placeholderAdmin = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
  const placeholderSupport = "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";

  const staffCategories = [
    {
      title: "Leadership Team",
      icon: <FaUserTie className="text-3xl" />,
      staff: [
        { img: placeholderPrincipal, name: "Nakshathra", position: "Principal" },
        { img: placeholderPrincipal, name: "Fr. John", position: "Correspondent" },
        { img: placeholderPrincipal, name: "Mrs. Smith", position: "High School Coordinator" },
        { img: placeholderPrincipal, name: "Ms. Johnson", position: "Primary School Coordinator" }
      ]
    },
    {
      title: "Admin Staff & Campus Co-ordinator",
      icon: <FaUserShield className="text-3xl" />,
      staff: [
        { img: placeholderAdmin, name: "Mr. Kumar", position: "Admin Officer" },
        { img: placeholderAdmin, name: "Mrs. Patel", position: "Campus Coordinator" },
        { img: placeholderAdmin, name: "Mr. Sharma", position: "Office Superintendent" },
        { img: placeholderAdmin, name: "Ms. Gupta", position: "Front Office Executive" }
      ]
    },
    {
      title: "Teaching Staff",
      icon: <FaChalkboardTeacher className="text-3xl" />,
      staff: [
        { img: placeholderTeacher, name: "Mrs. Desai", position: "Class Teacher - 10A" },
        { img: placeholderTeacher, name: "Mr. Iyer", position: "Maths Teacher" },
        { img: placeholderTeacher, name: "Ms. Nair", position: "Science Teacher" },
        { img: placeholderTeacher, name: "Mrs. Reddy", position: "English Teacher" }
      ]
    },
    {
      title: "Support Staff",
      icon: <FaUserGraduate className="text-3xl" />,
      staff: [
        { img: placeholderSupport, name: "Mr. Thomas", position: "Librarian" },
        { img: placeholderSupport, name: "Mrs. George", position: "Lab Assistant" },
        { img: placeholderSupport, name: "Mr. Raj", position: "Sports Coach" },
        { img: placeholderSupport, name: "Ms. Priya", position: "Nurse" }
      ]
    }
  ];

  return (
    <div className="w-full bg-[#ebd8b4]">
      {/* Banner Section */}
      <div className="relative bg-[#541212] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10 bg-[url('https://mccsblr.edu.in/wp-content/uploads/2023/06/pattern.png')]"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <FaChalkboardTeacher className="text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Staff Details</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Dedicated Educators Committed to Academic Excellence and Moral Values
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-12 text-center max-w-4xl">
        <p className="text-lg md:text-xl text-gray-700">
          Our teachers are gifted guides, committed to nurturing minds and souls with compassion and expertise.
        </p>
      </div>

      {/* Staff Categories */}
      <div className="container mx-auto px-4 pb-16">
        {staffCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-[#8B0000] text-white p-3 rounded-full mr-4">
                {category.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B0000]">
                {category.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {category.staff.map((member, idx) => (
                <div key={idx} className=" rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-64 md:h-80 overflow-hidden">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover item-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-[#541212]">{member.name}</h3>
                    <p className="text-black">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffDetails;