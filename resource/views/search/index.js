import { View, Text, StyleSheet, Button,Alert, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import {DivInput, InputSearch, Label,Body,DivButtomSearch,ButtonSearch,ButtonTouchableHighlight,ButtonTouch } from './style';
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';
import ByPhoto from './byphoto/index';
import ByData from './bydata/index';
import Header from '../Header';

export default function Scanner() {
  const [buttonColor, setButtonColor]=useState(undefined)
  const [screen, setScreen]=useState(true);
  
  function openScreen(dados){
    dados==true ? setScreen(true) : setScreen(false)
    console.log(dados);
  }
  const ButtonView=()=>{
    return(
      <View style={style.ItemButto}>
          <View style={{paddingRight:10}}>
              <ButtonTouchableHighlight onPress={()=>openScreen(true)}  style={{elevation:8}}>
              <MaterialCommunityIcons name="account-search" size={27}   color={screen==true ? '#ffffff' : '#357ca5'}/>
              </ButtonTouchableHighlight>
          </View>
          <View style={{paddingLeft:10}}>
              <ButtonTouch onPress={()=>openScreen(false)}  style={{elevation:8}}>
                <FontAwesome name="image" size={27} color={screen==true ? '#357ca5' : '#ffffff'}/>
              </ButtonTouch>
          </View>
      </View>
    )
  }
  return (
    <Body>
     <Header MenuName={"Pesquisar por"} HeaderButton={true} ViewButton={ButtonView()}/>
      <View style={{flex:1}}>
          {screen ?
            <ByData/>
            :
            <ByPhoto/>
          }
      </View>
    </Body>
  )
}


const style=StyleSheet.create({
    ItemButto:{
      flexDirection:'row',
      paddingRight:10,
      paddingLeft:10,
      justifyContent:'space-between'
    }

})