import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import DepartmentView from "../components/Department/DepartmentView";
import DepartmentEdit from "../components/Department/DepartmentEdit";
import AssignedEmployees from "../components/Department/AssignedEmployees";

import type { Department } from "../types";
import {
  getDepartment,
  updateDepartment,
  deleteEmployee,
} from "../apis/department.api";

export default function DepartmentPage() {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);

  const {
    data: department,
    isLoading,
    isError,
  } = useQuery<Department>({
    queryKey: ["department"],
    queryFn: getDepartment,
  });

  const updateMutation = useMutation({
    mutationFn: updateDepartment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["department"] });
      setIsEditing(false);
    },
  });

  const deleteEmployeeMutation = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["department"] });
    },
  });

  const handleSave = (data: Department) => {
    updateMutation.mutate(data);
  };

  const handleDeleteEmployee = (employeeId: number) => {
    deleteEmployeeMutation.mutate(employeeId);
  };
  const isAnyLoading =
    isLoading || updateMutation.isPending || deleteEmployeeMutation.isPending;
  if (isAnyLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-9 h-9 border-4 border-blue-300 border-t-(--blue-light) rounded-full animate-spin" />
      </div>
    );

  if (isError || !department) return <p>Error loading department</p>;
  return (
    <div className="flex flex-col gap-6 m-5">
      {isEditing ? (
        <DepartmentEdit
          department={department}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <DepartmentView
          department={department}
          onEdit={() => setIsEditing(true)}
        />
      )}

      <AssignedEmployees
        employees={department.employees}
        onDelete={handleDeleteEmployee}
      />
    </div>
  );
}
