import React from "react";
import Image from "next/image";
import portfolio from "../../json/portfolio.json";

const Portfolio = () => {
  return (
    <section id="portfolio" className="sm:py-16 py-12">
      <h2 className="md:mb-12 mb-8 text-3xl font-bold text-center">
        Portfolio
      </h2>

      <div className="container mx-auto">
        <div className="lg:w-7/12 md:w-8/12 w-11/12 grid grid-cols-3 justify-center items-center gap-4 mx-auto">
          {portfolio.map((work, index) => {
            const isLast = index === portfolio.length - 1;
            return (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`/files/Portfolio${work.source}.pdf`}
                key={`portfolio${index}`}
                className={`PortfolioLink ${
                  work.featured ? "col-span-2" : ""
                } w-full h-72 relative overflow-hidden`}
              >
                <div
                  className="PortfolioBg top-0 absolute h-full w-full bg-center bg-cover bg-no-repeat transition duration-1000"
                  style={{
                    backgroundImage: `url(/images/Pre${work.source}.jpg)`,
                  }}
                ></div>

                <div className="top-0 absolute h-full w-full transition duration-300 hover:opacity-0">
                  <div className="top-0 absolute h-full w-full bg-blackPurple opacity-60"></div>
                  <div className="top-0 absolute h-full w-full flex justify-center items-center flex-col">
                    <Image
                      src={`/images/Portfolio${work.source}.png`}
                      alt=""
                      height={120}
                      width={120}
                    />

                    <h5 className="text-lightPurple mt-6 font-bold leading-none">
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
