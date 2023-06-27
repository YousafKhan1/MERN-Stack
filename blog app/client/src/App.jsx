import Navbar from "./Navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./Register"
import Login from "./Login"
import Home from "./Home"
import { createContext, useEffect, useState } from "react"
import axios from "axios"
import CreatePost from "./CreatePost"
import Post from "./Post"
import EditPost from "./EditPost"

export const userContext = createContext()

function App() {
  const [user, setUser] = useState({
    username: null,
    email: null
  })

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3001/')
    .then(user => {
      setUser(user.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <userContext.Provider value={user}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/create" element={<CreatePost />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/editpost/:id" element={<EditPost />}></Route>
      </Routes>
    </BrowserRouter>
    </userContext.Provider>
  )
}

export default App
