import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'

// Write checkAuth function here
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    // Check the cookies for a cookie called "loggedIn"
    return cookies["loggedIn"] ? true : false;
}
 


// Write ProtectedRoute function here
const ProtectedRoute = ({component: Component}) => {
    return checkAuth() ? <Component /> : <Navigate to='/login' />
}


const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<ProtectedRoute component={Home}/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<ProtectedRoute component={About}/>} />
            <Route path='/car/:id' element={<ProtectedRoute component={Car}/>} />
      </Routes>
    );
};

export default Router;