import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-16">
          <div className="col-span-3 text-justify">
            <h2 className="mb-10 text-2xl font-semibold text-left">
              À Propos de Moi
            </h2>

            <p className="mb-6">
              Bon je le répète encore une fois (vaut mieux trop que pas assez) :
              j’aide les entreprises à augmenter <i>rapidement</i> et{" "}
              <b>drastiquement</b> leur nombre de prospects, de clients et bien
              sûr leurs ventes chaque mois. Et tout ça en utilisant des
              techniques et stratégies de marketing <u>testées et approuvées</u>
              .
            </p>

            <p className="mb-5">
              Bon, en dehors de ça j’adore lire des livres sur le marketing, le
              copywriting, la psychologie et sur pleins d’autre sujets. Tout
              court, J’ADORE apprendre et approfondir mes compétences ! Car ma
              passion pour le copywriting me motive sans arrête à progresser.
            </p>

            <p className="mb-5">
              Fun fact : j’ai fait du breakdance pendant 5 ans (oui vous avez
              bien lu, c’est la danse où on tourne sur la tête haha). Mais vous
              allez me dire qu’est-ce que ça à voir avec le copywriting ? Eh
              bien, j’ai appris la <b>discipline</b> et la <b>ténacité</b>. Ne
              jamais abandonner tant qu’on n’a pas atteint ses objectifs.
            </p>

            <p className="mb-5">
              Sinon, je suis aussi passionnée de cuisine. J’adore cuisiner pour
              ma famille et mes amis. Tout simplement parce que j’adore servir
              les autres. Mais ce que j’aime plus que tout c’est de les rendre{" "}
              <u>heureux et satisfaits</u> (comme mes clients en copywriting).
            </p>

            <p className="mb-5">
              Bon aller dernière passion (j’en ai trop lol)… J’adore l’art ! La
              peinture en particulier. Je me mets à la place de ceux qui
              observent la peinture et j’essaye de susciter des émotions avec
              les couleurs, les traits, les formes, etc. Et en copywriting ? Eh
              bien je transmets les émotions avec les <u>mots</u> tout
              simplement.
            </p>

            <p className="mb-5">
              Une toute dernière chose (après j’arrête de parler de moi),
              l’honnête c’est une des valeurs les plus importantes à mon sens.
              Alors si je vois que je ne peux pas vous aider, je ne vous vendrai
              JAMAIS mes services (pas comme ces manipulateurs qui veulent juste
              se faire de l’argent). Je ne travaille qu’avec des personnes avec
              qui je sais que je peux <u>apporter des résultats</u>.
            </p>
          </div>

          <div className="col-span-2 relative flex justify-center items-center">
            <div>
              <Image
                src="/images/ZoeeHead.jpeg"
                className="AboutImg pointer-events-none"
                height={500}
                width={500}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
