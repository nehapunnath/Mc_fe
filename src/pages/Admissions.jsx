import React from "react";
import { FaSchool, FaUserEdit, FaFileAlt, FaRupeeSign, FaPaperPlane, FaPhone } from "react-icons/fa";

const Admissions = () => {
  return (
    <div className="w-full bg-[#ebd8b4]">
      {/* Banner Section */}
      <div className="relative bg-[#541212] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <FaSchool className="text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-6">
            Start Your Child's Journey with Quality, Value-Based Education
          </p>
          <div className="bg-[#8B0000] inline-block px-6 py-2 rounded-full font-bold text-lg">
            ADMISSIONS CLOSED FOR THE AY 2025-26
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-gray-700">
            Mount Carmel School welcomes aspiring students to a learning environment that nurtures academic excellence, character formation, and holistic development. Our admission process is simple and transparent, guiding you every step of the way as you begin this meaningful educational journey.
          </p>
        </div>

        {/* Admission Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
  {/* Step 1 */}
  <div className="bg-gradient-to-b from-[#541212] to-[#8B0000] rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#700000]">
    <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
      <FaUserEdit className="text-2xl text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">Step 1: Register</h3>
    <p className="text-white/80 mb-4">
      Create your profile to begin the admission journey with Mount Carmel School's admission portal.
    </p>
    <button className="mt-auto bg-white hover:bg-gray-100 text-[#8B0000] font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
      Register Today!
    </button>
  </div>

  {/* Step 2 */}
  <div className="bg-gradient-to-b from-[#541212] to-[#8B0000] rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#700000]">
    <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
      <FaFileAlt className="text-2xl text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">Step 2: Fill Application Form</h3>
    <p className="text-white/80">
      Complete the online application form accurately with all required student and parent details.
    </p>
  </div>

  {/* Step 3 */}
  <div className="bg-gradient-to-b from-[#541212] to-[#8B0000] rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#700000]">
    <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
      <FaRupeeSign className="text-2xl text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">Step 3: Pay Application Fee</h3>
    <p className="text-white/80">
      Proceed to pay the application fee securely to confirm your application submission process.
    </p>
  </div>

  {/* Step 4 */}
  <div className="bg-gradient-to-b from-[#541212] to-[#8B0000] rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-[#700000]">
    <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
      <FaPaperPlane className="text-2xl text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">Step 4: Submit Application</h3>
    <p className="text-white/80">
      Submit your completed application form and documents for the admission review and next steps.
    </p>
  </div>
</div>

{/* Documents & Notes Section */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Documents Required */}
  <div className="bg-gradient-to-b from-[#541212] to-[#8B0000] rounded-xl shadow-lg p-8 border border-[#700000]">
    <div className="flex items-center mb-6">
      <div className="bg-white w-3 h-8 rounded-full mr-4"></div>
      <h2 className="text-2xl font-bold text-white">
        Documents Required
      </h2>
    </div>
    <ul className="space-y-4">
      <li className="flex items-start bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
        <span className="bg-white text-[#8B0000] w-6 h-6 rounded-full flex items-center justify-center mr-3 font-bold">1</span>
        <span className="text-white">1 passport size photo of student</span>
      </li>
      <li className="flex items-start bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
        <span className="bg-white text-[#8B0000] w-6 h-6 rounded-full flex items-center justify-center mr-3 font-bold">2</span>
        <span className="text-white">1 passport size photo of each parent</span>
      </li>
      <li className="flex items-start bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
        <span className="bg-white text-[#8B0000] w-6 h-6 rounded-full flex items-center justify-center mr-3 font-bold">3</span>
        <span className="text-white">Original TC from the previous school (From Grade 1 onwards)</span>
      </li>
      <li className="flex items-start bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
        <span className="bg-white text-[#8B0000] w-6 h-6 rounded-full flex items-center justify-center mr-3 font-bold">4</span>
        <span className="text-white">Original Birth Certificate</span>
      </li>
      <li className="flex items-start bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
        <span className="bg-white text-[#8B0000] w-6 h-6 rounded-full flex items-center justify-center mr-3 font-bold">5</span>
        <span className="text-white">Copy of Report Card of Previous Class</span>
      </li>
      <li className="flex items-start bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
        <span className="bg-white text-[#8B0000] w-6 h-6 rounded-full flex items-center justify-center mr-3 font-bold">6</span>
        <span className="text-white">Copy of the filled-in Application Form</span>
      </li>
      <li className="flex items-start bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
        <span className="bg-white text-[#8B0000] w-6 h-6 rounded-full flex items-center justify-center mr-3 font-bold">7</span>
        <span className="text-white">Proof of address and identity (<strong className="text-white font-bold">Aadhar Card is mandatory</strong>)</span>
      </li>
    </ul>
  </div>

  {/* Notes Section */}
  <div className="bg-gradient-to-b from-[#541212] to-[#8B0000] rounded-xl shadow-lg p-8 border border-[#700000]">
    <div className="flex items-center mb-6">
      <div className="bg-white w-3 h-8 rounded-full mr-4"></div>
      <h2 className="text-2xl font-bold text-white">
        Notes
      </h2>
    </div>
    <div className="bg-white/10 p-6 rounded-lg mb-6">
      <p className="text-white/90 mb-4">
        You can schedule a campus visit by booking an appointment with us.
      </p>
      <p className="text-sm text-white/70">
        Our admission office is open Monday to Friday, 9:00 AM to 3:00 PM.
      </p>
    </div>
    <a
      href="#"
      className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#8B0000] font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg w-full text-center"
    >
      <FaPhone className="mr-3" />
      Call Today!
    </a>
   
  </div>
</div>
      </div>
    </div>
  );
};

export default Admissions;