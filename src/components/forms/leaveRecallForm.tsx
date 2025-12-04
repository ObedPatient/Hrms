const LeaveRecallForm = () => {
  return (
    <form className="space-y-4 p-4 bg-white rounded">
        <div className="bg-[#DCE8F8] rounded-xl p-6 mb-6 text-gray-700 leading-relaxed">
          <p className="mb-4">Dear User,</p>
          <p>
            This is to inform you that you have been RECALLED from your
            CASUAL Leave by your line manager named Biruktawit Mesfin for an
            urgent meeting and task to be completed in the office before 2nd June, 2022.
          </p>
        </div>

        <label className="block mb-2 text-gray-700 font-medium">If No, state reason why?</label>
        <textarea
          name="reason"
          placeholder="State your reason..."
          className="w-full h-28 bg-[#E8F0FB] p-4 rounded-xl border border-transparent focus:outline-none focus:border-blue-400 mb-6"
        />

        <div className="flex gap-4 pt-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-12 py-3 rounded-2xl font-semibold w-50 md:w-60 shadow-md focus:outline-none focus:ring-0">
            Approve
          </button>
          <button type="reset" className="border-2 border-red-500 text-red-500 px-12 py-3 rounded-2xl font-semibold hover:bg-red-50 w-50 md:w-60 shadow-md focus:outline-none focus:ring-0">
            Decline
          </button>
        </div>
    </form>
  );
};

export default LeaveRecallForm;
