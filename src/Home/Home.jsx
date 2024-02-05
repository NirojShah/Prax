import React, { useEffect, useState } from 'react'
import "../App.css"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Functions/Login'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const data = useSelector(state => state.loginReducer)
    const loggedIn = useSelector(state => state.logoutReducer.value.loggedIn)
    const [login,setLogin] = useState(false)
    const dispatch = useDispatch() 

    useEffect(()=>{
        setLogin(loggedIn)
    },[])

    const handleLogout = ()=>{
        dispatch(logout({}))
        setLogin(loggedIn)
        if(!login){
            navigate("/")
        }
    }

  return (
    <div id="container">
        <nav>
            <h1>Logo</h1>
            <button onClick={handleLogout}>
                Logout
            </button>
        </nav>
    </div>
  )
}

export default Home