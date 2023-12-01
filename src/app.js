require('dotenv').config();
const express = require('express');
const mongoose = require('../db/dbConnect');
const app = express();
const PORT = process.env.PORT || 8000;
const routes = require('../routes/products');

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.use('/api/products', routes);

app.listen(PORT, (req, res) =>{
    console.log(`server start ${PORT}`);
})