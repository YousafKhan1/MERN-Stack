import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3000/auth/verify')
        .then(res=> {
            if(res.data.status) {

            } else {
                navigate('/')
            }
            console.log(res)
        })
    }, [])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard