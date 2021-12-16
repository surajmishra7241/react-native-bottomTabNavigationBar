import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import {View} from 'react-native';
import HomeScreens from '../screens/homeScreens';
import Settings from '../screens/settings';
import PostScreens from '../screens/postScreens';

const Tab=createBottomTabNavigator();
const homeName="HomeScreens";
const setting="Settings";
const postName="PostScreens";
export default function Tabs3(){
    return(
       <NavigationContainer>
           <Tab.Navigator
           initialRouteName={homeName}
           screenOptions={({route})=>({
               tabBarIcon:({focused,color,size})=>{
                let iconName;
                let rn=route.name;
                if(rn===homeName){
                    iconName= focused?'home':'home-outline';
                }
                 else if(rn===setting){
                    iconName= focused?'settings':'settings-outline';
                }
                else if(rn===postName){
                    iconName= focused?'list':'list-outline';
                }
                return <IonIcon name={iconName} size={size} color={color}></IonIcon>
               },
           })}
           tabBarOptions={{
               activeTintColor:'tomato',
               inActiveTintColor:' grey',
               labelStyle:{
                   paddingBottom:10,
                   fontSize:10
               },
               style:{
                   padding:10,
                   height:75
               }

           }}
           >
               <Tab.Screen name={homeName} component={HomeScreens}/>
               <Tab.Screen name={setting} component={Settings}/>
               <Tab.Screen name={postName} component={PostScreens}/>
           </Tab.Navigator>
       </NavigationContainer>
    )
}