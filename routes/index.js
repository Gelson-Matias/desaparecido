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
<<<<<<< HEAD
        {login ?
          <TabRouter  setLogin={setLogin}/>
          :    
        <StackRouteLogin setLogin={setLogin}/>
        } 
=======
        { login =="TabRouter" ?
          <TabRouter setLogin={setLogin} login={login} />
           :    
          <StackRouteLogin setLogin={setLogin} login={login} /> 
        }
>>>>>>> DEV-02
      <StatusBar
        animated={true}
        backgroundColor="#00c0ef"
      />
    </NavigationContainer>  
  )
}