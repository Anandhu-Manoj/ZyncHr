import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Hrportal from './Components/Hrportal'
import Empportal from './Components/Empportal'

function App() {
  

  return (
    <>
   <Header/>
   <Routes>
    <Route  element={<Home/>} path='/'></Route>
    <Route element={<Hrportal/>}  path='/hr'></Route>
    <Route element={<Empportal/>} path='/emp'></Route>
    <Route></Route>

   </Routes>

   
   <Footer/>
    </>
  )
}

export default App
