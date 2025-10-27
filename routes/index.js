import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackRouteLogin from './StackRoutes/stack.route.login';
import TabRouter from './TabRoutes/tab.route';
import { StatusBar, Text, View } from 'react-native';
import ErrorSignIn from '../resource/views/errorSignIn';

export default function Routes() {
  const [login,setLogin]=useState("SingIn")
  return (
    <NavigationContainer>
        { login =="TabRouter" ?
          <TabRouter setLogin={setLogin} login={login} />
           :    
          <StackRouteLogin setLogin={setLogin} login={login} /> 
        }
      <StatusBar
        animated={true}
        backgroundColor="#00c0ef"
      />
    </NavigationContainer>  
  )
}