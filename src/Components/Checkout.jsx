import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';

import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase/Config';

const CheckOut = () => {

  const [pedidoid, setPedidoid] = useState('')

  const { carrito, precioTotal, VaciarCarrito } = useContext(CartContext);
  
  const {register, handleSubmit} = useForm();

  const Comprar=(data)=>{

    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal()
    }
      console.log(pedido)

      const pedidosRef = collection(db, 'pedidos');

      addDoc(pedidosRef, pedido)
      .then((doc)=>{
        setPedidoid(doc.id)
        VaciarCarrito();
      })
  }

if(pedidoid){
  return(
    <div className="container">
      <h1 className="main-title">Muchas gracias por tu compra</h1>
      <p>tu nomero de pedido es: {pedidoid}</p>
    </div>
  )
}

  return (
    <div className="container">
    <h1 className="main-title">Finalizar Compra</h1>
    <form className="formulario" onSubmit={handleSubmit(Comprar)}>
      <input type="text" placeholder="nombre" {...register("nombre")}/>
      <input type="email" placeholder="email" {...register("email")} />
      <input type="number" placeholder="telefono" {...register("telefono")} />
      <button className="enviar" type="submit">
        Enviar
      </button>
    </form>
  </div>
  )
}

export default CheckOut