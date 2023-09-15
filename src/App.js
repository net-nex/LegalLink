import {Navbar,Footer} from './components';
import { Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='signup'  element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
