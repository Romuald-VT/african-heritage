import { FaCheckCircle,FaBolt } from "react-icons/fa";
import WhyChooseUs from "../Share/WhyChooseUs";

const featuresData = [
  {
    icon: FaCheckCircle,
    title: "Expertise reconnue",
    description: "Notre équipe d'experts certifiés possède une solide expérience dans l'évaluation du patrimoine culturel."
  },
  {
    icon: FaBolt,
    title: "Approche multidisciplinaire",
    description: "Nous combinons expertise artistique, historique et économique pour une évaluation complète."
  }
];


const HomeUiFour = ()=>{
    return(
        <>
          <WhyChooseUs heading="Pourquoi choisir UNESCOPATRIMOINE AFRIQUE ?" features={featuresData}/>
        </>
    )
}
export default HomeUiFour 

