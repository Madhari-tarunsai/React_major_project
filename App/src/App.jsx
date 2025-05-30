import React from 'react'
import Login from './Pages/Login/Login'
import Sigin from './Pages/Sigin/Sigin'
import {Routes,Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
    
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path='/sigin' element={<Sigin/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
    </div>
  )
}

export default App