import { axiosClient } from "../lib/axios";
import type { Department } from "../types";

export const getDepartment = async (): Promise<Department> => {
  const res = await axiosClient.post("/graphql", {
    query: `
      query GetDepartment {
        getDepartment {
          name
          description
          code
          manager
          location
          employeesNumber
          status
          parentDepartment
          createdAt
          localization {
            name
            description
          }
          employees {
            id
            name
            role
            contact
          }
        }
      }
    `,
  });

  return res.data.data.getDepartment;
};

export const updateDepartment = async (
  input: Partial<Department>
): Promise<Department> => {
  const res = await axiosClient.post("/graphql", {
    query: `
      mutation UpdateDepartment($input: DepartmentInput!) {
        updateDepartment(input: $input) {
          name
          description
          code
          manager
          location
          employeesNumber
          status
          parentDepartment
          createdAt
          localization {
            name
            description
          }
          employees {
            id
            name
            role
            contact
          }
        }
      }
    `,
    variables: {
      input,
    },
  });

  return res.data.data.updateDepartment;
};

export const deleteEmployee = async (employeeId: number): Promise<void> => {
  await axiosClient.post("/graphql", {
    query: `
      mutation DeleteEmployee($employeeId: Int!) {
        deleteEmployee(employeeId: $employeeId) {
          code
        }
      }
    `,
    variables: {
      employeeId,
    },
  });
};
