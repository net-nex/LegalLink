import {Navbar,Footer} from './components';
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
