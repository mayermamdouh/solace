import type { Employee } from "../../types";

interface Props {
  employees: Employee[];
  onDelete: (employeeId: number) => void;
}

export default function AssignedEmployees({ employees, onDelete }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4">Assigned Employees</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-400 border-b">
            <th className="py-2">Name</th>
            <th>Role</th>
            <th>Contact</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="border-b last:border-none">
              <td className="py-3">{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.contact}</td>
              <td>
                <button
                  onClick={() => onDelete(emp.id)} // استدعاء الدالة من parent
                  className="text-red-500 text-sm cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
