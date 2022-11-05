const express = require("express")
const app = express()
app.use(express.json())
app.listen(3001, ()=>{ console.log ("Connected to server at port 3001") })

require('dotenv').config()
const mongoose = require("mongoose")
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString,)
const db = mongoose.connection
db.once('open', () => {
  console.log('Database connected:', mongoString)
})

db.on('error', err => {
  console.error('connection error:', err)
})


const cors = require('cors')
const corsOptions = {
    origin:'http://localhost:3000',
    optionsSuccessStatus:200,
    credentials:true,  
    methods:" GET,PUT, POST, DELETE, UPDATE"
}

app.use(cors(corsOptions));

//routes
const UAPI = require('./Model_API')
app.use('/Ecomm/api',UAPI)
