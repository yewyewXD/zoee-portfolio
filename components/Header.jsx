import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 w-full">
          <div className="flex justify-start items-center">
            <Image src="/images/Brand.svg" height={58} width={282} alt="" />
            {/* <Image src="/images/Logo.svg" height={58} width={71.5} alt="" /> */}
          </div>

          <nav className="flex justify-center items-center gap-8">
            <span>Portfolio</span>
            <span>Services</span>
            <span>About</span>
          </nav>

          <div className="flex justify-end items-center">Book a free call</div>
        </div>
      </div>
    </header>
  );
};

export default Header;