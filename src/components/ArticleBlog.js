import { Link } from 'react-router-dom'
import SlideShow  from './SlideShow'
import PictureCoffe1 from '../images/articulo-cafe1.jpg'
import PictureCoffe2 from '../images/articulo-cafe2.jpg'
import PictureCoffe3 from '../images/articulo-cafe3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const ArticleBlog = () => {
const images = [PictureCoffe1, PictureCoffe2, PictureCoffe3];

  return (
    <article>
        <div className='article-blog'>
            <div className='container-featured'>
                <h3 className='featured-title'>DESTACADOS</h3>
            </div>
            <div className='content-featured'>
                <SlideShow images={images}/>
                <div className='description-featured'>
                    <p>
                        Si disfrutas el <strong>Café</strong>, no puedes dejar de probar nuestro <strong>Cappuccino</strong> o <strong>Expresso</strong>, asi como los mejores acompañamientos como Galletas o Queques especiales que tenemos para ti.
                    </p>
                    <div className='container-read-blog'>
                        <Link className='btn-read-blog'>
                            Leer más
                            <span className='arrow-read-blog'>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </span>    
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default ArticleBlog