import React from 'react'
import '../index.css';
import {useDispatch} from 'react-redux';
import {login, logout} from '../Features/user'


const Login = () => {

    const dispatch = useDispatch()

  return (
    <div className="App">
        <button onClick={()=>{dispatch(login( { name: 'Anirudh', age:22, email:'anirudh2022kadian@gmail.com'}))}}>
            Login
        </button>

        <button onClick={() => {dispatch(logout())}}>
            Logout
        </button>
    </div>
  )
}

export default Login