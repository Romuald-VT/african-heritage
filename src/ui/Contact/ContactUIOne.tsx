
interface HeroSectionProps{
    heading:string;
    description:string;
}

const ContactUiOne: React.FC<HeroSectionProps> = ({ heading, description }) => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{heading}</h1>
        <p className="text-xl text-center max-w-3xl mx-auto">{description}</p>
      </div>
    </section>
  );
};

export default ContactUiOne;