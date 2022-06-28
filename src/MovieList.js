import React, {useState} from "react";
import {Link} from "react-router-dom";


function MovieList({movies, searchVal}) {
    const [showInfo, setShowInfo] = useState(false)
    console.log(movies)

    const movieList = movies.filter(movie => movie.title.toLowerCase()
    .includes(searchVal.toLowerCase())).map(movie => {
        return (<div key={movie.id} class="card" style={{width: "25rem"}}>
            <h4 class="card-title">{movie.title}</h4>
            <img src={movie.image_url} alt={movie.name} className="thumbnail"/>
            <button type="button" class="btn btn-link">
                <Link to={`/Movies/${movie.id}`}>Show More Info</Link></button>
        </div>)
        })

    return (
        <div>
            {movieList}
        </div>
    )

}

export default MovieList;