import { View, Text, StyleSheet , FlatList, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialIcons ,MaterialCommunityIcons} from '@expo/vector-icons';



export default function Notification() {
  // const [text, setText] = useState('');
  // const [showText, setShowText] = useState(false);
  // const [disablebtn, setDisablebtn] = useState(true);
  
  // const addItem = (text) => {
  //   setShowText(true);
  // };
  // const showAlert = () => {
  //   Alert.alert('Item added successfully');
  // };

  
  const auth = firebase.auth;
    const firestore = firebase.firestore;
    const [std, setStd]=useState([]);
    
    useEffect(()=>{
      const fetchStd = async() => {
        try {
          const list=[];
          await firestore()
          .collection('All')
          // .orderBy('time', 'asc')
          .get()
          .then((querySnapshot)=>{
            // console.log('Total std :', querySnapshot.size);
            querySnapshot.forEach(doc => {
              const {name, phoneNumber, currentDate, chooseTime, journalNumber} = doc.data();
              list.push({
              uid : doc.id,
               name : name,
               phoneNumber:phoneNumber,
               currentDate:currentDate,
               chooseTime:chooseTime,
               journalNumber:journalNumber,
              })
            })
          })
          setStd(list);
          // console.log('std :',std)
        } catch (error) {
          console.log(error)
        }
       
      }
     fetchStd();
    },[])

    function Stdlist({item, index}){
  
      const Confirm=()=>{
        firebase.firestore().collection('Confirm').add({
          
           name:`${item.name}`,
           PhoneNumber:`${item.phoneNumber}`,
           chooseTime:`${item.chooseTime}`,
           currentDate:`${item.currentDate}`,
           Confirm:'confirmed',

           
        }).then(()=>{
          alert("Successful! You have accepted.")
        })
       
    }
    const Deny=()=>{
      firebase.firestore().collection('Deny').add({
        
         name:`${item.name}`,
         PhoneNumber:`${item.phoneNumber}`,
         chooseTime:`${item.chooseTime}`,
         currentDate:`${item.currentDate}`,
         Deny:'Deny',

         
      }).then(()=>{
        alert("You have deny request.")
      })
     
  }
      return (
        <View style={{
          borderBottomWidth:1,
          borderColor:"white",
          width:'100%',
          marginTop:35,
         }}>
          
            <Text style={{color:"white",fontSize:15 }}>Name: {item.name}</Text>
            <Text>Phone Number: {item.phoneNumber}   </Text>
            <Text>chooseTime:{item.chooseTime}</Text>
            <Text>Date: {item.currentDate}</Text>
            <Text>JournalNumber: {item.journalNumber}</Text>


          
            
         
      
         <View style={{zIndex:1,position:'absolute',backgroundColor:'yellow',width:'100%',top:35}}>
         <ActionButton size={30} buttonColor="rgba(231,76,60,1)">
              <ActionButton.Item
                buttonColor="white"
                title="Confirm"
                onPress={Confirm}>
              <MaterialCommunityIcons name="sticker-check-outline" size={24} color="green" />
              </ActionButton.Item>
              <ActionButton.Item
                buttonColor="white"
                title="Cancel"
                onPress={Deny}>
             <MaterialCommunityIcons name="sticker-remove-outline" size={24} color="red" />
              </ActionButton.Item>

              </ActionButton>

         </View>
         
        </View>
      )
    }

    
  return (
    <LinearGradient  style={styles.container} colors={['#43CEA2','#185A9D']}>
        <View>
        <FlatList
        data={std}
        renderItem={Stdlist}
        keyExtractor={item=>item.uid}
        showsVerticalScrollIndicator={false}
        />
        
      </View>
    </LinearGradient>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    padding:20
  },
  confirm:{
    color:"white", 
    fontSize:16,
    fontWeight:"bold", 
    textAlign:'center',
    paddingTop:"10%",
    
  },
  deny:{
    color:"red", 
    fontSize:16,
    fontWeight:"bold", 
    textAlign:'center',
    paddingTop:"10%" ,
    paddingBottom:"10%"
   },
   confirmBtn:{
    backgroundColor:"#5FD14F",
    width:"32%",
    marginLeft:"7%",
    borderWidth:1,
    marginTop:"5%",
    borderRadius:17

   },
   denyBtn:{
    backgroundColor:"#5FD14F",
    width:"32%",
    marginLeft:"20%",
    borderWidth:1,
    marginTop:"5%",
    borderRadius:17

 
   }
})