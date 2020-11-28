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

app.get('/suggestF', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM suggestF', function (error, results, fields) {
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

app.get('/suggestEx', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM suggestEx', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});

app.get('/Goal', function (req, res) {
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM Goal', function (error, results, fields) {
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
  console.log('Go to http://localhost:3004/suggestF so you can see the data.');
 });
 
 app.listen(3005, () => {
  console.log('Go to http://localhost:3005/suggestEx so you can see the data.');
 });
 
 app.listen(3006, () => {
  console.log('Go to http://localhost:3006/Goal so you can see the data.');
 });
 