
interface StepCardProps {
    stepNumber:number,
    title:string,
    description:string,
}

interface ExpertiseMethodologyProps{
    heading:string,
    steps:Array<StepCardProps>
}

const StepCard = ({ stepNumber, title, description }:StepCardProps) => {
  return (
    <div className="text-center">
      <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {stepNumber}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};


const ExpertiseMethodology = ({ heading, steps }:ExpertiseMethodologyProps) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Boucle pour afficher chaque étape */}
          {steps.map((step, index) => (
            <StepCard
              key={index}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseMethodology