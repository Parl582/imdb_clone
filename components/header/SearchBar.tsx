import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  Search,
  BookmarkPlus,
  UserCircle2,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { SearchData } from "@/types";
import { useSelector, useDispatch } from "react-redux";
import { searchMovies, searchState } from "../redux/searchSlice";
import { RootState } from "../redux/store";
import { useDebounce } from "use-debounce";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const route = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const [text, setText] = useState(search);
  const [debounce] = useDebounce(text, 500);
  const [searchResult, setSearchResult] = useState<SearchData[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    } else {
      if (!debounce) {
        route.push("/");
      } else {
        route.push(`/?search=${debounce}`);
      }
    }
  }, [debounce]);
  return (
    <div className="flex-1 relative">
      <div className="w-full bg-white flex gap-1 items-center  h-[30px] rounded-sm overflow-hidden px-2 relative">
        <button className="border-r-[1px] border-black h-full items-center justify-center flex px-2 cursor-pointer font-light">
          All
        </button>
        <input
          type="search"
          value={text ? text : ""}
          className="w-full h-full outline-none px-2 font-light"
          placeholder="Search IMDb"
          onChange={handleChange}
        />
        <Search size={16} color="gray" />
      </div>
      {/* {search && (
        <div className="absolute top-full h-[70vh] overflow-y-auto z-50  bg-headerbg  inset-x-0 my-1 rounded-sm">
          {searchResult?.map((elm, i) => (
            <div
              className="w-full flex gap-2 px-3 py-1 cursor-pointer hover:bg-slate-500 duration-200"
              key={i}
            >
              {elm.Poster ? (
                <Image src={elm.Poster} width={50} height={100} alt="" />
              ) : (
                <Image src={"/noImage.png"} width={70} height={120} alt="" />
              )}
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default SearchBar;
