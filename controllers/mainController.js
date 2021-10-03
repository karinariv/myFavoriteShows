const { response } = require("express");
let movies = require('../data/dbMovies.json');
let series = require('../data/dbSeries.json');
let documentaries = require('../data/dbDocumentaries.json');

const controller = {
    home: (req, res) => {
        res.render('index', {movies: movies, series: series, documentaries: documentaries});
    },
    detailMovie: (req, res) => {
        let s = '';
        let d = '';
        for (let movie of movies) {
            if (movie.id == req.params.id){
                return res.render('detail', {movie: movie, series: s, documentary: d});
            }
        }   
    },
    detailSeries: (req, res) => {
        let m = '';
        let d = '';
        for (let serie of series) {
            if (serie.id == req.params.id){
                return res.render('detail', {series: serie, movie: m, documentary: d});
            }
        }   
    },
    detailDocumentary: (req, res) => {
        m = '';
        s = '';
        for (let documentary of documentaries) {
            if (documentary.id == req.params.id){
                return res.render('detail', {documentary: documentary, series: s, movie: m});
            }
        }   
    },
    about: (req, res) => {
        res.render('about');
    }
}

module.exports = controller;