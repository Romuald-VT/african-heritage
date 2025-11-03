import Link from 'next/link'

interface ServiceCardProps {
    title: string;
    description: string;
    linkText: string;
    buttonLink: string;
}

interface CulturalExpertiseProps {
    heading: string;
    services: ServiceCardProps[];
}

const ServiceCard = ({ title, description, linkText, buttonLink }: ServiceCardProps) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-black">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={buttonLink} className="text-indigo-600 font-medium hover:underline">{linkText}</Link>
    </div>
  );
};


const CulturalExpertise = ({ heading, services }:CulturalExpertiseProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Boucle pour afficher chaque carte de service */}
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title} 
              description={service.description} 
              linkText={service.linkText}
              buttonLink={service.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalExpertise;