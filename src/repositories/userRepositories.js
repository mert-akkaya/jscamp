import { users } from "../data/users.js";

export default class UserRepositories{
    constructor(){
        this.users = users;
    }


    getAll(){
        return this.users;
    }

    getById(id){
        return this.users.find(u=>u.id === id);
    }

    add(user){
        this.users.push(user);
        return user;
    }

    getUsersSorted(){
            return this.users.sort((user1,user2)=>{
                 if(user1.firstName<user2.firstName){
                     return -1;
                 }else if(user1.firstName === user2.firstName){
                     return 0;
                 }else{
                     return 1;
                 }
             })
         }
}