
import CustomerValidation from "../core/crossCuttingConcerns/validition/customerValidation.js";
import { users } from "../data/users.js";

export default class CustomerService{
    constructor(){
        this.customers = users.filter(user=>user.type ==="customer")
        this.invalidCustomers = [];
        console.log(this.customers)
    }

    load(){
        let customerValidation = new CustomerValidation();
        for(const customer of this.customers){
            customerValidation.validate(customer)
        }
    }

}