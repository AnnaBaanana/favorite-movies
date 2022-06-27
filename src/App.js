import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
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
    <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/movies"><MovieBar movies={movies} searchVal={searchVal} handleSearchVal={setSearchVal}/></Route>
          <Route exact path="/movies/add"><MovieForm handleFormSubmit={handleFormSubmit}/></Route>
        </Switch>
      <h1>Welcome to the MovieBar</h1>
      <h3>Search for really good movies to watch or add your own to the list!</h3>
      <br></br>
      <strong>Our today's pick is</strong>
      <RandomPick movies={movies} />
    </div>
  );
}

export default App;
