import './App.css';
import { NavLink } from 'react-router-dom';
import Pages from './Components/Pages';


function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink> 
      <br />
      <NavLink to="/jokes">Jokes</NavLink>
      <Pages />
    </div>
  );
}

export default App;
