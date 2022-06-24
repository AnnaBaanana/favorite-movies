import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import NavBar from './NavBar';
import MovieBar from "./MovieBar";
import MovieForm from './MovieForm';


function App() {

  return (
    <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/movies"><MovieBar /></Route>
          <Route exact path="/movies/add"><MovieForm /></Route>
        </Switch>
      <h1>Favorite Movies</h1>
    </div>
  );
}

export default App;
