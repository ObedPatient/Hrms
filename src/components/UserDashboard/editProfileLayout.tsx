import React from "react";
import Tabs from "./tabs";
import { Link } from "react-router-dom";
import ProfileTabsManager from "./userProfile/profileTab";

const EditProfileLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <div className="flex-1 max-w-7xl mx-auto w-full bg-gradient flex flex-col">
        <Tabs />

        <div className="px-20 flex-1 flex flex-col mb-0">
          <div className="text-2xl text-black mt-10 bg-white h-16 flex items-center">
            <p className="px-8 text-[16px]">
              <Link to="/dashboard" className="text-black hover:text-accent">
                Dashboard
              </Link>
              <span className="mx-2">{">"}</span>
              <span className="text-blackz">Update Profile</span>
            </p>
          </div>
          
          <ProfileTabsManager />
        </div>
      </div>
    </div>
  );
};

export default EditProfileLayout;
