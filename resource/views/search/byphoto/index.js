import { View,Text, ImageBackground, StyleSheet, Image, TouchableHighlight, FlatList,Dimensions  } from 'react-native'
import React, { useState } from 'react'
import {Body,DivHeader,ButtonTouchableHighlight } from './style';
import {FontAwesome } from '@expo/vector-icons';


export default function ByPhoto() {
    const searchBy=()=>{
      console.log(12345);
    }
  return (
    <View  style={{flex:1}}>
      <DivHeader>
        <View> 
          <ButtonTouchableHighlight style={{elevation:3}}>
              <Text style={{color:'white', fontSize:23}}><FontAwesome style={{padding:0}} name="file-image-o" size={50} color="#dbeafa" /></Text>
          </ButtonTouchableHighlight>
        </View>
      </DivHeader>
    </View>
  )
}