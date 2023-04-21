import { View, Text, StyleSheet,TouchableOpacity, FlatList } from 'react-native'
import React, {useEffect, useState}from 'react'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
export default function Notification({navigation}) {

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
            console.log('Total std :', querySnapshot.size);
            querySnapshot.forEach(doc => {
              const {name, phoneNumber, currentDate, chooseTime} = doc.data();
              list.push({
                // uid : doc.id,
                name : name,
               phoneNumber:phoneNumber,
               currentDate:currentDate,
               chooseTime:chooseTime
              })
            })
          })
          setStd(list);
          console.log('std :',std)
        } catch (error) {
          console.log(error)
        }
       
      }
     fetchStd();
    },[])

    const Stdlist=({item, index}) =>{
      return (
        <View style={{borderWidth:1,
        marginLeft:10,
        marginRight:10, 
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:10, 
        paddingRight:5, 
        borderColor:"white"}}>
          
            <Text style={{color:"white"}}>{item.name} with number{"\t"} 
            <Text>{item.phoneNumber} have booked the ground from  {"\t"}
            <Text>{item.chooseTime} on{"\t"}
            <Text>{item.currentDate}. So, refrain from booking the ground on same time and date. If not fund will not be refund</Text>
            </Text>
            </Text>
            </Text>
          
        </View>
      )
    }
  return (
    <LinearGradient  style={styles.container}colors={['#43cea2','#185a9d']}>
    <View style={styles.menu}>
    <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('HomeScreen')}
    >
    <Ionicons name="md-arrow-back-circle-sharp" size={30} color="white" />
    </TouchableOpacity>

    <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}> Notification </Text>
    
  </View>
  
  <View>
        <FlatList
        data={std}
        renderItem={Stdlist}
        keyExtractor={item=>`key-${item.uid}`}
        showsVerticalScrollIndicator={false}
        />
        
      </View>
  </LinearGradient>
)
}

const styles = StyleSheet.create({
  container:{
            flex:1,            
  },
  menu:{
      flexDirection:'row',
      height:50,
      backgroundColor:'#5FD14F',
      justifyContent:'center',
      alignItems:'center'
},
button: {
        position:'relative',
        right:90
}
})