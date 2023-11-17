import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Component/Header'
import { Footer } from './Component/Footer'
import { Route, Routes } from 'react-router-dom'
import { Inicio } from './Paginas/Inicio'
import { Nosotros } from './Paginas/Nosotros'
import { Servicio } from './Paginas/Servicios'
import { Contacto } from './Paginas/Contacto'

import './App.css'

function App() {

  return (
    <>
    <div className="main">
      <Header/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/servicio' element={<Servicio/>}/>
          <Route path='/contactanos' element={<Contacto/>}/>
        </Routes>

    <Footer/>
    </div>
    </>
  )
}

export default App
