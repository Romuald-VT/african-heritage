import { Heritage } from "@/lib/assets/definitions";
import { Suspense } from "react";
import EditHeritageButton from "./EditHeritagePortal";
import DeleteModalButton from "./DeleteHeritagePortal";

const UserPanelTable = ({ data,reload }:{data:Array<Heritage>,reload:()=>void}) => {
  if (data.length === 0) {
    return (
      <div className="p-6 text-center text-indigo-500">
        Aucun utilisateur à afficher.
      </div>
    );
  }

  return (
    <Suspense fallback={
        <main className=" min-h-screen grid place-items-center gap-4" 
                    role="status" aria-live="polite" aria-label="Content is loading">
                        <div className="w-14 h-14 border-[#e6e6e6] border-t-indigo-600 animate-[spin_0.8s_linear_infinite] rounded-[50%] border-4 border-solid motion-reduce:animate-none;" aria-hidden="true"></div>
                        <p className="label">Loading…</p>
                    </main>
    }>
        
    <div className="border border-indigo-200 rounded-xl overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-indigo-100">
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">Nom Patrimoine</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700" >Localisation</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">description</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">Caracteristiques</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">Valeur Actuelle</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">Status</th>
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
               <td className="p-3 border-t border-indigo-100">{u.isVerified?<span className="text-green-500 font-bold">verifie</span>
               :<span className="text-red-400 font-bold">non verifie</span>}</td>

              <td className="p-3 border-t border-indigo-100">
                <div className="flex flex-row gap-3">
                   <EditHeritageButton editableContent={u} nameContent={u.heritageName} reload={reload}/>
                   <DeleteModalButton heritageName={u.heritageName} reload={reload}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Suspense>
  );
};

export default UserPanelTable;