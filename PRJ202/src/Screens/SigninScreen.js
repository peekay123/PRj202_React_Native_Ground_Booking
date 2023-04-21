import React, {useEffect, useState} from "react";
import { StyleSheet, View,Text, ImageBackground, TouchableOpacity,KeyboardAvoidingView } from "react-native";
import { emailValidator } from "../core/helper/emailValidator";
import TextInput from "../Components/TextInput";
import TextInputP from "../Components/TextInputP";
import { theme } from "../core/theme";
import Button from "../Components/Button";
import { passwordValidator } from "../core/helper/passwordValidator";
import Header from "../Components/Header";
import Logo from "../Components/Logo";
import { loginUser } from "../api/auth-api";
import { useNavigation } from "@react-navigation/native";
import 'firebase/auth';
import firebase from "firebase/app";

export default function SigninScreen(){
    const [email, setEmail] = useState({value: "", error: ""})
    const [password, setPassword] = useState({ value: "", error: ""})
    const [loading, setLoading] = useState();

    const navigation = useNavigation()

    // useEffect(() => {
    //     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    //         if(user){
    //             navigation.replace('HomeScreen')
    //         }
    //     });
    //     unsubscribe()
    // }, [])

    const onLoginPressed = async () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);
        if (emailError || passwordError) {
            setEmail({...email, error: emailError});
            setPassword({...password, error: passwordError});
        }
        setLoading(true)
        const response = await loginUser({
            email: email.value,
            password: password.value,
        });
        if(response.error){
            alert(response.error);
        }
        else{
            navigation.navigate('HomeScreen')
        }
        setLoading(false)
    }
    return (
        <View style={styles.container}>
            <ImageBackground style ={styles.background}source={require('../../assets/BackgroundImage.png')}>
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" > 
           <View>
            <Logo/>
            <View style={{marginTop:'15%'}}>
            <Header>Gyalpozhing Turf Booking</Header>
            </View>
            <View style={{width:'100%',paddingLeft:'10%', paddingRight: '10%', paddingTop: '10%'}}>
            <TextInput
                style={{height:50}}
                value={email.value}
                error={email.error}
                errorText={email.error}
                onChangeText={(text) =>setEmail({ value: text, error: ""})}
                label='Email'
            />
            <TextInputP
                style={{height:50}}
                label="Password"
                value={password.value}
                error={password.error}
                onChangeText={(text) =>setPassword({value: text, error: ""})}
                secureTextEntry    
            />
            </View>
            <View style={styles.forgotPassword}>
                <TouchableOpacity
                onPress={() =>navigation.navigate("ResetPasswordScreen")}
                >
                <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            <View>
            <Button  loading={loading} mode="contained" onPress = {onLoginPressed} style={{width:'80%',marginLeft:'10%'}}>Login</Button>
            <View style={styles.row}>
                <Text style={{color: theme.colors.border}}>
                    Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
                    <Text style={styles.link}>Sign Up</Text>
                </TouchableOpacity>
            </View> 
            </View>
            </View>
            </KeyboardAvoidingView>
        </ImageBackground>
      
    </View>
);
}
const styles = StyleSheet.create({
    container:{
            alignItems:'center',
            justifyContent:'center',           
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
        marginLeft:'25%'
    },
    background:{
        width:'100%',
        height:'100%',

    },
    link: {
        paddingLeft:5,
        fontWeight:'bold',
        color: theme.colors.text
    },
    word:{ 
        fontSize:25,
        color:'black',
        textAlign:'center',
        fontWeight:'bold'
       
    },
    text:{
        alignItems:'center',
        justifyContent:'center',
        color:'white',
        textAlign:'center',
        fontSize:18,
        marginRight:6,
        fontFamily:'serif',
    },
    image:{
        width:40,
        height:40,
        marginRight:5,    
    },
    forgot: {
        marginTop:'5%',
        fontSize: 13,
        color: theme.colors.border,
        marginLeft:'33%',
    },
});
