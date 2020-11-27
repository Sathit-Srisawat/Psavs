//Run node of Customer
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'NSC'
});
const app = express();
app.get('/Personal', function (req, res) {
    connection.getConnection(function (err, connection) {
    connection.query('SELECT * FROM Personal', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
  });
});

app.get('/BMI', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM BMI', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.get('/suggest', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM suggest', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.get('/statusHealth', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM statusHealth', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.listen(3001, () => {
 console.log('Go to http://localhost:3001/Personal so you can see the data.');
});

app.listen(3002, () => {
  console.log('Go to http://localhost:3002/BMI so you can see the data.');
 });

 app.listen(3003, () => {
  console.log('Go to http://localhost:3003/statusHealth so you can see the data.');
 });

 app.listen(3004, () => {
  console.log('Go to http://localhost:3003/suggest so you can see the data.');
 });
 