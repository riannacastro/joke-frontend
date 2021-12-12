import './App.css';
import { NavLink } from 'react-router-dom';
import Pages from './Components/Pages';


function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink> 
      <br />
      <NavLink to="/jokes">Jokes</NavLink>
      <br />
      <NavLink to="/new">New Joke</NavLink>
      <Pages />
    </div>
  );
}

export default App;
