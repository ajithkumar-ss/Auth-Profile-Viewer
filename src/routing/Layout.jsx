import React from 'react'
import { Link,NavLink,Outlet } from 'react-router-dom'
import Navbar from '../crud/Navbar'
// import { Toast,Toaster } from 'react-toastify/dist/types'

const Layout = () => {
  return (
    <>
    <Navbar/>
        <main className='sidebar'>
            <div className='layout'>
                <ul>
                    <li><NavLink to="/createuser" style={({isActive})=>{return{ color: isActive?"#311b1a":"" }}}>Create User</NavLink></li>
                    <li><NavLink to="/datauser" style={({isActive})=>{return{ color: isActive?"#311b1a":"" }}}>User</NavLink></li>
                    <li><NavLink to={"/alluser"}style={({isActive})=>{return{ color: isActive?"#311b1a":"" }}}>All User</NavLink></li>
                    <li><NavLink to={"/profile"} style={({isActive})=>{return{ color: isActive?"#311b1a":"" }}}>Profile</NavLink></li>
                </ul>
            </div>
            <Outlet/>
        </main>
    </>
  )
}

export default Layout
