import { ElasticLogger } from "../core/crossCuttingConcerns/logging/elasticLogger.js"
import Customer from "../models/customer.js";
import CustomerRepositories from "../repositories/customerRepositories.js"
import CustomerService from "../services/customerService.js"

console.log("Customer component yüklendi")

let customerService = new CustomerService(new CustomerRepositories,new ElasticLogger() );

customerService.load();

let customerToAdd = new Customer(1,"demo","demo","demo",21);
customerToAdd.type = "customer";
customerService.add(customerToAdd);

console.log("Customers " )
console.log(customerService.customers)
console.log("İnvalid customers  ")
console.log(customerService.invalidCustomers)