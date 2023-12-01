const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: { 
        type: String, 
        required: true,
    },
    price: { 
        type: Number, 
        required: [true, 'price has been required'],
    },
    feature: { 
        type: Boolean, 
        match: false,
    },
    rating: { 
        type: Number, 
        default: 5,
    },
    date: { 
        type: Date, 
        default: Date.now(),
    },
    company: { 
        type: String, 
        enum: {
            values: ["apple", "dell", "samsung"],
            message: `{VALUE} is not supported`,
        },
    },
  });

  module.exports = mongoose.model('Product', mySchema);