import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <div className=' text-black  min-h-screen flex flex-col w-full justify-between' >
     
     <Navbar />
    <Routes>
     
      <Route path="/"element={<main>
        <section id='home'><Home /></section>
        <section id='about'><About /></section>
        <section id='contact'><Contact /></section>
        <section id='skills'><Skills /></section>
        <section id='projects'><Project /></section>
      </main>}/>

      <Route path="*" element={<NotFound />} />
     
    </Routes>
   
    <Footer />

    </div>
  )
}

export default App
