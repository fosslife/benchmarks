const app = require('express')();

app.get('/', (req, res)=>{
    res.end("Hello world");
});

app.listen(8080, ()=>{
    console.log(`listening on 8080...`);
});


/**
 *



--cluster--



 */