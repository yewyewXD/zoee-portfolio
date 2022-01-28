import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 justify-center items-center py-20 container mx-auto gap-10">
      <div className="flex flex-col justify-center text-left">
        <div className="mb-3 text-lg italic">Pour les infopreneurs…</div>
        <h1 className="text-5xl font-bold mb-7 leading-tight">
          Comment Aimeriez-Vous Augmenter Drastiquement Vos Prospects, vos
          Clients et vos Ventes Chaque Mois ?
        </h1>
        <h2 className="mb-10 text-2xl font-medium leading-normal">
          Je vous aide à développer <span className="italic">rapidement</span>{" "}
          votre business en utilisant des techniques de marketing{" "}
          <b>testées et approuvées</b> pendant que vous avez{" "}
          <u>l’esprit tranquille</u>!
        </h2>
        <div className="mb-5">
          <button className="bg-darkPurple py-6 px-12 font-semibold text-2xl transition duration-200 hover:opacity-80">
            OUI ! Je veux ma consultation 100% GRATUITE !
            <div className="text-base font-normal mt-2">
              Cliquez ici pour planifier votre appel de consultation GRATUIT de
              30 minutes
            </div>
          </button>
        </div>
      </div>

      <div className="relative h-full w-full flex justify-center items-center">
        <Image
          src="/images/HeroImg.svg"
          className="HeroImg"
          alt=""
          layout="fill"
        />
      </div>
    </section>
  );
};

export default Hero;
