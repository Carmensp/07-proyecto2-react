import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Inicio } from '../components/Inicio'
import { Portafolio} from '../components/Portafolio'
import { Contacto} from '../components/Contacto'
import { Curriculum } from '../components/Curriculum'
import { Servicios } from '../components/Servicios'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'

export const MisRutas = () => {
  return (
    <div>
        <BrowserRouter>
          <HeaderNav/>
          <section className='content'>
            <Routes>
                <Route path='/' element={<Navigate to='/inicio'/>}/>
                <Route path='/inicio' element={<Inicio/>}/>
                <Route path='/portafolio' element={<Portafolio/>}/>
                <Route path='/servicios' element={<Servicios/>}/>
                <Route path='/curriculum' element={<Curriculum/>}/>
                <Route path='/contacto' element={<Contacto/>}/>
            </Routes>
          </section>
          <Footer/>
        </BrowserRouter>
    </div>
  )
}
