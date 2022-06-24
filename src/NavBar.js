import React from "react";
import {NavLink} from "react-router-dom";
import MovieBar from "./MovieBar";
import MovieForm from "./MovieForm";

function NavBar() {
    return (
        <div class="navbar navbar-light bg-light justify-content-between">
                <NavLink to="/Movies" exact>Movie Bar</NavLink>
                <NavLink to="/Movies/Add" exact>Add Movie</NavLink>
        </div>
    )
}

export default NavBar;