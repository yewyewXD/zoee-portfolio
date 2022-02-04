import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="bg-white sm:py-16 py-12 relative">
      <div id="contact" className="absolute -top-20" />
      <div className="container mx-auto grid lg:grid-cols-2">
        <div className="xl:ml-0 lg:flex hidden mr-5 relative items-center">
          <Image
            src="/images/ContactImg.svg"
            className="pointer-events-none"
            alt=""
            layout="fill"
          />
        </div>

        <div className="xl:ml-0 lg:ml-5">
          <h3 className="lg:text-left lg:mb-10 md:text-3xl sm:text-2xl text-xl mb-5 text-center font-bold">
            Comment ça Marche ?
          </h3>
          <div className="lg:hidden flex justify-center mb-5">
            <Image
              src="/images/ContactImg.svg"
              className="pointer-events-none"
              alt=""
              height={250}
              width={450}
            />
          </div>
          <ol className="mb-6">
            <li className="mb-3">
              1. Nous allons commencer par passer un{" "}
              <b>appel Google Meet de 30 minutes</b>. L’objectif ? Que je puisse
              connaître vos objectifs professionnels et personnel.
            </li>
            <li className="mb-3">
              2. Je vais ensuite vous dire quel type de service que je propose
              convient le mieux pour votre business model et aussi comment nous
              travaillerons ensemble pour atteindre vos objectifs.
            </li>
            <li className="mb-3">
              3. Si vous souhaitez qu’on travaille ensemble et que mes services
              vous conviennent, vous pouvez alors m’engager.
            </li>
          </ol>
          <div className="text-justify">
            Note : <u>Je n’accepte pas de travailler avec tout le monde</u>. Si
            je vois que je ne peux vraiment pas vous aider et vous rapporter de
            réels résultats, je ne vous vendrai pas mes services. C’est donc
            pour cette raison que nous faisons un appel Google Meet avant de
            commencer à travailler sur votre projet, pour être sûrs que nous
            sommes en mesure de travailler ensemble !
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
