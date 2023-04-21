import React from 'react'
import {View, Text,Image, StyleSheet, ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header';

export default function AboutUsScreen() {
  return (
    <>
    <LinearGradient  style={styles.container}colors={['#43cea2','#185a9d']}>
      <Header>About Us</Header>
      <View>
        <Image  style={{width:'50%',height:'35%',marginLeft:'25%',marginTop:'2%'}} source={require('../../assets/logo.jpg')}/>
      </View>
        <View style={{position:'relative',marginTop:-127,justifyContent:'center',alignItems:'center'}}>
          <Image style={styles.image} source={require('../../assets/guide.jpeg')}/>
          <Text style={{textAlign:'center', 
            fontWeight:'bold', 
            color:"white",
            right:10
            }}>{'\t'}{'\t'}Project Guide{'\n'}
             {'\t'}{'\t'}{'\t'}Miss Pema Yangden {'\n'}
             {'\t'}{'\t'}{'\t'}{'\t'}{'\t'}pemayangden.gcit@rub.edu.bt
        </Text>
        </View>
        <View style={{position:'absolute',left:40,marginTop:320}}>
          <Image style={styles.image} source={require('../../assets/ste.jpg')}/>
          <Text style={{textAlign:'center', 
            fontWeight:'bold', 
            color:"white",
            right:40
          }}>{'\t'}{'\t'}Front-End Developer{'\n'}
          {'\t'}{'\t'}Mr. Sonam Tshering{'\n'}
        </Text>
        </View>
        <View style={{position:'absolute',left:230,marginTop:320}}>
          <Image style={styles.image} source={require('../../assets/ata.jpg')}/>
          <Text style={{textAlign:'center', 
            fontWeight:'bold', 
            color:"white",
            right:50
          }}>{'\t'}{'\t'}Front-End Developer{'\n'}
          {'\t'}{'\t'}Mr. Kuenzang Tshering{'\n'}
        </Text>
        </View>
        <View style={{position:'absolute',left:230,marginTop:450}}>
          <Image style={styles.image} source={require('../../assets/boma.jpg')}/>
          <Text style={{textAlign:'center', 
            fontWeight:'bold', 
            color:"white",
            right:50
          }}>{'\t'}{'\t'}{'\t'}Back-End Developer{'\n'}
          {'\t'}{'\t'}Miss Boma Devi Rai{'\n'}
        </Text>
        </View>
        <View style={{position:'absolute',left:40,marginTop:450}}>
          <Image style={styles.image} source={require('../../assets/pur.jpg')}/>
          <Text style={{textAlign:'center', 
            fontWeight:'bold', 
            color:"white",
            right:40
          }}>{'\t'}{'\t'}Back-End Developer{'\n'}
          {'\t'}{'\t'}Mr. Purna Kumar Limbu{'\n'}
        </Text>
        </View>
    </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  image:{
    height:80,
    width:80,
    resizeMode: "cover",
    borderRadius: 80/2,
  }
})