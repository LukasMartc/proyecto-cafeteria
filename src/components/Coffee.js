import React from 'react'

const Coffee = ({title, img}) => {
  return (
    <div className='container-type'>
      <div>
        <img src={img} alt="Cafe Expresso"/>
      </div>
      <div className='container-title-type'>
        <h4 className='title-type'>{title}</h4>
        <div>
          <p className='paragraph-type'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.          
          </p>
        </div>
      </div>
    </div>  
  )
}

export default Coffee