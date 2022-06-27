import React from "react";

function Search({searchVal, handleSearch}) {

    function handleSearchChange(e) {
    console.log("search val change: ", e.target.value)
    handleSearch(e.target.value)
    }

    return (
        <div>
            <form>
                <input type="text" value={searchVal} placeholder="Search movies" onChange={e => handleSearchChange(e)}/>
            </form>
        </div>
    )
}

export default Search;