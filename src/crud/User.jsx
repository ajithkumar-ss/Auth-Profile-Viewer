import { ToastContainer } from 'react-toastify';
import axios from '../axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const User = () => {

    let[userinfo,setUserinfo]=useState([]);


    useEffect(()=>{
      getData()
    },[])

    function getData(){
      axios.get("/users")
        .then((response)=>{
            setUserinfo(response.data)
        })
      }

    let handleDelete=(id)=>{
      axios.delete(`/users/${id}`).then(()=>getData()) 
    }

  return (
    <section className='userBlock'>
          <ToastContainer/>
      <article className='container'> 
        <h1>User</h1>

      <table>
        <thead>
        <tr>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Age</th>
        <th>City</th>
        <th>Update</th>
        <th>Delete</th>
        </tr>
        </thead>

      <tbody>
        {
          userinfo.map((user)=>{
            console.log(user);
            return (
              <tr key={user.id}>
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
              <td><Link to={`/edituser/${user.id}`}><CiEdit /></Link></td>
              <td><span onClick={()=>{handleDelete(user.id)}}><MdDeleteOutline/></span></td>
            </tr>)
          })
        }
      </tbody>

      </table>
      </article>
    </section>
  )
}

export default User
