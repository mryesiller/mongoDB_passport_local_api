const app = require('./src/app')
const http = require('http');
require('dotenv').config()
const db= require('./src/services/db.service')

const server = http.createServer(app);
const PORT= process.env.PORT || 5000

//DB connection
db.dbRun().catch(error => console.error(error))


server.listen(PORT, () =>{
    console.log(`Server listening on ${PORT}`)
})