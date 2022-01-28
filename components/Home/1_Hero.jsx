import React from "react";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 justify-center items-center flex-grow">
      <div className="flex flex-col justify-center px-20 text-left">
        <div className="mb-3 text-lg italic">Pour les infopreneurs…</div>
        <h1 className="text-5xl font-bold mb-7 leading-tight">
          Comment Aimeriez-Vous Augmenter Drastiquement Votre Nombre de
          Prospects, de Clients et vos Ventes Chaque Mois ?
        </h1>
        <h2 className="mb-10 text-2xl font-medium leading-normal">
          Je vous aide à développer rapidement votre business en utilisant des
          techniques de marketing testées et approuvées pendant que vous avez
          l’esprit tranquille !
        </h2>
        <div className="mb-5">
          <button className="bg-darkPurple py-6 px-12 font-semibold text-2xl transition duration-200 hover:opacity-80">
            OUI ! Je veux ma consultation 100% GRATUITE !
          </button>
        </div>
        <div className="flex items-center text-gray-700">
          <hr className="border-t border-gray-700 w-5 mr-3" /> Cliquez ici pour
          planifier votre appel de consultation GRATUIT de 30 minutes
        </div>
      </div>
    </section>
  );
};

export default Hero;
