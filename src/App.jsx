import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/Route'
import Navbar from './crud/Navbar'
import './global.css'
import Layout from './routing/Layout'

const App = () => {
  return (
    <>
        <RouterProvider router={router} ></RouterProvider>
    </>
  )
}

export default App
