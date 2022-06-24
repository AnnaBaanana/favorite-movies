import React, { useState, useEffect} from "react";
import MovieList from "./MovieList"
import MovieForm from "./MovieForm";

function MovieBar() {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        fetch("http://localhost:3001/favoriteMovies").then(r=>r.json()).then(data => setMovies(data))},[])

    return (
    <div>
        <MovieForm />
        <MovieList movies={movies} />
    </div>)

}

export default MovieBar;

