require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./module/Products');
const data = require('./products.json');

const start = async() => {
    try {
        await mongoose.connect(process.env.DB_URL);
        await Product.deleteMany({});
        await Product.create(data);
    } catch (error) {
        console.log(error);
    }
}
start();