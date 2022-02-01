import React from "react";

const FinalCTA = () => {
  return (
    <section className="FinalCTA py-16 bg-white">
      <div className="w-5/12 mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-7">
          Êtes-Vous Prêt à Voir Votre Nombre de Prospects, de Clients et vos
          Ventes Augmenter Drastiquement ? Il ne Vous Reste qu’une Chose à
          Faire…
        </h3>

        <p className="text-xl text-center mb-10">
          Êtes-vous prêt à obtenir plus de prospects et à attirer plus de client
          et à multiplier votre chiffre d’affaires ? Si oui, cliquez sur le
          bouton ci-dessous maintenant pour réserver votre consultation{" "}
          <b>100% GRATUITE</b> avec moi (je tiens à préciser que je ne prends
          pas plus de 4 à 5 clients pas mois, les places sont donc{" "}
          <u>limitées</u>).
        </p>

        <div className="text-center">
          <button className="bg-darkPurple py-6 px-12 font-semibold text-2xl transition duration-200 hover:opacity-80">
            OUI ! Je veux ma consultation 100% GRATUITE !
            <div className="text-base font-normal mt-2">
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
