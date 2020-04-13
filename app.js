const express = require('express')
const mongoose = require('mongoose')
const BodyParser = require("body-parser")
const CORS = require('cors')

require('dotenv/config')

const PORT = process.env.PORT || 3003

const app = express()

app.use(CORS())
app.use(BodyParser.json())

const postsRoute = require( "./routes/posts")

app.use('/posts', postsRoute)

// app.get('/', (req, res) => {
//     res.send('Welcome to Node Rest Api Course')
// })

mongoose.connect(process.env.DB_CONNECTION_URI, { useNewUrlParser: true }, () => {
    console.log('Connected..')
})

app.listen(PORT, (req, res) => {
    console.log('Server is running in ' + PORT)
})