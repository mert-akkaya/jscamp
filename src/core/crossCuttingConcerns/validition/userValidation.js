import ErrorDataResult from "../../utilities/results/errorDataResult.js";
import ErrorResult from "../../utilities/results/errorResult.js";
import SuccessDataResult from "../../utilities/results/successDataResult.js";
import SuccessResult from "../../utilities/results/successResult.js";

export default class UserValidation{
    //ortak validateler buraya özel validateler kendi validation classlarına 
     validate(user){
        
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
      return new ErrorResult(value,"demo");
  }
  return new SuccessResult();
}
}