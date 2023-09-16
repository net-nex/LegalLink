import React from 'react'
import {Sidebar} from '../components/Chat';
import {Chat} from '../components/Chat';
import {Navbar,Footer} from '../components/';
import { Children, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate,Navigate } from 'react-router-dom';
const Chatting = () => {
  const navigate = useNavigate
  const { currentUser,lawyer } = useContext(AuthContext);
  if(!currentUser){
    return <Navigate to={'/signup'}/>
  }
  return (
    <>
        <Navbar />
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
      <Footer />
    </>
  )
}

export default Chatting