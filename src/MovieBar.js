import React, { useState, useEffect} from "react";
import MovieList from "./MovieList"
import MovieForm from "./MovieForm";
import Search from "./Search";

function MovieBar() {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        fetch("http://localhost:3001/favoriteMovies").then(r=>r.json()).then(data => setMovies(data))},[])

    const handleSearch = ((searchVal) => {
        console.log("this is searchVal: ", searchVal)
        const searchedMovies = movies.filter(movie => movie.title.includes(searchVal))
        console.log(searchedMovies)
    })

    return (
    <div>
        <MovieForm />
        <br></br>
        <Search handleSearch={handleSearch}/>
        <MovieList movies={movies} />
    </div>)
}

export default MovieBar;

