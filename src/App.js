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
      id="nav-link"
      >Home</NavLink> 
      <br />
      <NavLink 
      to="/about"
      className={isActive => isActive ? "selected" : ""}
      id="nav-link"
      >About</NavLink>
      <br />
      <NavLink 
      to="/jokes"
      className={isActive => isActive ? "selected" : ""}
      id="nav-link"
      >Jokes</NavLink>
      <br />
      <NavLink 
      to="/new"
      className={isActive => isActive ? "selected" : ""}
      id="nav-link"
      >New Joke</NavLink>
      </div>
      <Pages />
    </div>
  );
}

export default App;
