import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from './employee.model';
import { Localization } from './localization.model';

@ObjectType()
export class Department {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => Localization)
  localization: Localization;

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

  // ✅ هنا نحدد النوع كـ String و nullable true
  @Field(() => String, { nullable: true })
  parentDepartment?: string | null;

  @Field(() => String, { nullable: true })
  createdAt?: string;

  @Field(() => [Employee])
  employees: Employee[];
}
