import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
//import Home from "./Home";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  
  const navigation = useNavigation()
 
  return (
    <LinearGradient  style={styles.container} colors={['#43CEA2','#185A9D']}>
    {/* <View style={styles.title}>
    <Text style={styles.text}>Gyalpozhing Turf Booking</Text>
    </View> */}
      <Image style={styles.image} source={require("../assets/logo.png")} />
 
      <StatusBar style="light" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          // onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          // onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={() => navigation.navigate("Home")}>Sign In</Text>
      </TouchableOpacity>
    </LinearGradient>

  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
     alignItems: "center",
    justifyContent: "center",
  },
  // text:{
  //         fontSize:20,
  //         color:"white",
  //       textAlign:"center",
  //       paddingTop:"10%",
  //       fontWeight:"bold"

  // },
  // title:{
  
  //   backgroundColor:"#5FD14F",
  //   width:"100%",
  //   height:"10%",
  //   marginBottom:"93%"

  // },
  image: {
   marginBottom:"10%",
   height:"10%",
   width:"50%"
  },
 
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: "6%",
    marginBottom: "7%",
    alignItems: "center",
  },
 
  TextInput: {
    // height: 50,
    flex: 1,
    // padding: 0,
    // marginLeft: 20,
  },
  
  loginBtn: {
    width: "78%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop:"5%",
    backgroundColor: "#5FD14F",
  },
  loginText:{
    fontSize:17,
    color:"white",
    fontWeight:"bold"
  }
});