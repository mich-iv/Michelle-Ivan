import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import Menu from './rutas/menu/menu.tsx'
import Acerca from './rutas/secciones/acerca.tsx'
import Inicio from './rutas/secciones/inicio.tsx'

import '../src/estilos/Menu.css'
import '../src/estilos/Global.css'
import '../src/estilos/Paginas.css'
import Experiencia from './rutas/secciones/experiencia.tsx'

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
        </Routes>
      </div>
    </BrowserRouter>
  </StrictMode>
)
