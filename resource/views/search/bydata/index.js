import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {DivInput, InputSearch, Label,Body,DivButtomSearch,ButtonSearch,Header,ButtonTouchableHighlight,ButtonTouch } from './style';
import { MaterialCommunityIcons,FontAwesome } from '@expo/vector-icons';

export default function ByData() {
  const [searchUser, setSearchuser]=useState(undefined)
  const searchBy=()=>{
    console.log(12345);
  }
  return (
    <Header>
        <DivInput>
            <InputSearch placeholder='Pesquisar por'  onChangeText={setSearchuser} />
        </DivInput>
        <DivButtomSearch>
            {/* <Label style={{fontSize:16}}></Label> */}
          <ButtonSearch onPress={searchBy}>
          <MaterialCommunityIcons style={{padding:0}} name="account-search" size={31} color="white" />
          </ButtonSearch>
        </DivButtomSearch>
    </Header>
  )
}