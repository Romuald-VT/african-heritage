import { IconType } from "react-icons";

interface FeatureCardProps {
    icon:IconType,
    title:string,
    description:string
}

interface WhyChooseUsProps {
    heading:string,
    features:Array<FeatureCardProps>
}

const FeatureCard = ({ icon:Icon, title, description }:FeatureCardProps) => {
  return (
    <div className="flex items-start">
      <div className="bg-indigo-600 p-2 rounded-full mr-4">
        <Icon className="text-white h-6 w-6"/>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = ({ heading, features }:WhyChooseUsProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Boucle pour afficher chaque FeatureCard */}
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs