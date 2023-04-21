import React, {useState} from 'react';
import { View, StyleSheet,Text, TouchableOpacity, ImageBackground} from 'react-native';
import Button from '../Components/Button';
import Logo from '../Components/Logo';
import TextInput from '../Components/TextInput';
import TextInputP from '../Components/TextInputP';
import TextInputN from '../Components/TextInputN';
import TextInputPh from '../Components/TextInputPh';
import { emailValidator } from '../core/helper/emailValidator';
import { Ionicons } from '@expo/vector-icons';
import Header from '../Components/Header';
import { passwordValidator } from '../core/helper/passwordValidator';
import { theme } from '../core/theme';
import { signUpUser } from '../api/auth-api';
import { nameValidator } from '../core/helper/nameValidator';
import { phoneValidator } from '../core/helper/phoneValidator';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import { useNavigation } from '@react-navigation/native';
export async function signUp({name,email,password,phoneNumber}){
    const navigation = useNavigation();
    //    const {user} = await firebase
       firebase.auth().createUserWithEmailAndPassword(email,password)
       .then(() => {
           firebase.firestore().collection('User').doc(firebase.auth().currentUser.uid).set({
              uid:firebase.auth().currentUser.uid,
              name,
              phoneNumber,
              email,
                })
                firebase.firestore().collection('All').doc(firebase.auth().currentUser.uid).set({
                    uid:firebase.auth().currentUser.uid,
                    name,
                    phoneNumber,
                    email,
                })
                // navigation.navigate("SigninScreen")
                // alert('You have successfully signUp')
    })
    .catch((error)=>{
    alert(error.message)
    })
  }
export default function RegisterScreen({navigation}){
    const [email, setEmail] = useState({value: "", error: ""})
    const [password, setPassword] = useState({value: "", error: ""})
    const [name, setName] = useState({value: "", error: ""})
    const [phoneNumber, setPhoneNumber] = useState({value: "", error: ""})
    const [loading, setLoading] = useState();
    const onSignUpPressed = async() => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);
        const nameError = nameValidator(name.value);
        const phoneNumberError = phoneValidator(phoneNumber.value);
        if(emailError || passwordError || nameError || phoneNumberError){
            setEmail({...email, error: emailError});
            setPassword({...password, error: passwordError});
            setName({...name, error: nameError});
            setPhoneNumber({...phoneNumber, error: phoneNumberError});
            return;
        }
        setLoading(true)
        const response = await signUp({
            email:email.value,
            password:password.value,
            name:name.value,
            password:password.value,
            phoneNumber:phoneNumber.value
        })
        if(response.error){
            alert(response.error)
        }
        else{
            alert('Successfully signin up')
            navigation.navigate('SigninScreen')
        }
        setLoading(false)
    }
    return(
        <View style={styles.container}>
            <ImageBackground style ={styles.background}source={require('../../assets/BackgroundImage.png')}>
            <Logo/>
            <Header>Create an Account</Header>
            <View style={{ position:'absolute',marginTop:'10%', marginLeft:'9%'}}>
            <TouchableOpacity
                style={{
                zIndex:1}}
                onPress={()=>navigation.navigate('SigninScreen')}
            >
            <Ionicons name="md-chevron-back-circle" size={30} color="white" />
            </TouchableOpacity>
            </View>
            <View style={{width:'100%',paddingLeft:'10%', paddingRight: '10%', paddingTop: '-5%'}}>
             <TextInput
                style={{height:50}}
                label="Email"
                value={email.value}
                error={email.error}
                errorText={email.error}
                onChangeText={(text) => setEmail({value: text, error:""})}
            />
            <TextInputN
                style={{height:50}}
                label="Name"
                value={name.value}
                error={name.error}
                errorText={name.error}
                onChangeText={(text) => setName({value: text, error:""})}
            />
            <TextInputPh
                style={{height:50}}
                label="Phone Number"
                value={phoneNumber.value}
                error={phoneNumber.error}
                keyboardType='number-pad'
                errorText={phoneNumber.error}
                onChangeText={(text) => setPhoneNumber({value: text, error:""})}
            />
            <TextInputP
                style={{height:50}}
                label="Password"
                value={password.value}
                error={password.error}
                errorText={password.error}
                onChangeText={(text) => setPassword({value: text, error:""})}
                secureTextEntry
            />
            </View>
            <View style={{width:'100%',paddingLeft:'10%', paddingRight: '10%'}}>
            <Button loading = {loading} mode="contained" onPress={onSignUpPressed}>Sign Up</Button>
            </View>
            <View style={styles.row}>
                <Text style={{color: theme.colors.border}}>Already have an Account?</Text>
                <TouchableOpacity onPress={() => navigation.replace("SigninScreen")}>
                    <Text style={styles.link}> Login</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    row: {
        flexDirection: 'row',
        marginTop: '2%',
        marginLeft: '22.5%'
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.text
    },
    background:{
        width:'100%',
        height:'100%',
    },
})