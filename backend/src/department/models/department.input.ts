import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class LocalizationInput {
  @Field()
  name: string;

  @Field()
  description: string;
}

@InputType()
export class EmployeeInput {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  role: string;

  @Field()
  contact: string;
}

@InputType()
export class DepartmentInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => LocalizationInput)
  localization: LocalizationInput;

  @Field(() => Int)
  code: number;

  @Field()
  manager: string;

  @Field()
  location: string;

  @Field(() => Int)
  employeesNumber: number;

  @Field()
  status: boolean;

  @Field(() => String, { nullable: true })
  parentDepartment?: string | null;

  @Field(() => String, { nullable: true })
  createdAt?: string;

  @Field(() => [EmployeeInput])
  employees: EmployeeInput[];
}
