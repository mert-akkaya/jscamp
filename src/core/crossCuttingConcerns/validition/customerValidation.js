import ErrorDataResult from "../../utilities/results/errorDataResult.js";
import ErrorResult from "../../utilities/results/errorResult.js";
import SuccessDataResult from "../../utilities/results/successDataResult.js";
import SuccessResult from "../../utilities/results/successResult.js";
import ValidationRules from "../../utilities/validation/validationRules.js";
import UserValidation from "./userValidation.js";

export default class CustomerValidation extends UserValidation{
    constructor(){
        super();
        this.fields = "id firstName lastName age city".split(" ");
    }

    
     validate(user){
         
        let result = ValidationRules.run(this.checkRequireds(user,this.fields),this.checkİsNumber(user.age))
        
        if(result === null){
            return  new SuccessDataResult(user,"Validate success")
        }
        return new ErrorDataResult(user,"Validate Wrong");
    }

    
}