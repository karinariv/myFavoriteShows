const { response } = require("express");

const controller = {
    home: (req, res) => {
        res.render('index');
    },
    detail: (req, res) => {
        res.render('detail');
    },
    about: (req, res) => {
        res.render('about');
    }
}

module.exports = controller;