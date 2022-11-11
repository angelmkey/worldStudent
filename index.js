'use strict';

const fs = require('fs');
global.student = [];

const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

var puerto =  process.env.PORT || 3000;

server.use(express.static('public'));

server.get("/",(req, res) =>{
    data = {};
    data.pry = "JSON on server";
    data.version = "0.001 alpha";
    res.json(data);
});

server.get("/students/",(req, res) =>{
    fs.readFile('student.json', (err, data) => {
        if (err) {
            console.log("Error al consultar archivo: " + err.message);
        }
        else{
            student = JSON.parse(data);
            res.json(student);
        }
    });
});

server.post("/students/",(req, res) => {
    var data = req.body;
    fs.writeFile ('student.json', JSON.stringify(data), (err) => {
        if (err) {
            var r  = {}
            r.satus ="Error";
            r.message = err.message;
            r.json(r);
        }
        else {
            var r = {};
            r.message = "Data written";
            res.json(r);
        }
    });
});

server.listen(puerto,()=>{
    console.log("Escuchando peticiones en el puerto " + puerto);
})