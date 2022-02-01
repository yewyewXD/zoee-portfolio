import React from "react";
import Image from "next/image";
import Link from "next/link";

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

          <nav className="flex justify-center items-center gap-8">
            <Link href="#certificate">Certifications</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#services">Services</Link>
            <Link href="#about">À propos de moi</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
