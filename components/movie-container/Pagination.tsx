"use client";
import Link from "next/link";
import React from "react";

const Pagination = ({
  total,
  ItemPerPage,
  search,
}: {
  total: string;
  ItemPerPage: number;
  search?: string | any;
}) => {
  const totalPage = Math.ceil(Number(total) / ItemPerPage);
  const PaginationNumber = [];
  for (let i = 0; i <= totalPage; i++) {
    if (i) {
      PaginationNumber.push(i);
    }
  }
  return (
    <div className="w-full flex m-auto  text-white">
      {PaginationNumber.map((elm) => (
        <Link
          href={{
            pathname: "/",
            query: { ...(search ? { search } : {}), page: elm },
          }}
          className="border p-2 hover:bg-blue-700 text-white mx-2"
          key={elm}
        >
          {elm}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
