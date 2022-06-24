import React from "react";
import MoviePage from "./MoviePage"

function MovieList({movies, searchVal}) {
    console.log(movies)

    const movieList = movies.filter(movie => movie.title.toLowerCase().includes(searchVal.toLowerCase())).map(movie => <MoviePage key={movie.id} movie={movie} />)

    return (
        <div>
            {movieList}
        </div>
    )

}

export default MovieList;