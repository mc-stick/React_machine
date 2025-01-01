import React from 'react'

const ItemCount = ({Restar, Sumar, Cantidad, Add}) => {


  return (
    <div>
        <div className="item-count">
            <button onClick={Restar}>-</button>
            <p>{Cantidad}</p>
            <button  onClick={Sumar}>+</button> 
            
        </div>
        <button className="agregar-al-carrito"
        onClick={Add}
        >
            Agregar al Carrito
        </button>
    </div>
  )
}

export default ItemCount