import React from 'react'

const DisplayUser = (props) => {
  let{fname,lname,city,age}=props
  return (
    <div>
      <h3>{fname} {lname}</h3>
      <p>{city}</p>
      <p>{age}</p>
    </div>
  )
}

export default DisplayUser
