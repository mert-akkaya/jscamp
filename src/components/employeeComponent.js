import { ElasticLogger } from "../core/crossCuttingConcerns/logging/elasticLogger.js";
import Employee from "../models/employee.js";
import EmployeeRepositories from "../repositories/employeeRepositories.js";
import EmployeeService from "../services/employeeService.js";

console.log("Employee component yüklendi")

let employeeService = new EmployeeService(new EmployeeRepositories,new ElasticLogger() );

employeeService.load();

let employeeToAdd = new Employee(1,"demo","demo","demo",21,8500);
employeeToAdd.type = "employee";
employeeService.add(employeeToAdd);
console.log("Employees : ")
console.log(employeeService.employees);