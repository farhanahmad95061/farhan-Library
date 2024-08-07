import React from 'react'
import Home from './home/Home'
import Course from './course/Course'
import {Routes,Route, Navigate} from "react-router-dom"
import Signup from './components/Signup'
import Contact from './contact/Contact1'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'



function App() {
  const [authUser,setauthUser]=useAuth()
     // console.log(authUser);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={authUser?<Course/>:<Navigate to="/signup"/>}/>
      {/* <Route path="/courses" element={<Course/>}/> */}
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
      <Toaster/>
    
    </>
  )
}

export default App
