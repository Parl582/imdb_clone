"use client";
import {
  Menu,
  Search,
  BookmarkPlus,
  UserCircle2,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import DesktopMenu from "./DeskTopMenu";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const handleMobile = () => {
    setMobileOpen((prev) => !prev);
  };
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div
        className="w-full h-[60px]
    shadow-md px-4 md:px-11 flex items-center justify-between font-bold bg-[#2A2A2C]
    gap-5 top-0 sticky z-[99]
    "
      >
        <div className="flex items-center gap-2 md:gap-4 ">
          <button
            className="md:hidden items-center gap-1 text-white flex"
            onClick={handleMobile}
          >
            <Menu />
          </button>
          <Link href={"/"}>
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
              }
              width={60}
              height={30}
              alt="imdb"
              className="object-contain cursor-pointer"
            />
          </Link>
          <button
            className="md:flex items-center gap-1 text-white hidden"
            onClick={handleOpen}
          >
            <Menu />
            <span> Menu</span>
          </button>
        </div>
        <SearchBar />

        <div className="md:flex items-center gap-5 hidden">
          <div className="font-bold text-white cursor-pointer ">
            IMDb<span className="text-sky-400">Pro</span>
          </div>
          <Link
            href={"/favorite"}
            className="flex items-center text-white space-x-1"
          >
            <BookmarkPlus size={20} color="white" />{" "}
            <span className="text-sm">Favorite </span>
          </Link>
          <Link href={"/"} className="flex items-center text-white space-x-1">
            <UserCircle2 size={20} color="white" />{" "}
            <span className="text-sm"> User </span>
            <ChevronDown size={17} />
          </Link>
          <Link
            href={"/"}
            className="flex items-center text-white space-x-1 text-sm"
          >
            <span> EN </span>
            <ChevronDown size={17} />
          </Link>
        </div>
      </div>
      <DesktopMenu handleOpen={handleOpen} open={open} />
      <MobileMenu handleMobileOpen={handleMobile} mobileOpen={mobileOpen} />
    </>
  );
};

export default Header;
