import mysql from "mysql"

export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Shruti@15",
    database:"blog"
})