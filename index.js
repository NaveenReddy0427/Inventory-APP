const express = require('express');
const server = express();
const port = 5000;

server.get('/', function (req, res){
    res.send('welcome to the Inventory App');
})

server.listen(port, (req, res)=>{
    console.log(`server listening on port ${port}`);
});