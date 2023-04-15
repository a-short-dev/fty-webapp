import Image from "next/image";
import React from "react";
import {
  AiFillNotification,
  AiOutlineMenu,
  AiOutlineNotification,
} from "react-icons/ai";

const Header = () => {
  return (
    <div className="fixed transition top-0 w-full bg-white shadow">
      <div className="flex items-center justify-between px-5 py-3">
        <AiOutlineMenu size={24} className="rounded-md font-medium" />
        <div className="flex gap-2">
          <div>
            <AiOutlineNotification
              size={24}
              className="rounded-md fontme
            "
            />
          </div>

          <Image
            src="/next.svg"
            width={34}
            height={34}
            alt=""
            className="rounded-full border inline-block"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
