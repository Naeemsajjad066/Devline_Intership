import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>

    </div>
  )
}

export default App
