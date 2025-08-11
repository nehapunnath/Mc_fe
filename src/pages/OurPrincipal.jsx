import React from 'react';
import { FaUserTie } from 'react-icons/fa';
import principal from '../assets/principal.JPG';

const OurPrincipal = () => {
  return (
    <div className="w-full bg-white">
      {/* Banner Section */}
      <div className="relative bg-[#541212] py-20 md:py-28">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full">
              <FaUserTie className="text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Principal</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Leading with Vision, Compassion, and a Commitment to Holistic Education
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full bg-[#ebd8b4] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto   overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Principal Image */}
              <div className="md:w-1/3 flex mt-11  ">
                <img 
                  src={principal} 
                  alt="Principal" 
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-full  flex items-center justify-center"
                />
              </div>

              {/* Right Side - Principal's Message */}
              <div className="md:w-2/3 p-8 bg-[#ebd8b4]">
                <h2 className="text-3xl font-bold text-[#541212] mb-2">Message from Principal's Desk</h2>
                <div className="w-20 h-1 bg-[#541212] mb-6"></div> 
                
                <div className="space-y-4 text-black text-xl leading-relaxed">
                  <p>
                    Dear Students, Parents, and Well-wishers,
                  </p>
                  <p>
                    It is with great pleasure and a deep sense of responsibility that I welcome you to Mount Carmel School. As the Principal, I am committed to upholding the rich legacy of academic excellence and value-based education that our institution stands for.
                  </p>
                  <p>
                    Our approach to education goes beyond textbooks and examinations. We strive to create an environment where every child can discover their unique potential, develop critical thinking skills, and grow into compassionate individuals who can contribute meaningfully to society.
                  </p>
                  <p>
                    The dedicated team of educators at MCS works tirelessly to provide a nurturing yet challenging learning environment. We emphasize holistic development through our academic programs, co-curricular activities, and value education initiatives.
                  </p>
                  <p>
                    I invite you to be active partners in your child's educational journey. Together, we can help our students become confident, competent, and caring citizens of tomorrow.
                  </p>
                  <p className="font-semibold">
                    With warm regards,<br />
                    Nakshathra<br />
                    Principal, Mount Carmel  School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrincipal;