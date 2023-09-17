import React from 'react'
import {Sidebar} from '../components/Chat';
import {Chat} from '../components/Chat';
import {Navbar,Footer} from '../components/';
import { Children, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useNavigate,Navigate } from 'react-router-dom';
const Chatting = () => {
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