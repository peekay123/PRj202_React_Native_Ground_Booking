import React,  { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image,StatusBar, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
// import Imageslider from '../Components/ImageSlider';

export default function HomeScreen({navigation}) {
  
  const auth = firebase.auth;
  const firestore = firebase.firestore;
  const[chooseTime, setChooseTime]=useState(null);

  function Timing() {
    if(chooseTime!=null){
        firestore().collection("Time").add({
          chooseTime, 
          currentDate
        })
        firestore().collection("All").add({
          chooseTime,
          currentDate
        })
        .then(()=>{
          // alert("Succesful")
          navigation.replace('BookingScreen')
        })
        
        .catch((error) => {
            alert(error.message)
        });
    }
    else{
        alert('Choose the time')
    }
}
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      setCurrentDate(
        date + '/' + month + '/' + year
      );
    }, []);
  return (
    <>
      <TouchableOpacity
      style={{position:'absolute',
      marginLeft:'90%',
      flexDirection:"row",
      bottom:'102%',
      zIndex:1}}
      onPress={()=>navigation.navigate('Notifications')}
      >
      <Icon name='bell' style={{fontSize:25,color:'#FFFFFF'}}/>
      </TouchableOpacity>
    <LinearGradient  style={styles.container}colors={['#43CEA2','#185A9D']}>
    <StatusBar style='light'/>
       {/* <Imageslider/> */}
        <Text style={styles.text1}>
          The artificial turf football ground in Gyalpoizhing in Mongar,
          the first of its kind in the country's east, was inaugurated on May 12, 2017.
          His Royal Highness the Gyaltshab Jigme Dorji Wangchuck accompanied by
          Ashi Yeatso Lhamo graced the opening of the much awaited ground.
        </Text>
        <Text style={styles.text2}>
          In order to book the ground you can choose time according to seasons.
        </Text>
        <Text style={styles.text3}>
            Summer timing: 3-9 P.M.
        </Text>
        <Text style={styles.text4}>
            Winter timing: 4-10 P.M.
        </Text>
      {/* <View style={{flexDirection:"row"}}> */}
      <View>
            <Text style={styles.textStyle}>
              Current Date:
            </Text>
            <Text style={styles.textStyle1}>
              {currentDate}
            </Text>
          </View>
        <View style={styles.picker}>
        {/* <Text style={styles.time}>Choose Time</Text> */}
          <Picker
          style={styles.label}
          selectedValue={chooseTime}
          onValueChange={text=>setChooseTime(text)}>
              <Picker.Item  label="Choose time" value="" />
              <Picker.Item  label="3-5 P.M (Summer)" value="3-5 P.M (Summer)" />
              <Picker.Item  label="5-7 P.M (Summer)" value="5-7 P.M (Summer)" />
              <Picker.Item  label="7-9 P.M (Summer)" value="7-9 P.M (Summer)" />
              <Picker.Item  label="4-6 P.M (Winter)" value="3-5 P.M (Winter)" />
              <Picker.Item  label="6-8 P.M (Winter)" value="5-7 P.M (Winter)" />
              <Picker.Item  label="8-10 P.M (Winter)" value="7-9 P.M (Winter)" />
            </Picker>
          </View>
          {/* </View> */}
          <TouchableOpacity style={styles.book}
             onPress={()=>Timing()}>
              <View>
                  <Text
                  style={{textAlign:'center',
                  fontSize:20,
                  color:'white',
                  fontWeight:'bold'}}>
                    Book Now
                  </Text>
              </View>
            </TouchableOpacity>
    </LinearGradient>
    </>
  )
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      },
  image:{
        height:'30%',
        width:'94%',
        marginLeft:"3%",
        borderRadius:15,
        marginTop:"2%"
        },
  text1:{
        marginLeft:15,
        marginRight:10,
        fontSize:14,
        marginTop:15,
        color:'white'
        },
  text2:{
        marginLeft:15,
        marginRight:10,
        fontSize:14,
        marginTop:15,
        color:'white'
        },
  text3:{
        marginLeft:10,
        marginRight:10,
        fontSize:15,
        marginTop:15,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
        },
  text4:{
        marginLeft:10,
        marginRight:10,
        fontSize:15,
        marginTop:15,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
        },
  label:{
        color:"black",
        marginLeft:60,
        marginTop:-5
  },
  picker:{
          marginTop:"7%",
          backgroundColor:"white",//'#5FD14F',
          marginLeft:"13%",
          height:50,
          width:'76%',
          // justifyContent:'center',
          borderWidth:1,
          borderRadius:10,
         },
  book:{
        backgroundColor:'#5FD14F',
        width:"80%",
        height:55,
        marginTop:"5%",
        paddingTop:"3%",
        color:'white',
        borderRadius:10,
        marginLeft:"10%",
        borderWidth:1
        },
textStyle: {
          marginLeft:'20%',
          fontSize: 15,
          marginTop:10,
          color: 'white',
         fontWeight:"bold"
        },
textStyle1: {
          textAlign: 'center',
          fontSize: 15,
          color: 'white',
         fontWeight:"bold",
         marginTop:-22,
        marginLeft:80
      
      },
})