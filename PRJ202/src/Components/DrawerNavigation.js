import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../Components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import MyBookingScreen from '../Screens/MyBookingScreen';
import AboutUsScreen from '../Screens/AboutUsScreen';
import FeedbackScreen from '../Screens/FeedbackScreen'

const Drawer=createDrawerNavigator();

function DrawerNavigation() {
  
  return (
  
    <Drawer.Navigator  drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
      drawerActiveBackgroundColor:'#76BA1B',
      drawerActiveTintColor:"white",
      drawerInactiveTintColor:"black",
      drawerLabelStyle:{
        marginLeft:0,
        fontSize:14,
           
      },
      headerTitle:'Gyalpoizhing Turf Booking',
      headerTintColor: 'white',
      headerTitleStyle:{
        fontSize:18,
        paddingLeft:'2%'
      },
      
      headerStyle:{
      backgroundColor:"#76BA1B",
    
      
      }
 
    }}>
    <Drawer.Screen name="Home" component={HomeScreen}
      options={{drawerIcon:({color})=>( 
        <Ionicons name='home-outline' size={22} color={color}/>
      ),
    }}/>   
    {/* <Drawer.Screen name="My Booking" component={MyBookingScreen}
          options={{drawerIcon:({color})=>( 
            <Ionicons name='calendar-outline' size={22} color={color}/>
          ),
        }}/>    */}
        <Drawer.Screen name="About Us" component={AboutUsScreen}
         options={{drawerIcon:({color})=>( 
          <Ionicons name='people-outline' size={22} color={color}/>
        ),
      }}/>
        <Drawer.Screen name="Feedback" component={FeedbackScreen}
        options={{drawerIcon:({color})=>( 
          <Ionicons name='chatbox-ellipses-outline' size={22} color={color}/>
        ),
      }}/>
                  
  </Drawer.Navigator>
  )
}
export default DrawerNavigation;