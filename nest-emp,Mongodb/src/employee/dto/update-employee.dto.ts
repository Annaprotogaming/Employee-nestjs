import { Category } from '../schemas/employee.schema';

export class UpdateEmployeeDto {
  readonly id: number;
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly mobile: number;
  
  readonly category: Category;
}