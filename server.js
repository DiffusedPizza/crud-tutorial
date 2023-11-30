const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const app = express()

MongoClient.connect('mongodb+srv://rubenlizardi79:Znl3FhWl3a07N470@cluster0.mevh0pu.mongodb.net/?retryWrites=true&w=majority')
.then(client => {
console.log('Connected to Database')
const db = client.db('star-wars-quotes')
const quotesCollection = db.collection('quotes')

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    db.collection('quotes')
    .find()
    .toArray()
    .then(results => {
      console.log(results)
    })
    .catch(error => console.error(error))
    const cursor = db.collection('quotes').find()
    console.log(cursor)
    res.sendFile( __dirname + '/index.html')
  });

app.post('/quotes', (req, res) => {
    quotesCollection
    .insertOne(req.body)
    .then(result => {
        res.redirect('/')
    })
    .catch(error => console.error(error))
});

app.listen(3000, function () {
    console.log('listening on 3000')
  });

})
.catch(error => console.error(error))




