import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid lg:grid-cols-2 justify-center items-center md:py-20 py-7 container mx-auto">
      <div className="xl:text-left text-center flex flex-col justify-center lg:mr-5">
        <div className="mb-3 2xl:text-lg md:text-base text-sm italic">
          Pour les infopreneurs…
        </div>
        <h1 className="2xl:text-5xl 2xl:leading-tight xl:text-4xl md:text-3xl text-2xl xl:mb-7 mb-5 leading-tight font-bold">
          Comment Aimeriez-Vous Augmenter Drastiquement Vos Prospects, vos
          Clients et vos Ventes Chaque Mois ?
        </h1>
        <h2 className="2xl:text-2xl xl:text-xl md:text-lg text-base xl:mb-10 lg:mb-8 font-medium leading-normal">
          Je vous aide à développer <i>rapidement</i> votre business en
          utilisant des techniques de marketing <b>testées et approuvées</b>{" "}
          pendant que vous avez <u>l’esprit tranquille</u>!
        </h2>

        <div className="lg:hidden">
          <Image
            src="/images/HeroImgMobile.svg"
            className="pointer-events-none"
            alt=""
            height={300}
            width={300}
          />
        </div>

        <div className="mb-5">
          <button className="bg-darkPurple md:py-6 md:px-12 sm:py-5 sm:px-10 py-4 px-8 transition duration-200 btn-primary">
            <span className="2xl:text-2xl sm:text-xl text-lg sm:leading-normal leading-tight font-semibold">
              OUI ! Je veux ma consultation 100% GRATUITE !
            </span>
            <div className="2xl:text-base text-sm font-normal mt-2">
              Cliquez ici pour planifier votre appel de consultation GRATUIT de
              30 minutes
            </div>
          </button>
        </div>
      </div>

      <div className="lg:flex hidden relative h-full w-full justify-center items-center ml-5">
        <Image
          src="/images/HeroImg.svg"
          className="pointer-events-none"
          alt=""
          layout="fill"
        />
      </div>
    </section>
  );
};

export default Hero;
