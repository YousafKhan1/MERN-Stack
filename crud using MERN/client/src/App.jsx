import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateUser from './CreateUser'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getUser } from './redux/userSlice'
import UpdateUser from './UpdateUser'

function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    const fetchData = async() => {
        try {
            const response = await axios.get('http://localhost:3001');
            dispatch(getUser(response.data));
        } catch(err) {
            console.log(err)
        }
    }
    fetchData();
}, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/edit/:id' element={<UpdateUser />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
