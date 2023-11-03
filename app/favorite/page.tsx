import Favorite from "@/components/favourite/Faviorate";
import { Metadata } from "next";

import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "IMDb | Favorite",
    description: "this is user favorite Movie list Page",
  };
}

const page = () => {
  return (
    <div className="bg-[#2A2A2C] min-h-[calc(100vh-60px)]">
      <Favorite />
    </div>
  );
};

export default page;
