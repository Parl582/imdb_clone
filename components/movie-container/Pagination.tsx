"use client";
import Link from "next/link";
import React from "react";

const Pagination = ({
  total,
  ItemPerPage,
  search,
  page,
}: {
  total: string;
  ItemPerPage: number;
  search?: string | any;
  page?: string | number | undefined;
}) => {
  const totalPage = Math.ceil(Number(total) / ItemPerPage);
  const PaginationNumber = [];

  if (total) {
    for (let i = Number(page) - 3; i <= Number(page) + 1; i++) {
      if (i >= 1) {
        if (i <= totalPage) {
          PaginationNumber.push(i);
        }
      }
    }
  }

  return (
    <div className="w-full flex m-auto  text-white  my-3 justify-end">
      {PaginationNumber.map((elm) => (
        <>
          <Link
            href={{
              pathname: "/",
              query: { ...(search ? { search } : {}), page: elm },
            }}
            className={`border p-2 hover:bg-blue-700 text-white mx-2 ${
              Number(page) === elm ? "bg-red-500" : ""
            } `}
            key={elm}
          >
            {elm}
          </Link>
        </>
      ))}

      <div className="flex items-center gap-2 ">
        ...of
        <Link
          href={{
            pathname: "/",
            query: { ...(search ? { search } : {}), page: totalPage },
          }}
          className={`border p-2 hover:bg-blue-700 text-white mx-2 ${
            Number(page) === totalPage ? "bg-red-500" : ""
          } `}
        >
          {totalPage}
        </Link>{" "}
      </div>
    </div>
  );
};

export default Pagination;
