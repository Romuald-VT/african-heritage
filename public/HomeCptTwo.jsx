import CulturalExpertise from '../ShareCpt/CardCpt/CulturalExpertise';

const servicesData = [
  {
    title: "Évaluation d'œuvres d'art",
    description: "Estimation précise de la valeur des œuvres d'art basée sur des méthodes d'évaluation reconnues et l'expertise du marché de l'art.",
    linkText: "En savoir plus",
    buttonLink:"/expertise"
  },
  {
    title: "Conservation du patrimoine",
    description: "Conseils et stratégies pour la préservation et la restauration des biens culturels, y compris les monuments historiques et les collections muséales.",
    linkText: "En savoir plus",
    buttonLink:"/expertise"
  },
  {
    title: "Expertise judiciaire culturelle",
    description: "Intervention dans le cadre de litiges et de procédures judiciaires nécessitant une expertise en matière de patrimoine culturel.",
    linkText: "En savoir plus",
    buttonLink:"/expertise"
  }
];

const HomeCptTwo = () => {
  return (
    <div>
      <CulturalExpertise 
        heading="Notre expertise culturelle"
        services={servicesData}
      />
    </div>
  );
};

export default HomeCptTwo;
