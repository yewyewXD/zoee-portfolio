import React from "react";

const FinalCTA = () => {
  return (
    <section className="FinalCTA sm:py-16 py-12 bg-white">
      <div className="lg:w-6/12 md:w-8/12 w-11/12 mx-auto">
        <h3 className="2xl:text-3xl text-2xl font-semibold text-center mb-7">
          Êtes-Vous Prêt à Voir Votre Nombre de Prospects, de Clients et vos
          Ventes Augmenter Drastiquement ? Il ne Vous Reste qu’une Chose à
          Faire…
        </h3>

        <h4 className="2xl:text-xl text-lg text-center mb-10">
          Êtes-vous prêt à obtenir plus de prospects et à attirer plus de client
          et à multiplier votre chiffre d’affaires ? Si oui, cliquez sur le
          bouton ci-dessous maintenant pour réserver votre consultation{" "}
          <b>100% GRATUITE</b> avec moi (je tiens à préciser que je ne prends
          pas plus de 4 à 5 clients pas mois, les places sont donc{" "}
          <u>limitées</u>).
        </h4>

        <div className="text-center">
          <button className="2xl:text-2xl text-xl bg-darkPurple py-6 px-12 font-semibold transition duration-200 hover:opacity-80">
            OUI ! Je veux ma consultation 100% GRATUITE !
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
