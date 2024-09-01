import mysql from "mysql2"

export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Shruti@15",
    database:"blog"
})

db.connect((err) => {
    if (err) {
        console.error("Connection failed: ", err);
    } else {
        console.log("Connected to the MySQL database successfully!");
    }
});