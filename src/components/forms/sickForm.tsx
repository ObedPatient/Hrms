import React, { useState } from "react";
import { ThumbsUp } from "lucide-react";
import ConfirmDialog from "../common/confimDialogBox";

const SickLeave = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <ConfirmDialog
        isOpen={openDialog}
        onClose={closeDialog}
        icon={<ThumbsUp size={120} className="text-blue-700 stroke-[2]" />}
        title="Great Job!"
        message="Your leave application would be reviewed by the admin."
        buttonLabel="Close"
      />
      <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded">
        <div>
          <label className="block mb-1">Leave Type</label>
          <input
            type="text"
            className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
            placeholder="Sick Leave"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Duration</label>
            <input
              type="number"
              className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
              placeholder="0"
            />
          </div>

          <div>
            <label className="block mb-1">Resumption Date</label>
            <input
              type="date"
              className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1">Reason for leave</label>
          <textarea
            className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300"
            rows={3}
            placeholder="Enter your reason for leave here..."
          />
        </div>

        <div>
          <label className="block mb-1">
            Attach handover document (pdf, jpg, docx or any other format)
          </label>
          <div className="relative">
            <input
              type="file"
              className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300 opacity-0 absolute inset-0 z-10 cursor-pointer"
              id="file-upload"
            />
            <div className="flex items-center bg-blue-50 rounded overflow-hidden">
              <span className="px-6 py-3 bg-black text-white font-medium flex-shrink-0">
                Choose File
              </span>
              <span className="px-4 py-3 text-primary-gray flex-grow">
                No file chosen
              </span>
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-1">Choose Relief Officer</label>
          <div className="relative">
            <select className="w-full bg-blue-50 p-3 rounded focus:outline-none focus:ring-0 focus:border-gray-300 appearance-none pr-10">
              <option>Select relief Officer</option>
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

        <div className="flex gap-4 pt-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-12 py-3 rounded-2xl font-semibold w-50 md:w-60 shadow-md focus:outline-none focus:ring-0">
            Submit
          </button>
          <button
            type="reset"
            className="border-2 border-red-500 text-red-500 px-12 py-3 rounded-2xl font-semibold hover:bg-red-50 w-50 md:w-60 shadow-md focus:outline-none focus:ring-0"
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default SickLeave;
