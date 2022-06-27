import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import './Navbar.css'
// https://nestcode.co/en/blog/animate-your-navbar-toggle-in-bootstrap-41
// https://jsfiddle.net/joshmoto/9r8ux6p5/

export default function Navbar() {

  let navigate = useNavigate();

  const goLogin = () => {
    navigate('/login', { replace: true });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand fs-2" href="marvel">HEROES</a> */}
          <Link to="marvel" className='fs-3 text-decoration-none mx-3' style={{ "letterSpacing": "2px", "color": "#f5973d " }}>
            HEROES
          </Link>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <Link to="marvel" className='nav-link'>Marvel</Link>
              </li>
              <li className="nav-item">
                <Link to="dc" className='nav-link'>Dc</Link>
              </li>
              <li className="nav-item">
                <Link to="search" className='nav-link'>Busqueda</Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            <button onClick={goLogin} className="btn btn-primary" type="button">Logout</button>
          </div>
        </div>
      </nav>
    </div>
  )
}





{/* <nav className=" mt-3 navbar navbar-expand-lg bg-light navbar-light p-3 fs-4">
        <div className="container-fluid">
          <NavLink className='navbar-brand'
            to="/"
          ><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg" alt="" width='90px' /></NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                  to="/marvel"
                >Marvel</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                  to="/dc"
                >Dc</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <span className="navbar-text px-5 fw-bold">
                Edwar Cassa
              </span>
              <button type="button" className="btn btn-outline-danger">Cerrar sesion</button>
            </form>
          </div>
        </div>
      </nav> */}
