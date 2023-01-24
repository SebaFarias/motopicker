const app = require('express')();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req,res)=>{
    res.status(200).send("Tulio, Estamos al aire");
})

module.exports = app