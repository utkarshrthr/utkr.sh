const express = require('express')
const { db } = require('./config/db')
const { URL } = require('./models/URLs')

const server = express()

//db.authenticate().then(()=> console.log('db worked'))
db.sync().then(()=> console.log('db worked'))   // sync will create tables

server.listen(4445, ()=> console.log('Server started on http://localhost:4445'))

server.get('/home', (req, res)=> res.send('working'))