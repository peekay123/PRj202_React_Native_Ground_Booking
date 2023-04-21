import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Notification from '../Screens/Notification'
import Feedback from '../Screens/Feedback'
import Users from '../Screens/Users'
import Home from '../Screens/Home';

const Drawer=createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator screenOptions={{
        headerTitle:'Gyalpoizhing Turf Booking',
        headerTintColor: 'white',
        headerTitleStyle:{
          marginLeft:-17
          
        },
        
        headerStyle:{
        backgroundColor:"#76BA1B",
      
        
        }
    }}>
    <Drawer.Screen name=" Home" component = {Home}/>
    {/* <Drawer.Screen name=" Users" component = {Users}/> */}
    <Drawer.Screen name=" Notification" component ={Notification}/>
    <Drawer.Screen name=" Feedback" component = {Feedback}/>
    </Drawer.Navigator>
  )
}