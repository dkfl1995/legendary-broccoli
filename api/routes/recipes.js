var express = require('express'); 
var route = express.Router(); 
const db = require('../util/db');
const pool = db.getPool();
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json({ type: 'application/json' });

route.post('/new', jsonParser, (req, res) => {
    res.json(req.params);
    var postQuery = "INSERT INTO recipes SET TITLE = ?, IMG = ?, INFO = ?";
    var recipe = {
        title: req.body.title,
        img: req.body.img,
        info: req.body.info,
    };
    pool.getConnection((err, connection) => {
        console.log(recipe.info);
        if(err) console.log(err);
        connection.query(postQuery, [recipe.title, recipe.img, recipe.info], (err, rows, fields) => {
            console.log("Inserting New recipe");
            if(err) {
                console.log(err);
                res.json(err);
            }
            console.log();
            res.json(rows[0]);
            connection.release();
        });
    });
});

route.put('/edit', (req, res) => {
    var recipe = {
        id: req.body.id,
        title: req.body.title,
        img: req.body.url,
        info: req.body.info
    };
    var putQuery = `UPDATE recipes SET title = ?, img = ?, info = ? WHERE id = ?`;
    pool.getConnection((err, connection) => {
        if(err) console.log(err);
        connection.query(putQuery, [recipe.title, recipe.img, recipe.info, recipe.id], (err, rows, fields) => {
            if(err) console.log(err);
            console.log(rows);
            res.json({type: "success", code: 200, data: rows[0]});
        });
    });
});

route.delete('/delete', (res, req) => {
    var recipe = {
        id: req.body.id
    };
    var deleteQuery = `DELETE FROM recipes WHERE id = ?`;
    pool.getConnection((err, connection) => {
        if(err) console.log(err);
        connection.query(deleteQuery, recipe.id, (err, rows, fields) => {
            if(err) console.log(err);
            res.json({type: "success", code: 200, data: rows[0]});
        });
    });
});

module.exports = route;