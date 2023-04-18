import { useState } from 'react'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Hero from './components/Body/feelInside/hero'
import Change from './components/Body/change/Change'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Hero/>}></Route>
          <Route path='/change' element={<Change/>}></Route>
        </Routes>
        <Footer/>
      </Router>
     
    </div>
  )
}

export default App
