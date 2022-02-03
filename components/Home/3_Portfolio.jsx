import React from "react";
import Image from "next/image";
import portfolio from "../../json/portfolio.json";

const Portfolio = () => {
  return (
    <section id="portfolio" className="sm:py-16 py-12">
      <h2 className="md:mb-12 mb-8 text-2xl font-semibold text-center">
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
                className={`${
                  work.featured ? "col-span-2" : ""
                } w-full h-72 bg-center bg-cover bg-no-repeat relative`}
                style={{
                  backgroundImage: `url(/images/Pre${work.source}.jpg)`,
                }}
              >
                <div className="top-0 absolute h-full w-full bg-blackPurple opacity-60 transition duration-300 hover:opacity-0"></div>
                <div className="top-0 absolute h-full w-full flex justify-center items-center flex-col">
                  <Image
                    // className="whiteFilter"
                    src={`/images/Portfolio${work.source}.png`}
                    alt=""
                    height={120}
                    width={120}
                  />
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
