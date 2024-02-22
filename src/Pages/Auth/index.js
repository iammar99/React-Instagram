import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

export default function Auth() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
      </Routes>
    </>
  )
}
