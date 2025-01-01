import React from "react";
import Item from "./Item";
import {Mayuscula} from '../../helpers/Mayusculas'

const ItemList = ({ producto, titulo }) => {
  return (
    <div>
      {/* <h2 className="main-title"> */}
        {/* {Mayuscula(titulo)}  */}
        {/* Convierte a mayuscula la primera letra + Concatena la variable menos la primera letra */}
        {/* </h2> */}

      <div className="productos">
        {producto.map((item) => (
          
          <Item key={item.id} producto={item}/>
        ))
        
        
        }
      </div>
    </div>
  );
};

export default ItemList;
