import React, {useState} from 'react';
import Button from '../Components/Button';
import Header from '../Components/Header';
import Logo from '../Components/Logo';
import { Ionicons } from '@expo/vector-icons';
import TextInput from '../Components/TextInput';
import { emailValidator } from '../core/helper/emailValidator';
import {sendPasswordResetEmail} from '../../src/api/auth-api'
import { View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function ResetPasswordScreen({navigation}){
    const [email, setEmail] = useState({value: "", error: ""})
    const [loading, setLoading] = useState();

    const onSubmitPressed =  async () => {
        const emailError = emailValidator(email.value);
        if(emailError){
            setEmail({...email, error: emailError});
        }
        setLoading(true)
        const response = await sendPasswordResetEmail(email.value)
        if(response.error){
            alert(response.error)
        }
        else{
            navigation.reset({
                index:0,
                routes:[{name:'ResetPasswordScreen'}]
            })
            navigation.navigate('SigninScreen')
            alert("Reset Email has been sent successfully!")
        }
        setLoading(false)
    }
    return(
        <View style={styles.container}>
            <ImageBackground style ={styles.background}source={require('../../assets/BackgroundImage.png')}>
            <Logo/>
            <View style={{marginTop:'15%'}}>
            <Header>Restore Password</Header>
            </View>
            <View style={{ position:'absolute',marginTop:'10%', marginLeft:'9%'}}>
            <TouchableOpacity
                style={{
                zIndex:1}}
                onPress={()=>navigation.navigate('SigninScreen')}
            >
            <Ionicons name="md-chevron-back-circle" size={30} color="white" />
            </TouchableOpacity>
            </View>
            <View style={{width:'100%',paddingLeft:'10%', paddingRight: '10%', paddingTop: '10%'}}>
            <TextInput
                style={{height:50}}
                label="Email"
                value={email.value}
                error={email.error}
                errorText={email.error}
                onChangeText={(text) => setEmail({value: text, error:""})}
                description="You will receive email with password reset link."
            />
            <Button  loading={loading} mode="contained" onPress={onSubmitPressed}>Send Instructions</Button>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',           
    },
    background:{
        width:'100%',
        height:'100%',

    },
})