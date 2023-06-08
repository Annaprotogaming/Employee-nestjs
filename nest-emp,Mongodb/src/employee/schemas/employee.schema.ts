import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  IT = 'It',
  SALES = 'Sales',
  ACCOUNTS = 'Accounts',
  FINANCE = 'Finance',
}

@Schema({
  timestamps: true,
})
export class Employee {
  @Prop()
  id: number;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  email: string;

  @Prop()
  mobile: number;

  @Prop()
  category: Category;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);