import { View, Text, TextInput, Button,Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Body,DivHeader} from './style'
import {FontAwesome} from '@expo/vector-icons';
import Header from '../Header';

export default function User(){
  const [login,setLogin]=useState(true)
  const checkLogin=()=>{
    setLogin(false)
    console.log(1234)
  }
  return (
      <Body>
          
          <DivHeader style={{paddingBottom:10}}>
            <Header MenuName={'Perfil'}/>
          </DivHeader >
        
      </Body>
  )
}