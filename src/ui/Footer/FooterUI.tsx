

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1 : UNESCOPATRIMOINE AFRIQUE Description */}
          <div>
            <h3 className="text-lg lg:text-xl font-semibold mb-4">UNESCOPATRIMOINE AFRIQUE</h3>
            <p className="text-gray-400">
              Votre partenaire de confiance pour l&apos;évaluation et la préservation du patrimoine culturel.
            </p>
          </div>

          {/* Section 2 : Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Évaluation d&apos;œuvres d&apos;art</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Conservation du patrimoine</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Expertise judiciaire</a></li>
            </ul>
          </div>

          {/* Section 3 : Ressources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mentions légales</a></li>
            </ul>
          </div>

          {/* Section 4 : Contact */}
          <div className="">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">15 Rue de la Culture<br />75001 Paris, France</p>
            <p className="text-gray-400 mt-2">Tél : +33 1 23 45 67 89</p>
            <p className="text-gray-400 text-base break-words leading-tight md:leading-normal">Email : contact@UNESCOPATRIMOINE AFRIQUE.com</p>
          </div>
        </div>

        {/* Section Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} UNESCOPATRIMOINE AFRIQUE. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
