import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './schemas/employee.schema';
export declare class EmployeeController {
    private employeeService;
    constructor(employeeService: EmployeeService);
    getAllEmployees(): Promise<Employee[]>;
    createEmployee(employee: CreateEmployeeDto): Promise<Employee>;
    getEmployee(id: string): Promise<Employee>;
    updateEmployee(id: string, book: UpdateEmployeeDto): Promise<Employee>;
    deleteEmployee(id: string): Promise<Employee>;
}
