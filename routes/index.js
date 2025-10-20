import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackRouteLogin from './StackRoutes/stack.route.login';
import TabRouter from './TabRoutes/tab.route';
import { StatusBar, Text, View } from 'react-native';

export default function Routes() {
  const [login,setLogin]=useState(false)
  return (
    <NavigationContainer>
        {login ?
          <TabRouter />
          :    
        <StackRouteLogin setLogin={setLogin}/>
        } 
      <StatusBar
        animated={true}
        backgroundColor="#00c0ef"
      />
    </NavigationContainer>  
  )
}