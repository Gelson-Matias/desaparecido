import { View,StyleSheet,Dimensions,ImageBackground, ScrollView, Text} from 'react-native'
import { Body, ViewForm,ButtonNumber } from './style'
import { Feather,FontAwesome,MaterialIcons,FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react'

const { width,height } = Dimensions.get('screen');
const image = require('../../../public/img/top-login.png')
const image1 = require('../../../public/img/bottom.png')
export default function CreateUser({ setLogin,login }) {
  return (
  <Body>
            <ImageBackground
            source={image} // substitua com o seu caminho correto
            style={styles.topImage}
            resizeMode="cover"
            ></ImageBackground>
                <ViewForm>
                     
                </ViewForm>

            <ImageBackground
                source={image1} // substitua com o seu caminho correto
                style={styles.BottomImage}
                resizeMode="cover"
            ></ImageBackground>
    </Body>
  )
}

const styles = StyleSheet.create({
  
  topImage: {
    width: width,
    height: width * 0.27, // define a altura proporcional à largura (25% aqui)
    justifyContent: 'center',
   
  },BottomImage:{
    position:'absolute',
    bottom:0,
    width: width,
   
    height: width * 0.27, // define a altura proporcional à largura (25% aqui)
    justifyContent: 'center',
    
  }
})
