import Link from "next/link";


const ExpertiseUiFive = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Besoin d&apos;une expertise ?</h2>
        <p className="text-gray-600 mb-8">Contactez nos experts pour une évaluation personnalisée de votre patrimoine culturel.</p>
        {/* Utilisation de Link pour la navigation */}
        <Link
          href="/contact"
          className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300 inline-block"
        >
          Prendre rendez-vous
        </Link>
      </div>
    </section>
  );
};

export default ExpertiseUiFive