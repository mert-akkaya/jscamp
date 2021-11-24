import EmployeeValidation from "../core/crossCuttingConcerns/validition/employeeValidation.js";
import { users } from "../data/users.js";

export default class EmployeeService{
    constructor(loggerService){
        this.employees = users.filter(user=>user.type ==="employee")
        this.invalidEmployees = [];
        this.loggerService = loggerService;
    }

    load(){
        let employeeValidation = new EmployeeValidation();
        for(const employee of this.employees){
            const result = employeeValidation.validate(employee)
            if(!result.success){
                 this.invalidEmployees.push(result.data)
            }
        }
        console.log(this.invalidEmployees)
        
    }

}