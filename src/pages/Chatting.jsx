import React from 'react'
import {Sidebar} from '../components/Chat';
import {Chat} from '../components/Chat';

const Chatting = () => {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Chatting