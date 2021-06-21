let express = require('express');
let router = express.Router();

module.exports.processLogin = (req, res, next) => {
    console.log("Login Form Request: ", req.body);
    res.redirect('/');
}