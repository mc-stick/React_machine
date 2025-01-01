import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ Item }) => {
  const { carrito, Agregar } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);
  const [Stock, setStock] = useState (false);

  const Restar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
    setStock(false);
  };

  const Sumar = () => {
    cantidad < Item.stock ? setCantidad(cantidad + 1) && setStock(false) : setStock(true);
    
  };

 

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={Item.imagen} className="item-img" alt={Item.titulo} />
        <div>
          <h3 className="titulo">{Item.titulo}</h3>
          <p className="descripcion">{Item.descripcion}</p>
          <p className="categoria"> categoria:{Item.categoria}</p>
          <p className="precio">$ {Item.precio}</p>
          {Stock ? <p className="descripcion" style={{color:'red'}}>Limite debe ser igual o menor al Stock</p>: <div></div>}
          <ItemCount
            Sumar={Sumar}
            Restar={Restar}
            Cantidad={cantidad}
            Add={()=>{Agregar(Item,cantidad)}}
          />
          
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
