import React from "react";

const FinalCTA = () => {
  return (
    <section className="FinalCTA sm:py-16 py-12 bg-white">
      <div className="lg:w-6/12 md:w-8/12 w-11/12 container-sm mx-auto">
        <h3 className="md:text-3xl sm:text-2xl text-xl font-bold text-center sm:mb-7 mb-5">
          Êtes-Vous Prêt à Voir Votre Nombre de Prospects, de Clients et vos
          Ventes Augmenter Drastiquement ? Il ne Vous Reste qu’une Chose à
          Faire…
        </h3>

        <h4 className="2xl:text-xl sm:text-lg text-base text-center sm:mb-10 mb-7">
          Êtes-vous prêt à obtenir plus de prospects et à attirer plus de client
          et à multiplier votre chiffre d’affaires ? Si oui, cliquez sur le
          bouton ci-dessous maintenant pour réserver votre consultation{" "}
          <b>100% GRATUITE</b> avec moi (je tiens à préciser que je ne prends
          pas plus de 4 à 5 clients pas mois, les places sont donc{" "}
          <u>limitées</u>).
        </h4>

        <div className="text-center">
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
    </section>
  );
};

export default FinalCTA;
