import React from "react";
import Image from "next/image";
import portfolio from "../../json/portfolio.json";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16">
      <h2 className="mb-12 text-2xl font-semibold text-center">Portfolio</h2>

      <div className="flex justify-center items-center">
        {portfolio.map((work, index) => {
          const isLast = index === portfolio.length - 1;
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`/files/Portfolio${work.source}.pdf`}
              key={`portfolio${index}`}
              className={`flex justify-center items-center flex-col transition duration-200 hover:opacity-80 ${
                !isLast ? "mr-20" : ""
              }`}
            >
              <div>
                <Image
                  src={`/images/Portfolio${work.source}.png`}
                  alt=""
                  height={100}
                  width={100}
                />
              </div>

              <div className="mt-3 font-medium">{work.name}</div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
