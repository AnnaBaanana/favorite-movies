import React from "react";

function Search({searchVal, handleSearch}) {

    return (
        <div>
            <form>
                <input type="text" value={searchVal} placeholder="Search movies" onChange={e => handleSearch(e.target.value)}/>
            </form>
        </div>
    )
}

export default Search;