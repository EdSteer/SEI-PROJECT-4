import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import NavBar from './components/NavBar'
import Home from './components/Home'
import RecordIndex from './components/RecordIndex'
import RecordShow from './components/RecordShow'
import Register from './components/Register.js'
import Login from './components/Login'

const App = () => {
  return (
    <Router>
      {/* <NavBar/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/records" element={<RecordIndex/>}/>
        <Route exact path="/records/:id" element={<RecordShow/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>

        
      </Routes>
    </Router>
  )
}

export default App