import React from "react";
import {Route, useRouteMatch} from "react-router-dom";
import MovieList from "./MovieList"
import MovieForm from "./MovieForm";
import Search from "./Search";
import MovieShow from "./MovieShow";

function MovieBar({movies, searchVal, handleSearchVal}) {

function handleSearch(searchVal) {
    console.log("this is help from MovieBar", searchVal)
    handleSearchVal(searchVal)
}
 
    return (
    <div class="container">
            <div class="row">
                <div class="col-sm">
                    <MovieList movies={movies} searchVal={searchVal}/>
                </div>
                 <div class="col-sm">
                    <Search searchVal={searchVal} handleSearch={handleSearch} />
                    <br></br>
                    <Route >
                        <MovieShow />
                    </Route>
                 </div>
             </div>
    </div>)
}

export default MovieBar;

