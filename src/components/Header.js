import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="container-h1">
        <h1>Marcas de café de elite</h1>
        <p className="paragraph-header">Café Recontre es el lugar donde se puede obtener sabrosas <br/>
          variedades de café, de marcas y tostadoras de élite <br/> mundial a un precio muy asequible.</p>
        <div className="container-shop">
          <Link className="btn-shop" to="/reservas">
            <p className="text-shop">Visita nuestra tienda</p>
            <span className="arrow-shop">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>    
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header