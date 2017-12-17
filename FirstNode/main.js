
                      //it make a simple hhtp server which run on browser on local host: 3000
                      
// const http = require('http');
  

// http.createServer((req, res) => {
//     res.end('test');
// })
// .listen(3000, () => {
//     console.log('running')
// });


// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(3000, () => {
//   console.log(`Server running at http://localhost:3000/`);
// });

// console.log(http)




var http = require('http');


http.createServer((req, res) => {
    console.log('abcd')
    // var a = 0;

    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>first line</h1>')
    res.write('second line')
    
    setInterval(function(){
        // res.write((a++).toString());
        res.write('</br>')
    }, 5000);
    res.end('hello world')
})
.listen(3000, () => {
    console.log('running')
});
