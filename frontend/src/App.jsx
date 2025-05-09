import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div className='bg-[##f9f9f9]'>
      <Routes>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App