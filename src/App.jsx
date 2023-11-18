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

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout( () => { 
      setLoading(false)
    },2000)
  },[])

  useEffect(() => {
    if (loading) {
      document.body.classList.add('loading-body');
    } else {
      document.body.classList.remove('loading-body');
    }
  }, [loading]);

  return (
    <>
     <div className={`main ${loading ? 'loading' : ''}`}>

      {
        loading ? 
        <Loader/>
        :
        <body>
          
          <Header/>
            <Routes>
              <Route path='/' element={<Inicio/>}/>
              <Route path='/nosotros' element={<Nosotros/>}/>
              <Route path='/servicio' element={<Servicio/>}/>
              <Route path='/contactanos' element={<Contacto/>}/>
            </Routes>
    
          <Footer/>
        
        </body>
      }
    </div>
    </>
  )
}

export default App
