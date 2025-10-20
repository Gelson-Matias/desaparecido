import { View, Text, ImageBackground, StyleSheet, Image, TouchableHighlight, FlatList,Dimensions, Animated } from 'react-native'
import React from 'react'
import { ContainerView, DivView, DivViewButtonLogout, DivViewText,DivInfo } from './style'
import { FontAwesome } from '@expo/vector-icons';
import  Header  from '../Header';
const image = require('../../../public/img/ana.png')
const image2 = require('../../../public/img/6.jpg')
const { width,height } = Dimensions.get('screen');
const size = width * 0.7; // 20% da largura da tela
const sizeHeight = height * 0.4; // 20% da largura da tela

const size001 = (width *  0.2-30)/2; // 70% da largura da tela
const size002 = width * 0.2-30; // 20% da largura da tela

const itemSize=width * 0.72;
export default function Home() {
  const scrolllX=React.useRef(new Animated.Value(0)).current;
  const checkPotho=()=>{
    console.log('00213');
  }
  return (
    <View style={styles.container}>
            <Header MenuName={'Principal'}  Load={true} />
         <ContainerView>
          
            <View style={{flex:1}}>
              <Animated.FlatList
                data={[1,1,1,1,1]}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                // decelerationRate={0}
                bounces={false}
                onScroll={Animated.event(
                  [{nativeEvent:{contentOffset:{x:scrolllX}}}],
                  {useNativeDriver:true}
                )}
                scrollEventThrottle={16}
                renderItem={({item,index})=>{
                  const inputRange=[
                    (index-1)*itemSize,
                    index*itemSize,
                    (index+1)*itemSize
                  ]
                  const translateY=scrolllX.interpolate({
                    inputRange,
                    outputRange:[10,-65,0]
                  })
                return(
                  <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    paddingLeft:10, 
                    paddingRight:10
                    }}>
                    <Animated.View style={{
                      width:size,
                      transform:[{translateY}]
                    }}>

                       {/* imagem de quem está a ser procurado */}
                       
                          <DivView  >
                              <Image  source={image2}  style={{
                                  resizeMode:'cover', 
                                  width:size-8,
                                  height:sizeHeight,
                                }}/>
                                
                          </DivView>
                          {/* imagem de quem está a procurar */}
                            <View >
                              <Image source={image}  style={{
                                resizeMode:'cover',
                                width:60,
                                height:60,
                                borderRadius:60,
                                position:'absolute',
                                bottom:-28,
                                zIndex:1,
                                borderColor:'#bcf6ff',
                                borderWidth:2.9,
                                backgroundColor:'white',
                                left:10
                                }}/>
                            </View>
                        
                          <DivInfo>
                              <Text style={{fontSize:20, fontWeight:'bold'}}>RESTAURANTE</Text>
                              <Text numberOfLines={2} style={{fontSize:16, fontWeight:'100'}}>O seu assistente de negócios O seu assistente de negóciosO seu assistente de negóciosO seu assistente de negócios</Text>
                              <DivViewButtonLogout>
                                <View style={{paddingRight:5, paddingTop:5}}>
                                  <TouchableHighlight style={styles.ButtonTouchPhone}>
                                    <FontAwesome style={{paddingTop:5}} name="phone" size={23} color="white" />
                                  </TouchableHighlight>
                                </View>
                                <View style={{paddingRight:5, paddingTop:5}}>
                                  <TouchableHighlight style={styles.ButtonTouchaWhatApp}>
                                    <FontAwesome style={{paddingTop:5}} name="whatsapp" size={25} color="white" />
                                  </TouchableHighlight>
                                </View>
                                <View style={{paddingRight:5, paddingTop:5}}>
                                  <TouchableHighlight style={styles.ButtonTouchaInfor}>
                                    <FontAwesome style={{paddingTop:5}} name="info" size={23} color="white" />
                                  </TouchableHighlight>
                                </View>
                            </DivViewButtonLogout>
                          </DivInfo>
                      </Animated.View>
                  </View>
                )
              }}
              
              
              />
              
            </View>
         </ContainerView>
     
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#dbeafa'
  }, 
  ButtonTouchPhone:{
    width: size002,
    height: size002,
    borderRadius: size001,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998',
  },
  ButtonTouchaWhatApp:{
    width: size002,
    height: size002,
    borderRadius: size001,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1087dd',
  },
  ButtonTouchaInfor:{
    width: size002,
    height: size002,
    borderRadius: size001,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f94877',
  }
  
});