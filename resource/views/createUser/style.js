import { StyleSheet,Dimensions } from 'react-native';
import { styled } from "styled-components/native";
const { width } = Dimensions.get('window');

const size = width * 0.8; // 70% da largura da tela

const size002 = width * 0.6; // 20% da largura da tela
// const size003 = width * 0.3; // 20% da largura da tela

export const ButtonTouchableHighlight=styled.TouchableHighlight`
    width: ${size002}px; 
    height: ${size002}px;
    border-radius: ${size002 / 2}px;
    justify-content: center;
    align-items: center;
    background-color:white;

`;

export const Body=styled.View`
    flex:1;    
    background: #dbeafa;
`;



export const ViewForm=styled.View`
    flex:1.9;
    /* padding:15px; */
    padding-top:3%;
    padding-bottom:17%;
    background-color: white;
    border-top-left-radius: 15px;
    border-top-right-radius:15px;
    margin-top: 28px;
    `;
export const InputText=styled.TextInput`
   background:transparent;
    width: 100%;
    color: #7bdaef;
    padding: 10px;
    border: none;
    border: 1px solid #7bdaef;
    margin-bottom: 5px;
    border-radius: 5px;
`;
export const Label=styled.Text`
   color:white;
`;

export const DivInput=styled.View`
   padding:5px;
   padding-top:4px;
   padding-bottom:5px;
`;
export const Aside=styled.View`
   padding:5px;
   flex:0.9;
   flex-direction: row;
   justify-content: center;
`;

export const DivButton=styled.View`
   flex: 1;
   flex-direction: row;
   justify-content: space-between;
   padding-left: 5px;
   padding-right: 5px;
   padding-top:15px;
`;
export const ButtonCreate=styled.TouchableHighlight`
   background-color: #00a65a;
   align-items: center;
   padding: 0px;
   border-radius: 25px;
   align-items: center;
   justify-content: center;
   width: 180px;  
   
`;
export const ButtonHome=styled.TouchableHighlight`
    background-color: #59d6f5;
   align-items: center;
   padding: 0px;
   border-radius: 25px;
   align-items: center;
   justify-content: center;
   /* width: 110px; */
   
`;
export const ButtonBackSignIn=styled.TouchableHighlight`
    background-color: #3c8dbc;
   align-items: center;
   padding: 0px;
   border-radius: 25px;
   align-items: center;
   justify-content: center;
   /* width: 110px; */
   
`;




