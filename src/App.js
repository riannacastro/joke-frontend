import './App.css';
import { NavLink } from 'react-router-dom';
import Pages from './Components/Pages';


function App() {
  return (
    <div className="App">
      <div className="nav-bar">
      <NavLink 
      to="/"
      className={isActive => isActive ? "selected" : ""}
      id="home-link"
      >Home</NavLink> 
      <br />
      <NavLink 
      to="/jokes"
      className={isActive => isActive ? "selected" : ""}
      id="jokes-link"
      >Jokes</NavLink>
      <br />
      <NavLink 
      to="/new"
      className={isActive => isActive ? "selected" : ""}
      id="new-link"
      >New Joke</NavLink>
      </div>
      <Pages />
    </div>
  );
}

export default App;
