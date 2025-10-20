import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Feather,FontAwesome,MaterialIcons,FontAwesome5,MaterialCommunityIcons} from "@expo/vector-icons";
import Home from '../../resource/views/home';
import Scanner from '../../resource/views/search';
import { Dimensions } from 'react-native';
import Login from '../../resource/views/foundBy';
import User from '../../resource/views/user';
import { useState } from 'react';
import SingIn from '../../resource/views/signIn';

const Tab =createBottomTabNavigator();
const { width } = Dimensions.get('window');
const size = width * 0.8; // 20% da largura da tela
const size01 = width * 0.1; // 20% da largura da tela
export default function TabRouter() {
  const[sing, setSing]=useState(true)
  const closeAccount=()=>{
      console.log(123);
      }
  
  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{
      backgroundColor:'#00c0ef',
      position:'absolute',
      bottom:0,
      borderTopLeftRadius:50,
      borderTopRightRadius:50,
      // paddingLeft:20,
      // paddingRight:20,
      // width:size,
      // height:60,
      // marginLeft:size01,
      
    }}}>
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarIcon:({color,size})=><FontAwesome name="home" size={35} color={color} />,
              tabBarLabelStyle:{color:'white',fontSize:15},
              headerShown:false,
              tabBarShowLabel:false,
          // tabBarActiveBackgroundColor:'#357ca5',
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'#357ca5',
          // tabBarItemStyle:{
          //   borderRadius:50,

          // }
        }}
      />
    
      <Tab.Screen
        name="Screem"
        component={Scanner}
        onPress={()=>closeAccount()}
        options={{
          tabBarIcon:({color,size})=><MaterialIcons name="search" size={35} color={color} />,
          tabBarLabelStyle:{color:'white',fontSize:15},
          headerShown:false,
          tabBarShowLabel:false,
          // tabBarActiveBackgroundColor:'#357ca5',
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'#357ca5',
          // tabBarItemStyle:{
          //   borderRadius:50,
          // }
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
      tabBarIcon:({color,size})=><MaterialCommunityIcons style={{padding:0}} name="account-plus" size={35} color={color} />,
          tabBarShowLabel:false,
          headerShown:false,
          // tabBarActiveBackgroundColor:'#357ca5',
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'#357ca5',
          // tabBarItemStyle:{
          //   borderRadius:50,
          // }
          

          
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
      tabBarIcon:({color,size})=><FontAwesome name="user" size={35} color={color} />,
          tabBarShowLabel:false,
          headerShown:false,
          // tabBarActiveBackgroundColor:'#357ca5',
          tabBarActiveTintColor:'#fff',
          tabBarInactiveTintColor:'#357ca5',
          // tabBarItemStyle:{
          //   borderRadius:50,
          // }
          

          
        }}
      />

    <Tab.Screen
        // name="singIn"
        // component={SingIn}
        options={{
          tabBarIcon:({color,size})=><FontAwesome name={
            sing!=true ? 
            "sign-in"
            :
            "sign-out" 
          }
          
        size={35} color={color} />,
        tabBarShowLabel:false,
        headerShown:false,
        // tabBarActiveBackgroundColor:'#357ca5',
        tabBarActiveTintColor:'#fff',
        tabBarInactiveTintColor:'#357ca5',
       

          
        }}
       
      />
     
    </Tab.Navigator>
  )
}
