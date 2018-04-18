const express = require('express');
const mysql = require('mysql');
const axios = require('axios');
const db = require('./src/util/db');
const pool = db.getPool();
const cors = require('cors');

const PORT = process.env.port || 5000;

let app = express();
app.use(cors());

app.use(express.static('build'));

app.get('/recipes', (req, res) => {
    var getQuery = `SELECT * FROM recipes`;
    pool.getConnection((err, connection) => {
        if(err){
            console.log(err);
        }else{
            console.log("got recipes");
        }
        connection.query(getQuery, (err, result) => {
            if(err){
                console.log(err);
                connection.query(`CREATE TABLE recipes(ID int NOT NULL PRIMARY KEY, TITLE varchar(200), IMG varchar(200), INFO LONGTEXT)`, (err, result) => {
                    if(err) console.log(err);
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

app.post('/recipes', (req, res) => {
    var postQuery = `INSERT INTO recipes SET ?`;
    var recipe = {
        id: 0,
        title: req.body.title,
        img: req.body.url,
        info: req.body.info
    };
    pool.getConnection((err, connection) => {
        if(err) console.log(err);
        connection.query(postQuery, recipe, (err, result) => {
            if(err) console.log(err);
            res.json({type: "success", code: 200, data: result});
            connection.release();
        });
    });
});

app.put('/recipes', (req, res) => {
    var recipe = {
        id: req.body.id,
        title: req.body.title,
        img: req.body.url,
        info: req.body.info
    };
    var putQuery = `UPDATE recipes SET title = ?, img = ?, info = ? WHERE id = ?`;
    pool.getConnection((err, connection) => {
        if(err) console.log(err);
        connection.query(putQuery, [recipe.title, recipe.img, recipe.info, recipe.id], (err, result) => {
            if(err) console.log(err);
            res.json({type: "success", code: 200, data: result});
        });
    });
});



app.listen(PORT, err => {
    err? console.log(err): console.log('Started at '+PORT);
});

