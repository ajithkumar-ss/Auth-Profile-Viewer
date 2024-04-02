import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from '../axios';
import { MdDeleteOutline } from "react-icons/md";

const EditUser = () => {

  let Navigator = useNavigate();
  let {id} =useParams()
  let [credentials,setCredentials]=useState({
    fname:"",lname:"",age:"",city:""
  });

  let{fname,lname,age,city} = credentials;

  let handleChange=(e)=>{
    let{name,value}=e.target;
    setCredentials({...credentials,[name]:value})
  }

  useEffect(()=>{
    axios.get(`/users/${id}`)
    .then((response)=>{
      console.log(response);
      setCredentials({...credentials,
        fname:response.data.fname,
        lname:response.data.lname,
        age:response.data.age,
        city:response.data.city,      
      })
    })
  },[]);

  let handleSubmit=(e)=>{
    e.preventDefault();
    let payload = {fname,lname,age,city};
    console.log(payload);
    
    axios.put(`./users/${id}`,payload)
    .then(()=>{console.log(payload)
      Navigator("/datauser");
    });
  }

  return (
    <>
    <section className='mainForm'>
      <main className='innerForm'>
      <form action="" className='form' onSubmit={handleSubmit}>
        
        <label className='label'>firstname</label>
        <div className='divv'>
        <input type="text" name="fname" value={fname} onChange={handleChange} />
        </div>

        <label className='label' >lastname</label>
        <div className="divv">
        <input type="text" name="lname" value={lname} onChange={handleChange} />
        </div>
       
        <label className='label'>age</label>
        <div className='divv'>
        <input type="number" name="age" value={age} onChange={handleChange}/>
        </div>

        <label className='label'>city</label>
        <div className='divv'>
        <input type="text" name='city' value={city} onChange={handleChange}/>

        <div >
          <button className='button'>Submit</button>
        </div>
        </div>
      
      </form>
      </main>
    </section>
  </>
  )
}

export default EditUser
