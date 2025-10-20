import {Text, View,Image, Dimensions,StyleSheet, ImageBackground,TouchableHighlight } from 'react-native'
import React from 'react'
const { width,height } = Dimensions.get('screen');
import {FontAwesome} from '@expo/vector-icons';
const image = require('../../public/img/top.png')
const size = width * 1; // 20% da largura da tela

const size001 = (width *  0.2-15)/2; // 70% da largura da tela
const size002 = width * 0.2-15; // 20% da largura da tela



export default function Header({MenuName,Load,HeaderButton,ViewButton}) {
  return (
    <ImageBackground
      source={image} // substitua com o seu caminho correto
      style={styles.topImage}
      resizeMode="cover"
    >
      <View style={{paddingBottom:0,paddingTop:0,justifyContent:'space-between',flex:1,alignItems:'center',flexDirection:'row'}}>
        
          <View style={{paddingLeft:10}}>
            {
            Load==true ? 


            <View style={{paddingRight:10}}>
              <TouchableHighlight  style={styles.ButtonTouchableHighlight} >
              <FontAwesome name="refresh" size={26} color="#fff" />
              </TouchableHighlight>
            </View>
           :
                <Text style={{backgroundColor:'pink',display:'none'}}></Text>
            }
            {
              HeaderButton==true ? 
                ViewButton:
                <Text style={{backgroundColor:'black',display:'none'}}></Text>
            }
            
          </View >
          <View style={{paddingRight:5}}>
            <Text style={styles.title}>{MenuName}</Text>
          </View>
          
      </View>
    </ImageBackground> 
 )}



 const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topImage: {
    width: width,
    height: width * 0.27, // define a altura proporcional à largura (25% aqui)
    justifyContent: 'center',
   
  },
  title: {
    color: '#dbeafa',
    fontSize: 20,
    fontWeight: '800',
  },
  ButtonTouchableHighlight:{
    width: size002,
    height: size002,
    borderRadius: size001,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00c0ef',
    elevation:8

  }
});



