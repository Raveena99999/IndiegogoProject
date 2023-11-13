import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
// import Login from './Login'
// import Signup from './Signup'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
    </div>
  )
}
