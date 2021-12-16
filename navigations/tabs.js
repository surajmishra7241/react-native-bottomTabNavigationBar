import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import HomeScreens from '../screens/homeScreens';
import FindScreens from '../screens/findScreens';
import ChatScreens from '../screens/chatScreens';
import PostScreens from '../screens/postScreens';
import Settings from '../screens/settings';
const Tab= createBottomTabNavigator();
 const Tabs=()=> {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{
                position:'absolute',
                bottom:15,
                left:20,
                right:20,
                elevation:0,
                backgroundColor:'#ffffff',
                borderRadius:10,
                hight:'100',
                paddingBottom:10,
                
        ...styles.shadow

            }
        }}
        >
            <Tab.Screen name='Home'component={HomeScreens}
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image source={require('../assets/home.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? '#e32f45':'#748c94'
                            }}

                        />
                            <Text style={{color:focused ?'#e32f45':'#748c94',fontSize:12}}>Home</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Find'component={FindScreens}
                 options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image source={require('../assets/search.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? '#e32f45':'#748c94'
                            }}

                        />
                            <Text style={{color:focused ?'#e32f45':'#748c94',fontSize:12}}>Find</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Post'component={PostScreens}
                 options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image source={require('../assets/plus.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? '#e32f45':'#748c94'
                            }}

                        />
                            <Text style={{color:focused ?'#e32f45':'#748c94',fontSize:12}}>Post</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Settings'component={Settings}
                 options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image source={require('../assets/setting.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? '#e32f45':'#748c94'
                            }}

                        />
                            <Text style={{color:focused ?'#e32f45':'#748c94',fontSize:12}}>Settings</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Chat'component={ChatScreens}
                 options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image source={require('../assets/chat.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor:focused ? '#e32f45':'#748c94'
                            }}

                        />
                            <Text style={{color:focused ?'#e32f45':'#748c94',fontSize:12}}>Chat</Text>
                        </View>
                    )
                }}
            />


        </Tab.Navigator>
    )
}
export default Tabs;
const styles = StyleSheet.create({
    shadow:{
        shadowOffset:{
                    width:0,
                    height:10
                },
                shadowColor:'#7F5DF0',
                shadowOpacity:0.5,
                shadowRadius:3.5,
                elevation:5,
    }
})
