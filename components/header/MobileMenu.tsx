import React from "react";
import { X } from "lucide-react";

type props = {
  mobileOpen: boolean;
  handleMobileOpen: () => void;
};

const MobileMenu = ({ mobileOpen, handleMobileOpen }: props) => {
  console.log(mobileOpen);
  return (
    <div
      className={`w-full h-screen  fixed ${
        mobileOpen ? "left-0 top-0" : "-left-full"
      } duration-300`}
      onClick={handleMobileOpen}
    >
      <div
        className="w-[75%]  bg-[#2A2A2C] h-full p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-[60px] flex justify-end w-full ">
          <X color="white" onClick={handleMobileOpen} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
