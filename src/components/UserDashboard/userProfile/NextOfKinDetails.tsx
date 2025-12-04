const NextOfKinDetails = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-200 px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div>
            <label className="block mb-4 font-sans">Next kin names</label>
            <input
              type="text"
              className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
              placeholder="Enter full name here..."
            />
          </div>

          <div>
            <label className="block mb-4">Job/ Occupation</label>
            <input
              type="text"
              className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
              placeholder="Enter occupation here..."
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div>
            <label className="block mb-4 font-sans">Phone number</label>
            <input
              type="text"
              className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
              placeholder="Enter phone number here..."
            />
          </div>

          <div>
            <label className="block mb-4">Relationship</label>
            <div className="relative">
              <select className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300 appearance-none pr-10">
                <option>Select relationship</option>
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
        </div>
        <div className="mt-8">
          <label className="block mb-4">Residentail address</label>
          <textarea
            rows={3}
            className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
            placeholder="enter residential address here..."
          />
        </div>
        <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-12 py-3 rounded-2xl font-semibold w-50 md:w-60 shadow-md focus:outline-none focus:ring-0">
          Update
        </button>
      </div>
    </div>
  );
};

export default NextOfKinDetails;
