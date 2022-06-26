import React, { useState, useEffect} from "react";
import {Route, useRouteMatch} from "react-router-dom";
import MovieList from "./MovieList"
import MovieForm from "./MovieForm";
import Search from "./Search";
import MovieShow from "./MovieShow";

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
    <div class="container">
            <div class="row">
                <div class="col-sm">
                    <MovieList movies={movies} searchVal={searchVal}/>
                    <br></br>
                    <MovieForm handleFormSubmit={handleFormSubmit}/>
                </div>
                 <div class="col-sm">
                    <Search searchVal={searchVal} handleSearch={setSearchVal} />
                    <br></br>
                    <Route >
                        <MovieShow />
                    </Route>
                 </div>
             </div>
    </div>)
}

export default MovieBar;

