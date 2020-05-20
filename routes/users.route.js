//https://jsonplaceholder.typicode.com/users
const { Router } = require('express');
const Request = require('request');
const router = Router()


router.get('/users', (req, res) => {
    Request.get('https://jsonplaceholder.typicode.com/users', (err, response, body) => {
        if (err) {
            return console.dir(err);
        }
        res.json(JSON.parse(body))
    })
})


module.exports = router