import Image from "next/image";
import React from "react";
import { AiOutlineBell, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className="fixed transition top-0 w-full bg-white shadow">
      <div className="flex items-center justify-between px-5 py-3">
        <AiOutlineMenu size={24} className="rounded-md font-medium" />
        <div className="flex items-center gap-2">
          <div>
            <AiOutlineBell size={24} className="rounded-md font-medium" />
          </div>
          <div className=" rounded-full w-10 h-10 border px-2 relative">
            <Image src="/next.svg" fill={true} alt="" priority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
