import Link from 'next/link'

const HomeUiFive = ()=>{
    return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-black">Prêt à valoriser votre patrimoine culturel ?</h2>
        <p className="text-gray-600 mb-8">Transformez vos trésors culturels en récits vivants et partagez votre patrimoine unique grâce à notre plateforme innovante qui vous permet de numériser, valoriser et transmettre chaque fragment de votre histoire aux générations futures, simplement et avec passion.</p>
        {/* Utilisation de Link pour la navigation */}
        <Link
          href="/contact"
          className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300 inline-block"
        >
          Contactez nos experts
        </Link>
      </div>
    </section>
  );
}

export default HomeUiFive 