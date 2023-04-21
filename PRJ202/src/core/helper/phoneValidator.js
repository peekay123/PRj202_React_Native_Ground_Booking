export function phoneValidator(phone){
    if(!phone) return "Phone number cannot be empty.";
    if(phone.length!=8) return "Phone number should be 8 digits.";
    return "";
}