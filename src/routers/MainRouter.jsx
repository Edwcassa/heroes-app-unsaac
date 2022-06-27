import React from 'react'
import Navbar from '../components/Navbar';
import Marvel from '../pages/tabs/Marvel';
import Dc from '../pages/tabs/Dc';
import {
  Routes,
  Route,
} from "react-router-dom";
import Hero from '../pages/tabs/Hero';
import Busqueda from '../pages/tabs/Busqueda';

export default function MainRouter() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Marvel />} />
        <Route path='/marvel' element={<Marvel />} />
        <Route path='/dc' element={<Dc />} />
        <Route path='/search' element={<Busqueda />} />
        <Route path='/hero/:id' element={<Hero />}/>
      </Routes>
    </>
  )
}
