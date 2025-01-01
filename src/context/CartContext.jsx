import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem('carrito')) || [];


export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const Agregar = (Item, cantidad) => {
    const added = { ...Item, cantidad };

    const nuevoCarrito = [...carrito];
    const en_carrito = nuevoCarrito.find(
      (producto) => producto.id === added.id
    );

    if (en_carrito) {
      console.log("ya esta");
      en_carrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(added);
    }

    setCarrito(nuevoCarrito);
  };

  const cant_carrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const VaciarCarrito = () => {
    setCarrito([]);
  };

  useEffect(() => {
    localStorage.setItem('carrito',JSON.stringify(carrito))
  
  }, [carrito])
  


  return (
    <CartContext.Provider
      value={{ carrito, Agregar, cant_carrito, precioTotal, VaciarCarrito }}
    >
      {children}
    </CartContext.Provider>
  );
};
