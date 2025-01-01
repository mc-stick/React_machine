import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidgets = () => {
  const { cant_carrito } = useContext(CartContext);

  return (
    <div>
      <li>
        <Link className="menu-link" to="/Carrito" style={{paddingTop:"15px"}}>
          Carrito
            {cant_carrito() != 0 && <span className="numerito"> {cant_carrito()}</span>}
          
        </Link>
      </li>
    </div>
  );
};

export default CartWidgets;
