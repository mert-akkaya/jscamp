import ErrorDataResult from "../../utilities/results/errorDataResult.js";
import ErrorResult from "../../utilities/results/errorResult.js";
import SuccessDataResult from "../../utilities/results/successDataResult.js";
import SuccessResult from "../../utilities/results/successResult.js";
import ValidationRules from "../../utilities/validation/validationRules.js";
import UserValidation from "./userValidation.js";

export default class CustomerValidation extends UserValidation{
    constructor(){
        super();
        this.errors = [];
        this.fields = "id firstName lastName asdasd age city".split(" ");
    }

    
     validate(user){

        let result = ValidationRules.run(this.checkRequireds(user,this.fields),this.checkİsNumber(user.age))
        if(result === null){
            return new SuccessResult("Success")
        }
        return new ErrorResult("Validate Wrong");
    }

     checkRequireds(user,fields){
        for(const field of fields){
            if(!user[field]){
               return new ErrorDataResult(user,`Validation problem  ${field} is required`)
                 
            }
        }
        return new SuccessDataResult(user,"Success");
    }

      checkİsNumber(value){
        if(Number.isNaN(Number.parseInt(value))){
            new ErrorResult(value,`Validation problem  ${value} is not a number`)
        }
        return new SuccessResult();
    }

    
}