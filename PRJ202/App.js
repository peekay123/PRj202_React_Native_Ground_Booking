import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import StackNavigation from '././src/Components/StackNavigation';
import firebase from 'firebase/app';
import { firebaseConfig } from './src/core/config';
import SplashScreen from './src/Screens/SplashScreen';
import {Provider as PaperProvider} from 'react-native-paper'


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <PaperProvider>
      {
        loading ?
        <SplashScreen/>
        :
        <StackNavigation/>
      }
      
    </PaperProvider>
  )
}
