import React from 'react'
import {View, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header';
function MyBookingScreen() {
  return (

    <LinearGradient  style={{flex:1}}colors={['#43cea2','#185a9d']}>
      <Header>My Booking</Header>
      <View style={{padding: 20}}>
        <Text style={{fontWeight:'bold',textAlign:'center', justifyContent: 'center'}}>You have booked the ground on following date and time</Text>
        <View style={{paddingTop:20}}>
          <Text style={{color:'white',paddingLeft:'20%'}}>22/12/2022  4:00pm-6:00pm</Text>
          <Text style={{paddingTop:15,paddingLeft:'20%',color:'white'}}>17/09/2022  6:00pm-8:00pm</Text>
          <Text style={{paddingTop:15,color:'white',paddingLeft:'20%'}}>30/08/2022  4:00pm-6:00pm</Text>
          <Text style={{paddingTop:15,color:'white',paddingLeft:'20%'}}>6/07/2022  8:00pm-10:00pm</Text>
          <Text style={{paddingTop:15,color:'white',paddingLeft:'20%'}}>9/05/2022  6:00pm-8:00pm</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default MyBookingScreen