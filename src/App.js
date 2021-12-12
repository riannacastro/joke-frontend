import './App.css';
import { NavLink } from 'react-router-dom';
import Pages from './Components/Pages';


function App() {
  return (
    <div className="App">
      <NavLink 
      to="/"
      className={isActive => isActive ? "selected" : ""}
      >Home</NavLink> 
      <br />
      <NavLink 
      to="/jokes"
      className={isActive => isActive ? "selected" : ""}
      >Jokes</NavLink>
      <br />
      <NavLink 
      to="/new"
      className={isActive => isActive ? "selected" : ""}
      >New Joke</NavLink>
      <Pages />
    </div>
  );
}

export default App;
