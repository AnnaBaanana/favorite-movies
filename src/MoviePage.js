import React from "react";

function MoviePage({movie}) {
    return (
        <div class="card" style={{width: "18rem;"}}>
            <h4 class="card-title">{movie.title}</h4>
            <img src={movie.image_url} alt={movie.name} className="thumbnail"/>
            <button type="button" class="btn btn-dark">Show Movie Info</button>
        </div>
    )
}

export default MoviePage;