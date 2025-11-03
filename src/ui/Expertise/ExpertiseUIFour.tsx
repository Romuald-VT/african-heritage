
interface CertificationCardProps{
    iconPath:string,
    title:string,
    description:string,
    delay:number,
}

const certificationsData = [
  {
    title: "Experts Certifiés CECOA",
    description: "Certification Européenne des Experts en Œuvres d'Art",
    iconPath: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    delay: 0,
  },
  {
    title: "Agrément UNESCO",
    description: "Expert agréé pour le patrimoine culturel mondial",
    iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    delay: 100,
  },
  {
    title: "Expert Judiciaire",
    description: "Inscrit auprès des Cours d'Appel",
    iconPath: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    delay: 200,
  },
];

const CertificationCard = ({ iconPath, title, description, delay }:CertificationCardProps) => {
  return (
    <div className="text-center p-6" data-aos="zoom-in" data-aos-delay={delay}>
      <div className="h-24 w-24 mx-auto mb-4">
        <svg className="w-full h-full text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};


const ExpertiseUIFour = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Nos Certifications et Accréditations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {certificationsData.map((certification, index) => (
            <CertificationCard 
              key={index}
              title={certification.title}
              description={certification.description}
              iconPath={certification.iconPath}
              delay={certification.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseUIFour