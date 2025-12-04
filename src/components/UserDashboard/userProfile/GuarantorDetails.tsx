import { useState } from 'react';

const GuarantorDetails = () => {
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
      <div className="border-b border-primary-gray px-8 py-6">
        {currentPage === 1 && (
          <>
            <div>
              <h6 className="text-sm font-bold text-gray-800">Guarrantor details</h6>
            </div>
            <div className="mt-8">
              <div className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300">
                <h6 className="text-gray-600 ml-4">MR Natnael Dawit</h6>
                <p className="text-sm text-primary-gray ml-4">
                  Human resourcet, Abysinia bank - 090 500 500 6000
                </p>
              </div>
            </div>
            <div className="mt-2">
              <div className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300">
                <h6 className="text-gray-600 ml-4">MR Natnael Dawit</h6>
                <p className="text-sm text-primary-gray ml-4">
                  Accountant, Abysinia bank - 090 500 500 6000
                </p>
              </div>
            </div>
          </>
        )}

        {currentPage === 2 && (
          <>
            <h6 className="text-sm font-bold text-gray-800">
              View guarrantor Details
            </h6>
            <div className="mt-8">
              <div>
                <label className="block mb-4">Guarrantor's name</label>
                <input
                  type="text"
                  className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
                  placeholder="Enter guarrantor's name here..."
                />
              </div>
            </div>
            <div className="mt-8">             
              <div>
                <label className="block mb-4">Job title/ Occupation </label>
                <input
                  type="text"
                  className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
                  placeholder="Enter location here..."
                />
              </div>
            </div>
            <div className="mt-8">
              <div>
                <label className="block mb-1">Phone number</label>
                <input
                  type="text"
                  className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
                  placeholder='782749249900..'
                />
              </div>
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

export default GuarantorDetails;