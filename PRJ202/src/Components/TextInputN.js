import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import { TextInput as Input } from 'react-native-paper';
import {theme} from '../core/theme'

export default function TextInputN({errorText, description, ...props}){
    return (
        <View style={styles.container}>
            <Input
                left={<Input.Icon name='account-circle'/>}
                backgroundColor='#fff'
                style={styles.input}
                selectionColor={theme.colors.primary}
                underlineColor="transparent"
                made="outlined"
                {...props}
            />
            {description && !errorText ? (
                <Text style={styles.description}>{description}</Text>

            ) : null}
            {errorText ? <Text style={styles.error}>{errorText}</Text>: null}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 12,
},
input: {
    backgroundColor: theme.colors.surface,
    borderWidth:1,
    borderColor:'#ccc'
},
description: {
    fontSize: 13,
    color: theme.colors.tint,
    paddingTop: 8,
},
error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,

},
})