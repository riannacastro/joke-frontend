import './App.css';
import { NavLink } from 'react-router-dom';
import Pages from './Components/Pages';


function App() {
  return (
    <div className="App">
      <div className="flex mt-8 justify-center gap-4">
      <NavLink 
      to="/"
      className={isActive => isActive ? "selected" : ""}
      id="home-link"
      >Home</NavLink> 
      <br />
      <NavLink 
      to="/about"
      className={isActive => isActive ? "selected" : ""}
      id="about-link"
      >About</NavLink>
      <br />
      <NavLink 
      to="/jokes"
      className={isActive => isActive ? "selected" : ""}
      id="joke-link"
      >Jokes</NavLink>
      <br />
      {/* <NavLink 
      to="/new"
      className={isActive => isActive ? "selected" : ""}
      id="new-link"
      >New Joke</NavLink> */}
      <NavLink 
      to="/requests"
      className={isActive => isActive ? "selected" : ""}
      id="new-link"
      >Feedback</NavLink>
      </div>
      <Pages />
    </div>
  );
}

export default App;
