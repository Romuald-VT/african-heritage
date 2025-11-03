import { Heritage } from "@/lib/assets/definitions";


const DataTable = ({ data }:{data:Array<Heritage>}) => {
  if (data.length === 0) {
    return (
      <div className="p-6 text-center text-indigo-500">
        Aucun utilisateur à afficher.
      </div>
    );
  }

  return (
    <div className="border border-indigo-200 rounded-xl overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-indigo-100">
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">Nom Patrimoine</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700" >Localisation</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">description</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">Caracteristiques</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">Valeur Actuelle</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((u,i) => (
            <tr key={i} className="hover:bg-indigo-50">
              <td className="p-3 border-t border-indigo-100">{u.heritageName}</td>
              <td className="p-3 border-t border-indigo-100">{u.location}</td>
              <td className="p-3 border-t border-indigo-100">{u.description}</td>
              <td className="p-3 border-t border-indigo-100">{u.features}</td>
              <td className="p-3 border-t border-indigo-100">{u.currentValue}</td>
              <td className="p-3 border-t border-indigo-100">{}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;