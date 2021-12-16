import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function ChatScreens() {
    return (
        <View style={styles.container}>
            <Text>ChatScreens</Text>
            <Button title='click here'
            onPress={()=>alert("Welcome to ChatBox")}/>
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
