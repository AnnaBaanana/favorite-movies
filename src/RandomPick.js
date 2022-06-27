import React from "react";

function RandomPick({movies}) {
    
    const randomPick = movies.find(movie => movie.id===5)

    return (
        <div>
            <h1>Welcome to the MovieBar</h1>
            <h3>Search for really good movies to watch or add your own to the list!</h3>
            <br></br>
            <strong>Our today's pick is</strong>
                <div key={randomPick.id} class="card" style={{width: "35rem"}}>
                    <h4 class="card-title">{randomPick.title}</h4>
                    <img src={randomPick.image_url} alt={randomPick.name} className="thumbnail"/>
            </div>
        </div>
    )

}

export default RandomPick;