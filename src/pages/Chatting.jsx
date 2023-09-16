import React from 'react'
import {Sidebar} from '../components/Chat';
import {Chat} from '../components/Chat';
import {Navbar,Footer} from '../components/';

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