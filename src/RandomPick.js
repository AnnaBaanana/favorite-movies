import React from "react";

function RandomPick({movies}) {
    
    const randomPick = movies.find(movie => movie.id===5)

    return (
        <div style={{background: "gainsboro"}}>
            <br></br>
            <h2>Welcome to the MovieBar!</h2>
            <strong>Search for movies to watch or add your own to the list!</strong>
            <br></br>
            <br></br>
            <strong>Today's Movie Highlight Is ⬇</strong>
            <br></br>
            <br></br>
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-6" key={randomPick.id} className="card" style={{width: "35rem"}}>
                        <h4 class="card-title">{randomPick.title}</h4>
                        <img src={randomPick.image_url} alt={randomPick.name} className="thumbnail"/>
                        <div class="row">
                            <h6 class="col-sm-6"><strong>Released: </strong>{randomPick.year}</h6>
                            <h6 class="col-sm-6"><strong>Genre: </strong>{randomPick.genre}</h6>
                            <h6 class="col-sm-6"><strong>Duration: </strong>{randomPick.duration}</h6>
                            <h6 class="col-sm-6"><strong>Rated: </strong>{randomPick.rated}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default RandomPick; 