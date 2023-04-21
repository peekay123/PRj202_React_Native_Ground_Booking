import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import StackNavigation from './Component/StackNavigation';


import firebase from 'firebase/app';
import { firebaseConfig } from './Core/config';

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
 
   
    <StackNavigation/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
