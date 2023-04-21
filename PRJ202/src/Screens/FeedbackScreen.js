import React, {useState} from 'react';
import {View, Text,Image,StyleSheet,Alert,ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

function FeedbackScreen({navigation}) {
  
  const auth = firebase.auth;
  const firestore = firebase.firestore;
  const[feedback, setFeedback]=useState(null);
  function feed_back() {
      if(feedback!=null){
          firestore().collection("feedbacks").add({
             feedback
          }).then(()=>{
              navigation.navigate("HomeScreen")
              alert(" Feedback successfully sent")
          })
          .catch((error) => {
              alert(error.message)
              // ..
          });
      }
      else{
          alert('Field cant be empty')
      }
  }
  return (
    <LinearGradient  style={styles.container} colors={['#43CEA2','#185A9D']}>
       <ScrollView>
        <Image source={require('../../assets/feedback.png')}
          style={styles.img}
       />
       <Text style={styles.des}> {'\t'}“Feedback is a gift.
       Ideas are the currency of {'\t'}{'\t'}{'\t'}our
       next success.Let people see you value both
       feedback and ideas.”
       {'\n'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'}{'\t'} -Jim Trinka and Les Wallace
       </Text>
      <View>
     <TextInput
              style={styles.inputStyle}
              placeholder='Give your feedback here!'
              onChangeText={text=>setFeedback(text)}
              multiline={true}
              numberOfLines={12}
     />
      <View style={styles.btnV}>
        <TouchableOpacity style={{paddingRight:60, paddingLeft: 1}}>
          <Text
         style={styles.submit}
         onPress={()=>feed_back()}
          >Submit</Text>
        </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
   },
  img: {
    resizeMode:'cover',
    position:'relative',
    width: 320,
    marginTop:10,
    height: 150,
    left:20,
    borderRadius:10
  },
  des: {
    fontFamily:'serif',
    textAlign:'center',
    fontSize:14,
    padding:4,
    color:"white",
    marginTop:15,
    marginRight:9
  },
  inputStyle:{
       marginLeft:20,
      fontSize:15,
      marginRight:20,
      marginTop:15,
      padding:8,
  },
  submit:{
    backgroundColor:'#5FD14F',
    height:55,
    width:290,
    borderRadius:10,
    paddingTop:15,
    color:"white",
    fontFamily:"serif",
    fontWeight:"bold",
    fontSize:19,
    textAlign:"center",
    marginLeft:"5%",
    borderColor:"black",
    borderWidth:1.5,
    marginTop:"5%"
  },
  btnV: {
    flexDirection:'row',
    paddingLeft:45,
    paddingTop: 15,
    justifyContent: 'center'
  }
})
export default FeedbackScreen