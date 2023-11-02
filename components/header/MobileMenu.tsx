import React from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type props = {
  mobileOpen: boolean;
  handleMobileOpen: () => void;
};

const MobileMenu = ({ mobileOpen, handleMobileOpen }: props) => {
  const route = useRouter();
  const handleClick = (elm: { title: string; pathname: string }) => {
    if (!mobileOpen) return;
    route.push(`${elm?.pathname}`);
    handleMobileOpen();
  };
  return (
    <div
      className={`w-full h-screen  text-white fixed ${
        mobileOpen ? "left-0 top-0" : "-left-full"
      } duration-300 z-[999]`}
      onClick={handleMobileOpen}
    >
      <div
        className="w-[75%]  bg-[#2A2A2C] h-full py-5 px-1"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-[60px] flex justify-end w-full ">
          <X color="white" onClick={handleMobileOpen} />
        </div>
        <div className=" flex flex-col max-h-[calc(100vh-100px)] overflow-y-auto ">
          {MobileMenuData.map((elm, i) => (
            <button
              onClick={() => handleClick(elm)}
              className="cursor-pointer py-2 px-4 text-xl hover:bg-headerbg duration-300 text-start"
              key={i}
            >
              {elm.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

const MobileMenuData = [
  {
    title: "Movies",
    pathname: "/",
  },
  {
    title: "Web-Series",
    pathname: "/",
  },
  {
    title: "Watchlist",
    pathname: "/",
  },
  {
    title: "Favorite",
    pathname: "/favorite",
  },
];
