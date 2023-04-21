export function nameValidator(name){
    if(!name) return "Name cannot be empty";
    if(name.length<3) return "Name should be more than 3 letters.";
    return "";
}