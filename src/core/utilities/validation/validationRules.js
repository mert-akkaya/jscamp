export default class ValidationRules{
    static run(...logics){
        for(const logic of logics){
            if(!logic["success"]){
                return logic;
            }
        }
        return null;
    }
}