const express = require('express')
const app = express()
const port = 3000
require('dotenv').config(); //if error comes use this  require('dotenv').config({
//   path: 'ENV_FILENAME'
// });
require('colors');

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const students = require('./routes/studentsroute')

const teachers = require('./routes/teachersroute')
const connectDB = require('./dbinit')

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/students', students)

app.use('/teachers', teachers)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})