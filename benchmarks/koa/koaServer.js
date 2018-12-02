const koa = require('koa');
const app = new koa();

app.use(async ctx => {
    ctx.body = "Hello World";
})

app.listen(8080, ()=>{
    console.log(`listening on port 8080`)
})


/*


-- clster



*/