import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <header>
      <div className="d-flex justify-content-center align-items-start  flex-column ms-5 me-2 text-light">
        <h1>Marcas de café de elite</h1>
        <p className="paragraph-header">Café Recontre es el lugar donde se puede obtener sabrosas <br/>
          variedades de café, de marcas y tostadoras de élite <br/> mundial a un precio muy asequible.</p>
        <Link>
          <Button variant="outline-light" size="lg">Visita nuestra tienda</Button>
        </Link>  
      </div>
    </header>
  )
}

export default Header