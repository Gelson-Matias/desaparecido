import { StyleSheet,Dimensions } from 'react-native';
import { styled } from "styled-components/native";
const { width } = Dimensions.get('window');
const size002 = width * 0.7; // 20% da largura da tela

export const DivHeader=styled.View`
   align-items: center;
`;
export const ButtonTouchableHighlight=styled.TouchableHighlight`
    width: ${size002}px; 
    height: ${size002}px;
    border-radius: ${size002 / 2}px;
    justify-content: center;
    align-items: center;
    background-color:white;

`;