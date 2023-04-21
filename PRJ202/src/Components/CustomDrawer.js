import { Text, View, Image, TouchableOpacity,Share, BackHandler, Alert} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React,{useEffect} from 'react'
import { ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firebase from "firebase/app";
import 'firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { Title } from 'react-native-paper';


const CustomDrawer = (props) => {

  const navigation = useNavigation();
  const backAction = () => {
    Alert.alert("Want to logout!","Are sure?", [
      {
        text: "NO",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () =>navigation.replace('SigninScreen')}
    ]);
    return true;
  };
  
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);
  return () => {
    BackHandler.removeEventListener("hardwareBackPress", backAction);
  }   
  }, []);

  const myCustomShare = async() => {
    try{
      await Share.share({
        message:'Hi, check out this Quiz App:https://app.smilytech.com/quiz_app/?sd=Quiz%20App&st=Quiz%20App&apn=com.smilytech.flutter_quiz_app&link=https%3A%2F%2Fquiz.smilytech.com%2Fapp'
      })
    }
    catch(error){
      alert(error.message);
    }
  };

  // const handleSignOut = () => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       navigation.replace("SigninScreen")
  //     })
  //     .catch(error => alert(error.message))
  // }
  return (
      <View style={{flex:1}}>
        <DrawerContentScrollView 
        {...props} 
        contentContainerStyle={{backgroundColor:"#5FD14F"}}>

            <ImageBackground 
            source={require('../../assets/BackgroundImage.png')}
            style = {{padding:20}}>

        <Image 
            source={require('../../assets/football.jpeg')}
            style={{height:50,width:50, borderRadius:40, marginLeft:90}}/>

              <Title 
                      style={{color:"white",
                      fontSize:12, 
                      marginLeft:50,}}
                      >
                      {firebase.auth().currentUser?.email}
                      {firebase.auth().currentUser?.photoURL} 
              </Title>

            </ImageBackground> 

        <View style={{flex:1, backgroundColor:"white", paddingTop:10}}>
        <DrawerItemList {...props}/>
        </View>
    </DrawerContentScrollView>
    <View style={{padding:8,borderTopWidth:1, borderTopColor:"#ccc"}}>
    <TouchableOpacity onPress = {backAction} style={{paddingVertical:15}}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
            <Ionicons name='exit-outline' size={22} style={{marginLeft:25}}/>
            <Text
            style={{
            fontSize:14,
            marginLeft:7, 
            }}
            >Log Out
            </Text>
        </View>
    </TouchableOpacity>
    </View>
    
    <View style={{padding:8,borderTopWidth:1, borderTopColor:"#ccc"}}>
    <TouchableOpacity onPress = {myCustomShare} style={{paddingVertical:15}}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
            <Ionicons name='ios-share-social-outline' size={22} style={{marginLeft:25}}/>
            <Text
            style={{
            fontSize:14,
            marginLeft:7, 
            }}
            >Share App
            </Text>
        </View>
    </TouchableOpacity>
    </View>
    </View>
  )
}
export default CustomDrawer;