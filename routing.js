const express = require('express')
const app = express()


app.all('/', function(req, res) {
    console.log('Hello Sir')
    res.json({});
    next()  
})
