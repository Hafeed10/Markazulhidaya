import React from 'react'
import './App.css'
import Home from './Components/Home'
import Academics from './Components/Academics'
import About from './Components/About'
import Status from './Components/Status'
import Events from './Components/Events'
import CentralLibrary from './Components/CentralLibrary'
import MessageDir from './Components/MessageDir'
import Faculties from './Components/Faculties'
import Departemnts from './Components/Departments'
import Footer from './assets/Footer'

function App() {

  return (
    <>
      <Home/>
      <About/>
      <Academics/>
      <Status/>
      <Events/>
      <CentralLibrary/>
      <MessageDir/>
      <Faculties/>
      <Departemnts/>
      <Footer/>
    </>
  )
}

export default App
