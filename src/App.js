
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Login/>
    </div>
  );
}

export default App;
