const express = require('express')
const { db } = require('./config/db')
const { URL } = require('./models/URLs')
const linkRouter = require('./routes/links')
const redirRoute = require('./routes/redirect')

//const server = express()
 

//db.authenticate().then(()=> console.log('db worked'))
db.sync().then(()=> console.log('db worked'))   // sync will create tables


const app = express()
app.use(express.json())

app.use('/api/links', linkRouter)
app.use('/', redirRoute)

app.get('/home', (req, res)=> console.log(1))

// db.sync({force: true}) // never force:true in prod, it drops dbs
//     .then(() => console.log('db works'))
//     .catch((err) => console.error(err))

app.listen(4445, ()=> console.log('Server started on http://localhost:4445'))