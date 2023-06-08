// import { Controller } from '@nestjs/common';

// @Controller('employee')
// export class EmployeeController {}
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { EmployeeService } from './employee.service';
  import { CreateEmployeeDto } from './dto/create-employee.dto';
  import { UpdateEmployeeDto } from './dto/update-employee.dto';
  import { Employee } from './schemas/employee.schema';
  
  @Controller('employees')
  export class EmployeeController {
    constructor(private employeeService: EmployeeService) {}
  
    @Get()
    async getAllEmployees(): Promise<Employee[]> {
      return this.employeeService.findAll();
    }
  
    @Post()
    async createEmployee(
      @Body()
      employee: CreateEmployeeDto,
    ): Promise<Employee> {
      return this.employeeService.create(employee);
    }
  
    @Get(':id')
    async getEmployee(
      @Param('id')
      id: string,
    ): Promise<Employee> {
      return this.employeeService.findById(id);
    }
  
    @Put(':id')
    async updateEmployee(
      @Param('id')
      id: string,
      @Body()
      book: UpdateEmployeeDto,
    ): Promise<Employee> {
      return this.employeeService.updateById(id, book);
    }
  
    @Delete(':id')
    async deleteEmployee(
      @Param('id')
      id: string,
    ): Promise<Employee> {
      return this.employeeService.deleteById(id);
    }
  }
