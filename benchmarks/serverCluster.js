const cluter = require('cluster');
const cp = require('os').cpus().length;

if(cluter.isMaster){
    for(let i=0; i<cp; i++){
        cluter.fork();
    }
    cluter.on('exit', function(){
        console.log("cluster died")
        cluter.fork();
    });
} else {
    // require(''); your server file here like server.js
}
