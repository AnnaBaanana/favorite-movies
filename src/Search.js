import React, {useState} from "react";

function Search({handleSearch}) {
    const [searchVal, setSearchVal] = useState("")
    console.log(searchVal)

    console.log("new serachVal:", searchVal)

    function handleSubmit(e) {
        e.preventDefault()
        console.log("new Search Val:" , searchVal)
        handleSearch(searchVal)
        setSearchVal("")
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" value={searchVal} placeholder="Search movies" onChange={e => setSearchVal(e.target.value)}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Search;