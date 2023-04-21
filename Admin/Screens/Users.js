import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function Users() {
  return (
    <LinearGradient  style={styles.container} colors={['#43CEA2','#185A9D']}>
      
    </LinearGradient>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
     alignItems: "center",
    justifyContent: "center",
  },
})