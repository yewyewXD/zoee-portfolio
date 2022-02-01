import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-2">
        <div className="relative flex items-center">
          <Image
            src="/images/ContactImg.svg"
            className="pointer-events-none"
            alt=""
            layout="fill"
          />
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-10">Comment ça Marche ?</h3>
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
          <div>
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
