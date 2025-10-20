import * as SQLite from 'expo-sqlite';
import db from '../../config/database';

const createTbUser={
    createTB:function(){
        db.transaction(tx=>{
            // tx.executeSql('DROP TABLE Users',
            tx.executeSql('CREATE TABLE IF NOT EXISTS Users(id_user INTEGER PRIMARY KEY  AUTOINCREMENT, name_user VARCHAR(45) NOT NULL, senha  VARCHAR(45) NOT NULL,telefone INTEGER  NOT NULL,estado VARCHAR(45) NOT NULL);',
            [],
            (tx, result)=>{
                console.log("TB Users create with success")
            },
            error=>console.log("error to create TB Users "+error.message))
        })

    },
    ExploInserUserTB:function(){
        db.transaction(tx=>{
            tx.executeSql('INSERT INTO Users(name_user,telefone,senha,estado) VALUES(?,?,?,?);',
            ['Paulo de  Matias Oliveira',942477116,'1234','1'],
            (tx, result)=>{
                console.log("Usuario explo inserido com sucesso.");
            },error=> console.log(error))
        })
    }
}
export  default createTbUser;