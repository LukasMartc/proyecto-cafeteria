import { NavLink } from "react-router-dom"
import LogoCafeteria from "../images/logo.png"
import React from 'react'

const Navbar = () => {
  return (
      <div className="container-navbar">
        <nav className="navbar">
          <NavLink className="nav-link" to="/">Inicio</NavLink>
          <NavLink className="nav-link">Nosotros</NavLink>
          <NavLink className="nav-link">Blog</NavLink>
        </nav>
        <div>
            <img className="logo" src={LogoCafeteria} alt="Cafe Recontre"/>
        </div>
        <nav className="navbar">
          <NavLink className="nav-link">Menú</NavLink>
          <NavLink className="nav-link">Tienda</NavLink>
          <NavLink className="nav-link" to="/reservas">Reservas</NavLink>
        </nav>
      </div>
  )

}

export default Navbar