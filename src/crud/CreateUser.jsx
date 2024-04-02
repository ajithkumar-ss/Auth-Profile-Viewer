import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
const CreateUser = () => {

  let Navigator = useNavigate();
  let [credentials,setCredentials]=useState({
    fname:"",lname:"",age:"",city:""
  });

  let handleChange=(e)=>{
    let{name,value}=e.target;
    setCredentials({...credentials,[name]:value})
  }

  let{fname,lname,age,city} = credentials;

  let handleSubmit=(e)=>{
    e.preventDefault();
    let payload = {fname,lname,age,city};
    console.log(payload);
    
    axios.post('./users',payload)
    .then(()=>{console.log(payload)
      Navigator("/datauser");
      toast.success("Sucess");
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

export default CreateUser
