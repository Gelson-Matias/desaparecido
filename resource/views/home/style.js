import { StyleSheet,Dimensions } from 'react-native';
import { styled } from "styled-components/native";


const { width,height } = Dimensions.get('window');
const size = width * 0.7; // 20% da largura da tela
const sizeHeight = height * 0.4; // 20% da largura da tela


export const ContainerView=styled.View`
    flex:1;    
    padding-top: 15px;
    /* padding-left: 5px;
    padding-right:5px; */
`;
export const DivViewButtonLogout=styled.View`
    flex-direction: row;
    /* justify-content: space-between; */
`;

export const DivView=styled.View`
    width: ${size}px;
    height: ${sizeHeight}px;
    align-items: center;
    background-color: #ffffff;
    overflow: hidden;
    border-radius: 10px;
    border-width: 5px;
    border-color: white;
    

`;
export const DivInfo=styled.View`
    /* background-color: #00c0ef; */
    padding-left: 15px;
    padding-right: 10px;
    padding-bottom:5px;
    padding-top:10px;
    border-radius: 7px;
    margin-top:30px;
    width: ${size}px;
`;




