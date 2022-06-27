import React from 'react'
import Login from '../pages/Login'
import MainRouter from './MainRouter';
import {
  Routes,
  Route,
} from "react-router-dom";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<MainRouter />} />
      </Routes>
    </>
  )
}
