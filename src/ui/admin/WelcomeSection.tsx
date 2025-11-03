import Button from "../Miscellanous/ButtonUI";

interface WelcomeSectionProps {
    title:string;
    description:string;
    logoutFunction:()=>void
}

const WelcomeSection = ({ title, description,logoutFunction }: WelcomeSectionProps) =>{

  return(
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8" data-aos="fade-up">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-600">{description}</p>
      <div className="hidden md:flex space-x-2">
          <Button text="Deconnexion" to="/user-login" onClick={logoutFunction}/>
        </div> 
    </div>
  );
} 

export default WelcomeSection;