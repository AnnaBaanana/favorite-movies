import React, {useState} from "react";


function MovieList({movies, searchVal}) {
    const [showInfo, setShowInfo] = useState(false)
    console.log(movies)

    const movieList = movies.filter(movie => movie.title.toLowerCase()
    .includes(searchVal.toLowerCase())).map(movie => {
        return (<div key={movie.id} class="card" style={{width: "20rem"}}>
            <h4 class="card-title">{movie.title}</h4>
            <img src={movie.image_url} alt={movie.name} className="thumbnail"/>
            <button type="button" class="btn btn-link"> Show More Info </button>
        </div>)
        })

    return (
        <div>
            {movieList}
        </div>
    )

}

export default MovieList;