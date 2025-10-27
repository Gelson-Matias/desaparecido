import { View,StyleSheet,Dimensions,ImageBackground, ScrollView, Text} from 'react-native'
import React, { useState } from 'react'
import { ButtonCreate,Body, ViewForm,InputText,DivInput,Aside,DivButton,ButtonHome,Label,ButtonBackSignIn } from './style';
import { Feather,FontAwesome,MaterialIcons,FontAwesome5 } from '@expo/vector-icons';



  const checkLogin=()=>{
    setLogin(false)
    console.log(1234)
  }

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
              <Body>
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
                                <View style={{alignItems:'center', padding:15}}>
                                  <FontAwesome name="save" size={25} color="#dbeafa" />
                                      <Text style={{color:'white', fontSize:16, flexDirection:'column',}}>Publicar</Text>
                                </View>
                            </ButtonCreate>
                            <ButtonBackSignIn   onPress={()=>setLogin("SingIn")}>
                                <View style={{alignItems:'center', padding:15}}>
                                  <MaterialIcons name="login" size={25} color="#dbeafa" />
                                      <Text style={{color:'white', fontSize:16, flexDirection:'column',}}>Acesso</Text>
                                </View>
                            </ButtonBackSignIn>
                            <ButtonHome  onPress={()=>setLogin("TabRouter")}>
                                <View style={{alignItems:'center', padding:15}}>
                                  <FontAwesome  name="home" size={25} color="#dbeafa" />
                                      <Text style={{color:'white', fontSize:16, flexDirection:'column',}}>Início</Text>
                                </View>
                            </ButtonHome>
                            
                            
                           </DivButton>
                           <Aside>
                             {/* <Text>Login</Text>
                             <Text>Login</Text>
                             <Text>Login</Text> */}
                           </Aside>
                         </ScrollView>
                       </ViewForm>
                     </Body>

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
