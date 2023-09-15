import {Navbar,Footer} from './components';
import { Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='signup'  element={<SignUp/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
