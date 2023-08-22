import React from 'react'
import ReactDOM from 'react-dom/client'
import NavigationBar from '.'
import './assets/css/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './assets/pages/home'
import Eventos from './assets/pages/eventos'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavigationBar />}>
          <Route path='/' element={<Home/>}>  </Route>
          <Route path='Home' element={<Home/>}>  </Route>
          <Route path='Events' element={<Eventos/>}>  </Route>
          <Route path='*' element={<Home/>}>  </Route>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
