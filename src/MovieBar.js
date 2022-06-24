import React, { useState, useEffect} from "react";
import MovieList from "./MovieList"
import MovieForm from "./MovieForm";
import Search from "./Search";

function MovieBar() {
    const [movies, setMovies] = useState([]);
    const [searchVal, setSearchVal] = useState("");

    useEffect( () => {
        fetch("http://localhost:3001/favoriteMovies").then(r=>r.json()).then(data => setMovies(data))},[])

    function handleFormSubmit(formData) {
        const newMovies = [...movies, formData]
        setMovies(newMovies)
    }
   

    return (
    <div>
        <MovieForm handleFormSubmit={handleFormSubmit}/>
        <br></br>
        <Search searchVal={searchVal} handleSearch={setSearchVal} />
        <MovieList movies={movies} searchVal={searchVal}/>
    </div>)
}

export default MovieBar;

