const { Router } = require('express');
const _ = require('lodash');
const router = Router()

const movies = require('../sample.json')


router.get('/movie', (req, res) => {
    res.json(movies)
});

router.post('/movie', (req, res) => {
    const { title, director, year, rating } = req.body;

    if (title && director && year && rating) {
        const movie = { ...req.body }
        movies.push(movie)
        res.status(201).json({
            added: 'OK'
        })
    } else {
        res.status(400).json({
            statusCode: 'Bad Request'
        })
    }
})

router.delete('/movie/:id', (req, res) => {
    const id = req.params.id
    _.remove(movies, (movie) => {
        return movie.id == id
    })
    res.json(movies)
});

router.put('/movie/:id', (req, res) => {
    const { title, director, year, rating } = req.body;
    const id = req.params.id
    _.each(movies, (movie) => {
        if(movie.id == id){
            movie.title = title
            movie.director = director
            movie.year = year
            movie.rating = rating
        }
    })
    res.status(200).json({
        modified: 'OK'
    })
});

module.exports = router