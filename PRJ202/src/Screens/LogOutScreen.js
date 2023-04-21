import React from 'react'
import {View, Text} from 'react-native';
import SigninScreen from './SigninScreen';

function LogOutScreen({navigation}) {
  return (
    navigation.navigate('SigninScreen')
  )
}

export default LogOutScreen