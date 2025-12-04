// ProfileTabsManager.tsx
import { useState } from "react";
import PersonalDetails from "./personalDetails";
import ContactDetails from "./contactDetails";
//import ContactDetails from "./ContactDetails";
import NextOfKinDetails from "./NextOfKinDetails";
import EducationQualifications from "./educationQualification";
import GuarantorDetails from "./GuarantorDetails";
import FamilyDetails from "./FamilyDetails";
//import JobDetails from "./JobDetails";
//import FinancialDetails from "./FinancialDetails";


const ProfileTabsManager = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const tabs = [
    { id: "personal", label: "Personal Details" },
    { id: "contact", label: "Contact Details" },
    { id: "next-of-kin", label: "Next of kin Details" },
    { id: "education", label: "Education Qualifications" },
    { id: "guarantor", label: "Guarantor Details" },
    { id: "family", label: "Family Details" },
    { id: "job", label: "Job Details" },
    { id: "financial", label: "Financial Details" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalDetails />;
      case "contact":
        return <ContactDetails />;
      case "next-of-kin":
        return <NextOfKinDetails />;
      case "education":
        return <EducationQualifications />;
      case "guarantor":
        return <GuarantorDetails />;
      case "family":
        return <FamilyDetails />;
      default:
        return <PersonalDetails />;
    }
  };

  return (
    <div className="mt-10 w-full flex flex-col lg:flex-row gap-6 lg:gap-10">
      {/* Left Side Tabs Navigation - Mobile Dropdown */}
      <div className="lg:hidden">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full p-4 rounded-xl border-2 border-yellow-400 bg-white text-gray-800 font-medium text-[14px] focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.id}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>

      {/* Left Side Tabs Navigation - Desktop with Fixed Height */}
      <div className="hidden lg:block w-full lg:w-[300px]">
        <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4 max-h-[600px] overflow-y-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full py-4 rounded-xl border text-[14px] font-medium transition-all duration-200 flex-shrink-0 ${
                activeTab === tab.id
                  ? "bg-yellow-400 border-yellow-400 text-gray-800 shadow-sm"
                  : "bg-[#E7EFF8] border-[#E7EFF8] text-gray-600 hover:bg-[#d9e4f5] hover:border-[#d9e4f5]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right Side Content */}
      <div className="flex-1">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProfileTabsManager;