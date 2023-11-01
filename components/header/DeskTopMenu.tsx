import Image from "next/image";
import Link from "next/link";
import React from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

type props = {
  open: boolean;
  handleOpen: () => void;
};

const DesktopMenu = ({ open, handleOpen }: props) => {
  const route = useRouter();
  const handleNavigation = () => {
    handleOpen();
    route.push("/");
  };
  return (
    <div
      className={`w-full ${
        open ? "h-screen visible opacity-100 " : "h-0 invisible opacity-0"
      }   fixed bg-[#2f2f2f] inset-0 p-16 overflow-hidden duration-200 transition-all z-[999]`}
    >
      <div className="w-full md:flex hidden items-center justify-center">
        <div className="w-[75%] flex  justify-between text-white items-center">
          <button onClick={handleNavigation}>
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
              }
              width={120}
              height={30}
              alt="imdb"
              className="object-contain cursor-pointer"
            />
          </button>

          <button
            className="p-3 rounded-full bg-yellow-500 text-black"
            onClick={handleOpen}
          >
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;
