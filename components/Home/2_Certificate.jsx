import React from "react";
import Image from "next/image";
import certificates from "../../json/certificates.json";

const Certificate = () => {
  return (
    <section
      id="certificate"
      className="w-full flex justify-center items-center bg-white sm:py-16 py-12"
    >
      <div className="container mx-auto">
        <h2 className="md:mb-10 md:text-3xl text-2xl mb-4 font-bold text-center">
          Certifications Personnelles Vérifiées
        </h2>
        <div className="flex md:flex-nowrap flex-wrap justify-center items-center justify-items-center">
          {certificates.map((name, index) => {
            const isLast = index === certificates.length - 1;
            return (
              <div
                className={`flex flex-col justify-center items-center md:m-0 ${
                  !isLast ? "md:mr-16" : ""
                } sm:m-8 m-5`}
                key={`cert${index}`}
              >
                <div className="flex justify-center items-center sm:mb-5 mb-2">
                  <Image
                    src={`/images/Cert${name}Logo.png`}
                    width={151}
                    height={151}
                    alt=""
                  />
                </div>

                <div className="flex justify-center items-center">
                  <Image
                    src={`/images/Cert${name}.jpg`}
                    width={152}
                    height={117}
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
