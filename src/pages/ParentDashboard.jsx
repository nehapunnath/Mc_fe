import React, { useState } from 'react';

const ParentDashboard = () => {
  const [activeChild, setActiveChild] = useState(null);
  const [reportType, setReportType] = useState('academic');
  const [timeRange, setTimeRange] = useState('current-term');

  const children = [
    { 
      id: 1, 
      name: 'Rahul Sharma', 
      grade: '8th Grade',
      avatar: 'RS',
      details: {
        birthDate: '15/03/2012',
        bloodGroup: 'B+',
        // allergies: 'None',
        classTeacher: 'Ms. Priya Patel'
      }
    },

  ];

  const reports = {
    academic: [
      { subject: 'Mathematics', grade: 'A', marks: '85/100', teacher: 'Mr. Patel', remarks: 'Excellent problem solving skills' },
      { subject: 'Science', grade: 'B+', marks: '78/100', teacher: 'Ms. Gupta', remarks: 'Good theoretical knowledge' },
      { subject: 'English', grade: 'A+', marks: '92/100', teacher: 'Ms. Kumar', remarks: 'Outstanding writing skills' }
    ],
    attendance: [
      { month: 'October', present: 22, absent: 1, percentage: '95.7%' },
      { month: 'September', present: 20, absent: 2, percentage: '90.9%' },
      { month: 'August', present: 23, absent: 0, percentage: '100%' }
    ],
    behavioral: [
      { aspect: 'Punctuality', rating: 'Excellent', comments: 'Always on time' },
      { aspect: 'Class Participation', rating: 'Good', comments: 'Active in discussions' },
      { aspect: 'Behavior', rating: 'Excellent', comments: 'Very respectful' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#541212] text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Parent Portal</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                <span className="text-[#541212] font-bold">MS</span>
              </div>
              <span>Mrs. Sharma</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Children List Sidebar */}
          <aside className="w-full md:w-64 bg-white rounded-lg shadow-md p-4 h-fit">
            <h3 className="font-bold text-lg text-[#541212] mb-4">My Children</h3>
            <ul className="space-y-3">
              {children.map(child => (
                <li 
                  key={child.id} 
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${activeChild?.id === child.id ? 'bg-[#541212] text-white' : 'hover:bg-gray-100'}`}
                  onClick={() => setActiveChild(child)}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${activeChild?.id === child.id ? 'bg-white text-[#541212]' : 'bg-[#541212] text-white'}`}>
                      <span className="font-bold">{child.avatar}</span>
                    </div>
                    <div>
                      <p className="font-medium">{child.name}</p>
                      <p className="text-sm">{child.grade}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {activeChild ? (
              <div className="space-y-6">
                {/* Child Details Card */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-[#541212]">{activeChild.name}</h2>
                      <p className="text-gray-600">{activeChild.grade}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-[#541212] text-white rounded text-sm">
                        Contact Teacher
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <DetailItem label="Date of Birth" value={activeChild.details.birthDate} />
                      <DetailItem label="Blood Group" value={activeChild.details.bloodGroup} />
                    </div>
                    <div className="space-y-2">
                      <DetailItem label="Class Teacher" value={activeChild.details.classTeacher} />
                    </div>
                  </div>
                </div>

                {/* Reports Section */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                    <h2 className="text-xl font-bold text-[#541212] mb-2 sm:mb-0">Reports</h2>
                    <div className="flex space-x-2">
                      <select 
                        className="border border-gray-300 rounded px-3 py-1 text-sm"
                        value={reportType}
                        onChange={(e) => setReportType(e.target.value)}
                      >
                        <option value="academic">Academic</option>
                        <option value="attendance">Attendance</option>
                        <option value="behavioral">Behavioral</option>
                      </select>
                      <select 
                        className="border border-gray-300 rounded px-3 py-1 text-sm"
                        value={timeRange}
                        onChange={(e) => setTimeRange(e.target.value)}
                      >
                        <option value="current-term">Current Term</option>
                        <option value="last-term">Last Term</option>
                        <option value="yearly">Full Year</option>
                      </select>
                    </div>
                  </div>

                  {reportType === 'academic' && (
                    <AcademicReports reports={reports.academic} />
                  )}

                  {reportType === 'attendance' && (
                    <AttendanceReports reports={reports.attendance} />
                  )}

                  {reportType === 'behavioral' && (
                    <BehavioralReports reports={reports.behavioral} />
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <p className="text-gray-600">Please select a child to view details and reports</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const DetailItem = ({ label, value }) => (
  <div>
    <span className="text-sm text-gray-500">{label}: </span>
    <span className="font-medium">{value}</span>
  </div>
);

const AcademicReports = ({ reports }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Marks</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Grade</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Teacher</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Remarks</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {reports.map((report, index) => (
          <tr key={index}>
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{report.subject}</td>
            <td className="px-4 py-3 whitespace-nowrap text-sm">{report.marks}</td>
            <td className="px-4 py-3 whitespace-nowrap text-sm">{report.grade}</td>
            <td className="px-4 py-3 whitespace-nowrap text-sm">{report.teacher}</td>
            <td className="px-4 py-3 text-sm">{report.remarks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const AttendanceReports = ({ reports }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Present</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Absent</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Percentage</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {reports.map((report, index) => (
          <tr key={index}>
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{report.month}</td>
            <td className="px-4 py-3 whitespace-nowrap text-sm">{report.present}</td>
            <td className="px-4 py-3 whitespace-nowrap text-sm">{report.absent}</td>
            <td className="px-4 py-3 whitespace-nowrap text-sm">{report.percentage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const BehavioralReports = ({ reports }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aspect</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Comments</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {reports.map((report, index) => (
          <tr key={index}>
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">{report.aspect}</td>
            <td className="px-4 py-3 whitespace-nowrap text-sm">
              <span className={`px-2 py-1 rounded-full text-xs ${
                report.rating === 'Excellent' ? 'bg-green-100 text-green-800' :
                report.rating === 'Good' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {report.rating}
              </span>
            </td>
            <td className="px-4 py-3 text-sm">{report.comments}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ParentDashboard;