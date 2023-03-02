import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<App pagina='home'/>} />
        <Route path='home' element={<App pagina='home'/>} />
        <Route path='habilidades_e_idiomas' element={<App pagina='habilidades_e_idiomas'/>} />
        <Route path='contato' element={<App pagina='contato'/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
