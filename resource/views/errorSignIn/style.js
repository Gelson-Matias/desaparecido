import { StyleSheet,Dimensions } from 'react-native';
import { styled } from "styled-components/native";

export const Body=styled.View`
    flex:1;    
    background: #dbeafa;
`;

export const ViewForm=styled.View`
    flex:1;
    padding:10px;
    align-self: center;
    justify-content: center;
   

`;

export const ButtonNumber=styled.TouchableHighlight`
   background-color: #f39c12;
   align-items: center;
   padding: 20px;
   border-radius: 20px;
   margin-top: 5px;
`;