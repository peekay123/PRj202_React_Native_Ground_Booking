import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SigninScreen from '../Screens/SigninScreen';
import DrawerNavigation from './DrawerNavigation';
import BookingScreen from '../Screens/BookingScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import ResetPasswordScreen from '../Screens/ResetPasswordScreen';
import Notifications from '../Screens/Notification'
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SigninScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name="SigninScreen" component={SigninScreen}/>
        <Stack.Screen name="HomeScreen" component={DrawerNavigation} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="Notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
