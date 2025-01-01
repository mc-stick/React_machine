import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='producto'>
        <img src={producto.imagen}/>
        <div>
            <h2>{producto.titulo}</h2>
            <p>Precio: ${producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <Link to={`/item/${producto.id}`} className="ver-mas">ver mas</Link>
        </div>
    </div>
  )
}

export default Item