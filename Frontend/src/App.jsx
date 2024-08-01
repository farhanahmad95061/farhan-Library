import React from 'react'
import Home from './home/Home'
import Course from './course/Course'
import {Routes,Route} from "react-router-dom"
import Signup from './components/Signup'
import Contact from './contact/Contact1'



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Course/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>

    

    </Routes>
    
    </>
  )
}

export default App
