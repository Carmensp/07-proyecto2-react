import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        <strong>Full Stack Developer</strong> en Madrid. Soy Carmen Sánchez y me gustaría 
        aportar mis conocimientos sobre el <strong>desarrollo</strong>.
      </h1>
      <h2>
        Te ayudo a crear tu sitio o aplicación multiplataforma, tener más visibilidad 
        y relevancia en internet. <Link to="/contacto">Contacta conmigo</Link>
      </h2>
      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>A continuación se muestran algunos de mis trabajos de desarrollo software.</p>
        <div className='works'>

        </div>
      </section>
    </div>
  )
}
