import { users } from "../data/users.js";
import DataError from "../models/dataError.js";

export default class UserService{
    constructor (loggerService){
        this.employees =[]
        this.customers = []
        this.errors = [];
        this.loggerService = loggerService;
    }

    load(){
        for(const user of users){
            if(user.type ==="customer"){
                if(!this.checkCustomerValidityForErrors(user)){
                    this.customers.push(user)
                }
                
            }else if(user.type ==="employee"){
                if(!this.checkEmployeeValidityForErrors(user)){
                    this.employees.push(user)
                }
               
            }else{
                this.errors.push(new DataError("Wrong user type",user))
            }
            
        }
        console.log(this.customers);
            console.log(this.employees)
            console.log(this.errors)
    }

    checkCustomerValidityForErrors(user){
        let requiredFields = "id firstName lastName age city".split(" ");
        let hasErrors = false;
        for(const field of requiredFields){
            if(!user[field]){
                hasErrors = true;
                this.errors.push(new DataError(`Validation problem  ${field} is required`,user))
            }
        }
        if(Number.isNaN(Number.parseInt(user.age))){
            hasErrors=true;
            this.errors.push(new DataError(`Validation problem  ${user.age} is not a number`,user))
        }
        return hasErrors;
    }
    checkRequireds(user,fields){
        let hasErrors = false;
        for(const field of fields){
            if(!user[field]){
                hasErrors = true;
                this.errors.push(new DataError(`Validation problem  ${field} is required`,user))
            }
        }
    }

    checkİsNumber(value){
        if(Number.isNaN(Number.parseInt(value))){
            this.errors.push(new DataError(`Validation problem  ${value} is not a number`,value))
        }
    }

    checkEmployeeValidityForErrors(user){
        let requiredFields = "id firstName lastName age city salary".split(" ");
        let hasErrors = false;
        for(const field of requiredFields){
            if(!user[field]){
                hasErrors = true;
                this.errors.push(new DataError(`Validation problem  ${field} is required`,user))
            }
        }
        return hasErrors;
    }


    add(user){
       switch (user) {
           case "customer":
            if(!this.checkCustomerValidityForErrors(user)){
                this.customers.push(user)
            }
               break;
            case "employee":
                if(!this.checkEmployeeValidityForErrors(user)){
                    this.customers.push(user)
                }
           default:
               this.errors.push(
                   new DataError("This user can not be added",user)
               )
               break;
       }
        this.loggerService.log(" "+user.firstName +" "+ user.lastName)
    }

    listCustomers(){
        return this.customers;
    }

    getCustomerById(id){
        return this.customers.find(u=>u.id ===id)
    }

    getCustomersSorted(){
       return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName<customer2.firstName){
                return -1;
            }else if(customer1.firstName === customer2.firstName){
                return 0;
            }else{
                return 1;
            }
        })
    }
}