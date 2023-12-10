"use client";

import Image from "next/image";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(() => false);
  };
  return (
    <div className="flex justify-between px-6 py-4 fixed top-0 z-10 bg-black bg-opacity-50 w-full">
      <div className="flex gap-2 items-center">
        {" "}
        <Image
          src="/orcgg-logo.png"
          alt="logo"
          width={55}
          height={55}
          className="rounded-full "
        />
        <h2 className="text-xl text-light font-bold">
          Our Redeemer Lutheran Church
        </h2>
      </div>
      <div className="z-20 ">
        {" "}
        <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
      </div>
      {isOpen && (
        <div className="w-[100vw] h-[100vh] absolute top-0 left-0 flex flex-col items-center bg-dark bg-opacity-90 text-light justify-center text-2xl font-bold ">
          <nav>
            <ul className="flex flex-col gap-8 text-3xl">
              <li>
                <Link href="#home" onClick={closeModal}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#next-steps" onClick={closeModal}>
                  Next Steps
                </Link>
              </li>
              <li>
                <Link href="#about" onClick={closeModal}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" onClick={closeModal}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;
