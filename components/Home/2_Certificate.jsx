import React from "react";
import Image from "next/image";
import certificates from "../../json/certificates.json";

const Certificate = () => {
  return (
    <section
      id="certificate"
      className="w-full flex justify-center items-center bg-white py-16"
    >
      <div className="container mx-auto">
        <h2 className="mb-10 text-2xl font-semibold text-center">
          Certifications Personnelles Vérifiées
        </h2>
        <div className="flex justify-center items-center justify-items-center">
          {certificates.map((name, index) => {
            const isLast = index === certificates.length - 1;
            return (
              <div
                className={`flex flex-col justify-center items-center ${
                  !isLast ? "mr-16" : ""
                }`}
                key={`cert${index}`}
              >
                <div className="flex justify-center items-center mb-5">
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
