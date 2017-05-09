const express = require('express');
const movies = require('./movies')
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());


app.get('/api/movie/:id', function(req,res,next){
    let movie_id = req.params.id;

    let movie = movies.getMovieById(movie_id);

    // let allMovies = movies.getMovies();

    res.status(200).json(movie);
    // res.status(200).json(allMovies)
})

app.post('/api/movie', function(req,res,next){
    const newMovie = req.body;

    movies.addMovie(newMovie);

    res.status(200).send('added movie');
})

app.put('/api/movie/:id', function(req,res,next){
    const movie_id = request.params.id;
    const movie_update = request.body;

    movies.updateMovie(movie_id, movie_update);

    response.status(200).send('okay');
    //dont forget to send back a response otherwise it will hang indefinitely.
})

app.delete('/app/movie/:id', function(req,res,next){
    const movie_id = request.params.id;

    movies.destroyMovie(movie_id);
    response.status(200).send('deleted');
})


app.listen(8000, function(){
console.log('Listening on 8000')
})