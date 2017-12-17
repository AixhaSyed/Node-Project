const express = require('express');
const app = express();
const bodyParser= require('body-Parser')
app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())
// app.use (bodyParser.urlencoded({extended:true}))
const MongoClient = require('mongodb').MongoClient


var db

MongoClient.connect('mongodb://Aisha1:jsbank00@ds161630.mlab.com:61630/newdb', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
  
})


app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})





















// app.post('/quotes', (req, res) => {
//   db.collection('quotes').save(req.body, (err, result) => {
//     if (err) return console.log(err)
//     console.log('saved to database')
//     res.redirect('/')
//   })
// })

// app.post('/quotes', (req, res) => {
//   db.collection('quotes').save(req.body, (err, result) => {
//     if (err) return console.log(err)

//     console.log('saved to database')
//     res.redirect('/')
//   })
// })
app.listen(3000, function() {
console.log("app is litening on port 3000")
    
})
    

