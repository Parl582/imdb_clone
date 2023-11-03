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
      className={`w-full   ${
        open ? "top-0 h-screen" : "-top-[120%] h-0"
      }   fixed bg-[#2f2f2f] inset-0 lg:p-16 md:p-11 overflow-hidden duration-500 transition-all z-[999]`}
    >
      <div className="w-full md:flex flex-col hidden items-center justify-center">
        <div className="lg:w-[75%] md:w-[85%] flex  justify-between text-white items-center">
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

        {/* // links  */}

        <div className="w-[75%] flex flex-wrap g py-3 justify-between">
          {Links.map((elm) => (
            <div className="w-1/3 p-2 " key={elm.HeaderName}>
              <h1 className="text-xl font-semibold text-yellow-400 py-2">
                {elm.HeaderName}
              </h1>
              <ul className="flex flex-col space-y-2 text-white ">
                {elm.data.map((item, i) => (
                  <Link href={"/"} key={i} className="py-1 hover:underline">
                    {item.title}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopMenu;

const Links = [
  {
    HeaderName: "Movies",
    data: [
      {
        title: "Release Calendar",
      },
      {
        title: "Top 250 Movies",
      },
      {
        title: "Browse Movies by Genre",
      },
      {
        title: "Top Box Office",
      },
      {
        title: "Show times & Ticket",
      },
      {
        title: "Movies News",
      },
      {
        title: "India Movie Spotlight",
      },
    ],
  },
  {
    HeaderName: "TV Shows",
    data: [
      {
        title: "Whats on TV & Streaming",
      },
      {
        title: "Top 250 TV Shows",
      },
      {
        title: "Most Popular TV Show",
      },
      {
        title: "TV News",
      },
    ],
  },
  {
    HeaderName: "Award and Events",
    data: [
      {
        title: "Oscars",
      },
      {
        title: "Emmys",
      },
      {
        title: "Halloweens Picks",
      },
      {
        title: "Scary Good  Horror",
      },
      {
        title: "MAMI",
      },
      {
        title: "All Events",
      },
    ],
  },
  {
    HeaderName: "Celebs",
    data: [
      {
        title: "Born Today",
      },
      {
        title: "Most Popular Celeb",
      },
      {
        title: "Celebrity News",
      },
    ],
  },
  {
    HeaderName: "Community",
    data: [
      {
        title: "Help Center",
      },
      {
        title: "Contributor Zone",
      },
      {
        title: "Polls",
      },
    ],
  },
];
