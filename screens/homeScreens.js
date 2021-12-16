import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

export default function HomeScreens() {
    return (
        <View style={styles.container}>
            <Text>HomeScreens</Text>
            <Button title='click here'
            onPress={()=>alert("Welcome ")}/>
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
