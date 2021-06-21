let express = require('express');
let router = express.Router();

module.exports.processContactForm = (req, res, next) => {
    console.log("Contact form request: ", req.body);
    res.redirect('/');
}