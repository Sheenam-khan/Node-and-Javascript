const mysql = require('mysql');
 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'manas'
  })

connection.connect((err)=>{
if(err) throw err;
connection.query("SELECT * FROM emp",(err,rows)=>{
    if(err) throw err;
    console.log(rows[1].name);

})
connection.end();
})

