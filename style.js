import { StyleSheet } from 'react-native';
import { styled } from "styled-components/native";

export const Body=styled.View`
    flex:1;    
    background: #00131A;
`;
export const Header=styled.View`
    /* background:#011C22; */
    flex:1;
    /* border-bottom-right-radius: 100px;
    border-top-left-radius: 0px; */
    padding:0px
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
   padding-bottom: 15%;
   
`;

export const ViewFormLoginf=styled.View`
    flex:1.3;
    padding:20px;
    padding-top:25%;
    background-color: white;
    border-top-left-radius: 15px;
    border-top-right-radius:15px;
    `;
export const InputText=styled.TextInput`
    background:#FFFFFF;
    border-radius: 4px;
    width:100%;
    height: 38px;
    padding:5px
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
export const ButtonLogin=styled.TouchableHighlight`
   background-color: #091D3D;
   align-items: center;
   border-radius: 5px;
   padding: 3%;
`;
export const ButtonWhatApp=styled.TouchableHighlight`
   background-color: #4080DF;
   align-items: center;
   border-radius: 5px;
   padding: 3%;
`;




