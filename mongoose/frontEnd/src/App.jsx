 import React from 'react'
 
import { Route, Routes } from 'react-router-dom'
import Singup from './componets/singup/Singup'
import Login from './componets/Login/Login'
import Navbar from './componets/Navbar/Navbar'
import Home from './componets/Home/Home'
 
import MainAccess from './componets/AccesPoin/MainAccess'
import Home2 from './componets/Home/Home2'
 
 const App = () => {
   return (
      <>
      
     <Navbar/>
      <Routes>
        
         <Route path="/" element={<Home/>}></Route>
         <Route path="/Home" element={<Home2/>}></Route>
        <Route path="/sing" element={<Singup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/MainAccess" element={<MainAccess/>}></Route>
        
      </Routes>
      </>
   )
 }
 
 export default App