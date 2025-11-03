'use client';
import { Heritage, User } from '@/lib/assets/definitions';
import React from 'react';
import DeleteButton from './DeleteButtonPortal';
import VerifyButtonPortal from './VerifyButtonPortal';



interface DataTableProps {
  data: Heritage[];
  reloadMethod: () => void;
}

const DataTable: React.FC<DataTableProps> = ({ data, reloadMethod }) => {

   const handleReloadMethod = () => {
       if(reloadMethod) reloadMethod();
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
          <tr className="bg-indigo-50">
            <th className="text-left p-3 border-b border-indigo-200 font-semibold text-indigo-600">Nom</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold  text-indigo-600">Localisation</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold  text-indigo-600">Description</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold  text-indigo-600">Caracteristiques</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold  text-indigo-600">Valeur Actuelle</th>
            <th className="text-left p-3 border-b border-indigo-200 font-semibold  text-indigo-600">Action</th>
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
              <td className="p-3 border-t border-indigo-100">
                <div className='flex justify-center items-center '>
                   <VerifyButtonPortal data={u} reloadMethod={handleReloadMethod}/>
                </div>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
