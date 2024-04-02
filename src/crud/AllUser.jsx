import React, { useEffect, useState } from 'react'
import Search from './Search'
import axios from '../axios'
import DisplayUser from './DisplayUser';
import { ToastContainer } from 'react-toastify';

const AllUser = () => {

  let[state,setState]=useState(null);
  let[searchTerm,setSearchTerm]=useState("");

  let handleSearch = (term)=>{
    setSearchTerm(term)
  }

  let fetchUser=async()=>{
    let {data} = await axios.get("./users")
    console.log(data);
    setState(data);
  }

  console.log(state);

  let filterUser = state?.filter(value=>{
    if(searchTerm==""){return value}
    else if(value.fname.toLowerCase().includes(searchTerm.toLowerCase())){
      return value
    }
  }).map(users=> <DisplayUser key={users.id} {...users}/> )

  useEffect(()=>{
    fetchUser()
  },[])

  return (
    <>
    <div className='alluser'>
        <h1>All user</h1>
      <main className='mainall'>
        <Search handleSearch={handleSearch}/>
        <div>
        {
          state==null?"Loading... ":filterUser
        }
        </div>
      </main>
    </div>
    {/* <ToastContainer/> */}
    </>
  )
}

export default AllUser
