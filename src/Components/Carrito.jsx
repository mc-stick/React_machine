import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, VaciarCarrito } = useContext(CartContext);

  const HandleVaciar = () => {
    VaciarCarrito();
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {carrito.length == 0 ? (
        <>
          <h1>No hay nada que mostrar</h1>

          <h1>El Carrito Está Vacio </h1>
        </>
      ) : (
        <>
          {carrito.map((prod) => (
            <div key={prod.id}>
              <h2>{prod.titulo}</h2>
              <p>precio unidad: ${prod.precio}</p>
              <p>cantidad: {prod.cantidad}</p>
              <p>Precio Total: ${prod.precio * prod.cantidad}</p>
              <br />
              <hr />
            </div>
          ))}

          <h2>Precio Total: ${precioTotal()}</h2>
          <button onClick={HandleVaciar}>Vaciar Carrito</button>
          <Link to='/checkout'>Finalizar compra</Link>
        </>
      )}
    </div>
  );
};

export default Carrito;
