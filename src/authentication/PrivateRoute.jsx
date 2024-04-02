import React from 'react'
import Login from './Login'

const PrivateRoute = (prop) => {
    let token = localStorage.getItem("TOKEN")

    if(token){
        return prop.children
    }else{
        <Login/>
    }
}

export default PrivateRoute
