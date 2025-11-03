
interface WelcomeSectionProps {
    title:string,
    description:string
}

const WelcomeSection = ({ title, description }:WelcomeSectionProps) => (
  <div className="bg-white rounded-lg shadow-lg p-6 mb-8 mt-8" data-aos="fade-up">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default WelcomeSection;