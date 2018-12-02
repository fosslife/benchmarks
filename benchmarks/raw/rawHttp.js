const http = require('http');

http.createServer((req, res) => { 
    res.end('hello world')
 }).listen(8080, () => {
    console.log(`listening on 8080`)
});

/**


--cluster--



 */