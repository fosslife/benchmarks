const app = new (require('foxify'))();

app.get('/', (req, res) => {
    res.end("Hello World!")
});

app.disable("x-powered-by");

app.set("workers", 1);

app.start(()=>
    console.log(`Foxify server running at http://${app.get("url")}:${app.get("port")} (worker: ${process.pid})`));
