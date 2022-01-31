import React from "react";
import services from "../../json/services.json";
import Interweave from "interweave";
import Image from "next/image";

const Services = () => {
  return (
    <section className="py-16">
      <h2 className="mb-16 text-2xl font-semibold text-center ">
        Services Premium que J’offre
      </h2>
      <div className="container mx-auto flex flex-col gap-16">
        {services.map((service, index) => (
          <div
            className="grid grid-cols-5 w-full gap-16"
            key={`service${index}`}
          >
            <div
              className={`${service?.reverse ? "order-last" : ""} col-span-3`}
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <Interweave
                className="block text-justify"
                content={service.description}
              />
              <br />
              <div className="mb-1">{service.category.title} :</div>
              {service.category.list.map((text) => (
                <div key={text} className="flex">
                  <div className="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      style={{ marginTop: "1px" }}
                      viewBox="0 0 20 20"
                      fill="black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="col-span-2 relative">
              <Image
                src={`/images/ServiceImg${index + 1}.svg`}
                className="pointer-events-none"
                layout="fill"
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
