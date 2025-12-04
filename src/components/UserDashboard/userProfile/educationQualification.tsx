import { useState } from 'react';

const EducationQualifications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-10">
      <div className="border-b border-gray-200 px-8 py-6">
        {/* Page 1: Academic Records and Professional Qualifications */}
        {currentPage === 1 && (
          <>
            <div>
              <h6 className="text-sm font-bold text-gray-800">Academic Records</h6>
            </div>
            <div className="mt-8">
              <div className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300">
                <h6 className="text-gray-600 ml-4">Jimma University</h6>
                <p className="text-sm text-primary-gray ml-4">
                  B.Sc in Computer Science, May 2014 - May 2018
                </p>
              </div>
            </div>
            <div className="mt-2">
              <div className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300">
                <h6 className="text-gray-600 ml-4">Cathederal school</h6>
                <p className="text-sm text-primary-gray ml-4">
                  sep 2008 - June 2012
                </p>
              </div>
            </div>
            <h6 className="mt-8 text-sm font-bold text-gray-800">
              Professional Qualifications
            </h6>
            <div className="mt-8">
              <div className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300">
                <h6 className="text-gray-600 ml-4">CCNA Certification</h6>
                <p className="text-sm text-primary-gray ml-4">
                  at Addis Ababa University , May 2019 - September 2021
                </p>
              </div>
            </div>
            <div className="mt-2">
              <div className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300">
                <h6 className="text-gray-600 ml-4">Google UI / UX Certification</h6>
                <p className="text-sm text-primary-gray ml-4">
                  {" "}
                  September 2021 - September 2022
                </p>
              </div>
            </div>
            <div className="mt-2">
              <div className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300">
                <h6 className="text-gray-600 ml-4">Web Developer</h6>
                <p className="text-sm text-primary-gray ml-4">
                  at EAII , May 2019 - September 2021
                </p>
                <ul className="list-disc pl-5 space-y-1 ml-4">
                  <li className="text-xs text-primary-gray ml-4 mr-4">
                    Collaborated with teammates to deliver valuable features meeting
                    business and customer needs.
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}

        {/* Page 2: Academic Records / Academic Details Form */}
        {currentPage === 2 && (
          <>
            <h6 className="text-sm font-bold text-gray-800">
              Academic Records / Academic Details
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
              <div>
                <label className="block mb-4">Name of institution</label>
                <input
                  type="text"
                  className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
                  placeholder="Enter name of institution here..."
                />
              </div>

              <div>
                <label className="block mb-4">Department</label>
                <input
                  type="text"
                  className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
                  placeholder="Enter department here..."
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
              <div>
                <label className="block mb-4">Course</label>
                <div className="relative">
                  <select className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300 appearance-none pr-10">
                    <option>Select course</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform rounded-full bg-black -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-4">Location</label>
                <input
                  type="text"
                  className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
                  placeholder="Enter location here..."
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div>
                <label className="block mb-1">Start Date</label>
                <input
                  type="date"
                  className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
                />
              </div>

              <div>
                <label className="block mb-1">End Date</label>
                <input
                  type="date"
                  className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
                />
              </div>
            </div>
            <div className="mt-8">
              <label className="block mb-1">Description</label>
              <textarea
                rows={3}
                className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
                placeholder="enter additional information here..."
              />
            </div>
            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-12 py-3 rounded-2xl font-semibold w-50 md:w-60 shadow-md focus:outline-none focus:ring-0">
              Update
            </button>
          </>
        )}

        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <div>
            {currentPage > 1 && (
              <button
                onClick={handlePrev}
                className="px-6 py-2 text-sm font-medium text-black bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                ←
              </button>
            )}
          </div>
          
          
          <div>
            {currentPage < totalPages ? (
              <button
                onClick={handleNext}
                className="px-6 py-2 text-sm font-medium text-black bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                →
              </button>
            ) : (
                null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationQualifications;