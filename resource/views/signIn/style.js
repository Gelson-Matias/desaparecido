import { StyleSheet,Dimensions } from 'react-native';
import { styled } from "styled-components/native";
const { width } = Dimensions.get('window');
const size = width * 0.8; // 70% da largura da tela
const size002 = width * 0.6; // 20% da largura da tela
// const size003 = width * 0.3; // 20% da largura da tela

export const Body=styled.View`
    flex:1;    
    background: #dbeafa;
`;

export const ViewForm=styled.View`
    flex:8;
    padding:10px;
    padding-top:4%;
    padding-bottom:17%;
    /* background-color: white; */
    border-top-left-radius: 20px;
    border-top-right-radius:20px;
   
    `;

export const ButtonFingerprint=styled.TouchableHighlight`
   background-color: #1087dd;
   align-items: center;
   padding: 15px;
   border-radius: 20px;
   margin-left: 10px;
   
   
`;
export const ButtonNumber=styled.TouchableHighlight`
   background-color: #55acee;
   align-items: center;
   padding: 28px;
   border-radius: 20px;
   margin-bottom: 20px;
   margin-left: 15px;

   
   
`;
export const FullNumber=styled.View`
   background-color: #dbeafa;
   border: 1px #55acee solid;
   align-items: center;
   padding: 0px;
   border-radius: 8px;
   margin-bottom: 20px;
   margin-left: 15px;  
`;
export const ButtonCreateUser=styled.TouchableHighlight`
   background-color: #3b5998;
   align-items: center;
   padding: 15px;
   border-radius: 20px;
   
   
   
`;
export const ButtonWhatApp=styled.TouchableHighlight`
   background-color: #4080DF;
   align-items: center;
   border-radius: 5px;
   padding: 3%;
`;










