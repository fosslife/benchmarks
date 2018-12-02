const polka = require('polka');

polka().get('/', (req, res) => {
    res.end('hello World');
}).listen(8080, err => {
    if (err) throw err;
    console.log(`running on port 8080`)
})

/*


--cluster--


*/