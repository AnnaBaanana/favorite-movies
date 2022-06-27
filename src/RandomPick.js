import React from "react";

function RandomPick({movies}) {
    
    const randomPick = movies.find(movie => movie.id===5)

    return (
        <div key={randomPick.id} class="card" style={{width: "22rem"}}>
            <h4 class="card-title">{randomPick.title}</h4>
            <img src={randomPick.image_url} alt={randomPick.name} className="thumbnail"/>
        </div>
    )

}

export default RandomPick;