import Link from "next/link";
import Image from "next/image";

const HomeUIOne = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Colonne gauche : Texte et appel à l'action */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Valorisons notre patrimoine culturel</h1>
          <p className="text-xl mb-8">Une expertise professionnelle pour préserver et évaluer notre héritage culturel</p>

          {/* Utilisation du bouton réutilisable */}
          <Link 
          href="/services"
          className="mt-8 inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Découvrir nos services
        </Link>
        </div>
        
        {/* Colonne droite : Image */}
        <div className="md:w-1/2">
          <Image src="/home.webp" alt="homeImage" className="rounded-lg shadow-xl" width="600" height="400" />
        </div>
      </div>
    </section>
  );
};

export default HomeUIOne;