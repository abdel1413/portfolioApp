import { } from 'react'


import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Projects } from './components/Projects'


function App() {


  return (
    
   <Routes>
    <Route index element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>}/>
    <Route  path='/contact' element={<Contact/>}/>
    <Route path='/projects' element={<Projects/>}/>
   </Routes>
  
  )
}

export default App
