import Link from "next/link";


const ExpertHeader = () => (
  <header className="bg-white shadow-sm fixed top-0 w-full z-50">
    <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-gray-800">
        <span className="text-indigo-600">UNESCOPATRIMOINE</span>
        AFRIQUE
      </Link>
      <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Acceuil
          </Link>
     
      </div>
    </nav>
  </header>
);

export default ExpertHeader