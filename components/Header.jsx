import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import navItems from "../json/navItems.json";
import socials from "../json/socials.json";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const listener = document.addEventListener("scroll", () => {
      setHasScrolled(window.scrollY > 200);
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo(0, 0);
    history.replaceState({}, null, "/");
  }

  return (
    <>
      <header
        className={`sm:pt-7 pt-2 fixed top-0 left-0 w-full z-50 transition duration-200 ${
          hasScrolled ? "bg-purple-200 sm:pb-7 pb-2 shadow-lg opacity-90" : ""
        }`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center w-full">
            <div className="sm:hidden items-center pt-3">
              <Image
                src="/images/Logo.svg"
                className="cursor-pointer"
                height={58}
                width={71.5}
                alt=""
                onClick={scrollToTop}
              />
            </div>
            <div className="sm:flex hidden justify-start items-center">
              <Image
                src="/images/Brand.svg"
                className="cursor-pointer"
                height={58}
                width={282}
                alt=""
                onClick={scrollToTop}
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

            <nav
              className={`lg:hidden fixed top-0 left-0 h-full w-full z-80 font-secondary bg-darkPurple z-50 transition duration-200 ${
                isOpened ? "" : "translate-x-full"
              }`}
            >
              <div className="flex justify-end p-5 pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 cursor-pointer"
                  viewBox="0 0 20 20"
                  fill="white"
                  onClick={() => setIsOpened(false)}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {navItems.map((navItem, index) => (
                <a
                  className="text-white font-semibold py-5 px-6 bg-darkPurple hover:bg-white block hover:text-purple-400"
                  key={`nav${index}`}
                  href={navItem.link}
                  onClick={() => setIsOpened(false)}
                >
                  {navItem.name}
                </a>
              ))}

              <div className="h-full p-5">
                <div className="absolute bottom-0 flex justify-between items-center left-0 p-5 bg-purple-200 w-full">
                  <div className="items-center pr-3 sm:flex hidden">
                    <Image
                      src="/images/Brand.svg"
                      className="pointer-events-none "
                      height={58 * 0.8}
                      width={282 * 0.8}
                      alt=""
                    />
                  </div>

                  <div className="sm:hidden flex items-center">
                    <Image
                      src="/images/Logo.svg"
                      className="pointer-events-none"
                      height={58 * 0.8}
                      width={71.5 * 0.8}
                      alt=""
                    />
                  </div>

                  <div className="flex items-center">
                    {socials.map((social, index) => (
                      <a
                        className="ml-4 flex items-center transition duration-200 hover:opacity-80"
                        key={`socialFooter${index}`}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={`/images/Social${social.name}.png`}
                          height={22}
                          width={22}
                          alt=""
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
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

      <div className="HeaderPlaceholder"></div>
    </>
  );
};

export default Header;
