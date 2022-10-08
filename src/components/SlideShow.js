import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import React from 'react'

const SlideShow = ({images}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const amount = images.length;

    const nextImage = () => {
        setCurrentImage(currentImage === amount - 1 ? 0 : currentImage + 1)
    }

    const previusImage = () => {
        setCurrentImage(currentImage === 0 ? amount - 1 : currentImage - 1);
    }

    return (
        <div className='container-imgcoffe'>
            <FontAwesomeIcon
                className='next-image'
                icon={faChevronLeft} 
                onClick={previusImage}
                />
            <figure className='container-slideshow'>
                {images.map((image, index) => {
                    return (
                        <div className={currentImage === index ? "slide active" : "slide"} >
                            {currentImage === index && (
                                <img key={index} src={image} alt="Café Recontre" className='article-coffe1'/>
                            )}
                        </div>
                    )
                })}
            </figure>
            <FontAwesomeIcon
                className='next-image' 
                icon={faChevronRight} 
                onClick={nextImage}
            />
        </div>
    )
}

export default SlideShow