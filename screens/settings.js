import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            <Button title='click here'
            onPress={()=>alert("Settings")}/>
        </View>
    )
}

const styles = StyleSheet.create({
     container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#8fcbbc'
    }
})
