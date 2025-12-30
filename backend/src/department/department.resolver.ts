import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Department } from './models/department.model';
import { DepartmentInput } from './models/department.input';
import departmentJson from '../data/department.json';

let departmentData: Department = departmentJson.department;

@Resolver(() => Department)
export class DepartmentResolver {
  @Query(() => Department)
  getDepartment() {
    return departmentData;
  }

  @Query(() => Department, { nullable: true })
  getDepartmentInfo(@Args('code', { type: () => Int }) code: number) {
    return departmentData.code === code ? departmentData : null;
  }

  @Mutation(() => Department)
  updateDepartment(@Args('input') input: DepartmentInput) {
    departmentData = { ...departmentData, ...input };
    return departmentData;
  }

  @Mutation(() => Department)
  deleteEmployee(@Args('employeeId', { type: () => Int }) employeeId: number) {
    departmentData.employees = departmentData.employees.filter(
      (emp) => emp.id !== employeeId,
    );
    departmentData.employeesNumber = departmentData.employees.length;
    return departmentData;
  }
}
