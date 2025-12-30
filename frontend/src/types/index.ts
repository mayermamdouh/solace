export interface Localization {
  name: string;
  description: string;
}

export interface Employee {
  id: number;
  name: string;
  role: string;
  contact: string;
}

export interface Department {
  name: string;
  description: string;
  localization: Localization;
  code: number;
  manager: string;
  location: string;
  employeesNumber: number;
  status: boolean;
  parentDepartment?: string | null;
  createdAt?: string;
  employees: Employee[];
}

// user profile types
export interface InfoItemProps {
  label: string;
  value: string | number;
}

export interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
}

export interface GetDepartmentQuery {
  getDepartment: Department;
}
