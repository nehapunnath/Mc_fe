import React from 'react';
import { FaClipboardList } from 'react-icons/fa';

const AssessmentDetails = () => {
  return (
    <div className="w-full bg-white">
      {/* Banner Section */}
      <div className="relative bg-[#541212] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10 bg-[url('https://mccsblr.edu.in/wp-content/uploads/2023/06/pattern.png')]"></div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <FaClipboardList className="text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Assessment Details</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Insight into Student Progress, Performance, and Evaluation Methods
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Term 1 Section */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-12 border border-[#f0e6d2]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#541212] mb-6">TERM 1</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
                <thead>
                  <tr>
                    <th rowSpan="2" className="border border-gray-300 p-3 bg-[#541212] text-white">
                      Subject
                    </th>
                    <th colSpan="2" className="border border-gray-300 p-3 bg-[#541212] text-white text-center">
                      TERM-1 (100 marks)(1st half of the session) <br />
                      20 marks Internal Assessment + 80 marks for Half Yearly Exam
                    </th>
                  </tr>
                  
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Language - 1 <br /> Language - 2 <br /> Language - 3

                    </td>

                    
                    <td className="border border-gray-300 p-3">
                        <span className='font-bold'>PA 20 marks</span><br />
                      * Periodic Test for 10 marks with syllabus covered till announcement of test dates by school
                    </td>
                    <td className="border border-gray-300 p-3">
                        <span className='font-bold'>Term 1</span> <br />

                     * Written exam for 80 marks with syllabus covered till announcement of Half Yearly exam dates by school
                    </td>
                  </tr>
                  

                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Mathematics <br /> Science <br /> Social Science</td>
                    <td className="border border-gray-300 p-3">* Note Book Submission 5 marks at term-end</td>
                    <td className="border border-gray-300 p-3"></td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Any other Subjects</td>
                    <td className="border border-gray-300 p-3">* Subject Enrichment 5 marks at term-end</td>
                    <td className="border border-gray-300 p-3"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Term 2 Section */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-[#f0e6d2]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#541212] mb-6">TERM 2</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300">
                <thead>
                  <tr>
                    <th rowSpan="2" className="border border-gray-300 p-3 bg-[#541212] text-white">
                      Subject
                    </th>
                    <th colSpan="2" className="border border-gray-300 p-3 bg-[#541212] text-white">
                      TERM-2 (100 marks)(1st half of the session) <br />
                      20 marks Internal Assessment + 80 marks for Half Yearly Exam
                    </th>
                  </tr>
                 
                </thead>
               <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Language - 1 <br /> Language - 2 <br /> Language - 3

                    </td>

                    
                    <td className="border border-gray-300 p-3">
                        <span className='font-bold'>PA 20 maks</span><br />
                      * Periodic Test for 10 marks with syllabus covered till announcement of test dates by school
                    </td>
                    <td className="border border-gray-300 p-3">
                        <span className='font-bold'>Term 2</span> <br />

                     * Written exam for 80 marks with syllabus covered as follows: <br /> <br />
                     <h5 className=' font-bold' >Class 1-6</h5> <br />
                     <span className=' font-bold'  >Class 6:
                     </span  >
                        <p>10% of 1st term covering signiﬁcant topics + entire syllabus of 2nd term</p>


                    </td>
                  </tr>
                  

                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Mathematics <br /> Science <br /> Social Science</td>
                    <td className="border border-gray-300 p-3">* Note Book Submission 5 marks at term-end</td>
                    <td className="border border-gray-300 p-3">
                     <span className=' font-bold' >Class 7:
                     </span>
                        <p>20% of 1st term covering significant topics + entire syllabus of 2nd term</p> <br />

                     <span className=' font-bold' >Class 8:
                     </span>
                        <p>30% of 1st term & 2nd term</p> <br />

                        <span className=' font-bold'>Class 9:    <br /><br />
                     </span>
                        <p>As mid-term & annual exam</p>

                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-300 p-3 font-medium">Any other Subjects</td>
                    <td className="border border-gray-300 p-3">* Subject Enrichment 5 marks at term-end</td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentDetails;