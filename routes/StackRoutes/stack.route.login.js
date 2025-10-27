import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from 'react'
import SingIn from "../../resource/views/signIn";
import ErrorSignIn from "../../resource/views/errorSignIn";
import CreateUser from "../../resource/views/createUser";

export default function StackRouteLogin({ setLogin,login }) {
  const Stack =createNativeStackNavigator()
  // const [login,setLoginLocal]=useState(login)
  function checkScreen(){
    if (login =="ErrorSignIn" ) {
      return(
          <Stack.Screen
          name="ErrorSignIn"
            // component=
            options={{
            headerShown:false
          }}>  
          { props => <ErrorSignIn {...props} setLogin={setLogin} login={login} />}  
        </Stack.Screen>

      )
    }if (login =="CreateUser" ) {
      return(
        <Stack.Screen
          name="CreateUser"
          // component=
          options={{
          headerShown:false
          }}>  
        { props => <CreateUser {...props} setLogin={setLogin} login={login} />}  
      </Stack.Screen>

      )
    } else {
      return(

          <Stack.Screen
          name="SingIn"
          // component=
          options={{
          headerShown:false
          }}>  
        { props => <SingIn {...props} setLogin={setLogin} login={login} />}  
      </Stack.Screen>
      )
    }
  }
  return (
    <Stack.Navigator>
      {checkScreen()}
    </Stack.Navigator>
  )
}