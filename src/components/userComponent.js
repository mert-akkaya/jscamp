
import { users } from "../data/users.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import CustomerService from "../services/customerService.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let customerService = new CustomerService();
customerService.load();
// let userService = new UserService(new MongoLogger())

// let user1 = new User(1,"Engin","Demiroğ","Ankara")
// let user2 = new User(2,"Baran","Gökçekli","Muğla")
// userService.add(user1)
// userService.add(user2)

//console.log(userService.list())
//console.log(userService.getById(2))




// let customer = {id:1, firstName:"Engin"}

//prototyping
// customer.lastName = "Demiroğ"

// console.log(customer.lastName)


// console.log("--------------------------");
// userService.load();
// let customerToAdd = new Customer(1,"Seda","Yılmaz","Ankara",25)
// customerToAdd.type = "customer";
// userService.add(customerToAdd)
// console.log(userService.getCustomersSorted())
