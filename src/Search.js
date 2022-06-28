import React from "react";

function Search({searchVal, handleSearch}) {

    function handleSearchChange(e) {
    handleSearch(e.target.value)
    }

    return (
        <div>
            <form class="form-group" style={{maxWidth: "20rem"}}>
                <label for="text">🔎
                </label> <input type="text" value={searchVal} placeholder="Search movies" onChange={e => handleSearchChange(e)}/>
            </form>
        </div>
    )
}

export default Search;