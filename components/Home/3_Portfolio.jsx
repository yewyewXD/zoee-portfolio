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
        <div className="flex md:flex-nowrap flex-wrap justify-center items-center text-center">
          {portfolio.map((work, index) => {
            const isLast = index === portfolio.length - 1;
            return (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`/files/Portfolio${work.source}.pdf`}
                key={`portfolio${index}`}
                className={`md:m-0 md:w-auto md:h-auto w-40 h-40 flex justify-center items-center flex-col transition duration-200 hover:opacity-80 ${
                  !isLast ? "lg:mr-20 md:mr-12" : ""
                } m-2`}
              >
                <div>
                  <Image
                    src={`/images/Portfolio${work.source}.png`}
                    alt=""
                    height={100}
                    width={100}
                  />
                </div>

                <div className="md:mt-3 mt-1 font-medium">{work.name}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
