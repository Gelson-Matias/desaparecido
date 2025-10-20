import * as SQLite from 'expo-sqlite';
const db=SQLite.openDatabase('gestConta');
console.log("DB criada");

// const ConnectDatabase={
//     createDB: function(){
//         db = SQLite.openDatabase({
//             name: 'gestConta',
//             location: 'default'
//         },
//         () => {
//             alert("DB")
//             console.log("Database connected!")
//         },
//         error => console.log("Database error", error) //on error
//        )   
//        return db;    
//     }
   
// }

export default db;