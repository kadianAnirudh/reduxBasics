import React from 'react'
import '../index.css';
import { useSelector } from 'react-redux';

const Profile = () => {

const user = useSelector((state) => state.user.value)

const kolor = useSelector((state) => state.color.value)

  return (
    <div className="App" style={{color:kolor}}>
        <p> Name : {user.name} </p>
        <p> Age : {user.age} </p>
        <p> E-mail : {user.email}</p>

    </div>
  )
}

export default Profile