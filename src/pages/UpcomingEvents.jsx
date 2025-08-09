import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const UpcomingEvents = () => {
  const events = [
    { date: "05 August 2025", class: "Class I-V", event: "Annual Sports Day", academicYear: "2025-2026" },
    { date: "12 August 2025", class: "Class VI-VIII", event: "Science Exhibition", academicYear: "2025-2026" },
    { date: "15 August 2025", class: "All Classes", event: "Independence Day Celebration", academicYear: "2025-2026" },
    { date: "20 August 2025", class: "Class IX-XII", event: "Career Counseling Session", academicYear: "2025-2026" },
    { date: "25 August 2025", class: "Class III-V", event: "Inter-House Quiz Competition", academicYear: "2025-2026" },
    { date: "28 August 2025", class: "Class XI-XII", event: "Parent-Teacher Meeting", academicYear: "2025-2026" },
  ];

  return (
    <div className="w-full bg-[#ebd8b4]">
        
      {/* Banner Section */}
      <div className="relative bg-[#541212] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10 bg-[url('https://mccsblr.edu.in/wp-content/uploads/2023/06/pattern.png')]"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <FaCalendarAlt className="text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            From Classrooms to Center Stage: Our Journey of Expression
          </p>
        </div>
      </div>

      {/* Events Section */}
      <div className="container mx-auto px-4 py-12">
        <div className=" rounded-md  p-6 md:p-8">
          <h2 className="text-2xl font-bold text-black mb-4 pb-2 border-b-2 border-[#8B0000]">
            August 2025 - Upcoming Events
          </h2> <br /> <br />

          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={index} className="pb-6 border-b border-[#8B0000] ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="font-semibold text-black">
                    {event.date}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black">
                    {event.class}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black">
                    {event.event}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black">
                    {event.academicYear}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;