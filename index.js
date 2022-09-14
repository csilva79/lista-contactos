//index.js


const http = require('http'); 
const express = require('express'); 
const app = express(); 
 
const bodyParser = require('body-parser');

require("dotenv").config();
const jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let auth = require('./autenticacao/autenticacao');
app.use('/auth',auth);




app.get('/', (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
})

 
const server = http.createServer(app); 
server.listen(300);

