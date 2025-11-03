
interface PaginationProps {
    currentPage:number;
    totalPages:number;
    totalResults:number;
    onPageChange:(page:number)=>void
}

const Pagination = ({ currentPage, totalPages, totalResults, onPageChange }:PaginationProps) => (
  <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-gray-700">
          Affichage de <span className="font-medium">{(currentPage - 1) * 10 + 1}</span> à{' '}
          <span className="font-medium">{Math.min(currentPage * 10, totalResults)}</span> sur{' '}
          <span className="font-medium">{totalResults}</span> résultats
        </p>
      </div>
      <div>
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
          <button
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                i + 1 === currentPage ? 'text-gray-700' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </nav>
      </div>
    </div>
  </div>
);

export default Pagination