
import CustomerValidation from "../core/crossCuttingConcerns/validition/customerValidation.js";
import ErrorDataResult from "../core/utilities/results/errorDataResult.js";
import { users } from "../data/users.js";

export default class CustomerService{
    constructor(repository,loggerService){
        this.customers = users.filter(user=>user.type ==="customer")
        this.invalidCustomers = [];
        this.repository = repository;
        this.loggerService = loggerService;
        
    }

    load(){
        let customerValidation = new CustomerValidation();
        for(const customer of this.customers){
           const result = customerValidation.validate(customer)
            if(!result.success){
                this.invalidCustomers.push(result.data)
                
            }
        }
        console.log(this.invalidCustomers)
    }

    add(customer){
        let customerValidation = new CustomerValidation();
        let result = customerValidation.validate(customer);
        if(!result.success){
            return new ErrorDataResult(customer,"Error");
        }
        this.repository.add(customer);
    }

}