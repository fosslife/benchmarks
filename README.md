# Node http frameworks benchmarks

 - First thing first, benchmarks are stupid, never judge a framework by it's speed
 - Real life web applications are never just `app.get('/', return "hello world")` So These benchmarks are just for fun, real life speed with complex applications may vary


## Specs:

 - Fedora 28 on 4.18.18-200.fc28.x86_64 kernel
 - Intel(R) Core(TM) i5-4690 CPU @ 3.50GHz
 - Corsair 8GB 1600 MHz DDR3 RAM
 - Node version 11.1.0
 - wrk version 4.1.0
-------------

Note: Tests are done with following configuration:
```
$ wrk -c 120 -d 30 -t 4 [url]
```
-------

### Basic results:

#### Without cluster

| Framework | total reqs | req/s    | read size | transfer/s |
| --------- | ---------- | -----    | --------- | ---------- |
| Express   | 831667     | 27681.57 | 106.28MB  | 3.54MB     |
| Koa       | 836072     | 27852.59 | 121.20MB  | 4.04MB     |
| Fastify   | 1181834    | 39371.90 | 184.84MB  | 6.16MB     |
| Polka 🌟  | 1268792    | 42270.90 | 134.31MB  | 4.47MB     |
| Raw http  | 1443735    | 48087.58 | 152.83MB  | 5.09MB     |
| Rayo      | 1232476    | 41059.82 | 135.17MB  | 4.50MB     |
| Foxify    | 1041094    | 34687.30 | 133.04MB  | 4.43MB     |


#### With Cluster [4]

| Framework | total reqs | req/s     | read size | transfer/s |
| --------- | ---------- | --------- | --------- | ---------- |
| Express   | 2378344    | 79241.60  | 303.93MB  | 10.13MB    |
| Koa       | 2503180    | 83412.96  | 362.86MB  | 12.09MB    |
| Fastify   | 3240453    | 107669.91 | 506.82MB  | 16.84MB    |
| Polka 🌟  | 3990211    | 132599.37 | 422.40MB  | 14.04MB    |
| Raw http  | 4232665    | 140768.42 | 448.06MB  | 14.90MB    |
| Rayo      | 3812527    | 126748.34 | 418.13MB  | 13.90MB    |
| Foxify    | 2886582    | 96164.25  | 368.88MB  | 12.29MB    |


Raw HTTP module is sure a beast! But it's hard to manage without a framework. I have taken it into consideration Just to compare native speed with other frameworks. Keeping it aside, looks like Polka wins the race here. But as I said, benchmarks are usually stupid and should be taken into consideration at `lowest` priority while deciding a framework. 


----------------

### Detailed results

#### Without cluster

```
Express:
    Running 30s test @ http://localhost:8080/
    4 threads and 120 connections
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     4.34ms  588.37us  24.05ms   92.49%
        Req/Sec     6.96k   485.66     9.93k    86.42%
    831667 requests in 30.04s, 106.28MB read
    Requests/sec:  27681.57
    Transfer/sec:      3.54MB

Koa:
    Running 30s test @ http://localhost:8080/
    4 threads and 120 connections
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     4.33ms    0.98ms  25.32ms   92.50%
        Req/Sec     7.00k     0.93k    7.93k    84.75%
    836072 requests in 30.02s, 121.20MB read
    Requests/sec:  27852.59
    Transfer/sec:      4.04MB

Fastify:
    Running 30s test @ http://localhost:3000/
    4 threads and 120 connections
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     3.07ms  757.87us  40.70ms   98.80%
        Req/Sec     9.90k   743.88    12.56k    97.00%
    1181834 requests in 30.02s, 184.84MB read
    Requests/sec:  39371.90
    Transfer/sec:      6.16MB

Polka:
    Running 30s test @ http://localhost:8080/
    4 threads and 120 connections
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     2.85ms  597.97us  34.36ms   98.84%
        Req/Sec    10.63k   713.99    11.44k    98.08%
    1268792 requests in 30.02s, 134.31MB read
    Requests/sec:  42270.90
    Transfer/sec:      4.47MB

Raw:
    Running 30s test @ http://localhost:8080/
    4 threads and 120 connections
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     2.51ms  478.56us  29.21ms   98.55%
        Req/Sec    12.09k   767.17    14.86k    98.42%
    1443735 requests in 30.02s, 152.83MB read
    Requests/sec:  48087.58
    Transfer/sec:      5.09MB

Rayo:
    Running 30s test @ http://localhost:5050/
    4 threads and 120 connections
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     2.93ms  507.40us  28.84ms   98.51%
        Req/Sec    10.32k   689.73    11.19k    96.67%
    1232476 requests in 30.02s, 135.17MB read
    Requests/sec:  41059.82
    Transfer/sec:      4.50MB

Foxify:
    Running 30s test @ http://localhost:3000/
    4 threads and 120 connections
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     3.49ms    0.87ms  29.96ms   96.43%
        Req/Sec     8.72k     1.10k    9.69k    93.92%
    1041094 requests in 30.01s, 133.04MB read
    Requests/sec:  34687.30
    Transfer/sec:      4.43MB
```

#### With Cluster

```
Express:
    Running 30s test @ http://localhost:8080/
    4 threads and 120 connections
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     1.58ms    0.98ms  61.50ms   92.50%
        Req/Sec    19.92k     2.13k   25.28k    82.67%
    2378344 requests in 30.01s, 303.93MB read
    Requests/sec:  79241.60
    Transfer/sec:     10.13MB

Koa:
    Running 30s test @ http://localhost:8080/
    4 threads and 120 connections
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     1.58ms    1.65ms 112.39ms   95.84%
        Req/Sec    20.97k     2.36k   25.59k    89.67%
    2503180 requests in 30.01s, 362.86MB read
    Requests/sec:  83412.96
    Transfer/sec:     12.09MB

Fastify:
    Running 30s test @ http://localhost:3000/
    4 threads and 120 connections
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     1.43ms    1.71ms  62.51ms   92.55%
        Req/Sec    27.09k     3.28k   52.34k    88.85%
    3240453 requests in 30.10s, 506.82MB read
    Requests/sec: 107669.91
    Transfer/sec:     16.84MB

Polka:
    Running 30s test @ http://localhost:8080/
    4 threads and 120 connections
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     1.02ms    1.37ms  76.89ms   93.42%
        Req/Sec    33.36k    14.90k   76.43k    75.67%
    3990211 requests in 30.09s, 422.40MB read
    Requests/sec: 132599.37
    Transfer/sec:     14.04MB

Raw:
    Running 30s test @ http://localhost:8080/
    4 threads and 120 connections
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency   849.73us  715.21us  36.16ms   73.01%
        Req/Sec    35.42k    21.19k   92.41k    85.58%
    4232665 requests in 30.07s, 448.06MB read
    Requests/sec: 140768.42
    Transfer/sec:     14.90MB

Rayo:
    Running 30s test @ http://localhost:5050/
    4 threads and 120 connections
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     1.18ms    1.59ms  45.15ms   93.87%
        Req/Sec    31.90k     9.19k   61.44k    72.17%
    3812527 requests in 30.08s, 418.13MB read
    Requests/sec: 126748.34
    Transfer/sec:     13.90MB

Foxify:
    Running 30s test @ http://localhost:3000/
    4 threads and 120 connections
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     1.36ms    1.48ms  94.42ms   95.99%
        Req/Sec    24.18k     2.71k   30.27k    83.67%
    2886582 requests in 30.02s, 368.88MB read
    Requests/sec:  96164.25
    Transfer/sec:     12.29MB
```
