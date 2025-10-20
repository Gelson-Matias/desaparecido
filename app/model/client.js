import * as SQLite from 'expo-sqlite';
import db from '../../config/database';


const createTbClinte={
    
    createTB:function(){
        db.transaction(tx=>{
            // tx.executeSql('DROP TABLE Cliente',
            tx.executeSql('CREATE TABLE IF NOT EXISTS Cliente(id_cliente INTEGER PRIMARY KEY  AUTOINCREMENT, name_cliente VARCHAR(45) NOT NULL, qr_code_client VARCHAR(45) NOT NULL,estado VARCHAR(45) NOT NULL);',
            [],
            (tx, result)=>{
                console.log("TB cliente create with success")
            },
            error=>console.log("error to create TB cliente "+error.message))
        })
        console.log("123");
    },
    ExploInserClienteTB:function(){
        db.transaction(tx=>{
            tx.executeSql('INSERT INTO Cliente(name_cliente,qr_code_client,estado) VALUES(?,?,?);',
            ['Wilson de  Matias Oliveira','111000016516007','1'],
            (tx, result)=>{
                console.log(result.rows);
            },error=> console.log(error))
        })
    }
    
}
export  default createTbClinte;