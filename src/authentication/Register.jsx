import axios from '../axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {

    let navigator = useNavigate();
    let[regState,setRegState]=useState({
        email:"",password:"",prof_pic:""
    })

    let {email,password,prof_pic} = regState;

    let handleChange=(e)=>{
        let {name,value}=e.target;
        setRegState({...regState,[name]:value})
    }

    let handleSubmit=(e)=>{
        e.preventDefault();
        let payload = {email,password,prof_pic};
        axios.post("http://localhost:4000/registeruser",payload)
        navigator("/login")
        toast.success("Success");
    }

  return (
    <main className='registermain'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className='registerform'>
            
            <div className="form-group">
                <label htmlFor="">Email</label>
                <input type="text" name='email' value={email} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label htmlFor="">Password</label>
                <input type="password" name='password' value={password} onChange={handleChange} />
            </div>
            
            <div className="form-group">
                <label htmlFor="">Profile Pic</label>
                <input type="text" name='prof_pic' value={prof_pic} onChange={handleChange} />
            </div>

            <div className="form-group">
                <button>Submit</button>
            </div>
        </form>
    </main>
  )
}

export default Register
