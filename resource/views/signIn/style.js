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




export const ButtonTouchableHighlight=styled.TouchableHighlight`
    width: ${size002}px; 
    height: ${size002}px;
    border-radius: ${size002 / 2}px;
    justify-content: center;
    align-items: center;
    background-color:white;

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
    flex:8;
    padding:10px;
    padding-top:4%;
    padding-bottom:17%;
    /* background-color: white; */
    border-top-left-radius: 20px;
    border-top-right-radius:20px;
   
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
   color: #707171ff;
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
export const DivAntherAcess=styled.View`
   /* padding:5px; */
   /* background-color: white; */
   margin-top: 11px;
   margin-bottom: 8px;
   border: 0.5px solid #7bdaef;;
`;
export const ButtonCreate=styled.TouchableHighlight`
   background-color: #f94877;
   align-items: center;
   margin-top: 10px;
   margin-bottom: 7px;
   padding-top: 15px;
   padding-bottom: 15px;
   padding-right: 10px;
   border-radius: 20px;
   
   
   
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
export const ButtonEmail=styled.TouchableHighlight`
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










