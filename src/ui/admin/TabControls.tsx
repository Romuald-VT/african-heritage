
interface TableControlsProps {
    onSearch: (query: string) => void;
    onPerPageChange: (newPerPage: number) => void;
}

const TableControls = ({ onSearch, onPerPageChange }: TableControlsProps) => (
  <div className="flex flex-col md:flex-row justify-between items-center mb-4">
    <h2 className="text-xl font-semibold mb-4 md:mb-0">Liste des Utilisateurs</h2>
    <div className="flex space-x-4">
      <input
        type="text"
        placeholder="Rechercher..."
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        onChange={(e) => onSearch(e.target.value)}
      />
      <select
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        onChange={(e) => onPerPageChange(Number(e.target.value))}
      >
        <option value={10}>10 par page</option>
        <option value={25}>25 par page</option>
        <option value={50}>50 par page</option>
      </select>
    </div>
  </div>
);

export default TableControls