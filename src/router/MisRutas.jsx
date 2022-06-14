import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Contacto } from '../components/Contacto';
import { Curriculum } from '../components/Curriculum';
import { Inicio } from '../components/Inicio';
import { Footer } from '../components/layout/Footer';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';


export const MisRutas = () => {
    return (
        <BrowserRouter>
            {/* HEADER Y NAVEGACION */}
            <HeaderNav />

            {/* CONTENIDO CENTRAL */}
            <section className="content">
                <Routes>
                    <Route path='/' element={<Navigate to='/inicio' />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/portafolio' element={<Portafolio />} />
                    <Route path='/servicios' element={<Servicios />} />
                    <Route path='/curriculum' element={<Curriculum />} />
                    <Route path='/contacto' element={<Contacto />} />
                </Routes>
            </section>

            {/* FOOTER */}
            <Footer />
        </BrowserRouter>
    )
}
