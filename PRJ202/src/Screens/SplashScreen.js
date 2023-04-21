import { StyleSheet, Text, View,  Dimensions, Image } from 'react-native'
import React from 'react'
import { Platform } from 'react-native';

const SplashScreen = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Image style={styles.image} source={require('../../assets/logo.jpg')}/>
      <Text style={{fontSize:10,fontWeight:'bold'}}>Gyalpozhing Turf Booking App</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  image:{
    height: Platform.OS === 'ios' ? 200 : 70,
    width: Platform.OS === 'ios' ? 250 : 150,
    borderRadius: Platform.OS === 'ios' ? 7 : 4,
  }
})