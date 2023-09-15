
import { Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import './App.css';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Dashboard from './pages/Dashboard';
import InputForm from './components/inputForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<InputForm />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/chat' element={<Chat />} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='signup'  element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
