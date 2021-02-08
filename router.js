//Run node of Customer
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'NSCs'
});
const app = express();

app.get('/profile', function (req, res) {
    connection.getConnection(function (err, connection) {
    connection.query('SELECT * FROM profile', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
  });
});

app.get('/patient', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM patient', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.get('/game', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM game', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.get('/note', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM note', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});


app.listen(3001, () => {
 console.log('Go to http://localhost:3001/profile so you can see the data.');
});

app.listen(3002, () => {
  console.log('Go to http://localhost:3002/patient so you can see the data.');
 });
 
 app.listen(3003, () => {
  console.log('Go to http://localhost:3003/game so you can see the data.');
 });

 app.listen(3004, () => {
  console.log('Go to http://localhost:3003/note so you can see the data.');
 });