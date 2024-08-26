import './App.css';
import { Routes, Route } from 'react-router';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <div className="App">
      {/* <h1>Hello world .....</h1> */}
      <Routes>
        <Route path='/' element={ <Login/>}/>
        <Route path='/dashboard' element={ <Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
