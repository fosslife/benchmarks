const app = new (require('foxify'))();

app.get('/', (req, res) => {
    res.end("Hello World!")
});

app.set("workers", 1);

app.start(()=>
    console.log(`Foxify server running at http://${app.get("url")}:${app.get("port")} (worker: ${process.pid})`));

console.log(app.prettyPrint());

/*
dev:
Running 30s test @ http://localhost:3000/
  4 threads and 120 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     3.49ms    0.87ms  29.96ms   96.43%
    Req/Sec     8.72k     1.10k    9.69k    93.92%
  1041094 requests in 30.01s, 133.04MB read
Requests/sec:  34687.30
Transfer/sec:      4.43MB

--cluster
Running 30s test @ http://localhost:3000/
  4 threads and 120 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     1.36ms    1.48ms  94.42ms   95.99%
    Req/Sec    24.18k     2.71k   30.27k    83.67%
  2886582 requests in 30.02s, 368.88MB read
Requests/sec:  96164.25
Transfer/sec:     12.29MB

*/