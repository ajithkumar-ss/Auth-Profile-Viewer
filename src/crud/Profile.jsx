import axios from '../axios'
import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'

const Profile = () => {

    let[state,setState]=useState([])

    let{email,prof_pic}=state

    useEffect(()=>{
        getData()
    },[])

    function getData(){
        axios.get("http://localhost:4000/registeruser")
        .then((Response)=>{
            setState(Response.data)
        })
    }

    console.log(state);
  return (
    <>
      <main className='profilemain'>
        <div>
            <ul>
                <div>
            {
                state.map((data)=>{
                    return(
                        <Fragment key={data.id}>
                        <li >Email: {data.email}</li>
                        <li ><img src={data.prof_pic} alt="image" /></li>
                        </Fragment>
                    )
                })
            }
            </div>
            </ul>
        </div>
      </main>
    </>
  )
}

export default Profile
