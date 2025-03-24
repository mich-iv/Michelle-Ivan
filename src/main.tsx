import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Menu from './rutas/menu/menu.tsx'
import Inicio from './rutas/secciones/inicio.tsx'
import Acerca from './rutas/secciones/acerca.tsx'
import Experiencia from './rutas/secciones/experiencia.tsx'
import Agregar from './rutas/datos/agregar.tsx'

import '../src/estilos/Menu.css'
import '../src/estilos/Global.css'
import '../src/estilos/Paginas.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className='menu'>
        <Menu/>
      </div>
      <div className='contenido'>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca/>} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/agregar" element={<Agregar />} />
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
)
