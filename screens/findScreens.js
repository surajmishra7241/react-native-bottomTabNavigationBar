import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

export default function FindScreens() {
    return (
        <View style={styles.container}>
            <Text>FindScreens</Text>
            <Button title='click here'
            onPress={()=>alert("You Can Search Here")}/>
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
