import { View,StyleSheet,Dimensions,ImageBackground, ScrollView, Text} from 'react-native'
import { DivAntherAcess,ButtonCreate,Body, ViewForm,InputText,DivInput,Aside,DivButton,DivHeader,Label,ButtonFingerprint,ButtonEmail,ButtonNumber,FullNumber } from './style'
import { Feather,FontAwesome,MaterialIcons,FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react'

const { width,height } = Dimensions.get('screen');
const image = require('../../../public/img/top-login.png')
const image1 = require('../../../public/img/bottom.png')
const size = width * 1; // 20% da largura da tela
let qdtTochNumber=parseInt(0);

export default function SingIn({setLogin}) {
  let fullCredencial=[0,0.1,0.3,0.5,0.6,0.7,0.9,1];
  let [qdtToch,  seQdtToch]=useState(fullCredencial[0]);
  const clainPassword= ()=>{
    qdtTochNumber=parseInt(0)
    seQdtToch(fullCredencial[0])
  }
   const checkLogin=()=>{
      let  index =parseInt(qdtTochNumber=qdtTochNumber+1)
      if (index<=parseInt(7)) {
          seQdtToch(fullCredencial[index])
          console.log("Depos - "+index);
          if (index==parseInt(7)) {
              console.log(188);
              setLogin(true)
          }
      }
   
  }
  return (
      <Body>
             <ImageBackground
                  source={image} // substitua com o seu caminho correto
                  style={styles.topImage}
                  resizeMode="cover"
                ></ImageBackground>
                <View style={{flex:1, justifyContent:'flex-end', alignItems:'center',paddingRight:5,paddingBottom:10 }}>
                   <Text style={{color:'#00c0ef', fontSize:25}}>
                      ACESSO <FontAwesome5 style={{padding:0}} name="key" size={23} color="#00c0ef" />
                   </Text>
                </View>
                  <ViewForm>
                        <ScrollView style={{}}>
                            <View style={{flex:1}} >
                              <View style={{paddingBottom:0, paddingLeft:0,paddingTop:0, flexDirection:'row',flexWrap:'wrap',}} >
                                    <ButtonNumber  onPress={checkLogin}>
                                      <Text style={{color:'white',fontSize:27}}>0</Text>
                                    </ButtonNumber>

                                    <ButtonNumber  onPress={checkLogin}>
                                     <Text style={{color:'white',fontSize:27}}>1</Text>
                                    </ButtonNumber>

                                       <ButtonNumber  onPress={checkLogin}>
                                      <Text style={{color:'white',fontSize:27}}>2</Text>
                                    </ButtonNumber>
                                       <ButtonNumber  onPress={checkLogin}>
                                      <Text style={{color:'white',fontSize:27}}>3</Text>
                                    </ButtonNumber>
                                       <ButtonNumber  onPress={checkLogin}>
                                      <Text style={{color:'white',fontSize:27}}>4</Text>
                                        </ButtonNumber>
                                        <ButtonNumber  onPress={checkLogin}>
                                      <Text style={{color:'white',fontSize:27}}>5</Text>
                                        </ButtonNumber>
                                        <ButtonNumber  onPress={checkLogin}>
                                      <Text style={{color:'white',fontSize:27}}>6</Text>
                                        </ButtonNumber>
                                        <ButtonNumber  onPress={checkLogin}>
                                      <Text style={{color:'white',fontSize:27}}>7</Text>
                                        </ButtonNumber>
                                        <ButtonNumber  onPress={checkLogin}>
                                      <Text style={{color:'white',fontSize:27}}>8</Text>
                                        </ButtonNumber>
                                        <ButtonNumber  onPress={checkLogin}>
                                      <Text style={{color:'white',fontSize:27}}>9</Text>
                                        </ButtonNumber>
                                        <ButtonNumber style={{paddingRight:20,paddingLeft:20, justifyContent:'center',alignItems:'center'}}  onPress={clainPassword}>
                                             <FontAwesome style={{padding:0}} name="eraser" size={28} color="white" />
                                        </ButtonNumber>
                                       <FullNumber style={{}}>
                                         <View style={{margin:0,flex:qdtToch,  borderRadius: 7,backgroundColor:'#55acee',paddingRight:33,paddingLeft:33, justifyContent:'center',alignItems:'center'}} >
                                           {/* <FontAwesome style={{padding:0}} name="key" size={28} color="white" /> */}
                                         </View>
                                             
                                        </FullNumber>
                                  </View>
                              
                          </View>
                           
                          <DivAntherAcess>
                             
                          </DivAntherAcess>
                          <View style={{flex:1,  flexDirection:'row', paddingLeft:8,justifyContent:'space-between'}} >
                              <View style={{flexDirection:'row'}} >
                                    <ButtonEmail  onPress={checkLogin}>
                                    <FontAwesome style={{padding:0}} name="google" size={28} color="#dbeafa" />
                                    </ButtonEmail>

                                    <ButtonFingerprint  onPress={checkLogin}>
                                      <MaterialIcons style={{padding:0}} name="fingerprint" size={28} color="#dbeafa" />
                                    </ButtonFingerprint>
                                  </View>
                              <View style={{justifyContent:'center', alignItems:'center',paddingRight:8}} >
                                <Text style={{color:'#1087dd',fontSize:16}}>Esqueceu as credências ?</Text>
                              </View>
                          </View>
                        </ScrollView>
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