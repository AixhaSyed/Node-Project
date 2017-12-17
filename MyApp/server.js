
//                      // ye code sahe chal rh h
// app.get ('/', function (req, res) {
//   res.send ('hello world ')
// })

// // app.get('/' , function (req, res) {
// //   res.sendfile('about.html')
// //   // res.send ('home')
// // })

//                      //ye code error de rh h lyk cannot get / 
// app.get('/about' , function (req,res) {
//   console.log('Hello world ')
//   res.send ('about')
  
// })
// app.get('/ab?cd', function (req, res) {
//   res.send('ab?cd')                //access on acd or abcd
// })


// // app.get('/ab+cd', function (req, res) {
// //   res.send('Hello world')               //access on abcd or abbbcd or abbcd or so on
// // })  

// app.get('/home', function(req, res){
//   res.send('hello')
  
// })
 
//  app.get('/random.text', function (req, res) {
//   res.send('random.text')
// })

// app.get('/pq*qr', function (req, res) {
//   res.send('Hyyye Girls ')         //This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
// })

// app.get(/a/, function (req, res) {
//   res.send('/a/')                   //access with any of a letter in route 
// })


// // app.get('/ab(cd)?e', function (req, res) {
// //   res.send('ab(cd)?e')                    //access with abe or abcde
// // })

// app.get(/.*fly$/, function (req, res) {
//   res.send('/.*fly$/')              //access with butterfly or dragonfly but not on butterflymen or dragonflymen 
// })

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })






var express = require('express')
// var router = express.Router()
var app = express()


// app.get ('/', function (req, res) {
//   res.send ('hello world ')

// })
//  app.get('/example/a', function (req, res) {
//   res.send('Hello from A!')
// })
 
 
//  app.get('/example/b', function (req, res, next) {
  // res.send('the response will be sent by the next function ...')
  // alert("hello")
  // document.write("hello world ")
//   next()
// }, function (req, res) {
//   res.send('Hello from B!')
// })

// var cb0 = function (req, res, next) {
//   console.log('CB0')
//   next()
// }

// var cb1 = function (req, res, next) {
//   console.log('CB1')
//   next()
// }

// var cb2 = function (req, res) {
//   res.send('Hello from C!')
// }

// app.get('/example/c', [cb0, cb1, cb2])


// app.route('/book')
//   .get(function (req, res) {
//     res.send('Get a random book')
//   })
//   // .post(function (req, res) {
//   //   res.send('Add a book')
//   // })
//   .put(function (req, res) {
//     res.send('Update the book')
//   })


// var birds = require('./birds')

// // ...

// app.use('/birds', birds)
 
// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })



////Middle ware 


var express = require('express')
var app = express()

// app.get('/', function (req, res, next) {
//   res.send('Hello World!')
// })

// var myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }
// var myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   // res.send("hello")
  
//   next()
// }

// app.use(myLogger)

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })


// var express = require('express')
// var app = express()

// var requestTime = function (req, res, next) {
//   req.requestTime = Date.now()
//   next()
// }

// app.use(requestTime)

// app.get('/', function (req, res) {
//   var responseText = 'Hello World!<br>'
//   responseText += '<small>Requested at: ' + req.requestTime + '</small>'
//   res.send(responseText)
// })

// var mw = require('./Mid.js')

// app.use(mw({ option1: '1', option2: '2' }))






///using Middle ware


var app = express()

// app.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   next()
// })



// app.use('/hello', function (req, res, next) {
//   res.send('hElllo world')
//   console.log('Request Type:', req.method)
//   next()
// })


// app.use('hello', function (req, res, next) {
//   console.log('Request URL:', req.originalUrl)
//   next()
// }, function (req, res, next) {
//   console.log('Request Type:', req.method)
//   next()
// })


// app.get('/user/:id', function (req, res, next) {
//   console.log('ID:', req.params.id)
//   next()
// }, function (req, res, next) {
//   res.send('User Info')
// })

// // handler for the /user/:id path, which prints the user ID
// app.get('/user/:id', function (req, res, next) {
//   res.end(req.params.id)
// })


var app = express()
var router = express.Router()

// predicate the router with a check and bail out when needed
// router.use(function (req, res, next) {
//   if (!req.headers['x-auth']) return next('router')
//   next()
// })

router.get('/', function (req, res) {
  res.send('hello, user!')
})

// use the router and 401 anything falling through
app.use('/admin', router, function (req, res) {
  res.sendStatus(401)
})
app.listen(3000)



























