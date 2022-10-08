import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import LogoCafeteria from "../images/logo.png"
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-distributed">
			<div className="footer-left">
				<img className="logo-footer" src={LogoCafeteria} alt="Café Rencontre"/>
				<p className="footer-links">
					<Link to="/" className="nav-footer link-1">Inicio</Link>
					<Link className="nav-footer">Nosotros</Link>
					<Link className="nav-footer">Blog</Link>
					<Link className="nav-footer">Menú</Link>
					<Link className="nav-footer">Tienda</Link>
					<Link className="nav-footer">Reservas</Link>
          <Link className="nav-footer">Contacto</Link>
				</p>
				<p className="footer-company-name">Café Rencontre © 2022</p>
			</div>

			<div className="footer-center">
        <div className="container-footer-center">
          <div className="container-icons">
            <div className="icon-center">
              <FontAwesomeIcon icon={faLocationDot}/>
            </div>
            <p><span>Constitución 123</span> Chillán, Ñuble</p>
          </div>
          <div className="container-icons">
            <div className="icon-center">
              <FontAwesomeIcon icon={faPhone}/>
            </div>
            <p>+569 9582 2546</p>
          </div>
          <div className="container-icons">
            <div className="icon-center">
              <FontAwesomeIcon className="fa-envelope" icon={faEnvelope}/>
            </div>
            <p><Link className="email" to="mailto:support@company.com">caferecontre@correo.com</Link></p>
          </div>
        </div>
			</div>
			<div className="footer-right">
				<p className="footer-company-about">
					<span>Sobre la Cafetería</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>
				<div className="footer-icons">
					<Link className="icons-footer">
            <FontAwesomeIcon icon={faFacebookF}/>
          </Link>
					<Link className="icons-footer">
            <FontAwesomeIcon icon={faTwitter}/>
          </Link>
					<Link className="icons-footer">
            <FontAwesomeIcon icon={faInstagram}/>
          </Link>
					<Link className="icons-footer">
            <FontAwesomeIcon icon={faLinkedinIn}/>
          </Link>
				</div>
			</div>
		</footer>
  )
}
export default Footer