import Link from "next/link";
import React, { ReactNode } from "react";

const SharedCompo = ({ children }: { children: ReactNode }) => {
  return (
    <Link href={"#"} className="text-[#5799EF] hover:underline duration-150">
      {children}
    </Link>
  );
};

export default SharedCompo;
