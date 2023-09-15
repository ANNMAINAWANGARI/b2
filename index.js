const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routers/route')

const app = express();

require('dotenv').config();

const DB_URL = process.env.DB_URL

// mongoose.connect(DB_URL);
// const database = mongoose.connection


// database.on('error', (error) => {
//     console.log('error is:',error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })
app.use(express.json());
app.use('/api',routes)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Unable to connect to MongoDB:', error)
  })