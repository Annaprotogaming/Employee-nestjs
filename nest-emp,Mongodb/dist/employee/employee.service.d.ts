import * as mongoose from 'mongoose';
import { Employee } from './schemas/employee.schema';
export declare class EmployeeService {
    private employeeModel;
    constructor(employeeModel: mongoose.Model<Employee>);
    findAll(): Promise<Employee[]>;
    create(employee: Employee): Promise<Employee>;
    findById(id: string): Promise<Employee>;
    updateById(id: string, employee: Employee): Promise<Employee>;
    deleteById(id: string): Promise<Employee>;
}
