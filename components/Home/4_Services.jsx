import React from "react";
import services from "../../json/services.json";
import Interweave from "interweave";

const Services = () => {
  return (
    <section>
      <h2 className="mb-10 text-2xl font-semibold text-center py-16">
        Services Premium que J’offre
      </h2>
      <div className="container mx-auto">
        {services.map((service, index) => (
          <div className="grid grid-cols-2" key={`service${index}`}>
            <div className={`${service?.reverse ? "order-last" : ""}`}>
              <h3>{service.title}</h3>
              <Interweave content={service.description} />
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
