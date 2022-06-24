import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import MovieBar from "./MovieBar"


function App() {

  return (
    <div className="App">
      <NavBar />
      <h1>Favorite Movies</h1>
      <MovieBar />
    </div>
  );
}

export default App;
