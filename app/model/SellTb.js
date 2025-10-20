import * as SQLite from 'expo-sqlite';
import db from '../../config/database';


const createTbSell={
    createTB:function(){
        db.transaction(tx=>{
            // tx.executeSql('DROP TABLE Sells',
            tx.executeSql('CREATE TABLE IF NOT EXISTS Sells(id_sell INTEGER PRIMARY KEY  AUTOINCREMENT,id_cliente INTEGER NOT NULL,id_user INTEGER NOT NULL,date DATE NOT NULL DEFAULT CURRENT_TIMESTAMP, valor DOUBLE NOT NULL, created_date VARCHAR(45));',
            [],
            (tx, result)=>{
                console.log("TB Sells create with success")
            },
            error=>console.log("error to create TB Sells "+error.message))
        })

    },

    ExploInserSellTB:function(){
        let getDate=new Date();
        let month=getDate.getMonth()>=1 && getDate.getMonth()<=9 ? "0"+getDate.getMonth() : getDate.getMonth(); 
        let setDate= getDate.getDate()+"/"+month+"/"+getDate.getFullYear();
        db.transaction(tx=>{
            tx.executeSql('INSERT INTO Sells(id_cliente,id_user,valor,created_date) VALUES(?,?,?,?);',
            [1,1,3300,setDate],
            (tx, result)=>{
                console.log('dados inserido com sucesso TB sell'+result);
            },error=> console.log(error))
        })
    },

}
export  default createTbSell;