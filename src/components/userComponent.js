
import { ElasticLogger } from "../core/crossCuttingConcerns/logging/elasticLogger.js"
import { users } from "../data/users.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import CustomerRepositories from "../repositories/customerRepositories.js"
import UserRepositories from "../repositories/userRepositories.js"
import CustomerService from "../services/customerService.js"
import EmployeeService from "../services/employeeService.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let userService = new UserService(new UserRepositories(),new ElasticLogger());
userService.getAll();

