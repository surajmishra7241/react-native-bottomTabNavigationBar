import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native'

export default function PostScreens() {
    return (
        <View style={styles.container}>
            <Text>PostScreens</Text>
            <Button title='click here'
            onPress={()=>alert("Post Here")}/>
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
