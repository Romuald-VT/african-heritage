import Image from "next/image";

interface StepCardProps {
  stepNumber:number,
  title:string,
  description:string,
  delay:number

}

const methodologyData = [
  {
    stepNumber: 1,
    title: "Analyse préliminaire",
    description: "Étude approfondie de l'historique et de la documentation disponible.",
    delay: 0,
  },
  {
    stepNumber: 2,
    title: "Examen technique",
    description: "Utilisation de technologies avancées pour l'analyse des œuvres.",
    delay: 100,
  },
  {
    stepNumber: 3,
    title: "Évaluation comparative",
    description: "Analyse du marché et comparaison avec des œuvres similaires.",
    delay: 200,
  },
  {
    stepNumber: 4,
    title: "Rapport détaillé",
    description: "Production d'un rapport d'expertise complet et argumenté.",
    delay: 300,
  },
];

const StepCard = ({ stepNumber, title, description, delay }:StepCardProps) => {
  return (
    <div className="flex gap-4" data-aos="fade-right" data-aos-delay={delay}>
      <div className="flex-shrink-0">
        <div className="h-10 w-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
          {stepNumber}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ExpertiseUiThree = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Notre Méthodologie</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {methodologyData.map((step) => (
              <StepCard 
                key={step.stepNumber}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                delay={step.delay}
              />
            ))}
          </div>

          <div className="relative" data-aos="fade-left">
            <Image
              src="/expertise.jpg"
              alt="Expert analysant une œuvre d'art" 
              className="rounded-lg shadow-xl w-full h-full object-cover" 
              width="600" 
              height="800" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseUiThree