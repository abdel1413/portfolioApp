import { } from 'react'


import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Home } from './Pages/Home'
// import { About } from './components/About'
// import { Contact } from './components/Contact'
// import { Projects } from './components/Projects'
// import { Skills } from './components/Skills'


function App() {


  return (

   <Routes>
    <Route index element={<Home/>} />
    {/* <Route path='/about' element={<About/>}/>
    <Route path='/skills' element={<Skills/>} />
    <Route path='/projects' element={<Projects/>}/>
    <Route  path='/contact' element={<Contact/>}/> */}
   </Routes>
  
  )
}

export default App
