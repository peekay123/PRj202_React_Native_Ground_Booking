export function passwordValidator(password){
    // const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const re1 = /^(?=.*\d)/;
    const re2 = /(?=.*[a-z])/;
    const re3 = /(?=.*[A-Z])/;
    if (!password) return "Password can't be empty.";
    if(password.length<8) return "Password can't be less 8 characters.";
    if(!re1.test(password)) return "Should have at least one special";
    if(!re2.test(password)) return "Should have at least One lowercase";
    if(!re3.test(password)) return "Should have at least one upercase";
    return "";
}