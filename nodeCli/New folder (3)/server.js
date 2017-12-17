var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;


app.all('/api/task/:id', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });


var index = require('./routes/index');
var tasks = require('./routes/tasks');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join('client/public')))

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));


app.use('/',index);
app.use('/api',tasks);



app.listen(port ,function(){
console.log('server is running on ' + port);
})

