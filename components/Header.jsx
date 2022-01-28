import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-7">
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
            <span>Certification</span>
            <span>Portfolio</span>
            <span>Services</span>
            <span>À propos de moi</span>
          </nav>

          {/* <div className="flex justify-end items-center">
            <button className="py-3 px-6 bg-darkPurple font-semibold text-lg transition duration-200 hover:opacity-80">
              Réserve ton appel GRATUIT !
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
