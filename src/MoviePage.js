import React from "react";

function MoviePage({movie}) {
    return (
        <div class="card" style={{width: "25rem"}}>
            <h4 class="card-title">{movie.title}</h4>
            <img src={movie.image_url} alt={movie.name} className="thumbnail"/>
            <button type="button" class="btn btn-info">Show Movie Info</button>
            <button type="button" class="btn btn-dark">Edit Movie Info</button>
        </div>
    )
}

export default MoviePage;