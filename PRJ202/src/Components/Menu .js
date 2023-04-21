import { StyleSheet, Text,TouchableOpacity,View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
const Menu  = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('HomeScreen')}
      >
      <Ionicons name="md-arrow-back-circle-sharp" size={30} color="white" />
      </TouchableOpacity>

      <Text style={{fontSize:20, color:'white', fontWeight:'bold'}}> Gyalpozhing Turf Booking </Text>
      
    </View>
  )
}

export default Menu 

const styles = StyleSheet.create({
    menu:{
        flexDirection:'row',
        height:50,
        backgroundColor:'#76BA1B',
        justifyContent:'center',
        alignItems:'center'
  },
  button: {
          position:'relative',
          right:22
  }
})