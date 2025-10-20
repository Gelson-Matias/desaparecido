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

export const DivHeader=styled.View`
   /* background:#06C7F2; */
   flex:1;
   /* border-bottom-right-radius: 170px;
   padding:10px;
   padding-left:30px;
   padding-top:170px; */
   justify-content:center;
   flex-direction: row;
   align-items: flex-end;
   padding-bottom: 10%;
   /* font-weight: normal; */
`;

export const ViewForm=styled.View`
    flex:1.9;
    /* padding:15px; */
    padding-top:3%;
    padding-bottom:17%;
    background-color: white;
    border-top-left-radius: 15px;
    border-top-right-radius:15px;
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
   padding:5px;
`;
export const ButtonCreate=styled.TouchableHighlight`
   background-color: #dd4b39;
   align-items: center;
   margin-top: 20px;
   margin-bottom: 10px;
   padding-top: 15px;
   padding-bottom: 15px;
   padding-right: 10px;
   border-radius: 20px;
   
   
   
`;
export const ButtonWhatApp=styled.TouchableHighlight`
   background-color: #4080DF;
   align-items: center;
   border-radius: 5px;
   padding: 3%;
`;




