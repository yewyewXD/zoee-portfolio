import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 justify-center items-center py-20 container mx-auto">
      <div className="flex flex-col justify-center text-left mr-5">
        <div className="mb-3 2xl:text-lg text-base italic">
          Pour les infopreneurs…
        </div>
        <h1 className="2xl:text-5xl 2xl:leading-tight text-4xl leading-tight font-bold mb-7">
          Comment Aimeriez-Vous Augmenter Drastiquement Vos Prospects, vos
          Clients et vos Ventes Chaque Mois ?
        </h1>
        <h2 className="mb-10 2xl:text-2xl text-xl font-medium leading-normal">
          Je vous aide à développer <i>rapidement</i> votre business en
          utilisant des techniques de marketing <b>testées et approuvées</b>{" "}
          pendant que vous avez <u>l’esprit tranquille</u>!
        </h2>
        <div className="mb-5">
          <button className="2xl:text-2xl text-xl bg-darkPurple py-6 px-12 font-semibold transition duration-200 hover:opacity-80">
            OUI ! Je veux ma consultation 100% GRATUITE !
            <div className="2xl:text-base text-sm font-normal mt-2">
              Cliquez ici pour planifier votre appel de consultation GRATUIT de
              30 minutes
            </div>
          </button>
        </div>
      </div>

      <div className="relative h-full w-full flex justify-center items-center ml-5">
        <Image
          src="/images/HeroImg.svg"
          className="HeroImg pointer-events-none"
          alt=""
          layout="fill"
        />
      </div>
    </section>
  );
};

export default Hero;
