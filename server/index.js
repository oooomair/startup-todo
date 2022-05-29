require('dotenv').config()

const express = require("express")
const app = express()

const mongoose = require("mongoose")

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error  => console.error(error))
db.once('open', () => console.log('connected to Database'))

const tasksRouter = require('./src/routes/tasks')
app.use('/tasks', tasksRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});