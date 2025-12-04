// PersonalDetails.tsx
import { FiEdit } from "react-icons/fi";
import Image from '../../../assets/profileImage.jpeg';

const PersonalDetails = () => {
  return (
    <div className="flex-1 bg-white rounded-xl p-10 shadow-sm relative">
      <button className="absolute top-6 right-6 flex flex-col items-center text-gray-700 hover:text-blue-600 transition-colors">
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center hover:bg-blue-100">
          <FiEdit size={22} />
        </div>
        <span className="text-sm mt-1">Edit</span>
      </button>

      <div className="w-full flex justify-center">
        <div className="w-40 h-40 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={Image} 
            alt="profile"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600 text-sm">Employee Name</p>
        <p className="text-2xl font-semibold text-gray-800">Biruk Dawit</p>

        <p className="text-gray-600 text-sm mt-10">Department</p>
        <p className="text-xl font-semibold text-gray-800">Design & Marketing</p>

        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20 mt-16 mb-20">
          <div>
            <p className="text-gray-600 text-sm">Job Title</p>
            <p className="text-lg font-semibold text-gray-800">UI / UX Designer</p>
          </div>

          <div>
            <p className="text-gray-600 text-sm">Job Category</p>
            <p className="text-lg font-semibold text-gray-800">Full time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;