let express = require('express');
const { ResultWithContext } = require('express-validator/src/chain');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let bookController = require('../controllers/book');

//guard
function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

router.get('/',bookController.displayBookList);

router.get('/add', requireAuth, bookController.displayAddPage);

router.post('/add', requireAuth, bookController.processAddPage);

router.get('/edit/:id', requireAuth, bookController.displayEditPage);

router.post('/edit/:id', requireAuth, bookController.processEditPage);

router.get('/delete/:id', requireAuth, bookController.executeDelete);

module.exports = router;