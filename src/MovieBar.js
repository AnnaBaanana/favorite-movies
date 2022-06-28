import React from "react";
import MovieList from "./MovieList"
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
                    <MovieShow />
                 </div>
             </div>
    </div>)
}

export default MovieBar;

