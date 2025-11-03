"use client"

import { User } from "@/lib/assets/definitions";
import DeleteButton from "./DeleteButtonPortal";

const UserTable = ({ data ,reloadMethod}:{data:Array<User>,reloadMethod:()=>void}) => {

  const handleReload = ()=>{
      if(reloadMethod) reloadMethod()
  }

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
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">Nom</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700" >Prenom</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">Email</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">Patrimoines</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">status</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((u,i) => (
            <tr key={i} className="hover:bg-indigo-50">
              <td className="p-3 border-t border-indigo-100">{u.lastname}</td>
              <td className="p-3 border-t border-indigo-100">{u.firstname}</td>
              <td className="p-3 border-t border-indigo-100">{u.email}</td>
              <td className="p-3 border-t border-indigo-100">{u.heritages?.length}</td>
              <td className="p-3 border-t border-indigo-100">{u.isLoggedIn?"Connecte":"Deconnecte"}</td>
              <td className="p-3 border-t border-indigo-100"><DeleteButton email={u.email} reloadMethod={handleReload}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;