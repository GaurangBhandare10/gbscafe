import Link from "next/link";
import React from "react";

const Footer = () => {
  const currenDate = new Date();
  return (
    <div className="h-12  max-[376px]:text-xs max-[376px]:h-[6px]  md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        GB's Cafe
      </Link>
      <p> {currenDate.getFullYear()} © ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
