
import { Routes, Route , Navigate} from 'react-router-dom';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import './App.css';
import './components/Chat/Chat.css';
import Home from './pages/Home';
import Chatting from './pages/Chatting';
import Dashboard from './pages/Dashboard';
import InputForm from './components/inputForm';
import { Children, useContext } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser,lawyer } = useContext(AuthContext);
//   const OnlyLawyer = ({children})=>{
//   if(lawyer){
//     console.log(lawyer)
//     return <Navigate to='input' />;
//   }
//   else if(!currentUser){
//     return  <Navigate to="/login" />
//   }
//   return children
// }
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        
          <Route path='/input' element={<InputForm/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/chat' element={<Chatting />} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='signup'  element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
