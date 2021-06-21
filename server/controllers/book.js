let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Book = require('../models/book');

module.exports.displayBookList = (req, res, next) => {
    Book.find((err, bookList) => {
        if(err){
            return console.error(err);
        }
        else{
            //console.log(BookList);
            res.render(
                'book/list',
                {title:'Contact List',
                 BookList: bookList,
                 displayname: req.user ? req.user.displayname : ''
                });
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('book/add',
    {title:'Add Contact',
    displayname: req.user ? req.user.displayname : ''
    });
}

module.exports.processAddPage = (req, res, next) => {
    let newBook = Book({
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
    });

    Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/book-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if (err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('book/edit', 
            {title: 'Edit Contact',
             book: bookToEdit,
             displayname: req.user ? req.user.displayname : ''
            });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/book-list');
        }
    });
}

module.exports.executeDelete = (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if (err) 
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/book-list');
        }
    });
}