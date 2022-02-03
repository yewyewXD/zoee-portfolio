import React from "react";
import Image from "next/image";
import portfolio from "../../json/portfolio.json";

const Portfolio = () => {
  return (
    <section id="portfolio" className="sm:py-16 py-12">
      <h2 className="md:mb-12 text-3xl font-bold text-center">Portfolio</h2>

      <div className="container mx-auto">
        <div className="2xl:w-7/12 xl:w-8/12 lg:w-10/12 w-full grid md:grid-cols-3 grid-cols-1 justify-center items-center md:gap-4 mx-auto">
          {portfolio.map((work, index) => {
            return (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`/files/Portfolio${work.source}.pdf`}
                key={`portfolio${index}`}
                className={`PortfolioLink ${
                  work.featured ? "md:col-span-2" : ""
                } w-full h-80 relative overflow-hidden md:mt-0 mt-8`}
              >
                <div
                  className="PortfolioBg top-0 absolute h-full w-full bg-center bg-cover bg-no-repeat transition duration-1000"
                  style={{
                    backgroundImage: `url(/images/Pre${work.source}.jpg)`,
                  }}
                ></div>

                <div className="md:hover:opacity-0 top-0 absolute h-full w-full transition duration-300">
                  <div className="top-0 absolute h-full w-full bg-blackPurple opacity-60"></div>
                  <div className="top-0 absolute h-full w-full flex justify-center items-center flex-col">
                    <h5 className="md:hidden text-lightPurple mb-3 font-bold leading-none">
                      {work.name}
                    </h5>

                    <Image
                      src={`/images/Portfolio${work.source}.png`}
                      alt=""
                      height={120}
                      width={120}
                    />

                    <h5 className="md:block hidden text-lightPurple mt-6 font-bold leading-none">
                      {work.name}
                    </h5>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
