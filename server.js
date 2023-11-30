const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const app = express()

MongoClient.connect('mongodb+srv://rubenlizardi79:Znl3FhWl3a07N470@cluster0.mevh0pu.mongodb.net/?retryWrites=true&w=majority')
.then(client => {
console.log('Connected to Database')
})
.catch(error => console.error(error))

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile( __dirname + '/index.html')
  });

app.post('/quotes', (req, res) => {
console.log(req.body)
});

app.listen(3000, function () {
    console.log('listening on 3000')
  });


