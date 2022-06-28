import React from "react";

function RandomPick({movies}) {
    
    const randomPick = movies.find(movie => movie.id===5)

    return (
        <div>
            <h2>Welcome to the MovieBar!</h2>
            <h3>Search for movies to watch or add your own to the list!</h3>
            <br></br>
            <h3>Today's Movie Highlight Is ⬇</h3>
            <br></br>
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-6" key={randomPick.id} class="card" style={{width: "35rem"}}>
                        <h4 class="card-title">{randomPick.title}</h4>
                        <img src={randomPick.image_url} alt={randomPick.name} className="thumbnail"/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default RandomPick; 