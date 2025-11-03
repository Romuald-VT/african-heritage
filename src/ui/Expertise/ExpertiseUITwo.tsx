import { IconType } from "react-icons";
import { FaPallet, FaLandmark,FaBook } from "react-icons/fa";

const expertiseData = [
  {
    id: 1,
    icon:  FaPallet,
    title: "Art moderne et contemporain",
    description: "Expertise approfondie des mouvements artistiques du XXe et XXIe siècle.",
    features: ["Peintures et sculptures", "Installations artistiques", "Art numérique"],
    delay: 0,
  },
  {
    id: 2,
    icon: FaLandmark  ,
    title: "Patrimoine architectural",
    description: "Évaluation et conseil en préservation des bâtiments historiques.",
    features: ["Monuments historiques", "Architecture civile", "Sites culturels"],
    delay: 100,
  },
  {
    id: 3,
    icon:  FaBook,
    title: "Objets d'art et antiquités",
    description: "Authentication et évaluation d'objets d'art historiques.",
    features: ["Mobilier ancien", "Arts décoratifs", "Collections privées"],
    delay: 200,
  },
];

interface ExpertiseCardProps {
    key:number,
    icon:IconType,
    title:string,
    description:string,
    features:Array<string>,
    delay:number

}

const ExpertiseCard:React.FC<ExpertiseCardProps> = ({icon:Icon,title,description,features,delay})=>{

    return(
       <div className="bg-white rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay={delay}>
      <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-indigo-600"/>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 text-gray-600">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>
    </div>
    )
}

const ExpertiseUiTwo = ()=>{
    return(
    <section id="expertise-details" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Nos Domaines d&apos;Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((expertise) => (
            <ExpertiseCard 
              key={expertise.id} 
              icon={expertise.icon}
              title={expertise.title}
              description={expertise.description}
              features={expertise.features}
              delay={expertise.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExpertiseUiTwo