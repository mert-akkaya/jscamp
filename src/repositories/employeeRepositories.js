import { users } from "../data/users.js";

export default class EmployeeRepositories{
    constructor(){
        this.employees = this.getEmployees();
    }

    getEmployees(){
        return users.filter(user=>user.type ==="employee");
    }

    add(employee){
        this.employees.push(employee);
        return employee;
    }
}