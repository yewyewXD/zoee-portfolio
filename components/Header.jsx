import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import navItems from "../json/navItems.json";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <header className="sm:pt-7 pt-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center w-full">
          <div className="sm:hidden items-center pt-3">
            <Image
              src="/images/Logo.svg"
              className="pointer-events-none"
              height={58}
              width={71.5}
              alt=""
            />
          </div>
          <div className="sm:flex hidden justify-start items-center">
            <Image
              src="/images/Brand.svg"
              className="pointer-events-none"
              height={58}
              width={282}
              alt=""
            />
          </div>

          <nav className="lg:flex hidden justify-center items-center">
            {navItems.map((navItem, index) => (
              <div
                className="flex flex-col justify-center items-center ml-8 font-secondary font-semibold"
                key={`nav${index}`}
              >
                <Link href={navItem.link}>{navItem.name}</Link>
                <hr />
              </div>
            ))}
          </nav>

          <div className="lg:hidden">
            {isOpened ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 cursor-pointer"
                viewBox="0 0 20 20"
                fill="black"
                onClick={() => setIsOpened(false)}
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                onClick={() => setIsOpened(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
