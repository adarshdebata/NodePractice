// cretaing database

// const { Client } = require("pg");

// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "postgres",
//   password: "root",
//   port: 5432,
// });
// client.connect((err) => {
//   if (err) {
//     console.error("Connection error", err.stack);
//   } else {
//     console.log("Connected to the database");
//   }
//   const createDbQuery = "CREATE DATABASE customer";
//   client.query(createDbQuery, (err, res) => {
//     if (err) {
//       console.error("Error creating database", err.stack);
//     } else {
//       console.log("Database created successfully");
//     }

//     client.end();
//   });
// });


// ******************************************************************************************

const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "customer",
  password: "root",
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.error("Connection error", err.stack);
  } else {
    console.log("Connected to the database");
  }
});
//create Table
// const createtableQuery = "CREATE TABLE customer (name VARCHAR(255), address VARCHAR(255))"
// client.query(createtableQuery, (err, res)=>{
//     if (err) {
//         console.error("Error creating table", err.stack);
//       } else {
//         console.log("Table created successfully");
//       }
// });

// ********************************************************************************
// insert into
const inserttableQuery = "INSERT INTO customer (name, address) VALUES ('Adarsh', 'K7 523'), ('Random', 'K7 521'), ('Random2', 'K9 525')"
client.query(inserttableQuery, (err, res)=>{
    if (err) {
        console.error("Errror", err.stack);
      } else {
        console.log("Insert Successfully");
      }
});

// Select 
// const selecttableQuery = "Select * From customer"
// client.query(selecttableQuery, (err, res)=>{
//     if (err) {
        
//         console.error("Errror", err.stack);
//       } else {
//         console.log("Select Successfully");
//         console.log(res.rows);
//       }
//       console.log(res.rows[2].address);
// });

// where
// const selecttableQuery = "SELECT * FROM customer WHERE name LIKE 'A%'"
// client.query(selecttableQuery, (err, res)=>{
//     if (err) {
        
//         console.error("Errror", err.stack);
//       } else {
//         console.log("Select Successfully");
//         console.log(res.rows);
//       }
// });

// Order By
const selecttableQuery = "SELECT * FROM customer ORDER BY name DESC"
client.query(selecttableQuery, (err, res)=>{
    if (err) {
        
        console.error("Errror", err.stack);
      } else {
        console.log("Ordered List");
        console.log(res.rows);
      }
});

// Delete 
const deletetableQuery = "DELETE FROM customer WHERE name = 'Random2' "
client.query(deletetableQuery, (err, res)=>{
    if (err) {
        
        console.error("Error", err.stack);
      } else {
        console.log("Delete Successfully");
        console.log(`Deleted : ${res.rowCount}`);
      }
});