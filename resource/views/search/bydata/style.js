import { StyleSheet,Dimensions } from 'react-native';
import { styled } from "styled-components/native";

const { width } = Dimensions.get('window');
const size = width * 0.8; // 70% da largura da tela
const size001 = width * 0.2-15; // 20% da largura da tela

export const Body=styled.View`
    flex: 1;
    background: #dbeafa;
    padding-top: 15px;
    padding-left: 5px;
    padding-right:5px;
`;
export const InputSearch=styled.TextInput`
    background:transparent;
    border-bottom-color:rgb(122, 122, 122);
    border-bottom-width: 1px;
    border-radius: 5px;
    width:${size}px;
    height: 40px;
    padding:5px;
    font-size: 18px;
`;
export const Label=styled.Text`
   color:white;
`;

export const DivInput=styled.View`
   padding:0px;
   padding-right:10px
`;

export const DivButtomSearch=styled.View`
   flex: 1;
   padding: 0px;
   margin: 0px;
`;
export const ButtonSearch=styled.TouchableHighlight`
   background-color: #D5B95C;
   align-items: center;
   border-radius: 5px;
   /* width:50%; */
   height: 40px;
   padding:5px
`;
export const Header=styled.View`
  flex-direction: row;
padding-top: 10px;
`;

export const ButtonTouchableHighlight=styled.TouchableHighlight`
    position: absolute;
    bottom: -150px;
    right: 3px;
    width: ${size001}px; 
    height: ${size001}px;
    border-radius: ${size001 / 2}px;
    justify-content: center;
    align-items: center;
    background-color: #5468FF;

`;
export const ButtonTouch=styled.TouchableHighlight`
    position: absolute;
    bottom: 100px;
    right: 3px;
    width: ${size001}px; 
    height: ${size001}px;
    border-radius: ${size001 / 2}px;
    justify-content: center;
    align-items: center;
    background-color: #5468FF;

`;
