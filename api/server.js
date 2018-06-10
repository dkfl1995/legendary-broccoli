const express = require('express');
const mysql = require('mysql');
const axios = require('axios');
const recipes = require('./routes/recipes');
const users = require('./routes/users');
const db = require('./util/db');
const pool = db.getPool(); 
const cors = require('cors'); 
const bodyParser = require('body-parser');

const PORT = process.env.port || 5000;

let app = express();

app.use(bodyParser());

app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/recipe', recipes);
app.use('/user', users);



app.get('/recipes', (req, res) => {
    var getQuery = `SELECT * FROM recipes`;
    pool.getConnection((err, connection) => {
        if(err){
            console.log(err);
        }else{
            console.log("connecting and quering");
        }
        connection.query(getQuery, (err, result) => {
            if(err){
                console.log(err);
                connection.query(`CREATE TABLE recipes(ID int NOT NULL PRIMARY KEY, TITLE varchar(200), IMG varchar(200), INFO LONGTEXT)`, (err, result) => {
                    if(err) console.log(err);
                    console.log(result);
                    res.json({type: "success", code: 200, data: result});
                });
            }
            res.json({type:"success", code: 200, data: result});
            if(!result){
                console.log("zero");
            } 
            connection.release();
        });
    });
});

app.listen(PORT, err => {
    err? console.log(err): console.log('Started at ' + PORT);
});