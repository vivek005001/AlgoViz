import { useState } from 'react'
import './App.css'
import Nav from './assets/components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sorting from './assets/Pages/Sort/Sorting'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={""}></Route>
          <Route path='/sorting' element={<Sorting />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
