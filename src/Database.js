import mysql from "mysql";
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '<password>',//give the password of user
  database : '<database_name>'//database name
});

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   connection.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created",result);
//   });
// });


connection.query(`SELECT * FROM books.persons;`,(err,res)=>{
    if (err) throw err;

  console.log('Number of rows in the current table: ', res);
})

export {connection};