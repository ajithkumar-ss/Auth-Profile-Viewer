import axios from '../axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {v4 as uuid} from 'uuid'
const Login = () => {
    let Navigate = useNavigate()
    let[logindata,setLoginData]=useState({
        email:"",password:"",token:uuid()
    })

    let {email,password,token}= logindata

    let handleChange=(e)=>{
        let {name,value} = e.target;
        setLoginData({...logindata,[name]:value})
    }

    let handleSubmit = async(e)=>{
        e.preventDefault();
        let {data} = await axios.get("http://localhost:4000/registeruser")
        let filterData = data.filter((emp)=>{
            return (
                emp.email === logindata.email && emp.password === logindata.password
            )
        })
        console.log(filterData);
        if(filterData.length  >0){
            localStorage.setItem("TOKEN",token)
            Navigate("/datauser")
        }else{
            Navigate("/register")
        }
    }

  return (
    <main className='loginmain'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className='logininput'>
                <label htmlFor="">Email</label>
                <input type="text" name='email' value={email} onChange={handleChange} />
            </div>
            <div className='logininput'>
                <label htmlFor="">Password</label>
                <input type="text" name='password' value={password} onChange={handleChange} />
            </div>
            <div className='loginbutton'>
                <button>Submit</button>
            </div>
        </form>
    </main>
  )
}

export default Login
