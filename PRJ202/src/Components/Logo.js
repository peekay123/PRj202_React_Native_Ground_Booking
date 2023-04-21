import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Logo(){
    return <Image source={require("../../assets/logo.jpg")} style={styles.image}/>;
}
const styles = StyleSheet.create({
    image: {
        width: '50%',
        height:'15%',
        marginTop: '20%',
        marginLeft:'25%',
        marginBottom:'10%'
    },
});