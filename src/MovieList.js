import React from "react";
import MoviePage from "./MoviePage"

function MovieList({movies}) {
    console.log(movies)

    const movieList = movies.map( movie => <MoviePage movie={movie} />)

    return (
        <div>
            {movieList}
        </div>
    )

}

export default MovieList;