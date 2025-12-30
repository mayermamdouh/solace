import type { Department } from "../../types";
import Button from "../ui/Button";
import { InfoItem } from "../UserProfile/InfoItem";

interface DepartmentViewProps {
  department: Department;
  onEdit: () => void;
}

export default function DepartmentView({
  department,
  onEdit,
}: DepartmentViewProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-(--text-primary)">
          Department Information
        </h2>
        <Button text="Edit" onClick={onEdit} />
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <InfoItem label="Name" value={department.name} />
        <InfoItem label="Code" value={department.code} />
        <InfoItem label="Manager" value={department.manager} />
        <InfoItem label="Location" value={department.location} />
        <InfoItem label="Employees Number" value={department.employeesNumber} />
        <InfoItem
          label="Status"
          value={department.status ? "Active" : "Inactive"}
        />
        <InfoItem
          label="Created At"
          value={
            department.createdAt
              ? new Date(department.createdAt).toLocaleDateString()
              : "-"
          }
        />
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600">{department.description}</p>
      </div>
    </div>
  );
}
