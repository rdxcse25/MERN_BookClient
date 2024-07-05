
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useEffect } from 'react';
import MyFooter from './components/MyFooter';
import FloatingChatBot from './FloatingChatBot';

function App() {
  
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
        <FloatingChatBot/>
        <Outlet/>
      </div>
      <MyFooter/>
    </>
  )
}

export default App
