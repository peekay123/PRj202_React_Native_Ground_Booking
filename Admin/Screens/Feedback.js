import { View, Text, StyleSheet, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

export default function Feedback() {

  const auth = firebase.auth;
  const firestore = firebase.firestore;
  const [std, setStd]=useState([]);
  
  useEffect(()=>{
    const fetchStd = async() => {
      try {
        const list=[];
        await firestore()
        .collection('feedbacks')
        // .orderBy('time', 'asc')
        .get()
        .then((querySnapshot)=>{
          // console.log('Total std :', querySnapshot.size);
          querySnapshot.forEach(doc => {
            const {feedback} = doc.data();
            list.push({
              // uid : doc.id,
           feedback:feedback
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

  const Stdlist=({item, index}) =>{
    return (
      <View style={{
     borderBottomWidth:1,
      marginLeft:10,
      marginRight:20, 
      paddingTop:20,
      paddingBottom:20,
      paddingLeft:10, 
      paddingRight:5, 
      width:"95%",
      borderColor:"white"}}>

          <Text style={{color:"white", fontSize:15}}>{item.feedback}
          
          </Text>
        
      </View>
    )
  }
  return (
    <LinearGradient  style={styles.container} colors={['#43CEA2','#185A9D']}>
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
  container: {
    flex: 1,
    // // backgroundColor: "#fff",
    //  alignItems: "center",
    // justifyContent: "center",
  },
})