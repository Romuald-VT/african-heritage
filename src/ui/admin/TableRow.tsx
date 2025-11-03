import { User } from "@/lib/assets/definitions";
import Image from "next/image";

interface TableRowProps {
    user:User;
    onView:(usr:User)=>void;    
}

const TableRow = ({ user, onView }: TableRowProps) => (
  <tr className="hover:bg-gray-50">
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">{user.firstname}</div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {user.email}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
      <button
        className="text-indigo-600 hover:text-indigo-900"
        onClick={() => onView(user)}
      >
        Voir
      </button>
    </td>
  </tr>
);

export default TableRow;