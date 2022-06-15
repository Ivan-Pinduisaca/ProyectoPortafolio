import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy Ivan Pinduisaca, estoy aprendiendo <strong>desarrollo web</strong> en
        la plataforma de Udemy para poder desarrollar todo tipo
        de proyectos web.
      </h1>

      <h2 className='title'>
        Al finalizar aprendere a crear aplicaciones web profesionales. <Link to='/contacto' >Contacta conmigo</Link>
      </h2>

      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son mis practicas de desarrollo web aprendidos en clase</p>

        <ListadoTrabajos limite='2' />
      </section>
    </div>
  )
}
