import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";


interface ServiceSectionImageProps {
    key:number,
    type:string,
    title:string,
    description:string,
    imageSrc:string,
    imageAlt:string,
    features:Array<string>,
    buttonText:string,
    buttonLink:string
}


const services = [
    {
    id: 1,
    type: 'left', // Image à gauche
    title: "Évaluation du patrimoine",
    description: "Estimation précise de la valeur des œuvres d'art basée sur des méthodes d'évaluation reconnues et l'expertise du marché de l'art.",
    imageSrc: "/service1.jpg",
    imageAlt: "Évaluation du patrimoine",
    features: [
      'Analyse technique et historique approfondie',
      'Étude du marché contemporain',
      'Documentation détaillée et certification',
    ],
    buttonText: "Faire une évaluation",
    buttonLink: "/user-login",
  },
  {
    id: 2,
    type: 'right', // Image à droite
    title: "Conservation du patrimoine",
    description: "Conseils et stratégies pour la préservation et la restauration des biens culturels, y compris les monuments historiques et les collections muséales.",
    imageSrc: "/service2.jpg",
    imageAlt: "Conservation du patrimoine",
    features: [
      'Plans de conservation préventive',
      'Restauration et maintenance',
      'Gestion des collections',
    ],
    buttonText: "Consulter nos experts",
    buttonLink: "/contact",
  },
  {
    id: 3,
    type: 'left', // Image à gauche
    title: "Expertise judiciaire culturelle",
    description: "Intervention dans le cadre de litiges et de procédures judiciaires nécessitant une expertise en matière de patrimoine culturel.",
    imageSrc: "/service3.jpg",
    imageAlt: "Expertise judiciaire",
    features: [
      "Rapports d'expertise détaillés",
      'Assistance aux procédures légales',
      'Témoignage expert en tribunal',
    ],
    buttonText: "En savoir plus",
    buttonLink: "/contact",
  },
];

const ServiceSectionImageLeft = ({ title, description, imageSrc, imageAlt, features, buttonText, buttonLink }:ServiceSectionImageProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image src={imageSrc} alt={imageAlt} width={624} height={416} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <FaCheckCircle className="text-indigo-600 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <a href={buttonLink} className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};


const ServiceSectionImageRight = ({ title, description, imageSrc, imageAlt, features, buttonText, buttonLink }:ServiceSectionImageProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 order-2 md:order-1 p-8">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-6">{description}</p>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <FaCheckCircle className="text-indigo-600 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <a href={buttonLink} className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300">
            {buttonText}
          </a>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <Image src={imageSrc} alt={imageAlt} width={624} height={416} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};


const ServiceUITwo = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12">
          {services.map(service => {
            if (service.type === 'left') {
              return (
                <ServiceSectionImageLeft
                      key={service.id}
                      title={service.title}
                      description={service.description}
                      imageSrc={service.imageSrc}
                      imageAlt={service.imageAlt}
                      features={service.features}
                      buttonText={service.buttonText}
                      buttonLink={service.buttonLink} 
                      type={""}                />
              );
            }
            if (service.type === 'right') {
              return (
                <ServiceSectionImageRight
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                  imageAlt={service.imageAlt}
                  features={service.features}
                  buttonText={service.buttonText}
                  buttonLink={service.buttonLink}
                  type=""
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceUITwo;
