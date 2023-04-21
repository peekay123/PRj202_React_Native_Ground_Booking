import firebase from "firebase/app";
import 'firebase/auth';
import "firebase/firestore";
export async function signUpUser({email, password,phoneNumber,name}){
    try{
        const {user} = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password,phoneNumber,name)
            await firebase.auth().currentUser.updateProfile({
            
        });
        return {user}
        
    }
    catch (error){
        return{
            error: error.message,
        }
    }
}
export async function loginUser({email, password}){
    try{
        const user = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
        return{ user };
    }
    catch (error){
        return{
            error: error.message,
        }
    }
}
export async function logoutUser(){
    firebase.auth().signOut();
}
export async function sendPasswordResetEmail(email){
    try{
        await firebase
            .auth()
            .sendPasswordResetEmail(email)
        return {};    
    }
    catch(error) {
        return{
            error: error.message,
        }
    }
}