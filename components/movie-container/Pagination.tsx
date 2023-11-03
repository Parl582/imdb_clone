"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {
  total: string;
  ItemPerPage: number;
  search?: string | any;
  page?: string | number | undefined;
};

const Pagination = ({ total, ItemPerPage, search, page }: Props) => {
  const Router = useRouter();
  const totalPage = Math.ceil(Number(total) / ItemPerPage);
  const PaginationNumber: number[] = [];

  if (total) {
    for (let i = Number(page) - 3; i <= Number(page) + 2; i++) {
      if (i < 1) continue;
      if (i > totalPage) break;
      PaginationNumber.push(i);
    }
  }

  return (
    <div className="w-full flex m-auto  text-white  my-3 justify-end items-center gap-1">
      {Number(page) > 1 && (
        <Button asChild className="h-[32px]">
          <Link
            href={{
              pathname: "/",
              query: { ...(search ? { search } : {}), page: Number(page) - 1 },
            }}
            scroll={false}
          >
            Prev
          </Link>
        </Button>
      )}
      {PaginationNumber?.map((elm,i) => (
        <div className="flex gap-2" key={i} >
          <Link
            href={{
              pathname: "/",
              query: { ...(search ? { search } : {}), page: elm },
            }}
            className={`border px-2 py-1 hover:bg-blue-700 text-white text-sm rounded-sm ${
              Number(page) === elm ? "bg-red-500" : ""
            } `}
            key={elm}
          >
            {elm}
          </Link>
        </div>
      ))}

      {Number(page) < totalPage && (
        <Button asChild className="h-[32px]">
          <Link
            href={{
              pathname: "/",
              query: { ...(search ? { search } : {}), page: Number(page) + 1 },
            }}
            scroll={false}
          >
            Next
          </Link>
        </Button>
      )}
    </div>
  );
};

export default Pagination;
