import React from 'react'
import { Routes, Route , Navigate } from 'react-router-dom'
import { useAuthContext } from 'Context/AuthContext'

import Auth from './Auth'
import Frontend from './Frontend'
import Dashboard from './Dashboard'

import Footer from 'Components/Footer/Footer'

import PrivateRoute from './PrivateRoutes'
import Header from 'Components/Header'

export default function Index() {

  const {isAuth} = useAuthContext()
  return (
    <>
        <Header/>
      <Routes>
        <Route path='/*' element={!isAuth?<Auth/>:<Navigate to={"/frontend"} />} />
        <Route path='/frontend/*' element={<PrivateRoute Component={Frontend}/>} />
        <Route path='/dashboard/*' element={<PrivateRoute Component={Dashboard}/>} />
      </Routes>
      <Footer />
    </>
  )
}
