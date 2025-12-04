const ContactDetails = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="border-b border-gray-200 px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div>
            <label className="block mb-4 font-sans">Phone number 1</label>
            <input
              type="text"
              className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
              placeholder="phone number 1"
            />
          </div>

          <div>
            <label className="block mb-4">Phone number 2</label>
            <input
              type="text"
              className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
              placeholder="phone number 2"
            />
          </div>
        </div>
        <div className="mt-8">
          <label className="block mb-4">Email address</label>
          <input
            type="email"
            className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
            placeholder="enter email address here..."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div>
            <label className="block mb-4 font-sans">City of residence</label>
            <input
              type="text"
              className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
              placeholder="city of residence"
            />
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

export default ContactDetails;
