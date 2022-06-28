import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import MovieBar from "./MovieBar";
import MovieForm from './MovieForm';
import RandomPick from "./RandomPick";


function App() {

  const [movies, setMovies] = useState([]);
  const [searchVal, setSearchVal] = useState("");


    useEffect( () => {
        fetch(" http://localhost:3001/favoriteMovies").then(r=>r.json()).then(data => setMovies(data))},[])

    function handleFormSubmit(formData) {
        const newMovies = [...movies, formData]
        setMovies(newMovies)
    }


  return (
    <div class="App">
        <NavBar />
          <MovieBar movies={movies} searchVal={searchVal} handleSearchVal={setSearchVal}/>
          <MovieForm handleFormSubmit={handleFormSubmit}/>
    </div>
  );
}

export default App;
