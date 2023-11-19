import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Component/Header'
import { Footer } from './Component/Footer'
import { Route, Routes } from 'react-router-dom'
import { Inicio } from './Paginas/Inicio'
import { Nosotros } from './Paginas/Nosotros'
import { Servicio } from './Paginas/Servicios'
import { Contacto } from './Paginas/Contacto'
import { Loader } from './Component/loader'

import './App.css'

function App() {

  const [loading, setLoading] = useState(true); // Inicia como true para mostrar el loader al principio

  useEffect(() => {
    setTimeout(() => { 
      setLoading(false); // Cambia loading a false después de 2 segundos (2000ms)
    }, 2000)
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.classList.add('loading-body');
    } else {
      document.body.classList.remove('loading-body');
    }
  }, [loading]);

  return (
    <div className={`main ${loading ? 'loading' : ''}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/servicio' element={<Servicio />} />
            <Route path='/contactanos' element={<Contacto />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
