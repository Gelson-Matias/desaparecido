import { View, Text, TextInput, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { ButtonCreate,Body, ViewForm,InputText,DivInput,Aside,DivButton,DivHeader,Label,ButtonTouchableHighlight } from './style'
import { MaterialCommunityIcons,AntDesign,Feather,FontAwesome,MaterialIcons,FontAwesome5 } from '@expo/vector-icons';
import  Header  from '../Header';
export default function Login(){
  const [login,setLogin]=useState(true)
  const checkLogin=()=>{
    setLogin(false)
    console.log(1234)
  }
  return (
      <Body>
          <Header MenuName={"Procurar por"} />
          <DivHeader>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
              <ButtonTouchableHighlight>
                  <Text style={{color:'white', fontSize:23}}><FontAwesome style={{padding:0}} name="file-image-o" size={50} color="#dbeafa" /></Text>
                </ButtonTouchableHighlight>
              </View>
          </DivHeader>
          <ViewForm>
            <ScrollView style={{}}>
              <DivInput>
                <Label>Nome</Label>
                    <InputText
                    placeholder='Digite o nome de quem procuras'
                  />
                </DivInput>
                <DivInput>
                  <Label>Nº telefone</Label>
                    <InputText
                      placeholder='Digite o número de telefone'
                      keyboardType='numeric'
                  />
                </DivInput>
                <DivInput>
                  <Label>2 Nº telefone</Label>
                    <InputText
                      placeholder='Digite o número de telefone'
                      keyboardType='numeric'
                  />
                </DivInput>
                <DivInput>
                <Label>Bairro</Label>
                    <InputText
                    placeholder='Digite a senha'
                  />
                </DivInput>
              <DivButton>

              <ButtonCreate  onPress={checkLogin}>
                    <Text style={{color:'white', fontSize:20}}>Publicar <FontAwesome style={{padding:0}} name="file-image-o" size={20} color="#dbeafa" /></Text>
                  </ButtonCreate>
              
              </DivButton>
              <Aside>
                {/* <Text>Login</Text>
                <Text>Login</Text>
                <Text>Login</Text> */}
              </Aside>
            </ScrollView>
          </ViewForm>
        </Body>
  )
}