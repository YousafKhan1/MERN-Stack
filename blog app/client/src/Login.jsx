import React, { useEffect, useState } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(res => {
            if(res.data === "Success") {
                window.location.href = "/"
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='signup_container'>
        <div className='signup_form'>
            <h2>Login </h2>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" placeholder='Enter Email'
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" placeholder='********'
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <button className='signup_btn'>Login</button>
            </form>
            <br></br>
            <p>Not Registered?</p>
            <Link to="/register"><button>Signup</button></Link>
        </div>
    </div>
  )
}

export default Login