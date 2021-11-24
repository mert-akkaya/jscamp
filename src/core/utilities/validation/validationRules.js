export default class ValidationRules{
    static run(...logics){
        for(const logic of logics){
            if(logic.success === false){
                return logic;
            }
        }
        return null;
    }
}