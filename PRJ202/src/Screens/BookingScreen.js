import React, {useState} from 'react'
import {Text, TouchableOpacity, StyleSheet, View, TextInput,ScrollView, Alert} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar';
import Menu from '../Components/Menu ';

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

export default function BookingScreen({ navigation }) {

  <StatusBar style='light'/>

  const auth = firebase.auth;
  const firestore = firebase.firestore;

  const[journalNumber, setJournalNumber]=useState(null);

  function booking_details() {

      if(journalNumber!=null){

          firestore().collection("Booking").add({           
              journalNumber
          })
          firestore().collection("All").add({           
            journalNumber
        }).then(()=>{

            alert("Journal number successfully submitted")
            navigation.replace('HomeScreen')      
          })
          .catch((error) => {
              alert(error.message)
          });
      }
      else{
          alert('Field cant be empty')
      }
}

return (

    <LinearGradient  style={styles.container}colors={['#43cea2','#185a9d']}>
    <Menu/>
    <ScrollView>
       <View style={styles.details1}>
        <Text style={styles.text1}>Day Time : 3-5 P.M.</Text>
        <Text style={styles.text2}>Ground fee = Nu. 2500/-</Text>
        <Text style={styles.text2}>Referee fee = Nu. 300/-</Text>
        <Text style={styles.text3}>Total Payment = Nu. 2800/-</Text>
      </View>
      
      <View style={styles.details}>
        <Text style={styles.text4}>Night Time : 5-10 P.M.</Text>
        <Text style={styles.text2}>Ground fee = Nu. 2700/-</Text>
        <Text style={styles.text2}>Referee fee = Nu. 300/-</Text>
        <Text style={styles.text3}>Total Payment = Nu. 3000/-</Text>
      </View>
     
      <View style={styles.details}>
        <Text style={styles.text4}>Account Details</Text>
        <Text  style={styles.text2}>Account number: 200656974</Text>
        <Text  style={styles.text2}>Account Holder: Dorji Singye </Text>
      </View>
    <View>
     
      <TextInput
                style={styles.TextInput}
                placeholder='Journal Number'
                keyboardType="number-pad"
                onChangeText={text=>setJournalNumber(text)}
                maxLength={10}
      />
    
      <TouchableOpacity style={styles.submitButton}>
      <Text 
          style={styles.text} 
          onPress={()=>booking_details()}>
            Submit
        </Text>
      </TouchableOpacity>
      </View>
    
    </ScrollView>
  </LinearGradient>
  )
}

const styles = StyleSheet.create({
  
  container:{
            flex:1,            
          },
  details:{
          borderWidth:1.5,
          marginLeft:"8%",
          marginRight:"8%",
          borderColor:"white",
          borderRadius:15,
          width:'85%',
          marginTop:10
          
  },
  details1:{
            borderWidth:1.5,
            marginLeft:"8%",
            marginRight:"8%",
            borderColor:"white",
            borderRadius:15,
            marginTop:10,
            width:'85%',
  }, 
  text1:{
        alignSelf:"center",
        color:"white",
        fontWeight:"bold",
        fontSize:18,
        marginTop:15,
  },
  text2:{
        alignSelf:"center",
        color:"white",
        fontSize:16,
        marginTop:"5%",
  },
  text3:{
        alignSelf:"center",
        color:"white",
        fontSize:16,
        marginTop:"5%",
        fontWeight:"bold",
  },
  text4:{
        alignSelf:"center",
        color:"white",
        fontWeight:"bold",
        fontSize:18,
        marginTop:15
  },
TextInput:{
          borderColor:'black',
          borderWidth:1,
          width:"80%",
          marginTop:"5%",
          borderRadius:15,
          alignSelf:'center',
          paddingHorizontal:10,
          paddingVertical:12,
          fontSize:15,
          backgroundColor:"white",
},
submitButton:{
            flexDirection:'row',
            borderColor:'black',
            borderWidth:1,
            width:"80%",
            margin:15,
            borderRadius:15,
            paddingHorizontal:30,
            paddingVertical:12,
            backgroundColor:'#5FD14F',
            marginLeft:"11%",
},

text:{
      textAlign:"center",
      fontWeight:"bold",
      color:"white",
      fontSize:19,
      marginLeft:80
}
 
})