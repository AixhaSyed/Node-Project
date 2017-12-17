var $ = require('jquery');
const http = require('http');
const fs = require('fs');
const qs = require('querystring');
var url = require('url');
var filename;
// var filename;
var message;

let files = [];

http.createServer((req, res)=>{
    let urlArray = req.url.split("?");
    let url = urlArray[0];
    let qp = {};
    if(urlArray[1]){
        qp = qs.parse(urlArray[1]);
        // console.log(qp);
    }
    if(url.indexOf("/static")==0){
         fs.readFile(__dirname + url, (err, data) => {
            if (err) {
                console.log(err)
                res.write(err)
            } else {
                // console.log(data)
                res.write(data);
            }
            res.end();
         }
         )}
      

    else if(url == '/home' || url == '/' || url == '/index'){
            res.setHeader('Content-Type', 'text/html');
        // res.write('<h1>home</h1>')
        fs.readFile('./static/index.html', (err, data) => {
            if (err) {
                // console.log(err)
                res.write(err)
            } else {
                console.log('main else')
  
              console.log(qp);
                if(qp.save){
                console.log('if')
                
                    fs.writeFile('save/'+qp.save+'.txt',qp.text,(err)=>{
                        if(err){console.log(err)}
                        else{
                            let flag = false;
                            console.log("saved");
                            data = (data.toString()).replace(/{{fileName}}/g, qp.save);
                            data = (data.toString()).replace(/{{text}}/g, qp.text);
                            res.write(data);
                             res.end();                            
                        }
                    })
                } else if (qp.download){
                     fs.readFile('save/' + qp.download, function (err, content) {
            if (err) {
                console.log(err);
            } else {
                console.log('d el')
                
                res.setHeader('Content-disposition', 'attachment; filename='+qp.download);
                res.end(content);
            }
        });
                } 
           
                else{
                console.log('else')
                    data = (data.toString()).replace(/{{fileName}}/g, '');
                            data = (data.toString()).replace(/{{text}}/g, '');
                    res.write(data);    
                    res.end();
                                    
                }
            }
        })
          if(req.method == 'POST', res){
            var body = '';
            var post = '';
            req.on('data', function(data){
                body += data;
                message = qs.parse(body);
                message = message.text;

            
            
        })
        }

            
           if(req.url == '/upload'){
        if(req.method == 'POST'){
            var body = '';
            req.on('data', function(data){
                body += data;
                var x = body.length - 46;
                body = body.slice(142, x);
                console.log('############### Data ##########', body);
                res.writeHead(200)
                res.end(body);
                console.log(body)
            })
    
            }
        }
            }
    else{
            res.end("404");        
    }
        
        
    
}).listen(3000)
        
    
    
        
