"use client";

import Image from "next/image";
import { useState } from "react";
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex justify-between px-6 py-6 ">
      <div className="flex gap-2 items-center">
        {" "}
        <Image
          src="/orcgg-logo.png"
          alt="logo"
          width={55}
          height={55}
          className="rounded-full "
        />
        <h2 className="text-xl font-bold">Our Redeemer Lutheran Church</h2>
      </div>
      <div className="z-20">
        {" "}
        <Hamburger toggled={isOpen} toggle={setOpen} color="gray" />
      </div>
      {isOpen && (
        <div className="w-[100vw] h-[100vh] absolute bg-red-800 bg-opacity-1 top-0 left-0 flex flex-col items-center justify-center">
          <nav>
            <ul>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;
