import { users } from "../data/users.js";

export default class CustomerRepositories{
    constructor(){
        this.customers = this.getCustomers();
    }

    getCustomers(){
        return users.filter(user=>user.type ==="customer");
    }

     add(customer){
        this.customers.push(customer);
        return customer;
    }
}