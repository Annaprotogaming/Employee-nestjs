// import { Module } from '@nestjs/common';
// import { EmployeeController } from './employee.controller';
// import { EmployeeService } from './employee.service';

// @Mo
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { EmployeeSchema } from './schemas/employee.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}