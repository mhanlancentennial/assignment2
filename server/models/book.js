let mongoose = require('mongoose');

let bookModel = mongoose.Schema(
    {
        name:String,
        phone:String,
        email:String,
        description:String,
        price:Number
    },{
        collection: "books"
    }
);

module.exports = mongoose.model('Book', bookModel);