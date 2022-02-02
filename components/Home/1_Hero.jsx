import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="grid lg:grid-cols-2 justify-center items-center py-20 container mx-auto">
      <div className="xl:text-left text-center flex flex-col justify-center mr-5">
        <div className="mb-3 2xl:text-lg text-base italic">
          Pour les infopreneurs…
        </div>
        <h1 className="2xl:text-5xl 2xl:leading-tight xl:text-4xl text-3xl xl:mb-7 mb-5  leading-tight font-bold">
          Comment Aimeriez-Vous Augmenter Drastiquement Vos Prospects, vos
          Clients et vos Ventes Chaque Mois ?
        </h1>
        <h2 className="2xl:text-2xl xl:text-xl text-lg xl:mb-10 lg:mb-8 font-medium leading-normal">
          Je vous aide à développer <i>rapidement</i> votre business en
          utilisant des techniques de marketing <b>testées et approuvées</b>{" "}
          pendant que vous avez <u>l’esprit tranquille</u>!
        </h2>

        <div className="lg:hidden my-3">
          <Image
            src="/images/HeroImgMobile.svg"
            className="pointer-events-none"
            alt=""
            height={350}
            width={350}
          />
        </div>

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
