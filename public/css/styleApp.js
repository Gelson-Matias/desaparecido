import { StyleSheet } from 'react-native';
import {styled} from 'styled-components/native';

export const Container=styled.View`
   flex: 1;
   background-color: #e4d5fe;
`;
export const Main=styled.View`
    /* padding: 20px; */
    /* background-color: blue; */
    flex:0.9;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`;
export const Header=styled.View`
    padding: 0px;
    margin: 0%;
    background-color: #e4d5fe;
    flex: 5.8;
    align-content:center;
    justify-content: center;
`;
export const Aside=styled.View`
    z-index: 1;
    padding: 10px;
    background-color: white;
    flex: 5;
    position :absolute ;
    width: 100%;
    bottom: 0px;
    height: 50%;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    transition: all 0,5s;
`;
export const List=styled.View`
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 20px;
    
`;




