import React from "react";
import {Route, useRouteMatch} from "react-router-dom";
import MovieList from "./MovieList"
import MovieForm from "./MovieForm";
import Search from "./Search";
import MovieShow from "./MovieShow";

function MovieBar({movies, searchVal, handleSearchVal}) {

function handleSearch(searchVal) {
    handleSearchVal(searchVal)
}
 
    return (
    <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6">
                    <Search searchVal={searchVal} handleSearch={handleSearch} />
                    <br></br>
                    <MovieList movies={movies} searchVal={searchVal}/>                    
                    <br></br>
                    <Route >
                        <MovieShow />
                    </Route>
                 </div>
             </div>
    </div>)
}

export default MovieBar;

