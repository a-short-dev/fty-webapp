import Image from "next/image";
import React from "react";
import { AiOutlineBell } from "react-icons/ai";

interface HeaderProps {
  firstName?: string | null | undefined;
  avatar?: string | null | undefined;
}

const Header = ({ firstName, avatar }: HeaderProps) => {
  return (
    <div className="fixed transition top-0 w-full bg-white shadow">
      <div className="flex items-center justify-between px-5 py-3">
        <h3 className="font-normal text-lg">Hi,{firstName || "User"}</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <AiOutlineBell size={24} className="rounded-md font-medium" />
          </div>
          <div className=" rounded-full w-10 h-10 border px-2 relative">
            <Image src={avatar || "/next.svg"} fill alt="" priority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
