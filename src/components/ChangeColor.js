import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {changeTheme} from '../Features/color'
import '../App.css'

const ChangeColor = () => {

const [xolor, setXolor] = useState("")

const dispatch = useDispatch()

  return (
    <div className="App">
        <input type="text" onChange={(e) => setXolor(e.target.value)}/>
        <button onClick={() => dispatch(changeTheme(xolor))}>
            Change Color
        </button>
    </div>
  )
}

export default ChangeColor