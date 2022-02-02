import React from "react";
import Image from "next/image";
import Link from "next/link";
import navItems from "../json/navItems.json";

const Header = () => {
  return (
    <header className="pt-7">
      <div className="container mx-auto">
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-start items-center">
            <Image
              src="/images/Brand.svg"
              className="pointer-events-none"
              height={58}
              width={282}
              alt=""
            />
            {/* <Image src="/images/Logo.svg" height={58} width={71.5} alt="" /> */}
          </div>

          <nav className="flex justify-center items-center">
            {navItems.map((navItem, index) => (
              <div
                className="flex flex-col justify-center items-center ml-8"
                key={`nav${index}`}
              >
                <Link href={navItem.link}>{navItem.name}</Link>
                <hr />
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
