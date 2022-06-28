import React from "react";


function NavBar() {
    return (
        <div class="navbar navbar-light bg-light justify-content-between">
                <a href="/">Home</a>
                <a href="/Movies">Movie Bar</a>
                <a href="/Movies/Add">Add Movie</a>
        </div>
    )
}

export default NavBar;